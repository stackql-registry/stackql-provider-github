--- 
title: codeql_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - codeql_databases
  - code_scanning
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

Creates, updates, deletes, gets or lists a <code>codeql_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="codeql_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.codeql_databases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_codeql_database"
    values={[
        { label: 'get_codeql_database', value: 'get_codeql_database' },
        { label: 'list_codeql_databases', value: 'list_codeql_databases' }
    ]}
>
<TabItem value="get_codeql_database">

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
    <td>The ID of the CodeQL database.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the CodeQL database.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_oid" /></td>
    <td><code>string</code></td>
    <td>The commit SHA of the repository at the time the CodeQL database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the CodeQL database file.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the CodeQL database.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the CodeQL database file in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="uploader" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL at which to download the CodeQL database. The `Accept` header must be set to the value of the `content_type` property.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_codeql_databases">

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
    <td>The ID of the CodeQL database.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the CodeQL database.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_oid" /></td>
    <td><code>string</code></td>
    <td>The commit SHA of the repository at the time the CodeQL database was created.</td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the CodeQL database file.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the CodeQL database.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the CodeQL database file in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="uploader" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL at which to download the CodeQL database. The `Accept` header must be set to the value of the `content_type` property.</td>
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
    <td><a href="#get_codeql_database"><CopyableCode code="get_codeql_database" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-language"><code>language</code></a></td>
    <td></td>
    <td>Gets a CodeQL database for a language in a repository.<br /><br />By default this endpoint returns JSON metadata about the CodeQL database. To<br />download the CodeQL database binary content, set the `Accept` header of the request<br />to [`application/zip`](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types), and make sure<br />your HTTP client is configured to follow redirects or use the `Location` header<br />to make a second request to get the redirect URL.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#list_codeql_databases"><CopyableCode code="list_codeql_databases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Lists the CodeQL databases that are available in a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#delete_codeql_database"><CopyableCode code="delete_codeql_database" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-language"><code>language</code></a></td>
    <td></td>
    <td>Deletes a CodeQL database for a language in a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the CodeQL database.</td>
</tr>
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
    defaultValue="get_codeql_database"
    values={[
        { label: 'get_codeql_database', value: 'get_codeql_database' },
        { label: 'list_codeql_databases', value: 'list_codeql_databases' }
    ]}
>
<TabItem value="get_codeql_database">

Gets a CodeQL database for a language in a repository.<br /><br />By default this endpoint returns JSON metadata about the CodeQL database. To<br />download the CodeQL database binary content, set the `Accept` header of the request<br />to [`application/zip`](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types), and make sure<br />your HTTP client is configured to follow redirects or use the `Location` header<br />to make a second request to get the redirect URL.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
id,
name,
commit_oid,
content_type,
created_at,
language,
size,
updated_at,
uploader,
url
FROM github.code_scanning.codeql_databases
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND language = '{{ language }}' -- required
;
```
</TabItem>
<TabItem value="list_codeql_databases">

Lists the CodeQL databases that are available in a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
id,
name,
commit_oid,
content_type,
created_at,
language,
size,
updated_at,
uploader,
url
FROM github.code_scanning.codeql_databases
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_codeql_database"
    values={[
        { label: 'delete_codeql_database', value: 'delete_codeql_database' }
    ]}
>
<TabItem value="delete_codeql_database">

Deletes a CodeQL database for a language in a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
DELETE FROM github.code_scanning.codeql_databases
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND language = '{{ language }}' --required
;
```
</TabItem>
</Tabs>
