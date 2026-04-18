--- 
title: org_runner_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - org_runner_groups
  - actions
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

Creates, updates, deletes, gets or lists an <code>org_runner_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_runner_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_runner_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_self_hosted_runner_group_for_org"
    values={[
        { label: 'get_self_hosted_runner_group_for_org', value: 'get_self_hosted_runner_group_for_org' },
        { label: 'list_self_hosted_runner_groups_for_org', value: 'list_self_hosted_runner_groups_for_org' }
    ]}
>
<TabItem value="get_self_hosted_runner_group_for_org">

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
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of a hosted compute network configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="allows_public_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hosted_runners_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="inherited" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="inherited_allows_public_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="restricted_to_workflows" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.</td>
</tr>
<tr>
    <td><CopyableCode code="runners_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="selected_repositories_url" /></td>
    <td><code>string</code></td>
    <td>Link to the selected repositories resource for this runner group. Not present unless visibility was set to `selected`</td>
</tr>
<tr>
    <td><CopyableCode code="selected_workflows" /></td>
    <td><code>array</code></td>
    <td>List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="workflow_restrictions_read_only" /></td>
    <td><code>boolean</code></td>
    <td>If `true`, the `restricted_to_workflows` and `selected_workflows` fields cannot be modified.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_self_hosted_runner_groups_for_org">

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
    <td><CopyableCode code="runner_groups" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>number</code></td>
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
    <td><a href="#get_self_hosted_runner_group_for_org"><CopyableCode code="get_self_hosted_runner_group_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a></td>
    <td></td>
    <td>Gets a specific self-hosted runner group for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_self_hosted_runner_groups_for_org"><CopyableCode code="list_self_hosted_runner_groups_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-visible_to_repository"><code>visible_to_repository</code></a></td>
    <td>Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_self_hosted_runner_group_for_org"><CopyableCode code="create_self_hosted_runner_group_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new self-hosted runner group for an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_self_hosted_runner_group_for_org"><CopyableCode code="update_self_hosted_runner_group_for_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the `name` and `visibility` of a self-hosted runner group in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_self_hosted_runner_group_from_org"><CopyableCode code="delete_self_hosted_runner_group_from_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a></td>
    <td></td>
    <td>Deletes a self-hosted runner group for an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
<tr id="parameter-runner_group_id">
    <td><CopyableCode code="runner_group_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the self-hosted runner group.</td>
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
<tr id="parameter-visible_to_repository">
    <td><CopyableCode code="visible_to_repository" /></td>
    <td><code>string</code></td>
    <td>Only return runner groups that are allowed to be used by this repository.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_self_hosted_runner_group_for_org"
    values={[
        { label: 'get_self_hosted_runner_group_for_org', value: 'get_self_hosted_runner_group_for_org' },
        { label: 'list_self_hosted_runner_groups_for_org', value: 'list_self_hosted_runner_groups_for_org' }
    ]}
>
<TabItem value="get_self_hosted_runner_group_for_org">

Gets a specific self-hosted runner group for an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
id,
name,
network_configuration_id,
allows_public_repositories,
default,
hosted_runners_url,
inherited,
inherited_allows_public_repositories,
restricted_to_workflows,
runners_url,
selected_repositories_url,
selected_workflows,
visibility,
workflow_restrictions_read_only
FROM github.actions.org_runner_groups
WHERE org = '{{ org }}' -- required
AND runner_group_id = '{{ runner_group_id }}' -- required
;
```
</TabItem>
<TabItem value="list_self_hosted_runner_groups_for_org">

Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
SELECT
runner_groups,
total_count
FROM github.actions.org_runner_groups
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND visible_to_repository = '{{ visible_to_repository }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_self_hosted_runner_group_for_org"
    values={[
        { label: 'create_self_hosted_runner_group_for_org', value: 'create_self_hosted_runner_group_for_org' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_self_hosted_runner_group_for_org">

Creates a new self-hosted runner group for an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
INSERT INTO github.actions.org_runner_groups (
name,
visibility,
selected_repository_ids,
runners,
allows_public_repositories,
restricted_to_workflows,
selected_workflows,
network_configuration_id,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ visibility }}',
'{{ selected_repository_ids }}',
'{{ runners }}',
{{ allows_public_repositories }},
{{ restricted_to_workflows }},
'{{ selected_workflows }}',
'{{ network_configuration_id }}',
'{{ org }}'
RETURNING
id,
name,
network_configuration_id,
allows_public_repositories,
default,
hosted_runners_url,
inherited,
inherited_allows_public_repositories,
restricted_to_workflows,
runners_url,
selected_repositories_url,
selected_workflows,
visibility,
workflow_restrictions_read_only
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: org_runner_groups
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the org_runner_groups resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the runner group.
    - name: visibility
      value: "{{ visibility }}"
      description: |
        Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories.
      valid_values: ['selected', 'all', 'private']
      default: all
    - name: selected_repository_ids
      value:
        - {{ selected_repository_ids }}
      description: |
        List of repository IDs that can access the runner group.
    - name: runners
      value:
        - {{ runners }}
      description: |
        List of runner IDs to add to the runner group.
    - name: allows_public_repositories
      value: {{ allows_public_repositories }}
      description: |
        Whether the runner group can be used by \`public\` repositories.
      default: false
    - name: restricted_to_workflows
      value: {{ restricted_to_workflows }}
      description: |
        If \`true\`, the runner group will be restricted to running only the workflows specified in the \`selected_workflows\` array.
      default: false
    - name: selected_workflows
      value:
        - "{{ selected_workflows }}"
      description: |
        List of workflows the runner group should be allowed to run. This setting will be ignored unless \`restricted_to_workflows\` is set to \`true\`.
    - name: network_configuration_id
      value: "{{ network_configuration_id }}"
      description: |
        The identifier of a hosted compute network configuration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_self_hosted_runner_group_for_org"
    values={[
        { label: 'update_self_hosted_runner_group_for_org', value: 'update_self_hosted_runner_group_for_org' }
    ]}
>
<TabItem value="update_self_hosted_runner_group_for_org">

Updates the `name` and `visibility` of a self-hosted runner group in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
UPDATE github.actions.org_runner_groups
SET 
name = '{{ name }}',
visibility = '{{ visibility }}',
allows_public_repositories = {{ allows_public_repositories }},
restricted_to_workflows = {{ restricted_to_workflows }},
selected_workflows = '{{ selected_workflows }}',
network_configuration_id = '{{ network_configuration_id }}'
WHERE 
org = '{{ org }}' --required
AND runner_group_id = '{{ runner_group_id }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
network_configuration_id,
allows_public_repositories,
default,
hosted_runners_url,
inherited,
inherited_allows_public_repositories,
restricted_to_workflows,
runners_url,
selected_repositories_url,
selected_workflows,
visibility,
workflow_restrictions_read_only;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_self_hosted_runner_group_from_org"
    values={[
        { label: 'delete_self_hosted_runner_group_from_org', value: 'delete_self_hosted_runner_group_from_org' }
    ]}
>
<TabItem value="delete_self_hosted_runner_group_from_org">

Deletes a self-hosted runner group for an organization.<br /><br />OAuth tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

```sql
DELETE FROM github.actions.org_runner_groups
WHERE org = '{{ org }}' --required
AND runner_group_id = '{{ runner_group_id }}' --required
;
```
</TabItem>
</Tabs>
