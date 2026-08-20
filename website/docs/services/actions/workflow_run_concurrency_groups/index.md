--- 
title: workflow_run_concurrency_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_run_concurrency_groups
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

Creates, updates, deletes, gets or lists a <code>workflow_run_concurrency_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_run_concurrency_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.workflow_run_concurrency_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_concurrency_groups_for_workflow_run"
    values={[
        { label: 'list_concurrency_groups_for_workflow_run', value: 'list_concurrency_groups_for_workflow_run' }
    ]}
>
<TabItem value="list_concurrency_groups_for_workflow_run">

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
    <td>Items belonging to this workflow run that are either currently holding or waiting for the concurrency group lease. May be empty if the run no longer has any active or queued items in this group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL for this concurrency group. May return 404 if the group has no active items at the time it is requested, since the get-by-name endpoint reports the live repo-wide state of a group while this endpoint lists groups associated with a run by configuration.</td>
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
    <td><a href="#list_concurrency_groups_for_workflow_run"><CopyableCode code="list_concurrency_groups_for_workflow_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>Lists all concurrency groups associated with a workflow run or its jobs.<br /><br />The set of groups is derived from the run's configuration, so a group is<br />included even when the run no longer has any items currently holding or<br />waiting in it. In that case the `group_members` array will be empty.<br />`total_count` reflects the number of groups the run participates in by<br />configuration, not the number with active items.<br /><br />This differs from `GET /repos/&#123;owner&#125;/&#123;repo&#125;/actions/concurrency_groups/&#123;group_name&#125;`,<br />which returns 404 when a group has no active items. That endpoint reports<br />the live state of a group repo-wide, while this endpoint reports the<br />groups associated with a specific run by configuration.<br /><br />Results are sorted by group name and support cursor-based pagination via<br />`before` and `after`. The `after` cursor paginates forward only and does<br />not emit a `rel="prev"` Link; use `before` to page backward from a<br />forward page's `next` cursor.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
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
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the workflow run.</td>
</tr>
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
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
    defaultValue="list_concurrency_groups_for_workflow_run"
    values={[
        { label: 'list_concurrency_groups_for_workflow_run', value: 'list_concurrency_groups_for_workflow_run' }
    ]}
>
<TabItem value="list_concurrency_groups_for_workflow_run">

Lists all concurrency groups associated with a workflow run or its jobs.<br /><br />The set of groups is derived from the run's configuration, so a group is<br />included even when the run no longer has any items currently holding or<br />waiting in it. In that case the `group_members` array will be empty.<br />`total_count` reflects the number of groups the run participates in by<br />configuration, not the number with active items.<br /><br />This differs from `GET /repos/&#123;owner&#125;/&#123;repo&#125;/actions/concurrency_groups/&#123;group_name&#125;`,<br />which returns 404 when a group has no active items. That endpoint reports<br />the live state of a group repo-wide, while this endpoint reports the<br />groups associated with a specific run by configuration.<br /><br />Results are sorted by group name and support cursor-based pagination via<br />`before` and `after`. The `after` cursor paginates forward only and does<br />not emit a `rel="prev"` Link; use `before` to page backward from a<br />forward page's `next` cursor.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
group_name,
group_members,
group_url
FROM github.actions.workflow_run_concurrency_groups
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND run_id = '{{ run_id }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
;
```
</TabItem>
</Tabs>
