--- 
title: oidc_custom_property_inclusions
hide_title: false
hide_table_of_contents: false
keywords:
  - oidc_custom_property_inclusions
  - oidc
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

Creates, updates, deletes, gets or lists an <code>oidc_custom_property_inclusions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oidc_custom_property_inclusions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.oidc.oidc_custom_property_inclusions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_oidc_custom_property_inclusions_for_enterprise"
    values={[
        { label: 'list_oidc_custom_property_inclusions_for_enterprise', value: 'list_oidc_custom_property_inclusions_for_enterprise' }
    ]}
>
<TabItem value="list_oidc_custom_property_inclusions_for_enterprise">

A JSON array of OIDC custom property inclusions

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
    <td><CopyableCode code="custom_property_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom property that is included in the OIDC token</td>
</tr>
<tr>
    <td><CopyableCode code="inclusion_source" /></td>
    <td><code>string</code></td>
    <td>Whether the inclusion was defined at the organization or enterprise level (organization, enterprise) (example: organization)</td>
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
    <td><a href="#list_oidc_custom_property_inclusions_for_enterprise"><CopyableCode code="list_oidc_custom_property_inclusions_for_enterprise" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td></td>
    <td>Lists the repository custom properties that are included in the OIDC token for repository actions in an enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_oidc_custom_property_inclusion_for_enterprise"><CopyableCode code="create_oidc_custom_property_inclusion_for_enterprise" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-custom_property_name"><code>custom_property_name</code></a></td>
    <td></td>
    <td>Adds a repository custom property to be included in the OIDC token for repository actions in an enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_oidc_custom_property_inclusion_for_enterprise"><CopyableCode code="delete_oidc_custom_property_inclusion_for_enterprise" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-custom_property_name"><code>custom_property_name</code></a></td>
    <td></td>
    <td>Removes a repository custom property from being included in the OIDC token for repository actions in an enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
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
<tr id="parameter-custom_property_name">
    <td><CopyableCode code="custom_property_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom property to remove from OIDC token inclusion</td>
</tr>
<tr id="parameter-enterprise">
    <td><CopyableCode code="enterprise" /></td>
    <td><code>string</code></td>
    <td>The slug version of the enterprise name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_oidc_custom_property_inclusions_for_enterprise"
    values={[
        { label: 'list_oidc_custom_property_inclusions_for_enterprise', value: 'list_oidc_custom_property_inclusions_for_enterprise' }
    ]}
>
<TabItem value="list_oidc_custom_property_inclusions_for_enterprise">

Lists the repository custom properties that are included in the OIDC token for repository actions in an enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
SELECT
custom_property_name,
inclusion_source
FROM github.oidc.oidc_custom_property_inclusions
WHERE enterprise = '{{ enterprise }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_oidc_custom_property_inclusion_for_enterprise"
    values={[
        { label: 'create_oidc_custom_property_inclusion_for_enterprise', value: 'create_oidc_custom_property_inclusion_for_enterprise' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_oidc_custom_property_inclusion_for_enterprise">

Adds a repository custom property to be included in the OIDC token for repository actions in an enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
INSERT INTO github.oidc.oidc_custom_property_inclusions (
custom_property_name,
enterprise
)
SELECT 
'{{ custom_property_name }}' /* required */,
'{{ enterprise }}'
RETURNING
custom_property_name,
inclusion_source
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: oidc_custom_property_inclusions
  props:
    - name: enterprise
      value: "{{ enterprise }}"
      description: Required parameter for the oidc_custom_property_inclusions resource.
    - name: custom_property_name
      value: "{{ custom_property_name }}"
      description: |
        The name of the custom property to include in the OIDC token
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_oidc_custom_property_inclusion_for_enterprise"
    values={[
        { label: 'delete_oidc_custom_property_inclusion_for_enterprise', value: 'delete_oidc_custom_property_inclusion_for_enterprise' }
    ]}
>
<TabItem value="delete_oidc_custom_property_inclusion_for_enterprise">

Removes a repository custom property from being included in the OIDC token for repository actions in an enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
DELETE FROM github.oidc.oidc_custom_property_inclusions
WHERE enterprise = '{{ enterprise }}' --required
AND custom_property_name = '{{ custom_property_name }}' --required
;
```
</TabItem>
</Tabs>
