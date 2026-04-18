--- 
title: alert_items
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_items
  - code_scanning
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

Creates, updates, deletes, gets or lists an <code>alert_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.alert_items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_alerts_for_repo"
    values={[
        { label: 'list_alerts_for_repo', value: 'list_alerts_for_repo' },
        { label: 'list_alerts_for_org', value: 'list_alerts_for_org' }
    ]}
>
<TabItem value="list_alerts_for_repo">

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
    <td><CopyableCode code="assignees" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissal_approved_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_comment" /></td>
    <td><code>string</code></td>
    <td>The dismissal comment associated with the dismissal of the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_reason" /></td>
    <td><code>string</code></td>
    <td>**Required when the state is dismissed.** The reason for dismissing or closing the alert. (false positive, won't fix, used in tests)</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The GitHub URL of the alert resource.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL for fetching the list of instances for an alert.</td>
</tr>
<tr>
    <td><CopyableCode code="most_recent_instance" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The security alert number.</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a code scanning alert. (open, dismissed, fixed)</td>
</tr>
<tr>
    <td><CopyableCode code="tool" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the alert resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_alerts_for_org">

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
    <td><CopyableCode code="assignees" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissal_approved_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_comment" /></td>
    <td><code>string</code></td>
    <td>The dismissal comment associated with the dismissal of the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_reason" /></td>
    <td><code>string</code></td>
    <td>**Required when the state is dismissed.** The reason for dismissing or closing the alert. (false positive, won't fix, used in tests)</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The GitHub URL of the alert resource.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL for fetching the list of instances for an alert.</td>
</tr>
<tr>
    <td><CopyableCode code="most_recent_instance" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The security alert number.</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>A GitHub repository. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="rule" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a code scanning alert. (open, dismissed, fixed)</td>
</tr>
<tr>
    <td><CopyableCode code="tool" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the alert resource.</td>
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
    <td><a href="#list_alerts_for_repo"><CopyableCode code="list_alerts_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-tool_name"><code>tool_name</code></a>, <a href="#parameter-tool_guid"><code>tool_guid</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-pr"><code>pr</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-assignees"><code>assignees</code></a></td>
    <td>Lists code scanning alerts.<br /><br />The response includes a `most_recent_instance` object.<br />This provides details of the most recent instance of this alert<br />for the default branch (or for the specified Git reference if you used `ref` in the request).<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#list_alerts_for_org"><CopyableCode code="list_alerts_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-tool_name"><code>tool_name</code></a>, <a href="#parameter-tool_guid"><code>tool_guid</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-assignees"><code>assignees</code></a></td>
    <td>Lists code scanning alerts for the default branch for all eligible repositories in an organization. Eligible repositories are repositories that are owned by organizations that you own or for which you are a security manager. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` or `repo`s cope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
<tr id="parameter-assignees">
    <td><CopyableCode code="assignees" /></td>
    <td><code>string</code></td>
    <td>Filter alerts by assignees. Provide a comma-separated list of user handles (e.g., `octocat` or `octocat,hubot`). Use `*` to list alerts with at least one assignee or `none` to list alerts with no assignees. </td>
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
<tr id="parameter-pr">
    <td><CopyableCode code="pr" /></td>
    <td><code>integer</code></td>
    <td>The number of the pull request for the results you want to list.</td>
</tr>
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.</td>
</tr>
<tr id="parameter-severity">
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>If specified, only code scanning alerts with this severity will be returned.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property by which to sort the results.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>If specified, only code scanning alerts with this state will be returned.</td>
</tr>
<tr id="parameter-tool_guid">
    <td><CopyableCode code="tool_guid" /></td>
    <td><code>string</code></td>
    <td>The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.</td>
</tr>
<tr id="parameter-tool_name">
    <td><CopyableCode code="tool_name" /></td>
    <td><code>string</code></td>
    <td>The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_alerts_for_repo"
    values={[
        { label: 'list_alerts_for_repo', value: 'list_alerts_for_repo' },
        { label: 'list_alerts_for_org', value: 'list_alerts_for_org' }
    ]}
>
<TabItem value="list_alerts_for_repo">

Lists code scanning alerts.<br /><br />The response includes a `most_recent_instance` object.<br />This provides details of the most recent instance of this alert<br />for the default branch (or for the specified Git reference if you used `ref` in the request).<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
assignees,
created_at,
dismissal_approved_by,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
instances_url,
most_recent_instance,
number,
rule,
state,
tool,
updated_at,
url
FROM github.code_scanning.alert_items
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND tool_name = '{{ tool_name }}'
AND tool_guid = '{{ tool_guid }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND ref = '{{ ref }}'
AND pr = '{{ pr }}'
AND direction = '{{ direction }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND sort = '{{ sort }}'
AND state = '{{ state }}'
AND severity = '{{ severity }}'
AND assignees = '{{ assignees }}'
;
```
</TabItem>
<TabItem value="list_alerts_for_org">

Lists code scanning alerts for the default branch for all eligible repositories in an organization. Eligible repositories are repositories that are owned by organizations that you own or for which you are a security manager. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` or `repo`s cope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
assignees,
created_at,
dismissal_approved_by,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
instances_url,
most_recent_instance,
number,
repository,
rule,
state,
tool,
updated_at,
url
FROM github.code_scanning.alert_items
WHERE org = '{{ org }}' -- required
AND tool_name = '{{ tool_name }}'
AND tool_guid = '{{ tool_guid }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND direction = '{{ direction }}'
AND state = '{{ state }}'
AND sort = '{{ sort }}'
AND severity = '{{ severity }}'
AND assignees = '{{ assignees }}'
;
```
</TabItem>
</Tabs>
