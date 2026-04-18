--- 
title: docker_migration_packages
hide_title: false
hide_table_of_contents: false
keywords:
  - docker_migration_packages
  - packages
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

Creates, updates, deletes, gets or lists a <code>docker_migration_packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="docker_migration_packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.packages.docker_migration_packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_docker_migration_conflicting_packages_for_organization"
    values={[
        { label: 'list_docker_migration_conflicting_packages_for_organization', value: 'list_docker_migration_conflicting_packages_for_organization' },
        { label: 'list_docker_migration_conflicting_packages_for_user', value: 'list_docker_migration_conflicting_packages_for_user' },
        { label: 'list_docker_migration_conflicting_packages_for_authenticated_user', value: 'list_docker_migration_conflicting_packages_for_authenticated_user' }
    ]}
>
<TabItem value="list_docker_migration_conflicting_packages_for_organization">

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
    <td>Unique identifier of the package.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package. (example: super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="package_type" /></td>
    <td><code>string</code></td>
    <td> (npm, maven, rubygems, docker, nuget, container) (example: docker)</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="version_count" /></td>
    <td><code>integer</code></td>
    <td>The number of versions of the package.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td> (private, public) (example: private)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_docker_migration_conflicting_packages_for_user">

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
    <td>Unique identifier of the package.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package. (example: super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="package_type" /></td>
    <td><code>string</code></td>
    <td> (npm, maven, rubygems, docker, nuget, container) (example: docker)</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="version_count" /></td>
    <td><code>integer</code></td>
    <td>The number of versions of the package.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td> (private, public) (example: private)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_docker_migration_conflicting_packages_for_authenticated_user">

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
    <td>Unique identifier of the package.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package. (example: super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="package_type" /></td>
    <td><code>string</code></td>
    <td> (npm, maven, rubygems, docker, nuget, container) (example: docker)</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>Minimal Repository (title: Minimal Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="version_count" /></td>
    <td><code>integer</code></td>
    <td>The number of versions of the package.</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td> (private, public) (example: private)</td>
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
    <td><a href="#list_docker_migration_conflicting_packages_for_organization"><CopyableCode code="list_docker_migration_conflicting_packages_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Lists all packages that are in a specific organization, are readable by the requesting user, and that encountered a conflict during a Docker migration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_docker_migration_conflicting_packages_for_user"><CopyableCode code="list_docker_migration_conflicting_packages_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Lists all packages that are in a specific user's namespace, that the requesting user has access to, and that encountered a conflict during Docker migration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_docker_migration_conflicting_packages_for_authenticated_user"><CopyableCode code="list_docker_migration_conflicting_packages_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Lists all packages that are owned by the authenticated user within the user's namespace, and that encountered a conflict during a Docker migration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_docker_migration_conflicting_packages_for_organization"
    values={[
        { label: 'list_docker_migration_conflicting_packages_for_organization', value: 'list_docker_migration_conflicting_packages_for_organization' },
        { label: 'list_docker_migration_conflicting_packages_for_user', value: 'list_docker_migration_conflicting_packages_for_user' },
        { label: 'list_docker_migration_conflicting_packages_for_authenticated_user', value: 'list_docker_migration_conflicting_packages_for_authenticated_user' }
    ]}
>
<TabItem value="list_docker_migration_conflicting_packages_for_organization">

Lists all packages that are in a specific organization, are readable by the requesting user, and that encountered a conflict during a Docker migration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.

```sql
SELECT
id,
name,
created_at,
html_url,
owner,
package_type,
repository,
updated_at,
url,
version_count,
visibility
FROM github.packages.docker_migration_packages
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
<TabItem value="list_docker_migration_conflicting_packages_for_user">

Lists all packages that are in a specific user's namespace, that the requesting user has access to, and that encountered a conflict during Docker migration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.

```sql
SELECT
id,
name,
created_at,
html_url,
owner,
package_type,
repository,
updated_at,
url,
version_count,
visibility
FROM github.packages.docker_migration_packages
WHERE username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="list_docker_migration_conflicting_packages_for_authenticated_user">

Lists all packages that are owned by the authenticated user within the user's namespace, and that encountered a conflict during a Docker migration.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint.

```sql
SELECT
id,
name,
created_at,
html_url,
owner,
package_type,
repository,
updated_at,
url,
version_count,
visibility
FROM github.packages.docker_migration_packages
;
```
</TabItem>
</Tabs>
