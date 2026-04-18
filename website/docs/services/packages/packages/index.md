--- 
title: packages
hide_title: false
hide_table_of_contents: false
keywords:
  - packages
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

Creates, updates, deletes, gets or lists a <code>packages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="packages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.packages.packages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_package_for_organization"
    values={[
        { label: 'get_package_for_organization', value: 'get_package_for_organization' },
        { label: 'get_package_for_user', value: 'get_package_for_user' },
        { label: 'get_package_for_authenticated_user', value: 'get_package_for_authenticated_user' },
        { label: 'list_packages_for_organization', value: 'list_packages_for_organization' },
        { label: 'list_packages_for_user', value: 'list_packages_for_user' },
        { label: 'list_packages_for_authenticated_user', value: 'list_packages_for_authenticated_user' }
    ]}
>
<TabItem value="get_package_for_organization">

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
<TabItem value="get_package_for_user">

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
<TabItem value="get_package_for_authenticated_user">

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
<TabItem value="list_packages_for_organization">

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
<TabItem value="list_packages_for_user">

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
<TabItem value="list_packages_for_authenticated_user">

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
    <td><a href="#get_package_for_organization"><CopyableCode code="get_package_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets a specific package in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#get_package_for_user"><CopyableCode code="get_package_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Gets a specific package metadata for a public package owned by a user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#get_package_for_authenticated_user"><CopyableCode code="get_package_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a></td>
    <td></td>
    <td>Gets a specific package for a package owned by the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#list_packages_for_organization"><CopyableCode code="list_packages_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists packages in an organization readable by the user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#list_packages_for_user"><CopyableCode code="list_packages_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists all packages in a user's namespace for which the requesting user has access.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#list_packages_for_authenticated_user"><CopyableCode code="list_packages_for_authenticated_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a></td>
    <td><a href="#parameter-visibility"><code>visibility</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists packages owned by the authenticated user within the user's namespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#delete_package_for_org"><CopyableCode code="delete_package_for_org" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#delete_package_for_user"><CopyableCode code="delete_package_for_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Deletes an entire package for a user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.<br /><br />If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#delete_package_for_authenticated_user"><CopyableCode code="delete_package_for_authenticated_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a></td>
    <td></td>
    <td>Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#restore_package_for_org"><CopyableCode code="restore_package_for_org" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td>Restores an entire package in an organization.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#restore_package_for_authenticated_user"><CopyableCode code="restore_package_for_authenticated_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td>Restores a package owned by the authenticated user.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
</tr>
<tr>
    <td><a href="#restore_package_for_user"><CopyableCode code="restore_package_for_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-package_type"><code>package_type</code></a>, <a href="#parameter-package_name"><code>package_name</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-token"><code>token</code></a></td>
    <td>Restores an entire package for a user.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."</td>
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
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>package token</td>
</tr>
<tr id="parameter-visibility">
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The selected visibility of the packages.  This parameter is optional and only filters an existing result set.  The `internal` visibility is only supported for GitHub Packages registries that allow for granular permissions. For other ecosystems `internal` is synonymous with `private`. For the list of GitHub Packages registries that support granular permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_package_for_organization"
    values={[
        { label: 'get_package_for_organization', value: 'get_package_for_organization' },
        { label: 'get_package_for_user', value: 'get_package_for_user' },
        { label: 'get_package_for_authenticated_user', value: 'get_package_for_authenticated_user' },
        { label: 'list_packages_for_organization', value: 'list_packages_for_organization' },
        { label: 'list_packages_for_user', value: 'list_packages_for_user' },
        { label: 'list_packages_for_authenticated_user', value: 'list_packages_for_authenticated_user' }
    ]}
>
<TabItem value="get_package_for_organization">

Gets a specific package in an organization.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

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
FROM github.packages.packages
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
AND org = '{{ org }}' -- required
;
```
</TabItem>
<TabItem value="get_package_for_user">

Gets a specific package metadata for a public package owned by a user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

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
FROM github.packages.packages
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
AND username = '{{ username }}' -- required
;
```
</TabItem>
<TabItem value="get_package_for_authenticated_user">

Gets a specific package for a package owned by the authenticated user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

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
FROM github.packages.packages
WHERE package_type = '{{ package_type }}' -- required
AND package_name = '{{ package_name }}' -- required
;
```
</TabItem>
<TabItem value="list_packages_for_organization">

Lists packages in an organization readable by the user.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

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
FROM github.packages.packages
WHERE package_type = '{{ package_type }}' -- required
AND org = '{{ org }}' -- required
AND visibility = '{{ visibility }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list_packages_for_user">

Lists all packages in a user's namespace for which the requesting user has access.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

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
FROM github.packages.packages
WHERE package_type = '{{ package_type }}' -- required
AND username = '{{ username }}' -- required
AND visibility = '{{ visibility }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list_packages_for_authenticated_user">

Lists packages owned by the authenticated user within the user's namespace.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` scope to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

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
FROM github.packages.packages
WHERE package_type = '{{ package_type }}' -- required
AND visibility = '{{ visibility }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_package_for_org"
    values={[
        { label: 'delete_package_for_org', value: 'delete_package_for_org' },
        { label: 'delete_package_for_user', value: 'delete_package_for_user' },
        { label: 'delete_package_for_authenticated_user', value: 'delete_package_for_authenticated_user' }
    ]}
>
<TabItem value="delete_package_for_org">

Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
DELETE FROM github.packages.packages
WHERE package_type = '{{ package_type }}' --required
AND package_name = '{{ package_name }}' --required
AND org = '{{ org }}' --required
;
```
</TabItem>
<TabItem value="delete_package_for_user">

Deletes an entire package for a user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.<br /><br />If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
DELETE FROM github.packages.packages
WHERE package_type = '{{ package_type }}' --required
AND package_name = '{{ package_name }}' --required
AND username = '{{ username }}' --required
;
```
</TabItem>
<TabItem value="delete_package_for_authenticated_user">

Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `delete:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
DELETE FROM github.packages.packages
WHERE package_type = '{{ package_type }}' --required
AND package_name = '{{ package_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="restore_package_for_org"
    values={[
        { label: 'restore_package_for_org', value: 'restore_package_for_org' },
        { label: 'restore_package_for_authenticated_user', value: 'restore_package_for_authenticated_user' },
        { label: 'restore_package_for_user', value: 'restore_package_for_user' }
    ]}
>
<TabItem value="restore_package_for_org">

Restores an entire package in an organization.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />The authenticated user must have admin permissions in the organization to use this endpoint. If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must also have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
EXEC github.packages.packages.restore_package_for_org 
@package_type='{{ package_type }}' --required, 
@package_name='{{ package_name }}' --required, 
@org='{{ org }}' --required, 
@token='{{ token }}'
;
```
</TabItem>
<TabItem value="restore_package_for_authenticated_user">

Restores a package owned by the authenticated user.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
EXEC github.packages.packages.restore_package_for_authenticated_user 
@package_type='{{ package_type }}' --required, 
@package_name='{{ package_name }}' --required, 
@token='{{ token }}'
;
```
</TabItem>
<TabItem value="restore_package_for_user">

Restores an entire package for a user.<br /><br />You can restore a deleted package under the following conditions:<br />  - The package was deleted within the last 30 days.<br />  - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.<br /><br />If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, the authenticated user must have admin permissions to the package. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:packages` and `write:packages` scopes to use this endpoint. For more information, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."

```sql
EXEC github.packages.packages.restore_package_for_user 
@package_type='{{ package_type }}' --required, 
@package_name='{{ package_name }}' --required, 
@username='{{ username }}' --required, 
@token='{{ token }}'
;
```
</TabItem>
</Tabs>
