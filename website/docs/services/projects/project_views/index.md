--- 
title: project_views
hide_title: false
hide_table_of_contents: false
keywords:
  - project_views
  - projects
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

Creates, updates, deletes, gets or lists a <code>project_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.projects.project_views" /></td></tr>
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
    <td><a href="#create_view_for_org"><CopyableCode code="create_view_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-layout"><code>layout</code></a></td>
    <td></td>
    <td>Create a new view in an organization-owned project. Views allow you to customize how items in a project are displayed and filtered.</td>
</tr>
<tr>
    <td><a href="#create_view_for_user"><CopyableCode code="create_view_for_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-layout"><code>layout</code></a></td>
    <td></td>
    <td>Create a new view in a user-owned project. Views allow you to customize how items in a project are displayed and filtered.</td>
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
<tr id="parameter-project_number">
    <td><CopyableCode code="project_number" /></td>
    <td><code>integer</code></td>
    <td>The project's number.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the user.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_view_for_org"
    values={[
        { label: 'create_view_for_org', value: 'create_view_for_org' },
        { label: 'create_view_for_user', value: 'create_view_for_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_view_for_org">

Create a new view in an organization-owned project. Views allow you to customize how items in a project are displayed and filtered.

```sql
INSERT INTO github.projects.project_views (
name,
layout,
filter,
visible_fields,
org,
project_number
)
SELECT 
'{{ name }}' /* required */,
'{{ layout }}' /* required */,
'{{ filter }}',
'{{ visible_fields }}',
'{{ org }}',
'{{ project_number }}'
RETURNING
id,
name,
node_id,
created_at,
creator,
filter,
group_by,
html_url,
layout,
number,
project_url,
sort_by,
updated_at,
vertical_group_by,
visible_fields
;
```
</TabItem>
<TabItem value="create_view_for_user">

Create a new view in a user-owned project. Views allow you to customize how items in a project are displayed and filtered.

```sql
INSERT INTO github.projects.project_views (
name,
layout,
filter,
visible_fields,
user_id,
project_number
)
SELECT 
'{{ name }}' /* required */,
'{{ layout }}' /* required */,
'{{ filter }}',
'{{ visible_fields }}',
'{{ user_id }}',
'{{ project_number }}'
RETURNING
id,
name,
node_id,
created_at,
creator,
filter,
group_by,
html_url,
layout,
number,
project_url,
sort_by,
updated_at,
vertical_group_by,
visible_fields
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: project_views
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the project_views resource.
    - name: project_number
      value: {{ project_number }}
      description: Required parameter for the project_views resource.
    - name: user_id
      value: "{{ user_id }}"
      description: Required parameter for the project_views resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the view.
    - name: layout
      value: "{{ layout }}"
      description: |
        The layout of the view.
      valid_values: ['table', 'board', 'roadmap']
    - name: filter
      value: "{{ filter }}"
      description: |
        The filter query for the view. See [Filtering projects](https://docs.github.com/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects) for more information.
    - name: visible_fields
      value:
        - {{ visible_fields }}
      description: |
        \`visible_fields\` is not applicable to \`roadmap\` layout views.
        For \`table\` and \`board\` layouts, this represents the field IDs that should be visible in the view. If not provided, the default visible fields will be used.
`}</CodeBlock>

</TabItem>
</Tabs>
