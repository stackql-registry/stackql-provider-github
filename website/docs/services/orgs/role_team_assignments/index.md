--- 
title: role_team_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - role_team_assignments
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

Creates, updates, deletes, gets or lists a <code>role_team_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_team_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.role_team_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_org_role_teams"
    values={[
        { label: 'list_org_role_teams', value: 'list_org_role_teams' }
    ]}
>
<TabItem value="list_org_role_teams">

Response - List of assigned teams

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
    <td><CopyableCode code="enterprise_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the enterprise to which this team belongs</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the organization to which this team belongs</td>
</tr>
<tr>
    <td><CopyableCode code="assignment" /></td>
    <td><code>string</code></td>
    <td>Determines if the team has a direct, indirect, or mixed relationship to a role (direct, indirect, mixed) (example: direct)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/orgs/rails/teams/core)</td>
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
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>Groups of organization members that gives permissions on specified repositories. (title: Team Simple)</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="privacy" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repositories_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The ownership type of the team (enterprise, organization)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
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
    <td><a href="#list_org_role_teams"><CopyableCode code="list_org_role_teams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-role_id"><code>role_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the teams that are assigned to an organization role. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />To use this endpoint, you must be an administrator for the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#assign_team_to_org_role"><CopyableCode code="assign_team_to_org_role" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a>, <a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Assigns an organization role to a team in an organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#revoke_org_role_team"><CopyableCode code="revoke_org_role_team" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a>, <a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Removes an organization role from a team. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#revoke_all_org_roles_team"><CopyableCode code="revoke_all_org_roles_team" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td></td>
    <td>Removes all assigned organization roles from a team. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-team_slug">
    <td><CopyableCode code="team_slug" /></td>
    <td><code>string</code></td>
    <td>The slug of the team name.</td>
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
    defaultValue="list_org_role_teams"
    values={[
        { label: 'list_org_role_teams', value: 'list_org_role_teams' }
    ]}
>
<TabItem value="list_org_role_teams">

Lists the teams that are assigned to an organization role. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />To use this endpoint, you must be an administrator for the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
id,
name,
enterprise_id,
node_id,
organization_id,
assignment,
description,
html_url,
members_url,
notification_setting,
parent,
permission,
permissions,
privacy,
repositories_url,
slug,
type,
url
FROM github.orgs.role_team_assignments
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
    defaultValue="assign_team_to_org_role"
    values={[
        { label: 'assign_team_to_org_role', value: 'assign_team_to_org_role' }
    ]}
>
<TabItem value="assign_team_to_org_role">

Assigns an organization role to a team in an organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.orgs.role_team_assignments
SET 
-- No updatable properties
WHERE 
org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
AND role_id = '{{ role_id }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="revoke_org_role_team"
    values={[
        { label: 'revoke_org_role_team', value: 'revoke_org_role_team' },
        { label: 'revoke_all_org_roles_team', value: 'revoke_all_org_roles_team' }
    ]}
>
<TabItem value="revoke_org_role_team">

Removes an organization role from a team. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.orgs.role_team_assignments
WHERE org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
AND role_id = '{{ role_id }}' --required
;
```
</TabItem>
<TabItem value="revoke_all_org_roles_team">

Removes all assigned organization roles from a team. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />The authenticated user must be an administrator for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.orgs.role_team_assignments
WHERE org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
;
```
</TabItem>
</Tabs>
