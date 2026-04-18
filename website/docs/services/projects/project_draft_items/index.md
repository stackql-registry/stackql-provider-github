--- 
title: project_draft_items
hide_title: false
hide_table_of_contents: false
keywords:
  - project_draft_items
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

Creates, updates, deletes, gets or lists a <code>project_draft_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_draft_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.projects.project_draft_items" /></td></tr>
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
    <td><a href="#create_draft_item_for_org"><CopyableCode code="create_draft_item_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Create draft issue item for the specified organization owned project.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_draft_item_for_org"
    values={[
        { label: 'create_draft_item_for_org', value: 'create_draft_item_for_org' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_draft_item_for_org">

Create draft issue item for the specified organization owned project.

```sql
INSERT INTO github.projects.project_draft_items (
title,
body,
org,
project_number
)
SELECT 
'{{ title }}' /* required */,
'{{ body }}',
'{{ org }}',
'{{ project_number }}'
RETURNING
id,
node_id,
archived_at,
content,
content_type,
created_at,
creator,
item_url,
project_url,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: project_draft_items
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the project_draft_items resource.
    - name: project_number
      value: {{ project_number }}
      description: Required parameter for the project_draft_items resource.
    - name: title
      value: "{{ title }}"
      description: |
        The title of the draft issue item to create in the project.
    - name: body
      value: "{{ body }}"
      description: |
        The body content of the draft issue item to create in the project.
`}</CodeBlock>

</TabItem>
</Tabs>
