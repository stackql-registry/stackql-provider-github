--- 
title: marketplace_users_subs_stubbed
hide_title: false
hide_table_of_contents: false
keywords:
  - marketplace_users_subs_stubbed
  - apps
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

Creates, updates, deletes, gets or lists a <code>marketplace_users_subs_stubbed</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="marketplace_users_subs_stubbed" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.marketplace_users_subs_stubbed" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_subscriptions_for_authenticated_user_stubbed"
    values={[
        { label: 'list_subscriptions_for_authenticated_user_stubbed', value: 'list_subscriptions_for_authenticated_user_stubbed' }
    ]}
>
<TabItem value="list_subscriptions_for_authenticated_user_stubbed">

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
    <td><CopyableCode code="account" /></td>
    <td><code>object</code></td>
    <td> (title: Marketplace Account)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_cycle" /></td>
    <td><code>string</code></td>
    <td> (example: monthly)</td>
</tr>
<tr>
    <td><CopyableCode code="free_trial_ends_on" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-11-11T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="next_billing_date" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-11-11T00:00:00Z)</td>
</tr>
<tr>
    <td><CopyableCode code="on_free_trial" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>object</code></td>
    <td>Marketplace Listing Plan (title: Marketplace Listing Plan)</td>
</tr>
<tr>
    <td><CopyableCode code="unit_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-11-02T01:12:12Z)</td>
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
    <td><a href="#list_subscriptions_for_authenticated_user_stubbed"><CopyableCode code="list_subscriptions_for_authenticated_user_stubbed" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the active subscriptions for the authenticated user.</td>
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
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_subscriptions_for_authenticated_user_stubbed"
    values={[
        { label: 'list_subscriptions_for_authenticated_user_stubbed', value: 'list_subscriptions_for_authenticated_user_stubbed' }
    ]}
>
<TabItem value="list_subscriptions_for_authenticated_user_stubbed">

Lists the active subscriptions for the authenticated user.

```sql
SELECT
account,
billing_cycle,
free_trial_ends_on,
next_billing_date,
on_free_trial,
plan,
unit_count,
updated_at
FROM github.apps.marketplace_users_subs_stubbed
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
