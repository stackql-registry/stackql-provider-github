--- 
title: feeds
hide_title: false
hide_table_of_contents: false
keywords:
  - feeds
  - activity
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

Creates, updates, deletes, gets or lists a <code>feeds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="feeds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.activity.feeds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_feeds"
    values={[
        { label: 'get_feeds', value: 'get_feeds' }
    ]}
>
<TabItem value="get_feeds">

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
    <td><CopyableCode code="_links" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_actor_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/octocat.private.actor?token=abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="current_user_organization_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/octocat-org)</td>
</tr>
<tr>
    <td><CopyableCode code="current_user_organization_urls" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="current_user_public_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="current_user_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/octocat.private?token=abc123)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_discussions_category_url" /></td>
    <td><code>string</code></td>
    <td>A feed of discussions for a given repository and category. (example: https://github.com/&#123;user&#125;/&#123;repo&#125;/discussions/categories/&#123;category&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_discussions_url" /></td>
    <td><code>string</code></td>
    <td>A feed of discussions for a given repository. (example: https://github.com/&#123;user&#125;/&#123;repo&#125;/discussions)</td>
</tr>
<tr>
    <td><CopyableCode code="security_advisories_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/security-advisories)</td>
</tr>
<tr>
    <td><CopyableCode code="timeline_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/timeline)</td>
</tr>
<tr>
    <td><CopyableCode code="user_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/&#123;user&#125;)</td>
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
    <td><a href="#get_feeds"><CopyableCode code="get_feeds" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists the feeds available to the authenticated user. The response provides a URL for each feed. You can then get a specific feed by sending a request to one of the feed URLs.<br /><br />*   **Timeline**: The GitHub global public timeline<br />*   **User**: The public timeline for any user, using `uri_template`. For more information, see "[Hypermedia](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."<br />*   **Current user public**: The public timeline for the authenticated user<br />*   **Current user**: The private timeline for the authenticated user<br />*   **Current user actor**: The private timeline for activity created by the authenticated user<br />*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.<br />*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.<br /><br />By default, timeline resources are returned in JSON. You can specify the `application/atom+xml` type in the `Accept` header to return timeline resources in Atom format. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />&gt; [!NOTE]<br />&gt; Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/authentication/authenticating-to-the-rest-api#using-basic-authentication) since current feed URIs use the older, non revocable auth tokens.</td>
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
    defaultValue="get_feeds"
    values={[
        { label: 'get_feeds', value: 'get_feeds' }
    ]}
>
<TabItem value="get_feeds">

Lists the feeds available to the authenticated user. The response provides a URL for each feed. You can then get a specific feed by sending a request to one of the feed URLs.<br /><br />*   **Timeline**: The GitHub global public timeline<br />*   **User**: The public timeline for any user, using `uri_template`. For more information, see "[Hypermedia](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."<br />*   **Current user public**: The public timeline for the authenticated user<br />*   **Current user**: The private timeline for the authenticated user<br />*   **Current user actor**: The private timeline for activity created by the authenticated user<br />*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.<br />*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.<br /><br />By default, timeline resources are returned in JSON. You can specify the `application/atom+xml` type in the `Accept` header to return timeline resources in Atom format. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />&gt; [!NOTE]<br />&gt; Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/authentication/authenticating-to-the-rest-api#using-basic-authentication) since current feed URIs use the older, non revocable auth tokens.

```sql
SELECT
_links,
current_user_actor_url,
current_user_organization_url,
current_user_organization_urls,
current_user_public_url,
current_user_url,
repository_discussions_category_url,
repository_discussions_url,
security_advisories_url,
timeline_url,
user_url
FROM github.activity.feeds
;
```
</TabItem>
</Tabs>
