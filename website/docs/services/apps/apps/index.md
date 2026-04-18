--- 
title: apps
hide_title: false
hide_table_of_contents: false
keywords:
  - apps
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

Creates, updates, deletes, gets or lists an <code>apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repo_installation"
    values={[
        { label: 'get_repo_installation', value: 'get_repo_installation' },
        { label: 'get_installation', value: 'get_installation' },
        { label: 'get_org_installation', value: 'get_org_installation' },
        { label: 'get_user_installation', value: 'get_user_installation' },
        { label: 'list_installations', value: 'list_installations' }
    ]}
>
<TabItem value="get_repo_installation">

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
<TabItem value="get_installation">

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
<TabItem value="get_org_installation">

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
<TabItem value="get_user_installation">

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
<TabItem value="list_installations">

The permissions the installation has are included under the `permissions` key.

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
    <td><a href="#get_repo_installation"><CopyableCode code="get_repo_installation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_installation"><CopyableCode code="get_installation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-installation_id"><code>installation_id</code></a></td>
    <td></td>
    <td>Enables an authenticated GitHub App to find an installation's information using the installation id.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_org_installation"><CopyableCode code="get_org_installation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Enables an authenticated GitHub App to find the organization's installation information.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_user_installation"><CopyableCode code="get_user_installation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Enables an authenticated GitHub App to find the user’s installation information.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_installations"><CopyableCode code="list_installations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-since"><code>since</code></a>, <a href="#parameter-outdated"><code>outdated</code></a></td>
    <td>The permissions the installation has are included under the `permissions` key.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_from_manifest"><CopyableCode code="create_from_manifest" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-code"><code>code</code></a></td>
    <td></td>
    <td>Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.</td>
</tr>
<tr>
    <td><a href="#create_installation_access_token"><CopyableCode code="create_installation_access_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-installation_id"><code>installation_id</code></a></td>
    <td></td>
    <td>Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access.<br /><br />Optionally, you can use the `repositories` or `repository_ids` body parameters to specify individual repositories that the installation access token can access. If you don't use `repositories` or `repository_ids` to grant access to specific repositories, the installation access token will have access to all repositories that the installation was granted access to. The installation access token cannot be granted access to repositories that the installation was not granted access to. Up to 500 repositories can be listed in this manner.<br /><br />Optionally, use the `permissions` body parameter to specify the permissions that the installation access token should have. If `permissions` is not specified, the installation access token will have all of the permissions that were granted to the app. The installation access token cannot be granted permissions that the app was not granted.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_installation"><CopyableCode code="delete_installation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-installation_id"><code>installation_id</code></a></td>
    <td></td>
    <td>Uninstalls a GitHub App on a user, organization, or enterprise account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/rest/apps/apps#suspend-an-app-installation)" endpoint.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#suspend_installation"><CopyableCode code="suspend_installation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-installation_id"><code>installation_id</code></a></td>
    <td></td>
    <td>Suspends a GitHub App on a user, organization, or enterprise account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#unsuspend_installation"><CopyableCode code="unsuspend_installation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-installation_id"><code>installation_id</code></a></td>
    <td></td>
    <td>Removes a GitHub App installation suspension.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
</tr>
<tr>
    <td><a href="#scope_token"><CopyableCode code="scope_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-access_token"><code>access_token</code></a></td>
    <td></td>
    <td>Use a non-scoped user access token to create a repository-scoped and/or permission-scoped user access token. You can specify<br />which repositories the token can access and which permissions are granted to the<br />token.<br /><br />Invalid tokens will return `404 NOT FOUND`.</td>
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
<tr id="parameter-code">
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-installation_id">
    <td><CopyableCode code="installation_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the installation.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-owner">
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The account owner of the repository. The name is not case sensitive.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-outdated">
    <td><CopyableCode code="outdated" /></td>
    <td><code>string</code></td>
    <td></td>
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
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>string (date-time)</code></td>
    <td>Only show results that were last updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_repo_installation"
    values={[
        { label: 'get_repo_installation', value: 'get_repo_installation' },
        { label: 'get_installation', value: 'get_installation' },
        { label: 'get_org_installation', value: 'get_org_installation' },
        { label: 'get_user_installation', value: 'get_user_installation' },
        { label: 'list_installations', value: 'list_installations' }
    ]}
>
<TabItem value="get_repo_installation">

Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

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
FROM github.apps.apps
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
<TabItem value="get_installation">

Enables an authenticated GitHub App to find an installation's information using the installation id.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

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
FROM github.apps.apps
WHERE installation_id = '{{ installation_id }}' -- required
;
```
</TabItem>
<TabItem value="get_org_installation">

Enables an authenticated GitHub App to find the organization's installation information.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

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
FROM github.apps.apps
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
<TabItem value="get_user_installation">

Enables an authenticated GitHub App to find the user’s installation information.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

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
FROM github.apps.apps
WHERE username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="list_installations">

The permissions the installation has are included under the `permissions` key.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

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
FROM github.apps.apps
WHERE per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND since = '{{ since }}'
AND outdated = '{{ outdated }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_from_manifest"
    values={[
        { label: 'create_from_manifest', value: 'create_from_manifest' },
        { label: 'create_installation_access_token', value: 'create_installation_access_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_from_manifest">

Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.

```sql
INSERT INTO github.apps.apps (
code
)
SELECT 
'{{ code }}'
RETURNING
id,
name,
client_id,
node_id,
client_secret,
created_at,
description,
events,
external_url,
html_url,
installations_count,
owner,
pem,
permissions,
slug,
updated_at,
webhook_secret
;
```
</TabItem>
<TabItem value="create_installation_access_token">

Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access.<br /><br />Optionally, you can use the `repositories` or `repository_ids` body parameters to specify individual repositories that the installation access token can access. If you don't use `repositories` or `repository_ids` to grant access to specific repositories, the installation access token will have access to all repositories that the installation was granted access to. The installation access token cannot be granted access to repositories that the installation was not granted access to. Up to 500 repositories can be listed in this manner.<br /><br />Optionally, use the `permissions` body parameter to specify the permissions that the installation access token should have. If `permissions` is not specified, the installation access token will have all of the permissions that were granted to the app. The installation access token cannot be granted permissions that the app was not granted.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
INSERT INTO github.apps.apps (
repositories,
repository_ids,
permissions,
installation_id
)
SELECT 
'{{ repositories }}',
'{{ repository_ids }}',
'{{ permissions }}',
'{{ installation_id }}'
RETURNING
expires_at,
has_multiple_single_files,
permissions,
repositories,
repository_selection,
single_file,
single_file_paths,
token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: apps
  props:
    - name: code
      value: "{{ code }}"
      description: Required parameter for the apps resource.
    - name: installation_id
      value: {{ installation_id }}
      description: Required parameter for the apps resource.
    - name: repositories
      value:
        - "{{ repositories }}"
      description: |
        List of repository names that the token should have access to
    - name: repository_ids
      value:
        - {{ repository_ids }}
      description: |
        List of repository IDs that the token should have access to
    - name: permissions
      description: |
        The permissions granted to the user access token.
      value:
        actions: "{{ actions }}"
        administration: "{{ administration }}"
        artifact_metadata: "{{ artifact_metadata }}"
        attestations: "{{ attestations }}"
        checks: "{{ checks }}"
        codespaces: "{{ codespaces }}"
        contents: "{{ contents }}"
        dependabot_secrets: "{{ dependabot_secrets }}"
        deployments: "{{ deployments }}"
        discussions: "{{ discussions }}"
        environments: "{{ environments }}"
        issues: "{{ issues }}"
        merge_queues: "{{ merge_queues }}"
        metadata: "{{ metadata }}"
        packages: "{{ packages }}"
        pages: "{{ pages }}"
        pull_requests: "{{ pull_requests }}"
        repository_custom_properties: "{{ repository_custom_properties }}"
        repository_hooks: "{{ repository_hooks }}"
        repository_projects: "{{ repository_projects }}"
        secret_scanning_alerts: "{{ secret_scanning_alerts }}"
        secrets: "{{ secrets }}"
        security_events: "{{ security_events }}"
        single_file: "{{ single_file }}"
        statuses: "{{ statuses }}"
        vulnerability_alerts: "{{ vulnerability_alerts }}"
        workflows: "{{ workflows }}"
        custom_properties_for_organizations: "{{ custom_properties_for_organizations }}"
        members: "{{ members }}"
        organization_administration: "{{ organization_administration }}"
        organization_custom_roles: "{{ organization_custom_roles }}"
        organization_custom_org_roles: "{{ organization_custom_org_roles }}"
        organization_custom_properties: "{{ organization_custom_properties }}"
        organization_copilot_seat_management: "{{ organization_copilot_seat_management }}"
        organization_copilot_agent_settings: "{{ organization_copilot_agent_settings }}"
        organization_announcement_banners: "{{ organization_announcement_banners }}"
        organization_events: "{{ organization_events }}"
        organization_hooks: "{{ organization_hooks }}"
        organization_personal_access_tokens: "{{ organization_personal_access_tokens }}"
        organization_personal_access_token_requests: "{{ organization_personal_access_token_requests }}"
        organization_plan: "{{ organization_plan }}"
        organization_projects: "{{ organization_projects }}"
        organization_packages: "{{ organization_packages }}"
        organization_secrets: "{{ organization_secrets }}"
        organization_self_hosted_runners: "{{ organization_self_hosted_runners }}"
        organization_user_blocking: "{{ organization_user_blocking }}"
        email_addresses: "{{ email_addresses }}"
        followers: "{{ followers }}"
        git_ssh_keys: "{{ git_ssh_keys }}"
        gpg_keys: "{{ gpg_keys }}"
        interaction_limits: "{{ interaction_limits }}"
        profile: "{{ profile }}"
        starring: "{{ starring }}"
        enterprise_custom_properties_for_organizations: "{{ enterprise_custom_properties_for_organizations }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_installation"
    values={[
        { label: 'delete_installation', value: 'delete_installation' }
    ]}
>
<TabItem value="delete_installation">

Uninstalls a GitHub App on a user, organization, or enterprise account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/rest/apps/apps#suspend-an-app-installation)" endpoint.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
DELETE FROM github.apps.apps
WHERE installation_id = '{{ installation_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="suspend_installation"
    values={[
        { label: 'suspend_installation', value: 'suspend_installation' },
        { label: 'unsuspend_installation', value: 'unsuspend_installation' },
        { label: 'scope_token', value: 'scope_token' }
    ]}
>
<TabItem value="suspend_installation">

Suspends a GitHub App on a user, organization, or enterprise account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
EXEC github.apps.apps.suspend_installation 
@installation_id='{{ installation_id }}' --required
;
```
</TabItem>
<TabItem value="unsuspend_installation">

Removes a GitHub App installation suspension.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
EXEC github.apps.apps.unsuspend_installation 
@installation_id='{{ installation_id }}' --required
;
```
</TabItem>
<TabItem value="scope_token">

Use a non-scoped user access token to create a repository-scoped and/or permission-scoped user access token. You can specify<br />which repositories the token can access and which permissions are granted to the<br />token.<br /><br />Invalid tokens will return `404 NOT FOUND`.

```sql
EXEC github.apps.apps.scope_token 
@client_id='{{ client_id }}' --required 
@@json=
'{
"access_token": "{{ access_token }}", 
"target": "{{ target }}", 
"target_id": {{ target_id }}, 
"repositories": "{{ repositories }}", 
"repository_ids": "{{ repository_ids }}", 
"permissions": "{{ permissions }}"
}'
;
```
</TabItem>
</Tabs>
