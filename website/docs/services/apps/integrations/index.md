--- 
title: integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - integrations
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

Creates, updates, deletes, gets or lists an <code>integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.apps.integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_by_slug"
    values={[
        { label: 'get_by_slug', value: 'get_by_slug' },
        { label: 'get_authenticated', value: 'get_authenticated' }
    ]}
>
<TabItem value="get_by_slug">

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
    <td>Unique identifier of the GitHub app</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the GitHub app (example: Probot Owners)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td> (example: "Iv1.25b5d1e65ffc4022")</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDExOkludGVncmF0aW9uMQ==)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-07-08T16:18:44-04:00)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: The description of the app.)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The list of events for the GitHub app. Note that the `installation_target`, `security_advisory`, and `meta` events are not included because they are global events and not specific to an installation.</td>
</tr>
<tr>
    <td><CopyableCode code="external_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/apps/super-ci)</td>
</tr>
<tr>
    <td><CopyableCode code="installations_count" /></td>
    <td><code>integer</code></td>
    <td>The number of installations associated with the GitHub app. Only returned when the integration is requesting details about itself.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>The set of permissions for the GitHub app</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The slug name of the GitHub app (example: probot-owners)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-07-08T16:18:44-04:00)</td>
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
    <td><code>integer</code></td>
    <td>Unique identifier of the GitHub app</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the GitHub app (example: Probot Owners)</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td> (example: "Iv1.25b5d1e65ffc4022")</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDExOkludGVncmF0aW9uMQ==)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-07-08T16:18:44-04:00)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: The description of the app.)</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>array</code></td>
    <td>The list of events for the GitHub app. Note that the `installation_target`, `security_advisory`, and `meta` events are not included because they are global events and not specific to an installation.</td>
</tr>
<tr>
    <td><CopyableCode code="external_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/apps/super-ci)</td>
</tr>
<tr>
    <td><CopyableCode code="installations_count" /></td>
    <td><code>integer</code></td>
    <td>The number of installations associated with the GitHub app. Only returned when the integration is requesting details about itself.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>The set of permissions for the GitHub app</td>
</tr>
<tr>
    <td><CopyableCode code="slug" /></td>
    <td><code>string</code></td>
    <td>The slug name of the GitHub app (example: probot-owners)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-07-08T16:18:44-04:00)</td>
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
    <td><a href="#get_by_slug"><CopyableCode code="get_by_slug" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_slug"><code>app_slug</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).</td>
</tr>
<tr>
    <td><a href="#get_authenticated"><CopyableCode code="get_authenticated" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/rest/apps/apps#list-installations-for-the-authenticated-app)" endpoint.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.</td>
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
<tr id="parameter-app_slug">
    <td><CopyableCode code="app_slug" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_by_slug"
    values={[
        { label: 'get_by_slug', value: 'get_by_slug' },
        { label: 'get_authenticated', value: 'get_authenticated' }
    ]}
>
<TabItem value="get_by_slug">

&gt; [!NOTE]<br />&gt; The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

```sql
SELECT
id,
name,
client_id,
node_id,
created_at,
description,
events,
external_url,
html_url,
installations_count,
owner,
permissions,
slug,
updated_at
FROM github.apps.integrations
WHERE app_slug = '{{ app_slug }}' -- required
;
```
</TabItem>
<TabItem value="get_authenticated">

Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/rest/apps/apps#list-installations-for-the-authenticated-app)" endpoint.<br /><br />You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

```sql
SELECT
id,
name,
client_id,
node_id,
created_at,
description,
events,
external_url,
html_url,
installations_count,
owner,
permissions,
slug,
updated_at
FROM github.apps.integrations
;
```
</TabItem>
</Tabs>
