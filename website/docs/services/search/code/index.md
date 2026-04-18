--- 
title: code
hide_title: false
hide_table_of_contents: false
keywords:
  - code
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

Creates, updates, deletes, gets or lists a <code>code</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.search.code" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="code"
    values={[
        { label: 'code', value: 'code' }
    ]}
>
<TabItem value="code">

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
    <td><a href="#code"><CopyableCode code="code" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-q"><code>q</code></a></td>
    <td><a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api).<br /><br />When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).<br /><br />For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:<br /><br />`q=addClass+in:file+language:js+repo:jquery/jquery`<br /><br />This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.<br /><br />Considerations for code search:<br /><br />Due to the complexity of searching code, there are a few restrictions on how searches are performed:<br /><br />*   Only the _default branch_ is considered. In most cases, this will be the `master` branch.<br />*   Only files smaller than 384 KB are searchable.<br />*   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing<br />language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.<br /><br />&gt; [!NOTE]<br />&gt; `repository.description`, `repository.owner.type`, and `repository.owner.node_id` are closing down on this endpoint and will return `null` in a future API version. Use the [Get a repository](https://docs.github.com/rest/repos/repos#get-a-repository) endpoint (`GET /repos/&#123;owner&#125;/&#123;repo&#125;`) to retrieve full repository metadata.<br /><br />This endpoint requires you to authenticate and limits you to 10 requests per minute.</td>
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
    <td>The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/search/search#constructing-a-search-query). See "[Searching code](https://docs.github.com/search-github/searching-on-github/searching-code)" for a detailed list of qualifiers.</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>**This field is closing down.** Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. </td>
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
    <td>**This field is closing down.** Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://docs.github.com/rest/search/search#ranking-search-results)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="code"
    values={[
        { label: 'code', value: 'code' }
    ]}
>
<TabItem value="code">

Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api).<br /><br />When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/search/search#text-match-metadata).<br /><br />For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:<br /><br />`q=addClass+in:file+language:js+repo:jquery/jquery`<br /><br />This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.<br /><br />Considerations for code search:<br /><br />Due to the complexity of searching code, there are a few restrictions on how searches are performed:<br /><br />*   Only the _default branch_ is considered. In most cases, this will be the `master` branch.<br />*   Only files smaller than 384 KB are searchable.<br />*   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing<br />language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.<br /><br />&gt; [!NOTE]<br />&gt; `repository.description`, `repository.owner.type`, and `repository.owner.node_id` are closing down on this endpoint and will return `null` in a future API version. Use the [Get a repository](https://docs.github.com/rest/repos/repos#get-a-repository) endpoint (`GET /repos/&#123;owner&#125;/&#123;repo&#125;`) to retrieve full repository metadata.<br /><br />This endpoint requires you to authenticate and limits you to 10 requests per minute.

```sql
SELECT
incomplete_results,
items,
total_count
FROM github.search.code
WHERE q = '{{ q }}' -- required
AND sort = '{{ sort }}'
AND order = '{{ order }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
