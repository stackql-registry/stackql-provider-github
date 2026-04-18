--- 
title: private_registries
hide_title: false
hide_table_of_contents: false
keywords:
  - private_registries
  - private_registries
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

Creates, updates, deletes, gets or lists a <code>private_registries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="private_registries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.private_registries.private_registries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_private_registry"
    values={[
        { label: 'get_org_private_registry', value: 'get_org_private_registry' },
        { label: 'list_org_private_registries', value: 'list_org_private_registries' }
    ]}
>
<TabItem value="get_org_private_registry">

The specified private registry configuration for the organization

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
    <td>The name of the private registry configuration. (example: MAVEN_REPOSITORY_SECRET)</td>
</tr>
<tr>
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The client ID of the Azure AD application.</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_id" /></td>
    <td><code>string</code></td>
    <td>The tenant ID of the Azure AD application.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_mapping_name" /></td>
    <td><code>string</code></td>
    <td>The JFrog identity mapping name.</td>
</tr>
<tr>
    <td><CopyableCode code="jfrog_oidc_provider_name" /></td>
    <td><code>string</code></td>
    <td>The JFrog OIDC provider name.</td>
</tr>
<tr>
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>The AWS IAM role name.</td>
</tr>
<tr>
    <td><CopyableCode code="audience" /></td>
    <td><code>string</code></td>
    <td>The OIDC audience.</td>
</tr>
<tr>
    <td><CopyableCode code="auth_type" /></td>
    <td><code>string</code></td>
    <td>The authentication type for the private registry. (token, username_password, oidc_azure, oidc_aws, oidc_jfrog)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>The AWS region.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The CodeArtifact domain.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_owner" /></td>
    <td><code>string</code></td>
    <td>The CodeArtifact domain owner.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_type" /></td>
    <td><code>string</code></td>
    <td>The registry type. (maven_repository, nuget_feed, goproxy_server, npm_registry, rubygems_server, cargo_registry, composer_repository, docker_registry, git_source, helm_registry, hex_organization, hex_repository, pub_repository, python_index, terraform_registry)</td>
</tr>
<tr>
    <td><CopyableCode code="replaces_base" /></td>
    <td><code>boolean</code></td>
    <td>Whether this private registry replaces the base registry (e.g., npmjs.org for npm, rubygems.org for rubygems). When `true`, Dependabot will only use this registry and will not fall back to the public registry. When `false` (default), Dependabot will use this registry for scoped packages but may fall back to the public registry for other packages.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the private registry.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username to use when authenticating with the private registry. (example: monalisa)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Which type of organization repositories have access to the private registry. (all, private, selected)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_private_registries">

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
    <td><CopyableCode code="configurations" /></td>
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
    <td><a href="#get_org_private_registry"><CopyableCode code="get_org_private_registry" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td><br />Get the configuration of a single private registry defined for an organization, omitting its encrypted value.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_org_private_registries"><CopyableCode code="list_org_private_registries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td><br />Lists all private registry configurations available at the organization-level without revealing their encrypted<br />values.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_org_private_registry"><CopyableCode code="create_org_private_registry" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-registry_type"><code>registry_type</code></a>, <a href="#parameter-url"><code>url</code></a>, <a href="#parameter-visibility"><code>visibility</code></a></td>
    <td></td>
    <td><br />Creates a private registry configuration with an encrypted value for an organization. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br />For OIDC-based registries (`oidc_azure`, `oidc_aws`, or `oidc_jfrog`), the `encrypted_value` and `key_id` fields should be omitted.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_org_private_registry"><CopyableCode code="update_org_private_registry" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td><br />Updates a private registry configuration with an encrypted value for an organization. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br />For OIDC-based registries (`oidc_azure`, `oidc_aws`, or `oidc_jfrog`), the `encrypted_value` and `key_id` fields should be omitted.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_org_private_registry"><CopyableCode code="delete_org_private_registry" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-secret_name"><code>secret_name</code></a></td>
    <td></td>
    <td><br />Delete a private registry configuration at the organization-level.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
    defaultValue="get_org_private_registry"
    values={[
        { label: 'get_org_private_registry', value: 'get_org_private_registry' },
        { label: 'list_org_private_registries', value: 'list_org_private_registries' }
    ]}
>
<TabItem value="get_org_private_registry">

<br />Get the configuration of a single private registry defined for an organization, omitting its encrypted value.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
name,
account_id,
client_id,
tenant_id,
identity_mapping_name,
jfrog_oidc_provider_name,
role_name,
audience,
auth_type,
aws_region,
created_at,
domain,
domain_owner,
registry_type,
replaces_base,
updated_at,
url,
username,
visibility
FROM github.private_registries.private_registries
WHERE org = '{{ org }}' -- required
AND secret_name = '{{ secret_name }}' -- required
;
```
</TabItem>
<TabItem value="list_org_private_registries">

<br />Lists all private registry configurations available at the organization-level without revealing their encrypted<br />values.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
configurations,
total_count
FROM github.private_registries.private_registries
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_org_private_registry"
    values={[
        { label: 'create_org_private_registry', value: 'create_org_private_registry' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_org_private_registry">

<br />Creates a private registry configuration with an encrypted value for an organization. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br />For OIDC-based registries (`oidc_azure`, `oidc_aws`, or `oidc_jfrog`), the `encrypted_value` and `key_id` fields should be omitted.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
INSERT INTO github.private_registries.private_registries (
registry_type,
url,
username,
replaces_base,
encrypted_value,
key_id,
visibility,
selected_repository_ids,
auth_type,
tenant_id,
client_id,
aws_region,
account_id,
role_name,
domain,
domain_owner,
jfrog_oidc_provider_name,
audience,
identity_mapping_name,
org
)
SELECT 
'{{ registry_type }}' /* required */,
'{{ url }}' /* required */,
'{{ username }}',
{{ replaces_base }},
'{{ encrypted_value }}',
'{{ key_id }}',
'{{ visibility }}' /* required */,
'{{ selected_repository_ids }}',
'{{ auth_type }}',
'{{ tenant_id }}',
'{{ client_id }}',
'{{ aws_region }}',
'{{ account_id }}',
'{{ role_name }}',
'{{ domain }}',
'{{ domain_owner }}',
'{{ jfrog_oidc_provider_name }}',
'{{ audience }}',
'{{ identity_mapping_name }}',
'{{ org }}'
RETURNING
name,
account_id,
client_id,
tenant_id,
identity_mapping_name,
jfrog_oidc_provider_name,
role_name,
audience,
auth_type,
aws_region,
created_at,
domain,
domain_owner,
registry_type,
replaces_base,
selected_repository_ids,
updated_at,
url,
username,
visibility
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: private_registries
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the private_registries resource.
    - name: registry_type
      value: "{{ registry_type }}"
      description: |
        The registry type.
      valid_values: ['maven_repository', 'nuget_feed', 'goproxy_server', 'npm_registry', 'rubygems_server', 'cargo_registry', 'composer_repository', 'docker_registry', 'git_source', 'helm_registry', 'hex_organization', 'hex_repository', 'pub_repository', 'python_index', 'terraform_registry']
    - name: url
      value: "{{ url }}"
      description: |
        The URL of the private registry.
    - name: username
      value: "{{ username }}"
      description: |
        The username to use when authenticating with the private registry. This field should be omitted if the private registry does not require a username for authentication.
    - name: replaces_base
      value: {{ replaces_base }}
      description: |
        Whether this private registry should replace the base registry (e.g., npmjs.org for npm, rubygems.org for rubygems). When set to \`true\`, Dependabot will only use this registry and will not fall back to the public registry. When set to \`false\` (default), Dependabot will use this registry for scoped packages but may fall back to the public registry for other packages.
      default: false
    - name: encrypted_value
      value: "{{ encrypted_value }}"
      description: |
        The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get private registries public key for an organization](https://docs.github.com/rest/private-registries/organization-configurations#get-private-registries-public-key-for-an-organization) endpoint. Required when \`auth_type\` is \`token\` or \`username_password\`. Should be omitted for OIDC auth types.
    - name: key_id
      value: "{{ key_id }}"
      description: |
        The ID of the key you used to encrypt the secret. Required when \`auth_type\` is \`token\` or \`username_password\`. Should be omitted for OIDC auth types.
    - name: visibility
      value: "{{ visibility }}"
      description: |
        Which type of organization repositories have access to the private registry. \`selected\` means only the repositories specified by \`selected_repository_ids\` can access the private registry.
      valid_values: ['all', 'private', 'selected']
    - name: selected_repository_ids
      value:
        - {{ selected_repository_ids }}
      description: |
        An array of repository IDs that can access the organization private registry. You can only provide a list of repository IDs when \`visibility\` is set to \`selected\`. You can manage the list of selected repositories using the [Update a private registry for an organization](https://docs.github.com/rest/private-registries/organization-configurations#update-a-private-registry-for-an-organization) endpoint. This field should be omitted if \`visibility\` is set to \`all\` or \`private\`.
    - name: auth_type
      value: "{{ auth_type }}"
      description: |
        The authentication type for the private registry. Defaults to \`token\` if not specified. Use \`oidc_azure\`, \`oidc_aws\`, or \`oidc_jfrog\` for OIDC authentication.
      valid_values: ['token', 'username_password', 'oidc_azure', 'oidc_aws', 'oidc_jfrog']
    - name: tenant_id
      value: "{{ tenant_id }}"
      description: |
        The tenant ID of the Azure AD application. Required when \`auth_type\` is \`oidc_azure\`.
    - name: client_id
      value: "{{ client_id }}"
      description: |
        The client ID of the Azure AD application. Required when \`auth_type\` is \`oidc_azure\`.
    - name: aws_region
      value: "{{ aws_region }}"
      description: |
        The AWS region. Required when \`auth_type\` is \`oidc_aws\`.
    - name: account_id
      value: "{{ account_id }}"
      description: |
        The AWS account ID. Required when \`auth_type\` is \`oidc_aws\`.
    - name: role_name
      value: "{{ role_name }}"
      description: |
        The AWS IAM role name. Required when \`auth_type\` is \`oidc_aws\`.
    - name: domain
      value: "{{ domain }}"
      description: |
        The CodeArtifact domain. Required when \`auth_type\` is \`oidc_aws\`.
    - name: domain_owner
      value: "{{ domain_owner }}"
      description: |
        The CodeArtifact domain owner (AWS account ID). Required when \`auth_type\` is \`oidc_aws\`.
    - name: jfrog_oidc_provider_name
      value: "{{ jfrog_oidc_provider_name }}"
      description: |
        The JFrog OIDC provider name. Required when \`auth_type\` is \`oidc_jfrog\`.
    - name: audience
      value: "{{ audience }}"
      description: |
        The OIDC audience. Optional for \`oidc_aws\` and \`oidc_jfrog\` auth types.
    - name: identity_mapping_name
      value: "{{ identity_mapping_name }}"
      description: |
        The JFrog identity mapping name. Optional for \`oidc_jfrog\` auth type.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_private_registry"
    values={[
        { label: 'update_org_private_registry', value: 'update_org_private_registry' }
    ]}
>
<TabItem value="update_org_private_registry">

<br />Updates a private registry configuration with an encrypted value for an organization. Encrypt your secret using [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). For more information, see "[Encrypting secrets for the REST API](https://docs.github.com/rest/guides/encrypting-secrets-for-the-rest-api)."<br />For OIDC-based registries (`oidc_azure`, `oidc_aws`, or `oidc_jfrog`), the `encrypted_value` and `key_id` fields should be omitted.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
UPDATE github.private_registries.private_registries
SET 
registry_type = '{{ registry_type }}',
url = '{{ url }}',
username = '{{ username }}',
replaces_base = {{ replaces_base }},
encrypted_value = '{{ encrypted_value }}',
key_id = '{{ key_id }}',
visibility = '{{ visibility }}',
selected_repository_ids = '{{ selected_repository_ids }}',
auth_type = '{{ auth_type }}',
tenant_id = '{{ tenant_id }}',
client_id = '{{ client_id }}',
aws_region = '{{ aws_region }}',
account_id = '{{ account_id }}',
role_name = '{{ role_name }}',
domain = '{{ domain }}',
domain_owner = '{{ domain_owner }}',
jfrog_oidc_provider_name = '{{ jfrog_oidc_provider_name }}',
audience = '{{ audience }}',
identity_mapping_name = '{{ identity_mapping_name }}'
WHERE 
org = '{{ org }}' --required
AND secret_name = '{{ secret_name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_org_private_registry"
    values={[
        { label: 'delete_org_private_registry', value: 'delete_org_private_registry' }
    ]}
>
<TabItem value="delete_org_private_registry">

<br />Delete a private registry configuration at the organization-level.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.private_registries.private_registries
WHERE org = '{{ org }}' --required
AND secret_name = '{{ secret_name }}' --required
;
```
</TabItem>
</Tabs>
