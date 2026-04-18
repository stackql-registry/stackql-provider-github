--- 
title: org_copilot_one_day_usage_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - org_copilot_one_day_usage_metrics
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

Creates, updates, deletes, gets or lists an <code>org_copilot_one_day_usage_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_copilot_one_day_usage_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.copilot.org_copilot_one_day_usage_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="copilot_organization_one_day_usage_metrics"
    values={[
        { label: 'copilot_organization_one_day_usage_metrics', value: 'copilot_organization_one_day_usage_metrics' }
    ]}
>
<TabItem value="copilot_organization_one_day_usage_metrics">

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
    <td><a href="#copilot_organization_one_day_usage_metrics"><CopyableCode code="copilot_organization_one_day_usage_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-day"><code>day</code></a></td>
    <td></td>
    <td>Use this endpoint to retrieve download links for the Copilot organization usage metrics report for a specific day. The report provides comprehensive usage data for Copilot features across the organization.<br /><br />The report contains aggregated metrics for the specified day, including usage statistics for various Copilot features, user engagement data, and feature adoption metrics. Reports are generated daily and made available for download through signed URLs with a limited expiration time.<br /><br />The response includes download links to the report files, along with the specific date of the report. The report covers a complete day for which data has been processed.<br /><br />Organization owners and authorized users with fine-grained "View Organization Copilot Metrics" permission can retrieve Copilot metrics reports for the organization. OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />For more information about organization metrics attribution, see [How are metrics attributed across organizations](https://docs.github.com/copilot/concepts/copilot-metrics#how-are-metrics-attributed-across-organizations).</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="copilot_organization_one_day_usage_metrics"
    values={[
        { label: 'copilot_organization_one_day_usage_metrics', value: 'copilot_organization_one_day_usage_metrics' }
    ]}
>
<TabItem value="copilot_organization_one_day_usage_metrics">

Use this endpoint to retrieve download links for the Copilot organization usage metrics report for a specific day. The report provides comprehensive usage data for Copilot features across the organization.<br /><br />The report contains aggregated metrics for the specified day, including usage statistics for various Copilot features, user engagement data, and feature adoption metrics. Reports are generated daily and made available for download through signed URLs with a limited expiration time.<br /><br />The response includes download links to the report files, along with the specific date of the report. The report covers a complete day for which data has been processed.<br /><br />Organization owners and authorized users with fine-grained "View Organization Copilot Metrics" permission can retrieve Copilot metrics reports for the organization. OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.<br /><br />For more information about organization metrics attribution, see [How are metrics attributed across organizations](https://docs.github.com/copilot/concepts/copilot-metrics#how-are-metrics-attributed-across-organizations).

```sql
SELECT
download_links,
report_day
FROM github.copilot.org_copilot_one_day_usage_metrics
WHERE org = '{{ org }}' -- required
AND day = '{{ day }}' -- required
;
```
</TabItem>
</Tabs>
