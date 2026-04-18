--- 
title: alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts
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

Creates, updates, deletes, gets or lists an <code>alerts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alerts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.alerts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alert"
    values={[
        { label: 'get_alert', value: 'get_alert' }
    ]}
>
<TabItem value="get_alert">

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
    <td><CopyableCode code="assignees" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissal_approved_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_comment" /></td>
    <td><code>string</code></td>
    <td>The dismissal comment associated with the dismissal of the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_reason" /></td>
    <td><code>string</code></td>
    <td>**Required when the state is dismissed.** The reason for dismissing or closing the alert. (false positive, won't fix, used in tests)</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The GitHub URL of the alert resource.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL for fetching the list of instances for an alert.</td>
</tr>
<tr>
    <td><CopyableCode code="most_recent_instance" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The security alert number.</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a code scanning alert. (open, dismissed, fixed)</td>
</tr>
<tr>
    <td><CopyableCode code="tool" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the alert resource.</td>
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
    <td><a href="#get_alert"><CopyableCode code="get_alert" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a></td>
    <td></td>
    <td>Gets a single code scanning alert.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#update_alert"><CopyableCode code="update_alert" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-assignees"><code>assignees</code></a></td>
    <td></td>
    <td>Updates the status of a single code scanning alert.<br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
    defaultValue="get_alert"
    values={[
        { label: 'get_alert', value: 'get_alert' }
    ]}
>
<TabItem value="get_alert">

Gets a single code scanning alert.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
assignees,
created_at,
dismissal_approved_by,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
instances_url,
most_recent_instance,
number,
rule,
state,
tool,
updated_at,
url
FROM github.code_scanning.alerts
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND alert_number = '{{ alert_number }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_alert"
    values={[
        { label: 'update_alert', value: 'update_alert' }
    ]}
>
<TabItem value="update_alert">

Updates the status of a single code scanning alert.<br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
UPDATE github.code_scanning.alerts
SET 
state = '{{ state }}',
dismissed_reason = '{{ dismissed_reason }}',
dismissed_comment = '{{ dismissed_comment }}',
create_request = {{ create_request }},
assignees = '{{ assignees }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND alert_number = '{{ alert_number }}' --required
AND state = '{{ state }}' --required
AND assignees = '{{ assignees }}' --required
RETURNING
assignees,
created_at,
dismissal_approved_by,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
instances_url,
most_recent_instance,
number,
rule,
state,
tool,
updated_at,
url;
```
</TabItem>
</Tabs>
