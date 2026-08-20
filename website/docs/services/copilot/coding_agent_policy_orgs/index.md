--- 
title: coding_agent_policy_orgs
hide_title: false
hide_table_of_contents: false
keywords:
  - coding_agent_policy_orgs
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

Creates, updates, deletes, gets or lists a <code>coding_agent_policy_orgs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="coding_agent_policy_orgs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.coding_agent_policy_orgs" /></td></tr>
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
    <td><a href="#add_organizations_to_enterprise_coding_agent_policy"><CopyableCode code="add_organizations_to_enterprise_coding_agent_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td></td>
    <td>Enables Copilot cloud agent for the specified organizations within the enterprise.<br /><br />The enterprise's coding agent policy must be set to `enabled_for_selected_orgs` before<br />using this endpoint. Organizations can be specified by login or matched via custom properties.<br /><br />Only organizations that have Copilot enabled and belong to the enterprise will be affected.<br /><br />Only enterprise owners can add organizations to the coding agent policy.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:enterprise` scopes to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#remove_organizations_from_enterprise_coding_agent_policy"><CopyableCode code="remove_organizations_from_enterprise_coding_agent_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td></td>
    <td>Disables Copilot cloud agent for the specified organizations within the enterprise.<br /><br />The enterprise's coding agent policy must be set to `enabled_for_selected_orgs` before<br />using this endpoint. Organizations can be specified by login or matched via custom properties.<br /><br />Only organizations that have Copilot enabled and belong to the enterprise will be affected.<br /><br />Only enterprise owners can remove organizations from the coding agent policy.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:enterprise` scopes to use this endpoint.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="add_organizations_to_enterprise_coding_agent_policy"
    values={[
        { label: 'add_organizations_to_enterprise_coding_agent_policy', value: 'add_organizations_to_enterprise_coding_agent_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_organizations_to_enterprise_coding_agent_policy">

Enables Copilot cloud agent for the specified organizations within the enterprise.<br /><br />The enterprise's coding agent policy must be set to `enabled_for_selected_orgs` before<br />using this endpoint. Organizations can be specified by login or matched via custom properties.<br /><br />Only organizations that have Copilot enabled and belong to the enterprise will be affected.<br /><br />Only enterprise owners can add organizations to the coding agent policy.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:enterprise` scopes to use this endpoint.

```sql
INSERT INTO github.copilot.coding_agent_policy_orgs (
organizations,
custom_properties,
enterprise
)
SELECT 
'{{ organizations }}',
'{{ custom_properties }}',
'{{ enterprise }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: coding_agent_policy_orgs
  props:
    - name: enterprise
      value: "{{ enterprise }}"
      description: Required parameter for the coding_agent_policy_orgs resource.
    - name: organizations
      value:
        - "{{ organizations }}"
      description: |
        List of organization logins within the enterprise to enable Copilot cloud agent for.
    - name: custom_properties
      description: |
        List of custom property filters to match organizations. Organizations matching any of the specified property name/value pairs will be included. This is a one-time operation, setting the property on an organization in the future will not automatically update its coding agent policy.
      value:
        - property_name: "{{ property_name }}"
          values: "{{ values }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_organizations_from_enterprise_coding_agent_policy"
    values={[
        { label: 'remove_organizations_from_enterprise_coding_agent_policy', value: 'remove_organizations_from_enterprise_coding_agent_policy' }
    ]}
>
<TabItem value="remove_organizations_from_enterprise_coding_agent_policy">

Disables Copilot cloud agent for the specified organizations within the enterprise.<br /><br />The enterprise's coding agent policy must be set to `enabled_for_selected_orgs` before<br />using this endpoint. Organizations can be specified by login or matched via custom properties.<br /><br />Only organizations that have Copilot enabled and belong to the enterprise will be affected.<br /><br />Only enterprise owners can remove organizations from the coding agent policy.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `admin:enterprise` scopes to use this endpoint.

```sql
DELETE FROM github.copilot.coding_agent_policy_orgs
WHERE enterprise = '{{ enterprise }}' --required
;
```
</TabItem>
</Tabs>
