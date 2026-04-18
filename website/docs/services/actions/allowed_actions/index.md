--- 
title: allowed_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - allowed_actions
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

Creates, updates, deletes, gets or lists an <code>allowed_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allowed_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.allowed_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_allowed_actions_repository"
    values={[
        { label: 'get_allowed_actions_repository', value: 'get_allowed_actions_repository' },
        { label: 'get_allowed_actions_organization', value: 'get_allowed_actions_organization' }
    ]}
>
<TabItem value="get_allowed_actions_repository">

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
    <td><CopyableCode code="github_owned_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.</td>
</tr>
<tr>
    <td><CopyableCode code="patterns_allowed" /></td>
    <td><code>array</code></td>
    <td>Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`.  &gt; [!NOTE] &gt; The `patterns_allowed` setting only applies to public repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether actions from GitHub Marketplace verified creators are allowed. Set to `true` to allow all actions by GitHub Marketplace verified creators.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_allowed_actions_organization">

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
    <td><CopyableCode code="github_owned_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.</td>
</tr>
<tr>
    <td><CopyableCode code="patterns_allowed" /></td>
    <td><code>array</code></td>
    <td>Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`.  &gt; [!NOTE] &gt; The `patterns_allowed` setting only applies to public repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="verified_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Whether actions from GitHub Marketplace verified creators are allowed. Set to `true` to allow all actions by GitHub Marketplace verified creators.</td>
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
    <td><a href="#get_allowed_actions_repository"><CopyableCode code="get_allowed_actions_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets the settings for selected actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_allowed_actions_organization"><CopyableCode code="get_allowed_actions_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets the selected actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_allowed_actions_repository"><CopyableCode code="set_allowed_actions_repository" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Sets the actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_allowed_actions_organization"><CopyableCode code="set_allowed_actions_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Sets the actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
    defaultValue="get_allowed_actions_repository"
    values={[
        { label: 'get_allowed_actions_repository', value: 'get_allowed_actions_repository' },
        { label: 'get_allowed_actions_organization', value: 'get_allowed_actions_organization' }
    ]}
>
<TabItem value="get_allowed_actions_repository">

Gets the settings for selected actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
github_owned_allowed,
patterns_allowed,
verified_allowed
FROM github.actions.allowed_actions
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
<TabItem value="get_allowed_actions_organization">

Gets the selected actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
github_owned_allowed,
patterns_allowed,
verified_allowed
FROM github.actions.allowed_actions
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_allowed_actions_repository"
    values={[
        { label: 'set_allowed_actions_repository', value: 'set_allowed_actions_repository' },
        { label: 'set_allowed_actions_organization', value: 'set_allowed_actions_organization' }
    ]}
>
<TabItem value="set_allowed_actions_repository">

Sets the actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.allowed_actions
SET 
github_owned_allowed = {{ github_owned_allowed }},
verified_allowed = {{ verified_allowed }},
patterns_allowed = '{{ patterns_allowed }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required;
```
</TabItem>
<TabItem value="set_allowed_actions_organization">

Sets the actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.actions.allowed_actions
SET 
github_owned_allowed = {{ github_owned_allowed }},
verified_allowed = {{ verified_allowed }},
patterns_allowed = '{{ patterns_allowed }}'
WHERE 
org = '{{ org }}' --required;
```
</TabItem>
</Tabs>
