--- 
title: integration_installation_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_installation_requests
  - apps
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

Creates, updates, deletes, gets or lists an <code>integration_installation_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_installation_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.integration_installation_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_installation_requests_for_authenticated_app"
    values={[
        { label: 'list_installation_requests_for_authenticated_app', value: 'list_installation_requests_for_authenticated_app' }
    ]}
>
<TabItem value="list_installation_requests_for_authenticated_app">

List of integration installation requests

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
    <td>Unique identifier of the request installation.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDExOkludGVncmF0aW9uMQ==)</td>
</tr>
<tr>
    <td><CopyableCode code="account" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2022-07-08T16:18:44-04:00)</td>
</tr>
<tr>
    <td><CopyableCode code="requester" /></td>
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
    <td><a href="#list_installation_requests_for_authenticated_app"><CopyableCode code="list_installation_requests_for_authenticated_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all the pending installation requests for the authenticated GitHub App.</td>
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
    defaultValue="list_installation_requests_for_authenticated_app"
    values={[
        { label: 'list_installation_requests_for_authenticated_app', value: 'list_installation_requests_for_authenticated_app' }
    ]}
>
<TabItem value="list_installation_requests_for_authenticated_app">

Lists all the pending installation requests for the authenticated GitHub App.

```sql
SELECT
id,
node_id,
account,
created_at,
requester
FROM github.apps.integration_installation_requests
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
