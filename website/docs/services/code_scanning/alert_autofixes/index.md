--- 
title: alert_autofixes
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_autofixes
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

Creates, updates, deletes, gets or lists an <code>alert_autofixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_autofixes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.alert_autofixes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_autofix"
    values={[
        { label: 'get_autofix', value: 'get_autofix' }
    ]}
>
<TabItem value="get_autofix">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of an autofix.</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of an autofix in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of an autofix. (pending, error, success, outdated)</td>
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
    <td><a href="#get_autofix"><CopyableCode code="get_autofix" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a></td>
    <td></td>
    <td>Gets the status and description of an autofix for a code scanning alert.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#create_autofix"><CopyableCode code="create_autofix" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a></td>
    <td></td>
    <td>Creates an autofix for a code scanning alert.<br /><br />If a new autofix is to be created as a result of this request or is currently being generated, then this endpoint will return a 202 Accepted response.<br /><br />If an autofix already exists for a given alert, then this endpoint will return a 200 OK response.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#commit_autofix"><CopyableCode code="commit_autofix" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a></td>
    <td></td>
    <td>Commits an autofix for a code scanning alert.<br /><br />If an autofix is committed as a result of this request, then this endpoint will return a 201 Created response.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
<tr id="parameter-alert_number">
    <td><CopyableCode code="alert_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/&#123;owner&#125;/&#123;repo&#125;/code-scanning/alerts` operation.</td>
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
    defaultValue="get_autofix"
    values={[
        { label: 'get_autofix', value: 'get_autofix' }
    ]}
>
<TabItem value="get_autofix">

Gets the status and description of an autofix for a code scanning alert.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
description,
started_at,
status
FROM github.code_scanning.alert_autofixes
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND alert_number = '{{ alert_number }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_autofix"
    values={[
        { label: 'create_autofix', value: 'create_autofix' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_autofix">

Creates an autofix for a code scanning alert.<br /><br />If a new autofix is to be created as a result of this request or is currently being generated, then this endpoint will return a 202 Accepted response.<br /><br />If an autofix already exists for a given alert, then this endpoint will return a 200 OK response.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
INSERT INTO github.code_scanning.alert_autofixes (
owner,
repo,
alert_number
)
SELECT 
'{{ owner }}',
'{{ repo }}',
'{{ alert_number }}'
RETURNING
description,
started_at,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alert_autofixes
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the alert_autofixes resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the alert_autofixes resource.
    - name: alert_number
      value: {{ alert_number }}
      description: Required parameter for the alert_autofixes resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="commit_autofix"
    values={[
        { label: 'commit_autofix', value: 'commit_autofix' }
    ]}
>
<TabItem value="commit_autofix">

Commits an autofix for a code scanning alert.<br /><br />If an autofix is committed as a result of this request, then this endpoint will return a 201 Created response.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
EXEC github.code_scanning.alert_autofixes.commit_autofix 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@alert_number='{{ alert_number }}' --required 
@@json=
'{
"target_ref": "{{ target_ref }}", 
"message": "{{ message }}"
}'
;
```
</TabItem>
</Tabs>
