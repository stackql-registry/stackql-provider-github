--- 
title: runner_labels
hide_title: false
hide_table_of_contents: false
keywords:
  - runner_labels
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

Creates, updates, deletes, gets or lists a <code>runner_labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runner_labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.runner_labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_labels_for_self_hosted_runner_for_repo"
    values={[
        { label: 'list_labels_for_self_hosted_runner_for_repo', value: 'list_labels_for_self_hosted_runner_for_repo' },
        { label: 'list_labels_for_self_hosted_runner_for_org', value: 'list_labels_for_self_hosted_runner_for_org' }
    ]}
>
<TabItem value="list_labels_for_self_hosted_runner_for_repo">

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
    <td><CopyableCode code="labels" /></td>
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
<TabItem value="list_labels_for_self_hosted_runner_for_org">

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
    <td><CopyableCode code="labels" /></td>
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
    <td><a href="#list_labels_for_self_hosted_runner_for_repo"><CopyableCode code="list_labels_for_self_hosted_runner_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a></td>
    <td></td>
    <td>Lists all labels for a self-hosted runner configured in a repository.<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_labels_for_self_hosted_runner_for_org"><CopyableCode code="list_labels_for_self_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a></td>
    <td></td>
    <td>Lists all labels for a self-hosted runner configured in an organization.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
</tr>
<tr>
    <td><a href="#add_custom_labels_to_self_hosted_runner_for_repo"><CopyableCode code="add_custom_labels_to_self_hosted_runner_for_repo" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-labels"><code>labels</code></a></td>
    <td></td>
    <td>Adds custom labels to a self-hosted runner configured in a repository.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#add_custom_labels_to_self_hosted_runner_for_org"><CopyableCode code="add_custom_labels_to_self_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-labels"><code>labels</code></a></td>
    <td></td>
    <td>Adds custom labels to a self-hosted runner configured in an organization.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_custom_labels_for_self_hosted_runner_for_repo"><CopyableCode code="set_custom_labels_for_self_hosted_runner_for_repo" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-labels"><code>labels</code></a></td>
    <td></td>
    <td>Remove all previous custom labels and set the new custom labels for a specific<br />self-hosted runner configured in a repository.<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_custom_labels_for_self_hosted_runner_for_org"><CopyableCode code="set_custom_labels_for_self_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-labels"><code>labels</code></a></td>
    <td></td>
    <td>Remove all previous custom labels and set the new custom labels for a specific<br />self-hosted runner configured in an organization.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
</tr>
<tr>
    <td><a href="#remove_custom_label_from_self_hosted_runner_for_repo"><CopyableCode code="remove_custom_label_from_self_hosted_runner_for_repo" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Remove a custom label from a self-hosted runner configured<br />in a repository. Returns the remaining labels from the runner.<br /><br />This endpoint returns a `404 Not Found` status if the custom label is not<br />present on the runner.<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#remove_custom_label_from_self_hosted_runner_for_org"><CopyableCode code="remove_custom_label_from_self_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Remove a custom label from a self-hosted runner configured<br />in an organization. Returns the remaining labels from the runner.<br /><br />This endpoint returns a `404 Not Found` status if the custom label is not<br />present on the runner.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
</tr>
<tr>
    <td><a href="#remove_all_custom_labels_from_self_hosted_runner_for_repo"><CopyableCode code="remove_all_custom_labels_from_self_hosted_runner_for_repo" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a></td>
    <td></td>
    <td>Remove all custom labels from a self-hosted runner configured in a<br />repository. Returns the remaining read-only labels from the runner.<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#remove_all_custom_labels_from_self_hosted_runner_for_org"><CopyableCode code="remove_all_custom_labels_from_self_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_id"><code>runner_id</code></a></td>
    <td></td>
    <td>Remove all custom labels from a self-hosted runner configured in an<br />organization. Returns the remaining read-only labels from the runner.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a self-hosted runner's custom label.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
<tr id="parameter-runner_id">
    <td><CopyableCode code="runner_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the self-hosted runner.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_labels_for_self_hosted_runner_for_repo"
    values={[
        { label: 'list_labels_for_self_hosted_runner_for_repo', value: 'list_labels_for_self_hosted_runner_for_repo' },
        { label: 'list_labels_for_self_hosted_runner_for_org', value: 'list_labels_for_self_hosted_runner_for_org' }
    ]}
>
<TabItem value="list_labels_for_self_hosted_runner_for_repo">

Lists all labels for a self-hosted runner configured in a repository.<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
labels,
total_count
FROM github.actions.runner_labels
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND runner_id = '{{ runner_id }}' -- required
;
```
</TabItem>
<TabItem value="list_labels_for_self_hosted_runner_for_org">

Lists all labels for a self-hosted runner configured in an organization.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
SELECT
labels,
total_count
FROM github.actions.runner_labels
WHERE org = '{{ org }}' -- required
AND runner_id = '{{ runner_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_custom_labels_to_self_hosted_runner_for_repo"
    values={[
        { label: 'add_custom_labels_to_self_hosted_runner_for_repo', value: 'add_custom_labels_to_self_hosted_runner_for_repo' },
        { label: 'add_custom_labels_to_self_hosted_runner_for_org', value: 'add_custom_labels_to_self_hosted_runner_for_org' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_custom_labels_to_self_hosted_runner_for_repo">

Adds custom labels to a self-hosted runner configured in a repository.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.runner_labels (
labels,
owner,
repo,
runner_id
)
SELECT 
'{{ labels }}' /* required */,
'{{ owner }}',
'{{ repo }}',
'{{ runner_id }}'
RETURNING
labels,
total_count
;
```
</TabItem>
<TabItem value="add_custom_labels_to_self_hosted_runner_for_org">

Adds custom labels to a self-hosted runner configured in an organization.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
INSERT INTO github.actions.runner_labels (
labels,
org,
runner_id
)
SELECT 
'{{ labels }}' /* required */,
'{{ org }}',
'{{ runner_id }}'
RETURNING
labels,
total_count
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: runner_labels
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the runner_labels resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the runner_labels resource.
    - name: runner_id
      value: {{ runner_id }}
      description: Required parameter for the runner_labels resource.
    - name: org
      value: "{{ org }}"
      description: Required parameter for the runner_labels resource.
    - name: labels
      value:
        - "{{ labels }}"
      description: |
        The names of the custom labels to add to the runner.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_custom_labels_for_self_hosted_runner_for_repo"
    values={[
        { label: 'set_custom_labels_for_self_hosted_runner_for_repo', value: 'set_custom_labels_for_self_hosted_runner_for_repo' },
        { label: 'set_custom_labels_for_self_hosted_runner_for_org', value: 'set_custom_labels_for_self_hosted_runner_for_org' }
    ]}
>
<TabItem value="set_custom_labels_for_self_hosted_runner_for_repo">

Remove all previous custom labels and set the new custom labels for a specific<br />self-hosted runner configured in a repository.<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.runner_labels
SET 
labels = '{{ labels }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND runner_id = '{{ runner_id }}' --required
AND labels = '{{ labels }}' --required
RETURNING
labels,
total_count;
```
</TabItem>
<TabItem value="set_custom_labels_for_self_hosted_runner_for_org">

Remove all previous custom labels and set the new custom labels for a specific<br />self-hosted runner configured in an organization.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
REPLACE github.actions.runner_labels
SET 
labels = '{{ labels }}'
WHERE 
org = '{{ org }}' --required
AND runner_id = '{{ runner_id }}' --required
AND labels = '{{ labels }}' --required
RETURNING
labels,
total_count;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_custom_label_from_self_hosted_runner_for_repo"
    values={[
        { label: 'remove_custom_label_from_self_hosted_runner_for_repo', value: 'remove_custom_label_from_self_hosted_runner_for_repo' },
        { label: 'remove_custom_label_from_self_hosted_runner_for_org', value: 'remove_custom_label_from_self_hosted_runner_for_org' },
        { label: 'remove_all_custom_labels_from_self_hosted_runner_for_repo', value: 'remove_all_custom_labels_from_self_hosted_runner_for_repo' },
        { label: 'remove_all_custom_labels_from_self_hosted_runner_for_org', value: 'remove_all_custom_labels_from_self_hosted_runner_for_org' }
    ]}
>
<TabItem value="remove_custom_label_from_self_hosted_runner_for_repo">

Remove a custom label from a self-hosted runner configured<br />in a repository. Returns the remaining labels from the runner.<br /><br />This endpoint returns a `404 Not Found` status if the custom label is not<br />present on the runner.<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.runner_labels
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND runner_id = '{{ runner_id }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
<TabItem value="remove_custom_label_from_self_hosted_runner_for_org">

Remove a custom label from a self-hosted runner configured<br />in an organization. Returns the remaining labels from the runner.<br /><br />This endpoint returns a `404 Not Found` status if the custom label is not<br />present on the runner.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
DELETE FROM github.actions.runner_labels
WHERE org = '{{ org }}' --required
AND runner_id = '{{ runner_id }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
<TabItem value="remove_all_custom_labels_from_self_hosted_runner_for_repo">

Remove all custom labels from a self-hosted runner configured in a<br />repository. Returns the remaining read-only labels from the runner.<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.actions.runner_labels
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND runner_id = '{{ runner_id }}' --required
;
```
</TabItem>
<TabItem value="remove_all_custom_labels_from_self_hosted_runner_for_org">

Remove all custom labels from a self-hosted runner configured in an<br />organization. Returns the remaining read-only labels from the runner.<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint. If the repository is private, the `repo` scope is also required.

```sql
DELETE FROM github.actions.runner_labels
WHERE org = '{{ org }}' --required
AND runner_id = '{{ runner_id }}' --required
;
```
</TabItem>
</Tabs>
