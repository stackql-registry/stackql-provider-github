--- 
title: org_copilot_user_usage_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - org_copilot_user_usage_metrics
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

Creates, updates, deletes, gets or lists an <code>org_copilot_user_usage_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_copilot_user_usage_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.org_copilot_user_usage_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="copilot_organization_users_usage_metrics"
    values={[
        { label: 'copilot_organization_users_usage_metrics', value: 'copilot_organization_users_usage_metrics' }
    ]}
>
<TabItem value="copilot_organization_users_usage_metrics">

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
    <td>The URLs to download the latest Copilot usage metrics report for the enterprise/organization.</td>
</tr>
<tr>
    <td><CopyableCode code="report_end_day" /></td>
    <td><code>string (date)</code></td>
    <td>The end date of the report period in `YYYY-MM-DD` format.</td>
</tr>
<tr>
    <td><CopyableCode code="report_start_day" /></td>
    <td><code>string (date)</code></td>
    <td>The start date of the report period in `YYYY-MM-DD` format.</td>
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
    <td><a href="#copilot_organization_users_usage_metrics"><CopyableCode code="copilot_organization_users_usage_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Use this endpoint to retrieve download links for the latest 28-day organization users Copilot usage metrics report. The report provides detailed user-level usage data and engagement metrics for Copilot features across the organization.<br /><br />The report contains user-specific metrics for the previous 28 days, including individual user engagement statistics, feature usage patterns, and adoption metrics broken down by user. This report allows authorized users to analyze Copilot usage at the user level to understand adoption patterns and identify opportunities for increased engagement.<br /><br />Reports are generated daily and made available for download through signed URLs with a limited expiration time. The response includes download links to the report files, along with the specific date range covered by the report. The report covers a complete 28-day period ending on the most recent day for which data has been processed.<br /><br />Organization owners and authorized users with fine-grained "View Organization Copilot Metrics" permission can retrieve Copilot metrics reports for the organization. OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />For more information about organization metrics attribution, see [How are metrics attributed across organizations](https://docs.github.com/copilot/concepts/copilot-metrics#how-are-metrics-attributed-across-organizations).</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="copilot_organization_users_usage_metrics"
    values={[
        { label: 'copilot_organization_users_usage_metrics', value: 'copilot_organization_users_usage_metrics' }
    ]}
>
<TabItem value="copilot_organization_users_usage_metrics">

Use this endpoint to retrieve download links for the latest 28-day organization users Copilot usage metrics report. The report provides detailed user-level usage data and engagement metrics for Copilot features across the organization.<br /><br />The report contains user-specific metrics for the previous 28 days, including individual user engagement statistics, feature usage patterns, and adoption metrics broken down by user. This report allows authorized users to analyze Copilot usage at the user level to understand adoption patterns and identify opportunities for increased engagement.<br /><br />Reports are generated daily and made available for download through signed URLs with a limited expiration time. The response includes download links to the report files, along with the specific date range covered by the report. The report covers a complete 28-day period ending on the most recent day for which data has been processed.<br /><br />Organization owners and authorized users with fine-grained "View Organization Copilot Metrics" permission can retrieve Copilot metrics reports for the organization. OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />For more information about organization metrics attribution, see [How are metrics attributed across organizations](https://docs.github.com/copilot/concepts/copilot-metrics#how-are-metrics-attributed-across-organizations).

```sql
SELECT
download_links,
report_end_day,
report_start_day
FROM github.copilot.org_copilot_user_usage_metrics
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>
