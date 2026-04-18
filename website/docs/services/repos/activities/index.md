--- 
title: activities
hide_title: false
hide_table_of_contents: false
keywords:
  - activities
  - repos
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

Creates, updates, deletes, gets or lists an <code>activities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="activities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.activities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_activities"
    values={[
        { label: 'list_activities', value: 'list_activities' }
    ]}
>
<TabItem value="list_activities">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOlJlcG9zaXRvcnkxMjk2MjY5)</td>
</tr>
<tr>
    <td><CopyableCode code="activity_type" /></td>
    <td><code>string</code></td>
    <td>The type of the activity that was performed. (push, force_push, branch_deletion, branch_creation, pr_merge, merge_queue_merge) (example: force_push)</td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit after the activity. (example: 827efc6d56897b048c772eb4087f854f46256132)</td>
</tr>
<tr>
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit before the activity. (example: 6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The full Git reference, formatted as `refs/heads/<branch name>`. (example: refs/heads/main)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the activity occurred. (example: 2011-01-26T19:06:43Z)</td>
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
    <td><a href="#list_activities"><CopyableCode code="list_activities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-actor"><code>actor</code></a>, <a href="#parameter-time_period"><code>time_period</code></a>, <a href="#parameter-activity_type"><code>activity_type</code></a></td>
    <td>Lists a detailed history of changes to a repository, such as pushes, merges, force pushes, and branch changes, and associates these changes with commits and users.<br /><br />For more information about viewing repository activity,<br />see "[Viewing activity and data for your repository](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository)."</td>
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
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-activity_type">
    <td><CopyableCode code="activity_type" /></td>
    <td><code>string</code></td>
    <td>The activity type to filter by.  For example, you can choose to filter by "force_push", to see all force pushes to the repository.</td>
</tr>
<tr id="parameter-actor">
    <td><CopyableCode code="actor" /></td>
    <td><code>string</code></td>
    <td>The GitHub username to use to filter by the actor who performed the activity.</td>
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
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The Git reference for the activities you want to list.  The `ref` for a branch can be formatted either as `refs/heads/BRANCH_NAME` or `BRANCH_NAME`, where `BRANCH_NAME` is the name of your branch.</td>
</tr>
<tr id="parameter-time_period">
    <td><CopyableCode code="time_period" /></td>
    <td><code>string</code></td>
    <td>The time period to filter by.  For example, `day` will filter for activity that occurred in the past 24 hours, and `week` will filter for activity that occurred in the past 7 days (168 hours).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_activities"
    values={[
        { label: 'list_activities', value: 'list_activities' }
    ]}
>
<TabItem value="list_activities">

Lists a detailed history of changes to a repository, such as pushes, merges, force pushes, and branch changes, and associates these changes with commits and users.<br /><br />For more information about viewing repository activity,<br />see "[Viewing activity and data for your repository](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository)."

```sql
SELECT
id,
node_id,
activity_type,
actor,
after,
before,
ref,
timestamp
FROM github.repos.activities
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND direction = '{{ direction }}'
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND ref = '{{ ref }}'
AND actor = '{{ actor }}'
AND time_period = '{{ time_period }}'
AND activity_type = '{{ activity_type }}'
;
```
</TabItem>
</Tabs>
