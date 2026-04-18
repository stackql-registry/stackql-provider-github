--- 
title: branch_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - branch_policies
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

Creates, updates, deletes, gets or lists a <code>branch_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="branch_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.branch_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_branch_policy"
    values={[
        { label: 'get_deployment_branch_policy', value: 'get_deployment_branch_policy' },
        { label: 'list_deployment_branch_policies', value: 'list_deployment_branch_policies' }
    ]}
>
<TabItem value="get_deployment_branch_policy">

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
    <td>The unique identifier of the branch or tag policy.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name pattern that branches or tags must match in order to deploy to the environment. (example: release/*)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDE2OkdhdGVCcmFuY2hQb2xpY3kzNjE0NzE=)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Whether this rule targets a branch or tag. (branch, tag) (example: branch)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_branch_policies">

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
    <td><CopyableCode code="branch_policies" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>The number of deployment branch policies for the environment.</td>
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
    <td><a href="#get_deployment_branch_policy"><CopyableCode code="get_deployment_branch_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-branch_policy_id"><code>branch_policy_id</code></a></td>
    <td></td>
    <td>Gets a deployment branch or tag policy for an environment.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#list_deployment_branch_policies"><CopyableCode code="list_deployment_branch_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the deployment branch policies for an environment.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#create_deployment_branch_policy"><CopyableCode code="create_deployment_branch_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a deployment branch or tag policy for an environment.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_deployment_branch_policy"><CopyableCode code="update_deployment_branch_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-branch_policy_id"><code>branch_policy_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a deployment branch or tag policy for an environment.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_deployment_branch_policy"><CopyableCode code="delete_deployment_branch_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-branch_policy_id"><code>branch_policy_id</code></a></td>
    <td></td>
    <td>Deletes a deployment branch or tag policy for an environment.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-branch_policy_id">
    <td><CopyableCode code="branch_policy_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the branch policy.</td>
</tr>
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.</td>
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
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_deployment_branch_policy"
    values={[
        { label: 'get_deployment_branch_policy', value: 'get_deployment_branch_policy' },
        { label: 'list_deployment_branch_policies', value: 'list_deployment_branch_policies' }
    ]}
>
<TabItem value="get_deployment_branch_policy">

Gets a deployment branch or tag policy for an environment.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
id,
name,
node_id,
type
FROM github.repos.branch_policies
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND branch_policy_id = '{{ branch_policy_id }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_branch_policies">

Lists the deployment branch policies for an environment.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
branch_policies,
total_count
FROM github.repos.branch_policies
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment_branch_policy"
    values={[
        { label: 'create_deployment_branch_policy', value: 'create_deployment_branch_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment_branch_policy">

Creates a deployment branch or tag policy for an environment.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.repos.branch_policies (
name,
type,
owner,
repo,
environment_name
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}',
'{{ owner }}',
'{{ repo }}',
'{{ environment_name }}'
RETURNING
id,
name,
node_id,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: branch_policies
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the branch_policies resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the branch_policies resource.
    - name: environment_name
      value: "{{ environment_name }}"
      description: Required parameter for the branch_policies resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name pattern that branches or tags must match in order to deploy to the environment.
        Wildcard characters will not match \`/\`. For example, to match branches that begin with \`release/\` and contain an additional single slash, use \`release/*/*\`.
        For more information about pattern matching syntax, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
    - name: type
      value: "{{ type }}"
      description: |
        Whether this rule targets a branch or tag
      valid_values: ['branch', 'tag']
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_deployment_branch_policy"
    values={[
        { label: 'update_deployment_branch_policy', value: 'update_deployment_branch_policy' }
    ]}
>
<TabItem value="update_deployment_branch_policy">

Updates a deployment branch or tag policy for an environment.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.repos.branch_policies
SET 
name = '{{ name }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND environment_name = '{{ environment_name }}' --required
AND branch_policy_id = '{{ branch_policy_id }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
node_id,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment_branch_policy"
    values={[
        { label: 'delete_deployment_branch_policy', value: 'delete_deployment_branch_policy' }
    ]}
>
<TabItem value="delete_deployment_branch_policy">

Deletes a deployment branch or tag policy for an environment.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.repos.branch_policies
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND environment_name = '{{ environment_name }}' --required
AND branch_policy_id = '{{ branch_policy_id }}' --required
;
```
</TabItem>
</Tabs>
