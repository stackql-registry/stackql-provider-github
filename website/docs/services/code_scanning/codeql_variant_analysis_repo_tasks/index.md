--- 
title: codeql_variant_analysis_repo_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - codeql_variant_analysis_repo_tasks
  - code_scanning
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

Creates, updates, deletes, gets or lists a <code>codeql_variant_analysis_repo_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="codeql_variant_analysis_repo_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.codeql_variant_analysis_repo_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_variant_analysis_repo_task"
    values={[
        { label: 'get_variant_analysis_repo_task', value: 'get_variant_analysis_repo_task' }
    ]}
>
<TabItem value="get_variant_analysis_repo_task">

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
    <td><CopyableCode code="analysis_status" /></td>
    <td><code>string</code></td>
    <td>The new status of the CodeQL variant analysis repository task. (pending, in_progress, succeeded, failed, canceled, timed_out)</td>
</tr>
<tr>
    <td><CopyableCode code="artifact_size_in_bytes" /></td>
    <td><code>integer</code></td>
    <td>The size of the artifact. This is only available for successful analyses.</td>
</tr>
<tr>
    <td><CopyableCode code="artifact_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the artifact. This is only available for successful analyses.</td>
</tr>
<tr>
    <td><CopyableCode code="database_commit_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit the CodeQL database was built against. This is only available for successful analyses.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>The reason of the failure of this repo task. This is only available if the repository task has failed.</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>A GitHub repository. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="result_count" /></td>
    <td><code>integer</code></td>
    <td>The number of results in the case of a successful analysis. This is only available for successful analyses.</td>
</tr>
<tr>
    <td><CopyableCode code="source_location_prefix" /></td>
    <td><code>string</code></td>
    <td>The source location prefix to use. This is only available for successful analyses.</td>
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
    <td><a href="#get_variant_analysis_repo_task"><CopyableCode code="get_variant_analysis_repo_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-codeql_variant_analysis_id"><code>codeql_variant_analysis_id</code></a>, <a href="#parameter-repo_owner"><code>repo_owner</code></a>, <a href="#parameter-repo_name"><code>repo_name</code></a></td>
    <td></td>
    <td>Gets the analysis status of a repository in a CodeQL variant analysis.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
<tr id="parameter-codeql_variant_analysis_id">
    <td><CopyableCode code="codeql_variant_analysis_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the variant analysis.</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the controller repository.</td>
</tr>
<tr id="parameter-repo_name">
    <td><CopyableCode code="repo_name" /></td>
    <td><code>string</code></td>
    <td>The name of the variant analysis repository.</td>
</tr>
<tr id="parameter-repo_owner">
    <td><CopyableCode code="repo_owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the variant analysis repository. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_variant_analysis_repo_task"
    values={[
        { label: 'get_variant_analysis_repo_task', value: 'get_variant_analysis_repo_task' }
    ]}
>
<TabItem value="get_variant_analysis_repo_task">

Gets the analysis status of a repository in a CodeQL variant analysis.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
analysis_status,
artifact_size_in_bytes,
artifact_url,
database_commit_sha,
failure_message,
repository,
result_count,
source_location_prefix
FROM github.code_scanning.codeql_variant_analysis_repo_tasks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND codeql_variant_analysis_id = '{{ codeql_variant_analysis_id }}' -- required
AND repo_owner = '{{ repo_owner }}' -- required
AND repo_name = '{{ repo_name }}' -- required
;
```
</TabItem>
</Tabs>
