--- 
title: usage
hide_title: false
hide_table_of_contents: false
keywords:
  - usage
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

Creates, updates, deletes, gets or lists a <code>usage</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.billing.usage" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_github_billing_usage_report_user"
    values={[
        { label: 'get_github_billing_usage_report_user', value: 'get_github_billing_usage_report_user' }
    ]}
>
<TabItem value="get_github_billing_usage_report_user">

Response when getting a billing usage report

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
    <td><CopyableCode code="date" /></td>
    <td><code>string</code></td>
    <td>Date of the usage line item.</td>
</tr>
<tr>
    <td><CopyableCode code="discountAmount" /></td>
    <td><code>number</code></td>
    <td>Discount amount of the usage line item.</td>
</tr>
<tr>
    <td><CopyableCode code="grossAmount" /></td>
    <td><code>number</code></td>
    <td>Gross amount of the usage line item.</td>
</tr>
<tr>
    <td><CopyableCode code="netAmount" /></td>
    <td><code>number</code></td>
    <td>Net amount of the usage line item.</td>
</tr>
<tr>
    <td><CopyableCode code="pricePerUnit" /></td>
    <td><code>number</code></td>
    <td>Price per unit of the usage line item.</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>string</code></td>
    <td>Product name.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Quantity of the usage line item.</td>
</tr>
<tr>
    <td><CopyableCode code="repositoryName" /></td>
    <td><code>string</code></td>
    <td>Name of the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="sku" /></td>
    <td><code>string</code></td>
    <td>SKU name.</td>
</tr>
<tr>
    <td><CopyableCode code="unitType" /></td>
    <td><code>string</code></td>
    <td>Unit type of the usage line item.</td>
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
    <td><a href="#get_github_billing_usage_report_user"><CopyableCode code="get_github_billing_usage_report_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-year"><code>year</code></a>, <a href="#parameter-month"><code>month</code></a>, <a href="#parameter-day"><code>day</code></a></td>
    <td>Gets a report of the total usage for a user.<br /><br />**Note:** This endpoint is only available to users with access to the enhanced billing platform.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-day">
    <td><CopyableCode code="day" /></td>
    <td><code>integer</code></td>
    <td>If specified, only return results for a single day. The value of `day` is an integer between `1` and `31`. If no `year` or `month` is specified, the default `year` and `month` are used.</td>
</tr>
<tr id="parameter-month">
    <td><CopyableCode code="month" /></td>
    <td><code>integer</code></td>
    <td>If specified, only return results for a single month. The value of `month` is an integer between `1` and `12`. If no year is specified the default `year` is used.</td>
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
    defaultValue="get_github_billing_usage_report_user"
    values={[
        { label: 'get_github_billing_usage_report_user', value: 'get_github_billing_usage_report_user' }
    ]}
>
<TabItem value="get_github_billing_usage_report_user">

Gets a report of the total usage for a user.<br /><br />**Note:** This endpoint is only available to users with access to the enhanced billing platform.

```sql
SELECT
date,
discountAmount,
grossAmount,
netAmount,
pricePerUnit,
product,
quantity,
repositoryName,
sku,
unitType
FROM github.billing.usage
WHERE username = '{{ username }}' -- required
AND year = '{{ year }}'
AND month = '{{ month }}'
AND day = '{{ day }}'
;
```
</TabItem>
</Tabs>
