--- 
title: webhook_delivery
hide_title: false
hide_table_of_contents: false
keywords:
  - webhook_delivery
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

Creates, updates, deletes, gets or lists a <code>webhook_delivery</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhook_delivery" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.webhook_delivery" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_webhook_delivery"
    values={[
        { label: 'get_webhook_delivery', value: 'get_webhook_delivery' }
    ]}
>
<TabItem value="get_webhook_delivery">

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
    <td>Unique identifier of the delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="installation_id" /></td>
    <td><code>integer</code></td>
    <td>The id of the GitHub App installation associated with this event.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
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
    <td>Time when the delivery was delivered. (example: 2021-05-12T20:33:44Z)</td>
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
    <td>Whether the delivery is a redelivery.</td>
</tr>
<tr>
    <td><CopyableCode code="request" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="response" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Description of the status of the attempted delivery (example: failed to connect)</td>
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
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL target of the delivery. (example: https://www.example.com)</td>
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
    <td><a href="#get_webhook_delivery"><CopyableCode code="get_webhook_delivery" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-delivery_id"><code>delivery_id</code></a></td>
    <td></td>
    <td>Returns a delivery for the webhook configured for a GitHub App.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#redeliver_webhook_delivery"><CopyableCode code="redeliver_webhook_delivery" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-delivery_id"><code>delivery_id</code></a></td>
    <td></td>
    <td>Redeliver a delivery for the webhook configured for a GitHub App.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
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
<tr id="parameter-delivery_id">
    <td><CopyableCode code="delivery_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_webhook_delivery"
    values={[
        { label: 'get_webhook_delivery', value: 'get_webhook_delivery' }
    ]}
>
<TabItem value="get_webhook_delivery">

Returns a delivery for the webhook configured for a GitHub App.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

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
request,
response,
status,
status_code,
throttled_at,
url
FROM github.apps.webhook_delivery
WHERE delivery_id = '{{ delivery_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="redeliver_webhook_delivery"
    values={[
        { label: 'redeliver_webhook_delivery', value: 'redeliver_webhook_delivery' }
    ]}
>
<TabItem value="redeliver_webhook_delivery">

Redeliver a delivery for the webhook configured for a GitHub App.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
EXEC github.apps.webhook_delivery.redeliver_webhook_delivery 
@delivery_id='{{ delivery_id }}' --required
;
```
</TabItem>
</Tabs>
