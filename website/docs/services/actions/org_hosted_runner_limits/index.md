--- 
title: org_hosted_runner_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - org_hosted_runner_limits
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

Creates, updates, deletes, gets or lists an <code>org_hosted_runner_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_hosted_runner_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_hosted_runner_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hosted_runners_limits_for_org"
    values={[
        { label: 'get_hosted_runners_limits_for_org', value: 'get_hosted_runners_limits_for_org' }
    ]}
>
<TabItem value="get_hosted_runners_limits_for_org">

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
    <td><CopyableCode code="current_usage" /></td>
    <td><code>integer</code></td>
    <td>The current number of static public IP addresses in use by Hosted Runners.</td>
</tr>
<tr>
    <td><CopyableCode code="maximum" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of static public IP addresses that can be used for Hosted Runners.</td>
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
    <td><a href="#get_hosted_runners_limits_for_org"><CopyableCode code="get_hosted_runners_limits_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Get the GitHub-hosted runners limits for an organization.</td>
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
    defaultValue="get_hosted_runners_limits_for_org"
    values={[
        { label: 'get_hosted_runners_limits_for_org', value: 'get_hosted_runners_limits_for_org' }
    ]}
>
<TabItem value="get_hosted_runners_limits_for_org">

Get the GitHub-hosted runners limits for an organization.

```sql
SELECT
current_usage,
maximum
FROM github.actions.org_hosted_runner_limits
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>
