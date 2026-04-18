--- 
title: assets
hide_title: false
hide_table_of_contents: false
keywords:
  - assets
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

Creates, updates, deletes, gets or lists an <code>assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_release_asset"
    values={[
        { label: 'get_release_asset', value: 'get_release_asset' },
        { label: 'list_release_assets', value: 'list_release_assets' }
    ]}
>
<TabItem value="get_release_asset">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The file name of the asset. (example: Team Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="browser_download_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="download_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the release asset. (uploaded, open)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="uploader" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_release_assets">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The file name of the asset. (example: Team Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="browser_download_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="download_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the release asset. (uploaded, open)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="uploader" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
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
    <td><a href="#get_release_asset"><CopyableCode code="get_release_asset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a></td>
    <td></td>
    <td>To download the asset's binary content:<br /><br />- If within a browser, fetch the location specified in the `browser_download_url` key provided in the response.<br />- Alternatively, set the `Accept` header of the request to <br />  [`application/octet-stream`](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types). <br />  The API will either redirect the client to the location, or stream it directly if possible.<br />  API clients should handle both a `200` or `302` response.</td>
</tr>
<tr>
    <td><a href="#list_release_assets"><CopyableCode code="list_release_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-release_id"><code>release_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#upload_release_asset"><CopyableCode code="upload_release_asset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-release_id"><code>release_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td><a href="#parameter-label"><code>label</code></a></td>
    <td>This endpoint makes use of a [Hypermedia relation](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in<br />the response of the [Create a release endpoint](https://docs.github.com/rest/releases/releases#create-a-release) to upload a release asset.<br /><br />You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.<br /><br />Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: <br /><br />`application/zip`<br /><br />GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,<br />you'll still need to pass your authentication to be able to upload an asset.<br /><br />When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.<br /><br />**Notes:**<br />*   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List release assets](https://docs.github.com/rest/releases/assets#list-release-assets)"<br />endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).<br />*   To find the `release_id` query the [`GET /repos/&#123;owner&#125;/&#123;repo&#125;/releases/latest` endpoint](https://docs.github.com/rest/releases/releases#get-the-latest-release). <br />*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.</td>
</tr>
<tr>
    <td><a href="#update_release_asset"><CopyableCode code="update_release_asset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a></td>
    <td></td>
    <td>Users with push access to the repository can edit a release asset.</td>
</tr>
<tr>
    <td><a href="#delete_release_asset"><CopyableCode code="delete_release_asset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-asset_id"><code>asset_id</code></a></td>
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
<tr id="parameter-asset_id">
    <td><CopyableCode code="asset_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the asset.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
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
<tr id="parameter-label">
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_release_asset"
    values={[
        { label: 'get_release_asset', value: 'get_release_asset' },
        { label: 'list_release_assets', value: 'list_release_assets' }
    ]}
>
<TabItem value="get_release_asset">

To download the asset's binary content:<br /><br />- If within a browser, fetch the location specified in the `browser_download_url` key provided in the response.<br />- Alternatively, set the `Accept` header of the request to <br />  [`application/octet-stream`](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types). <br />  The API will either redirect the client to the location, or stream it directly if possible.<br />  API clients should handle both a `200` or `302` response.

```sql
SELECT
id,
name,
node_id,
browser_download_url,
content_type,
created_at,
digest,
download_count,
label,
size,
state,
updated_at,
uploader,
url
FROM github.repos.assets
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND asset_id = '{{ asset_id }}' -- required
;
```
</TabItem>
<TabItem value="list_release_assets">

Response

```sql
SELECT
id,
name,
node_id,
browser_download_url,
content_type,
created_at,
digest,
download_count,
label,
size,
state,
updated_at,
uploader,
url
FROM github.repos.assets
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND release_id = '{{ release_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="upload_release_asset"
    values={[
        { label: 'upload_release_asset', value: 'upload_release_asset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="upload_release_asset">

This endpoint makes use of a [Hypermedia relation](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in<br />the response of the [Create a release endpoint](https://docs.github.com/rest/releases/releases#create-a-release) to upload a release asset.<br /><br />You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.<br /><br />Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: <br /><br />`application/zip`<br /><br />GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,<br />you'll still need to pass your authentication to be able to upload an asset.<br /><br />When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.<br /><br />**Notes:**<br />*   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List release assets](https://docs.github.com/rest/releases/assets#list-release-assets)"<br />endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).<br />*   To find the `release_id` query the [`GET /repos/&#123;owner&#125;/&#123;repo&#125;/releases/latest` endpoint](https://docs.github.com/rest/releases/releases#get-the-latest-release). <br />*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.

```sql
INSERT INTO github.repos.assets (
owner,
repo,
release_id,
name,
label
)
SELECT 
'{{ owner }}',
'{{ repo }}',
'{{ release_id }}',
'{{ name }}',
'{{ label }}'
RETURNING
id,
name,
node_id,
browser_download_url,
content_type,
created_at,
digest,
download_count,
label,
size,
state,
updated_at,
uploader,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assets
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the assets resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the assets resource.
    - name: release_id
      value: {{ release_id }}
      description: Required parameter for the assets resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the assets resource.
    - name: label
      value: "{{ label }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_release_asset"
    values={[
        { label: 'update_release_asset', value: 'update_release_asset' }
    ]}
>
<TabItem value="update_release_asset">

Users with push access to the repository can edit a release asset.

```sql
UPDATE github.repos.assets
SET 
name = '{{ name }}',
label = '{{ label }}',
state = '{{ state }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND asset_id = '{{ asset_id }}' --required
RETURNING
id,
name,
node_id,
browser_download_url,
content_type,
created_at,
digest,
download_count,
label,
size,
state,
updated_at,
uploader,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_release_asset"
    values={[
        { label: 'delete_release_asset', value: 'delete_release_asset' }
    ]}
>
<TabItem value="delete_release_asset">

No description available.

```sql
DELETE FROM github.repos.assets
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND asset_id = '{{ asset_id }}' --required
;
```
</TabItem>
</Tabs>
