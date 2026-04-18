--- 
title: lfs
hide_title: false
hide_table_of_contents: false
keywords:
  - lfs
  - migrations
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

Creates, updates, deletes, gets or lists a <code>lfs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lfs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.migrations.lfs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_large_files"
    values={[
        { label: 'get_large_files', value: 'get_large_files' }
    ]}
>
<TabItem value="get_large_files">

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
    <td><CopyableCode code="ref_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="oid" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
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
    <td><a href="#get_large_files"><CopyableCode code="get_large_files" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>List files larger than 100MB found during the import<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).</td>
</tr>
<tr>
    <td><a href="#set_lfs_preference"><CopyableCode code="set_lfs_preference" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-use_lfs"><code>use_lfs</code></a></td>
    <td></td>
    <td>You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability<br />is powered by [Git LFS](https://git-lfs.com).<br /><br />You can learn more about our LFS feature and working with large files [on our help<br />site](https://docs.github.com/repositories/working-with-files/managing-large-files).<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_large_files"
    values={[
        { label: 'get_large_files', value: 'get_large_files' }
    ]}
>
<TabItem value="get_large_files">

List files larger than 100MB found during the import<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

```sql
SELECT
ref_name,
oid,
path,
size
FROM github.migrations.lfs
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_lfs_preference"
    values={[
        { label: 'set_lfs_preference', value: 'set_lfs_preference' }
    ]}
>
<TabItem value="set_lfs_preference">

You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability<br />is powered by [Git LFS](https://git-lfs.com).<br /><br />You can learn more about our LFS feature and working with large files [on our help<br />site](https://docs.github.com/repositories/working-with-files/managing-large-files).<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

```sql
UPDATE github.migrations.lfs
SET 
use_lfs = '{{ use_lfs }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND use_lfs = '{{ use_lfs }}' --required
RETURNING
authors_count,
authors_url,
commit_count,
error_message,
failed_step,
has_large_files,
html_url,
import_percent,
large_files_count,
large_files_size,
message,
project_choices,
push_percent,
repository_url,
status,
status_text,
svc_root,
svn_root,
tfvc_project,
url,
use_lfs,
vcs,
vcs_url;
```
</TabItem>
</Tabs>
