--- 
title: credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - credentials
  - credentials
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

Creates, updates, deletes, gets or lists a <code>credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.credentials.credentials" /></td></tr>
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
    <td><a href="#revoke"><CopyableCode code="revoke" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-credentials"><code>credentials</code></a></td>
    <td></td>
    <td>Submit a list of credentials to be revoked. This endpoint is intended to revoke credentials the caller does not own and may have found exposed on GitHub.com or elsewhere. It can also be used for credentials associated with an old user account that you no longer have access to. Credential owners will be notified of the revocation.<br /><br />This endpoint currently accepts the following credential types:<br />- Personal access tokens (classic) (`ghp_`)<br />- Fine-grained personal access tokens (`github_pat_`)<br />- OAuth app access tokens (`gho_`)<br />- User-to-server tokens from GitHub Apps (`ghu_`)<br />- Refresh tokens from GitHub Apps (`ghr_`)<br /><br /><br />Revoked credentials may impact users on GitHub Free, Pro, & Team and GitHub Enterprise Cloud, and GitHub Enterprise Cloud with Enterprise Managed Users.<br />GitHub cannot reactivate any credentials that have been revoked; new credentials will need to be generated.<br /><br />To prevent abuse, this API is limited to only 60 unauthenticated requests per hour and a max of 1000 tokens per API request.<br /><br />&gt; [!NOTE]<br />&gt; Any authenticated requests will return a 403.</td>
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
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="revoke"
    values={[
        { label: 'revoke', value: 'revoke' }
    ]}
>
<TabItem value="revoke">

Submit a list of credentials to be revoked. This endpoint is intended to revoke credentials the caller does not own and may have found exposed on GitHub.com or elsewhere. It can also be used for credentials associated with an old user account that you no longer have access to. Credential owners will be notified of the revocation.<br /><br />This endpoint currently accepts the following credential types:<br />- Personal access tokens (classic) (`ghp_`)<br />- Fine-grained personal access tokens (`github_pat_`)<br />- OAuth app access tokens (`gho_`)<br />- User-to-server tokens from GitHub Apps (`ghu_`)<br />- Refresh tokens from GitHub Apps (`ghr_`)<br /><br /><br />Revoked credentials may impact users on GitHub Free, Pro, & Team and GitHub Enterprise Cloud, and GitHub Enterprise Cloud with Enterprise Managed Users.<br />GitHub cannot reactivate any credentials that have been revoked; new credentials will need to be generated.<br /><br />To prevent abuse, this API is limited to only 60 unauthenticated requests per hour and a max of 1000 tokens per API request.<br /><br />&gt; [!NOTE]<br />&gt; Any authenticated requests will return a 403.

```sql
EXEC github.credentials.credentials.revoke 
@@json=
'{
"credentials": "{{ credentials }}"
}'
;
```
</TabItem>
</Tabs>
