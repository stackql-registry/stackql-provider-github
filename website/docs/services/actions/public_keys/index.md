--- 
title: public_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - public_keys
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

Creates, updates, deletes, gets or lists a <code>public_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.public_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_public_key"
    values={[
        { label: 'get_environment_public_key', value: 'get_environment_public_key' },
        { label: 'get_repo_public_key', value: 'get_repo_public_key' },
        { label: 'get_org_public_key', value: 'get_org_public_key' }
    ]}
>
<TabItem value="get_environment_public_key">

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
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the key. (example: 1234567)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The Base64 encoded public key. (example: hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs=)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td> (example: ssh-rsa AAAAB3NzaC1yc2EAAA)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/user/keys/2)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_repo_public_key">

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
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the key. (example: 1234567)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The Base64 encoded public key. (example: hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs=)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td> (example: ssh-rsa AAAAB3NzaC1yc2EAAA)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/user/keys/2)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_org_public_key">

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
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the key. (example: 1234567)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The Base64 encoded public key. (example: hBT5WZEj8ZoOv6TYJsfWq7MxTEQopZO5/IT3ZCVQPzs=)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td> (example: ssh-rsa AAAAB3NzaC1yc2EAAA)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/user/keys/2)</td>
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
    <td><a href="#get_environment_public_key"><CopyableCode code="get_environment_public_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td></td>
    <td>Get the public key for an environment, which you need to encrypt environment<br />secrets. You need to encrypt a secret before you can create or update secrets.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_repo_public_key"><CopyableCode code="get_repo_public_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets your public key, which you need to encrypt secrets. You need to<br />encrypt a secret before you can create or update secrets.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_org_public_key"><CopyableCode code="get_org_public_key" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets your public key, which you need to encrypt secrets. You need to<br />encrypt a secret before you can create or update secrets.<br /><br />The authenticated user must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment_public_key"
    values={[
        { label: 'get_environment_public_key', value: 'get_environment_public_key' },
        { label: 'get_repo_public_key', value: 'get_repo_public_key' },
        { label: 'get_org_public_key', value: 'get_org_public_key' }
    ]}
>
<TabItem value="get_environment_public_key">

Get the public key for an environment, which you need to encrypt environment<br />secrets. You need to encrypt a secret before you can create or update secrets.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
id,
key_id,
created_at,
key,
title,
url
FROM github.actions.public_keys
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
;
```
</TabItem>
<TabItem value="get_repo_public_key">

Gets your public key, which you need to encrypt secrets. You need to<br />encrypt a secret before you can create or update secrets.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
id,
key_id,
created_at,
key,
title,
url
FROM github.actions.public_keys
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
<TabItem value="get_org_public_key">

Gets your public key, which you need to encrypt secrets. You need to<br />encrypt a secret before you can create or update secrets.<br /><br />The authenticated user must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
id,
key_id,
created_at,
key,
title,
url
FROM github.actions.public_keys
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>
