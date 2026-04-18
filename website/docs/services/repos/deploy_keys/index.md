--- 
title: deploy_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - deploy_keys
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

Creates, updates, deletes, gets or lists a <code>deploy_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deploy_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.deploy_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deploy_key"
    values={[
        { label: 'get_deploy_key', value: 'get_deploy_key' },
        { label: 'list_deploy_keys', value: 'list_deploy_keys' }
    ]}
>
<TabItem value="get_deploy_key">

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
    <td><CopyableCode code="added_by" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="last_used" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="read_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deploy_keys">

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
    <td><CopyableCode code="added_by" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="last_used" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="read_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
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
    <td><a href="#get_deploy_key"><CopyableCode code="get_deploy_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list_deploy_keys"><CopyableCode code="list_deploy_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create_deploy_key"><CopyableCode code="create_deploy_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td></td>
    <td>You can create a read-only deploy key.</td>
</tr>
<tr>
    <td><a href="#delete_deploy_key"><CopyableCode code="delete_deploy_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td>Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.</td>
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
<tr id="parameter-key_id">
    <td><CopyableCode code="key_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the key.</td>
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
    defaultValue="get_deploy_key"
    values={[
        { label: 'get_deploy_key', value: 'get_deploy_key' },
        { label: 'list_deploy_keys', value: 'list_deploy_keys' }
    ]}
>
<TabItem value="get_deploy_key">

Response

```sql
SELECT
id,
added_by,
created_at,
enabled,
key,
last_used,
read_only,
title,
url,
verified
FROM github.repos.deploy_keys
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND key_id = '{{ key_id }}' -- required
;
```
</TabItem>
<TabItem value="list_deploy_keys">

Response

```sql
SELECT
id,
added_by,
created_at,
enabled,
key,
last_used,
read_only,
title,
url,
verified
FROM github.repos.deploy_keys
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deploy_key"
    values={[
        { label: 'create_deploy_key', value: 'create_deploy_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deploy_key">

You can create a read-only deploy key.

```sql
INSERT INTO github.repos.deploy_keys (
title,
key,
read_only,
owner,
repo
)
SELECT 
'{{ title }}',
'{{ key }}' /* required */,
{{ read_only }},
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
added_by,
created_at,
enabled,
key,
last_used,
read_only,
title,
url,
verified
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deploy_keys
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the deploy_keys resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the deploy_keys resource.
    - name: title
      value: "{{ title }}"
      description: |
        A name for the key.
    - name: key
      value: "{{ key }}"
      description: |
        The contents of the key.
    - name: read_only
      value: {{ read_only }}
      description: |
        If \`true\`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
        Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://docs.github.com/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://docs.github.com/articles/permission-levels-for-a-user-account-repository/)."
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deploy_key"
    values={[
        { label: 'delete_deploy_key', value: 'delete_deploy_key' }
    ]}
>
<TabItem value="delete_deploy_key">

Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.

```sql
DELETE FROM github.repos.deploy_keys
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND key_id = '{{ key_id }}' --required
;
```
</TabItem>
</Tabs>
