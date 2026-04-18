--- 
title: orgs
hide_title: false
hide_table_of_contents: false
keywords:
  - orgs
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

Creates, updates, deletes, gets or lists an <code>orgs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="orgs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.orgs.orgs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_for_user', value: 'list_for_user' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td> (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEyOk9yZ2FuaXphdGlvbjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_security_enabled_for_new_repositories" /></td>
    <td><code>boolean</code></td>
    <td>**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.  Whether GitHub Advanced Security is enabled for new repositories and repositories transferred to this organization.  This field is only visible to organization owners or members of a team with the security manager role.</td>
</tr>
<tr>
    <td><CopyableCode code="archived_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: org@example.com)</td>
</tr>
<tr>
    <td><CopyableCode code="blog" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/blog)</td>
</tr>
<tr>
    <td><CopyableCode code="collaborators" /></td>
    <td><code>integer</code></td>
    <td>The number of collaborators on private repositories.  This field may be null if the number of private repositories is over 50,000.</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td> (example: GitHub)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td> (example: 2008-01-14T04:33:35Z)</td>
</tr>
<tr>
    <td><CopyableCode code="default_repository_branch" /></td>
    <td><code>string</code></td>
    <td>The default branch for repositories created in this organization. (example: main)</td>
</tr>
<tr>
    <td><CopyableCode code="default_repository_permission" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_alerts_enabled_for_new_repositories" /></td>
    <td><code>boolean</code></td>
    <td>**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.  Whether Dependabot alerts are automatically enabled for new repositories and repositories transferred to this organization.  This field is only visible to organization owners or members of a team with the security manager role.</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_security_updates_enabled_for_new_repositories" /></td>
    <td><code>boolean</code></td>
    <td>**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.  Whether Dependabot security updates are automatically enabled for new repositories and repositories transferred to this organization.  This field is only visible to organization owners or members of a team with the security manager role.</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_enabled_for_new_repositories" /></td>
    <td><code>boolean</code></td>
    <td>**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.  Whether dependency graph is automatically enabled for new repositories and repositories transferred to this organization.  This field is only visible to organization owners or members of a team with the security manager role.</td>
</tr>
<tr>
    <td><CopyableCode code="deploy_keys_enabled_for_repositories" /></td>
    <td><code>boolean</code></td>
    <td>Controls whether or not deploy keys may be added and used for repositories in the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: A great organization)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_usage" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="display_commenter_full_name_setting_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string (email)</code></td>
    <td> (example: octocat@github.com)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/events)</td>
</tr>
<tr>
    <td><CopyableCode code="followers" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="following" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_organization_projects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_repository_projects" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="hooks_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/hooks)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://github.com/octocat)</td>
</tr>
<tr>
    <td><CopyableCode code="is_verified" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="issues_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/issues)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td> (example: San Francisco)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="members_allowed_repository_creation_type" /></td>
    <td><code>string</code></td>
    <td> (example: all)</td>
</tr>
<tr>
    <td><CopyableCode code="members_can_change_repo_visibility" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_create_internal_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_create_pages" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_create_private_pages" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_create_private_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_create_public_pages" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_create_public_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_create_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_create_teams" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_delete_issues" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_delete_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_fork_private_repositories" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_invite_outside_collaborators" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_can_view_dependency_insights" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="owned_private_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="private_gists" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_gists" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="public_members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/public_members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="public_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="readers_can_create_discussions" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_enabled_for_new_repositories" /></td>
    <td><code>boolean</code></td>
    <td>**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.  Whether secret scanning is automatically enabled for new repositories and repositories transferred to this organization.  This field is only visible to organization owners or members of a team with the security manager role.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_push_protection_custom_link" /></td>
    <td><code>string</code></td>
    <td>An optional URL string to display to contributors who are blocked from pushing a secret. (example: https://github.com/test-org/test-repo/blob/main/README.md)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_push_protection_custom_link_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_push_protection_enabled_for_new_repositories" /></td>
    <td><code>boolean</code></td>
    <td>**Endpoint closing down notice.** Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead.  Whether secret scanning push protection is automatically enabled for new repositories and repositories transferred to this organization.  This field is only visible to organization owners or members of a team with the security manager role.</td>
</tr>
<tr>
    <td><CopyableCode code="total_private_repos" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="twitter_username" /></td>
    <td><code>string</code></td>
    <td> (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="two_factor_requirement_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td> (example: Organization)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github)</td>
</tr>
<tr>
    <td><CopyableCode code="web_commit_signoff_required" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_for_user">

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEyOk9yZ2FuaXphdGlvbjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: A great organization)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/events)</td>
</tr>
<tr>
    <td><CopyableCode code="hooks_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/hooks)</td>
</tr>
<tr>
    <td><CopyableCode code="issues_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/issues)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="public_members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/public_members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td> (example: MDEyOk9yZ2FuaXphdGlvbjE=)</td>
</tr>
<tr>
    <td><CopyableCode code="avatar_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://github.com/images/error/octocat_happy.gif)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td> (example: A great organization)</td>
</tr>
<tr>
    <td><CopyableCode code="events_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/events)</td>
</tr>
<tr>
    <td><CopyableCode code="hooks_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/hooks)</td>
</tr>
<tr>
    <td><CopyableCode code="issues_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/issues)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td> (example: github)</td>
</tr>
<tr>
    <td><CopyableCode code="members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="public_members_url" /></td>
    <td><code>string</code></td>
    <td> (example: https://api.github.com/orgs/github/public_members&#123;/member&#125;)</td>
</tr>
<tr>
    <td><CopyableCode code="repos_url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github/repos)</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td> (example: https://api.github.com/orgs/github)</td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Gets information about an organization.<br /><br />When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, outside collaborators, guest collaborators, repository collaborators, or everyone with access to any repository within the organization to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).<br /><br />To see the full details about an organization, the authenticated user must be an organization owner.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to see the full details about an organization.<br /><br />To see information about an organization's GitHub plan, GitHub Apps need the `Organization plan` permission.</td>
</tr>
<tr>
    <td><a href="#list_for_user"><CopyableCode code="list_for_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-username"><code>username</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-page"><code>page</code></a></td>
    <td>List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.<br /><br />This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/orgs/orgs#list-organizations-for-the-authenticated-user) API instead.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-since"><code>since</code></a>, <a href="#parameter-per_page"><code>per_page</code></a></td>
    <td>Lists all organizations, in the order that they were created.<br /><br />&gt; [!NOTE]<br />&gt; Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of organizations.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Closing down notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).<br /><br />&gt; [!WARNING]<br />&gt; **Closing down notice:** Code security product enablement for new repositories through the organization API is closing down. Please use [code security configurations](https://docs.github.com/rest/code-security/configurations#set-a-code-security-configuration-as-a-default-for-an-organization) to set defaults instead. For more information on setting a default security configuration, see the [changelog](https://github.blog/changelog/2024-07-09-sunsetting-security-settings-defaults-parameters-in-the-organizations-rest-api/).<br /><br />Updates the organization's profile and member privileges.<br /><br />The authenticated user must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Deletes an organization and all its repositories.<br /><br />The organization login will be unavailable for 90 days after deletion.<br /><br />Please review the Terms of Service regarding account deletion before using this endpoint:<br /><br />https://docs.github.com/site-policy/github-terms/github-terms-of-service</td>
</tr>
<tr>
    <td><a href="#enable_or_disable_security_product_on_all_org_repos"><CopyableCode code="enable_or_disable_security_product_on_all_org_repos" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-security_product"><code>security_product</code></a>, <a href="#parameter-enablement"><code>enablement</code></a></td>
    <td></td>
    <td>&gt; [!WARNING]<br />&gt; **Closing down notice:** The ability to enable or disable a security feature for all eligible repositories in an organization is closing down. Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. For more information, see the [changelog](https://github.blog/changelog/2024-07-22-deprecation-of-api-endpoint-to-enable-or-disable-a-security-feature-for-an-organization/).<br /><br />Enables or disables the specified security feature for all eligible repositories in an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."<br /><br />The authenticated user must be an organization owner or be member of a team with the security manager role to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org`, `write:org`, or `repo` scopes to use this endpoint.</td>
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
<tr id="parameter-enablement">
    <td><CopyableCode code="enablement" /></td>
    <td><code>string</code></td>
    <td>The action to take.  `enable_all` means to enable the specified security feature for all repositories in the organization. `disable_all` means to disable the specified security feature for all repositories in the organization.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
</tr>
<tr id="parameter-security_product">
    <td><CopyableCode code="security_product" /></td>
    <td><code>string</code></td>
    <td>The security feature to enable or disable.</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The handle for the GitHub user account.</td>
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
<tr id="parameter-since">
    <td><CopyableCode code="since" /></td>
    <td><code>integer</code></td>
    <td>An organization ID. Only return organizations with an ID greater than this ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_for_user', value: 'list_for_user' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets information about an organization.<br /><br />When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, outside collaborators, guest collaborators, repository collaborators, or everyone with access to any repository within the organization to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).<br /><br />To see the full details about an organization, the authenticated user must be an organization owner.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` scope to see the full details about an organization.<br /><br />To see information about an organization's GitHub plan, GitHub Apps need the `Organization plan` permission.

```sql
SELECT
id,
name,
node_id,
advanced_security_enabled_for_new_repositories,
archived_at,
avatar_url,
billing_email,
blog,
collaborators,
company,
created_at,
default_repository_branch,
default_repository_permission,
dependabot_alerts_enabled_for_new_repositories,
dependabot_security_updates_enabled_for_new_repositories,
dependency_graph_enabled_for_new_repositories,
deploy_keys_enabled_for_repositories,
description,
disk_usage,
display_commenter_full_name_setting_enabled,
email,
events_url,
followers,
following,
has_organization_projects,
has_repository_projects,
hooks_url,
html_url,
is_verified,
issues_url,
location,
login,
members_allowed_repository_creation_type,
members_can_change_repo_visibility,
members_can_create_internal_repositories,
members_can_create_pages,
members_can_create_private_pages,
members_can_create_private_repositories,
members_can_create_public_pages,
members_can_create_public_repositories,
members_can_create_repositories,
members_can_create_teams,
members_can_delete_issues,
members_can_delete_repositories,
members_can_fork_private_repositories,
members_can_invite_outside_collaborators,
members_can_view_dependency_insights,
members_url,
owned_private_repos,
plan,
private_gists,
public_gists,
public_members_url,
public_repos,
readers_can_create_discussions,
repos_url,
secret_scanning_enabled_for_new_repositories,
secret_scanning_push_protection_custom_link,
secret_scanning_push_protection_custom_link_enabled,
secret_scanning_push_protection_enabled_for_new_repositories,
total_private_repos,
twitter_username,
two_factor_requirement_enabled,
type,
updated_at,
url,
web_commit_signoff_required
FROM github.orgs.orgs
WHERE org = '{{ org }}' -- required
;
```
</TabItem>
<TabItem value="list_for_user">

List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.<br /><br />This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/orgs/orgs#list-organizations-for-the-authenticated-user) API instead.

```sql
SELECT
id,
node_id,
avatar_url,
description,
events_url,
hooks_url,
issues_url,
login,
members_url,
public_members_url,
repos_url,
url
FROM github.orgs.orgs
WHERE username = '{{ username }}' -- required
AND per_page = '{{ per_page }}'
AND page = '{{ page }}'
;
```
</TabItem>
<TabItem value="list">

Lists all organizations, in the order that they were created.<br /><br />&gt; [!NOTE]<br />&gt; Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api#using-link-headers) to get the URL for the next page of organizations.

```sql
SELECT
id,
node_id,
avatar_url,
description,
events_url,
hooks_url,
issues_url,
login,
members_url,
public_members_url,
repos_url,
url
FROM github.orgs.orgs
WHERE since = '{{ since }}'
AND per_page = '{{ per_page }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

&gt; [!WARNING]<br />&gt; **Closing down notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).<br /><br />&gt; [!WARNING]<br />&gt; **Closing down notice:** Code security product enablement for new repositories through the organization API is closing down. Please use [code security configurations](https://docs.github.com/rest/code-security/configurations#set-a-code-security-configuration-as-a-default-for-an-organization) to set defaults instead. For more information on setting a default security configuration, see the [changelog](https://github.blog/changelog/2024-07-09-sunsetting-security-settings-defaults-parameters-in-the-organizations-rest-api/).<br /><br />Updates the organization's profile and member privileges.<br /><br />The authenticated user must be an organization owner to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org` or `repo` scope to use this endpoint.

```sql
UPDATE github.orgs.orgs
SET 
billing_email = '{{ billing_email }}',
company = '{{ company }}',
email = '{{ email }}',
twitter_username = '{{ twitter_username }}',
location = '{{ location }}',
name = '{{ name }}',
description = '{{ description }}',
has_organization_projects = {{ has_organization_projects }},
has_repository_projects = {{ has_repository_projects }},
default_repository_permission = '{{ default_repository_permission }}',
members_can_create_repositories = {{ members_can_create_repositories }},
members_can_create_internal_repositories = {{ members_can_create_internal_repositories }},
members_can_create_private_repositories = {{ members_can_create_private_repositories }},
members_can_create_public_repositories = {{ members_can_create_public_repositories }},
members_allowed_repository_creation_type = '{{ members_allowed_repository_creation_type }}',
members_can_create_pages = {{ members_can_create_pages }},
members_can_create_public_pages = {{ members_can_create_public_pages }},
members_can_create_private_pages = {{ members_can_create_private_pages }},
members_can_fork_private_repositories = {{ members_can_fork_private_repositories }},
web_commit_signoff_required = {{ web_commit_signoff_required }},
blog = '{{ blog }}',
advanced_security_enabled_for_new_repositories = {{ advanced_security_enabled_for_new_repositories }},
dependabot_alerts_enabled_for_new_repositories = {{ dependabot_alerts_enabled_for_new_repositories }},
dependabot_security_updates_enabled_for_new_repositories = {{ dependabot_security_updates_enabled_for_new_repositories }},
dependency_graph_enabled_for_new_repositories = {{ dependency_graph_enabled_for_new_repositories }},
secret_scanning_enabled_for_new_repositories = {{ secret_scanning_enabled_for_new_repositories }},
secret_scanning_push_protection_enabled_for_new_repositories = {{ secret_scanning_push_protection_enabled_for_new_repositories }},
secret_scanning_push_protection_custom_link_enabled = {{ secret_scanning_push_protection_custom_link_enabled }},
secret_scanning_push_protection_custom_link = '{{ secret_scanning_push_protection_custom_link }}',
deploy_keys_enabled_for_repositories = {{ deploy_keys_enabled_for_repositories }}
WHERE 
org = '{{ org }}' --required
RETURNING
id,
name,
node_id,
advanced_security_enabled_for_new_repositories,
archived_at,
avatar_url,
billing_email,
blog,
collaborators,
company,
created_at,
default_repository_branch,
default_repository_permission,
dependabot_alerts_enabled_for_new_repositories,
dependabot_security_updates_enabled_for_new_repositories,
dependency_graph_enabled_for_new_repositories,
deploy_keys_enabled_for_repositories,
description,
disk_usage,
display_commenter_full_name_setting_enabled,
email,
events_url,
followers,
following,
has_organization_projects,
has_repository_projects,
hooks_url,
html_url,
is_verified,
issues_url,
location,
login,
members_allowed_repository_creation_type,
members_can_change_repo_visibility,
members_can_create_internal_repositories,
members_can_create_pages,
members_can_create_private_pages,
members_can_create_private_repositories,
members_can_create_public_pages,
members_can_create_public_repositories,
members_can_create_repositories,
members_can_create_teams,
members_can_delete_issues,
members_can_delete_repositories,
members_can_fork_private_repositories,
members_can_invite_outside_collaborators,
members_can_view_dependency_insights,
members_url,
owned_private_repos,
plan,
private_gists,
public_gists,
public_members_url,
public_repos,
readers_can_create_discussions,
repos_url,
secret_scanning_enabled_for_new_repositories,
secret_scanning_push_protection_custom_link,
secret_scanning_push_protection_custom_link_enabled,
secret_scanning_push_protection_enabled_for_new_repositories,
total_private_repos,
twitter_username,
two_factor_requirement_enabled,
type,
updated_at,
url,
web_commit_signoff_required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deletes an organization and all its repositories.<br /><br />The organization login will be unavailable for 90 days after deletion.<br /><br />Please review the Terms of Service regarding account deletion before using this endpoint:<br /><br />https://docs.github.com/site-policy/github-terms/github-terms-of-service

```sql
DELETE FROM github.orgs.orgs
WHERE org = '{{ org }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="enable_or_disable_security_product_on_all_org_repos"
    values={[
        { label: 'enable_or_disable_security_product_on_all_org_repos', value: 'enable_or_disable_security_product_on_all_org_repos' }
    ]}
>
<TabItem value="enable_or_disable_security_product_on_all_org_repos">

&gt; [!WARNING]<br />&gt; **Closing down notice:** The ability to enable or disable a security feature for all eligible repositories in an organization is closing down. Please use [code security configurations](https://docs.github.com/rest/code-security/configurations) instead. For more information, see the [changelog](https://github.blog/changelog/2024-07-22-deprecation-of-api-endpoint-to-enable-or-disable-a-security-feature-for-an-organization/).<br /><br />Enables or disables the specified security feature for all eligible repositories in an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."<br /><br />The authenticated user must be an organization owner or be member of a team with the security manager role to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:org`, `write:org`, or `repo` scopes to use this endpoint.

```sql
EXEC github.orgs.orgs.enable_or_disable_security_product_on_all_org_repos 
@org='{{ org }}' --required, 
@security_product='{{ security_product }}' --required, 
@enablement='{{ enablement }}' --required 
@@json=
'{
"query_suite": "{{ query_suite }}"
}'
;
```
</TabItem>
</Tabs>
