--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - activity
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.activity.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repo_events"
    values={[
        { label: 'list_repo_events', value: 'list_repo_events' },
        { label: 'list_org_events_for_authenticated_user', value: 'list_org_events_for_authenticated_user' },
        { label: 'list_events_for_authenticated_user', value: 'list_events_for_authenticated_user' }
    ]}
>
<TabItem value="list_repo_events">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>Actor (title: Actor)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="org" /></td>
    <td><code>object</code></td>
    <td>Actor (title: Actor)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object) (title: CreateEvent)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repo" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_events_for_authenticated_user">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>Actor (title: Actor)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="org" /></td>
    <td><code>object</code></td>
    <td>Actor (title: Actor)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object) (title: CreateEvent)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repo" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_events_for_authenticated_user">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>Actor (title: Actor)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="org" /></td>
    <td><code>object</code></td>
    <td>Actor (title: Actor)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>(opaque JSON object) (title: CreateEvent)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repo" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
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
    <td><a href="#list_repo_events"><CopyableCode code="list_repo_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.</td>
</tr>
<tr>
    <td><a href="#list_org_events_for_authenticated_user"><CopyableCode code="list_org_events_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>This is the user's organization dashboard. You must be authenticated as the user to view this.<br /><br />&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.</td>
</tr>
<tr>
    <td><a href="#list_events_for_authenticated_user"><CopyableCode code="list_events_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events. _Optional_: use the fine-grained token with following permission set to view private events: "Events" user permissions (read).<br /><br />&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
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
    defaultValue="list_repo_events"
    values={[
        { label: 'list_repo_events', value: 'list_repo_events' },
        { label: 'list_org_events_for_authenticated_user', value: 'list_org_events_for_authenticated_user' },
        { label: 'list_events_for_authenticated_user', value: 'list_events_for_authenticated_user' }
    ]}
>
<TabItem value="list_repo_events">

&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.

```sql
SELECT
id,
actor,
created_at,
org,
payload,
public,
repo,
type
FROM github.activity.events
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_org_events_for_authenticated_user">

This is the user's organization dashboard. You must be authenticated as the user to view this.<br /><br />&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.

```sql
SELECT
id,
actor,
created_at,
org,
payload,
public,
repo,
type
FROM github.activity.events
WHERE username = '{{ username }}' -- required
AND org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_events_for_authenticated_user">

If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events. _Optional_: use the fine-grained token with following permission set to view private events: "Events" user permissions (read).<br /><br />&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.

```sql
SELECT
id,
actor,
created_at,
org,
payload,
public,
repo,
type
FROM github.activity.events
WHERE username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
