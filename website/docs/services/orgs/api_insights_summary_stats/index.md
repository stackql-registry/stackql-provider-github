--- 
title: api_insights_summary_stats
hide_title: false
hide_table_of_contents: false
keywords:
  - api_insights_summary_stats
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

Creates, updates, deletes, gets or lists an <code>api_insights_summary_stats</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_insights_summary_stats" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.api_insights_summary_stats" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_summary_stats_by_actor"
    values={[
        { label: 'get_summary_stats_by_actor', value: 'get_summary_stats_by_actor' },
        { label: 'get_summary_stats_by_user', value: 'get_summary_stats_by_user' },
        { label: 'get_summary_stats', value: 'get_summary_stats' }
    ]}
>
<TabItem value="get_summary_stats_by_actor">

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
    <td><CopyableCode code="rate_limited_request_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of requests that were rate limited within the queried time period</td>
</tr>
<tr>
    <td><CopyableCode code="total_request_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of requests within the queried time period</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_summary_stats_by_user">

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
    <td><CopyableCode code="rate_limited_request_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of requests that were rate limited within the queried time period</td>
</tr>
<tr>
    <td><CopyableCode code="total_request_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of requests within the queried time period</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_summary_stats">

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
    <td><CopyableCode code="rate_limited_request_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of requests that were rate limited within the queried time period</td>
</tr>
<tr>
    <td><CopyableCode code="total_request_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of requests within the queried time period</td>
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
    <td><a href="#get_summary_stats_by_actor"><CopyableCode code="get_summary_stats_by_actor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-min_timestamp"><code>min_timestamp</code></a>, <a href="#parameter-actor_type"><code>actor_type</code></a>, <a href="#parameter-actor_id"><code>actor_id</code></a></td>
    <td><a href="#parameter-max_timestamp"><code>max_timestamp</code></a></td>
    <td>Get overall statistics of API requests within the organization made by a specific actor. Actors can be GitHub App installations, OAuth apps or other tokens on behalf of a user.</td>
</tr>
<tr>
    <td><a href="#get_summary_stats_by_user"><CopyableCode code="get_summary_stats_by_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-min_timestamp"><code>min_timestamp</code></a></td>
    <td><a href="#parameter-max_timestamp"><code>max_timestamp</code></a></td>
    <td>Get overall statistics of API requests within the organization for a user.</td>
</tr>
<tr>
    <td><a href="#get_summary_stats"><CopyableCode code="get_summary_stats" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-min_timestamp"><code>min_timestamp</code></a></td>
    <td><a href="#parameter-max_timestamp"><code>max_timestamp</code></a></td>
    <td>Get overall statistics of API requests made within an organization by all users and apps within a specified time frame.</td>
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
<tr id="parameter-actor_id">
    <td><CopyableCode code="actor_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the actor</td>
</tr>
<tr id="parameter-actor_type">
    <td><CopyableCode code="actor_type" /></td>
    <td><code>string</code></td>
    <td>The type of the actor</td>
</tr>
<tr id="parameter-min_timestamp">
    <td><CopyableCode code="min_timestamp" /></td>
    <td><code>string</code></td>
    <td>The minimum timestamp to query for stats. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user to query for stats</td>
</tr>
<tr id="parameter-max_timestamp">
    <td><CopyableCode code="max_timestamp" /></td>
    <td><code>string</code></td>
    <td>The maximum timestamp to query for stats. Defaults to the time 30 days ago. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_summary_stats_by_actor"
    values={[
        { label: 'get_summary_stats_by_actor', value: 'get_summary_stats_by_actor' },
        { label: 'get_summary_stats_by_user', value: 'get_summary_stats_by_user' },
        { label: 'get_summary_stats', value: 'get_summary_stats' }
    ]}
>
<TabItem value="get_summary_stats_by_actor">

Get overall statistics of API requests within the organization made by a specific actor. Actors can be GitHub App installations, OAuth apps or other tokens on behalf of a user.

```sql
SELECT
rate_limited_request_count,
total_request_count
FROM github.orgs.api_insights_summary_stats
WHERE org = '{{ org }}' -- required
AND min_timestamp = '{{ min_timestamp }}' -- required
AND actor_type = '{{ actor_type }}' -- required
AND actor_id = '{{ actor_id }}' -- required
AND max_timestamp = '{{ max_timestamp }}'
;
```
</TabItem>
<TabItem value="get_summary_stats_by_user">

Get overall statistics of API requests within the organization for a user.

```sql
SELECT
rate_limited_request_count,
total_request_count
FROM github.orgs.api_insights_summary_stats
WHERE org = '{{ org }}' -- required
AND user_id = '{{ user_id }}' -- required
AND min_timestamp = '{{ min_timestamp }}' -- required
AND max_timestamp = '{{ max_timestamp }}'
;
```
</TabItem>
<TabItem value="get_summary_stats">

Get overall statistics of API requests made within an organization by all users and apps within a specified time frame.

```sql
SELECT
rate_limited_request_count,
total_request_count
FROM github.orgs.api_insights_summary_stats
WHERE org = '{{ org }}' -- required
AND min_timestamp = '{{ min_timestamp }}' -- required
AND max_timestamp = '{{ max_timestamp }}'
;
```
</TabItem>
</Tabs>
