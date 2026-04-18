--- 
title: repo_secret_scan_history
hide_title: false
hide_table_of_contents: false
keywords:
  - repo_secret_scan_history
  - secret_scanning
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

Creates, updates, deletes, gets or lists a <code>repo_secret_scan_history</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repo_secret_scan_history" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.secret_scanning.repo_secret_scan_history" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scan_history"
    values={[
        { label: 'get_scan_history', value: 'get_scan_history' }
    ]}
>
<TabItem value="get_scan_history">

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
    <td><CopyableCode code="backfill_scans" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="custom_pattern_backfill_scans" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="incremental_scans" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pattern_update_scans" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#get_scan_history"><CopyableCode code="get_scan_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Lists the latest default incremental and backfill scans by type for a repository. Scans from Copilot Secret Scanning are not included.<br /><br />&gt; [!NOTE]<br />&gt; This endpoint requires [GitHub Advanced Security](https://docs.github.com/get-started/learning-about-github/about-github-advanced-security)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
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
    defaultValue="get_scan_history"
    values={[
        { label: 'get_scan_history', value: 'get_scan_history' }
    ]}
>
<TabItem value="get_scan_history">

Lists the latest default incremental and backfill scans by type for a repository. Scans from Copilot Secret Scanning are not included.<br /><br />&gt; [!NOTE]<br />&gt; This endpoint requires [GitHub Advanced Security](https://docs.github.com/get-started/learning-about-github/about-github-advanced-security)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
SELECT
backfill_scans,
custom_pattern_backfill_scans,
incremental_scans,
pattern_update_scans
FROM github.secret_scanning.repo_secret_scan_history
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>
