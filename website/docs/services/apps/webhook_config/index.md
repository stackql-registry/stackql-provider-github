--- 
title: webhook_config
hide_title: false
hide_table_of_contents: false
keywords:
  - webhook_config
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

Creates, updates, deletes, gets or lists a <code>webhook_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhook_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.webhook_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_webhook_config_for_app"
    values={[
        { label: 'get_webhook_config_for_app', value: 'get_webhook_config_for_app' }
    ]}
>
<TabItem value="get_webhook_config_for_app">

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
    <td><CopyableCode code="content_type" /></td>
    <td><code>string</code></td>
    <td>The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`. (example: "json")</td>
</tr>
<tr>
    <td><CopyableCode code="insecure_ssl" /></td>
    <td><code>string</code></td>
    <td>Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.** (example: "0")</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>string</code></td>
    <td>If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers). (example: "********")</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL to which the payloads will be delivered. (example: https://example.com/webhook)</td>
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
    <td><a href="#get_webhook_config_for_app"><CopyableCode code="get_webhook_config_for_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](https://docs.github.com/developers/apps/creating-a-github-app)."<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_webhook_config_for_app"><CopyableCode code="update_webhook_config_for_app" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](https://docs.github.com/developers/apps/creating-a-github-app)."<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_webhook_config_for_app"
    values={[
        { label: 'get_webhook_config_for_app', value: 'get_webhook_config_for_app' }
    ]}
>
<TabItem value="get_webhook_config_for_app">

Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](https://docs.github.com/developers/apps/creating-a-github-app)."<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
SELECT
content_type,
insecure_ssl,
secret,
url
FROM github.apps.webhook_config
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_webhook_config_for_app"
    values={[
        { label: 'update_webhook_config_for_app', value: 'update_webhook_config_for_app' }
    ]}
>
<TabItem value="update_webhook_config_for_app">

Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](https://docs.github.com/developers/apps/creating-a-github-app)."<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
UPDATE github.apps.webhook_config
SET 
url = '{{ url }}',
content_type = '{{ content_type }}',
secret = '{{ secret }}',
insecure_ssl = '{{ insecure_ssl }}'
RETURNING
content_type,
insecure_ssl,
secret,
url;
```
</TabItem>
</Tabs>
