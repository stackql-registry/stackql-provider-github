--- 
title: org_content_exclusion
hide_title: false
hide_table_of_contents: false
keywords:
  - org_content_exclusion
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

Creates, updates, deletes, gets or lists an <code>org_content_exclusion</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_content_exclusion" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.org_content_exclusion" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#set_copilot_content_exclusion_for_organization"><CopyableCode code="set_copilot_content_exclusion_for_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Sets Copilot content exclusion path rules for an organization.<br />To configure these settings, go to the organization's settings on GitHub.<br />For more information, see "[Excluding content from GitHub Copilot](https://docs.github.com/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#configuring-content-exclusions-for-your-organization)."<br /><br />Organization owners can set Copilot content exclusion rules for the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `copilot` scope to use this endpoint.<br /><br />&gt; [!CAUTION]<br />&gt; * At this time, the API does not support comments. When using this endpoint, any existing comments in your rules will be deleted.<br />&gt; * At this time, the API does not support duplicate keys. If you submit content exclusions through the API with duplicate keys, only the last occurrence will be saved. Earlier entries with the same key will be overwritten.</td>
</tr>
<tr>
    <td><a href="#copilot_content_exclusion_for_organization"><CopyableCode code="copilot_content_exclusion_for_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets information about an organization's Copilot content exclusion path rules.<br />To configure these settings, go to the organization's settings on GitHub.<br />For more information, see "[Excluding content from GitHub Copilot](https://docs.github.com/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#configuring-content-exclusions-for-your-organization)."<br /><br />Organization owners can view details about Copilot content exclusion rules for the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `copilot` or `read:org` scopes to use this endpoint.<br /><br />&gt; [!CAUTION]<br />&gt; * At this time, the API does not support comments. This endpoint will not return any comments in the existing rules.<br />&gt; * At this time, the API does not support duplicate keys. If your content exclusion configuration contains duplicate keys, the API will return only the last occurrence of that key. For example, if duplicate entries are present, only the final value will be included in the response.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="set_copilot_content_exclusion_for_organization"
    values={[
        { label: 'set_copilot_content_exclusion_for_organization', value: 'set_copilot_content_exclusion_for_organization' }
    ]}
>
<TabItem value="set_copilot_content_exclusion_for_organization">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Sets Copilot content exclusion path rules for an organization.<br />To configure these settings, go to the organization's settings on GitHub.<br />For more information, see "[Excluding content from GitHub Copilot](https://docs.github.com/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#configuring-content-exclusions-for-your-organization)."<br /><br />Organization owners can set Copilot content exclusion rules for the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `copilot` scope to use this endpoint.<br /><br />&gt; [!CAUTION]<br />&gt; * At this time, the API does not support comments. When using this endpoint, any existing comments in your rules will be deleted.<br />&gt; * At this time, the API does not support duplicate keys. If you submit content exclusions through the API with duplicate keys, only the last occurrence will be saved. Earlier entries with the same key will be overwritten.

```sql
REPLACE github.copilot.org_content_exclusion
SET 
-- No updatable properties
WHERE 
org = '{{ org }}' --required
RETURNING
message;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copilot_content_exclusion_for_organization"
    values={[
        { label: 'copilot_content_exclusion_for_organization', value: 'copilot_content_exclusion_for_organization' }
    ]}
>
<TabItem value="copilot_content_exclusion_for_organization">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets information about an organization's Copilot content exclusion path rules.<br />To configure these settings, go to the organization's settings on GitHub.<br />For more information, see "[Excluding content from GitHub Copilot](https://docs.github.com/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot#configuring-content-exclusions-for-your-organization)."<br /><br />Organization owners can view details about Copilot content exclusion rules for the organization.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `copilot` or `read:org` scopes to use this endpoint.<br /><br />&gt; [!CAUTION]<br />&gt; * At this time, the API does not support comments. This endpoint will not return any comments in the existing rules.<br />&gt; * At this time, the API does not support duplicate keys. If your content exclusion configuration contains duplicate keys, the API will return only the last occurrence of that key. For example, if duplicate entries are present, only the final value will be included in the response.

```sql
EXEC github.copilot.org_content_exclusion.copilot_content_exclusion_for_organization 
@org='{{ org }}' --required
;
```
</TabItem>
</Tabs>
