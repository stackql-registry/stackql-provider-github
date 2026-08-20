--- 
title: sbom_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - sbom_reports
  - dependency_graph
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

Creates, updates, deletes, gets or lists a <code>sbom_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sbom_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.dependency_graph.sbom_reports" /></td></tr>
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
    <td><a href="#fetch_sbom_report"><CopyableCode code="fetch_sbom_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-sbom_uuid"><code>sbom_uuid</code></a></td>
    <td></td>
    <td>Fetches a previously generated software bill of materials (SBOM) for a repository.<br />When the SBOM is ready, the response is a 302 redirect to a temporary download URL for the SBOM in SPDX JSON format.<br />The generated SBOM report may be retained for up to one week from the original request.<br />The temporary download URL returned by this endpoint expires separately, and its expiry is set when the fetch request is made.</td>
</tr>
<tr>
    <td><a href="#generate_sbom_report"><CopyableCode code="generate_sbom_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Triggers a job to generate a software bill of materials (SBOM) for a repository in SPDX JSON format.</td>
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
<tr id="parameter-sbom_uuid">
    <td><CopyableCode code="sbom_uuid" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the SBOM export.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="fetch_sbom_report"
    values={[
        { label: 'fetch_sbom_report', value: 'fetch_sbom_report' },
        { label: 'generate_sbom_report', value: 'generate_sbom_report' }
    ]}
>
<TabItem value="fetch_sbom_report">

Fetches a previously generated software bill of materials (SBOM) for a repository.<br />When the SBOM is ready, the response is a 302 redirect to a temporary download URL for the SBOM in SPDX JSON format.<br />The generated SBOM report may be retained for up to one week from the original request.<br />The temporary download URL returned by this endpoint expires separately, and its expiry is set when the fetch request is made.

```sql
EXEC github.dependency_graph.sbom_reports.fetch_sbom_report 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@sbom_uuid='{{ sbom_uuid }}' --required
;
```
</TabItem>
<TabItem value="generate_sbom_report">

Triggers a job to generate a software bill of materials (SBOM) for a repository in SPDX JSON format.

```sql
EXEC github.dependency_graph.sbom_reports.generate_sbom_report 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required
;
```
</TabItem>
</Tabs>
