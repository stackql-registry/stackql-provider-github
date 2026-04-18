--- 
title: org_self_hosted_runner_repo_access
hide_title: false
hide_table_of_contents: false
keywords:
  - org_self_hosted_runner_repo_access
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

Creates, updates, deletes, gets or lists an <code>org_self_hosted_runner_repo_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_self_hosted_runner_repo_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_self_hosted_runner_repo_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_selected_repositories_self_hosted_runners_organization"
    values={[
        { label: 'list_selected_repositories_self_hosted_runners_organization', value: 'list_selected_repositories_self_hosted_runners_organization' }
    ]}
>
<TabItem value="list_selected_repositories_self_hosted_runners_organization">

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
    <td><code>integer</code></td>
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
    <td><a href="#list_selected_repositories_self_hosted_runners_organization"><CopyableCode code="list_selected_repositories_self_hosted_runners_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists repositories that are allowed to use self-hosted runners in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#enable_selected_repository_self_hosted_runners_organization"><CopyableCode code="enable_selected_repository_self_hosted_runners_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Adds a repository to the list of repositories that are allowed to use self-hosted runners in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_selected_repositories_self_hosted_runners_organization"><CopyableCode code="set_selected_repositories_self_hosted_runners_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-selected_repository_ids"><code>selected_repository_ids</code></a></td>
    <td></td>
    <td>Sets repositories that are allowed to use self-hosted runners in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#disable_selected_repository_self_hosted_runners_organization"><CopyableCode code="disable_selected_repository_self_hosted_runners_organization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Removes a repository from the list of repositories that are allowed to use self-hosted runners in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.</td>
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
    defaultValue="list_selected_repositories_self_hosted_runners_organization"
    values={[
        { label: 'list_selected_repositories_self_hosted_runners_organization', value: 'list_selected_repositories_self_hosted_runners_organization' }
    ]}
>
<TabItem value="list_selected_repositories_self_hosted_runners_organization">

Lists repositories that are allowed to use self-hosted runners in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.

```sql
SELECT
repositories,
total_count
FROM github.actions.org_self_hosted_runner_repo_access
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="enable_selected_repository_self_hosted_runners_organization"
    values={[
        { label: 'enable_selected_repository_self_hosted_runners_organization', value: 'enable_selected_repository_self_hosted_runners_organization' },
        { label: 'set_selected_repositories_self_hosted_runners_organization', value: 'set_selected_repositories_self_hosted_runners_organization' }
    ]}
>
<TabItem value="enable_selected_repository_self_hosted_runners_organization">

Adds a repository to the list of repositories that are allowed to use self-hosted runners in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.

```sql
REPLACE github.actions.org_self_hosted_runner_repo_access
SET 
-- No updatable properties
WHERE 
org = '{{ org }}' --required
AND repository_id = '{{ repository_id }}' --required;
```
</TabItem>
<TabItem value="set_selected_repositories_self_hosted_runners_organization">

Sets repositories that are allowed to use self-hosted runners in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.

```sql
REPLACE github.actions.org_self_hosted_runner_repo_access
SET 
selected_repository_ids = '{{ selected_repository_ids }}'
WHERE 
org = '{{ org }}' --required
AND selected_repository_ids = '{{ selected_repository_ids }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="disable_selected_repository_self_hosted_runners_organization"
    values={[
        { label: 'disable_selected_repository_self_hosted_runners_organization', value: 'disable_selected_repository_self_hosted_runners_organization' }
    ]}
>
<TabItem value="disable_selected_repository_self_hosted_runners_organization">

Removes a repository from the list of repositories that are allowed to use self-hosted runners in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.

```sql
DELETE FROM github.actions.org_self_hosted_runner_repo_access
WHERE org = '{{ org }}' --required
AND repository_id = '{{ repository_id }}' --required
;
```
</TabItem>
</Tabs>
