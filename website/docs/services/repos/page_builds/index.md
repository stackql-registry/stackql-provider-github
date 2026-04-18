--- 
title: page_builds
hide_title: false
hide_table_of_contents: false
keywords:
  - page_builds
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

Creates, updates, deletes, gets or lists a <code>page_builds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="page_builds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.page_builds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pages_build"
    values={[
        { label: 'get_pages_build', value: 'get_pages_build' },
        { label: 'list_pages_builds', value: 'list_pages_builds' }
    ]}
>
<TabItem value="get_pages_build">

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
    <td><CopyableCode code="commit" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pusher" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
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
<TabItem value="list_pages_builds">

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
    <td><CopyableCode code="commit" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="pusher" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
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
    <td><a href="#get_pages_build"><CopyableCode code="get_pages_build" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-build_id"><code>build_id</code></a></td>
    <td></td>
    <td>Gets information about a GitHub Pages build.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#list_pages_builds"><CopyableCode code="list_pages_builds" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists builts of a GitHub Pages site.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_pages_deployment"><CopyableCode code="create_pages_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-pages_build_version"><code>pages_build_version</code></a>, <a href="#parameter-oidc_token"><code>oidc_token</code></a></td>
    <td></td>
    <td>Create a GitHub Pages deployment for a repository.<br /><br />The authenticated user must have write permission to the repository.</td>
</tr>
<tr>
    <td><a href="#request_pages_build"><CopyableCode code="request_pages_build" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.<br /><br />Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.</td>
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
<tr id="parameter-build_id">
    <td><CopyableCode code="build_id" /></td>
    <td><code>integer</code></td>
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
    defaultValue="get_pages_build"
    values={[
        { label: 'get_pages_build', value: 'get_pages_build' },
        { label: 'list_pages_builds', value: 'list_pages_builds' }
    ]}
>
<TabItem value="get_pages_build">

Gets information about a GitHub Pages build.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
commit,
created_at,
duration,
error,
pusher,
status,
updated_at,
url
FROM github.repos.page_builds
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND build_id = '{{ build_id }}' -- required
;
```
</TabItem>
<TabItem value="list_pages_builds">

Lists builts of a GitHub Pages site.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
commit,
created_at,
duration,
error,
pusher,
status,
updated_at,
url
FROM github.repos.page_builds
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
    defaultValue="create_pages_deployment"
    values={[
        { label: 'create_pages_deployment', value: 'create_pages_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pages_deployment">

Create a GitHub Pages deployment for a repository.<br /><br />The authenticated user must have write permission to the repository.

```sql
INSERT INTO github.repos.page_builds (
artifact_id,
artifact_url,
environment,
pages_build_version,
oidc_token,
owner,
repo
)
SELECT 
{{ artifact_id }},
'{{ artifact_url }}',
'{{ environment }}',
'{{ pages_build_version }}' /* required */,
'{{ oidc_token }}' /* required */,
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
page_url,
preview_url,
status_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: page_builds
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the page_builds resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the page_builds resource.
    - name: artifact_id
      value: {{ artifact_id }}
      description: |
        The ID of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository. Either \`artifact_id\` or \`artifact_url\` are required.
    - name: artifact_url
      value: "{{ artifact_url }}"
      description: |
        The URL of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository. Either \`artifact_id\` or \`artifact_url\` are required.
    - name: environment
      value: "{{ environment }}"
      description: |
        The target environment for this GitHub Pages deployment.
      default: github-pages
    - name: pages_build_version
      value: "{{ pages_build_version }}"
      description: |
        A unique string that represents the version of the build for this deployment.
      default: GITHUB_SHA
    - name: oidc_token
      value: "{{ oidc_token }}"
      description: |
        The OIDC token issued by GitHub Actions certifying the origin of the deployment.
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="request_pages_build"
    values={[
        { label: 'request_pages_build', value: 'request_pages_build' }
    ]}
>
<TabItem value="request_pages_build">

You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.<br /><br />Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.

```sql
EXEC github.repos.page_builds.request_pages_build 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required
;
```
</TabItem>
</Tabs>
