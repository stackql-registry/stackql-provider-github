--- 
title: admin_branch_protection
hide_title: false
hide_table_of_contents: false
keywords:
  - admin_branch_protection
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

Creates, updates, deletes, gets or lists an <code>admin_branch_protection</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="admin_branch_protection" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.admin_branch_protection" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_admin_branch_protection"
    values={[
        { label: 'get_admin_branch_protection', value: 'get_admin_branch_protection' }
    ]}
>
<TabItem value="get_admin_branch_protection">

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/branches/master/protection/enforce_admins)</td>
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
    <td><a href="#get_admin_branch_protection"><CopyableCode code="get_admin_branch_protection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.</td>
</tr>
<tr>
    <td><a href="#set_admin_branch_protection"><CopyableCode code="set_admin_branch_protection" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.</td>
</tr>
<tr>
    <td><a href="#delete_admin_branch_protection"><CopyableCode code="delete_admin_branch_protection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.</td>
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
    defaultValue="get_admin_branch_protection"
    values={[
        { label: 'get_admin_branch_protection', value: 'get_admin_branch_protection' }
    ]}
>
<TabItem value="get_admin_branch_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

```sql
SELECT
enabled,
url
FROM github.repos.admin_branch_protection
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND branch = '{{ branch }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_admin_branch_protection"
    values={[
        { label: 'set_admin_branch_protection', value: 'set_admin_branch_protection' }
    ]}
>
<TabItem value="set_admin_branch_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

```sql
REPLACE github.repos.admin_branch_protection
SET 
-- No updatable properties
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND branch = '{{ branch }}' --required
RETURNING
enabled,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_admin_branch_protection"
    values={[
        { label: 'delete_admin_branch_protection', value: 'delete_admin_branch_protection' }
    ]}
>
<TabItem value="delete_admin_branch_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

```sql
DELETE FROM github.repos.admin_branch_protection
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND branch = '{{ branch }}' --required
;
```
</TabItem>
</Tabs>
