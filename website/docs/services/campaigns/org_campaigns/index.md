--- 
title: org_campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - org_campaigns
  - campaigns
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

Creates, updates, deletes, gets or lists an <code>org_campaigns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="org_campaigns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.campaigns.org_campaigns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_campaign_summary"
    values={[
        { label: 'get_campaign_summary', value: 'get_campaign_summary' },
        { label: 'list_org_campaigns', value: 'list_org_campaigns' }
    ]}
>
<TabItem value="get_campaign_summary">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The campaign name</td>
</tr>
<tr>
    <td><CopyableCode code="alert_stats" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. Will be null if the campaign is still open.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_link" /></td>
    <td><code>string (uri)</code></td>
    <td>The contact link of the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The campaign description</td>
</tr>
<tr>
    <td><CopyableCode code="ends_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="managers" /></td>
    <td><code>array</code></td>
    <td>The campaign managers</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The number of the newly created campaign</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Indicates whether a campaign is open or closed (open, closed) (title: Campaign state)</td>
</tr>
<tr>
    <td><CopyableCode code="team_managers" /></td>
    <td><code>array</code></td>
    <td>The campaign team managers</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_org_campaigns">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The campaign name</td>
</tr>
<tr>
    <td><CopyableCode code="alert_stats" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign was closed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. Will be null if the campaign is still open.</td>
</tr>
<tr>
    <td><CopyableCode code="contact_link" /></td>
    <td><code>string (uri)</code></td>
    <td>The contact link of the campaign.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The campaign description</td>
</tr>
<tr>
    <td><CopyableCode code="ends_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign has ended, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="managers" /></td>
    <td><code>array</code></td>
    <td>The campaign managers</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The number of the newly created campaign</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign was published, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Indicates whether a campaign is open or closed (open, closed) (title: Campaign state)</td>
</tr>
<tr>
    <td><CopyableCode code="team_managers" /></td>
    <td><code>array</code></td>
    <td>The campaign team managers</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the campaign was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
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
    <td><a href="#get_campaign_summary"><CopyableCode code="get_campaign_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-campaign_number"><code>campaign_number</code></a></td>
    <td></td>
    <td>Gets a campaign for an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_org_campaigns"><CopyableCode code="list_org_campaigns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Lists campaigns in an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_campaign"><CopyableCode code="create_campaign" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-ends_at"><code>ends_at</code></a>, <a href="#parameter-code_scanning_alerts"><code>code_scanning_alerts</code></a>, <a href="#parameter-secret_scanning_alerts"><code>secret_scanning_alerts</code></a></td>
    <td></td>
    <td>Create a campaign for an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.<br /><br />Fine-grained tokens must have the "Code scanning alerts" repository permissions (read) on all repositories included<br />in the campaign.</td>
</tr>
<tr>
    <td><a href="#update_campaign"><CopyableCode code="update_campaign" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-campaign_number"><code>campaign_number</code></a></td>
    <td></td>
    <td>Updates a campaign in an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_campaign"><CopyableCode code="delete_campaign" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-campaign_number"><code>campaign_number</code></a></td>
    <td></td>
    <td>Deletes a campaign in an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.</td>
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
<tr id="parameter-campaign_number">
    <td><CopyableCode code="campaign_number" /></td>
    <td><code>integer</code></td>
    <td>The campaign number.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property by which to sort the results.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>If specified, only campaigns with this state will be returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_campaign_summary"
    values={[
        { label: 'get_campaign_summary', value: 'get_campaign_summary' },
        { label: 'list_org_campaigns', value: 'list_org_campaigns' }
    ]}
>
<TabItem value="get_campaign_summary">

Gets a campaign for an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.

```sql
SELECT
name,
alert_stats,
closed_at,
contact_link,
created_at,
description,
ends_at,
managers,
number,
published_at,
state,
team_managers,
updated_at
FROM github.campaigns.org_campaigns
WHERE org = '{{ org }}' -- required
AND campaign_number = '{{ campaign_number }}' -- required
;
```
</TabItem>
<TabItem value="list_org_campaigns">

Lists campaigns in an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.

```sql
SELECT
name,
alert_stats,
closed_at,
contact_link,
created_at,
description,
ends_at,
managers,
number,
published_at,
state,
team_managers,
updated_at
FROM github.campaigns.org_campaigns
WHERE org = '{{ org }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND direction = '{{ direction }}'
AND state = '{{ state }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_campaign"
    values={[
        { label: 'create_campaign', value: 'create_campaign' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_campaign">

Create a campaign for an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.<br /><br />Fine-grained tokens must have the "Code scanning alerts" repository permissions (read) on all repositories included<br />in the campaign.

```sql
INSERT INTO github.campaigns.org_campaigns (
name,
description,
managers,
team_managers,
ends_at,
contact_link,
code_scanning_alerts,
generate_issues,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}' /* required */,
'{{ managers }}',
'{{ team_managers }}',
'{{ ends_at }}' /* required */,
'{{ contact_link }}',
'{{ code_scanning_alerts }}' /* required */,
{{ generate_issues }},
'{{ org }}'
RETURNING
name,
alert_stats,
closed_at,
contact_link,
created_at,
description,
ends_at,
managers,
number,
published_at,
state,
team_managers,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: org_campaigns
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the org_campaigns resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the campaign
    - name: description
      value: "{{ description }}"
      description: |
        A description for the campaign
    - name: managers
      value:
        - "{{ managers }}"
      description: |
        The logins of the users to set as the campaign managers. At this time, only a single manager can be supplied.
    - name: team_managers
      value:
        - "{{ team_managers }}"
      description: |
        The slugs of the teams to set as the campaign managers.
    - name: ends_at
      value: "{{ ends_at }}"
      description: |
        The end date and time of the campaign. The date must be in the future.
    - name: contact_link
      value: "{{ contact_link }}"
      description: |
        The contact link of the campaign. Must be a URI.
    - name: code_scanning_alerts
      description: |
        The code scanning alerts to include in this campaign
      value:
        - repository_id: {{ repository_id }}
          alert_numbers: "{{ alert_numbers }}"
    - name: generate_issues
      value: {{ generate_issues }}
      description: |
        If true, will automatically generate issues for the campaign. The default is false.
      default: false
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_campaign"
    values={[
        { label: 'update_campaign', value: 'update_campaign' }
    ]}
>
<TabItem value="update_campaign">

Updates a campaign in an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.

```sql
UPDATE github.campaigns.org_campaigns
SET 
name = '{{ name }}',
description = '{{ description }}',
managers = '{{ managers }}',
team_managers = '{{ team_managers }}',
ends_at = '{{ ends_at }}',
contact_link = '{{ contact_link }}',
state = '{{ state }}'
WHERE 
org = '{{ org }}' --required
AND campaign_number = '{{ campaign_number }}' --required
RETURNING
name,
alert_stats,
closed_at,
contact_link,
created_at,
description,
ends_at,
managers,
number,
published_at,
state,
team_managers,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_campaign"
    values={[
        { label: 'delete_campaign', value: 'delete_campaign' }
    ]}
>
<TabItem value="delete_campaign">

Deletes a campaign in an organization.<br /><br />The authenticated user must be an owner or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint.

```sql
DELETE FROM github.campaigns.org_campaigns
WHERE org = '{{ org }}' --required
AND campaign_number = '{{ campaign_number }}' --required
;
```
</TabItem>
</Tabs>
