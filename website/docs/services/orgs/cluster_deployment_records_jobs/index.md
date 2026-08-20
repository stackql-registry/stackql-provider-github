--- 
title: cluster_deployment_records_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_deployment_records_jobs
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

Creates, updates, deletes, gets or lists a <code>cluster_deployment_records_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_deployment_records_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.cluster_deployment_records_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cluster_deployment_records_job"
    values={[
        { label: 'get_cluster_deployment_records_job', value: 'get_cluster_deployment_records_job' }
    ]}
>
<TabItem value="get_cluster_deployment_records_job">

Job status retrieved successfully.<br />

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
    <td><CopyableCode code="job_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>Processing errors (only present when completed or failed).</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the job started processing (only present when processing, completed, or failed).</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the job. (pending, processing, completed, failed)</td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>The number of records successfully mutated (only present when completed).</td>
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
    <td><a href="#get_cluster_deployment_records_job"><CopyableCode code="get_cluster_deployment_records_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-job_id"><code>job_id</code></a></td>
    <td></td>
    <td>Get the status and results of a previously created cluster deployment records job.</td>
</tr>
<tr>
    <td><a href="#create_cluster_deployment_records_job"><CopyableCode code="create_cluster_deployment_records_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-cluster"><code>cluster</code></a>, <a href="#parameter-logical_environment"><code>logical_environment</code></a>, <a href="#parameter-deployments"><code>deployments</code></a></td>
    <td></td>
    <td>Create a background job to set deployment records for a given cluster.<br />Performs validation and permission checks synchronously, returning rejected<br />deployments immediately, then enqueues a background job for the actual<br />deployment updates. Use the companion GET endpoint to poll for job status.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the job.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_cluster_deployment_records_job"
    values={[
        { label: 'get_cluster_deployment_records_job', value: 'get_cluster_deployment_records_job' }
    ]}
>
<TabItem value="get_cluster_deployment_records_job">

Get the status and results of a previously created cluster deployment records job.

```sql
SELECT
job_id,
errors,
started_at,
status,
total_count
FROM github.orgs.cluster_deployment_records_jobs
WHERE org = '{{ org }}' -- required
AND cluster = '{{ cluster }}' -- required
AND job_id = '{{ job_id }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_cluster_deployment_records_job"
    values={[
        { label: 'create_cluster_deployment_records_job', value: 'create_cluster_deployment_records_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_cluster_deployment_records_job">

Create a background job to set deployment records for a given cluster.<br />Performs validation and permission checks synchronously, returning rejected<br />deployments immediately, then enqueues a background job for the actual<br />deployment updates. Use the companion GET endpoint to poll for job status.

```sql
INSERT INTO github.orgs.cluster_deployment_records_jobs (
logical_environment,
physical_environment,
deployments,
org,
cluster
)
SELECT 
'{{ logical_environment }}' /* required */,
'{{ physical_environment }}',
'{{ deployments }}' /* required */,
'{{ org }}',
'{{ cluster }}'
RETURNING
job_id,
errors
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cluster_deployment_records_jobs
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the cluster_deployment_records_jobs resource.
    - name: cluster
      value: "{{ cluster }}"
      description: Required parameter for the cluster_deployment_records_jobs resource.
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
`}</CodeBlock>

</TabItem>
</Tabs>
