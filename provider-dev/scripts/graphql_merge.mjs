#!/usr/bin/env node
// graphql_merge.mjs
//
// Shims hand-authored GitHub GraphQL operations (provider-dev/source-graphql/)
// into the GENERATED provider under provider-dev/openapi/src/github/<version>/.
// Runs after `generate-provider`; idempotent (previous shims are stripped
// before re-adding, keyed on the `x-stackql-protocol: graphql` marker).
//
// For each op spec this writes:
//   paths./graphql?resource=<resource>.post
//                                    - an operation carrying x-stackQL-graphQL
//                                      (url, httpVerb, query template,
//                                      responseSelection, cursor) plus the
//                                      declared parameters and a response
//                                      schema built from `selection` +
//                                      `rowSchema` (so DESCRIBE and the docgen
//                                      Fields table see the row columns)
//   components.x-stackQL-resources.<resource>
//                                    - a select-only resource whose `list`
//                                      method refs the operation; objectKey is
//                                      the dotted form of `selection`
//
// Why the odd path key: stackql builds the request URL from `servers` + the
// path key (x-stackQL-graphQL.url is not used for routing), and OpenAPI needs
// a unique path+verb per operation. GitHub serves every GraphQL query from
// POST /graphql, so each op gets `/graphql?resource=<name>` - any-sdk's query
// router matches on the query pairs (the same idiom the aws provider uses for
// `/?Action=...` keys) and the GraphQL reader strips the query string before
// the request goes on the wire, so GitHub sees a plain POST /graphql.
//
// Services named in manifest.services that do not exist yet are created from
// scratch (and registered in provider.yaml); REST services are edited in place.
//
// Usage: node provider-dev/scripts/graphql_merge.mjs [--provider-dir provider-dev/openapi/src/github/v00.00.00000]
//                                                   [--source-dir provider-dev/source-graphql] [--verbose]

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, join, dirname } from 'path';
import yaml from 'js-yaml';

function getArg(flag, fallback) {
  const i = process.argv.indexOf(flag);
  return i === -1 ? fallback : (process.argv[i + 1] ?? fallback);
}
const providerDir = resolve(getArg('--provider-dir', 'provider-dev/openapi/src/github/v00.00.00000'));
const sourceDir = resolve(getArg('--source-dir', 'provider-dev/source-graphql'));
const verbose = process.argv.includes('--verbose');

const PROTOCOL_MARKER = 'x-stackql-protocol';
const PROVIDER_ID = 'github';
const VERSION = providerDir.split(/[\\/]/).pop();

const loadYaml = (p) => yaml.load(readFileSync(p, 'utf8'));
const dumpYaml = (doc) => yaml.dump(doc, { lineWidth: -1, noRefs: true, quotingType: "'" });

const manifest = loadYaml(join(sourceDir, 'manifest.yaml'));
const graphqlUrl = manifest.graphql_url;
if (!graphqlUrl) throw new Error('manifest.yaml: graphql_url is required');

// --- helpers ---------------------------------------------------------------

// '$.data.repository.discussions.nodes' -> ['data','repository','discussions','nodes']
function selectionSegments(selection) {
  if (!selection.startsWith('$.')) throw new Error(`selection must start with '$.': ${selection}`);
  const segs = selection.slice(2).split('.');
  if (segs.some(s => !s || /[\[\]]/.test(s))) {
    throw new Error(`selection must be a plain dotted path without [*] (it is appended automatically): ${selection}`);
  }
  return segs;
}

// Build the nested response schema for a selection path: every segment is an
// object property, the last one is the row array. When a page_info cursor is
// declared, a `pageInfo` sibling is added next to the row array so the
// schema matches what the query actually returns.
function buildResponseSchema(selection, rowSchema, cursor) {
  const segs = selectionSegments(selection);
  const leafName = segs[segs.length - 1];
  const connection = {
    type: 'object',
    properties: {
      [leafName]: { type: 'array', items: rowSchema },
    },
  };
  if (cursor && cursor.strategy === 'page_info') {
    connection.properties.pageInfo = {
      type: 'object',
      properties: {
        endCursor: { type: 'string' },
        hasNextPage: { type: 'boolean' },
      },
    };
  }
  let schema = connection;
  for (let i = segs.length - 2; i >= 0; i--) {
    schema = { type: 'object', properties: { [segs[i]]: schema } };
  }
  return schema;
}

function buildCursor(op) {
  if (!op.cursor) {
    // Single page: any-sdk's default cursor_after strategy treats a failed
    // jsonpath lookup as EOF, so point it at a key that never exists.
    return { jsonPath: '$.data.__no_cursor' };
  }
  const c = { ...op.cursor };
  if (c.strategy === 'page_info' && !c.terminateOnJsonPath) {
    throw new Error(`${op.resource}: page_info cursor requires terminateOnJsonPath`);
  }
  if (!c.jsonPath && c.strategy !== 'offset') {
    throw new Error(`${op.resource}: cursor.jsonPath is required for strategy ${c.strategy || 'cursor_after'}`);
  }
  return c;
}

function buildOperation(op) {
  return {
    operationId: `graphql/${op.service}/${op.resource}/list`,
    summary: op.title,
    description: op.description,
    'x-stackQL-graphQL': {
      url: graphqlUrl,
      httpVerb: 'POST',
      responseSelection: { jsonPath: `${op.selection}[*]` },
      cursor: buildCursor(op),
      query: op.query,
    },
    [PROTOCOL_MARKER]: 'graphql',
    externalDocs: {
      description: 'GitHub GraphQL API documentation',
      url: 'https://docs.github.com/graphql',
    },
    parameters: op.parameters ?? [],
    responses: {
      '200': {
        description: 'Response',
        content: {
          'application/json': {
            schema: buildResponseSchema(op.selection, op.rowSchema, op.cursor),
          },
        },
      },
    },
  };
}

function buildResource(op, pathKey) {
  const methodRef = `#/components/x-stackQL-resources/${op.resource}/methods/list`;
  return {
    id: `${PROVIDER_ID}.${op.service}.${op.resource}`,
    name: op.resource,
    title: op.title,
    methods: {
      list: {
        operation: { $ref: `#/paths/${pathKey.replace(/\//g, '~1')}/post` },
        response: {
          mediaType: 'application/json',
          openAPIDocKey: '200',
          objectKey: op.selection,
        },
        [PROTOCOL_MARKER]: 'graphql',
      },
    },
    sqlVerbs: {
      select: [{ $ref: methodRef }],
      insert: [],
      update: [],
      delete: [],
      replace: [],
    },
  };
}

function newServiceDoc(serviceName, meta) {
  return {
    openapi: '3.0.3',
    info: {
      title: meta.title ?? `${serviceName} API`,
      description: meta.description ?? '',
      version: VERSION,
    },
    servers: [{ url: 'https://api.github.com' }],
    paths: {},
    components: { schemas: {}, 'x-stackQL-resources': {} },
  };
}

// Remove every operation / resource carrying the protocol marker so a re-run
// starts from the REST-only state of the service.
function stripPreviousShims(doc) {
  let stripped = 0;
  for (const [p, pathItem] of Object.entries(doc.paths ?? {})) {
    for (const [verb, op] of Object.entries(pathItem ?? {})) {
      if (op && typeof op === 'object' && op[PROTOCOL_MARKER] === 'graphql') {
        delete pathItem[verb];
        stripped++;
      }
    }
    if (pathItem && Object.keys(pathItem).length === 0) delete doc.paths[p];
  }
  const resources = doc.components?.['x-stackQL-resources'] ?? {};
  for (const [name, res] of Object.entries(resources)) {
    const methods = res?.methods ?? {};
    const names = Object.keys(methods);
    if (names.length && names.every(m => methods[m]?.[PROTOCOL_MARKER] === 'graphql')) {
      delete resources[name];
    }
  }
  return stripped;
}

// --- main ------------------------------------------------------------------

const ops = (manifest.ops ?? []).map(rel => {
  const op = loadYaml(join(sourceDir, rel));
  for (const k of ['service', 'resource', 'title', 'description', 'selection', 'query', 'rowSchema']) {
    if (!op[k]) throw new Error(`${rel}: missing required field '${k}'`);
  }
  return op;
});

const byService = new Map();
for (const op of ops) {
  if (!byService.has(op.service)) byService.set(op.service, []);
  byService.get(op.service).push(op);
}

const providerYamlPath = join(providerDir, 'provider.yaml');
const provider = loadYaml(providerYamlPath);
let providerChanged = false;
const summary = [];

for (const [serviceName, serviceOps] of byService) {
  const servicePath = join(providerDir, 'services', `${serviceName}.yaml`);
  let doc;
  let created = false;
  if (existsSync(servicePath)) {
    doc = loadYaml(servicePath);
  } else {
    const meta = manifest.services?.[serviceName];
    if (!meta) {
      throw new Error(`service '${serviceName}' does not exist under ${providerDir}/services and is not declared in manifest.services`);
    }
    doc = newServiceDoc(serviceName, meta);
    created = true;
  }
  doc.paths ??= {};
  doc.components ??= {};
  doc.components['x-stackQL-resources'] ??= {};

  const stripped = stripPreviousShims(doc);

  for (const op of serviceOps) {
    const pathKey = `/graphql?resource=${op.resource}`;
    if (doc.paths[pathKey]?.post) {
      throw new Error(`${serviceName}: path ${pathKey} already has a non-GraphQL POST operation`);
    }
    if (doc.components['x-stackQL-resources'][op.resource]) {
      throw new Error(`${serviceName}: resource '${op.resource}' already exists as a REST resource - pick another name`);
    }
    doc.paths[pathKey] = { post: buildOperation(op) };
    doc.components['x-stackQL-resources'][op.resource] = buildResource(op, pathKey);
    if (verbose) console.log(`${serviceName}: shimmed ${op.resource} (${pathKey})`);
  }

  // Keep resources sorted so REST + GraphQL interleave deterministically.
  const sorted = {};
  for (const k of Object.keys(doc.components['x-stackQL-resources']).sort()) {
    sorted[k] = doc.components['x-stackQL-resources'][k];
  }
  doc.components['x-stackQL-resources'] = sorted;

  writeFileSync(servicePath, dumpYaml(doc));

  if (!provider.providerServices?.[serviceName]) {
    const meta = manifest.services?.[serviceName] ?? {};
    provider.providerServices[serviceName] = {
      id: `${serviceName}:${VERSION}`,
      name: serviceName,
      preferred: true,
      service: { $ref: `${PROVIDER_ID}/${VERSION}/services/${serviceName}.yaml` },
      title: meta.title ?? `${serviceName} API`,
      version: VERSION,
      description: meta.description ?? '',
    };
    providerChanged = true;
  }
  summary.push({ service: serviceName, created, stripped, added: serviceOps.map(o => o.resource) });
}

if (providerChanged) {
  // Keep providerServices sorted by key like the generator does.
  const sortedServices = {};
  for (const k of Object.keys(provider.providerServices).sort()) sortedServices[k] = provider.providerServices[k];
  provider.providerServices = sortedServices;
  writeFileSync(providerYamlPath, dumpYaml(provider));
}

console.log(JSON.stringify({ providerDir, providerYamlUpdated: providerChanged, services: summary }, null, 2));
