--- 
title: org_usage_summary
hide_title: false
hide_table_of_contents: false
keywords:
  - org_usage_summary
  - billing
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

Creates, updates, deletes, gets or lists an <code>org_usage_summary</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_usage_summary" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.billing.org_usage_summary" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_github_billing_usage_summary_report_org"
    values={[
        { label: 'get_github_billing_usage_summary_report_org', value: 'get_github_billing_usage_summary_report_org' }
    ]}
>
<TabItem value="get_github_billing_usage_summary_report_org">

Response when getting a billing usage summary

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
    <td><CopyableCode code="organization" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>The product for the usage report.</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository for the usage report.</td>
</tr>
<tr>
    <td><CopyableCode code="sku" /></td>
    <td><code>string</code></td>
    <td>The SKU for the usage report.</td>
</tr>
<tr>
    <td><CopyableCode code="timePeriod" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="usageItems" /></td>
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
    <td><a href="#get_github_billing_usage_summary_report_org"><CopyableCode code="get_github_billing_usage_summary_report_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-year"><code>year</code></a>, <a href="#parameter-month"><code>month</code></a>, <a href="#parameter-day"><code>day</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-product"><code>product</code></a>, <a href="#parameter-sku"><code>sku</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets a summary report of usage for an organization. To use this endpoint, you must be an administrator of an organization within an enterprise or an organization account.<br /><br />**Note:** Only data from the past 24 months is accessible via this endpoint.</td>
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
<tr id="parameter-day">
    <td><CopyableCode code="day" /></td>
    <td><code>integer</code></td>
    <td>If specified, only return results for a single day. The value of `day` is an integer between `1` and `31`. If no `year` or `month` is specified, the default `year` and `month` are used.</td>
</tr>
<tr id="parameter-month">
    <td><CopyableCode code="month" /></td>
    <td><code>integer</code></td>
    <td>If specified, only return results for a single month. The value of `month` is an integer between `1` and `12`. Default value is the current month. If no year is specified the default `year` is used.</td>
</tr>
<tr id="parameter-product">
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>The product name to query usage for. The name is not case sensitive.</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The repository name to query for usage in the format owner/repository.</td>
</tr>
<tr id="parameter-sku">
    <td><CopyableCode code="sku" /></td>
    <td><code>string</code></td>
    <td>The SKU to query for usage.</td>
</tr>
<tr id="parameter-year">
    <td><CopyableCode code="year" /></td>
    <td><code>integer</code></td>
    <td>If specified, only return results for a single year. The value of `year` is an integer with four digits representing a year. For example, `2025`. Default value is the current year.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_github_billing_usage_summary_report_org"
    values={[
        { label: 'get_github_billing_usage_summary_report_org', value: 'get_github_billing_usage_summary_report_org' }
    ]}
>
<TabItem value="get_github_billing_usage_summary_report_org">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets a summary report of usage for an organization. To use this endpoint, you must be an administrator of an organization within an enterprise or an organization account.<br /><br />**Note:** Only data from the past 24 months is accessible via this endpoint.

```sql
SELECT
organization,
product,
repository,
sku,
timePeriod,
usageItems
FROM github.billing.org_usage_summary
WHERE org = '{{ org }}' -- required
AND year = '{{ year }}'
AND month = '{{ month }}'
AND day = '{{ day }}'
AND repository = '{{ repository }}'
AND product = '{{ product }}'
AND sku = '{{ sku }}'
;
```
</TabItem>
</Tabs>
