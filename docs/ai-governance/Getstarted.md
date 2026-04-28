---
id: Getstarted
title: Get Started
sidebar_label: Get Started
---

# Getting Started with Infotechtion AI Governance

Welcome to Infotechtion's AI Governance platform. This guide will walk you through the step-by-step process to enable AI governance capabilities in your organization, starting with the **AI Governance Databot** — your central hub for detecting AI usage, identifying sensitive data at risk, and managing compliance.

## Overview: Your AI Governance Journey

The Infotechtion AI Governance platform enables you to:

1. **Discover** all AI agents and tools in use across your organization
2. **Identify** sensitive data being accessed or transferred to AI systems
3. **Analyze** risks associated with AI usage patterns
4. **Report** on compliance status and governance posture
5. **Control** AI behavior through policies (roadmap: Agentic Operations)

The entire process is managed through the **AI Governance Databot** — a unified interface where authorized auditors and governance teams interact with findings and manage AI governance policies.

## Prerequisites

Before getting started, ensure you have:

- **Organization Admin Access** or delegated governance permissions
- Access to your **Microsoft 365, Azure, or AWS environments** (depending on where AI agents are deployed)
- **Telemetry and Audit Log permissions** in your tenant
- A designated **AI Governance team** or stakeholder group

## Step 1: Connect Your Data Sources

The first step to AI governance is ensuring the platform can see your data landscape. This requires connecting your organization's data repositories and telemetry sources to the Infotechtion SaaS platform.

### 1.1 Access Platform Configuration

1. Log into the **Infotechtion AI Governance Portal**
2. Navigate to **Settings** → **Data Sources**
3. Click **+ Add Data Source**

### 1.2 Select Your Environment

Choose the platforms where AI agents may be operating:

- **Microsoft 365** (Microsoft Teams, OneDrive, SharePoint, Exchange)
- **Azure AI Foundry** (Azure OpenAI, Copilot, Custom Models)
- **AWS** (Bedrock, SageMaker, Custom LLMs)
- **Third-Party AI Tools** (ChatGPT, Claude, Custom Integrations)
- **On-Premises Systems** (if applicable)

### 1.3 Authorize Platform Access

For each data source, authorize Infotechtion to:

- **Scan and Index**: Discover all AI agents and LLMs in use
- **Collect Telemetry**: Gather logs of AI interactions and data access patterns
- **Classify Data**: Identify and label sensitive data (PII, PHI, Trade Secrets)
- **Monitor Audit Trails**: Track all activities related to AI usage

**Authorization Method:**
- Use OAuth 2.0 or Service Principal authentication
- Assign minimal required permissions (principle of least privilege)
- Review and approve requested scopes

### 1.4 Verify Connection Status

Once authorized:

1. Click **Test Connection** to verify authentication
2. Wait for initial data ingestion (typically 15-30 minutes for first scan)
3. Confirm **Status: Connected** appears in green

## Step 2: Enable Telemetry Collection

Telemetry collection allows Infotechtion to understand how AI is being used in your organization and what data it accesses.

### 2.1 Configure Telemetry Settings

Navigate to **Settings** → **Telemetry & Monitoring**

Enable the following collection modes:

| Telemetry Type | Purpose | Status |
|---|---|---|
| **AI Agent Interactions** | Track every use of AI agents and LLMs | Enable |
| **Data Access Logs** | Monitor what data AI systems access | Enable |
| **User Behavior Tracking** | Record who uses AI and when | Enable |
| **Data Transfer Monitoring** | Capture data sent to AI systems | Enable |
| **Sensitive Data Events** | Alert on PII/PHI exposure to AI | Enable |
| **Anomaly Detection Signals** | Real-time behavioral analysis | Enable |

### 2.2 Set Data Retention Policy

Define how long telemetry data is retained:

- **Minimum Retention**: 90 days (for incident investigation)
- **Recommended Retention**: 12 months (for compliance audits)
- **Extended Retention**: Custom based on regulatory requirements

### 2.3 Configure Privacy Controls

- **Data Anonymization**: Mask personally identifiable information where appropriate
- **Sampling Rates**: For high-volume environments, configure sampling if needed
- **Exclusion Rules**: Exclude non-sensitive data categories to optimize performance

## Step 3: Deploy the AI Classification Engine

The AI Classification Engine automatically identifies and categorizes your organization's data, enabling risk-aware governance.

### 3.1 Enable Data Classification

Navigate to **Settings** → **Data Classification**

1. Select **Microsoft Classifiers** or **Custom Classifiers**
2. Define sensitive data categories:
   - **PII** (Personal Identifiable Information)
   - **PHI** (Protected Health Information)
   - **Trade Secrets** & Intellectual Property
   - **Financial Data**
   - **Other Custom Classifications**

### 3.2 Set Classification Rules

- **Automatic Labeling**: Enable automatic detection and labeling of sensitive content
- **Quarantine Rules**: Define actions when sensitive data is detected near AI systems
- **Alert Thresholds**: Set sensitivity levels for notifications

### 3.3 Validate Classification

Review the classification results in your first scan:

1. Go to **Discovery** → **Data Inventory**
2. Verify accuracy of classified data
3. Refine rules if needed

## Step 4: Initialize AI Agent Discovery

Now that data sources are connected and telemetry is enabled, begin discovering all AI agents in your environment.

### 4.1 Start Discovery Scan

Navigate to **Governance Databot** → **Discovery**

1. Click **Start Discovery Scan**
2. Select scope:
   - Full Organization
   - Specific Departments/Divisions
   - Specific Teams/Business Units

3. Click **Run Scan** (First scan may take 30 minutes to several hours depending on environment size)

### 4.2 Review Discovery Results

Once the scan completes, you'll see:

- **Total AI Agents Discovered**: All agents across your environment
- **Sanctioned vs. Shadow AI**: Breakdown of authorized vs. unauthorized tools
- **Agent Categories**:
  - Copilot & Microsoft AI
  - Third-Party Plugins
  - Custom AI Applications
  - Unknown/Shadow AI Tools

### 4.3 Classify Agents

For each discovered agent, the platform automatically creates an **Agent Card** that includes:

- **Agent Name & Type**: Identifies the specific AI tool
- **Data Access Level**: What data the agent can access
- **Risk Classification**: EU AI Act risk tier (Unacceptable, High, Limited, Minimal)
- **Autonomy Level**: Can the agent act without human approval?
- **Authority Limits**: What can the agent do?

Review and validate each Agent Card for accuracy.

## Step 5: Access the AI Governance Databot

The **Governance Databot** is your unified control center for managing AI governance. It's where authorized users interact with all platform findings and capabilities.

### 5.1 Databot Overview

The Databot provides three core modes of operation:

#### **Mode 1: Discovery**
- View all discovered AI agents in your environment
- See Shadow AI and unauthorized tools
- Understand data lineage and agent connections
- Monitor which teams are using which AI systems

#### **Mode 2: Analysis**
- Analyze AI usage patterns and trends
- Identify behavioral anomalies
- Detect suspicious or risky AI activities
- Understand data flows to/from AI systems
- Risk scoring for each agent

#### **Mode 3: Reporting**
- Generate compliance reports (EU AI Act, UK AI White Paper, ISO 42001)
- Create audit-ready documentation
- Track Agent Card changes and audit history
- Export findings for stakeholder review
- Dashboard visualizations of governance posture

### 5.2 Access the Databot

1. Log into the **Infotechtion Portal**
2. Click **Governance Databot**
3. You'll be presented with a role-restricted interface based on your permissions:
   - **Governance Admins**: Full access to all features
   - **Auditors**: View-only access to analysis and reports
   - **Data Stewards**: View data classifications and access logs

## Step 6: Understand Your Initial Findings

### 6.1 Review Discovery Dashboard

The Discovery dashboard shows:

- **Total Agents**: Count of all AI systems discovered
- **Shadow AI Detected**: Unvetted tools bypassing controls
- **Data at Risk**: Sensitive information accessible to AI
- **Compliance Status**: Your current governance readiness

### 6.2 Analyze Sensitive Data Exposure

In the **Analysis** section, you'll see:

- **Which AI systems access sensitive data**: PII, PHI, Trade Secrets
- **Data Transfer Events**: When data was sent to AI systems
- **Risk Indicators**: Behavioral flags suggesting potential misuse
- **User Patterns**: Who is using AI and how frequently

### 6.3 Identify Risky Agents

The platform automatically flags agents with:

- **Unauthorized Data Access**: Accessing data beyond defined scope
- **Anomalous Behavior**: Usage patterns that deviate from baseline
- **High Risk Classification**: Agents processing sensitive data
- **Compliance Violations**: Agents not meeting regulatory requirements

### 6.4 Generate Initial Reports

Create your first compliance report:

1. Navigate to **Reporting** → **Create Report**
2. Select report type:
   - Executive Summary
   - Detailed Compliance Analysis
   - Agent Risk Assessment
   - Data Flow Documentation
3. Choose regulatory framework (EU AI Act, UK AI White Paper, etc.)
4. Click **Generate Report**

## Step 7: Configure Governance Policies

With visibility into your AI landscape, establish governance policies to control AI behavior.

### 7.1 Define Agent Policies

Set policies for each agent or agent category:

- **Data Access Restrictions**: Which data sources can the agent access?
- **User Approval Requirements**: Does the agent require human approval before acting?
- **Output Restrictions**: What can the agent output or send?
- **Time Restrictions**: When can the agent operate?
- **Volume Limits**: How much data can it process?

### 7.2 Set Alerts & Escalations

Configure alerts for:

- **Shadow AI Detection**: Alert when new unauthorized tools are discovered
- **Sensitive Data Access**: Alert when AI accesses classified information
- **Policy Violations**: Alert when agents exceed defined bounds
- **Behavioral Anomalies**: Alert on unusual access patterns
- **Compliance Breaches**: Immediate alert on regulatory violations

### 7.3 Define Remediation Actions

Specify automatic and manual responses:

- **Automatic Actions**: Quarantine data, disable agent access, create tickets
- **Manual Actions**: Require security team approval before taking action
- **Escalation Path**: Define who gets notified and in what order

## Step 8: Monitor & Respond

### 8.1 Continuous Monitoring

The Databot continuously monitors:

- **AI Agent Usage**: Real-time tracking of all AI interactions
- **Data Flows**: Monitoring what data is accessed and transferred
- **Policy Compliance**: Ensuring agents stay within defined bounds
- **Risk Events**: Detecting suspicious or risky behavior

### 8.2 Investigate Findings

When the Databot flags a finding:

1. Review the alert in **Alerts** dashboard
2. Click to open the **Incident Details**
3. Analyze the evidence:
   - What data was involved?
   - Which users/agents were involved?
   - What actions were taken?
   - What's the risk level?

### 8.3 Take Action

Respond to findings:

- **Approve**: If behavior is legitimate, approve and add to whitelist
- **Investigate**: Open a formal investigation workflow
- **Remediate**: Take corrective action (disable agent, restrict access, etc.)
- **Document**: Record all findings for audit trail

## Step 9: Reporting & Compliance

### 9.1 Regular Reporting

Establish a regular reporting cadence:

- **Weekly**: Operational metrics (AI usage, new agents discovered)
- **Monthly**: Compliance status and trend analysis
- **Quarterly**: Executive summaries and governance posture
- **Annual**: Comprehensive compliance audit documentation

### 9.2 Audit-Ready Documentation

The platform maintains comprehensive documentation:

- **Agent Inventory**: All discovered agents and their properties
- **Data Lineage**: Complete tracking from data source to AI system
- **Access Logs**: Who accessed what, when, and why
- **Policy Changes**: Audit trail of all governance modifications
- **Incident Records**: Documentation of all security events and responses

### 9.3 Regulatory Compliance

Generate compliance reports for:

- **EU AI Act**: Risk classification, transparency obligations, high-risk AI monitoring
- **UK AI White Paper**: Five-principle alignment (Safety, Transparency, Fairness, Accountability, Contestability)
- **GDPR**: Data protection impact assessments, data subject rights
- **ISO 42001**: AI Management System standards
- **Industry-Specific Regulations**: HIPAA, SOX, etc.

## Step 10: Roadmap - Agentic Operations (Future Capability)

The Infotechtion AI Governance platform roadmap includes **Agentic Operations**, which will extend current capabilities with automated control and orchestration.

### 10.1 What are Agentic Operations?

Agentic Operations enable the Governance Databot to:

- **Automatically enforce policies**: Instead of just detecting violations, automatically take corrective actions
- **Self-remediate issues**: Quarantine problematic agents, revoke data access, pause operations
- **Orchestrate responses**: Coordinate multi-step remediation workflows
- **Learn and adapt**: Improve policies based on outcomes
- **Provide recommendations**: AI-driven suggestions for policy optimization

### 10.2 Expected Capabilities

- **Autonomous Policy Enforcement**: Automatic blocking of policy violations without human intervention
- **Intelligent Escalation**: Smart routing of issues to appropriate teams based on severity
- **Threat Response Automation**: Automatic response to detected threats or misuse
- **Continuous Compliance**: Automated adjustments to maintain regulatory compliance
- **Self-Tuning Controls**: Learning-based optimization of governance rules

### 10.3 Staying Informed

Watch for updates on Agentic Operations:

- Check the [Roadmap 2025](../product-overview/Roadmap2025.md) for timeline and details
- Subscribe to product updates at [www.infotechtion.com](https://www.infotechtion.com)
- Contact your account manager for early access to beta features

## Next Steps

1. **Start Now**: Follow Steps 1-5 to get your platform connected and running
2. **Review Findings**: Complete Steps 6-8 to understand your current AI governance posture
3. **Establish Governance**: Implement policies in Step 7 tailored to your organization
4. **Monitor Continuously**: Use Step 8-9 for ongoing compliance and reporting
5. **Plan for the Future**: Prepare for Agentic Operations capabilities in Step 10

## Support & Resources

- **Documentation**: Explore detailed guides in [AI Governance](./Getstarted.md)
- **User Manual**: See [Governance Bot User Manual](./Usermanual/GovernanceBot.md) for detailed feature walkthroughs
- **FAQs**: Visit [AI Governance FAQ](./FAQ.md) for common questions
- **Contact Support**: Email [contact@infotechtion.com](mailto:contact@infotechtion.com) or call your account manager

## Summary

By following this guide, you've established a foundation for comprehensive AI governance:

- **Visibility**: You can now see all AI agents and their data access
- **Understanding**: You understand which data is at risk and how AI uses it
- **Control**: You have policies in place to manage AI behavior
- **Compliance**: You're prepared to demonstrate compliance to regulators
- **Future-Ready**: You're positioned to adopt Agentic Operations for automated governance

Welcome to responsible AI governance with Infotechtion!