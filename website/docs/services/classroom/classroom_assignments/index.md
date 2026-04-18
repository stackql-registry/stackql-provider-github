--- 
title: classroom_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - classroom_assignments
  - classroom
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

Creates, updates, deletes, gets or lists a <code>classroom_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="classroom_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.classroom.classroom_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assignments_for_a_classroom"
    values={[
        { label: 'list_assignments_for_a_classroom', value: 'list_assignments_for_a_classroom' }
    ]}
>
<TabItem value="list_assignments_for_a_classroom">

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
    <td>Unique identifier of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="accepted" /></td>
    <td><code>integer</code></td>
    <td>The number of students that have accepted the assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="classroom" /></td>
    <td><code>object</code></td>
    <td>A GitHub Classroom classroom (title: Simple Classroom)</td>
</tr>
<tr>
    <td><CopyableCode code="deadline" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the assignment is due. (example: 2011-01-26T19:06:43Z)</td>
</tr>
<tr>
    <td><CopyableCode code="editor" /></td>
    <td><code>string</code></td>
    <td>The selected editor for the assignment. (example: codespaces)</td>
</tr>
<tr>
    <td><CopyableCode code="feedback_pull_requests_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether feedback pull request will be created on assignment acceptance.</td>
</tr>
<tr>
    <td><CopyableCode code="invitations_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the invitation link is enabled. Visiting an enabled invitation link will accept the assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="invite_link" /></td>
    <td><code>string</code></td>
    <td>The link that a student can use to accept the assignment. (example: https://classroom.github.com/a/Lx7jiUgx)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The programming language used in the assignment. (example: elixir)</td>
</tr>
<tr>
    <td><CopyableCode code="max_members" /></td>
    <td><code>integer</code></td>
    <td>The maximum allowable members per team.</td>
</tr>
<tr>
    <td><CopyableCode code="max_teams" /></td>
    <td><code>integer</code></td>
    <td>The maximum allowable teams for the assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="passing" /></td>
    <td><code>integer</code></td>
    <td>The number of students that have passed the assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="public_repo" /></td>
    <td><code>boolean</code></td>
    <td>Whether an accepted assignment creates a public repository.</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>Sluggified name of the assignment. (example: intro-to-binaries)</td>
</tr>
<tr>
    <td><CopyableCode code="students_are_repo_admins" /></td>
    <td><code>boolean</code></td>
    <td>Whether students are admins on created repository on accepted assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="submitted" /></td>
    <td><code>integer</code></td>
    <td>The number of students that have submitted the assignment.</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Assignment title. (example: Intro to Binaries)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Whether it's a Group Assignment or Individual Assignment. (individual, group) (example: individual)</td>
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
    <td><a href="#list_assignments_for_a_classroom"><CopyableCode code="list_assignments_for_a_classroom" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-classroom_id"><code>classroom_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists GitHub Classroom assignments for a classroom. Assignments will only be returned if the current user is an administrator of the GitHub Classroom.</td>
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
<tr id="parameter-classroom_id">
    <td><CopyableCode code="classroom_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the classroom.</td>
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
    defaultValue="list_assignments_for_a_classroom"
    values={[
        { label: 'list_assignments_for_a_classroom', value: 'list_assignments_for_a_classroom' }
    ]}
>
<TabItem value="list_assignments_for_a_classroom">

Lists GitHub Classroom assignments for a classroom. Assignments will only be returned if the current user is an administrator of the GitHub Classroom.

```sql
SELECT
id,
accepted,
classroom,
deadline,
editor,
feedback_pull_requests_enabled,
invitations_enabled,
invite_link,
language,
max_members,
max_teams,
passing,
public_repo,
slug,
students_are_repo_admins,
submitted,
title,
type
FROM github.classroom.classroom_assignments
WHERE classroom_id = '{{ classroom_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>
