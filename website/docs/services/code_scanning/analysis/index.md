--- 
title: analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis
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

Creates, updates, deletes, gets or lists an <code>analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_analysis"
    values={[
        { label: 'get_analysis', value: 'get_analysis' },
        { label: 'list_recent_analyses', value: 'list_recent_analyses' }
    ]}
>
<TabItem value="get_analysis">

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
    <td>Unique identifier for this analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="sarif_id" /></td>
    <td><code>string</code></td>
    <td>An identifier for the upload. (example: 6c81cd8e-b078-4ac3-a3be-1dad7dbd0b53)</td>
</tr>
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
    <td><CopyableCode code="commit_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit to which the analysis you are uploading relates. (pattern: <code>^[0-9a-fA-F]+$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="deletable" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Identifies the variable values associated with the environment in which this analysis was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td> (example: error reading field xyz)</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`.</td>
</tr>
<tr>
    <td><CopyableCode code="results_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of results in the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="rules_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of rules used in the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="tool" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the analysis resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>string</code></td>
    <td>Warning generated when processing the analysis (example: 123 results were ignored)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recent_analyses">

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
    <td>Unique identifier for this analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="sarif_id" /></td>
    <td><code>string</code></td>
    <td>An identifier for the upload. (example: 6c81cd8e-b078-4ac3-a3be-1dad7dbd0b53)</td>
</tr>
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
    <td><CopyableCode code="commit_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit to which the analysis you are uploading relates. (pattern: <code>^[0-9a-fA-F]+$</code>)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.</td>
</tr>
<tr>
    <td><CopyableCode code="deletable" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Identifies the variable values associated with the environment in which this analysis was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td> (example: error reading field xyz)</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The Git reference, formatted as `refs/pull/<number>/merge`, `refs/pull/<number>/head`, `refs/heads/<branch name>` or simply `<branch name>`.</td>
</tr>
<tr>
    <td><CopyableCode code="results_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of results in the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="rules_count" /></td>
    <td><code>integer</code></td>
    <td>The total number of rules used in the analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="tool" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL of the analysis resource.</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>string</code></td>
    <td>Warning generated when processing the analysis (example: 123 results were ignored)</td>
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
    <td><a href="#get_analysis"><CopyableCode code="get_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a></td>
    <td></td>
    <td>Gets a specified code scanning analysis for a repository.<br /><br />The default JSON response contains fields that describe the analysis.<br />This includes the Git reference and commit SHA to which the analysis relates,<br />the datetime of the analysis, the name of the code scanning tool,<br />and the number of alerts.<br /><br />The `rules_count` field in the default response give the number of rules<br />that were run in the analysis.<br />For very old analyses this data is not available,<br />and `0` is returned in this field.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/sarif+json`**: Instead of returning a summary of the analysis, this endpoint returns a subset of the analysis data that was uploaded. The data is formatted as [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html). It also returns additional data such as the `github/alertNumber` and `github/alertUrl` properties.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#list_recent_analyses"><CopyableCode code="list_recent_analyses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-tool_name"><code>tool_name</code></a>, <a href="#parameter-tool_guid"><code>tool_guid</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-pr"><code>pr</code></a>, <a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-sarif_id"><code>sarif_id</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Lists the details of all code scanning analyses for a repository,<br />starting with the most recent.<br />The response is paginated and you can use the `page` and `per_page` parameters<br />to list the analyses you're interested in.<br />By default 30 analyses are listed per page.<br /><br />The `rules_count` field in the response give the number of rules<br />that were run in the analysis.<br />For very old analyses this data is not available,<br />and `0` is returned in this field.<br /><br />&gt; [!WARNING]<br />&gt; **Closing down notice:** The `tool_name` field is closing down and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#delete_analysis"><CopyableCode code="delete_analysis" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-analysis_id"><code>analysis_id</code></a></td>
    <td><a href="#parameter-confirm_delete"><code>confirm_delete</code></a></td>
    <td>Deletes a specified code scanning analysis from a repository.<br /><br />You can delete one analysis at a time.<br />To delete a series of analyses, start with the most recent analysis and work backwards.<br />Conceptually, the process is similar to the undo function in a text editor.<br /><br />When you list the analyses for a repository,<br />one or more will be identified as deletable in the response:<br /><br />```<br />"deletable": true<br />```<br /><br />An analysis is deletable when it's the most recent in a set of analyses.<br />Typically, a repository will have multiple sets of analyses<br />for each enabled code scanning tool,<br />where a set is determined by a unique combination of analysis values:<br /><br />* `ref`<br />* `tool`<br />* `category`<br /><br />If you attempt to delete an analysis that is not the most recent in a set,<br />you'll get a 400 response with the message:<br /><br />```<br />Analysis specified is not deletable.<br />```<br /><br />The response from a successful `DELETE` operation provides you with<br />two alternative URLs for deleting the next analysis in the set:<br />`next_analysis_url` and `confirm_delete_url`.<br />Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis<br />in a set. This is a useful option if you want to preserve at least one analysis<br />for the specified tool in your repository.<br />Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.<br />When you delete the last analysis in a set, the value of `next_analysis_url` and `confirm_delete_url`<br />in the 200 response is `null`.<br /><br />As an example of the deletion process,<br />let's imagine that you added a workflow that configured a particular code scanning tool<br />to analyze the code in a repository. This tool has added 15 analyses:<br />10 on the default branch, and another 5 on a topic branch.<br />You therefore have two separate sets of analyses for this tool.<br />You've now decided that you want to remove all of the analyses for the tool.<br />To do this you must make 15 separate deletion requests.<br />To start, you must find an analysis that's identified as deletable.<br />Each set of analyses always has one that's identified as deletable.<br />Having found the deletable analysis for one of the two sets,<br />delete this analysis and then continue deleting the next analysis in the set until they're all deleted.<br />Then repeat the process for the second set.<br />The procedure therefore consists of a nested loop:<br /><br />**Outer loop**:<br />* List the analyses for the repository, filtered by tool.<br />* Parse this list to find a deletable analysis. If found:<br /><br />  **Inner loop**:<br />  * Delete the identified analysis.<br />  * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.<br /><br />The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
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
<tr id="parameter-analysis_id">
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the analysis, as returned from the `GET /repos/&#123;owner&#125;/&#123;repo&#125;/code-scanning/analyses` operation.</td>
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
<tr id="parameter-confirm_delete">
    <td><CopyableCode code="confirm_delete" /></td>
    <td><code>string</code></td>
    <td>Allow deletion if the specified analysis is the last in a set. If you attempt to delete the final analysis in a set without setting this parameter to `true`, you'll get a 400 response with the message: `Analysis is last of its type and deletion may result in the loss of historical alert data. Please specify confirm_delete.`</td>
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
    <td>The Git reference for the analyses you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.</td>
</tr>
<tr id="parameter-sarif_id">
    <td><CopyableCode code="sarif_id" /></td>
    <td><code>string</code></td>
    <td>Filter analyses belonging to the same SARIF upload.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property by which to sort the results.</td>
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
    defaultValue="get_analysis"
    values={[
        { label: 'get_analysis', value: 'get_analysis' },
        { label: 'list_recent_analyses', value: 'list_recent_analyses' }
    ]}
>
<TabItem value="get_analysis">

Gets a specified code scanning analysis for a repository.<br /><br />The default JSON response contains fields that describe the analysis.<br />This includes the Git reference and commit SHA to which the analysis relates,<br />the datetime of the analysis, the name of the code scanning tool,<br />and the number of alerts.<br /><br />The `rules_count` field in the default response give the number of rules<br />that were run in the analysis.<br />For very old analyses this data is not available,<br />and `0` is returned in this field.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/sarif+json`**: Instead of returning a summary of the analysis, this endpoint returns a subset of the analysis data that was uploaded. The data is formatted as [SARIF version 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html). It also returns additional data such as the `github/alertNumber` and `github/alertUrl` properties.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
id,
sarif_id,
analysis_key,
category,
commit_sha,
created_at,
deletable,
environment,
error,
ref,
results_count,
rules_count,
tool,
url,
warning
FROM github.code_scanning.analysis
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND analysis_id = '{{ analysis_id }}' -- required
;
```
</TabItem>
<TabItem value="list_recent_analyses">

Lists the details of all code scanning analyses for a repository,<br />starting with the most recent.<br />The response is paginated and you can use the `page` and `per_page` parameters<br />to list the analyses you're interested in.<br />By default 30 analyses are listed per page.<br /><br />The `rules_count` field in the response give the number of rules<br />that were run in the analysis.<br />For very old analyses this data is not available,<br />and `0` is returned in this field.<br /><br />&gt; [!WARNING]<br />&gt; **Closing down notice:** The `tool_name` field is closing down and will, in future, not be included in the response for this endpoint. The example response reflects this change. The tool name can now be found inside the `tool` field.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
id,
sarif_id,
analysis_key,
category,
commit_sha,
created_at,
deletable,
environment,
error,
ref,
results_count,
rules_count,
tool,
url,
warning
FROM github.code_scanning.analysis
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND tool_name = '{{ tool_name }}'
AND tool_guid = '{{ tool_guid }}'
AND page = '{{ page }}'
AND per_page = '{{ per_page }}'
AND pr = '{{ pr }}'
AND ref = '{{ ref }}'
AND sarif_id = '{{ sarif_id }}'
AND direction = '{{ direction }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_analysis"
    values={[
        { label: 'delete_analysis', value: 'delete_analysis' }
    ]}
>
<TabItem value="delete_analysis">

Deletes a specified code scanning analysis from a repository.<br /><br />You can delete one analysis at a time.<br />To delete a series of analyses, start with the most recent analysis and work backwards.<br />Conceptually, the process is similar to the undo function in a text editor.<br /><br />When you list the analyses for a repository,<br />one or more will be identified as deletable in the response:<br /><br />```<br />"deletable": true<br />```<br /><br />An analysis is deletable when it's the most recent in a set of analyses.<br />Typically, a repository will have multiple sets of analyses<br />for each enabled code scanning tool,<br />where a set is determined by a unique combination of analysis values:<br /><br />* `ref`<br />* `tool`<br />* `category`<br /><br />If you attempt to delete an analysis that is not the most recent in a set,<br />you'll get a 400 response with the message:<br /><br />```<br />Analysis specified is not deletable.<br />```<br /><br />The response from a successful `DELETE` operation provides you with<br />two alternative URLs for deleting the next analysis in the set:<br />`next_analysis_url` and `confirm_delete_url`.<br />Use the `next_analysis_url` URL if you want to avoid accidentally deleting the final analysis<br />in a set. This is a useful option if you want to preserve at least one analysis<br />for the specified tool in your repository.<br />Use the `confirm_delete_url` URL if you are content to remove all analyses for a tool.<br />When you delete the last analysis in a set, the value of `next_analysis_url` and `confirm_delete_url`<br />in the 200 response is `null`.<br /><br />As an example of the deletion process,<br />let's imagine that you added a workflow that configured a particular code scanning tool<br />to analyze the code in a repository. This tool has added 15 analyses:<br />10 on the default branch, and another 5 on a topic branch.<br />You therefore have two separate sets of analyses for this tool.<br />You've now decided that you want to remove all of the analyses for the tool.<br />To do this you must make 15 separate deletion requests.<br />To start, you must find an analysis that's identified as deletable.<br />Each set of analyses always has one that's identified as deletable.<br />Having found the deletable analysis for one of the two sets,<br />delete this analysis and then continue deleting the next analysis in the set until they're all deleted.<br />Then repeat the process for the second set.<br />The procedure therefore consists of a nested loop:<br /><br />**Outer loop**:<br />* List the analyses for the repository, filtered by tool.<br />* Parse this list to find a deletable analysis. If found:<br /><br />  **Inner loop**:<br />  * Delete the identified analysis.<br />  * Parse the response for the value of `confirm_delete_url` and, if found, use this in the next iteration.<br /><br />The above process assumes that you want to remove all trace of the tool's analyses from the GitHub user interface, for the specified repository, and it therefore uses the `confirm_delete_url` value. Alternatively, you could use the `next_analysis_url` value, which would leave the last analysis in each set undeleted to avoid removing a tool's analysis entirely.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
DELETE FROM github.code_scanning.analysis
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND analysis_id = '{{ analysis_id }}' --required
AND confirm_delete = '{{ confirm_delete }}'
;
```
</TabItem>
</Tabs>
