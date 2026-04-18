--- 
title: attestations
hide_title: false
hide_table_of_contents: false
keywords:
  - attestations
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

Creates, updates, deletes, gets or lists an <code>attestations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attestations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.attestations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attestations"
    values={[
        { label: 'list_attestations', value: 'list_attestations' }
    ]}
>
<TabItem value="list_attestations">

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
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="bundle" /></td>
    <td><code>object</code></td>
    <td>The attestation's Sigstore Bundle. Refer to the [Sigstore Bundle Specification](https://github.com/sigstore/protobuf-specs/blob/main/protos/sigstore_bundle.proto) for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="bundle_url" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="initiator" /></td>
    <td><code>string</code></td>
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
    <td><a href="#list_attestations"><CopyableCode code="list_attestations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-subject_digest"><code>subject_digest</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-predicate_type"><code>predicate_type</code></a></td>
    <td>List a collection of artifact attestations with a given subject digest that are associated with repositories owned by an organization.<br /><br />The collection of attestations returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `attestations:read` permission is required.<br /><br />**Please note:** in order to offer meaningful security benefits, an attestation's signature and timestamps **must** be cryptographically verified, and the identity of the attestation signer **must** be validated. Attestations can be verified using the [GitHub CLI `attestation verify` command](https://cli.github.com/manual/gh_attestation_verify). For more information, see [our guide on how to use artifact attestations to establish a build's provenance](https://docs.github.com/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds).</td>
</tr>
<tr>
    <td><a href="#delete_attestations_by_subject_digest"><CopyableCode code="delete_attestations_by_subject_digest" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-subject_digest"><code>subject_digest</code></a></td>
    <td></td>
    <td>Delete an artifact attestation by subject digest.</td>
</tr>
<tr>
    <td><a href="#delete_attestations_by_id"><CopyableCode code="delete_attestations_by_id" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-attestation_id"><code>attestation_id</code></a></td>
    <td></td>
    <td>Delete an artifact attestation by unique ID that is associated with a repository owned by an org.</td>
</tr>
<tr>
    <td><a href="#list_attestations_bulk"><CopyableCode code="list_attestations_bulk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-subject_digests"><code>subject_digests</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>List a collection of artifact attestations associated with any entry in a list of subject digests owned by an organization.<br /><br />The collection of attestations returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `attestations:read` permission is required.<br /><br />**Please note:** in order to offer meaningful security benefits, an attestation's signature and timestamps **must** be cryptographically verified, and the identity of the attestation signer **must** be validated. Attestations can be verified using the [GitHub CLI `attestation verify` command](https://cli.github.com/manual/gh_attestation_verify). For more information, see [our guide on how to use artifact attestations to establish a build's provenance](https://docs.github.com/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds).</td>
</tr>
<tr>
    <td><a href="#delete_attestations_bulk"><CopyableCode code="delete_attestations_bulk" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-subject_digests"><code>subject_digests</code></a>, <a href="#parameter-attestation_ids"><code>attestation_ids</code></a></td>
    <td></td>
    <td>Delete artifact attestations in bulk by either subject digests or unique ID.</td>
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
<tr id="parameter-attestation_id">
    <td><CopyableCode code="attestation_id" /></td>
    <td><code>integer</code></td>
    <td>Attestation ID</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-subject_digest">
    <td><CopyableCode code="subject_digest" /></td>
    <td><code>string</code></td>
    <td>Subject Digest</td>
</tr>
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results after this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string</code></td>
    <td>A cursor, as given in the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers). If specified, the query only searches for results before this cursor. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-predicate_type">
    <td><CopyableCode code="predicate_type" /></td>
    <td><code>string</code></td>
    <td>Optional filter for fetching attestations with a given predicate type. This option accepts `provenance`, `sbom`, `release`, or freeform text for custom predicate types.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_attestations"
    values={[
        { label: 'list_attestations', value: 'list_attestations' }
    ]}
>
<TabItem value="list_attestations">

List a collection of artifact attestations with a given subject digest that are associated with repositories owned by an organization.<br /><br />The collection of attestations returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `attestations:read` permission is required.<br /><br />**Please note:** in order to offer meaningful security benefits, an attestation's signature and timestamps **must** be cryptographically verified, and the identity of the attestation signer **must** be validated. Attestations can be verified using the [GitHub CLI `attestation verify` command](https://cli.github.com/manual/gh_attestation_verify). For more information, see [our guide on how to use artifact attestations to establish a build's provenance](https://docs.github.com/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds).

```sql
SELECT
repository_id,
bundle,
bundle_url,
initiator
FROM github.orgs.attestations
WHERE org = '{{ org }}' -- required
AND subject_digest = '{{ subject_digest }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND predicate_type = '{{ predicate_type }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_attestations_by_subject_digest"
    values={[
        { label: 'delete_attestations_by_subject_digest', value: 'delete_attestations_by_subject_digest' },
        { label: 'delete_attestations_by_id', value: 'delete_attestations_by_id' }
    ]}
>
<TabItem value="delete_attestations_by_subject_digest">

Delete an artifact attestation by subject digest.

```sql
DELETE FROM github.orgs.attestations
WHERE org = '{{ org }}' --required
AND subject_digest = '{{ subject_digest }}' --required
;
```
</TabItem>
<TabItem value="delete_attestations_by_id">

Delete an artifact attestation by unique ID that is associated with a repository owned by an org.

```sql
DELETE FROM github.orgs.attestations
WHERE org = '{{ org }}' --required
AND attestation_id = '{{ attestation_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_attestations_bulk"
    values={[
        { label: 'list_attestations_bulk', value: 'list_attestations_bulk' },
        { label: 'delete_attestations_bulk', value: 'delete_attestations_bulk' }
    ]}
>
<TabItem value="list_attestations_bulk">

List a collection of artifact attestations associated with any entry in a list of subject digests owned by an organization.<br /><br />The collection of attestations returned by this endpoint is filtered according to the authenticated user's permissions; if the authenticated user cannot read a repository, the attestations associated with that repository will not be included in the response. In addition, when using a fine-grained access token the `attestations:read` permission is required.<br /><br />**Please note:** in order to offer meaningful security benefits, an attestation's signature and timestamps **must** be cryptographically verified, and the identity of the attestation signer **must** be validated. Attestations can be verified using the [GitHub CLI `attestation verify` command](https://cli.github.com/manual/gh_attestation_verify). For more information, see [our guide on how to use artifact attestations to establish a build's provenance](https://docs.github.com/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds).

```sql
EXEC github.orgs.attestations.list_attestations_bulk 
@org='{{ org }}' --required, 
@per_page='{{ per_page }}', 
@before='{{ before }}', 
@after='{{ after }}' 
@@json=
'{
"subject_digests": "{{ subject_digests }}", 
"predicate_type": "{{ predicate_type }}"
}'
;
```
</TabItem>
<TabItem value="delete_attestations_bulk">

Delete artifact attestations in bulk by either subject digests or unique ID.

```sql
EXEC github.orgs.attestations.delete_attestations_bulk 
@org='{{ org }}' --required 
@@json=
'{
"subject_digests": "{{ subject_digests }}", 
"attestation_ids": "{{ attestation_ids }}"
}'
;
```
</TabItem>
</Tabs>
