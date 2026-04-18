--- 
title: org_hosted_runner_custom_images
hide_title: false
hide_table_of_contents: false
keywords:
  - org_hosted_runner_custom_images
  - actions
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

Creates, updates, deletes, gets or lists an <code>org_hosted_runner_custom_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_hosted_runner_custom_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_hosted_runner_custom_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_image_for_org"
    values={[
        { label: 'get_custom_image_for_org', value: 'get_custom_image_for_org' },
        { label: 'list_custom_images_for_org', value: 'list_custom_images_for_org' }
    ]}
>
<TabItem value="get_custom_image_for_org">

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
    <td>The ID of the image. Use this ID for the `image` parameter when creating a new larger runner.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Display name for this image. (example: CustomImage)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_version" /></td>
    <td><code>string</code></td>
    <td>The latest image version associated with the image. (example: 1.3.0)</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The operating system of the image. (example: linux-x64)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The image provider. (example: custom)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The number of image versions associated with the image. (example: Ready)</td>
</tr>
<tr>
    <td><CopyableCode code="total_versions_size" /></td>
    <td><code>integer</code></td>
    <td>Total size of all the image versions in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="versions_count" /></td>
    <td><code>integer</code></td>
    <td>The number of image versions associated with the image.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_images_for_org">

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
    <td><CopyableCode code="images" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
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
    <td><a href="#get_custom_image_for_org"><CopyableCode code="get_custom_image_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-image_definition_id"><code>image_definition_id</code></a></td>
    <td></td>
    <td>Get a custom image definition for GitHub Actions Hosted Runners.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_custom_images_for_org"><CopyableCode code="list_custom_images_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>List custom images for an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_custom_image_from_org"><CopyableCode code="delete_custom_image_from_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-image_definition_id"><code>image_definition_id</code></a></td>
    <td></td>
    <td>Delete a custom image from the organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
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
<tr id="parameter-image_definition_id">
    <td><CopyableCode code="image_definition_id" /></td>
    <td><code>integer</code></td>
    <td>Image definition ID of custom image</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_image_for_org"
    values={[
        { label: 'get_custom_image_for_org', value: 'get_custom_image_for_org' },
        { label: 'list_custom_images_for_org', value: 'list_custom_images_for_org' }
    ]}
>
<TabItem value="get_custom_image_for_org">

Get a custom image definition for GitHub Actions Hosted Runners.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
SELECT
id,
name,
latest_version,
platform,
source,
state,
total_versions_size,
versions_count
FROM github.actions.org_hosted_runner_custom_images
WHERE org = '{{ org }}' -- required
AND image_definition_id = '{{ image_definition_id }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_images_for_org">

List custom images for an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
SELECT
images,
total_count
FROM github.actions.org_hosted_runner_custom_images
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_image_from_org"
    values={[
        { label: 'delete_custom_image_from_org', value: 'delete_custom_image_from_org' }
    ]}
>
<TabItem value="delete_custom_image_from_org">

Delete a custom image from the organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
DELETE FROM github.actions.org_hosted_runner_custom_images
WHERE org = '{{ org }}' --required
AND image_definition_id = '{{ image_definition_id }}' --required
;
```
</TabItem>
</Tabs>
