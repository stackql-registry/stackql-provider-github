--- 
title: rate_limit
hide_title: false
hide_table_of_contents: false
keywords:
  - rate_limit
  - rate_limit
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

Creates, updates, deletes, gets or lists a <code>rate_limit</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rate_limit" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.rate_limit.rate_limit" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

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
    <td><CopyableCode code="rate" /></td>
    <td><code>object</code></td>
    <td> (title: Rate Limit)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>object</code></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; Accessing this endpoint does not count against your REST API rate limit.<br /><br />Some categories of endpoints have custom rate limits that are separate from the rate limit governing the other REST API endpoints. For this reason, the API response categorizes your rate limit. Under `resources`, you'll see objects relating to different categories:<br />* The `core` object provides your rate limit status for all non-search-related resources in the REST API.<br />* The `search` object provides your rate limit status for the REST API for searching (excluding code searches). For more information, see "[Search](https://docs.github.com/rest/search/search)."<br />* The `code_search` object provides your rate limit status for the REST API for searching code. For more information, see "[Search code](https://docs.github.com/rest/search/search#search-code)."<br />* The `graphql` object provides your rate limit status for the GraphQL API. For more information, see "[Resource limitations](https://docs.github.com/graphql/overview/resource-limitations#rate-limit)."<br />* The `integration_manifest` object provides your rate limit status for the `POST /app-manifests/&#123;code&#125;/conversions` operation. For more information, see "[Creating a GitHub App from a manifest](https://docs.github.com/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-from-a-manifest#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)."<br />* The `dependency_snapshots` object provides your rate limit status for submitting snapshots to the dependency graph. For more information, see "[Dependency graph](https://docs.github.com/rest/dependency-graph)."<br />* The `dependency_sbom` object provides your rate limit status for requesting SBOMs from the dependency graph. For more information, see "[Dependency graph](https://docs.github.com/rest/dependency-graph)."<br />* The `code_scanning_upload` object provides your rate limit status for uploading SARIF results to code scanning. For more information, see "[Uploading a SARIF file to GitHub](https://docs.github.com/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)."<br />* The `actions_runner_registration` object provides your rate limit status for registering self-hosted runners in GitHub Actions. For more information, see "[Self-hosted runners](https://docs.github.com/rest/actions/self-hosted-runners)."<br />* The `source_import` object is no longer in use for any API endpoints, and it will be removed in the next API version. For more information about API versions, see "[API Versions](https://docs.github.com/rest/about-the-rest-api/api-versions)."<br /><br />&gt; [!NOTE]<br />&gt; The `rate` object is closing down. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

&gt; [!NOTE]<br />&gt; Accessing this endpoint does not count against your REST API rate limit.<br /><br />Some categories of endpoints have custom rate limits that are separate from the rate limit governing the other REST API endpoints. For this reason, the API response categorizes your rate limit. Under `resources`, you'll see objects relating to different categories:<br />* The `core` object provides your rate limit status for all non-search-related resources in the REST API.<br />* The `search` object provides your rate limit status for the REST API for searching (excluding code searches). For more information, see "[Search](https://docs.github.com/rest/search/search)."<br />* The `code_search` object provides your rate limit status for the REST API for searching code. For more information, see "[Search code](https://docs.github.com/rest/search/search#search-code)."<br />* The `graphql` object provides your rate limit status for the GraphQL API. For more information, see "[Resource limitations](https://docs.github.com/graphql/overview/resource-limitations#rate-limit)."<br />* The `integration_manifest` object provides your rate limit status for the `POST /app-manifests/&#123;code&#125;/conversions` operation. For more information, see "[Creating a GitHub App from a manifest](https://docs.github.com/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-from-a-manifest#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)."<br />* The `dependency_snapshots` object provides your rate limit status for submitting snapshots to the dependency graph. For more information, see "[Dependency graph](https://docs.github.com/rest/dependency-graph)."<br />* The `dependency_sbom` object provides your rate limit status for requesting SBOMs from the dependency graph. For more information, see "[Dependency graph](https://docs.github.com/rest/dependency-graph)."<br />* The `code_scanning_upload` object provides your rate limit status for uploading SARIF results to code scanning. For more information, see "[Uploading a SARIF file to GitHub](https://docs.github.com/code-security/code-scanning/integrating-with-code-scanning/uploading-a-sarif-file-to-github)."<br />* The `actions_runner_registration` object provides your rate limit status for registering self-hosted runners in GitHub Actions. For more information, see "[Self-hosted runners](https://docs.github.com/rest/actions/self-hosted-runners)."<br />* The `source_import` object is no longer in use for any API endpoints, and it will be removed in the next API version. For more information about API versions, see "[API Versions](https://docs.github.com/rest/about-the-rest-api/api-versions)."<br /><br />&gt; [!NOTE]<br />&gt; The `rate` object is closing down. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.

```sql
SELECT
rate,
resources
FROM github.rate_limit.rate_limit
;
```
</TabItem>
</Tabs>
