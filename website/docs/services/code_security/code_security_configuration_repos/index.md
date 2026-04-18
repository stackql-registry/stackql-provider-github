--- 
title: code_security_configuration_repos
hide_title: false
hide_table_of_contents: false
keywords:
  - code_security_configuration_repos
  - code_security
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

Creates, updates, deletes, gets or lists a <code>code_security_configuration_repos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_security_configuration_repos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_security.code_security_configuration_repos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repositories_for_enterprise_configuration"
    values={[
        { label: 'get_repositories_for_enterprise_configuration', value: 'get_repositories_for_enterprise_configuration' },
        { label: 'get_repositories_for_configuration', value: 'get_repositories_for_configuration' }
    ]}
>
<TabItem value="get_repositories_for_enterprise_configuration">

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
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>A GitHub repository. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The attachment status of the code security configuration on the repository. (attached, attaching, detached, removed, enforced, failed, updating, removed_by_enterprise)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_repositories_for_configuration">

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
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>A GitHub repository. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The attachment status of the code security configuration on the repository. (attached, attaching, detached, removed, enforced, failed, updating, removed_by_enterprise)</td>
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
    <td><a href="#get_repositories_for_enterprise_configuration"><CopyableCode code="get_repositories_for_enterprise_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists the repositories associated with an enterprise code security configuration in an organization.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_repositories_for_configuration"><CopyableCode code="get_repositories_for_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists the repositories associated with a code security configuration in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.</td>
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
<tr id="parameter-configuration_id">
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the code security configuration.</td>
</tr>
<tr id="parameter-enterprise">
    <td><CopyableCode code="enterprise" /></td>
    <td><code>string</code></td>
    <td>The slug version of the enterprise name.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of statuses. If specified, only repositories with these attachment statuses will be returned.  Can be: `all`, `attached`, `attaching`, `detached`, `removed`, `enforced`, `failed`, `updating`, `removed_by_enterprise`</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_repositories_for_enterprise_configuration"
    values={[
        { label: 'get_repositories_for_enterprise_configuration', value: 'get_repositories_for_enterprise_configuration' },
        { label: 'get_repositories_for_configuration', value: 'get_repositories_for_configuration' }
    ]}
>
<TabItem value="get_repositories_for_enterprise_configuration">

Lists the repositories associated with an enterprise code security configuration in an organization.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.

```sql
SELECT
repository,
status
FROM github.code_security.code_security_configuration_repos
WHERE enterprise = '{{ enterprise }}' -- required
AND configuration_id = '{{ configuration_id }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND status = '{{ status }}'
;
```
</TabItem>
<TabItem value="get_repositories_for_configuration">

Lists the repositories associated with a code security configuration in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

```sql
SELECT
repository,
status
FROM github.code_security.code_security_configuration_repos
WHERE org = '{{ org }}' -- required
AND configuration_id = '{{ configuration_id }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>
