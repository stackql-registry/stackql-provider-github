--- 
title: repos
hide_title: false
hide_table_of_contents: false
keywords:
  - repos
  - teams
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

Creates, updates, deletes, gets or lists a <code>repos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.teams.repos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_repos_in_org"
    values={[
        { label: 'list_repos_in_org', value: 'list_repos_in_org' },
        { label: 'list_repos_legacy', value: 'list_repos_legacy' }
    ]}
>
<TabItem value="list_repos_in_org">

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
    <td> (example: Hello-World)</td>
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
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td> (example: admin)</td>
</tr>
<tr>
    <td><CopyableCode code="allow_forking" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="archive_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/&#123;archive_format&#125;&#123;/ref&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="archived" /></td>
    <td><code>boolean</code></td>
    <td></td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="code_of_conduct" /></td>
    <td><code>object</code></td>
    <td>Code Of Conduct (title: Code Of Conduct)</td>
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
    <td><CopyableCode code="custom_properties" /></td>
    <td><code>object</code></td>
    <td>The custom properties that were defined for the repository. The keys are the custom property names, and the values are the corresponding custom property values.</td>
</tr>
<tr>
    <td><CopyableCode code="default_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="delete_branch_on_merge" /></td>
    <td><code>boolean</code></td>
    <td></td>
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
    <td></td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_discussions" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_downloads" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_issues" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_pages" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_projects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_pull_requests" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_wiki" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="homepage" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td></td>
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
    <td></td>
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
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="network_count" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_creation_policy" /></td>
    <td><code>string</code></td>
    <td>The policy controlling who can create pull requests: all or collaborators_only. (all, collaborators_only)</td>
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
    <td><CopyableCode code="security_and_analysis" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_url" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><CopyableCode code="statuses_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/statuses/&#123;sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribers_count" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><code>string</code></td>
    <td></td>
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
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repos_legacy">

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
    <td> (example: Hello-World)</td>
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
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td> (example: admin)</td>
</tr>
<tr>
    <td><CopyableCode code="allow_forking" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="archive_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/&#123;archive_format&#125;&#123;/ref&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="archived" /></td>
    <td><code>boolean</code></td>
    <td></td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="code_of_conduct" /></td>
    <td><code>object</code></td>
    <td>Code Of Conduct (title: Code Of Conduct)</td>
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
    <td><CopyableCode code="custom_properties" /></td>
    <td><code>object</code></td>
    <td>The custom properties that were defined for the repository. The keys are the custom property names, and the values are the corresponding custom property values.</td>
</tr>
<tr>
    <td><CopyableCode code="default_branch" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="delete_branch_on_merge" /></td>
    <td><code>boolean</code></td>
    <td></td>
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
    <td></td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_discussions" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_downloads" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_issues" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_pages" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_projects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_pull_requests" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_wiki" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="homepage" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td></td>
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
    <td></td>
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
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="network_count" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_creation_policy" /></td>
    <td><code>string</code></td>
    <td>The policy controlling who can create pull requests: all or collaborators_only. (all, collaborators_only)</td>
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
    <td><CopyableCode code="security_and_analysis" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.</td>
</tr>
<tr>
    <td><CopyableCode code="ssh_url" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><CopyableCode code="statuses_url" /></td>
    <td><code>string</code></td>
    <td> (example: http://api.github.com/repos/octocat/Hello-World/statuses/&#123;sha&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscribers_count" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><code>string</code></td>
    <td></td>
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
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#list_repos_in_org"><CopyableCode code="list_repos_in_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists a team's repositories visible to the authenticated user.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/repos`.</td>
</tr>
<tr>
    <td><a href="#list_repos_legacy"><CopyableCode code="list_repos_legacy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/rest/teams/teams#list-team-repositories) endpoint.</td>
</tr>
<tr>
    <td><a href="#remove_repo_in_org"><CopyableCode code="remove_repo_in_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-team_slug"><code>team_slug</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/repos/&#123;owner&#125;/&#123;repo&#125;`.</td>
</tr>
<tr>
    <td><a href="#remove_repo_legacy"><CopyableCode code="remove_repo_legacy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-team_id"><code>team_id</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/rest/teams/teams#remove-a-repository-from-a-team) endpoint.<br /><br />If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
<tr id="parameter-team_id">
    <td><CopyableCode code="team_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the team.</td>
</tr>
<tr id="parameter-team_slug">
    <td><CopyableCode code="team_slug" /></td>
    <td><code>string</code></td>
    <td>The slug of the team name.</td>
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
    defaultValue="list_repos_in_org"
    values={[
        { label: 'list_repos_in_org', value: 'list_repos_in_org' },
        { label: 'list_repos_legacy', value: 'list_repos_legacy' }
    ]}
>
<TabItem value="list_repos_in_org">

Lists a team's repositories visible to the authenticated user.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/repos`.

```sql
SELECT
id,
name,
node_id,
full_name,
role_name,
allow_forking,
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
merges_url,
milestones_url,
mirror_url,
network_count,
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
security_and_analysis,
size,
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
topics,
trees_url,
updated_at,
url,
visibility,
watchers,
watchers_count,
web_commit_signoff_required
FROM github.teams.repos
WHERE org = '{{ org }}' -- required
AND team_slug = '{{ team_slug }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_repos_legacy">

&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/rest/teams/teams#list-team-repositories) endpoint.

```sql
SELECT
id,
name,
node_id,
full_name,
role_name,
allow_forking,
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
merges_url,
milestones_url,
mirror_url,
network_count,
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
security_and_analysis,
size,
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
topics,
trees_url,
updated_at,
url,
visibility,
watchers,
watchers_count,
web_commit_signoff_required
FROM github.teams.repos
WHERE team_id = '{{ team_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_repo_in_org"
    values={[
        { label: 'remove_repo_in_org', value: 'remove_repo_in_org' },
        { label: 'remove_repo_legacy', value: 'remove_repo_legacy' }
    ]}
>
<TabItem value="remove_repo_in_org">

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.<br /><br />&gt; [!NOTE]<br />&gt; You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/&#123;org_id&#125;/team/&#123;team_id&#125;/repos/&#123;owner&#125;/&#123;repo&#125;`.

```sql
DELETE FROM github.teams.repos
WHERE org = '{{ org }}' --required
AND team_slug = '{{ team_slug }}' --required
AND owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
;
```
</TabItem>
<TabItem value="remove_repo_legacy">

&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** This endpoint route is closing down and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/rest/teams/teams#remove-a-repository-from-a-team) endpoint.<br /><br />If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.

```sql
DELETE FROM github.teams.repos
WHERE team_id = '{{ team_id }}' --required
AND owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
;
```
</TabItem>
</Tabs>
