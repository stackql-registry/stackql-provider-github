--- 
title: secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - secrets
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

Creates, updates, deletes, gets or lists a <code>secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.secrets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_secret"
    values={[
        { label: 'get_environment_secret', value: 'get_environment_secret' },
        { label: 'get_repo_secret', value: 'get_repo_secret' },
        { label: 'list_environment_secrets', value: 'list_environment_secrets' },
        { label: 'get_org_secret', value: 'get_org_secret' },
        { label: 'list_repo_secrets', value: 'list_repo_secrets' },
        { label: 'list_org_secrets', value: 'list_org_secrets' }
    ]}
>
<TabItem value="get_environment_secret">

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
<TabItem value="list_environment_secrets">

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
<TabItem value="get_org_secret">

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
    <td><CopyableCode code="selected_repositories_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/organizations/org/secrets/my_secret/repositories)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Visibility of a secret (all, private, selected)</td>
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
<TabItem value="list_org_secrets">

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
    <td><a href="#get_environment_secret"><CopyableCode code="get_environment_secret" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Gets a single environment secret without revealing its encrypted value.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_repo_secret"><CopyableCode code="get_repo_secret" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Gets a single repository secret without revealing its encrypted value.<br /><br />The authenticated user must have collaborator access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_environment_secrets"><CopyableCode code="list_environment_secrets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all secrets available in an environment without revealing their<br />encrypted values.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_org_secret"><CopyableCode code="get_org_secret" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Gets a single organization secret without revealing its encrypted value.<br /><br />The authenticated user must have collaborator access to a repository to create, update, or read secrets<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_repo_secrets"><CopyableCode code="list_repo_secrets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all secrets available in a repository without revealing their encrypted<br />values.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_org_secrets"><CopyableCode code="list_org_secrets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all secrets available in an organization without revealing their<br />encrypted values.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
</tr>
<tr>
    <td><a href="#create_or_update_environment_secret"><CopyableCode code="create_or_update_environment_secret" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a>, <a href="#parameter-encrypted_value"><code>encrypted_value</code></a>, <a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td>Creates or updates an environment secret with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_or_update_repo_secret"><CopyableCode code="create_or_update_repo_secret" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a>, <a href="#parameter-encrypted_value"><code>encrypted_value</code></a>, <a href="#parameter-key_id"><code>key_id</code></a></td>
    <td></td>
    <td>Creates or updates a repository secret with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_or_update_org_secret"><CopyableCode code="create_or_update_org_secret" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a>, <a href="#parameter-encrypted_value"><code>encrypted_value</code></a>, <a href="#parameter-key_id"><code>key_id</code></a>, <a href="#parameter-visibility"><code>visibility</code></a></td>
    <td></td>
    <td>Creates or updates an organization secret with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_environment_secret"><CopyableCode code="delete_environment_secret" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Deletes a secret in an environment using the secret name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_repo_secret"><CopyableCode code="delete_repo_secret" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Deletes a secret in a repository using the secret name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_org_secret"><CopyableCode code="delete_org_secret" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td>Deletes a secret in an organization using the secret name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
    defaultValue="get_environment_secret"
    values={[
        { label: 'get_environment_secret', value: 'get_environment_secret' },
        { label: 'get_repo_secret', value: 'get_repo_secret' },
        { label: 'list_environment_secrets', value: 'list_environment_secrets' },
        { label: 'get_org_secret', value: 'get_org_secret' },
        { label: 'list_repo_secrets', value: 'list_repo_secrets' },
        { label: 'list_org_secrets', value: 'list_org_secrets' }
    ]}
>
<TabItem value="get_environment_secret">

Gets a single environment secret without revealing its encrypted value.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
name,
created_at,
updated_at
FROM github.actions.secrets
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND secret_name = '{{ secret_name }}' -- required
;
```
</TabItem>
<TabItem value="get_repo_secret">

Gets a single repository secret without revealing its encrypted value.<br /><br />The authenticated user must have collaborator access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
name,
created_at,
updated_at
FROM github.actions.secrets
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND secret_name = '{{ secret_name }}' -- required
;
```
</TabItem>
<TabItem value="list_environment_secrets">

Lists all secrets available in an environment without revealing their<br />encrypted values.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
secrets,
total_count
FROM github.actions.secrets
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="get_org_secret">

Gets a single organization secret without revealing its encrypted value.<br /><br />The authenticated user must have collaborator access to a repository to create, update, or read secrets<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
name,
created_at,
selected_repositories_url,
updated_at,
visibility
FROM github.actions.secrets
WHERE org = '{{ org }}' -- required
AND secret_name = '{{ secret_name }}' -- required
;
```
</TabItem>
<TabItem value="list_repo_secrets">

Lists all secrets available in a repository without revealing their encrypted<br />values.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
secrets,
total_count
FROM github.actions.secrets
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_org_secrets">

Lists all secrets available in an organization without revealing their<br />encrypted values.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
SELECT
secrets,
total_count
FROM github.actions.secrets
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_or_update_environment_secret"
    values={[
        { label: 'create_or_update_environment_secret', value: 'create_or_update_environment_secret' },
        { label: 'create_or_update_repo_secret', value: 'create_or_update_repo_secret' },
        { label: 'create_or_update_org_secret', value: 'create_or_update_org_secret' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_or_update_environment_secret">

Creates or updates an environment secret with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.secrets (
encrypted_value,
key_id,
owner,
repo,
environment_name,
secret_name
)
SELECT 
'{{ encrypted_value }}' /* required */,
'{{ key_id }}' /* required */,
'{{ owner }}',
'{{ repo }}',
'{{ environment_name }}',
'{{ secret_name }}'
;
```
</TabItem>
<TabItem value="create_or_update_repo_secret">

Creates or updates a repository secret with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.secrets (
encrypted_value,
key_id,
owner,
repo,
secret_name
)
SELECT 
'{{ encrypted_value }}' /* required */,
'{{ key_id }}' /* required */,
'{{ owner }}',
'{{ repo }}',
'{{ secret_name }}'
;
```
</TabItem>
<TabItem value="create_or_update_org_secret">

Creates or updates an organization secret with an encrypted value. Encrypt your secret using<br />[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.secrets (
encrypted_value,
key_id,
visibility,
selected_repository_ids,
org,
secret_name
)
SELECT 
'{{ encrypted_value }}' /* required */,
'{{ key_id }}' /* required */,
'{{ visibility }}' /* required */,
'{{ selected_repository_ids }}',
'{{ org }}',
'{{ secret_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: secrets
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the secrets resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the secrets resource.
    - name: environment_name
      value: "{{ environment_name }}"
      description: Required parameter for the secrets resource.
    - name: secret_name
      value: "{{ secret_name }}"
      description: Required parameter for the secrets resource.
    - name: org
      value: "{{ org }}"
      description: Required parameter for the secrets resource.
    - name: encrypted_value
      value: "{{ encrypted_value }}"
      description: |
        Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/actions/secrets#get-an-organization-public-key) endpoint.
    - name: key_id
      value: "{{ key_id }}"
      description: |
        ID of the key you used to encrypt the secret.
    - name: visibility
      value: "{{ visibility }}"
      description: |
        Which type of organization repositories have access to the organization secret. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the secret.
      valid_values: ['all', 'private', 'selected']
    - name: selected_repository_ids
      value:
        - {{ selected_repository_ids }}
      description: |
        An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the \`visibility\` is set to \`selected\`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/actions/secrets#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/actions/secrets#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/actions/secrets#remove-selected-repository-from-an-organization-secret) endpoints.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_secret"
    values={[
        { label: 'delete_environment_secret', value: 'delete_environment_secret' },
        { label: 'delete_repo_secret', value: 'delete_repo_secret' },
        { label: 'delete_org_secret', value: 'delete_org_secret' }
    ]}
>
<TabItem value="delete_environment_secret">

Deletes a secret in an environment using the secret name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.secrets
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND environment_name = '{{ environment_name }}' --required
AND secret_name = '{{ secret_name }}' --required
;
```
</TabItem>
<TabItem value="delete_repo_secret">

Deletes a secret in a repository using the secret name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.secrets
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND secret_name = '{{ secret_name }}' --required
;
```
</TabItem>
<TabItem value="delete_org_secret">

Deletes a secret in an organization using the secret name.<br /><br />Authenticated users must have collaborator access to a repository to create, update, or read secrets.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.secrets
WHERE org = '{{ org }}' --required
AND secret_name = '{{ secret_name }}' --required
;
```
</TabItem>
</Tabs>
