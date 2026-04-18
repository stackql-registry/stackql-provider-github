--- 
title: issues_and_pull_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - issues_and_pull_requests
  - search
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

Creates, updates, deletes, gets or lists an <code>issues_and_pull_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="issues_and_pull_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.search.issues_and_pull_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="issues_and_pull_requests"
    values={[
        { label: 'issues_and_pull_requests', value: 'issues_and_pull_requests' }
    ]}
>
<TabItem value="issues_and_pull_requests">

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
    <td><CopyableCode code="incomplete_results" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="lexical_fallback_reason" /></td>
    <td><code>array</code></td>
    <td>When a semantic or hybrid search falls back to lexical search, this field contains the reasons for the fallback. Only present when a fallback occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="search_type" /></td>
    <td><code>string</code></td>
    <td>The type of search that was performed. Possible values are `lexical`, `semantic`, or `hybrid`. (lexical, semantic, hybrid)</td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
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
    <td><a href="#issues_and_pull_requests"><CopyableCode code="issues_and_pull_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-q"><code>q</code></a></td>
    <td><a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-advanced_search"><code>advanced_search</code></a>, <a href="#parameter-search_type"><code>search_type</code></a></td>
    <td>Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api).<br /><br />When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted<br />search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).<br /><br />For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.<br /><br />`q=windows+label:bug+language:python+state:open&sort=created&order=asc`<br /><br />This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.<br /><br />&gt; [!NOTE]<br />&gt; For requests made by GitHub Apps with a user access token, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."</td>
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
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td>The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching issues and pull requests](https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests)" for a detailed list of qualifiers.</td>
</tr>
<tr id="parameter-advanced_search">
    <td><CopyableCode code="advanced_search" /></td>
    <td><code>string</code></td>
    <td>Set to `true` to use advanced search. Example: `http://api.github.com/search/issues?q=&#123;query&#125;&advanced_search=true`</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.</td>
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
<tr id="parameter-search_type">
    <td><CopyableCode code="search_type" /></td>
    <td><code>string</code></td>
    <td>The type of search to perform on issues. When not specified, the default is lexical search.  - `semantic` — performs a pure semantic (vector) search using embedding-based understanding. - `hybrid` — combines semantic search with lexical search for best results.  Semantic and hybrid search require authentication and are rate limited to 10 requests per minute. Only applies to issue searches (`/search/issues`).</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="issues_and_pull_requests"
    values={[
        { label: 'issues_and_pull_requests', value: 'issues_and_pull_requests' }
    ]}
>
<TabItem value="issues_and_pull_requests">

Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api).<br /><br />When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted<br />search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).<br /><br />For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.<br /><br />`q=windows+label:bug+language:python+state:open&sort=created&order=asc`<br /><br />This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.<br /><br />&gt; [!NOTE]<br />&gt; For requests made by GitHub Apps with a user access token, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."

```sql
SELECT
incomplete_results,
items,
lexical_fallback_reason,
search_type,
total_count
FROM github.search.issues_and_pull_requests
WHERE q = '{{ q }}' -- required
AND sort = '{{ sort }}'
AND order = '{{ order }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
AND advanced_search = '{{ advanced_search }}'
AND search_type = '{{ search_type }}'
;
```
</TabItem>
</Tabs>
