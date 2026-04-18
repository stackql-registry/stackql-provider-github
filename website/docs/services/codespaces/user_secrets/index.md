--- 
title: user_secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - user_secrets
  - codespaces
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

Creates, updates, deletes, gets or lists a <code>user_secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codespaces.user_secrets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repositories_for_secret_for_authenticated_user"
    values={[
        { label: 'list_repositories_for_secret_for_authenticated_user', value: 'list_repositories_for_secret_for_authenticated_user' }
    ]}
>
<TabItem value="list_repositories_for_secret_for_authenticated_user">

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
    <td><a href="#list_repositories_for_secret_for_authenticated_user"><CopyableCode code="list_repositories_for_secret_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>List the repositories that have been granted the ability to use a user's development environment secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#add_repository_for_secret_for_authenticated_user"><CopyableCode code="add_repository_for_secret_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-secret_name"><code>secret_name</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Adds a repository to the selected repositories for a user's development environment secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_repositories_for_secret_for_authenticated_user"><CopyableCode code="set_repositories_for_secret_for_authenticated_user" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-secret_name"><code>secret_name</code></a>, <a href="#parameter-selected_repository_ids"><code>selected_repository_ids</code></a></td>
    <td></td>
    <td>Select the repositories that will use a user's development environment secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#remove_repository_for_secret_for_authenticated_user"><CopyableCode code="remove_repository_for_secret_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-secret_name"><code>secret_name</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Removes a repository from the selected repositories for a user's development environment secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.</td>
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
<tr id="parameter-repository_id">
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-secret_name">
    <td><CopyableCode code="secret_name" /></td>
    <td><code>string</code></td>
    <td>The name of the secret.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_repositories_for_secret_for_authenticated_user"
    values={[
        { label: 'list_repositories_for_secret_for_authenticated_user', value: 'list_repositories_for_secret_for_authenticated_user' }
    ]}
>
<TabItem value="list_repositories_for_secret_for_authenticated_user">

List the repositories that have been granted the ability to use a user's development environment secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```sql
SELECT
repositories,
total_count
FROM github.codespaces.user_secrets
WHERE secret_name = '{{ secret_name }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_repository_for_secret_for_authenticated_user"
    values={[
        { label: 'add_repository_for_secret_for_authenticated_user', value: 'add_repository_for_secret_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_repository_for_secret_for_authenticated_user">

Adds a repository to the selected repositories for a user's development environment secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```sql
INSERT INTO github.codespaces.user_secrets (
secret_name,
repository_id
)
SELECT 
'{{ secret_name }}',
'{{ repository_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_secrets
  props:
    - name: secret_name
      value: "{{ secret_name }}"
      description: Required parameter for the user_secrets resource.
    - name: repository_id
      value: {{ repository_id }}
      description: Required parameter for the user_secrets resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_repositories_for_secret_for_authenticated_user"
    values={[
        { label: 'set_repositories_for_secret_for_authenticated_user', value: 'set_repositories_for_secret_for_authenticated_user' }
    ]}
>
<TabItem value="set_repositories_for_secret_for_authenticated_user">

Select the repositories that will use a user's development environment secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```sql
REPLACE github.codespaces.user_secrets
SET 
selected_repository_ids = '{{ selected_repository_ids }}'
WHERE 
secret_name = '{{ secret_name }}' --required
AND selected_repository_ids = '{{ selected_repository_ids }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_repository_for_secret_for_authenticated_user"
    values={[
        { label: 'remove_repository_for_secret_for_authenticated_user', value: 'remove_repository_for_secret_for_authenticated_user' }
    ]}
>
<TabItem value="remove_repository_for_secret_for_authenticated_user">

Removes a repository from the selected repositories for a user's development environment secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```sql
DELETE FROM github.codespaces.user_secrets
WHERE secret_name = '{{ secret_name }}' --required
AND repository_id = '{{ repository_id }}' --required
;
```
</TabItem>
</Tabs>
