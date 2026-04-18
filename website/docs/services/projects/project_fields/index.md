--- 
title: project_fields
hide_title: false
hide_table_of_contents: false
keywords:
  - project_fields
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

Creates, updates, deletes, gets or lists a <code>project_fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.projects.project_fields" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_field_for_org"
    values={[
        { label: 'get_field_for_org', value: 'get_field_for_org' },
        { label: 'get_field_for_user', value: 'get_field_for_user' },
        { label: 'list_fields_for_org', value: 'list_fields_for_org' },
        { label: 'list_fields_for_user', value: 'list_fields_for_user' }
    ]}
>
<TabItem value="get_field_for_org">

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
    <td>The unique identifier of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_field_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for iteration fields.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the field was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The field's data type. (assignees, linked_pull_requests, reviewers, labels, milestone, repository, title, text, single_select, number, date, iteration, issue_type, parent_issue, sub_issues_progress)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>The options available for single select fields.</td>
</tr>
<tr>
    <td><CopyableCode code="project_url" /></td>
    <td><code>string</code></td>
    <td>The API URL of the project that contains the field. (example: https://api.github.com/projects/1)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the field was last updated. (example: 2022-04-28T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_field_for_user">

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
    <td>The unique identifier of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_field_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for iteration fields.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the field was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The field's data type. (assignees, linked_pull_requests, reviewers, labels, milestone, repository, title, text, single_select, number, date, iteration, issue_type, parent_issue, sub_issues_progress)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>The options available for single select fields.</td>
</tr>
<tr>
    <td><CopyableCode code="project_url" /></td>
    <td><code>string</code></td>
    <td>The API URL of the project that contains the field. (example: https://api.github.com/projects/1)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the field was last updated. (example: 2022-04-28T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fields_for_org">

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
    <td>The unique identifier of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_field_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for iteration fields.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the field was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The field's data type. (assignees, linked_pull_requests, reviewers, labels, milestone, repository, title, text, single_select, number, date, iteration, issue_type, parent_issue, sub_issues_progress)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>The options available for single select fields.</td>
</tr>
<tr>
    <td><CopyableCode code="project_url" /></td>
    <td><code>string</code></td>
    <td>The API URL of the project that contains the field. (example: https://api.github.com/projects/1)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the field was last updated. (example: 2022-04-28T12:00:00Z)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fields_for_user">

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
    <td>The unique identifier of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_field_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the field.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Configuration for iteration fields.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the field was created. (example: 2022-04-28T12:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The field's data type. (assignees, linked_pull_requests, reviewers, labels, milestone, repository, title, text, single_select, number, date, iteration, issue_type, parent_issue, sub_issues_progress)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>The options available for single select fields.</td>
</tr>
<tr>
    <td><CopyableCode code="project_url" /></td>
    <td><code>string</code></td>
    <td>The API URL of the project that contains the field. (example: https://api.github.com/projects/1)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the field was last updated. (example: 2022-04-28T12:00:00Z)</td>
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
    <td><a href="#get_field_for_org"><CopyableCode code="get_field_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Get a specific field for an organization-owned project.</td>
</tr>
<tr>
    <td><a href="#get_field_for_user"><CopyableCode code="get_field_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Get a specific field for a user-owned project.</td>
</tr>
<tr>
    <td><a href="#list_fields_for_org"><CopyableCode code="list_fields_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>List all fields for a specific organization-owned project.</td>
</tr>
<tr>
    <td><a href="#list_fields_for_user"><CopyableCode code="list_fields_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>List all fields for a specific user-owned project.</td>
</tr>
<tr>
    <td><a href="#add_field_for_org"><CopyableCode code="add_field_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-org"><code>org</code></a>, <a href="#parameter-issue_field_id"><code>issue_field_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-data_type"><code>data_type</code></a>, <a href="#parameter-single_select_options"><code>single_select_options</code></a>, <a href="#parameter-iteration_configuration"><code>iteration_configuration</code></a></td>
    <td></td>
    <td>Add a field to an organization-owned project.</td>
</tr>
<tr>
    <td><a href="#add_field_for_user"><CopyableCode code="add_field_for_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-project_number"><code>project_number</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-data_type"><code>data_type</code></a>, <a href="#parameter-single_select_options"><code>single_select_options</code></a>, <a href="#parameter-iteration_configuration"><code>iteration_configuration</code></a></td>
    <td></td>
    <td>Add a field to a specified user owned project.</td>
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
<tr id="parameter-field_id">
    <td><CopyableCode code="field_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the field.</td>
</tr>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
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
    defaultValue="get_field_for_org"
    values={[
        { label: 'get_field_for_org', value: 'get_field_for_org' },
        { label: 'get_field_for_user', value: 'get_field_for_user' },
        { label: 'list_fields_for_org', value: 'list_fields_for_org' },
        { label: 'list_fields_for_user', value: 'list_fields_for_user' }
    ]}
>
<TabItem value="get_field_for_org">

Get a specific field for an organization-owned project.

```sql
SELECT
id,
name,
issue_field_id,
node_id,
configuration,
created_at,
data_type,
options,
project_url,
updated_at
FROM github.projects.project_fields
WHERE project_number = '{{ project_number }}' -- required
AND field_id = '{{ field_id }}' -- required
AND org = '{{ org }}' -- required
;
```
</TabItem>
<TabItem value="get_field_for_user">

Get a specific field for a user-owned project.

```sql
SELECT
id,
name,
issue_field_id,
node_id,
configuration,
created_at,
data_type,
options,
project_url,
updated_at
FROM github.projects.project_fields
WHERE project_number = '{{ project_number }}' -- required
AND field_id = '{{ field_id }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="list_fields_for_org">

List all fields for a specific organization-owned project.

```sql
SELECT
id,
name,
issue_field_id,
node_id,
configuration,
created_at,
data_type,
options,
project_url,
updated_at
FROM github.projects.project_fields
WHERE project_number = '{{ project_number }}' -- required
AND org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
;
```
</TabItem>
<TabItem value="list_fields_for_user">

List all fields for a specific user-owned project.

```sql
SELECT
id,
name,
issue_field_id,
node_id,
configuration,
created_at,
data_type,
options,
project_url,
updated_at
FROM github.projects.project_fields
WHERE project_number = '{{ project_number }}' -- required
AND username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_field_for_org"
    values={[
        { label: 'add_field_for_org', value: 'add_field_for_org' },
        { label: 'add_field_for_user', value: 'add_field_for_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_field_for_org">

Add a field to an organization-owned project.

```sql
INSERT INTO github.projects.project_fields (
issue_field_id,
name,
data_type,
single_select_options,
iteration_configuration,
project_number,
org
)
SELECT 
{{ issue_field_id }} /* required */,
'{{ name }}' /* required */,
'{{ data_type }}' /* required */,
'{{ single_select_options }}' /* required */,
'{{ iteration_configuration }}' /* required */,
'{{ project_number }}',
'{{ org }}'
RETURNING
id,
name,
issue_field_id,
node_id,
configuration,
created_at,
data_type,
options,
project_url,
updated_at
;
```
</TabItem>
<TabItem value="add_field_for_user">

Add a field to a specified user owned project.

```sql
INSERT INTO github.projects.project_fields (
name,
data_type,
single_select_options,
iteration_configuration,
username,
project_number
)
SELECT 
'{{ name }}' /* required */,
'{{ data_type }}' /* required */,
'{{ single_select_options }}' /* required */,
'{{ iteration_configuration }}' /* required */,
'{{ username }}',
'{{ project_number }}'
RETURNING
id,
name,
issue_field_id,
node_id,
configuration,
created_at,
data_type,
options,
project_url,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: project_fields
  props:
    - name: project_number
      value: {{ project_number }}
      description: Required parameter for the project_fields resource.
    - name: org
      value: "{{ org }}"
      description: Required parameter for the project_fields resource.
    - name: username
      value: "{{ username }}"
      description: Required parameter for the project_fields resource.
    - name: issue_field_id
      value: {{ issue_field_id }}
      description: |
        The ID of the IssueField to create the field for.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the field.
    - name: data_type
      value: "{{ data_type }}"
      description: |
        The field's data type.
      valid_values: ['text', 'number', 'date']
    - name: single_select_options
      description: |
        The options available for single select fields. At least one option must be provided when creating a single select field.
      value:
        - name: "{{ name }}"
          color: "{{ color }}"
          description: "{{ description }}"
    - name: iteration_configuration
      description: |
        The configuration for iteration fields.
      value:
        start_date: "{{ start_date }}"
        duration: {{ duration }}
        iterations:
          - title: "{{ title }}"
            start_date: "{{ start_date }}"
            duration: {{ duration }}
`}</CodeBlock>

</TabItem>
</Tabs>
