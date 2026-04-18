--- 
title: hovercard
hide_title: false
hide_table_of_contents: false
keywords:
  - hovercard
  - users
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

Creates, updates, deletes, gets or lists a <code>hovercard</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hovercard" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.users.hovercard" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_context_for_user"
    values={[
        { label: 'get_context_for_user', value: 'get_context_for_user' }
    ]}
>
<TabItem value="get_context_for_user">

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
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="octicon" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#get_context_for_user"><CopyableCode code="get_context_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-subject_type"><code>subject_type</code></a>, <a href="#parameter-subject_id"><code>subject_id</code></a></td>
    <td>Provides hovercard information. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.<br /><br />  The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository, you would use a `subject_type` value of `repository` and a `subject_id` value of `1300192` (the ID of the `Spoon-Knife` repository).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr id="parameter-subject_id">
    <td><CopyableCode code="subject_id" /></td>
    <td><code>string</code></td>
    <td>Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.</td>
</tr>
<tr id="parameter-subject_type">
    <td><CopyableCode code="subject_type" /></td>
    <td><code>string</code></td>
    <td>Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_context_for_user"
    values={[
        { label: 'get_context_for_user', value: 'get_context_for_user' }
    ]}
>
<TabItem value="get_context_for_user">

Provides hovercard information. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.<br /><br />  The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository, you would use a `subject_type` value of `repository` and a `subject_id` value of `1300192` (the ID of the `Spoon-Knife` repository).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
message,
octicon
FROM github.users.hovercard
WHERE username = '{{ username }}' -- required
AND subject_type = '{{ subject_type }}'
AND subject_id = '{{ subject_id }}'
;
```
</TabItem>
</Tabs>
