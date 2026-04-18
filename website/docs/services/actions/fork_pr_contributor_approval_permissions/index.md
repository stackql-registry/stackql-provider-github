--- 
title: fork_pr_contributor_approval_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - fork_pr_contributor_approval_permissions
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

Creates, updates, deletes, gets or lists a <code>fork_pr_contributor_approval_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fork_pr_contributor_approval_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.fork_pr_contributor_approval_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fork_pr_contributor_approval_permissions_repository"
    values={[
        { label: 'get_fork_pr_contributor_approval_permissions_repository', value: 'get_fork_pr_contributor_approval_permissions_repository' }
    ]}
>
<TabItem value="get_fork_pr_contributor_approval_permissions_repository">

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
    <td><CopyableCode code="approval_policy" /></td>
    <td><code>string</code></td>
    <td>The policy that controls when fork PR workflows require approval from a maintainer. (first_time_contributors_new_to_github, first_time_contributors, all_external_contributors)</td>
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
    <td><a href="#get_fork_pr_contributor_approval_permissions_repository"><CopyableCode code="get_fork_pr_contributor_approval_permissions_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets the fork PR contributor approval policy for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_fork_pr_contributor_approval_permissions_repository"><CopyableCode code="set_fork_pr_contributor_approval_permissions_repository" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-approval_policy"><code>approval_policy</code></a></td>
    <td></td>
    <td>Sets the fork PR contributor approval policy for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
    defaultValue="get_fork_pr_contributor_approval_permissions_repository"
    values={[
        { label: 'get_fork_pr_contributor_approval_permissions_repository', value: 'get_fork_pr_contributor_approval_permissions_repository' }
    ]}
>
<TabItem value="get_fork_pr_contributor_approval_permissions_repository">

Gets the fork PR contributor approval policy for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
approval_policy
FROM github.actions.fork_pr_contributor_approval_permissions
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_fork_pr_contributor_approval_permissions_repository"
    values={[
        { label: 'set_fork_pr_contributor_approval_permissions_repository', value: 'set_fork_pr_contributor_approval_permissions_repository' }
    ]}
>
<TabItem value="set_fork_pr_contributor_approval_permissions_repository">

Sets the fork PR contributor approval policy for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.fork_pr_contributor_approval_permissions
SET 
approval_policy = '{{ approval_policy }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND approval_policy = '{{ approval_policy }}' --required;
```
</TabItem>
</Tabs>
