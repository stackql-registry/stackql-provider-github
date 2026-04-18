--- 
title: repo_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - repo_tasks
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

Creates, updates, deletes, gets or lists a <code>repo_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repo_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.agent_tasks.repo_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_task_by_repo_and_id"
    values={[
        { label: 'get_task_by_repo_and_id', value: 'get_task_by_repo_and_id' },
        { label: 'list_tasks_for_repo', value: 'list_tasks_for_repo' }
    ]}
>
<TabItem value="get_task_by_repo_and_id">

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
<TabItem value="list_tasks_for_repo">

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
    <td><a href="#get_task_by_repo_and_id"><CopyableCode code="get_task_by_repo_and_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Returns a task by ID scoped to an owner/repo path<br /></td>
</tr>
<tr>
    <td><a href="#list_tasks_for_repo"><CopyableCode code="list_tasks_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-is_archived"><code>is_archived</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-creator_id"><code>creator_id</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Returns a list of tasks for a specific repository<br /></td>
</tr>
<tr>
    <td><a href="#create_task"><CopyableCode code="create_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-prompt"><code>prompt</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Creates a new task for a repository.<br /></td>
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
    <td>The name of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the task.</td>
</tr>
<tr id="parameter-creator_id">
    <td><CopyableCode code="creator_id" /></td>
    <td><code>integer</code></td>
    <td>Filter tasks by creator user ID</td>
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
    defaultValue="get_task_by_repo_and_id"
    values={[
        { label: 'get_task_by_repo_and_id', value: 'get_task_by_repo_and_id' },
        { label: 'list_tasks_for_repo', value: 'list_tasks_for_repo' }
    ]}
>
<TabItem value="get_task_by_repo_and_id">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Returns a task by ID scoped to an owner/repo path<br />

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
FROM github.agent_tasks.repo_tasks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list_tasks_for_repo">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Returns a list of tasks for a specific repository<br />

```sql
SELECT
tasks,
total_active_count,
total_archived_count
FROM github.agent_tasks.repo_tasks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND state = '{{ state }}'
AND is_archived = '{{ is_archived }}'
AND since = '{{ since }}'
AND creator_id = '{{ creator_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_task"
    values={[
        { label: 'create_task', value: 'create_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_task">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Creates a new task for a repository.<br />

```sql
INSERT INTO github.agent_tasks.repo_tasks (
prompt,
model,
create_pull_request,
base_ref,
owner,
repo
)
SELECT 
'{{ prompt }}' /* required */,
'{{ model }}',
{{ create_pull_request }},
'{{ base_ref }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
name,
archived_at,
artifacts,
created_at,
creator,
creator_type,
html_url,
owner,
repository,
session_count,
state,
updated_at,
url,
user_collaborators
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repo_tasks
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the repo_tasks resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the repo_tasks resource.
    - name: prompt
      value: "{{ prompt }}"
      description: |
        The user's prompt for the agent
    - name: model
      value: "{{ model }}"
      description: |
        The model to use for this task. The allowed models may change over time and depend on the user's GitHub Copilot plan and organization policies. Currently supported values: \`claude-sonnet-4.6\`, \`claude-opus-4.6\`, \`gpt-5.2-codex\`, \`gpt-5.3-codex\`, \`gpt-5.4\`, \`claude-sonnet-4.5\`, \`claude-opus-4.5\`
    - name: create_pull_request
      value: {{ create_pull_request }}
      description: |
        Whether to create a PR.
      default: false
    - name: base_ref
      value: "{{ base_ref }}"
      description: |
        Base ref for new branch/PR
`}</CodeBlock>

</TabItem>
</Tabs>
