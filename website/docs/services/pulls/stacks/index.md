--- 
title: stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - stacks
  - pulls
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

Creates, updates, deletes, gets or lists a <code>stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.pulls.stacks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="base" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="open" /></td>
    <td><code>boolean</code></td>
    <td>Whether the stack has any open pull request. False when all pull requests are merged or closed.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_requests" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="base" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="open" /></td>
    <td><code>boolean</code></td>
    <td>Whether the stack has any open pull request. False when all pull requests are merged or closed.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_requests" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-stack_number"><code>stack_number</code></a></td>
    <td></td>
    <td>Gets a pull request stack by providing its stack number.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-pull_request"><code>pull_request</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists pull request stacks in a repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_requests"><code>pull_requests</code></a></td>
    <td></td>
    <td>Creates a stack from an ordered list of pull request numbers. Provide the pull<br />request numbers from the bottom of the stack to the top. Each pull request's<br />base ref must match the previous pull request's head ref.</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-stack_number"><code>stack_number</code></a>, <a href="#parameter-pull_requests"><code>pull_requests</code></a></td>
    <td></td>
    <td>Appends an ordered list of pull request numbers onto the top of an existing<br />stack. Provide only the pull requests you want to add, from the current top of<br />the stack upward. The first new pull request's base ref must match the current<br />top pull request's head ref.</td>
</tr>
<tr>
    <td><a href="#unstack"><CopyableCode code="unstack" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-stack_number"><code>stack_number</code></a></td>
    <td></td>
    <td>Removes the unmerged pull requests from a stack. Pull requests that cannot be<br />unstacked (for example, those that are queued for merge) are left in place. When pull requests remain in the stack, the updated<br />stack is returned with a `200`. When no pull requests remain, the stack is<br />dissolved and a `204` is returned.</td>
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
<tr id="parameter-stack_number">
    <td><CopyableCode code="stack_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the pull request stack.</td>
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
<tr id="parameter-pull_request">
    <td><CopyableCode code="pull_request" /></td>
    <td><code>integer</code></td>
    <td>Filter to the stack containing this repository pull request number.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a pull request stack by providing its stack number.

```sql
SELECT
id,
node_id,
base,
created_at,
number,
open,
pull_requests,
url
FROM github.pulls.stacks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND stack_number = '{{ stack_number }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists pull request stacks in a repository.

```sql
SELECT
id,
node_id,
base,
created_at,
number,
open,
pull_requests,
url
FROM github.pulls.stacks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND pull_request = '{{ pull_request }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a stack from an ordered list of pull request numbers. Provide the pull<br />request numbers from the bottom of the stack to the top. Each pull request's<br />base ref must match the previous pull request's head ref.

```sql
INSERT INTO github.pulls.stacks (
pull_requests,
owner,
repo
)
SELECT 
'{{ pull_requests }}' /* required */,
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
node_id,
base,
created_at,
number,
open,
pull_requests,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: stacks
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the stacks resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the stacks resource.
    - name: pull_requests
      value:
        - {{ pull_requests }}
      description: |
        An ordered list of pull request numbers forming the stack from bottom to top.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' },
        { label: 'unstack', value: 'unstack' }
    ]}
>
<TabItem value="add">

Appends an ordered list of pull request numbers onto the top of an existing<br />stack. Provide only the pull requests you want to add, from the current top of<br />the stack upward. The first new pull request's base ref must match the current<br />top pull request's head ref.

```sql
EXEC github.pulls.stacks.add 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@stack_number='{{ stack_number }}' --required 
@@json=
'{
"pull_requests": "{{ pull_requests }}"
}'
;
```
</TabItem>
<TabItem value="unstack">

Removes the unmerged pull requests from a stack. Pull requests that cannot be<br />unstacked (for example, those that are queued for merge) are left in place. When pull requests remain in the stack, the updated<br />stack is returned with a `200`. When no pull requests remain, the stack is<br />dissolved and a `204` is returned.

```sql
EXEC github.pulls.stacks.unstack 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@stack_number='{{ stack_number }}' --required
;
```
</TabItem>
</Tabs>
