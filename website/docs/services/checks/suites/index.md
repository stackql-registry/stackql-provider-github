--- 
title: suites
hide_title: false
hide_table_of_contents: false
keywords:
  - suites
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

Creates, updates, deletes, gets or lists a <code>suites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.checks.suites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_suite"
    values={[
        { label: 'get_suite', value: 'get_suite' },
        { label: 'list_suites_for_ref', value: 'list_suites_for_ref' }
    ]}
>
<TabItem value="get_suite">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOkNoZWNrU3VpdGU1)</td>
</tr>
<tr>
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td> (example: d6fde92930d4715a2b49857d24b940956b26d2d3)</td>
</tr>
<tr>
    <td><CopyableCode code="app" /></td>
    <td><code>object</code></td>
    <td>GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub. (title: GitHub app)</td>
</tr>
<tr>
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td> (example: 146e867f55c26428e5f9fade55a9bbf5e95a7912)</td>
</tr>
<tr>
    <td><CopyableCode code="check_runs_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="conclusion" /></td>
    <td><code>string</code></td>
    <td> (success, failure, neutral, cancelled, skipped, timed_out, action_required, startup_failure, stale, ) (example: neutral)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
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
    <td><CopyableCode code="head_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the head commit that is being checked. (example: 009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_check_runs_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pull_requests" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="rerequestable" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="runs_rerequestable" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The phase of the lifecycle that the check suite is currently in. Statuses of waiting, requested, and pending are reserved for GitHub Actions check suites. (queued, in_progress, completed, waiting, requested, pending) (example: completed)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/github/hello-world/check-suites/5)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_suites_for_ref">

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
    <td><CopyableCode code="check_suites" /></td>
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
    <td><a href="#get_suite"><CopyableCode code="get_suite" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-check_suite_id"><code>check_suite_id</code></a></td>
    <td></td>
    <td>Gets a single check suite using its `id`.<br /><br />&gt; [!NOTE]<br />&gt; The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.</td>
</tr>
<tr>
    <td><a href="#list_suites_for_ref"><CopyableCode code="list_suites_for_ref" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ref"><code>ref</code></a></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-check_name"><code>check_name</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name.<br /><br />&gt; [!NOTE]<br />&gt; The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.</td>
</tr>
<tr>
    <td><a href="#create_suite"><CopyableCode code="create_suite" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-head_sha"><code>head_sha</code></a></td>
    <td></td>
    <td>Creates a check suite manually. By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/checks/runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/rest/checks/suites#update-repository-preferences-for-check-suites)".<br /><br />&gt; [!NOTE]<br />&gt; The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.<br /><br />OAuth apps and personal access tokens (classic) cannot use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_suites_preferences"><CopyableCode code="set_suites_preferences" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/checks/suites#create-a-check-suite).<br />You must have admin permissions in the repository to set preferences for check suites.</td>
</tr>
<tr>
    <td><a href="#rerequest_suite"><CopyableCode code="rerequest_suite" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-check_suite_id"><code>check_suite_id</code></a></td>
    <td></td>
    <td>Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.</td>
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
    <td>Filters check suites by GitHub App `id`. (example: 1)</td>
</tr>
<tr id="parameter-check_name">
    <td><CopyableCode code="check_name" /></td>
    <td><code>string</code></td>
    <td>Returns check runs with the specified `name`.</td>
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
    defaultValue="get_suite"
    values={[
        { label: 'get_suite', value: 'get_suite' },
        { label: 'list_suites_for_ref', value: 'list_suites_for_ref' }
    ]}
>
<TabItem value="get_suite">

Gets a single check suite using its `id`.<br /><br />&gt; [!NOTE]<br />&gt; The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.

```sql
SELECT
id,
node_id,
after,
app,
before,
check_runs_url,
conclusion,
created_at,
head_branch,
head_commit,
head_sha,
latest_check_runs_count,
pull_requests,
repository,
rerequestable,
runs_rerequestable,
status,
updated_at,
url
FROM github.checks.suites
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND check_suite_id = '{{ check_suite_id }}' -- required
;
```
</TabItem>
<TabItem value="list_suites_for_ref">

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name.<br /><br />&gt; [!NOTE]<br />&gt; The endpoints to manage checks only look for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint on a private repository.

```sql
SELECT
check_suites,
total_count
FROM github.checks.suites
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ref = '{{ ref }}' -- required
AND app_id = '{{ app_id }}'
AND check_name = '{{ check_name }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_suite"
    values={[
        { label: 'create_suite', value: 'create_suite' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_suite">

Creates a check suite manually. By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/checks/runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/rest/checks/suites#update-repository-preferences-for-check-suites)".<br /><br />&gt; [!NOTE]<br />&gt; The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.<br /><br />OAuth apps and personal access tokens (classic) cannot use this endpoint.

```sql
INSERT INTO github.checks.suites (
head_sha,
owner,
repo
)
SELECT 
'{{ head_sha }}' /* required */,
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
node_id,
after,
app,
before,
check_runs_url,
conclusion,
created_at,
head_branch,
head_commit,
head_sha,
latest_check_runs_count,
pull_requests,
repository,
rerequestable,
runs_rerequestable,
status,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: suites
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the suites resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the suites resource.
    - name: head_sha
      value: "{{ head_sha }}"
      description: |
        The sha of the head commit.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_suites_preferences"
    values={[
        { label: 'set_suites_preferences', value: 'set_suites_preferences' }
    ]}
>
<TabItem value="set_suites_preferences">

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/checks/suites#create-a-check-suite).<br />You must have admin permissions in the repository to set preferences for check suites.

```sql
UPDATE github.checks.suites
SET 
auto_trigger_checks = '{{ auto_trigger_checks }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
RETURNING
preferences,
repository;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rerequest_suite"
    values={[
        { label: 'rerequest_suite', value: 'rerequest_suite' }
    ]}
>
<TabItem value="rerequest_suite">

Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

```sql
EXEC github.checks.suites.rerequest_suite 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@check_suite_id='{{ check_suite_id }}' --required
;
```
</TabItem>
</Tabs>
