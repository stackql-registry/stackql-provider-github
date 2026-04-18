--- 
title: org_details
hide_title: false
hide_table_of_contents: false
keywords:
  - org_details
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

Creates, updates, deletes, gets or lists an <code>org_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.org_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_copilot_organization_details"
    values={[
        { label: 'get_copilot_organization_details', value: 'get_copilot_organization_details' }
    ]}
>
<TabItem value="get_copilot_organization_details">

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
    <td><CopyableCode code="cli" /></td>
    <td><code>string</code></td>
    <td>The organization policy for allowing or disallowing Copilot CLI. (enabled, disabled, unconfigured)</td>
</tr>
<tr>
    <td><CopyableCode code="ide_chat" /></td>
    <td><code>string</code></td>
    <td>The organization policy for allowing or disallowing Copilot Chat in the IDE. (enabled, disabled, unconfigured)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_type" /></td>
    <td><code>string</code></td>
    <td>The Copilot plan of the organization, or the parent enterprise, when applicable. (business, enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="platform_chat" /></td>
    <td><code>string</code></td>
    <td>The organization policy for allowing or disallowing Copilot features on GitHub.com. (enabled, disabled, unconfigured)</td>
</tr>
<tr>
    <td><CopyableCode code="public_code_suggestions" /></td>
    <td><code>string</code></td>
    <td>The organization policy for allowing or blocking suggestions matching public code (duplication detection filter). (allow, block, unconfigured)</td>
</tr>
<tr>
    <td><CopyableCode code="seat_breakdown" /></td>
    <td><code>object</code></td>
    <td>The breakdown of Copilot Business seats for the organization. (title: Copilot Seat Breakdown)</td>
</tr>
<tr>
    <td><CopyableCode code="seat_management_setting" /></td>
    <td><code>string</code></td>
    <td>The mode of assigning new seats. (assign_all, assign_selected, disabled, unconfigured)</td>
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
    <td><a href="#get_copilot_organization_details"><CopyableCode code="get_copilot_organization_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets information about an organization's Copilot subscription, including seat breakdown<br />and feature policies. To configure these settings, go to your organization's settings on GitHub.com.<br />For more information, see "[Managing policies for Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-copilot-business-in-your-organization)."<br /><br />Only organization owners can view details about the organization's Copilot Business or Copilot Enterprise subscription.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_copilot_organization_details"
    values={[
        { label: 'get_copilot_organization_details', value: 'get_copilot_organization_details' }
    ]}
>
<TabItem value="get_copilot_organization_details">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets information about an organization's Copilot subscription, including seat breakdown<br />and feature policies. To configure these settings, go to your organization's settings on GitHub.com.<br />For more information, see "[Managing policies for Copilot in your organization](https://docs.github.com/copilot/managing-copilot/managing-policies-for-copilot-business-in-your-organization)."<br /><br />Only organization owners can view details about the organization's Copilot Business or Copilot Enterprise subscription.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:org` scopes to use this endpoint.

```sql
SELECT
cli,
ide_chat,
plan_type,
platform_chat,
public_code_suggestions,
seat_breakdown,
seat_management_setting
FROM github.copilot.org_details
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>
