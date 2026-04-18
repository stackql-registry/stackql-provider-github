--- 
title: workflow_run_reviews
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_run_reviews
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

Creates, updates, deletes, gets or lists a <code>workflow_run_reviews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_run_reviews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.workflow_run_reviews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reviews_for_run"
    values={[
        { label: 'get_reviews_for_run', value: 'get_reviews_for_run' }
    ]}
>
<TabItem value="get_reviews_for_run">

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
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>The comment submitted with the deployment review (example: Ship it!)</td>
</tr>
<tr>
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>The list of environments that were approved or rejected</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Whether deployment to the environment(s) was approved or rejected or pending (with comments) (approved, rejected, pending) (example: approved)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
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
    <td><a href="#get_reviews_for_run"><CopyableCode code="get_reviews_for_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
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
    defaultValue="get_reviews_for_run"
    values={[
        { label: 'get_reviews_for_run', value: 'get_reviews_for_run' }
    ]}
>
<TabItem value="get_reviews_for_run">

Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
comment,
environments,
state,
user
FROM github.actions.workflow_run_reviews
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND run_id = '{{ run_id }}' -- required
;
```
</TabItem>
</Tabs>
