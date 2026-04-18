--- 
title: code_security_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - code_security_configurations
  - code_security
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

Creates, updates, deletes, gets or lists a <code>code_security_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="code_security_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="github.code_security.code_security_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_single_configuration_for_enterprise"
    values={[
        { label: 'get_single_configuration_for_enterprise', value: 'get_single_configuration_for_enterprise' },
        { label: 'get_configuration', value: 'get_configuration' },
        { label: 'get_configurations_for_enterprise', value: 'get_configurations_for_enterprise' },
        { label: 'get_configurations_for_org', value: 'get_configurations_for_org' }
    ]}
>
<TabItem value="get_single_configuration_for_enterprise">

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
    <td>The ID of the code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the code security configuration. Must be unique within the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_security" /></td>
    <td><code>string</code></td>
    <td>The enablement status of GitHub Advanced Security (enabled, disabled, code_security, secret_protection)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_default_setup" /></td>
    <td><code>string</code></td>
    <td>The enablement status of code scanning default setup (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_default_setup_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for code scanning default setup</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of code scanning delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for code scanning</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_alerts" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot alerts (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_security_updates" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot security updates (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependency Graph (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_autosubmit_action" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Automatic dependency submission (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_autosubmit_action_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for Automatic dependency submission</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>The enforcement status for a security configuration (enforced, unenforced)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the configuration</td>
</tr>
<tr>
    <td><CopyableCode code="private_vulnerability_reporting" /></td>
    <td><code>string</code></td>
    <td>The enablement status of private vulnerability reporting (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_bypass" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning delegated bypass (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_bypass_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for secret scanning delegated bypass</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_extended_metadata" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning extended metadata (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_generic_secrets" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Copilot secret scanning (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_non_provider_patterns" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning non-provider patterns (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_push_protection" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning push protection (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_validity_checks" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning validity checks (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td>The type of the code security configuration. (global, organization, enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the configuration</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_configuration">

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
    <td>The ID of the code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the code security configuration. Must be unique within the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_security" /></td>
    <td><code>string</code></td>
    <td>The enablement status of GitHub Advanced Security (enabled, disabled, code_security, secret_protection)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_default_setup" /></td>
    <td><code>string</code></td>
    <td>The enablement status of code scanning default setup (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_default_setup_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for code scanning default setup</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of code scanning delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for code scanning</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_alerts" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot alerts (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_security_updates" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot security updates (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependency Graph (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_autosubmit_action" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Automatic dependency submission (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_autosubmit_action_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for Automatic dependency submission</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>The enforcement status for a security configuration (enforced, unenforced)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the configuration</td>
</tr>
<tr>
    <td><CopyableCode code="private_vulnerability_reporting" /></td>
    <td><code>string</code></td>
    <td>The enablement status of private vulnerability reporting (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_bypass" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning delegated bypass (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_bypass_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for secret scanning delegated bypass</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_extended_metadata" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning extended metadata (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_generic_secrets" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Copilot secret scanning (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_non_provider_patterns" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning non-provider patterns (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_push_protection" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning push protection (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_validity_checks" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning validity checks (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td>The type of the code security configuration. (global, organization, enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the configuration</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_configurations_for_enterprise">

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
    <td>The ID of the code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the code security configuration. Must be unique within the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_security" /></td>
    <td><code>string</code></td>
    <td>The enablement status of GitHub Advanced Security (enabled, disabled, code_security, secret_protection)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_default_setup" /></td>
    <td><code>string</code></td>
    <td>The enablement status of code scanning default setup (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_default_setup_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for code scanning default setup</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of code scanning delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for code scanning</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_alerts" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot alerts (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_security_updates" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot security updates (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependency Graph (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_autosubmit_action" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Automatic dependency submission (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_autosubmit_action_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for Automatic dependency submission</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>The enforcement status for a security configuration (enforced, unenforced)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the configuration</td>
</tr>
<tr>
    <td><CopyableCode code="private_vulnerability_reporting" /></td>
    <td><code>string</code></td>
    <td>The enablement status of private vulnerability reporting (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_bypass" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning delegated bypass (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_bypass_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for secret scanning delegated bypass</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_extended_metadata" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning extended metadata (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_generic_secrets" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Copilot secret scanning (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_non_provider_patterns" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning non-provider patterns (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_push_protection" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning push protection (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_validity_checks" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning validity checks (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td>The type of the code security configuration. (global, organization, enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the configuration</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_configurations_for_org">

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
    <td>The ID of the code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the code security configuration. Must be unique within the organization.</td>
</tr>
<tr>
    <td><CopyableCode code="advanced_security" /></td>
    <td><code>string</code></td>
    <td>The enablement status of GitHub Advanced Security (enabled, disabled, code_security, secret_protection)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_default_setup" /></td>
    <td><code>string</code></td>
    <td>The enablement status of code scanning default setup (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_default_setup_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for code scanning default setup</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of code scanning delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="code_scanning_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for code scanning</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_alerts" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot alerts (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependabot_security_updates" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependabot security updates (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Dependency Graph (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_autosubmit_action" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Automatic dependency submission (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="dependency_graph_autosubmit_action_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for Automatic dependency submission</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the code security configuration</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>The enforcement status for a security configuration (enforced, unenforced)</td>
</tr>
<tr>
    <td><CopyableCode code="html_url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the configuration</td>
</tr>
<tr>
    <td><CopyableCode code="private_vulnerability_reporting" /></td>
    <td><code>string</code></td>
    <td>The enablement status of private vulnerability reporting (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_alert_dismissal" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning delegated alert dismissal (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_bypass" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning delegated bypass (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_delegated_bypass_options" /></td>
    <td><code>object</code></td>
    <td>Feature options for secret scanning delegated bypass</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_extended_metadata" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning extended metadata (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_generic_secrets" /></td>
    <td><code>string</code></td>
    <td>The enablement status of Copilot secret scanning (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_non_provider_patterns" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning non-provider patterns (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_push_protection" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning push protection (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_scanning_validity_checks" /></td>
    <td><code>string</code></td>
    <td>The enablement status of secret scanning validity checks (enabled, disabled, not_set)</td>
</tr>
<tr>
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td>The type of the code security configuration. (global, organization, enterprise)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string (uri)</code></td>
    <td>The URL of the configuration</td>
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
    <td><a href="#get_single_configuration_for_enterprise"><CopyableCode code="get_single_configuration_for_enterprise" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td></td>
    <td>Gets a code security configuration available in an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_configuration"><CopyableCode code="get_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td></td>
    <td>Gets a code security configuration available in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_configurations_for_enterprise"><CopyableCode code="get_configurations_for_enterprise" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a></td>
    <td><a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>Lists all code security configurations available in an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#get_configurations_for_org"><CopyableCode code="get_configurations_for_org" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td><a href="#parameter-target_type"><code>target_type</code></a>, <a href="#parameter-per_page"><code>per_page</code></a>, <a href="#parameter-before"><code>before</code></a>, <a href="#parameter-after"><code>after</code></a></td>
    <td>Lists all code security configurations available in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#attach_enterprise_configuration"><CopyableCode code="attach_enterprise_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Attaches an enterprise code security configuration to repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration.<br /><br />If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled.<br /><br />The authenticated user must be an administrator for the enterprise to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#attach_configuration"><CopyableCode code="attach_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a>, <a href="#parameter-scope"><code>scope</code></a></td>
    <td></td>
    <td>Attach a code security configuration to a set of repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration.<br /><br />If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_configuration_for_enterprise"><CopyableCode code="create_configuration_for_enterprise" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Creates a code security configuration in an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#create_configuration"><CopyableCode code="create_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Creates a code security configuration in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_enterprise_configuration"><CopyableCode code="update_enterprise_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td></td>
    <td>Updates a code security configuration in an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#update_configuration"><CopyableCode code="update_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td></td>
    <td>Updates a code security configuration in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_configuration_as_default_for_enterprise"><CopyableCode code="set_configuration_as_default_for_enterprise" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td></td>
    <td>Sets a code security configuration as a default to be applied to new repositories in your enterprise.<br /><br />This configuration will be applied by default to the matching repository type when created, but only for organizations within the enterprise that do not already have a default code security configuration set.<br /><br />The authenticated user must be an administrator for the enterprise to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#set_configuration_as_default"><CopyableCode code="set_configuration_as_default" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td></td>
    <td>Sets a code security configuration as a default to be applied to new repositories in your organization.<br /><br />This configuration will be applied to the matching repository type (all, none, public, private and internal) by default when they are created.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_for_enterprise"><CopyableCode code="delete_configuration_for_enterprise" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-enterprise"><code>enterprise</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td></td>
    <td>Deletes a code security configuration from an enterprise.<br />Repositories attached to the configuration will retain their settings but will no longer be associated with<br />the configuration.<br /><br />The authenticated user must be an administrator for the enterprise to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#delete_configuration"><CopyableCode code="delete_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a></td>
    <td></td>
    <td>Deletes the desired code security configuration from an organization.<br />Repositories attached to the configuration will retain their settings but will no longer be associated with<br />the configuration.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
</tr>
<tr>
    <td><a href="#detach_configuration"><CopyableCode code="detach_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-org"><code>org</code></a></td>
    <td></td>
    <td>Detach code security configuration(s) from a set of repositories.<br />Repositories will retain their settings but will no longer be associated with the configuration.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.</td>
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
<tr id="parameter-configuration_id">
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>integer</code></td>
    <td>The unique identifier of the code security configuration.</td>
</tr>
<tr id="parameter-enterprise">
    <td><CopyableCode code="enterprise" /></td>
    <td><code>string</code></td>
    <td>The slug version of the enterprise name.</td>
</tr>
<tr id="parameter-org">
    <td><CopyableCode code="org" /></td>
    <td><code>string</code></td>
    <td>The organization name. The name is not case sensitive.</td>
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
<tr id="parameter-target_type">
    <td><CopyableCode code="target_type" /></td>
    <td><code>string</code></td>
    <td>The target type of the code security configuration</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_single_configuration_for_enterprise"
    values={[
        { label: 'get_single_configuration_for_enterprise', value: 'get_single_configuration_for_enterprise' },
        { label: 'get_configuration', value: 'get_configuration' },
        { label: 'get_configurations_for_enterprise', value: 'get_configurations_for_enterprise' },
        { label: 'get_configurations_for_org', value: 'get_configurations_for_org' }
    ]}
>
<TabItem value="get_single_configuration_for_enterprise">

Gets a code security configuration available in an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.

```sql
SELECT
id,
name,
advanced_security,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
code_scanning_options,
created_at,
dependabot_alerts,
dependabot_delegated_alert_dismissal,
dependabot_security_updates,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
description,
enforcement,
html_url,
private_vulnerability_reporting,
secret_scanning,
secret_scanning_delegated_alert_dismissal,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_extended_metadata,
secret_scanning_generic_secrets,
secret_scanning_non_provider_patterns,
secret_scanning_push_protection,
secret_scanning_validity_checks,
target_type,
updated_at,
url
FROM github.code_security.code_security_configurations
WHERE enterprise = '{{ enterprise }}' -- required
AND configuration_id = '{{ configuration_id }}' -- required
;
```
</TabItem>
<TabItem value="get_configuration">

Gets a code security configuration available in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
SELECT
id,
name,
advanced_security,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
code_scanning_options,
created_at,
dependabot_alerts,
dependabot_delegated_alert_dismissal,
dependabot_security_updates,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
description,
enforcement,
html_url,
private_vulnerability_reporting,
secret_scanning,
secret_scanning_delegated_alert_dismissal,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_extended_metadata,
secret_scanning_generic_secrets,
secret_scanning_non_provider_patterns,
secret_scanning_push_protection,
secret_scanning_validity_checks,
target_type,
updated_at,
url
FROM github.code_security.code_security_configurations
WHERE org = '{{ org }}' -- required
AND configuration_id = '{{ configuration_id }}' -- required
;
```
</TabItem>
<TabItem value="get_configurations_for_enterprise">

Lists all code security configurations available in an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:enterprise` scope to use this endpoint.

```sql
SELECT
id,
name,
advanced_security,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
code_scanning_options,
created_at,
dependabot_alerts,
dependabot_delegated_alert_dismissal,
dependabot_security_updates,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
description,
enforcement,
html_url,
private_vulnerability_reporting,
secret_scanning,
secret_scanning_delegated_alert_dismissal,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_extended_metadata,
secret_scanning_generic_secrets,
secret_scanning_non_provider_patterns,
secret_scanning_push_protection,
secret_scanning_validity_checks,
target_type,
updated_at,
url
FROM github.code_security.code_security_configurations
WHERE enterprise = '{{ enterprise }}' -- required
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
;
```
</TabItem>
<TabItem value="get_configurations_for_org">

Lists all code security configurations available in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `read:org` scope to use this endpoint.

```sql
SELECT
id,
name,
advanced_security,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
code_scanning_options,
created_at,
dependabot_alerts,
dependabot_delegated_alert_dismissal,
dependabot_security_updates,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
description,
enforcement,
html_url,
private_vulnerability_reporting,
secret_scanning,
secret_scanning_delegated_alert_dismissal,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_extended_metadata,
secret_scanning_generic_secrets,
secret_scanning_non_provider_patterns,
secret_scanning_push_protection,
secret_scanning_validity_checks,
target_type,
updated_at,
url
FROM github.code_security.code_security_configurations
WHERE org = '{{ org }}' -- required
AND target_type = '{{ target_type }}'
AND per_page = '{{ per_page }}'
AND before = '{{ before }}'
AND after = '{{ after }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="attach_enterprise_configuration"
    values={[
        { label: 'attach_enterprise_configuration', value: 'attach_enterprise_configuration' },
        { label: 'attach_configuration', value: 'attach_configuration' },
        { label: 'create_configuration_for_enterprise', value: 'create_configuration_for_enterprise' },
        { label: 'create_configuration', value: 'create_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="attach_enterprise_configuration">

Attaches an enterprise code security configuration to repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration.<br /><br />If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled.<br /><br />The authenticated user must be an administrator for the enterprise to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
INSERT INTO github.code_security.code_security_configurations (
scope,
enterprise,
configuration_id
)
SELECT 
'{{ scope }}' /* required */,
'{{ enterprise }}',
'{{ configuration_id }}'
;
```
</TabItem>
<TabItem value="attach_configuration">

Attach a code security configuration to a set of repositories. If the repositories specified are already attached to a configuration, they will be re-attached to the provided configuration.<br /><br />If insufficient GHAS licenses are available to attach the configuration to a repository, only free features will be enabled.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
INSERT INTO github.code_security.code_security_configurations (
scope,
selected_repository_ids,
org,
configuration_id
)
SELECT 
'{{ scope }}' /* required */,
'{{ selected_repository_ids }}',
'{{ org }}',
'{{ configuration_id }}'
;
```
</TabItem>
<TabItem value="create_configuration_for_enterprise">

Creates a code security configuration in an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
INSERT INTO github.code_security.code_security_configurations (
name,
description,
advanced_security,
code_security,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
dependabot_alerts,
dependabot_security_updates,
code_scanning_options,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
secret_protection,
secret_scanning,
secret_scanning_push_protection,
secret_scanning_validity_checks,
secret_scanning_non_provider_patterns,
secret_scanning_generic_secrets,
secret_scanning_delegated_alert_dismissal,
secret_scanning_extended_metadata,
private_vulnerability_reporting,
enforcement,
enterprise
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}' /* required */,
'{{ advanced_security }}',
'{{ code_security }}',
'{{ dependency_graph }}',
'{{ dependency_graph_autosubmit_action }}',
'{{ dependency_graph_autosubmit_action_options }}',
'{{ dependabot_alerts }}',
'{{ dependabot_security_updates }}',
'{{ code_scanning_options }}',
'{{ code_scanning_default_setup }}',
'{{ code_scanning_default_setup_options }}',
'{{ code_scanning_delegated_alert_dismissal }}',
'{{ secret_protection }}',
'{{ secret_scanning }}',
'{{ secret_scanning_push_protection }}',
'{{ secret_scanning_validity_checks }}',
'{{ secret_scanning_non_provider_patterns }}',
'{{ secret_scanning_generic_secrets }}',
'{{ secret_scanning_delegated_alert_dismissal }}',
'{{ secret_scanning_extended_metadata }}',
'{{ private_vulnerability_reporting }}',
'{{ enforcement }}',
'{{ enterprise }}'
RETURNING
id,
name,
advanced_security,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
code_scanning_options,
created_at,
dependabot_alerts,
dependabot_delegated_alert_dismissal,
dependabot_security_updates,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
description,
enforcement,
html_url,
private_vulnerability_reporting,
secret_scanning,
secret_scanning_delegated_alert_dismissal,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_extended_metadata,
secret_scanning_generic_secrets,
secret_scanning_non_provider_patterns,
secret_scanning_push_protection,
secret_scanning_validity_checks,
target_type,
updated_at,
url
;
```
</TabItem>
<TabItem value="create_configuration">

Creates a code security configuration in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
INSERT INTO github.code_security.code_security_configurations (
name,
description,
advanced_security,
code_security,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
dependabot_alerts,
dependabot_security_updates,
dependabot_delegated_alert_dismissal,
code_scanning_options,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
secret_protection,
secret_scanning,
secret_scanning_push_protection,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_validity_checks,
secret_scanning_non_provider_patterns,
secret_scanning_generic_secrets,
secret_scanning_delegated_alert_dismissal,
secret_scanning_extended_metadata,
private_vulnerability_reporting,
enforcement,
org
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}' /* required */,
'{{ advanced_security }}',
'{{ code_security }}',
'{{ dependency_graph }}',
'{{ dependency_graph_autosubmit_action }}',
'{{ dependency_graph_autosubmit_action_options }}',
'{{ dependabot_alerts }}',
'{{ dependabot_security_updates }}',
'{{ dependabot_delegated_alert_dismissal }}',
'{{ code_scanning_options }}',
'{{ code_scanning_default_setup }}',
'{{ code_scanning_default_setup_options }}',
'{{ code_scanning_delegated_alert_dismissal }}',
'{{ secret_protection }}',
'{{ secret_scanning }}',
'{{ secret_scanning_push_protection }}',
'{{ secret_scanning_delegated_bypass }}',
'{{ secret_scanning_delegated_bypass_options }}',
'{{ secret_scanning_validity_checks }}',
'{{ secret_scanning_non_provider_patterns }}',
'{{ secret_scanning_generic_secrets }}',
'{{ secret_scanning_delegated_alert_dismissal }}',
'{{ secret_scanning_extended_metadata }}',
'{{ private_vulnerability_reporting }}',
'{{ enforcement }}',
'{{ org }}'
RETURNING
id,
name,
advanced_security,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
code_scanning_options,
created_at,
dependabot_alerts,
dependabot_delegated_alert_dismissal,
dependabot_security_updates,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
description,
enforcement,
html_url,
private_vulnerability_reporting,
secret_scanning,
secret_scanning_delegated_alert_dismissal,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_extended_metadata,
secret_scanning_generic_secrets,
secret_scanning_non_provider_patterns,
secret_scanning_push_protection,
secret_scanning_validity_checks,
target_type,
updated_at,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: code_security_configurations
  props:
    - name: enterprise
      value: "{{ enterprise }}"
      description: Required parameter for the code_security_configurations resource.
    - name: configuration_id
      value: {{ configuration_id }}
      description: Required parameter for the code_security_configurations resource.
    - name: org
      value: "{{ org }}"
      description: Required parameter for the code_security_configurations resource.
    - name: scope
      value: "{{ scope }}"
      description: |
        The type of repositories to attach the configuration to. \`selected\` means the configuration will be attached to only the repositories specified by \`selected_repository_ids\`
      valid_values: ['all', 'all_without_configurations', 'public', 'private_or_internal', 'selected']
    - name: selected_repository_ids
      value:
        - {{ selected_repository_ids }}
      description: |
        An array of repository IDs to attach the configuration to. You can only provide a list of repository ids when the \`scope\` is set to \`selected\`.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the code security configuration. Must be unique within the organization.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the code security configuration
    - name: advanced_security
      value: "{{ advanced_security }}"
      description: |
        The enablement status of GitHub Advanced Security features. \`enabled\` will enable both Code Security and Secret Protection features.
        > [!WARNING]
        > \`code_security\` and \`secret_protection\` are deprecated values for this field. Prefer the individual \`code_security\` and \`secret_protection\` fields to set the status of these features.
      valid_values: ['enabled', 'disabled', 'code_security', 'secret_protection']
      default: disabled
    - name: code_security
      value: "{{ code_security }}"
      description: |
        The enablement status of GitHub Code Security features.
      valid_values: ['enabled', 'disabled', 'not_set']
    - name: dependency_graph
      value: "{{ dependency_graph }}"
      description: |
        The enablement status of Dependency Graph
      valid_values: ['enabled', 'disabled', 'not_set']
      default: enabled
    - name: dependency_graph_autosubmit_action
      value: "{{ dependency_graph_autosubmit_action }}"
      description: |
        The enablement status of Automatic dependency submission
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: dependency_graph_autosubmit_action_options
      description: |
        Feature options for Automatic dependency submission
      value:
        labeled_runners: {{ labeled_runners }}
    - name: dependabot_alerts
      value: "{{ dependabot_alerts }}"
      description: |
        The enablement status of Dependabot alerts
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: dependabot_security_updates
      value: "{{ dependabot_security_updates }}"
      description: |
        The enablement status of Dependabot security updates
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: code_scanning_options
      description: |
        Security Configuration feature options for code scanning
      value:
        allow_advanced: {{ allow_advanced }}
    - name: code_scanning_default_setup
      value: "{{ code_scanning_default_setup }}"
      description: |
        The enablement status of code scanning default setup
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: code_scanning_default_setup_options
      description: |
        Feature options for code scanning default setup
      value:
        runner_type: "{{ runner_type }}"
        runner_label: "{{ runner_label }}"
    - name: code_scanning_delegated_alert_dismissal
      value: "{{ code_scanning_delegated_alert_dismissal }}"
      description: |
        The enablement status of code scanning delegated alert dismissal
      valid_values: ['enabled', 'disabled', 'not_set']
      default: not_set
    - name: secret_protection
      value: "{{ secret_protection }}"
      description: |
        The enablement status of GitHub Secret Protection features.
      valid_values: ['enabled', 'disabled', 'not_set']
    - name: secret_scanning
      value: "{{ secret_scanning }}"
      description: |
        The enablement status of secret scanning
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: secret_scanning_push_protection
      value: "{{ secret_scanning_push_protection }}"
      description: |
        The enablement status of secret scanning push protection
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: secret_scanning_validity_checks
      value: "{{ secret_scanning_validity_checks }}"
      description: |
        The enablement status of secret scanning validity checks
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: secret_scanning_non_provider_patterns
      value: "{{ secret_scanning_non_provider_patterns }}"
      description: |
        The enablement status of secret scanning non provider patterns
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: secret_scanning_generic_secrets
      value: "{{ secret_scanning_generic_secrets }}"
      description: |
        The enablement status of Copilot secret scanning
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: secret_scanning_delegated_alert_dismissal
      value: "{{ secret_scanning_delegated_alert_dismissal }}"
      description: |
        The enablement status of secret scanning delegated alert dismissal
      valid_values: ['enabled', 'disabled', 'not_set']
    - name: secret_scanning_extended_metadata
      value: "{{ secret_scanning_extended_metadata }}"
      description: |
        The enablement status of secret scanning extended metadata
      valid_values: ['enabled', 'disabled', 'not_set']
    - name: private_vulnerability_reporting
      value: "{{ private_vulnerability_reporting }}"
      description: |
        The enablement status of private vulnerability reporting
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: enforcement
      value: "{{ enforcement }}"
      description: |
        The enforcement status for a security configuration
      valid_values: ['enforced', 'unenforced']
      default: enforced
    - name: dependabot_delegated_alert_dismissal
      value: "{{ dependabot_delegated_alert_dismissal }}"
      description: |
        The enablement status of Dependabot delegated alert dismissal. Requires Dependabot alerts to be enabled.
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: secret_scanning_delegated_bypass
      value: "{{ secret_scanning_delegated_bypass }}"
      description: |
        The enablement status of secret scanning delegated bypass
      valid_values: ['enabled', 'disabled', 'not_set']
      default: disabled
    - name: secret_scanning_delegated_bypass_options
      description: |
        Feature options for secret scanning delegated bypass
      value:
        reviewers:
          - reviewer_id: {{ reviewer_id }}
            reviewer_type: "{{ reviewer_type }}"
            mode: "{{ mode }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_enterprise_configuration"
    values={[
        { label: 'update_enterprise_configuration', value: 'update_enterprise_configuration' },
        { label: 'update_configuration', value: 'update_configuration' }
    ]}
>
<TabItem value="update_enterprise_configuration">

Updates a code security configuration in an enterprise.<br /><br />The authenticated user must be an administrator of the enterprise in order to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
UPDATE github.code_security.code_security_configurations
SET 
name = '{{ name }}',
description = '{{ description }}',
advanced_security = '{{ advanced_security }}',
code_security = '{{ code_security }}',
dependency_graph = '{{ dependency_graph }}',
dependency_graph_autosubmit_action = '{{ dependency_graph_autosubmit_action }}',
dependency_graph_autosubmit_action_options = '{{ dependency_graph_autosubmit_action_options }}',
dependabot_alerts = '{{ dependabot_alerts }}',
dependabot_security_updates = '{{ dependabot_security_updates }}',
code_scanning_default_setup = '{{ code_scanning_default_setup }}',
code_scanning_default_setup_options = '{{ code_scanning_default_setup_options }}',
code_scanning_options = '{{ code_scanning_options }}',
code_scanning_delegated_alert_dismissal = '{{ code_scanning_delegated_alert_dismissal }}',
secret_protection = '{{ secret_protection }}',
secret_scanning = '{{ secret_scanning }}',
secret_scanning_push_protection = '{{ secret_scanning_push_protection }}',
secret_scanning_validity_checks = '{{ secret_scanning_validity_checks }}',
secret_scanning_non_provider_patterns = '{{ secret_scanning_non_provider_patterns }}',
secret_scanning_generic_secrets = '{{ secret_scanning_generic_secrets }}',
secret_scanning_delegated_alert_dismissal = '{{ secret_scanning_delegated_alert_dismissal }}',
secret_scanning_extended_metadata = '{{ secret_scanning_extended_metadata }}',
private_vulnerability_reporting = '{{ private_vulnerability_reporting }}',
enforcement = '{{ enforcement }}'
WHERE 
enterprise = '{{ enterprise }}' --required
AND configuration_id = '{{ configuration_id }}' --required
RETURNING
id,
name,
advanced_security,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
code_scanning_options,
created_at,
dependabot_alerts,
dependabot_delegated_alert_dismissal,
dependabot_security_updates,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
description,
enforcement,
html_url,
private_vulnerability_reporting,
secret_scanning,
secret_scanning_delegated_alert_dismissal,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_extended_metadata,
secret_scanning_generic_secrets,
secret_scanning_non_provider_patterns,
secret_scanning_push_protection,
secret_scanning_validity_checks,
target_type,
updated_at,
url;
```
</TabItem>
<TabItem value="update_configuration">

Updates a code security configuration in an organization.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
UPDATE github.code_security.code_security_configurations
SET 
name = '{{ name }}',
description = '{{ description }}',
advanced_security = '{{ advanced_security }}',
code_security = '{{ code_security }}',
dependency_graph = '{{ dependency_graph }}',
dependency_graph_autosubmit_action = '{{ dependency_graph_autosubmit_action }}',
dependency_graph_autosubmit_action_options = '{{ dependency_graph_autosubmit_action_options }}',
dependabot_alerts = '{{ dependabot_alerts }}',
dependabot_security_updates = '{{ dependabot_security_updates }}',
dependabot_delegated_alert_dismissal = '{{ dependabot_delegated_alert_dismissal }}',
code_scanning_default_setup = '{{ code_scanning_default_setup }}',
code_scanning_default_setup_options = '{{ code_scanning_default_setup_options }}',
code_scanning_options = '{{ code_scanning_options }}',
code_scanning_delegated_alert_dismissal = '{{ code_scanning_delegated_alert_dismissal }}',
secret_protection = '{{ secret_protection }}',
secret_scanning = '{{ secret_scanning }}',
secret_scanning_push_protection = '{{ secret_scanning_push_protection }}',
secret_scanning_delegated_bypass = '{{ secret_scanning_delegated_bypass }}',
secret_scanning_delegated_bypass_options = '{{ secret_scanning_delegated_bypass_options }}',
secret_scanning_validity_checks = '{{ secret_scanning_validity_checks }}',
secret_scanning_non_provider_patterns = '{{ secret_scanning_non_provider_patterns }}',
secret_scanning_generic_secrets = '{{ secret_scanning_generic_secrets }}',
secret_scanning_delegated_alert_dismissal = '{{ secret_scanning_delegated_alert_dismissal }}',
secret_scanning_extended_metadata = '{{ secret_scanning_extended_metadata }}',
private_vulnerability_reporting = '{{ private_vulnerability_reporting }}',
enforcement = '{{ enforcement }}'
WHERE 
org = '{{ org }}' --required
AND configuration_id = '{{ configuration_id }}' --required
RETURNING
id,
name,
advanced_security,
code_scanning_default_setup,
code_scanning_default_setup_options,
code_scanning_delegated_alert_dismissal,
code_scanning_options,
created_at,
dependabot_alerts,
dependabot_delegated_alert_dismissal,
dependabot_security_updates,
dependency_graph,
dependency_graph_autosubmit_action,
dependency_graph_autosubmit_action_options,
description,
enforcement,
html_url,
private_vulnerability_reporting,
secret_scanning,
secret_scanning_delegated_alert_dismissal,
secret_scanning_delegated_bypass,
secret_scanning_delegated_bypass_options,
secret_scanning_extended_metadata,
secret_scanning_generic_secrets,
secret_scanning_non_provider_patterns,
secret_scanning_push_protection,
secret_scanning_validity_checks,
target_type,
updated_at,
url;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="set_configuration_as_default_for_enterprise"
    values={[
        { label: 'set_configuration_as_default_for_enterprise', value: 'set_configuration_as_default_for_enterprise' },
        { label: 'set_configuration_as_default', value: 'set_configuration_as_default' }
    ]}
>
<TabItem value="set_configuration_as_default_for_enterprise">

Sets a code security configuration as a default to be applied to new repositories in your enterprise.<br /><br />This configuration will be applied by default to the matching repository type when created, but only for organizations within the enterprise that do not already have a default code security configuration set.<br /><br />The authenticated user must be an administrator for the enterprise to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
REPLACE github.code_security.code_security_configurations
SET 
default_for_new_repos = '{{ default_for_new_repos }}'
WHERE 
enterprise = '{{ enterprise }}' --required
AND configuration_id = '{{ configuration_id }}' --required
RETURNING
configuration,
default_for_new_repos;
```
</TabItem>
<TabItem value="set_configuration_as_default">

Sets a code security configuration as a default to be applied to new repositories in your organization.<br /><br />This configuration will be applied to the matching repository type (all, none, public, private and internal) by default when they are created.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
REPLACE github.code_security.code_security_configurations
SET 
default_for_new_repos = '{{ default_for_new_repos }}'
WHERE 
org = '{{ org }}' --required
AND configuration_id = '{{ configuration_id }}' --required
RETURNING
configuration,
default_for_new_repos;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_for_enterprise"
    values={[
        { label: 'delete_configuration_for_enterprise', value: 'delete_configuration_for_enterprise' },
        { label: 'delete_configuration', value: 'delete_configuration' },
        { label: 'detach_configuration', value: 'detach_configuration' }
    ]}
>
<TabItem value="delete_configuration_for_enterprise">

Deletes a code security configuration from an enterprise.<br />Repositories attached to the configuration will retain their settings but will no longer be associated with<br />the configuration.<br /><br />The authenticated user must be an administrator for the enterprise to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `admin:enterprise` scope to use this endpoint.

```sql
DELETE FROM github.code_security.code_security_configurations
WHERE enterprise = '{{ enterprise }}' --required
AND configuration_id = '{{ configuration_id }}' --required
;
```
</TabItem>
<TabItem value="delete_configuration">

Deletes the desired code security configuration from an organization.<br />Repositories attached to the configuration will retain their settings but will no longer be associated with<br />the configuration.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
DELETE FROM github.code_security.code_security_configurations
WHERE org = '{{ org }}' --required
AND configuration_id = '{{ configuration_id }}' --required
;
```
</TabItem>
<TabItem value="detach_configuration">

Detach code security configuration(s) from a set of repositories.<br />Repositories will retain their settings but will no longer be associated with the configuration.<br /><br />The authenticated user must be an administrator or security manager for the organization to use this endpoint.<br /><br />OAuth app tokens and personal access tokens (classic) need the `write:org` scope to use this endpoint.

```sql
DELETE FROM github.code_security.code_security_configurations
WHERE org = '{{ org }}' --required
;
```
</TabItem>
</Tabs>
