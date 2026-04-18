--- 
title: org_hosted_runners
hide_title: false
hide_table_of_contents: false
keywords:
  - org_hosted_runners
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

Creates, updates, deletes, gets or lists an <code>org_hosted_runners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_hosted_runners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_hosted_runners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hosted_runner_for_org"
    values={[
        { label: 'get_hosted_runner_for_org', value: 'get_hosted_runner_for_org' },
        { label: 'list_hosted_runners_for_org', value: 'list_hosted_runners_for_org' }
    ]}
>
<TabItem value="get_hosted_runner_for_org">

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
    <td><code>integer</code></td>
    <td>The unique identifier of the hosted runner.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the hosted runner. (example: my-github-hosted-runner)</td>
</tr>
<tr>
    <td><CopyableCode code="runner_group_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the group that the hosted runner belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="image_details" /></td>
    <td><code>object</code></td>
    <td>Provides details of a hosted runner image (title: GitHub-hosted runner image details.)</td>
</tr>
<tr>
    <td><CopyableCode code="image_gen" /></td>
    <td><code>boolean</code></td>
    <td>Whether custom image generation is enabled for the hosted runners.</td>
</tr>
<tr>
    <td><CopyableCode code="last_active_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the runner was last used, in ISO 8601 format. (example: 2022-10-09T23:39:01Z)</td>
</tr>
<tr>
    <td><CopyableCode code="machine_size_details" /></td>
    <td><code>object</code></td>
    <td>Provides details of a particular machine spec. (title: Github-owned VM details.)</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_runners" /></td>
    <td><code>integer</code></td>
    <td>The maximum amount of hosted runners. Runners will not scale automatically above this number. Use this setting to limit your cost.</td>
</tr>
<tr>
    <td><CopyableCode code="platform" /></td>
    <td><code>string</code></td>
    <td>The operating system of the image. (example: linux-x64)</td>
</tr>
<tr>
    <td><CopyableCode code="public_ip_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether public IP is enabled for the hosted runners.</td>
</tr>
<tr>
    <td><CopyableCode code="public_ips" /></td>
    <td><code>array</code></td>
    <td>The public IP ranges when public IP is enabled for the hosted runners.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the runner. (Ready, Provisioning, Shutdown, Deleting, Stuck) (example: Ready)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hosted_runners_for_org">

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
    <td><CopyableCode code="runners" /></td>
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
    <td><a href="#get_hosted_runner_for_org"><CopyableCode code="get_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-hosted_runner_id"><code>hosted_runner_id</code></a></td>
    <td></td>
    <td>Gets a GitHub-hosted runner configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_hosted_runners_for_org"><CopyableCode code="list_hosted_runners_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all GitHub-hosted runners configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `manage_runner:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_hosted_runner_for_org"><CopyableCode code="create_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-image"><code>image</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a></td>
    <td></td>
    <td>Creates a GitHub-hosted runner for an organization.<br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_hosted_runner_for_org"><CopyableCode code="update_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-hosted_runner_id"><code>hosted_runner_id</code></a></td>
    <td></td>
    <td>Updates a GitHub-hosted runner for an organization.<br />OAuth app tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_hosted_runner_for_org"><CopyableCode code="delete_hosted_runner_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-hosted_runner_id"><code>hosted_runner_id</code></a></td>
    <td></td>
    <td>Deletes a GitHub-hosted runner for an organization.</td>
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
<tr id="parameter-hosted_runner_id">
    <td><CopyableCode code="hosted_runner_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the GitHub-hosted runner.</td>
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
    defaultValue="get_hosted_runner_for_org"
    values={[
        { label: 'get_hosted_runner_for_org', value: 'get_hosted_runner_for_org' },
        { label: 'list_hosted_runners_for_org', value: 'list_hosted_runners_for_org' }
    ]}
>
<TabItem value="get_hosted_runner_for_org">

Gets a GitHub-hosted runner configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
SELECT
id,
name,
runner_group_id,
image_details,
image_gen,
last_active_on,
machine_size_details,
maximum_runners,
platform,
public_ip_enabled,
public_ips,
status
FROM github.actions.org_hosted_runners
WHERE org = '{{ org }}' -- required
AND hosted_runner_id = '{{ hosted_runner_id }}' -- required
;
```
</TabItem>
<TabItem value="list_hosted_runners_for_org">

Lists all GitHub-hosted runners configured in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `manage_runner:org` scope to use this endpoint.

```sql
SELECT
runners,
total_count
FROM github.actions.org_hosted_runners
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_hosted_runner_for_org"
    values={[
        { label: 'create_hosted_runner_for_org', value: 'create_hosted_runner_for_org' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_hosted_runner_for_org">

Creates a GitHub-hosted runner for an organization.<br />OAuth tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
INSERT INTO github.actions.org_hosted_runners (
name,
image,
size,
runner_group_id,
maximum_runners,
enable_static_ip,
image_gen,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ image }}' /* required */,
'{{ size }}' /* required */,
{{ runner_group_id }} /* required */,
{{ maximum_runners }},
{{ enable_static_ip }},
{{ image_gen }},
'{{ org }}'
RETURNING
id,
name,
runner_group_id,
image_details,
image_gen,
last_active_on,
machine_size_details,
maximum_runners,
platform,
public_ip_enabled,
public_ips,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: org_hosted_runners
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the org_hosted_runners resource.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the runner. Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.
    - name: image
      description: |
        The image of runner. To list all available images, use \`GET /actions/hosted-runners/images/github-owned\` or \`GET /actions/hosted-runners/images/partner\`.
      value:
        id: "{{ id }}"
        source: "{{ source }}"
        version: "{{ version }}"
    - name: size
      value: "{{ size }}"
      description: |
        The machine size of the runner. To list available sizes, use \`GET actions/hosted-runners/machine-sizes\`
    - name: runner_group_id
      value: {{ runner_group_id }}
      description: |
        The existing runner group to add this runner to.
    - name: maximum_runners
      value: {{ maximum_runners }}
      description: |
        The maximum amount of runners to scale up to. Runners will not auto-scale above this number. Use this setting to limit your cost.
    - name: enable_static_ip
      value: {{ enable_static_ip }}
      description: |
        Whether this runner should be created with a static public IP. Note limit on account. To list limits on account, use \`GET actions/hosted-runners/limits\`
    - name: image_gen
      value: {{ image_gen }}
      description: |
        Whether this runner should be used to generate custom images.
      default: false
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_hosted_runner_for_org"
    values={[
        { label: 'update_hosted_runner_for_org', value: 'update_hosted_runner_for_org' }
    ]}
>
<TabItem value="update_hosted_runner_for_org">

Updates a GitHub-hosted runner for an organization.<br />OAuth app tokens and personal access tokens (classic) need the `manage_runners:org` scope to use this endpoint.

```sql
UPDATE github.actions.org_hosted_runners
SET 
name = '{{ name }}',
runner_group_id = {{ runner_group_id }},
maximum_runners = {{ maximum_runners }},
enable_static_ip = {{ enable_static_ip }},
size = '{{ size }}',
image_id = '{{ image_id }}',
image_version = '{{ image_version }}'
WHERE 
org = '{{ org }}' --required
AND hosted_runner_id = '{{ hosted_runner_id }}' --required
RETURNING
id,
name,
runner_group_id,
image_details,
image_gen,
last_active_on,
machine_size_details,
maximum_runners,
platform,
public_ip_enabled,
public_ips,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hosted_runner_for_org"
    values={[
        { label: 'delete_hosted_runner_for_org', value: 'delete_hosted_runner_for_org' }
    ]}
>
<TabItem value="delete_hosted_runner_for_org">

Deletes a GitHub-hosted runner for an organization.

```sql
DELETE FROM github.actions.org_hosted_runners
WHERE org = '{{ org }}' --required
AND hosted_runner_id = '{{ hosted_runner_id }}' --required
;
```
</TabItem>
</Tabs>
