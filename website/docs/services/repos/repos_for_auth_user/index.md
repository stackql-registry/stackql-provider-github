--- 
title: repos_for_auth_user
hide_title: false
hide_table_of_contents: false
keywords:
  - repos_for_auth_user
  - repos
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

Creates, updates, deletes, gets or lists a <code>repos_for_auth_user</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repos_for_auth_user" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.repos_for_auth_user" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_for_authenticated_user"
    values={[
        { label: 'list_for_authenticated_user', value: 'list_for_authenticated_user' }
    ]}
>
<TabItem value="list_for_authenticated_user">

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
    <td><a href="#list_for_authenticated_user"><CopyableCode code="list_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a>, <a href="#parameter-affiliation"><code>affiliation</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-before"><code>before</code></a></td>
    <td>Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.<br /><br />The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.</td>
</tr>
<tr>
    <td><a href="#create_for_authenticated_user"><CopyableCode code="create_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a new repository for the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `public_repo` or `repo` scope to create a public repository, and `repo` scope to create a private repository.</td>
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
<tr id="parameter-affiliation">
    <td><CopyableCode code="affiliation" /></td>
    <td><code>string</code></td>
    <td>Comma-separated list of values. Can include:    * `owner`: Repositories that are owned by the authenticated user.    * `collaborator`: Repositories that the user has been added to as a collaborator.    * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show repositories updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.</td>
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
    <td>Only show repositories updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property to sort the results by.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.</td>
</tr>
<tr id="parameter-visibility">
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>Limit results to repositories with the specified visibility.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_for_authenticated_user"
    values={[
        { label: 'list_for_authenticated_user', value: 'list_for_authenticated_user' }
    ]}
>
<TabItem value="list_for_authenticated_user">

Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.<br /><br />The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

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
FROM github.repos.repos_for_auth_user
WHERE visibility = '{{ visibility }}'
AND affiliation = '{{ affiliation }}'
AND type = '{{ type }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND since = '{{ since }}'
AND before = '{{ before }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_for_authenticated_user"
    values={[
        { label: 'create_for_authenticated_user', value: 'create_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_for_authenticated_user">

Creates a new repository for the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `public_repo` or `repo` scope to create a public repository, and `repo` scope to create a private repository.

```sql
INSERT INTO github.repos.repos_for_auth_user (
name,
description,
homepage,
private,
has_issues,
has_projects,
has_wiki,
has_discussions,
team_id,
auto_init,
gitignore_template,
license_template,
allow_squash_merge,
allow_merge_commit,
allow_rebase_merge,
allow_auto_merge,
delete_branch_on_merge,
squash_merge_commit_title,
squash_merge_commit_message,
merge_commit_title,
merge_commit_message,
has_downloads,
is_template
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ homepage }}',
{{ private }},
{{ has_issues }},
{{ has_projects }},
{{ has_wiki }},
{{ has_discussions }},
{{ team_id }},
{{ auto_init }},
'{{ gitignore_template }}',
'{{ license_template }}',
{{ allow_squash_merge }},
{{ allow_merge_commit }},
{{ allow_rebase_merge }},
{{ allow_auto_merge }},
{{ delete_branch_on_merge }},
'{{ squash_merge_commit_title }}',
'{{ squash_merge_commit_message }}',
'{{ merge_commit_title }}',
'{{ merge_commit_message }}',
{{ has_downloads }},
{{ is_template }}
RETURNING
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
code_of_conduct,
collaborators_url,
comments_url,
commits_url,
compare_url,
contents_url,
contributors_url,
created_at,
custom_properties,
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
network_count,
notifications_url,
open_issues,
open_issues_count,
organization,
owner,
parent,
permissions,
private,
pull_request_creation_policy,
pulls_url,
pushed_at,
releases_url,
security_and_analysis,
size,
source,
squash_merge_commit_message,
squash_merge_commit_title,
ssh_url,
stargazers_count,
stargazers_url,
statuses_url,
subscribers_count,
subscribers_url,
subscription_url,
svn_url,
tags_url,
teams_url,
temp_clone_token,
template_repository,
topics,
trees_url,
updated_at,
url,
use_squash_pr_title_as_default,
visibility,
watchers,
watchers_count,
web_commit_signoff_required
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repos_for_auth_user
  props:
    - name: name
      value: "{{ name }}"
      description: |
        The name of the repository.
    - name: description
      value: "{{ description }}"
      description: |
        A short description of the repository.
    - name: homepage
      value: "{{ homepage }}"
      description: |
        A URL with more information about the repository.
    - name: private
      value: {{ private }}
      description: |
        Whether the repository is private.
      default: false
    - name: has_issues
      value: {{ has_issues }}
      description: |
        Whether issues are enabled.
      default: true
    - name: has_projects
      value: {{ has_projects }}
      description: |
        Whether projects are enabled.
      default: true
    - name: has_wiki
      value: {{ has_wiki }}
      description: |
        Whether the wiki is enabled.
      default: true
    - name: has_discussions
      value: {{ has_discussions }}
      description: |
        Whether discussions are enabled.
      default: false
    - name: team_id
      value: {{ team_id }}
      description: |
        The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
    - name: auto_init
      value: {{ auto_init }}
      description: |
        Whether the repository is initialized with a minimal README.
      default: false
    - name: gitignore_template
      value: "{{ gitignore_template }}"
      description: |
        The desired language or platform to apply to the .gitignore.
    - name: license_template
      value: "{{ license_template }}"
      description: |
        The license keyword of the open source license for this repository.
    - name: allow_squash_merge
      value: {{ allow_squash_merge }}
      description: |
        Whether to allow squash merges for pull requests.
      default: true
    - name: allow_merge_commit
      value: {{ allow_merge_commit }}
      description: |
        Whether to allow merge commits for pull requests.
      default: true
    - name: allow_rebase_merge
      value: {{ allow_rebase_merge }}
      description: |
        Whether to allow rebase merges for pull requests.
      default: true
    - name: allow_auto_merge
      value: {{ allow_auto_merge }}
      description: |
        Whether to allow Auto-merge to be used on pull requests.
      default: false
    - name: delete_branch_on_merge
      value: {{ delete_branch_on_merge }}
      description: |
        Whether to delete head branches when pull requests are merged
      default: false
    - name: squash_merge_commit_title
      value: "{{ squash_merge_commit_title }}"
      description: |
        Required when using \`squash_merge_commit_message\`.
        The default value for a squash merge commit title:
        - \`PR_TITLE\` - default to the pull request's title.
        - \`COMMIT_OR_PR_TITLE\` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
      valid_values: ['PR_TITLE', 'COMMIT_OR_PR_TITLE']
    - name: squash_merge_commit_message
      value: "{{ squash_merge_commit_message }}"
      description: |
        The default value for a squash merge commit message:
        - \`PR_BODY\` - default to the pull request's body.
        - \`COMMIT_MESSAGES\` - default to the branch's commit messages.
        - \`BLANK\` - default to a blank commit message.
      valid_values: ['PR_BODY', 'COMMIT_MESSAGES', 'BLANK']
    - name: merge_commit_title
      value: "{{ merge_commit_title }}"
      description: |
        Required when using \`merge_commit_message\`.
        The default value for a merge commit title.
        - \`PR_TITLE\` - default to the pull request's title.
        - \`MERGE_MESSAGE\` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
      valid_values: ['PR_TITLE', 'MERGE_MESSAGE']
    - name: merge_commit_message
      value: "{{ merge_commit_message }}"
      description: |
        The default value for a merge commit message.
        - \`PR_TITLE\` - default to the pull request's title.
        - \`PR_BODY\` - default to the pull request's body.
        - \`BLANK\` - default to a blank commit message.
      valid_values: ['PR_BODY', 'PR_TITLE', 'BLANK']
    - name: has_downloads
      value: {{ has_downloads }}
      description: |
        Whether downloads are enabled.
      default: true
    - name: is_template
      value: {{ is_template }}
      description: |
        Whether this repository acts as a template that can be used to generate new repositories.
      default: false
`}</CodeBlock>

</TabItem>
</Tabs>
