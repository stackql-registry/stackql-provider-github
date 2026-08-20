--- 
title: star_history
hide_title: false
hide_table_of_contents: false
keywords:
  - star_history
  - activity
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

Creates, updates, deletes, gets or lists a <code>star_history</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="star_history" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.activity.star_history" /></td></tr>
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
    <td><CopyableCode code="starred_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the star was given.</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>The user who starred the repository (`login`, `id`, `database_id`, `name`, `company`, `location`, `url`, `avatar_url`).</td>
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
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Every star on a repository with the time it was given, oldest first - suitable for star growth over time. Backed by the GitHub GraphQL API (`repository.stargazers` ordered by `STARRED_AT`). Since July 2026 GitHub limits stargazer listings to repository admins and collaborators; other tokens get "Resource not accessible by personal access token".</td>
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
    <td>The account owner of the repository.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository.</td>
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

Every star on a repository with the time it was given, oldest first - suitable for star growth over time. Backed by the GitHub GraphQL API (`repository.stargazers` ordered by `STARRED_AT`). Since July 2026 GitHub limits stargazer listings to repository admins and collaborators; other tokens get "Resource not accessible by personal access token".

```sql
SELECT
starred_at,
user
FROM github.activity.star_history
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>
