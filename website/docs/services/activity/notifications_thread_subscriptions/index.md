--- 
title: notifications_thread_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications_thread_subscriptions
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

Creates, updates, deletes, gets or lists a <code>notifications_thread_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notifications_thread_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.activity.notifications_thread_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_thread_subscription_for_authenticated_user"
    values={[
        { label: 'get_thread_subscription_for_authenticated_user', value: 'get_thread_subscription_for_authenticated_user' }
    ]}
>
<TabItem value="get_thread_subscription_for_authenticated_user">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-10-06T21:34:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="ignored" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/1)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribed" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="thread_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/notifications/threads/1)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/notifications/threads/1/subscription)</td>
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
    <td><a href="#get_thread_subscription_for_authenticated_user"><CopyableCode code="get_thread_subscription_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thread_id"><code>thread_id</code></a></td>
    <td></td>
    <td>This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/rest/activity/watching#get-a-repository-subscription).<br /><br />Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.</td>
</tr>
<tr>
    <td><a href="#set_thread_subscription"><CopyableCode code="set_thread_subscription" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-thread_id"><code>thread_id</code></a></td>
    <td></td>
    <td>If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.<br /><br />You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.<br /><br />Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/rest/activity/notifications#delete-a-thread-subscription) endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_thread_subscription"><CopyableCode code="delete_thread_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-thread_id"><code>thread_id</code></a></td>
    <td></td>
    <td>Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/rest/activity/notifications#set-a-thread-subscription) endpoint and set `ignore` to `true`.</td>
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
<tr id="parameter-thread_id">
    <td><CopyableCode code="thread_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the notification thread. This corresponds to the value returned in the `id` field when you retrieve notifications (for example with the [`GET /notifications` operation](https://docs.github.com/rest/activity/notifications#list-notifications-for-the-authenticated-user)).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_thread_subscription_for_authenticated_user"
    values={[
        { label: 'get_thread_subscription_for_authenticated_user', value: 'get_thread_subscription_for_authenticated_user' }
    ]}
>
<TabItem value="get_thread_subscription_for_authenticated_user">

This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/rest/activity/watching#get-a-repository-subscription).<br /><br />Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.

```sql
SELECT
created_at,
ignored,
reason,
repository_url,
subscribed,
thread_url,
url
FROM github.activity.notifications_thread_subscriptions
WHERE thread_id = '{{ thread_id }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_thread_subscription"
    values={[
        { label: 'set_thread_subscription', value: 'set_thread_subscription' }
    ]}
>
<TabItem value="set_thread_subscription">

If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.<br /><br />You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.<br /><br />Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/rest/activity/notifications#delete-a-thread-subscription) endpoint.

```sql
REPLACE github.activity.notifications_thread_subscriptions
SET 
ignored = {{ ignored }}
WHERE 
thread_id = '{{ thread_id }}' --required
RETURNING
created_at,
ignored,
reason,
repository_url,
subscribed,
thread_url,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_thread_subscription"
    values={[
        { label: 'delete_thread_subscription', value: 'delete_thread_subscription' }
    ]}
>
<TabItem value="delete_thread_subscription">

Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/rest/activity/notifications#set-a-thread-subscription) endpoint and set `ignore` to `true`.

```sql
DELETE FROM github.activity.notifications_thread_subscriptions
WHERE thread_id = '{{ thread_id }}' --required
;
```
</TabItem>
</Tabs>
