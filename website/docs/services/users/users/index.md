--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_id"
    values={[
        { label: 'get_by_id', value: 'get_by_id' },
        { label: 'get_by_username', value: 'get_by_username' },
        { label: 'get_authenticated', value: 'get_authenticated' }
    ]}
>
<TabItem value="get_by_id">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: monalisa octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td> (example: 41d064eb2195891e12d0413f63227ea7)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDQ6VXNlcjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="bio" /></td>
    <td><code>string</code></td>
    <td> (example: There once was...)</td>
</tr>
<tr>
    <td><CopyableCode code="blog" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/blog)</td>
</tr>
<tr>
    <td><CopyableCode code="business_plus" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="collaborators" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td> (example: GitHub)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2008-01-14T04:33:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_usage" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: octocat@github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/events&#123;/privacy&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="followers" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="followers_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/followers)</td>
</tr>
<tr>
    <td><CopyableCode code="following" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="following_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/following&#123;/other_user&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="gists_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/gists&#123;/gist_id&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="hireable" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="ldap_dn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td> (example: San Francisco)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: octocat@github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="organizations_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/orgs)</td>
</tr>
<tr>
    <td><CopyableCode code="owned_private_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_gists" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_gists" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="received_events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/received_events)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="site_admin" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="starred_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/starred&#123;/owner&#125;&#123;/repo&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptions_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/subscriptions)</td>
</tr>
<tr>
    <td><CopyableCode code="total_private_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="twitter_username" /></td>
    <td><code>string</code></td>
    <td> (example: monalisa)</td>
</tr>
<tr>
    <td><CopyableCode code="two_factor_authentication" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2008-01-14T04:33:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="user_view_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_by_username">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: monalisa octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td> (example: 41d064eb2195891e12d0413f63227ea7)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDQ6VXNlcjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="bio" /></td>
    <td><code>string</code></td>
    <td> (example: There once was...)</td>
</tr>
<tr>
    <td><CopyableCode code="blog" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/blog)</td>
</tr>
<tr>
    <td><CopyableCode code="business_plus" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="collaborators" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td> (example: GitHub)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2008-01-14T04:33:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_usage" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: octocat@github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/events&#123;/privacy&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="followers" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="followers_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/followers)</td>
</tr>
<tr>
    <td><CopyableCode code="following" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="following_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/following&#123;/other_user&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="gists_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/gists&#123;/gist_id&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="hireable" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="ldap_dn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td> (example: San Francisco)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: octocat@github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="organizations_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/orgs)</td>
</tr>
<tr>
    <td><CopyableCode code="owned_private_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_gists" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_gists" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="received_events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/received_events)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="site_admin" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="starred_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/starred&#123;/owner&#125;&#123;/repo&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptions_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/subscriptions)</td>
</tr>
<tr>
    <td><CopyableCode code="total_private_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="twitter_username" /></td>
    <td><code>string</code></td>
    <td> (example: monalisa)</td>
</tr>
<tr>
    <td><CopyableCode code="two_factor_authentication" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2008-01-14T04:33:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="user_view_type" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_authenticated">

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
    <td><code>integer (int64)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: monalisa octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="gravatar_id" /></td>
    <td><code>string</code></td>
    <td> (example: 41d064eb2195891e12d0413f63227ea7)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDQ6VXNlcjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="bio" /></td>
    <td><code>string</code></td>
    <td> (example: There once was...)</td>
</tr>
<tr>
    <td><CopyableCode code="blog" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/blog)</td>
</tr>
<tr>
    <td><CopyableCode code="business_plus" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="collaborators" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td> (example: GitHub)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2008-01-14T04:33:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_usage" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: octocat@github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/events&#123;/privacy&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="followers" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="followers_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/followers)</td>
</tr>
<tr>
    <td><CopyableCode code="following" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="following_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/following&#123;/other_user&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="gists_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/gists&#123;/gist_id&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="hireable" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="ldap_dn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td> (example: San Francisco)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="notification_email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: octocat@github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="organizations_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/orgs)</td>
</tr>
<tr>
    <td><CopyableCode code="owned_private_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_gists" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_gists" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="received_events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/received_events)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="site_admin" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="starred_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/users/octocat/starred&#123;/owner&#125;&#123;/repo&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="subscriptions_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat/subscriptions)</td>
</tr>
<tr>
    <td><CopyableCode code="total_private_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="twitter_username" /></td>
    <td><code>string</code></td>
    <td> (example: monalisa)</td>
</tr>
<tr>
    <td><CopyableCode code="two_factor_authentication" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: User)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2008-01-14T04:33:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/users/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="user_view_type" /></td>
    <td><code>string</code></td>
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
    <td><a href="#get_by_id"><CopyableCode code="get_by_id" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Provides publicly available information about someone with a GitHub account. This method takes their durable user `ID` instead of their `login`, which can change over time.<br /><br />If you are requesting information about an [Enterprise Managed User](https://docs.github.com/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users), or a GitHub App bot that is installed in an organization that uses Enterprise Managed Users, your requests must be authenticated as a user or GitHub App that has access to the organization to view that account's information. If you are not authorized, the request will return a `404 Not Found` status.<br /><br />The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be public which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#authentication).<br /><br />The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see [Emails API](https://docs.github.com/rest/users/emails).</td>
</tr>
<tr>
    <td><a href="#get_by_username"><CopyableCode code="get_by_username" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Provides publicly available information about someone with a GitHub account.<br /><br />If you are requesting information about an [Enterprise Managed User](https://docs.github.com/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users), or a GitHub App bot that is installed in an organization that uses Enterprise Managed Users, your requests must be authenticated as a user or GitHub App that has access to the organization to view that account's information. If you are not authorized, the request will return a `404 Not Found` status.<br /><br />The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be public which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#authentication).<br /><br />The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see [Emails API](https://docs.github.com/rest/users/emails).</td>
</tr>
<tr>
    <td><a href="#get_authenticated"><CopyableCode code="get_authenticated" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>OAuth app tokens and personal access tokens (classic) need the `user` scope in order for the response to include private profile information.</td>
</tr>
<tr>
    <td><a href="#update_authenticated"><CopyableCode code="update_authenticated" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>integer</code></td>
    <td>account_id parameter</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_by_id"
    values={[
        { label: 'get_by_id', value: 'get_by_id' },
        { label: 'get_by_username', value: 'get_by_username' },
        { label: 'get_authenticated', value: 'get_authenticated' }
    ]}
>
<TabItem value="get_by_id">

Provides publicly available information about someone with a GitHub account. This method takes their durable user `ID` instead of their `login`, which can change over time.<br /><br />If you are requesting information about an [Enterprise Managed User](https://docs.github.com/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users), or a GitHub App bot that is installed in an organization that uses Enterprise Managed Users, your requests must be authenticated as a user or GitHub App that has access to the organization to view that account's information. If you are not authorized, the request will return a `404 Not Found` status.<br /><br />The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be public which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#authentication).<br /><br />The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see [Emails API](https://docs.github.com/rest/users/emails).

```sql
SELECT
id,
name,
gravatar_id,
node_id,
avatar_url,
bio,
blog,
business_plus,
collaborators,
company,
created_at,
disk_usage,
email,
events_url,
followers,
followers_url,
following,
following_url,
gists_url,
hireable,
html_url,
ldap_dn,
location,
login,
notification_email,
organizations_url,
owned_private_repos,
plan,
private_gists,
public_gists,
public_repos,
received_events_url,
repos_url,
site_admin,
starred_url,
subscriptions_url,
total_private_repos,
twitter_username,
two_factor_authentication,
type,
updated_at,
url,
user_view_type
FROM github.users.users
WHERE account_id = '{{ account_id }}' -- required
;
```
</TabItem>
<TabItem value="get_by_username">

Provides publicly available information about someone with a GitHub account.<br /><br />If you are requesting information about an [Enterprise Managed User](https://docs.github.com/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users), or a GitHub App bot that is installed in an organization that uses Enterprise Managed Users, your requests must be authenticated as a user or GitHub App that has access to the organization to view that account's information. If you are not authorized, the request will return a `404 Not Found` status.<br /><br />The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be public which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/guides/getting-started-with-the-rest-api#authentication).<br /><br />The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see [Emails API](https://docs.github.com/rest/users/emails).

```sql
SELECT
id,
name,
gravatar_id,
node_id,
avatar_url,
bio,
blog,
business_plus,
collaborators,
company,
created_at,
disk_usage,
email,
events_url,
followers,
followers_url,
following,
following_url,
gists_url,
hireable,
html_url,
ldap_dn,
location,
login,
notification_email,
organizations_url,
owned_private_repos,
plan,
private_gists,
public_gists,
public_repos,
received_events_url,
repos_url,
site_admin,
starred_url,
subscriptions_url,
total_private_repos,
twitter_username,
two_factor_authentication,
type,
updated_at,
url,
user_view_type
FROM github.users.users
WHERE username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="get_authenticated">

OAuth app tokens and personal access tokens (classic) need the `user` scope in order for the response to include private profile information.

```sql
SELECT
id,
name,
gravatar_id,
node_id,
avatar_url,
bio,
blog,
business_plus,
collaborators,
company,
created_at,
disk_usage,
email,
events_url,
followers,
followers_url,
following,
following_url,
gists_url,
hireable,
html_url,
ldap_dn,
location,
login,
notification_email,
organizations_url,
owned_private_repos,
plan,
private_gists,
public_gists,
public_repos,
received_events_url,
repos_url,
site_admin,
starred_url,
subscriptions_url,
total_private_repos,
twitter_username,
two_factor_authentication,
type,
updated_at,
url,
user_view_type
FROM github.users.users
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_authenticated"
    values={[
        { label: 'update_authenticated', value: 'update_authenticated' }
    ]}
>
<TabItem value="update_authenticated">

**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.

```sql
UPDATE github.users.users
SET 
name = '{{ name }}',
email = '{{ email }}',
blog = '{{ blog }}',
twitter_username = '{{ twitter_username }}',
company = '{{ company }}',
location = '{{ location }}',
hireable = {{ hireable }},
bio = '{{ bio }}'
RETURNING
id,
name,
gravatar_id,
node_id,
avatar_url,
bio,
blog,
business_plus,
collaborators,
company,
created_at,
disk_usage,
email,
events_url,
followers,
followers_url,
following,
following_url,
gists_url,
hireable,
html_url,
ldap_dn,
location,
login,
notification_email,
organizations_url,
owned_private_repos,
plan,
private_gists,
public_gists,
public_repos,
received_events_url,
repos_url,
site_admin,
starred_url,
subscriptions_url,
total_private_repos,
twitter_username,
two_factor_authentication,
type,
updated_at,
url,
user_view_type;
```
</TabItem>
</Tabs>
