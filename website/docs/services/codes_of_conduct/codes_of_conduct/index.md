--- 
title: codes_of_conduct
hide_title: false
hide_table_of_contents: false
keywords:
  - codes_of_conduct
  - codes_of_conduct
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

Creates, updates, deletes, gets or lists a <code>codes_of_conduct</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="codes_of_conduct" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.codes_of_conduct.codes_of_conduct" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_conduct_code"
    values={[
        { label: 'get_conduct_code', value: 'get_conduct_code' },
        { label: 'get_all_codes_of_conduct', value: 'get_all_codes_of_conduct' }
    ]}
>
<TabItem value="get_conduct_code">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: Contributor Covenant)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td> (example: # Contributor Covenant Code of Conduct<br /><br />## Our Pledge<br /><br />In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.<br /><br />## Our Standards<br /><br />Examples of behavior that contributes to creating a positive environment include:<br /><br />* Using welcoming and inclusive language<br />* Being respectful of differing viewpoints and experiences<br />* Gracefully accepting constructive criticism<br />* Focusing on what is best for the community<br />* Showing empathy towards other community members<br /><br />Examples of unacceptable behavior by participants include:<br /><br />* The use of sexualized language or imagery and unwelcome sexual attention or advances<br />* Trolling, insulting/derogatory comments, and personal or political attacks<br />* Public or private harassment<br />* Publishing others' private information, such as a physical or electronic address, without explicit permission<br />* Other conduct which could reasonably be considered inappropriate in a professional setting<br /><br />## Our Responsibilities<br /><br />Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response<br />                  to any instances of unacceptable behavior.<br /><br />Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.<br /><br />## Scope<br /><br />This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address,<br />                  posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.<br /><br />## Enforcement<br /><br />Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [EMAIL]. The project team will review and investigate all complaints, and will respond in a way that it deems appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.<br /><br />Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.<br /><br />## Attribution<br /><br />This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.4, available at [http://contributor-covenant.org/version/1/4](http://contributor-covenant.org/version/1/4/).<br />)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td> (example: contributor_covenant)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/codes_of_conduct/contributor_covenant)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_all_codes_of_conduct">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: Contributor Covenant)</td>
</tr>
<tr>
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td> (example: # Contributor Covenant Code of Conduct<br /><br />## Our Pledge<br /><br />In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.<br /><br />## Our Standards<br /><br />Examples of behavior that contributes to creating a positive environment include:<br /><br />* Using welcoming and inclusive language<br />* Being respectful of differing viewpoints and experiences<br />* Gracefully accepting constructive criticism<br />* Focusing on what is best for the community<br />* Showing empathy towards other community members<br /><br />Examples of unacceptable behavior by participants include:<br /><br />* The use of sexualized language or imagery and unwelcome sexual attention or advances<br />* Trolling, insulting/derogatory comments, and personal or political attacks<br />* Public or private harassment<br />* Publishing others' private information, such as a physical or electronic address, without explicit permission<br />* Other conduct which could reasonably be considered inappropriate in a professional setting<br /><br />## Our Responsibilities<br /><br />Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response<br />                  to any instances of unacceptable behavior.<br /><br />Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.<br /><br />## Scope<br /><br />This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address,<br />                  posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.<br /><br />## Enforcement<br /><br />Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [EMAIL]. The project team will review and investigate all complaints, and will respond in a way that it deems appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.<br /><br />Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.<br /><br />## Attribution<br /><br />This Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.4, available at [http://contributor-covenant.org/version/1/4](http://contributor-covenant.org/version/1/4/).<br />)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td> (example: contributor_covenant)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/codes_of_conduct/contributor_covenant)</td>
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
    <td><a href="#get_conduct_code"><CopyableCode code="get_conduct_code" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td></td>
    <td>Returns information about the specified GitHub code of conduct.</td>
</tr>
<tr>
    <td><a href="#get_all_codes_of_conduct"><CopyableCode code="get_all_codes_of_conduct" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns array of all GitHub's codes of conduct.</td>
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
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_conduct_code"
    values={[
        { label: 'get_conduct_code', value: 'get_conduct_code' },
        { label: 'get_all_codes_of_conduct', value: 'get_all_codes_of_conduct' }
    ]}
>
<TabItem value="get_conduct_code">

Returns information about the specified GitHub code of conduct.

```sql
SELECT
name,
body,
html_url,
key,
url
FROM github.codes_of_conduct.codes_of_conduct
WHERE key = '{{ key }}' -- required
;
```
</TabItem>
<TabItem value="get_all_codes_of_conduct">

Returns array of all GitHub's codes of conduct.

```sql
SELECT
name,
body,
html_url,
key,
url
FROM github.codes_of_conduct.codes_of_conduct
;
```
</TabItem>
</Tabs>
