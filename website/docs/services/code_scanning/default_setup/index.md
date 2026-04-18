--- 
title: default_setup
hide_title: false
hide_table_of_contents: false
keywords:
  - default_setup
  - code_scanning
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

Creates, updates, deletes, gets or lists a <code>default_setup</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_setup" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.default_setup" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_setup"
    values={[
        { label: 'get_default_setup', value: 'get_default_setup' }
    ]}
>
<TabItem value="get_default_setup">

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
    <td><CopyableCode code="languages" /></td>
    <td><code>array</code></td>
    <td>Languages to be analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="query_suite" /></td>
    <td><code>string</code></td>
    <td>CodeQL query suite to be used. (default, extended)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_label" /></td>
    <td><code>string</code></td>
    <td>Runner label to be used if the runner type is labeled. (example: code-scanning)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_type" /></td>
    <td><code>string</code></td>
    <td>Runner type to be used. (standard, labeled)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>The frequency of the periodic analysis. (weekly)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Code scanning default setup has been configured or not. (configured, not-configured)</td>
</tr>
<tr>
    <td><CopyableCode code="threat_model" /></td>
    <td><code>string</code></td>
    <td>Threat model to be used for code scanning analysis. Use `remote` to analyze only network sources and `remote_and_local` to include local sources like filesystem access, command-line arguments, database reads, environment variable and standard input. (remote, remote_and_local)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp of latest configuration update. (example: 2023-12-06T14:20:20.000Z)</td>
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
    <td><a href="#get_default_setup"><CopyableCode code="get_default_setup" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets a code scanning default setup configuration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#update_default_setup"><CopyableCode code="update_default_setup" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Updates a code scanning default setup configuration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
    defaultValue="get_default_setup"
    values={[
        { label: 'get_default_setup', value: 'get_default_setup' }
    ]}
>
<TabItem value="get_default_setup">

Gets a code scanning default setup configuration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
languages,
query_suite,
runner_label,
runner_type,
schedule,
state,
threat_model,
updated_at
FROM github.code_scanning.default_setup
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_default_setup"
    values={[
        { label: 'update_default_setup', value: 'update_default_setup' }
    ]}
>
<TabItem value="update_default_setup">

Updates a code scanning default setup configuration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
UPDATE github.code_scanning.default_setup
SET 
state = '{{ state }}',
runner_type = '{{ runner_type }}',
runner_label = '{{ runner_label }}',
query_suite = '{{ query_suite }}',
threat_model = '{{ threat_model }}',
languages = '{{ languages }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required;
```
</TabItem>
</Tabs>
