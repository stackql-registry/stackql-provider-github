--- 
title: custom_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_properties
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

Creates, updates, deletes, gets or lists a <code>custom_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.custom_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="custom_properties_for_repos_get_organization_definition"
    values={[
        { label: 'custom_properties_for_repos_get_organization_definition', value: 'custom_properties_for_repos_get_organization_definition' },
        { label: 'custom_properties_for_repos_get_organization_definitions', value: 'custom_properties_for_repos_get_organization_definitions' }
    ]}
>
<TabItem value="custom_properties_for_repos_get_organization_definition">

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
    <td><CopyableCode code="allowed_values" /></td>
    <td><code>array</code></td>
    <td>An ordered list of the allowed values of the property. The property can have up to 200 allowed values.</td>
</tr>
<tr>
    <td><CopyableCode code="default_value" /></td>
    <td><code>string</code></td>
    <td>Default value of the property</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description of the property</td>
</tr>
<tr>
    <td><CopyableCode code="require_explicit_values" /></td>
    <td><code>boolean</code></td>
    <td>Whether setting properties values is mandatory</td>
</tr>
<tr>
    <td><CopyableCode code="required" /></td>
    <td><code>boolean</code></td>
    <td>Whether the property is required.</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The source type of the property (organization, enterprise) (example: organization)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL that can be used to fetch, update, or delete info about this property via the API.</td>
</tr>
<tr>
    <td><CopyableCode code="value_type" /></td>
    <td><code>string</code></td>
    <td>The type of the value for the property (string, single_select, multi_select, true_false, url) (example: single_select)</td>
</tr>
<tr>
    <td><CopyableCode code="values_editable_by" /></td>
    <td><code>string</code></td>
    <td>Who can edit the values of the property (org_actors, org_and_repo_actors) (example: org_actors)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="custom_properties_for_repos_get_organization_definitions">

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
    <td><CopyableCode code="allowed_values" /></td>
    <td><code>array</code></td>
    <td>An ordered list of the allowed values of the property. The property can have up to 200 allowed values.</td>
</tr>
<tr>
    <td><CopyableCode code="default_value" /></td>
    <td><code>string</code></td>
    <td>Default value of the property</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description of the property</td>
</tr>
<tr>
    <td><CopyableCode code="require_explicit_values" /></td>
    <td><code>boolean</code></td>
    <td>Whether setting properties values is mandatory</td>
</tr>
<tr>
    <td><CopyableCode code="required" /></td>
    <td><code>boolean</code></td>
    <td>Whether the property is required.</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The source type of the property (organization, enterprise) (example: organization)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL that can be used to fetch, update, or delete info about this property via the API.</td>
</tr>
<tr>
    <td><CopyableCode code="value_type" /></td>
    <td><code>string</code></td>
    <td>The type of the value for the property (string, single_select, multi_select, true_false, url) (example: single_select)</td>
</tr>
<tr>
    <td><CopyableCode code="values_editable_by" /></td>
    <td><code>string</code></td>
    <td>Who can edit the values of the property (org_actors, org_and_repo_actors) (example: org_actors)</td>
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
    <td><a href="#custom_properties_for_repos_get_organization_definition"><CopyableCode code="custom_properties_for_repos_get_organization_definition" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-custom_property_name"><code>custom_property_name</code></a></td>
    <td></td>
    <td>Gets a custom property that is defined for an organization.<br />Organization members can read these properties.</td>
</tr>
<tr>
    <td><a href="#custom_properties_for_repos_get_organization_definitions"><CopyableCode code="custom_properties_for_repos_get_organization_definitions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets all custom properties defined for an organization.<br />Organization members can read these properties.</td>
</tr>
<tr>
    <td><a href="#custom_properties_for_repos_create_or_update_organization_definitions"><CopyableCode code="custom_properties_for_repos_create_or_update_organization_definitions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-properties"><code>properties</code></a></td>
    <td></td>
    <td>Creates new or updates existing custom properties defined for an organization in a batch.<br /><br />If the property already exists, the existing property will be replaced with the new values.<br />Missing optional values will fall back to default values, previous values will be overwritten.<br />E.g. if a property exists with `values_editable_by: org_and_repo_actors` and it's updated without specifying `values_editable_by`, it will be updated to default value `org_actors`.<br /><br />To use this endpoint, the authenticated user must be one of:<br />  - An administrator for the organization.<br />  - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.</td>
</tr>
<tr>
    <td><a href="#custom_properties_for_repos_create_or_update_organization_definition"><CopyableCode code="custom_properties_for_repos_create_or_update_organization_definition" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-custom_property_name"><code>custom_property_name</code></a>, <a href="#parameter-value_type"><code>value_type</code></a></td>
    <td></td>
    <td>Creates a new or updates an existing custom property that is defined for an organization.<br /><br />To use this endpoint, the authenticated user must be one of:<br />- An administrator for the organization.<br />- A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.</td>
</tr>
<tr>
    <td><a href="#custom_properties_for_repos_delete_organization_definition"><CopyableCode code="custom_properties_for_repos_delete_organization_definition" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-custom_property_name"><code>custom_property_name</code></a></td>
    <td></td>
    <td>Removes a custom property that is defined for an organization.<br /><br />To use this endpoint, the authenticated user must be one of:<br />  - An administrator for the organization.<br />  - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.</td>
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
<tr id="parameter-custom_property_name">
    <td><CopyableCode code="custom_property_name" /></td>
    <td><code>string</code></td>
    <td>The custom property name</td>
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
    defaultValue="custom_properties_for_repos_get_organization_definition"
    values={[
        { label: 'custom_properties_for_repos_get_organization_definition', value: 'custom_properties_for_repos_get_organization_definition' },
        { label: 'custom_properties_for_repos_get_organization_definitions', value: 'custom_properties_for_repos_get_organization_definitions' }
    ]}
>
<TabItem value="custom_properties_for_repos_get_organization_definition">

Gets a custom property that is defined for an organization.<br />Organization members can read these properties.

```sql
SELECT
property_name,
allowed_values,
default_value,
description,
require_explicit_values,
required,
source_type,
url,
value_type,
values_editable_by
FROM github.orgs.custom_properties
WHERE org = '{{ org }}' -- required
AND custom_property_name = '{{ custom_property_name }}' -- required
;
```
</TabItem>
<TabItem value="custom_properties_for_repos_get_organization_definitions">

Gets all custom properties defined for an organization.<br />Organization members can read these properties.

```sql
SELECT
property_name,
allowed_values,
default_value,
description,
require_explicit_values,
required,
source_type,
url,
value_type,
values_editable_by
FROM github.orgs.custom_properties
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="custom_properties_for_repos_create_or_update_organization_definitions"
    values={[
        { label: 'custom_properties_for_repos_create_or_update_organization_definitions', value: 'custom_properties_for_repos_create_or_update_organization_definitions' }
    ]}
>
<TabItem value="custom_properties_for_repos_create_or_update_organization_definitions">

Creates new or updates existing custom properties defined for an organization in a batch.<br /><br />If the property already exists, the existing property will be replaced with the new values.<br />Missing optional values will fall back to default values, previous values will be overwritten.<br />E.g. if a property exists with `values_editable_by: org_and_repo_actors` and it's updated without specifying `values_editable_by`, it will be updated to default value `org_actors`.<br /><br />To use this endpoint, the authenticated user must be one of:<br />  - An administrator for the organization.<br />  - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.

```sql
UPDATE github.orgs.custom_properties
SET 
properties = '{{ properties }}'
WHERE 
org = '{{ org }}' --required
AND properties = '{{ properties }}' --required
RETURNING
property_name,
allowed_values,
default_value,
description,
require_explicit_values,
required,
source_type,
url,
value_type,
values_editable_by;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="custom_properties_for_repos_create_or_update_organization_definition"
    values={[
        { label: 'custom_properties_for_repos_create_or_update_organization_definition', value: 'custom_properties_for_repos_create_or_update_organization_definition' }
    ]}
>
<TabItem value="custom_properties_for_repos_create_or_update_organization_definition">

Creates a new or updates an existing custom property that is defined for an organization.<br /><br />To use this endpoint, the authenticated user must be one of:<br />- An administrator for the organization.<br />- A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.

```sql
REPLACE github.orgs.custom_properties
SET 
value_type = '{{ value_type }}',
required = {{ required }},
default_value = '{{ default_value }}',
description = '{{ description }}',
allowed_values = '{{ allowed_values }}',
values_editable_by = '{{ values_editable_by }}',
require_explicit_values = {{ require_explicit_values }}
WHERE 
org = '{{ org }}' --required
AND custom_property_name = '{{ custom_property_name }}' --required
AND value_type = '{{ value_type }}' --required
RETURNING
property_name,
allowed_values,
default_value,
description,
require_explicit_values,
required,
source_type,
url,
value_type,
values_editable_by;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="custom_properties_for_repos_delete_organization_definition"
    values={[
        { label: 'custom_properties_for_repos_delete_organization_definition', value: 'custom_properties_for_repos_delete_organization_definition' }
    ]}
>
<TabItem value="custom_properties_for_repos_delete_organization_definition">

Removes a custom property that is defined for an organization.<br /><br />To use this endpoint, the authenticated user must be one of:<br />  - An administrator for the organization.<br />  - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_definitions_manager` in the organization.

```sql
DELETE FROM github.orgs.custom_properties
WHERE org = '{{ org }}' --required
AND custom_property_name = '{{ custom_property_name }}' --required
;
```
</TabItem>
</Tabs>
