--- 
title: membership
hide_title: false
hide_table_of_contents: false
keywords:
  - membership
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

Creates, updates, deletes, gets or lists a <code>membership</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="membership" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.teams.membership" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_membership_for_user_in_org"
    values={[
        { label: 'get_membership_for_user_in_org', value: 'get_membership_for_user_in_org' },
        { label: 'get_membership_for_user_legacy', value: 'get_membership_for_user_legacy' }
    ]}
>
<TabItem value="get_membership_for_user_in_org">

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
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role of the user in the team. (member, maintainer) (default: member, example: member)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the user's membership in the team. (active, pending)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_membership_for_user_legacy">

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
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The role of the user in the team. (member, maintainer) (default: member, example: member)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the user's membership in the team. (active, pending)</td>
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
    <td><a href="#get_membership_for_user_in_org"><CopyableCode code="get_membership_for_user_in_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Team members will include the members of child teams.<br /><br />To get a user's membership with a team, the team must be visible to the authenticated user.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/memberships/&#123;username&#125;`.<br /><br />&gt; [!NOTE]<br />&gt; The response contains the `state` of the membership and the member's `role`.<br /><br />The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/teams/teams#create-a-team).</td>
</tr>
<tr>
    <td><a href="#get_membership_for_user_legacy"><CopyableCode code="get_membership_for_user_legacy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/rest/teams/members#get-team-membership-for-a-user) endpoint.<br /><br />Team members will include the members of child teams.<br /><br />To get a user's membership with a team, the team must be visible to the authenticated user.<br /><br />**Note:**<br />The response contains the `state` of the membership and the member's `role`.<br /><br />The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/teams/teams#create-a-team).</td>
</tr>
<tr>
    <td><a href="#add_or_update_membership_for_user_in_org"><CopyableCode code="add_or_update_membership_for_user_in_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.<br /><br />Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />&gt; [!NOTE]<br />&gt; When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."<br /><br />An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.<br /><br />If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/memberships/&#123;username&#125;`.</td>
</tr>
<tr>
    <td><a href="#add_or_update_membership_for_user_legacy"><CopyableCode code="add_or_update_membership_for_user_legacy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/rest/teams/members#add-or-update-team-membership-for-a-user) endpoint.<br /><br />Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.<br /><br />&gt; [!NOTE]<br />&gt; When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."<br /><br />If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.<br /><br />If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.</td>
</tr>
<tr>
    <td><a href="#remove_membership_for_user_in_org"><CopyableCode code="remove_membership_for_user_in_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.<br /><br />Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />&gt; [!NOTE]<br />&gt; When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/memberships/&#123;username&#125;`.</td>
</tr>
<tr>
    <td><a href="#remove_membership_for_user_legacy"><CopyableCode code="remove_membership_for_user_legacy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/rest/teams/members#remove-team-membership-for-a-user) endpoint.<br /><br />Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.<br /><br />&gt; [!NOTE]<br />&gt; When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_membership_for_user_in_org"
    values={[
        { label: 'get_membership_for_user_in_org', value: 'get_membership_for_user_in_org' },
        { label: 'get_membership_for_user_legacy', value: 'get_membership_for_user_legacy' }
    ]}
>
<TabItem value="get_membership_for_user_in_org">

Team members will include the members of child teams.<br /><br />To get a user's membership with a team, the team must be visible to the authenticated user.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/memberships/&#123;username&#125;`.<br /><br />&gt; [!NOTE]<br />&gt; The response contains the `state` of the membership and the member's `role`.<br /><br />The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/teams/teams#create-a-team).

```sql
SELECT
role,
state,
url
FROM github.teams.membership
WHERE org = '{{ org }}' -- required
AND team_slug = '{{ team_slug }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="get_membership_for_user_legacy">

&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/rest/teams/members#get-team-membership-for-a-user) endpoint.<br /><br />Team members will include the members of child teams.<br /><br />To get a user's membership with a team, the team must be visible to the authenticated user.<br /><br />**Note:**<br />The response contains the `state` of the membership and the member's `role`.<br /><br />The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/teams/teams#create-a-team).

```sql
SELECT
role,
state,
url
FROM github.teams.membership
WHERE team_id = '{{ team_id }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="add_or_update_membership_for_user_in_org"
    values={[
        { label: 'add_or_update_membership_for_user_in_org', value: 'add_or_update_membership_for_user_in_org' },
        { label: 'add_or_update_membership_for_user_legacy', value: 'add_or_update_membership_for_user_legacy' }
    ]}
>
<TabItem value="add_or_update_membership_for_user_in_org">

Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.<br /><br />Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />&gt; [!NOTE]<br />&gt; When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."<br /><br />An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.<br /><br />If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/memberships/&#123;username&#125;`.

```sql
REPLACE github.teams.membership
SET 
role = '{{ role }}'
WHERE 
org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
AND username = '{{ username }}' --required
RETURNING
role,
state,
url;
```
</TabItem>
<TabItem value="add_or_update_membership_for_user_legacy">

&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/rest/teams/members#add-or-update-team-membership-for-a-user) endpoint.<br /><br />Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.<br /><br />&gt; [!NOTE]<br />&gt; When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."<br /><br />If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.<br /><br />If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

```sql
REPLACE github.teams.membership
SET 
role = '{{ role }}'
WHERE 
team_id = '{{ team_id }}' --required
AND username = '{{ username }}' --required
RETURNING
role,
state,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_membership_for_user_in_org"
    values={[
        { label: 'remove_membership_for_user_in_org', value: 'remove_membership_for_user_in_org' },
        { label: 'remove_membership_for_user_legacy', value: 'remove_membership_for_user_legacy' }
    ]}
>
<TabItem value="remove_membership_for_user_in_org">

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.<br /><br />Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />&gt; [!NOTE]<br />&gt; When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/memberships/&#123;username&#125;`.

```sql
DELETE FROM github.teams.membership
WHERE org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
AND username = '{{ username }}' --required
;
```
</TabItem>
<TabItem value="remove_membership_for_user_legacy">

&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/rest/teams/members#remove-team-membership-for-a-user) endpoint.<br /><br />Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.<br /><br />&gt; [!NOTE]<br />&gt; When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

```sql
DELETE FROM github.teams.membership
WHERE team_id = '{{ team_id }}' --required
AND username = '{{ username }}' --required
;
```
</TabItem>
</Tabs>
