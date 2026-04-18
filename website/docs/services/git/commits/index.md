--- 
title: commits
hide_title: false
hide_table_of_contents: false
keywords:
  - commits
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

Creates, updates, deletes, gets or lists a <code>commits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="commits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.git.commits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_commit"
    values={[
        { label: 'get_commit', value: 'get_commit' }
    ]}
>
<TabItem value="get_commit">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>object</code></td>
    <td>Identifying information for the git-user</td>
</tr>
<tr>
    <td><CopyableCode code="committer" /></td>
    <td><code>object</code></td>
    <td>Identifying information for the git-user</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Message describing the purpose of the commit (example: Fix #42)</td>
</tr>
<tr>
    <td><CopyableCode code="parents" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="sha" /></td>
    <td><code>string</code></td>
    <td>SHA for the commit (example: 7638417db6d59f3c431d3e1f261cc637155684cd)</td>
</tr>
<tr>
    <td><CopyableCode code="tree" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="verification" /></td>
    <td><code>object</code></td>
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
    <td><a href="#get_commit"><CopyableCode code="get_commit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-commit_sha"><code>commit_sha</code></a></td>
    <td></td>
    <td>Gets a Git [commit object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).<br /><br />To get the contents of a commit, see "[Get a commit](https://docs.github.com/rest/commits/commits#get-a-commit)."<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |</td>
</tr>
<tr>
    <td><a href="#create_commit"><CopyableCode code="create_commit" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-message"><code>message</code></a>, <a href="#parameter-tree"><code>tree</code></a></td>
    <td></td>
    <td>Creates a new Git [commit object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |</td>
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
<tr id="parameter-commit_sha">
    <td><CopyableCode code="commit_sha" /></td>
    <td><code>string</code></td>
    <td>The SHA of the commit.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_commit"
    values={[
        { label: 'get_commit', value: 'get_commit' }
    ]}
>
<TabItem value="get_commit">

Gets a Git [commit object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).<br /><br />To get the contents of a commit, see "[Get a commit](https://docs.github.com/rest/commits/commits#get-a-commit)."<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |

```sql
SELECT
node_id,
author,
committer,
html_url,
message,
parents,
sha,
tree,
url,
verification
FROM github.git.commits
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND commit_sha = '{{ commit_sha }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_commit"
    values={[
        { label: 'create_commit', value: 'create_commit' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_commit">

Creates a new Git [commit object](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).<br /><br />**Signature verification object**<br /><br />The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:<br /><br />| Name | Type | Description |<br />| ---- | ---- | ----------- |<br />| `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |<br />| `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in the table below. |<br />| `signature` | `string` | The signature that was extracted from the commit. |<br />| `payload` | `string` | The value that was signed. |<br />| `verified_at` | `string` | The date the signature was verified by GitHub. |<br /><br />These are the possible values for `reason` in the `verification` object:<br /><br />| Value | Description |<br />| ----- | ----------- |<br />| `expired_key` | The key that made the signature is expired. |<br />| `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |<br />| `gpgverify_error` | There was an error communicating with the signature verification service. |<br />| `gpgverify_unavailable` | The signature verification service is currently unavailable. |<br />| `unsigned` | The object does not include a signature. |<br />| `unknown_signature_type` | A non-PGP signature was found in the commit. |<br />| `no_user` | No user was associated with the `committer` email address in the commit. |<br />| `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on their account. |<br />| `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |<br />| `unknown_key` | The key that made the signature has not been registered with any user's account. |<br />| `malformed_signature` | There was an error parsing the signature. |<br />| `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |<br />| `valid` | None of the above errors applied, so the signature is considered to be verified. |

```sql
INSERT INTO github.git.commits (
message,
tree,
parents,
author,
committer,
signature,
owner,
repo
)
SELECT 
'{{ message }}' /* required */,
'{{ tree }}' /* required */,
'{{ parents }}',
'{{ author }}',
'{{ committer }}',
'{{ signature }}',
'{{ owner }}',
'{{ repo }}'
RETURNING
node_id,
author,
committer,
html_url,
message,
parents,
sha,
tree,
url,
verification
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: commits
  props:
    - name: owner
      value: "{{ owner }}"
      description: Required parameter for the commits resource.
    - name: repo
      value: "{{ repo }}"
      description: Required parameter for the commits resource.
    - name: message
      value: "{{ message }}"
      description: |
        The commit message
    - name: tree
      value: "{{ tree }}"
      description: |
        The SHA of the tree object this commit points to
    - name: parents
      value:
        - "{{ parents }}"
      description: |
        The full SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
    - name: author
      description: |
        Information about the author of the commit. By default, the \`author\` will be the authenticated user and the current date. See the \`author\` and \`committer\` object below for details.
      value:
        name: "{{ name }}"
        email: "{{ email }}"
        date: "{{ date }}"
    - name: committer
      description: |
        Information about the person who is making the commit. By default, \`committer\` will use the information set in \`author\`. See the \`author\` and \`committer\` object below for details.
      value:
        name: "{{ name }}"
        email: "{{ email }}"
        date: "{{ date }}"
    - name: signature
      value: "{{ signature }}"
      description: |
        The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the \`gpgsig\` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a \`signature\` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.
`}</CodeBlock>

</TabItem>
</Tabs>
