--- 
title: runner_jit_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - runner_jit_configs
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

Creates, updates, deletes, gets or lists a <code>runner_jit_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runner_jit_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.runner_jit_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#generate_runner_jitconfig_for_repo"><CopyableCode code="generate_runner_jitconfig_for_repo" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a>, <a href="#parameter-labels"><code>labels</code></a></td>
    <td></td>
    <td>Generates a configuration that can be passed to the runner application at startup.<br /><br />The authenticated user must have admin access to the repository.<br /><br />OAuth tokens and personal access tokens (classic) need the`repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#generate_runner_jitconfig_for_org"><CopyableCode code="generate_runner_jitconfig_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a>, <a href="#parameter-labels"><code>labels</code></a></td>
    <td></td>
    <td>Generates a configuration that can be passed to the runner application at startup.<br /><br />The authenticated user must have admin access to the organization.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="generate_runner_jitconfig_for_repo"
    values={[
        { label: 'generate_runner_jitconfig_for_repo', value: 'generate_runner_jitconfig_for_repo' },
        { label: 'generate_runner_jitconfig_for_org', value: 'generate_runner_jitconfig_for_org' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="generate_runner_jitconfig_for_repo">

Generates a configuration that can be passed to the runner application at startup.<br /><br />The authenticated user must have admin access to the repository.<br /><br />OAuth tokens and personal access tokens (classic) need the`repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.runner_jit_configs (
name,
runner_group_id,
labels,
work_folder,
owner,
repo
)
SELECT 
'{{ name }}' /* required */,
{{ runner_group_id }} /* required */,
'{{ labels }}' /* required */,
'{{ work_folder }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
encoded_jit_config,
runner
;
```
</TabItem>
<TabItem value="generate_runner_jitconfig_for_org">

Generates a configuration that can be passed to the runner application at startup.<br /><br />The authenticated user must have admin access to the organization.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.runner_jit_configs (
name,
runner_group_id,
labels,
work_folder,
org
)
SELECT 
'{{ name }}' /* required */,
{{ runner_group_id }} /* required */,
'{{ labels }}' /* required */,
'{{ work_folder }}',
'{{ org }}'
RETURNING
encoded_jit_config,
runner
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: runner_jit_configs
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the runner_jit_configs resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the runner_jit_configs resource.
    - name: org
      value: "{{ org }}"
      description: Required parameter for the runner_jit_configs resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the new runner.
    - name: runner_group_id
      value: {{ runner_group_id }}
      description: |
        The ID of the runner group to register the runner to.
    - name: labels
      value:
        - "{{ labels }}"
      description: |
        The names of the custom labels to add to the runner. **Minimum items**: 1. **Maximum items**: 100.
    - name: work_folder
      value: "{{ work_folder }}"
      description: |
        The working directory to be used for job execution, relative to the runner install directory.
      default: _work
`}</CodeBlock>

</TabItem>
</Tabs>
