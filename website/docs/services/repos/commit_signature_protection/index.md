--- 
title: commit_signature_protection
hide_title: false
hide_table_of_contents: false
keywords:
  - commit_signature_protection
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

Creates, updates, deletes, gets or lists a <code>commit_signature_protection</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commit_signature_protection" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.commit_signature_protection" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_commit_signature_protection"
    values={[
        { label: 'get_commit_signature_protection', value: 'get_commit_signature_protection' }
    ]}
>
<TabItem value="get_commit_signature_protection">

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/branches/master/protection/enforce_admins)</td>
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
    <td><a href="#get_commit_signature_protection"><CopyableCode code="get_commit_signature_protection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/articles/signing-commits-with-gpg) in GitHub Help.<br /><br />&gt; [!NOTE]<br />&gt; You must enable branch protection to require signed commits.</td>
</tr>
<tr>
    <td><a href="#create_commit_signature_protection"><CopyableCode code="create_commit_signature_protection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.</td>
</tr>
<tr>
    <td><a href="#delete_commit_signature_protection"><CopyableCode code="delete_commit_signature_protection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-branch"><code>branch</code></a></td>
    <td></td>
    <td>Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.</td>
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
    defaultValue="get_commit_signature_protection"
    values={[
        { label: 'get_commit_signature_protection', value: 'get_commit_signature_protection' }
    ]}
>
<TabItem value="get_commit_signature_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/articles/signing-commits-with-gpg) in GitHub Help.<br /><br />&gt; [!NOTE]<br />&gt; You must enable branch protection to require signed commits.

```sql
SELECT
enabled,
url
FROM github.repos.commit_signature_protection
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND branch = '{{ branch }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_commit_signature_protection"
    values={[
        { label: 'create_commit_signature_protection', value: 'create_commit_signature_protection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_commit_signature_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.

```sql
INSERT INTO github.repos.commit_signature_protection (
owner,
repo,
branch
)
SELECT 
'{{ owner }}',
'{{ repo }}',
'{{ branch }}'
RETURNING
enabled,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: commit_signature_protection
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the commit_signature_protection resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the commit_signature_protection resource.
    - name: branch
      value: "{{ branch }}"
      description: Required parameter for the commit_signature_protection resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_commit_signature_protection"
    values={[
        { label: 'delete_commit_signature_protection', value: 'delete_commit_signature_protection' }
    ]}
>
<TabItem value="delete_commit_signature_protection">

Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.<br /><br />When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.

```sql
DELETE FROM github.repos.commit_signature_protection
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND branch = '{{ branch }}' --required
;
```
</TabItem>
</Tabs>
