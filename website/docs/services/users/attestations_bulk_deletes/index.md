--- 
title: attestations_bulk_deletes
hide_title: false
hide_table_of_contents: false
keywords:
  - attestations_bulk_deletes
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

Creates, updates, deletes, gets or lists an <code>attestations_bulk_deletes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attestations_bulk_deletes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.attestations_bulk_deletes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#delete_attestations_bulk"><CopyableCode code="delete_attestations_bulk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-username"><code>username</code></a>, <a href="#parameter-subject_digests"><code>subject_digests</code></a>, <a href="#parameter-attestation_ids"><code>attestation_ids</code></a></td>
    <td></td>
    <td>Delete artifact attestations in bulk by either subject digests or unique ID.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="delete_attestations_bulk"
    values={[
        { label: 'delete_attestations_bulk', value: 'delete_attestations_bulk' }
    ]}
>
<TabItem value="delete_attestations_bulk">

Delete artifact attestations in bulk by either subject digests or unique ID.

```sql
EXEC github.users.attestations_bulk_deletes.delete_attestations_bulk 
@username='{{ username }}' --required 
@@json=
'{
"subject_digests": "{{ subject_digests }}", 
"attestation_ids": "{{ attestation_ids }}"
}'
;
```
</TabItem>
</Tabs>
