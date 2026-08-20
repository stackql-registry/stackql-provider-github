--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - copilot_spaces
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot_spaces.resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_for_org"
    values={[
        { label: 'get_resource_for_org', value: 'get_resource_for_org' },
        { label: 'get_resource_for_user', value: 'get_resource_for_user' },
        { label: 'list_resources_for_org', value: 'list_resources_for_org' },
        { label: 'list_resources_for_user', value: 'list_resources_for_user' }
    ]}
>
<TabItem value="get_resource_for_org">

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
    <td>The unique identifier of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="copilot_chat_attachment_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the associated chat attachment, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Resource-specific metadata. The keys and values depend on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. (repository, github_file, free_text, github_issue, github_pull_request, media_content, uploaded_text_file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_resource_for_user">

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
    <td>The unique identifier of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="copilot_chat_attachment_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the associated chat attachment, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Resource-specific metadata. The keys and values depend on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. (repository, github_file, free_text, github_issue, github_pull_request, media_content, uploaded_text_file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resources_for_org">

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
    <td>The unique identifier of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="copilot_chat_attachment_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the associated chat attachment, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Resource-specific metadata. The keys and values depend on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. (repository, github_file, free_text, github_issue, github_pull_request, media_content, uploaded_text_file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resources_for_user">

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
    <td>The unique identifier of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="copilot_chat_attachment_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the associated chat attachment, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Resource-specific metadata. The keys and values depend on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of the resource. (repository, github_file, free_text, github_issue, github_pull_request, media_content, uploaded_text_file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was last updated.</td>
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
    <td><a href="#get_resource_for_org"><CopyableCode code="get_resource_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-space_resource_id"><code>space_resource_id</code></a></td>
    <td></td>
    <td>Gets a specific resource attached to a Copilot Space owned by an organization.<br />The authenticated user must have appropriate permissions to view the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#get_resource_for_user"><CopyableCode code="get_resource_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-space_resource_id"><code>space_resource_id</code></a></td>
    <td></td>
    <td>Gets a specific resource attached to a Copilot Space owned by a user.<br />The authenticated user must have appropriate permissions to view the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_resources_for_org"><CopyableCode code="list_resources_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Lists all resources attached to a specific Copilot Space owned by an organization.<br />The authenticated user must have appropriate permissions to view the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#list_resources_for_user"><CopyableCode code="list_resources_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Lists all resources attached to a specific Copilot Space owned by a user.<br />The authenticated user must have appropriate permissions to view the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_resource_for_org"><CopyableCode code="create_resource_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-metadata"><code>metadata</code></a></td>
    <td></td>
    <td>Creates a new resource in a specific Copilot Space owned by an organization.<br />The authenticated user must have write permissions on the space.<br /><br />The following resource types are supported: `repository`, `github_file`, `free_text`, `github_issue`, `github_pull_request`.<br />The `uploaded_text_file` and `media_content` types are not supported via this endpoint.<br /><br />For `github_file` resources, if a resource with the same repository, file path, and SHA already exists, the existing resource is returned with a `200` status.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space, including the resource being created.</td>
</tr>
<tr>
    <td><a href="#create_resource_for_user"><CopyableCode code="create_resource_for_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-metadata"><code>metadata</code></a></td>
    <td></td>
    <td>Creates a new resource in a specific Copilot Space owned by a user.<br />The authenticated user must have write permissions on the space.<br /><br />The following resource types are supported: `repository`, `github_file`, `free_text`, `github_issue`, `github_pull_request`.<br />The `uploaded_text_file` and `media_content` types are not supported via this endpoint.<br /><br />For `github_file` resources, if a resource with the same repository, file path, and SHA already exists, the existing resource is returned with a `200` status.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_resource_for_org"><CopyableCode code="update_resource_for_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-space_resource_id"><code>space_resource_id</code></a></td>
    <td></td>
    <td>Updates the metadata of a resource in a specific Copilot Space owned by an organization.<br />The authenticated user must have write permissions on the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space, including the resource being updated.</td>
</tr>
<tr>
    <td><a href="#update_resource_for_user"><CopyableCode code="update_resource_for_user" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-space_resource_id"><code>space_resource_id</code></a></td>
    <td></td>
    <td>Updates the metadata of a resource in a specific Copilot Space owned by a user.<br />The authenticated user must have write permissions on the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_resource_for_org"><CopyableCode code="delete_resource_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-space_resource_id"><code>space_resource_id</code></a></td>
    <td></td>
    <td>Deletes a resource from a specific Copilot Space owned by an organization.<br />The authenticated user must have write permissions on the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#delete_resource_for_user"><CopyableCode code="delete_resource_for_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-space_resource_id"><code>space_resource_id</code></a></td>
    <td></td>
    <td>Deletes a resource from a specific Copilot Space owned by a user.<br />The authenticated user must have write permissions on the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:user` scope to use this endpoint.</td>
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
<tr id="parameter-space_number">
    <td><CopyableCode code="space_number" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the Copilot Space.</td>
</tr>
<tr id="parameter-space_resource_id">
    <td><CopyableCode code="space_resource_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the resource.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_for_org"
    values={[
        { label: 'get_resource_for_org', value: 'get_resource_for_org' },
        { label: 'get_resource_for_user', value: 'get_resource_for_user' },
        { label: 'list_resources_for_org', value: 'list_resources_for_org' },
        { label: 'list_resources_for_user', value: 'list_resources_for_user' }
    ]}
>
<TabItem value="get_resource_for_org">

Gets a specific resource attached to a Copilot Space owned by an organization.<br />The authenticated user must have appropriate permissions to view the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
SELECT
id,
copilot_chat_attachment_id,
created_at,
metadata,
resource_type,
updated_at
FROM github.copilot_spaces.resources
WHERE org = '{{ org }}' -- required
AND space_number = '{{ space_number }}' -- required
AND space_resource_id = '{{ space_resource_id }}' -- required
;
```
</TabItem>
<TabItem value="get_resource_for_user">

Gets a specific resource attached to a Copilot Space owned by a user.<br />The authenticated user must have appropriate permissions to view the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.

```sql
SELECT
id,
copilot_chat_attachment_id,
created_at,
metadata,
resource_type,
updated_at
FROM github.copilot_spaces.resources
WHERE username = '{{ username }}' -- required
AND space_number = '{{ space_number }}' -- required
AND space_resource_id = '{{ space_resource_id }}' -- required
;
```
</TabItem>
<TabItem value="list_resources_for_org">

Lists all resources attached to a specific Copilot Space owned by an organization.<br />The authenticated user must have appropriate permissions to view the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
SELECT
id,
copilot_chat_attachment_id,
created_at,
metadata,
resource_type,
updated_at
FROM github.copilot_spaces.resources
WHERE org = '{{ org }}' -- required
AND space_number = '{{ space_number }}' -- required
;
```
</TabItem>
<TabItem value="list_resources_for_user">

Lists all resources attached to a specific Copilot Space owned by a user.<br />The authenticated user must have appropriate permissions to view the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.

```sql
SELECT
id,
copilot_chat_attachment_id,
created_at,
metadata,
resource_type,
updated_at
FROM github.copilot_spaces.resources
WHERE username = '{{ username }}' -- required
AND space_number = '{{ space_number }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_resource_for_org"
    values={[
        { label: 'create_resource_for_org', value: 'create_resource_for_org' },
        { label: 'create_resource_for_user', value: 'create_resource_for_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_resource_for_org">

Creates a new resource in a specific Copilot Space owned by an organization.<br />The authenticated user must have write permissions on the space.<br /><br />The following resource types are supported: `repository`, `github_file`, `free_text`, `github_issue`, `github_pull_request`.<br />The `uploaded_text_file` and `media_content` types are not supported via this endpoint.<br /><br />For `github_file` resources, if a resource with the same repository, file path, and SHA already exists, the existing resource is returned with a `200` status.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space, including the resource being created.

```sql
INSERT INTO github.copilot_spaces.resources (
resource_type,
metadata,
org,
space_number
)
SELECT 
'{{ resource_type }}' /* required */,
'{{ metadata }}' /* required */,
'{{ org }}',
'{{ space_number }}'
RETURNING
id,
copilot_chat_attachment_id,
created_at,
metadata,
resource_type,
updated_at
;
```
</TabItem>
<TabItem value="create_resource_for_user">

Creates a new resource in a specific Copilot Space owned by a user.<br />The authenticated user must have write permissions on the space.<br /><br />The following resource types are supported: `repository`, `github_file`, `free_text`, `github_issue`, `github_pull_request`.<br />The `uploaded_text_file` and `media_content` types are not supported via this endpoint.<br /><br />For `github_file` resources, if a resource with the same repository, file path, and SHA already exists, the existing resource is returned with a `200` status.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:user` scope to use this endpoint.

```sql
INSERT INTO github.copilot_spaces.resources (
resource_type,
metadata,
username,
space_number
)
SELECT 
'{{ resource_type }}' /* required */,
'{{ metadata }}' /* required */,
'{{ username }}',
'{{ space_number }}'
RETURNING
id,
copilot_chat_attachment_id,
created_at,
metadata,
resource_type,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resources
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the resources resource.
    - name: space_number
      value: {{ space_number }}
      description: Required parameter for the resources resource.
    - name: username
      value: "{{ username }}"
      description: Required parameter for the resources resource.
    - name: resource_type
      value: "{{ resource_type }}"
      description: |
        The type of resource to create.
      valid_values: ['repository', 'github_file', 'free_text', 'github_issue', 'github_pull_request']
    - name: metadata
      value: "{{ metadata }}"
      description: |
        Resource-specific metadata.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_resource_for_org"
    values={[
        { label: 'update_resource_for_org', value: 'update_resource_for_org' },
        { label: 'update_resource_for_user', value: 'update_resource_for_user' }
    ]}
>
<TabItem value="update_resource_for_org">

Updates the metadata of a resource in a specific Copilot Space owned by an organization.<br />The authenticated user must have write permissions on the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space, including the resource being updated.

```sql
REPLACE github.copilot_spaces.resources
SET 
metadata = '{{ metadata }}'
WHERE 
org = '{{ org }}' --required
AND space_number = '{{ space_number }}' --required
AND space_resource_id = '{{ space_resource_id }}' --required
RETURNING
id,
copilot_chat_attachment_id,
created_at,
metadata,
resource_type,
updated_at;
```
</TabItem>
<TabItem value="update_resource_for_user">

Updates the metadata of a resource in a specific Copilot Space owned by a user.<br />The authenticated user must have write permissions on the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:user` scope to use this endpoint.

```sql
REPLACE github.copilot_spaces.resources
SET 
metadata = '{{ metadata }}'
WHERE 
username = '{{ username }}' --required
AND space_number = '{{ space_number }}' --required
AND space_resource_id = '{{ space_resource_id }}' --required
RETURNING
id,
copilot_chat_attachment_id,
created_at,
metadata,
resource_type,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_for_org"
    values={[
        { label: 'delete_resource_for_org', value: 'delete_resource_for_org' },
        { label: 'delete_resource_for_user', value: 'delete_resource_for_user' }
    ]}
>
<TabItem value="delete_resource_for_org">

Deletes a resource from a specific Copilot Space owned by an organization.<br />The authenticated user must have write permissions on the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
DELETE FROM github.copilot_spaces.resources
WHERE org = '{{ org }}' --required
AND space_number = '{{ space_number }}' --required
AND space_resource_id = '{{ space_resource_id }}' --required
;
```
</TabItem>
<TabItem value="delete_resource_for_user">

Deletes a resource from a specific Copilot Space owned by a user.<br />The authenticated user must have write permissions on the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:user` scope to use this endpoint.

```sql
DELETE FROM github.copilot_spaces.resources
WHERE username = '{{ username }}' --required
AND space_number = '{{ space_number }}' --required
AND space_resource_id = '{{ space_resource_id }}' --required
;
```
</TabItem>
</Tabs>
