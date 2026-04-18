--- 
title: collaborators
hide_title: false
hide_table_of_contents: false
keywords:
  - collaborators
  - repos
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
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.collaborators" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_collaborators"
    values={[
        { label: 'list_collaborators', value: 'list_collaborators' }
    ]}
>
<TabItem value="list_collaborators">

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
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td> (example: admin)</td>
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
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
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
    <td><CopyableCode code="site_admin" /></td>
    <td><code>boolean</code></td>
    <td></td>
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
    <td><a href="#list_collaborators"><CopyableCode code="list_collaborators" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-affiliation"><code>affiliation</code></a>, <a href="#parameter-permission"><code>permission</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.<br />The `permissions` hash returned in the response contains the base role permissions of the collaborator. The `role_name` is the highest role assigned to the collaborator after considering all sources of grants, including: repo, teams, organization, and enterprise.<br />There is presently not a way to differentiate between an organization level grant and a repository level grant from this endpoint response.<br /><br />Team members will include the members of child teams.<br /><br />The authenticated user must have write, maintain, or admin privileges on the repository to use this endpoint. For organization-owned repositories, the authenticated user needs to be a member of the organization.<br />OAuth app tokens and personal access tokens (classic) need the `read:org` and `repo` scopes to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#add_collaborator"><CopyableCode code="add_collaborator" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Add a user to a repository with a specified level of access. If the repository is owned by an organization, this API does not add the user to the organization - a user that has repository access without being an organization member is called an "outside collaborator" (if they are not an Enterprise Managed User) or a "repository collaborator" if they are an Enterprise Managed User. These users are exempt from some organization policies - see "[Adding outside collaborators to repositories](https://docs.github.com/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)" to learn more about these collaborator types.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).<br /><br />Adding an outside collaborator may be restricted by enterprise and organization administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)" and "[Setting permissions for adding outside collaborators](https://docs.github.com/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)" for organization settings.<br /><br />For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the role being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:<br /><br />```<br />Cannot assign &#123;member&#125; permission of &#123;role name&#125;<br />```<br /><br />Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."<br /><br />The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [API](https://docs.github.com/rest/collaborators/invitations).<br /><br />For Enterprise Managed Users, this endpoint does not send invitations - these users are automatically added to organizations and repositories. Enterprise Managed Users can only be added to organizations and repositories within their enterprise.<br /><br />**Updating an existing collaborator's permission level**<br /><br />The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.<br /><br />**Rate limits**<br /><br />You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.</td>
</tr>
<tr>
    <td><a href="#remove_collaborator"><CopyableCode code="remove_collaborator" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Removes a collaborator from a repository.<br /><br />To use this endpoint, the authenticated user must either be an administrator of the repository or target themselves for removal.<br /><br />This endpoint also:<br />- Cancels any outstanding invitations sent by the collaborator<br />- Unassigns the user from any issues<br />- Removes access to organization projects if the user is not an organization member and is not a collaborator on any other organization repositories.<br />- Unstars the repository<br />- Updates access permissions to packages<br /><br />Removing a user as a collaborator has the following effects on forks:<br /> - If the user had access to a fork through their membership to this repository, the user will also be removed from the fork.<br /> - If the user had their own fork of the repository, the fork will be deleted.<br /> - If the user still has read access to the repository, open pull requests by this user from a fork will be denied.<br /><br />&gt; [!NOTE]<br />&gt; A user can still have access to the repository through organization permissions like base repository permissions.<br /><br />Although the API responds immediately, the additional permission updates might take some extra time to complete in the background.<br /><br />For more information on fork permissions, see "[About permissions and visibility of forks](https://docs.github.com/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks)".</td>
</tr>
<tr>
    <td><a href="#check_collaborator"><CopyableCode code="check_collaborator" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.<br /><br />Team members will include the members of child teams.<br /><br />The authenticated user must have push access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` and `repo` scopes to use this endpoint.</td>
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
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-affiliation">
    <td><CopyableCode code="affiliation" /></td>
    <td><code>string</code></td>
    <td>Filter collaborators returned by their affiliation. `outside` means all outside collaborators of an organization-owned repository. `direct` means all collaborators with permissions to an organization-owned repository, regardless of organization membership status. `all` means all collaborators the authenticated user can see.</td>
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
<tr id="parameter-permission">
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>Filter collaborators by the permissions they have on the repository. If not specified, all collaborators will be returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_collaborators"
    values={[
        { label: 'list_collaborators', value: 'list_collaborators' }
    ]}
>
<TabItem value="list_collaborators">

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.<br />The `permissions` hash returned in the response contains the base role permissions of the collaborator. The `role_name` is the highest role assigned to the collaborator after considering all sources of grants, including: repo, teams, organization, and enterprise.<br />There is presently not a way to differentiate between an organization level grant and a repository level grant from this endpoint response.<br /><br />Team members will include the members of child teams.<br /><br />The authenticated user must have write, maintain, or admin privileges on the repository to use this endpoint. For organization-owned repositories, the authenticated user needs to be a member of the organization.<br />OAuth app tokens and personal access tokens (classic) need the `read:org` and `repo` scopes to use this endpoint.

```sql
SELECT
id,
name,
gravatar_id,
node_id,
role_name,
avatar_url,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
login,
organizations_url,
permissions,
received_events_url,
repos_url,
site_admin,
starred_url,
subscriptions_url,
type,
url,
user_view_type
FROM github.repos.collaborators
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND affiliation = '{{ affiliation }}'
AND permission = '{{ permission }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_collaborator"
    values={[
        { label: 'add_collaborator', value: 'add_collaborator' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_collaborator">

Add a user to a repository with a specified level of access. If the repository is owned by an organization, this API does not add the user to the organization - a user that has repository access without being an organization member is called an "outside collaborator" (if they are not an Enterprise Managed User) or a "repository collaborator" if they are an Enterprise Managed User. These users are exempt from some organization policies - see "[Adding outside collaborators to repositories](https://docs.github.com/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/adding-outside-collaborators-to-repositories-in-your-organization)" to learn more about these collaborator types.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).<br /><br />Adding an outside collaborator may be restricted by enterprise and organization administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)" and "[Setting permissions for adding outside collaborators](https://docs.github.com/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)" for organization settings.<br /><br />For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the role being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:<br /><br />```<br />Cannot assign &#123;member&#125; permission of &#123;role name&#125;<br />```<br /><br />Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."<br /><br />The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [API](https://docs.github.com/rest/collaborators/invitations).<br /><br />For Enterprise Managed Users, this endpoint does not send invitations - these users are automatically added to organizations and repositories. Enterprise Managed Users can only be added to organizations and repositories within their enterprise.<br /><br />**Updating an existing collaborator's permission level**<br /><br />The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.<br /><br />**Rate limits**<br /><br />You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.

```sql
INSERT INTO github.repos.collaborators (
permission,
owner,
repo,
username
)
SELECT 
'{{ permission }}',
'{{ owner }}',
'{{ repo }}',
'{{ username }}'
RETURNING
id,
node_id,
created_at,
expired,
html_url,
invitee,
inviter,
permissions,
repository,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: collaborators
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the collaborators resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the collaborators resource.
    - name: username
      value: "{{ username }}"
      description: Required parameter for the collaborators resource.
    - name: permission
      value: "{{ permission }}"
      description: |
        The permission to grant the collaborator. **Only valid on organization-owned repositories.** We accept the following permissions to be set: \`pull\`, \`triage\`, \`push\`, \`maintain\`, \`admin\` and you can also specify a custom repository role name, if the owning organization has defined any.
      default: push
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_collaborator"
    values={[
        { label: 'remove_collaborator', value: 'remove_collaborator' }
    ]}
>
<TabItem value="remove_collaborator">

Removes a collaborator from a repository.<br /><br />To use this endpoint, the authenticated user must either be an administrator of the repository or target themselves for removal.<br /><br />This endpoint also:<br />- Cancels any outstanding invitations sent by the collaborator<br />- Unassigns the user from any issues<br />- Removes access to organization projects if the user is not an organization member and is not a collaborator on any other organization repositories.<br />- Unstars the repository<br />- Updates access permissions to packages<br /><br />Removing a user as a collaborator has the following effects on forks:<br /> - If the user had access to a fork through their membership to this repository, the user will also be removed from the fork.<br /> - If the user had their own fork of the repository, the fork will be deleted.<br /> - If the user still has read access to the repository, open pull requests by this user from a fork will be denied.<br /><br />&gt; [!NOTE]<br />&gt; A user can still have access to the repository through organization permissions like base repository permissions.<br /><br />Although the API responds immediately, the additional permission updates might take some extra time to complete in the background.<br /><br />For more information on fork permissions, see "[About permissions and visibility of forks](https://docs.github.com/pull-requests/collaborating-with-pull-requests/working-with-forks/about-permissions-and-visibility-of-forks)".

```sql
DELETE FROM github.repos.collaborators
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND username = '{{ username }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_collaborator"
    values={[
        { label: 'check_collaborator', value: 'check_collaborator' }
    ]}
>
<TabItem value="check_collaborator">

For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.<br /><br />Team members will include the members of child teams.<br /><br />The authenticated user must have push access to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` and `repo` scopes to use this endpoint.

```sql
EXEC github.repos.collaborators.check_collaborator 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@username='{{ username }}' --required
;
```
</TabItem>
</Tabs>
