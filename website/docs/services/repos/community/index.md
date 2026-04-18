--- 
title: community
hide_title: false
hide_table_of_contents: false
keywords:
  - community
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

Creates, updates, deletes, gets or lists a <code>community</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="community" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.community" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_community_profile_metrics"
    values={[
        { label: 'get_community_profile_metrics', value: 'get_community_profile_metrics' }
    ]}
>
<TabItem value="get_community_profile_metrics">

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
    <td><CopyableCode code="content_reports_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: My first repository on GitHub!)</td>
</tr>
<tr>
    <td><CopyableCode code="documentation" /></td>
    <td><code>string</code></td>
    <td> (example: example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="files" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="health_percentage" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2017-02-28T19:09:29Z)</td>
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
    <td><a href="#get_community_profile_metrics"><CopyableCode code="get_community_profile_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Returns all community profile metrics for a repository. The repository cannot be a fork.<br /><br />The returned metrics include an overall health score, the repository description, the presence of documentation, the<br />detected code of conduct, the detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE,<br />README, and CONTRIBUTING files.<br /><br />The `health_percentage` score is defined as a percentage of how many of<br />the recommended community health files are present. For more information, see<br />"[About community profiles for public repositories](https://docs.github.com/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)."<br /><br />`content_reports_enabled` is only returned for organization-owned repositories.</td>
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
    defaultValue="get_community_profile_metrics"
    values={[
        { label: 'get_community_profile_metrics', value: 'get_community_profile_metrics' }
    ]}
>
<TabItem value="get_community_profile_metrics">

Returns all community profile metrics for a repository. The repository cannot be a fork.<br /><br />The returned metrics include an overall health score, the repository description, the presence of documentation, the<br />detected code of conduct, the detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE,<br />README, and CONTRIBUTING files.<br /><br />The `health_percentage` score is defined as a percentage of how many of<br />the recommended community health files are present. For more information, see<br />"[About community profiles for public repositories](https://docs.github.com/communities/setting-up-your-project-for-healthy-contributions/about-community-profiles-for-public-repositories)."<br /><br />`content_reports_enabled` is only returned for organization-owned repositories.

```sql
SELECT
content_reports_enabled,
description,
documentation,
files,
health_percentage,
updated_at
FROM github.repos.community
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>
