--- 
title: alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - alerts
  - secret_scanning
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
<tr><td><b>Id</b></td><td><CopyableCode code="github.secret_scanning.alerts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alert"
    values={[
        { label: 'get_alert', value: 'get_alert' },
        { label: 'list_alerts_for_repo', value: 'list_alerts_for_repo' },
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
    <td><CopyableCode code="secret_type_display_name" /></td>
    <td><code>string</code></td>
    <td>User-friendly name for the detected secret, matching the `secret_type`. For a list of built-in patterns, see "[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_to" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment from the closure request author.</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_reviewer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_reviewer_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment from the closure request reviewer.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="first_location_detected" /></td>
    <td><code>object</code></td>
    <td>Details on the location where the token was initially detected. This can be a commit, wiki commit, issue, discussion, pull request. </td>
</tr>
<tr>
    <td><CopyableCode code="has_more_locations" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not the token in the alert was detected in more than one location.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The GitHub URL of the alert resource.</td>
</tr>
<tr>
    <td><CopyableCode code="is_base64_encoded" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not alert is base64 encoded</td>
</tr>
<tr>
    <td><CopyableCode code="locations_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the code locations for this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_repo" /></td>
    <td><code>boolean</code></td>
    <td>Whether the detected secret was found in multiple repositories under the same organization or enterprise.</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The security alert number.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the secret that was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the provider of the secret that was detected. Use this value for filtering by provider with the `providers` or `exclude_providers` parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_leaked" /></td>
    <td><code>boolean</code></td>
    <td>Whether the detected secret was publicly leaked.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment when requesting a push protection bypass.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL to a push protection bypass request.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_reviewer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_reviewer_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment when reviewing a push protection bypass.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed" /></td>
    <td><code>boolean</code></td>
    <td>Whether push protection was bypassed for the detected secret.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="resolution" /></td>
    <td><code>string</code></td>
    <td>**Required when the `state` is `resolved`.** The reason for resolving the alert. (false_positive, wont_fix, revoked, used_in_tests)</td>
</tr>
<tr>
    <td><CopyableCode code="resolution_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment to resolve an alert.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>string</code></td>
    <td>The secret that was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_type" /></td>
    <td><code>string</code></td>
    <td>The type of secret that secret scanning detected.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`. (open, resolved)</td>
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
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>string</code></td>
    <td>The token status as of the latest validity check. (active, inactive, unknown)</td>
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
    <td><CopyableCode code="secret_type_display_name" /></td>
    <td><code>string</code></td>
    <td>User-friendly name for the detected secret, matching the `secret_type`. For a list of built-in patterns, see "[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_to" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment from the closure request author.</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_reviewer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_reviewer_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment from the closure request reviewer.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="first_location_detected" /></td>
    <td><code>object</code></td>
    <td>Details on the location where the token was initially detected. This can be a commit, wiki commit, issue, discussion, pull request. </td>
</tr>
<tr>
    <td><CopyableCode code="has_more_locations" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not the token in the alert was detected in more than one location.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The GitHub URL of the alert resource.</td>
</tr>
<tr>
    <td><CopyableCode code="is_base64_encoded" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not alert is base64 encoded</td>
</tr>
<tr>
    <td><CopyableCode code="locations_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the code locations for this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_repo" /></td>
    <td><code>boolean</code></td>
    <td>Whether the detected secret was found in multiple repositories under the same organization or enterprise.</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The security alert number.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the secret that was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the provider of the secret that was detected. Use this value for filtering by provider with the `providers` or `exclude_providers` parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_leaked" /></td>
    <td><code>boolean</code></td>
    <td>Whether the detected secret was publicly leaked.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment when requesting a push protection bypass.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL to a push protection bypass request.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_reviewer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_reviewer_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment when reviewing a push protection bypass.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed" /></td>
    <td><code>boolean</code></td>
    <td>Whether push protection was bypassed for the detected secret.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="resolution" /></td>
    <td><code>string</code></td>
    <td>**Required when the `state` is `resolved`.** The reason for resolving the alert. (false_positive, wont_fix, revoked, used_in_tests)</td>
</tr>
<tr>
    <td><CopyableCode code="resolution_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment to resolve an alert.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>string</code></td>
    <td>The secret that was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_type" /></td>
    <td><code>string</code></td>
    <td>The type of secret that secret scanning detected.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`. (open, resolved)</td>
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
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>string</code></td>
    <td>The token status as of the latest validity check. (active, inactive, unknown)</td>
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
    <td><CopyableCode code="secret_type_display_name" /></td>
    <td><code>string</code></td>
    <td>User-friendly name for the detected secret, matching the `secret_type`. For a list of built-in patterns, see "[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."</td>
</tr>
<tr>
    <td><CopyableCode code="assigned_to" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment from the closure request author.</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_reviewer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="closure_request_reviewer_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment from the closure request reviewer.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="first_location_detected" /></td>
    <td><code>object</code></td>
    <td>Details on the location where the token was initially detected. This can be a commit, wiki commit, issue, discussion, pull request. </td>
</tr>
<tr>
    <td><CopyableCode code="has_more_locations" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not the token in the alert was detected in more than one location.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The GitHub URL of the alert resource.</td>
</tr>
<tr>
    <td><CopyableCode code="is_base64_encoded" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not alert is base64 encoded</td>
</tr>
<tr>
    <td><CopyableCode code="locations_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the code locations for this alert.</td>
</tr>
<tr>
    <td><CopyableCode code="multi_repo" /></td>
    <td><code>boolean</code></td>
    <td>Whether the detected secret was found in multiple repositories in the same organization or enterprise.</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The security alert number.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the secret that was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="provider_slug" /></td>
    <td><code>string</code></td>
    <td>The slug identifier for the provider of the secret that was detected. Use this value for filtering by provider with the `providers` or `exclude_providers` parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="publicly_leaked" /></td>
    <td><code>boolean</code></td>
    <td>Whether the secret was publicly leaked.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment when requesting a push protection bypass.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL to a push protection bypass request.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_reviewer" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypass_request_reviewer_comment" /></td>
    <td><code>string</code></td>
    <td>An optional comment when reviewing a push protection bypass.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed" /></td>
    <td><code>boolean</code></td>
    <td>Whether push protection was bypassed for the detected secret.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="push_protection_bypassed_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="repository" /></td>
    <td><code>object</code></td>
    <td>A GitHub repository. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="resolution" /></td>
    <td><code>string</code></td>
    <td>**Required when the `state` is `resolved`.** The reason for resolving the alert. (false_positive, wont_fix, revoked, used_in_tests)</td>
</tr>
<tr>
    <td><CopyableCode code="resolution_comment" /></td>
    <td><code>string</code></td>
    <td>The comment that was optionally added when this alert was closed</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="secret" /></td>
    <td><code>string</code></td>
    <td>The secret that was detected.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_type" /></td>
    <td><code>string</code></td>
    <td>The type of secret that secret scanning detected.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`. (open, resolved)</td>
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
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>string</code></td>
    <td>The token status as of the latest validity check. (active, inactive, unknown)</td>
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
    <td><a href="#parameter-hide_secret"><code>hide_secret</code></a></td>
    <td>Gets a single secret scanning alert detected in an eligible repository.<br /><br />The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
</tr>
<tr>
    <td><a href="#list_alerts_for_repo"><CopyableCode code="list_alerts_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-secret_type"><code>secret_type</code></a>, <a href="#parameter-exclude_secret_types"><code>exclude_secret_types</code></a>, <a href="#parameter-exclude_providers"><code>exclude_providers</code></a>, <a href="#parameter-providers"><code>providers</code></a>, <a href="#parameter-resolution"><code>resolution</code></a>, <a href="#parameter-assignee"><code>assignee</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-validity"><code>validity</code></a>, <a href="#parameter-is_publicly_leaked"><code>is_publicly_leaked</code></a>, <a href="#parameter-is_multi_repo"><code>is_multi_repo</code></a>, <a href="#parameter-hide_secret"><code>hide_secret</code></a></td>
    <td>Lists secret scanning alerts for an eligible repository, from newest to oldest.<br /><br />The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
</tr>
<tr>
    <td><a href="#list_alerts_for_org"><CopyableCode code="list_alerts_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-secret_type"><code>secret_type</code></a>, <a href="#parameter-exclude_secret_types"><code>exclude_secret_types</code></a>, <a href="#parameter-exclude_providers"><code>exclude_providers</code></a>, <a href="#parameter-providers"><code>providers</code></a>, <a href="#parameter-resolution"><code>resolution</code></a>, <a href="#parameter-assignee"><code>assignee</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-validity"><code>validity</code></a>, <a href="#parameter-is_publicly_leaked"><code>is_publicly_leaked</code></a>, <a href="#parameter-is_multi_repo"><code>is_multi_repo</code></a>, <a href="#parameter-hide_secret"><code>hide_secret</code></a></td>
    <td>Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
</tr>
<tr>
    <td><a href="#update_alert"><CopyableCode code="update_alert" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-assignee"><code>assignee</code></a>, <a href="#parameter-validity"><code>validity</code></a></td>
    <td></td>
    <td>Updates the status of a secret scanning alert in an eligible repository.<br /><br />You can also use this endpoint to assign or unassign an alert to a user who has write access to the repository.<br /><br />The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.</td>
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
    <td>The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/&#123;owner&#125;/&#123;repo&#125;/code-scanning/alerts` operation.</td>
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
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty "after" query string.</td>
</tr>
<tr id="parameter-assignee">
    <td><CopyableCode code="assignee" /></td>
    <td><code>string</code></td>
    <td>Filters alerts by assignee. Use `*` to get all assigned alerts, `none` to get all unassigned alerts, or a GitHub username to get alerts assigned to a specific user.</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string.</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
</tr>
<tr id="parameter-exclude_providers">
    <td><CopyableCode code="exclude_providers" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of provider slugs to exclude from the results. Provider slugs use lowercase with underscores (e.g., `github_secret_scanning`, `clojars`). You can find the provider slug in the `provider_slug` field of each alert. Cannot be combined with the `providers` parameter.</td>
</tr>
<tr id="parameter-exclude_secret_types">
    <td><CopyableCode code="exclude_secret_types" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of secret types to exclude from the results. All default secret patterns are returned except those matching the specified types. Cannot be combined with the `secret_type` parameter. See "[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)" for a complete list of secret types.</td>
</tr>
<tr id="parameter-hide_secret">
    <td><CopyableCode code="hide_secret" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not to hide literal secrets in the results.</td>
</tr>
<tr id="parameter-is_multi_repo">
    <td><CopyableCode code="is_multi_repo" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not to filter alerts by the multi-repo tag being present.</td>
</tr>
<tr id="parameter-is_publicly_leaked">
    <td><CopyableCode code="is_publicly_leaked" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value representing whether or not to filter alerts by the publicly-leaked tag being present.</td>
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
<tr id="parameter-providers">
    <td><CopyableCode code="providers" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of provider slugs to filter by. Provider slugs use lowercase with underscores (e.g., `github_secret_scanning`, `clojars`). You can find the provider slug in the `provider_slug` field of each alert. Cannot be combined with the `exclude_providers` parameter.</td>
</tr>
<tr id="parameter-resolution">
    <td><CopyableCode code="resolution" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.</td>
</tr>
<tr id="parameter-secret_type">
    <td><CopyableCode code="secret_type" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of secret types to return. All default secret patterns are returned. To return generic patterns, pass the token name(s) in the parameter. See "[Supported secret scanning patterns](https://docs.github.com/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)" for a complete list of secret types.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Set to `open` or `resolved` to only list secret scanning alerts in a specific state.</td>
</tr>
<tr id="parameter-validity">
    <td><CopyableCode code="validity" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of validities that, when present, will return alerts that match the validities in this list. Valid options are `active`, `inactive`, and `unknown`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_alert"
    values={[
        { label: 'get_alert', value: 'get_alert' },
        { label: 'list_alerts_for_repo', value: 'list_alerts_for_repo' },
        { label: 'list_alerts_for_org', value: 'list_alerts_for_org' }
    ]}
>
<TabItem value="get_alert">

Gets a single secret scanning alert detected in an eligible repository.<br /><br />The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
SELECT
secret_type_display_name,
assigned_to,
closure_request_comment,
closure_request_reviewer,
closure_request_reviewer_comment,
created_at,
first_location_detected,
has_more_locations,
html_url,
is_base64_encoded,
locations_url,
multi_repo,
number,
provider,
provider_slug,
publicly_leaked,
push_protection_bypass_request_comment,
push_protection_bypass_request_html_url,
push_protection_bypass_request_reviewer,
push_protection_bypass_request_reviewer_comment,
push_protection_bypassed,
push_protection_bypassed_at,
push_protection_bypassed_by,
resolution,
resolution_comment,
resolved_at,
resolved_by,
secret,
secret_type,
state,
updated_at,
url,
validity
FROM github.secret_scanning.alerts
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND alert_number = '{{ alert_number }}' -- required
AND hide_secret = '{{ hide_secret }}'
;
```
</TabItem>
<TabItem value="list_alerts_for_repo">

Lists secret scanning alerts for an eligible repository, from newest to oldest.<br /><br />The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
SELECT
secret_type_display_name,
assigned_to,
closure_request_comment,
closure_request_reviewer,
closure_request_reviewer_comment,
created_at,
first_location_detected,
has_more_locations,
html_url,
is_base64_encoded,
locations_url,
multi_repo,
number,
provider,
provider_slug,
publicly_leaked,
push_protection_bypass_request_comment,
push_protection_bypass_request_html_url,
push_protection_bypass_request_reviewer,
push_protection_bypass_request_reviewer_comment,
push_protection_bypassed,
push_protection_bypassed_at,
push_protection_bypassed_by,
resolution,
resolution_comment,
resolved_at,
resolved_by,
secret,
secret_type,
state,
updated_at,
url,
validity
FROM github.secret_scanning.alerts
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND state = '{{ state }}'
AND secret_type = '{{ secret_type }}'
AND exclude_secret_types = '{{ exclude_secret_types }}'
AND exclude_providers = '{{ exclude_providers }}'
AND providers = '{{ providers }}'
AND resolution = '{{ resolution }}'
AND assignee = '{{ assignee }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND validity = '{{ validity }}'
AND is_publicly_leaked = '{{ is_publicly_leaked }}'
AND is_multi_repo = '{{ is_multi_repo }}'
AND hide_secret = '{{ hide_secret }}'
;
```
</TabItem>
<TabItem value="list_alerts_for_org">

Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
SELECT
secret_type_display_name,
assigned_to,
closure_request_comment,
closure_request_reviewer,
closure_request_reviewer_comment,
created_at,
first_location_detected,
has_more_locations,
html_url,
is_base64_encoded,
locations_url,
multi_repo,
number,
provider,
provider_slug,
publicly_leaked,
push_protection_bypass_request_comment,
push_protection_bypass_request_html_url,
push_protection_bypass_request_reviewer,
push_protection_bypass_request_reviewer_comment,
push_protection_bypassed,
push_protection_bypassed_at,
push_protection_bypassed_by,
repository,
resolution,
resolution_comment,
resolved_at,
resolved_by,
secret,
secret_type,
state,
updated_at,
url,
validity
FROM github.secret_scanning.alerts
WHERE org = '{{ org }}' -- required
AND state = '{{ state }}'
AND secret_type = '{{ secret_type }}'
AND exclude_secret_types = '{{ exclude_secret_types }}'
AND exclude_providers = '{{ exclude_providers }}'
AND providers = '{{ providers }}'
AND resolution = '{{ resolution }}'
AND assignee = '{{ assignee }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND validity = '{{ validity }}'
AND is_publicly_leaked = '{{ is_publicly_leaked }}'
AND is_multi_repo = '{{ is_multi_repo }}'
AND hide_secret = '{{ hide_secret }}'
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

Updates the status of a secret scanning alert in an eligible repository.<br /><br />You can also use this endpoint to assign or unassign an alert to a user who has write access to the repository.<br /><br />The authenticated user must be an administrator for the repository or for the organization that owns the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `security_events` scope to use this endpoint. If this endpoint is only used with public repositories, the token can use the `public_repo` scope instead.

```sql
UPDATE github.secret_scanning.alerts
SET 
state = '{{ state }}',
resolution = '{{ resolution }}',
resolution_comment = '{{ resolution_comment }}',
assignee = '{{ assignee }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND alert_number = '{{ alert_number }}' --required
AND state = '{{ state }}' --required
AND assignee = '{{ assignee }}' --required
RETURNING
secret_type_display_name,
assigned_to,
closure_request_comment,
closure_request_reviewer,
closure_request_reviewer_comment,
created_at,
first_location_detected,
has_more_locations,
html_url,
is_base64_encoded,
locations_url,
multi_repo,
number,
provider,
provider_slug,
publicly_leaked,
push_protection_bypass_request_comment,
push_protection_bypass_request_html_url,
push_protection_bypass_request_reviewer,
push_protection_bypass_request_reviewer_comment,
push_protection_bypassed,
push_protection_bypassed_at,
push_protection_bypassed_by,
resolution,
resolution_comment,
resolved_at,
resolved_by,
secret,
secret_type,
state,
updated_at,
url,
validity;
```
</TabItem>
</Tabs>
