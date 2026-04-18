--- 
title: org_budgets
hide_title: false
hide_table_of_contents: false
keywords:
  - org_budgets
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

Creates, updates, deletes, gets or lists an <code>org_budgets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_budgets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.billing.org_budgets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_budget_org"
    values={[
        { label: 'get_budget_org', value: 'get_budget_org' },
        { label: 'get_all_budgets_org', value: 'get_all_budgets_org' }
    ]}
>
<TabItem value="get_budget_org">

Response when updating a budget

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID of the budget.</td>
</tr>
<tr>
    <td><CopyableCode code="budget_entity_name" /></td>
    <td><code>string</code></td>
    <td>The name of the entity to apply the budget to (example: octocat/hello-world)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_alerting" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="budget_amount" /></td>
    <td><code>integer</code></td>
    <td>The budget amount in whole dollars. For license-based products, this represents the number of licenses.</td>
</tr>
<tr>
    <td><CopyableCode code="budget_product_sku" /></td>
    <td><code>string</code></td>
    <td>A single product or sku to apply the budget to. (example: actions_linux)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_scope" /></td>
    <td><code>string</code></td>
    <td>The type of scope for the budget (enterprise, organization, repository, cost_center) (example: enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="budget_type" /></td>
    <td><code>string</code></td>
    <td>The type of pricing for the budget (ProductPricing) (example: ProductPricing)</td>
</tr>
<tr>
    <td><CopyableCode code="prevent_further_usage" /></td>
    <td><code>boolean</code></td>
    <td>Whether to prevent additional spending once the budget is exceeded</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_budgets_org">

Response when getting all budgets

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
    <td><CopyableCode code="budgets" /></td>
    <td><code>array</code></td>
    <td>Array of budget objects for the enterprise</td>
</tr>
<tr>
    <td><CopyableCode code="has_next_page" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if there are more pages of results available (maps to hasNextPage from billing platform)</td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>Total number of budgets matching the query</td>
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
    <td><a href="#get_budget_org"><CopyableCode code="get_budget_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-budget_id"><code>budget_id</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets a budget by ID. The authenticated user must be an organization admin or billing manager.</td>
</tr>
<tr>
    <td><a href="#get_all_budgets_org"><CopyableCode code="get_all_budgets_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets all budgets for an organization. The authenticated user must be an organization admin or billing manager.<br />Each page returns up to 10 budgets.</td>
</tr>
<tr>
    <td><a href="#update_budget_org"><CopyableCode code="update_budget_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-budget_id"><code>budget_id</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Updates an existing budget for an organization. The authenticated user must be an organization admin or billing manager.</td>
</tr>
<tr>
    <td><a href="#delete_budget_org"><CopyableCode code="delete_budget_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-budget_id"><code>budget_id</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Deletes a budget by ID for an organization. The authenticated user must be an organization admin or billing manager.</td>
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
<tr id="parameter-budget_id">
    <td><CopyableCode code="budget_id" /></td>
    <td><code>string</code></td>
    <td>The ID corresponding to the budget.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 10).</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Filter budgets by scope type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_budget_org"
    values={[
        { label: 'get_budget_org', value: 'get_budget_org' },
        { label: 'get_all_budgets_org', value: 'get_all_budgets_org' }
    ]}
>
<TabItem value="get_budget_org">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets a budget by ID. The authenticated user must be an organization admin or billing manager.

```sql
SELECT
id,
budget_entity_name,
budget_alerting,
budget_amount,
budget_product_sku,
budget_scope,
budget_type,
prevent_further_usage
FROM github.billing.org_budgets
WHERE org = '{{ org }}' -- required
AND budget_id = '{{ budget_id }}' -- required
;
```
</TabItem>
<TabItem value="get_all_budgets_org">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Gets all budgets for an organization. The authenticated user must be an organization admin or billing manager.<br />Each page returns up to 10 budgets.

```sql
SELECT
budgets,
has_next_page,
total_count
FROM github.billing.org_budgets
WHERE org = '{{ org }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND scope = '{{ scope }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_budget_org"
    values={[
        { label: 'update_budget_org', value: 'update_budget_org' }
    ]}
>
<TabItem value="update_budget_org">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Updates an existing budget for an organization. The authenticated user must be an organization admin or billing manager.

```sql
UPDATE github.billing.org_budgets
SET 
budget_amount = {{ budget_amount }},
prevent_further_usage = {{ prevent_further_usage }},
budget_alerting = '{{ budget_alerting }}',
budget_scope = '{{ budget_scope }}',
budget_entity_name = '{{ budget_entity_name }}',
budget_type = '{{ budget_type }}',
budget_product_sku = '{{ budget_product_sku }}'
WHERE 
org = '{{ org }}' --required
AND budget_id = '{{ budget_id }}' --required
RETURNING
budget,
message;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_budget_org"
    values={[
        { label: 'delete_budget_org', value: 'delete_budget_org' }
    ]}
>
<TabItem value="delete_budget_org">

&gt; [!NOTE]<br />&gt; This endpoint is in public preview and is subject to change.<br /><br />Deletes a budget by ID for an organization. The authenticated user must be an organization admin or billing manager.

```sql
DELETE FROM github.billing.org_budgets
WHERE org = '{{ org }}' --required
AND budget_id = '{{ budget_id }}' --required
;
```
</TabItem>
</Tabs>
