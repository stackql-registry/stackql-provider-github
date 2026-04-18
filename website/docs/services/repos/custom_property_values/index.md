--- 
title: custom_property_values
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_property_values
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

Creates, updates, deletes, gets or lists a <code>custom_property_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_property_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.custom_property_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="custom_properties_for_repos_get_repository_values"
    values={[
        { label: 'custom_properties_for_repos_get_repository_values', value: 'custom_properties_for_repos_get_repository_values' }
    ]}
>
<TabItem value="custom_properties_for_repos_get_repository_values">

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
    <td><CopyableCode code="property_name" /></td>
    <td><code>string</code></td>
    <td>The name of the property</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>The value assigned to the property</td>
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
    <td><a href="#custom_properties_for_repos_get_repository_values"><CopyableCode code="custom_properties_for_repos_get_repository_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets all custom property values that are set for a repository.<br />Users with read access to the repository can use this endpoint.</td>
</tr>
<tr>
    <td><a href="#custom_properties_for_repos_create_or_update_repository_values"><CopyableCode code="custom_properties_for_repos_create_or_update_repository_values" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-properties"><code>properties</code></a></td>
    <td></td>
    <td>Create new or update existing custom property values for a repository.<br />Using a value of `null` for a custom property will remove or 'unset' the property value from the repository.<br /><br />Repository admins and other users with the repository-level "edit custom property values" fine-grained permission can use this endpoint.</td>
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
    defaultValue="custom_properties_for_repos_get_repository_values"
    values={[
        { label: 'custom_properties_for_repos_get_repository_values', value: 'custom_properties_for_repos_get_repository_values' }
    ]}
>
<TabItem value="custom_properties_for_repos_get_repository_values">

Gets all custom property values that are set for a repository.<br />Users with read access to the repository can use this endpoint.

```sql
SELECT
property_name,
value
FROM github.repos.custom_property_values
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="custom_properties_for_repos_create_or_update_repository_values"
    values={[
        { label: 'custom_properties_for_repos_create_or_update_repository_values', value: 'custom_properties_for_repos_create_or_update_repository_values' }
    ]}
>
<TabItem value="custom_properties_for_repos_create_or_update_repository_values">

Create new or update existing custom property values for a repository.<br />Using a value of `null` for a custom property will remove or 'unset' the property value from the repository.<br /><br />Repository admins and other users with the repository-level "edit custom property values" fine-grained permission can use this endpoint.

```sql
UPDATE github.repos.custom_property_values
SET 
properties = '{{ properties }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND properties = '{{ properties }}' --required;
```
</TabItem>
</Tabs>
