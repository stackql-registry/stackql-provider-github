--- 
title: issue_field_values
hide_title: false
hide_table_of_contents: false
keywords:
  - issue_field_values
  - issues
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

Creates, updates, deletes, gets or lists an <code>issue_field_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issue_field_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.issues.issue_field_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_issue_field_values_for_issue"
    values={[
        { label: 'list_issue_field_values_for_issue', value: 'list_issue_field_values_for_issue' }
    ]}
>
<TabItem value="list_issue_field_values_for_issue">

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
    <td><CopyableCode code="issue_field_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Unique identifier for the issue field.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: IFT_GDKND)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The data type of the issue field (text, single_select, number, date) (example: text)</td>
</tr>
<tr>
    <td><CopyableCode code="single_select_option" /></td>
    <td><code>object</code></td>
    <td>Details about the selected option (only present for single_select fields)</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value of the issue field (example: Sample text)</td>
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
    <td><a href="#list_issue_field_values_for_issue"><CopyableCode code="list_issue_field_values_for_issue" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all issue field values for an issue.</td>
</tr>
<tr>
    <td><a href="#add_issue_field_values"><CopyableCode code="add_issue_field_values" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-repository_id"><code>repository_id</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td></td>
    <td>Add custom field values to an issue. You can set values for organization-level issue fields that have been defined for the repository's organization.<br />Adding an empty array will clear all existing field values for the issue.<br /><br />This endpoint supports the following field data types:<br />- **`text`**: String values for text fields<br />- **`single_select`**: Option names for single-select fields (must match an existing option name)<br />- **`number`**: Numeric values for number fields<br />- **`date`**: ISO 8601 date strings for date fields<br /><br />Only users with push access to the repository can add issue field values. If you don't have the proper permissions, you'll receive a `403 Forbidden` response.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."</td>
</tr>
<tr>
    <td><a href="#set_issue_field_values"><CopyableCode code="set_issue_field_values" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-repository_id"><code>repository_id</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td></td>
    <td>Set custom field values for an issue, replacing any existing values. You can set values for organization-level issue fields that have been defined for the repository's organization.<br /><br />This endpoint supports the following field data types:<br />- **`text`**: String values for text fields<br />- **`single_select`**: Option names for single-select fields (must match an existing option name)<br />- **`number`**: Numeric values for number fields<br />- **`date`**: ISO 8601 date strings for date fields<br /><br />This operation will replace all existing field values with the provided ones. If you want to add field values without replacing existing ones, use the `POST` endpoint instead.<br /><br />Only users with push access to the repository can set issue field values. If you don't have the proper permissions, you'll receive a `403 Forbidden` response.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."</td>
</tr>
<tr>
    <td><a href="#delete_issue_field_value"><CopyableCode code="delete_issue_field_value" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-repository_id"><code>repository_id</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a>, <a href="#parameter-issue_field_id"><code>issue_field_id</code></a></td>
    <td></td>
    <td>Remove a specific custom field value from an issue.<br /><br />Only users with push access to the repository can delete issue field values. If you don't have the proper permissions, you'll receive a `403 Forbidden` response.<br /><br />If the specified field does not have a value set on the issue, this operation will return a `404` error.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."</td>
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
<tr id="parameter-issue_number">
    <td><CopyableCode code="issue_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the issue.</td>
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
<tr id="parameter-repository_id">
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the repository.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
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
    defaultValue="list_issue_field_values_for_issue"
    values={[
        { label: 'list_issue_field_values_for_issue', value: 'list_issue_field_values_for_issue' }
    ]}
>
<TabItem value="list_issue_field_values_for_issue">

Lists all issue field values for an issue.

```sql
SELECT
issue_field_id,
node_id,
data_type,
single_select_option,
value
FROM github.issues.issue_field_values
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND issue_number = '{{ issue_number }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_issue_field_values"
    values={[
        { label: 'add_issue_field_values', value: 'add_issue_field_values' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_issue_field_values">

Add custom field values to an issue. You can set values for organization-level issue fields that have been defined for the repository's organization.<br />Adding an empty array will clear all existing field values for the issue.<br /><br />This endpoint supports the following field data types:<br />- **`text`**: String values for text fields<br />- **`single_select`**: Option names for single-select fields (must match an existing option name)<br />- **`number`**: Numeric values for number fields<br />- **`date`**: ISO 8601 date strings for date fields<br /><br />Only users with push access to the repository can add issue field values. If you don't have the proper permissions, you'll receive a `403 Forbidden` response.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```sql
INSERT INTO github.issues.issue_field_values (
issue_field_values,
repository_id,
issue_number
)
SELECT 
'{{ issue_field_values }}',
'{{ repository_id }}',
'{{ issue_number }}'
RETURNING
issue_field_id,
node_id,
data_type,
single_select_option,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: issue_field_values
  props:
    - name: repository_id
      value: {{ repository_id }}
      description: Required parameter for the issue_field_values resource.
    - name: issue_number
      value: {{ issue_number }}
      description: Required parameter for the issue_field_values resource.
    - name: issue_field_values
      description: |
        An array of issue field values to add to this issue. Each field value must include the field ID and the value to set.
      value:
        - field_id: {{ field_id }}
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_issue_field_values"
    values={[
        { label: 'set_issue_field_values', value: 'set_issue_field_values' }
    ]}
>
<TabItem value="set_issue_field_values">

Set custom field values for an issue, replacing any existing values. You can set values for organization-level issue fields that have been defined for the repository's organization.<br /><br />This endpoint supports the following field data types:<br />- **`text`**: String values for text fields<br />- **`single_select`**: Option names for single-select fields (must match an existing option name)<br />- **`number`**: Numeric values for number fields<br />- **`date`**: ISO 8601 date strings for date fields<br /><br />This operation will replace all existing field values with the provided ones. If you want to add field values without replacing existing ones, use the `POST` endpoint instead.<br /><br />Only users with push access to the repository can set issue field values. If you don't have the proper permissions, you'll receive a `403 Forbidden` response.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```sql
REPLACE github.issues.issue_field_values
SET 
issue_field_values = '{{ issue_field_values }}'
WHERE 
repository_id = '{{ repository_id }}' --required
AND issue_number = '{{ issue_number }}' --required
RETURNING
issue_field_id,
node_id,
data_type,
single_select_option,
value;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_issue_field_value"
    values={[
        { label: 'delete_issue_field_value', value: 'delete_issue_field_value' }
    ]}
>
<TabItem value="delete_issue_field_value">

Remove a specific custom field value from an issue.<br /><br />Only users with push access to the repository can delete issue field values. If you don't have the proper permissions, you'll receive a `403 Forbidden` response.<br /><br />If the specified field does not have a value set on the issue, this operation will return a `404` error.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```sql
DELETE FROM github.issues.issue_field_values
WHERE repository_id = '{{ repository_id }}' --required
AND issue_number = '{{ issue_number }}' --required
AND issue_field_id = '{{ issue_field_id }}' --required
;
```
</TabItem>
</Tabs>
