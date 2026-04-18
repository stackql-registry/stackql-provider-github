--- 
title: deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - deployments
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

Creates, updates, deletes, gets or lists a <code>deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="get_deployment">

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
    <td>Unique identifier of the deployment</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOkRlcGxveW1lbnQx)</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: Deploy request from hubot)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Name for the target deployment environment. (example: production)</td>
</tr>
<tr>
    <td><CopyableCode code="original_environment" /></td>
    <td><code>string</code></td>
    <td> (example: staging)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="performed_via_github_app" /></td>
    <td><code>object</code></td>
    <td>GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub. (title: GitHub app)</td>
</tr>
<tr>
    <td><CopyableCode code="production_environment" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the given environment is one that end-users directly interact with. Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The ref to deploy. This can be a branch, tag, or sha. (example: topic-branch)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example)</td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td> (example: a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d)</td>
</tr>
<tr>
    <td><CopyableCode code="statuses_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example/deployments/1/statuses)</td>
</tr>
<tr>
    <td><CopyableCode code="task" /></td>
    <td><code>string</code></td>
    <td>Parameter to specify a task to execute (example: deploy)</td>
</tr>
<tr>
    <td><CopyableCode code="transient_environment" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the given environment is will no longer exist at some point in the future. Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-07-20T01:19:13Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example/deployments/1)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployments">

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
    <td>Unique identifier of the deployment</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEwOkRlcGxveW1lbnQx)</td>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: Deploy request from hubot)</td>
</tr>
<tr>
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Name for the target deployment environment. (example: production)</td>
</tr>
<tr>
    <td><CopyableCode code="original_environment" /></td>
    <td><code>string</code></td>
    <td> (example: staging)</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="performed_via_github_app" /></td>
    <td><code>object</code></td>
    <td>GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub. (title: GitHub app)</td>
</tr>
<tr>
    <td><CopyableCode code="production_environment" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the given environment is one that end-users directly interact with. Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The ref to deploy. This can be a branch, tag, or sha. (example: topic-branch)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example)</td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td> (example: a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d)</td>
</tr>
<tr>
    <td><CopyableCode code="statuses_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example/deployments/1/statuses)</td>
</tr>
<tr>
    <td><CopyableCode code="task" /></td>
    <td><code>string</code></td>
    <td>Parameter to specify a task to execute (example: deploy)</td>
</tr>
<tr>
    <td><CopyableCode code="transient_environment" /></td>
    <td><code>boolean</code></td>
    <td>Specifies if the given environment is will no longer exist at some point in the future. Default: false.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2012-07-20T01:19:13Z)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/repos/octocat/example/deployments/1)</td>
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
    <td><a href="#get_deployment"><CopyableCode code="get_deployment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#list_deployments"><CopyableCode code="list_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-sha"><code>sha</code></a>, <a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-task"><code>task</code></a>, <a href="#parameter-environment"><code>environment</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Simple filtering of deployments is available via query parameters:</td>
</tr>
<tr>
    <td><a href="#create_deployment"><CopyableCode code="create_deployment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-ref"><code>ref</code></a></td>
    <td></td>
    <td>Deployments offer a few configurable parameters with certain defaults.<br /><br />The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them<br />before we merge a pull request.<br /><br />The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have<br />multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter<br />makes it easier to track which environments have requested deployments. The default environment is `production`.<br /><br />The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If<br />the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,<br />the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will<br />return a failure response.<br /><br />By default, [commit statuses](https://docs.github.com/rest/commits/statuses) for every submitted context must be in a `success`<br />state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to<br />specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do<br />not require any contexts or create any commit statuses, the deployment will always succeed.<br /><br />The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text<br />field that will be passed on when a deployment event is dispatched.<br /><br />The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might<br />be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an<br />application with debugging enabled.<br /><br />Merged branch response:<br /><br />You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating<br />a deployment. This auto-merge happens when:<br />*   Auto-merge option is enabled in the repository<br />*   Topic branch does not include the latest changes on the base branch, which is `master` in the response example<br />*   There are no merge conflicts<br /><br />If there are no new commits in the base branch, a new request to create a deployment should give a successful<br />response.<br /><br />Merge conflict response:<br /><br />This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't<br />be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.<br /><br />Failed commit status checks:<br /><br />This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`<br />status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repo_deployment` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_deployment"><CopyableCode code="delete_deployment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-deployment_id"><code>deployment_id</code></a></td>
    <td></td>
    <td>If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment.<br /><br />To set a deployment as inactive, you must:<br /><br />*   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.<br />*   Mark the active deployment as inactive by adding any non-successful deployment status.<br /><br />For more information, see "[Create a deployment](https://docs.github.com/rest/deployments/deployments/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/rest/deployments/statuses#create-a-deployment-status)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repo_deployment` scope to use this endpoint.</td>
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
<tr id="parameter-environment">
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>The name of the environment that was deployed to (e.g., `staging` or `production`).</td>
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
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The name of the ref. This can be a branch, tag, or SHA.</td>
</tr>
<tr id="parameter-sha">
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td>The SHA recorded at creation time.</td>
</tr>
<tr id="parameter-task">
    <td><CopyableCode code="task" /></td>
    <td><code>string</code></td>
    <td>The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_deployment"
    values={[
        { label: 'get_deployment', value: 'get_deployment' },
        { label: 'list_deployments', value: 'list_deployments' }
    ]}
>
<TabItem value="get_deployment">

Response

```sql
SELECT
id,
node_id,
created_at,
creator,
description,
environment,
original_environment,
payload,
performed_via_github_app,
production_environment,
ref,
repository_url,
sha,
statuses_url,
task,
transient_environment,
updated_at,
url
FROM github.repos.deployments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND deployment_id = '{{ deployment_id }}' -- required
;
```
</TabItem>
<TabItem value="list_deployments">

Simple filtering of deployments is available via query parameters:

```sql
SELECT
id,
node_id,
created_at,
creator,
description,
environment,
original_environment,
payload,
performed_via_github_app,
production_environment,
ref,
repository_url,
sha,
statuses_url,
task,
transient_environment,
updated_at,
url
FROM github.repos.deployments
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND sha = '{{ sha }}'
AND ref = '{{ ref }}'
AND task = '{{ task }}'
AND environment = '{{ environment }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment"
    values={[
        { label: 'create_deployment', value: 'create_deployment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment">

Deployments offer a few configurable parameters with certain defaults.<br /><br />The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them<br />before we merge a pull request.<br /><br />The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have<br />multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter<br />makes it easier to track which environments have requested deployments. The default environment is `production`.<br /><br />The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If<br />the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,<br />the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will<br />return a failure response.<br /><br />By default, [commit statuses](https://docs.github.com/rest/commits/statuses) for every submitted context must be in a `success`<br />state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to<br />specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do<br />not require any contexts or create any commit statuses, the deployment will always succeed.<br /><br />The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text<br />field that will be passed on when a deployment event is dispatched.<br /><br />The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might<br />be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an<br />application with debugging enabled.<br /><br />Merged branch response:<br /><br />You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating<br />a deployment. This auto-merge happens when:<br />*   Auto-merge option is enabled in the repository<br />*   Topic branch does not include the latest changes on the base branch, which is `master` in the response example<br />*   There are no merge conflicts<br /><br />If there are no new commits in the base branch, a new request to create a deployment should give a successful<br />response.<br /><br />Merge conflict response:<br /><br />This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't<br />be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.<br /><br />Failed commit status checks:<br /><br />This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`<br />status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repo_deployment` scope to use this endpoint.

```sql
INSERT INTO github.repos.deployments (
ref,
task,
auto_merge,
required_contexts,
payload,
environment,
description,
transient_environment,
production_environment,
owner,
repo
)
SELECT 
'{{ ref }}' /* required */,
'{{ task }}',
{{ auto_merge }},
'{{ required_contexts }}',
'{{ payload }}',
'{{ environment }}',
'{{ description }}',
{{ transient_environment }},
{{ production_environment }},
'{{ owner }}',
'{{ repo }}'
RETURNING
id,
node_id,
created_at,
creator,
description,
environment,
original_environment,
payload,
performed_via_github_app,
production_environment,
ref,
repository_url,
sha,
statuses_url,
task,
transient_environment,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployments
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the deployments resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the deployments resource.
    - name: ref
      value: "{{ ref }}"
      description: |
        The ref to deploy. This can be a branch, tag, or SHA.
    - name: task
      value: "{{ task }}"
      description: |
        Specifies a task to execute (e.g., \`deploy\` or \`deploy:migrations\`).
      default: deploy
    - name: auto_merge
      value: {{ auto_merge }}
      description: |
        Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
      default: true
    - name: required_contexts
      value:
        - "{{ required_contexts }}"
      description: |
        The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
    - name: payload
      value: "{{ payload }}"
      description: |
        JSON payload with extra information about the deployment.
      default: 
    - name: environment
      value: "{{ environment }}"
      description: |
        Name for the target deployment environment (e.g., \`production\`, \`staging\`, \`qa\`).
      default: production
    - name: description
      value: "{{ description }}"
      description: |
        Short description of the deployment.
      default: 
    - name: transient_environment
      value: {{ transient_environment }}
      description: |
        Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: \`false\`
      default: false
    - name: production_environment
      value: {{ production_environment }}
      description: |
        Specifies if the given environment is one that end-users directly interact with. Default: \`true\` when \`environment\` is \`production\` and \`false\` otherwise.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment"
    values={[
        { label: 'delete_deployment', value: 'delete_deployment' }
    ]}
>
<TabItem value="delete_deployment">

If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment.<br /><br />To set a deployment as inactive, you must:<br /><br />*   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.<br />*   Mark the active deployment as inactive by adding any non-successful deployment status.<br /><br />For more information, see "[Create a deployment](https://docs.github.com/rest/deployments/deployments/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/rest/deployments/statuses#create-a-deployment-status)."<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` or `repo_deployment` scope to use this endpoint.

```sql
DELETE FROM github.repos.deployments
WHERE owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
AND deployment_id = '{{ deployment_id }}' --required
;
```
</TabItem>
</Tabs>
