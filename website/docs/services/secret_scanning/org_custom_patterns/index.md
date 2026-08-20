--- 
title: org_custom_patterns
hide_title: false
hide_table_of_contents: false
keywords:
  - org_custom_patterns
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

Creates, updates, deletes, gets or lists an <code>org_custom_patterns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_custom_patterns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.secret_scanning.org_custom_patterns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_org_custom_patterns"
    values={[
        { label: 'list_org_custom_patterns', value: 'list_org_custom_patterns' }
    ]}
>
<TabItem value="list_org_custom_patterns">

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
    <td>The ID of the custom pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the custom pattern was created in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_pattern_version" /></td>
    <td><code>string</code></td>
    <td>The version of the entity. This is used to confirm you're updating the current version of the entity and mitigate unintentionally overriding someone else's update.</td>
</tr>
<tr>
    <td><CopyableCode code="end_delimiter" /></td>
    <td><code>string</code></td>
    <td>The end delimiter regex for the custom pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="must_match" /></td>
    <td><code>array</code></td>
    <td>List of regexes that the secret must match.</td>
</tr>
<tr>
    <td><CopyableCode code="must_not_match" /></td>
    <td><code>array</code></td>
    <td>List of regexes that the secret must not match.</td>
</tr>
<tr>
    <td><CopyableCode code="pattern" /></td>
    <td><code>string</code></td>
    <td>The regular expression of the custom pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether push protection is enabled for this custom pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>A URL-friendly identifier for the custom pattern, derived from its name.</td>
</tr>
<tr>
    <td><CopyableCode code="start_delimiter" /></td>
    <td><code>string</code></td>
    <td>The start delimiter regex for the custom pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the custom pattern. (published, unpublished)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the custom pattern was last updated in ISO 8601 format.</td>
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
    <td><a href="#list_org_custom_patterns"><CopyableCode code="list_org_custom_patterns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-push_protection"><code>push_protection</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists secret scanning custom patterns for an organization.<br /><br />Personal access tokens (classic) need the `read:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#bulk_create_org_custom_patterns"><CopyableCode code="bulk_create_org_custom_patterns" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-patterns"><code>patterns</code></a></td>
    <td></td>
    <td>Bulk creates secret scanning custom patterns for an organization.<br /><br />Personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_org_custom_pattern"><CopyableCode code="update_org_custom_pattern" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-pattern_id"><code>pattern_id</code></a>, <a href="#parameter-custom_pattern_version"><code>custom_pattern_version</code></a>, <a href="#parameter-pattern"><code>pattern</code></a>, <a href="#parameter-start_delimiter"><code>start_delimiter</code></a>, <a href="#parameter-end_delimiter"><code>end_delimiter</code></a>, <a href="#parameter-must_match"><code>must_match</code></a>, <a href="#parameter-must_not_match"><code>must_not_match</code></a></td>
    <td></td>
    <td>Updates a secret scanning custom pattern for an organization.<br /><br />Personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#bulk_delete_org_custom_patterns"><CopyableCode code="bulk_delete_org_custom_patterns" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Bulk deletes secret scanning custom patterns for an organization.<br /><br />Personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
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
<tr id="parameter-pattern_id">
    <td><CopyableCode code="pattern_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the custom pattern.</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
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
<tr id="parameter-push_protection">
    <td><CopyableCode code="push_protection" /></td>
    <td><code>string</code></td>
    <td>Filter custom patterns by whether push protection is enabled. When absent, returns patterns regardless of push protection status.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property to sort the results by.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter custom patterns by state. When absent, returns patterns in all states.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_org_custom_patterns"
    values={[
        { label: 'list_org_custom_patterns', value: 'list_org_custom_patterns' }
    ]}
>
<TabItem value="list_org_custom_patterns">

Lists secret scanning custom patterns for an organization.<br /><br />Personal access tokens (classic) need the `read:org` scope to use this endpoint.

```sql
SELECT
id,
name,
created_at,
custom_pattern_version,
end_delimiter,
must_match,
must_not_match,
pattern,
push_protection_enabled,
slug,
start_delimiter,
state,
updated_at
FROM github.secret_scanning.org_custom_patterns
WHERE org = '{{ org }}' -- required
AND state = '{{ state }}'
AND push_protection = '{{ push_protection }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="bulk_create_org_custom_patterns"
    values={[
        { label: 'bulk_create_org_custom_patterns', value: 'bulk_create_org_custom_patterns' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="bulk_create_org_custom_patterns">

Bulk creates secret scanning custom patterns for an organization.<br /><br />Personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
INSERT INTO github.secret_scanning.org_custom_patterns (
patterns,
org
)
SELECT 
'{{ patterns }}' /* required */,
'{{ org }}'
RETURNING
created_patterns
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: org_custom_patterns
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the org_custom_patterns resource.
    - name: patterns
      description: |
        The list of custom patterns to create.
      value:
        - name: "{{ name }}"
          pattern: "{{ pattern }}"
          start_delimiter: "{{ start_delimiter }}"
          end_delimiter: "{{ end_delimiter }}"
          must_match: "{{ must_match }}"
          must_not_match: "{{ must_not_match }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_custom_pattern"
    values={[
        { label: 'update_org_custom_pattern', value: 'update_org_custom_pattern' }
    ]}
>
<TabItem value="update_org_custom_pattern">

Updates a secret scanning custom pattern for an organization.<br /><br />Personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
UPDATE github.secret_scanning.org_custom_patterns
SET 
pattern = '{{ pattern }}',
start_delimiter = '{{ start_delimiter }}',
end_delimiter = '{{ end_delimiter }}',
must_match = '{{ must_match }}',
must_not_match = '{{ must_not_match }}',
custom_pattern_version = '{{ custom_pattern_version }}'
WHERE 
org = '{{ org }}' --required
AND pattern_id = '{{ pattern_id }}' --required
AND custom_pattern_version = '{{ custom_pattern_version }}' --required
AND pattern = '{{ pattern }}' --required
AND start_delimiter = '{{ start_delimiter }}' --required
AND end_delimiter = '{{ end_delimiter }}' --required
AND must_match = '{{ must_match }}' --required
AND must_not_match = '{{ must_not_match }}' --required
RETURNING
id,
name,
created_at,
custom_pattern_version,
end_delimiter,
must_match,
must_not_match,
pattern,
push_protection_enabled,
slug,
start_delimiter,
state,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="bulk_delete_org_custom_patterns"
    values={[
        { label: 'bulk_delete_org_custom_patterns', value: 'bulk_delete_org_custom_patterns' }
    ]}
>
<TabItem value="bulk_delete_org_custom_patterns">

Bulk deletes secret scanning custom patterns for an organization.<br /><br />Personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
DELETE FROM github.secret_scanning.org_custom_patterns
WHERE org = '{{ org }}' --required
;
```
</TabItem>
</Tabs>
