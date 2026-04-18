--- 
title: invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations
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

Creates, updates, deletes, gets or lists an <code>invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pending_invitations"
    values={[
        { label: 'list_pending_invitations', value: 'list_pending_invitations' }
    ]}
>
<TabItem value="list_pending_invitations">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: "MDIyOk9yZ2FuaXphdGlvbkludml0YXRpb24x")</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="failed_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="failed_reason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="invitation_source" /></td>
    <td><code>string</code></td>
    <td> (example: "member")</td>
</tr>
<tr>
    <td><CopyableCode code="invitation_teams_url" /></td>
    <td><code>string</code></td>
    <td> (example: "https://api.github.com/organizations/16/invitations/1/teams")</td>
</tr>
<tr>
    <td><CopyableCode code="inviter" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="team_count" /></td>
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
    <td><a href="#list_pending_invitations"><CopyableCode code="list_pending_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-role"><code>role</code></a>, <a href="#parameter-invitation_source"><code>invitation_source</code></a></td>
    <td>The return hash contains a `role` field which refers to the Organization<br />Invitation role and will be one of the following values: `direct_member`, `admin`,<br />`billing_manager`, or `hiring_manager`. If the invitee is not a GitHub<br />member, the `login` field in the return hash will be `null`.</td>
</tr>
<tr>
    <td><a href="#create_invitation"><CopyableCode code="create_invitation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."</td>
</tr>
<tr>
    <td><a href="#cancel_invitation"><CopyableCode code="cancel_invitation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-invitation_id"><code>invitation_id</code></a></td>
    <td></td>
    <td>Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-invitation_source">
    <td><CopyableCode code="invitation_source" /></td>
    <td><code>string</code></td>
    <td>Filter invitations by their invitation source.</td>
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
<tr id="parameter-role">
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Filter invitations by their member role.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_pending_invitations"
    values={[
        { label: 'list_pending_invitations', value: 'list_pending_invitations' }
    ]}
>
<TabItem value="list_pending_invitations">

The return hash contains a `role` field which refers to the Organization<br />Invitation role and will be one of the following values: `direct_member`, `admin`,<br />`billing_manager`, or `hiring_manager`. If the invitee is not a GitHub<br />member, the `login` field in the return hash will be `null`.

```sql
SELECT
id,
node_id,
created_at,
email,
failed_at,
failed_reason,
invitation_source,
invitation_teams_url,
inviter,
login,
role,
team_count
FROM github.orgs.invitations
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND role = '{{ role }}'
AND invitation_source = '{{ invitation_source }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_invitation"
    values={[
        { label: 'create_invitation', value: 'create_invitation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_invitation">

Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```sql
INSERT INTO github.orgs.invitations (
invitee_id,
email,
role,
team_ids,
org
)
SELECT 
{{ invitee_id }},
'{{ email }}',
'{{ role }}',
'{{ team_ids }}',
'{{ org }}'
RETURNING
id,
node_id,
created_at,
email,
failed_at,
failed_reason,
invitation_source,
invitation_teams_url,
inviter,
login,
role,
team_count
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invitations
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the invitations resource.
    - name: invitee_id
      value: {{ invitee_id }}
      description: |
        **Required unless you provide \`email\`**. GitHub user ID for the person you are inviting.
    - name: email
      value: "{{ email }}"
      description: |
        **Required unless you provide \`invitee_id\`**. Email address of the person you are inviting, which can be an existing GitHub user.
    - name: role
      value: "{{ role }}"
      description: |
        The role for the new member.
        * \`admin\` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.
        * \`direct_member\` - Non-owner organization members with ability to see other members and join teams by invitation.
        * \`billing_manager\` - Non-owner organization members with ability to manage the billing settings of your organization.
        * \`reinstate\` - The previous role assigned to the invitee before they were removed from your organization. Can be one of the roles listed above. Only works if the invitee was previously part of your organization.
      valid_values: ['admin', 'direct_member', 'billing_manager', 'reinstate']
      default: direct_member
    - name: team_ids
      value:
        - {{ team_ids }}
      description: |
        Specify IDs for the teams you want to invite new members to.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="cancel_invitation"
    values={[
        { label: 'cancel_invitation', value: 'cancel_invitation' }
    ]}
>
<TabItem value="cancel_invitation">

Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).

```sql
DELETE FROM github.orgs.invitations
WHERE org = '{{ org }}' --required
AND invitation_id = '{{ invitation_id }}' --required
;
```
</TabItem>
</Tabs>
