--- 
title: project_view_items
hide_title: false
hide_table_of_contents: false
keywords:
  - project_view_items
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

Creates, updates, deletes, gets or lists a <code>project_view_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_view_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.projects.project_view_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_view_items_for_org"
    values={[
        { label: 'list_view_items_for_org', value: 'list_view_items_for_org' },
        { label: 'list_view_items_for_user', value: 'list_view_items_for_user' }
    ]}
>
<TabItem value="list_view_items_for_org">

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
<TabItem value="list_view_items_for_user">

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
    <td><a href="#list_view_items_for_org"><CopyableCode code="list_view_items_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-org"><code>org</code></a>, <a href="#parameter-view_number"><code>view_number</code></a></td>
    <td><a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>List items in an organization project with the saved view's filter applied.</td>
</tr>
<tr>
    <td><a href="#list_view_items_for_user"><CopyableCode code="list_view_items_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-view_number"><code>view_number</code></a></td>
    <td><a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>List items in a user project with the saved view's filter applied.</td>
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
<tr id="parameter-project_number">
    <td><CopyableCode code="project_number" /></td>
    <td><code>integer</code></td>
    <td>The project's number.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-view_number">
    <td><CopyableCode code="view_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the project view.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_view_items_for_org"
    values={[
        { label: 'list_view_items_for_org', value: 'list_view_items_for_org' },
        { label: 'list_view_items_for_user', value: 'list_view_items_for_user' }
    ]}
>
<TabItem value="list_view_items_for_org">

List items in an organization project with the saved view's filter applied.

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
FROM github.projects.project_view_items
WHERE project_number = '{{ project_number }}' -- required
AND org = '{{ org }}' -- required
AND view_number = '{{ view_number }}' -- required
AND fields = '{{ fields }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list_view_items_for_user">

List items in a user project with the saved view's filter applied.

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
FROM github.projects.project_view_items
WHERE project_number = '{{ project_number }}' -- required
AND username = '{{ username }}' -- required
AND view_number = '{{ view_number }}' -- required
AND fields = '{{ fields }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>
