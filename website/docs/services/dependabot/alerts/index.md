--- 
title: alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts
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

Creates, updates, deletes, gets or lists an <code>alerts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alerts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.dependabot.alerts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alert"
    values={[
        { label: 'get_alert', value: 'get_alert' },
        { label: 'list_alerts_for_repo', value: 'list_alerts_for_repo' },
        { label: 'list_alerts_for_enterprise', value: 'list_alerts_for_enterprise' },
        { label: 'list_alerts_for_org', value: 'list_alerts_for_org' }
    ]}
>
<TabItem value="get_alert">

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
    <td>The users assigned to this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_dismissed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency" /></td>
    <td><code>object</code></td>
    <td>Details for the vulnerable dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissal_request" /></td>
    <td><code>object</code></td>
    <td>Information about an active dismissal request for this Dependabot alert. (title: Dependabot alert dismissal request)</td>
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
    <td>An optional comment associated with the alert's dismissal.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the alert was dismissed. (fix_started, inaccurate, no_bandwidth, not_used, tolerable_risk)</td>
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
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The security alert number.</td>
</tr>
<tr>
    <td><CopyableCode code="security_advisory" /></td>
    <td><code>object</code></td>
    <td>Details for the GitHub Security Advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="security_vulnerability" /></td>
    <td><code>object</code></td>
    <td>Details pertaining to one vulnerable version range for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Dependabot alert. (auto_dismissed, dismissed, fixed, open)</td>
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
    <td>The users assigned to this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_dismissed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency" /></td>
    <td><code>object</code></td>
    <td>Details for the vulnerable dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissal_request" /></td>
    <td><code>object</code></td>
    <td>Information about an active dismissal request for this Dependabot alert. (title: Dependabot alert dismissal request)</td>
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
    <td>An optional comment associated with the alert's dismissal.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the alert was dismissed. (fix_started, inaccurate, no_bandwidth, not_used, tolerable_risk)</td>
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
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The security alert number.</td>
</tr>
<tr>
    <td><CopyableCode code="security_advisory" /></td>
    <td><code>object</code></td>
    <td>Details for the GitHub Security Advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="security_vulnerability" /></td>
    <td><code>object</code></td>
    <td>Details pertaining to one vulnerable version range for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Dependabot alert. (auto_dismissed, dismissed, fixed, open)</td>
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
<TabItem value="list_alerts_for_enterprise">

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
    <td>The users assigned to this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_dismissed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency" /></td>
    <td><code>object</code></td>
    <td>Details for the vulnerable dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissal_request" /></td>
    <td><code>object</code></td>
    <td>Information about an active dismissal request for this Dependabot alert. (title: Dependabot alert dismissal request)</td>
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
    <td>An optional comment associated with the alert's dismissal.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the alert was dismissed. (fix_started, inaccurate, no_bandwidth, not_used, tolerable_risk)</td>
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
    <td><CopyableCode code="security_advisory" /></td>
    <td><code>object</code></td>
    <td>Details for the GitHub Security Advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="security_vulnerability" /></td>
    <td><code>object</code></td>
    <td>Details pertaining to one vulnerable version range for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Dependabot alert. (auto_dismissed, dismissed, fixed, open)</td>
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
    <td>The users assigned to this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_dismissed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was auto-dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency" /></td>
    <td><code>object</code></td>
    <td>Details for the vulnerable dependency.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissal_request" /></td>
    <td><code>object</code></td>
    <td>Information about an active dismissal request for this Dependabot alert. (title: Dependabot alert dismissal request)</td>
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
    <td>An optional comment associated with the alert's dismissal.</td>
</tr>
<tr>
    <td><CopyableCode code="dismissed_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the alert was dismissed. (fix_started, inaccurate, no_bandwidth, not_used, tolerable_risk)</td>
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
    <td><CopyableCode code="security_advisory" /></td>
    <td><code>object</code></td>
    <td>Details for the GitHub Security Advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="security_vulnerability" /></td>
    <td><code>object</code></td>
    <td>Details pertaining to one vulnerable version range for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the Dependabot alert. (auto_dismissed, dismissed, fixed, open)</td>
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
    <td><a href="#get_alert"><CopyableCode code="get_alert" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a></td>
    <td></td>
    <td>OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
</tr>
<tr>
    <td><a href="#list_alerts_for_repo"><CopyableCode code="list_alerts_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-classification"><code>classification</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-ecosystem"><code>ecosystem</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-manifest"><code>manifest</code></a>, <a href="#parameter-epss_percentage"><code>epss_percentage</code></a>, <a href="#parameter-has"><code>has</code></a>, <a href="#parameter-assignee"><code>assignee</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
</tr>
<tr>
    <td><a href="#list_alerts_for_enterprise"><CopyableCode code="list_alerts_for_enterprise" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td><a href="#parameter-classification"><code>classification</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-ecosystem"><code>ecosystem</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-epss_percentage"><code>epss_percentage</code></a>, <a href="#parameter-has"><code>has</code></a>, <a href="#parameter-assignee"><code>assignee</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists Dependabot alerts for repositories that are owned by the specified enterprise.<br /><br />The authenticated user must be a member of the enterprise to use this endpoint.<br /><br />Alerts are only returned for organizations in the enterprise for which you are an organization owner or a security manager. For more information about security managers, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_alerts_for_org"><CopyableCode code="list_alerts_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-classification"><code>classification</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-ecosystem"><code>ecosystem</code></a>, <a href="#parameter-package"><code>package</code></a>, <a href="#parameter-epss_percentage"><code>epss_percentage</code></a>, <a href="#parameter-artifact_registry_url"><code>artifact_registry_url</code></a>, <a href="#parameter-artifact_registry"><code>artifact_registry</code></a>, <a href="#parameter-has"><code>has</code></a>, <a href="#parameter-assignee"><code>assignee</code></a>, <a href="#parameter-runtime_risk"><code>runtime_risk</code></a>, <a href="#parameter-scope"><code>scope</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists Dependabot alerts for an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
</tr>
<tr>
    <td><a href="#update_alert"><CopyableCode code="update_alert" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-assignees"><code>assignees</code></a></td>
    <td></td>
    <td>The authenticated user must have access to security alerts for the repository to use this endpoint. For more information, see "[Granting access to security alerts](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
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
<tr id="parameter-alert_number">
    <td><CopyableCode code="alert_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies a Dependabot alert in its repository. You can find this at the end of the URL for a Dependabot alert within GitHub, or in `number` fields in the response from the `GET /repos/&#123;owner&#125;/&#123;repo&#125;/dependabot/alerts` operation.</td>
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
<tr id="parameter-artifact_registry">
    <td><CopyableCode code="artifact_registry" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of Artifact Registry name strings. If specified, only alerts for repositories with storage records matching these registries will be returned.  Can be: `jfrog-artifactory`</td>
</tr>
<tr id="parameter-artifact_registry_url">
    <td><CopyableCode code="artifact_registry_url" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of artifact registry URLs. If specified, only alerts for repositories with storage records matching these URLs will be returned.</td>
</tr>
<tr id="parameter-assignee">
    <td><CopyableCode code="assignee" /></td>
    <td><code>string</code></td>
    <td>Filter alerts by assignees. Provide a comma-separated list of user handles (e.g., `octocat` or `octocat,hubot`) to return alerts assigned to any of the specified users. Use `*` to list alerts with at least one assignee or `none` to list alerts with no assignees.</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-classification">
    <td><CopyableCode code="classification" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of vulnerability classifications. If specified, only alerts for vulnerabilities with these classifications will be returned.  Can be: `malware`, `general`</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
</tr>
<tr id="parameter-ecosystem">
    <td><CopyableCode code="ecosystem" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.  Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`</td>
</tr>
<tr id="parameter-epss_percentage">
    <td><CopyableCode code="epss_percentage" /></td>
    <td><code>string</code></td>
    <td>CVE Exploit Prediction Scoring System (EPSS) percentage. Can be specified as: - An exact number (`n`) - Comparators such as `>n`, `<n`, `>=n`, `<=n` - A range like `n..n`, where `n` is a number from 0.0 to 1.0  Filters the list of alerts based on EPSS percentages. If specified, only alerts with the provided EPSS percentages will be returned.</td>
</tr>
<tr id="parameter-has">
    <td><CopyableCode code="has" /></td>
    <td><code></code></td>
    <td>Filters the list of alerts based on whether the alert has the given value. If specified, only alerts meeting this criterion will be returned. Multiple `has` filters can be passed to filter for alerts that have all of the values.</td>
</tr>
<tr id="parameter-manifest">
    <td><CopyableCode code="manifest" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of full manifest paths. If specified, only alerts for these manifests will be returned.</td>
</tr>
<tr id="parameter-package">
    <td><CopyableCode code="package" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of package names. If specified, only alerts for these packages will be returned.</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-runtime_risk">
    <td><CopyableCode code="runtime_risk" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of runtime risk strings. If specified, only alerts for repositories with deployment records matching these risks will be returned.  Can be: `critical-resource`, `internet-exposed`, `sensitive-data`, `lateral-movement`</td>
</tr>
<tr id="parameter-scope">
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.</td>
</tr>
<tr id="parameter-severity">
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of severities. If specified, only alerts with these severities will be returned.  Can be: `low`, `medium`, `high`, `critical`</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property by which to sort the results. `created` means when the alert was created. `updated` means when the alert's state last changed. `epss_percentage` sorts alerts by the Exploit Prediction Scoring System (EPSS) percentage.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of states. If specified, only alerts with these states will be returned.  Can be: `auto_dismissed`, `dismissed`, `fixed`, `open`</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_alert"
    values={[
        { label: 'get_alert', value: 'get_alert' },
        { label: 'list_alerts_for_repo', value: 'list_alerts_for_repo' },
        { label: 'list_alerts_for_enterprise', value: 'list_alerts_for_enterprise' },
        { label: 'list_alerts_for_org', value: 'list_alerts_for_org' }
    ]}
>
<TabItem value="get_alert">

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
SELECT
assignees,
auto_dismissed_at,
created_at,
dependency,
dismissal_request,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
number,
security_advisory,
security_vulnerability,
state,
updated_at,
url
FROM github.dependabot.alerts
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND alert_number = '{{ alert_number }}' -- required
;
```
</TabItem>
<TabItem value="list_alerts_for_repo">

OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
SELECT
assignees,
auto_dismissed_at,
created_at,
dependency,
dismissal_request,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
number,
security_advisory,
security_vulnerability,
state,
updated_at,
url
FROM github.dependabot.alerts
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND classification = '{{ classification }}'
AND state = '{{ state }}'
AND severity = '{{ severity }}'
AND ecosystem = '{{ ecosystem }}'
AND package = '{{ package }}'
AND manifest = '{{ manifest }}'
AND epss_percentage = '{{ epss_percentage }}'
AND has = '{{ has }}'
AND assignee = '{{ assignee }}'
AND scope = '{{ scope }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list_alerts_for_enterprise">

Lists Dependabot alerts for repositories that are owned by the specified enterprise.<br /><br />The authenticated user must be a member of the enterprise to use this endpoint.<br /><br />Alerts are only returned for organizations in the enterprise for which you are an organization owner or a security manager. For more information about security managers, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint.

```sql
SELECT
assignees,
auto_dismissed_at,
created_at,
dependency,
dismissal_request,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
number,
repository,
security_advisory,
security_vulnerability,
state,
updated_at,
url
FROM github.dependabot.alerts
WHERE enterprise = '{{ enterprise }}' -- required
AND classification = '{{ classification }}'
AND state = '{{ state }}'
AND severity = '{{ severity }}'
AND ecosystem = '{{ ecosystem }}'
AND package = '{{ package }}'
AND epss_percentage = '{{ epss_percentage }}'
AND has = '{{ has }}'
AND assignee = '{{ assignee }}'
AND scope = '{{ scope }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
<TabItem value="list_alerts_for_org">

Lists Dependabot alerts for an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
SELECT
assignees,
auto_dismissed_at,
created_at,
dependency,
dismissal_request,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
number,
repository,
security_advisory,
security_vulnerability,
state,
updated_at,
url
FROM github.dependabot.alerts
WHERE org = '{{ org }}' -- required
AND classification = '{{ classification }}'
AND state = '{{ state }}'
AND severity = '{{ severity }}'
AND ecosystem = '{{ ecosystem }}'
AND package = '{{ package }}'
AND epss_percentage = '{{ epss_percentage }}'
AND artifact_registry_url = '{{ artifact_registry_url }}'
AND artifact_registry = '{{ artifact_registry }}'
AND has = '{{ has }}'
AND assignee = '{{ assignee }}'
AND runtime_risk = '{{ runtime_risk }}'
AND scope = '{{ scope }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_alert"
    values={[
        { label: 'update_alert', value: 'update_alert' }
    ]}
>
<TabItem value="update_alert">

The authenticated user must have access to security alerts for the repository to use this endpoint. For more information, see "[Granting access to security alerts](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
UPDATE github.dependabot.alerts
SET 
state = '{{ state }}',
dismissed_reason = '{{ dismissed_reason }}',
dismissed_comment = '{{ dismissed_comment }}',
assignees = '{{ assignees }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND alert_number = '{{ alert_number }}' --required
AND state = '{{ state }}' --required
AND assignees = '{{ assignees }}' --required
RETURNING
assignees,
auto_dismissed_at,
created_at,
dependency,
dismissal_request,
dismissed_at,
dismissed_by,
dismissed_comment,
dismissed_reason,
fixed_at,
html_url,
number,
security_advisory,
security_vulnerability,
state,
updated_at,
url;
```
</TabItem>
</Tabs>
