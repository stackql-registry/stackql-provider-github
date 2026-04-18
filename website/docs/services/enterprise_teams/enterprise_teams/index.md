--- 
title: enterprise_teams
hide_title: false
hide_table_of_contents: false
keywords:
  - enterprise_teams
  - enterprise_teams
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

Creates, updates, deletes, gets or lists an <code>enterprise_teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enterprise_teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.enterprise_teams.enterprise_teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td> (example: 62ab9291-fae2-468e-974b-7e45096d5021)</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>Retired: this field will not be returned with GHEC enterprise teams. (example: Justice League)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/enterprises/dc/teams/justice-league)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organization_selection_type" /></td>
    <td><code>string</code></td>
    <td> (example: disabled | selected | all)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sync_to_organizations" /></td>
    <td><code>string</code></td>
    <td>Retired: this field will not be returned with GHEC enterprise teams. (example: disabled | all)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td> (example: 62ab9291-fae2-468e-974b-7e45096d5021)</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>Retired: this field will not be returned with GHEC enterprise teams. (example: Justice League)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/enterprises/dc/teams/justice-league)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organization_selection_type" /></td>
    <td><code>string</code></td>
    <td> (example: disabled | selected | all)</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sync_to_organizations" /></td>
    <td><code>string</code></td>
    <td>Retired: this field will not be returned with GHEC enterprise teams. (example: disabled | all)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td></td>
    <td>Gets a team using the team's slug. To create the slug, GitHub replaces special characters in the name string, changes all words to lowercase, and replaces spaces with a `-` separator and adds the "ent:" prefix. For example, "My TEam Näme" would become `ent:my-team-name`.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List all teams in the enterprise for the authenticated user</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>To create an enterprise team, the authenticated user must be an owner of the enterprise.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td></td>
    <td>To edit a team, the authenticated user must be an enterprise owner.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td></td>
    <td>To delete an enterprise team, the authenticated user must be an enterprise owner.<br /><br />If you are an enterprise owner, deleting an enterprise team will delete all of its IdP mappings as well.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets a team using the team's slug. To create the slug, GitHub replaces special characters in the name string, changes all words to lowercase, and replaces spaces with a `-` separator and adds the "ent:" prefix. For example, "My TEam Näme" would become `ent:my-team-name`.

```sql
SELECT
id,
name,
group_id,
group_name,
created_at,
description,
html_url,
members_url,
organization_selection_type,
slug,
sync_to_organizations,
updated_at,
url
FROM github.enterprise_teams.enterprise_teams
WHERE enterprise = '{{ enterprise }}' -- required
AND team_slug = '{{ team_slug }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all teams in the enterprise for the authenticated user

```sql
SELECT
id,
name,
group_id,
group_name,
created_at,
description,
html_url,
members_url,
organization_selection_type,
slug,
sync_to_organizations,
updated_at,
url
FROM github.enterprise_teams.enterprise_teams
WHERE enterprise = '{{ enterprise }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
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

To create an enterprise team, the authenticated user must be an owner of the enterprise.

```sql
INSERT INTO github.enterprise_teams.enterprise_teams (
name,
description,
sync_to_organizations,
organization_selection_type,
group_id,
enterprise
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ sync_to_organizations }}',
'{{ organization_selection_type }}',
'{{ group_id }}',
'{{ enterprise }}'
RETURNING
id,
name,
group_id,
group_name,
created_at,
description,
html_url,
members_url,
organization_selection_type,
slug,
sync_to_organizations,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: enterprise_teams
  props:
    - name: enterprise
      value: "{{ enterprise }}"
      description: Required parameter for the enterprise_teams resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the team.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the team.
    - name: sync_to_organizations
      value: "{{ sync_to_organizations }}"
      description: |
        Retired: this field is no longer supported.
        Whether the enterprise team should be reflected in each organization.
        This value cannot be set.
      valid_values: ['all', 'disabled']
      default: disabled
    - name: organization_selection_type
      value: "{{ organization_selection_type }}"
      description: |
        Specifies which organizations in the enterprise should have access to this team. Can be one of \`disabled\`, \`selected\`, or \`all\`.
        \`disabled\`: The team is not assigned to any organizations. This is the default when you create a new team.
        \`selected\`: The team is assigned to specific organizations. You can then use the [add organization assignments API](https://docs.github.com/rest/enterprise-teams/enterprise-team-organizations#add-organization-assignments) endpoint.
        \`all\`: The team is assigned to all current and future organizations in the enterprise.
      valid_values: ['disabled', 'selected', 'all']
      default: disabled
    - name: group_id
      value: "{{ group_id }}"
      description: |
        The ID of the IdP group to assign team membership with. You can get this value from the [REST API endpoints for SCIM](https://docs.github.com/rest/scim#list-provisioned-scim-groups-for-an-enterprise).
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

To edit a team, the authenticated user must be an enterprise owner.

```sql
UPDATE github.enterprise_teams.enterprise_teams
SET 
name = '{{ name }}',
description = '{{ description }}',
sync_to_organizations = '{{ sync_to_organizations }}',
organization_selection_type = '{{ organization_selection_type }}',
group_id = '{{ group_id }}'
WHERE 
enterprise = '{{ enterprise }}' --required
AND team_slug = '{{ team_slug }}' --required
RETURNING
id,
name,
group_id,
group_name,
created_at,
description,
html_url,
members_url,
organization_selection_type,
slug,
sync_to_organizations,
updated_at,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

To delete an enterprise team, the authenticated user must be an enterprise owner.<br /><br />If you are an enterprise owner, deleting an enterprise team will delete all of its IdP mappings as well.

```sql
DELETE FROM github.enterprise_teams.enterprise_teams
WHERE enterprise = '{{ enterprise }}' --required
AND team_slug = '{{ team_slug }}' --required
;
```
</TabItem>
</Tabs>
