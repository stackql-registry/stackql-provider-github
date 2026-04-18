--- 
title: enterprise_team_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - enterprise_team_organizations
  - enterprise_team_organizations
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

Creates, updates, deletes, gets or lists an <code>enterprise_team_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enterprise_team_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.enterprise_team_organizations.enterprise_team_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_assignment"
    values={[
        { label: 'get_assignment', value: 'get_assignment' },
        { label: 'get_assignments', value: 'get_assignments' }
    ]}
>
<TabItem value="get_assignment">

The team is assigned to the organization

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEyOk9yZ2FuaXphdGlvbjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: A great organization)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/events)</td>
</tr>
<tr>
    <td><CopyableCode code="hooks_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/hooks)</td>
</tr>
<tr>
    <td><CopyableCode code="issues_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/issues)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="public_members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/public_members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_assignments">

An array of organizations the team is assigned to

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEyOk9yZ2FuaXphdGlvbjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: A great organization)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/events)</td>
</tr>
<tr>
    <td><CopyableCode code="hooks_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/hooks)</td>
</tr>
<tr>
    <td><CopyableCode code="issues_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/issues)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="public_members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/public_members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github)</td>
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
    <td><a href="#get_assignment"><CopyableCode code="get_assignment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-enterprise-team"><code>enterprise-team</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Check if an enterprise team is assigned to an organization</td>
</tr>
<tr>
    <td><a href="#get_assignments"><CopyableCode code="get_assignments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-enterprise-team"><code>enterprise-team</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Get all organizations assigned to an enterprise team</td>
</tr>
<tr>
    <td><a href="#add"><CopyableCode code="add" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-enterprise-team"><code>enterprise-team</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Assign an enterprise team to an organization.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-enterprise-team"><code>enterprise-team</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Unassign an enterprise team from an organization.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
    defaultValue="get_assignment"
    values={[
        { label: 'get_assignment', value: 'get_assignment' },
        { label: 'get_assignments', value: 'get_assignments' }
    ]}
>
<TabItem value="get_assignment">

Check if an enterprise team is assigned to an organization

```sql
SELECT
id,
node_id,
avatar_url,
description,
events_url,
hooks_url,
issues_url,
login,
members_url,
public_members_url,
repos_url,
url
FROM github.enterprise_team_organizations.enterprise_team_organizations
WHERE enterprise = '{{ enterprise }}' -- required
AND enterprise-team = '{{ enterprise-team }}' -- required
AND org = '{{ org }}' -- required
;
```
</TabItem>
<TabItem value="get_assignments">

Get all organizations assigned to an enterprise team

```sql
SELECT
id,
node_id,
avatar_url,
description,
events_url,
hooks_url,
issues_url,
login,
members_url,
public_members_url,
repos_url,
url
FROM github.enterprise_team_organizations.enterprise_team_organizations
WHERE enterprise = '{{ enterprise }}' -- required
AND enterprise-team = '{{ enterprise-team }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="add"
    values={[
        { label: 'add', value: 'add' }
    ]}
>
<TabItem value="add">

Assign an enterprise team to an organization.

```sql
REPLACE github.enterprise_team_organizations.enterprise_team_organizations
SET 
-- No updatable properties
WHERE 
enterprise = '{{ enterprise }}' --required
AND enterprise-team = '{{ enterprise-team }}' --required
AND org = '{{ org }}' --required
RETURNING
id,
node_id,
avatar_url,
description,
events_url,
hooks_url,
issues_url,
login,
members_url,
public_members_url,
repos_url,
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

Unassign an enterprise team from an organization.

```sql
DELETE FROM github.enterprise_team_organizations.enterprise_team_organizations
WHERE enterprise = '{{ enterprise }}' --required
AND enterprise-team = '{{ enterprise-team }}' --required
AND org = '{{ org }}' --required
;
```
</TabItem>
</Tabs>
