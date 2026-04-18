--- 
title: org_coding_agent_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - org_coding_agent_permissions
  - copilot
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

Creates, updates, deletes, gets or lists an <code>org_coding_agent_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_coding_agent_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.org_coding_agent_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_copilot_coding_agent_permissions_organization"
    values={[
        { label: 'get_copilot_coding_agent_permissions_organization', value: 'get_copilot_coding_agent_permissions_organization' }
    ]}
>
<TabItem value="get_copilot_coding_agent_permissions_organization">

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
    <td><CopyableCode code="enabled_repositories" /></td>
    <td><code>string</code></td>
    <td>The policy for which repositories can use Copilot coding agent. Can be one of `all`, `selected`, or `none`. (all, selected, none)</td>
</tr>
<tr>
    <td><CopyableCode code="selected_repositories_url" /></td>
    <td><code>string</code></td>
    <td>The URL for the selected repositories endpoint. Only present when `enabled_repositories` is `selected`.</td>
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
    <td><a href="#get_copilot_coding_agent_permissions_organization"><CopyableCode code="get_copilot_coding_agent_permissions_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets information about which repositories in an organization have been enabled<br />or disabled for the Copilot coding agent.<br /><br />Organization owners can configure whether Copilot coding agent is enabled for<br />all repositories, selected repositories, or no repositories owned by organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_copilot_coding_agent_permissions_organization"><CopyableCode code="set_copilot_coding_agent_permissions_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-enabled_repositories"><code>enabled_repositories</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Sets the policy for which repositories in an organization can use Copilot coding agent.<br /><br />Organization owners can configure whether Copilot coding agent is enabled for<br />all repositories, selected repositories, or no repositories owned by the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
    defaultValue="get_copilot_coding_agent_permissions_organization"
    values={[
        { label: 'get_copilot_coding_agent_permissions_organization', value: 'get_copilot_coding_agent_permissions_organization' }
    ]}
>
<TabItem value="get_copilot_coding_agent_permissions_organization">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets information about which repositories in an organization have been enabled<br />or disabled for the Copilot coding agent.<br /><br />Organization owners can configure whether Copilot coding agent is enabled for<br />all repositories, selected repositories, or no repositories owned by organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
enabled_repositories,
selected_repositories_url
FROM github.copilot.org_coding_agent_permissions
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_copilot_coding_agent_permissions_organization"
    values={[
        { label: 'set_copilot_coding_agent_permissions_organization', value: 'set_copilot_coding_agent_permissions_organization' }
    ]}
>
<TabItem value="set_copilot_coding_agent_permissions_organization">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Sets the policy for which repositories in an organization can use Copilot coding agent.<br /><br />Organization owners can configure whether Copilot coding agent is enabled for<br />all repositories, selected repositories, or no repositories owned by the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.copilot.org_coding_agent_permissions
SET 
enabled_repositories = '{{ enabled_repositories }}'
WHERE 
org = '{{ org }}' --required
AND enabled_repositories = '{{ enabled_repositories }}' --required;
```
</TabItem>
</Tabs>
