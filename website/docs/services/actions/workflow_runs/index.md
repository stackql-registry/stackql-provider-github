--- 
title: workflow_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - workflow_runs
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

Creates, updates, deletes, gets or lists a <code>workflow_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflow_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.workflow_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow_run_attempt"
    values={[
        { label: 'get_workflow_run_attempt', value: 'get_workflow_run_attempt' },
        { label: 'get_workflow_run', value: 'get_workflow_run' },
        { label: 'list_workflow_runs', value: 'list_workflow_runs' },
        { label: 'list_workflow_runs_for_repo', value: 'list_workflow_runs_for_repo' }
    ]}
>
<TabItem value="get_workflow_run_attempt">

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
    <td>The ID of the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow run. (example: Build)</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the associated check suite.</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the associated check suite. (example: MDEwOkNoZWNrU3VpdGU0Mg==)</td>
</tr>
<tr>
    <td><CopyableCode code="head_repository_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOkNoZWNrU3VpdGU1)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the parent workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="artifacts_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the artifacts for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/rerun/artifacts)</td>
</tr>
<tr>
    <td><CopyableCode code="cancel_url" /></td>
    <td><code>string</code></td>
    <td>The URL to cancel the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/cancel)</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the associated check suite. (example: https://api.github.com/repos/github/hello-world/check-suites/12)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td> (example: neutral)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="display_title" /></td>
    <td><code>string</code></td>
    <td>The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. (example: Simple Workflow)</td>
</tr>
<tr>
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td> (example: push)</td>
</tr>
<tr>
    <td><CopyableCode code="head_branch" /></td>
    <td><code>string</code></td>
    <td> (example: master)</td>
</tr>
<tr>
    <td><CopyableCode code="head_commit" /></td>
    <td><code>object</code></td>
    <td>A commit. (title: Simple Commit)</td>
</tr>
<tr>
    <td><CopyableCode code="head_repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="head_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the head commit that points to the version of the workflow being run. (example: 009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/github/hello-world/suites/4)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the jobs for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/jobs)</td>
</tr>
<tr>
    <td><CopyableCode code="logs_url" /></td>
    <td><code>string</code></td>
    <td>The URL to download the logs for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/logs)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The full path of the workflow (example: octocat/octo-repo/.github/workflows/ci.yml@main)</td>
</tr>
<tr>
    <td><CopyableCode code="previous_attempt_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the previous attempted run of this workflow, if one exists. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/attempts/3)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_requests" /></td>
    <td><code>array</code></td>
    <td>Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. The returned pull requests do not necessarily indicate pull requests that triggered the run.</td>
</tr>
<tr>
    <td><CopyableCode code="referenced_workflows" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="rerun_url" /></td>
    <td><code>string</code></td>
    <td>The URL to rerun the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/rerun)</td>
</tr>
<tr>
    <td><CopyableCode code="run_attempt" /></td>
    <td><code>integer</code></td>
    <td>Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_number" /></td>
    <td><code>integer</code></td>
    <td>The auto incrementing run number for the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the latest run. Resets on re-run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (example: completed)</td>
</tr>
<tr>
    <td><CopyableCode code="triggering_actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL to the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the workflow. (example: https://api.github.com/repos/github/hello-world/actions/workflows/main.yaml)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_workflow_run">

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
    <td>The ID of the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow run. (example: Build)</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the associated check suite.</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the associated check suite. (example: MDEwOkNoZWNrU3VpdGU0Mg==)</td>
</tr>
<tr>
    <td><CopyableCode code="head_repository_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOkNoZWNrU3VpdGU1)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the parent workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="artifacts_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the artifacts for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/rerun/artifacts)</td>
</tr>
<tr>
    <td><CopyableCode code="cancel_url" /></td>
    <td><code>string</code></td>
    <td>The URL to cancel the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/cancel)</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the associated check suite. (example: https://api.github.com/repos/github/hello-world/check-suites/12)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td> (example: neutral)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="display_title" /></td>
    <td><code>string</code></td>
    <td>The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. (example: Simple Workflow)</td>
</tr>
<tr>
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td> (example: push)</td>
</tr>
<tr>
    <td><CopyableCode code="head_branch" /></td>
    <td><code>string</code></td>
    <td> (example: master)</td>
</tr>
<tr>
    <td><CopyableCode code="head_commit" /></td>
    <td><code>object</code></td>
    <td>A commit. (title: Simple Commit)</td>
</tr>
<tr>
    <td><CopyableCode code="head_repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="head_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the head commit that points to the version of the workflow being run. (example: 009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/github/hello-world/suites/4)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the jobs for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/jobs)</td>
</tr>
<tr>
    <td><CopyableCode code="logs_url" /></td>
    <td><code>string</code></td>
    <td>The URL to download the logs for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/logs)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The full path of the workflow (example: octocat/octo-repo/.github/workflows/ci.yml@main)</td>
</tr>
<tr>
    <td><CopyableCode code="previous_attempt_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the previous attempted run of this workflow, if one exists. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/attempts/3)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_requests" /></td>
    <td><code>array</code></td>
    <td>Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. The returned pull requests do not necessarily indicate pull requests that triggered the run.</td>
</tr>
<tr>
    <td><CopyableCode code="referenced_workflows" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="rerun_url" /></td>
    <td><code>string</code></td>
    <td>The URL to rerun the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/rerun)</td>
</tr>
<tr>
    <td><CopyableCode code="run_attempt" /></td>
    <td><code>integer</code></td>
    <td>Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_number" /></td>
    <td><code>integer</code></td>
    <td>The auto incrementing run number for the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the latest run. Resets on re-run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (example: completed)</td>
</tr>
<tr>
    <td><CopyableCode code="triggering_actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL to the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the workflow. (example: https://api.github.com/repos/github/hello-world/actions/workflows/main.yaml)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_runs">

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
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="workflow_runs" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_runs_for_repo">

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
    <td>The ID of the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the workflow run. (example: Build)</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the associated check suite.</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the associated check suite. (example: MDEwOkNoZWNrU3VpdGU0Mg==)</td>
</tr>
<tr>
    <td><CopyableCode code="head_repository_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOkNoZWNrU3VpdGU1)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the parent workflow.</td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="artifacts_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the artifacts for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/rerun/artifacts)</td>
</tr>
<tr>
    <td><CopyableCode code="cancel_url" /></td>
    <td><code>string</code></td>
    <td>The URL to cancel the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/cancel)</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the associated check suite. (example: https://api.github.com/repos/github/hello-world/check-suites/12)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td> (example: neutral)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="display_title" /></td>
    <td><code>string</code></td>
    <td>The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow. (example: Simple Workflow)</td>
</tr>
<tr>
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td> (example: push)</td>
</tr>
<tr>
    <td><CopyableCode code="head_branch" /></td>
    <td><code>string</code></td>
    <td> (example: master)</td>
</tr>
<tr>
    <td><CopyableCode code="head_commit" /></td>
    <td><code>object</code></td>
    <td>A commit. (title: Simple Commit)</td>
</tr>
<tr>
    <td><CopyableCode code="head_repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="head_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the head commit that points to the version of the workflow being run. (example: 009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/github/hello-world/suites/4)</td>
</tr>
<tr>
    <td><CopyableCode code="jobs_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the jobs for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/jobs)</td>
</tr>
<tr>
    <td><CopyableCode code="logs_url" /></td>
    <td><code>string</code></td>
    <td>The URL to download the logs for the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/logs)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The full path of the workflow (example: octocat/octo-repo/.github/workflows/ci.yml@main)</td>
</tr>
<tr>
    <td><CopyableCode code="previous_attempt_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the previous attempted run of this workflow, if one exists. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/attempts/3)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_requests" /></td>
    <td><code>array</code></td>
    <td>Pull requests that are open with a `head_sha` or `head_branch` that matches the workflow run. The returned pull requests do not necessarily indicate pull requests that triggered the run.</td>
</tr>
<tr>
    <td><CopyableCode code="referenced_workflows" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="rerun_url" /></td>
    <td><code>string</code></td>
    <td>The URL to rerun the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5/rerun)</td>
</tr>
<tr>
    <td><CopyableCode code="run_attempt" /></td>
    <td><code>integer</code></td>
    <td>Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_number" /></td>
    <td><code>integer</code></td>
    <td>The auto incrementing run number for the workflow run.</td>
</tr>
<tr>
    <td><CopyableCode code="run_started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the latest run. Resets on re-run.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (example: completed)</td>
</tr>
<tr>
    <td><CopyableCode code="triggering_actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL to the workflow run. (example: https://api.github.com/repos/github/hello-world/actions/runs/5)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the workflow. (example: https://api.github.com/repos/github/hello-world/actions/workflows/main.yaml)</td>
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
    <td><a href="#get_workflow_run_attempt"><CopyableCode code="get_workflow_run_attempt" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a>, <a href="#parameter-attempt_number"><code>attempt_number</code></a></td>
    <td><a href="#parameter-exclude_pull_requests"><code>exclude_pull_requests</code></a></td>
    <td>Gets a specific workflow run attempt.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#get_workflow_run"><CopyableCode code="get_workflow_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td><a href="#parameter-exclude_pull_requests"><code>exclude_pull_requests</code></a></td>
    <td>Gets a specific workflow run.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#list_workflow_runs"><CopyableCode code="list_workflow_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a></td>
    <td><a href="#parameter-actor"><code>actor</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-event"><code>event</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-created"><code>created</code></a>, <a href="#parameter-exclude_pull_requests"><code>exclude_pull_requests</code></a>, <a href="#parameter-check_suite_id"><code>check_suite_id</code></a>, <a href="#parameter-head_sha"><code>head_sha</code></a></td>
    <td>List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).<br /><br />Anyone with read access to the repository can use this endpoint<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.<br /><br />This endpoint will return up to 1,000 results for each search when using the following parameters: `actor`, `branch`, `check_suite_id`, `created`, `event`, `head_sha`, `status`.</td>
</tr>
<tr>
    <td><a href="#list_workflow_runs_for_repo"><CopyableCode code="list_workflow_runs_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-actor"><code>actor</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-event"><code>event</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-created"><code>created</code></a>, <a href="#parameter-exclude_pull_requests"><code>exclude_pull_requests</code></a>, <a href="#parameter-check_suite_id"><code>check_suite_id</code></a>, <a href="#parameter-head_sha"><code>head_sha</code></a></td>
    <td>Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.<br /><br />This endpoint will return up to 1,000 results for each search when using the following parameters: `actor`, `branch`, `check_suite_id`, `created`, `event`, `head_sha`, `status`.</td>
</tr>
<tr>
    <td><a href="#force_cancel_workflow_run"><CopyableCode code="force_cancel_workflow_run" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Cancels a workflow run and bypasses conditions that would otherwise cause a workflow execution to continue, such as an `always()` condition on a job.<br />You should only use this endpoint to cancel a workflow run when the workflow run is not responding to [`POST /repos/&#123;owner&#125;/&#123;repo&#125;/actions/runs/&#123;run_id&#125;/cancel`](https://docs.github.com/rest/actions/workflow-runs#cancel-a-workflow-run).<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_workflow_run"><CopyableCode code="delete_workflow_run" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Deletes a specific workflow run.<br /><br />Anyone with write access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#re_run_job_for_workflow_run"><CopyableCode code="re_run_job_for_workflow_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-job_id"><code>job_id</code></a></td>
    <td></td>
    <td>Re-run a job and its dependent jobs in a workflow run.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#approve_workflow_run"><CopyableCode code="approve_workflow_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Approves a workflow run for a pull request from a public fork of a first time contributor. For more information, see ["Approving workflow runs from public forks](https://docs.github.com/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#cancel_workflow_run"><CopyableCode code="cancel_workflow_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Cancels a workflow run using its `id`.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#review_custom_gates_for_run"><CopyableCode code="review_custom_gates_for_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-comment"><code>comment</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td></td>
    <td>Approve or reject custom deployment protection rules provided by a GitHub App for a workflow run. For more information, see "[Using environments for deployment](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment)."<br /><br />&gt; [!NOTE]<br />&gt; GitHub Apps can only review their own custom deployment protection rules. To approve or reject pending deployments that are waiting for review from a specific person or team, see [`POST /repos/&#123;owner&#125;/&#123;repo&#125;/actions/runs/&#123;run_id&#125;/pending_deployments`](https://docs.github.com/rest/actions/workflow-runs#review-pending-deployments-for-a-workflow-run).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#re_run_workflow"><CopyableCode code="re_run_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Re-runs your workflow run using its `id`.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#re_run_workflow_failed_jobs"><CopyableCode code="re_run_workflow_failed_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td></td>
    <td>Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-workflow_id">
    <td><CopyableCode code="workflow_id" /></td>
    <td><code></code></td>
    <td>The ID of the workflow. You can also pass the workflow file name as a string.</td>
</tr>
<tr id="parameter-actor">
    <td><CopyableCode code="actor" /></td>
    <td><code>string</code></td>
    <td>Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.</td>
</tr>
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>Returns workflow runs associated with a branch. Use the name of the branch of the `push`.</td>
</tr>
<tr id="parameter-check_suite_id">
    <td><CopyableCode code="check_suite_id" /></td>
    <td><code>integer</code></td>
    <td>Returns workflow runs with the `check_suite_id` that you specify.</td>
</tr>
<tr id="parameter-created">
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."</td>
</tr>
<tr id="parameter-event">
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td>Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."</td>
</tr>
<tr id="parameter-exclude_pull_requests">
    <td><CopyableCode code="exclude_pull_requests" /></td>
    <td><code>boolean</code></td>
    <td>If `true` pull requests are omitted from the response (empty array).</td>
</tr>
<tr id="parameter-head_sha">
    <td><CopyableCode code="head_sha" /></td>
    <td><code>string</code></td>
    <td>Only returns workflow runs that are associated with the specified `head_sha`.</td>
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
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub Actions can set a status of `waiting`, `pending`, or `requested`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_workflow_run_attempt"
    values={[
        { label: 'get_workflow_run_attempt', value: 'get_workflow_run_attempt' },
        { label: 'get_workflow_run', value: 'get_workflow_run' },
        { label: 'list_workflow_runs', value: 'list_workflow_runs' },
        { label: 'list_workflow_runs_for_repo', value: 'list_workflow_runs_for_repo' }
    ]}
>
<TabItem value="get_workflow_run_attempt">

Gets a specific workflow run attempt.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
id,
name,
check_suite_id,
check_suite_node_id,
head_repository_id,
node_id,
workflow_id,
actor,
artifacts_url,
cancel_url,
check_suite_url,
conclusion,
created_at,
display_title,
event,
head_branch,
head_commit,
head_repository,
head_sha,
html_url,
jobs_url,
logs_url,
path,
previous_attempt_url,
pull_requests,
referenced_workflows,
repository,
rerun_url,
run_attempt,
run_number,
run_started_at,
status,
triggering_actor,
updated_at,
url,
workflow_url
FROM github.actions.workflow_runs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND run_id = '{{ run_id }}' -- required
AND attempt_number = '{{ attempt_number }}' -- required
AND exclude_pull_requests = '{{ exclude_pull_requests }}'
;
```
</TabItem>
<TabItem value="get_workflow_run">

Gets a specific workflow run.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
id,
name,
check_suite_id,
check_suite_node_id,
head_repository_id,
node_id,
workflow_id,
actor,
artifacts_url,
cancel_url,
check_suite_url,
conclusion,
created_at,
display_title,
event,
head_branch,
head_commit,
head_repository,
head_sha,
html_url,
jobs_url,
logs_url,
path,
previous_attempt_url,
pull_requests,
referenced_workflows,
repository,
rerun_url,
run_attempt,
run_number,
run_started_at,
status,
triggering_actor,
updated_at,
url,
workflow_url
FROM github.actions.workflow_runs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND run_id = '{{ run_id }}' -- required
AND exclude_pull_requests = '{{ exclude_pull_requests }}'
;
```
</TabItem>
<TabItem value="list_workflow_runs">

List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).<br /><br />Anyone with read access to the repository can use this endpoint<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.<br /><br />This endpoint will return up to 1,000 results for each search when using the following parameters: `actor`, `branch`, `check_suite_id`, `created`, `event`, `head_sha`, `status`.

```sql
SELECT
total_count,
workflow_runs
FROM github.actions.workflow_runs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND workflow_id = '{{ workflow_id }}' -- required
AND actor = '{{ actor }}'
AND branch = '{{ branch }}'
AND event = '{{ event }}'
AND status = '{{ status }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND created = '{{ created }}'
AND exclude_pull_requests = '{{ exclude_pull_requests }}'
AND check_suite_id = '{{ check_suite_id }}'
AND head_sha = '{{ head_sha }}'
;
```
</TabItem>
<TabItem value="list_workflow_runs_for_repo">

Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#parameters).<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.<br /><br />This endpoint will return up to 1,000 results for each search when using the following parameters: `actor`, `branch`, `check_suite_id`, `created`, `event`, `head_sha`, `status`.

```sql
SELECT
id,
name,
check_suite_id,
check_suite_node_id,
head_repository_id,
node_id,
workflow_id,
actor,
artifacts_url,
cancel_url,
check_suite_url,
conclusion,
created_at,
display_title,
event,
head_branch,
head_commit,
head_repository,
head_sha,
html_url,
jobs_url,
logs_url,
path,
previous_attempt_url,
pull_requests,
referenced_workflows,
repository,
rerun_url,
run_attempt,
run_number,
run_started_at,
status,
triggering_actor,
updated_at,
url,
workflow_url
FROM github.actions.workflow_runs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND actor = '{{ actor }}'
AND branch = '{{ branch }}'
AND event = '{{ event }}'
AND status = '{{ status }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND created = '{{ created }}'
AND exclude_pull_requests = '{{ exclude_pull_requests }}'
AND check_suite_id = '{{ check_suite_id }}'
AND head_sha = '{{ head_sha }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="force_cancel_workflow_run"
    values={[
        { label: 'force_cancel_workflow_run', value: 'force_cancel_workflow_run' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="force_cancel_workflow_run">

Cancels a workflow run and bypasses conditions that would otherwise cause a workflow execution to continue, such as an `always()` condition on a job.<br />You should only use this endpoint to cancel a workflow run when the workflow run is not responding to [`POST /repos/&#123;owner&#125;/&#123;repo&#125;/actions/runs/&#123;run_id&#125;/cancel`](https://docs.github.com/rest/actions/workflow-runs#cancel-a-workflow-run).<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.workflow_runs (
owner,
repo,
run_id
)
SELECT 
'{{ owner }}',
'{{ repo }}',
'{{ run_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflow_runs
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the workflow_runs resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the workflow_runs resource.
    - name: run_id
      value: {{ run_id }}
      description: Required parameter for the workflow_runs resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workflow_run"
    values={[
        { label: 'delete_workflow_run', value: 'delete_workflow_run' }
    ]}
>
<TabItem value="delete_workflow_run">

Deletes a specific workflow run.<br /><br />Anyone with write access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.workflow_runs
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND run_id = '{{ run_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="re_run_job_for_workflow_run"
    values={[
        { label: 're_run_job_for_workflow_run', value: 're_run_job_for_workflow_run' },
        { label: 'approve_workflow_run', value: 'approve_workflow_run' },
        { label: 'cancel_workflow_run', value: 'cancel_workflow_run' },
        { label: 'review_custom_gates_for_run', value: 'review_custom_gates_for_run' },
        { label: 're_run_workflow', value: 're_run_workflow' },
        { label: 're_run_workflow_failed_jobs', value: 're_run_workflow_failed_jobs' }
    ]}
>
<TabItem value="re_run_job_for_workflow_run">

Re-run a job and its dependent jobs in a workflow run.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
EXEC github.actions.workflow_runs.re_run_job_for_workflow_run 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@job_id='{{ job_id }}' --required 
@@json=
'{
"enable_debug_logging": {{ enable_debug_logging }}
}'
;
```
</TabItem>
<TabItem value="approve_workflow_run">

Approves a workflow run for a pull request from a public fork of a first time contributor. For more information, see ["Approving workflow runs from public forks](https://docs.github.com/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
EXEC github.actions.workflow_runs.approve_workflow_run 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@run_id='{{ run_id }}' --required
;
```
</TabItem>
<TabItem value="cancel_workflow_run">

Cancels a workflow run using its `id`.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
EXEC github.actions.workflow_runs.cancel_workflow_run 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@run_id='{{ run_id }}' --required
;
```
</TabItem>
<TabItem value="review_custom_gates_for_run">

Approve or reject custom deployment protection rules provided by a GitHub App for a workflow run. For more information, see "[Using environments for deployment](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment)."<br /><br />&gt; [!NOTE]<br />&gt; GitHub Apps can only review their own custom deployment protection rules. To approve or reject pending deployments that are waiting for review from a specific person or team, see [`POST /repos/&#123;owner&#125;/&#123;repo&#125;/actions/runs/&#123;run_id&#125;/pending_deployments`](https://docs.github.com/rest/actions/workflow-runs#review-pending-deployments-for-a-workflow-run).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
EXEC github.actions.workflow_runs.review_custom_gates_for_run 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@run_id='{{ run_id }}' --required 
@@json=
'{
"environment_name": "{{ environment_name }}", 
"comment": "{{ comment }}", 
"state": "{{ state }}"
}'
;
```
</TabItem>
<TabItem value="re_run_workflow">

Re-runs your workflow run using its `id`.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
EXEC github.actions.workflow_runs.re_run_workflow 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@run_id='{{ run_id }}' --required 
@@json=
'{
"enable_debug_logging": {{ enable_debug_logging }}
}'
;
```
</TabItem>
<TabItem value="re_run_workflow_failed_jobs">

Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
EXEC github.actions.workflow_runs.re_run_workflow_failed_jobs 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@run_id='{{ run_id }}' --required 
@@json=
'{
"enable_debug_logging": {{ enable_debug_logging }}
}'
;
```
</TabItem>
</Tabs>
