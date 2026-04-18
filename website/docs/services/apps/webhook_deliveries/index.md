--- 
title: webhook_deliveries
hide_title: false
hide_table_of_contents: false
keywords:
  - webhook_deliveries
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

Creates, updates, deletes, gets or lists a <code>webhook_deliveries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhook_deliveries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.webhook_deliveries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_webhook_deliveries"
    values={[
        { label: 'list_webhook_deliveries', value: 'list_webhook_deliveries' }
    ]}
>
<TabItem value="list_webhook_deliveries">

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
    <td><code>integer (int64)</code></td>
    <td>Unique identifier of the webhook delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="installation_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The id of the GitHub App installation associated with this event.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The id of the repository associated with this event.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The type of activity for the event that triggered the delivery. (example: opened)</td>
</tr>
<tr>
    <td><CopyableCode code="delivered_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time when the webhook delivery occurred. (example: 2021-05-12T20:33:44Z)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>number</code></td>
    <td>Time spent delivering.</td>
</tr>
<tr>
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td>The event that triggered the delivery. (example: issues)</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event). (example: 58474f00-b361-11eb-836d-0e4f3503ccbe)</td>
</tr>
<tr>
    <td><CopyableCode code="redelivery" /></td>
    <td><code>boolean</code></td>
    <td>Whether the webhook delivery is a redelivery.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Describes the response returned after attempting the delivery. (example: failed to connect)</td>
</tr>
<tr>
    <td><CopyableCode code="status_code" /></td>
    <td><code>integer</code></td>
    <td>Status code received when delivery was made.</td>
</tr>
<tr>
    <td><CopyableCode code="throttled_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time when the webhook delivery was throttled. (example: 2021-05-12T20:33:44Z)</td>
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
    <td><a href="#list_webhook_deliveries"><CopyableCode code="list_webhook_deliveries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-cursor"><code>cursor</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Returns a list of webhook deliveries for the webhook configured for a GitHub App.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
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
<tr id="parameter-cursor">
    <td><CopyableCode code="cursor" /></td>
    <td><code>string</code></td>
    <td>Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Returns webhook deliveries filtered by delivery outcome classification based on `status_code` range. A `status` of `success` returns deliveries with a `status_code` in the 200-399 range (inclusive). A `status` of `failure` returns deliveries with a `status_code` in the 400-599 range (inclusive).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_webhook_deliveries"
    values={[
        { label: 'list_webhook_deliveries', value: 'list_webhook_deliveries' }
    ]}
>
<TabItem value="list_webhook_deliveries">

Returns a list of webhook deliveries for the webhook configured for a GitHub App.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
SELECT
id,
installation_id,
repository_id,
action,
delivered_at,
duration,
event,
guid,
redelivery,
status,
status_code,
throttled_at
FROM github.apps.webhook_deliveries
WHERE per_page = '{{ per_page }}'
AND cursor = '{{ cursor }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>
