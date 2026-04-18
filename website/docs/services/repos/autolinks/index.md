--- 
title: autolinks
hide_title: false
hide_table_of_contents: false
keywords:
  - autolinks
  - repos
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

Creates, updates, deletes, gets or lists an <code>autolinks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autolinks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.autolinks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_autolink"
    values={[
        { label: 'get_autolink', value: 'get_autolink' },
        { label: 'list_autolinks', value: 'list_autolinks' }
    ]}
>
<TabItem value="get_autolink">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_alphanumeric" /></td>
    <td><code>boolean</code></td>
    <td>Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="key_prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix of a key that is linkified. (example: TICKET-)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url_template" /></td>
    <td><code>string</code></td>
    <td>A template for the target URL that is generated if a key was found. (example: https://example.com/TICKET?query=&lt;num&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_autolinks">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="is_alphanumeric" /></td>
    <td><code>boolean</code></td>
    <td>Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.</td>
</tr>
<tr>
    <td><CopyableCode code="key_prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix of a key that is linkified. (example: TICKET-)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url_template" /></td>
    <td><code>string</code></td>
    <td>A template for the target URL that is generated if a key was found. (example: https://example.com/TICKET?query=&lt;num&gt;)</td>
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
    <td><a href="#get_autolink"><CopyableCode code="get_autolink" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-autolink_id"><code>autolink_id</code></a></td>
    <td></td>
    <td>This returns a single autolink reference by ID that was configured for the given repository.<br /><br />Information about autolinks are only available to repository administrators.</td>
</tr>
<tr>
    <td><a href="#list_autolinks"><CopyableCode code="list_autolinks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets all autolinks that are configured for a repository.<br /><br />Information about autolinks are only available to repository administrators.</td>
</tr>
<tr>
    <td><a href="#create_autolink"><CopyableCode code="create_autolink" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-key_prefix"><code>key_prefix</code></a>, <a href="#parameter-url_template"><code>url_template</code></a></td>
    <td></td>
    <td>Users with admin access to the repository can create an autolink.</td>
</tr>
<tr>
    <td><a href="#delete_autolink"><CopyableCode code="delete_autolink" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-autolink_id"><code>autolink_id</code></a></td>
    <td></td>
    <td>This deletes a single autolink reference by ID that was configured for the given repository.<br /><br />Information about autolinks are only available to repository administrators.</td>
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
<tr id="parameter-autolink_id">
    <td><CopyableCode code="autolink_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the autolink.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_autolink"
    values={[
        { label: 'get_autolink', value: 'get_autolink' },
        { label: 'list_autolinks', value: 'list_autolinks' }
    ]}
>
<TabItem value="get_autolink">

This returns a single autolink reference by ID that was configured for the given repository.<br /><br />Information about autolinks are only available to repository administrators.

```sql
SELECT
id,
is_alphanumeric,
key_prefix,
updated_at,
url_template
FROM github.repos.autolinks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND autolink_id = '{{ autolink_id }}' -- required
;
```
</TabItem>
<TabItem value="list_autolinks">

Gets all autolinks that are configured for a repository.<br /><br />Information about autolinks are only available to repository administrators.

```sql
SELECT
id,
is_alphanumeric,
key_prefix,
updated_at,
url_template
FROM github.repos.autolinks
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_autolink"
    values={[
        { label: 'create_autolink', value: 'create_autolink' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_autolink">

Users with admin access to the repository can create an autolink.

```sql
INSERT INTO github.repos.autolinks (
key_prefix,
url_template,
is_alphanumeric,
owner,
repo
)
SELECT 
'{{ key_prefix }}' /* required */,
'{{ url_template }}' /* required */,
{{ is_alphanumeric }},
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
is_alphanumeric,
key_prefix,
updated_at,
url_template
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: autolinks
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the autolinks resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the autolinks resource.
    - name: key_prefix
      value: "{{ key_prefix }}"
      description: |
        This prefix appended by certain characters will generate a link any time it is found in an issue, pull request, or commit.
    - name: url_template
      value: "{{ url_template }}"
      description: |
        The URL must contain \`<num>\` for the reference number. \`<num>\` matches different characters depending on the value of \`is_alphanumeric\`.
    - name: is_alphanumeric
      value: {{ is_alphanumeric }}
      description: |
        Whether this autolink reference matches alphanumeric characters. If true, the \`<num>\` parameter of the \`url_template\` matches alphanumeric characters \`A-Z\` (case insensitive), \`0-9\`, and \`-\`. If false, this autolink reference only matches numeric characters.
      default: true
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_autolink"
    values={[
        { label: 'delete_autolink', value: 'delete_autolink' }
    ]}
>
<TabItem value="delete_autolink">

This deletes a single autolink reference by ID that was configured for the given repository.<br /><br />Information about autolinks are only available to repository administrators.

```sql
DELETE FROM github.repos.autolinks
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND autolink_id = '{{ autolink_id }}' --required
;
```
</TabItem>
</Tabs>
