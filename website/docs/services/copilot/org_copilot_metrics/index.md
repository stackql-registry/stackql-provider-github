--- 
title: org_copilot_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - org_copilot_metrics
  - copilot
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

Creates, updates, deletes, gets or lists an <code>org_copilot_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_copilot_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.org_copilot_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="copilot_metrics_for_organization"
    values={[
        { label: 'copilot_metrics_for_organization', value: 'copilot_metrics_for_organization' }
    ]}
>
<TabItem value="copilot_metrics_for_organization">

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
    <td><CopyableCode code="copilot_dotcom_chat" /></td>
    <td><code>object</code></td>
    <td>Usage metrics for Copilot Chat in GitHub.com</td>
</tr>
<tr>
    <td><CopyableCode code="copilot_dotcom_pull_requests" /></td>
    <td><code>object</code></td>
    <td>Usage metrics for Copilot for pull requests.</td>
</tr>
<tr>
    <td><CopyableCode code="copilot_ide_chat" /></td>
    <td><code>object</code></td>
    <td>Usage metrics for Copilot Chat in the IDE.</td>
</tr>
<tr>
    <td><CopyableCode code="copilot_ide_code_completions" /></td>
    <td><code>object</code></td>
    <td>Usage metrics for Copilot editor code completions in the IDE.</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date)</code></td>
    <td>The date for which the usage metrics are aggregated, in `YYYY-MM-DD` format.</td>
</tr>
<tr>
    <td><CopyableCode code="total_active_users" /></td>
    <td><code>integer</code></td>
    <td>The total number of Copilot users with activity belonging to any Copilot feature, globally, for the given day. Includes passive activity such as receiving a code suggestion, as well as engagement activity such as accepting a code suggestion or prompting chat. Does not include authentication events. Is not limited to the individual features detailed on the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="total_engaged_users" /></td>
    <td><code>integer</code></td>
    <td>The total number of Copilot users who engaged with any Copilot feature, for the given day. Examples include but are not limited to accepting a code suggestion, prompting Copilot chat, or triggering a PR Summary. Does not include authentication events. Is not limited to the individual features detailed on the endpoint.</td>
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
    <td><a href="#copilot_metrics_for_organization"><CopyableCode code="copilot_metrics_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Use this endpoint to see a breakdown of aggregated metrics for various GitHub Copilot features. See the response schema tab for detailed metrics definitions.<br /><br />&gt; [!NOTE]<br />&gt; This endpoint will only return results for a given day if the organization contained **five or more members with active Copilot licenses** on that day, as evaluated at the end of that day.<br /><br />The response contains metrics for up to 100 days prior. Metrics are processed once per day for the previous day,<br />and the response will only include data up until yesterday. In order for an end user to be counted towards these metrics,<br />they must have telemetry enabled in their IDE.<br /><br />To access this endpoint, the Copilot Metrics API access policy must be enabled for the organization.<br />Only organization owners and owners and billing managers of the parent enterprise can view Copilot metrics.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot`, `read:org`, or `read:enterprise` scopes to use this endpoint.</td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of days of metrics to display per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string</code></td>
    <td>Show usage metrics since this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:MM:SSZ`). Maximum value is 100 days ago.</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string</code></td>
    <td>Show usage metrics until this date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDTHH:MM:SSZ`) and should not preceed the `since` date if it is passed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="copilot_metrics_for_organization"
    values={[
        { label: 'copilot_metrics_for_organization', value: 'copilot_metrics_for_organization' }
    ]}
>
<TabItem value="copilot_metrics_for_organization">

Use this endpoint to see a breakdown of aggregated metrics for various GitHub Copilot features. See the response schema tab for detailed metrics definitions.<br /><br />&gt; [!NOTE]<br />&gt; This endpoint will only return results for a given day if the organization contained **five or more members with active Copilot licenses** on that day, as evaluated at the end of that day.<br /><br />The response contains metrics for up to 100 days prior. Metrics are processed once per day for the previous day,<br />and the response will only include data up until yesterday. In order for an end user to be counted towards these metrics,<br />they must have telemetry enabled in their IDE.<br /><br />To access this endpoint, the Copilot Metrics API access policy must be enabled for the organization.<br />Only organization owners and owners and billing managers of the parent enterprise can view Copilot metrics.<br /><br />OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot`, `read:org`, or `read:enterprise` scopes to use this endpoint.

```sql
SELECT
copilot_dotcom_chat,
copilot_dotcom_pull_requests,
copilot_ide_chat,
copilot_ide_code_completions,
date,
total_active_users,
total_engaged_users
FROM github.copilot.org_copilot_metrics
WHERE org = '{{ org }}' -- required
AND since = '{{ since }}'
AND until = '{{ until }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>
