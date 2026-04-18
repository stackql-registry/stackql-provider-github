--- 
title: starring
hide_title: false
hide_table_of_contents: false
keywords:
  - starring
  - activity
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

Creates, updates, deletes, gets or lists a <code>starring</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="starring" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.activity.starring" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repos_starred_by_user"
    values={[
        { label: 'list_repos_starred_by_user', value: 'list_repos_starred_by_user' },
        { label: 'list_repos_starred_by_authenticated_user', value: 'list_repos_starred_by_authenticated_user' }
    ]}
>
<TabItem value="list_repos_starred_by_user">

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
    <td><CopyableCode code="repo" /></td>
    <td><code>object</code></td>
    <td>A repository on GitHub. (title: Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="starred_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repos_starred_by_authenticated_user">

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
    <td>Unique identifier of the repository</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository. (example: Team Environment)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOlJlcG9zaXRvcnkxMjk2MjY5)</td>
</tr>
<tr>
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td> (example: octocat/Hello-World)</td>
</tr>
<tr>
    <td><CopyableCode code="allow_auto_merge" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow Auto-merge to be used on pull requests.</td>
</tr>
<tr>
    <td><CopyableCode code="allow_forking" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow forking this repo</td>
</tr>
<tr>
    <td><CopyableCode code="allow_merge_commit" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow merge commits for pull requests.</td>
</tr>
<tr>
    <td><CopyableCode code="allow_rebase_merge" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow rebase merges for pull requests.</td>
</tr>
<tr>
    <td><CopyableCode code="allow_squash_merge" /></td>
    <td><code>boolean</code></td>
    <td>Whether to allow squash merges for pull requests.</td>
</tr>
<tr>
    <td><CopyableCode code="allow_update_branch" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_access_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether anonymous git access is enabled for this repository</td>
</tr>
<tr>
    <td><CopyableCode code="archive_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/&#123;archive_format&#125;&#123;/ref&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="archived" /></td>
    <td><code>boolean</code></td>
    <td>Whether the repository is archived.</td>
</tr>
<tr>
    <td><CopyableCode code="assignees_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/assignees&#123;/user&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="blobs_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/git/blobs&#123;/sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="branches_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/branches&#123;/branch&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="clone_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/octocat/Hello-World.git)</td>
</tr>
<tr>
    <td><CopyableCode code="code_search_index_status" /></td>
    <td><code>object</code></td>
    <td>The status of the code search index for this repository</td>
</tr>
<tr>
    <td><CopyableCode code="collaborators_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/collaborators&#123;/collaborator&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="comments_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/comments&#123;/number&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="commits_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/commits&#123;/sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="compare_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/compare/&#123;base&#125;...&#123;head&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="contents_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/contents/&#123;+path&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="contributors_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/contributors)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:01:12Z)</td>
</tr>
<tr>
    <td><CopyableCode code="default_branch" /></td>
    <td><code>string</code></td>
    <td>The default branch of the repository. (example: master)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_branch_on_merge" /></td>
    <td><code>boolean</code></td>
    <td>Whether to delete head branches when pull requests are merged</td>
</tr>
<tr>
    <td><CopyableCode code="deployments_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/deployments)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: This your first repo!)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Returns whether or not this repository disabled.</td>
</tr>
<tr>
    <td><CopyableCode code="downloads_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/downloads)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/events)</td>
</tr>
<tr>
    <td><CopyableCode code="fork" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="forks" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="forks_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="forks_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/forks)</td>
</tr>
<tr>
    <td><CopyableCode code="git_commits_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/git/commits&#123;/sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="git_refs_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/git/refs&#123;/sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="git_tags_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/git/tags&#123;/sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="git_url" /></td>
    <td><code>string</code></td>
    <td> (example: git:github.com/octocat/Hello-World.git)</td>
</tr>
<tr>
    <td><CopyableCode code="has_discussions" /></td>
    <td><code>boolean</code></td>
    <td>Whether discussions are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="has_downloads" /></td>
    <td><code>boolean</code></td>
    <td>Whether downloads are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="has_issues" /></td>
    <td><code>boolean</code></td>
    <td>Whether issues are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="has_pages" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_projects" /></td>
    <td><code>boolean</code></td>
    <td>Whether projects are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="has_pull_requests" /></td>
    <td><code>boolean</code></td>
    <td>Whether pull requests are enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="has_wiki" /></td>
    <td><code>boolean</code></td>
    <td>Whether the wiki is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="homepage" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="hooks_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/hooks)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World)</td>
</tr>
<tr>
    <td><CopyableCode code="is_template" /></td>
    <td><code>boolean</code></td>
    <td>Whether this repository acts as a template that can be used to generate new repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_comment_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/issues/comments&#123;/number&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="issue_events_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/issues/events&#123;/number&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="issues_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/issues&#123;/number&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="keys_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/keys&#123;/key_id&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="labels_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/labels&#123;/name&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="languages_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/languages)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>object</code></td>
    <td>License Simple (title: License Simple)</td>
</tr>
<tr>
    <td><CopyableCode code="master_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_message" /></td>
    <td><code>string</code></td>
    <td>The default value for a merge commit message.  - `PR_TITLE` - default to the pull request's title. - `PR_BODY` - default to the pull request's body. - `BLANK` - default to a blank commit message. (PR_BODY, PR_TITLE, BLANK)</td>
</tr>
<tr>
    <td><CopyableCode code="merge_commit_title" /></td>
    <td><code>string</code></td>
    <td>The default value for a merge commit title.  - `PR_TITLE` - default to the pull request's title. - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name). (PR_TITLE, MERGE_MESSAGE)</td>
</tr>
<tr>
    <td><CopyableCode code="merges_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/merges)</td>
</tr>
<tr>
    <td><CopyableCode code="milestones_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/milestones&#123;/number&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="mirror_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: git:git.example.com/octocat/Hello-World)</td>
</tr>
<tr>
    <td><CopyableCode code="notifications_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/notifications&#123;?since,all,participating&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="open_issues" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="open_issues_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private" /></td>
    <td><code>boolean</code></td>
    <td>Whether the repository is private or public.</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_creation_policy" /></td>
    <td><code>string</code></td>
    <td>The policy controlling who can create pull requests: all or collaborators_only. (all, collaborators_only) (example: all)</td>
</tr>
<tr>
    <td><CopyableCode code="pulls_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/pulls&#123;/number&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="pushed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:06:43Z)</td>
</tr>
<tr>
    <td><CopyableCode code="releases_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/releases&#123;/id&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.</td>
</tr>
<tr>
    <td><CopyableCode code="squash_merge_commit_message" /></td>
    <td><code>string</code></td>
    <td>The default value for a squash merge commit message:  - `PR_BODY` - default to the pull request's body. - `COMMIT_MESSAGES` - default to the branch's commit messages. - `BLANK` - default to a blank commit message. (PR_BODY, COMMIT_MESSAGES, BLANK)</td>
</tr>
<tr>
    <td><CopyableCode code="squash_merge_commit_title" /></td>
    <td><code>string</code></td>
    <td>The default value for a squash merge commit title:  - `PR_TITLE` - default to the pull request's title. - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit). (PR_TITLE, COMMIT_OR_PR_TITLE)</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_url" /></td>
    <td><code>string</code></td>
    <td> (example: git@github.com:octocat/Hello-World.git)</td>
</tr>
<tr>
    <td><CopyableCode code="stargazers_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="stargazers_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/stargazers)</td>
</tr>
<tr>
    <td><CopyableCode code="starred_at" /></td>
    <td><code>string</code></td>
    <td> (example: "2020-07-09T00:17:42Z")</td>
</tr>
<tr>
    <td><CopyableCode code="statuses_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/statuses/&#123;sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribers_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/subscribers)</td>
</tr>
<tr>
    <td><CopyableCode code="subscription_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/subscription)</td>
</tr>
<tr>
    <td><CopyableCode code="svn_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://svn.github.com/octocat/Hello-World)</td>
</tr>
<tr>
    <td><CopyableCode code="tags_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/tags)</td>
</tr>
<tr>
    <td><CopyableCode code="teams_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/teams)</td>
</tr>
<tr>
    <td><CopyableCode code="temp_clone_token" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="topics" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="trees_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/git/trees&#123;/sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:14:43Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World)</td>
</tr>
<tr>
    <td><CopyableCode code="use_squash_pr_title_as_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether a squash merge commit can use the pull request title as default. **This property is closing down. Please use `squash_merge_commit_title` instead.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The repository visibility: public, private, or internal. (default: public)</td>
</tr>
<tr>
    <td><CopyableCode code="watchers" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="watchers_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="web_commit_signoff_required" /></td>
    <td><code>boolean</code></td>
    <td>Whether to require contributors to sign off on web-based commits</td>
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
    <td><a href="#list_repos_starred_by_user"><CopyableCode code="list_repos_starred_by_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists repositories a user has starred.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.star+json`**: Includes a timestamp of when the star was created.</td>
</tr>
<tr>
    <td><a href="#list_repos_starred_by_authenticated_user"><CopyableCode code="list_repos_starred_by_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists repositories the authenticated user has starred.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.star+json`**: Includes a timestamp of when the star was created.</td>
</tr>
<tr>
    <td><a href="#check_repo_is_starred_by_authenticated_user"><CopyableCode code="check_repo_is_starred_by_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Whether the authenticated user has starred the repository.</td>
</tr>
<tr>
    <td><a href="#star_repo_for_authenticated_user"><CopyableCode code="star_repo_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."</td>
</tr>
<tr>
    <td><a href="#unstar_repo_for_authenticated_user"><CopyableCode code="unstar_repo_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Unstar a repository that the authenticated user has previously starred.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
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
    <td>The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_repos_starred_by_user"
    values={[
        { label: 'list_repos_starred_by_user', value: 'list_repos_starred_by_user' },
        { label: 'list_repos_starred_by_authenticated_user', value: 'list_repos_starred_by_authenticated_user' }
    ]}
>
<TabItem value="list_repos_starred_by_user">

Lists repositories a user has starred.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.star+json`**: Includes a timestamp of when the star was created.

```sql
SELECT
repo,
starred_at
FROM github.activity.starring
WHERE username = '{{ username }}' -- required
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_repos_starred_by_authenticated_user">

Lists repositories the authenticated user has starred.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.star+json`**: Includes a timestamp of when the star was created.

```sql
SELECT
id,
name,
node_id,
full_name,
allow_auto_merge,
allow_forking,
allow_merge_commit,
allow_rebase_merge,
allow_squash_merge,
allow_update_branch,
anonymous_access_enabled,
archive_url,
archived,
assignees_url,
blobs_url,
branches_url,
clone_url,
code_search_index_status,
collaborators_url,
comments_url,
commits_url,
compare_url,
contents_url,
contributors_url,
created_at,
default_branch,
delete_branch_on_merge,
deployments_url,
description,
disabled,
downloads_url,
events_url,
fork,
forks,
forks_count,
forks_url,
git_commits_url,
git_refs_url,
git_tags_url,
git_url,
has_discussions,
has_downloads,
has_issues,
has_pages,
has_projects,
has_pull_requests,
has_wiki,
homepage,
hooks_url,
html_url,
is_template,
issue_comment_url,
issue_events_url,
issues_url,
keys_url,
labels_url,
language,
languages_url,
license,
master_branch,
merge_commit_message,
merge_commit_title,
merges_url,
milestones_url,
mirror_url,
notifications_url,
open_issues,
open_issues_count,
owner,
permissions,
private,
pull_request_creation_policy,
pulls_url,
pushed_at,
releases_url,
size,
squash_merge_commit_message,
squash_merge_commit_title,
ssh_url,
stargazers_count,
stargazers_url,
starred_at,
statuses_url,
subscribers_url,
subscription_url,
svn_url,
tags_url,
teams_url,
temp_clone_token,
topics,
trees_url,
updated_at,
url,
use_squash_pr_title_as_default,
visibility,
watchers,
watchers_count,
web_commit_signoff_required
FROM github.activity.starring
WHERE sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_repo_is_starred_by_authenticated_user"
    values={[
        { label: 'check_repo_is_starred_by_authenticated_user', value: 'check_repo_is_starred_by_authenticated_user' },
        { label: 'star_repo_for_authenticated_user', value: 'star_repo_for_authenticated_user' },
        { label: 'unstar_repo_for_authenticated_user', value: 'unstar_repo_for_authenticated_user' }
    ]}
>
<TabItem value="check_repo_is_starred_by_authenticated_user">

Whether the authenticated user has starred the repository.

```sql
EXEC github.activity.starring.check_repo_is_starred_by_authenticated_user 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required
;
```
</TabItem>
<TabItem value="star_repo_for_authenticated_user">

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP method](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#http-method)."

```sql
EXEC github.activity.starring.star_repo_for_authenticated_user 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required
;
```
</TabItem>
<TabItem value="unstar_repo_for_authenticated_user">

Unstar a repository that the authenticated user has previously starred.

```sql
EXEC github.activity.starring.unstar_repo_for_authenticated_user 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required
;
```
</TabItem>
</Tabs>
