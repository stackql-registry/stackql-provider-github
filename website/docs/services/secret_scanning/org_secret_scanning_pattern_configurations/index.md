--- 
title: org_secret_scanning_pattern_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - org_secret_scanning_pattern_configurations
  - secret_scanning
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

Creates, updates, deletes, gets or lists an <code>org_secret_scanning_pattern_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_secret_scanning_pattern_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.secret_scanning.org_secret_scanning_pattern_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_org_pattern_configs"
    values={[
        { label: 'list_org_pattern_configs', value: 'list_org_pattern_configs' }
    ]}
>
<TabItem value="list_org_pattern_configs">

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
    <td><CopyableCode code="custom_pattern_overrides" /></td>
    <td><code>array</code></td>
    <td>Overrides for custom patterns defined by the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="pattern_config_version" /></td>
    <td><code>string</code></td>
    <td>The version of the entity. This is used to confirm you're updating the current version of the entity and mitigate unintentionally overriding someone else's update.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_pattern_overrides" /></td>
    <td><code>array</code></td>
    <td>Overrides for partner patterns.</td>
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
    <td><a href="#list_org_pattern_configs"><CopyableCode code="list_org_pattern_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Lists the secret scanning pattern configurations for an organization.<br /><br />Personal access tokens (classic) need the `read:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_org_pattern_configs"><CopyableCode code="update_org_pattern_configs" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Updates the secret scanning pattern configurations for an organization.<br /><br />Personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
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
    defaultValue="list_org_pattern_configs"
    values={[
        { label: 'list_org_pattern_configs', value: 'list_org_pattern_configs' }
    ]}
>
<TabItem value="list_org_pattern_configs">

Lists the secret scanning pattern configurations for an organization.<br /><br />Personal access tokens (classic) need the `read:org` scope to use this endpoint.

```sql
SELECT
custom_pattern_overrides,
pattern_config_version,
provider_pattern_overrides
FROM github.secret_scanning.org_secret_scanning_pattern_configurations
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_org_pattern_configs"
    values={[
        { label: 'update_org_pattern_configs', value: 'update_org_pattern_configs' }
    ]}
>
<TabItem value="update_org_pattern_configs">

Updates the secret scanning pattern configurations for an organization.<br /><br />Personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
UPDATE github.secret_scanning.org_secret_scanning_pattern_configurations
SET 
pattern_config_version = '{{ pattern_config_version }}',
provider_pattern_settings = '{{ provider_pattern_settings }}',
custom_pattern_settings = '{{ custom_pattern_settings }}'
WHERE 
org = '{{ org }}' --required
RETURNING
pattern_config_version;
```
</TabItem>
</Tabs>
