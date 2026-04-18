--- 
title: security_managers
hide_title: false
hide_table_of_contents: false
keywords:
  - security_managers
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

Creates, updates, deletes, gets or lists a <code>security_managers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_managers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.security_managers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_security_manager_teams"
    values={[
        { label: 'list_security_manager_teams', value: 'list_security_manager_teams' }
    ]}
>
<TabItem value="list_security_manager_teams">

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
    <td>Name of the team (example: Justice League)</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the team (example: A great team.)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/orgs/rails/teams/core)</td>
</tr>
<tr>
    <td><CopyableCode code="ldap_dn" /></td>
    <td><code>string</code></td>
    <td>Distinguished Name (DN) that team maps to within LDAP environment (example: uid=example,ou=users,dc=github,dc=com)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/organizations/1/team/1/members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_setting" /></td>
    <td><code>string</code></td>
    <td>The notification setting the team has set (example: notifications_enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>Permission that the team will have for its repositories (example: admin)</td>
</tr>
<tr>
    <td><CopyableCode code="privacy" /></td>
    <td><code>string</code></td>
    <td>The level of privacy this team should have (example: closed)</td>
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
    <td><a href="#list_security_manager_teams"><CopyableCode code="list_security_manager_teams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Closing down notice:** This operation is closing down and will be removed starting January 1, 2026. Please use the "[Organization Roles](https://docs.github.com/rest/orgs/organization-roles)" endpoints instead.</td>
</tr>
<tr>
    <td><a href="#add_security_manager_team"><CopyableCode code="add_security_manager_team" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Closing down notice:** This operation is closing down and will be removed starting January 1, 2026. Please use the "[Organization Roles](https://docs.github.com/rest/orgs/organization-roles)" endpoints instead.</td>
</tr>
<tr>
    <td><a href="#remove_security_manager_team"><CopyableCode code="remove_security_manager_team" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Closing down notice:** This operation is closing down and will be removed starting January 1, 2026. Please use the "[Organization Roles](https://docs.github.com/rest/orgs/organization-roles)" endpoints instead.</td>
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
<tr id="parameter-team_slug">
    <td><CopyableCode code="team_slug" /></td>
    <td><code>string</code></td>
    <td>The slug of the team name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_security_manager_teams"
    values={[
        { label: 'list_security_manager_teams', value: 'list_security_manager_teams' }
    ]}
>
<TabItem value="list_security_manager_teams">

&gt; [!WARNING]<br />&gt; **Closing down notice:** This operation is closing down and will be removed starting January 1, 2026. Please use the "[Organization Roles](https://docs.github.com/rest/orgs/organization-roles)" endpoints instead.

```sql
SELECT
id,
name,
enterprise_id,
node_id,
organization_id,
description,
html_url,
ldap_dn,
members_url,
notification_setting,
permission,
privacy,
repositories_url,
slug,
type,
url
FROM github.orgs.security_managers
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_security_manager_team"
    values={[
        { label: 'add_security_manager_team', value: 'add_security_manager_team' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_security_manager_team">

&gt; [!WARNING]<br />&gt; **Closing down notice:** This operation is closing down and will be removed starting January 1, 2026. Please use the "[Organization Roles](https://docs.github.com/rest/orgs/organization-roles)" endpoints instead.

```sql
INSERT INTO github.orgs.security_managers (
org,
team_slug
)
SELECT 
'{{ org }}',
'{{ team_slug }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_managers
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the security_managers resource.
    - name: team_slug
      value: "{{ team_slug }}"
      description: Required parameter for the security_managers resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_security_manager_team"
    values={[
        { label: 'remove_security_manager_team', value: 'remove_security_manager_team' }
    ]}
>
<TabItem value="remove_security_manager_team">

&gt; [!WARNING]<br />&gt; **Closing down notice:** This operation is closing down and will be removed starting January 1, 2026. Please use the "[Organization Roles](https://docs.github.com/rest/orgs/organization-roles)" endpoints instead.

```sql
DELETE FROM github.orgs.security_managers
WHERE org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
;
```
</TabItem>
</Tabs>
