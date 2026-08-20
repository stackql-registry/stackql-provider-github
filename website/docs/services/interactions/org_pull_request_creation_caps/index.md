--- 
title: org_pull_request_creation_caps
hide_title: false
hide_table_of_contents: false
keywords:
  - org_pull_request_creation_caps
  - interactions
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

Creates, updates, deletes, gets or lists an <code>org_pull_request_creation_caps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_pull_request_creation_caps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.interactions.org_pull_request_creation_caps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pull_request_creation_cap_for_org"
    values={[
        { label: 'get_pull_request_creation_cap_for_org', value: 'get_pull_request_creation_cap_for_org' }
    ]}
>
<TabItem value="get_pull_request_creation_cap_for_org">

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the pull request creation cap is enabled</td>
</tr>
<tr>
    <td><CopyableCode code="max_open_pull_requests" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of open pull requests a user can have at one time</td>
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
    <td><a href="#get_pull_request_creation_cap_for_org"><CopyableCode code="get_pull_request_creation_cap_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets the pull request creation cap configuration for an organization.<br />The cap limits the total number of open pull requests a user can have across all public<br />repositories in the organization at one time.<br /><br />Only users with admin access to the organization can view the cap configuration.</td>
</tr>
<tr>
    <td><a href="#update_pull_request_creation_cap_for_org"><CopyableCode code="update_pull_request_creation_cap_for_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Updates the pull request creation cap for an organization. The cap limits the total number<br />of open pull requests a user can have across all public repositories in the organization<br />at one time.<br /><br />Only users with admin access to the organization can configure the cap.</td>
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
    defaultValue="get_pull_request_creation_cap_for_org"
    values={[
        { label: 'get_pull_request_creation_cap_for_org', value: 'get_pull_request_creation_cap_for_org' }
    ]}
>
<TabItem value="get_pull_request_creation_cap_for_org">

Gets the pull request creation cap configuration for an organization.<br />The cap limits the total number of open pull requests a user can have across all public<br />repositories in the organization at one time.<br /><br />Only users with admin access to the organization can view the cap configuration.

```sql
SELECT
enabled,
max_open_pull_requests
FROM github.interactions.org_pull_request_creation_caps
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pull_request_creation_cap_for_org"
    values={[
        { label: 'update_pull_request_creation_cap_for_org', value: 'update_pull_request_creation_cap_for_org' }
    ]}
>
<TabItem value="update_pull_request_creation_cap_for_org">

Updates the pull request creation cap for an organization. The cap limits the total number<br />of open pull requests a user can have across all public repositories in the organization<br />at one time.<br /><br />Only users with admin access to the organization can configure the cap.

```sql
UPDATE github.interactions.org_pull_request_creation_caps
SET 
enabled = {{ enabled }},
max_open_pull_requests = {{ max_open_pull_requests }}
WHERE 
org = '{{ org }}' --required
AND enabled = {{ enabled }} --required
RETURNING
enabled,
max_open_pull_requests;
```
</TabItem>
</Tabs>
