--- 
title: runs
hide_title: false
hide_table_of_contents: false
keywords:
  - runs
  - checks
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

Creates, updates, deletes, gets or lists a <code>runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.checks.runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_for_suite', value: 'list_for_suite' },
        { label: 'list_for_ref', value: 'list_for_ref' }
    ]}
>
<TabItem value="get">

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
    <td><code>integer (int64)</code></td>
    <td>The id of the check.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the check. (example: test-coverage)</td>
</tr>
<tr>
    <td><CopyableCode code="external_id" /></td>
    <td><code>string</code></td>
    <td> (example: 42)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDg6Q2hlY2tSdW40)</td>
</tr>
<tr>
    <td><CopyableCode code="app" /></td>
    <td><code>object</code></td>
    <td>GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub. (title: GitHub app)</td>
</tr>
<tr>
    <td><CopyableCode code="check_suite" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2018-05-04T01:14:52Z)</td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td> (success, failure, neutral, cancelled, skipped, timed_out, action_required) (example: neutral)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment" /></td>
    <td><code>object</code></td>
    <td>A deployment created as the result of an Actions check run from a workflow that references an environment (title: Deployment)</td>
</tr>
<tr>
    <td><CopyableCode code="details_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="head_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit that is being checked. (example: 009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/github/hello-world/runs/4)</td>
</tr>
<tr>
    <td><CopyableCode code="output" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pull_requests" /></td>
    <td><code>array</code></td>
    <td>Pull requests that are open with a `head_sha` or `head_branch` that matches the check. The returned pull requests do not necessarily indicate pull requests that triggered the check.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2018-05-04T01:14:52Z)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The phase of the lifecycle that the check is currently in. Statuses of waiting, requested, and pending are reserved for GitHub Actions check runs. (queued, in_progress, completed, waiting, requested, pending) (example: queued)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/github/hello-world/check-runs/4)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_for_suite">

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
    <td><CopyableCode code="check_runs" /></td>
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
<TabItem value="list_for_ref">

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
    <td><CopyableCode code="check_runs" /></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-check_run_id"><code>check_run_id</code></a></td>
    <td></td>
    <td>Gets a single check run using its `id`.<br /><br />&gt; [!NOTE]<br />&gt; The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.</td>
</tr>
<tr>
    <td><a href="#list_for_suite"><CopyableCode code="list_for_suite" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-check_suite_id"><code>check_suite_id</code></a></td>
    <td><a href="#parameter-check_name"><code>check_name</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists check runs for a check suite using its `id`.<br /><br />&gt; [!NOTE]<br />&gt; The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.</td>
</tr>
<tr>
    <td><a href="#list_for_ref"><CopyableCode code="list_for_ref" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ref"><code>ref</code></a></td>
    <td><a href="#parameter-check_name"><code>check_name</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-filter"><code>filter</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-app_id"><code>app_id</code></a></td>
    <td>Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name.<br /><br />&gt; [!NOTE]<br />&gt; The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.<br /><br />If there are more than 1000 check suites on a single git reference, this endpoint will limit check runs to the 1000 most recent check suites. To iterate over all possible check runs, use the [List check suites for a Git reference](https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference) endpoint and provide the `check_suite_id` parameter to the [List check runs in a check suite](https://docs.github.com/rest/reference/checks#list-check-runs-in-a-check-suite) endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-head_sha"><code>head_sha</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-conclusion"><code>conclusion</code></a></td>
    <td></td>
    <td>Creates a new check run for a specific commit in a repository.<br /><br />To create a check run, you must use a GitHub App. OAuth apps and authenticated users are not able to create a check suite.<br /><br />In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.<br /><br />&gt; [!NOTE]<br />&gt; The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-check_run_id"><code>check_run_id</code></a>, <a href="#parameter-conclusion"><code>conclusion</code></a></td>
    <td></td>
    <td>Updates a check run for a specific commit in a repository.<br /><br />&gt; [!NOTE]<br />&gt; The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.<br /><br />OAuth apps and personal access tokens (classic) cannot use this endpoint.</td>
</tr>
<tr>
    <td><a href="#rerequest_run"><CopyableCode code="rerequest_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-check_run_id"><code>check_run_id</code></a></td>
    <td></td>
    <td>Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, the `status` of the check suite it belongs to is reset to `queued` and the `conclusion` is cleared. The check run itself is not updated. GitHub apps recieving the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) with the `rerequested` action should then decide if the check run should be reset or updated and call the [update `check_run` endpoint](https://docs.github.com/rest/checks/runs#update-a-check-run) to update the check_run if desired.<br /><br />For more information about how to re-run GitHub Actions jobs, see "[Re-run a job from a workflow run](https://docs.github.com/rest/actions/workflow-runs#re-run-a-job-from-a-workflow-run)".</td>
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
<tr id="parameter-check_run_id">
    <td><CopyableCode code="check_run_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the check run.</td>
</tr>
<tr id="parameter-check_suite_id">
    <td><CopyableCode code="check_suite_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the check suite.</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-check_name">
    <td><CopyableCode code="check_name" /></td>
    <td><code>string</code></td>
    <td>Returns check runs with the specified `name`.</td>
</tr>
<tr id="parameter-filter">
    <td><CopyableCode code="filter" /></td>
    <td><code>string</code></td>
    <td>Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.</td>
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
    <td>Returns check runs with the specified `status`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_for_suite', value: 'list_for_suite' },
        { label: 'list_for_ref', value: 'list_for_ref' }
    ]}
>
<TabItem value="get">

Gets a single check run using its `id`.<br /><br />&gt; [!NOTE]<br />&gt; The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.

```sql
SELECT
id,
name,
external_id,
node_id,
app,
check_suite,
completed_at,
conclusion,
deployment,
details_url,
head_sha,
html_url,
output,
pull_requests,
started_at,
status,
url
FROM github.checks.runs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND check_run_id = '{{ check_run_id }}' -- required
;
```
</TabItem>
<TabItem value="list_for_suite">

Lists check runs for a check suite using its `id`.<br /><br />&gt; [!NOTE]<br />&gt; The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.

```sql
SELECT
check_runs,
total_count
FROM github.checks.runs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND check_suite_id = '{{ check_suite_id }}' -- required
AND check_name = '{{ check_name }}'
AND status = '{{ status }}'
AND filter = '{{ filter }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_for_ref">

Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name.<br /><br />&gt; [!NOTE]<br />&gt; The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.<br /><br />If there are more than 1000 check suites on a single git reference, this endpoint will limit check runs to the 1000 most recent check suites. To iterate over all possible check runs, use the [List check suites for a Git reference](https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference) endpoint and provide the `check_suite_id` parameter to the [List check runs in a check suite](https://docs.github.com/rest/reference/checks#list-check-runs-in-a-check-suite) endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.

```sql
SELECT
check_runs,
total_count
FROM github.checks.runs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ref = '{{ ref }}' -- required
AND check_name = '{{ check_name }}'
AND status = '{{ status }}'
AND filter = '{{ filter }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND app_id = '{{ app_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Creates a new check run for a specific commit in a repository.<br /><br />To create a check run, you must use a GitHub App. OAuth apps and authenticated users are not able to create a check suite.<br /><br />In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.<br /><br />&gt; [!NOTE]<br />&gt; The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

```sql
INSERT INTO github.checks.runs (
name,
head_sha,
details_url,
external_id,
status,
started_at,
conclusion,
completed_at,
output,
actions,
owner,
repo
)
SELECT 
'{{ name }}' /* required */,
'{{ head_sha }}' /* required */,
'{{ details_url }}',
'{{ external_id }}',
'{{ status }}' /* required */,
'{{ started_at }}',
'{{ conclusion }}' /* required */,
'{{ completed_at }}',
'{{ output }}',
'{{ actions }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
name,
external_id,
node_id,
app,
check_suite,
completed_at,
conclusion,
deployment,
details_url,
head_sha,
html_url,
output,
pull_requests,
started_at,
status,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: runs
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the runs resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the runs resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the check. For example, "code-coverage".
    - name: head_sha
      value: "{{ head_sha }}"
      description: |
        The SHA of the commit.
    - name: details_url
      value: "{{ details_url }}"
      description: |
        The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
    - name: external_id
      value: "{{ external_id }}"
      description: |
        A reference for the run on the integrator's system.
    - name: status
      value: "{{ status }}"
      description: |
        The current status of the check run. Only GitHub Actions can set a status of \`waiting\`, \`pending\`, or \`requested\`.
      valid_values: ['queued', 'in_progress', 'completed', 'waiting', 'requested', 'pending']
      default: queued
    - name: started_at
      value: "{{ started_at }}"
      description: |
        The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.
    - name: conclusion
      value: "{{ conclusion }}"
      description: |
        **Required if you provide \`completed_at\` or a \`status\` of \`completed\`**. The final conclusion of the check.
        **Note:** Providing \`conclusion\` will automatically set the \`status\` parameter to \`completed\`. You cannot change a check run conclusion to \`stale\`, only GitHub can set this.
      valid_values: ['action_required', 'cancelled', 'failure', 'neutral', 'success', 'skipped', 'stale', 'timed_out']
    - name: completed_at
      value: "{{ completed_at }}"
      description: |
        The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.
    - name: output
      description: |
        Check runs can accept a variety of data in the \`output\` object, including a \`title\` and \`summary\` and can optionally provide descriptive details about the run.
      value:
        title: "{{ title }}"
        summary: "{{ summary }}"
        text: "{{ text }}"
        annotations:
          - path: "{{ path }}"
            start_line: {{ start_line }}
            end_line: {{ end_line }}
            start_column: {{ start_column }}
            end_column: {{ end_column }}
            annotation_level: "{{ annotation_level }}"
            message: "{{ message }}"
            title: "{{ title }}"
            raw_details: "{{ raw_details }}"
        images:
          - alt: "{{ alt }}"
            image_url: "{{ image_url }}"
            caption: "{{ caption }}"
    - name: actions
      description: |
        Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [\`check_run.requested_action\` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a \`label\`, \`identifier\` and \`description\`. A maximum of three actions are accepted. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/guides/using-the-rest-api-to-interact-with-checks#check-runs-and-requested-actions)."
      value:
        - label: "{{ label }}"
          description: "{{ description }}"
          identifier: "{{ identifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a check run for a specific commit in a repository.<br /><br />&gt; [!NOTE]<br />&gt; The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.<br /><br />OAuth apps and personal access tokens (classic) cannot use this endpoint.

```sql
UPDATE github.checks.runs
SET 
name = '{{ name }}',
details_url = '{{ details_url }}',
external_id = '{{ external_id }}',
started_at = '{{ started_at }}',
status = '{{ status }}',
conclusion = '{{ conclusion }}',
completed_at = '{{ completed_at }}',
output = '{{ output }}',
actions = '{{ actions }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND check_run_id = '{{ check_run_id }}' --required
AND conclusion = '{{ conclusion }}' --required
RETURNING
id,
name,
external_id,
node_id,
app,
check_suite,
completed_at,
conclusion,
deployment,
details_url,
head_sha,
html_url,
output,
pull_requests,
started_at,
status,
url;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rerequest_run"
    values={[
        { label: 'rerequest_run', value: 'rerequest_run' }
    ]}
>
<TabItem value="rerequest_run">

Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, the `status` of the check suite it belongs to is reset to `queued` and the `conclusion` is cleared. The check run itself is not updated. GitHub apps recieving the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) with the `rerequested` action should then decide if the check run should be reset or updated and call the [update `check_run` endpoint](https://docs.github.com/rest/checks/runs#update-a-check-run) to update the check_run if desired.<br /><br />For more information about how to re-run GitHub Actions jobs, see "[Re-run a job from a workflow run](https://docs.github.com/rest/actions/workflow-runs#re-run-a-job-from-a-workflow-run)".

```sql
EXEC github.checks.runs.rerequest_run 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@check_run_id='{{ check_run_id }}' --required
;
```
</TabItem>
</Tabs>
