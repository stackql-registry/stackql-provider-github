--- 
title: machines
hide_title: false
hide_table_of_contents: false
keywords:
  - machines
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

Creates, updates, deletes, gets or lists a <code>machines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="machines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codespaces.machines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="repo_machines_for_authenticated_user"
    values={[
        { label: 'repo_machines_for_authenticated_user', value: 'repo_machines_for_authenticated_user' },
        { label: 'codespace_machines_for_authenticated_user', value: 'codespace_machines_for_authenticated_user' }
    ]}
>
<TabItem value="repo_machines_for_authenticated_user">

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
    <td><CopyableCode code="machines" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="codespace_machines_for_authenticated_user">

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
    <td><CopyableCode code="machines" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><a href="#repo_machines_for_authenticated_user"><CopyableCode code="repo_machines_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-location"><code>location</code></a>, <a href="#parameter-client_ip"><code>client_ip</code></a>, <a href="#parameter-ref"><code>ref</code></a></td>
    <td>List the machine types available for a given repository based on its configuration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#codespace_machines_for_authenticated_user"><CopyableCode code="codespace_machines_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>List the machine types a codespace can transition to use.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
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
<tr id="parameter-codespace_name">
    <td><CopyableCode code="codespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the codespace.</td>
</tr>
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
<tr id="parameter-client_ip">
    <td><CopyableCode code="client_ip" /></td>
    <td><code>string</code></td>
    <td>IP for location auto-detection when proxying a request</td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The location to check for available machines. Assigned by IP if not provided.</td>
</tr>
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The branch or commit to check for prebuild availability and devcontainer restrictions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="repo_machines_for_authenticated_user"
    values={[
        { label: 'repo_machines_for_authenticated_user', value: 'repo_machines_for_authenticated_user' },
        { label: 'codespace_machines_for_authenticated_user', value: 'codespace_machines_for_authenticated_user' }
    ]}
>
<TabItem value="repo_machines_for_authenticated_user">

List the machine types available for a given repository based on its configuration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
SELECT
machines,
total_count
FROM github.codespaces.machines
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND location = '{{ location }}'
AND client_ip = '{{ client_ip }}'
AND ref = '{{ ref }}'
;
```
</TabItem>
<TabItem value="codespace_machines_for_authenticated_user">

List the machine types a codespace can transition to use.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
SELECT
machines,
total_count
FROM github.codespaces.machines
WHERE codespace_name = '{{ codespace_name }}' -- required
;
```
</TabItem>
</Tabs>
