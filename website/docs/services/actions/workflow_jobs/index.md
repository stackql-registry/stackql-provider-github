--- 
title: workflow_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_jobs
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

Creates, updates, deletes, gets or lists a <code>workflow_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.workflow_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_jobs_for_workflow_run_attempt"
    values={[
        { label: 'list_jobs_for_workflow_run_attempt', value: 'list_jobs_for_workflow_run_attempt' },
        { label: 'get_job_for_workflow_run', value: 'get_job_for_workflow_run' },
        { label: 'list_jobs_for_workflow_run', value: 'list_jobs_for_workflow_run' }
    ]}
>
<TabItem value="list_jobs_for_workflow_run_attempt">

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
    <td><CopyableCode code="jobs" /></td>
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
<TabItem value="get_job_for_workflow_run">

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The id of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the job. (example: test-coverage)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDg6Q2hlY2tSdW40)</td>
</tr>
<tr>
    <td><CopyableCode code="run_id" /></td>
    <td><code>integer</code></td>
    <td>The id of the associated workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="runner_group_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.) (example: my runner group)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_name" /></td>
    <td><code>string</code></td>
    <td>The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.) (example: my runner)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow. (example: Build)</td>
</tr>
<tr>
    <td><CopyableCode code="check_run_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/github/hello-world/check-runs/4)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the job finished, in ISO 8601 format. (example: 2019-08-08T08:00:00-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td>The outcome of the job. (success, failure, neutral, cancelled, skipped, timed_out, action_required) (example: success)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the job created, in ISO 8601 format. (example: 2019-08-08T08:00:00-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="head_branch" /></td>
    <td><code>string</code></td>
    <td>The name of the current branch. (example: main)</td>
</tr>
<tr>
    <td><CopyableCode code="head_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit that is being run. (example: 009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/github/hello-world/runs/4)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>Labels for the workflow job. Specified by the "runs_on" attribute in the action's workflow file.</td>
</tr>
<tr>
    <td><CopyableCode code="run_attempt" /></td>
    <td><code>integer</code></td>
    <td>Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/github/hello-world/actions/runs/5)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the job started, in ISO 8601 format. (example: 2019-08-08T08:00:00-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The phase of the lifecycle that the job is currently in. (queued, in_progress, completed, waiting, requested, pending) (example: queued)</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>Steps in this job.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/github/hello-world/actions/jobs/21)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_jobs_for_workflow_run">

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
    <td><CopyableCode code="jobs" /></td>
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
    <td><a href="#list_jobs_for_workflow_run_attempt"><CopyableCode code="list_jobs_for_workflow_run_attempt" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a>, <a href="#parameter-attempt_number"><code>attempt_number</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists jobs for a specific workflow run attempt. You can use parameters to narrow the list of results. For more information<br />about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint  with a private repository.</td>
</tr>
<tr>
    <td><a href="#get_job_for_workflow_run"><CopyableCode code="get_job_for_workflow_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-job_id"><code>job_id</code></a></td>
    <td></td>
    <td>Gets a specific job in a workflow run.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_jobs_for_workflow_run"><CopyableCode code="list_jobs_for_workflow_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td><a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists jobs for a workflow run. You can use parameters to narrow the list of results. For more information<br />about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
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
<tr id="parameter-attempt_number">
    <td><CopyableCode code="attempt_number" /></td>
    <td><code>integer</code></td>
    <td>The attempt number of the workflow run.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the job.</td>
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
<tr id="parameter-run_id">
    <td><CopyableCode code="run_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the workflow run.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run.</td>
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
    defaultValue="list_jobs_for_workflow_run_attempt"
    values={[
        { label: 'list_jobs_for_workflow_run_attempt', value: 'list_jobs_for_workflow_run_attempt' },
        { label: 'get_job_for_workflow_run', value: 'get_job_for_workflow_run' },
        { label: 'list_jobs_for_workflow_run', value: 'list_jobs_for_workflow_run' }
    ]}
>
<TabItem value="list_jobs_for_workflow_run_attempt">

Lists jobs for a specific workflow run attempt. You can use parameters to narrow the list of results. For more information<br />about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint  with a private repository.

```sql
SELECT
jobs,
total_count
FROM github.actions.workflow_jobs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND run_id = '{{ run_id }}' -- required
AND attempt_number = '{{ attempt_number }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="get_job_for_workflow_run">

Gets a specific job in a workflow run.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
id,
name,
node_id,
run_id,
runner_group_id,
runner_id,
runner_group_name,
runner_name,
workflow_name,
check_run_url,
completed_at,
conclusion,
created_at,
head_branch,
head_sha,
html_url,
labels,
run_attempt,
run_url,
started_at,
status,
steps,
url
FROM github.actions.workflow_jobs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND job_id = '{{ job_id }}' -- required
;
```
</TabItem>
<TabItem value="list_jobs_for_workflow_run">

Lists jobs for a workflow run. You can use parameters to narrow the list of results. For more information<br />about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
jobs,
total_count
FROM github.actions.workflow_jobs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND run_id = '{{ run_id }}' -- required
AND filter = '{{ filter }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
