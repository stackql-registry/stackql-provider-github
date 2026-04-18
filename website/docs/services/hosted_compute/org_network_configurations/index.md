--- 
title: org_network_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - org_network_configurations
  - hosted_compute
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

Creates, updates, deletes, gets or lists an <code>org_network_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_network_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.hosted_compute.org_network_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_configuration_for_org"
    values={[
        { label: 'get_network_configuration_for_org', value: 'get_network_configuration_for_org' },
        { label: 'list_network_configurations_for_org', value: 'list_network_configurations_for_org' }
    ]}
>
<TabItem value="get_network_configuration_for_org">

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
    <td>The unique identifier of the network configuration. (example: 123ABC456DEF789)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the network configuration. (example: my-network-configuration)</td>
</tr>
<tr>
    <td><CopyableCode code="compute_service" /></td>
    <td><code>string</code></td>
    <td>The hosted compute service the network configuration supports. (none, actions, codespaces)</td>
</tr>
<tr>
    <td><CopyableCode code="created_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the network configuration was created, in ISO 8601 format. (example: 2024-04-26T11:31:07Z)</td>
</tr>
<tr>
    <td><CopyableCode code="failover_network_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the failover network resource is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="failover_network_settings_ids" /></td>
    <td><code>array</code></td>
    <td>The unique identifier of each failover network settings in the configuration. (example: 123ABC456DEF789)</td>
</tr>
<tr>
    <td><CopyableCode code="network_settings_ids" /></td>
    <td><code>array</code></td>
    <td>The unique identifier of each network settings in the configuration. (example: 123ABC456DEF789)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_network_configurations_for_org">

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
    <td><CopyableCode code="network_configurations" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
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
    <td><a href="#get_network_configuration_for_org"><CopyableCode code="get_network_configuration_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-network_configuration_id"><code>network_configuration_id</code></a></td>
    <td></td>
    <td>Gets a hosted compute network configuration configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:network_configurations` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_network_configurations_for_org"><CopyableCode code="list_network_configurations_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all hosted compute network configurations configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:network_configurations` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_network_configuration_for_org"><CopyableCode code="create_network_configuration_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-network_settings_ids"><code>network_settings_ids</code></a></td>
    <td></td>
    <td>Creates a hosted compute network configuration for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:network_configurations` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_network_configuration_for_org"><CopyableCode code="update_network_configuration_for_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-network_configuration_id"><code>network_configuration_id</code></a></td>
    <td></td>
    <td>Updates a hosted compute network configuration for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:network_configurations` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_network_configuration_from_org"><CopyableCode code="delete_network_configuration_from_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-network_configuration_id"><code>network_configuration_id</code></a></td>
    <td></td>
    <td>Deletes a hosted compute network configuration from an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:network_configurations` scope to use this endpoint.</td>
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
<tr id="parameter-network_configuration_id">
    <td><CopyableCode code="network_configuration_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the hosted compute network configuration.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
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
    defaultValue="get_network_configuration_for_org"
    values={[
        { label: 'get_network_configuration_for_org', value: 'get_network_configuration_for_org' },
        { label: 'list_network_configurations_for_org', value: 'list_network_configurations_for_org' }
    ]}
>
<TabItem value="get_network_configuration_for_org">

Gets a hosted compute network configuration configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:network_configurations` scope to use this endpoint.

```sql
SELECT
id,
name,
compute_service,
created_on,
failover_network_enabled,
failover_network_settings_ids,
network_settings_ids
FROM github.hosted_compute.org_network_configurations
WHERE org = '{{ org }}' -- required
AND network_configuration_id = '{{ network_configuration_id }}' -- required
;
```
</TabItem>
<TabItem value="list_network_configurations_for_org">

Lists all hosted compute network configurations configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:network_configurations` scope to use this endpoint.

```sql
SELECT
network_configurations,
total_count
FROM github.hosted_compute.org_network_configurations
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_network_configuration_for_org"
    values={[
        { label: 'create_network_configuration_for_org', value: 'create_network_configuration_for_org' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_network_configuration_for_org">

Creates a hosted compute network configuration for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:network_configurations` scope to use this endpoint.

```sql
INSERT INTO github.hosted_compute.org_network_configurations (
name,
compute_service,
network_settings_ids,
failover_network_settings_ids,
failover_network_enabled,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ compute_service }}',
'{{ network_settings_ids }}' /* required */,
'{{ failover_network_settings_ids }}',
{{ failover_network_enabled }},
'{{ org }}'
RETURNING
id,
name,
compute_service,
created_on,
failover_network_enabled,
failover_network_settings_ids,
network_settings_ids
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: org_network_configurations
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the org_network_configurations resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the network configuration. Must be between 1 and 100 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.
    - name: compute_service
      value: "{{ compute_service }}"
      description: |
        The hosted compute service to use for the network configuration.
      valid_values: ['none', 'actions']
    - name: network_settings_ids
      value:
        - "{{ network_settings_ids }}"
      description: |
        A list of identifiers of the network settings resources to use for the network configuration. Exactly one resource identifier must be specified in the list.
    - name: failover_network_settings_ids
      value:
        - "{{ failover_network_settings_ids }}"
      description: |
        A list of identifiers of the failover network settings resources to use for the network configuration. Exactly one resource identifier must be specified in the list.
    - name: failover_network_enabled
      value: {{ failover_network_enabled }}
      description: |
        Indicates whether the failover network resource is enabled.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_network_configuration_for_org"
    values={[
        { label: 'update_network_configuration_for_org', value: 'update_network_configuration_for_org' }
    ]}
>
<TabItem value="update_network_configuration_for_org">

Updates a hosted compute network configuration for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:network_configurations` scope to use this endpoint.

```sql
UPDATE github.hosted_compute.org_network_configurations
SET 
name = '{{ name }}',
compute_service = '{{ compute_service }}',
network_settings_ids = '{{ network_settings_ids }}',
failover_network_settings_ids = '{{ failover_network_settings_ids }}',
failover_network_enabled = {{ failover_network_enabled }}
WHERE 
org = '{{ org }}' --required
AND network_configuration_id = '{{ network_configuration_id }}' --required
RETURNING
id,
name,
compute_service,
created_on,
failover_network_enabled,
failover_network_settings_ids,
network_settings_ids;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network_configuration_from_org"
    values={[
        { label: 'delete_network_configuration_from_org', value: 'delete_network_configuration_from_org' }
    ]}
>
<TabItem value="delete_network_configuration_from_org">

Deletes a hosted compute network configuration from an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:network_configurations` scope to use this endpoint.

```sql
DELETE FROM github.hosted_compute.org_network_configurations
WHERE org = '{{ org }}' --required
AND network_configuration_id = '{{ network_configuration_id }}' --required
;
```
</TabItem>
</Tabs>
