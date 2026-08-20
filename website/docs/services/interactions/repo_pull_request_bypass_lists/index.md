--- 
title: repo_pull_request_bypass_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - repo_pull_request_bypass_lists
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

Creates, updates, deletes, gets or lists a <code>repo_pull_request_bypass_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repo_pull_request_bypass_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.interactions.repo_pull_request_bypass_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pull_request_bypass_list_for_repo"
    values={[
        { label: 'get_pull_request_bypass_list_for_repo', value: 'get_pull_request_bypass_list_for_repo' }
    ]}
>
<TabItem value="get_pull_request_bypass_list_for_repo">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td> (example: 41d064eb2195891e12d0413f63227ea7)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDQ6VXNlcjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/events&#123;/privacy&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="followers_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/followers)</td>
</tr>
<tr>
    <td><CopyableCode code="following_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/following&#123;/other_user&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="gists_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/gists&#123;/gist_id&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="organizations_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/orgs)</td>
</tr>
<tr>
    <td><CopyableCode code="received_events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/received_events)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="site_admin" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="starred_at" /></td>
    <td><code>string</code></td>
    <td> (example: "2020-07-09T00:17:55Z")</td>
</tr>
<tr>
    <td><CopyableCode code="starred_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/starred&#123;/owner&#125;&#123;/repo&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptions_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/subscriptions)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="user_view_type" /></td>
    <td><code>string</code></td>
    <td> (example: public)</td>
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
    <td><a href="#get_pull_request_bypass_list_for_repo"><CopyableCode code="get_pull_request_bypass_list_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Lists the users that are on the pull request creation cap bypass list for a<br />repository. Users on this list can create pull requests regardless of any<br />configured pull request creation cap.<br /><br />Only users with maintainer permissions can view the bypass list.</td>
</tr>
<tr>
    <td><a href="#set_pull_request_bypass_list_for_repo"><CopyableCode code="set_pull_request_bypass_list_for_repo" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-users"><code>users</code></a></td>
    <td></td>
    <td>Adds users to the pull request creation cap bypass list for a repository.<br />Users on this list can create pull requests regardless of any configured<br />pull request creation cap.<br /><br />Only users with maintainer permissions can modify the bypass list.<br />You can add a maximum of 100 users per request.<br />The bypass list can only hold a maximum of 100 users.</td>
</tr>
<tr>
    <td><a href="#remove_pull_request_bypass_list_for_repo"><CopyableCode code="remove_pull_request_bypass_list_for_repo" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Removes users from the pull request creation cap bypass list for a repository.<br />Removed users will be subject to any configured pull request creation cap.<br /><br />Only users with maintainer permissions can modify the bypass list.<br />You can remove a maximum of 100 users per request.</td>
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
    defaultValue="get_pull_request_bypass_list_for_repo"
    values={[
        { label: 'get_pull_request_bypass_list_for_repo', value: 'get_pull_request_bypass_list_for_repo' }
    ]}
>
<TabItem value="get_pull_request_bypass_list_for_repo">

Lists the users that are on the pull request creation cap bypass list for a<br />repository. Users on this list can create pull requests regardless of any<br />configured pull request creation cap.<br /><br />Only users with maintainer permissions can view the bypass list.

```sql
SELECT
id,
name,
gravatar_id,
node_id,
avatar_url,
email,
events_url,
followers_url,
following_url,
gists_url,
html_url,
login,
organizations_url,
received_events_url,
repos_url,
site_admin,
starred_at,
starred_url,
subscriptions_url,
type,
url,
user_view_type
FROM github.interactions.repo_pull_request_bypass_lists
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_pull_request_bypass_list_for_repo"
    values={[
        { label: 'set_pull_request_bypass_list_for_repo', value: 'set_pull_request_bypass_list_for_repo' }
    ]}
>
<TabItem value="set_pull_request_bypass_list_for_repo">

Adds users to the pull request creation cap bypass list for a repository.<br />Users on this list can create pull requests regardless of any configured<br />pull request creation cap.<br /><br />Only users with maintainer permissions can modify the bypass list.<br />You can add a maximum of 100 users per request.<br />The bypass list can only hold a maximum of 100 users.

```sql
REPLACE github.interactions.repo_pull_request_bypass_lists
SET 
users = '{{ users }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND users = '{{ users }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_pull_request_bypass_list_for_repo"
    values={[
        { label: 'remove_pull_request_bypass_list_for_repo', value: 'remove_pull_request_bypass_list_for_repo' }
    ]}
>
<TabItem value="remove_pull_request_bypass_list_for_repo">

Removes users from the pull request creation cap bypass list for a repository.<br />Removed users will be subject to any configured pull request creation cap.<br /><br />Only users with maintainer permissions can modify the bypass list.<br />You can remove a maximum of 100 users per request.

```sql
DELETE FROM github.interactions.repo_pull_request_bypass_lists
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
;
```
</TabItem>
</Tabs>
