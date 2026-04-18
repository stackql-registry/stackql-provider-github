--- 
title: social_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - social_accounts
  - users
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

Creates, updates, deletes, gets or lists a <code>social_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="social_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.social_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_social_accounts_for_user"
    values={[
        { label: 'list_social_accounts_for_user', value: 'list_social_accounts_for_user' },
        { label: 'list_social_accounts_for_authenticated_user', value: 'list_social_accounts_for_authenticated_user' }
    ]}
>
<TabItem value="list_social_accounts_for_user">

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
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td> (example: linkedin)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://www.linkedin.com/company/github/)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_social_accounts_for_authenticated_user">

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
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td> (example: linkedin)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://www.linkedin.com/company/github/)</td>
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
    <td><a href="#list_social_accounts_for_user"><CopyableCode code="list_social_accounts_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists social media accounts for a user. This endpoint is accessible by anyone.</td>
</tr>
<tr>
    <td><a href="#list_social_accounts_for_authenticated_user"><CopyableCode code="list_social_accounts_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all of your social accounts.</td>
</tr>
<tr>
    <td><a href="#add_social_account_for_authenticated_user"><CopyableCode code="add_social_account_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_urls"><code>account_urls</code></a></td>
    <td></td>
    <td>Add one or more social accounts to the authenticated user's profile.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_social_account_for_authenticated_user"><CopyableCode code="delete_social_account_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Deletes one or more social accounts from the authenticated user's profile.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
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
    defaultValue="list_social_accounts_for_user"
    values={[
        { label: 'list_social_accounts_for_user', value: 'list_social_accounts_for_user' },
        { label: 'list_social_accounts_for_authenticated_user', value: 'list_social_accounts_for_authenticated_user' }
    ]}
>
<TabItem value="list_social_accounts_for_user">

Lists social media accounts for a user. This endpoint is accessible by anyone.

```sql
SELECT
provider,
url
FROM github.users.social_accounts
WHERE username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_social_accounts_for_authenticated_user">

Lists all of your social accounts.

```sql
SELECT
provider,
url
FROM github.users.social_accounts
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_social_account_for_authenticated_user"
    values={[
        { label: 'add_social_account_for_authenticated_user', value: 'add_social_account_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_social_account_for_authenticated_user">

Add one or more social accounts to the authenticated user's profile.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
INSERT INTO github.users.social_accounts (
account_urls
)
SELECT 
'{{ account_urls }}' /* required */
RETURNING
provider,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: social_accounts
  props:
    - name: account_urls
      value:
        - "{{ account_urls }}"
      description: |
        Full URLs for the social media profiles to add.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_social_account_for_authenticated_user"
    values={[
        { label: 'delete_social_account_for_authenticated_user', value: 'delete_social_account_for_authenticated_user' }
    ]}
>
<TabItem value="delete_social_account_for_authenticated_user">

Deletes one or more social accounts from the authenticated user's profile.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
DELETE FROM github.users.social_accounts
;
```
</TabItem>
</Tabs>
