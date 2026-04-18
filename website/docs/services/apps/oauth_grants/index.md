--- 
title: oauth_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - oauth_grants
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

Creates, updates, deletes, gets or lists an <code>oauth_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oauth_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.oauth_grants" /></td></tr>
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
    <td><a href="#delete_authorization"><CopyableCode code="delete_authorization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a></td>
    <td></td>
    <td>OAuth and GitHub application owners can revoke a grant for their application and a specific user. You must provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.<br />Deleting an application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).</td>
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
    defaultValue="delete_authorization"
    values={[
        { label: 'delete_authorization', value: 'delete_authorization' }
    ]}
>
<TabItem value="delete_authorization">

OAuth and GitHub application owners can revoke a grant for their application and a specific user. You must provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.<br />Deleting an application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

```sql
DELETE FROM github.apps.oauth_grants
WHERE client_id = '{{ client_id }}' --required
;
```
</TabItem>
</Tabs>
