--- 
title: source_imports
hide_title: false
hide_table_of_contents: false
keywords:
  - source_imports
  - migrations
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

Creates, updates, deletes, gets or lists a <code>source_imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="source_imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.migrations.source_imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_import_status"
    values={[
        { label: 'get_import_status', value: 'get_import_status' }
    ]}
>
<TabItem value="get_import_status">

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
    <td><CopyableCode code="authors_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="authors_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="commit_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="failed_step" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_large_files" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="import_percent" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="large_files_count" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="large_files_size" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="project_choices" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="push_percent" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td> (auth, error, none, detecting, choose, auth_failed, importing, mapping, waiting_to_push, pushing, complete, setup, unknown, detection_found_multiple, detection_found_nothing, detection_needs_auth)</td>
</tr>
<tr>
    <td><CopyableCode code="status_text" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="svc_root" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="svn_root" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="tfvc_project" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="use_lfs" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="vcs" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="vcs_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the originating repository.</td>
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
    <td><a href="#get_import_status"><CopyableCode code="get_import_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>View the progress of an import.<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).<br /><br />**Import status**<br /><br />This section includes details about the possible values of the `status` field of the Import Progress response.<br /><br />An import that does not have errors will progress through these steps:<br /><br />*   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.<br />*   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).<br />*   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.<br />*   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".<br />*   `complete` - the import is complete, and the repository is ready on GitHub.<br /><br />If there are problems, you will see one of these in the `status` field:<br /><br />*   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.<br />*   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api) for more information.<br />*   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.<br />*   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/migrations/source-imports#cancel-an-import) and [retry](https://docs.github.com/rest/migrations/source-imports#start-an-import) with the correct URL.<br />*   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.<br /><br />**The project_choices field**<br /><br />When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.<br /><br />**Git LFS related fields**<br /><br />This section includes details about Git LFS related fields that may be present in the Import Progress response.<br /><br />*   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.<br />*   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.<br />*   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.<br />*   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.</td>
</tr>
<tr>
    <td><a href="#update_import"><CopyableCode code="update_import" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API<br />request. If no parameters are provided, the import will be restarted.<br /><br />Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will<br />have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array.<br />You can select the project to import by providing one of the objects in the `project_choices` array in the update request.<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).</td>
</tr>
<tr>
    <td><a href="#start_import"><CopyableCode code="start_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-vcs_url"><code>vcs_url</code></a></td>
    <td></td>
    <td>Start a source import to a GitHub repository using GitHub Importer.<br />Importing into a GitHub repository with GitHub Actions enabled is not supported and will<br />return a status `422 Unprocessable Entity` response.<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).</td>
</tr>
<tr>
    <td><a href="#cancel_import"><CopyableCode code="cancel_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td></td>
    <td>Stop an import for a repository.<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).</td>
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
    defaultValue="get_import_status"
    values={[
        { label: 'get_import_status', value: 'get_import_status' }
    ]}
>
<TabItem value="get_import_status">

View the progress of an import.<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).<br /><br />**Import status**<br /><br />This section includes details about the possible values of the `status` field of the Import Progress response.<br /><br />An import that does not have errors will progress through these steps:<br /><br />*   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.<br />*   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).<br />*   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.<br />*   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".<br />*   `complete` - the import is complete, and the repository is ready on GitHub.<br /><br />If there are problems, you will see one of these in the `status` field:<br /><br />*   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.<br />*   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api) for more information.<br />*   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.<br />*   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/migrations/source-imports#cancel-an-import) and [retry](https://docs.github.com/rest/migrations/source-imports#start-an-import) with the correct URL.<br />*   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.<br /><br />**The project_choices field**<br /><br />When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.<br /><br />**Git LFS related fields**<br /><br />This section includes details about Git LFS related fields that may be present in the Import Progress response.<br /><br />*   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.<br />*   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.<br />*   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.<br />*   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.

```sql
SELECT
authors_count,
authors_url,
commit_count,
error_message,
failed_step,
has_large_files,
html_url,
import_percent,
large_files_count,
large_files_size,
message,
project_choices,
push_percent,
repository_url,
status,
status_text,
svc_root,
svn_root,
tfvc_project,
url,
use_lfs,
vcs,
vcs_url
FROM github.migrations.source_imports
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_import"
    values={[
        { label: 'update_import', value: 'update_import' }
    ]}
>
<TabItem value="update_import">

An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API<br />request. If no parameters are provided, the import will be restarted.<br /><br />Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will<br />have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array.<br />You can select the project to import by providing one of the objects in the `project_choices` array in the update request.<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

```sql
UPDATE github.migrations.source_imports
SET 
vcs_username = '{{ vcs_username }}',
vcs_password = '{{ vcs_password }}',
vcs = '{{ vcs }}',
tfvc_project = '{{ tfvc_project }}'
WHERE 
owner = '{{ owner }}' --required
AND repo = '{{ repo }}' --required
RETURNING
authors_count,
authors_url,
commit_count,
error_message,
failed_step,
has_large_files,
html_url,
import_percent,
large_files_count,
large_files_size,
message,
project_choices,
push_percent,
repository_url,
status,
status_text,
svc_root,
svn_root,
tfvc_project,
url,
use_lfs,
vcs,
vcs_url;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_import"
    values={[
        { label: 'start_import', value: 'start_import' },
        { label: 'cancel_import', value: 'cancel_import' }
    ]}
>
<TabItem value="start_import">

Start a source import to a GitHub repository using GitHub Importer.<br />Importing into a GitHub repository with GitHub Actions enabled is not supported and will<br />return a status `422 Unprocessable Entity` response.<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

```sql
EXEC github.migrations.source_imports.start_import 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required 
@@json=
'{
"vcs_url": "{{ vcs_url }}", 
"vcs": "{{ vcs }}", 
"vcs_username": "{{ vcs_username }}", 
"vcs_password": "{{ vcs_password }}", 
"tfvc_project": "{{ tfvc_project }}"
}'
;
```
</TabItem>
<TabItem value="cancel_import">

Stop an import for a repository.<br /><br />&gt; [!WARNING]<br />&gt; **Endpoint closing down notice:** Due to very low levels of usage and available alternatives, this endpoint is closing down and will no longer be available from 00:00 UTC on April 12, 2024. For more details and alternatives, see the [changelog](https://gh.io/source-imports-api-deprecation).

```sql
EXEC github.migrations.source_imports.cancel_import 
@owner='{{ owner }}' --required, 
@repo='{{ repo }}' --required
;
```
</TabItem>
</Tabs>
