--- 
title: org_hosted_runner_custom_image_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - org_hosted_runner_custom_image_versions
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

Creates, updates, deletes, gets or lists an <code>org_hosted_runner_custom_image_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_hosted_runner_custom_image_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_hosted_runner_custom_image_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_image_version_for_org"
    values={[
        { label: 'get_custom_image_version_for_org', value: 'get_custom_image_version_for_org' },
        { label: 'list_custom_image_versions_for_org', value: 'list_custom_image_versions_for_org' }
    ]}
>
<TabItem value="get_custom_image_version_for_org">

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
    <td><CopyableCode code="created_on" /></td>
    <td><code>string</code></td>
    <td>The creation date time of the image version. (example: 2024-11-09T23:39:01Z)</td>
</tr>
<tr>
    <td><CopyableCode code="size_gb" /></td>
    <td><code>integer</code></td>
    <td>Image version size in GB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of image version. (example: Ready)</td>
</tr>
<tr>
    <td><CopyableCode code="state_details" /></td>
    <td><code>string</code></td>
    <td>The image version status details. (example: None)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of image. (example: 1.0.0)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_image_versions_for_org">

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
    <td><CopyableCode code="image_versions" /></td>
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
    <td><a href="#get_custom_image_version_for_org"><CopyableCode code="get_custom_image_version_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-image_definition_id"><code>image_definition_id</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Get an image version of a custom image for GitHub Actions Hosted Runners.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_custom_image_versions_for_org"><CopyableCode code="list_custom_image_versions_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-image_definition_id"><code>image_definition_id</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>List image versions of a custom image for an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_custom_image_version_from_org"><CopyableCode code="delete_custom_image_version_from_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-image_definition_id"><code>image_definition_id</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Delete an image version of custom image from the organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
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
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of a custom image</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_image_version_for_org"
    values={[
        { label: 'get_custom_image_version_for_org', value: 'get_custom_image_version_for_org' },
        { label: 'list_custom_image_versions_for_org', value: 'list_custom_image_versions_for_org' }
    ]}
>
<TabItem value="get_custom_image_version_for_org">

Get an image version of a custom image for GitHub Actions Hosted Runners.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
SELECT
created_on,
size_gb,
state,
state_details,
version
FROM github.actions.org_hosted_runner_custom_image_versions
WHERE org = '{{ org }}' -- required
AND image_definition_id = '{{ image_definition_id }}' -- required
AND version = '{{ version }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_image_versions_for_org">

List image versions of a custom image for an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
SELECT
image_versions,
total_count
FROM github.actions.org_hosted_runner_custom_image_versions
WHERE image_definition_id = '{{ image_definition_id }}' -- required
AND org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_image_version_from_org"
    values={[
        { label: 'delete_custom_image_version_from_org', value: 'delete_custom_image_version_from_org' }
    ]}
>
<TabItem value="delete_custom_image_version_from_org">

Delete an image version of custom image from the organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
DELETE FROM github.actions.org_hosted_runner_custom_image_versions
WHERE org = '{{ org }}' --required
AND image_definition_id = '{{ image_definition_id }}' --required
AND version = '{{ version }}' --required
;
```
</TabItem>
</Tabs>
