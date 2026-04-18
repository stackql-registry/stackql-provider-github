--- 
title: workflow_access
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_access
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

Creates, updates, deletes, gets or lists a <code>workflow_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.workflow_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_access_to_repository"
    values={[
        { label: 'get_workflow_access_to_repository', value: 'get_workflow_access_to_repository' }
    ]}
>
<TabItem value="get_workflow_access_to_repository">

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
    <td><CopyableCode code="access_level" /></td>
    <td><code>string</code></td>
    <td>Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the repository.  `none` means the access is only possible from workflows in this repository. `user` level access allows sharing across user owned private repositories only. `organization` level access allows sharing across the organization. (none, user, organization)</td>
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
    <td><a href="#get_workflow_access_to_repository"><CopyableCode code="get_workflow_access_to_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.<br />This endpoint only applies to private repositories.<br />For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_workflow_access_to_repository"><CopyableCode code="set_workflow_access_to_repository" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-access_level"><code>access_level</code></a></td>
    <td></td>
    <td>Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.<br />This endpoint only applies to private repositories.<br />For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)".<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
    defaultValue="get_workflow_access_to_repository"
    values={[
        { label: 'get_workflow_access_to_repository', value: 'get_workflow_access_to_repository' }
    ]}
>
<TabItem value="get_workflow_access_to_repository">

Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.<br />This endpoint only applies to private repositories.<br />For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
access_level
FROM github.actions.workflow_access
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_workflow_access_to_repository"
    values={[
        { label: 'set_workflow_access_to_repository', value: 'set_workflow_access_to_repository' }
    ]}
>
<TabItem value="set_workflow_access_to_repository">

Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.<br />This endpoint only applies to private repositories.<br />For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)".<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.workflow_access
SET 
access_level = '{{ access_level }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND access_level = '{{ access_level }}' --required;
```
</TabItem>
</Tabs>
