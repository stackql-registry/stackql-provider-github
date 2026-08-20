--- 
title: collaborators
hide_title: false
hide_table_of_contents: false
keywords:
  - collaborators
  - copilot_spaces
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

Creates, updates, deletes, gets or lists a <code>collaborators</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="collaborators" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot_spaces.collaborators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_collaborators_for_org"
    values={[
        { label: 'list_collaborators_for_org', value: 'list_collaborators_for_org' },
        { label: 'list_collaborators_for_user', value: 'list_collaborators_for_user' }
    ]}
>
<TabItem value="list_collaborators_for_org">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td> (example: 41d064eb2195891e12d0413f63227ea7)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDQ6VXNlcjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="actor_type" /></td>
    <td><code>string</code></td>
    <td>The collaborator actor type. (User)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/events&#123;/privacy&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="followers_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/followers)</td>
</tr>
<tr>
    <td><CopyableCode code="following_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/following&#123;/other_user&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="gists_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/gists&#123;/gist_id&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="notification_setting" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organizations_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/orgs)</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="privacy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="received_events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/received_events)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role granted to the collaborator (reader, writer, admin)</td>
</tr>
<tr>
    <td><CopyableCode code="site_admin" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="starred_at" /></td>
    <td><code>string</code></td>
    <td> (example: "2020-07-09T00:17:55Z")</td>
</tr>
<tr>
    <td><CopyableCode code="starred_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/starred&#123;/owner&#125;&#123;/repo&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptions_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/subscriptions)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="user_view_type" /></td>
    <td><code>string</code></td>
    <td> (example: public)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_collaborators_for_user">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td> (example: 41d064eb2195891e12d0413f63227ea7)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDQ6VXNlcjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="actor_type" /></td>
    <td><code>string</code></td>
    <td>The collaborator actor type. (User)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/events&#123;/privacy&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="followers_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/followers)</td>
</tr>
<tr>
    <td><CopyableCode code="following_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/following&#123;/other_user&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="gists_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/gists&#123;/gist_id&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="notification_setting" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organizations_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/orgs)</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code></code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="privacy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="received_events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/received_events)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role granted to the collaborator (reader, writer, admin)</td>
</tr>
<tr>
    <td><CopyableCode code="site_admin" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="starred_at" /></td>
    <td><code>string</code></td>
    <td> (example: "2020-07-09T00:17:55Z")</td>
</tr>
<tr>
    <td><CopyableCode code="starred_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/starred&#123;/owner&#125;&#123;/repo&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptions_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/subscriptions)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="user_view_type" /></td>
    <td><code>string</code></td>
    <td> (example: public)</td>
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
    <td><a href="#list_collaborators_for_org"><CopyableCode code="list_collaborators_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Lists all collaborators for a specific Copilot Space owned by an organization. The authenticated user must have appropriate permissions to view collaborators.<br /><br />Each collaborator entry specifies which user or team has access to the space and at what level (reader, writer, or admin). The space owner (organization) is excluded from this list.<br /><br />**Note:** Team collaborators listed here are teams that are defined in the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#list_collaborators_for_user"><CopyableCode code="list_collaborators_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a></td>
    <td></td>
    <td>Lists all collaborators for a specific Copilot Space owned by a user. The authenticated user must be the owner of the space or have admin access to the space.<br /><br />Each collaborator entry specifies which user has access to the space and at what level (reader, writer, or admin). The space owner is excluded from this list.<br /><br />Team collaborators are not supported for user-owned Copilot Spaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#add_collaborator_for_org"><CopyableCode code="add_collaborator_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_identifier"><code>actor_identifier</code></a>, <a href="#parameter-role"><code>role</code></a></td>
    <td></td>
    <td>Adds a collaborator (user or team) to a specific Copilot Space owned by an organization. The authenticated user must have appropriate permissions to manage collaborators.<br /><br />**Note:** When adding users as collaborators, they must already be members of the organization.<br />When adding teams as collaborators, they must be defined in the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#add_collaborator_for_user"><CopyableCode code="add_collaborator_for_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_identifier"><code>actor_identifier</code></a>, <a href="#parameter-role"><code>role</code></a></td>
    <td></td>
    <td>Adds a collaborator to a specific Copilot Space owned by a user. The authenticated user must be the owner of the space or have admin access to the space.<br /><br />Team collaborators are not supported for user-owned Copilot Spaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_collaborator_for_org"><CopyableCode code="update_collaborator_for_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_identifier"><code>actor_identifier</code></a>, <a href="#parameter-role"><code>role</code></a></td>
    <td></td>
    <td>Updates the role of a collaborator for a specific Copilot Space owned by an organization. The authenticated user must have appropriate permissions to manage collaborators.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#update_collaborator_for_user"><CopyableCode code="update_collaborator_for_user" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_identifier"><code>actor_identifier</code></a>, <a href="#parameter-role"><code>role</code></a></td>
    <td></td>
    <td>Updates the role of a collaborator for a specific Copilot Space owned by a user. The authenticated user must be the owner of the space or have admin access to the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#remove_collaborator_for_org"><CopyableCode code="remove_collaborator_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_identifier"><code>actor_identifier</code></a></td>
    <td></td>
    <td>Removes a collaborator from a specific Copilot Space owned by an organization. The authenticated user must have appropriate permissions to manage collaborators.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.</td>
</tr>
<tr>
    <td><a href="#remove_collaborator_for_user"><CopyableCode code="remove_collaborator_for_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-space_number"><code>space_number</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_identifier"><code>actor_identifier</code></a></td>
    <td></td>
    <td>Removes a collaborator from a specific Copilot Space owned by a user. The authenticated user must be the owner of the space or have admin access to the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
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
<tr id="parameter-actor_identifier">
    <td><CopyableCode code="actor_identifier" /></td>
    <td><code>string</code></td>
    <td>The username of the collaborator. The numeric user ID is also accepted.</td>
</tr>
<tr id="parameter-actor_type">
    <td><CopyableCode code="actor_type" /></td>
    <td><code>string</code></td>
    <td>The type of actor (must be `User` for user-owned spaces; `Team` will be rejected).</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-space_number">
    <td><CopyableCode code="space_number" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the Copilot Space.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_collaborators_for_org"
    values={[
        { label: 'list_collaborators_for_org', value: 'list_collaborators_for_org' },
        { label: 'list_collaborators_for_user', value: 'list_collaborators_for_user' }
    ]}
>
<TabItem value="list_collaborators_for_org">

Lists all collaborators for a specific Copilot Space owned by an organization. The authenticated user must have appropriate permissions to view collaborators.<br /><br />Each collaborator entry specifies which user or team has access to the space and at what level (reader, writer, or admin). The space owner (organization) is excluded from this list.<br /><br />**Note:** Team collaborators listed here are teams that are defined in the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
SELECT
id,
name,
gravatar_id,
node_id,
organization_id,
actor_type,
avatar_url,
description,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
login,
members_url,
notification_setting,
organizations_url,
parent,
privacy,
received_events_url,
repos_url,
repositories_url,
role,
site_admin,
slug,
starred_at,
starred_url,
subscriptions_url,
type,
url,
user_view_type
FROM github.copilot_spaces.collaborators
WHERE org = '{{ org }}' -- required
AND space_number = '{{ space_number }}' -- required
;
```
</TabItem>
<TabItem value="list_collaborators_for_user">

Lists all collaborators for a specific Copilot Space owned by a user. The authenticated user must be the owner of the space or have admin access to the space.<br /><br />Each collaborator entry specifies which user has access to the space and at what level (reader, writer, or admin). The space owner is excluded from this list.<br /><br />Team collaborators are not supported for user-owned Copilot Spaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
SELECT
id,
name,
gravatar_id,
node_id,
organization_id,
actor_type,
avatar_url,
description,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
login,
members_url,
notification_setting,
organizations_url,
parent,
privacy,
received_events_url,
repos_url,
repositories_url,
role,
site_admin,
slug,
starred_at,
starred_url,
subscriptions_url,
type,
url,
user_view_type
FROM github.copilot_spaces.collaborators
WHERE username = '{{ username }}' -- required
AND space_number = '{{ space_number }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_collaborator_for_org"
    values={[
        { label: 'add_collaborator_for_org', value: 'add_collaborator_for_org' },
        { label: 'add_collaborator_for_user', value: 'add_collaborator_for_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_collaborator_for_org">

Adds a collaborator (user or team) to a specific Copilot Space owned by an organization. The authenticated user must have appropriate permissions to manage collaborators.<br /><br />**Note:** When adding users as collaborators, they must already be members of the organization.<br />When adding teams as collaborators, they must be defined in the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
INSERT INTO github.copilot_spaces.collaborators (
actor_type,
actor_identifier,
role,
org,
space_number
)
SELECT 
'{{ actor_type }}' /* required */,
'{{ actor_identifier }}' /* required */,
'{{ role }}' /* required */,
'{{ org }}',
'{{ space_number }}'
RETURNING
id,
name,
gravatar_id,
node_id,
organization_id,
actor_type,
avatar_url,
description,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
login,
members_url,
notification_setting,
organizations_url,
parent,
privacy,
received_events_url,
repos_url,
repositories_url,
role,
site_admin,
slug,
starred_at,
starred_url,
subscriptions_url,
type,
url,
user_view_type
;
```
</TabItem>
<TabItem value="add_collaborator_for_user">

Adds a collaborator to a specific Copilot Space owned by a user. The authenticated user must be the owner of the space or have admin access to the space.<br /><br />Team collaborators are not supported for user-owned Copilot Spaces.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
INSERT INTO github.copilot_spaces.collaborators (
actor_type,
actor_identifier,
role,
username,
space_number
)
SELECT 
'{{ actor_type }}' /* required */,
'{{ actor_identifier }}' /* required */,
'{{ role }}' /* required */,
'{{ username }}',
'{{ space_number }}'
RETURNING
id,
name,
gravatar_id,
node_id,
organization_id,
actor_type,
avatar_url,
description,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
login,
members_url,
notification_setting,
organizations_url,
parent,
privacy,
received_events_url,
repos_url,
repositories_url,
role,
site_admin,
slug,
starred_at,
starred_url,
subscriptions_url,
type,
url,
user_view_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: collaborators
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the collaborators resource.
    - name: space_number
      value: {{ space_number }}
      description: Required parameter for the collaborators resource.
    - name: username
      value: "{{ username }}"
      description: Required parameter for the collaborators resource.
    - name: actor_type
      value: "{{ actor_type }}"
      description: |
        The type of actor (must be \`User\` for user-owned spaces; \`Team\` will be rejected).
      valid_values: ['User', 'Team']
    - name: actor_identifier
      value: "{{ actor_identifier }}"
      description: |
        The username of the collaborator. The numeric user ID is also accepted.
    - name: role
      value: "{{ role }}"
      description: |
        The role to grant to the collaborator.
      valid_values: ['reader', 'writer', 'admin']
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_collaborator_for_org"
    values={[
        { label: 'update_collaborator_for_org', value: 'update_collaborator_for_org' },
        { label: 'update_collaborator_for_user', value: 'update_collaborator_for_user' }
    ]}
>
<TabItem value="update_collaborator_for_org">

Updates the role of a collaborator for a specific Copilot Space owned by an organization. The authenticated user must have appropriate permissions to manage collaborators.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
REPLACE github.copilot_spaces.collaborators
SET 
role = '{{ role }}'
WHERE 
org = '{{ org }}' --required
AND space_number = '{{ space_number }}' --required
AND actor_type = '{{ actor_type }}' --required
AND actor_identifier = '{{ actor_identifier }}' --required
AND role = '{{ role }}' --required
RETURNING
id,
name,
gravatar_id,
node_id,
organization_id,
actor_type,
avatar_url,
description,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
login,
members_url,
notification_setting,
organizations_url,
parent,
privacy,
received_events_url,
repos_url,
repositories_url,
role,
site_admin,
slug,
starred_at,
starred_url,
subscriptions_url,
type,
url,
user_view_type;
```
</TabItem>
<TabItem value="update_collaborator_for_user">

Updates the role of a collaborator for a specific Copilot Space owned by a user. The authenticated user must be the owner of the space or have admin access to the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
REPLACE github.copilot_spaces.collaborators
SET 
role = '{{ role }}'
WHERE 
username = '{{ username }}' --required
AND space_number = '{{ space_number }}' --required
AND actor_type = '{{ actor_type }}' --required
AND actor_identifier = '{{ actor_identifier }}' --required
AND role = '{{ role }}' --required
RETURNING
id,
name,
gravatar_id,
node_id,
organization_id,
actor_type,
avatar_url,
description,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
login,
members_url,
notification_setting,
organizations_url,
parent,
privacy,
received_events_url,
repos_url,
repositories_url,
role,
site_admin,
slug,
starred_at,
starred_url,
subscriptions_url,
type,
url,
user_view_type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_collaborator_for_org"
    values={[
        { label: 'remove_collaborator_for_org', value: 'remove_collaborator_for_org' },
        { label: 'remove_collaborator_for_user', value: 'remove_collaborator_for_user' }
    ]}
>
<TabItem value="remove_collaborator_for_org">

Removes a collaborator from a specific Copilot Space owned by an organization. The authenticated user must have appropriate permissions to manage collaborators.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.<br /><br />Fine-grained tokens and GitHub App user access tokens must have been granted access to the organization that owns the space. They must also have been granted access to every repository referenced by resources in the space.

```sql
DELETE FROM github.copilot_spaces.collaborators
WHERE org = '{{ org }}' --required
AND space_number = '{{ space_number }}' --required
AND actor_type = '{{ actor_type }}' --required
AND actor_identifier = '{{ actor_identifier }}' --required
;
```
</TabItem>
<TabItem value="remove_collaborator_for_user">

Removes a collaborator from a specific Copilot Space owned by a user. The authenticated user must be the owner of the space or have admin access to the space.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
DELETE FROM github.copilot_spaces.collaborators
WHERE username = '{{ username }}' --required
AND space_number = '{{ space_number }}' --required
AND actor_type = '{{ actor_type }}' --required
AND actor_identifier = '{{ actor_identifier }}' --required
;
```
</TabItem>
</Tabs>
