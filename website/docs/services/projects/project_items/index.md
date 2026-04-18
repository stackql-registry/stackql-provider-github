--- 
title: project_items
hide_title: false
hide_table_of_contents: false
keywords:
  - project_items
  - projects
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

Creates, updates, deletes, gets or lists a <code>project_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.projects.project_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_item"
    values={[
        { label: 'get_org_item', value: 'get_org_item' },
        { label: 'get_user_item', value: 'get_user_item' },
        { label: 'list_items_for_org', value: 'list_items_for_org' },
        { label: 'list_items_for_user', value: 'list_items_for_user' }
    ]}
>
<TabItem value="get_org_item">

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
    <td><code>number</code></td>
    <td>The unique identifier of the project item.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the project item.</td>
</tr>
<tr>
    <td><CopyableCode code="archived_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was archived. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The content of the item, which varies by content type.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The type of content tracked in a project item (Issue, PullRequest, DraftIssue) (title: Projects v2 Item Content Type)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The fields and values associated with this item.</td>
</tr>
<tr>
    <td><CopyableCode code="item_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of this item. (example: https://api.github.com/users/monalisa/2/projectsV2/items/3)</td>
</tr>
<tr>
    <td><CopyableCode code="project_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of the project that contains this item. (example: https://api.github.com/users/monalisa/2/projectsV2/3)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was last updated. (example: 2022-04-28T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_user_item">

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
    <td><code>number</code></td>
    <td>The unique identifier of the project item.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the project item.</td>
</tr>
<tr>
    <td><CopyableCode code="archived_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was archived. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The content of the item, which varies by content type.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The type of content tracked in a project item (Issue, PullRequest, DraftIssue) (title: Projects v2 Item Content Type)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The fields and values associated with this item.</td>
</tr>
<tr>
    <td><CopyableCode code="item_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of this item. (example: https://api.github.com/users/monalisa/2/projectsV2/items/3)</td>
</tr>
<tr>
    <td><CopyableCode code="project_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of the project that contains this item. (example: https://api.github.com/users/monalisa/2/projectsV2/3)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was last updated. (example: 2022-04-28T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_items_for_org">

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
    <td><code>number</code></td>
    <td>The unique identifier of the project item.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the project item.</td>
</tr>
<tr>
    <td><CopyableCode code="archived_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was archived. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The content of the item, which varies by content type.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The type of content tracked in a project item (Issue, PullRequest, DraftIssue) (title: Projects v2 Item Content Type)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The fields and values associated with this item.</td>
</tr>
<tr>
    <td><CopyableCode code="item_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of this item. (example: https://api.github.com/users/monalisa/2/projectsV2/items/3)</td>
</tr>
<tr>
    <td><CopyableCode code="project_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of the project that contains this item. (example: https://api.github.com/users/monalisa/2/projectsV2/3)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was last updated. (example: 2022-04-28T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_items_for_user">

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
    <td><code>number</code></td>
    <td>The unique identifier of the project item.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the project item.</td>
</tr>
<tr>
    <td><CopyableCode code="archived_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was archived. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>The content of the item, which varies by content type.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The type of content tracked in a project item (Issue, PullRequest, DraftIssue) (title: Projects v2 Item Content Type)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>The fields and values associated with this item.</td>
</tr>
<tr>
    <td><CopyableCode code="item_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of this item. (example: https://api.github.com/users/monalisa/2/projectsV2/items/3)</td>
</tr>
<tr>
    <td><CopyableCode code="project_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL of the project that contains this item. (example: https://api.github.com/users/monalisa/2/projectsV2/3)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the item was last updated. (example: 2022-04-28T12:00:00Z)</td>
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
    <td><a href="#get_org_item"><CopyableCode code="get_org_item" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-org"><code>org</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td><a href="#parameter-fields"><code>fields</code></a></td>
    <td>Get a specific item from an organization-owned project.</td>
</tr>
<tr>
    <td><a href="#get_user_item"><CopyableCode code="get_user_item" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td><a href="#parameter-fields"><code>fields</code></a></td>
    <td>Get a specific item from a user-owned project.</td>
</tr>
<tr>
    <td><a href="#list_items_for_org"><CopyableCode code="list_items_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-q"><code>q</code></a>, <a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>List all items for a specific organization-owned project accessible by the authenticated user.</td>
</tr>
<tr>
    <td><a href="#list_items_for_user"><CopyableCode code="list_items_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-q"><code>q</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td>List all items for a specific user-owned project accessible by the authenticated user.</td>
</tr>
<tr>
    <td><a href="#add_item_for_org"><CopyableCode code="add_item_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-number"><code>number</code></a></td>
    <td></td>
    <td>Add an issue or pull request item to the specified organization owned project.</td>
</tr>
<tr>
    <td><a href="#create_draft_item_for_authenticated_user"><CopyableCode code="create_draft_item_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Create draft issue item for the specified user owned project.</td>
</tr>
<tr>
    <td><a href="#add_item_for_user"><CopyableCode code="add_item_for_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-number"><code>number</code></a></td>
    <td></td>
    <td>Add an issue or pull request item to the specified user owned project.</td>
</tr>
<tr>
    <td><a href="#update_item_for_org"><CopyableCode code="update_item_for_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-org"><code>org</code></a>, <a href="#parameter-item_id"><code>item_id</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td></td>
    <td>Update a specific item in an organization-owned project.</td>
</tr>
<tr>
    <td><a href="#update_item_for_user"><CopyableCode code="update_item_for_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-item_id"><code>item_id</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td></td>
    <td>Update a specific item in a user-owned project.</td>
</tr>
<tr>
    <td><a href="#delete_item_for_org"><CopyableCode code="delete_item_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-org"><code>org</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td></td>
    <td>Delete a specific item from an organization-owned project.</td>
</tr>
<tr>
    <td><a href="#delete_item_for_user"><CopyableCode code="delete_item_for_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td></td>
    <td>Delete a specific item from a user-owned project.</td>
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
<tr id="parameter-item_id">
    <td><CopyableCode code="item_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the project item.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-project_number">
    <td><CopyableCode code="project_number" /></td>
    <td><code>integer</code></td>
    <td>The project's number.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-fields">
    <td><CopyableCode code="fields" /></td>
    <td><code></code></td>
    <td>Limit results to specific fields, by their IDs. If not specified, the title field will be returned.  Example: `fields[]=123&fields[]=456&fields[]=789` or `fields=123,456,789`</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td>Search query to filter items, see [Filtering projects](https://docs.github.com/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) for more information.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org_item"
    values={[
        { label: 'get_org_item', value: 'get_org_item' },
        { label: 'get_user_item', value: 'get_user_item' },
        { label: 'list_items_for_org', value: 'list_items_for_org' },
        { label: 'list_items_for_user', value: 'list_items_for_user' }
    ]}
>
<TabItem value="get_org_item">

Get a specific item from an organization-owned project.

```sql
SELECT
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
fields,
item_url,
project_url,
updated_at
FROM github.projects.project_items
WHERE project_number = '{{ project_number }}' -- required
AND org = '{{ org }}' -- required
AND item_id = '{{ item_id }}' -- required
AND fields = '{{ fields }}'
;
```
</TabItem>
<TabItem value="get_user_item">

Get a specific item from a user-owned project.

```sql
SELECT
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
fields,
item_url,
project_url,
updated_at
FROM github.projects.project_items
WHERE project_number = '{{ project_number }}' -- required
AND username = '{{ username }}' -- required
AND item_id = '{{ item_id }}' -- required
AND fields = '{{ fields }}'
;
```
</TabItem>
<TabItem value="list_items_for_org">

List all items for a specific organization-owned project accessible by the authenticated user.

```sql
SELECT
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
fields,
item_url,
project_url,
updated_at
FROM github.projects.project_items
WHERE project_number = '{{ project_number }}' -- required
AND org = '{{ org }}' -- required
AND q = '{{ q }}'
AND fields = '{{ fields }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list_items_for_user">

List all items for a specific user-owned project accessible by the authenticated user.

```sql
SELECT
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
fields,
item_url,
project_url,
updated_at
FROM github.projects.project_items
WHERE project_number = '{{ project_number }}' -- required
AND username = '{{ username }}' -- required
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
AND q = '{{ q }}'
AND fields = '{{ fields }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_item_for_org"
    values={[
        { label: 'add_item_for_org', value: 'add_item_for_org' },
        { label: 'create_draft_item_for_authenticated_user', value: 'create_draft_item_for_authenticated_user' },
        { label: 'add_item_for_user', value: 'add_item_for_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_item_for_org">

Add an issue or pull request item to the specified organization owned project.

```sql
INSERT INTO github.projects.project_items (
type,
id,
owner,
repo,
number,
org,
project_number
)
SELECT 
'{{ type }}' /* required */,
{{ id }} /* required */,
'{{ owner }}' /* required */,
'{{ repo }}' /* required */,
{{ number }} /* required */,
'{{ org }}',
'{{ project_number }}'
RETURNING
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
item_url,
project_url,
updated_at
;
```
</TabItem>
<TabItem value="create_draft_item_for_authenticated_user">

Create draft issue item for the specified user owned project.

```sql
INSERT INTO github.projects.project_items (
title,
body,
user_id,
project_number
)
SELECT 
'{{ title }}' /* required */,
'{{ body }}',
'{{ user_id }}',
'{{ project_number }}'
RETURNING
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
item_url,
project_url,
updated_at
;
```
</TabItem>
<TabItem value="add_item_for_user">

Add an issue or pull request item to the specified user owned project.

```sql
INSERT INTO github.projects.project_items (
type,
id,
owner,
repo,
number,
username,
project_number
)
SELECT 
'{{ type }}' /* required */,
{{ id }} /* required */,
'{{ owner }}' /* required */,
'{{ repo }}' /* required */,
{{ number }} /* required */,
'{{ username }}',
'{{ project_number }}'
RETURNING
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
item_url,
project_url,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: project_items
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the project_items resource.
    - name: project_number
      value: {{ project_number }}
      description: Required parameter for the project_items resource.
    - name: user_id
      value: "{{ user_id }}"
      description: Required parameter for the project_items resource.
    - name: username
      value: "{{ username }}"
      description: Required parameter for the project_items resource.
    - name: type
      value: "{{ type }}"
      description: |
        The type of item to add to the project. Must be either Issue or PullRequest.
      valid_values: ['Issue', 'PullRequest']
    - name: id
      value: {{ id }}
      description: |
        The unique identifier of the issue or pull request to add to the project.
    - name: owner
      value: "{{ owner }}"
      description: |
        The repository owner login.
    - name: repo
      value: "{{ repo }}"
      description: |
        The repository name.
    - name: number
      value: {{ number }}
      description: |
        The issue or pull request number.
    - name: title
      value: "{{ title }}"
      description: |
        The title of the draft issue item to create in the project.
    - name: body
      value: "{{ body }}"
      description: |
        The body content of the draft issue item to create in the project.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_item_for_org"
    values={[
        { label: 'update_item_for_org', value: 'update_item_for_org' },
        { label: 'update_item_for_user', value: 'update_item_for_user' }
    ]}
>
<TabItem value="update_item_for_org">

Update a specific item in an organization-owned project.

```sql
UPDATE github.projects.project_items
SET 
fields = '{{ fields }}'
WHERE 
project_number = '{{ project_number }}' --required
AND org = '{{ org }}' --required
AND item_id = '{{ item_id }}' --required
AND fields = '{{ fields }}' --required
RETURNING
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
fields,
item_url,
project_url,
updated_at;
```
</TabItem>
<TabItem value="update_item_for_user">

Update a specific item in a user-owned project.

```sql
UPDATE github.projects.project_items
SET 
fields = '{{ fields }}'
WHERE 
project_number = '{{ project_number }}' --required
AND username = '{{ username }}' --required
AND item_id = '{{ item_id }}' --required
AND fields = '{{ fields }}' --required
RETURNING
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
fields,
item_url,
project_url,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_item_for_org"
    values={[
        { label: 'delete_item_for_org', value: 'delete_item_for_org' },
        { label: 'delete_item_for_user', value: 'delete_item_for_user' }
    ]}
>
<TabItem value="delete_item_for_org">

Delete a specific item from an organization-owned project.

```sql
DELETE FROM github.projects.project_items
WHERE project_number = '{{ project_number }}' --required
AND org = '{{ org }}' --required
AND item_id = '{{ item_id }}' --required
;
```
</TabItem>
<TabItem value="delete_item_for_user">

Delete a specific item from a user-owned project.

```sql
DELETE FROM github.projects.project_items
WHERE project_number = '{{ project_number }}' --required
AND username = '{{ username }}' --required
AND item_id = '{{ item_id }}' --required
;
```
</TabItem>
</Tabs>
