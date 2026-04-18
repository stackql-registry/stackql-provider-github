--- 
title: org_self_hosted_runners_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - org_self_hosted_runners_permissions
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

Creates, updates, deletes, gets or lists an <code>org_self_hosted_runners_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_self_hosted_runners_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_self_hosted_runners_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_self_hosted_runners_permissions_organization"
    values={[
        { label: 'get_self_hosted_runners_permissions_organization', value: 'get_self_hosted_runners_permissions_organization' }
    ]}
>
<TabItem value="get_self_hosted_runners_permissions_organization">

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
    <td>The policy that controls whether self-hosted runners can be used by repositories in the organization (all, selected, none)</td>
</tr>
<tr>
    <td><CopyableCode code="selected_repositories_url" /></td>
    <td><code>string</code></td>
    <td>The URL to the endpoint for managing selected repositories for self-hosted runners in the organization</td>
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
    <td><a href="#get_self_hosted_runners_permissions_organization"><CopyableCode code="get_self_hosted_runners_permissions_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets the settings for self-hosted runners for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_self_hosted_runners_permissions_organization"><CopyableCode code="set_self_hosted_runners_permissions_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-enabled_repositories"><code>enabled_repositories</code></a></td>
    <td></td>
    <td>Sets the settings for self-hosted runners for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.</td>
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
    defaultValue="get_self_hosted_runners_permissions_organization"
    values={[
        { label: 'get_self_hosted_runners_permissions_organization', value: 'get_self_hosted_runners_permissions_organization' }
    ]}
>
<TabItem value="get_self_hosted_runners_permissions_organization">

Gets the settings for self-hosted runners for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.

```sql
SELECT
enabled_repositories,
selected_repositories_url
FROM github.actions.org_self_hosted_runners_permissions
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_self_hosted_runners_permissions_organization"
    values={[
        { label: 'set_self_hosted_runners_permissions_organization', value: 'set_self_hosted_runners_permissions_organization' }
    ]}
>
<TabItem value="set_self_hosted_runners_permissions_organization">

Sets the settings for self-hosted runners for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.

```sql
REPLACE github.actions.org_self_hosted_runners_permissions
SET 
enabled_repositories = '{{ enabled_repositories }}'
WHERE 
org = '{{ org }}' --required
AND enabled_repositories = '{{ enabled_repositories }}' --required;
```
</TabItem>
</Tabs>
