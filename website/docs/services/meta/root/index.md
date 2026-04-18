--- 
title: root
hide_title: false
hide_table_of_contents: false
keywords:
  - root
  - meta
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

Creates, updates, deletes, gets or lists a <code>root</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="root" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.meta.root" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="root"
    values={[
        { label: 'root', value: 'root' }
    ]}
>
<TabItem value="root">

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
    <td><CopyableCode code="authorizations_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="code_search_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_search_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_authorizations_html_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_repositories_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="emails_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="emojis_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="feeds_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="followers_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="following_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="gists_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hub_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="issue_search_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="issues_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="keys_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="label_search_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="notifications_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organization_repositories_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organization_teams_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="organization_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_gists_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="rate_limit_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_search_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="starred_gists_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="starred_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="topic_search_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_organizations_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_repositories_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_search_url" /></td>
    <td><code>string (uri-template)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="user_url" /></td>
    <td><code>string (uri-template)</code></td>
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
    <td><a href="#root"><CopyableCode code="root" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get Hypermedia links to resources accessible in GitHub's REST API</td>
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

## `SELECT` examples

<Tabs
    defaultValue="root"
    values={[
        { label: 'root', value: 'root' }
    ]}
>
<TabItem value="root">

Get Hypermedia links to resources accessible in GitHub's REST API

```sql
SELECT
authorizations_url,
code_search_url,
commit_search_url,
current_user_authorizations_html_url,
current_user_repositories_url,
current_user_url,
emails_url,
emojis_url,
events_url,
feeds_url,
followers_url,
following_url,
gists_url,
hub_url,
issue_search_url,
issues_url,
keys_url,
label_search_url,
notifications_url,
organization_repositories_url,
organization_teams_url,
organization_url,
public_gists_url,
rate_limit_url,
repository_search_url,
repository_url,
starred_gists_url,
starred_url,
topic_search_url,
user_organizations_url,
user_repositories_url,
user_search_url,
user_url
FROM github.meta.root
;
```
</TabItem>
</Tabs>
