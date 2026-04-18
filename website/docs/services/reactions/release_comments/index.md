--- 
title: release_comments
hide_title: false
hide_table_of_contents: false
keywords:
  - release_comments
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

Creates, updates, deletes, gets or lists a <code>release_comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="release_comments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.reactions.release_comments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_for_release"
    values={[
        { label: 'list_for_release', value: 'list_for_release' }
    ]}
>
<TabItem value="list_for_release">

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
    <td><a href="#list_for_release"><CopyableCode code="list_for_release" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-release_id"><code>release_id</code></a></td>
    <td><a href="#parameter-content"><code>content</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List the reactions to a [release](https://docs.github.com/rest/releases/releases#get-a-release).</td>
</tr>
<tr>
    <td><a href="#create_for_release"><CopyableCode code="create_for_release" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-release_id"><code>release_id</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Create a reaction to a [release](https://docs.github.com/rest/releases/releases#get-a-release). A response with a `Status: 200 OK` means that you already added the reaction type to this release.</td>
</tr>
<tr>
    <td><a href="#delete_for_release"><CopyableCode code="delete_for_release" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-release_id"><code>release_id</code></a>, <a href="#parameter-reaction_id"><code>reaction_id</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.<br /><br />Delete a reaction to a [release](https://docs.github.com/rest/releases/releases#get-a-release).</td>
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
<tr id="parameter-reaction_id">
    <td><CopyableCode code="reaction_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the reaction.</td>
</tr>
<tr id="parameter-release_id">
    <td><CopyableCode code="release_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the release.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-content">
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>Returns a single [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions). Omit this parameter to list all reactions to a release.</td>
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
    defaultValue="list_for_release"
    values={[
        { label: 'list_for_release', value: 'list_for_release' }
    ]}
>
<TabItem value="list_for_release">

List the reactions to a [release](https://docs.github.com/rest/releases/releases#get-a-release).

```sql
SELECT
id,
node_id,
content,
created_at,
user
FROM github.reactions.release_comments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND release_id = '{{ release_id }}' -- required
AND content = '{{ content }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_for_release"
    values={[
        { label: 'create_for_release', value: 'create_for_release' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_for_release">

Create a reaction to a [release](https://docs.github.com/rest/releases/releases#get-a-release). A response with a `Status: 200 OK` means that you already added the reaction type to this release.

```sql
INSERT INTO github.reactions.release_comments (
content,
owner,
repo,
release_id
)
SELECT 
'{{ content }}' /* required */,
'{{ owner }}',
'{{ repo }}',
'{{ release_id }}'
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
- name: release_comments
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the release_comments resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the release_comments resource.
    - name: release_id
      value: {{ release_id }}
      description: Required parameter for the release_comments resource.
    - name: content
      value: "{{ content }}"
      description: |
        The [reaction type](https://docs.github.com/rest/reactions/reactions#about-reactions) to add to the release.
      valid_values: ['+1', 'laugh', 'heart', 'hooray', 'rocket', 'eyes']
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_for_release"
    values={[
        { label: 'delete_for_release', value: 'delete_for_release' }
    ]}
>
<TabItem value="delete_for_release">

&gt; [!NOTE]<br />&gt; You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.<br /><br />Delete a reaction to a [release](https://docs.github.com/rest/releases/releases#get-a-release).

```sql
DELETE FROM github.reactions.release_comments
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND release_id = '{{ release_id }}' --required
AND reaction_id = '{{ reaction_id }}' --required
;
```
</TabItem>
</Tabs>
