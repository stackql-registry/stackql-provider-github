--- 
title: security_advisory_forks
hide_title: false
hide_table_of_contents: false
keywords:
  - security_advisory_forks
  - security_advisories
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

Creates, updates, deletes, gets or lists a <code>security_advisory_forks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_advisory_forks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.security_advisories.security_advisory_forks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_fork"><CopyableCode code="create_fork" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ghsa_id"><code>ghsa_id</code></a></td>
    <td></td>
    <td>Create a temporary private fork to collaborate on fixing a security vulnerability in your repository.<br /><br />&gt; [!NOTE]<br />&gt; Forking a repository happens asynchronously. You may have to wait up to 5 minutes before you can access the fork.</td>
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
<tr id="parameter-ghsa_id">
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>The GHSA (GitHub Security Advisory) identifier of the advisory.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_fork"
    values={[
        { label: 'create_fork', value: 'create_fork' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fork">

Create a temporary private fork to collaborate on fixing a security vulnerability in your repository.<br /><br />&gt; [!NOTE]<br />&gt; Forking a repository happens asynchronously. You may have to wait up to 5 minutes before you can access the fork.

```sql
INSERT INTO github.security_advisories.security_advisory_forks (
owner,
repo,
ghsa_id
)
SELECT 
'{{ owner }}',
'{{ repo }}',
'{{ ghsa_id }}'
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
- name: security_advisory_forks
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the security_advisory_forks resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the security_advisory_forks resource.
    - name: ghsa_id
      value: "{{ ghsa_id }}"
      description: Required parameter for the security_advisory_forks resource.
`}</CodeBlock>

</TabItem>
</Tabs>
