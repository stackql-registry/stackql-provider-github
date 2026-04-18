--- 
title: pull_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_requests
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

Creates, updates, deletes, gets or lists a <code>pull_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pull_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.pulls.pull_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDExOlB1bGxSZXF1ZXN0MQ==)</td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="active_lock_reason" /></td>
    <td><code>string</code></td>
    <td> (example: too heated)</td>
</tr>
<tr>
    <td><CopyableCode code="assignee" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="assignees" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="author_association" /></td>
    <td><code>string</code></td>
    <td>How the author is associated with the repository. (COLLABORATOR, CONTRIBUTOR, FIRST_TIMER, FIRST_TIME_CONTRIBUTOR, MANNEQUIN, MEMBER, NONE, OWNER) (title: author_association, example: OWNER)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_merge" /></td>
    <td><code>object</code></td>
    <td>The status of auto merging a pull request. (title: Auto merge)</td>
</tr>
<tr>
    <td><CopyableCode code="base" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td> (example: Please pull these awesome changes)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="comments_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/issues/1347/comments)</td>
</tr>
<tr>
    <td><CopyableCode code="commits_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="diff_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/pull/1347.diff)</td>
</tr>
<tr>
    <td><CopyableCode code="draft" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether or not the pull request is a draft.</td>
</tr>
<tr>
    <td><CopyableCode code="head" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/pull/1347)</td>
</tr>
<tr>
    <td><CopyableCode code="issue_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/issues/1347)</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="locked" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_sha" /></td>
    <td><code>string</code></td>
    <td> (example: e5bd3914e2e596debea16f433f57875b5b90bcd6)</td>
</tr>
<tr>
    <td><CopyableCode code="merged_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="milestone" /></td>
    <td><code>object</code></td>
    <td>A collection of related issues and pull requests. (title: Milestone)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="patch_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/pull/1347.patch)</td>
</tr>
<tr>
    <td><CopyableCode code="requested_reviewers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="requested_teams" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="review_comment_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/pulls/comments&#123;/number&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="review_comments_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td> (example: open)</td>
</tr>
<tr>
    <td><CopyableCode code="statuses_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td> (example: new-feature)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/pulls/1347)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-head"><code>head</code></a>, <a href="#parameter-base"><code>base</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists pull requests in a specified repository.<br /><br />Draft pull requests are available in public repositories with GitHub<br />Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing<br />plans, and in public and private repositories with GitHub Team and GitHub Enterprise<br />Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)<br />in the GitHub Help documentation.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
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
<tr id="parameter-base">
    <td><CopyableCode code="base" /></td>
    <td><code>string</code></td>
    <td>Filter pulls by base branch name. Example: `gh-pages`.</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction of the sort. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.</td>
</tr>
<tr id="parameter-head">
    <td><CopyableCode code="head" /></td>
    <td><code>string</code></td>
    <td>Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.</td>
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
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>What to sort results by. `popularity` will sort by the number of comments. `long-running` will sort by date created and will limit the results to pull requests that have been open for more than a month and have had activity within the past month.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Either `open`, `closed`, or `all` to filter by state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Lists pull requests in a specified repository.<br /><br />Draft pull requests are available in public repositories with GitHub<br />Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing<br />plans, and in public and private repositories with GitHub Team and GitHub Enterprise<br />Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)<br />in the GitHub Help documentation.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
SELECT
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
FROM github.pulls.pull_requests
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND state = '{{ state }}'
AND head = '{{ head }}'
AND base = '{{ base }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
