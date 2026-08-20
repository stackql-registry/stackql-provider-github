# `github` provider for [`stackql`](https://github.com/stackql/stackql)

This repository generates and documents the `github` provider for StackQL, which lets you query and manage GitHub resources with SQL. The provider is built from GitHub's published OpenAPI description using [`@stackql/provider-utils`](https://www.npmjs.com/package/@stackql/provider-utils), with a small hand-authored layer of GraphQL-backed resources for surfaces that GitHub only exposes through its GraphQL API.

- Provider docs: [github-provider.stackql.io](https://github-provider.stackql.io)
- Upstream spec: [github/rest-api-description](https://github.com/github/rest-api-description) (`descriptions/api.github.com/api.github.com.json`)

## Prerequisites

- Node.js 20 or later, npm, and yarn (for the docs site)
- GNU make and a POSIX shell (Linux, macOS or WSL - the server lifecycle scripts use `pgrep`/`ps`)
- Python 3.10 or later (live smoke tests)
- A GitHub account and a personal access token (PAT), or the GitHub CLI, for live queries and smoke tests

## Quick start

```bash
npm install
make all          # spec -> split -> normalize -> mappings -> provider -> meta-test -> docs -> docs-build
make smoke-test   # live tier-1 queries against api.github.com (needs .env, see below)
```

`make help` lists every target. The stages are described below and can be run individually.

## Build pipeline

| Target | What it does |
|--------|--------------|
| `make spec` | Downloads the latest `api.github.com.json` to `provider-dev/downloaded/`. Set `SPEC_REFRESH=0` to build from the cached copy. |
| `make split` | Splits the monolithic spec into per-service yamls under `provider-dev/source/`, discriminated by tag (`actions`, `repos`, `issues`, ...). |
| `make normalize` | Runs the provider-utils normalizer (allOf flattening, oneOf/anyOf lowering, misplaced keyword removal) and then `provider-dev/scripts/post_normalize.mjs`, which reverts the bare-array envelope the normalizer wraps around GitHub's ~260 array-returning list endpoints. GitHub's `tag/op-id` operationIds produce invalid wrapper names and JSONPaths under that pass, and stackql iterates bare arrays natively, so the envelope is removed. |
| `make mappings` | Regenerates `provider-dev/config/all_services.csv`. `analyze` preserves existing rows; `provider-dev/scripts/map_new_operations.mjs` then fills in operations added upstream from its mapping table, prunes operations GitHub has retired, and resyncs rows whose paths moved. The target fails if any operation is still unmapped - add it to the script's table and re-run. |
| `make provider` | Generates the provider under `provider-dev/openapi/src/github/v00.00.00000/` from the CSV, injecting `servers.json`, `provider_config.json` (basic auth) and `service_config.json` (pagination) from `provider-dev/config/`, then runs `provider-dev/scripts/graphql_merge.mjs` to add the GraphQL-backed resources. |
| `make build` | `split` + `normalize` + `mappings` + `provider`. |
| `make meta-test` | Starts a local `stackql srv` against the generated provider, walks every `SHOW SERVICES` / `SHOW RESOURCES` / `SHOW METHODS` / `DESCRIBE EXTENDED` route and stops the server. No credentials needed; a non-zero exit stops `make all`. |
| `make docs` | Generates the Docusaurus markdown into `website/docs/` from the provider plus `provider-dev/docgen/provider-data/headerContent{1,2}.txt`, then rewrites upstream-relative links to `docs.github.com` (`bin/fix-doc-links.sh`). |
| `make docs-build` / `make docs-serve` | `yarn build` / `yarn start` in `website/`. |
| `make smoke-test` | Live tier-1 queries (see [Testing](#testing)). `MODE=exec` (default), `pgwire` or `both`. |
| `make clean` | Removes the generated provider, split source, website build and the downloaded test binary. |

Manual decisions live in scripts, not in hand edits of generated files, so a refresh is a reviewed diff: rerun `make build`, review the changes to `all_services.csv` and `provider-dev/openapi/`, and add mappings for anything `make mappings` reports as unmapped.

## Authentication

The provider uses HTTP basic authentication with a username and a PAT as the password:

```bash
export STACKQL_GITHUB_USERNAME=<your-github-username>
export STACKQL_GITHUB_PASSWORD=<your-personal-access-token>
```

A `bearer` token also works, which lets you reuse a GitHub CLI login or the `GITHUB_TOKEN` of an Actions workflow:

```bash
export STACKQL_GITHUB_TOKEN=$(gh auth token)
stackql shell --auth='{"github":{"type":"bearer","credentialsenvvar":"STACKQL_GITHUB_TOKEN"}}'
```

The same credentials are used for the GraphQL-backed resources. Fine-grained PATs need the relevant repository or account permissions. Note that since July 2026 GitHub limits stargazer listings (`activity.repo_stargazers`, `activity.star_history`) to repository admins and collaborators.

## Pagination and pushdown

- **Pagination** is declared explicitly on every service via `x-stackQL-config.pagination` (from `provider-dev/config/service_config.json`): the response token is the `Link` header's `rel="next"` URL and the request token replaces the whole request URL, so multi-page listings are traversed automatically up to stackql's `--http.response.pageLimit` (default 20 pages). Previously this relied on provider-name special-casing inside stackql; the declared form behaves identically and does not depend on it.
- **Predicate pushdown** works through operation parameters: any `WHERE` column that matches a declared path or query parameter (`owner`, `repo`, `state`, `per_page`, `sort`, `since`, ...) is sent to the API rather than filtered locally. Columns that are not parameters are filtered by the SQL engine after the rows are fetched.
- `LIMIT` is deliberately not pushed to `per_page`: the page loop does not stop early once the limit is satisfied, so a smaller page size would only multiply requests. Use `per_page` in the `WHERE` clause to control page size explicitly.
- GraphQL resources page with Relay cursors (`pageInfo.endCursor` / `hasNextPage`) using the any-sdk `page_info` cursor strategy, 100 rows per request.

## GraphQL-backed resources

GitHub exposes some data only through its GraphQL API. Those surfaces are authored as small op specs under `provider-dev/source-graphql/ops/` (query template, parameters, row schema, cursor) and merged into the generated provider by `graphql_merge.mjs`, which is idempotent and only touches the services named in `provider-dev/source-graphql/manifest.yaml`:

| Resource | Backed by |
|----------|-----------|
| `github.discussions.discussions` | `repository.discussions` |
| `github.discussions.discussion_categories` | `repository.discussionCategories` |
| `github.discussions.discussion_comments` | `repository.discussion.comments` |
| `github.activity.star_history` | `repository.stargazers` ordered by `STARRED_AT` (each star with its timestamp) |
| `github.users.contribution_calendar` | `user.contributionsCollection.contributionCalendar` |
| `github.pulls.review_threads` | `pullRequest.reviewThreads` (resolved / outdated state) |
| `github.orgs.saml_identities` | `organization.samlIdentityProvider.externalIdentities` |
| `github.users.sponsorships`, `github.orgs.sponsorships` | `sponsorshipsAsMaintainer` |

They are queried like any other resource; nested GraphQL objects come back as JSON columns (`json_extract(author, '$.login')`). Each op gets a synthetic path key of `/graphql?resource=<name>`: stackql routes on `servers` + path key, and the GraphQL reader strips the query string before the request goes out, so GitHub receives a plain `POST /graphql`. To add a resource, copy an existing op spec, list it in the manifest and run `make provider`.

## Testing

### Meta-route gate (no credentials)

```bash
make meta-test
```

### Live smoke tests

`provider-dev/test/` holds a pytest suite driven by `tier1.yaml` - read-only queries that any user would expect to work against a freshly built provider, including multi-page traversal, the resources added in the latest spec refresh and the GraphQL-backed resources. The same suite runs through `stackql exec` and through a `stackql srv` Postgres-wire session.

```bash
cat > .env <<'EOF'
export STACKQL_GITHUB_USERNAME=<your-github-username>
export STACKQL_GITHUB_PASSWORD=<your-personal-access-token>
EOF

make smoke-test             # exec mode
make smoke-test MODE=both   # exec + pgwire
```

The target downloads a Linux `stackql` into `provider-dev/test/.bin/` and creates a venv on first run. Target org, repo and user are overridable with `TEST_ORG`, `TEST_REPO`, `TEST_USER`, `TEST_CALENDAR_USER` and `TEST_PULL_NUMBER` (defaults in `provider-dev/test/provider.yaml`). See `provider-dev/test/README.md` for the YAML shape and how to add cases.

### Ad hoc queries

```bash
PROVIDER_REGISTRY_ROOT_DIR="$(pwd)/provider-dev/openapi"
REG_STR='{"url": "file://'${PROVIDER_REGISTRY_ROOT_DIR}'", "localDocRoot": "'${PROVIDER_REGISTRY_ROOT_DIR}'", "verifyConfig": {"nopVerify": true}}'
stackql shell --registry="${REG_STR}"
```

```sql
SELECT name, visibility, language, stargazers_count
FROM github.repos.repos
WHERE org = 'stackql';

SELECT number, title, json_extract(category, '$.name') AS category
FROM github.discussions.discussions
WHERE owner = 'stackql' AND repo = 'stackql';
```

More examples, including window functions over contributors, releases and commit activity, are in the [provider docs](https://github-provider.stackql.io) (source: `provider-dev/docgen/provider-data/headerContent2.txt`).

## Publishing the provider

Push the `provider-dev/openapi/src/github` directory to `providers/src` in a feature branch of [`stackql-provider-registry`](https://github.com/stackql/stackql-provider-registry) and follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md). To verify the dev registry build:

```bash
export DEV_REG="{ \"url\": \"https://registry-dev.stackql.app/providers\" }"
stackql --registry="${DEV_REG}" shell
```

```sql
registry pull github;
```

## Publishing the docs

`make docs` regenerates `website/docs/`; commit the regenerated tree. Doc pages show a "Last updated" date taken from git history (`showLastUpdateTime` in `website/docusaurus.config.js`), so pages carry the date of the commit that last regenerated them. Pushes to `main` that touch `website/**` deploy to GitHub Pages via `.github/workflows/prod-web-deploy.yml`; the custom domain is `github-provider.stackql.io` (CNAME to `stackql.github.io`).

## Repository layout

```
Makefile                         build / test / docs targets
bin/                             server lifecycle, meta-route test, doc link fixer
provider-dev/
  downloaded/                    upstream OpenAPI description (make spec)
  source/                        split + normalized per-service specs (generated)
  config/                        all_services.csv mappings, servers / auth / pagination json
  scripts/                       post_normalize.mjs, map_new_operations.mjs, graphql_merge.mjs
  source-graphql/                manifest + op specs for GraphQL-backed resources
  openapi/src/github/            generated provider (publish this)
  docgen/provider-data/          headerContent1.txt / headerContent2.txt for the docs index page
  test/                          pytest tier-1 smoke tests
website/                         Docusaurus microsite
```

## License

MIT

## Contributing

Contributions are welcome. Please open a pull request.
