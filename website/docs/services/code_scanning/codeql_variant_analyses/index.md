--- 
title: codeql_variant_analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - codeql_variant_analyses
  - code_scanning
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

Creates, updates, deletes, gets or lists a <code>codeql_variant_analyses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="codeql_variant_analyses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_scanning.codeql_variant_analyses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_variant_analysis"
    values={[
        { label: 'get_variant_analysis', value: 'get_variant_analysis' }
    ]}
>
<TabItem value="get_variant_analysis">

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
    <td>The ID of the variant analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="actions_workflow_run_id" /></td>
    <td><code>integer</code></td>
    <td>The GitHub Actions workflow run used to execute this variant analysis. This is only available if the workflow run has started.</td>
</tr>
<tr>
    <td><CopyableCode code="actor" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="completed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variant analysis was completed, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ. Will be null if the variant analysis has not yet completed or this information is not available.</td>
</tr>
<tr>
    <td><CopyableCode code="controller_repo" /></td>
    <td><code>object</code></td>
    <td>A GitHub repository. (title: Simple Repository)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variant analysis was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for a failure of the variant analysis. This is only available if the variant analysis has failed. (no_repos_queried, actions_workflow_run_failed, internal_error)</td>
</tr>
<tr>
    <td><CopyableCode code="query_language" /></td>
    <td><code>string</code></td>
    <td>The language targeted by the CodeQL query (actions, cpp, csharp, go, java, javascript, python, ruby, rust, swift)</td>
</tr>
<tr>
    <td><CopyableCode code="query_pack_url" /></td>
    <td><code>string</code></td>
    <td>The download url for the query pack.</td>
</tr>
<tr>
    <td><CopyableCode code="scanned_repositories" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="skipped_repositories" /></td>
    <td><code>object</code></td>
    <td>Information about repositories that were skipped from processing. This information is only available to the user that initiated the variant analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (in_progress, succeeded, failed, cancelled)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the variant analysis was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.</td>
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
    <td><a href="#get_variant_analysis"><CopyableCode code="get_variant_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-codeql_variant_analysis_id"><code>codeql_variant_analysis_id</code></a></td>
    <td></td>
    <td>Gets the summary of a CodeQL variant analysis.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.</td>
</tr>
<tr>
    <td><a href="#create_variant_analysis"><CopyableCode code="create_variant_analysis" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-language"><code>language</code></a>, <a href="#parameter-query_pack"><code>query_pack</code></a>, <a href="#parameter-repositories"><code>repositories</code></a>, <a href="#parameter-repository_lists"><code>repository_lists</code></a>, <a href="#parameter-repository_owners"><code>repository_owners</code></a></td>
    <td></td>
    <td>Creates a new CodeQL variant analysis, which will run a CodeQL query against one or more repositories.<br /><br />Get started by learning more about [running CodeQL queries at scale with Multi-Repository Variant Analysis](https://docs.github.com/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis).<br /><br />Use the `owner` and `repo` parameters in the URL to specify the controller repository that<br />will be used for running GitHub Actions workflows and storing the results of the CodeQL variant analysis.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-codeql_variant_analysis_id">
    <td><CopyableCode code="codeql_variant_analysis_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the variant analysis.</td>
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
    defaultValue="get_variant_analysis"
    values={[
        { label: 'get_variant_analysis', value: 'get_variant_analysis' }
    ]}
>
<TabItem value="get_variant_analysis">

Gets the summary of a CodeQL variant analysis.<br /><br />OAuth app tokens and personal access tokens (classic) need the `security_events` scope to use this endpoint with private or public repositories, or the `public_repo` scope to use this endpoint with only public repositories.

```sql
SELECT
id,
actions_workflow_run_id,
actor,
completed_at,
controller_repo,
created_at,
failure_reason,
query_language,
query_pack_url,
scanned_repositories,
skipped_repositories,
status,
updated_at
FROM github.code_scanning.codeql_variant_analyses
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND codeql_variant_analysis_id = '{{ codeql_variant_analysis_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_variant_analysis"
    values={[
        { label: 'create_variant_analysis', value: 'create_variant_analysis' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_variant_analysis">

Creates a new CodeQL variant analysis, which will run a CodeQL query against one or more repositories.<br /><br />Get started by learning more about [running CodeQL queries at scale with Multi-Repository Variant Analysis](https://docs.github.com/code-security/codeql-for-vs-code/getting-started-with-codeql-for-vs-code/running-codeql-queries-at-scale-with-multi-repository-variant-analysis).<br /><br />Use the `owner` and `repo` parameters in the URL to specify the controller repository that<br />will be used for running GitHub Actions workflows and storing the results of the CodeQL variant analysis.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.code_scanning.codeql_variant_analyses (
language,
query_pack,
repositories,
repository_lists,
repository_owners,
owner,
repo
)
SELECT 
'{{ language }}' /* required */,
'{{ query_pack }}' /* required */,
'{{ repositories }}' /* required */,
'{{ repository_lists }}' /* required */,
'{{ repository_owners }}' /* required */,
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
actions_workflow_run_id,
actor,
completed_at,
controller_repo,
created_at,
failure_reason,
query_language,
query_pack_url,
scanned_repositories,
skipped_repositories,
status,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: codeql_variant_analyses
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the codeql_variant_analyses resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the codeql_variant_analyses resource.
    - name: language
      value: "{{ language }}"
      description: |
        The language targeted by the CodeQL query
      valid_values: ['actions', 'cpp', 'csharp', 'go', 'java', 'javascript', 'python', 'ruby', 'rust', 'swift']
    - name: query_pack
      value: "{{ query_pack }}"
      description: |
        A Base64-encoded tarball containing a CodeQL query and all its dependencies
    - name: repositories
      value:
        - "{{ repositories }}"
      description: |
        List of repository names (in the form \`owner/repo-name\`) to run the query against. Precisely one property from \`repositories\`, \`repository_lists\` and \`repository_owners\` is required.
    - name: repository_lists
      value:
        - "{{ repository_lists }}"
      description: |
        List of repository lists to run the query against. Precisely one property from \`repositories\`, \`repository_lists\` and \`repository_owners\` is required.
    - name: repository_owners
      value:
        - "{{ repository_owners }}"
      description: |
        List of organization or user names whose repositories the query should be run against. Precisely one property from \`repositories\`, \`repository_lists\` and \`repository_owners\` is required.
`}</CodeBlock>

</TabItem>
</Tabs>
