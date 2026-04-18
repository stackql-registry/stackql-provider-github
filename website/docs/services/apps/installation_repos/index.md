--- 
title: installation_repos
hide_title: false
hide_table_of_contents: false
keywords:
  - installation_repos
  - apps
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

Creates, updates, deletes, gets or lists an <code>installation_repos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="installation_repos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.installation_repos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_installation_repos_for_authenticated_user"
    values={[
        { label: 'list_installation_repos_for_authenticated_user', value: 'list_installation_repos_for_authenticated_user' },
        { label: 'list_repos_accessible_to_installation', value: 'list_repos_accessible_to_installation' }
    ]}
>
<TabItem value="list_installation_repos_for_authenticated_user">

The access the user has to each repository is included in the hash under the `permissions` key.

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
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_selection" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repos_accessible_to_installation">

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
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_selection" /></td>
    <td><code>string</code></td>
    <td> (example: selected)</td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><a href="#list_installation_repos_for_authenticated_user"><CopyableCode code="list_installation_repos_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-installation_id"><code>installation_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.<br /><br />The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.<br /><br />The access the user has to each repository is included in the hash under the `permissions` key.</td>
</tr>
<tr>
    <td><a href="#list_repos_accessible_to_installation"><CopyableCode code="list_repos_accessible_to_installation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List repositories that an app installation can access.</td>
</tr>
<tr>
    <td><a href="#add_repo_to_installation_for_authenticated_user"><CopyableCode code="add_repo_to_installation_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-installation_id"><code>installation_id</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Add a single repository to an installation. The authenticated user must have admin access to the repository.<br /><br />This endpoint only works for PATs (classic) with the `repo` scope.</td>
</tr>
<tr>
    <td><a href="#remove_repo_from_installation_for_authenticated_user"><CopyableCode code="remove_repo_from_installation_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-installation_id"><code>installation_id</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td></td>
    <td>Remove a single repository from an installation. The authenticated user must have admin access to the repository. The installation must have the `repository_selection` of `selected`.<br /><br />This endpoint only works for PATs (classic) with the `repo` scope.</td>
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
<tr id="parameter-installation_id">
    <td><CopyableCode code="installation_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the installation.</td>
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
    defaultValue="list_installation_repos_for_authenticated_user"
    values={[
        { label: 'list_installation_repos_for_authenticated_user', value: 'list_installation_repos_for_authenticated_user' },
        { label: 'list_repos_accessible_to_installation', value: 'list_repos_accessible_to_installation' }
    ]}
>
<TabItem value="list_installation_repos_for_authenticated_user">

List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.<br /><br />The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.<br /><br />The access the user has to each repository is included in the hash under the `permissions` key.

```sql
SELECT
repositories,
repository_selection,
total_count
FROM github.apps.installation_repos
WHERE installation_id = '{{ installation_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_repos_accessible_to_installation">

List repositories that an app installation can access.

```sql
SELECT
repositories,
repository_selection,
total_count
FROM github.apps.installation_repos
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_repo_to_installation_for_authenticated_user"
    values={[
        { label: 'add_repo_to_installation_for_authenticated_user', value: 'add_repo_to_installation_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_repo_to_installation_for_authenticated_user">

Add a single repository to an installation. The authenticated user must have admin access to the repository.<br /><br />This endpoint only works for PATs (classic) with the `repo` scope.

```sql
INSERT INTO github.apps.installation_repos (
installation_id,
repository_id
)
SELECT 
'{{ installation_id }}',
'{{ repository_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: installation_repos
  props:
    - name: installation_id
      value: {{ installation_id }}
      description: Required parameter for the installation_repos resource.
    - name: repository_id
      value: {{ repository_id }}
      description: Required parameter for the installation_repos resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_repo_from_installation_for_authenticated_user"
    values={[
        { label: 'remove_repo_from_installation_for_authenticated_user', value: 'remove_repo_from_installation_for_authenticated_user' }
    ]}
>
<TabItem value="remove_repo_from_installation_for_authenticated_user">

Remove a single repository from an installation. The authenticated user must have admin access to the repository. The installation must have the `repository_selection` of `selected`.<br /><br />This endpoint only works for PATs (classic) with the `repo` scope.

```sql
DELETE FROM github.apps.installation_repos
WHERE installation_id = '{{ installation_id }}' --required
AND repository_id = '{{ repository_id }}' --required
;
```
</TabItem>
</Tabs>
