--- 
title: branch
hide_title: false
hide_table_of_contents: false
keywords:
  - branch
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

Creates, updates, deletes, gets or lists a <code>branch</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="branch" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.branch" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_branch"
    values={[
        { label: 'get_branch', value: 'get_branch' }
    ]}
>
<TabItem value="get_branch">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit" /></td>
    <td><code>object</code></td>
    <td>Commit (title: Commit)</td>
</tr>
<tr>
    <td><CopyableCode code="pattern" /></td>
    <td><code>string</code></td>
    <td> (example: "mas*")</td>
</tr>
<tr>
    <td><CopyableCode code="protected" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="protection" /></td>
    <td><code>object</code></td>
    <td>Branch Protection (title: Branch Protection)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="required_approving_review_count" /></td>
    <td><code>integer</code></td>
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
    <td><a href="#get_branch"><CopyableCode code="get_branch" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#rename_branch"><CopyableCode code="rename_branch" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-new_name"><code>new_name</code></a></td>
    <td></td>
    <td>Renames a branch in a repository.<br /><br />&gt; [!NOTE]<br />&gt; Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/github/administering-a-repository/renaming-a-branch)".<br /><br />The authenticated user must have push access to the branch. If the branch is the default branch, the authenticated user must also have admin or owner permissions.<br /><br />In order to rename the default branch, fine-grained access tokens also need the `administration:write` repository permission.</td>
</tr>
<tr>
    <td><a href="#merge_upstream"><CopyableCode code="merge_upstream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Sync a branch of a forked repository to keep it up-to-date with the upstream repository.</td>
</tr>
<tr>
    <td><a href="#merge"><CopyableCode code="merge" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-base"><code>base</code></a>, <a href="#parameter-head"><code>head</code></a></td>
    <td></td>
    <td></td>
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
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_branch"
    values={[
        { label: 'get_branch', value: 'get_branch' }
    ]}
>
<TabItem value="get_branch">

Response

```sql
SELECT
name,
_links,
commit,
pattern,
protected,
protection,
protection_url,
required_approving_review_count
FROM github.repos.branch
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND branch = '{{ branch }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rename_branch"
    values={[
        { label: 'rename_branch', value: 'rename_branch' },
        { label: 'merge_upstream', value: 'merge_upstream' },
        { label: 'merge', value: 'merge' }
    ]}
>
<TabItem value="rename_branch">

Renames a branch in a repository.<br /><br />&gt; [!NOTE]<br />&gt; Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/github/administering-a-repository/renaming-a-branch)".<br /><br />The authenticated user must have push access to the branch. If the branch is the default branch, the authenticated user must also have admin or owner permissions.<br /><br />In order to rename the default branch, fine-grained access tokens also need the `administration:write` repository permission.

```sql
EXEC github.repos.branch.rename_branch 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@branch='{{ branch }}' --required 
@@json=
'{
"new_name": "{{ new_name }}"
}'
;
```
</TabItem>
<TabItem value="merge_upstream">

Sync a branch of a forked repository to keep it up-to-date with the upstream repository.

```sql
EXEC github.repos.branch.merge_upstream 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required 
@@json=
'{
"branch": "{{ branch }}"
}'
;
```
</TabItem>
<TabItem value="merge">

Successful Response (The resulting merge commit)

```sql
EXEC github.repos.branch.merge 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required 
@@json=
'{
"base": "{{ base }}", 
"head": "{{ head }}", 
"commit_message": "{{ commit_message }}"
}'
;
```
</TabItem>
</Tabs>
