--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'get_all_environments', value: 'get_all_environments' }
    ]}
>
<TabItem value="get_environment">

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
    <td>The id of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (example: staging)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDExOkVudmlyb25tZW50NTY3ODA0Mjg=)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the environment was created, in ISO 8601 format. (example: 2020-11-23T22:00:40Z)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_branch_policy" /></td>
    <td><code>object</code></td>
    <td>The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_rules" /></td>
    <td><code>array</code></td>
    <td>Built-in deployment protection rules for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the environment was last updated, in ISO 8601 format. (example: 2020-11-23T22:00:40Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/repos/github/hello-world/environments/staging)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_environments">

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
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>The number of environments in this repository</td>
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
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td></td>
    <td>&gt; [!NOTE]<br />&gt; To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](https://docs.github.com/rest/deployments/branch-policies#get-a-deployment-branch-policy)."<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#get_all_environments"><CopyableCode code="get_all_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists the environments for a repository.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#create_or_update_environment"><CopyableCode code="create_or_update_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td></td>
    <td>Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](https://docs.github.com/actions/reference/environments#environment-protection-rules)."<br /><br />&gt; [!NOTE]<br />&gt; To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](https://docs.github.com/rest/deployments/branch-policies)."<br /><br />&gt; [!NOTE]<br />&gt; To create or update secrets for an environment, see "[GitHub Actions secrets](https://docs.github.com/rest/actions/secrets)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_an_environment"><CopyableCode code="delete_an_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a></td>
    <td></td>
    <td>OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.</td>
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
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'get_all_environments', value: 'get_all_environments' }
    ]}
>
<TabItem value="get_environment">

&gt; [!NOTE]<br />&gt; To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](https://docs.github.com/rest/deployments/branch-policies#get-a-deployment-branch-policy)."<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
id,
name,
node_id,
created_at,
deployment_branch_policy,
html_url,
protection_rules,
updated_at,
url
FROM github.repos.environments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
;
```
</TabItem>
<TabItem value="get_all_environments">

Lists the environments for a repository.<br /><br />Anyone with read access to the repository can use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
environments,
total_count
FROM github.repos.environments
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
    defaultValue="create_or_update_environment"
    values={[
        { label: 'create_or_update_environment', value: 'create_or_update_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_or_update_environment">

Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](https://docs.github.com/actions/reference/environments#environment-protection-rules)."<br /><br />&gt; [!NOTE]<br />&gt; To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](https://docs.github.com/rest/deployments/branch-policies)."<br /><br />&gt; [!NOTE]<br />&gt; To create or update secrets for an environment, see "[GitHub Actions secrets](https://docs.github.com/rest/actions/secrets)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.repos.environments (
wait_timer,
prevent_self_review,
reviewers,
deployment_branch_policy,
owner,
repo,
environment_name
)
SELECT 
{{ wait_timer }},
{{ prevent_self_review }},
'{{ reviewers }}',
'{{ deployment_branch_policy }}',
'{{ owner }}',
'{{ repo }}',
'{{ environment_name }}'
RETURNING
id,
name,
node_id,
created_at,
deployment_branch_policy,
html_url,
protection_rules,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the environments resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the environments resource.
    - name: environment_name
      value: "{{ environment_name }}"
      description: Required parameter for the environments resource.
    - name: wait_timer
      value: {{ wait_timer }}
      description: |
        The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).
    - name: prevent_self_review
      value: {{ prevent_self_review }}
      description: |
        Whether or not a user who created the job is prevented from approving their own job.
    - name: reviewers
      description: |
        The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
      value:
        - type: "{{ type }}"
          id: {{ id }}
    - name: deployment_branch_policy
      description: |
        The type of deployment branch policy for this environment. To allow all branches to deploy, set to \`null\`.
      value:
        protected_branches: {{ protected_branches }}
        custom_branch_policies: {{ custom_branch_policies }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_an_environment"
    values={[
        { label: 'delete_an_environment', value: 'delete_an_environment' }
    ]}
>
<TabItem value="delete_an_environment">

OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.repos.environments
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND environment_name = '{{ environment_name }}' --required
;
```
</TabItem>
</Tabs>
