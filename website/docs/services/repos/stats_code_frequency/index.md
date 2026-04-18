--- 
title: stats_code_frequency
hide_title: false
hide_table_of_contents: false
keywords:
  - stats_code_frequency
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

Creates, updates, deletes, gets or lists a <code>stats_code_frequency</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stats_code_frequency" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.stats_code_frequency" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_code_frequency_stats"
    values={[
        { label: 'get_code_frequency_stats', value: 'get_code_frequency_stats' }
    ]}
>
<TabItem value="get_code_frequency_stats">

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#get_code_frequency_stats"><CopyableCode code="get_code_frequency_stats" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Returns a weekly aggregate of the number of additions and deletions pushed to a repository.<br /><br />&gt; [!NOTE]<br />&gt; This endpoint can only be used for repositories with fewer than 10,000 commits. If the repository contains 10,000 or more commits, a 422 status code will be returned.</td>
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
    defaultValue="get_code_frequency_stats"
    values={[
        { label: 'get_code_frequency_stats', value: 'get_code_frequency_stats' }
    ]}
>
<TabItem value="get_code_frequency_stats">

Returns a weekly aggregate of the number of additions and deletions pushed to a repository.<br /><br />&gt; [!NOTE]<br />&gt; This endpoint can only be used for repositories with fewer than 10,000 commits. If the repository contains 10,000 or more commits, a 422 status code will be returned.

```sql
SELECT
*
FROM github.repos.stats_code_frequency
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>
