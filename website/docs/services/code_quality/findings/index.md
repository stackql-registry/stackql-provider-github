--- 
title: findings
hide_title: false
hide_table_of_contents: false
keywords:
  - findings
  - code_quality
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

Creates, updates, deletes, gets or lists a <code>findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_quality.findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding"
    values={[
        { label: 'get_finding', value: 'get_finding' },
        { label: 'list_findings_for_repo', value: 'list_findings_for_repo' }
    ]}
>
<TabItem value="get_finding">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the code quality finding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Code quality file location</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>object</code></td>
    <td>Code quality finding message</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The finding number.</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>Code quality rule</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the code quality finding. (open, dismissed)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the code quality finding resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_findings_for_repo">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the code quality finding was created.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Code quality file location</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>object</code></td>
    <td>Code quality finding message</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The finding number.</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td>Code quality rule</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the code quality finding. (open, dismissed)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the code quality finding resource.</td>
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
    <td><a href="#get_finding"><CopyableCode code="get_finding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-finding_number"><code>finding_number</code></a></td>
    <td></td>
    <td>Gets a single code quality finding.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#list_findings_for_repo"><CopyableCode code="list_findings_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Lists code quality findings for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
<tr id="parameter-finding_number">
    <td><CopyableCode code="finding_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies a finding.</td>
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
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>If specified, only code quality findings with this state will be returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_finding"
    values={[
        { label: 'get_finding', value: 'get_finding' },
        { label: 'list_findings_for_repo', value: 'list_findings_for_repo' }
    ]}
>
<TabItem value="get_finding">

Gets a single code quality finding.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
created_at,
location,
message,
number,
rule,
state,
url
FROM github.code_quality.findings
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND finding_number = '{{ finding_number }}' -- required
;
```
</TabItem>
<TabItem value="list_findings_for_repo">

Lists code quality findings for a repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
created_at,
location,
message,
number,
rule,
state,
url
FROM github.code_quality.findings
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND direction = '{{ direction }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND state = '{{ state }}'
;
```
</TabItem>
</Tabs>
