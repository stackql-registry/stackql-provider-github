--- 
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
  - licenses
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

Creates, updates, deletes, gets or lists a <code>licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="licenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.licenses.licenses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_for_repo"
    values={[
        { label: 'get_for_repo', value: 'get_for_repo' },
        { label: 'get', value: 'get' },
        { label: 'get_all_commonly_used', value: 'get_all_commonly_used' }
    ]}
>
<TabItem value="get_for_repo">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="download_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="encoding" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="git_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>object</code></td>
    <td>License Simple (title: License Simple)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: MIT License)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDc6TGljZW5zZW1pdA==)</td>
</tr>
<tr>
    <td><CopyableCode code="spdx_id" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td> (example: <br /><br />The MIT License (MIT)<br /><br />Copyright (c) [year] [fullname]<br /><br />Permission is hereby granted, free of charge, to any person obtaining a copy<br />of this software and associated documentation files (the "Software"), to deal<br />in the Software without restriction, including without limitation the rights<br />to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br />copies of the Software, and to permit persons to whom the Software is<br />furnished to do so, subject to the following conditions:<br /><br />The above copyright notice and this permission notice shall be included in all<br />copies or substantial portions of the Software.<br /><br />THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br />IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br />FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br />AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br />LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br />OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE<br />SOFTWARE.<br />)</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: A permissive license that is short and to the point. It lets people do anything with your code with proper attribution and without warranty.)</td>
</tr>
<tr>
    <td><CopyableCode code="featured" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://choosealicense.com/licenses/mit/)</td>
</tr>
<tr>
    <td><CopyableCode code="implementation" /></td>
    <td><code>string</code></td>
    <td> (example: Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td> (example: mit)</td>
</tr>
<tr>
    <td><CopyableCode code="limitations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/licenses/mit)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_commonly_used">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: MIT License)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDc6TGljZW5zZW1pdA==)</td>
</tr>
<tr>
    <td><CopyableCode code="spdx_id" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td> (example: mit)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/licenses/mit)</td>
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
    <td><a href="#get_for_repo"><CopyableCode code="get_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-ref"><code>ref</code></a></td>
    <td>This method returns the contents of the repository's license file, if one is detected.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw contents of the license.<br />- **`application/vnd.github.html+json`**: Returns the license contents in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-license"><code>license</code></a></td>
    <td></td>
    <td>Gets information about a specific license. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."</td>
</tr>
<tr>
    <td><a href="#get_all_commonly_used"><CopyableCode code="get_all_commonly_used" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-featured"><code>featured</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the most commonly used licenses on GitHub. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."</td>
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
<tr id="parameter-license">
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td></td>
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
<tr id="parameter-featured">
    <td><CopyableCode code="featured" /></td>
    <td><code>boolean</code></td>
    <td></td>
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
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_for_repo"
    values={[
        { label: 'get_for_repo', value: 'get_for_repo' },
        { label: 'get', value: 'get' },
        { label: 'get_all_commonly_used', value: 'get_all_commonly_used' }
    ]}
>
<TabItem value="get_for_repo">

This method returns the contents of the repository's license file, if one is detected.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw contents of the license.<br />- **`application/vnd.github.html+json`**: Returns the license contents in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).

```sql
SELECT
name,
_links,
content,
download_url,
encoding,
git_url,
html_url,
license,
path,
sha,
size,
type,
url
FROM github.licenses.licenses
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ref = '{{ ref }}'
;
```
</TabItem>
<TabItem value="get">

Gets information about a specific license. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."

```sql
SELECT
name,
node_id,
spdx_id,
body,
conditions,
description,
featured,
html_url,
implementation,
key,
limitations,
permissions,
url
FROM github.licenses.licenses
WHERE license = '{{ license }}' -- required
;
```
</TabItem>
<TabItem value="get_all_commonly_used">

Lists the most commonly used licenses on GitHub. For more information, see "[Licensing a repository ](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)."

```sql
SELECT
name,
node_id,
spdx_id,
html_url,
key,
url
FROM github.licenses.licenses
WHERE featured = '{{ featured }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
