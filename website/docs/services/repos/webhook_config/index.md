--- 
title: webhook_config
hide_title: false
hide_table_of_contents: false
keywords:
  - webhook_config
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

Creates, updates, deletes, gets or lists a <code>webhook_config</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhook_config" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.webhook_config" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_webhook_config_for_repo"
    values={[
        { label: 'get_webhook_config_for_repo', value: 'get_webhook_config_for_repo' }
    ]}
>
<TabItem value="get_webhook_config_for_repo">

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
    <td><a href="#get_webhook_config_for_repo"><CopyableCode code="get_webhook_config_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](https://docs.github.com/rest/webhooks/repos#get-a-repository-webhook)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:repo_hook` or `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_webhook_config_for_repo"><CopyableCode code="update_webhook_config_for_repo" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](https://docs.github.com/rest/webhooks/repos#update-a-repository-webhook)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:repo_hook` or `repo` scope to use this endpoint.</td>
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
<tr id="parameter-hook_id">
    <td><CopyableCode code="hook_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery.</td>
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
    defaultValue="get_webhook_config_for_repo"
    values={[
        { label: 'get_webhook_config_for_repo', value: 'get_webhook_config_for_repo' }
    ]}
>
<TabItem value="get_webhook_config_for_repo">

Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](https://docs.github.com/rest/webhooks/repos#get-a-repository-webhook)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:repo_hook` or `repo` scope to use this endpoint.

```sql
SELECT
content_type,
insecure_ssl,
secret,
url
FROM github.repos.webhook_config
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND hook_id = '{{ hook_id }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_webhook_config_for_repo"
    values={[
        { label: 'update_webhook_config_for_repo', value: 'update_webhook_config_for_repo' }
    ]}
>
<TabItem value="update_webhook_config_for_repo">

Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](https://docs.github.com/rest/webhooks/repos#update-a-repository-webhook)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:repo_hook` or `repo` scope to use this endpoint.

```sql
UPDATE github.repos.webhook_config
SET 
url = '{{ url }}',
content_type = '{{ content_type }}',
secret = '{{ secret }}',
insecure_ssl = '{{ insecure_ssl }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND hook_id = '{{ hook_id }}' --required
RETURNING
content_type,
insecure_ssl,
secret,
url;
```
</TabItem>
</Tabs>
