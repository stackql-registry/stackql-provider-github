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
    <td><CopyableCode code="seats" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_seats" /></td>
    <td><code>integer</code></td>
    <td>Total number of Copilot seats for the organization currently being billed.</td>
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
    <td><a href="#add_copilot_for_business_seats_for_teams"><CopyableCode code="add_copilot_for_business_seats_for_teams" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-selected_teams"><code>selected_teams</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Purchases a GitHub Copilot seat for all users within each specified team.<br />The organization will be billed for each seat based on the organization's Copilot plan. For more information about Copilot pricing, see "[About billing for GitHub Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization)."<br /><br />Only organization owners can purchase Copilot seats for their organization members. The organization must have a Copilot Business or Copilot Enterprise subscription and a configured suggestion matching policy.<br />For more information about setting up a Copilot subscription, see "[Subscribing to Copilot for your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/subscribing-to-copilot-for-your-organization)."<br />For more information about setting a suggestion matching policy, see "[Managing policies for Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching)."<br /><br />The response contains the total number of new seats that were created and existing seats that were refreshed.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.</td>
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
seats,
total_seats
FROM github.copilot.org_seats
WHERE org = '{{ org }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_copilot_for_business_seats_for_teams"
    values={[
        { label: 'add_copilot_for_business_seats_for_teams', value: 'add_copilot_for_business_seats_for_teams' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_copilot_for_business_seats_for_teams">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Purchases a GitHub Copilot seat for all users within each specified team.<br />The organization will be billed for each seat based on the organization's Copilot plan. For more information about Copilot pricing, see "[About billing for GitHub Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/about-billing-for-github-copilot-in-your-organization)."<br /><br />Only organization owners can purchase Copilot seats for their organization members. The organization must have a Copilot Business or Copilot Enterprise subscription and a configured suggestion matching policy.<br />For more information about setting up a Copilot subscription, see "[Subscribing to Copilot for your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-the-copilot-subscription-for-your-organization/subscribing-to-copilot-for-your-organization)."<br />For more information about setting a suggestion matching policy, see "[Managing policies for Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization#policies-for-suggestion-matching)."<br /><br />The response contains the total number of new seats that were created and existing seats that were refreshed.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:org` scopes to use this endpoint.

```sql
INSERT INTO github.copilot.org_seats (
selected_teams,
org
)
SELECT 
'{{ selected_teams }}' /* required */,
'{{ org }}'
RETURNING
seats_created
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: org_seats
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the org_seats resource.
    - name: selected_teams
      value:
        - "{{ selected_teams }}"
      description: |
        List of team names within the organization to which to grant access to GitHub Copilot.
`}</CodeBlock>

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
