--- 
title: copilot_user_one_day_usage_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - copilot_user_one_day_usage_metrics
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

Creates, updates, deletes, gets or lists a <code>copilot_user_one_day_usage_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="copilot_user_one_day_usage_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.copilot_user_one_day_usage_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="copilot_users_one_day_usage_metrics"
    values={[
        { label: 'copilot_users_one_day_usage_metrics', value: 'copilot_users_one_day_usage_metrics' }
    ]}
>
<TabItem value="copilot_users_one_day_usage_metrics">

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
    <td><CopyableCode code="download_links" /></td>
    <td><code>array</code></td>
    <td>The URLs to download the Copilot usage metrics report for the enterprise/organization for the specified day.</td>
</tr>
<tr>
    <td><CopyableCode code="report_day" /></td>
    <td><code>string (date)</code></td>
    <td>The day of the report in `YYYY-MM-DD` format.</td>
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
    <td><a href="#copilot_users_one_day_usage_metrics"><CopyableCode code="copilot_users_one_day_usage_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-day"><code>day</code></a></td>
    <td></td>
    <td>Use this endpoint to retrieve download links for the Copilot user usage metrics report for a specific day. The report provides detailed user-level usage data and engagement metrics for Copilot features across the enterprise.<br /><br />The report contains user-specific metrics for the specified day, including individual user engagement statistics, feature usage patterns, and adoption metrics broken down by user. This report allows authorized users to analyze Copilot usage at the user level to understand adoption patterns and identify opportunities for increased engagement.<br /><br />Reports are generated daily and made available for download through signed URLs with a limited expiration time. The response includes download links to the report files, along with the specific date of the report. The report covers a complete day for which data has been processed. Reports are available starting from October 10, 2025, and historical data can be accessed for up to 1 year from the current date.<br /><br />Enterprise owners, billing managers, and authorized users with fine-grained "View Enterprise Copilot Metrics" permission can retrieve Copilot metrics reports for the enterprise. OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.</td>
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
<tr id="parameter-day">
    <td><CopyableCode code="day" /></td>
    <td><code>string (date)</code></td>
    <td>The day to request data for, in `YYYY-MM-DD` format.</td>
</tr>
<tr id="parameter-enterprise">
    <td><CopyableCode code="enterprise" /></td>
    <td><code>string</code></td>
    <td>The slug version of the enterprise name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="copilot_users_one_day_usage_metrics"
    values={[
        { label: 'copilot_users_one_day_usage_metrics', value: 'copilot_users_one_day_usage_metrics' }
    ]}
>
<TabItem value="copilot_users_one_day_usage_metrics">

Use this endpoint to retrieve download links for the Copilot user usage metrics report for a specific day. The report provides detailed user-level usage data and engagement metrics for Copilot features across the enterprise.<br /><br />The report contains user-specific metrics for the specified day, including individual user engagement statistics, feature usage patterns, and adoption metrics broken down by user. This report allows authorized users to analyze Copilot usage at the user level to understand adoption patterns and identify opportunities for increased engagement.<br /><br />Reports are generated daily and made available for download through signed URLs with a limited expiration time. The response includes download links to the report files, along with the specific date of the report. The report covers a complete day for which data has been processed. Reports are available starting from October 10, 2025, and historical data can be accessed for up to 1 year from the current date.<br /><br />Enterprise owners, billing managers, and authorized users with fine-grained "View Enterprise Copilot Metrics" permission can retrieve Copilot metrics reports for the enterprise. OAuth app tokens and personal access tokens (classic) need either the `manage_billing:copilot` or `read:enterprise` scopes to use this endpoint.

```sql
SELECT
download_links,
report_day
FROM github.copilot.copilot_user_one_day_usage_metrics
WHERE enterprise = '{{ enterprise }}' -- required
AND day = '{{ day }}' -- required
;
```
</TabItem>
</Tabs>
