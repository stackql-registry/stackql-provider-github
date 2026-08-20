--- 
title: pull_request_async_merges
hide_title: false
hide_table_of_contents: false
keywords:
  - pull_request_async_merges
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

Creates, updates, deletes, gets or lists a <code>pull_request_async_merges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pull_request_async_merges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.pulls.pull_request_async_merges" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_merge_async_result"
    values={[
        { label: 'get_merge_async_result', value: 'get_merge_async_result' }
    ]}
>
<TabItem value="get_merge_async_result">

the current result of the asynchronous merge request

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
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>When an asynchronous merge request was created or already existed</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (pending, merged, enqueued, failed)</td>
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
    <td><a href="#get_merge_async_result"><CopyableCode code="get_merge_async_result" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a>, <a href="#parameter-uuid"><code>uuid</code></a></td>
    <td></td>
    <td>Fetches the current result of an asynchronous merge request, identified by the UUID that was returned when the merge was requested.<br /><br />While the merge is still queued, the response includes the UUID, merge method, and expected head SHA of the request. Once the merge has completed, the response reports whether it was merged, including the merge commit OID on success or a message describing why it could not be merged on failure.<br /><br />The result of an asynchronous merge request is retained for 24 hours after its most recent update. After this window the request expires and this endpoint returns a `404` response for its UUID.</td>
</tr>
<tr>
    <td><a href="#merge_async"><CopyableCode code="merge_async" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pull_number"><code>pull_number</code></a></td>
    <td></td>
    <td>Merges a pull request into the base branch in the background. Merging in this way allows certain types of errors to be retried, and avoids the risk of timeouts for particularly complex merges.<br /><br />This is the required method for merging stacked PRs, but also supports unstacked PRs. When using this endpoint to merge a stacked pull request, all pull requests in the stack up to and including the requested PR will be merged into the base branch.<br /><br />The response includes a UUID that can be used to fetch the result of the merge. If another asynchronous merge request has already been made for this pull request, the UUID of that request will be returned instead with a 409 response status to indicate that the merge options may be different from those that were requested. If there isn't an existing asynchronous merge request, a 202 response status is used.<br /><br />If the pull request is already merged, the merge commit OID will be returned immediately with a 200 status.<br /><br />If the pull request cannot be merged (e.g. because it is closed, or still a draft) this result will be returned immediately with a 400 response status. Branch protection rules and repository rules are not run at this stage, only basic pull request state checks are performed.</td>
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
<tr id="parameter-uuid">
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>The UUID of the asynchronous merge request, as returned when the merge was requested.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_merge_async_result"
    values={[
        { label: 'get_merge_async_result', value: 'get_merge_async_result' }
    ]}
>
<TabItem value="get_merge_async_result">

Fetches the current result of an asynchronous merge request, identified by the UUID that was returned when the merge was requested.<br /><br />While the merge is still queued, the response includes the UUID, merge method, and expected head SHA of the request. Once the merge has completed, the response reports whether it was merged, including the merge commit OID on success or a message describing why it could not be merged on failure.<br /><br />The result of an asynchronous merge request is retained for 24 hours after its most recent update. After this window the request expires and this endpoint returns a `404` response for its UUID.

```sql
SELECT
details,
status
FROM github.pulls.pull_request_async_merges
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND pull_number = '{{ pull_number }}' -- required
AND uuid = '{{ uuid }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="merge_async"
    values={[
        { label: 'merge_async', value: 'merge_async' }
    ]}
>
<TabItem value="merge_async">

Merges a pull request into the base branch in the background. Merging in this way allows certain types of errors to be retried, and avoids the risk of timeouts for particularly complex merges.<br /><br />This is the required method for merging stacked PRs, but also supports unstacked PRs. When using this endpoint to merge a stacked pull request, all pull requests in the stack up to and including the requested PR will be merged into the base branch.<br /><br />The response includes a UUID that can be used to fetch the result of the merge. If another asynchronous merge request has already been made for this pull request, the UUID of that request will be returned instead with a 409 response status to indicate that the merge options may be different from those that were requested. If there isn't an existing asynchronous merge request, a 202 response status is used.<br /><br />If the pull request is already merged, the merge commit OID will be returned immediately with a 200 status.<br /><br />If the pull request cannot be merged (e.g. because it is closed, or still a draft) this result will be returned immediately with a 400 response status. Branch protection rules and repository rules are not run at this stage, only basic pull request state checks are performed.

```sql
EXEC github.pulls.pull_request_async_merges.merge_async 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@pull_number='{{ pull_number }}' --required 
@@json=
'{
"commit_title": "{{ commit_title }}", 
"commit_message": "{{ commit_message }}", 
"sha": "{{ sha }}", 
"merge_method": "{{ merge_method }}", 
"merge_action": "{{ merge_action }}"
}'
;
```
</TabItem>
</Tabs>
