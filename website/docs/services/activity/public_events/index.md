--- 
title: public_events
hide_title: false
hide_table_of_contents: false
keywords:
  - public_events
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

Creates, updates, deletes, gets or lists a <code>public_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.activity.public_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_public_events_for_repo_network"
    values={[
        { label: 'list_public_events_for_repo_network', value: 'list_public_events_for_repo_network' },
        { label: 'list_public_org_events', value: 'list_public_org_events' },
        { label: 'list_public_events_for_user', value: 'list_public_events_for_user' },
        { label: 'list_public_events', value: 'list_public_events' }
    ]}
>
<TabItem value="list_public_events_for_repo_network">

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
<TabItem value="list_public_org_events">

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
<TabItem value="list_public_events_for_user">

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
<TabItem value="list_public_events">

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
    <td><a href="#list_public_events_for_repo_network"><CopyableCode code="list_public_events_for_repo_network" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.</td>
</tr>
<tr>
    <td><a href="#list_public_org_events"><CopyableCode code="list_public_org_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.</td>
</tr>
<tr>
    <td><a href="#list_public_events_for_user"><CopyableCode code="list_public_events_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.</td>
</tr>
<tr>
    <td><a href="#list_public_events"><CopyableCode code="list_public_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This API is not built to serve real-time use cases. Depending on the time of day, event latency can be anywhere from 30s to 6h.</td>
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
    defaultValue="list_public_events_for_repo_network"
    values={[
        { label: 'list_public_events_for_repo_network', value: 'list_public_events_for_repo_network' },
        { label: 'list_public_org_events', value: 'list_public_org_events' },
        { label: 'list_public_events_for_user', value: 'list_public_events_for_user' },
        { label: 'list_public_events', value: 'list_public_events' }
    ]}
>
<TabItem value="list_public_events_for_repo_network">

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
FROM github.activity.public_events
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_public_org_events">

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
FROM github.activity.public_events
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_public_events_for_user">

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
FROM github.activity.public_events
WHERE username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_public_events">

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
FROM github.activity.public_events
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
