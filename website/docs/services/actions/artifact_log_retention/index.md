--- 
title: artifact_log_retention
hide_title: false
hide_table_of_contents: false
keywords:
  - artifact_log_retention
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

Creates, updates, deletes, gets or lists an <code>artifact_log_retention</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="artifact_log_retention" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.artifact_log_retention" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_artifact_and_log_retention_settings_repository"
    values={[
        { label: 'get_artifact_and_log_retention_settings_repository', value: 'get_artifact_and_log_retention_settings_repository' },
        { label: 'get_artifact_and_log_retention_settings_organization', value: 'get_artifact_and_log_retention_settings_organization' }
    ]}
>
<TabItem value="get_artifact_and_log_retention_settings_repository">

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
    <td><CopyableCode code="days" /></td>
    <td><code>integer</code></td>
    <td>The number of days artifacts and logs are retained</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_allowed_days" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of days that can be configured</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_artifact_and_log_retention_settings_organization">

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
    <td><CopyableCode code="days" /></td>
    <td><code>integer</code></td>
    <td>The number of days artifacts and logs are retained</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_allowed_days" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of days that can be configured</td>
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
    <td><a href="#get_artifact_and_log_retention_settings_repository"><CopyableCode code="get_artifact_and_log_retention_settings_repository" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets artifact and log retention settings for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_artifact_and_log_retention_settings_organization"><CopyableCode code="get_artifact_and_log_retention_settings_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets artifact and log retention settings for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_artifact_and_log_retention_settings_repository"><CopyableCode code="set_artifact_and_log_retention_settings_repository" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-days"><code>days</code></a></td>
    <td></td>
    <td>Sets artifact and log retention settings for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_artifact_and_log_retention_settings_organization"><CopyableCode code="set_artifact_and_log_retention_settings_organization" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-days"><code>days</code></a></td>
    <td></td>
    <td>Sets artifact and log retention settings for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.</td>
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
    defaultValue="get_artifact_and_log_retention_settings_repository"
    values={[
        { label: 'get_artifact_and_log_retention_settings_repository', value: 'get_artifact_and_log_retention_settings_repository' },
        { label: 'get_artifact_and_log_retention_settings_organization', value: 'get_artifact_and_log_retention_settings_organization' }
    ]}
>
<TabItem value="get_artifact_and_log_retention_settings_repository">

Gets artifact and log retention settings for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
days,
maximum_allowed_days
FROM github.actions.artifact_log_retention
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
<TabItem value="get_artifact_and_log_retention_settings_organization">

Gets artifact and log retention settings for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.

```sql
SELECT
days,
maximum_allowed_days
FROM github.actions.artifact_log_retention
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_artifact_and_log_retention_settings_repository"
    values={[
        { label: 'set_artifact_and_log_retention_settings_repository', value: 'set_artifact_and_log_retention_settings_repository' },
        { label: 'set_artifact_and_log_retention_settings_organization', value: 'set_artifact_and_log_retention_settings_organization' }
    ]}
>
<TabItem value="set_artifact_and_log_retention_settings_repository">

Sets artifact and log retention settings for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.actions.artifact_log_retention
SET 
days = {{ days }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND days = '{{ days }}' --required;
```
</TabItem>
<TabItem value="set_artifact_and_log_retention_settings_organization">

Sets artifact and log retention settings for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope or the "Actions policies" fine-grained permission to use this endpoint.

```sql
REPLACE github.actions.artifact_log_retention
SET 
days = {{ days }}
WHERE 
org = '{{ org }}' --required
AND days = '{{ days }}' --required;
```
</TabItem>
</Tabs>
