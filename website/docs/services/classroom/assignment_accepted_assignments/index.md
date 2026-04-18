--- 
title: assignment_accepted_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - assignment_accepted_assignments
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

Creates, updates, deletes, gets or lists an <code>assignment_accepted_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assignment_accepted_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.classroom.assignment_accepted_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_accepted_assignments_for_an_assignment"
    values={[
        { label: 'list_accepted_assignments_for_an_assignment', value: 'list_accepted_assignments_for_an_assignment' }
    ]}
>
<TabItem value="list_accepted_assignments_for_an_assignment">

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
    <td><CopyableCode code="assignment" /></td>
    <td><code>object</code></td>
    <td>A GitHub Classroom assignment (title: Simple Classroom Assignment)</td>
</tr>
<tr>
    <td><CopyableCode code="commit_count" /></td>
    <td><code>integer</code></td>
    <td>Count of student commits.</td>
</tr>
<tr>
    <td><CopyableCode code="grade" /></td>
    <td><code>string</code></td>
    <td>Most recent grade. (example: 10/10)</td>
</tr>
<tr>
    <td><CopyableCode code="passing" /></td>
    <td><code>boolean</code></td>
    <td>Whether a submission passed.</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>A GitHub repository view for Classroom (title: Simple Classroom Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="students" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="submitted" /></td>
    <td><code>boolean</code></td>
    <td>Whether an accepted assignment has been submitted.</td>
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
    <td><a href="#list_accepted_assignments_for_an_assignment"><CopyableCode code="list_accepted_assignments_for_an_assignment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-assignment_id"><code>assignment_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists any assignment repositories that have been created by students accepting a GitHub Classroom assignment. Accepted assignments will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.</td>
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
    defaultValue="list_accepted_assignments_for_an_assignment"
    values={[
        { label: 'list_accepted_assignments_for_an_assignment', value: 'list_accepted_assignments_for_an_assignment' }
    ]}
>
<TabItem value="list_accepted_assignments_for_an_assignment">

Lists any assignment repositories that have been created by students accepting a GitHub Classroom assignment. Accepted assignments will only be returned if the current user is an administrator of the GitHub Classroom for the assignment.

```sql
SELECT
id,
assignment,
commit_count,
grade,
passing,
repository,
students,
submitted
FROM github.classroom.assignment_accepted_assignments
WHERE assignment_id = '{{ assignment_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>
