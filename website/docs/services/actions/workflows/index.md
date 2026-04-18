--- 
title: workflows
hide_title: false
hide_table_of_contents: false
keywords:
  - workflows
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

Creates, updates, deletes, gets or lists a <code>workflows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workflows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.workflows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_repo_workflows', value: 'list_repo_workflows' }
    ]}
>
<TabItem value="get_workflow">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: CI)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDg6V29ya2Zsb3cxMg==)</td>
</tr>
<tr>
    <td><CopyableCode code="badge_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/actions/setup-ruby/workflows/CI/badge.svg)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2019-12-06T14:20:20.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2019-12-06T14:20:20.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/actions/setup-ruby/blob/master/.github/workflows/ruby.yaml)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td> (example: ruby.yaml)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (active, deleted, disabled_fork, disabled_inactivity, disabled_manually) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2019-12-06T14:20:20.000Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/actions/setup-ruby/workflows/5)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repo_workflows">

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
    <td><CopyableCode code="workflows" /></td>
    <td><code>array</code></td>
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
    <td><a href="#get_workflow"><CopyableCode code="get_workflow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a></td>
    <td></td>
    <td>Gets a specific workflow. You can replace `workflow_id` with the workflow<br />file name. For example, you could use `main.yaml`.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#list_repo_workflows"><CopyableCode code="list_repo_workflows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the workflows in a repository.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#create_workflow_dispatch"><CopyableCode code="create_workflow_dispatch" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a>, <a href="#parameter-ref"><code>ref</code></a></td>
    <td></td>
    <td>You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.<br /><br />You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](https://docs.github.com/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](https://docs.github.com/actions/reference/events-that-trigger-workflows#workflow_dispatch)."<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#disable_workflow"><CopyableCode code="disable_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a></td>
    <td></td>
    <td>Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#enable_workflow"><CopyableCode code="enable_workflow" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-workflow_id"><code>workflow_id</code></a></td>
    <td></td>
    <td>Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-workflow_id">
    <td><CopyableCode code="workflow_id" /></td>
    <td><code></code></td>
    <td>The ID of the workflow. You can also pass the workflow file name as a string.</td>
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
    defaultValue="get_workflow"
    values={[
        { label: 'get_workflow', value: 'get_workflow' },
        { label: 'list_repo_workflows', value: 'list_repo_workflows' }
    ]}
>
<TabItem value="get_workflow">

Gets a specific workflow. You can replace `workflow_id` with the workflow<br />file name. For example, you could use `main.yaml`.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
id,
name,
node_id,
badge_url,
created_at,
deleted_at,
html_url,
path,
state,
updated_at,
url
FROM github.actions.workflows
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND workflow_id = '{{ workflow_id }}' -- required
;
```
</TabItem>
<TabItem value="list_repo_workflows">

Lists the workflows in a repository.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
total_count,
workflows
FROM github.actions.workflows
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workflow_dispatch"
    values={[
        { label: 'create_workflow_dispatch', value: 'create_workflow_dispatch' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workflow_dispatch">

You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.<br /><br />You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](https://docs.github.com/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](https://docs.github.com/actions/reference/events-that-trigger-workflows#workflow_dispatch)."<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.workflows (
ref,
inputs,
return_run_details,
owner,
repo,
workflow_id
)
SELECT 
'{{ ref }}' /* required */,
'{{ inputs }}',
{{ return_run_details }},
'{{ owner }}',
'{{ repo }}',
'{{ workflow_id }}'
RETURNING
workflow_run_id,
html_url,
run_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workflows
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the workflows resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the workflows resource.
    - name: workflow_id
      value: "{{ workflow_id }}"
      description: Required parameter for the workflows resource.
    - name: ref
      value: "{{ ref }}"
      description: |
        The git reference for the workflow. The reference can be a branch or tag name.
    - name: inputs
      value: "{{ inputs }}"
      description: |
        Input keys and values configured in the workflow file. The maximum number of properties is 25. Any default properties configured in the workflow file will be used when \`inputs\` are omitted.
    - name: return_run_details
      value: {{ return_run_details }}
      description: |
        Whether the response should include the workflow run ID and URLs.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_workflow"
    values={[
        { label: 'disable_workflow', value: 'disable_workflow' },
        { label: 'enable_workflow', value: 'enable_workflow' }
    ]}
>
<TabItem value="disable_workflow">

Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
EXEC github.actions.workflows.disable_workflow 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@workflow_id='{{ workflow_id }}' --required
;
```
</TabItem>
<TabItem value="enable_workflow">

Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
EXEC github.actions.workflows.enable_workflow 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@workflow_id='{{ workflow_id }}' --required
;
```
</TabItem>
</Tabs>
