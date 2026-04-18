--- 
title: dependency_submission
hide_title: false
hide_table_of_contents: false
keywords:
  - dependency_submission
  - dependency_graph
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

Creates, updates, deletes, gets or lists a <code>dependency_submission</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dependency_submission" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.dependency_graph.dependency_submission" /></td></tr>
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
    <td><a href="#create_repository_snapshot"><CopyableCode code="create_repository_snapshot" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-detector"><code>detector</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-sha"><code>sha</code></a>, <a href="#parameter-job"><code>job</code></a>, <a href="#parameter-scanned"><code>scanned</code></a></td>
    <td></td>
    <td>Create a new snapshot of a repository's dependencies.<br /><br />The authenticated user must have access to the repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_repository_snapshot"
    values={[
        { label: 'create_repository_snapshot', value: 'create_repository_snapshot' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_repository_snapshot">

Create a new snapshot of a repository's dependencies.<br /><br />The authenticated user must have access to the repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.dependency_graph.dependency_submission (
version,
job,
sha,
ref,
detector,
metadata,
manifests,
scanned,
owner,
repo
)
SELECT 
{{ version }} /* required */,
'{{ job }}' /* required */,
'{{ sha }}' /* required */,
'{{ ref }}' /* required */,
'{{ detector }}' /* required */,
'{{ metadata }}',
'{{ manifests }}',
'{{ scanned }}' /* required */,
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
created_at,
message,
result
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dependency_submission
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the dependency_submission resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the dependency_submission resource.
    - name: version
      value: {{ version }}
      description: |
        The version of the repository snapshot submission.
    - name: job
      value:
        id: "{{ id }}"
        correlator: "{{ correlator }}"
        html_url: "{{ html_url }}"
    - name: sha
      value: "{{ sha }}"
      description: |
        The commit SHA associated with this dependency snapshot. Maximum length: 40 characters.
    - name: ref
      value: "{{ ref }}"
      description: |
        The repository branch that triggered this snapshot.
    - name: detector
      description: |
        A description of the detector used.
      value:
        name: "{{ name }}"
        version: "{{ version }}"
        url: "{{ url }}"
    - name: metadata
      value: "{{ metadata }}"
      description: |
        User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
    - name: manifests
      value: "{{ manifests }}"
      description: |
        A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies.
    - name: scanned
      value: "{{ scanned }}"
      description: |
        The time at which the snapshot was scanned.
`}</CodeBlock>

</TabItem>
</Tabs>
