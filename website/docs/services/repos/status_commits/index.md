--- 
title: status_commits
hide_title: false
hide_table_of_contents: false
keywords:
  - status_commits
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

Creates, updates, deletes, gets or lists a <code>status_commits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="status_commits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.status_commits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_commit_statuses_for_ref"
    values={[
        { label: 'list_commit_statuses_for_ref', value: 'list_commit_statuses_for_ref' }
    ]}
>
<TabItem value="list_commit_statuses_for_ref">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="context" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="target_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
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
    <td><a href="#list_commit_statuses_for_ref"><CopyableCode code="list_commit_statuses_for_ref" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ref"><code>ref</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.<br /><br />This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.</td>
</tr>
<tr>
    <td><a href="#create_commit_status"><CopyableCode code="create_commit_status" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-sha"><code>sha</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td></td>
    <td>Users with push access in a repository can create commit statuses for a given SHA.<br /><br />Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.</td>
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
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The commit reference. Can be a commit SHA, branch name (`heads/BRANCH_NAME`), or tag name (`tags/TAG_NAME`). For more information, see "[Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)" in the Git documentation.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-sha">
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td></td>
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
    defaultValue="list_commit_statuses_for_ref"
    values={[
        { label: 'list_commit_statuses_for_ref', value: 'list_commit_statuses_for_ref' }
    ]}
>
<TabItem value="list_commit_statuses_for_ref">

Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.<br /><br />This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.

```sql
SELECT
id,
node_id,
avatar_url,
context,
created_at,
creator,
description,
state,
target_url,
updated_at,
url
FROM github.repos.status_commits
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ref = '{{ ref }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_commit_status"
    values={[
        { label: 'create_commit_status', value: 'create_commit_status' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_commit_status">

Users with push access in a repository can create commit statuses for a given SHA.<br /><br />Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.

```sql
INSERT INTO github.repos.status_commits (
state,
target_url,
description,
context,
owner,
repo,
sha
)
SELECT 
'{{ state }}' /* required */,
'{{ target_url }}',
'{{ description }}',
'{{ context }}',
'{{ owner }}',
'{{ repo }}',
'{{ sha }}'
RETURNING
id,
node_id,
avatar_url,
context,
created_at,
creator,
description,
state,
target_url,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: status_commits
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the status_commits resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the status_commits resource.
    - name: sha
      value: "{{ sha }}"
      description: Required parameter for the status_commits resource.
    - name: state
      value: "{{ state }}"
      description: |
        The state of the status.
      valid_values: ['error', 'failure', 'pending', 'success']
    - name: target_url
      value: "{{ target_url }}"
      description: |
        The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.
        For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:
        \`http://ci.example.com/user/repo/build/sha\`
    - name: description
      value: "{{ description }}"
      description: |
        A short description of the status.
    - name: context
      value: "{{ context }}"
      description: |
        A string label to differentiate this status from the status of other systems. This field is case-insensitive.
      default: default
`}</CodeBlock>

</TabItem>
</Tabs>
