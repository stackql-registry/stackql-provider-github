--- 
title: saml_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - saml_identities
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

Creates, updates, deletes, gets or lists a <code>saml_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="saml_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.saml_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><code>string</code></td>
    <td>The GraphQL node ID of the external identity.</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>The GUID for this identity.</td>
</tr>
<tr>
    <td><CopyableCode code="saml_identity" /></td>
    <td><code>object</code></td>
    <td>The SAML identity (`name_id`, `username`, `emails[]`).</td>
</tr>
<tr>
    <td><CopyableCode code="scim_identity" /></td>
    <td><code>object</code></td>
    <td>The SCIM identity (`username`, `emails[]`).</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>The linked GitHub user, null for unlinked identities (`login`, `id`).</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>External identities (SAML and SCIM) linked to organization members when the organization uses SAML single sign-on. Backed by the GitHub GraphQL API (`organization.samlIdentityProvider.externalIdentities`). Requires organization owner access and an organization with SAML SSO configured.</td>
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
    <td>The organization name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

External identities (SAML and SCIM) linked to organization members when the organization uses SAML single sign-on. Backed by the GitHub GraphQL API (`organization.samlIdentityProvider.externalIdentities`). Requires organization owner access and an organization with SAML SSO configured.

```sql
SELECT
id,
guid,
saml_identity,
scim_identity,
user
FROM github.orgs.saml_identities
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
</Tabs>
