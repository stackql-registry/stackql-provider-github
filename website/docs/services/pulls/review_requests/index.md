--- 
title: review_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - review_requests
  - pulls
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

Creates, updates, deletes, gets or lists a <code>review_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="review_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.pulls.review_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_requested_reviewers"
    values={[
        { label: 'list_requested_reviewers', value: 'list_requested_reviewers' }
    ]}
>
<TabItem value="list_requested_reviewers">

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
    <td><CopyableCode code="teams" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
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
    <td><a href="#list_requested_reviewers"><CopyableCode code="list_requested_reviewers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Gets the users or teams whose review is requested for a pull request. Once a requested reviewer submits a review, they are no longer considered a requested reviewer. Their review will instead be returned by the [List reviews for a pull request](https://docs.github.com/rest/pulls/reviews#list-reviews-for-a-pull-request) operation.</td>
</tr>
<tr>
    <td><a href="#request_reviewers"><CopyableCode code="request_reviewers" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a>, <a href="#parameter-reviewers"><code>reviewers</code></a>, <a href="#parameter-team_reviewers"><code>team_reviewers</code></a></td>
    <td></td>
    <td>Requests reviews for a pull request from a given set of users and/or teams.<br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."</td>
</tr>
<tr>
    <td><a href="#remove_requested_reviewers"><CopyableCode code="remove_requested_reviewers" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Removes review requests from a pull request for a given set of users and/or teams.</td>
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
<tr id="parameter-pull_number">
    <td><CopyableCode code="pull_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the pull request.</td>
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
    defaultValue="list_requested_reviewers"
    values={[
        { label: 'list_requested_reviewers', value: 'list_requested_reviewers' }
    ]}
>
<TabItem value="list_requested_reviewers">

Gets the users or teams whose review is requested for a pull request. Once a requested reviewer submits a review, they are no longer considered a requested reviewer. Their review will instead be returned by the [List reviews for a pull request](https://docs.github.com/rest/pulls/reviews#list-reviews-for-a-pull-request) operation.

```sql
SELECT
teams,
users
FROM github.pulls.review_requests
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND pull_number = '{{ pull_number }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="request_reviewers"
    values={[
        { label: 'request_reviewers', value: 'request_reviewers' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="request_reviewers">

Requests reviews for a pull request from a given set of users and/or teams.<br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```sql
INSERT INTO github.pulls.review_requests (
reviewers,
team_reviewers,
owner,
repo,
pull_number
)
SELECT 
'{{ reviewers }}' /* required */,
'{{ team_reviewers }}' /* required */,
'{{ owner }}',
'{{ repo }}',
'{{ pull_number }}'
RETURNING
id,
node_id,
_links,
active_lock_reason,
assignee,
assignees,
author_association,
auto_merge,
base,
body,
closed_at,
comments_url,
commits_url,
created_at,
diff_url,
draft,
head,
html_url,
issue_url,
labels,
locked,
merge_commit_sha,
merged_at,
milestone,
number,
patch_url,
requested_reviewers,
requested_teams,
review_comment_url,
review_comments_url,
state,
statuses_url,
title,
updated_at,
url,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: review_requests
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the review_requests resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the review_requests resource.
    - name: pull_number
      value: {{ pull_number }}
      description: Required parameter for the review_requests resource.
    - name: reviewers
      value:
        - "{{ reviewers }}"
      description: |
        An array of user \`login\`s that will be requested.
    - name: team_reviewers
      value:
        - "{{ team_reviewers }}"
      description: |
        An array of team \`slug\`s that will be requested.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_requested_reviewers"
    values={[
        { label: 'remove_requested_reviewers', value: 'remove_requested_reviewers' }
    ]}
>
<TabItem value="remove_requested_reviewers">

Removes review requests from a pull request for a given set of users and/or teams.

```sql
DELETE FROM github.pulls.review_requests
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND pull_number = '{{ pull_number }}' --required
;
```
</TabItem>
</Tabs>
