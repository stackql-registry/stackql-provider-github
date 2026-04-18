--- 
title: rule_suites
hide_title: false
hide_table_of_contents: false
keywords:
  - rule_suites
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

Creates, updates, deletes, gets or lists a <code>rule_suites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rule_suites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.repos.rule_suites" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repo_rule_suite"
    values={[
        { label: 'get_repo_rule_suite', value: 'get_repo_rule_suite' },
        { label: 'get_org_rule_suite', value: 'get_org_rule_suite' },
        { label: 'get_repo_rule_suites', value: 'get_repo_rule_suites' },
        { label: 'get_org_rule_suites', value: 'get_org_rule_suites' }
    ]}
>
<TabItem value="get_repo_rule_suite">

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
    <td><code>integer</code></td>
    <td>The unique identifier of the rule insight.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_id" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the user.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the repository associated with the rule evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_name" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension.</td>
</tr>
<tr>
    <td><CopyableCode code="after_sha" /></td>
    <td><code>string</code></td>
    <td>The new commit SHA of the ref.</td>
</tr>
<tr>
    <td><CopyableCode code="before_sha" /></td>
    <td><code>string</code></td>
    <td>The previous commit SHA of the ref.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_result" /></td>
    <td><code>string</code></td>
    <td>The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. Null if no rules with `evaluate` enforcement status were run. (pass, fail, bypass)</td>
</tr>
<tr>
    <td><CopyableCode code="pushed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:06:43Z)</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The ref name that the evaluation ran on.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The result of the rule evaluations for rules with the `active` enforcement status. (pass, fail, bypass)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_evaluations" /></td>
    <td><code>array</code></td>
    <td>Details on the evaluated rules.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_org_rule_suite">

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
    <td><code>integer</code></td>
    <td>The unique identifier of the rule insight.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_id" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the user.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the repository associated with the rule evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_name" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension.</td>
</tr>
<tr>
    <td><CopyableCode code="after_sha" /></td>
    <td><code>string</code></td>
    <td>The new commit SHA of the ref.</td>
</tr>
<tr>
    <td><CopyableCode code="before_sha" /></td>
    <td><code>string</code></td>
    <td>The previous commit SHA of the ref.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_result" /></td>
    <td><code>string</code></td>
    <td>The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. Null if no rules with `evaluate` enforcement status were run. (pass, fail, bypass)</td>
</tr>
<tr>
    <td><CopyableCode code="pushed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:06:43Z)</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The ref name that the evaluation ran on.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The result of the rule evaluations for rules with the `active` enforcement status. (pass, fail, bypass)</td>
</tr>
<tr>
    <td><CopyableCode code="rule_evaluations" /></td>
    <td><code>array</code></td>
    <td>Details on the evaluated rules.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_repo_rule_suites">

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
    <td><code>integer</code></td>
    <td>The unique identifier of the rule insight.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_id" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the user.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the repository associated with the rule evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_name" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension.</td>
</tr>
<tr>
    <td><CopyableCode code="after_sha" /></td>
    <td><code>string</code></td>
    <td>The last commit sha in the push evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="before_sha" /></td>
    <td><code>string</code></td>
    <td>The first commit sha before the push evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_result" /></td>
    <td><code>string</code></td>
    <td>The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. (pass, fail, bypass)</td>
</tr>
<tr>
    <td><CopyableCode code="pushed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:06:43Z)</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The ref name that the evaluation ran on.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The result of the rule evaluations for rules with the `active` enforcement status. (pass, fail, bypass)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_org_rule_suites">

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
    <td><code>integer</code></td>
    <td>The unique identifier of the rule insight.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_id" /></td>
    <td><code>integer</code></td>
    <td>The number that identifies the user.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the repository associated with the rule evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="actor_name" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository without the `.git` extension.</td>
</tr>
<tr>
    <td><CopyableCode code="after_sha" /></td>
    <td><code>string</code></td>
    <td>The last commit sha in the push evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="before_sha" /></td>
    <td><code>string</code></td>
    <td>The first commit sha before the push evaluation.</td>
</tr>
<tr>
    <td><CopyableCode code="evaluation_result" /></td>
    <td><code>string</code></td>
    <td>The result of the rule evaluations for rules with the `active` and `evaluate` enforcement statuses, demonstrating whether rules would pass or fail if all rules in the rule suite were `active`. (pass, fail, bypass)</td>
</tr>
<tr>
    <td><CopyableCode code="pushed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2011-01-26T19:06:43Z)</td>
</tr>
<tr>
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The ref name that the evaluation ran on.</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>string</code></td>
    <td>The result of the rule evaluations for rules with the `active` enforcement status. (pass, fail, bypass)</td>
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
    <td><a href="#get_repo_rule_suite"><CopyableCode code="get_repo_rule_suite" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a>, <a href="#parameter-rule_suite_id"><code>rule_suite_id</code></a></td>
    <td></td>
    <td>Gets information about a suite of rule evaluations from within a repository.<br />For more information, see "[Managing rulesets for a repository](https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets)."</td>
</tr>
<tr>
    <td><a href="#get_org_rule_suite"><CopyableCode code="get_org_rule_suite" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-rule_suite_id"><code>rule_suite_id</code></a></td>
    <td></td>
    <td>Gets information about a suite of rule evaluations from within an organization.<br />For more information, see "[Managing rulesets for repositories in your organization](https://docs.github.com/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#viewing-insights-for-rulesets)."</td>
</tr>
<tr>
    <td><a href="#get_repo_rule_suites"><CopyableCode code="get_repo_rule_suites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-repo"><code>repo</code></a></td>
    <td><a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-time_period"><code>time_period</code></a>, <a href="#parameter-actor_name"><code>actor_name</code></a>, <a href="#parameter-rule_suite_result"><code>rule_suite_result</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists suites of rule evaluations at the repository level.<br />For more information, see "[Managing rulesets for a repository](https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets)."</td>
</tr>
<tr>
    <td><a href="#get_org_rule_suites"><CopyableCode code="get_org_rule_suites" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-ref"><code>ref</code></a>, <a href="#parameter-repository_name"><code>repository_name</code></a>, <a href="#parameter-time_period"><code>time_period</code></a>, <a href="#parameter-actor_name"><code>actor_name</code></a>, <a href="#parameter-rule_suite_result"><code>rule_suite_result</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>Lists suites of rule evaluations at the organization level.<br />For more information, see "[Managing rulesets for repositories in your organization](https://docs.github.com/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#viewing-insights-for-rulesets)."</td>
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
<tr id="parameter-rule_suite_id">
    <td><CopyableCode code="rule_suite_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the rule suite result. To get this ID, you can use [GET /repos/&#123;owner&#125;/&#123;repo&#125;/rulesets/rule-suites](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites) for repositories and [GET /orgs/&#123;org&#125;/rulesets/rule-suites](https://docs.github.com/rest/orgs/rule-suites#list-organization-rule-suites) for organizations.</td>
</tr>
<tr id="parameter-actor_name">
    <td><CopyableCode code="actor_name" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account to filter on. When specified, only rule evaluations triggered by this actor will be returned.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>The page number of the results to fetch. For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-per_page">
    <td><CopyableCode code="per_page" /></td>
    <td><code>integer</code></td>
    <td>The number of results per page (max 100). For more information, see "[Using pagination in the REST API](https://docs.github.com/rest/using-the-rest-api/using-pagination-in-the-rest-api)."</td>
</tr>
<tr id="parameter-ref">
    <td><CopyableCode code="ref" /></td>
    <td><code>string</code></td>
    <td>The name of the ref. Cannot contain wildcard characters. Optionally prefix with `refs/heads/` to limit to branches or `refs/tags/` to limit to tags. Omit the prefix to search across all refs. When specified, only rule evaluations triggered for this ref will be returned.</td>
</tr>
<tr id="parameter-repository_name">
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository to filter on.</td>
</tr>
<tr id="parameter-rule_suite_result">
    <td><CopyableCode code="rule_suite_result" /></td>
    <td><code>string</code></td>
    <td>The rule suite results to filter on. When specified, only suites with this result will be returned.</td>
</tr>
<tr id="parameter-time_period">
    <td><CopyableCode code="time_period" /></td>
    <td><code>string</code></td>
    <td>The time period to filter by.  For example, `day` will filter for rule suites that occurred in the past 24 hours, and `week` will filter for rule suites that occurred in the past 7 days (168 hours).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_repo_rule_suite"
    values={[
        { label: 'get_repo_rule_suite', value: 'get_repo_rule_suite' },
        { label: 'get_org_rule_suite', value: 'get_org_rule_suite' },
        { label: 'get_repo_rule_suites', value: 'get_repo_rule_suites' },
        { label: 'get_org_rule_suites', value: 'get_org_rule_suites' }
    ]}
>
<TabItem value="get_repo_rule_suite">

Gets information about a suite of rule evaluations from within a repository.<br />For more information, see "[Managing rulesets for a repository](https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets)."

```sql
SELECT
id,
actor_id,
repository_id,
actor_name,
repository_name,
after_sha,
before_sha,
evaluation_result,
pushed_at,
ref,
result,
rule_evaluations
FROM github.repos.rule_suites
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND rule_suite_id = '{{ rule_suite_id }}' -- required
;
```
</TabItem>
<TabItem value="get_org_rule_suite">

Gets information about a suite of rule evaluations from within an organization.<br />For more information, see "[Managing rulesets for repositories in your organization](https://docs.github.com/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#viewing-insights-for-rulesets)."

```sql
SELECT
id,
actor_id,
repository_id,
actor_name,
repository_name,
after_sha,
before_sha,
evaluation_result,
pushed_at,
ref,
result,
rule_evaluations
FROM github.repos.rule_suites
WHERE org = '{{ org }}' -- required
AND rule_suite_id = '{{ rule_suite_id }}' -- required
;
```
</TabItem>
<TabItem value="get_repo_rule_suites">

Lists suites of rule evaluations at the repository level.<br />For more information, see "[Managing rulesets for a repository](https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/managing-rulesets-for-a-repository#viewing-insights-for-rulesets)."

```sql
SELECT
id,
actor_id,
repository_id,
actor_name,
repository_name,
after_sha,
before_sha,
evaluation_result,
pushed_at,
ref,
result
FROM github.repos.rule_suites
WHERE owner = '{{ owner }}' -- required
AND repo = '{{ repo }}' -- required
AND ref = '{{ ref }}'
AND time_period = '{{ time_period }}'
AND actor_name = '{{ actor_name }}'
AND rule_suite_result = '{{ rule_suite_result }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="get_org_rule_suites">

Lists suites of rule evaluations at the organization level.<br />For more information, see "[Managing rulesets for repositories in your organization](https://docs.github.com/organizations/managing-organization-settings/managing-rulesets-for-repositories-in-your-organization#viewing-insights-for-rulesets)."

```sql
SELECT
id,
actor_id,
repository_id,
actor_name,
repository_name,
after_sha,
before_sha,
evaluation_result,
pushed_at,
ref,
result
FROM github.repos.rule_suites
WHERE org = '{{ org }}' -- required
AND ref = '{{ ref }}'
AND repository_name = '{{ repository_name }}'
AND time_period = '{{ time_period }}'
AND actor_name = '{{ actor_name }}'
AND rule_suite_result = '{{ rule_suite_result }}'
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
</Tabs>
