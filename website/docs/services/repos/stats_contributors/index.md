--- 
title: stats_contributors
hide_title: false
hide_table_of_contents: false
keywords:
  - stats_contributors
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

Creates, updates, deletes, gets or lists a <code>stats_contributors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stats_contributors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.stats_contributors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_contributors_stats"
    values={[
        { label: 'get_contributors_stats', value: 'get_contributors_stats' }
    ]}
>
<TabItem value="get_contributors_stats">

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
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="weeks" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#get_contributors_stats"><CopyableCode code="get_contributors_stats" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td><br />Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:<br /><br />*   `w` - Start of the week, given as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).<br />*   `a` - Number of additions<br />*   `d` - Number of deletions<br />*   `c` - Number of commits<br /><br />&gt; [!NOTE]<br />&gt; This endpoint will return `0` values for all addition and deletion counts in repositories with 10,000 or more commits.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_contributors_stats"
    values={[
        { label: 'get_contributors_stats', value: 'get_contributors_stats' }
    ]}
>
<TabItem value="get_contributors_stats">

<br />Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:<br /><br />*   `w` - Start of the week, given as a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time).<br />*   `a` - Number of additions<br />*   `d` - Number of deletions<br />*   `c` - Number of commits<br /><br />&gt; [!NOTE]<br />&gt; This endpoint will return `0` values for all addition and deletion counts in repositories with 10,000 or more commits.

```sql
SELECT
author,
total,
weeks
FROM github.repos.stats_contributors
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>
