--- 
title: issue_types
hide_title: false
hide_table_of_contents: false
keywords:
  - issue_types
  - orgs
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
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.issue_types" /></td></tr>
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
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Lists all issue types for an organization. OAuth app tokens and personal access tokens (classic) need the read:org scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_issue_type"><CopyableCode code="create_issue_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-is_enabled"><code>is_enabled</code></a></td>
    <td></td>
    <td>Create a new issue type for an organization.<br /><br />You can find out more about issue types in [Managing issue types in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/configuring-issues/managing-issue-types-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_issue_type"><CopyableCode code="update_issue_type" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-issue_type_id"><code>issue_type_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-is_enabled"><code>is_enabled</code></a></td>
    <td></td>
    <td>Updates an issue type for an organization.<br /><br />You can find out more about issue types in [Managing issue types in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/configuring-issues/managing-issue-types-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_issue_type"><CopyableCode code="delete_issue_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-issue_type_id"><code>issue_type_id</code></a></td>
    <td></td>
    <td>Deletes an issue type for an organization.<br /><br />You can find out more about issue types in [Managing issue types in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/configuring-issues/managing-issue-types-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-issue_type_id">
    <td><CopyableCode code="issue_type_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the issue type.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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

Lists all issue types for an organization. OAuth app tokens and personal access tokens (classic) need the read:org scope to use this endpoint.

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
FROM github.orgs.issue_types
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_issue_type"
    values={[
        { label: 'create_issue_type', value: 'create_issue_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_issue_type">

Create a new issue type for an organization.<br /><br />You can find out more about issue types in [Managing issue types in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/configuring-issues/managing-issue-types-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
INSERT INTO github.orgs.issue_types (
name,
is_enabled,
description,
color,
org
)
SELECT 
'{{ name }}' /* required */,
{{ is_enabled }} /* required */,
'{{ description }}',
'{{ color }}',
'{{ org }}'
RETURNING
id,
name,
node_id,
color,
created_at,
description,
is_enabled,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: issue_types
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the issue_types resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the issue type.
    - name: is_enabled
      value: {{ is_enabled }}
      description: |
        Whether or not the issue type is enabled at the organization level.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the issue type.
    - name: color
      value: "{{ color }}"
      description: |
        Color for the issue type.
      valid_values: ['gray', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'purple']
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_issue_type"
    values={[
        { label: 'update_issue_type', value: 'update_issue_type' }
    ]}
>
<TabItem value="update_issue_type">

Updates an issue type for an organization.<br /><br />You can find out more about issue types in [Managing issue types in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/configuring-issues/managing-issue-types-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.orgs.issue_types
SET 
name = '{{ name }}',
is_enabled = {{ is_enabled }},
description = '{{ description }}',
color = '{{ color }}'
WHERE 
org = '{{ org }}' --required
AND issue_type_id = '{{ issue_type_id }}' --required
AND name = '{{ name }}' --required
AND is_enabled = {{ is_enabled }} --required
RETURNING
id,
name,
node_id,
color,
created_at,
description,
is_enabled,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_issue_type"
    values={[
        { label: 'delete_issue_type', value: 'delete_issue_type' }
    ]}
>
<TabItem value="delete_issue_type">

Deletes an issue type for an organization.<br /><br />You can find out more about issue types in [Managing issue types in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/configuring-issues/managing-issue-types-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.orgs.issue_types
WHERE org = '{{ org }}' --required
AND issue_type_id = '{{ issue_type_id }}' --required
;
```
</TabItem>
</Tabs>
