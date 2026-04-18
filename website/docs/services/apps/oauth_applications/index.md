--- 
title: oauth_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_applications
  - apps
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

Creates, updates, deletes, gets or lists an <code>oauth_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.oauth_applications" /></td></tr>
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
    <td><a href="#delete_token"><CopyableCode code="delete_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a></td>
    <td></td>
    <td>OAuth  or GitHub application owners can revoke a single token for an OAuth application or a GitHub application with an OAuth authorization.</td>
</tr>
<tr>
    <td><a href="#check_token"><CopyableCode code="check_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-access_token"><code>access_token</code></a></td>
    <td></td>
    <td>OAuth applications and GitHub applications with OAuth authorizations can use this API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. Invalid tokens will return `404 NOT FOUND`.</td>
</tr>
<tr>
    <td><a href="#reset_token"><CopyableCode code="reset_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-access_token"><code>access_token</code></a></td>
    <td></td>
    <td>OAuth applications and GitHub applications with OAuth authorizations can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. Invalid tokens will return `404 NOT FOUND`.</td>
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
<tr id="parameter-client_id">
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The client ID of the GitHub app.</td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_token"
    values={[
        { label: 'delete_token', value: 'delete_token' }
    ]}
>
<TabItem value="delete_token">

OAuth  or GitHub application owners can revoke a single token for an OAuth application or a GitHub application with an OAuth authorization.

```sql
DELETE FROM github.apps.oauth_applications
WHERE client_id = '{{ client_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="check_token"
    values={[
        { label: 'check_token', value: 'check_token' },
        { label: 'reset_token', value: 'reset_token' }
    ]}
>
<TabItem value="check_token">

OAuth applications and GitHub applications with OAuth authorizations can use this API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. Invalid tokens will return `404 NOT FOUND`.

```sql
EXEC github.apps.oauth_applications.check_token 
@client_id='{{ client_id }}' --required 
@@json=
'{
"access_token": "{{ access_token }}"
}'
;
```
</TabItem>
<TabItem value="reset_token">

OAuth applications and GitHub applications with OAuth authorizations can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. Invalid tokens will return `404 NOT FOUND`.

```sql
EXEC github.apps.oauth_applications.reset_token 
@client_id='{{ client_id }}' --required 
@@json=
'{
"access_token": "{{ access_token }}"
}'
;
```
</TabItem>
</Tabs>
