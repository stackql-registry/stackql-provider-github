--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.projects.projects" /></td></tr>
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
    <td><code>number</code></td>
    <td>The unique identifier of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was closed. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was deleted. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="is_template" /></td>
    <td><code>boolean</code></td>
    <td>Whether this project is a template</td>
</tr>
<tr>
    <td><CopyableCode code="latest_status_update" /></td>
    <td><code>object</code></td>
    <td>An status update belonging to a project (title: Projects v2 Status Update)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The project number.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>Whether the project is visible to anyone with access to the owner.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>A concise summary of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the project. (open, closed)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The project title.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was last updated. (example: 2022-04-28T12:00:00Z)</td>
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
    <td><code>number</code></td>
    <td>The unique identifier of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was closed. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was deleted. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="is_template" /></td>
    <td><code>boolean</code></td>
    <td>Whether this project is a template</td>
</tr>
<tr>
    <td><CopyableCode code="latest_status_update" /></td>
    <td><code>object</code></td>
    <td>An status update belonging to a project (title: Projects v2 Status Update)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The project number.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>Whether the project is visible to anyone with access to the owner.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>A concise summary of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the project. (open, closed)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The project title.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was last updated. (example: 2022-04-28T12:00:00Z)</td>
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
    <td><code>number</code></td>
    <td>The unique identifier of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was closed. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was deleted. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="is_template" /></td>
    <td><code>boolean</code></td>
    <td>Whether this project is a template</td>
</tr>
<tr>
    <td><CopyableCode code="latest_status_update" /></td>
    <td><code>object</code></td>
    <td>An status update belonging to a project (title: Projects v2 Status Update)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The project number.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>Whether the project is visible to anyone with access to the owner.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>A concise summary of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the project. (open, closed)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The project title.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was last updated. (example: 2022-04-28T12:00:00Z)</td>
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
    <td><code>number</code></td>
    <td>The unique identifier of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was closed. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was deleted. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="is_template" /></td>
    <td><code>boolean</code></td>
    <td>Whether this project is a template</td>
</tr>
<tr>
    <td><CopyableCode code="latest_status_update" /></td>
    <td><code>object</code></td>
    <td>An status update belonging to a project (title: Projects v2 Status Update)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The project number.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>Whether the project is visible to anyone with access to the owner.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>A concise summary of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the project. (open, closed)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The project title.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the project was last updated. (example: 2022-04-28T12:00:00Z)</td>
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
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Get a specific organization-owned project.</td>
</tr>
<tr>
    <td><a href="#get_for_user"><CopyableCode code="get_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Get a specific user-owned project.</td>
</tr>
<tr>
    <td><a href="#list_for_org"><CopyableCode code="list_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-q"><code>q</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>List all projects owned by a specific organization accessible by the authenticated user.</td>
</tr>
<tr>
    <td><a href="#list_for_user"><CopyableCode code="list_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-q"><code>q</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>List all projects owned by a specific user accessible by the authenticated user.</td>
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
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td>Limit results to projects of the specified type.</td>
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

Get a specific organization-owned project.

```sql
SELECT
id,
node_id,
closed_at,
created_at,
creator,
deleted_at,
deleted_by,
description,
is_template,
latest_status_update,
number,
owner,
public,
short_description,
state,
title,
updated_at
FROM github.projects.projects
WHERE project_number = '{{ project_number }}' -- required
AND org = '{{ org }}' -- required
;
```
</TabItem>
<TabItem value="get_for_user">

Get a specific user-owned project.

```sql
SELECT
id,
node_id,
closed_at,
created_at,
creator,
deleted_at,
deleted_by,
description,
is_template,
latest_status_update,
number,
owner,
public,
short_description,
state,
title,
updated_at
FROM github.projects.projects
WHERE project_number = '{{ project_number }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="list_for_org">

List all projects owned by a specific organization accessible by the authenticated user.

```sql
SELECT
id,
node_id,
closed_at,
created_at,
creator,
deleted_at,
deleted_by,
description,
is_template,
latest_status_update,
number,
owner,
public,
short_description,
state,
title,
updated_at
FROM github.projects.projects
WHERE org = '{{ org }}' -- required
AND q = '{{ q }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list_for_user">

List all projects owned by a specific user accessible by the authenticated user.

```sql
SELECT
id,
node_id,
closed_at,
created_at,
creator,
deleted_at,
deleted_by,
description,
is_template,
latest_status_update,
number,
owner,
public,
short_description,
state,
title,
updated_at
FROM github.projects.projects
WHERE username = '{{ username }}' -- required
AND q = '{{ q }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>
