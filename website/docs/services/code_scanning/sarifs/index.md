--- 
title: sarifs
hide_title: false
hide_table_of_contents: false
keywords:
  - sarifs
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

Creates, updates, deletes, gets or lists a <code>sarifs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sarifs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.sarifs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sarif"
    values={[
        { label: 'get_sarif', value: 'get_sarif' }
    ]}
>
<TabItem value="get_sarif">

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
    <td><CopyableCode code="analyses_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The REST API URL for getting the analyses associated with the upload.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Any errors that ocurred during processing of the delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="processing_status" /></td>
    <td><code>string</code></td>
    <td>`pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed. (pending, complete, failed)</td>
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
    <td><a href="#get_sarif"><CopyableCode code="get_sarif" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-sarif_id"><code>sarif_id</code></a></td>
    <td></td>
    <td>Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](https://docs.github.com/rest/code-scanning/code-scanning#get-a-code-scanning-analysis-for-a-repository)."<br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#upload_sarif"><CopyableCode code="upload_sarif" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-commit_sha"><code>commit_sha</code></a>, <a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-sarif"><code>sarif</code></a></td>
    <td></td>
    <td>Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. For troubleshooting information, see "[Troubleshooting SARIF uploads](https://docs.github.com/code-security/code-scanning/troubleshooting-sarif)."<br /><br />There are two places where you can upload code scanning results.<br /> - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](https://docs.github.com/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."<br /> - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](https://docs.github.com/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."<br /><br />You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:<br /><br />```<br />gzip -c analysis-data.sarif | base64 -w0<br />```<br /><br />SARIF upload supports a maximum number of entries per the following data objects, and an analysis will be rejected if any of these objects is above its maximum value. For some objects, there are additional values over which the entries will be ignored while keeping the most important entries whenever applicable.<br />To get the most out of your analysis when it includes data above the supported limits, try to optimize the analysis configuration. For example, for the CodeQL tool, identify and remove the most noisy queries. For more information, see "[SARIF results exceed one or more limits](https://docs.github.com/code-security/code-scanning/troubleshooting-sarif/results-exceed-limit)."<br /><br /><br />| **SARIF data**                   | **Maximum values** | **Additional limits**                                                            |<br />|----------------------------------|:------------------:|----------------------------------------------------------------------------------|<br />| Runs per file                    |         20         |                                                                                  |<br />| Results per run                  |       25,000       | Only the top 5,000 results will be included, prioritized by severity.            |<br />| Rules per run                    |       25,000       |                                                                                  |<br />| Tool extensions per run          |        100         |                                                                                  |<br />| Thread Flow Locations per result |       10,000       | Only the top 1,000 Thread Flow Locations will be included, using prioritization. |<br />| Location per result	             |       1,000        | Only 100 locations will be included.                                             |<br />| Tags per rule	                   |         20         | Only 10 tags will be included.                                                   |<br /><br /><br />The `202 Accepted` response includes an `id` value.<br />You can use this ID to check the status of the upload by using it in the `/sarifs/&#123;sarif_id&#125;` endpoint.<br />For more information, see "[Get information about a SARIF upload](https://docs.github.com/rest/code-scanning/code-scanning#get-information-about-a-sarif-upload)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.<br /><br />This endpoint is limited to 1,000 requests per hour for each user or app installation calling it.</td>
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
<tr id="parameter-sarif_id">
    <td><CopyableCode code="sarif_id" /></td>
    <td><code>string</code></td>
    <td>The SARIF ID obtained after uploading.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_sarif"
    values={[
        { label: 'get_sarif', value: 'get_sarif' }
    ]}
>
<TabItem value="get_sarif">

Gets information about a SARIF upload, including the status and the URL of the analysis that was uploaded so that you can retrieve details of the analysis. For more information, see "[Get a code scanning analysis for a repository](https://docs.github.com/rest/code-scanning/code-scanning#get-a-code-scanning-analysis-for-a-repository)."<br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
analyses_url,
errors,
processing_status
FROM github.code_scanning.sarifs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND sarif_id = '{{ sarif_id }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="upload_sarif"
    values={[
        { label: 'upload_sarif', value: 'upload_sarif' }
    ]}
>
<TabItem value="upload_sarif">

Uploads SARIF data containing the results of a code scanning analysis to make the results available in a repository. For troubleshooting information, see "[Troubleshooting SARIF uploads](https://docs.github.com/code-security/code-scanning/troubleshooting-sarif)."<br /><br />There are two places where you can upload code scanning results.<br /> - If you upload to a pull request, for example `--ref refs/pull/42/merge` or `--ref refs/pull/42/head`, then the results appear as alerts in a pull request check. For more information, see "[Triaging code scanning alerts in pull requests](https://docs.github.com/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)."<br /> - If you upload to a branch, for example `--ref refs/heads/my-branch`, then the results appear in the **Security** tab for your repository. For more information, see "[Managing code scanning alerts for your repository](https://docs.github.com/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)."<br /><br />You must compress the SARIF-formatted analysis data that you want to upload, using `gzip`, and then encode it as a Base64 format string. For example:<br /><br />```<br />gzip -c analysis-data.sarif | base64 -w0<br />```<br /><br />SARIF upload supports a maximum number of entries per the following data objects, and an analysis will be rejected if any of these objects is above its maximum value. For some objects, there are additional values over which the entries will be ignored while keeping the most important entries whenever applicable.<br />To get the most out of your analysis when it includes data above the supported limits, try to optimize the analysis configuration. For example, for the CodeQL tool, identify and remove the most noisy queries. For more information, see "[SARIF results exceed one or more limits](https://docs.github.com/code-security/code-scanning/troubleshooting-sarif/results-exceed-limit)."<br /><br /><br />| **SARIF data**                   | **Maximum values** | **Additional limits**                                                            |<br />|----------------------------------|:------------------:|----------------------------------------------------------------------------------|<br />| Runs per file                    |         20         |                                                                                  |<br />| Results per run                  |       25,000       | Only the top 5,000 results will be included, prioritized by severity.            |<br />| Rules per run                    |       25,000       |                                                                                  |<br />| Tool extensions per run          |        100         |                                                                                  |<br />| Thread Flow Locations per result |       10,000       | Only the top 1,000 Thread Flow Locations will be included, using prioritization. |<br />| Location per result	             |       1,000        | Only 100 locations will be included.                                             |<br />| Tags per rule	                   |         20         | Only 10 tags will be included.                                                   |<br /><br /><br />The `202 Accepted` response includes an `id` value.<br />You can use this ID to check the status of the upload by using it in the `/sarifs/&#123;sarif_id&#125;` endpoint.<br />For more information, see "[Get information about a SARIF upload](https://docs.github.com/rest/code-scanning/code-scanning#get-information-about-a-sarif-upload)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.<br /><br />This endpoint is limited to 1,000 requests per hour for each user or app installation calling it.

```sql
UPDATE github.code_scanning.sarifs
SET 
commit_sha = '{{ commit_sha }}',
ref = '{{ ref }}',
sarif = '{{ sarif }}',
checkout_uri = '{{ checkout_uri }}',
started_at = '{{ started_at }}',
tool_name = '{{ tool_name }}',
validate = {{ validate }}
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND commit_sha = '{{ commit_sha }}' --required
AND ref = '{{ ref }}' --required
AND sarif = '{{ sarif }}' --required
RETURNING
id,
url;
```
</TabItem>
</Tabs>
