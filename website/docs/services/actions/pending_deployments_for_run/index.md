--- 
title: pending_deployments_for_run
hide_title: false
hide_table_of_contents: false
keywords:
  - pending_deployments_for_run
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

Creates, updates, deletes, gets or lists a <code>pending_deployments_for_run</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pending_deployments_for_run" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.pending_deployments_for_run" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pending_deployments_for_run"
    values={[
        { label: 'get_pending_deployments_for_run', value: 'get_pending_deployments_for_run' }
    ]}
>
<TabItem value="get_pending_deployments_for_run">

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
    <td><CopyableCode code="current_user_can_approve" /></td>
    <td><code>boolean</code></td>
    <td>Whether the currently authenticated user can approve the deployment</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reviewers" /></td>
    <td><code>array</code></td>
    <td>The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.</td>
</tr>
<tr>
    <td><CopyableCode code="wait_timer" /></td>
    <td><code>integer</code></td>
    <td>The set duration of the wait timer</td>
</tr>
<tr>
    <td><CopyableCode code="wait_timer_started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the wait timer began. (example: 2020-11-23T22:00:40Z)</td>
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
    <td><a href="#get_pending_deployments_for_run"><CopyableCode code="get_pending_deployments_for_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Get all deployment environments for a workflow run that are waiting for protection rules to pass.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#review_pending_deployments_for_run"><CopyableCode code="review_pending_deployments_for_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a>, <a href="#parameter-environment_ids"><code>environment_ids</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-comment"><code>comment</code></a></td>
    <td></td>
    <td>Approve or reject pending deployments that are waiting on approval by a required reviewer.<br /><br />Required reviewers with read access to the repository contents and deployments can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pending_deployments_for_run"
    values={[
        { label: 'get_pending_deployments_for_run', value: 'get_pending_deployments_for_run' }
    ]}
>
<TabItem value="get_pending_deployments_for_run">

Get all deployment environments for a workflow run that are waiting for protection rules to pass.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
current_user_can_approve,
environment,
reviewers,
wait_timer,
wait_timer_started_at
FROM github.actions.pending_deployments_for_run
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND run_id = '{{ run_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="review_pending_deployments_for_run"
    values={[
        { label: 'review_pending_deployments_for_run', value: 'review_pending_deployments_for_run' }
    ]}
>
<TabItem value="review_pending_deployments_for_run">

Approve or reject pending deployments that are waiting on approval by a required reviewer.<br /><br />Required reviewers with read access to the repository contents and deployments can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
EXEC github.actions.pending_deployments_for_run.review_pending_deployments_for_run 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@run_id='{{ run_id }}' --required 
@@json=
'{
"environment_ids": "{{ environment_ids }}", 
"state": "{{ state }}", 
"comment": "{{ comment }}"
}'
;
```
</TabItem>
</Tabs>
