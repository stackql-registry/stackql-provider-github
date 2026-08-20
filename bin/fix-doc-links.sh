#!/usr/bin/env bash
# Rewrites upstream-relative links in the generated docs so they resolve to
# docs.github.com instead of the provider microsite. GitHub's OpenAPI
# descriptions link to paths like /rest/... and /actions/... which are
# relative to docs.github.com; a few anchors point at headings that only
# exist in the REST docs.
#
# Usage: bin/fix-doc-links.sh [website/docs/services]
set -euo pipefail

DOCS_DIR="${1:-website/docs/services}"
if [[ ! -d "$DOCS_DIR" ]]; then
  echo "docs dir not found: $DOCS_DIR" >&2
  exit 1
fi

find "$DOCS_DIR" -type f -name "*.md" -exec sed -i -E \
  's#\]\(/(rest/|developers/|actions/|code-security/|github/|graphql/)#](https://docs.github.com/\1#g' {} +

find "$DOCS_DIR" -type f -name "*.md" -exec sed -i \
  -e 's|(#set-github-actions-permissions-for-a-repository)|(https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)|g' \
  -e 's|(#set-github-actions-permissions-for-an-organization)|(https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)|g' \
  -e 's|(#create-a-self-hosted-runner-group-for-an-organization)|(https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access)|g' \
  {} +

echo "fixed doc links under $DOCS_DIR"
