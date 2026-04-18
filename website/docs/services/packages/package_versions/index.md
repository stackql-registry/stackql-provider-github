--- 
title: package_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - package_versions
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

Creates, updates, deletes, gets or lists a <code>package_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="package_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.packages.package_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_package_version_for_organization"
    values={[
        { label: 'get_package_version_for_organization', value: 'get_package_version_for_organization' },
        { label: 'get_package_version_for_user', value: 'get_package_version_for_user' },
        { label: 'get_all_package_versions_for_package_owned_by_org', value: 'get_all_package_versions_for_package_owned_by_org' },
        { label: 'get_package_version_for_authenticated_user', value: 'get_package_version_for_authenticated_user' },
        { label: 'get_all_package_versions_for_package_owned_by_user', value: 'get_all_package_versions_for_package_owned_by_user' },
        { label: 'get_all_package_versions_for_package_owned_by_authenticated_user', value: 'get_all_package_versions_for_package_owned_by_authenticated_user' }
    ]}
>
<TabItem value="get_package_version_for_organization">

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
    <td>Unique identifier of the package version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package version. (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-10T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/super-linter/786068)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td> (title: Package Version Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="package_html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter/versions/786068)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_package_version_for_user">

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
    <td>Unique identifier of the package version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package version. (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-10T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/super-linter/786068)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td> (title: Package Version Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="package_html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter/versions/786068)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_package_versions_for_package_owned_by_org">

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
    <td>Unique identifier of the package version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package version. (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-10T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/super-linter/786068)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td> (title: Package Version Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="package_html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter/versions/786068)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_package_version_for_authenticated_user">

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
    <td>Unique identifier of the package version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package version. (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-10T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/super-linter/786068)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td> (title: Package Version Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="package_html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter/versions/786068)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_package_versions_for_package_owned_by_user">

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
    <td>Unique identifier of the package version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package version. (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-10T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/super-linter/786068)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td> (title: Package Version Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="package_html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter/versions/786068)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_package_versions_for_package_owned_by_authenticated_user">

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
    <td>Unique identifier of the package version.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the package version. (example: latest)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-10T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/super-linter/786068)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td> (example: MIT)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td> (title: Package Version Metadata)</td>
</tr>
<tr>
    <td><CopyableCode code="package_html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/orgs/github/packages/container/package/super-linter)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/packages/container/super-linter/versions/786068)</td>
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
    <td><a href="#get_package_version_for_organization"><CopyableCode code="get_package_version_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-org"><code>org</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a></td>
    <td></td>
    <td>Gets a specific package version in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#get_package_version_for_user"><CopyableCode code="get_package_version_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Gets a specific package version for a public package owned by a specified user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#get_all_package_versions_for_package_owned_by_org"><CopyableCode code="get_all_package_versions_for_package_owned_by_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Lists package versions for a package owned by an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#get_package_version_for_authenticated_user"><CopyableCode code="get_package_version_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a></td>
    <td></td>
    <td>Gets a specific package version for a package owned by the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#get_all_package_versions_for_package_owned_by_user"><CopyableCode code="get_all_package_versions_for_package_owned_by_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Lists package versions for a public package owned by a specified user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#get_all_package_versions_for_package_owned_by_authenticated_user"><CopyableCode code="get_all_package_versions_for_package_owned_by_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Lists package versions for a package owned by the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#delete_package_version_for_org"><CopyableCode code="delete_package_version_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-org"><code>org</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a></td>
    <td></td>
    <td>Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#delete_package_version_for_user"><CopyableCode code="delete_package_version_for_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a></td>
    <td></td>
    <td>Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.<br /><br />If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#delete_package_version_for_authenticated_user"><CopyableCode code="delete_package_version_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a></td>
    <td></td>
    <td>Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#restore_package_version_for_org"><CopyableCode code="restore_package_version_for_org" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-org"><code>org</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a></td>
    <td></td>
    <td>Restores a specific package version in an organization.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#restore_package_version_for_authenticated_user"><CopyableCode code="restore_package_version_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a></td>
    <td></td>
    <td>Restores a package version owned by the authenticated user.<br /><br />You can restore a deleted package version under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#restore_package_version_for_user"><CopyableCode code="restore_package_version_for_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-package_version_id"><code>package_version_id</code></a></td>
    <td></td>
    <td>Restores a specific package version for a user.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
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
<tr id="parameter-package_name">
    <td><CopyableCode code="package_name" /></td>
    <td><code>string</code></td>
    <td>The name of the package.</td>
</tr>
<tr id="parameter-package_type">
    <td><CopyableCode code="package_type" /></td>
    <td><code>string</code></td>
    <td>The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.</td>
</tr>
<tr id="parameter-package_version_id">
    <td><CopyableCode code="package_version_id" /></td>
    <td><code>integer</code></td>
    <td>Unique identifier of the package version.</td>
</tr>
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
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the package, either active or deleted.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_package_version_for_organization"
    values={[
        { label: 'get_package_version_for_organization', value: 'get_package_version_for_organization' },
        { label: 'get_package_version_for_user', value: 'get_package_version_for_user' },
        { label: 'get_all_package_versions_for_package_owned_by_org', value: 'get_all_package_versions_for_package_owned_by_org' },
        { label: 'get_package_version_for_authenticated_user', value: 'get_package_version_for_authenticated_user' },
        { label: 'get_all_package_versions_for_package_owned_by_user', value: 'get_all_package_versions_for_package_owned_by_user' },
        { label: 'get_all_package_versions_for_package_owned_by_authenticated_user', value: 'get_all_package_versions_for_package_owned_by_authenticated_user' }
    ]}
>
<TabItem value="get_package_version_for_organization">

Gets a specific package version in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
SELECT
id,
name,
created_at,
deleted_at,
description,
html_url,
license,
metadata,
package_html_url,
updated_at,
url
FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
AND org = '{{ org }}' -- required
AND package_version_id = '{{ package_version_id }}' -- required
;
```
</TabItem>
<TabItem value="get_package_version_for_user">

Gets a specific package version for a public package owned by a specified user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
SELECT
id,
name,
created_at,
deleted_at,
description,
html_url,
license,
metadata,
package_html_url,
updated_at,
url
FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
AND package_version_id = '{{ package_version_id }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="get_all_package_versions_for_package_owned_by_org">

Lists package versions for a package owned by an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
SELECT
id,
name,
created_at,
deleted_at,
description,
html_url,
license,
metadata,
package_html_url,
updated_at,
url
FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
AND org = '{{ org }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND state = '{{ state }}'
;
```
</TabItem>
<TabItem value="get_package_version_for_authenticated_user">

Gets a specific package version for a package owned by the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
SELECT
id,
name,
created_at,
deleted_at,
description,
html_url,
license,
metadata,
package_html_url,
updated_at,
url
FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
AND package_version_id = '{{ package_version_id }}' -- required
;
```
</TabItem>
<TabItem value="get_all_package_versions_for_package_owned_by_user">

Lists package versions for a public package owned by a specified user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
SELECT
id,
name,
created_at,
deleted_at,
description,
html_url,
license,
metadata,
package_html_url,
updated_at,
url
FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="get_all_package_versions_for_package_owned_by_authenticated_user">

Lists package versions for a package owned by the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
SELECT
id,
name,
created_at,
deleted_at,
description,
html_url,
license,
metadata,
package_html_url,
updated_at,
url
FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND state = '{{ state }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_package_version_for_org"
    values={[
        { label: 'delete_package_version_for_org', value: 'delete_package_version_for_org' },
        { label: 'delete_package_version_for_user', value: 'delete_package_version_for_user' },
        { label: 'delete_package_version_for_authenticated_user', value: 'delete_package_version_for_authenticated_user' }
    ]}
>
<TabItem value="delete_package_version_for_org">

Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
DELETE FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' --required
AND package_name = '{{ package_name }}' --required
AND org = '{{ org }}' --required
AND package_version_id = '{{ package_version_id }}' --required
;
```
</TabItem>
<TabItem value="delete_package_version_for_user">

Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.<br /><br />If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
DELETE FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' --required
AND package_name = '{{ package_name }}' --required
AND username = '{{ username }}' --required
AND package_version_id = '{{ package_version_id }}' --required
;
```
</TabItem>
<TabItem value="delete_package_version_for_authenticated_user">

Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
DELETE FROM github.packages.package_versions
WHERE package_type = '{{ package_type }}' --required
AND package_name = '{{ package_name }}' --required
AND package_version_id = '{{ package_version_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_package_version_for_org"
    values={[
        { label: 'restore_package_version_for_org', value: 'restore_package_version_for_org' },
        { label: 'restore_package_version_for_authenticated_user', value: 'restore_package_version_for_authenticated_user' },
        { label: 'restore_package_version_for_user', value: 'restore_package_version_for_user' }
    ]}
>
<TabItem value="restore_package_version_for_org">

Restores a specific package version in an organization.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
EXEC github.packages.package_versions.restore_package_version_for_org 
@package_type='{{ package_type }}' --required, 
@package_name='{{ package_name }}' --required, 
@org='{{ org }}' --required, 
@package_version_id='{{ package_version_id }}' --required
;
```
</TabItem>
<TabItem value="restore_package_version_for_authenticated_user">

Restores a package version owned by the authenticated user.<br /><br />You can restore a deleted package version under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
EXEC github.packages.package_versions.restore_package_version_for_authenticated_user 
@package_type='{{ package_type }}' --required, 
@package_name='{{ package_name }}' --required, 
@package_version_id='{{ package_version_id }}' --required
;
```
</TabItem>
<TabItem value="restore_package_version_for_user">

Restores a specific package version for a user.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
EXEC github.packages.package_versions.restore_package_version_for_user 
@package_type='{{ package_type }}' --required, 
@package_name='{{ package_name }}' --required, 
@username='{{ username }}' --required, 
@package_version_id='{{ package_version_id }}' --required
;
```
</TabItem>
</Tabs>
