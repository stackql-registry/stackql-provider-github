--- 
title: comments
hide_title: false
hide_table_of_contents: false
keywords:
  - comments
  - gists
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

Creates, updates, deletes, gets or lists a <code>comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="comments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.gists.comments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_comment"
    values={[
        { label: 'get_comment', value: 'get_comment' },
        { label: 'list_comments', value: 'list_comments' }
    ]}
>
<TabItem value="get_comment">

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
    <td> (example: MDExOkdpc3RDb21tZW50MQ==)</td>
</tr>
<tr>
    <td><CopyableCode code="author_association" /></td>
    <td><code>string</code></td>
    <td>How the author is associated with the repository. (COLLABORATOR, CONTRIBUTOR, FIRST_TIMER, FIRST_TIME_CONTRIBUTOR, MANNEQUIN, MEMBER, NONE, OWNER) (title: author_association, example: OWNER)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The comment text. (example: Body of the attachment)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-18T23:23:56Z)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-18T23:23:56Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/gists/a6db0bec360bb87e9418/comments/1)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_comments">

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
    <td> (example: MDExOkdpc3RDb21tZW50MQ==)</td>
</tr>
<tr>
    <td><CopyableCode code="author_association" /></td>
    <td><code>string</code></td>
    <td>How the author is associated with the repository. (COLLABORATOR, CONTRIBUTOR, FIRST_TIMER, FIRST_TIME_CONTRIBUTOR, MANNEQUIN, MEMBER, NONE, OWNER) (title: author_association, example: OWNER)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The comment text. (example: Body of the attachment)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-18T23:23:56Z)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-18T23:23:56Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/gists/a6db0bec360bb87e9418/comments/1)</td>
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
    <td><a href="#get_comment"><CopyableCode code="get_comment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a></td>
    <td></td>
    <td>Gets a comment on a gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.</td>
</tr>
<tr>
    <td><a href="#list_comments"><CopyableCode code="list_comments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the comments on a gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.</td>
</tr>
<tr>
    <td><a href="#create_comment"><CopyableCode code="create_comment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Creates a comment on a gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.</td>
</tr>
<tr>
    <td><a href="#update_comment"><CopyableCode code="update_comment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Updates a comment on a gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.</td>
</tr>
<tr>
    <td><a href="#delete_comment"><CopyableCode code="delete_comment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-gist_id">
    <td><CopyableCode code="gist_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gist.</td>
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
    defaultValue="get_comment"
    values={[
        { label: 'get_comment', value: 'get_comment' },
        { label: 'list_comments', value: 'list_comments' }
    ]}
>
<TabItem value="get_comment">

Gets a comment on a gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.

```sql
SELECT
id,
node_id,
author_association,
body,
created_at,
updated_at,
url,
user
FROM github.gists.comments
WHERE gist_id = '{{ gist_id }}' -- required
AND comment_id = '{{ comment_id }}' -- required
;
```
</TabItem>
<TabItem value="list_comments">

Lists the comments on a gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.

```sql
SELECT
id,
node_id,
author_association,
body,
created_at,
updated_at,
url,
user
FROM github.gists.comments
WHERE gist_id = '{{ gist_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_comment"
    values={[
        { label: 'create_comment', value: 'create_comment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_comment">

Creates a comment on a gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.

```sql
INSERT INTO github.gists.comments (
body,
gist_id
)
SELECT 
'{{ body }}' /* required */,
'{{ gist_id }}'
RETURNING
id,
node_id,
author_association,
body,
created_at,
updated_at,
url,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: comments
  props:
    - name: gist_id
      value: "{{ gist_id }}"
      description: Required parameter for the comments resource.
    - name: body
      value: "{{ body }}"
      description: |
        The comment text.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_comment"
    values={[
        { label: 'update_comment', value: 'update_comment' }
    ]}
>
<TabItem value="update_comment">

Updates a comment on a gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.

```sql
UPDATE github.gists.comments
SET 
body = '{{ body }}'
WHERE 
gist_id = '{{ gist_id }}' --required
AND comment_id = '{{ comment_id }}' --required
AND body = '{{ body }}' --required
RETURNING
id,
node_id,
author_association,
body,
created_at,
updated_at,
url,
user;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_comment"
    values={[
        { label: 'delete_comment', value: 'delete_comment' }
    ]}
>
<TabItem value="delete_comment">

No description available.

```sql
DELETE FROM github.gists.comments
WHERE gist_id = '{{ gist_id }}' --required
AND comment_id = '{{ comment_id }}' --required
;
```
</TabItem>
</Tabs>
