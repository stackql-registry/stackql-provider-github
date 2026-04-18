--- 
title: enterprise_team_membership_bulk_removals
hide_title: false
hide_table_of_contents: false
keywords:
  - enterprise_team_membership_bulk_removals
  - enterprise_team_memberships
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

Creates, updates, deletes, gets or lists an <code>enterprise_team_membership_bulk_removals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enterprise_team_membership_bulk_removals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.enterprise_team_memberships.enterprise_team_membership_bulk_removals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#bulk_remove"><CopyableCode code="bulk_remove" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-enterprise-team"><code>enterprise-team</code></a>, <a href="#parameter-usernames"><code>usernames</code></a></td>
    <td></td>
    <td>Remove multiple team members from an enterprise team.</td>
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
<tr id="parameter-enterprise">
    <td><CopyableCode code="enterprise" /></td>
    <td><code>string</code></td>
    <td>The slug version of the enterprise name.</td>
</tr>
<tr id="parameter-enterprise-team">
    <td><CopyableCode code="enterprise-team" /></td>
    <td><code>string</code></td>
    <td>The slug version of the enterprise team name. You can also substitute this value with the enterprise team id.</td>
</tr>
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="bulk_remove"
    values={[
        { label: 'bulk_remove', value: 'bulk_remove' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="bulk_remove">

Remove multiple team members from an enterprise team.

```sql
INSERT INTO github.enterprise_team_memberships.enterprise_team_membership_bulk_removals (
usernames,
enterprise,
enterprise-team
)
SELECT 
'{{ usernames }}' /* required */,
'{{ enterprise }}',
'{{ enterprise-team }}'
RETURNING
id,
name,
gravatar_id,
node_id,
avatar_url,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
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
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: enterprise_team_membership_bulk_removals
  props:
    - name: enterprise
      value: "{{ enterprise }}"
      description: Required parameter for the enterprise_team_membership_bulk_removals resource.
    - name: enterprise-team
      value: "{{ enterprise-team }}"
      description: Required parameter for the enterprise_team_membership_bulk_removals resource.
    - name: usernames
      value:
        - "{{ usernames }}"
      description: |
        The GitHub user handles to be removed from the team.
`}</CodeBlock>

</TabItem>
</Tabs>
