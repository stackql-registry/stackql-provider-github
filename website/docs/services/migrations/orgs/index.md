--- 
title: orgs
hide_title: false
hide_table_of_contents: false
keywords:
  - orgs
  - migrations
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

Creates, updates, deletes, gets or lists an <code>orgs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orgs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.migrations.orgs" /></td></tr>
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
    <td><a href="#delete_archive_for_org"><CopyableCode code="delete_archive_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-migration_id"><code>migration_id</code></a></td>
    <td></td>
    <td>Deletes a previous migration archive. Migration archives are automatically deleted after seven days.</td>
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
<tr id="parameter-migration_id">
    <td><CopyableCode code="migration_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the migration.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_archive_for_org"
    values={[
        { label: 'delete_archive_for_org', value: 'delete_archive_for_org' }
    ]}
>
<TabItem value="delete_archive_for_org">

Deletes a previous migration archive. Migration archives are automatically deleted after seven days.

```sql
DELETE FROM github.migrations.orgs
WHERE org = '{{ org }}' --required
AND migration_id = '{{ migration_id }}' --required
;
```
</TabItem>
</Tabs>
