---
title: github
hide_title: false
hide_table_of_contents: false
keywords:
  - github
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage GitHub resources using SQL
custom_edit_url: null
image: /img/stackql-github-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

Web-based version-control and collaboration.  

:::info[Provider Summary] 

total services: __44__  
total resources: __430__  

:::

See also:   
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * * 

## Installation

To pull the latest version of the `github` provider, run the following command:  

```bash
REGISTRY PULL github;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).  

## Authentication

The following system environment variables are used for authentication by default:  

- <CopyableCode code="STACKQL_GITHUB_USERNAME" /> - GitHub username (login)
- <CopyableCode code="STACKQL_GITHUB_PASSWORD" /> - GitHub Personal Access Token (see <a href="https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">Creating a personal access token</a>)
  
These variables are sourced at runtime (from the local machine or as CI variables/secrets).  

<details>

<summary>Using different environment variables</summary>

To use different environment variables (instead of the defaults), use the `--auth` flag of the `stackql` program.  For example:  

```bash

AUTH='{ "github": { "type": "basic",  "username_var": "YOUR_GITHUB_USERNAME_VAR", "password_var": "YOUR_GITHUB_PASSWORD_VAR" }}'
stackql shell --auth="${AUTH}"

```
or using PowerShell:  

```powershell

$Auth = "{ 'github': { 'type': 'basic',  'username_var': 'YOUR_GITHUB_USERNAME_VAR', 'password_var': 'YOUR_GITHUB_PASSWORD_VAR' }}"
stackql.exe shell --auth=$Auth

```
</details>

## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/actions/">actions</a><br />
<a href="/services/activity/">activity</a><br />
<a href="/services/agent_tasks/">agent_tasks</a><br />
<a href="/services/apps/">apps</a><br />
<a href="/services/billing/">billing</a><br />
<a href="/services/campaigns/">campaigns</a><br />
<a href="/services/checks/">checks</a><br />
<a href="/services/classroom/">classroom</a><br />
<a href="/services/code_scanning/">code_scanning</a><br />
<a href="/services/code_security/">code_security</a><br />
<a href="/services/codes_of_conduct/">codes_of_conduct</a><br />
<a href="/services/codespaces/">codespaces</a><br />
<a href="/services/copilot/">copilot</a><br />
<a href="/services/credentials/">credentials</a><br />
<a href="/services/dependabot/">dependabot</a><br />
<a href="/services/dependency_graph/">dependency_graph</a><br />
<a href="/services/emojis/">emojis</a><br />
<a href="/services/enterprise_team_memberships/">enterprise_team_memberships</a><br />
<a href="/services/enterprise_team_organizations/">enterprise_team_organizations</a><br />
<a href="/services/enterprise_teams/">enterprise_teams</a><br />
<a href="/services/gists/">gists</a><br />
<a href="/services/git/">git</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/gitignore/">gitignore</a><br />
<a href="/services/hosted_compute/">hosted_compute</a><br />
<a href="/services/interactions/">interactions</a><br />
<a href="/services/issues/">issues</a><br />
<a href="/services/licenses/">licenses</a><br />
<a href="/services/markdown/">markdown</a><br />
<a href="/services/meta/">meta</a><br />
<a href="/services/migrations/">migrations</a><br />
<a href="/services/oidc/">oidc</a><br />
<a href="/services/orgs/">orgs</a><br />
<a href="/services/packages/">packages</a><br />
<a href="/services/private_registries/">private_registries</a><br />
<a href="/services/projects/">projects</a><br />
<a href="/services/pulls/">pulls</a><br />
<a href="/services/rate_limit/">rate_limit</a><br />
<a href="/services/reactions/">reactions</a><br />
<a href="/services/repos/">repos</a><br />
<a href="/services/search/">search</a><br />
<a href="/services/secret_scanning/">secret_scanning</a><br />
<a href="/services/security_advisories/">security_advisories</a><br />
<a href="/services/teams/">teams</a><br />
<a href="/services/users/">users</a><br />
</div>
</div>
