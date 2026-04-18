--- 
title: codespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - codespaces
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

Creates, updates, deletes, gets or lists a <code>codespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="codespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codespaces.codespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_in_repository_for_authenticated_user"
    values={[
        { label: 'list_in_repository_for_authenticated_user', value: 'list_in_repository_for_authenticated_user' },
        { label: 'get_for_authenticated_user', value: 'get_for_authenticated_user' },
        { label: 'list_for_authenticated_user', value: 'list_for_authenticated_user' }
    ]}
>
<TabItem value="list_in_repository_for_authenticated_user">

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
<TabItem value="get_for_authenticated_user">

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
    <td><a href="#list_in_repository_for_authenticated_user"><CopyableCode code="list_in_repository_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the codespaces associated to a specified repository and the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_for_authenticated_user"><CopyableCode code="get_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Gets information about a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_for_authenticated_user"><CopyableCode code="list_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-repository_id"><code>repository_id</code></a></td>
    <td>Lists the authenticated user's codespaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_with_pr_for_authenticated_user"><CopyableCode code="create_with_pr_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Creates a codespace owned by the authenticated user for the specified pull request.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_with_repo_for_authenticated_user"><CopyableCode code="create_with_repo_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Creates a codespace owned by the authenticated user in the specified repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_for_authenticated_user"><CopyableCode code="create_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-repository_id"><code>repository_id</code></a>, <a href="#parameter-pull_request"><code>pull_request</code></a></td>
    <td></td>
    <td>Creates a new codespace, owned by the authenticated user.<br /><br />This endpoint requires either a `repository_id` OR a `pull_request` but not both.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_for_authenticated_user"><CopyableCode code="update_for_authenticated_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Updates a codespace owned by the authenticated user. Currently only the codespace's machine type and recent folders can be modified using this endpoint.<br /><br />If you specify a new machine type it will be applied the next time your codespace is started.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_for_authenticated_user"><CopyableCode code="delete_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Deletes a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#pre_flight_with_repo_for_authenticated_user"><CopyableCode code="pre_flight_with_repo_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-client_ip"><code>client_ip</code></a></td>
    <td>Gets the default attributes for codespaces created by the user with the repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#export_for_authenticated_user"><CopyableCode code="export_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored.<br /><br />If changes cannot be pushed to the codespace's repository, they will be pushed to a new or previously-existing fork instead.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#publish_for_authenticated_user"><CopyableCode code="publish_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Publishes an unpublished codespace, creating a new repository and assigning it to the codespace.<br /><br />The codespace's token is granted write permissions to the repository, allowing the user to push their changes.<br /><br />This will fail for a codespace that is already published, meaning it has an associated repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#start_for_authenticated_user"><CopyableCode code="start_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Starts a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#stop_for_authenticated_user"><CopyableCode code="stop_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-codespace_name"><code>codespace_name</code></a></td>
    <td></td>
    <td>Stops a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.</td>
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
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-pull_number">
    <td><CopyableCode code="pull_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the pull request.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-client_ip">
    <td><CopyableCode code="client_ip" /></td>
    <td><code>string</code></td>
    <td>An alternative IP for default location auto-detection, such as when proxying a request.</td>
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
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.</td>
</tr>
<tr id="parameter-repository_id">
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the Repository to filter on</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_in_repository_for_authenticated_user"
    values={[
        { label: 'list_in_repository_for_authenticated_user', value: 'list_in_repository_for_authenticated_user' },
        { label: 'get_for_authenticated_user', value: 'get_for_authenticated_user' },
        { label: 'list_for_authenticated_user', value: 'list_for_authenticated_user' }
    ]}
>
<TabItem value="list_in_repository_for_authenticated_user">

Lists the codespaces associated to a specified repository and the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
SELECT
codespaces,
total_count
FROM github.codespaces.codespaces
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="get_for_authenticated_user">

Gets information about a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

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
FROM github.codespaces.codespaces
WHERE codespace_name = '{{ codespace_name }}' -- required
;
```
</TabItem>
<TabItem value="list_for_authenticated_user">

Lists the authenticated user's codespaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
SELECT
codespaces,
total_count
FROM github.codespaces.codespaces
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND repository_id = '{{ repository_id }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_with_pr_for_authenticated_user"
    values={[
        { label: 'create_with_pr_for_authenticated_user', value: 'create_with_pr_for_authenticated_user' },
        { label: 'create_with_repo_for_authenticated_user', value: 'create_with_repo_for_authenticated_user' },
        { label: 'create_for_authenticated_user', value: 'create_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_with_pr_for_authenticated_user">

Creates a codespace owned by the authenticated user for the specified pull request.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
INSERT INTO github.codespaces.codespaces (
location,
geo,
client_ip,
machine,
devcontainer_path,
multi_repo_permissions_opt_out,
working_directory,
idle_timeout_minutes,
display_name,
retention_period_minutes,
owner,
repo,
pull_number
)
SELECT 
'{{ location }}',
'{{ geo }}',
'{{ client_ip }}',
'{{ machine }}',
'{{ devcontainer_path }}',
{{ multi_repo_permissions_opt_out }},
'{{ working_directory }}',
{{ idle_timeout_minutes }},
'{{ display_name }}',
{{ retention_period_minutes }},
'{{ owner }}',
'{{ repo }}',
'{{ pull_number }}'
RETURNING
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
;
```
</TabItem>
<TabItem value="create_with_repo_for_authenticated_user">

Creates a codespace owned by the authenticated user in the specified repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
INSERT INTO github.codespaces.codespaces (
ref,
location,
geo,
client_ip,
machine,
devcontainer_path,
multi_repo_permissions_opt_out,
working_directory,
idle_timeout_minutes,
display_name,
retention_period_minutes,
owner,
repo
)
SELECT 
'{{ ref }}',
'{{ location }}',
'{{ geo }}',
'{{ client_ip }}',
'{{ machine }}',
'{{ devcontainer_path }}',
{{ multi_repo_permissions_opt_out }},
'{{ working_directory }}',
{{ idle_timeout_minutes }},
'{{ display_name }}',
{{ retention_period_minutes }},
'{{ owner }}',
'{{ repo }}'
RETURNING
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
;
```
</TabItem>
<TabItem value="create_for_authenticated_user">

Creates a new codespace, owned by the authenticated user.<br /><br />This endpoint requires either a `repository_id` OR a `pull_request` but not both.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
INSERT INTO github.codespaces.codespaces (
repository_id,
ref,
location,
geo,
client_ip,
machine,
devcontainer_path,
multi_repo_permissions_opt_out,
working_directory,
idle_timeout_minutes,
display_name,
retention_period_minutes,
pull_request
)
SELECT 
{{ repository_id }} /* required */,
'{{ ref }}',
'{{ location }}',
'{{ geo }}',
'{{ client_ip }}',
'{{ machine }}',
'{{ devcontainer_path }}',
{{ multi_repo_permissions_opt_out }},
'{{ working_directory }}',
{{ idle_timeout_minutes }},
'{{ display_name }}',
{{ retention_period_minutes }},
'{{ pull_request }}' /* required */
RETURNING
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
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: codespaces
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the codespaces resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the codespaces resource.
    - name: pull_number
      value: {{ pull_number }}
      description: Required parameter for the codespaces resource.
    - name: location
      value: "{{ location }}"
      description: |
        The requested location for a new codespace. Best efforts are made to respect this upon creation. Assigned by IP if not provided.
    - name: geo
      value: "{{ geo }}"
      description: |
        The geographic area for this codespace. If not specified, the value is assigned by IP. This property replaces \`location\`, which is closing down.
      valid_values: ['EuropeWest', 'SoutheastAsia', 'UsEast', 'UsWest']
    - name: client_ip
      value: "{{ client_ip }}"
      description: |
        IP for location auto-detection when proxying a request
    - name: machine
      value: "{{ machine }}"
      description: |
        Machine type to use for this codespace
    - name: devcontainer_path
      value: "{{ devcontainer_path }}"
      description: |
        Path to devcontainer.json config to use for this codespace
    - name: multi_repo_permissions_opt_out
      value: {{ multi_repo_permissions_opt_out }}
      description: |
        Whether to authorize requested permissions from devcontainer.json
    - name: working_directory
      value: "{{ working_directory }}"
      description: |
        Working directory for this codespace
    - name: idle_timeout_minutes
      value: {{ idle_timeout_minutes }}
      description: |
        Time in minutes before codespace stops from inactivity
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Display name for this codespace
    - name: retention_period_minutes
      value: {{ retention_period_minutes }}
      description: |
        Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
    - name: ref
      value: "{{ ref }}"
      description: |
        Git ref (typically a branch name) for this codespace
    - name: repository_id
      value: {{ repository_id }}
      description: |
        Repository id for this codespace
    - name: pull_request
      description: |
        Pull request number for this codespace
      value:
        pull_request_number: {{ pull_request_number }}
        repository_id: {{ repository_id }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_for_authenticated_user"
    values={[
        { label: 'update_for_authenticated_user', value: 'update_for_authenticated_user' }
    ]}
>
<TabItem value="update_for_authenticated_user">

Updates a codespace owned by the authenticated user. Currently only the codespace's machine type and recent folders can be modified using this endpoint.<br /><br />If you specify a new machine type it will be applied the next time your codespace is started.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
UPDATE github.codespaces.codespaces
SET 
machine = '{{ machine }}',
display_name = '{{ display_name }}',
recent_folders = '{{ recent_folders }}'
WHERE 
codespace_name = '{{ codespace_name }}' --required
RETURNING
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
web_url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_for_authenticated_user"
    values={[
        { label: 'delete_for_authenticated_user', value: 'delete_for_authenticated_user' }
    ]}
>
<TabItem value="delete_for_authenticated_user">

Deletes a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
DELETE FROM github.codespaces.codespaces
WHERE codespace_name = '{{ codespace_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="pre_flight_with_repo_for_authenticated_user"
    values={[
        { label: 'pre_flight_with_repo_for_authenticated_user', value: 'pre_flight_with_repo_for_authenticated_user' },
        { label: 'export_for_authenticated_user', value: 'export_for_authenticated_user' },
        { label: 'publish_for_authenticated_user', value: 'publish_for_authenticated_user' },
        { label: 'start_for_authenticated_user', value: 'start_for_authenticated_user' },
        { label: 'stop_for_authenticated_user', value: 'stop_for_authenticated_user' }
    ]}
>
<TabItem value="pre_flight_with_repo_for_authenticated_user">

Gets the default attributes for codespaces created by the user with the repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
EXEC github.codespaces.codespaces.pre_flight_with_repo_for_authenticated_user 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@ref='{{ ref }}', 
@client_ip='{{ client_ip }}'
;
```
</TabItem>
<TabItem value="export_for_authenticated_user">

Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored.<br /><br />If changes cannot be pushed to the codespace's repository, they will be pushed to a new or previously-existing fork instead.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
EXEC github.codespaces.codespaces.export_for_authenticated_user 
@codespace_name='{{ codespace_name }}' --required
;
```
</TabItem>
<TabItem value="publish_for_authenticated_user">

Publishes an unpublished codespace, creating a new repository and assigning it to the codespace.<br /><br />The codespace's token is granted write permissions to the repository, allowing the user to push their changes.<br /><br />This will fail for a codespace that is already published, meaning it has an associated repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
EXEC github.codespaces.codespaces.publish_for_authenticated_user 
@codespace_name='{{ codespace_name }}' --required 
@@json=
'{
"name": "{{ name }}", 
"private": {{ private }}
}'
;
```
</TabItem>
<TabItem value="start_for_authenticated_user">

Starts a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
EXEC github.codespaces.codespaces.start_for_authenticated_user 
@codespace_name='{{ codespace_name }}' --required
;
```
</TabItem>
<TabItem value="stop_for_authenticated_user">

Stops a user's codespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `codespace` scope to use this endpoint.

```sql
EXEC github.codespaces.codespaces.stop_for_authenticated_user 
@codespace_name='{{ codespace_name }}' --required
;
```
</TabItem>
</Tabs>
