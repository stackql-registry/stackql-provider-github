--- 
title: security_fixes
hide_title: false
hide_table_of_contents: false
keywords:
  - security_fixes
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

Creates, updates, deletes, gets or lists a <code>security_fixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_fixes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.security_fixes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="check_automated_security_fixes"
    values={[
        { label: 'check_automated_security_fixes', value: 'check_automated_security_fixes' }
    ]}
>
<TabItem value="check_automated_security_fixes">

Response if Dependabot is enabled

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether Dependabot security updates are enabled for the repository.</td>
</tr>
<tr>
    <td><CopyableCode code="paused" /></td>
    <td><code>boolean</code></td>
    <td>Whether Dependabot security updates are paused for the repository.</td>
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
    <td><a href="#check_automated_security_fixes"><CopyableCode code="check_automated_security_fixes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Shows whether Dependabot security updates are enabled, disabled or paused for a repository. The authenticated user must have admin read access to the repository. For more information, see "[Configuring Dependabot security updates](https://docs.github.com/articles/configuring-automated-security-fixes)".</td>
</tr>
<tr>
    <td><a href="#enable_automated_security_fixes"><CopyableCode code="enable_automated_security_fixes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Enables Dependabot security updates for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring Dependabot security updates](https://docs.github.com/articles/configuring-automated-security-fixes)".</td>
</tr>
<tr>
    <td><a href="#disable_automated_security_fixes"><CopyableCode code="disable_automated_security_fixes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Disables Dependabot security updates for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring Dependabot security updates](https://docs.github.com/articles/configuring-automated-security-fixes)".</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="check_automated_security_fixes"
    values={[
        { label: 'check_automated_security_fixes', value: 'check_automated_security_fixes' }
    ]}
>
<TabItem value="check_automated_security_fixes">

Shows whether Dependabot security updates are enabled, disabled or paused for a repository. The authenticated user must have admin read access to the repository. For more information, see "[Configuring Dependabot security updates](https://docs.github.com/articles/configuring-automated-security-fixes)".

```sql
SELECT
enabled,
paused
FROM github.repos.security_fixes
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable_automated_security_fixes"
    values={[
        { label: 'enable_automated_security_fixes', value: 'enable_automated_security_fixes' },
        { label: 'disable_automated_security_fixes', value: 'disable_automated_security_fixes' }
    ]}
>
<TabItem value="enable_automated_security_fixes">

Enables Dependabot security updates for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring Dependabot security updates](https://docs.github.com/articles/configuring-automated-security-fixes)".

```sql
EXEC github.repos.security_fixes.enable_automated_security_fixes 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required
;
```
</TabItem>
<TabItem value="disable_automated_security_fixes">

Disables Dependabot security updates for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring Dependabot security updates](https://docs.github.com/articles/configuring-automated-security-fixes)".

```sql
EXEC github.repos.security_fixes.disable_automated_security_fixes 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required
;
```
</TabItem>
</Tabs>
