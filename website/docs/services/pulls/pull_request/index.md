--- 
title: pull_request
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_request
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

Creates, updates, deletes, gets or lists a <code>pull_request</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pull_request" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.pulls.pull_request" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Pass the appropriate [media type](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types) to fetch diff and patch formats.

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
    <td><CopyableCode code="additions" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><CopyableCode code="changed_files" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comments_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/issues/1347/comments)</td>
</tr>
<tr>
    <td><CopyableCode code="commits" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><CopyableCode code="deletions" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><CopyableCode code="maintainer_can_modify" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether maintainers can modify the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_sha" /></td>
    <td><code>string</code></td>
    <td> (example: e5bd3914e2e596debea16f433f57875b5b90bcd6)</td>
</tr>
<tr>
    <td><CopyableCode code="mergeable" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="mergeable_state" /></td>
    <td><code>string</code></td>
    <td> (example: clean)</td>
</tr>
<tr>
    <td><CopyableCode code="merged" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merged_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="merged_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="milestone" /></td>
    <td><code>object</code></td>
    <td>A collection of related issues and pull requests. (title: Milestone)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>Number uniquely identifying the pull request within its repository.</td>
</tr>
<tr>
    <td><CopyableCode code="patch_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/pull/1347.patch)</td>
</tr>
<tr>
    <td><CopyableCode code="rebaseable" /></td>
    <td><code>boolean</code></td>
    <td></td>
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
    <td><CopyableCode code="review_comments" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="review_comments_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of this Pull Request. Either `open` or `closed`. (open, closed) (example: open)</td>
</tr>
<tr>
    <td><CopyableCode code="statuses_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the pull request. (example: Amazing new feature)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Lists details of a pull request by providing its number.<br /><br />When you get, [create](https://docs.github.com/rest/pulls/pulls/#create-a-pull-request), or [edit](https://docs.github.com/rest/pulls/pulls#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".<br /><br />The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.<br /><br />The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:<br /><br />*   If merged as a [merge commit](https://docs.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.<br />*   If merged via a [squash](https://docs.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.<br />*   If [rebased](https://docs.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.<br /><br />Pass the appropriate [media type](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types) to fetch diff and patch formats.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.<br />- **`application/vnd.github.diff`**: For more information, see "[git-diff](https://git-scm.com/docs/git-diff)" in the Git documentation. If a diff is corrupt, contact us through the [GitHub Support portal](https://support.github.com/). Include the repository name and pull request ID in your message.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-head"><code>head</code></a>, <a href="#parameter-base"><code>base</code></a></td>
    <td></td>
    <td>Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
</tr>
<tr>
    <td><a href="#check_if_merged"><CopyableCode code="check_if_merged" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Checks if a pull request has been merged into the base branch. The HTTP status of the response indicates whether or not the pull request has been merged; the response body is empty.</td>
</tr>
<tr>
    <td><a href="#merge"><CopyableCode code="merge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Merges a pull request into the base branch.<br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."</td>
</tr>
<tr>
    <td><a href="#update_branch"><CopyableCode code="update_branch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.<br />Note: If making a request on behalf of a GitHub App you must also have permissions to write the contents of the head repository.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />Lists details of a pull request by providing its number.<br /><br />When you get, [create](https://docs.github.com/rest/pulls/pulls/#create-a-pull-request), or [edit](https://docs.github.com/rest/pulls/pulls#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".<br /><br />The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.<br /><br />The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:<br /><br />*   If merged as a [merge commit](https://docs.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.<br />*   If merged via a [squash](https://docs.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.<br />*   If [rebased](https://docs.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.<br /><br />Pass the appropriate [media type](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types) to fetch diff and patch formats.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.<br />- **`application/vnd.github.diff`**: For more information, see "[git-diff](https://git-scm.com/docs/git-diff)" in the Git documentation. If a diff is corrupt, contact us through the [GitHub Support portal](https://support.github.com/). Include the repository name and pull request ID in your message.

```sql
SELECT
id,
node_id,
_links,
active_lock_reason,
additions,
assignee,
assignees,
author_association,
auto_merge,
base,
body,
changed_files,
closed_at,
comments,
comments_url,
commits,
commits_url,
created_at,
deletions,
diff_url,
draft,
head,
html_url,
issue_url,
labels,
locked,
maintainer_can_modify,
merge_commit_sha,
mergeable,
mergeable_state,
merged,
merged_at,
merged_by,
milestone,
number,
patch_url,
rebaseable,
requested_reviewers,
requested_teams,
review_comment_url,
review_comments,
review_comments_url,
state,
statuses_url,
title,
updated_at,
url,
user
FROM github.pulls.pull_request
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND pull_number = '{{ pull_number }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
INSERT INTO github.pulls.pull_request (
title,
head,
head_repo,
base,
body,
maintainer_can_modify,
draft,
issue,
owner,
repo
)
SELECT 
'{{ title }}',
'{{ head }}' /* required */,
'{{ head_repo }}',
'{{ base }}' /* required */,
'{{ body }}',
{{ maintainer_can_modify }},
{{ draft }},
{{ issue }},
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
node_id,
_links,
active_lock_reason,
additions,
assignee,
assignees,
author_association,
auto_merge,
base,
body,
changed_files,
closed_at,
comments,
comments_url,
commits,
commits_url,
created_at,
deletions,
diff_url,
draft,
head,
html_url,
issue_url,
labels,
locked,
maintainer_can_modify,
merge_commit_sha,
mergeable,
mergeable_state,
merged,
merged_at,
merged_by,
milestone,
number,
patch_url,
rebaseable,
requested_reviewers,
requested_teams,
review_comment_url,
review_comments,
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
- name: pull_request
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the pull_request resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the pull_request resource.
    - name: title
      value: "{{ title }}"
      description: |
        The title of the new pull request. Required unless \`issue\` is specified.
    - name: head
      value: "{{ head }}"
      description: |
        The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace \`head\` with a user like this: \`username:branch\`.
    - name: head_repo
      value: "{{ head_repo }}"
      description: |
        The name of the repository where the changes in the pull request were made. This field is required for cross-repository pull requests if both repositories are owned by the same organization.
    - name: base
      value: "{{ base }}"
      description: |
        The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
    - name: body
      value: "{{ body }}"
      description: |
        The contents of the pull request.
    - name: maintainer_can_modify
      value: {{ maintainer_can_modify }}
      description: |
        Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
    - name: draft
      value: {{ draft }}
      description: |
        Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://docs.github.com/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.
    - name: issue
      value: {{ issue }}
      description: |
        An issue in the repository to convert to a pull request. The issue title, body, and comments will become the title, body, and comments on the new pull request. Required unless \`title\` is specified.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
UPDATE github.pulls.pull_request
SET 
title = '{{ title }}',
body = '{{ body }}',
state = '{{ state }}',
base = '{{ base }}',
maintainer_can_modify = {{ maintainer_can_modify }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND pull_number = '{{ pull_number }}' --required
RETURNING
id,
node_id,
_links,
active_lock_reason,
additions,
assignee,
assignees,
author_association,
auto_merge,
base,
body,
changed_files,
closed_at,
comments,
comments_url,
commits,
commits_url,
created_at,
deletions,
diff_url,
draft,
head,
html_url,
issue_url,
labels,
locked,
maintainer_can_modify,
merge_commit_sha,
mergeable,
mergeable_state,
merged,
merged_at,
merged_by,
milestone,
number,
patch_url,
rebaseable,
requested_reviewers,
requested_teams,
review_comment_url,
review_comments,
review_comments_url,
state,
statuses_url,
title,
updated_at,
url,
user;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_if_merged"
    values={[
        { label: 'check_if_merged', value: 'check_if_merged' },
        { label: 'merge', value: 'merge' },
        { label: 'update_branch', value: 'update_branch' }
    ]}
>
<TabItem value="check_if_merged">

Checks if a pull request has been merged into the base branch. The HTTP status of the response indicates whether or not the pull request has been merged; the response body is empty.

```sql
EXEC github.pulls.pull_request.check_if_merged 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@pull_number='{{ pull_number }}' --required
;
```
</TabItem>
<TabItem value="merge">

Merges a pull request into the base branch.<br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```sql
EXEC github.pulls.pull_request.merge 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@pull_number='{{ pull_number }}' --required 
@@json=
'{
"commit_title": "{{ commit_title }}", 
"commit_message": "{{ commit_message }}", 
"sha": "{{ sha }}", 
"merge_method": "{{ merge_method }}"
}'
;
```
</TabItem>
<TabItem value="update_branch">

Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.<br />Note: If making a request on behalf of a GitHub App you must also have permissions to write the contents of the head repository.

```sql
EXEC github.pulls.pull_request.update_branch 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@pull_number='{{ pull_number }}' --required 
@@json=
'{
"expected_head_sha": "{{ expected_head_sha }}"
}'
;
```
</TabItem>
</Tabs>
