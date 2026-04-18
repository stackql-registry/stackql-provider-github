--- 
title: rendered_markdown
hide_title: false
hide_table_of_contents: false
keywords:
  - rendered_markdown
  - markdown
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

Creates, updates, deletes, gets or lists a <code>rendered_markdown</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rendered_markdown" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.markdown.rendered_markdown" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#render"><CopyableCode code="render" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-text"><code>text</code></a></td>
    <td></td>
    <td>Depending on what is rendered in the Markdown, you may need to provide additional token scopes for labels, such as `issues:read` or `pull_requests:read`.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="render"
    values={[
        { label: 'render', value: 'render' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="render">

Depending on what is rendered in the Markdown, you may need to provide additional token scopes for labels, such as `issues:read` or `pull_requests:read`.

```sql
INSERT INTO github.markdown.rendered_markdown (
text,
mode,
context
)
SELECT 
'{{ text }}' /* required */,
'{{ mode }}',
'{{ context }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: rendered_markdown
  props:
    - name: text
      value: "{{ text }}"
      description: |
        The Markdown text to render in HTML.
    - name: mode
      value: "{{ mode }}"
      description: |
        The rendering mode.
      valid_values: ['markdown', 'gfm']
      default: markdown
    - name: context
      value: "{{ context }}"
      description: |
        The repository context to use when creating references in \`gfm\` mode.  For example, setting \`context\` to \`octo-org/octo-repo\` will change the text \`#42\` into an HTML link to issue 42 in the \`octo-org/octo-repo\` repository.
`}</CodeBlock>

</TabItem>
</Tabs>
