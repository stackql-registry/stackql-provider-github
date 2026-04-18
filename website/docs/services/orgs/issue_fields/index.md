--- 
title: issue_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - issue_fields
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

Creates, updates, deletes, gets or lists an <code>issue_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issue_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.issue_fields" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_issue_fields"
    values={[
        { label: 'list_issue_fields', value: 'list_issue_fields' }
    ]}
>
<TabItem value="list_issue_fields">

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
    <td>The unique identifier of the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node identifier of the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the issue field was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The data type of the issue field. (text, date, single_select, number)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>Available options for single select fields.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the issue field was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The visibility of the issue field. Can be `organization_members_only` (visible only within the organization) or `all` (visible to all users who can see issues). (organization_members_only, all)</td>
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
    <td><a href="#list_issue_fields"><CopyableCode code="list_issue_fields" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Lists all issue fields for an organization. OAuth app tokens and personal access tokens (classic) need the read:org scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_issue_field"><CopyableCode code="create_issue_field" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-data_type"><code>data_type</code></a></td>
    <td></td>
    <td>Creates a new issue field for an organization.<br /><br />You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_issue_field"><CopyableCode code="update_issue_field" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-issue_field_id"><code>issue_field_id</code></a></td>
    <td></td>
    <td>Updates an issue field for an organization.<br /><br />You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_issue_field"><CopyableCode code="delete_issue_field" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-issue_field_id"><code>issue_field_id</code></a></td>
    <td></td>
    <td>Deletes an issue field for an organization.<br /><br />You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-issue_field_id">
    <td><CopyableCode code="issue_field_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the issue field.</td>
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
    defaultValue="list_issue_fields"
    values={[
        { label: 'list_issue_fields', value: 'list_issue_fields' }
    ]}
>
<TabItem value="list_issue_fields">

Lists all issue fields for an organization. OAuth app tokens and personal access tokens (classic) need the read:org scope to use this endpoint.

```sql
SELECT
id,
name,
node_id,
created_at,
data_type,
description,
options,
updated_at,
visibility
FROM github.orgs.issue_fields
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_issue_field"
    values={[
        { label: 'create_issue_field', value: 'create_issue_field' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_issue_field">

Creates a new issue field for an organization.<br /><br />You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
INSERT INTO github.orgs.issue_fields (
name,
description,
data_type,
visibility,
options,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ data_type }}' /* required */,
'{{ visibility }}',
'{{ options }}',
'{{ org }}'
RETURNING
id,
name,
node_id,
created_at,
data_type,
description,
options,
updated_at,
visibility
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: issue_fields
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the issue_fields resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the issue field.
    - name: description
      value: "{{ description }}"
      description: |
        Description of the issue field.
    - name: data_type
      value: "{{ data_type }}"
      description: |
        The data type of the issue field.
      valid_values: ['text', 'date', 'single_select', 'number']
    - name: visibility
      value: "{{ visibility }}"
      description: |
        The visibility of the issue field. Can be \`organization_members_only\` (visible only within the organization) or \`all\` (visible to all users who can see issues). Only used when the visibility settings feature is enabled. Defaults to \`organization_members_only\`.
      valid_values: ['organization_members_only', 'all']
    - name: options
      description: |
        Options for single select fields. Required when data_type is 'single_select'.
      value:
        - name: "{{ name }}"
          description: "{{ description }}"
          color: "{{ color }}"
          priority: {{ priority }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_issue_field"
    values={[
        { label: 'update_issue_field', value: 'update_issue_field' }
    ]}
>
<TabItem value="update_issue_field">

Updates an issue field for an organization.<br /><br />You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
UPDATE github.orgs.issue_fields
SET 
name = '{{ name }}',
description = '{{ description }}',
visibility = '{{ visibility }}',
options = '{{ options }}'
WHERE 
org = '{{ org }}' --required
AND issue_field_id = '{{ issue_field_id }}' --required
RETURNING
id,
name,
node_id,
created_at,
data_type,
description,
options,
updated_at,
visibility;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_issue_field"
    values={[
        { label: 'delete_issue_field', value: 'delete_issue_field' }
    ]}
>
<TabItem value="delete_issue_field">

Deletes an issue field for an organization.<br /><br />You can find out more about issue fields in [Managing issue fields in an organization](https://docs.github.com/issues/tracking-your-work-with-issues/using-issues/managing-issue-fields-in-an-organization).<br /><br />To use this endpoint, the authenticated user must be an administrator for the organization. OAuth app tokens and<br />personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.orgs.issue_fields
WHERE org = '{{ org }}' --required
AND issue_field_id = '{{ issue_field_id }}' --required
;
```
</TabItem>
</Tabs>
