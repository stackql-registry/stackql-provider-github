--- 
title: gitignore
hide_title: false
hide_table_of_contents: false
keywords:
  - gitignore
  - gitignore
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

Creates, updates, deletes, gets or lists a <code>gitignore</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gitignore" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.gitignore.gitignore" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'get_all_templates', value: 'get_all_templates' }
    ]}
>
<TabItem value="get_template">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: C)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td> (example: # Object files<br />*.o<br /><br /># Libraries<br />*.lib<br />*.a<br /><br /># Shared objects (inc. Windows DLLs)<br />*.dll<br />*.so<br />*.so.*<br />*.dylib<br /><br /># Executables<br />*.exe<br />*.out<br />*.app<br />)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_templates">

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
    <td><a href="#get_template"><CopyableCode code="get_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Get the content of a gitignore template.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw .gitignore contents.</td>
</tr>
<tr>
    <td><a href="#get_all_templates"><CopyableCode code="get_all_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/repos/repos#create-a-repository-for-the-authenticated-user).</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'get_all_templates', value: 'get_all_templates' }
    ]}
>
<TabItem value="get_template">

Get the content of a gitignore template.<br /><br />This endpoint supports the following custom media types. For more information, see "[Media types](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#media-types)."<br /><br />- **`application/vnd.github.raw+json`**: Returns the raw .gitignore contents.

```sql
SELECT
name,
source
FROM github.gitignore.gitignore
WHERE name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="get_all_templates">

List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/repos/repos#create-a-repository-for-the-authenticated-user).

```sql
SELECT
*
FROM github.gitignore.gitignore
;
```
</TabItem>
</Tabs>
