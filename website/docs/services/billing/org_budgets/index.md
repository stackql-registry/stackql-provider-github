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
    <td>The type of scope for the budget (enterprise, organization, repository, cost_center, multi_user_customer, multi_user_cost_center, user) (example: enterprise)</td>
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
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>The user login when the budget is scoped to a single user (`user` scope). (example: octocat)</td>
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
    <td><CopyableCode code="effective_budget" /></td>
    <td><code>object</code></td>
    <td>Effective user-level budget details returned when the response is scoped with the `user` query parameter.</td>
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
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>User login included when the response is scoped with the `user` query parameter.</td>
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
    <td>Gets a budget by ID. The authenticated user must be an organization admin or billing manager.</td>
</tr>
<tr>
    <td><a href="#get_all_budgets_org"><CopyableCode code="get_all_budgets_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-user"><code>user</code></a></td>
    <td>Gets all budgets for an organization. The authenticated user must be an organization admin or billing manager.<br />Each page returns up to 100 budgets.</td>
</tr>
<tr>
    <td><a href="#create_organization_budget"><CopyableCode code="create_organization_budget" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Creates a new budget for an organization. The authenticated user must be an<br />organization admin or billing manager.</td>
</tr>
<tr>
    <td><a href="#update_budget_org"><CopyableCode code="update_budget_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-budget_id"><code>budget_id</code></a></td>
    <td></td>
    <td>Updates an existing budget for an organization. The authenticated user must be an organization admin or billing manager.</td>
</tr>
<tr>
    <td><a href="#delete_budget_org"><CopyableCode code="delete_budget_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-budget_id"><code>budget_id</code></a></td>
    <td></td>
    <td>Deletes a budget by ID for an organization. The authenticated user must be an organization admin or billing manager.</td>
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
    <td>The number of results per page (max 100).</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>Filter budgets by scope type.  - `organization`: Budgets scoped to the organization. - `repository`: Budgets scoped to a repository. - `multi_user_customer`: Universal budgets that apply to all users in the organization. - `user`: Budgets scoped to an individual user.</td>
</tr>
<tr id="parameter-user">
    <td><CopyableCode code="user" /></td>
    <td><code>string</code></td>
    <td>Filter consumed amount details for budgets by the specified user login.</td>
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

Gets a budget by ID. The authenticated user must be an organization admin or billing manager.

```sql
SELECT
id,
budget_entity_name,
budget_alerting,
budget_amount,
budget_product_sku,
budget_scope,
budget_type,
prevent_further_usage,
user
FROM github.billing.org_budgets
WHERE org = '{{ org }}' -- required
AND budget_id = '{{ budget_id }}' -- required
;
```
</TabItem>
<TabItem value="get_all_budgets_org">

Gets all budgets for an organization. The authenticated user must be an organization admin or billing manager.<br />Each page returns up to 100 budgets.

```sql
SELECT
budgets,
effective_budget,
has_next_page,
total_count,
user
FROM github.billing.org_budgets
WHERE org = '{{ org }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND scope = '{{ scope }}'
AND user = '{{ user }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_organization_budget"
    values={[
        { label: 'create_organization_budget', value: 'create_organization_budget' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_organization_budget">

Creates a new budget for an organization. The authenticated user must be an<br />organization admin or billing manager.

```sql
INSERT INTO github.billing.org_budgets (
budget_amount,
prevent_further_usage,
budget_alerting,
budget_scope,
budget_entity_name,
budget_type,
budget_product_sku,
user,
org
)
SELECT 
{{ budget_amount }},
{{ prevent_further_usage }},
'{{ budget_alerting }}',
'{{ budget_scope }}',
'{{ budget_entity_name }}',
'{{ budget_type }}',
'{{ budget_product_sku }}',
'{{ user }}',
'{{ org }}'
RETURNING
budget,
message
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: org_budgets
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the org_budgets resource.
    - name: budget_amount
      value: {{ budget_amount }}
      description: |
        The budget amount in whole dollars. For license-based products, this represents the number of licenses.
    - name: prevent_further_usage
      value: {{ prevent_further_usage }}
      description: |
        Whether to prevent additional spending once the budget is exceeded. For \`user\` and \`multi_user_customer\` scopes, this must be \`true\`.
    - name: budget_alerting
      value:
        will_alert: {{ will_alert }}
        alert_recipients:
          - "{{ alert_recipients }}"
    - name: budget_scope
      value: "{{ budget_scope }}"
      description: |
        The scope of the budget for this organization.
        - \`organization\`: Apply the budget to the organization.
        - \`repository\`: Apply the budget to a specific repository in the organization.
        - \`multi_user_customer\`: Apply a universal budget to all users in the organization.
        - \`user\`: Apply the budget to a single user in the organization.
        \`user\` and \`multi_user_customer\` scopes are only supported when
        \`budget_product_sku\` is \`ai_credits\` or \`premium_requests\`.
      valid_values: ['organization', 'repository', 'multi_user_customer', 'user']
    - name: budget_entity_name
      value: "{{ budget_entity_name }}"
      description: |
        The name of the entity to apply the budget to
      default: 
    - name: budget_type
      value: "{{ budget_type }}"
      description: |
        The type of pricing model used by the budget. Determines how \`budget_product_sku\` is interpreted.
        - \`BundlePricing\`: Covers all AI credit SKUs. Set \`budget_product_sku\` to \`ai_credits\`.
        - \`ProductPricing\`: Covers all SKUs that belong to a product. Set \`budget_product_sku\` to a product such as \`actions\` or \`packages\`.
        - \`SkuPricing\`: Covers a single, specific SKU. Set \`budget_product_sku\` to a SKU such as \`actions_linux\`.
      valid_values: ['BundlePricing']
    - name: budget_product_sku
      value: "{{ budget_product_sku }}"
      description: |
        A single product or SKU that will be covered in the budget
    - name: user
      value: "{{ user }}"
      description: |
        The username of the user for \`user\` scope budgets. This field is required when \`budget_scope\` is \`user\`.
`}</CodeBlock>

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

Updates an existing budget for an organization. The authenticated user must be an organization admin or billing manager.

```sql
UPDATE github.billing.org_budgets
SET 
budget_amount = {{ budget_amount }},
prevent_further_usage = {{ prevent_further_usage }},
budget_alerting = '{{ budget_alerting }}',
budget_scope = '{{ budget_scope }}',
budget_entity_name = '{{ budget_entity_name }}',
budget_type = '{{ budget_type }}',
budget_product_sku = '{{ budget_product_sku }}',
user = '{{ user }}'
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

Deletes a budget by ID for an organization. The authenticated user must be an organization admin or billing manager.

```sql
DELETE FROM github.billing.org_budgets
WHERE org = '{{ org }}' --required
AND budget_id = '{{ budget_id }}' --required
;
```
</TabItem>
</Tabs>
