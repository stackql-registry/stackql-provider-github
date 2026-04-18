--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
  - git
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.git.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tag"
    values={[
        { label: 'get_tag', value: 'get_tag' }
    ]}
>
<TabItem value="get_tag">

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
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDM6VGFnOTQwYmQzMzYyNDhlZmFlMGY5ZWU1YmM3YjJkNWM5ODU4ODdiMTZhYw==)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Message describing the purpose of the tag (example: Initial public release)</td>
</tr>
<tr>
    <td><CopyableCode code="object" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td> (example: 940bd336248efae0f9ee5bc7b2d5c985887b16ac)</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>Name of the tag (example: v0.0.1)</td>
</tr>
<tr>
    <td><CopyableCode code="tagger" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>URL for the tag (example: https://api.github.com/repositories/42/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac)</td>
</tr>
<tr>
    <td><CopyableCode code="verification" /></td>
    <td><code>object</code></td>
    <td> (title: Verification)</td>
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
    <td><a href="#get_tag"><CopyableCode code="get_tag" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-tag_sha"><code>tag_sha</code></a></td>
    <td></td>
    <td>**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |</td>
</tr>
<tr>
    <td><a href="#create_tag"><CopyableCode code="create_tag" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-tag"><code>tag</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-object"><code>object</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/rest/git/refs#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/rest/git/refs#create-a-reference) the tag reference - this call would be unnecessary.<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |</td>
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
<tr id="parameter-tag_sha">
    <td><CopyableCode code="tag_sha" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_tag"
    values={[
        { label: 'get_tag', value: 'get_tag' }
    ]}
>
<TabItem value="get_tag">

**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |

```sql
SELECT
node_id,
message,
object,
sha,
tag,
tagger,
url,
verification
FROM github.git.tags
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND tag_sha = '{{ tag_sha }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_tag"
    values={[
        { label: 'create_tag', value: 'create_tag' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_tag">

Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://docs.github.com/rest/git/refs#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://docs.github.com/rest/git/refs#create-a-reference) the tag reference - this call would be unnecessary.<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |

```sql
INSERT INTO github.git.tags (
tag,
message,
object,
type,
tagger,
owner,
repo
)
SELECT 
'{{ tag }}' /* required */,
'{{ message }}' /* required */,
'{{ object }}' /* required */,
'{{ type }}' /* required */,
'{{ tagger }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
node_id,
message,
object,
sha,
tag,
tagger,
url,
verification
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tags
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the tags resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the tags resource.
    - name: tag
      value: "{{ tag }}"
      description: |
        The tag's name. This is typically a version (e.g., "v0.0.1").
    - name: message
      value: "{{ message }}"
      description: |
        The tag message.
    - name: object
      value: "{{ object }}"
      description: |
        The SHA of the git object this is tagging.
    - name: type
      value: "{{ type }}"
      description: |
        The type of the object we're tagging. Normally this is a \`commit\` but it can also be a \`tree\` or a \`blob\`.
      valid_values: ['commit', 'tree', 'blob']
    - name: tagger
      description: |
        An object with information about the individual creating the tag.
      value:
        name: "{{ name }}"
        email: "{{ email }}"
        date: "{{ date }}"
`}</CodeBlock>

</TabItem>
</Tabs>
