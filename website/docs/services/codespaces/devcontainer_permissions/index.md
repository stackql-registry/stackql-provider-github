--- 
title: devcontainer_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - devcontainer_permissions
  - codespaces
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

Creates, updates, deletes, gets or lists a <code>devcontainer_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devcontainer_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codespaces.devcontainer_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="check_permissions_for_devcontainer"
    values={[
        { label: 'check_permissions_for_devcontainer', value: 'check_permissions_for_devcontainer' }
    ]}
>
<TabItem value="check_permissions_for_devcontainer">

Response when the permission check is successful

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
    <td><CopyableCode code="accepted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has accepted the permissions defined by the devcontainer config</td>
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
    <td><a href="#check_permissions_for_devcontainer"><CopyableCode code="check_permissions_for_devcontainer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-devcontainer_path"><code>devcontainer_path</code></a></td>
    <td></td>
    <td>Checks whether the permissions defined by a given devcontainer configuration have been accepted by the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
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
<tr id="parameter-devcontainer_path">
    <td><CopyableCode code="devcontainer_path" /></td>
    <td><code>string</code></td>
    <td>Path to the devcontainer.json configuration to use for the permission check.</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The git reference that points to the location of the devcontainer configuration to use for the permission check. The value of `ref` will typically be a branch name (`heads/BRANCH_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.</td>
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
    defaultValue="check_permissions_for_devcontainer"
    values={[
        { label: 'check_permissions_for_devcontainer', value: 'check_permissions_for_devcontainer' }
    ]}
>
<TabItem value="check_permissions_for_devcontainer">

Checks whether the permissions defined by a given devcontainer configuration have been accepted by the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
SELECT
accepted
FROM github.codespaces.devcontainer_permissions
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ref = '{{ ref }}' -- required
AND devcontainer_path = '{{ devcontainer_path }}' -- required
;
```
</TabItem>
</Tabs>
