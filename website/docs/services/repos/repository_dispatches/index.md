--- 
title: repository_dispatches
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_dispatches
  - repos
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

Creates, updates, deletes, gets or lists a <code>repository_dispatches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_dispatches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.repository_dispatches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#create_dispatch_event"><CopyableCode code="create_dispatch_event" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-event_type"><code>event_type</code></a></td>
    <td></td>
    <td>You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/webhooks/event-payloads/#repository_dispatch)."<br /><br />The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.<br /><br />This input example shows how you can use the `client_payload` as a test to debug your workflow.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_dispatch_event"
    values={[
        { label: 'create_dispatch_event', value: 'create_dispatch_event' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dispatch_event">

You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/webhooks/event-payloads/#repository_dispatch)."<br /><br />The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.<br /><br />This input example shows how you can use the `client_payload` as a test to debug your workflow.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.repos.repository_dispatches (
event_type,
client_payload,
owner,
repo
)
SELECT 
'{{ event_type }}' /* required */,
'{{ client_payload }}',
'{{ owner }}',
'{{ repo }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repository_dispatches
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the repository_dispatches resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the repository_dispatches resource.
    - name: event_type
      value: "{{ event_type }}"
      description: |
        A custom webhook event name. Must be 100 characters or fewer.
    - name: client_payload
      value: "{{ client_payload }}"
      description: |
        JSON payload with extra information about the webhook event that your action or workflow may use. The maximum number of top-level properties is 10. The total size of the JSON payload must be less than 64KB.
`}</CodeBlock>

</TabItem>
</Tabs>
