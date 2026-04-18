--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_github_actions_permissions_repository"
    values={[
        { label: 'get_github_actions_permissions_repository', value: 'get_github_actions_permissions_repository' },
        { label: 'get_github_actions_permissions_organization', value: 'get_github_actions_permissions_organization' }
    ]}
>
<TabItem value="get_github_actions_permissions_repository">

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
    <td><CopyableCode code="allowed_actions" /></td>
    <td><code>string</code></td>
    <td>The permissions policy that controls the actions and reusable workflows that are allowed to run. (all, local_only, selected)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether GitHub Actions is enabled on the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="selected_actions_url" /></td>
    <td><code>string</code></td>
    <td>The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`.</td>
</tr>
<tr>
    <td><CopyableCode code="sha_pinning_required" /></td>
    <td><code>boolean</code></td>
    <td>Whether actions must be pinned to a full-length commit SHA.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_github_actions_permissions_organization">

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
    <td><CopyableCode code="allowed_actions" /></td>
    <td><code>string</code></td>
    <td>The permissions policy that controls the actions and reusable workflows that are allowed to run. (all, local_only, selected)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_repositories" /></td>
    <td><code>string</code></td>
    <td>The policy that controls the repositories in the organization that are allowed to run GitHub Actions. (all, none, selected)</td>
</tr>
<tr>
    <td><CopyableCode code="selected_actions_url" /></td>
    <td><code>string</code></td>
    <td>The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`.</td>
</tr>
<tr>
    <td><CopyableCode code="selected_repositories_url" /></td>
    <td><code>string</code></td>
    <td>The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`.</td>
</tr>
<tr>
    <td><CopyableCode code="sha_pinning_required" /></td>
    <td><code>boolean</code></td>
    <td>Whether actions must be pinned to a full-length commit SHA.</td>
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
    <td><a href="#get_github_actions_permissions_repository"><CopyableCode code="get_github_actions_permissions_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions and reusable workflows allowed to run in the repository.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_github_actions_permissions_organization"><CopyableCode code="get_github_actions_permissions_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_github_actions_permissions_repository"><CopyableCode code="set_github_actions_permissions_repository" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions and reusable workflows in the repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_github_actions_permissions_organization"><CopyableCode code="set_github_actions_permissions_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-enabled_repositories"><code>enabled_repositories</code></a></td>
    <td></td>
    <td>Sets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
    defaultValue="get_github_actions_permissions_repository"
    values={[
        { label: 'get_github_actions_permissions_repository', value: 'get_github_actions_permissions_repository' },
        { label: 'get_github_actions_permissions_organization', value: 'get_github_actions_permissions_organization' }
    ]}
>
<TabItem value="get_github_actions_permissions_repository">

Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions and reusable workflows allowed to run in the repository.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
allowed_actions,
enabled,
selected_actions_url,
sha_pinning_required
FROM github.actions.permissions
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
<TabItem value="get_github_actions_permissions_organization">

Gets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
allowed_actions,
enabled_repositories,
selected_actions_url,
selected_repositories_url,
sha_pinning_required
FROM github.actions.permissions
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_github_actions_permissions_repository"
    values={[
        { label: 'set_github_actions_permissions_repository', value: 'set_github_actions_permissions_repository' },
        { label: 'set_github_actions_permissions_organization', value: 'set_github_actions_permissions_organization' }
    ]}
>
<TabItem value="set_github_actions_permissions_repository">

Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions and reusable workflows in the repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.permissions
SET 
enabled = {{ enabled }},
allowed_actions = '{{ allowed_actions }}',
sha_pinning_required = {{ sha_pinning_required }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND enabled = {{ enabled }} --required;
```
</TabItem>
<TabItem value="set_github_actions_permissions_organization">

Sets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.actions.permissions
SET 
enabled_repositories = '{{ enabled_repositories }}',
allowed_actions = '{{ allowed_actions }}',
sha_pinning_required = {{ sha_pinning_required }}
WHERE 
org = '{{ org }}' --required
AND enabled_repositories = '{{ enabled_repositories }}' --required;
```
</TabItem>
</Tabs>
