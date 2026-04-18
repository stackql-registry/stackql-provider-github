--- 
title: gists
hide_title: false
hide_table_of_contents: false
keywords:
  - gists
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

Creates, updates, deletes, gets or lists a <code>gists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.gists.gists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_for_user', value: 'list_for_user' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commits_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="fork_of" /></td>
    <td><code>object</code></td>
    <td>Gist (title: Gist)</td>
</tr>
<tr>
    <td><CopyableCode code="forks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="forks_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_pull_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_push_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="history" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="truncated" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_for_user">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commits_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="forks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="forks_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_pull_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_push_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="history" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="truncated" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commits_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="forks" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="forks_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_pull_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_push_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="history" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="truncated" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a></td>
    <td></td>
    <td>Gets a specified gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.</td>
</tr>
<tr>
    <td><a href="#list_for_user"><CopyableCode code="list_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists public gists for the specified user:</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:</td>
</tr>
<tr>
    <td><a href="#fork"><CopyableCode code="fork" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-files"><code>files</code></a></td>
    <td></td>
    <td>Allows you to add a new gist with one or more files.<br /><br />&gt; [!NOTE]<br />&gt; Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a></td>
    <td></td>
    <td>Allows you to update a gist's description and to update, delete, or rename gist files. Files<br />from the previous version of the gist that aren't explicitly changed during an edit<br />are unchanged.<br /><br />At least one of `description` or `files` is required.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#check_is_starred"><CopyableCode code="check_is_starred" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#star"><CopyableCode code="star" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a></td>
    <td></td>
    <td>Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."</td>
</tr>
<tr>
    <td><a href="#unstar"><CopyableCode code="unstar" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-gist_id"><code>gist_id</code></a></td>
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
<tr id="parameter-gist_id">
    <td><CopyableCode code="gist_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the gist.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
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
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_for_user', value: 'list_for_user' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a specified gist.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.

```sql
SELECT
id,
node_id,
comments,
comments_enabled,
comments_url,
commits_url,
created_at,
description,
files,
fork_of,
forks,
forks_url,
git_pull_url,
git_push_url,
history,
html_url,
owner,
public,
truncated,
updated_at,
url,
user
FROM github.gists.gists
WHERE gist_id = '{{ gist_id }}' -- required
;
```
</TabItem>
<TabItem value="list_for_user">

Lists public gists for the specified user:

```sql
SELECT
id,
node_id,
comments,
comments_enabled,
comments_url,
commits_url,
created_at,
description,
files,
forks,
forks_url,
git_pull_url,
git_push_url,
history,
html_url,
owner,
public,
truncated,
updated_at,
url,
user
FROM github.gists.gists
WHERE username = '{{ username }}' -- required
AND since = '{{ since }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list">

Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:

```sql
SELECT
id,
node_id,
comments,
comments_enabled,
comments_url,
commits_url,
created_at,
description,
files,
forks,
forks_url,
git_pull_url,
git_push_url,
history,
html_url,
owner,
public,
truncated,
updated_at,
url,
user
FROM github.gists.gists
WHERE since = '{{ since }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="fork"
    values={[
        { label: 'fork', value: 'fork' },
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="fork">

No description available.

```sql
INSERT INTO github.gists.gists (
gist_id
)
SELECT 
'{{ gist_id }}'
RETURNING
id,
node_id,
comments,
comments_enabled,
comments_url,
commits_url,
created_at,
description,
files,
forks,
forks_url,
git_pull_url,
git_push_url,
history,
html_url,
owner,
public,
truncated,
updated_at,
url,
user
;
```
</TabItem>
<TabItem value="create">

Allows you to add a new gist with one or more files.<br /><br />&gt; [!NOTE]<br />&gt; Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.

```sql
INSERT INTO github.gists.gists (
description,
files,
public
)
SELECT 
'{{ description }}',
'{{ files }}' /* required */,
{{ public }}
RETURNING
id,
node_id,
comments,
comments_enabled,
comments_url,
commits_url,
created_at,
description,
files,
fork_of,
forks,
forks_url,
git_pull_url,
git_push_url,
history,
html_url,
owner,
public,
truncated,
updated_at,
url,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gists
  props:
    - name: gist_id
      value: "{{ gist_id }}"
      description: Required parameter for the gists resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the gist
    - name: files
      value: "{{ files }}"
      description: |
        Names and content for the files that make up the gist
    - name: public
      value: {{ public }}
      description: |
        Flag indicating whether the gist is public
      valid_values: ['true', 'false']
      default: false
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Allows you to update a gist's description and to update, delete, or rename gist files. Files<br />from the previous version of the gist that aren't explicitly changed during an edit<br />are unchanged.<br /><br />At least one of `description` or `files` is required.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown. This is the default if you do not pass any specific media type.

```sql
UPDATE github.gists.gists
SET 
description = '{{ description }}',
files = '{{ files }}'
WHERE 
gist_id = '{{ gist_id }}' --required
RETURNING
id,
node_id,
comments,
comments_enabled,
comments_url,
commits_url,
created_at,
description,
files,
fork_of,
forks,
forks_url,
git_pull_url,
git_push_url,
history,
html_url,
owner,
public,
truncated,
updated_at,
url,
user;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

No description available.

```sql
DELETE FROM github.gists.gists
WHERE gist_id = '{{ gist_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_is_starred"
    values={[
        { label: 'check_is_starred', value: 'check_is_starred' },
        { label: 'star', value: 'star' },
        { label: 'unstar', value: 'unstar' }
    ]}
>
<TabItem value="check_is_starred">

Response if gist is starred

```sql
EXEC github.gists.gists.check_is_starred 
@gist_id='{{ gist_id }}' --required
;
```
</TabItem>
<TabItem value="star">

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."

```sql
EXEC github.gists.gists.star 
@gist_id='{{ gist_id }}' --required
;
```
</TabItem>
<TabItem value="unstar">

Response

```sql
EXEC github.gists.gists.unstar 
@gist_id='{{ gist_id }}' --required
;
```
</TabItem>
</Tabs>
