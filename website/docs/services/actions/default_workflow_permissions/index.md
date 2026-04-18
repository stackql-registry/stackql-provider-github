--- 
title: default_workflow_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - default_workflow_permissions
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

Creates, updates, deletes, gets or lists a <code>default_workflow_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_workflow_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.default_workflow_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_github_actions_default_workflow_permissions_repository"
    values={[
        { label: 'get_github_actions_default_workflow_permissions_repository', value: 'get_github_actions_default_workflow_permissions_repository' },
        { label: 'get_github_actions_default_workflow_permissions_organization', value: 'get_github_actions_default_workflow_permissions_organization' }
    ]}
>
<TabItem value="get_github_actions_default_workflow_permissions_repository">

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
    <td><CopyableCode code="can_approve_pull_request_reviews" /></td>
    <td><code>boolean</code></td>
    <td>Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.</td>
</tr>
<tr>
    <td><CopyableCode code="default_workflow_permissions" /></td>
    <td><code>string</code></td>
    <td>The default workflow permissions granted to the GITHUB_TOKEN when running workflows. (read, write)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_github_actions_default_workflow_permissions_organization">

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
    <td><CopyableCode code="can_approve_pull_request_reviews" /></td>
    <td><code>boolean</code></td>
    <td>Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.</td>
</tr>
<tr>
    <td><CopyableCode code="default_workflow_permissions" /></td>
    <td><code>string</code></td>
    <td>The default workflow permissions granted to the GITHUB_TOKEN when running workflows. (read, write)</td>
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
    <td><a href="#get_github_actions_default_workflow_permissions_repository"><CopyableCode code="get_github_actions_default_workflow_permissions_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,<br />as well as if GitHub Actions can submit approving pull request reviews.<br />For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_github_actions_default_workflow_permissions_organization"><CopyableCode code="get_github_actions_default_workflow_permissions_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,<br />as well as whether GitHub Actions can submit approving pull request reviews. For more information, see<br />"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_github_actions_default_workflow_permissions_repository"><CopyableCode code="set_github_actions_default_workflow_permissions_repository" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions<br />can submit approving pull request reviews.<br />For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_github_actions_default_workflow_permissions_organization"><CopyableCode code="set_github_actions_default_workflow_permissions_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions<br />can submit approving pull request reviews. For more information, see<br />"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
    defaultValue="get_github_actions_default_workflow_permissions_repository"
    values={[
        { label: 'get_github_actions_default_workflow_permissions_repository', value: 'get_github_actions_default_workflow_permissions_repository' },
        { label: 'get_github_actions_default_workflow_permissions_organization', value: 'get_github_actions_default_workflow_permissions_organization' }
    ]}
>
<TabItem value="get_github_actions_default_workflow_permissions_repository">

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,<br />as well as if GitHub Actions can submit approving pull request reviews.<br />For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
can_approve_pull_request_reviews,
default_workflow_permissions
FROM github.actions.default_workflow_permissions
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
<TabItem value="get_github_actions_default_workflow_permissions_organization">

Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,<br />as well as whether GitHub Actions can submit approving pull request reviews. For more information, see<br />"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
can_approve_pull_request_reviews,
default_workflow_permissions
FROM github.actions.default_workflow_permissions
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_github_actions_default_workflow_permissions_repository"
    values={[
        { label: 'set_github_actions_default_workflow_permissions_repository', value: 'set_github_actions_default_workflow_permissions_repository' },
        { label: 'set_github_actions_default_workflow_permissions_organization', value: 'set_github_actions_default_workflow_permissions_organization' }
    ]}
>
<TabItem value="set_github_actions_default_workflow_permissions_repository">

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions<br />can submit approving pull request reviews.<br />For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.default_workflow_permissions
SET 
default_workflow_permissions = '{{ default_workflow_permissions }}',
can_approve_pull_request_reviews = {{ can_approve_pull_request_reviews }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required;
```
</TabItem>
<TabItem value="set_github_actions_default_workflow_permissions_organization">

Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions<br />can submit approving pull request reviews. For more information, see<br />"[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.actions.default_workflow_permissions
SET 
default_workflow_permissions = '{{ default_workflow_permissions }}',
can_approve_pull_request_reviews = {{ can_approve_pull_request_reviews }}
WHERE 
org = '{{ org }}' --required;
```
</TabItem>
</Tabs>
