--- 
title: notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications
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

Creates, updates, deletes, gets or lists a <code>notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.activity.notifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repo_notifications_for_authenticated_user"
    values={[
        { label: 'list_repo_notifications_for_authenticated_user', value: 'list_repo_notifications_for_authenticated_user' },
        { label: 'get_thread', value: 'get_thread' },
        { label: 'list_notifications_for_authenticated_user', value: 'list_notifications_for_authenticated_user' }
    ]}
>
<TabItem value="list_repo_notifications_for_authenticated_user">

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
    <td><CopyableCode code="last_read_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subscription_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/notifications/threads/2/subscription)</td>
</tr>
<tr>
    <td><CopyableCode code="unread" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_thread">

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
    <td><CopyableCode code="last_read_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subscription_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/notifications/threads/2/subscription)</td>
</tr>
<tr>
    <td><CopyableCode code="unread" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_notifications_for_authenticated_user">

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
    <td><CopyableCode code="last_read_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="subscription_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/notifications/threads/2/subscription)</td>
</tr>
<tr>
    <td><CopyableCode code="unread" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
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
    <td><a href="#list_repo_notifications_for_authenticated_user"><CopyableCode code="list_repo_notifications_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-all"><code>all</code></a>, <a href="#parameter-participating"><code>participating</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all notifications for the current user in the specified repository.</td>
</tr>
<tr>
    <td><a href="#get_thread"><CopyableCode code="get_thread" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thread_id"><code>thread_id</code></a></td>
    <td></td>
    <td>Gets information about a notification thread.</td>
</tr>
<tr>
    <td><a href="#list_notifications_for_authenticated_user"><CopyableCode code="list_notifications_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-all"><code>all</code></a>, <a href="#parameter-participating"><code>participating</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>List all notifications for the current user, sorted by most recently updated.</td>
</tr>
<tr>
    <td><a href="#mark_thread_as_read"><CopyableCode code="mark_thread_as_read" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thread_id"><code>thread_id</code></a></td>
    <td></td>
    <td>Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub: https://github.com/notifications.</td>
</tr>
<tr>
    <td><a href="#mark_thread_as_done"><CopyableCode code="mark_thread_as_done" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-thread_id"><code>thread_id</code></a></td>
    <td></td>
    <td>Marks a thread as "done." Marking a thread as "done" is equivalent to marking a notification in your notification inbox on GitHub as done: https://github.com/notifications.</td>
</tr>
<tr>
    <td><a href="#mark_notifications_as_read"><CopyableCode code="mark_notifications_as_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.</td>
</tr>
<tr>
    <td><a href="#mark_repo_notifications_as_read"><CopyableCode code="mark_repo_notifications_as_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Marks all notifications in a repository as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/rest/activity/notifications#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.</td>
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
<tr id="parameter-thread_id">
    <td><CopyableCode code="thread_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user)).</td>
</tr>
<tr id="parameter-all">
    <td><CopyableCode code="all" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, show notifications marked as read.</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-participating">
    <td><CopyableCode code="participating" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, only shows notifications in which the user is directly participating or mentioned.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 50). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_repo_notifications_for_authenticated_user"
    values={[
        { label: 'list_repo_notifications_for_authenticated_user', value: 'list_repo_notifications_for_authenticated_user' },
        { label: 'get_thread', value: 'get_thread' },
        { label: 'list_notifications_for_authenticated_user', value: 'list_notifications_for_authenticated_user' }
    ]}
>
<TabItem value="list_repo_notifications_for_authenticated_user">

Lists all notifications for the current user in the specified repository.

```sql
SELECT
id,
last_read_at,
reason,
repository,
subject,
subscription_url,
unread,
updated_at,
url
FROM github.activity.notifications
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND all = '{{ all }}'
AND participating = '{{ participating }}'
AND since = '{{ since }}'
AND before = '{{ before }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="get_thread">

Gets information about a notification thread.

```sql
SELECT
id,
last_read_at,
reason,
repository,
subject,
subscription_url,
unread,
updated_at,
url
FROM github.activity.notifications
WHERE thread_id = '{{ thread_id }}' -- required
;
```
</TabItem>
<TabItem value="list_notifications_for_authenticated_user">

List all notifications for the current user, sorted by most recently updated.

```sql
SELECT
id,
last_read_at,
reason,
repository,
subject,
subscription_url,
unread,
updated_at,
url
FROM github.activity.notifications
WHERE all = '{{ all }}'
AND participating = '{{ participating }}'
AND since = '{{ since }}'
AND before = '{{ before }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="mark_thread_as_read"
    values={[
        { label: 'mark_thread_as_read', value: 'mark_thread_as_read' }
    ]}
>
<TabItem value="mark_thread_as_read">

Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub: https://github.com/notifications.

```sql
UPDATE github.activity.notifications
SET 
-- No updatable properties
WHERE 
thread_id = '{{ thread_id }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="mark_thread_as_done"
    values={[
        { label: 'mark_thread_as_done', value: 'mark_thread_as_done' }
    ]}
>
<TabItem value="mark_thread_as_done">

Marks a thread as "done." Marking a thread as "done" is equivalent to marking a notification in your notification inbox on GitHub as done: https://github.com/notifications.

```sql
DELETE FROM github.activity.notifications
WHERE thread_id = '{{ thread_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="mark_notifications_as_read"
    values={[
        { label: 'mark_notifications_as_read', value: 'mark_notifications_as_read' },
        { label: 'mark_repo_notifications_as_read', value: 'mark_repo_notifications_as_read' }
    ]}
>
<TabItem value="mark_notifications_as_read">

Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

```sql
EXEC github.activity.notifications.mark_notifications_as_read 
@@json=
'{
"last_read_at": "{{ last_read_at }}", 
"read": {{ read }}
}'
;
```
</TabItem>
<TabItem value="mark_repo_notifications_as_read">

Marks all notifications in a repository as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/rest/activity/notifications#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.

```sql
EXEC github.activity.notifications.mark_repo_notifications_as_read 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required 
@@json=
'{
"last_read_at": "{{ last_read_at }}"
}'
;
```
</TabItem>
</Tabs>
