--- 
title: releases
hide_title: false
hide_table_of_contents: false
keywords:
  - releases
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

Creates, updates, deletes, gets or lists a <code>releases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="releases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.releases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_release_by_tag"
    values={[
        { label: 'get_release_by_tag', value: 'get_release_by_tag' },
        { label: 'get_release', value: 'get_release' },
        { label: 'list_releases', value: 'list_releases' }
    ]}
>
<TabItem value="get_release_by_tag">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>The name of the tag. (example: v1.0.0)</td>
</tr>
<tr>
    <td><CopyableCode code="assets" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="assets_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="body_html" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="body_text" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="discussion_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the release discussion.</td>
</tr>
<tr>
    <td><CopyableCode code="draft" /></td>
    <td><code>boolean</code></td>
    <td>true to create a draft (unpublished) release, false to create a published one.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="immutable" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the release is immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="mentions_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prerelease" /></td>
    <td><code>boolean</code></td>
    <td>Whether to identify the release as a prerelease or a full release.</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>object</code></td>
    <td> (title: Reaction Rollup)</td>
</tr>
<tr>
    <td><CopyableCode code="tarball_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="target_commitish" /></td>
    <td><code>string</code></td>
    <td>Specifies the commitish value that determines where the Git tag is created from. (example: master)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="upload_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="zipball_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_release">

**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a hypermedia resource. For more information, see "[Getting started with the REST API](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>The name of the tag. (example: v1.0.0)</td>
</tr>
<tr>
    <td><CopyableCode code="assets" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="assets_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="body_html" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="body_text" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="discussion_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the release discussion.</td>
</tr>
<tr>
    <td><CopyableCode code="draft" /></td>
    <td><code>boolean</code></td>
    <td>true to create a draft (unpublished) release, false to create a published one.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="immutable" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the release is immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="mentions_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prerelease" /></td>
    <td><code>boolean</code></td>
    <td>Whether to identify the release as a prerelease or a full release.</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>object</code></td>
    <td> (title: Reaction Rollup)</td>
</tr>
<tr>
    <td><CopyableCode code="tarball_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="target_commitish" /></td>
    <td><code>string</code></td>
    <td>Specifies the commitish value that determines where the Git tag is created from. (example: master)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="upload_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="zipball_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_releases">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tag_name" /></td>
    <td><code>string</code></td>
    <td>The name of the tag. (example: v1.0.0)</td>
</tr>
<tr>
    <td><CopyableCode code="assets" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="assets_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="body_html" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="body_text" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="discussion_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the release discussion.</td>
</tr>
<tr>
    <td><CopyableCode code="draft" /></td>
    <td><code>boolean</code></td>
    <td>true to create a draft (unpublished) release, false to create a published one.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="immutable" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the release is immutable.</td>
</tr>
<tr>
    <td><CopyableCode code="mentions_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="prerelease" /></td>
    <td><code>boolean</code></td>
    <td>Whether to identify the release as a prerelease or a full release.</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="reactions" /></td>
    <td><code>object</code></td>
    <td> (title: Reaction Rollup)</td>
</tr>
<tr>
    <td><CopyableCode code="tarball_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="target_commitish" /></td>
    <td><code>string</code></td>
    <td>Specifies the commitish value that determines where the Git tag is created from. (example: master)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="upload_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="zipball_url" /></td>
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
    <td><a href="#get_release_by_tag"><CopyableCode code="get_release_by_tag" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-tag"><code>tag</code></a></td>
    <td></td>
    <td>Get a published release with the specified tag.</td>
</tr>
<tr>
    <td><a href="#get_release"><CopyableCode code="get_release" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-release_id"><code>release_id</code></a></td>
    <td></td>
    <td>Gets a public release with the specified release ID.<br /><br />&gt; [!NOTE]<br />&gt; This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a hypermedia resource. For more information, see "[Getting started with the REST API](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."</td>
</tr>
<tr>
    <td><a href="#list_releases"><CopyableCode code="list_releases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/repos/repos#list-repository-tags).<br /><br />Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.</td>
</tr>
<tr>
    <td><a href="#create_release"><CopyableCode code="create_release" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td></td>
    <td>Users with push access to the repository can create a release.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."</td>
</tr>
<tr>
    <td><a href="#update_release"><CopyableCode code="update_release" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-release_id"><code>release_id</code></a></td>
    <td></td>
    <td>Users with push access to the repository can edit a release.</td>
</tr>
<tr>
    <td><a href="#delete_release"><CopyableCode code="delete_release" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-release_id"><code>release_id</code></a></td>
    <td></td>
    <td>Users with push access to the repository can delete a release.</td>
</tr>
<tr>
    <td><a href="#generate_release_notes"><CopyableCode code="generate_release_notes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-tag_name"><code>tag_name</code></a></td>
    <td></td>
    <td>Generate a name and body describing a [release](https://docs.github.com/rest/releases/releases#get-a-release). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.</td>
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
<tr id="parameter-release_id">
    <td><CopyableCode code="release_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the release.</td>
</tr>
<tr id="parameter-repo">
    <td><CopyableCode code="repo" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension. The name is not case sensitive.</td>
</tr>
<tr id="parameter-tag">
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>tag parameter</td>
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
    defaultValue="get_release_by_tag"
    values={[
        { label: 'get_release_by_tag', value: 'get_release_by_tag' },
        { label: 'get_release', value: 'get_release' },
        { label: 'list_releases', value: 'list_releases' }
    ]}
>
<TabItem value="get_release_by_tag">

Get a published release with the specified tag.

```sql
SELECT
id,
name,
node_id,
tag_name,
assets,
assets_url,
author,
body,
body_html,
body_text,
created_at,
discussion_url,
draft,
html_url,
immutable,
mentions_count,
prerelease,
published_at,
reactions,
tarball_url,
target_commitish,
updated_at,
upload_url,
url,
zipball_url
FROM github.repos.releases
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND tag = '{{ tag }}' -- required
;
```
</TabItem>
<TabItem value="get_release">

Gets a public release with the specified release ID.<br /><br />&gt; [!NOTE]<br />&gt; This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a hypermedia resource. For more information, see "[Getting started with the REST API](https://docs.github.com/rest/using-the-rest-api/getting-started-with-the-rest-api#hypermedia)."

```sql
SELECT
id,
name,
node_id,
tag_name,
assets,
assets_url,
author,
body,
body_html,
body_text,
created_at,
discussion_url,
draft,
html_url,
immutable,
mentions_count,
prerelease,
published_at,
reactions,
tarball_url,
target_commitish,
updated_at,
upload_url,
url,
zipball_url
FROM github.repos.releases
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND release_id = '{{ release_id }}' -- required
;
```
</TabItem>
<TabItem value="list_releases">

This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/repos/repos#list-repository-tags).<br /><br />Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.

```sql
SELECT
id,
name,
node_id,
tag_name,
assets,
assets_url,
author,
body,
body_html,
body_text,
created_at,
discussion_url,
draft,
html_url,
immutable,
mentions_count,
prerelease,
published_at,
reactions,
tarball_url,
target_commitish,
updated_at,
upload_url,
url,
zipball_url
FROM github.repos.releases
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
    defaultValue="create_release"
    values={[
        { label: 'create_release', value: 'create_release' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_release">

Users with push access to the repository can create a release.<br /><br />This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. For more information, see "[Rate limits for the API](https://docs.github.com/rest/using-the-rest-api/rate-limits-for-the-rest-api#about-secondary-rate-limits)" and "[Best practices for using the REST API](https://docs.github.com/rest/guides/best-practices-for-using-the-rest-api)."

```sql
INSERT INTO github.repos.releases (
tag_name,
target_commitish,
name,
body,
draft,
prerelease,
discussion_category_name,
generate_release_notes,
make_latest,
owner,
repo
)
SELECT 
'{{ tag_name }}' /* required */,
'{{ target_commitish }}',
'{{ name }}',
'{{ body }}',
{{ draft }},
{{ prerelease }},
'{{ discussion_category_name }}',
{{ generate_release_notes }},
'{{ make_latest }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
name,
node_id,
tag_name,
assets,
assets_url,
author,
body,
body_html,
body_text,
created_at,
discussion_url,
draft,
html_url,
immutable,
mentions_count,
prerelease,
published_at,
reactions,
tarball_url,
target_commitish,
updated_at,
upload_url,
url,
zipball_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: releases
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the releases resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the releases resource.
    - name: tag_name
      value: "{{ tag_name }}"
      description: |
        The name of the tag.
    - name: target_commitish
      value: "{{ target_commitish }}"
      description: |
        Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the release.
    - name: body
      value: "{{ body }}"
      description: |
        Text describing the contents of the tag.
    - name: draft
      value: {{ draft }}
      description: |
        \`true\` to create a draft (unpublished) release, \`false\` to create a published one.
      default: false
    - name: prerelease
      value: {{ prerelease }}
      description: |
        \`true\` to identify the release as a prerelease. \`false\` to identify the release as a full release.
      default: false
    - name: discussion_category_name
      value: "{{ discussion_category_name }}"
      description: |
        If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."
    - name: generate_release_notes
      value: {{ generate_release_notes }}
      description: |
        Whether to automatically generate the name and body for this release. If \`name\` is specified, the specified name will be used; otherwise, a name will be automatically generated. If \`body\` is specified, the body will be pre-pended to the automatically generated notes.
      default: false
    - name: make_latest
      value: "{{ make_latest }}"
      description: |
        Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to \`true\` for newly published releases. \`legacy\` specifies that the latest release should be determined based on the release creation date and higher semantic version.
      valid_values: ['true', 'false', 'legacy']
      default: true
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_release"
    values={[
        { label: 'update_release', value: 'update_release' }
    ]}
>
<TabItem value="update_release">

Users with push access to the repository can edit a release.

```sql
UPDATE github.repos.releases
SET 
tag_name = '{{ tag_name }}',
target_commitish = '{{ target_commitish }}',
name = '{{ name }}',
body = '{{ body }}',
draft = {{ draft }},
prerelease = {{ prerelease }},
make_latest = '{{ make_latest }}',
discussion_category_name = '{{ discussion_category_name }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND release_id = '{{ release_id }}' --required
RETURNING
id,
name,
node_id,
tag_name,
assets,
assets_url,
author,
body,
body_html,
body_text,
created_at,
discussion_url,
draft,
html_url,
immutable,
mentions_count,
prerelease,
published_at,
reactions,
tarball_url,
target_commitish,
updated_at,
upload_url,
url,
zipball_url;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_release"
    values={[
        { label: 'delete_release', value: 'delete_release' }
    ]}
>
<TabItem value="delete_release">

Users with push access to the repository can delete a release.

```sql
DELETE FROM github.repos.releases
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND release_id = '{{ release_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_release_notes"
    values={[
        { label: 'generate_release_notes', value: 'generate_release_notes' }
    ]}
>
<TabItem value="generate_release_notes">

Generate a name and body describing a [release](https://docs.github.com/rest/releases/releases#get-a-release). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.

```sql
EXEC github.repos.releases.generate_release_notes 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required 
@@json=
'{
"tag_name": "{{ tag_name }}", 
"target_commitish": "{{ target_commitish }}", 
"previous_tag_name": "{{ previous_tag_name }}", 
"configuration_file_path": "{{ configuration_file_path }}"
}'
;
```
</TabItem>
</Tabs>
