--- 
title: gpg_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - gpg_keys
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

Creates, updates, deletes, gets or lists a <code>gpg_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gpg_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.gpg_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gpg_key_for_authenticated_user"
    values={[
        { label: 'get_gpg_key_for_authenticated_user', value: 'get_gpg_key_for_authenticated_user' },
        { label: 'list_gpg_keys_for_user', value: 'list_gpg_keys_for_user' },
        { label: 'list_gpg_keys_for_authenticated_user', value: 'list_gpg_keys_for_authenticated_user' }
    ]}
>
<TabItem value="get_gpg_key_for_authenticated_user">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: Octocat's GPG Key)</td>
</tr>
<tr>
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td> (example: 3262EFF25BA0D270)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_key_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_certify" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_encrypt_comms" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_encrypt_storage" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_sign" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2016-03-24T11:31:04-06:00)</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td> (example: xsBNBFayYZ...)</td>
</tr>
<tr>
    <td><CopyableCode code="raw_key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="revoked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subkeys" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gpg_keys_for_user">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: Octocat's GPG Key)</td>
</tr>
<tr>
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td> (example: 3262EFF25BA0D270)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_key_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_certify" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_encrypt_comms" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_encrypt_storage" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_sign" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2016-03-24T11:31:04-06:00)</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td> (example: xsBNBFayYZ...)</td>
</tr>
<tr>
    <td><CopyableCode code="raw_key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="revoked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subkeys" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gpg_keys_for_authenticated_user">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: Octocat's GPG Key)</td>
</tr>
<tr>
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td> (example: 3262EFF25BA0D270)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_key_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_certify" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_encrypt_comms" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_encrypt_storage" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="can_sign" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2016-03-24T11:31:04-06:00)</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td> (example: xsBNBFayYZ...)</td>
</tr>
<tr>
    <td><CopyableCode code="raw_key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="revoked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subkeys" /></td>
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
    <td><a href="#get_gpg_key_for_authenticated_user"><CopyableCode code="get_gpg_key_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gpg_key_id"><code>gpg_key_id</code></a></td>
    <td></td>
    <td>View extended details for a single GPG key.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:gpg_key` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_gpg_keys_for_user"><CopyableCode code="list_gpg_keys_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the GPG keys for a user. This information is accessible by anyone.</td>
</tr>
<tr>
    <td><a href="#list_gpg_keys_for_authenticated_user"><CopyableCode code="list_gpg_keys_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the current user's GPG keys.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:gpg_key` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_gpg_key_for_authenticated_user"><CopyableCode code="create_gpg_key_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-armored_public_key"><code>armored_public_key</code></a></td>
    <td></td>
    <td>Adds a GPG key to the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:gpg_key` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_gpg_key_for_authenticated_user"><CopyableCode code="delete_gpg_key_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gpg_key_id"><code>gpg_key_id</code></a></td>
    <td></td>
    <td>Removes a GPG key from the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:gpg_key` scope to use this endpoint.</td>
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
<tr id="parameter-gpg_key_id">
    <td><CopyableCode code="gpg_key_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the GPG key.</td>
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
    defaultValue="get_gpg_key_for_authenticated_user"
    values={[
        { label: 'get_gpg_key_for_authenticated_user', value: 'get_gpg_key_for_authenticated_user' },
        { label: 'list_gpg_keys_for_user', value: 'list_gpg_keys_for_user' },
        { label: 'list_gpg_keys_for_authenticated_user', value: 'list_gpg_keys_for_authenticated_user' }
    ]}
>
<TabItem value="get_gpg_key_for_authenticated_user">

View extended details for a single GPG key.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:gpg_key` scope to use this endpoint.

```sql
SELECT
id,
name,
key_id,
primary_key_id,
can_certify,
can_encrypt_comms,
can_encrypt_storage,
can_sign,
created_at,
emails,
expires_at,
public_key,
raw_key,
revoked,
subkeys
FROM github.users.gpg_keys
WHERE gpg_key_id = '{{ gpg_key_id }}' -- required
;
```
</TabItem>
<TabItem value="list_gpg_keys_for_user">

Lists the GPG keys for a user. This information is accessible by anyone.

```sql
SELECT
id,
name,
key_id,
primary_key_id,
can_certify,
can_encrypt_comms,
can_encrypt_storage,
can_sign,
created_at,
emails,
expires_at,
public_key,
raw_key,
revoked,
subkeys
FROM github.users.gpg_keys
WHERE username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_gpg_keys_for_authenticated_user">

Lists the current user's GPG keys.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:gpg_key` scope to use this endpoint.

```sql
SELECT
id,
name,
key_id,
primary_key_id,
can_certify,
can_encrypt_comms,
can_encrypt_storage,
can_sign,
created_at,
emails,
expires_at,
public_key,
raw_key,
revoked,
subkeys
FROM github.users.gpg_keys
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gpg_key_for_authenticated_user"
    values={[
        { label: 'create_gpg_key_for_authenticated_user', value: 'create_gpg_key_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gpg_key_for_authenticated_user">

Adds a GPG key to the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:gpg_key` scope to use this endpoint.

```sql
INSERT INTO github.users.gpg_keys (
name,
armored_public_key
)
SELECT 
'{{ name }}',
'{{ armored_public_key }}' /* required */
RETURNING
id,
name,
key_id,
primary_key_id,
can_certify,
can_encrypt_comms,
can_encrypt_storage,
can_sign,
created_at,
emails,
expires_at,
public_key,
raw_key,
revoked,
subkeys
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gpg_keys
  props:
    - name: name
      value: "{{ name }}"
      description: |
        A descriptive name for the new key.
    - name: armored_public_key
      value: "{{ armored_public_key }}"
      description: |
        A GPG key in ASCII-armored format.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gpg_key_for_authenticated_user"
    values={[
        { label: 'delete_gpg_key_for_authenticated_user', value: 'delete_gpg_key_for_authenticated_user' }
    ]}
>
<TabItem value="delete_gpg_key_for_authenticated_user">

Removes a GPG key from the authenticated user's GitHub account.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:gpg_key` scope to use this endpoint.

```sql
DELETE FROM github.users.gpg_keys
WHERE gpg_key_id = '{{ gpg_key_id }}' --required
;
```
</TabItem>
</Tabs>
