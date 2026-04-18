--- 
title: pat_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - pat_grants
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

Creates, updates, deletes, gets or lists a <code>pat_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pat_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.pat_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pat_grants"
    values={[
        { label: 'list_pat_grants', value: 'list_pat_grants' }
    ]}
>
<TabItem value="list_pat_grants">

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
    <td>Unique identifier of the fine-grained personal access token grant. The `pat_id` used to get details about an approved fine-grained personal access token.</td>
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
    <td><CopyableCode code="access_granted_at" /></td>
    <td><code>string</code></td>
    <td>Date and time when the fine-grained personal access token was approved to access the organization.</td>
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
    <td><CopyableCode code="repositories_url" /></td>
    <td><code>string</code></td>
    <td>URL to the list of repositories the fine-grained personal access token can access. Only follow when `repository_selection` is `subset`.</td>
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
    <td><a href="#list_pat_grants"><CopyableCode code="list_pat_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-permission"><code>permission</code></a>, <a href="#parameter-last_used_before"><code>last_used_before</code></a>, <a href="#parameter-last_used_after"><code>last_used_after</code></a>, <a href="#parameter-token_id"><code>token_id</code></a></td>
    <td>Lists approved fine-grained personal access tokens owned by organization members that can access organization resources.<br /><br />Only GitHub Apps can use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_pat_accesses"><CopyableCode code="update_pat_accesses" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-pat_ids"><code>pat_ids</code></a></td>
    <td></td>
    <td>Updates the access organization members have to organization resources via fine-grained personal access tokens. Limited to revoking a token's existing access.<br /><br />Only GitHub Apps can use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_pat_access"><CopyableCode code="update_pat_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-pat_id"><code>pat_id</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Updates the access an organization member has to organization resources via a fine-grained personal access token. Limited to revoking the token's existing access. Limited to revoking a token's existing access.<br /><br />Only GitHub Apps can use this endpoint.</td>
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
<tr id="parameter-pat_id">
    <td><CopyableCode code="pat_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the fine-grained personal access token.</td>
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
    defaultValue="list_pat_grants"
    values={[
        { label: 'list_pat_grants', value: 'list_pat_grants' }
    ]}
>
<TabItem value="list_pat_grants">

Lists approved fine-grained personal access tokens owned by organization members that can access organization resources.<br /><br />Only GitHub Apps can use this endpoint.

```sql
SELECT
id,
token_id,
token_name,
access_granted_at,
owner,
permissions,
repositories_url,
repository_selection,
token_expired,
token_expires_at,
token_last_used_at
FROM github.orgs.pat_grants
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
    defaultValue="update_pat_accesses"
    values={[
        { label: 'update_pat_accesses', value: 'update_pat_accesses' },
        { label: 'update_pat_access', value: 'update_pat_access' }
    ]}
>
<TabItem value="update_pat_accesses">

Updates the access organization members have to organization resources via fine-grained personal access tokens. Limited to revoking a token's existing access.<br /><br />Only GitHub Apps can use this endpoint.

```sql
EXEC github.orgs.pat_grants.update_pat_accesses 
@org='{{ org }}' --required 
@@json=
'{
"action": "{{ action }}", 
"pat_ids": "{{ pat_ids }}"
}'
;
```
</TabItem>
<TabItem value="update_pat_access">

Updates the access an organization member has to organization resources via a fine-grained personal access token. Limited to revoking the token's existing access. Limited to revoking a token's existing access.<br /><br />Only GitHub Apps can use this endpoint.

```sql
EXEC github.orgs.pat_grants.update_pat_access 
@org='{{ org }}' --required, 
@pat_id='{{ pat_id }}' --required 
@@json=
'{
"action": "{{ action }}"
}'
;
```
</TabItem>
</Tabs>
