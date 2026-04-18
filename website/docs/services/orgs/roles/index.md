--- 
title: roles
hide_title: false
hide_table_of_contents: false
keywords:
  - roles
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

Creates, updates, deletes, gets or lists a <code>roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_org_role"
    values={[
        { label: 'get_org_role', value: 'get_org_role' },
        { label: 'list_org_roles', value: 'list_org_roles' }
    ]}
>
<TabItem value="get_org_role">

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
    <td>The unique identifier of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the role.</td>
</tr>
<tr>
    <td><CopyableCode code="base_role" /></td>
    <td><code>string</code></td>
    <td>The system role from which this role inherits permissions. (read, triage, write, maintain, admin)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the role was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description about who this role is for or what permissions it grants.</td>
</tr>
<tr>
    <td><CopyableCode code="organization" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>A list of permissions included in this role.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source answers the question, "where did this role come from?" (Organization, Enterprise, Predefined)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the role was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_roles">

Response - list of organization roles

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
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>The list of organization roles available to the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of organization roles available to the organization.</td>
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
    <td><a href="#get_org_role"><CopyableCode code="get_org_role" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-role_id"><code>role_id</code></a></td>
    <td></td>
    <td>Gets an organization role that is available to this organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />To use this endpoint, the authenticated user must be one of:<br /><br />- An administrator for the organization.<br />- An organization member (or a member of a team) assigned a custom organization role that includes the **View organization roles** (`read_organization_custom_org_role`) permission. For more information, see "[Permissions for organization access](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles#permissions-for-organization-access)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_org_roles"><CopyableCode code="list_org_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Lists the organization roles available in this organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />To use this endpoint, the authenticated user must be one of:<br /><br />- An administrator for the organization.<br />- An organization member (or a member of a team) assigned a custom organization role that includes the **View organization roles** (`read_organization_custom_org_role`) permission. For more information, see "[Permissions for organization access](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles#permissions-for-organization-access)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-role_id">
    <td><CopyableCode code="role_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the role.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_org_role"
    values={[
        { label: 'get_org_role', value: 'get_org_role' },
        { label: 'list_org_roles', value: 'list_org_roles' }
    ]}
>
<TabItem value="get_org_role">

Gets an organization role that is available to this organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />To use this endpoint, the authenticated user must be one of:<br /><br />- An administrator for the organization.<br />- An organization member (or a member of a team) assigned a custom organization role that includes the **View organization roles** (`read_organization_custom_org_role`) permission. For more information, see "[Permissions for organization access](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles#permissions-for-organization-access)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
id,
name,
base_role,
created_at,
description,
organization,
permissions,
source,
updated_at
FROM github.orgs.roles
WHERE org = '{{ org }}' -- required
AND role_id = '{{ role_id }}' -- required
;
```
</TabItem>
<TabItem value="list_org_roles">

Lists the organization roles available in this organization. For more information on organization roles, see "[Using organization roles](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/using-organization-roles)."<br /><br />To use this endpoint, the authenticated user must be one of:<br /><br />- An administrator for the organization.<br />- An organization member (or a member of a team) assigned a custom organization role that includes the **View organization roles** (`read_organization_custom_org_role`) permission. For more information, see "[Permissions for organization access](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/permissions-of-custom-organization-roles#permissions-for-organization-access)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
roles,
total_count
FROM github.orgs.roles
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>
