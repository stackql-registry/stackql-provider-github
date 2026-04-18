--- 
title: global_advisories
hide_title: false
hide_table_of_contents: false
keywords:
  - global_advisories
  - security_advisories
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

Creates, updates, deletes, gets or lists a <code>global_advisories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_advisories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.security_advisories.global_advisories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_global_advisory"
    values={[
        { label: 'get_global_advisory', value: 'get_global_advisory' },
        { label: 'list_global_advisories', value: 'list_global_advisories' }
    ]}
>
<TabItem value="get_global_advisory">

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
    <td><CopyableCode code="cve_id" /></td>
    <td><code>string</code></td>
    <td>The Common Vulnerabilities and Exposures (CVE) ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>The GitHub Security Advisory ID.</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>array</code></td>
    <td>The users who contributed to the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="cvss" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cvss_severities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cwes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of what the advisory entails.</td>
</tr>
<tr>
    <td><CopyableCode code="epss" /></td>
    <td><code>object</code></td>
    <td>The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss).</td>
</tr>
<tr>
    <td><CopyableCode code="github_reviewed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="identifiers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="nvd_published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. This field is only populated when the advisory is imported from the National Vulnerability Database.</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was published, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_advisory_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL for the repository advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the advisory. (critical, high, medium, low, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="source_code_location" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the advisory's source code.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short summary of the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of advisory. (reviewed, unreviewed, malware)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was last updated, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The API URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilities" /></td>
    <td><code>array</code></td>
    <td>The products and respective version ranges affected by the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="withdrawn_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was withdrawn, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_global_advisories">

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
    <td><CopyableCode code="cve_id" /></td>
    <td><code>string</code></td>
    <td>The Common Vulnerabilities and Exposures (CVE) ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>The GitHub Security Advisory ID.</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>array</code></td>
    <td>The users who contributed to the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="cvss" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cvss_severities" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="cwes" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A detailed description of what the advisory entails.</td>
</tr>
<tr>
    <td><CopyableCode code="epss" /></td>
    <td><code>object</code></td>
    <td>The EPSS scores as calculated by the [Exploit Prediction Scoring System](https://www.first.org/epss).</td>
</tr>
<tr>
    <td><CopyableCode code="github_reviewed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was reviewed by GitHub, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="identifiers" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="nvd_published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the advisory was published in the National Vulnerability Database, in ISO 8601 format. This field is only populated when the advisory is imported from the National Vulnerability Database.</td>
</tr>
<tr>
    <td><CopyableCode code="published_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was published, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repository_advisory_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The API URL for the repository advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>The severity of the advisory. (critical, high, medium, low, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="source_code_location" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the advisory's source code.</td>
</tr>
<tr>
    <td><CopyableCode code="summary" /></td>
    <td><code>string</code></td>
    <td>A short summary of the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of advisory. (reviewed, unreviewed, malware)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was last updated, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The API URL for the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="vulnerabilities" /></td>
    <td><code>array</code></td>
    <td>The products and respective version ranges affected by the advisory.</td>
</tr>
<tr>
    <td><CopyableCode code="withdrawn_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of when the advisory was withdrawn, in ISO 8601 format.</td>
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
    <td><a href="#get_global_advisory"><CopyableCode code="get_global_advisory" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ghsa_id"><code>ghsa_id</code></a></td>
    <td></td>
    <td>Gets a global security advisory using its GitHub Security Advisory (GHSA) identifier.</td>
</tr>
<tr>
    <td><a href="#list_global_advisories"><CopyableCode code="list_global_advisories" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-ghsa_id"><code>ghsa_id</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-cve_id"><code>cve_id</code></a>, <a href="#parameter-ecosystem"><code>ecosystem</code></a>, <a href="#parameter-severity"><code>severity</code></a>, <a href="#parameter-cwes"><code>cwes</code></a>, <a href="#parameter-is_withdrawn"><code>is_withdrawn</code></a>, <a href="#parameter-affects"><code>affects</code></a>, <a href="#parameter-published"><code>published</code></a>, <a href="#parameter-updated"><code>updated</code></a>, <a href="#parameter-modified"><code>modified</code></a>, <a href="#parameter-epss_percentage"><code>epss_percentage</code></a>, <a href="#parameter-epss_percentile"><code>epss_percentile</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a>, <a href="#parameter-direction"><code>direction</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-sort"><code>sort</code></a></td>
    <td>Lists all global security advisories that match the specified parameters. If no other parameters are defined, the request will return only GitHub-reviewed advisories that are not malware.<br /><br />By default, all responses will exclude advisories for malware, because malware are not standard vulnerabilities. To list advisories for malware, you must include the `type` parameter in your request, with the value `malware`. For more information about the different types of security advisories, see "[About the GitHub Advisory database](https://docs.github.com/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database#about-types-of-security-advisories)."</td>
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
<tr id="parameter-ghsa_id">
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>The GHSA (GitHub Security Advisory) identifier of the advisory.</td>
</tr>
<tr id="parameter-affects">
    <td><CopyableCode code="affects" /></td>
    <td><code></code></td>
    <td>If specified, only return advisories that affect any of `package` or `package@version`. A maximum of 1000 packages can be specified. If the query parameter causes the URL to exceed the maximum URL length supported by your client, you must specify fewer packages.  Example: `affects=package1,package2@1.0.0,package3@2.0.0` or `affects[]=package1&affects[]=package2@1.0.0`</td>
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
<tr id="parameter-cve_id">
    <td><CopyableCode code="cve_id" /></td>
    <td><code>string</code></td>
    <td>If specified, only advisories with this CVE (Common Vulnerabilities and Exposures) identifier will be returned.</td>
</tr>
<tr id="parameter-cwes">
    <td><CopyableCode code="cwes" /></td>
    <td><code></code></td>
    <td>If specified, only advisories with these Common Weakness Enumerations (CWEs) will be returned.  Example: `cwes=79,284,22` or `cwes[]=79&cwes[]=284&cwes[]=22`</td>
</tr>
<tr id="parameter-direction">
    <td><CopyableCode code="direction" /></td>
    <td><code>string</code></td>
    <td>The direction to sort the results by.</td>
</tr>
<tr id="parameter-ecosystem">
    <td><CopyableCode code="ecosystem" /></td>
    <td><code>string</code></td>
    <td>If specified, only advisories for these ecosystems will be returned.</td>
</tr>
<tr id="parameter-epss_percentage">
    <td><CopyableCode code="epss_percentage" /></td>
    <td><code>string</code></td>
    <td>If specified, only return advisories that have an EPSS percentage score that matches the provided value. The EPSS percentage represents the likelihood of a CVE being exploited.</td>
</tr>
<tr id="parameter-epss_percentile">
    <td><CopyableCode code="epss_percentile" /></td>
    <td><code>string</code></td>
    <td>If specified, only return advisories that have an EPSS percentile score that matches the provided value. The EPSS percentile represents the relative rank of the CVE's likelihood of being exploited compared to other CVEs.</td>
</tr>
<tr id="parameter-ghsa_id">
    <td><CopyableCode code="ghsa_id" /></td>
    <td><code>string</code></td>
    <td>If specified, only advisories with this GHSA (GitHub Security Advisory) identifier will be returned.</td>
</tr>
<tr id="parameter-is_withdrawn">
    <td><CopyableCode code="is_withdrawn" /></td>
    <td><code>boolean</code></td>
    <td>Whether to only return advisories that have been withdrawn.</td>
</tr>
<tr id="parameter-modified">
    <td><CopyableCode code="modified" /></td>
    <td><code>string</code></td>
    <td>If specified, only show advisories that were updated or published on a date or date range.  For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-published">
    <td><CopyableCode code="published" /></td>
    <td><code>string</code></td>
    <td>If specified, only return advisories that were published on a date or date range.  For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."</td>
</tr>
<tr id="parameter-severity">
    <td><CopyableCode code="severity" /></td>
    <td><code>string</code></td>
    <td>If specified, only advisories with these severities will be returned.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The property to sort the results by.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>If specified, only advisories of this type will be returned. By default, a request with no other parameters defined will only return reviewed advisories that are not malware.</td>
</tr>
<tr id="parameter-updated">
    <td><CopyableCode code="updated" /></td>
    <td><code>string</code></td>
    <td>If specified, only return advisories that were updated on a date or date range.  For more information on the syntax of the date range, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_global_advisory"
    values={[
        { label: 'get_global_advisory', value: 'get_global_advisory' },
        { label: 'list_global_advisories', value: 'list_global_advisories' }
    ]}
>
<TabItem value="get_global_advisory">

Gets a global security advisory using its GitHub Security Advisory (GHSA) identifier.

```sql
SELECT
cve_id,
ghsa_id,
credits,
cvss,
cvss_severities,
cwes,
description,
epss,
github_reviewed_at,
html_url,
identifiers,
nvd_published_at,
published_at,
references,
repository_advisory_url,
severity,
source_code_location,
summary,
type,
updated_at,
url,
vulnerabilities,
withdrawn_at
FROM github.security_advisories.global_advisories
WHERE ghsa_id = '{{ ghsa_id }}' -- required
;
```
</TabItem>
<TabItem value="list_global_advisories">

Lists all global security advisories that match the specified parameters. If no other parameters are defined, the request will return only GitHub-reviewed advisories that are not malware.<br /><br />By default, all responses will exclude advisories for malware, because malware are not standard vulnerabilities. To list advisories for malware, you must include the `type` parameter in your request, with the value `malware`. For more information about the different types of security advisories, see "[About the GitHub Advisory database](https://docs.github.com/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database#about-types-of-security-advisories)."

```sql
SELECT
cve_id,
ghsa_id,
credits,
cvss,
cvss_severities,
cwes,
description,
epss,
github_reviewed_at,
html_url,
identifiers,
nvd_published_at,
published_at,
references,
repository_advisory_url,
severity,
source_code_location,
summary,
type,
updated_at,
url,
vulnerabilities,
withdrawn_at
FROM github.security_advisories.global_advisories
WHERE ghsa_id = '{{ ghsa_id }}'
AND type = '{{ type }}'
AND cve_id = '{{ cve_id }}'
AND ecosystem = '{{ ecosystem }}'
AND severity = '{{ severity }}'
AND cwes = '{{ cwes }}'
AND is_withdrawn = '{{ is_withdrawn }}'
AND affects = '{{ affects }}'
AND published = '{{ published }}'
AND updated = '{{ updated }}'
AND modified = '{{ modified }}'
AND epss_percentage = '{{ epss_percentage }}'
AND epss_percentile = '{{ epss_percentile }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
AND direction = '{{ direction }}'
AND per_page = '{{ per_page }}'
AND sort = '{{ sort }}'
;
```
</TabItem>
</Tabs>
