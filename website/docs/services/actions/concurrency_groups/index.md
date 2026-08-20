--- 
title: concurrency_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - concurrency_groups
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

Creates, updates, deletes, gets or lists a <code>concurrency_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="concurrency_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.concurrency_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_concurrency_group_for_repository"
    values={[
        { label: 'get_concurrency_group_for_repository', value: 'get_concurrency_group_for_repository' },
        { label: 'list_concurrency_groups_for_repository', value: 'list_concurrency_groups_for_repository' }
    ]}
>
<TabItem value="get_concurrency_group_for_repository">

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
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the concurrency group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_members" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="group_url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL for this concurrency group.</td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_concurrency_groups_for_repository">

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
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the concurrency group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL for this concurrency group.</td>
</tr>
<tr>
    <td><CopyableCode code="last_acquired_at" /></td>
    <td><code>string (date-time)</code></td>
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
    <td><a href="#get_concurrency_group_for_repository"><CopyableCode code="get_concurrency_group_for_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-concurrency_group_name"><code>concurrency_group_name</code></a></td>
    <td><a href="#parameter-ahead_of_run"><code>ahead_of_run</code></a>, <a href="#parameter-ahead_of_job"><code>ahead_of_job</code></a></td>
    <td>Gets a specific concurrency group for a repository, including all instances in the group's queue.<br />Returns 404 if the group is inactive or does not exist.<br /><br />Optionally, pass `ahead_of_run` or `ahead_of_job` to filter the results to only the items<br />ahead of the specified workflow run or job in the queue, plus the specified item itself<br />(returned as the last element). This is useful for determining what is blocking a particular<br />run or job. Returns 422 if the specified run or job is not in this concurrency group.<br /><br />When using `ahead_of_run`, this matches workflow-level concurrency and any reusable-workflow<br />leases held on behalf of that run. Job-level leases within the run are not considered to<br />block the run as a whole. Use `ahead_of_job` to match job-level concurrency and reusable-workflow<br />leases on the job's ancestor paths.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#list_concurrency_groups_for_repository"><CopyableCode code="list_concurrency_groups_for_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>Lists the active concurrency groups for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
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
<tr id="parameter-concurrency_group_name">
    <td><CopyableCode code="concurrency_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the concurrency group.</td>
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
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-ahead_of_job">
    <td><CopyableCode code="ahead_of_job" /></td>
    <td><code>integer</code></td>
    <td>Filter to items ahead of this job ID in the queue, plus the job itself. Matches job-level concurrency and reusable-workflow leases on the job's ancestor paths. Mutually exclusive with `ahead_of_run`.</td>
</tr>
<tr id="parameter-ahead_of_run">
    <td><CopyableCode code="ahead_of_run" /></td>
    <td><code>integer</code></td>
    <td>Filter to items ahead of this workflow run ID in the queue, plus the run itself. Matches workflow-level concurrency and reusable-workflow leases held on behalf of the run. Mutually exclusive with `ahead_of_job`.</td>
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
    defaultValue="get_concurrency_group_for_repository"
    values={[
        { label: 'get_concurrency_group_for_repository', value: 'get_concurrency_group_for_repository' },
        { label: 'list_concurrency_groups_for_repository', value: 'list_concurrency_groups_for_repository' }
    ]}
>
<TabItem value="get_concurrency_group_for_repository">

Gets a specific concurrency group for a repository, including all instances in the group's queue.<br />Returns 404 if the group is inactive or does not exist.<br /><br />Optionally, pass `ahead_of_run` or `ahead_of_job` to filter the results to only the items<br />ahead of the specified workflow run or job in the queue, plus the specified item itself<br />(returned as the last element). This is useful for determining what is blocking a particular<br />run or job. Returns 422 if the specified run or job is not in this concurrency group.<br /><br />When using `ahead_of_run`, this matches workflow-level concurrency and any reusable-workflow<br />leases held on behalf of that run. Job-level leases within the run are not considered to<br />block the run as a whole. Use `ahead_of_job` to match job-level concurrency and reusable-workflow<br />leases on the job's ancestor paths.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
group_name,
group_members,
group_url,
total_count
FROM github.actions.concurrency_groups
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND concurrency_group_name = '{{ concurrency_group_name }}' -- required
AND ahead_of_run = '{{ ahead_of_run }}'
AND ahead_of_job = '{{ ahead_of_job }}'
;
```
</TabItem>
<TabItem value="list_concurrency_groups_for_repository">

Lists the active concurrency groups for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
group_name,
group_url,
last_acquired_at
FROM github.actions.concurrency_groups
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND after = '{{ after }}'
;
```
</TabItem>
</Tabs>
