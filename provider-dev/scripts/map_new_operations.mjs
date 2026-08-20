#!/usr/bin/env node
// map_new_operations.mjs
//
// Fills in stackql_resource_name / stackql_method_name / stackql_verb /
// stackql_object_key for operations in provider-dev/config/all_services.csv
// that `generate-mappings` (analyze) left unmapped after a spec refresh.
// Mappings are recorded here as data so a refresh is a reviewed diff rather
// than a hand edit of the CSV. Rows that are already mapped are left alone.
//
// Usage: node provider-dev/scripts/map_new_operations.mjs [--csv provider-dev/config/all_services.csv]

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve, join, extname } from 'path';
import yaml from 'js-yaml';

const csvArgIdx = process.argv.indexOf('--csv');
const csvPath = resolve(csvArgIdx === -1 ? 'provider-dev/config/all_services.csv' : process.argv[csvArgIdx + 1]);
const srcArgIdx = process.argv.indexOf('--source-dir');
const sourceDir = resolve(srcArgIdx === -1 ? 'provider-dev/source' : process.argv[srcArgIdx + 1]);

// Collect every operationId present in the split specs. `analyze` carries
// previously mapped rows forward even when the operation has been removed
// upstream, so rows not in this set are pruned (and reported).
// operationId -> { filename, path, verb } so rows whose path moved upstream
// (analyze keeps the stale path for an already-mapped operationId) can be
// resynced in place.
const liveOps = new Map();
for (const f of readdirSync(sourceDir)) {
  if (!['.yaml', '.yml'].includes(extname(f).toLowerCase())) continue;
  const doc = yaml.load(readFileSync(join(sourceDir, f), 'utf8'));
  for (const [p, pathItem] of Object.entries(doc?.paths ?? {})) {
    for (const [verb, op] of Object.entries(pathItem ?? {})) {
      if (op && typeof op === 'object' && typeof op.operationId === 'string') {
        liveOps.set(op.operationId, { filename: f, path: p, verb });
      }
    }
  }
}

// operationId -> [resource, method, verb, objectKey]
const M = {
  // actions - concurrency groups (2026-08 spec)
  'actions/list-concurrency-groups-for-repository': ['concurrency_groups', 'list_concurrency_groups_for_repository', 'select', '$.concurrency_groups'],
  'actions/get-concurrency-group-for-repository': ['concurrency_groups', 'get_concurrency_group_for_repository', 'select', ''],
  'actions/list-concurrency-groups-for-workflow-run': ['workflow_run_concurrency_groups', 'list_concurrency_groups_for_workflow_run', 'select', '$.concurrency_groups'],

  // agents - secrets / variables (mirrors the actions service layout)
  'agents/list-org-secrets': ['secrets', 'list_org_secrets', 'select', '$.secrets'],
  'agents/get-org-public-key': ['public_keys', 'get_org_public_key', 'select', ''],
  'agents/get-org-secret': ['secrets', 'get_org_secret', 'select', ''],
  'agents/create-or-update-org-secret': ['secrets', 'create_or_update_org_secret', 'insert', ''],
  'agents/delete-org-secret': ['secrets', 'delete_org_secret', 'delete', ''],
  'agents/list-selected-repos-for-org-secret': ['repos_for_secret', 'list_selected_repos_for_org_secret', 'select', '$.repositories'],
  'agents/set-selected-repos-for-org-secret': ['repos_for_secret', 'set_selected_repos_for_org_secret', 'replace', ''],
  'agents/add-selected-repo-to-org-secret': ['repos_for_secret', 'add_selected_repo_to_org_secret', 'insert', ''],
  'agents/remove-selected-repo-from-org-secret': ['repos_for_secret', 'remove_selected_repo_from_org_secret', 'delete', ''],
  'agents/list-org-variables': ['variables', 'list_org_variables', 'select', '$.variables'],
  'agents/create-org-variable': ['variables', 'create_org_variable', 'insert', ''],
  'agents/get-org-variable': ['variables', 'get_org_variable', 'select', ''],
  'agents/update-org-variable': ['variables', 'update_org_variable', 'update', ''],
  'agents/delete-org-variable': ['variables', 'delete_org_variable', 'delete', ''],
  'agents/list-selected-repos-for-org-variable': ['repos_for_org_variable', 'list_selected_repos_for_org_variable', 'select', '$.repositories'],
  'agents/set-selected-repos-for-org-variable': ['repos_for_org_variable', 'set_selected_repos_for_org_variable', 'replace', ''],
  'agents/add-selected-repo-to-org-variable': ['repos_for_org_variable', 'add_selected_repo_to_org_variable', 'insert', ''],
  'agents/remove-selected-repo-from-org-variable': ['repos_for_org_variable', 'remove_selected_repo_from_org_variable', 'delete', ''],
  'agents/list-repo-organization-secrets': ['repo_org_secrets', 'list_repo_organization_secrets', 'select', '$.secrets'],
  'agents/list-repo-organization-variables': ['repo_org_variables', 'list_repo_organization_variables', 'select', '$.variables'],
  'agents/list-repo-secrets': ['secrets', 'list_repo_secrets', 'select', '$.secrets'],
  'agents/get-repo-public-key': ['public_keys', 'get_repo_public_key', 'select', ''],
  'agents/get-repo-secret': ['secrets', 'get_repo_secret', 'select', ''],
  'agents/create-or-update-repo-secret': ['secrets', 'create_or_update_repo_secret', 'insert', ''],
  'agents/delete-repo-secret': ['secrets', 'delete_repo_secret', 'delete', ''],
  'agents/list-repo-variables': ['variables', 'list_repo_variables', 'select', '$.variables'],
  'agents/create-repo-variable': ['variables', 'create_repo_variable', 'insert', ''],
  'agents/get-repo-variable': ['variables', 'get_repo_variable', 'select', ''],
  'agents/update-repo-variable': ['variables', 'update_repo_variable', 'update', ''],
  'agents/delete-repo-variable': ['variables', 'delete_repo_variable', 'delete', ''],

  // agent_tasks - create-task moved under /agents/repos/{owner}/{repo}/tasks
  'agent-tasks/create-task-in-repo': ['repo_tasks', 'create_task_in_repo', 'insert', ''],

  // billing
  'billing/get-github-billing-ai-credit-usage-report-org': ['org_ai_credit_usage', 'get_github_billing_ai_credit_usage_report_org', 'select', '$.usageItems'],
  'billing/get-github-billing-ai-credit-usage-report-user': ['ai_credit_usage', 'get_github_billing_ai_credit_usage_report_user', 'select', '$.usageItems'],
  'billing/create-organization-budget': ['org_budgets', 'create_organization_budget', 'insert', ''],

  // code_quality (new service)
  'code-quality/list-findings-for-repo': ['findings', 'list_findings_for_repo', 'select', ''],
  'code-quality/get-finding': ['findings', 'get_finding', 'select', ''],
  'code-quality/get-setup': ['setup', 'get_setup', 'select', ''],
  'code-quality/update-setup': ['setup', 'update_setup', 'update', ''],

  // copilot
  'copilot/copilot-enterprise-repos-one-day-report': ['copilot_repos_one_day_report', 'copilot_enterprise_repos_one_day_report', 'select', ''],
  'copilot/copilot-enterprise-user-teams-one-day-report': ['copilot_user_teams_one_day_report', 'copilot_enterprise_user_teams_one_day_report', 'select', ''],
  'copilot/set-enterprise-coding-agent-policy': ['coding_agent_policy', 'set_enterprise_coding_agent_policy', 'replace', ''],
  'copilot/add-organizations-to-enterprise-coding-agent-policy': ['coding_agent_policy_orgs', 'add_organizations_to_enterprise_coding_agent_policy', 'insert', ''],
  'copilot/remove-organizations-from-enterprise-coding-agent-policy': ['coding_agent_policy_orgs', 'remove_organizations_from_enterprise_coding_agent_policy', 'delete', ''],
  'copilot/copilot-organization-repos-one-day-report': ['org_copilot_repos_one_day_report', 'copilot_organization_repos_one_day_report', 'select', ''],
  'copilot/copilot-organization-user-teams-one-day-report': ['org_copilot_user_teams_one_day_report', 'copilot_organization_user_teams_one_day_report', 'select', ''],
  'copilot/get-copilot-cloud-agent-configuration': ['repo_cloud_agent_configuration', 'get_copilot_cloud_agent_configuration', 'select', ''],

  // copilot_spaces (new service) - org and user scoped methods share a resource
  'copilot-spaces/list-for-org': ['spaces', 'list_for_org', 'select', '$.spaces'],
  'copilot-spaces/create-for-org': ['spaces', 'create_for_org', 'insert', ''],
  'copilot-spaces/get-for-org': ['spaces', 'get_for_org', 'select', ''],
  'copilot-spaces/update-for-org': ['spaces', 'update_for_org', 'replace', ''],
  'copilot-spaces/delete-for-org': ['spaces', 'delete_for_org', 'delete', ''],
  'copilot-spaces/list-collaborators-for-org': ['collaborators', 'list_collaborators_for_org', 'select', '$.collaborators'],
  'copilot-spaces/add-collaborator-for-org': ['collaborators', 'add_collaborator_for_org', 'insert', ''],
  'copilot-spaces/update-collaborator-for-org': ['collaborators', 'update_collaborator_for_org', 'replace', ''],
  'copilot-spaces/remove-collaborator-for-org': ['collaborators', 'remove_collaborator_for_org', 'delete', ''],
  'copilot-spaces/list-resources-for-org': ['resources', 'list_resources_for_org', 'select', '$.resources'],
  'copilot-spaces/create-resource-for-org': ['resources', 'create_resource_for_org', 'insert', ''],
  'copilot-spaces/get-resource-for-org': ['resources', 'get_resource_for_org', 'select', ''],
  'copilot-spaces/update-resource-for-org': ['resources', 'update_resource_for_org', 'replace', ''],
  'copilot-spaces/delete-resource-for-org': ['resources', 'delete_resource_for_org', 'delete', ''],
  'copilot-spaces/list-for-user': ['spaces', 'list_for_user', 'select', '$.spaces'],
  'copilot-spaces/create-for-user': ['spaces', 'create_for_user', 'insert', ''],
  'copilot-spaces/get-for-user': ['spaces', 'get_for_user', 'select', ''],
  'copilot-spaces/update-for-user': ['spaces', 'update_for_user', 'replace', ''],
  'copilot-spaces/delete-for-user': ['spaces', 'delete_for_user', 'delete', ''],
  'copilot-spaces/list-collaborators-for-user': ['collaborators', 'list_collaborators_for_user', 'select', '$.collaborators'],
  'copilot-spaces/add-collaborator-for-user': ['collaborators', 'add_collaborator_for_user', 'insert', ''],
  'copilot-spaces/update-collaborator-for-user': ['collaborators', 'update_collaborator_for_user', 'replace', ''],
  'copilot-spaces/remove-collaborator-for-user': ['collaborators', 'remove_collaborator_for_user', 'delete', ''],
  'copilot-spaces/list-resources-for-user': ['resources', 'list_resources_for_user', 'select', '$.resources'],
  'copilot-spaces/create-resource-for-user': ['resources', 'create_resource_for_user', 'insert', ''],
  'copilot-spaces/get-resource-for-user': ['resources', 'get_resource_for_user', 'select', ''],
  'copilot-spaces/update-resource-for-user': ['resources', 'update_resource_for_user', 'replace', ''],
  'copilot-spaces/delete-resource-for-user': ['resources', 'delete_resource_for_user', 'delete', ''],

  // dependabot - enterprise repository access
  'dependabot/repository-access-for-enterprise': ['enterprise_dependabot_repository_access', 'repository_access_for_enterprise', 'select', ''],
  'dependabot/update-repository-access-for-enterprise': ['enterprise_dependabot_repository_access', 'update_repository_access_for_enterprise', 'update', ''],
  'dependabot/set-repository-access-default-level-for-enterprise': ['enterprise_dependabot_repository_access', 'set_repository_access_default_level_for_enterprise', 'replace', ''],

  // dependency_graph - async SBOM reports
  'dependency-graph/generate-sbom-report': ['sbom_reports', 'generate_sbom_report', 'exec', ''],
  'dependency-graph/fetch-sbom-report': ['sbom_reports', 'fetch_sbom_report', 'exec', ''],

  // interactions - pull request creation caps / bypass lists
  'interactions/get-pull-request-creation-cap-for-org': ['org_pull_request_creation_caps', 'get_pull_request_creation_cap_for_org', 'select', ''],
  'interactions/update-pull-request-creation-cap-for-org': ['org_pull_request_creation_caps', 'update_pull_request_creation_cap_for_org', 'update', ''],
  'interactions/get-pull-request-bypass-list-for-repo': ['repo_pull_request_bypass_lists', 'get_pull_request_bypass_list_for_repo', 'select', ''],
  'interactions/set-pull-request-bypass-list-for-repo': ['repo_pull_request_bypass_lists', 'set_pull_request_bypass_list_for_repo', 'replace', ''],
  'interactions/remove-pull-request-bypass-list-for-repo': ['repo_pull_request_bypass_lists', 'remove_pull_request_bypass_list_for_repo', 'delete', ''],
  'interactions/get-pull-request-creation-cap-for-repo': ['repo_pull_request_creation_caps', 'get_pull_request_creation_cap_for_repo', 'select', ''],
  'interactions/update-pull-request-creation-cap-for-repo': ['repo_pull_request_creation_caps', 'update_pull_request_creation_cap_for_repo', 'update', ''],

  // issues - suggestions
  'issues/list-suggestions': ['issue_suggestions', 'list_suggestions', 'select', ''],
  'issues/approve-suggestion': ['issue_suggestions', 'approve_suggestion', 'exec', ''],
  'issues/dismiss-suggestion': ['issue_suggestions', 'dismiss_suggestion', 'exec', ''],

  // orgs - cluster deployment record jobs
  'orgs/create-cluster-deployment-records-job': ['cluster_deployment_records_jobs', 'create_cluster_deployment_records_job', 'insert', ''],
  'orgs/get-cluster-deployment-records-job': ['cluster_deployment_records_jobs', 'get_cluster_deployment_records_job', 'select', ''],

  // pulls - async merge and stacks
  'pulls/merge-async': ['pull_request_async_merges', 'merge_async', 'exec', ''],
  'pulls/get-merge-async-result': ['pull_request_async_merges', 'get_merge_async_result', 'select', ''],
  'pull-request-stacks/list': ['stacks', 'list', 'select', ''],
  'pull-request-stacks/create': ['stacks', 'create', 'insert', ''],
  'pull-request-stacks/get': ['stacks', 'get', 'select', ''],
  'pull-request-stacks/add': ['stacks', 'add', 'exec', ''],
  'pull-request-stacks/unstack': ['stacks', 'unstack', 'exec', ''],

  // repos
  'repos/get-hash-algorithm': ['hash_algorithm', 'get_hash_algorithm', 'select', ''],
  'repos/list-issue-types': ['issue_types', 'list_issue_types', 'select', ''],

  // secret_scanning - custom patterns
  'secret-scanning/list-org-custom-patterns': ['org_custom_patterns', 'list_org_custom_patterns', 'select', ''],
  'secret-scanning/bulk-create-org-custom-patterns': ['org_custom_patterns', 'bulk_create_org_custom_patterns', 'insert', ''],
  'secret-scanning/bulk-delete-org-custom-patterns': ['org_custom_patterns', 'bulk_delete_org_custom_patterns', 'delete', ''],
  'secret-scanning/update-org-custom-pattern': ['org_custom_patterns', 'update_org_custom_pattern', 'update', ''],
  'secret-scanning/list-repo-custom-patterns': ['repo_custom_patterns', 'list_repo_custom_patterns', 'select', ''],
  'secret-scanning/bulk-create-repo-custom-patterns': ['repo_custom_patterns', 'bulk_create_repo_custom_patterns', 'insert', ''],
  'secret-scanning/bulk-delete-repo-custom-patterns': ['repo_custom_patterns', 'bulk_delete_repo_custom_patterns', 'delete', ''],
  'secret-scanning/update-repo-custom-pattern': ['repo_custom_patterns', 'update_repo_custom_pattern', 'update', ''],
};

// Minimal CSV line parser that respects double-quoted fields (op_description
// can contain commas).
function parseLine(line) {
  const out = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (ch === '"') q = false;
      else cur += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { out.push(cur); cur = ''; }
    else cur += ch;
  }
  out.push(cur);
  return out;
}
function fmt(v) {
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

const text = readFileSync(csvPath, 'utf8');
const lines = text.split(/\r?\n/);
const header = lines[0];
const out = [header];
let applied = 0;
const stillUnmapped = [];
const pruned = [];
const resynced = [];
const used = new Set();
for (const line of lines.slice(1)) {
  if (!line.trim()) continue;
  const c = parseLine(line);
  const opId = c[2];
  const live = liveOps.get(opId);
  if (!live) {
    pruned.push(opId);
    continue;
  }
  if (c[0] !== live.filename || c[1] !== live.path || c[4] !== live.verb) {
    resynced.push(`${opId}: ${c[0]} ${c[4].toUpperCase()} ${c[1]} -> ${live.filename} ${live.verb.toUpperCase()} ${live.path}`);
    c[0] = live.filename; c[1] = live.path; c[4] = live.verb;
  }
  // analyze prefills stackql_method_name with the `svc/op` formatted id for
  // unmapped rows, so a slash in the method name also means "unmapped".
  if (c[8] !== 'skip_this_resource' && (!c[8] || !c[9] || !c[10] || c[9].includes('/'))) {
    const m = M[opId];
    if (m) {
      [c[8], c[9], c[10], c[11]] = m;
      applied++;
      used.add(opId);
    } else {
      stillUnmapped.push(opId);
    }
  }
  out.push(c.map(fmt).join(','));
}
writeFileSync(csvPath, out.join('\n') + '\n');
const unused = Object.keys(M).filter(k => !liveOps.has(k));
console.log(JSON.stringify({ applied, pruned, resynced, stillUnmapped, unusedMappings: unused }, null, 2));
if (stillUnmapped.length) process.exit(1);
