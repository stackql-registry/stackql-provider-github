--- 
title: repos_for_org_variable
hide_title: false
hide_table_of_contents: false
keywords:
  - repos_for_org_variable
  - actions
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

Creates, updates, deletes, gets or lists a <code>repos_for_org_variable</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repos_for_org_variable" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.repos_for_org_variable" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_selected_repos_for_org_variable"
    values={[
        { label: 'list_selected_repos_for_org_variable', value: 'list_selected_repos_for_org_variable' }
    ]}
>
<TabItem value="list_selected_repos_for_org_variable">

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
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
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
    <td><a href="#list_selected_repos_for_org_variable"><CopyableCode code="list_selected_repos_for_org_variable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists all repositories that can access an organization variable<br />that is available to selected repositories.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
</tr>
<tr>
    <td><a href="#add_selected_repo_to_org_variable"><CopyableCode code="add_selected_repo_to_org_variable" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Adds a repository to an organization variable that is available to selected repositories.<br />Organization variables that are available to selected repositories have their `visibility` field set to `selected`.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_selected_repos_for_org_variable"><CopyableCode code="set_selected_repos_for_org_variable" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-selected_repository_ids"><code>selected_repository_ids</code></a></td>
    <td></td>
    <td>Replaces all repositories for an organization variable that is available<br />to selected repositories. Organization variables that are available to selected<br />repositories have their `visibility` field set to `selected`.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
</tr>
<tr>
    <td><a href="#remove_selected_repo_from_org_variable"><CopyableCode code="remove_selected_repo_from_org_variable" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Removes a repository from an organization variable that is<br />available to selected repositories. Organization variables that are available to<br />selected repositories have their `visibility` field set to `selected`.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the variable.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-repository_id">
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_selected_repos_for_org_variable"
    values={[
        { label: 'list_selected_repos_for_org_variable', value: 'list_selected_repos_for_org_variable' }
    ]}
>
<TabItem value="list_selected_repos_for_org_variable">

Lists all repositories that can access an organization variable<br />that is available to selected repositories.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
SELECT
repositories,
total_count
FROM github.actions.repos_for_org_variable
WHERE org = '{{ org }}' -- required
AND name = '{{ name }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_selected_repo_to_org_variable"
    values={[
        { label: 'add_selected_repo_to_org_variable', value: 'add_selected_repo_to_org_variable' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_selected_repo_to_org_variable">

Adds a repository to an organization variable that is available to selected repositories.<br />Organization variables that are available to selected repositories have their `visibility` field set to `selected`.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.repos_for_org_variable (
org,
name,
repository_id
)
SELECT 
'{{ org }}',
'{{ name }}',
'{{ repository_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repos_for_org_variable
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the repos_for_org_variable resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the repos_for_org_variable resource.
    - name: repository_id
      value: {{ repository_id }}
      description: Required parameter for the repos_for_org_variable resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_selected_repos_for_org_variable"
    values={[
        { label: 'set_selected_repos_for_org_variable', value: 'set_selected_repos_for_org_variable' }
    ]}
>
<TabItem value="set_selected_repos_for_org_variable">

Replaces all repositories for an organization variable that is available<br />to selected repositories. Organization variables that are available to selected<br />repositories have their `visibility` field set to `selected`.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
REPLACE github.actions.repos_for_org_variable
SET 
selected_repository_ids = '{{ selected_repository_ids }}'
WHERE 
org = '{{ org }}' --required
AND name = '{{ name }}' --required
AND selected_repository_ids = '{{ selected_repository_ids }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_selected_repo_from_org_variable"
    values={[
        { label: 'remove_selected_repo_from_org_variable', value: 'remove_selected_repo_from_org_variable' }
    ]}
>
<TabItem value="remove_selected_repo_from_org_variable">

Removes a repository from an organization variable that is<br />available to selected repositories. Organization variables that are available to<br />selected repositories have their `visibility` field set to `selected`.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
DELETE FROM github.actions.repos_for_org_variable
WHERE org = '{{ org }}' --required
AND name = '{{ name }}' --required
AND repository_id = '{{ repository_id }}' --required
;
```
</TabItem>
</Tabs>
