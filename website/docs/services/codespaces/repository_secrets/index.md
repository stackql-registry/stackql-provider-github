--- 
title: repository_secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_secrets
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

Creates, updates, deletes, gets or lists a <code>repository_secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codespaces.repository_secrets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repo_secret"
    values={[
        { label: 'get_repo_secret', value: 'get_repo_secret' },
        { label: 'list_repo_secrets', value: 'list_repo_secrets' }
    ]}
>
<TabItem value="get_repo_secret">

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
    <td>The name of the secret. (example: SECRET_TOKEN)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repo_secrets">

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
    <td><CopyableCode code="secrets" /></td>
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
    <td><a href="#get_repo_secret"><CopyableCode code="get_repo_secret" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Gets a single repository development environment secret without revealing its encrypted value.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_repo_secrets"><CopyableCode code="list_repo_secrets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all development environment secrets available in a repository without revealing their encrypted<br />values.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_or_update_repo_secret"><CopyableCode code="create_or_update_repo_secret" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Creates or updates a repository development environment secret with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint. The associated user must be a repository admin.</td>
</tr>
<tr>
    <td><a href="#delete_repo_secret"><CopyableCode code="delete_repo_secret" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Deletes a development environment secret in a repository using the secret name.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint. The associated user must be a repository admin.</td>
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
<tr id="parameter-secret_name">
    <td><CopyableCode code="secret_name" /></td>
    <td><code>string</code></td>
    <td>The name of the secret.</td>
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
    defaultValue="get_repo_secret"
    values={[
        { label: 'get_repo_secret', value: 'get_repo_secret' },
        { label: 'list_repo_secrets', value: 'list_repo_secrets' }
    ]}
>
<TabItem value="get_repo_secret">

Gets a single repository development environment secret without revealing its encrypted value.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
name,
created_at,
updated_at
FROM github.codespaces.repository_secrets
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND secret_name = '{{ secret_name }}' -- required
;
```
</TabItem>
<TabItem value="list_repo_secrets">

Lists all development environment secrets available in a repository without revealing their encrypted<br />values.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
secrets,
total_count
FROM github.codespaces.repository_secrets
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
    defaultValue="create_or_update_repo_secret"
    values={[
        { label: 'create_or_update_repo_secret', value: 'create_or_update_repo_secret' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_or_update_repo_secret">

Creates or updates a repository development environment secret with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint. The associated user must be a repository admin.

```sql
INSERT INTO github.codespaces.repository_secrets (
encrypted_value,
key_id,
owner,
repo,
secret_name
)
SELECT 
'{{ encrypted_value }}',
'{{ key_id }}',
'{{ owner }}',
'{{ repo }}',
'{{ secret_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repository_secrets
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the repository_secrets resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the repository_secrets resource.
    - name: secret_name
      value: "{{ secret_name }}"
      description: Required parameter for the repository_secrets resource.
    - name: encrypted_value
      value: "{{ encrypted_value }}"
      description: |
        Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/codespaces/repository-secrets#get-a-repository-public-key) endpoint.
    - name: key_id
      value: "{{ key_id }}"
      description: |
        ID of the key you used to encrypt the secret.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repo_secret"
    values={[
        { label: 'delete_repo_secret', value: 'delete_repo_secret' }
    ]}
>
<TabItem value="delete_repo_secret">

Deletes a development environment secret in a repository using the secret name.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint. The associated user must be a repository admin.

```sql
DELETE FROM github.codespaces.repository_secrets
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND secret_name = '{{ secret_name }}' --required
;
```
</TabItem>
</Tabs>
