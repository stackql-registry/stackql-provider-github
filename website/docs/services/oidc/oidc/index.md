--- 
title: oidc
hide_title: false
hide_table_of_contents: false
keywords:
  - oidc
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

Creates, updates, deletes, gets or lists an <code>oidc</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oidc" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.oidc.oidc" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_oidc_custom_sub_template_for_org"
    values={[
        { label: 'get_oidc_custom_sub_template_for_org', value: 'get_oidc_custom_sub_template_for_org' }
    ]}
>
<TabItem value="get_oidc_custom_sub_template_for_org">

A JSON serialized template for OIDC subject claim customization

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
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
    <td><a href="#get_oidc_custom_sub_template_for_org"><CopyableCode code="get_oidc_custom_sub_template_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets the customization template for an OpenID Connect (OIDC) subject claim.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_oidc_custom_sub_template_for_org"><CopyableCode code="update_oidc_custom_sub_template_for_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Creates or updates the customization template for an OpenID Connect (OIDC) subject claim.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
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
    defaultValue="get_oidc_custom_sub_template_for_org"
    values={[
        { label: 'get_oidc_custom_sub_template_for_org', value: 'get_oidc_custom_sub_template_for_org' }
    ]}
>
<TabItem value="get_oidc_custom_sub_template_for_org">

Gets the customization template for an OpenID Connect (OIDC) subject claim.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

```sql
SELECT
*
FROM github.oidc.oidc
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_oidc_custom_sub_template_for_org"
    values={[
        { label: 'update_oidc_custom_sub_template_for_org', value: 'update_oidc_custom_sub_template_for_org' }
    ]}
>
<TabItem value="update_oidc_custom_sub_template_for_org">

Creates or updates the customization template for an OpenID Connect (OIDC) subject claim.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
REPLACE github.oidc.oidc
SET 
include_claim_keys = '{{ include_claim_keys }}'
WHERE 
org = '{{ org }}' --required;
```
</TabItem>
</Tabs>
