--- 
title: teams
hide_title: false
hide_table_of_contents: false
keywords:
  - teams
  - teams
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

Creates, updates, deletes, gets or lists a <code>teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.teams.teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get_legacy', value: 'get_legacy' }
    ]}
>
<TabItem value="list">

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
<TabItem value="get_legacy">

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
    <td><code>integer</code></td>
    <td>Unique identifier of the team</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the team (example: Developers)</td>
</tr>
<tr>
    <td><CopyableCode code="enterprise_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the enterprise to which this team belongs</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDQ6VGVhbTE=)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the organization to which this team belongs</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-07-14T16:53:42Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: A great team.)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/orgs/rails/teams/core)</td>
</tr>
<tr>
    <td><CopyableCode code="ldap_dn" /></td>
    <td><code>string</code></td>
    <td>The [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team. (example: cn=Enterprise Ops,ou=teams,dc=github,dc=com)</td>
</tr>
<tr>
    <td><CopyableCode code="members_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/organizations/1/team/1/members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_setting" /></td>
    <td><code>string</code></td>
    <td>The notification setting the team has set (notifications_enabled, notifications_disabled) (example: notifications_enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>Team Organization (title: Team Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="parent" /></td>
    <td><code>object</code></td>
    <td>Groups of organization members that gives permissions on specified repositories. (title: Team Simple)</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>Permission that the team will have for its repositories (example: push)</td>
</tr>
<tr>
    <td><CopyableCode code="privacy" /></td>
    <td><code>string</code></td>
    <td>The level of privacy this team should have (closed, secret) (example: closed)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repositories_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/organizations/1/team/1/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td> (example: justice-league)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The ownership type of the team (enterprise, organization)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-08-17T12:37:15Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the team (example: https://api.github.com/organizations/1/team/1)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-team_type"><code>team_type</code></a></td>
    <td>Lists all teams in an organization that are visible to the authenticated user.</td>
</tr>
<tr>
    <td><a href="#get_legacy"><CopyableCode code="get_legacy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/rest/teams/teams#get-a-team-by-name) endpoint.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>To create a team, the authenticated user must be a member or owner of `&#123;org&#125;`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/articles/setting-team-creation-permissions-in-your-organization)."<br /><br />When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/about-teams)".</td>
</tr>
<tr>
    <td><a href="#update_in_org"><CopyableCode code="update_in_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td></td>
    <td>To edit a team, the authenticated user must either be an organization owner or a team maintainer.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;`.</td>
</tr>
<tr>
    <td><a href="#update_legacy"><CopyableCode code="update_legacy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/rest/teams/teams#update-a-team) endpoint.<br /><br />To edit a team, the authenticated user must either be an organization owner or a team maintainer.<br /><br />&gt; [!NOTE]<br />&gt; With nested teams, the `privacy` for parent teams cannot be `secret`.</td>
</tr>
<tr>
    <td><a href="#delete_in_org"><CopyableCode code="delete_in_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td></td>
    <td>To delete a team, the authenticated user must be an organization owner or team maintainer.<br /><br />If you are an organization owner, deleting a parent team will delete all of its child teams as well.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;`.</td>
</tr>
<tr>
    <td><a href="#delete_legacy"><CopyableCode code="delete_legacy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/rest/teams/teams#delete-a-team) endpoint.<br /><br />To delete a team, the authenticated user must be an organization owner or team maintainer.<br /><br />If you are an organization owner, deleting a parent team will delete all of its child teams as well.</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the team.</td>
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
<tr id="parameter-team_type">
    <td><CopyableCode code="team_type" /></td>
    <td><code>string</code></td>
    <td>Filter team results by their type. For more information, see "[What kind of team should I use?](https://docs.github.com/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/teams-in-an-enterprise#what-kind-of-team-should-i-use)"</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' },
        { label: 'get_legacy', value: 'get_legacy' }
    ]}
>
<TabItem value="list">

Lists all teams in an organization that are visible to the authenticated user.

```sql
SELECT
id,
name,
enterprise_id,
node_id,
organization_id,
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
FROM github.teams.teams
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND team_type = '{{ team_type }}'
;
```
</TabItem>
<TabItem value="get_legacy">

&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/rest/teams/teams#get-a-team-by-name) endpoint.

```sql
SELECT
id,
name,
enterprise_id,
node_id,
organization_id,
created_at,
description,
html_url,
ldap_dn,
members_count,
members_url,
notification_setting,
organization,
parent,
permission,
privacy,
repos_count,
repositories_url,
slug,
type,
updated_at,
url
FROM github.teams.teams
WHERE team_id = '{{ team_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

To create a team, the authenticated user must be a member or owner of `&#123;org&#125;`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/articles/setting-team-creation-permissions-in-your-organization)."<br /><br />When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/about-teams)".

```sql
INSERT INTO github.teams.teams (
name,
description,
maintainers,
repo_names,
privacy,
notification_setting,
permission,
parent_team_id,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ maintainers }}',
'{{ repo_names }}',
'{{ privacy }}',
'{{ notification_setting }}',
'{{ permission }}',
{{ parent_team_id }},
'{{ org }}'
RETURNING
id,
name,
enterprise_id,
node_id,
organization_id,
created_at,
description,
html_url,
ldap_dn,
members_count,
members_url,
notification_setting,
organization,
parent,
permission,
privacy,
repos_count,
repositories_url,
slug,
type,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: teams
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the teams resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the team.
    - name: description
      value: "{{ description }}"
      description: |
        The description of the team.
    - name: maintainers
      value:
        - "{{ maintainers }}"
      description: |
        List GitHub usernames for organization members who will become team maintainers.
    - name: repo_names
      value:
        - "{{ repo_names }}"
      description: |
        The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
    - name: privacy
      value: "{{ privacy }}"
      description: |
        The level of privacy this team should have. The options are:
        **For a non-nested team:**
        * \`secret\` - only visible to organization owners and members of this team.
        * \`closed\` - visible to all members of this organization.
        Default: \`secret\`
        **For a parent or child team:**
        * \`closed\` - visible to all members of this organization.
        Default for child team: \`closed\`
      valid_values: ['secret', 'closed']
    - name: notification_setting
      value: "{{ notification_setting }}"
      description: |
        The notification setting the team has chosen. The options are:
        * \`notifications_enabled\` - team members receive notifications when the team is @mentioned.
        * \`notifications_disabled\` - no one receives notifications.
        Default: \`notifications_enabled\`
      valid_values: ['notifications_enabled', 'notifications_disabled']
    - name: permission
      value: "{{ permission }}"
      description: |
        **Closing down notice**. The permission that new repositories will be added to the team with when none is specified.
      valid_values: ['pull', 'push']
      default: pull
    - name: parent_team_id
      value: {{ parent_team_id }}
      description: |
        The ID of a team to set as the parent team.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_in_org"
    values={[
        { label: 'update_in_org', value: 'update_in_org' },
        { label: 'update_legacy', value: 'update_legacy' }
    ]}
>
<TabItem value="update_in_org">

To edit a team, the authenticated user must either be an organization owner or a team maintainer.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;`.

```sql
UPDATE github.teams.teams
SET 
name = '{{ name }}',
description = '{{ description }}',
privacy = '{{ privacy }}',
notification_setting = '{{ notification_setting }}',
permission = '{{ permission }}',
parent_team_id = {{ parent_team_id }}
WHERE 
org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
RETURNING
id,
name,
enterprise_id,
node_id,
organization_id,
created_at,
description,
html_url,
ldap_dn,
members_count,
members_url,
notification_setting,
organization,
parent,
permission,
privacy,
repos_count,
repositories_url,
slug,
type,
updated_at,
url;
```
</TabItem>
<TabItem value="update_legacy">

&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/rest/teams/teams#update-a-team) endpoint.<br /><br />To edit a team, the authenticated user must either be an organization owner or a team maintainer.<br /><br />&gt; [!NOTE]<br />&gt; With nested teams, the `privacy` for parent teams cannot be `secret`.

```sql
UPDATE github.teams.teams
SET 
name = '{{ name }}',
description = '{{ description }}',
privacy = '{{ privacy }}',
notification_setting = '{{ notification_setting }}',
permission = '{{ permission }}',
parent_team_id = {{ parent_team_id }}
WHERE 
team_id = '{{ team_id }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
enterprise_id,
node_id,
organization_id,
created_at,
description,
html_url,
ldap_dn,
members_count,
members_url,
notification_setting,
organization,
parent,
permission,
privacy,
repos_count,
repositories_url,
slug,
type,
updated_at,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_in_org"
    values={[
        { label: 'delete_in_org', value: 'delete_in_org' },
        { label: 'delete_legacy', value: 'delete_legacy' }
    ]}
>
<TabItem value="delete_in_org">

To delete a team, the authenticated user must be an organization owner or team maintainer.<br /><br />If you are an organization owner, deleting a parent team will delete all of its child teams as well.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;`.

```sql
DELETE FROM github.teams.teams
WHERE org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
;
```
</TabItem>
<TabItem value="delete_legacy">

&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/rest/teams/teams#delete-a-team) endpoint.<br /><br />To delete a team, the authenticated user must be an organization owner or team maintainer.<br /><br />If you are an organization owner, deleting a parent team will delete all of its child teams as well.

```sql
DELETE FROM github.teams.teams
WHERE team_id = '{{ team_id }}' --required
;
```
</TabItem>
</Tabs>
