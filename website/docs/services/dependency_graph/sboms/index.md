--- 
title: sboms
hide_title: false
hide_table_of_contents: false
keywords:
  - sboms
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

Creates, updates, deletes, gets or lists a <code>sboms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sboms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.dependency_graph.sboms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="export_sbom"
    values={[
        { label: 'export_sbom', value: 'export_sbom' }
    ]}
>
<TabItem value="export_sbom">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the SPDX document. (example: github/github)</td>
</tr>
<tr>
    <td><CopyableCode code="SPDXID" /></td>
    <td><code>string</code></td>
    <td>The SPDX identifier for the SPDX document. (example: SPDXRef-DOCUMENT)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment about the SPDX document. (example: Exact versions could not be resolved for some packages. For more information: https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/)</td>
</tr>
<tr>
    <td><CopyableCode code="creationInfo" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dataLicense" /></td>
    <td><code>string</code></td>
    <td>The license under which the SPDX document is licensed. (example: CC0-1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="documentNamespace" /></td>
    <td><code>string</code></td>
    <td>The namespace for the SPDX document. (example: https://spdx.org/spdxdocs/protobom/15e41dd2-f961-4f4d-b8dc-f8f57ad70d57)</td>
</tr>
<tr>
    <td><CopyableCode code="packages" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="relationships" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="spdxVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the SPDX specification that this document conforms to. (example: SPDX-2.3)</td>
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
    <td><a href="#export_sbom"><CopyableCode code="export_sbom" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Exports the software bill of materials (SBOM) for a repository in SPDX JSON format.</td>
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
    defaultValue="export_sbom"
    values={[
        { label: 'export_sbom', value: 'export_sbom' }
    ]}
>
<TabItem value="export_sbom">

Exports the software bill of materials (SBOM) for a repository in SPDX JSON format.

```sql
SELECT
name,
SPDXID,
comment,
creationInfo,
dataLicense,
documentNamespace,
packages,
relationships,
spdxVersion
FROM github.dependency_graph.sboms
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>
