# `github` provider for [`stackql`](https://github.com/stackql/stackql)

This repository is used to generate and document the `github` provider for StackQL, allowing you to query and interact with GitHub resources using SQL-like syntax. The provider is built using the `@stackql/provider-utils` package, which provides tools for converting OpenAPI specifications into StackQL-compatible provider schemas.

## Prerequisites

To use the GitHub provider with StackQL, you'll need:

1. A GitHub account with appropriate API credentials
2. A GitHub personal access token (PAT) with sufficient permissions for the resources you want to access
3. StackQL CLI installed on your system (see [StackQL](https://github.com/stackql/stackql))

## 1. Download the Open API Specification

First, download the GitHub API OpenAPI specification:

```bash
mkdir -p provider-dev/downloaded
curl -L https://raw.githubusercontent.com/github/rest-api-description/main/descriptions/api.github.com/api.github.com.json \
  -o provider-dev/downloaded/github-openapi.json
```

## 2. Split into Service Specs

Next, split the monolithic OpenAPI specification into service-specific files:

```bash
rm -rf provider-dev/source/*
npm run split -- \
  --provider-name github \
  --api-doc provider-dev/downloaded/github-openapi.json \
  --svc-discriminator tag \
  --output-dir provider-dev/source \
  --overwrite \
  --svc-name-overrides "$(cat <<EOF
{
  "repos": "repos",
  "users": "users",
  "orgs": "organizations",
  "pulls": "pull_requests",
  "issues": "issues",
  "actions": "actions",
  "apps": "apps",
  "code-scanning": "code_scanning",
  "packages": "packages",
  "teams": "teams",
  "projects": "projects",
  "git": "git",
  "gists": "gists",
  "checks": "checks",
  "codespaces": "codespaces",
  "search": "search",
  "rate-limit": "rate_limit",
  "licenses": "licenses",
  "meta": "meta",
  "billing": "billing"
}
EOF
)"
```

## 3. Generate Mappings

Generate the mapping configuration that connects OpenAPI operations to StackQL resources:

```bash
npm run generate-mappings -- \
  --provider-name github \
  --input-dir provider-dev/source \
  --output-dir provider-dev/config
```

Update the resultant `provider-dev/config/all_services.csv` to add the `stackql_resource_name`, `stackql_method_name`, `stackql_verb` values for each operation.

## 4. Generate Provider

This step transforms the split OpenAPI service specs into a fully-functional StackQL provider by applying the resource and method mappings defined in your CSV file.

```bash
rm -rf provider-dev/openapi/*
npm run generate-provider -- \
  --provider-name github \
  --input-dir provider-dev/source \
  --output-dir provider-dev/openapi/src/github \
  --config-path provider-dev/config/all_services.csv \
  --servers '[{"url": "https://api.github.com"}]' \
  --provider-config '{"auth": {"credentialsenvvar": "GITHUB_TOKEN", "type": "bearer"}}' \
  --overwrite
```

## 5. Test Provider

### Starting the StackQL Server

Before running tests, start a StackQL server with your provider:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
npm run start-server -- --provider github --registry $PROVIDER_REGISTRY_ROOT_DIR
```

### Test Meta Routes

Test all metadata routes (services, resources, methods) in the provider:

```bash
npm run test-meta-routes -- github --verbose
```

When you're done testing, stop the StackQL server:

```bash
npm run stop-server
```

Use this command to view the server status:

```bash
npm run server-status
```

### Run test queries

Run some test queries against the provider using the `stackql shell`:

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
./stackql shell --registry="${REG_STR}"
```

Example queries to try:

```sql
-- List your repositories
SELECT 
id,
name,
full_name,
private,
html_url,
description,
fork,
created_at,
updated_at,
pushed_at,
language,
default_branch,
visibility
FROM github.repos.repos;

-- Get information about a specific repository
SELECT 
id,
name,
full_name,
owner,
private,
html_url,
description,
fork,
created_at,
updated_at,
pushed_at,
size,
stargazers_count,
watchers_count,
language,
forks_count,
open_issues_count,
license,
topics
FROM github.repos.repo
WHERE owner = 'stackql'
AND repo = 'stackql';

-- List repository issues
SELECT 
number,
title,
state,
created_at,
updated_at,
user,
labels,
assignees,
comments
FROM github.issues.issues
WHERE owner = 'stackql'
AND repo = 'stackql';

-- List pull requests
SELECT 
number,
title,
state,
created_at,
updated_at,
closed_at,
merged_at,
user,
draft,
labels,
requested_reviewers
FROM github.pull_requests.pulls
WHERE owner = 'stackql'
AND repo = 'stackql';

-- Get organization information
SELECT 
login,
id,
name,
description,
email,
blog,
location,
created_at,
updated_at,
plan,
members_can_create_repositories
FROM github.organizations.org
WHERE org = 'stackql';

-- List organization repositories
SELECT 
id,
name,
full_name,
private,
html_url,
description,
fork,
created_at,
updated_at,
language,
visibility
FROM github.repos.org_repos
WHERE org = 'stackql';

-- List GitHub Actions workflow runs
SELECT 
id,
name,
workflow_id,
head_branch,
head_sha,
run_number,
event,
status,
conclusion,
created_at,
updated_at
FROM github.actions.workflow_runs
WHERE owner = 'stackql'
AND repo = 'stackql';

-- Check your rate limit status
SELECT 
*
FROM github.rate_limit.rate_limit;
```

## 6. Publish the provider

To publish the provider push the `github` dir to `providers/src` in a feature branch of the [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry). Follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md).  

Launch the StackQL shell:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
./stackql --registry="${DEV_REG}" shell
```

Pull the latest dev `github` provider:

```sql
registry pull github;
```

Run some test queries to verify the provider works as expected.

## 7. Generate web docs

Provider doc microsites are built using Docusaurus and published using GitHub Pages.  

a. Update `headerContent1.txt` and `headerContent2.txt` accordingly in `provider-dev/docgen/provider-data/`  

b. Update the following in `website/docusaurus.config.js`:  

```js
// Provider configuration - change these for different providers
const providerName = "github";
const providerTitle = "GitHub Provider";
```

c. Then generate docs using...

```bash
npm run generate-docs -- \
  --provider-name github \
  --provider-dir ./provider-dev/openapi/src/github/v00.00.00000 \
  --output-dir ./website \
  --provider-data-dir ./provider-dev/docgen/provider-data
```  

## 8. Test web docs locally

```bash
cd website
# test build
yarn build

# run local dev server
yarn start
```

## 9. Publish web docs to GitHub Pages

Under __Pages__ in the repository, in the __Build and deployment__ section select __GitHub Actions__ as the __Source__. In Netlify DNS create the following records:

| Source Domain | Record Type  | Target |
|---------------|--------------|--------|
| github-provider.stackql.io | CNAME | stackql.github.io. |

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.