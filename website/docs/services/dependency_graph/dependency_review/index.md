--- 
title: dependency_review
hide_title: false
hide_table_of_contents: false
keywords:
  - dependency_review
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

Creates, updates, deletes, gets or lists a <code>dependency_review</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dependency_review" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.dependency_graph.dependency_review" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="diff_range"
    values={[
        { label: 'diff_range', value: 'diff_range' }
    ]}
>
<TabItem value="diff_range">

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
    <td> (example: @actions/core)</td>
</tr>
<tr>
    <td><CopyableCode code="change_type" /></td>
    <td><code>string</code></td>
    <td> (added, removed)</td>
</tr>
<tr>
    <td><CopyableCode code="ecosystem" /></td>
    <td><code>string</code></td>
    <td> (example: npm)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="manifest" /></td>
    <td><code>string</code></td>
    <td> (example: path/to/package-lock.json)</td>
</tr>
<tr>
    <td><CopyableCode code="package_url" /></td>
    <td><code>string</code></td>
    <td> (example: pkg:/npm/%40actions/core@1.1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Where the dependency is utilized. `development` means that the dependency is only utilized in the development environment. `runtime` means that the dependency is utilized at runtime and in the development environment. (unknown, runtime, development)</td>
</tr>
<tr>
    <td><CopyableCode code="source_repository_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/github/actions)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td> (example: 1.0.0)</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilities" /></td>
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
    <td><a href="#diff_range"><CopyableCode code="diff_range" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-basehead"><code>basehead</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td>Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.</td>
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
<tr id="parameter-basehead">
    <td><CopyableCode code="basehead" /></td>
    <td><code>string</code></td>
    <td>The base and head Git revisions to compare. The Git revisions will be resolved to commit SHAs. Named revisions will be resolved to their corresponding HEAD commits, and an appropriate merge base will be determined. This parameter expects the format `&#123;base&#125;...&#123;head&#125;`.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The full path, relative to the repository root, of the dependency manifest file.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="diff_range"
    values={[
        { label: 'diff_range', value: 'diff_range' }
    ]}
>
<TabItem value="diff_range">

Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.

```sql
SELECT
name,
change_type,
ecosystem,
license,
manifest,
package_url,
scope,
source_repository_url,
version,
vulnerabilities
FROM github.dependency_graph.dependency_review
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND basehead = '{{ basehead }}' -- required
AND name = '{{ name }}'
;
```
</TabItem>
</Tabs>
