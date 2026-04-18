--- 
title: repo_push_protection_bypasses
hide_title: false
hide_table_of_contents: false
keywords:
  - repo_push_protection_bypasses
  - secret_scanning
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

Creates, updates, deletes, gets or lists a <code>repo_push_protection_bypasses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repo_push_protection_bypasses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.secret_scanning.repo_push_protection_bypasses" /></td></tr>
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
    <td><a href="#create_push_protection_bypass"><CopyableCode code="create_push_protection_bypass" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-reason"><code>reason</code></a>, <a href="#parameter-placeholder_id"><code>placeholder_id</code></a></td>
    <td></td>
    <td>Creates a bypass for a previously push protected secret.<br /><br />The authenticated user must be the original author of the committed secret.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
    defaultValue="create_push_protection_bypass"
    values={[
        { label: 'create_push_protection_bypass', value: 'create_push_protection_bypass' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_push_protection_bypass">

Creates a bypass for a previously push protected secret.<br /><br />The authenticated user must be the original author of the committed secret.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.secret_scanning.repo_push_protection_bypasses (
reason,
placeholder_id,
owner,
repo
)
SELECT 
'{{ reason }}' /* required */,
'{{ placeholder_id }}' /* required */,
'{{ owner }}',
'{{ repo }}'
RETURNING
expire_at,
reason,
token_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repo_push_protection_bypasses
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the repo_push_protection_bypasses resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the repo_push_protection_bypasses resource.
    - name: reason
      value: "{{ reason }}"
      description: |
        The reason for bypassing push protection.
      valid_values: ['false_positive', 'used_in_tests', 'will_fix_later']
    - name: placeholder_id
      value: "{{ placeholder_id }}"
      description: |
        The ID of the push protection bypass placeholder. This value is returned on any push protected routes.
`}</CodeBlock>

</TabItem>
</Tabs>
