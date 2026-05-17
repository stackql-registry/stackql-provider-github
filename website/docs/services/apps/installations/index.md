--- 
title: installations
hide_title: false
hide_table_of_contents: false
keywords:
  - installations
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

Creates, updates, deletes, gets or lists an <code>installations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="installations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.installations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_installations_for_authenticated_user"
    values={[
        { label: 'list_installations_for_authenticated_user', value: 'list_installations_for_authenticated_user' }
    ]}
>
<TabItem value="list_installations_for_authenticated_user">

You can find the permissions for the installation under the `permissions` key.

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
    <td>The ID of the installation.</td>
</tr>
<tr>
    <td><CopyableCode code="app_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td> (example: Iv1.ab1112223334445c)</td>
</tr>
<tr>
    <td><CopyableCode code="target_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the user or organization this token is being scoped to.</td>
</tr>
<tr>
    <td><CopyableCode code="single_file_name" /></td>
    <td><code>string</code></td>
    <td> (example: config.yaml)</td>
</tr>
<tr>
    <td><CopyableCode code="access_tokens_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/app/installations/1/access_tokens)</td>
</tr>
<tr>
    <td><CopyableCode code="account" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="app_slug" /></td>
    <td><code>string</code></td>
    <td> (example: github-actions)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_email" /></td>
    <td><code>string</code></td>
    <td> (example: "test_13f1e99741e3e004@d7e1eb0bc0a1ba12.com")</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_multiple_single_files" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/organizations/github/settings/installations/1)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>The permissions granted to the user access token. (title: App Permissions)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/installation/repositories)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_selection" /></td>
    <td><code>string</code></td>
    <td>Describe whether all repositories have been selected or there's a selection involved (all, selected)</td>
</tr>
<tr>
    <td><CopyableCode code="single_file_paths" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="suspended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="suspended_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td> (example: Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
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
    <td><a href="#list_installations_for_authenticated_user"><CopyableCode code="list_installations_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.<br /><br />The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.<br /><br />You can find the permissions for the installation under the `permissions` key.</td>
</tr>
<tr>
    <td><a href="#revoke_installation_access_token"><CopyableCode code="revoke_installation_access_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Revokes the installation token you're using to authenticate as an installation and access this endpoint.<br /><br />Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/rest/apps/apps#create-an-installation-access-token-for-an-app)" endpoint.</td>
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
    defaultValue="list_installations_for_authenticated_user"
    values={[
        { label: 'list_installations_for_authenticated_user', value: 'list_installations_for_authenticated_user' }
    ]}
>
<TabItem value="list_installations_for_authenticated_user">

Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.<br /><br />The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.<br /><br />You can find the permissions for the installation under the `permissions` key.

```sql
SELECT
id,
app_id,
client_id,
target_id,
single_file_name,
access_tokens_url,
account,
app_slug,
contact_email,
created_at,
events,
has_multiple_single_files,
html_url,
permissions,
repositories_url,
repository_selection,
single_file_paths,
suspended_at,
suspended_by,
target_type,
updated_at
FROM github.apps.installations
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="revoke_installation_access_token"
    values={[
        { label: 'revoke_installation_access_token', value: 'revoke_installation_access_token' }
    ]}
>
<TabItem value="revoke_installation_access_token">

Revokes the installation token you're using to authenticate as an installation and access this endpoint.<br /><br />Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/rest/apps/apps#create-an-installation-access-token-for-an-app)" endpoint.

```sql
DELETE FROM github.apps.installations
;
```
</TabItem>
</Tabs>
