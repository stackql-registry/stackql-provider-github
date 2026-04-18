--- 
title: orgs
hide_title: false
hide_table_of_contents: false
keywords:
  - orgs
  - interactions
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

Creates, updates, deletes, gets or lists an <code>orgs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orgs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.interactions.orgs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_restrictions_for_org"
    values={[
        { label: 'get_restrictions_for_org', value: 'get_restrictions_for_org' }
    ]}
>
<TabItem value="get_restrictions_for_org">

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
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2018-08-17T04:18:39Z)</td>
</tr>
<tr>
    <td><CopyableCode code="limit" /></td>
    <td><code>string</code></td>
    <td>The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect. (existing_users, contributors_only, collaborators_only) (example: collaborators_only)</td>
</tr>
<tr>
    <td><CopyableCode code="origin" /></td>
    <td><code>string</code></td>
    <td> (example: repository)</td>
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
    <td><a href="#get_restrictions_for_org"><CopyableCode code="get_restrictions_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.</td>
</tr>
<tr>
    <td><a href="#set_restrictions_for_org"><CopyableCode code="set_restrictions_for_org" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td></td>
    <td>Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.</td>
</tr>
<tr>
    <td><a href="#remove_restrictions_for_org"><CopyableCode code="remove_restrictions_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_restrictions_for_org"
    values={[
        { label: 'get_restrictions_for_org', value: 'get_restrictions_for_org' }
    ]}
>
<TabItem value="get_restrictions_for_org">

Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.

```sql
SELECT
expires_at,
limit,
origin
FROM github.interactions.orgs
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_restrictions_for_org"
    values={[
        { label: 'set_restrictions_for_org', value: 'set_restrictions_for_org' }
    ]}
>
<TabItem value="set_restrictions_for_org">

Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.

```sql
REPLACE github.interactions.orgs
SET 
limit = '{{ limit }}',
expiry = '{{ expiry }}'
WHERE 
org = '{{ org }}' --required
AND limit = '{{ limit }}' --required
RETURNING
expires_at,
limit,
origin;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_restrictions_for_org"
    values={[
        { label: 'remove_restrictions_for_org', value: 'remove_restrictions_for_org' }
    ]}
>
<TabItem value="remove_restrictions_for_org">

Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.

```sql
DELETE FROM github.interactions.orgs
WHERE org = '{{ org }}' --required
;
```
</TabItem>
</Tabs>
