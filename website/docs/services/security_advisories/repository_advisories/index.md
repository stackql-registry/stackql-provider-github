--- 
title: repository_advisories
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_advisories
  - security_advisories
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

Creates, updates, deletes, gets or lists a <code>repository_advisories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_advisories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.security_advisories.repository_advisories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_advisory"
    values={[
        { label: 'get_repository_advisory', value: 'get_repository_advisory' },
        { label: 'list_repository_advisories', value: 'list_repository_advisories' },
        { label: 'list_org_repository_advisories', value: 'list_org_repository_advisories' }
    ]}
>
<TabItem value="get_repository_advisory">

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
    <td><CopyableCode code="cve_id" /></td>
    <td><code>string</code></td>
    <td>The Common Vulnerabilities and Exposures (CVE) ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>The GitHub Security Advisory ID.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>The author of the advisory. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was closed, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="collaborating_teams" /></td>
    <td><code>array</code></td>
    <td>A list of teams that collaborate on the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="collaborating_users" /></td>
    <td><code>array</code></td>
    <td>A list of users that collaborate on the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="credits_detailed" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cvss" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cvss_severities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cwe_ids" /></td>
    <td><code>array</code></td>
    <td>A list of only the CWE IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="cwes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of what the advisory entails.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="identifiers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_fork" /></td>
    <td><code>object</code></td>
    <td>A temporary private fork of the advisory's repository for collaborating on a fix. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was published, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>object</code></td>
    <td>The publisher of the advisory. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the advisory. (critical, high, medium, low)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the advisory. (published, closed, withdrawn, draft, triage)</td>
</tr>
<tr>
    <td><CopyableCode code="submission" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short summary of the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was last updated, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="withdrawn_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was withdrawn, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repository_advisories">

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
    <td><CopyableCode code="cve_id" /></td>
    <td><code>string</code></td>
    <td>The Common Vulnerabilities and Exposures (CVE) ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>The GitHub Security Advisory ID.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>The author of the advisory. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was closed, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="collaborating_teams" /></td>
    <td><code>array</code></td>
    <td>A list of teams that collaborate on the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="collaborating_users" /></td>
    <td><code>array</code></td>
    <td>A list of users that collaborate on the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="credits_detailed" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cvss" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cvss_severities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cwe_ids" /></td>
    <td><code>array</code></td>
    <td>A list of only the CWE IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="cwes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of what the advisory entails.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="identifiers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_fork" /></td>
    <td><code>object</code></td>
    <td>A temporary private fork of the advisory's repository for collaborating on a fix. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was published, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>object</code></td>
    <td>The publisher of the advisory. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the advisory. (critical, high, medium, low)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the advisory. (published, closed, withdrawn, draft, triage)</td>
</tr>
<tr>
    <td><CopyableCode code="submission" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short summary of the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was last updated, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="withdrawn_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was withdrawn, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_repository_advisories">

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
    <td><CopyableCode code="cve_id" /></td>
    <td><code>string</code></td>
    <td>The Common Vulnerabilities and Exposures (CVE) ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>The GitHub Security Advisory ID.</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>The author of the advisory. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was closed, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="collaborating_teams" /></td>
    <td><code>array</code></td>
    <td>A list of teams that collaborate on the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="collaborating_users" /></td>
    <td><code>array</code></td>
    <td>A list of users that collaborate on the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was created, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="credits_detailed" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cvss" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cvss_severities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cwe_ids" /></td>
    <td><code>array</code></td>
    <td>A list of only the CWE IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="cwes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of what the advisory entails.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="identifiers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_fork" /></td>
    <td><code>object</code></td>
    <td>A temporary private fork of the advisory's repository for collaborating on a fix. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was published, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="publisher" /></td>
    <td><code>object</code></td>
    <td>The publisher of the advisory. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the advisory. (critical, high, medium, low)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the advisory. (published, closed, withdrawn, draft, triage)</td>
</tr>
<tr>
    <td><CopyableCode code="submission" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short summary of the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was last updated, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilities" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="withdrawn_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was withdrawn, in ISO 8601 format.</td>
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
    <td><a href="#get_repository_advisory"><CopyableCode code="get_repository_advisory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ghsa_id"><code>ghsa_id</code></a></td>
    <td></td>
    <td>Get a repository security advisory using its GitHub Security Advisory (GHSA) identifier.<br /><br />Anyone can access any published security advisory on a public repository.<br /><br />The authenticated user can access an unpublished security advisory from a repository if they are a security manager or administrator of that repository, or if they are a<br />collaborator on the security advisory.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:read` scope to to get a published security advisory in a private repository, or any unpublished security advisory that the authenticated user has access to.</td>
</tr>
<tr>
    <td><a href="#list_repository_advisories"><CopyableCode code="list_repository_advisories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Lists security advisories in a repository.<br /><br />The authenticated user can access unpublished security advisories from a repository if they are a security manager or administrator of that repository, or if they are a collaborator on any security advisory.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:read` scope to to get a published security advisory in a private repository, or any unpublished security advisory that the authenticated user has access to.</td>
</tr>
<tr>
    <td><a href="#list_org_repository_advisories"><CopyableCode code="list_org_repository_advisories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td>Lists repository security advisories for an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_repository_advisory_cve_request"><CopyableCode code="create_repository_advisory_cve_request" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ghsa_id"><code>ghsa_id</code></a></td>
    <td></td>
    <td>If you want a CVE identification number for the security vulnerability in your project, and don't already have one, you can request a CVE identification number from GitHub. For more information see "[Requesting a CVE identification number](https://docs.github.com/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory#requesting-a-cve-identification-number-optional)."<br /><br />You may request a CVE for public repositories, but cannot do so for private repositories.<br /><br />In order to request a CVE for a repository security advisory, the authenticated user must be a security manager or administrator of that repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_repository_advisory"><CopyableCode code="create_repository_advisory" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-summary"><code>summary</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-vulnerabilities"><code>vulnerabilities</code></a></td>
    <td></td>
    <td>Creates a new repository security advisory.<br /><br />In order to create a draft repository security advisory, the authenticated user must be a security manager or administrator of that repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_repository_advisory"><CopyableCode code="update_repository_advisory" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ghsa_id"><code>ghsa_id</code></a></td>
    <td></td>
    <td>Update a repository security advisory using its GitHub Security Advisory (GHSA) identifier.<br /><br />In order to update any security advisory, the authenticated user must be a security manager or administrator of that repository,<br />or a collaborator on the repository security advisory.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.</td>
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
<tr id="parameter-ghsa_id">
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>The GHSA (GitHub Security Advisory) identifier of the advisory.</td>
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
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of advisories to return per page. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property to sort the results by.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter by the state of the repository advisories. Only advisories of this state will be returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_repository_advisory"
    values={[
        { label: 'get_repository_advisory', value: 'get_repository_advisory' },
        { label: 'list_repository_advisories', value: 'list_repository_advisories' },
        { label: 'list_org_repository_advisories', value: 'list_org_repository_advisories' }
    ]}
>
<TabItem value="get_repository_advisory">

Get a repository security advisory using its GitHub Security Advisory (GHSA) identifier.<br /><br />Anyone can access any published security advisory on a public repository.<br /><br />The authenticated user can access an unpublished security advisory from a repository if they are a security manager or administrator of that repository, or if they are a<br />collaborator on the security advisory.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:read` scope to to get a published security advisory in a private repository, or any unpublished security advisory that the authenticated user has access to.

```sql
SELECT
cve_id,
ghsa_id,
author,
closed_at,
collaborating_teams,
collaborating_users,
created_at,
credits,
credits_detailed,
cvss,
cvss_severities,
cwe_ids,
cwes,
description,
html_url,
identifiers,
private_fork,
published_at,
publisher,
severity,
state,
submission,
summary,
updated_at,
url,
vulnerabilities,
withdrawn_at
FROM github.security_advisories.repository_advisories
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ghsa_id = '{{ ghsa_id }}' -- required
;
```
</TabItem>
<TabItem value="list_repository_advisories">

Lists security advisories in a repository.<br /><br />The authenticated user can access unpublished security advisories from a repository if they are a security manager or administrator of that repository, or if they are a collaborator on any security advisory.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:read` scope to to get a published security advisory in a private repository, or any unpublished security advisory that the authenticated user has access to.

```sql
SELECT
cve_id,
ghsa_id,
author,
closed_at,
collaborating_teams,
collaborating_users,
created_at,
credits,
credits_detailed,
cvss,
cvss_severities,
cwe_ids,
cwes,
description,
html_url,
identifiers,
private_fork,
published_at,
publisher,
severity,
state,
submission,
summary,
updated_at,
url,
vulnerabilities,
withdrawn_at
FROM github.security_advisories.repository_advisories
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND direction = '{{ direction }}'
AND sort = '{{ sort }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
AND state = '{{ state }}'
;
```
</TabItem>
<TabItem value="list_org_repository_advisories">

Lists repository security advisories for an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.

```sql
SELECT
cve_id,
ghsa_id,
author,
closed_at,
collaborating_teams,
collaborating_users,
created_at,
credits,
credits_detailed,
cvss,
cvss_severities,
cwe_ids,
cwes,
description,
html_url,
identifiers,
private_fork,
published_at,
publisher,
severity,
state,
submission,
summary,
updated_at,
url,
vulnerabilities,
withdrawn_at
FROM github.security_advisories.repository_advisories
WHERE org = '{{ org }}' -- required
AND direction = '{{ direction }}'
AND sort = '{{ sort }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
AND state = '{{ state }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_repository_advisory_cve_request"
    values={[
        { label: 'create_repository_advisory_cve_request', value: 'create_repository_advisory_cve_request' },
        { label: 'create_repository_advisory', value: 'create_repository_advisory' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_repository_advisory_cve_request">

If you want a CVE identification number for the security vulnerability in your project, and don't already have one, you can request a CVE identification number from GitHub. For more information see "[Requesting a CVE identification number](https://docs.github.com/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory#requesting-a-cve-identification-number-optional)."<br /><br />You may request a CVE for public repositories, but cannot do so for private repositories.<br /><br />In order to request a CVE for a repository security advisory, the authenticated user must be a security manager or administrator of that repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.

```sql
INSERT INTO github.security_advisories.repository_advisories (
owner,
repo,
ghsa_id
)
SELECT 
'{{ owner }}',
'{{ repo }}',
'{{ ghsa_id }}'
;
```
</TabItem>
<TabItem value="create_repository_advisory">

Creates a new repository security advisory.<br /><br />In order to create a draft repository security advisory, the authenticated user must be a security manager or administrator of that repository.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.

```sql
INSERT INTO github.security_advisories.repository_advisories (
summary,
description,
cve_id,
vulnerabilities,
cwe_ids,
credits,
severity,
cvss_vector_string,
start_private_fork,
owner,
repo
)
SELECT 
'{{ summary }}' /* required */,
'{{ description }}' /* required */,
'{{ cve_id }}',
'{{ vulnerabilities }}' /* required */,
'{{ cwe_ids }}',
'{{ credits }}',
'{{ severity }}',
'{{ cvss_vector_string }}',
{{ start_private_fork }},
'{{ owner }}',
'{{ repo }}'
RETURNING
cve_id,
ghsa_id,
author,
closed_at,
collaborating_teams,
collaborating_users,
created_at,
credits,
credits_detailed,
cvss,
cvss_severities,
cwe_ids,
cwes,
description,
html_url,
identifiers,
private_fork,
published_at,
publisher,
severity,
state,
submission,
summary,
updated_at,
url,
vulnerabilities,
withdrawn_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repository_advisories
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the repository_advisories resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the repository_advisories resource.
    - name: ghsa_id
      value: "{{ ghsa_id }}"
      description: Required parameter for the repository_advisories resource.
    - name: summary
      value: "{{ summary }}"
      description: |
        A short summary of the advisory.
    - name: description
      value: "{{ description }}"
      description: |
        A detailed description of what the advisory impacts.
    - name: cve_id
      value: "{{ cve_id }}"
      description: |
        The Common Vulnerabilities and Exposures (CVE) ID.
    - name: vulnerabilities
      description: |
        A product affected by the vulnerability detailed in a repository security advisory.
      value:
        - package:
            ecosystem: "{{ ecosystem }}"
            name: "{{ name }}"
          vulnerable_version_range: "{{ vulnerable_version_range }}"
          patched_versions: "{{ patched_versions }}"
          vulnerable_functions: "{{ vulnerable_functions }}"
    - name: cwe_ids
      value:
        - "{{ cwe_ids }}"
      description: |
        A list of Common Weakness Enumeration (CWE) IDs.
    - name: credits
      description: |
        A list of users receiving credit for their participation in the security advisory.
      value:
        - login: "{{ login }}"
          type: "{{ type }}"
    - name: severity
      value: "{{ severity }}"
      description: |
        The severity of the advisory. You must choose between setting this field or \`cvss_vector_string\`.
      valid_values: ['critical', 'high', 'medium', 'low']
    - name: cvss_vector_string
      value: "{{ cvss_vector_string }}"
      description: |
        The CVSS vector that calculates the severity of the advisory. You must choose between setting this field or \`severity\`.
    - name: start_private_fork
      value: {{ start_private_fork }}
      description: |
        Whether to create a temporary private fork of the repository to collaborate on a fix.
      default: false
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_repository_advisory"
    values={[
        { label: 'update_repository_advisory', value: 'update_repository_advisory' }
    ]}
>
<TabItem value="update_repository_advisory">

Update a repository security advisory using its GitHub Security Advisory (GHSA) identifier.<br /><br />In order to update any security advisory, the authenticated user must be a security manager or administrator of that repository,<br />or a collaborator on the repository security advisory.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repository_advisories:write` scope to use this endpoint.

```sql
UPDATE github.security_advisories.repository_advisories
SET 
summary = '{{ summary }}',
description = '{{ description }}',
cve_id = '{{ cve_id }}',
vulnerabilities = '{{ vulnerabilities }}',
cwe_ids = '{{ cwe_ids }}',
credits = '{{ credits }}',
severity = '{{ severity }}',
cvss_vector_string = '{{ cvss_vector_string }}',
state = '{{ state }}',
collaborating_users = '{{ collaborating_users }}',
collaborating_teams = '{{ collaborating_teams }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND ghsa_id = '{{ ghsa_id }}' --required
RETURNING
cve_id,
ghsa_id,
author,
closed_at,
collaborating_teams,
collaborating_users,
created_at,
credits,
credits_detailed,
cvss,
cvss_severities,
cwe_ids,
cwes,
description,
html_url,
identifiers,
private_fork,
published_at,
publisher,
severity,
state,
submission,
summary,
updated_at,
url,
vulnerabilities,
withdrawn_at;
```
</TabItem>
</Tabs>
