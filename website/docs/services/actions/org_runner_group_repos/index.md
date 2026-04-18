--- 
title: org_runner_group_repos
hide_title: false
hide_table_of_contents: false
keywords:
  - org_runner_group_repos
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

Creates, updates, deletes, gets or lists an <code>org_runner_group_repos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_runner_group_repos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_runner_group_repos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repo_access_to_self_hosted_runner_group_in_org"
    values={[
        { label: 'list_repo_access_to_self_hosted_runner_group_in_org', value: 'list_repo_access_to_self_hosted_runner_group_in_org' }
    ]}
>
<TabItem value="list_repo_access_to_self_hosted_runner_group_in_org">

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
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>number</code></td>
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
    <td><a href="#list_repo_access_to_self_hosted_runner_group_in_org"><CopyableCode code="list_repo_access_to_self_hosted_runner_group_in_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists the repositories with access to a self-hosted runner group configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#add_repo_access_to_self_hosted_runner_group_in_org"><CopyableCode code="add_repo_access_to_self_hosted_runner_group_in_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Adds a repository to the list of repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access)."<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_repo_access_to_self_hosted_runner_group_in_org"><CopyableCode code="set_repo_access_to_self_hosted_runner_group_in_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a>, <a href="#parameter-selected_repository_ids"><code>selected_repository_ids</code></a></td>
    <td></td>
    <td>Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#remove_repo_access_to_self_hosted_runner_group_in_org"><CopyableCode code="remove_repo_access_to_self_hosted_runner_group_in_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-repository_id">
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the repository.</td>
</tr>
<tr id="parameter-runner_group_id">
    <td><CopyableCode code="runner_group_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the self-hosted runner group.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_repo_access_to_self_hosted_runner_group_in_org"
    values={[
        { label: 'list_repo_access_to_self_hosted_runner_group_in_org', value: 'list_repo_access_to_self_hosted_runner_group_in_org' }
    ]}
>
<TabItem value="list_repo_access_to_self_hosted_runner_group_in_org">

Lists the repositories with access to a self-hosted runner group configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
repositories,
total_count
FROM github.actions.org_runner_group_repos
WHERE org = '{{ org }}' -- required
AND runner_group_id = '{{ runner_group_id }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="add_repo_access_to_self_hosted_runner_group_in_org"
    values={[
        { label: 'add_repo_access_to_self_hosted_runner_group_in_org', value: 'add_repo_access_to_self_hosted_runner_group_in_org' },
        { label: 'set_repo_access_to_self_hosted_runner_group_in_org', value: 'set_repo_access_to_self_hosted_runner_group_in_org' }
    ]}
>
<TabItem value="add_repo_access_to_self_hosted_runner_group_in_org">

Adds a repository to the list of repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access)."<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.actions.org_runner_group_repos
SET 
-- No updatable properties
WHERE 
org = '{{ org }}' --required
AND runner_group_id = '{{ runner_group_id }}' --required
AND repository_id = '{{ repository_id }}' --required;
```
</TabItem>
<TabItem value="set_repo_access_to_self_hosted_runner_group_in_org">

Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.actions.org_runner_group_repos
SET 
selected_repository_ids = '{{ selected_repository_ids }}'
WHERE 
org = '{{ org }}' --required
AND runner_group_id = '{{ runner_group_id }}' --required
AND selected_repository_ids = '{{ selected_repository_ids }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_repo_access_to_self_hosted_runner_group_in_org"
    values={[
        { label: 'remove_repo_access_to_self_hosted_runner_group_in_org', value: 'remove_repo_access_to_self_hosted_runner_group_in_org' }
    ]}
>
<TabItem value="remove_repo_access_to_self_hosted_runner_group_in_org">

Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.actions.org_runner_group_repos
WHERE org = '{{ org }}' --required
AND runner_group_id = '{{ runner_group_id }}' --required
AND repository_id = '{{ repository_id }}' --required
;
```
</TabItem>
</Tabs>
