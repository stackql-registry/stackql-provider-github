--- 
title: immutable_releases_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - immutable_releases_settings
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

Creates, updates, deletes, gets or lists an <code>immutable_releases_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="immutable_releases_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.immutable_releases_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_immutable_releases_settings"
    values={[
        { label: 'get_immutable_releases_settings', value: 'get_immutable_releases_settings' }
    ]}
>
<TabItem value="get_immutable_releases_settings">

Immutable releases settings response

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
    <td><CopyableCode code="enforced_repositories" /></td>
    <td><code>string</code></td>
    <td>The policy that controls how immutable releases are enforced in the organization. (all, none, selected) (example: all)</td>
</tr>
<tr>
    <td><CopyableCode code="selected_repositories_url" /></td>
    <td><code>string</code></td>
    <td>The API URL to use to get or set the selected repositories for immutable releases enforcement, when `enforced_repositories` is set to `selected`.</td>
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
    <td><a href="#get_immutable_releases_settings"><CopyableCode code="get_immutable_releases_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets the immutable releases policy for repositories in an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_immutable_releases_settings"><CopyableCode code="set_immutable_releases_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-enforced_repositories"><code>enforced_repositories</code></a></td>
    <td></td>
    <td>Sets the immutable releases policy for repositories in an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
    defaultValue="get_immutable_releases_settings"
    values={[
        { label: 'get_immutable_releases_settings', value: 'get_immutable_releases_settings' }
    ]}
>
<TabItem value="get_immutable_releases_settings">

Gets the immutable releases policy for repositories in an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
enforced_repositories,
selected_repositories_url
FROM github.orgs.immutable_releases_settings
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_immutable_releases_settings"
    values={[
        { label: 'set_immutable_releases_settings', value: 'set_immutable_releases_settings' }
    ]}
>
<TabItem value="set_immutable_releases_settings">

Sets the immutable releases policy for repositories in an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
REPLACE github.orgs.immutable_releases_settings
SET 
enforced_repositories = '{{ enforced_repositories }}',
selected_repository_ids = '{{ selected_repository_ids }}'
WHERE 
org = '{{ org }}' --required
AND enforced_repositories = '{{ enforced_repositories }}' --required;
```
</TabItem>
</Tabs>
