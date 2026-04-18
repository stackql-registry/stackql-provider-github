--- 
title: repo_immutable_releases
hide_title: false
hide_table_of_contents: false
keywords:
  - repo_immutable_releases
  - repos
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

Creates, updates, deletes, gets or lists a <code>repo_immutable_releases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repo_immutable_releases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.repo_immutable_releases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="check_immutable_releases"
    values={[
        { label: 'check_immutable_releases', value: 'check_immutable_releases' }
    ]}
>
<TabItem value="check_immutable_releases">

Response if immutable releases are enabled

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether immutable releases are enabled for the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="enforced_by_owner" /></td>
    <td><code>boolean</code></td>
    <td>Whether immutable releases are enforced by the repository owner.</td>
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
    <td><a href="#check_immutable_releases"><CopyableCode code="check_immutable_releases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Shows whether immutable releases are enabled or disabled. Also identifies whether immutability is being<br />enforced by the repository owner.  The authenticated user must have admin read access to the repository.</td>
</tr>
<tr>
    <td><a href="#enable_immutable_releases"><CopyableCode code="enable_immutable_releases" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Enables immutable releases for a repository. The authenticated user must have admin access to the repository.</td>
</tr>
<tr>
    <td><a href="#disable_immutable_releases"><CopyableCode code="disable_immutable_releases" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Disables immutable releases for a repository. The authenticated user must have admin access to the repository.</td>
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
    defaultValue="check_immutable_releases"
    values={[
        { label: 'check_immutable_releases', value: 'check_immutable_releases' }
    ]}
>
<TabItem value="check_immutable_releases">

Shows whether immutable releases are enabled or disabled. Also identifies whether immutability is being<br />enforced by the repository owner.  The authenticated user must have admin read access to the repository.

```sql
SELECT
enabled,
enforced_by_owner
FROM github.repos.repo_immutable_releases
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="enable_immutable_releases"
    values={[
        { label: 'enable_immutable_releases', value: 'enable_immutable_releases' }
    ]}
>
<TabItem value="enable_immutable_releases">

Enables immutable releases for a repository. The authenticated user must have admin access to the repository.

```sql
REPLACE github.repos.repo_immutable_releases
SET 
-- No updatable properties
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="disable_immutable_releases"
    values={[
        { label: 'disable_immutable_releases', value: 'disable_immutable_releases' }
    ]}
>
<TabItem value="disable_immutable_releases">

Disables immutable releases for a repository. The authenticated user must have admin access to the repository.

```sql
DELETE FROM github.repos.repo_immutable_releases
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
;
```
</TabItem>
</Tabs>
