--- 
title: milestones
hide_title: false
hide_table_of_contents: false
keywords:
  - milestones
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

Creates, updates, deletes, gets or lists a <code>milestones</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="milestones" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.issues.milestones" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_milestone"
    values={[
        { label: 'get_milestone', value: 'get_milestone' },
        { label: 'list_milestones', value: 'list_milestones' }
    ]}
>
<TabItem value="get_milestone">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDk6TWlsZXN0b25lMTAwMjYwNA==)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2013-02-12T13:22:01Z)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_issues" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-10T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: Tracking milestone for version 1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="due_on" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-10-09T23:39:01Z)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/milestones/v1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="labels_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/milestones/1/labels)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The number of the milestone.</td>
</tr>
<tr>
    <td><CopyableCode code="open_issues" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the milestone. (open, closed) (example: open, default: open)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the milestone. (example: v1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/milestones/1)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_milestones">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDk6TWlsZXN0b25lMTAwMjYwNA==)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2013-02-12T13:22:01Z)</td>
</tr>
<tr>
    <td><CopyableCode code="closed_issues" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-04-10T20:09:31Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: Tracking milestone for version 1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="due_on" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-10-09T23:39:01Z)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat/Hello-World/milestones/v1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="labels_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/milestones/1/labels)</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>integer</code></td>
    <td>The number of the milestone.</td>
</tr>
<tr>
    <td><CopyableCode code="open_issues" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the milestone. (open, closed) (example: open, default: open)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>The title of the milestone. (example: v1.0)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2014-03-03T18:58:10Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/Hello-World/milestones/1)</td>
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
    <td><a href="#get_milestone"><CopyableCode code="get_milestone" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-milestone_number"><code>milestone_number</code></a></td>
    <td></td>
    <td>Gets a milestone using the given milestone number.</td>
</tr>
<tr>
    <td><a href="#list_milestones"><CopyableCode code="list_milestones" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists milestones for a repository.</td>
</tr>
<tr>
    <td><a href="#create_milestone"><CopyableCode code="create_milestone" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates a milestone.</td>
</tr>
<tr>
    <td><a href="#update_milestone"><CopyableCode code="update_milestone" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-milestone_number"><code>milestone_number</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#delete_milestone"><CopyableCode code="delete_milestone" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-milestone_number"><code>milestone_number</code></a></td>
    <td></td>
    <td>Deletes a milestone using the given milestone number.</td>
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
<tr id="parameter-milestone_number">
    <td><CopyableCode code="milestone_number" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the milestone.</td>
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
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction of the sort. Either `asc` or `desc`.</td>
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
    <td>What to sort results by. Either `due_on` or `completeness`.</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the milestone. Either `open`, `closed`, or `all`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_milestone"
    values={[
        { label: 'get_milestone', value: 'get_milestone' },
        { label: 'list_milestones', value: 'list_milestones' }
    ]}
>
<TabItem value="get_milestone">

Gets a milestone using the given milestone number.

```sql
SELECT
id,
node_id,
closed_at,
closed_issues,
created_at,
creator,
description,
due_on,
html_url,
labels_url,
number,
open_issues,
state,
title,
updated_at,
url
FROM github.issues.milestones
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND milestone_number = '{{ milestone_number }}' -- required
;
```
</TabItem>
<TabItem value="list_milestones">

Lists milestones for a repository.

```sql
SELECT
id,
node_id,
closed_at,
closed_issues,
created_at,
creator,
description,
due_on,
html_url,
labels_url,
number,
open_issues,
state,
title,
updated_at,
url
FROM github.issues.milestones
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND state = '{{ state }}'
AND sort = '{{ sort }}'
AND direction = '{{ direction }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_milestone"
    values={[
        { label: 'create_milestone', value: 'create_milestone' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_milestone">

Creates a milestone.

```sql
INSERT INTO github.issues.milestones (
title,
state,
description,
due_on,
owner,
repo
)
SELECT 
'{{ title }}' /* required */,
'{{ state }}',
'{{ description }}',
'{{ due_on }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
node_id,
closed_at,
closed_issues,
created_at,
creator,
description,
due_on,
html_url,
labels_url,
number,
open_issues,
state,
title,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: milestones
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the milestones resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the milestones resource.
    - name: title
      value: "{{ title }}"
      description: |
        The title of the milestone.
    - name: state
      value: "{{ state }}"
      description: |
        The state of the milestone. Either \`open\` or \`closed\`.
      valid_values: ['open', 'closed']
      default: open
    - name: description
      value: "{{ description }}"
      description: |
        A description of the milestone.
    - name: due_on
      value: "{{ due_on }}"
      description: |
        The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: \`YYYY-MM-DDTHH:MM:SSZ\`.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_milestone"
    values={[
        { label: 'update_milestone', value: 'update_milestone' }
    ]}
>
<TabItem value="update_milestone">

No description available.

```sql
UPDATE github.issues.milestones
SET 
title = '{{ title }}',
state = '{{ state }}',
description = '{{ description }}',
due_on = '{{ due_on }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND milestone_number = '{{ milestone_number }}' --required
RETURNING
id,
node_id,
closed_at,
closed_issues,
created_at,
creator,
description,
due_on,
html_url,
labels_url,
number,
open_issues,
state,
title,
updated_at,
url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_milestone"
    values={[
        { label: 'delete_milestone', value: 'delete_milestone' }
    ]}
>
<TabItem value="delete_milestone">

Deletes a milestone using the given milestone number.

```sql
DELETE FROM github.issues.milestones
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND milestone_number = '{{ milestone_number }}' --required
;
```
</TabItem>
</Tabs>
