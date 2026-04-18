--- 
title: webhooks
hide_title: false
hide_table_of_contents: false
keywords:
  - webhooks
  - orgs
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
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.webhooks" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: web)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-09-06T17:26:27Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deliveries_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat/hooks/1/deliveries)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ping_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat/hooks/1/pings)</td>
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
    <td> (example: https://api.github.com/orgs/octocat/hooks/1)</td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: web)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-09-06T17:26:27Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deliveries_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat/hooks/1/deliveries)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ping_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat/hooks/1/pings)</td>
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
    <td> (example: https://api.github.com/orgs/octocat/hooks/1)</td>
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
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>Returns a webhook configured in an organization. To get only the webhook<br />`config` properties, see "[Get a webhook configuration for an organization](https://docs.github.com/rest/orgs/webhooks#get-a-webhook-configuration-for-an-organization).<br /><br />You must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.</td>
</tr>
<tr>
    <td><a href="#list_webhooks"><CopyableCode code="list_webhooks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List webhooks for an organization.<br /><br />The authenticated user must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.</td>
</tr>
<tr>
    <td><a href="#create_webhook"><CopyableCode code="create_webhook" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-config"><code>config</code></a></td>
    <td></td>
    <td>Create a hook that posts payloads in JSON format.<br /><br />You must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or<br />edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.</td>
</tr>
<tr>
    <td><a href="#update_webhook"><CopyableCode code="update_webhook" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>Updates a webhook configured in an organization. When you update a webhook,<br />the `secret` will be overwritten. If you previously had a `secret` set, you must<br />provide the same `secret` or set a new `secret` or the secret will be removed. If<br />you are only updating individual webhook `config` properties, use "[Update a webhook<br />configuration for an organization](https://docs.github.com/rest/orgs/webhooks#update-a-webhook-configuration-for-an-organization)".<br /><br />You must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.</td>
</tr>
<tr>
    <td><a href="#delete_webhook"><CopyableCode code="delete_webhook" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>Delete a webhook for an organization.<br /><br />The authenticated user must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.</td>
</tr>
<tr>
    <td><a href="#ping_webhook"><CopyableCode code="ping_webhook" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-hook_id"><code>hook_id</code></a></td>
    <td></td>
    <td>This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event)<br />to be sent to the hook.<br /><br />You must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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

Returns a webhook configured in an organization. To get only the webhook<br />`config` properties, see "[Get a webhook configuration for an organization](https://docs.github.com/rest/orgs/webhooks#get-a-webhook-configuration-for-an-organization).<br /><br />You must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.

```sql
SELECT
id,
name,
active,
config,
created_at,
deliveries_url,
events,
ping_url,
type,
updated_at,
url
FROM github.orgs.webhooks
WHERE org = '{{ org }}' -- required
AND hook_id = '{{ hook_id }}' -- required
;
```
</TabItem>
<TabItem value="list_webhooks">

List webhooks for an organization.<br /><br />The authenticated user must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.

```sql
SELECT
id,
name,
active,
config,
created_at,
deliveries_url,
events,
ping_url,
type,
updated_at,
url
FROM github.orgs.webhooks
WHERE org = '{{ org }}' -- required
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

Create a hook that posts payloads in JSON format.<br /><br />You must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or<br />edit webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.

```sql
INSERT INTO github.orgs.webhooks (
name,
config,
events,
active,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ config }}' /* required */,
'{{ events }}',
{{ active }},
'{{ org }}'
RETURNING
id,
name,
active,
config,
created_at,
deliveries_url,
events,
ping_url,
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
    - name: org
      value: "{{ org }}"
      description: Required parameter for the webhooks resource.
    - name: name
      value: "{{ name }}"
      description: |
        Must be passed as "web".
    - name: config
      description: |
        Key/value pairs to provide settings for this webhook.
      value:
        url: "{{ url }}"
        content_type: "{{ content_type }}"
        secret: "{{ secret }}"
        insecure_ssl: "{{ insecure_ssl }}"
        username: "{{ username }}"
        password: "{{ password }}"
    - name: events
      value:
        - "{{ events }}"
      description: |
        Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. Set to \`["*"]\` to receive all possible events.
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

Updates a webhook configured in an organization. When you update a webhook,<br />the `secret` will be overwritten. If you previously had a `secret` set, you must<br />provide the same `secret` or set a new `secret` or the secret will be removed. If<br />you are only updating individual webhook `config` properties, use "[Update a webhook<br />configuration for an organization](https://docs.github.com/rest/orgs/webhooks#update-a-webhook-configuration-for-an-organization)".<br /><br />You must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.

```sql
UPDATE github.orgs.webhooks
SET 
config = '{{ config }}',
events = '{{ events }}',
active = {{ active }},
name = '{{ name }}'
WHERE 
org = '{{ org }}' --required
AND hook_id = '{{ hook_id }}' --required
RETURNING
id,
name,
active,
config,
created_at,
deliveries_url,
events,
ping_url,
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

Delete a webhook for an organization.<br /><br />The authenticated user must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.

```sql
DELETE FROM github.orgs.webhooks
WHERE org = '{{ org }}' --required
AND hook_id = '{{ hook_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="ping_webhook"
    values={[
        { label: 'ping_webhook', value: 'ping_webhook' }
    ]}
>
<TabItem value="ping_webhook">

This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event)<br />to be sent to the hook.<br /><br />You must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need `admin:org_hook` scope. OAuth apps cannot list, view, or edit<br />webhooks that they did not create and users cannot list, view, or edit webhooks that were created by OAuth apps.

```sql
EXEC github.orgs.webhooks.ping_webhook 
@org='{{ org }}' --required, 
@hook_id='{{ hook_id }}' --required
;
```
</TabItem>
</Tabs>
