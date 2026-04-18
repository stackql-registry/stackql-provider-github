--- 
title: commit_comments
hide_title: false
hide_table_of_contents: false
keywords:
  - commit_comments
  - reactions
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

Creates, updates, deletes, gets or lists a <code>commit_comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commit_comments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.reactions.commit_comments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_for_commit_comment"
    values={[
        { label: 'list_for_commit_comment', value: 'list_for_commit_comment' }
    ]}
>
<TabItem value="list_for_commit_comment">

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
    <td> (example: MDg6UmVhY3Rpb24x)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The reaction to use (+1, -1, laugh, confused, heart, hooray, rocket, eyes) (example: heart)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2016-05-20T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
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
    <td><a href="#list_for_commit_comment"><CopyableCode code="list_for_commit_comment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a></td>
    <td><a href="#parameter-content"><code>content</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List the reactions to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment).</td>
</tr>
<tr>
    <td><a href="#create_for_commit_comment"><CopyableCode code="create_for_commit_comment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Create a reaction to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.</td>
</tr>
<tr>
    <td><a href="#delete_for_commit_comment"><CopyableCode code="delete_for_commit_comment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a>, <a href="#parameter-reaction_id"><code>reaction_id</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.<br /><br />Delete a reaction to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment).</td>
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
<tr id="parameter-comment_id">
    <td><CopyableCode code="comment_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The unique identifier of the comment.</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-reaction_id">
    <td><CopyableCode code="reaction_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the reaction.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-content">
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a commit comment.</td>
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
    defaultValue="list_for_commit_comment"
    values={[
        { label: 'list_for_commit_comment', value: 'list_for_commit_comment' }
    ]}
>
<TabItem value="list_for_commit_comment">

List the reactions to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment).

```sql
SELECT
id,
node_id,
content,
created_at,
user
FROM github.reactions.commit_comments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND comment_id = '{{ comment_id }}' -- required
AND content = '{{ content }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_for_commit_comment"
    values={[
        { label: 'create_for_commit_comment', value: 'create_for_commit_comment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_for_commit_comment">

Create a reaction to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.

```sql
INSERT INTO github.reactions.commit_comments (
content,
owner,
repo,
comment_id
)
SELECT 
'{{ content }}' /* required */,
'{{ owner }}',
'{{ repo }}',
'{{ comment_id }}'
RETURNING
id,
node_id,
content,
created_at,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: commit_comments
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the commit_comments resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the commit_comments resource.
    - name: comment_id
      value: "{{ comment_id }}"
      description: Required parameter for the commit_comments resource.
    - name: content
      value: "{{ content }}"
      description: |
        The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the commit comment.
      valid_values: ['+1', '-1', 'laugh', 'confused', 'heart', 'hooray', 'rocket', 'eyes']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_for_commit_comment"
    values={[
        { label: 'delete_for_commit_comment', value: 'delete_for_commit_comment' }
    ]}
>
<TabItem value="delete_for_commit_comment">

&gt; [!NOTE]<br />&gt; You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.<br /><br />Delete a reaction to a [commit comment](https://docs.github.com/rest/commits/comments#get-a-commit-comment).

```sql
DELETE FROM github.reactions.commit_comments
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND comment_id = '{{ comment_id }}' --required
AND reaction_id = '{{ reaction_id }}' --required
;
```
</TabItem>
</Tabs>
