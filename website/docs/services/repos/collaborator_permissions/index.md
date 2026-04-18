--- 
title: collaborator_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - collaborator_permissions
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

Creates, updates, deletes, gets or lists a <code>collaborator_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaborator_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.collaborator_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_collaborator_permission_level"
    values={[
        { label: 'get_collaborator_permission_level', value: 'get_collaborator_permission_level' }
    ]}
>
<TabItem value="get_collaborator_permission_level">

if user has admin permissions

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
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td> (example: admin)</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>Collaborator (title: Collaborator)</td>
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
    <td><a href="#get_collaborator_permission_level"><CopyableCode code="get_collaborator_permission_level" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Checks the repository permission and role of a collaborator.<br /><br />The `permission` attribute provides the legacy base roles of `admin`, `write`, `read`, and `none`, where the<br />`maintain` role is mapped to `write` and the `triage` role is mapped to `read`.<br />The `role_name` attribute provides the name of the assigned role, including custom roles. The<br />`permission` can also be used to determine which base level of access the collaborator has to the repository.<br /><br />The calculated permissions are the highest role assigned to the collaborator after considering all sources of grants, including: repo, teams, organization, and enterprise.<br />There is presently not a way to differentiate between an organization level grant and a repository level grant from this endpoint response.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_collaborator_permission_level"
    values={[
        { label: 'get_collaborator_permission_level', value: 'get_collaborator_permission_level' }
    ]}
>
<TabItem value="get_collaborator_permission_level">

Checks the repository permission and role of a collaborator.<br /><br />The `permission` attribute provides the legacy base roles of `admin`, `write`, `read`, and `none`, where the<br />`maintain` role is mapped to `write` and the `triage` role is mapped to `read`.<br />The `role_name` attribute provides the name of the assigned role, including custom roles. The<br />`permission` can also be used to determine which base level of access the collaborator has to the repository.<br /><br />The calculated permissions are the highest role assigned to the collaborator after considering all sources of grants, including: repo, teams, organization, and enterprise.<br />There is presently not a way to differentiate between an organization level grant and a repository level grant from this endpoint response.

```sql
SELECT
role_name,
permission,
user
FROM github.repos.collaborator_permissions
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
</Tabs>
