--- 
title: runner_remove_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - runner_remove_tokens
  - actions
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

Creates, updates, deletes, gets or lists a <code>runner_remove_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="runner_remove_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.actions.runner_remove_tokens" /></td></tr>
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
    <td><a href="#create_remove_token_for_repo"><CopyableCode code="create_remove_token_for_repo" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Returns a token that you can pass to the `config` script to remove a self-hosted runner from an repository. The token expires after one hour.<br /><br />For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to remove your self-hosted runner from an organization:<br /><br />```<br />./config.sh remove --token TOKEN<br />```<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_remove_token_for_org"><CopyableCode code="create_remove_token_for_org" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.<br /><br />For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to remove your self-hosted runner from an organization:<br /><br />```<br />./config.sh remove --token TOKEN<br />```<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
</tbody>
</table>

## `INSERT` examples

<Tabs
    defaultValue="create_remove_token_for_repo"
    values={[
        { label: 'create_remove_token_for_repo', value: 'create_remove_token_for_repo' },
        { label: 'create_remove_token_for_org', value: 'create_remove_token_for_org' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_remove_token_for_repo">

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an repository. The token expires after one hour.<br /><br />For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to remove your self-hosted runner from an organization:<br /><br />```<br />./config.sh remove --token TOKEN<br />```<br /><br />Authenticated users must have admin access to the repository to use this endpoint.<br /><br />OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.runner_remove_tokens (
owner,
repo
)
SELECT 
'{{ owner }}',
'{{ repo }}'
RETURNING
expires_at,
permissions,
repositories,
repository_selection,
single_file,
token
;
```
</TabItem>
<TabItem value="create_remove_token_for_org">

Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.<br /><br />For example, you can replace `TOKEN` in the following example with the registration token provided by this endpoint to remove your self-hosted runner from an organization:<br /><br />```<br />./config.sh remove --token TOKEN<br />```<br /><br />Authenticated users must have admin access to the organization to use this endpoint.<br /><br />OAuth tokens and personal access tokens (classic) need the`admin:org` scope to use this endpoint. If the repository is private, OAuth tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.actions.runner_remove_tokens (
org
)
SELECT 
'{{ org }}'
RETURNING
expires_at,
permissions,
repositories,
repository_selection,
single_file,
token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: runner_remove_tokens
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the runner_remove_tokens resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the runner_remove_tokens resource.
    - name: org
      value: "{{ org }}"
      description: Required parameter for the runner_remove_tokens resource.
`}</CodeBlock>

</TabItem>
</Tabs>
