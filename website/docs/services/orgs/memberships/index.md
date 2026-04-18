--- 
title: memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - memberships
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

Creates, updates, deletes, gets or lists a <code>memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_membership_for_user"
    values={[
        { label: 'get_membership_for_user', value: 'get_membership_for_user' },
        { label: 'get_membership_for_authenticated_user', value: 'get_membership_for_authenticated_user' },
        { label: 'list_memberships_for_authenticated_user', value: 'list_memberships_for_authenticated_user' }
    ]}
>
<TabItem value="get_membership_for_user">

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
    <td><CopyableCode code="direct_membership" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has direct membership in the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="enterprise_teams_providing_indirect_membership" /></td>
    <td><code>array</code></td>
    <td>The slugs of the enterprise teams providing the user with indirect membership in the organization. A limit of 100 enterprise team slugs is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>A GitHub organization. (title: Organization Simple)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The user's membership type in the organization. (admin, member, billing_manager) (example: admin)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation. (active, pending) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat/memberships/defunkt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_membership_for_authenticated_user">

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
    <td><CopyableCode code="direct_membership" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has direct membership in the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="enterprise_teams_providing_indirect_membership" /></td>
    <td><code>array</code></td>
    <td>The slugs of the enterprise teams providing the user with indirect membership in the organization. A limit of 100 enterprise team slugs is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>A GitHub organization. (title: Organization Simple)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The user's membership type in the organization. (admin, member, billing_manager) (example: admin)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation. (active, pending) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat/memberships/defunkt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_memberships_for_authenticated_user">

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
    <td><CopyableCode code="direct_membership" /></td>
    <td><code>boolean</code></td>
    <td>Whether the user has direct membership in the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="enterprise_teams_providing_indirect_membership" /></td>
    <td><code>array</code></td>
    <td>The slugs of the enterprise teams providing the user with indirect membership in the organization. A limit of 100 enterprise team slugs is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>A GitHub organization. (title: Organization Simple)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>The user's membership type in the organization. (admin, member, billing_manager) (example: admin)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation. (active, pending) (example: active)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/octocat/memberships/defunkt)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
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
    <td><a href="#get_membership_for_user"><CopyableCode code="get_membership_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.</td>
</tr>
<tr>
    <td><a href="#get_membership_for_authenticated_user"><CopyableCode code="get_membership_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>If the authenticated user is an active or pending member of the organization, this endpoint will return the user's membership. If the authenticated user is not affiliated with the organization, a `404` is returned. This endpoint will return a `403` if the request is made by a GitHub App that is blocked by the organization.</td>
</tr>
<tr>
    <td><a href="#list_memberships_for_authenticated_user"><CopyableCode code="list_memberships_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all of the authenticated user's organization memberships.</td>
</tr>
<tr>
    <td><a href="#update_membership_for_authenticated_user"><CopyableCode code="update_membership_for_authenticated_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td></td>
    <td>Converts the authenticated user to an active member of the organization, if that user has a pending invitation from the organization.</td>
</tr>
<tr>
    <td><a href="#set_membership_for_user"><CopyableCode code="set_membership_for_user" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Only authenticated organization owners can add a member to the organization or update the member's role.<br /><br />*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/orgs/members#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.<br />    <br />*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.<br /><br />**Rate limits**<br /><br />To prevent abuse, organization owners are limited to creating 50 organization invitations for an organization within a 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.</td>
</tr>
<tr>
    <td><a href="#remove_membership_for_user"><CopyableCode code="remove_membership_for_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>In order to remove a user's membership with an organization, the authenticated user must be an organization owner.<br /><br />If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.<br /><br />&gt; [!NOTE]<br />&gt; If a user has both direct membership in the organization as well as indirect membership via an enterprise team, only their direct membership will be removed. Their indirect membership via an enterprise team remains until the user is removed from the enterprise team.</td>
</tr>
<tr>
    <td><a href="#check_membership_for_user"><CopyableCode code="check_membership_for_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Check if a user is, publicly or privately, a member of the organization.</td>
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
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Indicates the state of the memberships to return. If not specified, the API returns both active and pending memberships.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_membership_for_user"
    values={[
        { label: 'get_membership_for_user', value: 'get_membership_for_user' },
        { label: 'get_membership_for_authenticated_user', value: 'get_membership_for_authenticated_user' },
        { label: 'list_memberships_for_authenticated_user', value: 'list_memberships_for_authenticated_user' }
    ]}
>
<TabItem value="get_membership_for_user">

In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.

```sql
SELECT
direct_membership,
enterprise_teams_providing_indirect_membership,
organization,
organization_url,
permissions,
role,
state,
url,
user
FROM github.orgs.memberships
WHERE org = '{{ org }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="get_membership_for_authenticated_user">

If the authenticated user is an active or pending member of the organization, this endpoint will return the user's membership. If the authenticated user is not affiliated with the organization, a `404` is returned. This endpoint will return a `403` if the request is made by a GitHub App that is blocked by the organization.

```sql
SELECT
direct_membership,
enterprise_teams_providing_indirect_membership,
organization,
organization_url,
permissions,
role,
state,
url,
user
FROM github.orgs.memberships
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
<TabItem value="list_memberships_for_authenticated_user">

Lists all of the authenticated user's organization memberships.

```sql
SELECT
direct_membership,
enterprise_teams_providing_indirect_membership,
organization,
organization_url,
permissions,
role,
state,
url,
user
FROM github.orgs.memberships
WHERE state = '{{ state }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_membership_for_authenticated_user"
    values={[
        { label: 'update_membership_for_authenticated_user', value: 'update_membership_for_authenticated_user' }
    ]}
>
<TabItem value="update_membership_for_authenticated_user">

Converts the authenticated user to an active member of the organization, if that user has a pending invitation from the organization.

```sql
UPDATE github.orgs.memberships
SET 
state = '{{ state }}'
WHERE 
org = '{{ org }}' --required
AND state = '{{ state }}' --required
RETURNING
direct_membership,
enterprise_teams_providing_indirect_membership,
organization,
organization_url,
permissions,
role,
state,
url,
user;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_membership_for_user"
    values={[
        { label: 'set_membership_for_user', value: 'set_membership_for_user' }
    ]}
>
<TabItem value="set_membership_for_user">

Only authenticated organization owners can add a member to the organization or update the member's role.<br /><br />*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/orgs/members#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.<br />    <br />*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.<br /><br />**Rate limits**<br /><br />To prevent abuse, organization owners are limited to creating 50 organization invitations for an organization within a 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.

```sql
REPLACE github.orgs.memberships
SET 
role = '{{ role }}'
WHERE 
org = '{{ org }}' --required
AND username = '{{ username }}' --required
RETURNING
direct_membership,
enterprise_teams_providing_indirect_membership,
organization,
organization_url,
permissions,
role,
state,
url,
user;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_membership_for_user"
    values={[
        { label: 'remove_membership_for_user', value: 'remove_membership_for_user' }
    ]}
>
<TabItem value="remove_membership_for_user">

In order to remove a user's membership with an organization, the authenticated user must be an organization owner.<br /><br />If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.<br /><br />&gt; [!NOTE]<br />&gt; If a user has both direct membership in the organization as well as indirect membership via an enterprise team, only their direct membership will be removed. Their indirect membership via an enterprise team remains until the user is removed from the enterprise team.

```sql
DELETE FROM github.orgs.memberships
WHERE org = '{{ org }}' --required
AND username = '{{ username }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_membership_for_user"
    values={[
        { label: 'check_membership_for_user', value: 'check_membership_for_user' }
    ]}
>
<TabItem value="check_membership_for_user">

Check if a user is, publicly or privately, a member of the organization.

```sql
EXEC github.orgs.memberships.check_membership_for_user 
@org='{{ org }}' --required, 
@username='{{ username }}' --required
;
```
</TabItem>
</Tabs>
