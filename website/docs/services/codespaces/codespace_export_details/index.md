--- 
title: codespace_export_details
hide_title: false
hide_table_of_contents: false
keywords:
  - codespace_export_details
  - codespaces
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

Creates, updates, deletes, gets or lists a <code>codespace_export_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="codespace_export_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codespaces.codespace_export_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_export_details_for_authenticated_user"
    values={[
        { label: 'get_export_details_for_authenticated_user', value: 'get_export_details_for_authenticated_user' }
    ]}
>
<TabItem value="get_export_details_for_authenticated_user">

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
    <td>Id for the export details (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>Name of the exported branch (example: codespace-monalisa-octocat-hello-world-g4wpq6h95q)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completion time of the last export operation (example: 2021-01-01T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="export_url" /></td>
    <td><code>string</code></td>
    <td>Url for fetching export details (example: https://api.github.com/user/codespaces/:name/exports/latest)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td>Web url for the exported branch (example: https://github.com/octocat/hello-world/tree/:branch)</td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td>Git commit SHA of the exported branch (example: fd95a81ca01e48ede9f39c799ecbcef817b8a3b2)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the latest export (example: succeeded | failed | in_progress)</td>
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
    <td><a href="#get_export_details_for_authenticated_user"><CopyableCode code="get_export_details_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a>, <a href="#parameter-export_id"><code>export_id</code></a></td>
    <td></td>
    <td>Gets information about an export of a codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
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
<tr id="parameter-codespace_name">
    <td><CopyableCode code="codespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the codespace.</td>
</tr>
<tr id="parameter-export_id">
    <td><CopyableCode code="export_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the export operation, or `latest`. Currently only `latest` is currently supported.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_export_details_for_authenticated_user"
    values={[
        { label: 'get_export_details_for_authenticated_user', value: 'get_export_details_for_authenticated_user' }
    ]}
>
<TabItem value="get_export_details_for_authenticated_user">

Gets information about an export of a codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
SELECT
id,
branch,
completed_at,
export_url,
html_url,
sha,
state
FROM github.codespaces.codespace_export_details
WHERE codespace_name = '{{ codespace_name }}' -- required
AND export_id = '{{ export_id }}' -- required
;
```
</TabItem>
</Tabs>
