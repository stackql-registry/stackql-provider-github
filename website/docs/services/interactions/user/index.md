--- 
title: user
hide_title: false
hide_table_of_contents: false
keywords:
  - user
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

Creates, updates, deletes, gets or lists a <code>user</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.interactions.user" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_restrictions_for_authenticated_user"
    values={[
        { label: 'get_restrictions_for_authenticated_user', value: 'get_restrictions_for_authenticated_user' }
    ]}
>
<TabItem value="get_restrictions_for_authenticated_user">

Default response

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
    <td><a href="#get_restrictions_for_authenticated_user"><CopyableCode code="get_restrictions_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Shows which type of GitHub user can interact with your public repositories and when the restriction expires.</td>
</tr>
<tr>
    <td><a href="#set_restrictions_for_authenticated_user"><CopyableCode code="set_restrictions_for_authenticated_user" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-limit"><code>limit</code></a></td>
    <td></td>
    <td>Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.</td>
</tr>
<tr>
    <td><a href="#remove_restrictions_for_authenticated_user"><CopyableCode code="remove_restrictions_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Removes any interaction restrictions from your public repositories.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_restrictions_for_authenticated_user"
    values={[
        { label: 'get_restrictions_for_authenticated_user', value: 'get_restrictions_for_authenticated_user' }
    ]}
>
<TabItem value="get_restrictions_for_authenticated_user">

Shows which type of GitHub user can interact with your public repositories and when the restriction expires.

```sql
SELECT
expires_at,
limit,
origin
FROM github.interactions.user
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_restrictions_for_authenticated_user"
    values={[
        { label: 'set_restrictions_for_authenticated_user', value: 'set_restrictions_for_authenticated_user' }
    ]}
>
<TabItem value="set_restrictions_for_authenticated_user">

Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.

```sql
REPLACE github.interactions.user
SET 
limit = '{{ limit }}',
expiry = '{{ expiry }}'
WHERE 
limit = '{{ limit }}' --required
RETURNING
expires_at,
limit,
origin;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_restrictions_for_authenticated_user"
    values={[
        { label: 'remove_restrictions_for_authenticated_user', value: 'remove_restrictions_for_authenticated_user' }
    ]}
>
<TabItem value="remove_restrictions_for_authenticated_user">

Removes any interaction restrictions from your public repositories.

```sql
DELETE FROM github.interactions.user
;
```
</TabItem>
</Tabs>
