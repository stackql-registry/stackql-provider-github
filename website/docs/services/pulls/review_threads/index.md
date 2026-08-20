--- 
title: review_threads
hide_title: false
hide_table_of_contents: false
keywords:
  - review_threads
  - pulls
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

Creates, updates, deletes, gets or lists a <code>review_threads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="review_threads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.pulls.review_threads" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The GraphQL node ID of the thread.</td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>object</code></td>
    <td>The comments in the thread (`total_count`, `nodes[]` with `id`, `url`, `body`, `created_at`, `author.login`).</td>
</tr>
<tr>
    <td><CopyableCode code="diff_side" /></td>
    <td><code>string</code></td>
    <td>LEFT or RIGHT.</td>
</tr>
<tr>
    <td><CopyableCode code="is_collapsed" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_outdated" /></td>
    <td><code>boolean</code></td>
    <td>Whether the thread is on a line that has since changed.</td>
</tr>
<tr>
    <td><CopyableCode code="is_resolved" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="line" /></td>
    <td><code>integer</code></td>
    <td>The line in the diff the thread is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The file the thread is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by" /></td>
    <td><code>object</code></td>
    <td>The user who resolved the thread (`login`).</td>
</tr>
<tr>
    <td><CopyableCode code="start_line" /></td>
    <td><code>integer</code></td>
    <td>The first line of a multi-line comment range.</td>
</tr>
<tr>
    <td><CopyableCode code="subject_type" /></td>
    <td><code>string</code></td>
    <td>LINE or FILE.</td>
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
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Review comment threads on a pull request with their resolved / outdated state and the comments in each thread. Backed by the GitHub GraphQL API (`pullRequest.reviewThreads`); the REST API does not expose thread resolution.</td>
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
<tr id="parameter-pull_number">
    <td><CopyableCode code="pull_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the pull request.</td>
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

Review comment threads on a pull request with their resolved / outdated state and the comments in each thread. Backed by the GitHub GraphQL API (`pullRequest.reviewThreads`); the REST API does not expose thread resolution.

```sql
SELECT
id,
comments,
diff_side,
is_collapsed,
is_outdated,
is_resolved,
line,
path,
resolved_by,
start_line,
subject_type
FROM github.pulls.review_threads
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND pull_number = '{{ pull_number }}' -- required
;
```
</TabItem>
</Tabs>
