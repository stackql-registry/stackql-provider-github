--- 
title: pr_review_protection
hide_title: false
hide_table_of_contents: false
keywords:
  - pr_review_protection
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

Creates, updates, deletes, gets or lists a <code>pr_review_protection</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pr_review_protection" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.pr_review_protection" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pull_request_review_protection"
    values={[
        { label: 'get_pull_request_review_protection', value: 'get_pull_request_review_protection' }
    ]}
>
<TabItem value="get_pull_request_review_protection">

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
    <td><CopyableCode code="bypass_pull_request_allowances" /></td>
    <td><code>object</code></td>
    <td>Allow specific users, teams, or apps to bypass pull request requirements.</td>
</tr>
<tr>
    <td><CopyableCode code="dismiss_stale_reviews" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dismissal_restrictions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="require_code_owner_reviews" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="require_last_push_approval" /></td>
    <td><code>boolean</code></td>
    <td>Whether the most recent push must be approved by someone other than the person who pushed it.</td>
</tr>
<tr>
    <td><CopyableCode code="required_approving_review_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/branches/master/protection/dismissal_restrictions)</td>
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
    <td><a href="#get_pull_request_review_protection"><CopyableCode code="get_pull_request_review_protection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.</td>
</tr>
<tr>
    <td><a href="#update_pull_request_review_protection"><CopyableCode code="update_pull_request_review_protection" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.<br /><br />&gt; [!NOTE]<br />&gt; Passing new arrays of `users` and `teams` replaces their previous values.</td>
</tr>
<tr>
    <td><a href="#delete_pull_request_review_protection"><CopyableCode code="delete_pull_request_review_protection" /></a></td>
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
    defaultValue="get_pull_request_review_protection"
    values={[
        { label: 'get_pull_request_review_protection', value: 'get_pull_request_review_protection' }
    ]}
>
<TabItem value="get_pull_request_review_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

```sql
SELECT
bypass_pull_request_allowances,
dismiss_stale_reviews,
dismissal_restrictions,
require_code_owner_reviews,
require_last_push_approval,
required_approving_review_count,
url
FROM github.repos.pr_review_protection
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND branch = '{{ branch }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pull_request_review_protection"
    values={[
        { label: 'update_pull_request_review_protection', value: 'update_pull_request_review_protection' }
    ]}
>
<TabItem value="update_pull_request_review_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.<br /><br />&gt; [!NOTE]<br />&gt; Passing new arrays of `users` and `teams` replaces their previous values.

```sql
UPDATE github.repos.pr_review_protection
SET 
dismissal_restrictions = '{{ dismissal_restrictions }}',
dismiss_stale_reviews = {{ dismiss_stale_reviews }},
require_code_owner_reviews = {{ require_code_owner_reviews }},
required_approving_review_count = {{ required_approving_review_count }},
require_last_push_approval = {{ require_last_push_approval }},
bypass_pull_request_allowances = '{{ bypass_pull_request_allowances }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND branch = '{{ branch }}' --required
RETURNING
bypass_pull_request_allowances,
dismiss_stale_reviews,
dismissal_restrictions,
require_code_owner_reviews,
require_last_push_approval,
required_approving_review_count,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pull_request_review_protection"
    values={[
        { label: 'delete_pull_request_review_protection', value: 'delete_pull_request_review_protection' }
    ]}
>
<TabItem value="delete_pull_request_review_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

```sql
DELETE FROM github.repos.pr_review_protection
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND branch = '{{ branch }}' --required
;
```
</TabItem>
</Tabs>
