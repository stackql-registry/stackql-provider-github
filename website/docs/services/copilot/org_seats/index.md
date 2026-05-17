--- 
title: org_seats
hide_title: false
hide_table_of_contents: false
keywords:
  - org_seats
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

Creates, updates, deletes, gets or lists an <code>org_seats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_seats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.org_seats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_copilot_seats"
    values={[
        { label: 'list_copilot_seats', value: 'list_copilot_seats' }
    ]}
>
<TabItem value="list_copilot_seats">

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
    <td><a href="#list_copilot_seats"><CopyableCode code="list_copilot_seats" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Lists all Copilot seats for which an organization with a Copilot Business or Copilot Enterprise subscription is currently being billed.<br />Only organization owners can view assigned seats.<br /><br />Each seat object contains information about the assigned user's most recent Copilot activity. Users must have telemetry enabled in their IDE for Copilot in the IDE activity to be reflected in `last_activity_at`.<br />For more information about activity data, see [Metrics data properties for GitHub Copilot](https://docs.github.com/copilot/reference/metrics-data).<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#cancel_copilot_seat_assignment_for_teams"><CopyableCode code="cancel_copilot_seat_assignment_for_teams" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-selected_teams"><code>selected_teams</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Sets seats for all members of each team specified to "pending cancellation".<br />This will cause the members of the specified team(s) to lose access to GitHub Copilot at the end of the current billing cycle unless they retain access through another team.<br />For more information about disabling access to Copilot, see "[Revoking access to Copilot for members of your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)."<br /><br />Only organization owners can cancel Copilot seats for their organization members.<br /><br />The response contains the total number of seats set to "pending cancellation".<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.</td>
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
    defaultValue="list_copilot_seats"
    values={[
        { label: 'list_copilot_seats', value: 'list_copilot_seats' }
    ]}
>
<TabItem value="list_copilot_seats">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Lists all Copilot seats for which an organization with a Copilot Business or Copilot Enterprise subscription is currently being billed.<br />Only organization owners can view assigned seats.<br /><br />Each seat object contains information about the assigned user's most recent Copilot activity. Users must have telemetry enabled in their IDE for Copilot in the IDE activity to be reflected in `last_activity_at`.<br />For more information about activity data, see [Metrics data properties for GitHub Copilot](https://docs.github.com/copilot/reference/metrics-data).<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.

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
FROM github.copilot.org_seats
WHERE org = '{{ org }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_copilot_seat_assignment_for_teams"
    values={[
        { label: 'cancel_copilot_seat_assignment_for_teams', value: 'cancel_copilot_seat_assignment_for_teams' }
    ]}
>
<TabItem value="cancel_copilot_seat_assignment_for_teams">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Sets seats for all members of each team specified to "pending cancellation".<br />This will cause the members of the specified team(s) to lose access to GitHub Copilot at the end of the current billing cycle unless they retain access through another team.<br />For more information about disabling access to Copilot, see "[Revoking access to Copilot for members of your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization/revoking-access-to-copilot-for-members-of-your-organization)."<br /><br />Only organization owners can cancel Copilot seats for their organization members.<br /><br />The response contains the total number of seats set to "pending cancellation".<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.

```sql
EXEC github.copilot.org_seats.cancel_copilot_seat_assignment_for_teams 
@org='{{ org }}' --required 
@@json=
'{
"selected_teams": "{{ selected_teams }}"
}'
;
```
</TabItem>
</Tabs>
