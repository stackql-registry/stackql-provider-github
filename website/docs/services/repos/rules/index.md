--- 
title: rules
hide_title: false
hide_table_of_contents: false
keywords:
  - rules
  - repos
  - github
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage github resources using SQL
custom_edit_url: null
image: /img/stackql-github-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_branch_rules"
    values={[
        { label: 'get_branch_rules', value: 'get_branch_rules' },
        { label: 'get_repo_ruleset', value: 'get_repo_ruleset' },
        { label: 'get_org_ruleset', value: 'get_org_ruleset' },
        { label: 'get_repo_rulesets', value: 'get_repo_rulesets' },
        { label: 'get_org_rulesets', value: 'get_org_rulesets' }
    ]}
>
<TabItem value="get_branch_rules">

Response

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="ruleset_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the ruleset that includes this rule.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ruleset_source" /></td>
    <td><code>string</code></td>
    <td>The name of the source of the ruleset that includes this rule.</td>
</tr>
<tr>
    <td><CopyableCode code="ruleset_source_type" /></td>
    <td><code>string</code></td>
    <td>The type of source for the ruleset that includes this rule. (Repository, Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (creation)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_repo_ruleset">

Response

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="bypass_actors" /></td>
    <td><code>array</code></td>
    <td>The actors that can bypass the rules in this ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Parameters for a repository ruleset ref name condition (title: Repository ruleset conditions for ref names)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_can_bypass" /></td>
    <td><code>string</code></td>
    <td>The bypass type of the user making the API request for this ruleset. This field is only returned when querying the repository-level endpoint. (always, pull_requests_only, never, exempt)</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise). (disabled, active, evaluate)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The name of the source</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The type of the source of the ruleset (Repository, Organization, Enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The target of the ruleset (branch, tag, push, repository)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_org_ruleset">

Response

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="bypass_actors" /></td>
    <td><code>array</code></td>
    <td>The actors that can bypass the rules in this ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Parameters for a repository ruleset ref name condition (title: Repository ruleset conditions for ref names)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_can_bypass" /></td>
    <td><code>string</code></td>
    <td>The bypass type of the user making the API request for this ruleset. This field is only returned when querying the repository-level endpoint. (always, pull_requests_only, never, exempt)</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise). (disabled, active, evaluate)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The name of the source</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The type of the source of the ruleset (Repository, Organization, Enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The target of the ruleset (branch, tag, push, repository)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_repo_rulesets">

Response

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="bypass_actors" /></td>
    <td><code>array</code></td>
    <td>The actors that can bypass the rules in this ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Parameters for a repository ruleset ref name condition (title: Repository ruleset conditions for ref names)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_can_bypass" /></td>
    <td><code>string</code></td>
    <td>The bypass type of the user making the API request for this ruleset. This field is only returned when querying the repository-level endpoint. (always, pull_requests_only, never, exempt)</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise). (disabled, active, evaluate)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The name of the source</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The type of the source of the ruleset (Repository, Organization, Enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The target of the ruleset (branch, tag, push, repository)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_org_rulesets">

Response

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="bypass_actors" /></td>
    <td><code>array</code></td>
    <td>The actors that can bypass the rules in this ruleset</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Parameters for a repository ruleset ref name condition (title: Repository ruleset conditions for ref names)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_can_bypass" /></td>
    <td><code>string</code></td>
    <td>The bypass type of the user making the API request for this ruleset. This field is only returned when querying the repository-level endpoint. (always, pull_requests_only, never, exempt)</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>The enforcement level of the ruleset. `evaluate` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (`evaluate` is only available with GitHub Enterprise). (disabled, active, evaluate)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The name of the source</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The type of the source of the ruleset (Repository, Organization, Enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>The target of the ruleset (branch, tag, push, repository)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_branch_rules"><CopyableCode code="get_branch_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Returns all active rules that apply to the specified branch. The branch does not need to exist; rules that would apply<br />to a branch with that name will be returned. All active rules that apply will be returned, regardless of the level<br />at which they are configured (e.g. repository or organization). Rules in rulesets with "evaluate" or "disabled"<br />enforcement statuses are not returned.</td>
</tr>
<tr>
    <td><a href="#get_repo_ruleset"><CopyableCode code="get_repo_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td><a href="#parameter-includes_parents"><code>includes_parents</code></a></td>
    <td>Get a ruleset for a repository.<br /><br />**Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user<br />making the API request has write access to the ruleset.</td>
</tr>
<tr>
    <td><a href="#get_org_ruleset"><CopyableCode code="get_org_ruleset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td></td>
    <td>Get a repository ruleset for an organization.<br /><br />**Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user<br />making the API request has write access to the ruleset.</td>
</tr>
<tr>
    <td><a href="#get_repo_rulesets"><CopyableCode code="get_repo_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-includes_parents"><code>includes_parents</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td>Get all the rulesets for a repository.</td>
</tr>
<tr>
    <td><a href="#get_org_rulesets"><CopyableCode code="get_org_rulesets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-targets"><code>targets</code></a></td>
    <td>Get all the repository rulesets for an organization.</td>
</tr>
<tr>
    <td><a href="#create_repo_ruleset"><CopyableCode code="create_repo_ruleset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-enforcement"><code>enforcement</code></a></td>
    <td></td>
    <td>Create a ruleset for a repository.</td>
</tr>
<tr>
    <td><a href="#create_org_ruleset"><CopyableCode code="create_org_ruleset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-enforcement"><code>enforcement</code></a></td>
    <td></td>
    <td>Create a repository ruleset for an organization.</td>
</tr>
<tr>
    <td><a href="#update_repo_ruleset"><CopyableCode code="update_repo_ruleset" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td></td>
    <td>Update a ruleset for a repository.</td>
</tr>
<tr>
    <td><a href="#update_org_ruleset"><CopyableCode code="update_org_ruleset" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td></td>
    <td>Update a ruleset for an organization.</td>
</tr>
<tr>
    <td><a href="#delete_repo_ruleset"><CopyableCode code="delete_repo_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td></td>
    <td>Delete a ruleset for a repository.</td>
</tr>
<tr>
    <td><a href="#delete_org_ruleset"><CopyableCode code="delete_org_ruleset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-ruleset_id"><code>ruleset_id</code></a></td>
    <td></td>
    <td>Delete a ruleset for an organization.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-ruleset_id">
    <td><CopyableCode code="ruleset_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the ruleset.</td>
</tr>
<tr id="parameter-includes_parents">
    <td><CopyableCode code="includes_parents" /></td>
    <td><code>boolean</code></td>
    <td>Include rulesets configured at higher levels that apply to this repository</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-targets">
    <td><CopyableCode code="targets" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of rule targets to filter by. If provided, only rulesets that apply to the specified targets will be returned. For example, `branch,tag,push`. </td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_branch_rules"
    values={[
        { label: 'get_branch_rules', value: 'get_branch_rules' },
        { label: 'get_repo_ruleset', value: 'get_repo_ruleset' },
        { label: 'get_org_ruleset', value: 'get_org_ruleset' },
        { label: 'get_repo_rulesets', value: 'get_repo_rulesets' },
        { label: 'get_org_rulesets', value: 'get_org_rulesets' }
    ]}
>
<TabItem value="get_branch_rules">

Returns all active rules that apply to the specified branch. The branch does not need to exist; rules that would apply<br />to a branch with that name will be returned. All active rules that apply will be returned, regardless of the level<br />at which they are configured (e.g. repository or organization). Rules in rulesets with "evaluate" or "disabled"<br />enforcement statuses are not returned.

```sql
SELECT
ruleset_id,
parameters,
ruleset_source,
ruleset_source_type,
type
FROM github.repos.rules
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND branch = '{{ branch }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="get_repo_ruleset">

Get a ruleset for a repository.<br /><br />**Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user<br />making the API request has write access to the ruleset.

```sql
SELECT
id,
name,
node_id,
_links,
bypass_actors,
conditions,
created_at,
current_user_can_bypass,
enforcement,
rules,
source,
source_type,
target,
updated_at
FROM github.repos.rules
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ruleset_id = '{{ ruleset_id }}' -- required
AND includes_parents = '{{ includes_parents }}'
;
```
</TabItem>
<TabItem value="get_org_ruleset">

Get a repository ruleset for an organization.<br /><br />**Note:** To prevent leaking sensitive information, the `bypass_actors` property is only returned if the user<br />making the API request has write access to the ruleset.

```sql
SELECT
id,
name,
node_id,
_links,
bypass_actors,
conditions,
created_at,
current_user_can_bypass,
enforcement,
rules,
source,
source_type,
target,
updated_at
FROM github.repos.rules
WHERE org = '{{ org }}' -- required
AND ruleset_id = '{{ ruleset_id }}' -- required
;
```
</TabItem>
<TabItem value="get_repo_rulesets">

Get all the rulesets for a repository.

```sql
SELECT
id,
name,
node_id,
_links,
bypass_actors,
conditions,
created_at,
current_user_can_bypass,
enforcement,
rules,
source,
source_type,
target,
updated_at
FROM github.repos.rules
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND includes_parents = '{{ includes_parents }}'
AND targets = '{{ targets }}'
;
```
</TabItem>
<TabItem value="get_org_rulesets">

Get all the repository rulesets for an organization.

```sql
SELECT
id,
name,
node_id,
_links,
bypass_actors,
conditions,
created_at,
current_user_can_bypass,
enforcement,
rules,
source,
source_type,
target,
updated_at
FROM github.repos.rules
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND targets = '{{ targets }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_repo_ruleset"
    values={[
        { label: 'create_repo_ruleset', value: 'create_repo_ruleset' },
        { label: 'create_org_ruleset', value: 'create_org_ruleset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_repo_ruleset">

Create a ruleset for a repository.

```sql
INSERT INTO github.repos.rules (
name,
target,
enforcement,
bypass_actors,
conditions,
rules,
owner,
repo
)
SELECT 
'{{ name }}' /* required */,
'{{ target }}',
'{{ enforcement }}' /* required */,
'{{ bypass_actors }}',
'{{ conditions }}',
'{{ rules }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
name,
node_id,
_links,
bypass_actors,
conditions,
created_at,
current_user_can_bypass,
enforcement,
rules,
source,
source_type,
target,
updated_at
;
```
</TabItem>
<TabItem value="create_org_ruleset">

Create a repository ruleset for an organization.

```sql
INSERT INTO github.repos.rules (
name,
target,
enforcement,
bypass_actors,
conditions,
rules,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ target }}',
'{{ enforcement }}' /* required */,
'{{ bypass_actors }}',
'{{ conditions }}',
'{{ rules }}',
'{{ org }}'
RETURNING
id,
name,
node_id,
_links,
bypass_actors,
conditions,
created_at,
current_user_can_bypass,
enforcement,
rules,
source,
source_type,
target,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rules
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the rules resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the rules resource.
    - name: org
      value: "{{ org }}"
      description: Required parameter for the rules resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the ruleset.
    - name: target
      value: "{{ target }}"
      description: |
        The target of the ruleset
      valid_values: ['branch', 'tag', 'push', 'repository']
      default: branch
    - name: enforcement
      value: "{{ enforcement }}"
      description: |
        The enforcement level of the ruleset. \`evaluate\` allows admins to test rules before enforcing them. Admins can view insights on the Rule Insights page (\`evaluate\` is only available with GitHub Enterprise).
      valid_values: ['disabled', 'active', 'evaluate']
    - name: bypass_actors
      description: |
        The actors that can bypass the rules in this ruleset
      value:
        - actor_id: {{ actor_id }}
          actor_type: "{{ actor_type }}"
          bypass_mode: "{{ bypass_mode }}"
    - name: conditions
      description: |
        Conditions for an organization ruleset.
        The branch and tag rulesets conditions object should contain both \`repository_name\` and \`ref_name\` properties, or both \`repository_id\` and \`ref_name\` properties, or both \`repository_property\` and \`ref_name\` properties.
        The push rulesets conditions object does not require the \`ref_name\` property.
        For repository policy rulesets, the conditions object should only contain the \`repository_name\`, the \`repository_id\`, or the \`repository_property\`.
      value:
        ref_name:
          include:
            - "{{ include }}"
          exclude:
            - "{{ exclude }}"
        repository_name:
          include:
            - "{{ include }}"
          exclude:
            - "{{ exclude }}"
          protected: {{ protected }}
        repository_id:
          repository_ids:
            - {{ repository_ids }}
        repository_property:
          include:
            - name: "{{ name }}"
              property_values: "{{ property_values }}"
              source: "{{ source }}"
          exclude:
            - name: "{{ name }}"
              property_values: "{{ property_values }}"
              source: "{{ source }}"
    - name: rules
      description: |
        An array of rules within the ruleset.
      value:
        - type: "{{ type }}"
          parameters:
            update_allows_fetch_and_merge: {{ update_allows_fetch_and_merge }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_repo_ruleset"
    values={[
        { label: 'update_repo_ruleset', value: 'update_repo_ruleset' },
        { label: 'update_org_ruleset', value: 'update_org_ruleset' }
    ]}
>
<TabItem value="update_repo_ruleset">

Update a ruleset for a repository.

```sql
REPLACE github.repos.rules
SET 
name = '{{ name }}',
target = '{{ target }}',
enforcement = '{{ enforcement }}',
bypass_actors = '{{ bypass_actors }}',
conditions = '{{ conditions }}',
rules = '{{ rules }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND ruleset_id = '{{ ruleset_id }}' --required
RETURNING
id,
name,
node_id,
_links,
bypass_actors,
conditions,
created_at,
current_user_can_bypass,
enforcement,
rules,
source,
source_type,
target,
updated_at;
```
</TabItem>
<TabItem value="update_org_ruleset">

Update a ruleset for an organization.

```sql
REPLACE github.repos.rules
SET 
name = '{{ name }}',
target = '{{ target }}',
enforcement = '{{ enforcement }}',
bypass_actors = '{{ bypass_actors }}',
conditions = '{{ conditions }}',
rules = '{{ rules }}'
WHERE 
org = '{{ org }}' --required
AND ruleset_id = '{{ ruleset_id }}' --required
RETURNING
id,
name,
node_id,
_links,
bypass_actors,
conditions,
created_at,
current_user_can_bypass,
enforcement,
rules,
source,
source_type,
target,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repo_ruleset"
    values={[
        { label: 'delete_repo_ruleset', value: 'delete_repo_ruleset' },
        { label: 'delete_org_ruleset', value: 'delete_org_ruleset' }
    ]}
>
<TabItem value="delete_repo_ruleset">

Delete a ruleset for a repository.

```sql
DELETE FROM github.repos.rules
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND ruleset_id = '{{ ruleset_id }}' --required
;
```
</TabItem>
<TabItem value="delete_org_ruleset">

Delete a ruleset for an organization.

```sql
DELETE FROM github.repos.rules
WHERE org = '{{ org }}' --required
AND ruleset_id = '{{ ruleset_id }}' --required
;
```
</TabItem>
</Tabs>
