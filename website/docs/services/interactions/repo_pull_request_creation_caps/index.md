--- 
title: repo_pull_request_creation_caps
hide_title: false
hide_table_of_contents: false
keywords:
  - repo_pull_request_creation_caps
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

Creates, updates, deletes, gets or lists a <code>repo_pull_request_creation_caps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repo_pull_request_creation_caps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.interactions.repo_pull_request_creation_caps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pull_request_creation_cap_for_repo"
    values={[
        { label: 'get_pull_request_creation_cap_for_repo', value: 'get_pull_request_creation_cap_for_repo' }
    ]}
>
<TabItem value="get_pull_request_creation_cap_for_repo">

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
    <td><a href="#get_pull_request_creation_cap_for_repo"><CopyableCode code="get_pull_request_creation_cap_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets the pull request creation cap configuration for a repository.<br />The cap limits the number of open pull requests a user can have at one time.<br /><br />Only users with admin access to the repository can view the cap configuration.</td>
</tr>
<tr>
    <td><a href="#update_pull_request_creation_cap_for_repo"><CopyableCode code="update_pull_request_creation_cap_for_repo" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Updates the pull request creation cap for a repository. The cap limits the number<br />of open pull requests a user can have at one time.<br /><br />Only users with admin access to the repository can configure the cap.</td>
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
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pull_request_creation_cap_for_repo"
    values={[
        { label: 'get_pull_request_creation_cap_for_repo', value: 'get_pull_request_creation_cap_for_repo' }
    ]}
>
<TabItem value="get_pull_request_creation_cap_for_repo">

Gets the pull request creation cap configuration for a repository.<br />The cap limits the number of open pull requests a user can have at one time.<br /><br />Only users with admin access to the repository can view the cap configuration.

```sql
SELECT
enabled,
max_open_pull_requests
FROM github.interactions.repo_pull_request_creation_caps
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pull_request_creation_cap_for_repo"
    values={[
        { label: 'update_pull_request_creation_cap_for_repo', value: 'update_pull_request_creation_cap_for_repo' }
    ]}
>
<TabItem value="update_pull_request_creation_cap_for_repo">

Updates the pull request creation cap for a repository. The cap limits the number<br />of open pull requests a user can have at one time.<br /><br />Only users with admin access to the repository can configure the cap.

```sql
UPDATE github.interactions.repo_pull_request_creation_caps
SET 
enabled = {{ enabled }},
max_open_pull_requests = {{ max_open_pull_requests }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND enabled = {{ enabled }} --required
RETURNING
enabled,
max_open_pull_requests;
```
</TabItem>
</Tabs>
