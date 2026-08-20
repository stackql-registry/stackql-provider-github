# Tier 1 / UAT tests

Smoke tests that exercise the locally-built provider against the live upstream
API. Designed for WSL / Linux. Same suite runs in two modes:

- `exec`   - one-shot `stackql exec --output json` per query
- `pgwire` - long-lived `stackql srv`, queried over Postgres wire (psycopg)

## One-time setup

```bash
# from repo root
bash provider-dev/test/bootstrap.sh          # downloads latest stackql into provider-dev/test/.bin/ (or: make smoke-test)
python -m venv provider-dev/test/.venv
source provider-dev/test/.venv/bin/activate
pip install -r provider-dev/test/requirements.txt
```

## Run

The Makefile wraps all of this (`make smoke-test`, `make smoke-test MODE=both`);
the manual form is:

```bash
set -a; source .env; set +a                 # repo-root .env exports STACKQL_GITHUB_USERNAME / PASSWORD

# exec mode (default)
pytest provider-dev/test/ -v

# pgwire mode
pytest provider-dev/test/ -v --mode=pgwire

# both modes - same suite runs twice
pytest provider-dev/test/ -v --mode=both
```

## What to edit when

- **Add / change a query**: edit `tier1.yaml`. No Python changes needed.
- **Add a new assertion primitive**: edit `test_tier1.py`.
- **Reuse for another provider**: copy this directory, edit `provider.yaml`
  (provider name, registry path, required auth env vars) and `tier1.yaml`.
  Nothing else should need to change.

## tier1.yaml shape

```yaml
- name: short_test_id
  sql: |
    SELECT ... WHERE org = '${TEST_ORG}'
  assertions:
    min_rows: 1                              # default 1; set 0 to allow empty
    required_columns: [col_a, col_b]         # must be present on every row
    row_predicates:                          # python exprs, `rows` and `r` in scope
      - "r['col_a'] == 'expected'"
```

`${VAR}` substitution looks up `test_env_defaults` in `provider.yaml` first,
then the process environment. Use it for anything per-environment (target org,
expected username, etc.) - do not hard-code values in `tier1.yaml`.
