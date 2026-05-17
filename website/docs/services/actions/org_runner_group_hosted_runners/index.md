--- 
title: org_runner_group_hosted_runners
hide_title: false
hide_table_of_contents: false
keywords:
  - org_runner_group_hosted_runners
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

Creates, updates, deletes, gets or lists an <code>org_runner_group_hosted_runners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_runner_group_hosted_runners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.org_runner_group_hosted_runners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_github_hosted_runners_in_group_for_org"
    values={[
        { label: 'list_github_hosted_runners_in_group_for_org', value: 'list_github_hosted_runners_in_group_for_org' }
    ]}
>
<TabItem value="list_github_hosted_runners_in_group_for_org">

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
    <td><a href="#list_github_hosted_runners_in_group_for_org"><CopyableCode code="list_github_hosted_runners_in_group_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-runner_group_id"><code>runner_group_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the GitHub-hosted runners in an organization group.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_github_hosted_runners_in_group_for_org"
    values={[
        { label: 'list_github_hosted_runners_in_group_for_org', value: 'list_github_hosted_runners_in_group_for_org' }
    ]}
>
<TabItem value="list_github_hosted_runners_in_group_for_org">

Lists the GitHub-hosted runners in an organization group.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to use this endpoint.

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
FROM github.actions.org_runner_group_hosted_runners
WHERE org = '{{ org }}' -- required
AND runner_group_id = '{{ runner_group_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
