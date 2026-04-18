--- 
title: cache_retention_limit
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_retention_limit
  - actions
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

Creates, updates, deletes, gets or lists a <code>cache_retention_limit</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_retention_limit" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.cache_retention_limit" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_actions_cache_retention_limit_for_repository"
    values={[
        { label: 'get_actions_cache_retention_limit_for_repository', value: 'get_actions_cache_retention_limit_for_repository' },
        { label: 'get_actions_cache_retention_limit_for_enterprise', value: 'get_actions_cache_retention_limit_for_enterprise' },
        { label: 'get_actions_cache_retention_limit_for_organization', value: 'get_actions_cache_retention_limit_for_organization' }
    ]}
>
<TabItem value="get_actions_cache_retention_limit_for_repository">

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
    <td><CopyableCode code="max_cache_retention_days" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of days to keep caches in this repository.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_actions_cache_retention_limit_for_enterprise">

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
    <td><CopyableCode code="max_cache_retention_days" /></td>
    <td><code>integer</code></td>
    <td>For repositories & organizations in an enterprise, the maximum duration, in days, for which caches in a repository may be retained.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_actions_cache_retention_limit_for_organization">

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
    <td><CopyableCode code="max_cache_retention_days" /></td>
    <td><code>integer</code></td>
    <td>For repositories in this organization, the maximum duration, in days, for which caches in a repository may be retained.</td>
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
    <td><a href="#get_actions_cache_retention_limit_for_repository"><CopyableCode code="get_actions_cache_retention_limit_for_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets GitHub Actions cache retention limit for a repository. This determines how long caches will be retained for, if<br />not manually removed or evicted due to size constraints.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:repository` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_actions_cache_retention_limit_for_enterprise"><CopyableCode code="get_actions_cache_retention_limit_for_enterprise" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td></td>
    <td>Gets GitHub Actions cache retention limit for an enterprise. All organizations and repositories under this<br />enterprise may not set a higher cache retention limit.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_actions_cache_retention_limit_for_organization"><CopyableCode code="get_actions_cache_retention_limit_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets GitHub Actions cache retention limit for an organization. All repositories under this<br />organization may not set a higher cache retention limit.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:organization` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_actions_cache_retention_limit_for_repository"><CopyableCode code="set_actions_cache_retention_limit_for_repository" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Sets GitHub Actions cache retention limit for a repository. This determines how long caches will be retained for, if<br />not manually removed or evicted due to size constraints.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:repository` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_actions_cache_retention_limit_for_enterprise"><CopyableCode code="set_actions_cache_retention_limit_for_enterprise" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td></td>
    <td>Sets GitHub Actions cache retention limit for an enterprise. All organizations and repositories under this<br />enterprise may not set a higher cache retention limit.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_actions_cache_retention_limit_for_organization"><CopyableCode code="set_actions_cache_retention_limit_for_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Sets GitHub Actions cache retention limit for an organization. All repositories under this<br />organization may not set a higher cache retention limit.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:organization` scope to use this endpoint.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_actions_cache_retention_limit_for_repository"
    values={[
        { label: 'get_actions_cache_retention_limit_for_repository', value: 'get_actions_cache_retention_limit_for_repository' },
        { label: 'get_actions_cache_retention_limit_for_enterprise', value: 'get_actions_cache_retention_limit_for_enterprise' },
        { label: 'get_actions_cache_retention_limit_for_organization', value: 'get_actions_cache_retention_limit_for_organization' }
    ]}
>
<TabItem value="get_actions_cache_retention_limit_for_repository">

Gets GitHub Actions cache retention limit for a repository. This determines how long caches will be retained for, if<br />not manually removed or evicted due to size constraints.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:repository` scope to use this endpoint.

```sql
SELECT
max_cache_retention_days
FROM github.actions.cache_retention_limit
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
<TabItem value="get_actions_cache_retention_limit_for_enterprise">

Gets GitHub Actions cache retention limit for an enterprise. All organizations and repositories under this<br />enterprise may not set a higher cache retention limit.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
SELECT
max_cache_retention_days
FROM github.actions.cache_retention_limit
WHERE enterprise = '{{ enterprise }}' -- required
;
```
</TabItem>
<TabItem value="get_actions_cache_retention_limit_for_organization">

Gets GitHub Actions cache retention limit for an organization. All repositories under this<br />organization may not set a higher cache retention limit.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:organization` scope to use this endpoint.

```sql
SELECT
max_cache_retention_days
FROM github.actions.cache_retention_limit
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_actions_cache_retention_limit_for_repository"
    values={[
        { label: 'set_actions_cache_retention_limit_for_repository', value: 'set_actions_cache_retention_limit_for_repository' },
        { label: 'set_actions_cache_retention_limit_for_enterprise', value: 'set_actions_cache_retention_limit_for_enterprise' },
        { label: 'set_actions_cache_retention_limit_for_organization', value: 'set_actions_cache_retention_limit_for_organization' }
    ]}
>
<TabItem value="set_actions_cache_retention_limit_for_repository">

Sets GitHub Actions cache retention limit for a repository. This determines how long caches will be retained for, if<br />not manually removed or evicted due to size constraints.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:repository` scope to use this endpoint.

```sql
REPLACE github.actions.cache_retention_limit
SET 
max_cache_retention_days = {{ max_cache_retention_days }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required;
```
</TabItem>
<TabItem value="set_actions_cache_retention_limit_for_enterprise">

Sets GitHub Actions cache retention limit for an enterprise. All organizations and repositories under this<br />enterprise may not set a higher cache retention limit.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
REPLACE github.actions.cache_retention_limit
SET 
max_cache_retention_days = {{ max_cache_retention_days }}
WHERE 
enterprise = '{{ enterprise }}' --required;
```
</TabItem>
<TabItem value="set_actions_cache_retention_limit_for_organization">

Sets GitHub Actions cache retention limit for an organization. All repositories under this<br />organization may not set a higher cache retention limit.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:organization` scope to use this endpoint.

```sql
REPLACE github.actions.cache_retention_limit
SET 
max_cache_retention_days = {{ max_cache_retention_days }}
WHERE 
org = '{{ org }}' --required;
```
</TabItem>
</Tabs>
