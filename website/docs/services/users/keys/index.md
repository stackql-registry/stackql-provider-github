--- 
title: keys
hide_title: false
hide_table_of_contents: false
keywords:
  - keys
  - users
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

Creates, updates, deletes, gets or lists a <code>keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_public_ssh_key_for_authenticated_user"
    values={[
        { label: 'get_public_ssh_key_for_authenticated_user', value: 'get_public_ssh_key_for_authenticated_user' },
        { label: 'list_public_keys_for_user', value: 'list_public_keys_for_user' },
        { label: 'list_public_ssh_keys_for_authenticated_user', value: 'list_public_ssh_keys_for_authenticated_user' }
    ]}
>
<TabItem value="get_public_ssh_key_for_authenticated_user">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
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
<TabItem value="list_public_keys_for_user">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
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
</tbody>
</table>
</TabItem>
<TabItem value="list_public_ssh_keys_for_authenticated_user">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
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
    <td><a href="#get_public_ssh_key_for_authenticated_user"><CopyableCode code="get_public_ssh_key_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td>View extended details for a single public SSH key.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:public_key` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_public_keys_for_user"><CopyableCode code="list_public_keys_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the _verified_ public SSH keys for a user. This is accessible by anyone.</td>
</tr>
<tr>
    <td><a href="#list_public_ssh_keys_for_authenticated_user"><CopyableCode code="list_public_ssh_keys_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the public SSH keys for the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:public_key` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_public_ssh_key_for_authenticated_user"><CopyableCode code="create_public_ssh_key_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td></td>
    <td>Adds a public SSH key to the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:public_key` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_public_ssh_key_for_authenticated_user"><CopyableCode code="delete_public_ssh_key_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td>Removes a public SSH key from the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:public_key` scope to use this endpoint.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
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
    defaultValue="get_public_ssh_key_for_authenticated_user"
    values={[
        { label: 'get_public_ssh_key_for_authenticated_user', value: 'get_public_ssh_key_for_authenticated_user' },
        { label: 'list_public_keys_for_user', value: 'list_public_keys_for_user' },
        { label: 'list_public_ssh_keys_for_authenticated_user', value: 'list_public_ssh_keys_for_authenticated_user' }
    ]}
>
<TabItem value="get_public_ssh_key_for_authenticated_user">

View extended details for a single public SSH key.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:public_key` scope to use this endpoint.

```sql
SELECT
id,
created_at,
key,
last_used,
read_only,
title,
url,
verified
FROM github.users.keys
WHERE key_id = '{{ key_id }}' -- required
;
```
</TabItem>
<TabItem value="list_public_keys_for_user">

Lists the _verified_ public SSH keys for a user. This is accessible by anyone.

```sql
SELECT
id,
created_at,
key,
last_used
FROM github.users.keys
WHERE username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_public_ssh_keys_for_authenticated_user">

Lists the public SSH keys for the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:public_key` scope to use this endpoint.

```sql
SELECT
id,
created_at,
key,
last_used,
read_only,
title,
url,
verified
FROM github.users.keys
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_public_ssh_key_for_authenticated_user"
    values={[
        { label: 'create_public_ssh_key_for_authenticated_user', value: 'create_public_ssh_key_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_public_ssh_key_for_authenticated_user">

Adds a public SSH key to the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:public_key` scope to use this endpoint.

```sql
INSERT INTO github.users.keys (
title,
key
)
SELECT 
'{{ title }}',
'{{ key }}' /* required */
RETURNING
id,
created_at,
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
- name: keys
  props:
    - name: title
      value: "{{ title }}"
      description: |
        A descriptive name for the new key.
    - name: key
      value: "{{ key }}"
      description: |
        The public SSH key to add to your GitHub account.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_public_ssh_key_for_authenticated_user"
    values={[
        { label: 'delete_public_ssh_key_for_authenticated_user', value: 'delete_public_ssh_key_for_authenticated_user' }
    ]}
>
<TabItem value="delete_public_ssh_key_for_authenticated_user">

Removes a public SSH key from the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:public_key` scope to use this endpoint.

```sql
DELETE FROM github.users.keys
WHERE key_id = '{{ key_id }}' --required
;
```
</TabItem>
</Tabs>
