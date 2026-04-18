--- 
title: cache_usage
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_usage
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

Creates, updates, deletes, gets or lists a <code>cache_usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_usage" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.cache_usage" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_actions_cache_usage"
    values={[
        { label: 'get_actions_cache_usage', value: 'get_actions_cache_usage' },
        { label: 'get_actions_cache_usage_for_org', value: 'get_actions_cache_usage_for_org' }
    ]}
>
<TabItem value="get_actions_cache_usage">

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
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td>The repository owner and name for the cache usage being shown. (example: octo-org/Hello-World)</td>
</tr>
<tr>
    <td><CopyableCode code="active_caches_count" /></td>
    <td><code>integer</code></td>
    <td>The number of active caches in the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="active_caches_size_in_bytes" /></td>
    <td><code>integer</code></td>
    <td>The sum of the size in bytes of all the active cache items in the repository.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_actions_cache_usage_for_org">

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
    <td><CopyableCode code="total_active_caches_count" /></td>
    <td><code>integer</code></td>
    <td>The count of active caches across all repositories of an enterprise or an organization.</td>
</tr>
<tr>
    <td><CopyableCode code="total_active_caches_size_in_bytes" /></td>
    <td><code>integer</code></td>
    <td>The total size in bytes of all active cache items across all repositories of an enterprise or an organization.</td>
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
    <td><a href="#get_actions_cache_usage"><CopyableCode code="get_actions_cache_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets GitHub Actions cache usage for a repository.<br />The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_actions_cache_usage_for_org"><CopyableCode code="get_actions_cache_usage_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets the total GitHub Actions cache usage for an organization.<br />The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.<br /><br />OAuth tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.</td>
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
    defaultValue="get_actions_cache_usage"
    values={[
        { label: 'get_actions_cache_usage', value: 'get_actions_cache_usage' },
        { label: 'get_actions_cache_usage_for_org', value: 'get_actions_cache_usage_for_org' }
    ]}
>
<TabItem value="get_actions_cache_usage">

Gets GitHub Actions cache usage for a repository.<br />The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
full_name,
active_caches_count,
active_caches_size_in_bytes
FROM github.actions.cache_usage
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
<TabItem value="get_actions_cache_usage_for_org">

Gets the total GitHub Actions cache usage for an organization.<br />The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.<br /><br />OAuth tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

```sql
SELECT
total_active_caches_count,
total_active_caches_size_in_bytes
FROM github.actions.cache_usage
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>
