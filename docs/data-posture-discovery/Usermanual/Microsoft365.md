---
id: Microsoft365
title: Microsoft 365
sidebar_label: Microsoft 365
---

# Microsoft 365 Posture Discovery User Manual

## 1. Introduction

This manual explains how the i-ARM posture discovery feature works for Microsoft 365 sources, how end users can access the discovery outcomes, and what remediation actions are currently supported.

### Who should use this guide?

- IT administrators onboarding Microsoft 365 posture discovery
- Compliance analysts reviewing posture discovery outcomes
- Business owners and data stewards responsible for remediation

### What this guide covers

- How Microsoft 365 posture discovery leverages Graph Data Connect and Office 365 Management Activity APIs
- How to access discovery outcomes through the My Data and Data Explorer modules
- Which remediation actions authorised users can perform
- How posture discovery feeds posture management and posture dashboards

---

## 2. How Microsoft 365 posture discovery works

The posture discovery capability for Microsoft 365 uses a combination of content and activity datasets to identify sensitive, shared, and unclassified data across SharePoint, OneDrive, Teams, and Exchange.

### 2.1 Microsoft Graph Data Connect (MGDC)

Microsoft Graph Data Connect provides a prefabricated dataset for enterprise content analysis. The platform uses this dataset to ingest:

- file metadata and document properties
- sensitivity labels and compliance tags
- location and sharing details
- classification state and retention metadata

This direct integration supports large-scale discovery of Microsoft 365 content while respecting customer controls and consent.

### 2.2 Office 365 Management Activity API

The Office 365 Management Activity API supplies activity telemetry for Microsoft 365 workloads. The posture discovery solution uses this telemetry to understand:

- who accessed or modified a document
- when files were shared internally or externally
- how users interacted with sensitive content
- which security and compliance events occurred

Together, these APIs provide both the content posture and the access/activity posture needed for effective Microsoft 365 discovery.

### 2.3 What is discovered

The Microsoft 365 posture discovery process identifies:

- unclassified files and containers
- sensitive data patterns and label mismatches
- files with risky sharing settings
- activity events that indicate exposure or misuse
- posture risk signals that feed management workflows and dashboards

---

## 3. Accessing posture discovery outcomes

The outcome of Microsoft 365 posture discovery is surfaced through the platform’s modules, primarily **My Data** and **Data Explorer**.

### 3.1 My Data

The **My Data** component displays record files, including file metadata, retention labels, and sensitivity labels. Users can open convenience copies of files and review discovered posture metadata.

#### Step-by-step: view Microsoft 365 posture outcomes in My Data

1. Open the i-ARM portal and sign in with your organization credentials.
2. Navigate to **My Data** from the main menu.
3. Select the **Microsoft 365** source or the relevant source instance.
4. Use the source and instance dropdowns to select the required dataset.
5. Review the listed files and metadata, including:
   - sensitivity label
   - retention policy status
   - classification result
   - discovery risk indicators
6. Use filters to narrow results by file type, label, owner, or risk category.
7. Open a convenience copy or metadata panel to inspect the details of an individual item.

### 3.2 Data Explorer

The **Data Explorer** component leads to the explorer summary dashboard, which contains visuals categorizing enterprise data into Redundant-Obsolete-Trivial (ROT), Sensitive Data, Records, and Unclassified Data.

#### Step-by-step: review posture discovery outputs in Data Explorer

1. In the i-ARM portal, go to **Data Explorer**.
2. Select the Microsoft 365 discovery scope from the available filters.
3. Review the summary charts that show:
   - classified vs unclassified content
   - sensitive data volume and distribution
   - risky or overexposed items
   - records and retention coverage
4. Click a chart segment to drill into the underlying evidence.
5. Use the drill-through tables to identify items that need remediation.

### 3.3 Practical example workflows

- Use **My Data** when you need item-level detail, metadata, and label/retention context.
- Use **Data Explorer** when you need a high-level posture summary and a quick way to identify clusters of risk.

---

## 4. Actions supported by authorised users

Authorized users can remediate posture discovery outcomes directly in the platform. The two primary supported actions are:

### 4.1 Apply sensitivity labels

Authorized users can apply or correct sensitivity labels on Microsoft 365 content. This helps ensure that:

- sensitive files are protected according to policy
- label-based access and governance rules are enforced
- posture dashboards reflect the correct classification state

### 4.2 Apply retention policies

Authorized users can also apply retention labels or policies to ensure data is kept or disposed of according to governance requirements. This supports:

- retention compliance
- lifecycle management of records and regulated data
- alignment between discovery findings and remediation workflows

### 4.3 Remediation workflow for authorised users

1. Identify the issue in **Data Explorer** or **My Data**.
2. Open the item or selection list with the posture discovery outcome.
3. Apply the correct sensitivity label or retention policy.
4. Save or submit the change.
5. Confirm the update by refreshing discovery outcomes and monitoring dashboard status.

> Note: The ability to apply labels and policies may be limited to authorised roles and may require approval workflows defined in your organization.

---

## 5. How posture discovery supports posture management and dashboards

Microsoft 365 posture discovery is the foundation for the broader posture management capability in i-ARM.

### 5.1 Posture discovery as the data source

Posture discovery identifies the assets, classification gaps, and risk signals that posture management uses to build workflows and remediation tasks.

### 5.2 Posture management uses discovery outcomes

Once discovery outcomes are available, posture management can:

- assign ownership and remediation tasks
- enforce retention and sensitivity policy actions
- coordinate reviews and approvals
- generate evidence for audits

### 5.3 Posture dashboards rely on discovery data

The posture dashboards visualize the same discovery data to show:

- compliance scorecards
- data risk trends
- label coverage over time
- exposure and access monitoring

Without posture discovery, those dashboards cannot light up the management, workflow, and monitoring features that help teams act on Microsoft 365 compliance gaps.

### 5.4 Example linkage

- A discovery scan finds unclassified files in Teams and SharePoint.
- Posture management creates remediation tasks and recommends labels.
- The posture dashboard shows the remediation progress and risk reduction over time.

---

## 6. Tips for end users

- Start with **Data Explorer** for fast risk triage.
- Use **My Data** for item-level remediation and label/retention updates.
- Filter by Microsoft 365 source and scope first to avoid unrelated posture signals.
- Confirm changes in the posture dashboard after remediation.

## 7. Glossary

| Term | Definition |
|---|---|
| **Graph Data Connect** | A Microsoft API dataset used to ingest Microsoft 365 content securely and at scale. |
| **Office 365 Management Activity API** | A Microsoft API that streams activity events for Office 365 workloads. |
| **My Data** | The i-ARM component for viewing discovered files and their metadata. |
| **Data Explorer** | The i-ARM component for exploring posture summary dashboards and drill-through evidence. |
| **Sensitivity label** | A classification applied to data to indicate its protection level. |
| **Retention policy** | A rule that determines how long data is retained and when it is disposed. |
