--- 
title: contents
hide_title: false
hide_table_of_contents: false
keywords:
  - contents
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

Creates, updates, deletes, gets or lists a <code>contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_readme_in_directory"
    values={[
        { label: 'get_readme_in_directory', value: 'get_readme_in_directory' },
        { label: 'get_readme', value: 'get_readme' }
    ]}
>
<TabItem value="get_readme_in_directory">

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
    <td><CopyableCode code="submodule_git_url" /></td>
    <td><code>string</code></td>
    <td> (example: "git://example.com/defunkt/dotjs.git")</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td> (example: "actual/actual.md")</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (file)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_readme">

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
    <td><CopyableCode code="submodule_git_url" /></td>
    <td><code>string</code></td>
    <td> (example: "git://example.com/defunkt/dotjs.git")</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td> (example: "actual/actual.md")</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (file)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
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
    <td><a href="#get_readme_in_directory"><CopyableCode code="get_readme_in_directory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-dir"><code>dir</code></a></td>
    <td><a href="#parameter-ref"><code>ref</code></a></td>
    <td>Gets the README from a repository directory.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw file contents. This is the default if you do not specify a media type.<br />- **`application/vnd.github.html+json`**: Returns the README in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).</td>
</tr>
<tr>
    <td><a href="#get_readme"><CopyableCode code="get_readme" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-ref"><code>ref</code></a></td>
    <td>Gets the preferred README for a repository.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw file contents. This is the default if you do not specify a media type.<br />- **`application/vnd.github.html+json`**: Returns the README in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).</td>
</tr>
<tr>
    <td><a href="#create_or_update_file_contents"><CopyableCode code="create_or_update_file_contents" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Creates a new file or replaces an existing file in a repository.<br /><br />&gt; [!NOTE]<br />&gt; If you use this endpoint and the "[Delete a file](https://docs.github.com/rest/repos/contents/#delete-a-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint. The `workflow` scope is also required in order to modify files in the `.github/workflows` directory.</td>
</tr>
<tr>
    <td><a href="#delete_file"><CopyableCode code="delete_file" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Deletes a file in a repository.<br /><br />You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.<br /><br />The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.<br /><br />You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.<br /><br />&gt; [!NOTE]<br />&gt; If you use this endpoint and the "[Create or update file contents](https://docs.github.com/rest/repos/contents/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.</td>
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
<tr id="parameter-dir">
    <td><CopyableCode code="dir" /></td>
    <td><code>string</code></td>
    <td>The alternate path to look for a README file</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>path parameter</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The name of the commit/branch/tag. Default: the repository’s default branch.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_readme_in_directory"
    values={[
        { label: 'get_readme_in_directory', value: 'get_readme_in_directory' },
        { label: 'get_readme', value: 'get_readme' }
    ]}
>
<TabItem value="get_readme_in_directory">

Gets the README from a repository directory.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw file contents. This is the default if you do not specify a media type.<br />- **`application/vnd.github.html+json`**: Returns the README in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).

```sql
SELECT
name,
_links,
content,
download_url,
encoding,
git_url,
html_url,
path,
sha,
size,
submodule_git_url,
target,
type,
url
FROM github.repos.contents
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND dir = '{{ dir }}' -- required
AND ref = '{{ ref }}'
;
```
</TabItem>
<TabItem value="get_readme">

Gets the preferred README for a repository.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw file contents. This is the default if you do not specify a media type.<br />- **`application/vnd.github.html+json`**: Returns the README in HTML. Markup languages are rendered to HTML using GitHub's open-source [Markup library](https://github.com/github/markup).

```sql
SELECT
name,
_links,
content,
download_url,
encoding,
git_url,
html_url,
path,
sha,
size,
submodule_git_url,
target,
type,
url
FROM github.repos.contents
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ref = '{{ ref }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_or_update_file_contents"
    values={[
        { label: 'create_or_update_file_contents', value: 'create_or_update_file_contents' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_or_update_file_contents">

Creates a new file or replaces an existing file in a repository.<br /><br />&gt; [!NOTE]<br />&gt; If you use this endpoint and the "[Delete a file](https://docs.github.com/rest/repos/contents/#delete-a-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint. The `workflow` scope is also required in order to modify files in the `.github/workflows` directory.

```sql
INSERT INTO github.repos.contents (
message,
content,
sha,
branch,
committer,
author,
owner,
repo,
path
)
SELECT 
'{{ message }}' /* required */,
'{{ content }}' /* required */,
'{{ sha }}',
'{{ branch }}',
'{{ committer }}',
'{{ author }}',
'{{ owner }}',
'{{ repo }}',
'{{ path }}'
RETURNING
commit,
content
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: contents
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the contents resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the contents resource.
    - name: path
      value: "{{ path }}"
      description: Required parameter for the contents resource.
    - name: message
      value: "{{ message }}"
      description: |
        The commit message.
    - name: content
      value: "{{ content }}"
      description: |
        The new file content, using Base64 encoding.
    - name: sha
      value: "{{ sha }}"
      description: |
        **Required if you are updating a file**. The blob SHA of the file being replaced.
    - name: branch
      value: "{{ branch }}"
      description: |
        The branch name. Default: the repository’s default branch.
    - name: committer
      description: |
        The person that committed the file. Default: the authenticated user.
      value:
        name: "{{ name }}"
        email: "{{ email }}"
        date: "{{ date }}"
    - name: author
      description: |
        The author of the file. Default: The \`committer\` or the authenticated user if you omit \`committer\`.
      value:
        name: "{{ name }}"
        email: "{{ email }}"
        date: "{{ date }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_file"
    values={[
        { label: 'delete_file', value: 'delete_file' }
    ]}
>
<TabItem value="delete_file">

Deletes a file in a repository.<br /><br />You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.<br /><br />The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.<br /><br />You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.<br /><br />&gt; [!NOTE]<br />&gt; If you use this endpoint and the "[Create or update file contents](https://docs.github.com/rest/repos/contents/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.

```sql
DELETE FROM github.repos.contents
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND path = '{{ path }}' --required
;
```
</TabItem>
</Tabs>
