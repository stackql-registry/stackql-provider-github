--- 
title: artifact_deployment_records
hide_title: false
hide_table_of_contents: false
keywords:
  - artifact_deployment_records
  - orgs
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

Creates, updates, deletes, gets or lists an <code>artifact_deployment_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="artifact_deployment_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.artifact_deployment_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_artifact_deployment_records"
    values={[
        { label: 'list_artifact_deployment_records', value: 'list_artifact_deployment_records' }
    ]}
>
<TabItem value="list_artifact_deployment_records">

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
    <td><CopyableCode code="deployment_records" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>The number of deployment records for this digest and organization</td>
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
    <td><a href="#list_artifact_deployment_records"><CopyableCode code="list_artifact_deployment_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-subject_digest"><code>subject_digest</code></a></td>
    <td></td>
    <td>List deployment records for an artifact metadata associated with an organization.</td>
</tr>
<tr>
    <td><a href="#set_cluster_deployment_records"><CopyableCode code="set_cluster_deployment_records" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-logical_environment"><code>logical_environment</code></a>, <a href="#parameter-deployments"><code>deployments</code></a></td>
    <td></td>
    <td>Set deployment records for a given cluster.<br />If proposed records in the 'deployments' field have identical 'cluster', 'logical_environment',<br />'physical_environment', and 'deployment_name' values as existing records, the existing records will be updated.<br />If no existing records match, new records will be created.</td>
</tr>
<tr>
    <td><a href="#create_artifact_deployment_record"><CopyableCode code="create_artifact_deployment_record" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-digest"><code>digest</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-logical_environment"><code>logical_environment</code></a>, <a href="#parameter-deployment_name"><code>deployment_name</code></a></td>
    <td></td>
    <td>Create or update deployment records for an artifact associated<br />with an organization.<br />This endpoint allows you to record information about a specific<br />artifact, such as its name, digest, environments, cluster, and<br />deployment.<br />The deployment name has to be uniqe within a cluster (i.e a<br />combination of logical, physical environment and cluster) as it<br />identifies unique deployment.<br />Multiple requests for the same combination of logical, physical<br />environment, cluster and deployment name will only create one<br />record, successive request will update the existing record.<br />This allows for a stable tracking of a deployment where the actual<br />deployed artifact can change over time.</td>
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
<tr id="parameter-cluster">
    <td><CopyableCode code="cluster" /></td>
    <td><code>string</code></td>
    <td>The cluster name.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-subject_digest">
    <td><CopyableCode code="subject_digest" /></td>
    <td><code>string</code></td>
    <td>The SHA256 digest of the artifact, in the form `sha256:HEX_DIGEST`.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_artifact_deployment_records"
    values={[
        { label: 'list_artifact_deployment_records', value: 'list_artifact_deployment_records' }
    ]}
>
<TabItem value="list_artifact_deployment_records">

List deployment records for an artifact metadata associated with an organization.

```sql
SELECT
deployment_records,
total_count
FROM github.orgs.artifact_deployment_records
WHERE org = '{{ org }}' -- required
AND subject_digest = '{{ subject_digest }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="set_cluster_deployment_records"
    values={[
        { label: 'set_cluster_deployment_records', value: 'set_cluster_deployment_records' },
        { label: 'create_artifact_deployment_record', value: 'create_artifact_deployment_record' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="set_cluster_deployment_records">

Set deployment records for a given cluster.<br />If proposed records in the 'deployments' field have identical 'cluster', 'logical_environment',<br />'physical_environment', and 'deployment_name' values as existing records, the existing records will be updated.<br />If no existing records match, new records will be created.

```sql
INSERT INTO github.orgs.artifact_deployment_records (
logical_environment,
physical_environment,
deployments,
return_records,
org,
cluster
)
SELECT 
'{{ logical_environment }}' /* required */,
'{{ physical_environment }}',
'{{ deployments }}' /* required */,
{{ return_records }},
'{{ org }}',
'{{ cluster }}'
RETURNING
deployment_records,
total_count
;
```
</TabItem>
<TabItem value="create_artifact_deployment_record">

Create or update deployment records for an artifact associated<br />with an organization.<br />This endpoint allows you to record information about a specific<br />artifact, such as its name, digest, environments, cluster, and<br />deployment.<br />The deployment name has to be uniqe within a cluster (i.e a<br />combination of logical, physical environment and cluster) as it<br />identifies unique deployment.<br />Multiple requests for the same combination of logical, physical<br />environment, cluster and deployment name will only create one<br />record, successive request will update the existing record.<br />This allows for a stable tracking of a deployment where the actual<br />deployed artifact can change over time.

```sql
INSERT INTO github.orgs.artifact_deployment_records (
name,
digest,
version,
status,
logical_environment,
physical_environment,
cluster,
deployment_name,
tags,
runtime_risks,
github_repository,
return_records,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ digest }}' /* required */,
'{{ version }}',
'{{ status }}' /* required */,
'{{ logical_environment }}' /* required */,
'{{ physical_environment }}',
'{{ cluster }}',
'{{ deployment_name }}' /* required */,
'{{ tags }}',
'{{ runtime_risks }}',
'{{ github_repository }}',
{{ return_records }},
'{{ org }}'
RETURNING
deployment_records,
total_count
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: artifact_deployment_records
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the artifact_deployment_records resource.
    - name: cluster
      value: "{{ cluster }}"
      description: Required parameter for the artifact_deployment_records resource.
    - name: logical_environment
      value: "{{ logical_environment }}"
      description: |
        The stage of the deployment.
    - name: physical_environment
      value: "{{ physical_environment }}"
      description: |
        The physical region of the deployment.
    - name: deployments
      description: |
        The list of deployments to record.
      value:
        - name: "{{ name }}"
          digest: "{{ digest }}"
          version: "{{ version }}"
          status: "{{ status }}"
          deployment_name: "{{ deployment_name }}"
          github_repository: "{{ github_repository }}"
          tags: "{{ tags }}"
          runtime_risks: "{{ runtime_risks }}"
    - name: return_records
      value: {{ return_records }}
      description: |
        If true, the endpoint will return the created or updated record in the response body.
      default: true
    - name: name
      value: "{{ name }}"
      description: |
        The name of the artifact.
    - name: digest
      value: "{{ digest }}"
      description: |
        The hex encoded digest of the artifact.
    - name: version
      value: "{{ version }}"
      description: |
        The artifact version.
    - name: status
      value: "{{ status }}"
      description: |
        The status of the artifact. Can be either deployed or decommissioned.
      valid_values: ['deployed', 'decommissioned']
    - name: cluster
      value: "{{ cluster }}"
      description: |
        The deployment cluster.
    - name: deployment_name
      value: "{{ deployment_name }}"
      description: |
        The unique identifier for the deployment represented by the new record. To accommodate differing
        containers and namespaces within a cluster, the following format is recommended:
        {namespaceName}-{deploymentName}-{containerName}.
    - name: tags
      value: "{{ tags }}"
      description: |
        The tags associated with the deployment.
    - name: runtime_risks
      value:
        - "{{ runtime_risks }}"
      description: |
        A list of runtime risks associated with the deployment.
    - name: github_repository
      value: "{{ github_repository }}"
      description: |
        The name of the GitHub repository associated with the artifact. This should be used
        when there are no provenance attestations available for the artifact. The repository
        must belong to the organization specified in the path parameter.
        If a provenance attestation is available for the artifact, the API will use
        the repository information from the attestation instead of this parameter.
`}</CodeBlock>

</TabItem>
</Tabs>
