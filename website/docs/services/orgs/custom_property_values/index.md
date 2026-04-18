--- 
title: custom_property_values
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_property_values
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

Creates, updates, deletes, gets or lists a <code>custom_property_values</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_property_values" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.custom_property_values" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="custom_properties_for_repos_get_organization_values"
    values={[
        { label: 'custom_properties_for_repos_get_organization_values', value: 'custom_properties_for_repos_get_organization_values' }
    ]}
>
<TabItem value="custom_properties_for_repos_get_organization_values">

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
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_full_name" /></td>
    <td><code>string</code></td>
    <td> (example: octocat/Hello-World)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td> (example: Hello-World)</td>
</tr>
<tr>
    <td><CopyableCode code="properties" /></td>
    <td><code>array</code></td>
    <td>List of custom property names and associated values</td>
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
    <td><a href="#custom_properties_for_repos_get_organization_values"><CopyableCode code="custom_properties_for_repos_get_organization_values" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-repository_query"><code>repository_query</code></a></td>
    <td>Lists organization repositories with all of their custom property values.<br />Organization members can read these properties.</td>
</tr>
<tr>
    <td><a href="#custom_properties_for_repos_create_or_update_organization_values"><CopyableCode code="custom_properties_for_repos_create_or_update_organization_values" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-repository_names"><code>repository_names</code></a>, <a href="#parameter-properties"><code>properties</code></a></td>
    <td></td>
    <td>Create new or update existing custom property values for repositories in a batch that belong to an organization.<br />Each target repository will have its custom property values updated to match the values provided in the request.<br /><br />A maximum of 30 repositories can be updated in a single request.<br /><br />Using a value of `null` for a custom property will remove or 'unset' the property value from the repository.<br /><br />To use this endpoint, the authenticated user must be one of:<br />  - An administrator for the organization.<br />  - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_values_editor` in the organization.</td>
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
<tr id="parameter-repository_query">
    <td><CopyableCode code="repository_query" /></td>
    <td><code>string</code></td>
    <td>Finds repositories in the organization with a query containing one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="custom_properties_for_repos_get_organization_values"
    values={[
        { label: 'custom_properties_for_repos_get_organization_values', value: 'custom_properties_for_repos_get_organization_values' }
    ]}
>
<TabItem value="custom_properties_for_repos_get_organization_values">

Lists organization repositories with all of their custom property values.<br />Organization members can read these properties.

```sql
SELECT
repository_id,
repository_full_name,
repository_name,
properties
FROM github.orgs.custom_property_values
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND repository_query = '{{ repository_query }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="custom_properties_for_repos_create_or_update_organization_values"
    values={[
        { label: 'custom_properties_for_repos_create_or_update_organization_values', value: 'custom_properties_for_repos_create_or_update_organization_values' }
    ]}
>
<TabItem value="custom_properties_for_repos_create_or_update_organization_values">

Create new or update existing custom property values for repositories in a batch that belong to an organization.<br />Each target repository will have its custom property values updated to match the values provided in the request.<br /><br />A maximum of 30 repositories can be updated in a single request.<br /><br />Using a value of `null` for a custom property will remove or 'unset' the property value from the repository.<br /><br />To use this endpoint, the authenticated user must be one of:<br />  - An administrator for the organization.<br />  - A user, or a user on a team, with the fine-grained permission of `custom_properties_org_values_editor` in the organization.

```sql
UPDATE github.orgs.custom_property_values
SET 
repository_names = '{{ repository_names }}',
properties = '{{ properties }}'
WHERE 
org = '{{ org }}' --required
AND repository_names = '{{ repository_names }}' --required
AND properties = '{{ properties }}' --required;
```
</TabItem>
</Tabs>
