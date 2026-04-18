--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - agent_tasks
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

Creates, updates, deletes, gets or lists a <code>tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.agent_tasks.tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_task_by_id"
    values={[
        { label: 'get_task_by_id', value: 'get_task_by_id' },
        { label: 'list_tasks', value: 'list_tasks' }
    ]}
>
<TabItem value="get_task_by_id">

Task retrieved successfully

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
    <td><code>string</code></td>
    <td>Session ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Session name</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>Task ID this session belongs to</td>
</tr>
<tr>
    <td><CopyableCode code="base_ref" /></td>
    <td><code>string</code></td>
    <td>Base branch name</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completion timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Error details for a failed session</td>
</tr>
<tr>
    <td><CopyableCode code="head_ref" /></td>
    <td><code>string</code></td>
    <td>Head branch name</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>Model used for this session</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>The owner of the repository</td>
</tr>
<tr>
    <td><CopyableCode code="prompt" /></td>
    <td><code>string</code></td>
    <td>Content of the triggering event</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>The repository this session belongs to</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of a session (queued, in_progress, completed, failed, idle, waiting_for_user, timed_out, cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update timestamp</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>The user who created this session</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_tasks">

Tasks retrieved successfully

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
    <td><CopyableCode code="tasks" /></td>
    <td><code>array</code></td>
    <td>List of tasks</td>
</tr>
<tr>
    <td><CopyableCode code="total_active_count" /></td>
    <td><code>integer (int32)</code></td>
    <td>Total count of active (non-archived) tasks</td>
</tr>
<tr>
    <td><CopyableCode code="total_archived_count" /></td>
    <td><code>integer (int32)</code></td>
    <td>Total count of archived tasks</td>
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
    <td><a href="#get_task_by_id"><CopyableCode code="get_task_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Returns a task by ID with its associated sessions<br /></td>
</tr>
<tr>
    <td><a href="#list_tasks"><CopyableCode code="list_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-is_archived"><code>is_archived</code></a>, <a href="#parameter-since"><code>since</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Returns a list of tasks for the authenticated user<br /></td>
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
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task.</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort results. Can be `asc` or `desc`.</td>
</tr>
<tr id="parameter-is_archived">
    <td><CopyableCode code="is_archived" /></td>
    <td><code>boolean</code></td>
    <td>Filter by archived status. When `true`, returns only archived tasks. When `false` or omitted, returns only non-archived tasks. Defaults to `false`.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100).</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show tasks updated at or after this time (ISO 8601 timestamp)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The field to sort results by. Can be `updated_at` or `created_at`.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of task states to filter by. Can be any combination of: `queued`, `in_progress`, `completed`, `failed`, `idle`, `waiting_for_user`, `timed_out`, `cancelled`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_task_by_id"
    values={[
        { label: 'get_task_by_id', value: 'get_task_by_id' },
        { label: 'list_tasks', value: 'list_tasks' }
    ]}
>
<TabItem value="get_task_by_id">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Returns a task by ID with its associated sessions<br />

```sql
SELECT
id,
name,
task_id,
base_ref,
completed_at,
created_at,
error,
head_ref,
model,
owner,
prompt,
repository,
state,
updated_at,
user
FROM github.agent_tasks.tasks
WHERE task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list_tasks">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Returns a list of tasks for the authenticated user<br />

```sql
SELECT
tasks,
total_active_count,
total_archived_count
FROM github.agent_tasks.tasks
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND state = '{{ state }}'
AND is_archived = '{{ is_archived }}'
AND since = '{{ since }}'
;
```
</TabItem>
</Tabs>
