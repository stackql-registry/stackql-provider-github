--- 
title: repo_cloud_agent_configuration
hide_title: false
hide_table_of_contents: false
keywords:
  - repo_cloud_agent_configuration
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

Creates, updates, deletes, gets or lists a <code>repo_cloud_agent_configuration</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repo_cloud_agent_configuration" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.repo_cloud_agent_configuration" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_copilot_cloud_agent_configuration"
    values={[
        { label: 'get_copilot_cloud_agent_configuration', value: 'get_copilot_cloud_agent_configuration' }
    ]}
>
<TabItem value="get_copilot_cloud_agent_configuration">

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
    <td><CopyableCode code="custom_allowlist" /></td>
    <td><code>array</code></td>
    <td>A list of custom allowlist entries, as hosts or URLs, that the firewall will allow the Copilot cloud agent to access.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_tools" /></td>
    <td><code>object</code></td>
    <td>The enabled review tools for Copilot cloud agent.</td>
</tr>
<tr>
    <td><CopyableCode code="is_automations_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether automations are enabled in this repository. When true, users can create automations that automatically run agents on a schedule or in response to events like new issues or updated pull requests.</td>
</tr>
<tr>
    <td><CopyableCode code="is_firewall_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the firewall is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="is_firewall_recommended_allowlist_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the firewall recommended allowlist is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="mcp_configuration" /></td>
    <td><code>object</code></td>
    <td>The user-supplied MCP server configuration for the repository, as a free-form JSON object. This will be set to `null` if no configuration has been set.  The shape of a valid MCP configuration may evolve over time, so this property is intentionally not strictly typed. Clients should not assume a fixed schema.</td>
</tr>
<tr>
    <td><CopyableCode code="require_actions_workflow_approval" /></td>
    <td><code>boolean</code></td>
    <td>Whether Actions workflow approval is required for Copilot cloud agent pull requests.</td>
</tr>
<tr>
    <td><CopyableCode code="require_write_access_for_automation_triggers" /></td>
    <td><code>boolean</code></td>
    <td>Whether write access is required for automation triggers. When true, automations will only run if the user triggering the event has write access to the repository. When false, users can create automations that listen for events triggered by users without write access.</td>
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
    <td><a href="#get_copilot_cloud_agent_configuration"><CopyableCode code="get_copilot_cloud_agent_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets the Copilot cloud agent configuration for a repository, including MCP server<br />configuration, enabled review tools, Actions workflow approval settings, and firewall<br />configuration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
    defaultValue="get_copilot_cloud_agent_configuration"
    values={[
        { label: 'get_copilot_cloud_agent_configuration', value: 'get_copilot_cloud_agent_configuration' }
    ]}
>
<TabItem value="get_copilot_cloud_agent_configuration">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets the Copilot cloud agent configuration for a repository, including MCP server<br />configuration, enabled review tools, Actions workflow approval settings, and firewall<br />configuration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
custom_allowlist,
enabled_tools,
is_automations_enabled,
is_firewall_enabled,
is_firewall_recommended_allowlist_enabled,
mcp_configuration,
require_actions_workflow_approval,
require_write_access_for_automation_triggers
FROM github.copilot.repo_cloud_agent_configuration
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>
