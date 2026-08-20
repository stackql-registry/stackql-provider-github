--- 
title: issue_types
hide_title: false
hide_table_of_contents: false
keywords:
  - issue_types
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

Creates, updates, deletes, gets or lists an <code>issue_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issue_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.issue_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_issue_types"
    values={[
        { label: 'list_issue_types', value: 'list_issue_types' }
    ]}
>
<TabItem value="list_issue_types">

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
    <td>The unique identifier of the issue type.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the issue type.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node identifier of the issue type.</td>
</tr>
<tr>
    <td><CopyableCode code="color" /></td>
    <td><code>string</code></td>
    <td>The color of the issue type. (gray, blue, green, yellow, orange, red, pink, purple)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the issue type created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the issue type.</td>
</tr>
<tr>
    <td><CopyableCode code="is_enabled" /></td>
    <td><code>boolean</code></td>
    <td>The enabled state of the issue type.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the issue type last updated.</td>
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
    <td><a href="#list_issue_types"><CopyableCode code="list_issue_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Lists issue types available for a repository (inherited from its organization owner, with any per-repository overrides applied).<br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.<br />Fine-grained access tokens require the "Metadata" repository permission (read).</td>
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

## `SELECT` examples

<Tabs
    defaultValue="list_issue_types"
    values={[
        { label: 'list_issue_types', value: 'list_issue_types' }
    ]}
>
<TabItem value="list_issue_types">

Lists issue types available for a repository (inherited from its organization owner, with any per-repository overrides applied).<br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.<br />Fine-grained access tokens require the "Metadata" repository permission (read).

```sql
SELECT
id,
name,
node_id,
color,
created_at,
description,
is_enabled,
updated_at
FROM github.repos.issue_types
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>
