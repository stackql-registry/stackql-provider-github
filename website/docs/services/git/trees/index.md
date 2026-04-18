--- 
title: trees
hide_title: false
hide_table_of_contents: false
keywords:
  - trees
  - git
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

Creates, updates, deletes, gets or lists a <code>trees</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trees" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.git.trees" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tree"
    values={[
        { label: 'get_tree', value: 'get_tree' }
    ]}
>
<TabItem value="get_tree">

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
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tree" /></td>
    <td><code>array</code></td>
    <td>Objects specifying a tree structure</td>
</tr>
<tr>
    <td><CopyableCode code="truncated" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
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
    <td><a href="#get_tree"><CopyableCode code="get_tree" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-tree_sha"><code>tree_sha</code></a></td>
    <td><a href="#parameter-recursive"><code>recursive</code></a></td>
    <td>Returns a single tree using the SHA1 value or ref name for that tree.<br /><br />If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.<br /><br />&gt; [!NOTE]<br />&gt; The limit for the `tree` array is 100,000 entries with a maximum size of 7 MB when using the `recursive` parameter.</td>
</tr>
<tr>
    <td><a href="#create_tree"><CopyableCode code="create_tree" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-tree"><code>tree</code></a></td>
    <td></td>
    <td>The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.<br /><br />If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/rest/git/commits#create-a-commit)" and "[Update a reference](https://docs.github.com/rest/git/refs#update-a-reference)."<br /><br />Returns an error if you try to delete a file that does not exist.</td>
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
<tr id="parameter-tree_sha">
    <td><CopyableCode code="tree_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA1 value or ref (branch or tag) name of the tree.</td>
</tr>
<tr id="parameter-recursive">
    <td><CopyableCode code="recursive" /></td>
    <td><code>string</code></td>
    <td>Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `"true"`, and `"false"`. Omit this parameter to prevent recursively returning objects or subtrees.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tree"
    values={[
        { label: 'get_tree', value: 'get_tree' }
    ]}
>
<TabItem value="get_tree">

Returns a single tree using the SHA1 value or ref name for that tree.<br /><br />If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.<br /><br />&gt; [!NOTE]<br />&gt; The limit for the `tree` array is 100,000 entries with a maximum size of 7 MB when using the `recursive` parameter.

```sql
SELECT
sha,
tree,
truncated,
url
FROM github.git.trees
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND tree_sha = '{{ tree_sha }}' -- required
AND recursive = '{{ recursive }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tree"
    values={[
        { label: 'create_tree', value: 'create_tree' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tree">

The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.<br /><br />If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://docs.github.com/rest/git/commits#create-a-commit)" and "[Update a reference](https://docs.github.com/rest/git/refs#update-a-reference)."<br /><br />Returns an error if you try to delete a file that does not exist.

```sql
INSERT INTO github.git.trees (
tree,
base_tree,
owner,
repo
)
SELECT 
'{{ tree }}' /* required */,
'{{ base_tree }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
sha,
tree,
truncated,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trees
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the trees resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the trees resource.
    - name: tree
      description: |
        Objects (of \`path\`, \`mode\`, \`type\`, and \`sha\`) specifying a tree structure.
      value:
        - path: "{{ path }}"
          mode: "{{ mode }}"
          type: "{{ type }}"
          sha: "{{ sha }}"
          content: "{{ content }}"
    - name: base_tree
      value: "{{ base_tree }}"
      description: |
        The SHA1 of an existing Git tree object which will be used as the base for the new tree. If provided, a new Git tree object will be created from entries in the Git tree object pointed to by \`base_tree\` and entries defined in the \`tree\` parameter. Entries defined in the \`tree\` parameter will overwrite items from \`base_tree\` with the same \`path\`. If you're creating new changes on a branch, then normally you'd set \`base_tree\` to the SHA1 of the Git tree object of the current latest commit on the branch you're working on.
        If not provided, GitHub will create a new Git tree object from only the entries defined in the \`tree\` parameter. If you create a new commit pointing to such a tree, then all files which were a part of the parent commit's tree and were not defined in the \`tree\` parameter will be listed as deleted by the new commit.
`}</CodeBlock>

</TabItem>
</Tabs>
