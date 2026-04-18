--- 
title: branch_protection
hide_title: false
hide_table_of_contents: false
keywords:
  - branch_protection
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

Creates, updates, deletes, gets or lists a <code>branch_protection</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="branch_protection" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.branch_protection" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_branch_protection"
    values={[
        { label: 'get_branch_protection', value: 'get_branch_protection' }
    ]}
>
<TabItem value="get_branch_protection">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: "branch/with/protection")</td>
</tr>
<tr>
    <td><CopyableCode code="allow_deletions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="allow_force_pushes" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="allow_fork_syncing" /></td>
    <td><code>object</code></td>
    <td>Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing.</td>
</tr>
<tr>
    <td><CopyableCode code="block_creations" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="enforce_admins" /></td>
    <td><code>object</code></td>
    <td>Protected Branch Admin Enforced (title: Protected Branch Admin Enforced)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_branch" /></td>
    <td><code>object</code></td>
    <td>Whether to set the branch as read-only. If this is true, users will not be able to push to the branch.</td>
</tr>
<tr>
    <td><CopyableCode code="protection_url" /></td>
    <td><code>string</code></td>
    <td> (example: "https://api.github.com/repos/owner-79e94e2d36b3fd06a32bb213/AAA_Public_Repo/branches/branch/with/protection/protection")</td>
</tr>
<tr>
    <td><CopyableCode code="required_conversation_resolution" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required_linear_history" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required_pull_request_reviews" /></td>
    <td><code>object</code></td>
    <td>Protected Branch Pull Request Review (title: Protected Branch Pull Request Review)</td>
</tr>
<tr>
    <td><CopyableCode code="required_signatures" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required_status_checks" /></td>
    <td><code>object</code></td>
    <td>Protected Branch Required Status Check (title: Protected Branch Required Status Check)</td>
</tr>
<tr>
    <td><CopyableCode code="restrictions" /></td>
    <td><code>object</code></td>
    <td>Branch Restriction Policy (title: Branch Restriction Policy)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
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
    <td><a href="#get_branch_protection"><CopyableCode code="get_branch_protection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.</td>
</tr>
<tr>
    <td><a href="#update_branch_protection"><CopyableCode code="update_branch_protection" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-required_status_checks"><code>required_status_checks</code></a>, <a href="#parameter-enforce_admins"><code>enforce_admins</code></a>, <a href="#parameter-required_pull_request_reviews"><code>required_pull_request_reviews</code></a>, <a href="#parameter-restrictions"><code>restrictions</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Protecting a branch requires admin or owner permissions to the repository.<br /><br />&gt; [!NOTE]<br />&gt; Passing new arrays of `users` and `teams` replaces their previous values.<br /><br />&gt; [!NOTE]<br />&gt; The list of users, apps, and teams in total is limited to 100 items.</td>
</tr>
<tr>
    <td><a href="#delete_branch_protection"><CopyableCode code="delete_branch_protection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.</td>
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
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_branch_protection"
    values={[
        { label: 'get_branch_protection', value: 'get_branch_protection' }
    ]}
>
<TabItem value="get_branch_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

```sql
SELECT
name,
allow_deletions,
allow_force_pushes,
allow_fork_syncing,
block_creations,
enabled,
enforce_admins,
lock_branch,
protection_url,
required_conversation_resolution,
required_linear_history,
required_pull_request_reviews,
required_signatures,
required_status_checks,
restrictions,
url
FROM github.repos.branch_protection
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND branch = '{{ branch }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_branch_protection"
    values={[
        { label: 'update_branch_protection', value: 'update_branch_protection' }
    ]}
>
<TabItem value="update_branch_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Protecting a branch requires admin or owner permissions to the repository.<br /><br />&gt; [!NOTE]<br />&gt; Passing new arrays of `users` and `teams` replaces their previous values.<br /><br />&gt; [!NOTE]<br />&gt; The list of users, apps, and teams in total is limited to 100 items.

```sql
REPLACE github.repos.branch_protection
SET 
required_status_checks = '{{ required_status_checks }}',
enforce_admins = {{ enforce_admins }},
required_pull_request_reviews = '{{ required_pull_request_reviews }}',
restrictions = '{{ restrictions }}',
required_linear_history = {{ required_linear_history }},
allow_force_pushes = {{ allow_force_pushes }},
allow_deletions = {{ allow_deletions }},
block_creations = {{ block_creations }},
required_conversation_resolution = {{ required_conversation_resolution }},
lock_branch = {{ lock_branch }},
allow_fork_syncing = {{ allow_fork_syncing }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND branch = '{{ branch }}' --required
AND required_status_checks = '{{ required_status_checks }}' --required
AND enforce_admins = {{ enforce_admins }} --required
AND required_pull_request_reviews = '{{ required_pull_request_reviews }}' --required
AND restrictions = '{{ restrictions }}' --required
RETURNING
allow_deletions,
allow_force_pushes,
allow_fork_syncing,
block_creations,
enforce_admins,
lock_branch,
required_conversation_resolution,
required_linear_history,
required_pull_request_reviews,
required_signatures,
required_status_checks,
restrictions,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_branch_protection"
    values={[
        { label: 'delete_branch_protection', value: 'delete_branch_protection' }
    ]}
>
<TabItem value="delete_branch_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

```sql
DELETE FROM github.repos.branch_protection
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND branch = '{{ branch }}' --required
;
```
</TabItem>
</Tabs>
