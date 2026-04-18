--- 
title: repos
hide_title: false
hide_table_of_contents: false
keywords:
  - repos
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

Creates, updates, deletes, gets or lists a <code>repos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.interactions.repos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_restrictions_for_repo"
    values={[
        { label: 'get_restrictions_for_repo', value: 'get_restrictions_for_repo' }
    ]}
>
<TabItem value="get_restrictions_for_repo">

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
    <td><a href="#get_restrictions_for_repo"><CopyableCode code="get_restrictions_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.</td>
</tr>
<tr>
    <td><a href="#set_restrictions_for_repo"><CopyableCode code="set_restrictions_for_repo" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-limit"><code>limit</code></a></td>
    <td></td>
    <td>Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.</td>
</tr>
<tr>
    <td><a href="#remove_restrictions_for_repo"><CopyableCode code="remove_restrictions_for_repo" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_restrictions_for_repo"
    values={[
        { label: 'get_restrictions_for_repo', value: 'get_restrictions_for_repo' }
    ]}
>
<TabItem value="get_restrictions_for_repo">

Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.

```sql
SELECT
expires_at,
limit,
origin
FROM github.interactions.repos
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_restrictions_for_repo"
    values={[
        { label: 'set_restrictions_for_repo', value: 'set_restrictions_for_repo' }
    ]}
>
<TabItem value="set_restrictions_for_repo">

Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

```sql
REPLACE github.interactions.repos
SET 
limit = '{{ limit }}',
expiry = '{{ expiry }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
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
    defaultValue="remove_restrictions_for_repo"
    values={[
        { label: 'remove_restrictions_for_repo', value: 'remove_restrictions_for_repo' }
    ]}
>
<TabItem value="remove_restrictions_for_repo">

Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.

```sql
DELETE FROM github.interactions.repos
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
;
```
</TabItem>
</Tabs>
