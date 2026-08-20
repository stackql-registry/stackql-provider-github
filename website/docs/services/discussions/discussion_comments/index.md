--- 
title: discussion_comments
hide_title: false
hide_table_of_contents: false
keywords:
  - discussion_comments
  - discussions
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

Creates, updates, deletes, gets or lists a <code>discussion_comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discussion_comments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.discussions.discussion_comments" /></td></tr>
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
    <td>The GraphQL node ID of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>The comment author (`login`).</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The comment body as Markdown.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_answer" /></td>
    <td><code>boolean</code></td>
    <td>Whether this comment is the chosen answer.</td>
</tr>
<tr>
    <td><CopyableCode code="is_minimized" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="minimized_reason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>object</code></td>
    <td>Reaction counts (`total_count`).</td>
</tr>
<tr>
    <td><CopyableCode code="replies" /></td>
    <td><code>object</code></td>
    <td>Reply counts (`total_count`).</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="upvote_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The HTML URL of the comment.</td>
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
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-discussion_number"><code>discussion_number</code></a></td>
    <td></td>
    <td>Top-level comments on a discussion, with reply counts. Backed by the GitHub GraphQL API (`repository.discussion.comments`).</td>
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
<tr id="parameter-discussion_number">
    <td><CopyableCode code="discussion_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the discussion.</td>
</tr>
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

Top-level comments on a discussion, with reply counts. Backed by the GitHub GraphQL API (`repository.discussion.comments`).

```sql
SELECT
id,
author,
body,
created_at,
is_answer,
is_minimized,
minimized_reason,
published_at,
reactions,
replies,
updated_at,
upvote_count,
url
FROM github.discussions.discussion_comments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND discussion_number = '{{ discussion_number }}' -- required
;
```
</TabItem>
</Tabs>
