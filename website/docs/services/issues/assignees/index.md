--- 
title: assignees
hide_title: false
hide_table_of_contents: false
keywords:
  - assignees
  - issues
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

Creates, updates, deletes, gets or lists an <code>assignees</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="assignees" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.issues.assignees" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_assignees"
    values={[
        { label: 'list_assignees', value: 'list_assignees' }
    ]}
>
<TabItem value="list_assignees">

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
    <td><a href="#list_assignees"><CopyableCode code="list_assignees" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the [available assignees](https://docs.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.</td>
</tr>
<tr>
    <td><a href="#add_assignees"><CopyableCode code="add_assignees" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td></td>
    <td>Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.</td>
</tr>
<tr>
    <td><a href="#remove_assignees"><CopyableCode code="remove_assignees" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td></td>
    <td>Removes one or more assignees from an issue.</td>
</tr>
<tr>
    <td><a href="#check_user_can_be_assigned"><CopyableCode code="check_user_can_be_assigned" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-assignee"><code>assignee</code></a></td>
    <td></td>
    <td>Checks if a user has permission to be assigned to an issue in this repository.<br /><br />If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.<br /><br />Otherwise a `404` status code is returned.</td>
</tr>
<tr>
    <td><a href="#check_user_can_be_assigned_to_issue"><CopyableCode code="check_user_can_be_assigned_to_issue" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a>, <a href="#parameter-assignee"><code>assignee</code></a></td>
    <td></td>
    <td>Checks if a user has permission to be assigned to a specific issue.<br /><br />If the `assignee` can be assigned to this issue, a `204` status code with no content is returned.<br /><br />Otherwise a `404` status code is returned.</td>
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
<tr id="parameter-assignee">
    <td><CopyableCode code="assignee" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-issue_number">
    <td><CopyableCode code="issue_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the issue.</td>
</tr>
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
    defaultValue="list_assignees"
    values={[
        { label: 'list_assignees', value: 'list_assignees' }
    ]}
>
<TabItem value="list_assignees">

Lists the [available assignees](https://docs.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

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
FROM github.issues.assignees
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_assignees"
    values={[
        { label: 'add_assignees', value: 'add_assignees' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_assignees">

Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

```sql
INSERT INTO github.issues.assignees (
assignees,
owner,
repo,
issue_number
)
SELECT 
'{{ assignees }}',
'{{ owner }}',
'{{ repo }}',
'{{ issue_number }}'
RETURNING
id,
node_id,
active_lock_reason,
assignee,
assignees,
author_association,
body,
body_html,
body_text,
closed_at,
closed_by,
comments,
comments_url,
created_at,
draft,
events_url,
html_url,
issue_dependencies_summary,
issue_field_values,
labels,
labels_url,
locked,
milestone,
number,
parent_issue_url,
performed_via_github_app,
pinned_comment,
pull_request,
reactions,
repository,
repository_url,
state,
state_reason,
sub_issues_summary,
timeline_url,
title,
type,
updated_at,
url,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: assignees
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the assignees resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the assignees resource.
    - name: issue_number
      value: {{ issue_number }}
      description: Required parameter for the assignees resource.
    - name: assignees
      value:
        - "{{ assignees }}"
      description: |
        Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_assignees"
    values={[
        { label: 'remove_assignees', value: 'remove_assignees' }
    ]}
>
<TabItem value="remove_assignees">

Removes one or more assignees from an issue.

```sql
DELETE FROM github.issues.assignees
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND issue_number = '{{ issue_number }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_user_can_be_assigned"
    values={[
        { label: 'check_user_can_be_assigned', value: 'check_user_can_be_assigned' },
        { label: 'check_user_can_be_assigned_to_issue', value: 'check_user_can_be_assigned_to_issue' }
    ]}
>
<TabItem value="check_user_can_be_assigned">

Checks if a user has permission to be assigned to an issue in this repository.<br /><br />If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.<br /><br />Otherwise a `404` status code is returned.

```sql
EXEC github.issues.assignees.check_user_can_be_assigned 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@assignee='{{ assignee }}' --required
;
```
</TabItem>
<TabItem value="check_user_can_be_assigned_to_issue">

Checks if a user has permission to be assigned to a specific issue.<br /><br />If the `assignee` can be assigned to this issue, a `204` status code with no content is returned.<br /><br />Otherwise a `404` status code is returned.

```sql
EXEC github.issues.assignees.check_user_can_be_assigned_to_issue 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@issue_number='{{ issue_number }}' --required, 
@assignee='{{ assignee }}' --required
;
```
</TabItem>
</Tabs>
