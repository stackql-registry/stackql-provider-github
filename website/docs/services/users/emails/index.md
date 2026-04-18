--- 
title: emails
hide_title: false
hide_table_of_contents: false
keywords:
  - emails
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

Creates, updates, deletes, gets or lists an <code>emails</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="emails" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.emails" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_emails_for_authenticated_user"
    values={[
        { label: 'list_emails_for_authenticated_user', value: 'list_emails_for_authenticated_user' }
    ]}
>
<TabItem value="list_emails_for_authenticated_user">

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
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: octocat@github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="primary" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="verified" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td> (example: public)</td>
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
    <td><a href="#list_emails_for_authenticated_user"><CopyableCode code="list_emails_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all of your email addresses, and specifies which one is visible<br />to the public.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user:email` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#add_email_for_authenticated_user"><CopyableCode code="add_email_for_authenticated_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-emails"><code>emails</code></a></td>
    <td></td>
    <td>OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_primary_email_visibility_for_authenticated_user"><CopyableCode code="set_primary_email_visibility_for_authenticated_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a></td>
    <td></td>
    <td>Sets the visibility for your primary email addresses.</td>
</tr>
<tr>
    <td><a href="#delete_email_for_authenticated_user"><CopyableCode code="delete_email_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.</td>
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
    defaultValue="list_emails_for_authenticated_user"
    values={[
        { label: 'list_emails_for_authenticated_user', value: 'list_emails_for_authenticated_user' }
    ]}
>
<TabItem value="list_emails_for_authenticated_user">

Lists all of your email addresses, and specifies which one is visible<br />to the public.<br /><br />OAuth app tokens and personal access tokens (classic) need the `user:email` scope to use this endpoint.

```sql
SELECT
email,
primary,
verified,
visibility
FROM github.users.emails
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_email_for_authenticated_user"
    values={[
        { label: 'add_email_for_authenticated_user', value: 'add_email_for_authenticated_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_email_for_authenticated_user">

OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
INSERT INTO github.users.emails (
emails
)
SELECT 
'{{ emails }}' /* required */
RETURNING
email,
primary,
verified,
visibility
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: emails
  props:
    - name: emails
      value:
        - "{{ emails }}"
      description: |
        Adds one or more email addresses to your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an \`array\` of emails addresses directly, but we recommend that you pass an object using the \`emails\` key.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_primary_email_visibility_for_authenticated_user"
    values={[
        { label: 'set_primary_email_visibility_for_authenticated_user', value: 'set_primary_email_visibility_for_authenticated_user' }
    ]}
>
<TabItem value="set_primary_email_visibility_for_authenticated_user">

Sets the visibility for your primary email addresses.

```sql
UPDATE github.users.emails
SET 
visibility = '{{ visibility }}'
WHERE 
visibility = '{{ visibility }}' --required
RETURNING
email,
primary,
verified,
visibility;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_email_for_authenticated_user"
    values={[
        { label: 'delete_email_for_authenticated_user', value: 'delete_email_for_authenticated_user' }
    ]}
>
<TabItem value="delete_email_for_authenticated_user">

OAuth app tokens and personal access tokens (classic) need the `user` scope to use this endpoint.

```sql
DELETE FROM github.users.emails
;
```
</TabItem>
</Tabs>
