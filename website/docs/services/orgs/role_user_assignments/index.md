--- 
title: role_user_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - role_user_assignments
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

Creates, updates, deletes, gets or lists a <code>role_user_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_user_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.role_user_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_org_role_users"
    values={[
        { label: 'list_org_role_users', value: 'list_org_role_users' }
    ]}
>
<TabItem value="list_org_role_users">

Response - List of assigned users

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
    <td><CopyableCode code="assignment" /></td>
    <td><code>string</code></td>
    <td>Determines if the user has a direct, indirect, or mixed relationship to a role (direct, indirect, mixed) (example: direct)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
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
    <td><CopyableCode code="inherited_from" /></td>
    <td><code>array</code></td>
    <td>Team the user has gotten the role through</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="organizations_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/orgs)</td>
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
    <td><CopyableCode code="site_admin" /></td>
    <td><code>boolean</code></td>
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
    <td><a href="#list_org_role_users"><CopyableCode code="list_org_role_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-role_id"><code>role_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists organization members that are assigned to an organization role. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />To use this endpoint, you must be an administrator for the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#assign_user_to_org_role"><CopyableCode code="assign_user_to_org_role" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Assigns an organization role to a member of an organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#revoke_org_role_user"><CopyableCode code="revoke_org_role_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Remove an organization role from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#revoke_all_org_roles_user"><CopyableCode code="revoke_all_org_roles_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Revokes all assigned organization roles from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-role_id">
    <td><CopyableCode code="role_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the role.</td>
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
    defaultValue="list_org_role_users"
    values={[
        { label: 'list_org_role_users', value: 'list_org_role_users' }
    ]}
>
<TabItem value="list_org_role_users">

Lists organization members that are assigned to an organization role. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />To use this endpoint, you must be an administrator for the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
id,
name,
gravatar_id,
node_id,
assignment,
avatar_url,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
inherited_from,
login,
organizations_url,
received_events_url,
repos_url,
site_admin,
starred_at,
starred_url,
subscriptions_url,
type,
url,
user_view_type
FROM github.orgs.role_user_assignments
WHERE org = '{{ org }}' -- required
AND role_id = '{{ role_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="assign_user_to_org_role"
    values={[
        { label: 'assign_user_to_org_role', value: 'assign_user_to_org_role' }
    ]}
>
<TabItem value="assign_user_to_org_role">

Assigns an organization role to a member of an organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.orgs.role_user_assignments
SET 
-- No updatable properties
WHERE 
org = '{{ org }}' --required
AND username = '{{ username }}' --required
AND role_id = '{{ role_id }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="revoke_org_role_user"
    values={[
        { label: 'revoke_org_role_user', value: 'revoke_org_role_user' },
        { label: 'revoke_all_org_roles_user', value: 'revoke_all_org_roles_user' }
    ]}
>
<TabItem value="revoke_org_role_user">

Remove an organization role from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.orgs.role_user_assignments
WHERE org = '{{ org }}' --required
AND username = '{{ username }}' --required
AND role_id = '{{ role_id }}' --required
;
```
</TabItem>
<TabItem value="revoke_all_org_roles_user">

Revokes all assigned organization roles from a user. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.orgs.role_user_assignments
WHERE org = '{{ org }}' --required
AND username = '{{ username }}' --required
;
```
</TabItem>
</Tabs>
