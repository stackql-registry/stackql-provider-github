--- 
title: blobs
hide_title: false
hide_table_of_contents: false
keywords:
  - blobs
  - git
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

Creates, updates, deletes, gets or lists a <code>blobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.git.blobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_blob"
    values={[
        { label: 'get_blob', value: 'get_blob' }
    ]}
>
<TabItem value="get_blob">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="encoding" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="highlighted_content" /></td>
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
    <td><a href="#get_blob"><CopyableCode code="get_blob" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-file_sha"><code>file_sha</code></a></td>
    <td></td>
    <td>The `content` in the response will always be Base64 encoded.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw blob data.<br />- **`application/vnd.github+json`**: Returns a JSON representation of the blob with `content` as a base64 encoded string. This is the default if no media type is specified.<br /><br />**Note** This endpoint supports blobs up to 100 megabytes in size.</td>
</tr>
<tr>
    <td><a href="#create_blob"><CopyableCode code="create_blob" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-content"><code>content</code></a></td>
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
<tr id="parameter-file_sha">
    <td><CopyableCode code="file_sha" /></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_blob"
    values={[
        { label: 'get_blob', value: 'get_blob' }
    ]}
>
<TabItem value="get_blob">

The `content` in the response will always be Base64 encoded.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw blob data.<br />- **`application/vnd.github+json`**: Returns a JSON representation of the blob with `content` as a base64 encoded string. This is the default if no media type is specified.<br /><br />**Note** This endpoint supports blobs up to 100 megabytes in size.

```sql
SELECT
node_id,
content,
encoding,
highlighted_content,
sha,
size,
url
FROM github.git.blobs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND file_sha = '{{ file_sha }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_blob"
    values={[
        { label: 'create_blob', value: 'create_blob' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_blob">

No description available.

```sql
INSERT INTO github.git.blobs (
content,
encoding,
owner,
repo
)
SELECT 
'{{ content }}' /* required */,
'{{ encoding }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
sha,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: blobs
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the blobs resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the blobs resource.
    - name: content
      value: "{{ content }}"
      description: |
        The new blob's content.
    - name: encoding
      value: "{{ encoding }}"
      description: |
        The encoding used for \`content\`. Currently, \`"utf-8"\` and \`"base64"\` are supported.
      default: utf-8
`}</CodeBlock>

</TabItem>
</Tabs>
