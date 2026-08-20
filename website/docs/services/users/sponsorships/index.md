--- 
title: sponsorships
hide_title: false
hide_table_of_contents: false
keywords:
  - sponsorships
  - users
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

Creates, updates, deletes, gets or lists a <code>sponsorships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sponsorships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.sponsorships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The GraphQL node ID of the sponsorship.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_one_time_payment" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="privacy_level" /></td>
    <td><code>string</code></td>
    <td>PUBLIC or PRIVATE.</td>
</tr>
<tr>
    <td><CopyableCode code="sponsor_entity" /></td>
    <td><code>object</code></td>
    <td>The sponsoring user or organization (`login`, `name`).</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>object</code></td>
    <td>The sponsorship tier (`name`, `monthly_price_in_dollars`, `monthly_price_in_cents`, `is_one_time`).</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>GitHub Sponsors sponsorships where the user is the maintainer being sponsored. Backed by the GitHub GraphQL API (`user.sponsorshipsAsMaintainer`). Private sponsorships are only visible to the sponsored account.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

GitHub Sponsors sponsorships where the user is the maintainer being sponsored. Backed by the GitHub GraphQL API (`user.sponsorshipsAsMaintainer`). Private sponsorships are only visible to the sponsored account.

```sql
SELECT
id,
created_at,
is_active,
is_one_time_payment,
privacy_level,
sponsor_entity,
tier
FROM github.users.sponsorships
WHERE username = '{{ username }}' -- required
;
```
</TabItem>
</Tabs>
