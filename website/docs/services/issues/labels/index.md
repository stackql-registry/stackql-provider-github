--- 
title: labels
hide_title: false
hide_table_of_contents: false
keywords:
  - labels
  - issues
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

Creates, updates, deletes, gets or lists a <code>labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.issues.labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_labels_on_issue"
    values={[
        { label: 'list_labels_on_issue', value: 'list_labels_on_issue' },
        { label: 'get_label', value: 'get_label' },
        { label: 'list_labels_for_milestone', value: 'list_labels_for_milestone' },
        { label: 'list_labels_for_repo', value: 'list_labels_for_repo' }
    ]}
>
<TabItem value="list_labels_on_issue">

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
    <td><code>integer (int64)</code></td>
    <td>Unique identifier for the label.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the label. (example: bug)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDU6TGFiZWwyMDgwNDU5NDY=)</td>
</tr>
<tr>
    <td><CopyableCode code="color" /></td>
    <td><code>string</code></td>
    <td>6-character hex code, without the leading #, identifying the color (example: FFFFFF)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this label comes by default in a new repository.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description of the label, such as its purpose. (example: Something isn't working)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the label (example: https://api.github.com/repositories/42/labels/bug)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_label">

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
    <td><code>integer (int64)</code></td>
    <td>Unique identifier for the label.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the label. (example: bug)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDU6TGFiZWwyMDgwNDU5NDY=)</td>
</tr>
<tr>
    <td><CopyableCode code="color" /></td>
    <td><code>string</code></td>
    <td>6-character hex code, without the leading #, identifying the color (example: FFFFFF)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this label comes by default in a new repository.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description of the label, such as its purpose. (example: Something isn't working)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the label (example: https://api.github.com/repositories/42/labels/bug)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_labels_for_milestone">

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
    <td><code>integer (int64)</code></td>
    <td>Unique identifier for the label.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the label. (example: bug)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDU6TGFiZWwyMDgwNDU5NDY=)</td>
</tr>
<tr>
    <td><CopyableCode code="color" /></td>
    <td><code>string</code></td>
    <td>6-character hex code, without the leading #, identifying the color (example: FFFFFF)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this label comes by default in a new repository.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description of the label, such as its purpose. (example: Something isn't working)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the label (example: https://api.github.com/repositories/42/labels/bug)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_labels_for_repo">

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
    <td><code>integer (int64)</code></td>
    <td>Unique identifier for the label.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the label. (example: bug)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDU6TGFiZWwyMDgwNDU5NDY=)</td>
</tr>
<tr>
    <td><CopyableCode code="color" /></td>
    <td><code>string</code></td>
    <td>6-character hex code, without the leading #, identifying the color (example: FFFFFF)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this label comes by default in a new repository.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Optional description of the label, such as its purpose. (example: Something isn't working)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the label (example: https://api.github.com/repositories/42/labels/bug)</td>
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
    <td><a href="#list_labels_on_issue"><CopyableCode code="list_labels_on_issue" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all labels for an issue.</td>
</tr>
<tr>
    <td><a href="#get_label"><CopyableCode code="get_label" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Gets a label using the given name.</td>
</tr>
<tr>
    <td><a href="#list_labels_for_milestone"><CopyableCode code="list_labels_for_milestone" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-milestone_number"><code>milestone_number</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists labels for issues in a milestone.</td>
</tr>
<tr>
    <td><a href="#list_labels_for_repo"><CopyableCode code="list_labels_for_repo" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists all labels for a repository.</td>
</tr>
<tr>
    <td><a href="#add_labels"><CopyableCode code="add_labels" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td></td>
    <td>Adds labels to an issue.</td>
</tr>
<tr>
    <td><a href="#create_label"><CopyableCode code="create_label" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a label for the specified repository with the given name and color. The name and color parameters are required. The color must be a valid [hexadecimal color code](http://www.color-hex.com/).</td>
</tr>
<tr>
    <td><a href="#update_label"><CopyableCode code="update_label" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a label using the given label name.</td>
</tr>
<tr>
    <td><a href="#set_labels"><CopyableCode code="set_labels" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td></td>
    <td>Removes any previous labels and sets the new labels for an issue.</td>
</tr>
<tr>
    <td><a href="#remove_label"><CopyableCode code="remove_label" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.</td>
</tr>
<tr>
    <td><a href="#remove_all_labels"><CopyableCode code="remove_all_labels" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-issue_number"><code>issue_number</code></a></td>
    <td></td>
    <td>Removes all labels from an issue.</td>
</tr>
<tr>
    <td><a href="#delete_label"><CopyableCode code="delete_label" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Deletes a label using the given label name.</td>
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
<tr id="parameter-issue_number">
    <td><CopyableCode code="issue_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the issue.</td>
</tr>
<tr id="parameter-milestone_number">
    <td><CopyableCode code="milestone_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the milestone.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_labels_on_issue"
    values={[
        { label: 'list_labels_on_issue', value: 'list_labels_on_issue' },
        { label: 'get_label', value: 'get_label' },
        { label: 'list_labels_for_milestone', value: 'list_labels_for_milestone' },
        { label: 'list_labels_for_repo', value: 'list_labels_for_repo' }
    ]}
>
<TabItem value="list_labels_on_issue">

Lists all labels for an issue.

```sql
SELECT
id,
name,
node_id,
color,
default,
description,
url
FROM github.issues.labels
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND issue_number = '{{ issue_number }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="get_label">

Gets a label using the given name.

```sql
SELECT
id,
name,
node_id,
color,
default,
description,
url
FROM github.issues.labels
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list_labels_for_milestone">

Lists labels for issues in a milestone.

```sql
SELECT
id,
name,
node_id,
color,
default,
description,
url
FROM github.issues.labels
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND milestone_number = '{{ milestone_number }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list_labels_for_repo">

Lists all labels for a repository.

```sql
SELECT
id,
name,
node_id,
color,
default,
description,
url
FROM github.issues.labels
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="add_labels"
    values={[
        { label: 'add_labels', value: 'add_labels' },
        { label: 'create_label', value: 'create_label' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="add_labels">

Adds labels to an issue.

```sql
INSERT INTO github.issues.labels (
labels,
owner,
repo,
issue_number
)
SELECT 
'{{ labels }}',
'{{ owner }}',
'{{ repo }}',
'{{ issue_number }}'
RETURNING
id,
name,
node_id,
color,
default,
description,
url
;
```
</TabItem>
<TabItem value="create_label">

Creates a label for the specified repository with the given name and color. The name and color parameters are required. The color must be a valid [hexadecimal color code](http://www.color-hex.com/).

```sql
INSERT INTO github.issues.labels (
name,
color,
description,
owner,
repo
)
SELECT 
'{{ name }}' /* required */,
'{{ color }}',
'{{ description }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
name,
node_id,
color,
default,
description,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: labels
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the labels resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the labels resource.
    - name: issue_number
      value: {{ issue_number }}
      description: Required parameter for the labels resource.
    - name: labels
      value:
        - "{{ labels }}"
      description: |
        The names of the labels to add to the issue's existing labels. You can also pass an \`array\` of labels directly, but GitHub recommends passing an object with the \`labels\` key. To replace all of the labels for an issue, use "[Set labels for an issue](https://docs.github.com/rest/issues/labels#set-labels-for-an-issue)."
    - name: name
      value: "{{ name }}"
      description: |
        The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing \`:strawberry:\` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see "[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet)."
    - name: color
      value: "{{ color }}"
      description: |
        The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading \`#\`.
    - name: description
      value: "{{ description }}"
      description: |
        A short description of the label. Must be 100 characters or fewer.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_label"
    values={[
        { label: 'update_label', value: 'update_label' }
    ]}
>
<TabItem value="update_label">

Updates a label using the given label name.

```sql
UPDATE github.issues.labels
SET 
new_name = '{{ new_name }}',
color = '{{ color }}',
description = '{{ description }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND name = '{{ name }}' --required
RETURNING
id,
name,
node_id,
color,
default,
description,
url;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_labels"
    values={[
        { label: 'set_labels', value: 'set_labels' }
    ]}
>
<TabItem value="set_labels">

Removes any previous labels and sets the new labels for an issue.

```sql
REPLACE github.issues.labels
SET 
labels = '{{ labels }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND issue_number = '{{ issue_number }}' --required
RETURNING
id,
name,
node_id,
color,
default,
description,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="remove_label"
    values={[
        { label: 'remove_label', value: 'remove_label' },
        { label: 'remove_all_labels', value: 'remove_all_labels' },
        { label: 'delete_label', value: 'delete_label' }
    ]}
>
<TabItem value="remove_label">

Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.

```sql
DELETE FROM github.issues.labels
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND issue_number = '{{ issue_number }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
<TabItem value="remove_all_labels">

Removes all labels from an issue.

```sql
DELETE FROM github.issues.labels
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND issue_number = '{{ issue_number }}' --required
;
```
</TabItem>
<TabItem value="delete_label">

Deletes a label using the given label name.

```sql
DELETE FROM github.issues.labels
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>
