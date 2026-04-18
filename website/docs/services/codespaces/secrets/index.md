--- 
title: secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets
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

Creates, updates, deletes, gets or lists a <code>secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codespaces.secrets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_secret_for_authenticated_user"
    values={[
        { label: 'get_secret_for_authenticated_user', value: 'get_secret_for_authenticated_user' },
        { label: 'list_secrets_for_authenticated_user', value: 'list_secrets_for_authenticated_user' }
    ]}
>
<TabItem value="get_secret_for_authenticated_user">

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
    <td>The name of the secret (example: SECRET_NAME)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="selected_repositories_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL at which the list of repositories this secret is visible to can be retrieved (example: https://api.github.com/user/secrets/SECRET_NAME/repositories)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the secret was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The type of repositories in the organization that the secret is visible to (all, private, selected)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_secrets_for_authenticated_user">

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
    <td><a href="#get_secret_for_authenticated_user"><CopyableCode code="get_secret_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Gets a development environment secret available to a user's codespaces without revealing its encrypted value.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_secrets_for_authenticated_user"><CopyableCode code="list_secrets_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all development environment secrets available for a user's codespaces without revealing their<br />encrypted values.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_or_update_secret_for_authenticated_user"><CopyableCode code="create_or_update_secret_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-secret_name"><code>secret_name</code></a>, <a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td>Creates or updates a development environment secret for a user's codespace with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_secret_for_authenticated_user"><CopyableCode code="delete_secret_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Deletes a development environment secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.</td>
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
    defaultValue="get_secret_for_authenticated_user"
    values={[
        { label: 'get_secret_for_authenticated_user', value: 'get_secret_for_authenticated_user' },
        { label: 'list_secrets_for_authenticated_user', value: 'list_secrets_for_authenticated_user' }
    ]}
>
<TabItem value="get_secret_for_authenticated_user">

Gets a development environment secret available to a user's codespaces without revealing its encrypted value.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```sql
SELECT
name,
created_at,
selected_repositories_url,
updated_at,
visibility
FROM github.codespaces.secrets
WHERE secret_name = '{{ secret_name }}' -- required
;
```
</TabItem>
<TabItem value="list_secrets_for_authenticated_user">

Lists all development environment secrets available for a user's codespaces without revealing their<br />encrypted values.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```sql
SELECT
secrets,
total_count
FROM github.codespaces.secrets
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_or_update_secret_for_authenticated_user"
    values={[
        { label: 'create_or_update_secret_for_authenticated_user', value: 'create_or_update_secret_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_or_update_secret_for_authenticated_user">

Creates or updates a development environment secret for a user's codespace with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```sql
INSERT INTO github.codespaces.secrets (
encrypted_value,
key_id,
selected_repository_ids,
secret_name
)
SELECT 
'{{ encrypted_value }}',
'{{ key_id }}' /* required */,
'{{ selected_repository_ids }}',
'{{ secret_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: secrets
  props:
    - name: secret_name
      value: "{{ secret_name }}"
      description: Required parameter for the secrets resource.
    - name: encrypted_value
      value: "{{ encrypted_value }}"
      description: |
        Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get the public key for the authenticated user](https://docs.github.com/rest/codespaces/secrets#get-public-key-for-the-authenticated-user) endpoint.
    - name: key_id
      value: "{{ key_id }}"
      description: |
        ID of the key you used to encrypt the secret.
    - name: selected_repository_ids
      value: "{{ selected_repository_ids }}"
      description: |
        An array of repository ids that can access the user secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#list-selected-repositories-for-a-user-secret), [Set selected repositories for a user secret](https://docs.github.com/rest/codespaces/secrets#set-selected-repositories-for-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/codespaces/secrets#remove-a-selected-repository-from-a-user-secret) endpoints.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_secret_for_authenticated_user"
    values={[
        { label: 'delete_secret_for_authenticated_user', value: 'delete_secret_for_authenticated_user' }
    ]}
>
<TabItem value="delete_secret_for_authenticated_user">

Deletes a development environment secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.<br /><br />The authenticated user must have Codespaces access to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` or `codespace:secrets` scope to use this endpoint.

```sql
DELETE FROM github.codespaces.secrets
WHERE secret_name = '{{ secret_name }}' --required
;
```
</TabItem>
</Tabs>
