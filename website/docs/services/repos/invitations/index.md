--- 
title: invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations
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

Creates, updates, deletes, gets or lists an <code>invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_invitations"
    values={[
        { label: 'list_invitations', value: 'list_invitations' },
        { label: 'list_invitations_for_authenticated_user', value: 'list_invitations_for_authenticated_user' }
    ]}
>
<TabItem value="list_invitations">

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
    <td>Unique identifier of the repository invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2016-06-13T14:52:50-05:00)</td>
</tr>
<tr>
    <td><CopyableCode code="expired" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the invitation has expired</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/octocat/Hello-World/invitations)</td>
</tr>
<tr>
    <td><CopyableCode code="invitee" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="inviter" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>string</code></td>
    <td>The permission associated with the invitation. (read, write, admin, triage, maintain) (example: read)</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL for the repository invitation (example: https://api.github.com/user/repository-invitations/1)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_invitations_for_authenticated_user">

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
    <td>Unique identifier of the repository invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2016-06-13T14:52:50-05:00)</td>
</tr>
<tr>
    <td><CopyableCode code="expired" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the invitation has expired</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/octocat/Hello-World/invitations)</td>
</tr>
<tr>
    <td><CopyableCode code="invitee" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="inviter" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>string</code></td>
    <td>The permission associated with the invitation. (read, write, admin, triage, maintain) (example: read)</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL for the repository invitation (example: https://api.github.com/user/repository-invitations/1)</td>
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
    <td><a href="#list_invitations"><CopyableCode code="list_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.</td>
</tr>
<tr>
    <td><a href="#list_invitations_for_authenticated_user"><CopyableCode code="list_invitations_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>When authenticating as a user, this endpoint will list all currently open repository invitations for that user.</td>
</tr>
<tr>
    <td><a href="#update_invitation"><CopyableCode code="update_invitation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-invitation_id"><code>invitation_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_invitation"><CopyableCode code="delete_invitation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-invitation_id"><code>invitation_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#accept_invitation_for_authenticated_user"><CopyableCode code="accept_invitation_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-invitation_id"><code>invitation_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#decline_invitation_for_authenticated_user"><CopyableCode code="decline_invitation_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-invitation_id"><code>invitation_id</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-invitation_id">
    <td><CopyableCode code="invitation_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the invitation.</td>
</tr>
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
    defaultValue="list_invitations"
    values={[
        { label: 'list_invitations', value: 'list_invitations' },
        { label: 'list_invitations_for_authenticated_user', value: 'list_invitations_for_authenticated_user' }
    ]}
>
<TabItem value="list_invitations">

When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.

```sql
SELECT
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
FROM github.repos.invitations
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_invitations_for_authenticated_user">

When authenticating as a user, this endpoint will list all currently open repository invitations for that user.

```sql
SELECT
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
FROM github.repos.invitations
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_invitation"
    values={[
        { label: 'update_invitation', value: 'update_invitation' }
    ]}
>
<TabItem value="update_invitation">

No description available.

```sql
UPDATE github.repos.invitations
SET 
permissions = '{{ permissions }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND invitation_id = '{{ invitation_id }}' --required
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
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_invitation"
    values={[
        { label: 'delete_invitation', value: 'delete_invitation' }
    ]}
>
<TabItem value="delete_invitation">

No description available.

```sql
DELETE FROM github.repos.invitations
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND invitation_id = '{{ invitation_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_invitation_for_authenticated_user"
    values={[
        { label: 'accept_invitation_for_authenticated_user', value: 'accept_invitation_for_authenticated_user' },
        { label: 'decline_invitation_for_authenticated_user', value: 'decline_invitation_for_authenticated_user' }
    ]}
>
<TabItem value="accept_invitation_for_authenticated_user">

Response

```sql
EXEC github.repos.invitations.accept_invitation_for_authenticated_user 
@invitation_id='{{ invitation_id }}' --required
;
```
</TabItem>
<TabItem value="decline_invitation_for_authenticated_user">

Response

```sql
EXEC github.repos.invitations.decline_invitation_for_authenticated_user 
@invitation_id='{{ invitation_id }}' --required
;
```
</TabItem>
</Tabs>
