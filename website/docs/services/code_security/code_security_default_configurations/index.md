--- 
title: code_security_default_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - code_security_default_configurations
  - code_security
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

Creates, updates, deletes, gets or lists a <code>code_security_default_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_security_default_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_security.code_security_default_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_default_configurations_for_enterprise"
    values={[
        { label: 'get_default_configurations_for_enterprise', value: 'get_default_configurations_for_enterprise' },
        { label: 'get_default_configurations', value: 'get_default_configurations' }
    ]}
>
<TabItem value="get_default_configurations_for_enterprise">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>A code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="default_for_new_repos" /></td>
    <td><code></code></td>
    <td>The visibility of newly created repositories for which the code security configuration will be applied to by default (public, private_and_internal, all)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_default_configurations">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>A code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="default_for_new_repos" /></td>
    <td><code></code></td>
    <td>The visibility of newly created repositories for which the code security configuration will be applied to by default (public, private_and_internal, all)</td>
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
    <td><a href="#get_default_configurations_for_enterprise"><CopyableCode code="get_default_configurations_for_enterprise" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td></td>
    <td>Lists the default code security configurations for an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_default_configurations"><CopyableCode code="get_default_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Lists the default code security configurations for an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.</td>
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
<tr id="parameter-enterprise">
    <td><CopyableCode code="enterprise" /></td>
    <td><code>string</code></td>
    <td>The slug version of the enterprise name.</td>
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
    defaultValue="get_default_configurations_for_enterprise"
    values={[
        { label: 'get_default_configurations_for_enterprise', value: 'get_default_configurations_for_enterprise' },
        { label: 'get_default_configurations', value: 'get_default_configurations' }
    ]}
>
<TabItem value="get_default_configurations_for_enterprise">

Lists the default code security configurations for an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.

```sql
SELECT
configuration,
default_for_new_repos
FROM github.code_security.code_security_default_configurations
WHERE enterprise = '{{ enterprise }}' -- required
;
```
</TabItem>
<TabItem value="get_default_configurations">

Lists the default code security configurations for an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

```sql
SELECT
configuration,
default_for_new_repos
FROM github.code_security.code_security_default_configurations
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>
