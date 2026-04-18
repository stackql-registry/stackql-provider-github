--- 
title: pat_grant_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - pat_grant_requests
  - orgs
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

Creates, updates, deletes, gets or lists a <code>pat_grant_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pat_grant_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.pat_grant_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pat_grant_requests"
    values={[
        { label: 'list_pat_grant_requests', value: 'list_pat_grant_requests' }
    ]}
>
<TabItem value="list_pat_grant_requests">

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
    <td>Unique identifier of the request for access via fine-grained personal access token. The `pat_request_id` used to review PAT requests.</td>
</tr>
<tr>
    <td><CopyableCode code="token_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the user's token. This field can also be found in audit log events and the organization's settings for their PAT grants.</td>
</tr>
<tr>
    <td><CopyableCode code="token_name" /></td>
    <td><code>string</code></td>
    <td>The name given to the user's token. This field can also be found in an organization's settings page for Active Tokens.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>Date and time when the request for access was created.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>Permissions requested, categorized by type of permission.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>Reason for requesting access.</td>
</tr>
<tr>
    <td><CopyableCode code="repositories_url" /></td>
    <td><code>string</code></td>
    <td>URL to the list of repositories requested to be accessed via fine-grained personal access token. Should only be followed when `repository_selection` is `subset`.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_selection" /></td>
    <td><code>string</code></td>
    <td>Type of repository selection requested. (none, all, subset)</td>
</tr>
<tr>
    <td><CopyableCode code="token_expired" /></td>
    <td><code>boolean</code></td>
    <td>Whether the associated fine-grained personal access token has expired.</td>
</tr>
<tr>
    <td><CopyableCode code="token_expires_at" /></td>
    <td><code>string</code></td>
    <td>Date and time when the associated fine-grained personal access token expires.</td>
</tr>
<tr>
    <td><CopyableCode code="token_last_used_at" /></td>
    <td><code>string</code></td>
    <td>Date and time when the associated fine-grained personal access token was last used for authentication.</td>
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
    <td><a href="#list_pat_grant_requests"><CopyableCode code="list_pat_grant_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-permission"><code>permission</code></a>, <a href="#parameter-last_used_before"><code>last_used_before</code></a>, <a href="#parameter-last_used_after"><code>last_used_after</code></a>, <a href="#parameter-token_id"><code>token_id</code></a></td>
    <td>Lists requests from organization members to access organization resources with a fine-grained personal access token.<br /><br />Only GitHub Apps can use this endpoint.</td>
</tr>
<tr>
    <td><a href="#review_pat_grant_requests_in_bulk"><CopyableCode code="review_pat_grant_requests_in_bulk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Approves or denies multiple pending requests to access organization resources via a fine-grained personal access token.<br /><br />Only GitHub Apps can use this endpoint.</td>
</tr>
<tr>
    <td><a href="#review_pat_grant_request"><CopyableCode code="review_pat_grant_request" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-pat_request_id"><code>pat_request_id</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Approves or denies a pending request to access organization resources via a fine-grained personal access token.<br /><br />Only GitHub Apps can use this endpoint.</td>
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
<tr id="parameter-pat_request_id">
    <td><CopyableCode code="pat_request_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the request for access via fine-grained personal access token.</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
</tr>
<tr id="parameter-last_used_after">
    <td><CopyableCode code="last_used_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show fine-grained personal access tokens used after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr id="parameter-last_used_before">
    <td><CopyableCode code="last_used_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show fine-grained personal access tokens used before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>array</code></td>
    <td>A list of owner usernames to use to filter the results.</td>
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
<tr id="parameter-permission">
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The permission to use to filter the results.</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository to use to filter the results.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property by which to sort the results.</td>
</tr>
<tr id="parameter-token_id">
    <td><CopyableCode code="token_id" /></td>
    <td><code>array</code></td>
    <td>The ID of the token</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_pat_grant_requests"
    values={[
        { label: 'list_pat_grant_requests', value: 'list_pat_grant_requests' }
    ]}
>
<TabItem value="list_pat_grant_requests">

Lists requests from organization members to access organization resources with a fine-grained personal access token.<br /><br />Only GitHub Apps can use this endpoint.

```sql
SELECT
id,
token_id,
token_name,
created_at,
owner,
permissions,
reason,
repositories_url,
repository_selection,
token_expired,
token_expires_at,
token_last_used_at
FROM github.orgs.pat_grant_requests
WHERE org = '{{ org }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND owner = '{{ owner }}'
AND repository = '{{ repository }}'
AND permission = '{{ permission }}'
AND last_used_before = '{{ last_used_before }}'
AND last_used_after = '{{ last_used_after }}'
AND token_id = '{{ token_id }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="review_pat_grant_requests_in_bulk"
    values={[
        { label: 'review_pat_grant_requests_in_bulk', value: 'review_pat_grant_requests_in_bulk' },
        { label: 'review_pat_grant_request', value: 'review_pat_grant_request' }
    ]}
>
<TabItem value="review_pat_grant_requests_in_bulk">

Approves or denies multiple pending requests to access organization resources via a fine-grained personal access token.<br /><br />Only GitHub Apps can use this endpoint.

```sql
EXEC github.orgs.pat_grant_requests.review_pat_grant_requests_in_bulk 
@org='{{ org }}' --required 
@@json=
'{
"pat_request_ids": "{{ pat_request_ids }}", 
"action": "{{ action }}", 
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="review_pat_grant_request">

Approves or denies a pending request to access organization resources via a fine-grained personal access token.<br /><br />Only GitHub Apps can use this endpoint.

```sql
EXEC github.orgs.pat_grant_requests.review_pat_grant_request 
@org='{{ org }}' --required, 
@pat_request_id='{{ pat_request_id }}' --required 
@@json=
'{
"action": "{{ action }}", 
"reason": "{{ reason }}"
}'
;
```
</TabItem>
</Tabs>
