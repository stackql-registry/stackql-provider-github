--- 
title: pages
hide_title: false
hide_table_of_contents: false
keywords:
  - pages
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

Creates, updates, deletes, gets or lists a <code>pages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.pages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pages"
    values={[
        { label: 'get_pages', value: 'get_pages' }
    ]}
>
<TabItem value="get_pages">

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
    <td><CopyableCode code="build_type" /></td>
    <td><code>string</code></td>
    <td>The process in which the Page will be built. (legacy, workflow) (example: legacy)</td>
</tr>
<tr>
    <td><CopyableCode code="cname" /></td>
    <td><code>string</code></td>
    <td>The Pages site's custom domain (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_404" /></td>
    <td><code>boolean</code></td>
    <td>Whether the Page has a custom 404 page.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The web address the Page can be accessed from. (example: https://example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="https_certificate" /></td>
    <td><code>object</code></td>
    <td> (title: Pages Https Certificate)</td>
</tr>
<tr>
    <td><CopyableCode code="https_enforced" /></td>
    <td><code>boolean</code></td>
    <td>Whether https is enabled on the domain</td>
</tr>
<tr>
    <td><CopyableCode code="pending_domain_unverified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when a pending domain becomes unverified.</td>
</tr>
<tr>
    <td><CopyableCode code="protected_domain_state" /></td>
    <td><code>string</code></td>
    <td>The state if the domain is verified (pending, verified, unverified) (example: pending)</td>
</tr>
<tr>
    <td><CopyableCode code="public" /></td>
    <td><code>boolean</code></td>
    <td>Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td> (title: Pages Source Hash)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the most recent build of the Page. (built, building, errored) (example: built)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API address for accessing this Page resource. (example: https://api.github.com/repos/github/hello-world/pages)</td>
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
    <td><a href="#get_pages"><CopyableCode code="get_pages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Gets information about a GitHub Pages site.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_pages_site"><CopyableCode code="create_pages_site" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-build_type"><code>build_type</code></a></td>
    <td></td>
    <td>Configures a GitHub Pages site. For more information, see "[About GitHub Pages](https://docs.github.com/github/working-with-github-pages/about-github-pages)."<br /><br />The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_information_about_pages_site"><CopyableCode code="update_information_about_pages_site" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-build_type"><code>build_type</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-cname"><code>cname</code></a>, <a href="#parameter-public"><code>public</code></a>, <a href="#parameter-https_enforced"><code>https_enforced</code></a></td>
    <td></td>
    <td>Updates information for a GitHub Pages site. For more information, see "[About GitHub Pages](https://docs.github.com/github/working-with-github-pages/about-github-pages).<br /><br />The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_pages_site"><CopyableCode code="delete_pages_site" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Deletes a GitHub Pages site. For more information, see "[About GitHub Pages](https://docs.github.com/github/working-with-github-pages/about-github-pages).<br /><br />The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
    defaultValue="get_pages"
    values={[
        { label: 'get_pages', value: 'get_pages' }
    ]}
>
<TabItem value="get_pages">

Gets information about a GitHub Pages site.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
SELECT
build_type,
cname,
custom_404,
html_url,
https_certificate,
https_enforced,
pending_domain_unverified_at,
protected_domain_state,
public,
source,
status,
url
FROM github.repos.pages
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pages_site"
    values={[
        { label: 'create_pages_site', value: 'create_pages_site' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pages_site">

Configures a GitHub Pages site. For more information, see "[About GitHub Pages](https://docs.github.com/github/working-with-github-pages/about-github-pages)."<br /><br />The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.repos.pages (
build_type,
source,
owner,
repo
)
SELECT 
'{{ build_type }}' /* required */,
'{{ source }}' /* required */,
'{{ owner }}',
'{{ repo }}'
RETURNING
build_type,
cname,
custom_404,
html_url,
https_certificate,
https_enforced,
pending_domain_unverified_at,
protected_domain_state,
public,
source,
status,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pages
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the pages resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the pages resource.
    - name: build_type
      value: "{{ build_type }}"
      description: |
        The process in which the Page will be built. Possible values are \`"legacy"\` and \`"workflow"\`.
      valid_values: ['legacy', 'workflow']
    - name: source
      description: |
        The source branch and directory used to publish your Pages site.
      value:
        branch: "{{ branch }}"
        path: "{{ path }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="update_information_about_pages_site"
    values={[
        { label: 'update_information_about_pages_site', value: 'update_information_about_pages_site' }
    ]}
>
<TabItem value="update_information_about_pages_site">

Updates information for a GitHub Pages site. For more information, see "[About GitHub Pages](https://docs.github.com/github/working-with-github-pages/about-github-pages).<br /><br />The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
REPLACE github.repos.pages
SET 
cname = '{{ cname }}',
https_enforced = {{ https_enforced }},
build_type = '{{ build_type }}',
source = '{{ source }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND build_type = '{{ build_type }}' --required
AND source = '{{ source }}' --required
AND cname = '{{ cname }}' --required
AND https_enforced = {{ https_enforced }} --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pages_site"
    values={[
        { label: 'delete_pages_site', value: 'delete_pages_site' }
    ]}
>
<TabItem value="delete_pages_site">

Deletes a GitHub Pages site. For more information, see "[About GitHub Pages](https://docs.github.com/github/working-with-github-pages/about-github-pages).<br /><br />The authenticated user must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.repos.pages
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
;
```
</TabItem>
</Tabs>
