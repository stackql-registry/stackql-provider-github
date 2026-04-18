--- 
title: artifact_storage_records
hide_title: false
hide_table_of_contents: false
keywords:
  - artifact_storage_records
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

Creates, updates, deletes, gets or lists an <code>artifact_storage_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="artifact_storage_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.artifact_storage_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_artifact_storage_records"
    values={[
        { label: 'list_artifact_storage_records', value: 'list_artifact_storage_records' }
    ]}
>
<TabItem value="list_artifact_storage_records">

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
    <td><CopyableCode code="storage_records" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_count" /></td>
    <td><code>integer</code></td>
    <td>The number of storage records for this digest and organization</td>
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
    <td><a href="#list_artifact_storage_records"><CopyableCode code="list_artifact_storage_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-subject_digest"><code>subject_digest</code></a></td>
    <td></td>
    <td>List a collection of artifact storage records with a given subject digest that are associated with repositories owned by an organization.<br /><br />The collection of storage records returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `content:read` permission is required.</td>
</tr>
<tr>
    <td><a href="#create_artifact_storage_record"><CopyableCode code="create_artifact_storage_record" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-digest"><code>digest</code></a>, <a href="#parameter-registry_url"><code>registry_url</code></a></td>
    <td></td>
    <td>Create metadata storage records for artifacts associated with an organization.<br />This endpoint will create a new artifact storage record on behalf of any artifact matching the provided digest and<br />associated with a repository owned by the organization.</td>
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
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-subject_digest">
    <td><CopyableCode code="subject_digest" /></td>
    <td><code>string</code></td>
    <td>The parameter should be set to the attestation's subject's SHA256 digest, in the form `sha256:HEX_DIGEST`. (example: sha256:1bb1e949e55dcefc6353e7b36c8897d2a107d8e8dca49d4e3c0ea8493fc0bc72)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_artifact_storage_records"
    values={[
        { label: 'list_artifact_storage_records', value: 'list_artifact_storage_records' }
    ]}
>
<TabItem value="list_artifact_storage_records">

List a collection of artifact storage records with a given subject digest that are associated with repositories owned by an organization.<br /><br />The collection of storage records returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `content:read` permission is required.

```sql
SELECT
storage_records,
total_count
FROM github.orgs.artifact_storage_records
WHERE org = '{{ org }}' -- required
AND subject_digest = '{{ subject_digest }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_artifact_storage_record"
    values={[
        { label: 'create_artifact_storage_record', value: 'create_artifact_storage_record' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_artifact_storage_record">

Create metadata storage records for artifacts associated with an organization.<br />This endpoint will create a new artifact storage record on behalf of any artifact matching the provided digest and<br />associated with a repository owned by the organization.

```sql
INSERT INTO github.orgs.artifact_storage_records (
name,
digest,
version,
artifact_url,
path,
registry_url,
repository,
status,
github_repository,
return_records,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ digest }}' /* required */,
'{{ version }}',
'{{ artifact_url }}',
'{{ path }}',
'{{ registry_url }}' /* required */,
'{{ repository }}',
'{{ status }}',
'{{ github_repository }}',
{{ return_records }},
'{{ org }}'
RETURNING
storage_records,
total_count
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: artifact_storage_records
  props:
    - name: org
      value: "{{ org }}"
      description: Required parameter for the artifact_storage_records resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the artifact.
    - name: digest
      value: "{{ digest }}"
      description: |
        The digest of the artifact (algorithm:hex-encoded-digest).
    - name: version
      value: "{{ version }}"
      description: |
        The artifact version.
    - name: artifact_url
      value: "{{ artifact_url }}"
      description: |
        The URL where the artifact is stored.
    - name: path
      value: "{{ path }}"
      description: |
        The path of the artifact.
    - name: registry_url
      value: "{{ registry_url }}"
      description: |
        The base URL of the artifact registry.
    - name: repository
      value: "{{ repository }}"
      description: |
        The repository name within the registry.
    - name: status
      value: "{{ status }}"
      description: |
        The status of the artifact (e.g., active, inactive).
      valid_values: ['active', 'eol', 'deleted']
      default: active
    - name: github_repository
      value: "{{ github_repository }}"
      description: |
        The name of the GitHub repository associated with the artifact. This should be used
        when there are no provenance attestations available for the artifact. The repository
        must belong to the organization specified in the path parameter.
        If a provenance attestation is available for the artifact, the API will use
        the repository information from the attestation instead of this parameter.
    - name: return_records
      value: {{ return_records }}
      description: |
        If true, the endpoint will return the created record in the response body.
      default: true
`}</CodeBlock>

</TabItem>
</Tabs>
