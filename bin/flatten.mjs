#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, extname } from 'path';
import yaml from 'js-yaml';

function getArg(args, flag) {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : null;
}

function isPlainObject(v) {
  return v !== null && typeof v === 'object' && !Array.isArray(v);
}

function resolveRef(ref, root) {
  if (typeof ref !== 'string' || !ref.startsWith('#/')) return null;
  const parts = ref.slice(2).split('/').map(p => p.replace(/~1/g, '/').replace(/~0/g, '~'));
  let node = root;
  for (const p of parts) {
    if (!isPlainObject(node) && !Array.isArray(node)) return null;
    node = node[p];
    if (node === undefined) return null;
  }
  return node;
}

function deepClone(v) {
  if (Array.isArray(v)) return v.map(deepClone);
  if (isPlainObject(v)) {
    const o = {};
    for (const k of Object.keys(v)) o[k] = deepClone(v[k]);
    return o;
  }
  return v;
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function mergeSchemas(target, source) {
  for (const key of Object.keys(source)) {
    const sv = source[key];
    if (!(key in target)) {
      target[key] = deepClone(sv);
      continue;
    }
    const tv = target[key];
    if (key === 'required' && Array.isArray(tv) && Array.isArray(sv)) {
      target[key] = uniq([...tv, ...sv]);
    } else if (key === 'properties' && isPlainObject(tv) && isPlainObject(sv)) {
      for (const pk of Object.keys(sv)) {
        if (!(pk in tv)) tv[pk] = deepClone(sv[pk]);
      }
    } else if (isPlainObject(tv) && isPlainObject(sv)) {
      mergeSchemas(tv, sv);
    }
  }
  return target;
}

// --- pass 1: rename oneOf/anyOf to allOf at top-level schemas, their direct
//     properties, and request/response body schemas + their properties ---

function renameVariantsInNode(node) {
  if (!isPlainObject(node)) return;
  for (const keyword of ['oneOf', 'anyOf']) {
    if (Array.isArray(node[keyword])) {
      node.allOf = node[keyword];
      delete node[keyword];
    }
  }
  if (isPlainObject(node.properties)) {
    for (const prop of Object.values(node.properties)) {
      if (!isPlainObject(prop)) continue;
      for (const keyword of ['oneOf', 'anyOf']) {
        if (Array.isArray(prop[keyword])) {
          prop.allOf = prop[keyword];
          delete prop[keyword];
        }
      }
    }
  }
}

function renameVariants(doc) {
  if (isPlainObject(doc.components) && isPlainObject(doc.components.schemas)) {
    for (const schema of Object.values(doc.components.schemas)) {
      renameVariantsInNode(schema);
    }
  }
  if (isPlainObject(doc.paths)) {
    for (const pathObj of Object.values(doc.paths)) {
      if (!isPlainObject(pathObj)) continue;
      for (const method of Object.values(pathObj)) {
        if (!isPlainObject(method)) continue;
        const reqContent = method.requestBody?.content;
        if (isPlainObject(reqContent)) {
          for (const mediaType of Object.values(reqContent)) {
            if (isPlainObject(mediaType?.schema)) {
              renameVariantsInNode(mediaType.schema);
            }
          }
        }
        if (isPlainObject(method.responses)) {
          for (const resp of Object.values(method.responses)) {
            if (!isPlainObject(resp?.content)) continue;
            for (const mediaType of Object.values(resp.content)) {
              if (isPlainObject(mediaType?.schema)) {
                renameVariantsInNode(mediaType.schema);
              }
            }
          }
        }
      }
    }
  }
}

// --- pass 1b: strip misplaced schema keywords that landed as siblings inside a
//     `properties` map. Some upstream OpenAPI specs have an indentation bug
//     where e.g. `type: object` of the outer schema is duplicated one level
//     too deep, ending up as a child of `properties` instead of the schema
//     itself. A legitimate property definition is always an object; scalar
//     values for these keys are always mistakes. ---

const SCHEMA_KEYWORD_SIBLINGS = new Set([
  'type', 'required', 'description', 'title', 'format',
  'minItems', 'maxItems', 'minimum', 'maximum', 'default',
  'nullable', 'readOnly', 'writeOnly', 'deprecated',
  'additionalProperties', 'patternProperties',
]);

function stripMisplacedSchemaKeywords(node, stats, path = '') {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      stripMisplacedSchemaKeywords(node[i], stats, `${path}/${i}`);
    }
    return;
  }
  if (!isPlainObject(node)) return;
  if (isPlainObject(node.properties)) {
    for (const key of Object.keys(node.properties)) {
      if (!SCHEMA_KEYWORD_SIBLINGS.has(key)) continue;
      const val = node.properties[key];
      if (!isPlainObject(val) && !Array.isArray(val)) {
        delete node.properties[key];
        stats.stripped.push(`${path}/properties/${key}=${JSON.stringify(val)}`);
      }
    }
    // Recurse into each property VALUE as a schema node, not into the
    // properties map itself - otherwise a property literally named
    // `properties` gets treated as another properties-map.
    for (const [pk, pv] of Object.entries(node.properties)) {
      stripMisplacedSchemaKeywords(pv, stats, `${path}/properties/${pk}`);
    }
  }
  for (const k of Object.keys(node)) {
    if (k === 'properties') continue;
    stripMisplacedSchemaKeywords(node[k], stats, `${path}/${k}`);
  }
}

// --- pass 1c: opaque `type: object` schemas with no defined structure
//     are unqueryable as SQL columns. Convert them to `type: string` so
//     stackql exposes them as JSON-blob columns. Triggers only when the
//     schema has none of: properties, additionalProperties, patternProperties,
//     allOf, oneOf, anyOf, $ref. ---

const OPAQUE_OBJECT_STRUCTURE_KEYS = [
  'properties', 'additionalProperties', 'patternProperties',
  'allOf', 'oneOf', 'anyOf', '$ref',
];

function convertOpaqueObjectsToStrings(node, stats, path = '') {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) {
      convertOpaqueObjectsToStrings(node[i], stats, `${path}/${i}`);
    }
    return;
  }
  if (!isPlainObject(node)) return;

  if (node.type === 'object' && !OPAQUE_OBJECT_STRUCTURE_KEYS.some(k => k in node)) {
    node.type = 'string';
    const note = '(opaque JSON object)';
    node.description = node.description ? `${node.description} ${note}` : note;
    stats.converted.push(path || '<root>');
    return;
  }

  for (const k of Object.keys(node)) {
    convertOpaqueObjectsToStrings(node[k], stats, `${path}/${k}`);
  }
}

// --- pass 2: flatten allOf everywhere ---

function flattenAllOf(allOfArr, root, seenRefs) {
  const merged = {};
  for (const member of allOfArr) {
    let resolved = member;
    if (isPlainObject(member) && typeof member.$ref === 'string') {
      if (seenRefs.has(member.$ref)) continue;
      const target = resolveRef(member.$ref, root);
      if (!target) {
        merged.$ref_unresolved = merged.$ref_unresolved || [];
        merged.$ref_unresolved.push(member.$ref);
        continue;
      }
      const nextSeen = new Set(seenRefs);
      nextSeen.add(member.$ref);
      resolved = walkAllOf(deepClone(target), root, nextSeen);
    } else {
      resolved = walkAllOf(deepClone(member), root, seenRefs);
    }
    if (isPlainObject(resolved)) {
      if (Array.isArray(resolved.allOf)) {
        const inner = flattenAllOf(resolved.allOf, root, seenRefs);
        delete resolved.allOf;
        mergeSchemas(resolved, inner);
      }
      mergeSchemas(merged, resolved);
    }
  }
  return merged;
}

function walkAllOf(node, root, seenRefs) {
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) node[i] = walkAllOf(node[i], root, seenRefs);
    return node;
  }
  if (!isPlainObject(node)) return node;

  if (Array.isArray(node.allOf)) {
    const flattened = flattenAllOf(node.allOf, root, seenRefs);
    delete node.allOf;
    mergeSchemas(node, flattened);
  }

  for (const k of Object.keys(node)) {
    node[k] = walkAllOf(node[k], root, seenRefs);
  }
  return node;
}

// --- orchestration ---

function processFile(filePath, verbose) {
  const raw = readFileSync(filePath, 'utf8');
  const doc = yaml.load(raw);
  if (!doc || typeof doc !== 'object') {
    if (verbose) console.log(`Skipping ${filePath}: not a YAML object`);
    return false;
  }
  const countOccurrences = (s, keyword) => s.match(new RegExp(`"${keyword}":`, 'g'))?.length || 0;
  const docStr = JSON.stringify(doc);
  const allOfBefore = countOccurrences(docStr, 'allOf');
  const oneOfBefore = countOccurrences(docStr, 'oneOf');
  const anyOfBefore = countOccurrences(docStr, 'anyOf');

  // pass 1: rename oneOf/anyOf to allOf at the right locations
  renameVariants(doc);

  // pass 1b: strip misplaced schema keywords inside `properties` maps
  const stripStats = { stripped: [] };
  stripMisplacedSchemaKeywords(doc, stripStats);

  // pass 1c: convert opaque object schemas (no structure keys) to type:string
  const opaqueStats = { converted: [] };
  convertOpaqueObjectsToStrings(doc, opaqueStats);

  // pass 2: flatten all allOf everywhere
  walkAllOf(doc, doc, new Set());

  const docStrAfter = JSON.stringify(doc);
  const allOfAfter = countOccurrences(docStrAfter, 'allOf');
  const oneOfAfter = countOccurrences(docStrAfter, 'oneOf');
  const anyOfAfter = countOccurrences(docStrAfter, 'anyOf');

  const out = yaml.dump(doc, { lineWidth: -1, noRefs: true });
  writeFileSync(filePath, out, 'utf8');
  if (verbose || allOfBefore > 0 || oneOfBefore > 0 || anyOfBefore > 0 || stripStats.stripped.length > 0 || opaqueStats.converted.length > 0) {
    console.log(`${filePath}: flattened ${allOfBefore - allOfAfter} allOf, ${oneOfBefore - oneOfAfter} oneOf, ${anyOfBefore - anyOfAfter} anyOf (${allOfAfter}/${oneOfAfter}/${anyOfAfter} remaining); stripped ${stripStats.stripped.length} misplaced schema keyword(s); converted ${opaqueStats.converted.length} opaque object(s) to string`);
    if (verbose && stripStats.stripped.length > 0) {
      for (const s of stripStats.stripped) console.log(`  - strip: ${s}`);
    }
    if (verbose && opaqueStats.converted.length > 0) {
      for (const s of opaqueStats.converted) console.log(`  - opaque: ${s}`);
    }
  }
  return true;
}

function main() {
  const args = process.argv.slice(2);
  const apiDir = getArg(args, '--api-dir');
  const verbose = args.includes('--verbose');

  if (!apiDir) {
    console.error('Error: Missing required arguments');
    console.error('Usage: node flatten.mjs --api-dir DIR [--verbose]');
    process.exit(1);
  }

  const stat = statSync(apiDir);
  if (!stat.isDirectory()) {
    console.error(`Error: ${apiDir} is not a directory`);
    process.exit(1);
  }

  const entries = readdirSync(apiDir).filter(f => {
    const ext = extname(f).toLowerCase();
    return ext === '.yaml' || ext === '.yml';
  });

  if (entries.length === 0) {
    console.log(`No YAML files found in ${apiDir}`);
    return;
  }

  console.log(`Flattening allOf/oneOf/anyOf in ${entries.length} file(s) under ${apiDir}`);
  let processed = 0;
  for (const f of entries) {
    const full = join(apiDir, f);
    try {
      if (processFile(full, verbose)) processed++;
    } catch (err) {
      console.error(`Error processing ${full}: ${err.message}`);
      process.exit(1);
    }
  }
  console.log(`Done. Processed ${processed} file(s).`);
}

main();
