--- 
title: org_member_copilot_seats
hide_title: false
hide_table_of_contents: false
keywords:
  - org_member_copilot_seats
  - copilot
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

Creates, updates, deletes, gets or lists an <code>org_member_copilot_seats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_member_copilot_seats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.org_member_copilot_seats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_copilot_seat_details_for_user"
    values={[
        { label: 'get_copilot_seat_details_for_user', value: 'get_copilot_seat_details_for_user' }
    ]}
>
<TabItem value="get_copilot_seat_details_for_user">

The user's GitHub Copilot seat details, including usage.

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
    <td><CopyableCode code="assignee" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="assigning_team" /></td>
    <td><code>object</code></td>
    <td>The team through which the assignee is granted access to GitHub Copilot, if applicable. (title: Team)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of when the assignee was last granted access to GitHub Copilot, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="last_activity_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of user's last GitHub Copilot activity, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="last_activity_editor" /></td>
    <td><code>string</code></td>
    <td>Last editor that was used by the user for a GitHub Copilot completion.</td>
</tr>
<tr>
    <td><CopyableCode code="last_authenticated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of the last time the user authenticated with GitHub Copilot, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>A GitHub organization. (title: Organization Simple)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_cancellation_date" /></td>
    <td><code>string (date)</code></td>
    <td>The pending cancellation date for the seat, in `YYYY-MM-DD` format. This will be null unless the assignee's Copilot access has been canceled during the current billing cycle. If the seat has been cancelled, this corresponds to the start of the organization's next billing cycle.</td>
</tr>
<tr>
    <td><CopyableCode code="plan_type" /></td>
    <td><code>string</code></td>
    <td>The Copilot plan of the organization, or the parent enterprise, when applicable. (business, enterprise, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>**Closing down notice:** This field is no longer relevant and is closing down. Use the `created_at` field to determine when the assignee was last granted access to GitHub Copilot. Timestamp of when the assignee's GitHub Copilot access was last updated, in ISO 8601 format.</td>
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
    <td><a href="#get_copilot_seat_details_for_user"><CopyableCode code="get_copilot_seat_details_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets the GitHub Copilot seat details for a member of an organization who currently has access to GitHub Copilot.<br /><br />The seat object contains information about the user's most recent Copilot activity. Users must have telemetry enabled in their IDE for Copilot in the IDE activity to be reflected in `last_activity_at`.<br />For more information about activity data, see [Metrics data properties for GitHub Copilot](https://docs.github.com/copilot/reference/metrics-data).<br /><br />Only organization owners can view Copilot seat assignment details for members of their organization.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_copilot_seat_details_for_user"
    values={[
        { label: 'get_copilot_seat_details_for_user', value: 'get_copilot_seat_details_for_user' }
    ]}
>
<TabItem value="get_copilot_seat_details_for_user">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets the GitHub Copilot seat details for a member of an organization who currently has access to GitHub Copilot.<br /><br />The seat object contains information about the user's most recent Copilot activity. Users must have telemetry enabled in their IDE for Copilot in the IDE activity to be reflected in `last_activity_at`.<br />For more information about activity data, see [Metrics data properties for GitHub Copilot](https://docs.github.com/copilot/reference/metrics-data).<br /><br />Only organization owners can view Copilot seat assignment details for members of their organization.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.

```sql
SELECT
assignee,
assigning_team,
created_at,
last_activity_at,
last_activity_editor,
last_authenticated_at,
organization,
pending_cancellation_date,
plan_type,
updated_at
FROM github.copilot.org_member_copilot_seats
WHERE org = '{{ org }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
</Tabs>
