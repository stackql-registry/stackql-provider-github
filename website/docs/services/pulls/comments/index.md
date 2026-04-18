--- 
title: comments
hide_title: false
hide_table_of_contents: false
keywords:
  - comments
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

Creates, updates, deletes, gets or lists a <code>comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="comments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.pulls.comments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_review_comment"
    values={[
        { label: 'get_review_comment', value: 'get_review_comment' },
        { label: 'list_review_comments', value: 'list_review_comments' },
        { label: 'list_review_comments_for_repo', value: 'list_review_comments_for_repo' }
    ]}
>
<TabItem value="get_review_comment">

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
    <td>The ID of the pull request review comment.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_id" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit to which the comment applies. (example: 6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="in_reply_to_id" /></td>
    <td><code>integer</code></td>
    <td>The comment ID to reply to.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the pull request review comment. (example: MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw)</td>
</tr>
<tr>
    <td><CopyableCode code="original_commit_id" /></td>
    <td><code>string</code></td>
    <td>The SHA of the original commit to which the comment applies. (example: 9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_review_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the pull request review to which the comment belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="author_association" /></td>
    <td><code>string</code></td>
    <td>How the author is associated with the repository. (COLLABORATOR, CONTRIBUTOR, FIRST_TIMER, FIRST_TIME_CONTRIBUTOR, MANNEQUIN, MEMBER, NONE, OWNER) (title: author_association, example: OWNER)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The text of the comment. (example: We should probably include a check for null values here.)</td>
</tr>
<tr>
    <td><CopyableCode code="body_html" /></td>
    <td><code>string</code></td>
    <td> (example: "<p>comment body</p>")</td>
</tr>
<tr>
    <td><CopyableCode code="body_text" /></td>
    <td><code>string</code></td>
    <td> (example: "comment body")</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-14T16:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="diff_hunk" /></td>
    <td><code>string</code></td>
    <td>The diff of the line that the comment refers to. (example: @@ -16,33 +16,40 @@ public class Connection : IConnection...)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>HTML URL for the pull request review comment. (example: https://github.com/octocat/Hello-World/pull/1#discussion-diff-1)</td>
</tr>
<tr>
    <td><CopyableCode code="line" /></td>
    <td><code>integer</code></td>
    <td>The line of the blob to which the comment applies. The last line of the range for a multi-line comment</td>
</tr>
<tr>
    <td><CopyableCode code="original_line" /></td>
    <td><code>integer</code></td>
    <td>The line of the blob to which the comment applies. The last line of the range for a multi-line comment</td>
</tr>
<tr>
    <td><CopyableCode code="original_position" /></td>
    <td><code>integer</code></td>
    <td>The index of the original line in the diff to which the comment applies. This field is closing down; use `original_line` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="original_start_line" /></td>
    <td><code>integer</code></td>
    <td>The first line of the range for a multi-line comment.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The relative path of the file to which the comment applies. (example: config/database.yaml)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The line index in the diff to which the comment applies. This field is closing down; use `line` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the pull request that the review comment belongs to. (example: https://api.github.com/repos/octocat/Hello-World/pulls/1)</td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>object</code></td>
    <td> (title: Reaction Rollup)</td>
</tr>
<tr>
    <td><CopyableCode code="side" /></td>
    <td><code>string</code></td>
    <td>The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment (LEFT, RIGHT) (default: RIGHT)</td>
</tr>
<tr>
    <td><CopyableCode code="start_line" /></td>
    <td><code>integer</code></td>
    <td>The first line of the range for a multi-line comment.</td>
</tr>
<tr>
    <td><CopyableCode code="start_side" /></td>
    <td><code>string</code></td>
    <td>The side of the first line of the range for a multi-line comment. (LEFT, RIGHT) (default: RIGHT)</td>
</tr>
<tr>
    <td><CopyableCode code="subject_type" /></td>
    <td><code>string</code></td>
    <td>The level at which the comment is targeted, can be a diff line or a file. (line, file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-14T16:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL for the pull request review comment (example: https://api.github.com/repos/octocat/Hello-World/pulls/comments/1)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_review_comments">

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
    <td>The ID of the pull request review comment.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_id" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit to which the comment applies. (example: 6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="in_reply_to_id" /></td>
    <td><code>integer</code></td>
    <td>The comment ID to reply to.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the pull request review comment. (example: MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw)</td>
</tr>
<tr>
    <td><CopyableCode code="original_commit_id" /></td>
    <td><code>string</code></td>
    <td>The SHA of the original commit to which the comment applies. (example: 9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_review_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the pull request review to which the comment belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="author_association" /></td>
    <td><code>string</code></td>
    <td>How the author is associated with the repository. (COLLABORATOR, CONTRIBUTOR, FIRST_TIMER, FIRST_TIME_CONTRIBUTOR, MANNEQUIN, MEMBER, NONE, OWNER) (title: author_association, example: OWNER)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The text of the comment. (example: We should probably include a check for null values here.)</td>
</tr>
<tr>
    <td><CopyableCode code="body_html" /></td>
    <td><code>string</code></td>
    <td> (example: "<p>comment body</p>")</td>
</tr>
<tr>
    <td><CopyableCode code="body_text" /></td>
    <td><code>string</code></td>
    <td> (example: "comment body")</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-14T16:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="diff_hunk" /></td>
    <td><code>string</code></td>
    <td>The diff of the line that the comment refers to. (example: @@ -16,33 +16,40 @@ public class Connection : IConnection...)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>HTML URL for the pull request review comment. (example: https://github.com/octocat/Hello-World/pull/1#discussion-diff-1)</td>
</tr>
<tr>
    <td><CopyableCode code="line" /></td>
    <td><code>integer</code></td>
    <td>The line of the blob to which the comment applies. The last line of the range for a multi-line comment</td>
</tr>
<tr>
    <td><CopyableCode code="original_line" /></td>
    <td><code>integer</code></td>
    <td>The line of the blob to which the comment applies. The last line of the range for a multi-line comment</td>
</tr>
<tr>
    <td><CopyableCode code="original_position" /></td>
    <td><code>integer</code></td>
    <td>The index of the original line in the diff to which the comment applies. This field is closing down; use `original_line` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="original_start_line" /></td>
    <td><code>integer</code></td>
    <td>The first line of the range for a multi-line comment.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The relative path of the file to which the comment applies. (example: config/database.yaml)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The line index in the diff to which the comment applies. This field is closing down; use `line` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the pull request that the review comment belongs to. (example: https://api.github.com/repos/octocat/Hello-World/pulls/1)</td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>object</code></td>
    <td> (title: Reaction Rollup)</td>
</tr>
<tr>
    <td><CopyableCode code="side" /></td>
    <td><code>string</code></td>
    <td>The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment (LEFT, RIGHT) (default: RIGHT)</td>
</tr>
<tr>
    <td><CopyableCode code="start_line" /></td>
    <td><code>integer</code></td>
    <td>The first line of the range for a multi-line comment.</td>
</tr>
<tr>
    <td><CopyableCode code="start_side" /></td>
    <td><code>string</code></td>
    <td>The side of the first line of the range for a multi-line comment. (LEFT, RIGHT) (default: RIGHT)</td>
</tr>
<tr>
    <td><CopyableCode code="subject_type" /></td>
    <td><code>string</code></td>
    <td>The level at which the comment is targeted, can be a diff line or a file. (line, file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-14T16:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL for the pull request review comment (example: https://api.github.com/repos/octocat/Hello-World/pulls/comments/1)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_review_comments_for_repo">

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
    <td>The ID of the pull request review comment.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_id" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit to which the comment applies. (example: 6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="in_reply_to_id" /></td>
    <td><code>integer</code></td>
    <td>The comment ID to reply to.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID of the pull request review comment. (example: MDI0OlB1bGxSZXF1ZXN0UmV2aWV3Q29tbWVudDEw)</td>
</tr>
<tr>
    <td><CopyableCode code="original_commit_id" /></td>
    <td><code>string</code></td>
    <td>The SHA of the original commit to which the comment applies. (example: 9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840)</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_review_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The ID of the pull request review to which the comment belongs.</td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="author_association" /></td>
    <td><code>string</code></td>
    <td>How the author is associated with the repository. (COLLABORATOR, CONTRIBUTOR, FIRST_TIMER, FIRST_TIME_CONTRIBUTOR, MANNEQUIN, MEMBER, NONE, OWNER) (title: author_association, example: OWNER)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td>The text of the comment. (example: We should probably include a check for null values here.)</td>
</tr>
<tr>
    <td><CopyableCode code="body_html" /></td>
    <td><code>string</code></td>
    <td> (example: "<p>comment body</p>")</td>
</tr>
<tr>
    <td><CopyableCode code="body_text" /></td>
    <td><code>string</code></td>
    <td> (example: "comment body")</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-14T16:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="diff_hunk" /></td>
    <td><code>string</code></td>
    <td>The diff of the line that the comment refers to. (example: @@ -16,33 +16,40 @@ public class Connection : IConnection...)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>HTML URL for the pull request review comment. (example: https://github.com/octocat/Hello-World/pull/1#discussion-diff-1)</td>
</tr>
<tr>
    <td><CopyableCode code="line" /></td>
    <td><code>integer</code></td>
    <td>The line of the blob to which the comment applies. The last line of the range for a multi-line comment</td>
</tr>
<tr>
    <td><CopyableCode code="original_line" /></td>
    <td><code>integer</code></td>
    <td>The line of the blob to which the comment applies. The last line of the range for a multi-line comment</td>
</tr>
<tr>
    <td><CopyableCode code="original_position" /></td>
    <td><code>integer</code></td>
    <td>The index of the original line in the diff to which the comment applies. This field is closing down; use `original_line` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="original_start_line" /></td>
    <td><code>integer</code></td>
    <td>The first line of the range for a multi-line comment.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The relative path of the file to which the comment applies. (example: config/database.yaml)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The line index in the diff to which the comment applies. This field is closing down; use `line` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the pull request that the review comment belongs to. (example: https://api.github.com/repos/octocat/Hello-World/pulls/1)</td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>object</code></td>
    <td> (title: Reaction Rollup)</td>
</tr>
<tr>
    <td><CopyableCode code="side" /></td>
    <td><code>string</code></td>
    <td>The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment (LEFT, RIGHT) (default: RIGHT)</td>
</tr>
<tr>
    <td><CopyableCode code="start_line" /></td>
    <td><code>integer</code></td>
    <td>The first line of the range for a multi-line comment.</td>
</tr>
<tr>
    <td><CopyableCode code="start_side" /></td>
    <td><code>string</code></td>
    <td>The side of the first line of the range for a multi-line comment. (LEFT, RIGHT) (default: RIGHT)</td>
</tr>
<tr>
    <td><CopyableCode code="subject_type" /></td>
    <td><code>string</code></td>
    <td>The level at which the comment is targeted, can be a diff line or a file. (line, file)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-14T16:00:49Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL for the pull request review comment (example: https://api.github.com/repos/octocat/Hello-World/pulls/comments/1)</td>
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
    <td><a href="#get_review_comment"><CopyableCode code="get_review_comment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a></td>
    <td></td>
    <td>Provides details for a specified review comment.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
</tr>
<tr>
    <td><a href="#list_review_comments"><CopyableCode code="list_review_comments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td><a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all review comments for a specified pull request. By default, review comments<br />are in ascending order by ID.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
</tr>
<tr>
    <td><a href="#list_review_comments_for_repo"><CopyableCode code="list_review_comments_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists review comments for all pull requests in a repository. By default,<br />review comments are in ascending order by ID.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
</tr>
<tr>
    <td><a href="#create_reply_for_review_comment"><CopyableCode code="create_reply_for_review_comment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
</tr>
<tr>
    <td><a href="#create_review_comment"><CopyableCode code="create_review_comment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a>, <a href="#parameter-body"><code>body</code></a>, <a href="#parameter-commit_id"><code>commit_id</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Creates a review comment on the diff of a specified pull request. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/rest/issues/comments#create-an-issue-comment)."<br /><br />If your comment applies to more than one line in the pull request diff, you should use the parameters `line`, `side`, and optionally `start_line` and `start_side` in your request.<br /><br />The `position` parameter is closing down. If you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
</tr>
<tr>
    <td><a href="#update_review_comment"><CopyableCode code="update_review_comment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Edits the content of a specified review comment.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.</td>
</tr>
<tr>
    <td><a href="#delete_review_comment"><CopyableCode code="delete_review_comment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a></td>
    <td></td>
    <td>Deletes a review comment.</td>
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
<tr id="parameter-comment_id">
    <td><CopyableCode code="comment_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>The unique identifier of the comment.</td>
</tr>
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
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort results. Ignored without `sort` parameter.</td>
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
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_review_comment"
    values={[
        { label: 'get_review_comment', value: 'get_review_comment' },
        { label: 'list_review_comments', value: 'list_review_comments' },
        { label: 'list_review_comments_for_repo', value: 'list_review_comments_for_repo' }
    ]}
>
<TabItem value="get_review_comment">

Provides details for a specified review comment.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
SELECT
id,
commit_id,
in_reply_to_id,
node_id,
original_commit_id,
pull_request_review_id,
_links,
author_association,
body,
body_html,
body_text,
created_at,
diff_hunk,
html_url,
line,
original_line,
original_position,
original_start_line,
path,
position,
pull_request_url,
reactions,
side,
start_line,
start_side,
subject_type,
updated_at,
url,
user
FROM github.pulls.comments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND comment_id = '{{ comment_id }}' -- required
;
```
</TabItem>
<TabItem value="list_review_comments">

Lists all review comments for a specified pull request. By default, review comments<br />are in ascending order by ID.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
SELECT
id,
commit_id,
in_reply_to_id,
node_id,
original_commit_id,
pull_request_review_id,
_links,
author_association,
body,
body_html,
body_text,
created_at,
diff_hunk,
html_url,
line,
original_line,
original_position,
original_start_line,
path,
position,
pull_request_url,
reactions,
side,
start_line,
start_side,
subject_type,
updated_at,
url,
user
FROM github.pulls.comments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND pull_number = '{{ pull_number }}' -- required
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND since = '{{ since }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_review_comments_for_repo">

Lists review comments for all pull requests in a repository. By default,<br />review comments are in ascending order by ID.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
SELECT
id,
commit_id,
in_reply_to_id,
node_id,
original_commit_id,
pull_request_review_id,
_links,
author_association,
body,
body_html,
body_text,
created_at,
diff_hunk,
html_url,
line,
original_line,
original_position,
original_start_line,
path,
position,
pull_request_url,
reactions,
side,
start_line,
start_side,
subject_type,
updated_at,
url,
user
FROM github.pulls.comments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND since = '{{ since }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_reply_for_review_comment"
    values={[
        { label: 'create_reply_for_review_comment', value: 'create_reply_for_review_comment' },
        { label: 'create_review_comment', value: 'create_review_comment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_reply_for_review_comment">

Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
INSERT INTO github.pulls.comments (
body,
owner,
repo,
pull_number,
comment_id
)
SELECT 
'{{ body }}' /* required */,
'{{ owner }}',
'{{ repo }}',
'{{ pull_number }}',
'{{ comment_id }}'
RETURNING
id,
commit_id,
in_reply_to_id,
node_id,
original_commit_id,
pull_request_review_id,
_links,
author_association,
body,
body_html,
body_text,
created_at,
diff_hunk,
html_url,
line,
original_line,
original_position,
original_start_line,
path,
position,
pull_request_url,
reactions,
side,
start_line,
start_side,
subject_type,
updated_at,
url,
user
;
```
</TabItem>
<TabItem value="create_review_comment">

Creates a review comment on the diff of a specified pull request. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/rest/issues/comments#create-an-issue-comment)."<br /><br />If your comment applies to more than one line in the pull request diff, you should use the parameters `line`, `side`, and optionally `start_line` and `start_side` in your request.<br /><br />The `position` parameter is closing down. If you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)"<br />and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
INSERT INTO github.pulls.comments (
body,
commit_id,
path,
position,
side,
line,
start_line,
start_side,
in_reply_to,
subject_type,
owner,
repo,
pull_number
)
SELECT 
'{{ body }}' /* required */,
'{{ commit_id }}' /* required */,
'{{ path }}' /* required */,
{{ position }},
'{{ side }}',
{{ line }},
{{ start_line }},
'{{ start_side }}',
{{ in_reply_to }},
'{{ subject_type }}',
'{{ owner }}',
'{{ repo }}',
'{{ pull_number }}'
RETURNING
id,
commit_id,
in_reply_to_id,
node_id,
original_commit_id,
pull_request_review_id,
_links,
author_association,
body,
body_html,
body_text,
created_at,
diff_hunk,
html_url,
line,
original_line,
original_position,
original_start_line,
path,
position,
pull_request_url,
reactions,
side,
start_line,
start_side,
subject_type,
updated_at,
url,
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: comments
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the comments resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the comments resource.
    - name: pull_number
      value: {{ pull_number }}
      description: Required parameter for the comments resource.
    - name: comment_id
      value: "{{ comment_id }}"
      description: Required parameter for the comments resource.
    - name: body
      value: "{{ body }}"
      description: |
        The text of the review comment.
    - name: commit_id
      value: "{{ commit_id }}"
      description: |
        The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the \`position\`.
    - name: path
      value: "{{ path }}"
      description: |
        The relative path to the file that necessitates a comment.
    - name: position
      value: {{ position }}
      description: |
        **This parameter is closing down. Use \`line\` instead**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
    - name: side
      value: "{{ side }}"
      description: |
        In a split diff view, the side of the diff that the pull request's changes appear on. Can be \`LEFT\` or \`RIGHT\`. Use \`LEFT\` for deletions that appear in red. Use \`RIGHT\` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see "[Diff view options](https://docs.github.com/articles/about-comparing-branches-in-pull-requests#diff-view-options)" in the GitHub Help documentation.
      valid_values: ['LEFT', 'RIGHT']
    - name: line
      value: {{ line }}
      description: |
        **Required unless using \`subject_type:file\`**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.
    - name: start_line
      value: {{ start_line }}
      description: |
        **Required when using multi-line comments unless using \`in_reply_to\`**. The \`start_line\` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see "[Commenting on a pull request](https://docs.github.com/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation.
    - name: start_side
      value: "{{ start_side }}"
      description: |
        **Required when using multi-line comments unless using \`in_reply_to\`**. The \`start_side\` is the starting side of the diff that the comment applies to. Can be \`LEFT\` or \`RIGHT\`. To learn more about multi-line comments, see "[Commenting on a pull request](https://docs.github.com/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation. See \`side\` in this table for additional context.
      valid_values: ['LEFT', 'RIGHT', 'side']
    - name: in_reply_to
      value: {{ in_reply_to }}
      description: |
        The ID of the review comment to reply to. To find the ID of a review comment with ["List review comments on a pull request"](#list-review-comments-on-a-pull-request). When specified, all parameters other than \`body\` in the request body are ignored.
    - name: subject_type
      value: "{{ subject_type }}"
      description: |
        The level at which the comment is targeted.
      valid_values: ['line', 'file']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_review_comment"
    values={[
        { label: 'update_review_comment', value: 'update_review_comment' }
    ]}
>
<TabItem value="update_review_comment">

Edits the content of a specified review comment.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github-commitcomment.raw+json`**: Returns the raw markdown body. Response will include `body`. This is the default if you do not pass any specific media type.<br />- **`application/vnd.github-commitcomment.text+json`**: Returns a text only representation of the markdown body. Response will include `body_text`.<br />- **`application/vnd.github-commitcomment.html+json`**: Returns HTML rendered from the body's markdown. Response will include `body_html`.<br />- **`application/vnd.github-commitcomment.full+json`**: Returns raw, text, and HTML representations. Response will include `body`, `body_text`, and `body_html`.

```sql
UPDATE github.pulls.comments
SET 
body = '{{ body }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND comment_id = '{{ comment_id }}' --required
AND body = '{{ body }}' --required
RETURNING
id,
commit_id,
in_reply_to_id,
node_id,
original_commit_id,
pull_request_review_id,
_links,
author_association,
body,
body_html,
body_text,
created_at,
diff_hunk,
html_url,
line,
original_line,
original_position,
original_start_line,
path,
position,
pull_request_url,
reactions,
side,
start_line,
start_side,
subject_type,
updated_at,
url,
user;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_review_comment"
    values={[
        { label: 'delete_review_comment', value: 'delete_review_comment' }
    ]}
>
<TabItem value="delete_review_comment">

Deletes a review comment.

```sql
DELETE FROM github.pulls.comments
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND comment_id = '{{ comment_id }}' --required
;
```
</TabItem>
</Tabs>
