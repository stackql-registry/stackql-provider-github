--- 
title: contribution_calendar
hide_title: false
hide_table_of_contents: false
keywords:
  - contribution_calendar
  - users
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

Creates, updates, deletes, gets or lists a <code>contribution_calendar</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contribution_calendar" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.contribution_calendar" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="contribution_days" /></td>
    <td><code>array</code></td>
    <td>Daily entries for the week: `date`, `weekday` (0 = Sunday), `contribution_count`, `color`.</td>
</tr>
<tr>
    <td><CopyableCode code="first_day" /></td>
    <td><code>string (date)</code></td>
    <td>The date of the first day (Sunday) of the week.</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td>A user's contribution calendar (the profile contribution graph), one row per week with the daily counts as a JSON array - expand with `json_each`. Defaults to the trailing year; pass `from` and `to` (ISO 8601 timestamps, at most one year apart) for another window. Backed by the GitHub GraphQL API (`user.contributionsCollection.contributionCalendar`).</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only contributions made at this time or later will be counted. ISO 8601, e.g. 2025-01-01T00:00:00Z.</td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only contributions made before and up to this time will be counted. ISO 8601.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

A user's contribution calendar (the profile contribution graph), one row per week with the daily counts as a JSON array - expand with `json_each`. Defaults to the trailing year; pass `from` and `to` (ISO 8601 timestamps, at most one year apart) for another window. Backed by the GitHub GraphQL API (`user.contributionsCollection.contributionCalendar`).

```sql
SELECT
contribution_days,
first_day
FROM github.users.contribution_calendar
WHERE username = '{{ username }}' -- required
AND from = '{{ from }}'
AND to = '{{ to }}'
;
```
</TabItem>
</Tabs>
