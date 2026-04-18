--- 
title: alert_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - alert_instances
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

Creates, updates, deletes, gets or lists an <code>alert_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alert_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.alert_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_alert_instances"
    values={[
        { label: 'list_alert_instances', value: 'list_alert_instances' }
    ]}
>
<TabItem value="list_alert_instances">

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
    <td><CopyableCode code="analysis_key" /></td>
    <td><code>string</code></td>
    <td>Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.</td>
</tr>
<tr>
    <td><CopyableCode code="classifications" /></td>
    <td><code>array</code></td>
    <td>Classifications that have been applied to the file that triggered the alert. For example identifying it as documentation, or a generated file.</td>
</tr>
<tr>
    <td><CopyableCode code="commit_sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Describe a region within a file for the alert.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of a code scanning alert instance. (open, fixed)</td>
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
    <td><a href="#list_alert_instances"><CopyableCode code="list_alert_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-alert_number"><code>alert_number</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-pr"><code>pr</code></a></td>
    <td>Lists all instances of the specified code scanning alert.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_alert_instances"
    values={[
        { label: 'list_alert_instances', value: 'list_alert_instances' }
    ]}
>
<TabItem value="list_alert_instances">

Lists all instances of the specified code scanning alert.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
analysis_key,
category,
classifications,
commit_sha,
environment,
html_url,
location,
message,
ref,
state
FROM github.code_scanning.alert_instances
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND alert_number = '{{ alert_number }}' -- required
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND ref = '{{ ref }}'
AND pr = '{{ pr }}'
;
```
</TabItem>
</Tabs>
