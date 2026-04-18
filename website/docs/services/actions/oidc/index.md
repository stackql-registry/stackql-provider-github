--- 
title: oidc
hide_title: false
hide_table_of_contents: false
keywords:
  - oidc
  - actions
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
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.oidc" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_oidc_sub_claim_for_repo"
    values={[
        { label: 'get_custom_oidc_sub_claim_for_repo', value: 'get_custom_oidc_sub_claim_for_repo' }
    ]}
>
<TabItem value="get_custom_oidc_sub_claim_for_repo">

Status response

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
    <td><CopyableCode code="include_claim_keys" /></td>
    <td><code>array</code></td>
    <td>Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.</td>
</tr>
<tr>
    <td><CopyableCode code="use_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored.</td>
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
    <td><a href="#get_custom_oidc_sub_claim_for_repo"><CopyableCode code="get_custom_oidc_sub_claim_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets the customization template for an OpenID Connect (OIDC) subject claim.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_custom_oidc_sub_claim_for_repo"><CopyableCode code="set_custom_oidc_sub_claim_for_repo" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-use_default"><code>use_default</code></a></td>
    <td></td>
    <td>Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_custom_oidc_sub_claim_for_repo"
    values={[
        { label: 'get_custom_oidc_sub_claim_for_repo', value: 'get_custom_oidc_sub_claim_for_repo' }
    ]}
>
<TabItem value="get_custom_oidc_sub_claim_for_repo">

Gets the customization template for an OpenID Connect (OIDC) subject claim.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
include_claim_keys,
use_default
FROM github.actions.oidc
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_custom_oidc_sub_claim_for_repo"
    values={[
        { label: 'set_custom_oidc_sub_claim_for_repo', value: 'set_custom_oidc_sub_claim_for_repo' }
    ]}
>
<TabItem value="set_custom_oidc_sub_claim_for_repo">

Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.oidc
SET 
use_default = {{ use_default }},
include_claim_keys = '{{ include_claim_keys }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND use_default = {{ use_default }} --required;
```
</TabItem>
</Tabs>
