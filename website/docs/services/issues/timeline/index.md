--- 
title: timeline
hide_title: false
hide_table_of_contents: false
keywords:
  - timeline
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

Creates, updates, deletes, gets or lists a <code>timeline</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="timeline" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.issues.timeline" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_events_for_timeline"
    values={[
        { label: 'list_events_for_timeline', value: 'list_events_for_timeline' }
    ]}
>
<TabItem value="list_events_for_timeline">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="assignee" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Identifying information for the git-user</td>
</tr>
<tr>
    <td><CopyableCode code="author_association" /></td>
    <td><code>string</code></td>
    <td>How the author is associated with the repository. (COLLABORATOR, CONTRIBUTOR, FIRST_TIMER, FIRST_TIME_CONTRIBUTOR, MANNEQUIN, MEMBER, NONE, OWNER) (title: author_association, example: OWNER)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>Contents of the issue comment (example: What version of Safari were you using when you observed this bug?)</td>
</tr>
<tr>
    <td><CopyableCode code="body_html" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="body_text" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="committer" /></td>
    <td><code>object</code></td>
    <td>Identifying information for the git-user</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_review" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="event" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="issue_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lock_reason" /></td>
    <td><code>string</code></td>
    <td> (example: "off-topic")</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Message describing the purpose of the commit (example: Fix #42)</td>
</tr>
<tr>
    <td><CopyableCode code="milestone" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="performed_via_github_app" /></td>
    <td><code>object</code></td>
    <td>GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub. (title: GitHub app)</td>
</tr>
<tr>
    <td><CopyableCode code="pin" /></td>
    <td><code>object</code></td>
    <td>Context around who pinned an issue comment and when it was pinned. (title: Pinned Issue Comment)</td>
</tr>
<tr>
    <td><CopyableCode code="project_card" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/pulls/12)</td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>object</code></td>
    <td> (title: Reaction Rollup)</td>
</tr>
<tr>
    <td><CopyableCode code="rename" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="requested_reviewer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_team" /></td>
    <td><code>object</code></td>
    <td>Groups of organization members that gives permissions on specified repositories. (title: Team)</td>
</tr>
<tr>
    <td><CopyableCode code="review_requester" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td>SHA for the commit (example: 7638417db6d59f3c431d3e1f261cc637155684cd)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (example: CHANGES_REQUESTED)</td>
</tr>
<tr>
    <td><CopyableCode code="state_reason" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="submitted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tree" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-14T16:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="verification" /></td>
    <td><code>object</code></td>
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
    <td><a href="#list_events_for_timeline"><CopyableCode code="list_events_for_timeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List all timeline events for an issue.</td>
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
    defaultValue="list_events_for_timeline"
    values={[
        { label: 'list_events_for_timeline', value: 'list_events_for_timeline' }
    ]}
>
<TabItem value="list_events_for_timeline">

List all timeline events for an issue.

```sql
SELECT
id,
commit_id,
node_id,
_links,
actor,
assignee,
author,
author_association,
body,
body_html,
body_text,
comments,
commit_url,
committer,
created_at,
dismissed_review,
event,
html_url,
issue_url,
label,
lock_reason,
message,
milestone,
parents,
performed_via_github_app,
pin,
project_card,
pull_request_url,
reactions,
rename,
requested_reviewer,
requested_team,
review_requester,
sha,
source,
state,
state_reason,
submitted_at,
tree,
updated_at,
url,
user,
verification
FROM github.issues.timeline
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND issue_number = '{{ issue_number }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
