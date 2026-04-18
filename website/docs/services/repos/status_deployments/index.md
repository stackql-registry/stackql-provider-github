--- 
title: status_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - status_deployments
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

Creates, updates, deletes, gets or lists a <code>status_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="status_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.status_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_status"
    values={[
        { label: 'get_deployment_status', value: 'get_deployment_status' },
        { label: 'list_deployment_statuses', value: 'list_deployment_statuses' }
    ]}
>
<TabItem value="get_deployment_status">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDE2OkRlcGxveW1lbnRTdGF0dXMx)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-07-20T01:19:13Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example/deployments/42)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the status. (default: , example: Deployment finished successfully.)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment of the deployment that the status is for. (default: , example: production)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL for accessing your environment. (default: , example: https://staging.example.com/)</td>
</tr>
<tr>
    <td><CopyableCode code="log_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL to associate with this status. (default: , example: https://example.com/deployment/42/output)</td>
</tr>
<tr>
    <td><CopyableCode code="performed_via_github_app" /></td>
    <td><code>object</code></td>
    <td>GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub. (title: GitHub app)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the status. (error, failure, inactive, pending, success, queued, in_progress) (example: success)</td>
</tr>
<tr>
    <td><CopyableCode code="target_url" /></td>
    <td><code>string (uri)</code></td>
    <td>Closing down notice: the URL to associate with this status. (default: , example: https://example.com/deployment/42/output)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-07-20T01:19:13Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example/deployments/42/statuses/1)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_statuses">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDE2OkRlcGxveW1lbnRTdGF0dXMx)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-07-20T01:19:13Z)</td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>object</code></td>
    <td>A GitHub user. (title: Simple User)</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example/deployments/42)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A short description of the status. (default: , example: Deployment finished successfully.)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The environment of the deployment that the status is for. (default: , example: production)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL for accessing your environment. (default: , example: https://staging.example.com/)</td>
</tr>
<tr>
    <td><CopyableCode code="log_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL to associate with this status. (default: , example: https://example.com/deployment/42/output)</td>
</tr>
<tr>
    <td><CopyableCode code="performed_via_github_app" /></td>
    <td><code>object</code></td>
    <td>GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub. (title: GitHub app)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the status. (error, failure, inactive, pending, success, queued, in_progress) (example: success)</td>
</tr>
<tr>
    <td><CopyableCode code="target_url" /></td>
    <td><code>string (uri)</code></td>
    <td>Closing down notice: the URL to associate with this status. (default: , example: https://example.com/deployment/42/output)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-07-20T01:19:13Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example/deployments/42/statuses/1)</td>
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
    <td><a href="#get_deployment_status"><CopyableCode code="get_deployment_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-status_id"><code>status_id</code></a></td>
    <td></td>
    <td>Users with pull access can view a deployment status for a deployment:</td>
</tr>
<tr>
    <td><a href="#list_deployment_statuses"><CopyableCode code="list_deployment_statuses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Users with pull access can view deployment statuses for a deployment:</td>
</tr>
<tr>
    <td><a href="#create_deployment_status"><CopyableCode code="create_deployment_status" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td></td>
    <td>Users with `push` access can create deployment statuses for a given deployment.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo_deployment` scope to use this endpoint.</td>
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
<tr id="parameter-deployment_id">
    <td><CopyableCode code="deployment_id" /></td>
    <td><code>integer</code></td>
    <td>deployment_id parameter</td>
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
<tr id="parameter-status_id">
    <td><CopyableCode code="status_id" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    defaultValue="get_deployment_status"
    values={[
        { label: 'get_deployment_status', value: 'get_deployment_status' },
        { label: 'list_deployment_statuses', value: 'list_deployment_statuses' }
    ]}
>
<TabItem value="get_deployment_status">

Users with pull access can view a deployment status for a deployment:

```sql
SELECT
id,
node_id,
created_at,
creator,
deployment_url,
description,
environment,
environment_url,
log_url,
performed_via_github_app,
repository_url,
state,
target_url,
updated_at,
url
FROM github.repos.status_deployments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
AND status_id = '{{ status_id }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_statuses">

Users with pull access can view deployment statuses for a deployment:

```sql
SELECT
id,
node_id,
created_at,
creator,
deployment_url,
description,
environment,
environment_url,
log_url,
performed_via_github_app,
repository_url,
state,
target_url,
updated_at,
url
FROM github.repos.status_deployments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment_status"
    values={[
        { label: 'create_deployment_status', value: 'create_deployment_status' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment_status">

Users with `push` access can create deployment statuses for a given deployment.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo_deployment` scope to use this endpoint.

```sql
INSERT INTO github.repos.status_deployments (
state,
target_url,
log_url,
description,
environment,
environment_url,
auto_inactive,
owner,
repo,
deployment_id
)
SELECT 
'{{ state }}' /* required */,
'{{ target_url }}',
'{{ log_url }}',
'{{ description }}',
'{{ environment }}',
'{{ environment_url }}',
{{ auto_inactive }},
'{{ owner }}',
'{{ repo }}',
'{{ deployment_id }}'
RETURNING
id,
node_id,
created_at,
creator,
deployment_url,
description,
environment,
environment_url,
log_url,
performed_via_github_app,
repository_url,
state,
target_url,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: status_deployments
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the status_deployments resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the status_deployments resource.
    - name: deployment_id
      value: {{ deployment_id }}
      description: Required parameter for the status_deployments resource.
    - name: state
      value: "{{ state }}"
      description: |
        The state of the status. When you set a transient deployment to \`inactive\`, the deployment will be shown as \`destroyed\` in GitHub.
      valid_values: ['error', 'failure', 'inactive', 'in_progress', 'queued', 'pending', 'success']
    - name: target_url
      value: "{{ target_url }}"
      description: |
        The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment.
        > [!NOTE]
        > It's recommended to use the \`log_url\` parameter, which replaces \`target_url\`.
      default: 
    - name: log_url
      value: "{{ log_url }}"
      description: |
        The full URL of the deployment's output. This parameter replaces \`target_url\`. We will continue to accept \`target_url\` to support legacy uses, but we recommend replacing \`target_url\` with \`log_url\`. Setting \`log_url\` will automatically set \`target_url\` to the same value. Default: \`""\`
      default: 
    - name: description
      value: "{{ description }}"
      description: |
        A short description of the status. The maximum description length is 140 characters.
      default: 
    - name: environment
      value: "{{ environment }}"
      description: |
        Name for the target deployment environment, which can be changed when setting a deploy status. For example, \`production\`, \`staging\`, or \`qa\`. If not defined, the environment of the previous status on the deployment will be used, if it exists. Otherwise, the environment of the deployment will be used.
    - name: environment_url
      value: "{{ environment_url }}"
      description: |
        Sets the URL for accessing your environment. Default: \`""\`
      default: 
    - name: auto_inactive
      value: {{ auto_inactive }}
      description: |
        Adds a new \`inactive\` status to all prior non-transient, non-production environment deployments with the same repository and \`environment\` name as the created status's deployment. An \`inactive\` status is only added to deployments that had a \`success\` state. Default: \`true\`
`}</CodeBlock>

</TabItem>
</Tabs>
