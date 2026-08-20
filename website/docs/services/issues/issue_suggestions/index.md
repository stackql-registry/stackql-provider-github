--- 
title: issue_suggestions
hide_title: false
hide_table_of_contents: false
keywords:
  - issue_suggestions
  - issues
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

Creates, updates, deletes, gets or lists an <code>issue_suggestions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issue_suggestions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.issues.issue_suggestions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_suggestions"
    values={[
        { label: 'list_suggestions', value: 'list_suggestions' }
    ]}
>
<TabItem value="list_suggestions">

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
    <td>The unique identifier of the suggestion.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the actor that proposed the suggestion.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_event_id" /></td>
    <td><code>integer</code></td>
    <td>The identifier of the timeline event created when the suggestion was approved, when applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="issue_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the issue the suggestion applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="target_id" /></td>
    <td><code>integer</code></td>
    <td>The identifier of the target the change applies to (issue type, label, field, assignee, or duplicate issue), when applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The kind of change proposed. (set_type, add_label, add_field, add_assignee, close_issue)</td>
</tr>
<tr>
    <td><CopyableCode code="confidence" /></td>
    <td><code>string</code></td>
    <td>The actor's confidence level in the suggestion. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the suggestion was created.</td>
</tr>
<tr>
    <td><CopyableCode code="rationale" /></td>
    <td><code>string</code></td>
    <td>The rationale the actor provided for the suggestion.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_by" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the user who approved or dismissed the suggestion.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The suggestion's lifecycle state. (pending, applied, approved, dismissed, replaced, invalidated)</td>
</tr>
<tr>
    <td><CopyableCode code="target_value" /></td>
    <td><code>string</code></td>
    <td>The proposed value, when applicable. An array for multi-select field suggestions.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the suggestion was last updated.</td>
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
    <td><a href="#list_suggestions"><CopyableCode code="list_suggestions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the suggestions on an issue. A suggestion is an agent-proposed change to an issue's type, labels, fields, assignees, or closed state that a maintainer can approve or dismiss.<br /><br />By default only pending suggestions are returned. Use `state=all` to return suggestions in every state, or `state=<state>` to filter to a single state. Use `action=<action>` to return only suggestions for a specific change.<br /><br />This endpoint is only available while the issue suggestions feature is enabled for the repository, and only supports issues, not pull requests.<br /><br />Requires triage access to the repository.</td>
</tr>
<tr>
    <td><a href="#approve_suggestion"><CopyableCode code="approve_suggestion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a>, <a href="#parameter-suggestion_id"><code>suggestion_id</code></a></td>
    <td></td>
    <td>Approves a pending suggestion on an issue. Applies the proposed change (creating the corresponding timeline event), transitions the suggestion to `approved`, and dismisses any competing pending suggestions for the same change.<br /><br />Requires triage access to the repository. Approving a suggestion also requires permission to perform the change it applies (for example, setting the issue type, adding a label or assignee, or closing the issue); this only affects fine-grained access tokens and GitHub Apps whose permissions are narrower than the triage role. This endpoint only supports issues, not pull requests.</td>
</tr>
<tr>
    <td><a href="#dismiss_suggestion"><CopyableCode code="dismiss_suggestion" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a>, <a href="#parameter-suggestion_id"><code>suggestion_id</code></a></td>
    <td></td>
    <td>Dismisses a pending suggestion on an issue. Transitions the suggestion to `dismissed` without applying any change or creating a timeline event.<br /><br />Requires triage access to the repository. This endpoint only supports issues, not pull requests.</td>
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
<tr id="parameter-issue_number">
    <td><CopyableCode code="issue_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the issue.</td>
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
<tr id="parameter-suggestion_id">
    <td><CopyableCode code="suggestion_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the suggestion.</td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Filter suggestions by the change they propose.</td>
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
    <td>Filter suggestions by their state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_suggestions"
    values={[
        { label: 'list_suggestions', value: 'list_suggestions' }
    ]}
>
<TabItem value="list_suggestions">

Lists the suggestions on an issue. A suggestion is an agent-proposed change to an issue's type, labels, fields, assignees, or closed state that a maintainer can approve or dismiss.<br /><br />By default only pending suggestions are returned. Use `state=all` to return suggestions in every state, or `state=<state>` to filter to a single state. Use `action=<action>` to return only suggestions for a specific change.<br /><br />This endpoint is only available while the issue suggestions feature is enabled for the repository, and only supports issues, not pull requests.<br /><br />Requires triage access to the repository.

```sql
SELECT
id,
actor_id,
issue_event_id,
issue_id,
target_id,
action,
confidence,
created_at,
rationale,
resolved_by,
state,
target_value,
updated_at
FROM github.issues.issue_suggestions
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND issue_number = '{{ issue_number }}' -- required
AND state = '{{ state }}'
AND action = '{{ action }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="approve_suggestion"
    values={[
        { label: 'approve_suggestion', value: 'approve_suggestion' },
        { label: 'dismiss_suggestion', value: 'dismiss_suggestion' }
    ]}
>
<TabItem value="approve_suggestion">

Approves a pending suggestion on an issue. Applies the proposed change (creating the corresponding timeline event), transitions the suggestion to `approved`, and dismisses any competing pending suggestions for the same change.<br /><br />Requires triage access to the repository. Approving a suggestion also requires permission to perform the change it applies (for example, setting the issue type, adding a label or assignee, or closing the issue); this only affects fine-grained access tokens and GitHub Apps whose permissions are narrower than the triage role. This endpoint only supports issues, not pull requests.

```sql
EXEC github.issues.issue_suggestions.approve_suggestion 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@issue_number='{{ issue_number }}' --required, 
@suggestion_id='{{ suggestion_id }}' --required
;
```
</TabItem>
<TabItem value="dismiss_suggestion">

Dismisses a pending suggestion on an issue. Transitions the suggestion to `dismissed` without applying any change or creating a timeline event.<br /><br />Requires triage access to the repository. This endpoint only supports issues, not pull requests.

```sql
EXEC github.issues.issue_suggestions.dismiss_suggestion 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required, 
@issue_number='{{ issue_number }}' --required, 
@suggestion_id='{{ suggestion_id }}' --required
;
```
</TabItem>
</Tabs>
