--- 
title: organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations
  - codespaces
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

Creates, updates, deletes, gets or lists an <code>organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codespaces.organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_codespaces_for_user_in_org"
    values={[
        { label: 'get_codespaces_for_user_in_org', value: 'get_codespaces_for_user_in_org' },
        { label: 'list_in_organization', value: 'list_in_organization' }
    ]}
>
<TabItem value="get_codespaces_for_user_in_org">

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
    <td><CopyableCode code="codespaces" /></td>
    <td><code>array</code></td>
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
<TabItem value="list_in_organization">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Automatically generated name of this codespace. (example: monalisa-octocat-hello-world-g4wpq6h95q)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>UUID identifying this codespace's environment. (example: 26a7c758-7299-4a73-b978-5a92a7ae98a0)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name for this codespace. (example: bookish space pancake)</td>
</tr>
<tr>
    <td><CopyableCode code="billable_owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="devcontainer_path" /></td>
    <td><code>string</code></td>
    <td>Path to devcontainer.json from repo root used to create Codespace. (example: .devcontainer/example/devcontainer.json)</td>
</tr>
<tr>
    <td><CopyableCode code="git_status" /></td>
    <td><code>object</code></td>
    <td>Details about the codespace's git repository.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_timeout_minutes" /></td>
    <td><code>integer</code></td>
    <td>The number of minutes of inactivity after which this codespace will be automatically stopped.</td>
</tr>
<tr>
    <td><CopyableCode code="idle_timeout_notice" /></td>
    <td><code>string</code></td>
    <td>Text to show user when codespace idle timeout minutes has been overriden by an organization policy</td>
</tr>
<tr>
    <td><CopyableCode code="last_known_stop_notice" /></td>
    <td><code>string</code></td>
    <td>The text to display to a user when a codespace has been stopped for a potentially actionable reason. (example: you've used 100% of your spending limit for Codespaces)</td>
</tr>
<tr>
    <td><CopyableCode code="last_used_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last known time this codespace was started. (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The initally assigned location of a new codespace. (EastUs, SouthEastAsia, WestEurope, WestUs2) (example: WestUs2)</td>
</tr>
<tr>
    <td><CopyableCode code="machine" /></td>
    <td><code>object</code></td>
    <td>A description of the machine powering a codespace. (title: Codespace machine)</td>
</tr>
<tr>
    <td><CopyableCode code="machines_url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL to access available alternate machine types for this codespace.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_operation" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.</td>
</tr>
<tr>
    <td><CopyableCode code="pending_operation_disabled_reason" /></td>
    <td><code>string</code></td>
    <td>Text to show user when codespace is disabled by a pending operation</td>
</tr>
<tr>
    <td><CopyableCode code="prebuild" /></td>
    <td><code>boolean</code></td>
    <td>Whether the codespace was created from a prebuild.</td>
</tr>
<tr>
    <td><CopyableCode code="publish_url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL to publish this codespace to a new repository.</td>
</tr>
<tr>
    <td><CopyableCode code="pulls_url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL for the Pull Request associated with this codespace, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="recent_folders" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at" (example: 2011-01-26T20:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="retention_period_minutes" /></td>
    <td><code>integer</code></td>
    <td>Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_constraints" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="start_url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL to start this codespace.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of this codespace. (Unknown, Created, Queued, Provisioning, Available, Awaiting, Unavailable, Deleted, Moved, Shutdown, Archived, Starting, ShuttingDown, Failed, Exporting, Updating, Rebuilding) (example: Available)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL to stop this codespace.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>API URL for this codespace.</td>
</tr>
<tr>
    <td><CopyableCode code="web_url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL to access this codespace on the web.</td>
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
    <td><a href="#get_codespaces_for_user_in_org"><CopyableCode code="get_codespaces_for_user_in_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the codespaces that a member of an organization has for repositories in that organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_in_organization"><CopyableCode code="list_in_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the codespaces associated to a specified organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_codespaces_access"><CopyableCode code="set_codespaces_access" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-visibility"><code>visibility</code></a></td>
    <td></td>
    <td>Sets which users can access codespaces in an organization. This is synonymous with granting or revoking codespaces access permissions for users according to the visibility.<br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_from_organization"><CopyableCode code="delete_from_organization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Deletes a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_codespaces_access_users"><CopyableCode code="delete_codespaces_access_users" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Codespaces for the specified users will no longer be billed to the organization.<br /><br />To use this endpoint, the access settings for the organization must be set to `selected_members`.<br />For information on how to change this setting, see "[Manage access control for organization codespaces](https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_codespaces_access_users"><CopyableCode code="set_codespaces_access_users" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-selected_usernames"><code>selected_usernames</code></a></td>
    <td></td>
    <td>Codespaces for the specified users will be billed to the organization.<br /><br />To use this endpoint, the access settings for the organization must be set to `selected_members`.<br />For information on how to change this setting, see "[Manage access control for organization codespaces](https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#stop_in_organization"><CopyableCode code="stop_in_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Stops a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-codespace_name">
    <td><CopyableCode code="codespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the codespace.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
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
    defaultValue="get_codespaces_for_user_in_org"
    values={[
        { label: 'get_codespaces_for_user_in_org', value: 'get_codespaces_for_user_in_org' },
        { label: 'list_in_organization', value: 'list_in_organization' }
    ]}
>
<TabItem value="get_codespaces_for_user_in_org">

Lists the codespaces that a member of an organization has for repositories in that organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
codespaces,
total_count
FROM github.codespaces.organizations
WHERE org = '{{ org }}' -- required
AND username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_in_organization">

Lists the codespaces associated to a specified organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
id,
name,
environment_id,
display_name,
billable_owner,
created_at,
devcontainer_path,
git_status,
idle_timeout_minutes,
idle_timeout_notice,
last_known_stop_notice,
last_used_at,
location,
machine,
machines_url,
owner,
pending_operation,
pending_operation_disabled_reason,
prebuild,
publish_url,
pulls_url,
recent_folders,
repository,
retention_expires_at,
retention_period_minutes,
runtime_constraints,
start_url,
state,
stop_url,
updated_at,
url,
web_url
FROM github.codespaces.organizations
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_codespaces_access"
    values={[
        { label: 'set_codespaces_access', value: 'set_codespaces_access' }
    ]}
>
<TabItem value="set_codespaces_access">

Sets which users can access codespaces in an organization. This is synonymous with granting or revoking codespaces access permissions for users according to the visibility.<br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.codespaces.organizations
SET 
visibility = '{{ visibility }}',
selected_usernames = '{{ selected_usernames }}'
WHERE 
org = '{{ org }}' --required
AND visibility = '{{ visibility }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_from_organization"
    values={[
        { label: 'delete_from_organization', value: 'delete_from_organization' },
        { label: 'delete_codespaces_access_users', value: 'delete_codespaces_access_users' }
    ]}
>
<TabItem value="delete_from_organization">

Deletes a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.codespaces.organizations
WHERE org = '{{ org }}' --required
AND username = '{{ username }}' --required
AND codespace_name = '{{ codespace_name }}' --required
;
```
</TabItem>
<TabItem value="delete_codespaces_access_users">

Codespaces for the specified users will no longer be billed to the organization.<br /><br />To use this endpoint, the access settings for the organization must be set to `selected_members`.<br />For information on how to change this setting, see "[Manage access control for organization codespaces](https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.codespaces.organizations
WHERE org = '{{ org }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="set_codespaces_access_users"
    values={[
        { label: 'set_codespaces_access_users', value: 'set_codespaces_access_users' },
        { label: 'stop_in_organization', value: 'stop_in_organization' }
    ]}
>
<TabItem value="set_codespaces_access_users">

Codespaces for the specified users will be billed to the organization.<br /><br />To use this endpoint, the access settings for the organization must be set to `selected_members`.<br />For information on how to change this setting, see "[Manage access control for organization codespaces](https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
EXEC github.codespaces.organizations.set_codespaces_access_users 
@org='{{ org }}' --required 
@@json=
'{
"selected_usernames": "{{ selected_usernames }}"
}'
;
```
</TabItem>
<TabItem value="stop_in_organization">

Stops a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
EXEC github.codespaces.organizations.stop_in_organization 
@org='{{ org }}' --required, 
@username='{{ username }}' --required, 
@codespace_name='{{ codespace_name }}' --required
;
```
</TabItem>
</Tabs>
