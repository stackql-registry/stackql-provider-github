--- 
title: spaces
hide_title: false
hide_table_of_contents: false
keywords:
  - spaces
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

Creates, updates, deletes, gets or lists a <code>spaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot_spaces.spaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_for_org"
    values={[
        { label: 'get_for_org', value: 'get_for_org' },
        { label: 'get_for_user', value: 'get_for_user' },
        { label: 'list_for_org', value: 'list_for_org' },
        { label: 'list_for_user', value: 'list_for_user' }
    ]}
>
<TabItem value="get_for_org">

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
    <td>The unique identifier of the space.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the space. (example: My Development Space)</td>
</tr>
<tr>
    <td><CopyableCode code="api_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of the space. (example: https://api.github.com/organizations/1/copilot-spaces/5)</td>
</tr>
<tr>
    <td><CopyableCode code="base_role" /></td>
    <td><code>string</code></td>
    <td>The base role that determines default permissions. - `no_access`: No default access - `reader`: Default read permissions - `writer`: Default write permissions (organization spaces only) - `admin`: Default admin permissions (organization spaces only) (reader, writer, admin, no_access) (example: no_access)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the space was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the space. (example: A space for discussing React development patterns)</td>
</tr>
<tr>
    <td><CopyableCode code="general_instructions" /></td>
    <td><code>string</code></td>
    <td>General instructions for the Copilot Space. (example: Help with React development patterns and best practices)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The HTML URL of the space. (example: https://github.com/copilot/spaces/octo-org/5)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the space within its owner.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>The user or organization that owns this space. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="resources_attributes" /></td>
    <td><code>array</code></td>
    <td>Resources attached to the space.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the space was last updated. (example: 2023-01-01T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_for_user">

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
    <td>The unique identifier of the space.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the space. (example: My Development Space)</td>
</tr>
<tr>
    <td><CopyableCode code="api_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of the space. (example: https://api.github.com/organizations/1/copilot-spaces/5)</td>
</tr>
<tr>
    <td><CopyableCode code="base_role" /></td>
    <td><code>string</code></td>
    <td>The base role that determines default permissions. - `no_access`: No default access - `reader`: Default read permissions - `writer`: Default write permissions (organization spaces only) - `admin`: Default admin permissions (organization spaces only) (reader, writer, admin, no_access) (example: no_access)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the space was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the space. (example: A space for discussing React development patterns)</td>
</tr>
<tr>
    <td><CopyableCode code="general_instructions" /></td>
    <td><code>string</code></td>
    <td>General instructions for the Copilot Space. (example: Help with React development patterns and best practices)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The HTML URL of the space. (example: https://github.com/copilot/spaces/octo-org/5)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the space within its owner.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>The user or organization that owns this space. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="resources_attributes" /></td>
    <td><code>array</code></td>
    <td>Resources attached to the space.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the space was last updated. (example: 2023-01-01T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_for_org">

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
    <td>The unique identifier of the space.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the space. (example: My Development Space)</td>
</tr>
<tr>
    <td><CopyableCode code="api_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of the space. (example: https://api.github.com/organizations/1/copilot-spaces/5)</td>
</tr>
<tr>
    <td><CopyableCode code="base_role" /></td>
    <td><code>string</code></td>
    <td>The base role that determines default permissions. - `no_access`: No default access - `reader`: Default read permissions - `writer`: Default write permissions (organization spaces only) - `admin`: Default admin permissions (organization spaces only) (reader, writer, admin, no_access) (example: no_access)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the space was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the space. (example: A space for discussing React development patterns)</td>
</tr>
<tr>
    <td><CopyableCode code="general_instructions" /></td>
    <td><code>string</code></td>
    <td>General instructions for the Copilot Space. (example: Help with React development patterns and best practices)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The HTML URL of the space. (example: https://github.com/copilot/spaces/octo-org/5)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the space within its owner.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>The user or organization that owns this space. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="resources_attributes" /></td>
    <td><code>array</code></td>
    <td>Resources attached to the space.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the space was last updated. (example: 2023-01-01T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_for_user">

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
    <td>The unique identifier of the space.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The display name of the space. (example: My Development Space)</td>
</tr>
<tr>
    <td><CopyableCode code="api_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of the space. (example: https://api.github.com/organizations/1/copilot-spaces/5)</td>
</tr>
<tr>
    <td><CopyableCode code="base_role" /></td>
    <td><code>string</code></td>
    <td>The base role that determines default permissions. - `no_access`: No default access - `reader`: Default read permissions - `writer`: Default write permissions (organization spaces only) - `admin`: Default admin permissions (organization spaces only) (reader, writer, admin, no_access) (example: no_access)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the space was created. (example: 2023-01-01T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the space. (example: A space for discussing React development patterns)</td>
</tr>
<tr>
    <td><CopyableCode code="general_instructions" /></td>
    <td><code>string</code></td>
    <td>General instructions for the Copilot Space. (example: Help with React development patterns and best practices)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The HTML URL of the space. (example: https://github.com/copilot/spaces/octo-org/5)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the space within its owner.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>The user or organization that owns this space. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="resources_attributes" /></td>
    <td><code>array</code></td>
    <td>Resources attached to the space.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the space was last updated. (example: 2023-01-01T12:00:00Z)</td>
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
    <td><a href="#get_for_org"><CopyableCode code="get_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Gets details about a specific Copilot Space owned by an organization. The authenticated user must have read access to the Space.<br /><br />Internal Spaces require the authenticated user to be a member of the organization or have been granted read permissions.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#get_for_user"><CopyableCode code="get_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Gets details about a specific Copilot Space owned by a user. The authenticated user must have read access to the Space.<br /><br />Private user spaces require the authenticated user to be the owner of the space.<br />Public user spaces are accessible to any authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_for_org"><CopyableCode code="list_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>Lists Copilot Spaces owned by an organization. The authenticated user must have read access to the organization's Copilot Spaces.<br /><br />Only Spaces that are readable by the authenticated user are returned. This includes public Spaces and internal Spaces if the user is a member of the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in a space; spaces with inaccessible resources are omitted from the response.</td>
</tr>
<tr>
    <td><a href="#list_for_user"><CopyableCode code="list_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>Lists Copilot Spaces owned by a user. The authenticated user must have read access to the user's Copilot Spaces.<br /><br />Only Spaces that are readable by the authenticated user are returned. This includes the user's own spaces, and public user spaces when accessing another user's spaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_for_org"><CopyableCode code="create_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new Copilot Space owned by an organization. The authenticated user must have permissions to create spaces in the organization.<br /><br />Organization members with appropriate permissions can create Copilot Spaces to be shared within their organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by the submitted resources.</td>
</tr>
<tr>
    <td><a href="#create_for_user"><CopyableCode code="create_for_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new Copilot Space owned by a user. Only the authenticated user can create spaces for their own account.<br /><br />Users can create personal Copilot Spaces for their individual use.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_for_org"><CopyableCode code="update_for_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Updates a Copilot Space owned by an organization. The authenticated user must have permissions to update spaces in the organization.<br /><br />Organization members with appropriate permissions can update Copilot Spaces owned by their organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space, including any being added or updated.</td>
</tr>
<tr>
    <td><a href="#update_for_user"><CopyableCode code="update_for_user" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Updates a Copilot Space owned by a user. Only the authenticated user can update spaces for their own account.<br /><br />Users can update their personal Copilot Spaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_for_org"><CopyableCode code="delete_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Deletes a Copilot Space owned by an organization. The authenticated user must have permissions to delete spaces in the organization.<br /><br />**Warning:** This action is permanent and cannot be undone. Deleting a Copilot Space will remove all associated resources and configurations.<br /><br />Organization members with appropriate permissions can delete Copilot Spaces owned by their organization.<br /><br />OAuth app tokens and personal access tokens (classic) need both the `read:org` and `repo` scopes to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#delete_for_user"><CopyableCode code="delete_for_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Deletes a Copilot Space owned by a user. The authenticated user must be the owner of the space.<br /><br />**Warning:** This action is permanent and cannot be undone. Deleting a space will remove all associated resources and configurations.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor.</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_for_org"
    values={[
        { label: 'get_for_org', value: 'get_for_org' },
        { label: 'get_for_user', value: 'get_for_user' },
        { label: 'list_for_org', value: 'list_for_org' },
        { label: 'list_for_user', value: 'list_for_user' }
    ]}
>
<TabItem value="get_for_org">

Gets details about a specific Copilot Space owned by an organization. The authenticated user must have read access to the Space.<br /><br />Internal Spaces require the authenticated user to be a member of the organization or have been granted read permissions.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
SELECT
id,
name,
api_url,
base_role,
created_at,
creator,
description,
general_instructions,
html_url,
number,
owner,
resources_attributes,
updated_at
FROM github.copilot_spaces.spaces
WHERE org = '{{ org }}' -- required
AND space_number = '{{ space_number }}' -- required
;
```
</TabItem>
<TabItem value="get_for_user">

Gets details about a specific Copilot Space owned by a user. The authenticated user must have read access to the Space.<br /><br />Private user spaces require the authenticated user to be the owner of the space.<br />Public user spaces are accessible to any authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
id,
name,
api_url,
base_role,
created_at,
creator,
description,
general_instructions,
html_url,
number,
owner,
resources_attributes,
updated_at
FROM github.copilot_spaces.spaces
WHERE username = '{{ username }}' -- required
AND space_number = '{{ space_number }}' -- required
;
```
</TabItem>
<TabItem value="list_for_org">

Lists Copilot Spaces owned by an organization. The authenticated user must have read access to the organization's Copilot Spaces.<br /><br />Only Spaces that are readable by the authenticated user are returned. This includes public Spaces and internal Spaces if the user is a member of the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in a space; spaces with inaccessible resources are omitted from the response.

```sql
SELECT
id,
name,
api_url,
base_role,
created_at,
creator,
description,
general_instructions,
html_url,
number,
owner,
resources_attributes,
updated_at
FROM github.copilot_spaces.spaces
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
;
```
</TabItem>
<TabItem value="list_for_user">

Lists Copilot Spaces owned by a user. The authenticated user must have read access to the user's Copilot Spaces.<br /><br />Only Spaces that are readable by the authenticated user are returned. This includes the user's own spaces, and public user spaces when accessing another user's spaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.

```sql
SELECT
id,
name,
api_url,
base_role,
created_at,
creator,
description,
general_instructions,
html_url,
number,
owner,
resources_attributes,
updated_at
FROM github.copilot_spaces.spaces
WHERE username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_for_org"
    values={[
        { label: 'create_for_org', value: 'create_for_org' },
        { label: 'create_for_user', value: 'create_for_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_for_org">

Creates a new Copilot Space owned by an organization. The authenticated user must have permissions to create spaces in the organization.<br /><br />Organization members with appropriate permissions can create Copilot Spaces to be shared within their organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by the submitted resources.

```sql
INSERT INTO github.copilot_spaces.spaces (
name,
description,
general_instructions,
base_role,
resources_attributes,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ general_instructions }}',
'{{ base_role }}',
'{{ resources_attributes }}',
'{{ org }}'
RETURNING
id,
name,
api_url,
base_role,
created_at,
creator,
description,
general_instructions,
html_url,
number,
owner,
resources_attributes,
updated_at
;
```
</TabItem>
<TabItem value="create_for_user">

Creates a new Copilot Space owned by a user. Only the authenticated user can create spaces for their own account.<br /><br />Users can create personal Copilot Spaces for their individual use.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.

```sql
INSERT INTO github.copilot_spaces.spaces (
name,
description,
general_instructions,
base_role,
resources_attributes,
username
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ general_instructions }}',
'{{ base_role }}',
'{{ resources_attributes }}',
'{{ username }}'
RETURNING
id,
name,
api_url,
base_role,
created_at,
creator,
description,
general_instructions,
html_url,
number,
owner,
resources_attributes,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: spaces
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the spaces resource.
    - name: username
      value: "{{ username }}"
      description: Required parameter for the spaces resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the Copilot Space.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the Copilot Space.
    - name: general_instructions
      value: "{{ general_instructions }}"
      description: |
        General instructions for the Copilot Space.
    - name: base_role
      value: "{{ base_role }}"
      description: |
        The base role that determines default permissions for the space.
        - \`no_access\`: No default access (default)
        - \`reader\`: Makes the space publicly readable
        Note: User spaces do not support writer or admin base roles.
      valid_values: ['reader', 'no_access']
      default: no_access
    - name: resources_attributes
      description: |
        Resources to attach to the space.
      value:
        - resource_type: "{{ resource_type }}"
          metadata:
            repository_id: {{ repository_id }}
            file_path: "{{ file_path }}"
            text: "{{ text }}"
            name: "{{ name }}"
            number: {{ number }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_for_org"
    values={[
        { label: 'update_for_org', value: 'update_for_org' },
        { label: 'update_for_user', value: 'update_for_user' }
    ]}
>
<TabItem value="update_for_org">

Updates a Copilot Space owned by an organization. The authenticated user must have permissions to update spaces in the organization.<br /><br />Organization members with appropriate permissions can update Copilot Spaces owned by their organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space, including any being added or updated.

```sql
REPLACE github.copilot_spaces.spaces
SET 
name = '{{ name }}',
description = '{{ description }}',
general_instructions = '{{ general_instructions }}',
base_role = '{{ base_role }}',
resources_attributes = '{{ resources_attributes }}'
WHERE 
org = '{{ org }}' --required
AND space_number = '{{ space_number }}' --required
RETURNING
id,
name,
api_url,
base_role,
created_at,
creator,
description,
general_instructions,
html_url,
number,
owner,
resources_attributes,
updated_at;
```
</TabItem>
<TabItem value="update_for_user">

Updates a Copilot Space owned by a user. Only the authenticated user can update spaces for their own account.<br /><br />Users can update their personal Copilot Spaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:user` scope to use this endpoint.

```sql
REPLACE github.copilot_spaces.spaces
SET 
name = '{{ name }}',
description = '{{ description }}',
general_instructions = '{{ general_instructions }}',
base_role = '{{ base_role }}',
resources_attributes = '{{ resources_attributes }}'
WHERE 
username = '{{ username }}' --required
AND space_number = '{{ space_number }}' --required
RETURNING
id,
name,
api_url,
base_role,
created_at,
creator,
description,
general_instructions,
html_url,
number,
owner,
resources_attributes,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_for_org"
    values={[
        { label: 'delete_for_org', value: 'delete_for_org' },
        { label: 'delete_for_user', value: 'delete_for_user' }
    ]}
>
<TabItem value="delete_for_org">

Deletes a Copilot Space owned by an organization. The authenticated user must have permissions to delete spaces in the organization.<br /><br />**Warning:** This action is permanent and cannot be undone. Deleting a Copilot Space will remove all associated resources and configurations.<br /><br />Organization members with appropriate permissions can delete Copilot Spaces owned by their organization.<br /><br />OAuth app tokens and personal access tokens (classic) need both the `read:org` and `repo` scopes to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
DELETE FROM github.copilot_spaces.spaces
WHERE org = '{{ org }}' --required
AND space_number = '{{ space_number }}' --required
;
```
</TabItem>
<TabItem value="delete_for_user">

Deletes a Copilot Space owned by a user. The authenticated user must be the owner of the space.<br /><br />**Warning:** This action is permanent and cannot be undone. Deleting a space will remove all associated resources and configurations.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
DELETE FROM github.copilot_spaces.spaces
WHERE username = '{{ username }}' --required
AND space_number = '{{ space_number }}' --required
;
```
</TabItem>
</Tabs>
