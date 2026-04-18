--- 
title: org_dependabot_repository_access
hide_title: false
hide_table_of_contents: false
keywords:
  - org_dependabot_repository_access
  - dependabot
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

Creates, updates, deletes, gets or lists an <code>org_dependabot_repository_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_dependabot_repository_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.dependabot.org_dependabot_repository_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="repository_access_for_org"
    values={[
        { label: 'repository_access_for_org', value: 'repository_access_for_org' }
    ]}
>
<TabItem value="repository_access_for_org">

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
    <td><CopyableCode code="accessible_repositories" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="default_level" /></td>
    <td><code>string</code></td>
    <td>The default repository access level for Dependabot updates. (public, internal) (example: internal)</td>
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
    <td><a href="#repository_access_for_org"><CopyableCode code="repository_access_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists repositories that organization admins have allowed Dependabot to access when updating dependencies.<br />&gt; [!NOTE]<br />&gt;    This operation supports both server-to-server and user-to-server access.<br />Unauthorized users will not see the existence of this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_repository_access_for_org"><CopyableCode code="update_repository_access_for_org" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Updates repositories according to the list of repositories that organization admins have given Dependabot access to when they've updated dependencies.<br /><br />&gt; [!NOTE]<br />&gt;    This operation supports both server-to-server and user-to-server access.<br />Unauthorized users will not see the existence of this endpoint.<br /><br />**Example request body:**<br />```json<br />&#123;<br />  "repository_ids_to_add": [123, 456],<br />  "repository_ids_to_remove": [789]<br />&#125;<br />```</td>
</tr>
<tr>
    <td><a href="#set_repository_access_default_level"><CopyableCode code="set_repository_access_default_level" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-default_level"><code>default_level</code></a></td>
    <td></td>
    <td>Sets the default level of repository access Dependabot will have while performing an update.  Available values are:<br />- 'public' - Dependabot will only have access to public repositories, unless access is explicitly granted to non-public repositories.<br />- 'internal' - Dependabot will only have access to public and internal repositories, unless access is explicitly granted to private repositories.<br /><br />Unauthorized users will not see the existence of this endpoint.<br /><br />This operation supports both server-to-server and user-to-server access.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of results to fetch.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>Number of results per page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="repository_access_for_org"
    values={[
        { label: 'repository_access_for_org', value: 'repository_access_for_org' }
    ]}
>
<TabItem value="repository_access_for_org">

Lists repositories that organization admins have allowed Dependabot to access when updating dependencies.<br />&gt; [!NOTE]<br />&gt;    This operation supports both server-to-server and user-to-server access.<br />Unauthorized users will not see the existence of this endpoint.

```sql
SELECT
accessible_repositories,
default_level
FROM github.dependabot.org_dependabot_repository_access
WHERE org = '{{ org }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_repository_access_for_org"
    values={[
        { label: 'update_repository_access_for_org', value: 'update_repository_access_for_org' }
    ]}
>
<TabItem value="update_repository_access_for_org">

Updates repositories according to the list of repositories that organization admins have given Dependabot access to when they've updated dependencies.<br /><br />&gt; [!NOTE]<br />&gt;    This operation supports both server-to-server and user-to-server access.<br />Unauthorized users will not see the existence of this endpoint.<br /><br />**Example request body:**<br />```json<br />&#123;<br />  "repository_ids_to_add": [123, 456],<br />  "repository_ids_to_remove": [789]<br />&#125;<br />```

```sql
UPDATE github.dependabot.org_dependabot_repository_access
SET 
repository_ids_to_add = '{{ repository_ids_to_add }}',
repository_ids_to_remove = '{{ repository_ids_to_remove }}'
WHERE 
org = '{{ org }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_repository_access_default_level"
    values={[
        { label: 'set_repository_access_default_level', value: 'set_repository_access_default_level' }
    ]}
>
<TabItem value="set_repository_access_default_level">

Sets the default level of repository access Dependabot will have while performing an update.  Available values are:<br />- 'public' - Dependabot will only have access to public repositories, unless access is explicitly granted to non-public repositories.<br />- 'internal' - Dependabot will only have access to public and internal repositories, unless access is explicitly granted to private repositories.<br /><br />Unauthorized users will not see the existence of this endpoint.<br /><br />This operation supports both server-to-server and user-to-server access.

```sql
REPLACE github.dependabot.org_dependabot_repository_access
SET 
default_level = '{{ default_level }}'
WHERE 
org = '{{ org }}' --required
AND default_level = '{{ default_level }}' --required;
```
</TabItem>
</Tabs>
