--- 
title: commits
hide_title: false
hide_table_of_contents: false
keywords:
  - commits
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

Creates, updates, deletes, gets or lists a <code>commits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.commits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_commit"
    values={[
        { label: 'get_commit', value: 'get_commit' },
        { label: 'compare_commits', value: 'compare_commits' },
        { label: 'list_commits', value: 'list_commits' }
    ]}
>
<TabItem value="get_commit">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="comments_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments)</td>
</tr>
<tr>
    <td><CopyableCode code="commit" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="committer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td> (example: 6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="compare_commits">

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
    <td><CopyableCode code="ahead_by" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="base_commit" /></td>
    <td><code>object</code></td>
    <td>Commit (title: Commit)</td>
</tr>
<tr>
    <td><CopyableCode code="behind_by" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commits" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="diff_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/compare/master...topic.diff)</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/compare/master...topic)</td>
</tr>
<tr>
    <td><CopyableCode code="merge_base_commit" /></td>
    <td><code>object</code></td>
    <td>Commit (title: Commit)</td>
</tr>
<tr>
    <td><CopyableCode code="patch_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/compare/master...topic.patch)</td>
</tr>
<tr>
    <td><CopyableCode code="permalink_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/compare/octocat:bbcd538c8e72b8c175046e27cc8f907076331401...octocat:0328041d1152db8ae77652d1618a02e57f745f17)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (diverged, ahead, behind, identical) (example: ahead)</td>
</tr>
<tr>
    <td><CopyableCode code="total_commits" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/compare/master...topic)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_commits">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="comments_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments)</td>
</tr>
<tr>
    <td><CopyableCode code="commit" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="committer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td> (example: 6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
</tr>
<tr>
    <td><CopyableCode code="stats" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e)</td>
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
    <td><a href="#get_commit"><CopyableCode code="get_commit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ref"><code>ref</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.<br /><br />&gt; [!NOTE]<br />&gt; If there are more than 300 files in the commit diff and the default JSON media type is requested, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." Pagination query parameters are not supported for these media types.<br /><br />- **`application/vnd.github.diff`**: Returns the diff of the commit. Larger diffs may time out and return a 5xx status code.<br />- **`application/vnd.github.patch`**: Returns the patch of the commit. Diffs with binary data will have no `patch` property. Larger diffs may time out and return a 5xx status code.<br />- **`application/vnd.github.sha`**: Returns the commit's SHA-1 hash. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |</td>
</tr>
<tr>
    <td><a href="#compare_commits"><CopyableCode code="compare_commits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-basehead"><code>basehead</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Compares two commits against one another. You can compare refs (branches or tags) and commit SHAs in the same repository, or you can compare refs and commit SHAs that exist in different repositories within the same repository network, including fork branches. For more information about how to view a repository's network, see "[Understanding connections between repositories](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)."<br /><br />This endpoint is equivalent to running the `git log BASE..HEAD` command, but it returns commits in a different order. The `git log BASE..HEAD` command returns commits in reverse chronological order, whereas the API returns commits in chronological order.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.diff`**: Returns the diff of the commit.<br />- **`application/vnd.github.patch`**: Returns the patch of the commit. Diffs with binary data will have no `patch` property.<br /><br />The API response includes details about the files that were changed between the two commits. This includes the status of the change (if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.<br /><br />When calling this endpoint without any paging parameter (`per_page` or `page`), the returned list is limited to 250 commits, and the last commit in the list is the most recent of the entire comparison.<br /><br />**Working with large comparisons**<br /><br />To process a response with a large number of commits, use a query parameter (`per_page` or `page`) to paginate the results. When using pagination:<br /><br />- The list of changed files is only shown on the first page of results, and it includes up to 300 changed files for the entire comparison.<br />- The results are returned in chronological order, but the last commit in the returned list may not be the most recent one in the entire set if there are more pages of results.<br /><br />For more information on working with pagination, see "[Using pagination in the REST API](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api)."<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The `verification` object includes the following fields:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |</td>
</tr>
<tr>
    <td><a href="#list_commits"><CopyableCode code="list_commits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-sha"><code>sha</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-author"><code>author</code></a>, <a href="#parameter-committer"><code>committer</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-until"><code>until</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |</td>
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
<tr id="parameter-basehead">
    <td><CopyableCode code="basehead" /></td>
    <td><code>string</code></td>
    <td>The base branch and head branch to compare. This parameter expects the format `BASE...HEAD`. Both must be branch names in `repo`. To compare with a branch that exists in a different repository in the same network as `repo`, the `basehead` parameter expects the format `USERNAME:BASE...USERNAME:HEAD`.</td>
</tr>
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
<tr id="parameter-author">
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>GitHub username or email address to use to filter by commit author.</td>
</tr>
<tr id="parameter-committer">
    <td><CopyableCode code="committer" /></td>
    <td><code>string</code></td>
    <td>GitHub username or email address to use to filter by commit committer.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Only commits containing this file path will be returned.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-sha">
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td>SHA or branch to start listing commits from. Default: the repository’s default branch (usually `main`).</td>
</tr>
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Due to limitations of Git, timestamps must be between 1970-01-01 and 2099-12-31 (inclusive) or unexpected results may be returned.</td>
</tr>
<tr id="parameter-until">
    <td><CopyableCode code="until" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Due to limitations of Git, timestamps must be between 1970-01-01 and 2099-12-31 (inclusive) or unexpected results may be returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_commit"
    values={[
        { label: 'get_commit', value: 'get_commit' },
        { label: 'compare_commits', value: 'compare_commits' },
        { label: 'list_commits', value: 'list_commits' }
    ]}
>
<TabItem value="get_commit">

Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.<br /><br />&gt; [!NOTE]<br />&gt; If there are more than 300 files in the commit diff and the default JSON media type is requested, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)." Pagination query parameters are not supported for these media types.<br /><br />- **`application/vnd.github.diff`**: Returns the diff of the commit. Larger diffs may time out and return a 5xx status code.<br />- **`application/vnd.github.patch`**: Returns the patch of the commit. Diffs with binary data will have no `patch` property. Larger diffs may time out and return a 5xx status code.<br />- **`application/vnd.github.sha`**: Returns the commit's SHA-1 hash. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |

```sql
SELECT
node_id,
author,
comments_url,
commit,
committer,
files,
html_url,
parents,
sha,
stats,
url
FROM github.repos.commits
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ref = '{{ ref }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="compare_commits">

Compares two commits against one another. You can compare refs (branches or tags) and commit SHAs in the same repository, or you can compare refs and commit SHAs that exist in different repositories within the same repository network, including fork branches. For more information about how to view a repository's network, see "[Understanding connections between repositories](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)."<br /><br />This endpoint is equivalent to running the `git log BASE..HEAD` command, but it returns commits in a different order. The `git log BASE..HEAD` command returns commits in reverse chronological order, whereas the API returns commits in chronological order.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.diff`**: Returns the diff of the commit.<br />- **`application/vnd.github.patch`**: Returns the patch of the commit. Diffs with binary data will have no `patch` property.<br /><br />The API response includes details about the files that were changed between the two commits. This includes the status of the change (if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.<br /><br />When calling this endpoint without any paging parameter (`per_page` or `page`), the returned list is limited to 250 commits, and the last commit in the list is the most recent of the entire comparison.<br /><br />**Working with large comparisons**<br /><br />To process a response with a large number of commits, use a query parameter (`per_page` or `page`) to paginate the results. When using pagination:<br /><br />- The list of changed files is only shown on the first page of results, and it includes up to 300 changed files for the entire comparison.<br />- The results are returned in chronological order, but the last commit in the returned list may not be the most recent one in the entire set if there are more pages of results.<br /><br />For more information on working with pagination, see "[Using pagination in the REST API](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api)."<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The `verification` object includes the following fields:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |

```sql
SELECT
ahead_by,
base_commit,
behind_by,
commits,
diff_url,
files,
html_url,
merge_base_commit,
patch_url,
permalink_url,
status,
total_commits,
url
FROM github.repos.commits
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND basehead = '{{ basehead }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list_commits">

**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |

```sql
SELECT
node_id,
author,
comments_url,
commit,
committer,
files,
html_url,
parents,
sha,
stats,
url
FROM github.repos.commits
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND sha = '{{ sha }}'
AND path = '{{ path }}'
AND author = '{{ author }}'
AND committer = '{{ committer }}'
AND since = '{{ since }}'
AND until = '{{ until }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
