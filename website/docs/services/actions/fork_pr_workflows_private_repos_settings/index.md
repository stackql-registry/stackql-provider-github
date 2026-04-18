--- 
title: fork_pr_workflows_private_repos_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - fork_pr_workflows_private_repos_settings
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

Creates, updates, deletes, gets or lists a <code>fork_pr_workflows_private_repos_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fork_pr_workflows_private_repos_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.fork_pr_workflows_private_repos_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_private_repo_fork_pr_workflows_settings_repository"
    values={[
        { label: 'get_private_repo_fork_pr_workflows_settings_repository', value: 'get_private_repo_fork_pr_workflows_settings_repository' }
    ]}
>
<TabItem value="get_private_repo_fork_pr_workflows_settings_repository">

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
    <td><CopyableCode code="require_approval_for_fork_pr_workflows" /></td>
    <td><code>boolean</code></td>
    <td>Whether workflows triggered by pull requests from forks require approval from a repository administrator to run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_workflows_from_fork_pull_requests" /></td>
    <td><code>boolean</code></td>
    <td>Whether workflows triggered by pull requests from forks are allowed to run on private repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="send_secrets_and_variables" /></td>
    <td><code>boolean</code></td>
    <td>Whether to make secrets and variables available to workflows triggered by pull requests from forks.</td>
</tr>
<tr>
    <td><CopyableCode code="send_write_tokens_to_workflows" /></td>
    <td><code>boolean</code></td>
    <td>Whether GitHub Actions can create pull requests or submit approving pull request reviews from a workflow triggered by a fork pull request.</td>
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
    <td><a href="#get_private_repo_fork_pr_workflows_settings_repository"><CopyableCode code="get_private_repo_fork_pr_workflows_settings_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets the settings for whether workflows from fork pull requests can run on a private repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_private_repo_fork_pr_workflows_settings_repository"><CopyableCode code="set_private_repo_fork_pr_workflows_settings_repository" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_workflows_from_fork_pull_requests"><code>run_workflows_from_fork_pull_requests</code></a></td>
    <td></td>
    <td>Sets the settings for whether workflows from fork pull requests can run on a private repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
    defaultValue="get_private_repo_fork_pr_workflows_settings_repository"
    values={[
        { label: 'get_private_repo_fork_pr_workflows_settings_repository', value: 'get_private_repo_fork_pr_workflows_settings_repository' }
    ]}
>
<TabItem value="get_private_repo_fork_pr_workflows_settings_repository">

Gets the settings for whether workflows from fork pull requests can run on a private repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
require_approval_for_fork_pr_workflows,
run_workflows_from_fork_pull_requests,
send_secrets_and_variables,
send_write_tokens_to_workflows
FROM github.actions.fork_pr_workflows_private_repos_settings
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_private_repo_fork_pr_workflows_settings_repository"
    values={[
        { label: 'set_private_repo_fork_pr_workflows_settings_repository', value: 'set_private_repo_fork_pr_workflows_settings_repository' }
    ]}
>
<TabItem value="set_private_repo_fork_pr_workflows_settings_repository">

Sets the settings for whether workflows from fork pull requests can run on a private repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.fork_pr_workflows_private_repos_settings
SET 
run_workflows_from_fork_pull_requests = {{ run_workflows_from_fork_pull_requests }},
send_write_tokens_to_workflows = {{ send_write_tokens_to_workflows }},
send_secrets_and_variables = {{ send_secrets_and_variables }},
require_approval_for_fork_pr_workflows = {{ require_approval_for_fork_pr_workflows }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND run_workflows_from_fork_pull_requests = {{ run_workflows_from_fork_pull_requests }} --required;
```
</TabItem>
</Tabs>
