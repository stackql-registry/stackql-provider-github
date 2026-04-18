--- 
title: assignment_grades
hide_title: false
hide_table_of_contents: false
keywords:
  - assignment_grades
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

Creates, updates, deletes, gets or lists an <code>assignment_grades</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assignment_grades" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.classroom.assignment_grades" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_assignment_grades"
    values={[
        { label: 'get_assignment_grades', value: 'get_assignment_grades' }
    ]}
>
<TabItem value="get_assignment_grades">

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
    <td><CopyableCode code="assignment_name" /></td>
    <td><code>string</code></td>
    <td>Name of the assignment</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>If a group assignment, name of the group the student is in</td>
</tr>
<tr>
    <td><CopyableCode code="student_repository_name" /></td>
    <td><code>string</code></td>
    <td>Name of the student's assignment repository</td>
</tr>
<tr>
    <td><CopyableCode code="assignment_url" /></td>
    <td><code>string</code></td>
    <td>URL of the assignment</td>
</tr>
<tr>
    <td><CopyableCode code="github_username" /></td>
    <td><code>string</code></td>
    <td>GitHub username of the student</td>
</tr>
<tr>
    <td><CopyableCode code="points_available" /></td>
    <td><code>integer</code></td>
    <td>Number of points available for the assignment</td>
</tr>
<tr>
    <td><CopyableCode code="points_awarded" /></td>
    <td><code>integer</code></td>
    <td>Number of points awarded to the student</td>
</tr>
<tr>
    <td><CopyableCode code="roster_identifier" /></td>
    <td><code>string</code></td>
    <td>Roster identifier of the student</td>
</tr>
<tr>
    <td><CopyableCode code="starter_code_url" /></td>
    <td><code>string</code></td>
    <td>URL of the starter code for the assignment</td>
</tr>
<tr>
    <td><CopyableCode code="student_repository_url" /></td>
    <td><code>string</code></td>
    <td>URL of the student's assignment repository</td>
</tr>
<tr>
    <td><CopyableCode code="submission_timestamp" /></td>
    <td><code>string</code></td>
    <td>Timestamp of the student's assignment submission</td>
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
    <td><a href="#get_assignment_grades"><CopyableCode code="get_assignment_grades" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assignment_id"><code>assignment_id</code></a></td>
    <td></td>
    <td>Gets grades for a GitHub Classroom assignment. Grades will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.</td>
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
<tr id="parameter-assignment_id">
    <td><CopyableCode code="assignment_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the classroom assignment.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_assignment_grades"
    values={[
        { label: 'get_assignment_grades', value: 'get_assignment_grades' }
    ]}
>
<TabItem value="get_assignment_grades">

Gets grades for a GitHub Classroom assignment. Grades will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.

```sql
SELECT
assignment_name,
group_name,
student_repository_name,
assignment_url,
github_username,
points_available,
points_awarded,
roster_identifier,
starter_code_url,
student_repository_url,
submission_timestamp
FROM github.classroom.assignment_grades
WHERE assignment_id = '{{ assignment_id }}' -- required
;
```
</TabItem>
</Tabs>
