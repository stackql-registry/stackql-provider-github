--- 
title: coding_agent_policy
hide_title: false
hide_table_of_contents: false
keywords:
  - coding_agent_policy
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

Creates, updates, deletes, gets or lists a <code>coding_agent_policy</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="coding_agent_policy" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.coding_agent_policy" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#set_enterprise_coding_agent_policy"><CopyableCode code="set_enterprise_coding_agent_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-policy_state"><code>policy_state</code></a></td>
    <td></td>
    <td>Sets the policy for Copilot cloud agent usage across an enterprise.<br /><br />Enterprise owners can configure whether Copilot cloud agent is enabled for all<br />organizations, disabled for all organizations, configured by individual organization<br />admins, or enabled for selected organizations only.<br /><br />Only enterprise owners can set the coding agent policy for their enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:enterprise` scopes to use this endpoint.</td>
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
<tr id="parameter-enterprise">
    <td><CopyableCode code="enterprise" /></td>
    <td><code>string</code></td>
    <td>The slug version of the enterprise name.</td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="set_enterprise_coding_agent_policy"
    values={[
        { label: 'set_enterprise_coding_agent_policy', value: 'set_enterprise_coding_agent_policy' }
    ]}
>
<TabItem value="set_enterprise_coding_agent_policy">

Sets the policy for Copilot cloud agent usage across an enterprise.<br /><br />Enterprise owners can configure whether Copilot cloud agent is enabled for all<br />organizations, disabled for all organizations, configured by individual organization<br />admins, or enabled for selected organizations only.<br /><br />Only enterprise owners can set the coding agent policy for their enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:enterprise` scopes to use this endpoint.

```sql
REPLACE github.copilot.coding_agent_policy
SET 
policy_state = '{{ policy_state }}'
WHERE 
enterprise = '{{ enterprise }}' --required
AND policy_state = '{{ policy_state }}' --required;
```
</TabItem>
</Tabs>
