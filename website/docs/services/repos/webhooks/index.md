--- 
title: webhooks
hide_title: false
hide_table_of_contents: false
keywords:
  - webhooks
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

Creates, updates, deletes, gets or lists a <code>webhooks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="webhooks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.webhooks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_webhook"
    values={[
        { label: 'get_webhook', value: 'get_webhook' },
        { label: 'list_webhooks', value: 'list_webhooks' }
    ]}
>
<TabItem value="get_webhook">

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
    <td>Unique identifier of the webhook.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a valid service, use 'web' for a webhook. (example: web)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether the hook is actually triggered on pushes.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Configuration object of the webhook (title: Webhook Configuration)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-09-06T17:26:27Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deliveries_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/hooks/1/deliveries)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Determines what events the hook is triggered for. Default: ['push'].</td>
</tr>
<tr>
    <td><CopyableCode code="last_response" /></td>
    <td><code>object</code></td>
    <td> (title: Hook Response)</td>
</tr>
<tr>
    <td><CopyableCode code="ping_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/hooks/1/pings)</td>
</tr>
<tr>
    <td><CopyableCode code="test_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/hooks/1/test)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-09-06T20:39:23Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/hooks/1)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_webhooks">

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
    <td>Unique identifier of the webhook.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a valid service, use 'web' for a webhook. (example: web)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Determines whether the hook is actually triggered on pushes.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>Configuration object of the webhook (title: Webhook Configuration)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-09-06T17:26:27Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deliveries_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/hooks/1/deliveries)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>Determines what events the hook is triggered for. Default: ['push'].</td>
</tr>
<tr>
    <td><CopyableCode code="last_response" /></td>
    <td><code>object</code></td>
    <td> (title: Hook Response)</td>
</tr>
<tr>
    <td><CopyableCode code="ping_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/hooks/1/pings)</td>
</tr>
<tr>
    <td><CopyableCode code="test_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/hooks/1/test)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-09-06T20:39:23Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/hooks/1)</td>
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
    <td><a href="#get_webhook"><CopyableCode code="get_webhook" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](https://docs.github.com/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository)."</td>
</tr>
<tr>
    <td><a href="#list_webhooks"><CopyableCode code="list_webhooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.</td>
</tr>
<tr>
    <td><a href="#create_webhook"><CopyableCode code="create_webhook" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can<br />share the same `config` as long as those webhooks do not have any `events` that overlap.</td>
</tr>
<tr>
    <td><a href="#update_webhook"><CopyableCode code="update_webhook" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](https://docs.github.com/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository)."</td>
</tr>
<tr>
    <td><a href="#delete_webhook"><CopyableCode code="delete_webhook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>Delete a webhook for an organization.<br /><br />The authenticated user must be a repository owner, or have admin access in the repository, to delete the webhook.</td>
</tr>
<tr>
    <td><a href="#ping_webhook"><CopyableCode code="ping_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.</td>
</tr>
<tr>
    <td><a href="#test_push_webhook"><CopyableCode code="test_push_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.<br /><br />&gt; [!NOTE]<br />&gt; Previously `/repos/:owner/:repo/hooks/:hook_id/test`</td>
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
    defaultValue="get_webhook"
    values={[
        { label: 'get_webhook', value: 'get_webhook' },
        { label: 'list_webhooks', value: 'list_webhooks' }
    ]}
>
<TabItem value="get_webhook">

Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](https://docs.github.com/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository)."

```sql
SELECT
id,
name,
active,
config,
created_at,
deliveries_url,
events,
last_response,
ping_url,
test_url,
type,
updated_at,
url
FROM github.repos.webhooks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND hook_id = '{{ hook_id }}' -- required
;
```
</TabItem>
<TabItem value="list_webhooks">

Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.

```sql
SELECT
id,
name,
active,
config,
created_at,
deliveries_url,
events,
last_response,
ping_url,
test_url,
type,
updated_at,
url
FROM github.repos.webhooks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_webhook"
    values={[
        { label: 'create_webhook', value: 'create_webhook' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_webhook">

Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can<br />share the same `config` as long as those webhooks do not have any `events` that overlap.

```sql
INSERT INTO github.repos.webhooks (
name,
config,
events,
active,
owner,
repo
)
SELECT 
'{{ name }}',
'{{ config }}',
'{{ events }}',
{{ active }},
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
name,
active,
config,
created_at,
deliveries_url,
events,
last_response,
ping_url,
test_url,
type,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: webhooks
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the webhooks resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the webhooks resource.
    - name: name
      value: "{{ name }}"
      description: |
        Use \`web\` to create a webhook. Default: \`web\`. This parameter only accepts the value \`web\`.
    - name: config
      description: |
        Key/value pairs to provide settings for this webhook.
      value:
        url: "{{ url }}"
        content_type: "{{ content_type }}"
        secret: "{{ secret }}"
        insecure_ssl: "{{ insecure_ssl }}"
    - name: events
      value:
        - "{{ events }}"
      description: |
        Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
      default: push
    - name: active
      value: {{ active }}
      description: |
        Determines if notifications are sent when the webhook is triggered. Set to \`true\` to send notifications.
      default: true
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_webhook"
    values={[
        { label: 'update_webhook', value: 'update_webhook' }
    ]}
>
<TabItem value="update_webhook">

Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](https://docs.github.com/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository)."

```sql
UPDATE github.repos.webhooks
SET 
config = '{{ config }}',
events = '{{ events }}',
add_events = '{{ add_events }}',
remove_events = '{{ remove_events }}',
active = {{ active }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND hook_id = '{{ hook_id }}' --required
RETURNING
id,
name,
active,
config,
created_at,
deliveries_url,
events,
last_response,
ping_url,
test_url,
type,
updated_at,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_webhook"
    values={[
        { label: 'delete_webhook', value: 'delete_webhook' }
    ]}
>
<TabItem value="delete_webhook">

Delete a webhook for an organization.<br /><br />The authenticated user must be a repository owner, or have admin access in the repository, to delete the webhook.

```sql
DELETE FROM github.repos.webhooks
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND hook_id = '{{ hook_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="ping_webhook"
    values={[
        { label: 'ping_webhook', value: 'ping_webhook' },
        { label: 'test_push_webhook', value: 'test_push_webhook' }
    ]}
>
<TabItem value="ping_webhook">

This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.

```sql
EXEC github.repos.webhooks.ping_webhook 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@hook_id='{{ hook_id }}' --required
;
```
</TabItem>
<TabItem value="test_push_webhook">

This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.<br /><br />&gt; [!NOTE]<br />&gt; Previously `/repos/:owner/:repo/hooks/:hook_id/test`

```sql
EXEC github.repos.webhooks.test_push_webhook 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@hook_id='{{ hook_id }}' --required
;
```
</TabItem>
</Tabs>
