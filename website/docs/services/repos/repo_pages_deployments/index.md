--- 
title: repo_pages_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - repo_pages_deployments
  - repos
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

Creates, updates, deletes, gets or lists a <code>repo_pages_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repo_pages_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.repo_pages_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pages_deployment"
    values={[
        { label: 'get_pages_deployment', value: 'get_pages_deployment' }
    ]}
>
<TabItem value="get_pages_deployment">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the deployment. (deployment_in_progress, syncing_files, finished_file_sync, updating_pages, purging_cdn, deployment_cancelled, deployment_failed, deployment_content_failed, deployment_attempt_error, deployment_lost, succeed)</td>
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
    <td><a href="#get_pages_deployment"><CopyableCode code="get_pages_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pages_deployment_id"><code>pages_deployment_id</code></a></td>
    <td></td>
    <td>Gets the current status of a GitHub Pages deployment.<br /><br />The authenticated user must have read permission for the GitHub Pages site.</td>
</tr>
<tr>
    <td><a href="#cancel_pages_deployment"><CopyableCode code="cancel_pages_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pages_deployment_id"><code>pages_deployment_id</code></a></td>
    <td></td>
    <td>Cancels a GitHub Pages deployment.<br /><br />The authenticated user must have write permissions for the GitHub Pages site.</td>
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
<tr id="parameter-pages_deployment_id">
    <td><CopyableCode code="pages_deployment_id" /></td>
    <td><code></code></td>
    <td>The ID of the Pages deployment. You can also give the commit SHA of the deployment.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pages_deployment"
    values={[
        { label: 'get_pages_deployment', value: 'get_pages_deployment' }
    ]}
>
<TabItem value="get_pages_deployment">

Gets the current status of a GitHub Pages deployment.<br /><br />The authenticated user must have read permission for the GitHub Pages site.

```sql
SELECT
status
FROM github.repos.repo_pages_deployments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND pages_deployment_id = '{{ pages_deployment_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="cancel_pages_deployment"
    values={[
        { label: 'cancel_pages_deployment', value: 'cancel_pages_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="cancel_pages_deployment">

Cancels a GitHub Pages deployment.<br /><br />The authenticated user must have write permissions for the GitHub Pages site.

```sql
INSERT INTO github.repos.repo_pages_deployments (
owner,
repo,
pages_deployment_id
)
SELECT 
'{{ owner }}',
'{{ repo }}',
'{{ pages_deployment_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repo_pages_deployments
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the repo_pages_deployments resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the repo_pages_deployments resource.
    - name: pages_deployment_id
      value: "{{ pages_deployment_id }}"
      description: Required parameter for the repo_pages_deployments resource.
`}</CodeBlock>

</TabItem>
</Tabs>
