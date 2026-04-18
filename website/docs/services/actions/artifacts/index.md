--- 
title: artifacts
hide_title: false
hide_table_of_contents: false
keywords:
  - artifacts
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

Creates, updates, deletes, gets or lists an <code>artifacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="artifacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.artifacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_artifact"
    values={[
        { label: 'get_artifact', value: 'get_artifact' },
        { label: 'list_workflow_run_artifacts', value: 'list_workflow_run_artifacts' },
        { label: 'list_artifacts_for_repo', value: 'list_artifacts_for_repo' }
    ]}
>
<TabItem value="get_artifact">

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
    <td>The name of the artifact. (example: AdventureWorks.Framework)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOkNoZWNrU3VpdGU1)</td>
</tr>
<tr>
    <td><CopyableCode code="archive_download_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/github/hello-world/actions/artifacts/5/zip)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="digest" /></td>
    <td><code>string</code></td>
    <td>The SHA256 digest of the artifact. This field will only be populated on artifacts uploaded with upload-artifact v4 or newer. For older versions, this field will be null. (example: sha256:cfc3236bdad15b5898bca8408945c9e19e1917da8704adc20eaa618444290a8c)</td>
</tr>
<tr>
    <td><CopyableCode code="expired" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the artifact has expired.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size_in_bytes" /></td>
    <td><code>integer</code></td>
    <td>The size in bytes of the artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/github/hello-world/actions/artifacts/5)</td>
</tr>
<tr>
    <td><CopyableCode code="workflow_run" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workflow_run_artifacts">

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
    <td><CopyableCode code="artifacts" /></td>
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
<TabItem value="list_artifacts_for_repo">

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
    <td><CopyableCode code="artifacts" /></td>
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
    <td><a href="#get_artifact"><CopyableCode code="get_artifact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-artifact_id"><code>artifact_id</code></a></td>
    <td></td>
    <td>Gets a specific artifact for a workflow run.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_workflow_run_artifacts"><CopyableCode code="list_workflow_run_artifacts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-run_id"><code>run_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-direction"><code>direction</code></a></td>
    <td>Lists artifacts for a workflow run.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#list_artifacts_for_repo"><CopyableCode code="list_artifacts_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Lists all artifacts for a repository.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#delete_artifact"><CopyableCode code="delete_artifact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-artifact_id"><code>artifact_id</code></a></td>
    <td></td>
    <td>Deletes an artifact for a workflow run.<br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-artifact_id">
    <td><CopyableCode code="artifact_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the artifact.</td>
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
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name field of an artifact. When specified, only artifacts with this name will be returned.</td>
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
    defaultValue="get_artifact"
    values={[
        { label: 'get_artifact', value: 'get_artifact' },
        { label: 'list_workflow_run_artifacts', value: 'list_workflow_run_artifacts' },
        { label: 'list_artifacts_for_repo', value: 'list_artifacts_for_repo' }
    ]}
>
<TabItem value="get_artifact">

Gets a specific artifact for a workflow run.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
id,
name,
node_id,
archive_download_url,
created_at,
digest,
expired,
expires_at,
size_in_bytes,
updated_at,
url,
workflow_run
FROM github.actions.artifacts
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND artifact_id = '{{ artifact_id }}' -- required
;
```
</TabItem>
<TabItem value="list_workflow_run_artifacts">

Lists artifacts for a workflow run.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
artifacts,
total_count
FROM github.actions.artifacts
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND run_id = '{{ run_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND name = '{{ name }}'
AND direction = '{{ direction }}'
;
```
</TabItem>
<TabItem value="list_artifacts_for_repo">

Lists all artifacts for a repository.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
artifacts,
total_count
FROM github.actions.artifacts
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_artifact"
    values={[
        { label: 'delete_artifact', value: 'delete_artifact' }
    ]}
>
<TabItem value="delete_artifact">

Deletes an artifact for a workflow run.<br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.artifacts
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND artifact_id = '{{ artifact_id }}' --required
;
```
</TabItem>
</Tabs>
