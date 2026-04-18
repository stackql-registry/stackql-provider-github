--- 
title: variables
hide_title: false
hide_table_of_contents: false
keywords:
  - variables
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

Creates, updates, deletes, gets or lists a <code>variables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="variables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.variables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_variable"
    values={[
        { label: 'get_environment_variable', value: 'get_environment_variable' },
        { label: 'get_repo_variable', value: 'get_repo_variable' },
        { label: 'list_environment_variables', value: 'list_environment_variables' },
        { label: 'get_org_variable', value: 'get_org_variable' },
        { label: 'list_repo_variables', value: 'list_repo_variables' },
        { label: 'list_org_variables', value: 'list_org_variables' }
    ]}
>
<TabItem value="get_environment_variable">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the variable. (example: USERNAME)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. (example: 2019-01-24T22:45:36.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. (example: 2019-01-24T22:45:36.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the variable. (example: octocat)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_repo_variable">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the variable. (example: USERNAME)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. (example: 2019-01-24T22:45:36.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. (example: 2019-01-24T22:45:36.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the variable. (example: octocat)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environment_variables">

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
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_org_variable">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the variable. (example: USERNAME)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. (example: 2019-01-24T22:45:36.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="selected_repositories_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/organizations/org/variables/USERNAME/repositories)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. (example: 2019-01-24T22:45:36.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the variable. (example: octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Visibility of a variable (all, private, selected)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repo_variables">

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
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_variables">

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
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="variables" /></td>
    <td><code>array</code></td>
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
    <td><a href="#get_environment_variable"><CopyableCode code="get_environment_variable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Gets a specific variable in an environment.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_repo_variable"><CopyableCode code="get_repo_variable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Gets a specific variable in a repository.<br /><br />The authenticated user must have collaborator access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_environment_variables"><CopyableCode code="list_environment_variables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all environment variables.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_org_variable"><CopyableCode code="get_org_variable" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Gets a specific variable in an organization.<br /><br />The authenticated user must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_repo_variables"><CopyableCode code="list_repo_variables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all repository variables.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_org_variables"><CopyableCode code="list_org_variables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all organization variables.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
</tr>
<tr>
    <td><a href="#create_environment_variable"><CopyableCode code="create_environment_variable" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Create an environment variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_repo_variable"><CopyableCode code="create_repo_variable" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Creates a repository variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_org_variable"><CopyableCode code="create_org_variable" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-value"><code>value</code></a>, <a href="#parameter-visibility"><code>visibility</code></a></td>
    <td></td>
    <td>Creates an organization variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_environment_variable"><CopyableCode code="update_environment_variable" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td></td>
    <td>Updates an environment variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_repo_variable"><CopyableCode code="update_repo_variable" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a repository variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_org_variable"><CopyableCode code="update_org_variable" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates an organization variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
</tr>
<tr>
    <td><a href="#delete_environment_variable"><CopyableCode code="delete_environment_variable" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td></td>
    <td>Deletes an environment variable using the variable name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_repo_variable"><CopyableCode code="delete_repo_variable" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Deletes a repository variable using the variable name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_org_variable"><CopyableCode code="delete_org_variable" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Deletes an organization variable using the variable name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.</td>
</tr>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 30). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment_variable"
    values={[
        { label: 'get_environment_variable', value: 'get_environment_variable' },
        { label: 'get_repo_variable', value: 'get_repo_variable' },
        { label: 'list_environment_variables', value: 'list_environment_variables' },
        { label: 'get_org_variable', value: 'get_org_variable' },
        { label: 'list_repo_variables', value: 'list_repo_variables' },
        { label: 'list_org_variables', value: 'list_org_variables' }
    ]}
>
<TabItem value="get_environment_variable">

Gets a specific variable in an environment.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
name,
created_at,
updated_at,
value
FROM github.actions.variables
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="get_repo_variable">

Gets a specific variable in a repository.<br /><br />The authenticated user must have collaborator access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
name,
created_at,
updated_at,
value
FROM github.actions.variables
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list_environment_variables">

Lists all environment variables.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
total_count,
variables
FROM github.actions.variables
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="get_org_variable">

Gets a specific variable in an organization.<br /><br />The authenticated user must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
name,
created_at,
selected_repositories_url,
updated_at,
value,
visibility
FROM github.actions.variables
WHERE org = '{{ org }}' -- required
AND name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list_repo_variables">

Lists all repository variables.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
total_count,
variables
FROM github.actions.variables
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_org_variables">

Lists all organization variables.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
SELECT
total_count,
variables
FROM github.actions.variables
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_variable"
    values={[
        { label: 'create_environment_variable', value: 'create_environment_variable' },
        { label: 'create_repo_variable', value: 'create_repo_variable' },
        { label: 'create_org_variable', value: 'create_org_variable' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_variable">

Create an environment variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.variables (
name,
value,
owner,
repo,
environment_name
)
SELECT 
'{{ name }}' /* required */,
'{{ value }}' /* required */,
'{{ owner }}',
'{{ repo }}',
'{{ environment_name }}'
;
```
</TabItem>
<TabItem value="create_repo_variable">

Creates a repository variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.variables (
name,
value,
owner,
repo
)
SELECT 
'{{ name }}' /* required */,
'{{ value }}' /* required */,
'{{ owner }}',
'{{ repo }}'
;
```
</TabItem>
<TabItem value="create_org_variable">

Creates an organization variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.variables (
name,
value,
visibility,
selected_repository_ids,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ value }}' /* required */,
'{{ visibility }}' /* required */,
'{{ selected_repository_ids }}',
'{{ org }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: variables
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the variables resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the variables resource.
    - name: environment_name
      value: "{{ environment_name }}"
      description: Required parameter for the variables resource.
    - name: org
      value: "{{ org }}"
      description: Required parameter for the variables resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the variable.
    - name: value
      value: "{{ value }}"
      description: |
        The value of the variable.
    - name: visibility
      value: "{{ visibility }}"
      description: |
        The type of repositories in the organization that can access the variable. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the variable.
      valid_values: ['all', 'private', 'selected']
    - name: selected_repository_ids
      value:
        - {{ selected_repository_ids }}
      description: |
        An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment_variable"
    values={[
        { label: 'update_environment_variable', value: 'update_environment_variable' },
        { label: 'update_repo_variable', value: 'update_repo_variable' },
        { label: 'update_org_variable', value: 'update_org_variable' }
    ]}
>
<TabItem value="update_environment_variable">

Updates an environment variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
UPDATE github.actions.variables
SET 
name = '{{ name }}',
value = '{{ value }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND name = '{{ name }}' --required
AND environment_name = '{{ environment_name }}' --required;
```
</TabItem>
<TabItem value="update_repo_variable">

Updates a repository variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
UPDATE github.actions.variables
SET 
name = '{{ name }}',
value = '{{ value }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
<TabItem value="update_org_variable">

Updates an organization variable that you can reference in a GitHub Actions workflow.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
UPDATE github.actions.variables
SET 
name = '{{ name }}',
value = '{{ value }}',
visibility = '{{ visibility }}',
selected_repository_ids = '{{ selected_repository_ids }}'
WHERE 
org = '{{ org }}' --required
AND name = '{{ name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_variable"
    values={[
        { label: 'delete_environment_variable', value: 'delete_environment_variable' },
        { label: 'delete_repo_variable', value: 'delete_repo_variable' },
        { label: 'delete_org_variable', value: 'delete_org_variable' }
    ]}
>
<TabItem value="delete_environment_variable">

Deletes an environment variable using the variable name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.variables
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND name = '{{ name }}' --required
AND environment_name = '{{ environment_name }}' --required
;
```
</TabItem>
<TabItem value="delete_repo_variable">

Deletes a repository variable using the variable name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.variables
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
<TabItem value="delete_org_variable">

Deletes an organization variable using the variable name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read variables.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.variables
WHERE org = '{{ org }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>
