--- 
title: migrations
hide_title: false
hide_table_of_contents: false
keywords:
  - migrations
  - migrations
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

Creates, updates, deletes, gets or lists a <code>migrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.migrations.migrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_status_for_org"
    values={[
        { label: 'get_status_for_org', value: 'get_status_for_org' },
        { label: 'list_for_org', value: 'list_for_org' },
        { label: 'get_status_for_authenticated_user', value: 'get_status_for_authenticated_user' },
        { label: 'list_for_authenticated_user', value: 'list_for_authenticated_user' }
    ]}
>
<TabItem value="get_status_for_org">

*   `pending`, which means the migration hasn't started yet.<br />*   `exporting`, which means the migration is in progress.<br />*   `exported`, which means the migration finished successfully.<br />*   `failed`, which means the migration failed.

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="archive_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2015-07-06T15:33:38-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="exclude" /></td>
    <td><code>array</code></td>
    <td>Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.</td>
</tr>
<tr>
    <td><CopyableCode code="exclude_attachments" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_git_data" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_metadata" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_owner_projects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_releases" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td> (example: 0b989ba4-242f-11e5-81e1-c7b6966d2516)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="org_metadata_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td>The repositories included in the migration. Only returned for export migrations.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (example: pending)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2015-07-06T15:33:38-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octo-org/migrations/79)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_for_org">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="archive_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2015-07-06T15:33:38-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="exclude" /></td>
    <td><code>array</code></td>
    <td>Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.</td>
</tr>
<tr>
    <td><CopyableCode code="exclude_attachments" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_git_data" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_metadata" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_owner_projects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_releases" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td> (example: 0b989ba4-242f-11e5-81e1-c7b6966d2516)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="org_metadata_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td>The repositories included in the migration. Only returned for export migrations.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (example: pending)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2015-07-06T15:33:38-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octo-org/migrations/79)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_status_for_authenticated_user">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="archive_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2015-07-06T15:33:38-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="exclude" /></td>
    <td><code>array</code></td>
    <td>Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.</td>
</tr>
<tr>
    <td><CopyableCode code="exclude_attachments" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_git_data" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_metadata" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_owner_projects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_releases" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td> (example: 0b989ba4-242f-11e5-81e1-c7b6966d2516)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="org_metadata_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td>The repositories included in the migration. Only returned for export migrations.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (example: pending)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2015-07-06T15:33:38-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octo-org/migrations/79)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_for_authenticated_user">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="archive_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2015-07-06T15:33:38-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="exclude" /></td>
    <td><code>array</code></td>
    <td>Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.</td>
</tr>
<tr>
    <td><CopyableCode code="exclude_attachments" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_git_data" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_metadata" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_owner_projects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="exclude_releases" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td> (example: 0b989ba4-242f-11e5-81e1-c7b6966d2516)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="org_metadata_only" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td>The repositories included in the migration. Only returned for export migrations.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (example: pending)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2015-07-06T15:33:38-07:00)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octo-org/migrations/79)</td>
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
    <td><a href="#get_status_for_org"><CopyableCode code="get_status_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-migration_id"><code>migration_id</code></a></td>
    <td><a href="#parameter-exclude"><code>exclude</code></a></td>
    <td>Fetches the status of a migration.<br /><br />The `state` of a migration can be one of the following values:<br /><br />*   `pending`, which means the migration hasn't started yet.<br />*   `exporting`, which means the migration is in progress.<br />*   `exported`, which means the migration finished successfully.<br />*   `failed`, which means the migration failed.</td>
</tr>
<tr>
    <td><a href="#list_for_org"><CopyableCode code="list_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-exclude"><code>exclude</code></a></td>
    <td>Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).<br /><br />A list of `repositories` is only returned for export migrations.</td>
</tr>
<tr>
    <td><a href="#get_status_for_authenticated_user"><CopyableCode code="get_status_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-migration_id"><code>migration_id</code></a></td>
    <td><a href="#parameter-exclude"><code>exclude</code></a></td>
    <td>Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:<br /><br />*   `pending` - the migration hasn't started yet.<br />*   `exporting` - the migration is in progress.<br />*   `exported` - the migration finished successfully.<br />*   `failed` - the migration failed.<br /><br />Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/migrations/users#download-a-user-migration-archive).</td>
</tr>
<tr>
    <td><a href="#list_for_authenticated_user"><CopyableCode code="list_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all migrations a user has started.</td>
</tr>
<tr>
    <td><a href="#start_for_org"><CopyableCode code="start_for_org" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-repositories"><code>repositories</code></a></td>
    <td></td>
    <td>Initiates the generation of a migration archive.</td>
</tr>
<tr>
    <td><a href="#start_for_authenticated_user"><CopyableCode code="start_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-repositories"><code>repositories</code></a></td>
    <td></td>
    <td>Initiates the generation of a user migration archive.</td>
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
<tr id="parameter-migration_id">
    <td><CopyableCode code="migration_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the migration.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-exclude">
    <td><CopyableCode code="exclude" /></td>
    <td><code>array</code></td>
    <td></td>
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
    defaultValue="get_status_for_org"
    values={[
        { label: 'get_status_for_org', value: 'get_status_for_org' },
        { label: 'list_for_org', value: 'list_for_org' },
        { label: 'get_status_for_authenticated_user', value: 'get_status_for_authenticated_user' },
        { label: 'list_for_authenticated_user', value: 'list_for_authenticated_user' }
    ]}
>
<TabItem value="get_status_for_org">

Fetches the status of a migration.<br /><br />The `state` of a migration can be one of the following values:<br /><br />*   `pending`, which means the migration hasn't started yet.<br />*   `exporting`, which means the migration is in progress.<br />*   `exported`, which means the migration finished successfully.<br />*   `failed`, which means the migration failed.

```sql
SELECT
id,
node_id,
archive_url,
created_at,
exclude,
exclude_attachments,
exclude_git_data,
exclude_metadata,
exclude_owner_projects,
exclude_releases,
guid,
lock_repositories,
org_metadata_only,
owner,
repositories,
state,
updated_at,
url
FROM github.migrations.migrations
WHERE org = '{{ org }}' -- required
AND migration_id = '{{ migration_id }}' -- required
AND exclude = '{{ exclude }}'
;
```
</TabItem>
<TabItem value="list_for_org">

Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).<br /><br />A list of `repositories` is only returned for export migrations.

```sql
SELECT
id,
node_id,
archive_url,
created_at,
exclude,
exclude_attachments,
exclude_git_data,
exclude_metadata,
exclude_owner_projects,
exclude_releases,
guid,
lock_repositories,
org_metadata_only,
owner,
repositories,
state,
updated_at,
url
FROM github.migrations.migrations
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND exclude = '{{ exclude }}'
;
```
</TabItem>
<TabItem value="get_status_for_authenticated_user">

Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:<br /><br />*   `pending` - the migration hasn't started yet.<br />*   `exporting` - the migration is in progress.<br />*   `exported` - the migration finished successfully.<br />*   `failed` - the migration failed.<br /><br />Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/migrations/users#download-a-user-migration-archive).

```sql
SELECT
id,
node_id,
archive_url,
created_at,
exclude,
exclude_attachments,
exclude_git_data,
exclude_metadata,
exclude_owner_projects,
exclude_releases,
guid,
lock_repositories,
org_metadata_only,
owner,
repositories,
state,
updated_at,
url
FROM github.migrations.migrations
WHERE migration_id = '{{ migration_id }}' -- required
AND exclude = '{{ exclude }}'
;
```
</TabItem>
<TabItem value="list_for_authenticated_user">

Lists all migrations a user has started.

```sql
SELECT
id,
node_id,
archive_url,
created_at,
exclude,
exclude_attachments,
exclude_git_data,
exclude_metadata,
exclude_owner_projects,
exclude_releases,
guid,
lock_repositories,
org_metadata_only,
owner,
repositories,
state,
updated_at,
url
FROM github.migrations.migrations
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_for_org"
    values={[
        { label: 'start_for_org', value: 'start_for_org' },
        { label: 'start_for_authenticated_user', value: 'start_for_authenticated_user' }
    ]}
>
<TabItem value="start_for_org">

Initiates the generation of a migration archive.

```sql
EXEC github.migrations.migrations.start_for_org 
@org='{{ org }}' --required 
@@json=
'{
"repositories": "{{ repositories }}", 
"lock_repositories": {{ lock_repositories }}, 
"exclude_metadata": {{ exclude_metadata }}, 
"exclude_git_data": {{ exclude_git_data }}, 
"exclude_attachments": {{ exclude_attachments }}, 
"exclude_releases": {{ exclude_releases }}, 
"exclude_owner_projects": {{ exclude_owner_projects }}, 
"org_metadata_only": {{ org_metadata_only }}, 
"exclude": "{{ exclude }}"
}'
;
```
</TabItem>
<TabItem value="start_for_authenticated_user">

Initiates the generation of a user migration archive.

```sql
EXEC github.migrations.migrations.start_for_authenticated_user 
@@json=
'{
"lock_repositories": {{ lock_repositories }}, 
"exclude_metadata": {{ exclude_metadata }}, 
"exclude_git_data": {{ exclude_git_data }}, 
"exclude_attachments": {{ exclude_attachments }}, 
"exclude_releases": {{ exclude_releases }}, 
"exclude_owner_projects": {{ exclude_owner_projects }}, 
"org_metadata_only": {{ org_metadata_only }}, 
"exclude": "{{ exclude }}", 
"repositories": "{{ repositories }}"
}'
;
```
</TabItem>
</Tabs>
