--- 
title: protection_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - protection_rules
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

Creates, updates, deletes, gets or lists a <code>protection_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protection_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.protection_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_deployment_protection_rule"
    values={[
        { label: 'get_custom_deployment_protection_rule', value: 'get_custom_deployment_protection_rule' },
        { label: 'get_all_deployment_protection_rules', value: 'get_all_deployment_protection_rules' }
    ]}
>
<TabItem value="get_custom_deployment_protection_rule">

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
    <td>The unique identifier for the deployment protection rule.</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>The node ID for the deployment protection rule. (example: MDQ6R2F0ZTM1MTU=)</td>
</tr>
<tr>
    <td><CopyableCode code="app" /></td>
    <td><code>object</code></td>
    <td>A GitHub App that is providing a custom deployment protection rule. (title: Custom deployment protection rule app)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the deployment protection rule is enabled for the environment.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_deployment_protection_rules">

List of deployment protection rules

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
    <td><CopyableCode code="custom_deployment_protection_rules" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>The number of enabled custom deployment protection rules for this environment</td>
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
    <td><a href="#get_custom_deployment_protection_rule"><CopyableCode code="get_custom_deployment_protection_rule" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-protection_rule_id"><code>protection_rule_id</code></a></td>
    <td></td>
    <td>Gets an enabled custom deployment protection rule for an environment. Anyone with read access to the repository can use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment)."<br /><br />For more information about the app that is providing this custom deployment rule, see [`GET /apps/&#123;app_slug&#125;`](https://docs.github.com/rest/apps/apps#get-an-app).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#get_all_deployment_protection_rules"><CopyableCode code="get_all_deployment_protection_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-owner"><code>owner</code></a></td>
    <td></td>
    <td>Gets all custom deployment protection rules that are enabled for an environment. Anyone with read access to the repository can use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment)."<br /><br />For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/&#123;app_slug&#125;` endpoint](https://docs.github.com/rest/apps/apps#get-an-app).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.</td>
</tr>
<tr>
    <td><a href="#create_deployment_protection_rule"><CopyableCode code="create_deployment_protection_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-owner"><code>owner</code></a></td>
    <td></td>
    <td>Enable a custom deployment protection rule for an environment.<br /><br />The authenticated user must have admin or owner permissions to the repository to use this endpoint.<br /><br />For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/&#123;app_slug&#125;` endpoint](https://docs.github.com/rest/apps/apps#get-an-app), as well as the [guide to creating custom deployment protection rules](https://docs.github.com/actions/managing-workflow-runs-and-deployments/managing-deployments/creating-custom-deployment-protection-rules).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#disable_deployment_protection_rule"><CopyableCode code="disable_deployment_protection_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-protection_rule_id"><code>protection_rule_id</code></a></td>
    <td></td>
    <td>Disables a custom deployment protection rule for an environment.<br /><br />The authenticated user must have admin or owner permissions to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.</td>
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
<tr id="parameter-protection_rule_id">
    <td><CopyableCode code="protection_rule_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the protection rule.</td>
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
    defaultValue="get_custom_deployment_protection_rule"
    values={[
        { label: 'get_custom_deployment_protection_rule', value: 'get_custom_deployment_protection_rule' },
        { label: 'get_all_deployment_protection_rules', value: 'get_all_deployment_protection_rules' }
    ]}
>
<TabItem value="get_custom_deployment_protection_rule">

Gets an enabled custom deployment protection rule for an environment. Anyone with read access to the repository can use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment)."<br /><br />For more information about the app that is providing this custom deployment rule, see [`GET /apps/&#123;app_slug&#125;`](https://docs.github.com/rest/apps/apps#get-an-app).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
id,
node_id,
app,
enabled
FROM github.repos.protection_rules
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND protection_rule_id = '{{ protection_rule_id }}' -- required
;
```
</TabItem>
<TabItem value="get_all_deployment_protection_rules">

Gets all custom deployment protection rules that are enabled for an environment. Anyone with read access to the repository can use this endpoint. For more information about environments, see "[Using environments for deployment](https://docs.github.com/actions/deployment/targeting-different-environments/using-environments-for-deployment)."<br /><br />For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/&#123;app_slug&#125;` endpoint](https://docs.github.com/rest/apps/apps#get-an-app).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint with a private repository.

```sql
SELECT
custom_deployment_protection_rules,
total_count
FROM github.repos.protection_rules
WHERE environment_name = '{{ environment_name }}' -- required
AND repo = '{{ repo }}' -- required
AND owner = '{{ owner }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment_protection_rule"
    values={[
        { label: 'create_deployment_protection_rule', value: 'create_deployment_protection_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment_protection_rule">

Enable a custom deployment protection rule for an environment.<br /><br />The authenticated user must have admin or owner permissions to the repository to use this endpoint.<br /><br />For more information about the app that is providing this custom deployment rule, see the [documentation for the `GET /apps/&#123;app_slug&#125;` endpoint](https://docs.github.com/rest/apps/apps#get-an-app), as well as the [guide to creating custom deployment protection rules](https://docs.github.com/actions/managing-workflow-runs-and-deployments/managing-deployments/creating-custom-deployment-protection-rules).<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
INSERT INTO github.repos.protection_rules (
integration_id,
environment_name,
repo,
owner
)
SELECT 
{{ integration_id }},
'{{ environment_name }}',
'{{ repo }}',
'{{ owner }}'
RETURNING
id,
node_id,
app,
enabled
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: protection_rules
  props:
    - name: environment_name
      value: "{{ environment_name }}"
      description: Required parameter for the protection_rules resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the protection_rules resource.
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the protection_rules resource.
    - name: integration_id
      value: {{ integration_id }}
      description: |
        The ID of the custom app that will be enabled on the environment.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="disable_deployment_protection_rule"
    values={[
        { label: 'disable_deployment_protection_rule', value: 'disable_deployment_protection_rule' }
    ]}
>
<TabItem value="disable_deployment_protection_rule">

Disables a custom deployment protection rule for an environment.<br /><br />The authenticated user must have admin or owner permissions to the repository to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `repo` scope to use this endpoint.

```sql
DELETE FROM github.repos.protection_rules
WHERE environment_name = '{{ environment_name }}' --required
AND repo = '{{ repo }}' --required
AND owner = '{{ owner }}' --required
AND protection_rule_id = '{{ protection_rule_id }}' --required
;
```
</TabItem>
</Tabs>
