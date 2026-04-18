--- 
title: org_network_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - org_network_settings
  - hosted_compute
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

Creates, updates, deletes, gets or lists an <code>org_network_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_network_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.hosted_compute.org_network_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_settings_for_org"
    values={[
        { label: 'get_network_settings_for_org', value: 'get_network_settings_for_org' }
    ]}
>
<TabItem value="get_network_settings_for_org">

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
    <td>The unique identifier of the network settings resource. (example: 220F78DACB92BBFBC5E6F22DE1CCF52309D)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network settings resource. (example: my-network-settings)</td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the network configuration that is using this settings resource. (example: 934E208B3EE0BD60CF5F752C426BFB53562)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string</code></td>
    <td>The subnet this network settings resource is configured for. (example: /subscriptions/14839728-3ad9-43ab-bd2b-fa6ad0f75e2a/resourceGroups/my-rg/providers/Microsoft.Network/virtualNetworks/my-vnet/subnets/my-subnet)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The location of the subnet this network settings resource is configured for. (example: eastus)</td>
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
    <td><a href="#get_network_settings_for_org"><CopyableCode code="get_network_settings_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-network_settings_id"><code>network_settings_id</code></a></td>
    <td></td>
    <td>Gets a hosted compute network settings resource configured for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:network_configurations` scope to use this endpoint.</td>
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
<tr id="parameter-network_settings_id">
    <td><CopyableCode code="network_settings_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the hosted compute network settings.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_network_settings_for_org"
    values={[
        { label: 'get_network_settings_for_org', value: 'get_network_settings_for_org' }
    ]}
>
<TabItem value="get_network_settings_for_org">

Gets a hosted compute network settings resource configured for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:network_configurations` scope to use this endpoint.

```sql
SELECT
id,
name,
network_configuration_id,
subnet_id,
region
FROM github.hosted_compute.org_network_settings
WHERE org = '{{ org }}' -- required
AND network_settings_id = '{{ network_settings_id }}' -- required
;
```
</TabItem>
</Tabs>
