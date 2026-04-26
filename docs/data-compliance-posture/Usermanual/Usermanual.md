---
id: DataCompliancePostureManager
title: Data Compliance Posture Manager
sidebar_label: Data Compliance Posture Manager
---

# Data Compliance Posture Dashboard User Manual

## Introduction

This user manual is designed for the end user of the i-ARM **Data Compliance Posture** dashboard. It explains how to navigate the dashboard, understand the KPIs, and use filters to focus on the compliance information that matters most to your role.

### Who should use this guide?

- **Workspace/Information Asset Owners** who monitor posture for their assigned assets.
- **Compliance analysts** who validate risk, track improvements, and gather evidence for audit.
- **Business users** who need a clear view of data compliance status and remediation priorities.

### What this guide covers

- Dashboard layout and navigation
- KPI descriptions and interpretation
- Filter usage and scope selection
- Investigation and remediation workflow
- Quick reference checklist and glossary

---

## 1. Dashboard overview

The Data Compliance Posture dashboard is a central view of your organization's data compliance health. It summarizes key metrics across data sensitivity, sharing, access activity, and classification.

### Main dashboard sections

- **Compliance KPI summary**: high-level metrics that show posture status.
- **Risk and exposure charts**: visualizations for oversharing, sensitive data exposure, and unclassified content.
- **Activity insights**: evidence of who accessed what data and how it was handled.
- **Filter panel**: tools to scope the dashboard to a specific workspace, owner, sensitivity label, or time window.

> The dashboard is meant to help you identify where to investigate, then use drill-through details to take action.

---

## 2. Getting started

### Open the dashboard

1. Sign in to i-ARM with your organization account.
2. Navigate to **Manage Posture** or **Measure Compliance**, then select **Data Compliance Posture**.
3. Wait for the dashboard visuals to load.

### First checks

- Confirm the selected **workspace or owner scope** matches your responsibility.
- Check the **report refresh timestamp** if available.
- Locate the **main KPI cards** and note any red or yellow warnings.

---

## 3. Dashboard navigation

### Layout guide

| Area | Purpose |
|---|---|
| **Top KPI cards** | Summary metrics for immediate posture status |
| **Visual charts** | Trends and distributions for compliance risks |
| **Detail tables or drill-through links** | Underlying evidence behind the summary metrics |
| **Filter panel** | Scope the dashboard by workspace, owner, label, or date |
| **Export actions** | Download selected results or evidence for reporting |

### Common navigation actions

- **Click a chart segment** to drill into related assets.
- **Use the filter panel** before reviewing KPIs to reduce noise.
- **Open details** for any KPI tile when available.

---

## 4. Key Performance Indicators (KPIs)

The dashboard uses KPIs to translate compliance posture into a manageable set of metrics. Each KPI shows a specific compliance area and gives you a starting point for investigation.

### 4.1 Common KPIs

| KPI | Meaning | Why it matters |
|---|---|---|
| **Sites with Access to Everyone** | Number of sites that allow broad access permissions | Identifies high-risk oversharing and data exposure |
| **File Level Sharing** | Count of files shared outside the intended audience | Signals potential privacy or confidentiality leaks |
| **Non-classified files** | Files without a sensitivity or records label | Indicates gaps in data classification and protection |
| **Labelled files accessed by Copilot** | Sensitive files opened by AI/Copilot services | Helps monitor advanced AI-related access risk |
| **Sensitive files shared internally/externally** | Sensitive content shared inside or outside the organization | Tracks potential compliance and data loss issues |
| **Policy exceptions** | Items that do not meet the configured compliance policy | Shows items needing review or remediation |

> Use KPIs to prioritize. If multiple KPIs show risk, start with the item that affects the largest number of assets or highest sensitivity.

### 4.2 How to interpret KPI colors

- **Green** usually means posture is within acceptable limits.
- **Yellow** indicates moderate risk or a condition that should be reviewed soon.
- **Red** signals a critical compliance issue requiring immediate attention.

---

## 5. Using filters effectively

Filters let you narrow the dashboard to the assets and timeframe that are relevant to your responsibilities.

### 5.1 Common filter types

| Filter | Use it for | Example |
|---|---|---|
| **Workspace** | Focus on a single site or container | Review posture for your owned SharePoint site |
| **Owner** | Scope to a specific business or technical owner | See issues assigned to your team |
| **Sensitivity label** | View results for specific label categories | Check all files marked Confidential or Highly Sensitive |
| **Date range** | Limit the dashboard to recent activity | Investigate incidents from the last 30 days |
| **Status / compliance state** | Show only compliant or non-compliant items | Find the items still needing remediation |

### 5.2 Recommended filter steps

1. Select your **workspace or owner**.
2. Choose the **relevant sensitivity label** (if your role is label-focused).
3. Set the **timeframe** to the recent scan or reporting period.
4. Review KPI changes after each filter adjustment.

> Tip: Always apply the correct scope filters first before drawing conclusions from the KPI totals.

---

## 6. Investigating dashboard findings

The most valuable part of the dashboard is using it to find and resolve specific compliance issues.

### 6.1 Investigation workflow

1. Start with the KPI showing the largest risk.
2. Use chart segments or **Details** links to open the evidence table.
3. Review the underlying assets, users, or activities.
4. Confirm whether the issue is valid or a false positive.
5. Apply the appropriate remediation.

### 6.2 Example workflow

- KPI: **Non-classified files** is high.
- Filter by **Workspace** and **Sensitivity label = None**.
- Drill into the evidence list.
- Identify the files and assign correct labels.
- Verify the count decreases after the next scan.

---

## 7. What each KPI means

This section explains each common KPI in user-friendly terms.

### Sites with Access to Everyone

- Shows sites that allow broad access, such as Everyone, Everyone except external users, or similar wide-access groups.
- Use it to find sites that may be exposing sensitive data beyond the intended audience.

### File Level Sharing

- Counts files that have external or overly broad sharing permissions.
- Helps you spot large-scale sharing issues that may violate privacy or external collaboration policies.

### Non-classified Files

- This KPI counts files that do not have a sensitivity label or records label.
- It is a strong indicator of classification gaps that should be remediated quickly.

### Sensitive Files Accessed by Copilot

- Tracks sensitive documents that have been accessed by AI/Copilot tools.
- Useful for monitoring whether AI accesses content that should remain protected under your governance policies.

### Sensitive Files Shared Internally/Externally

- Shows sensitive files shared either within the organization or outside it.
- Use this KPI to check whether labeled content is being exposed beyond the intended audience.

### Policy Exceptions

- Items included here have violated a configured policy or compliance rule.
- These are the highest-priority items because they are already outside the expected posture.

---

## 8. Remediation guidance

### 8.1 What to do with a red KPI

- Review the evidence list for the KPI.
- Confirm the data owners and affected assets.
- Apply the correct remediation action.
- Document the change and verify it after the next refresh.

### 8.2 Common remediation actions

- **Update permissions**: remove broad or external access.
- **Apply labels**: classify files with the correct sensitivity or records label.
- **Correct sharing settings**: move shared content to a more secure workspace or adjust link settings.
- **Review AI access**: restrict Copilot access for highly sensitive content where required.

> If you are unsure of the correct remediation, follow your organization’s governance policy or contact your compliance team.

---

## 9. Validation and follow-up

After remediation, verify that the dashboard reflects the improvement.

### 9.1 How to confirm remediation

- Re-run the dashboard with the same filters.
- Check that the KPI count has decreased.
- Confirm the affected asset is no longer shown in the evidence list.
- If possible, use the dashboard’s refresh or re-scan function to accelerate visibility.

### 9.2 When to escalate

- If a KPI remains red after remediation, escalate to your compliance or security owner.
- If the dashboard shows unexpected or inconsistent results, report the issue to your platform administrator.

---

## 10. Glossary

| Term | Meaning |
|---|---|
| **KPI** | Key Performance Indicator — a metric used to measure compliance posture. |
| **Drill-through** | Opening detailed data behind a summary visual to see the underlying assets or events. |
| **Sensitivity label** | Classification applied to files or containers to indicate confidentiality level. |
| **Workspace** | A site, container, or storage scope within the posture dashboard. |
| **Owner** | The person or team responsible for the assets and remediation actions. |
| **Non-classified file** | A file that lacks a sensitivity or records label. |

---

## 11. Quick start checklist

1. Select your **workspace or owner scope**.
2. Apply the appropriate **sensitivity and date filters**.
3. Review the top KPI cards for immediate risks.
4. Drill into the KPI with the highest priority.
5. Confirm remediation actions and verify after refresh.

---

## 12. Support

If you need help using the dashboard:

- Contact your internal **compliance support team**.
- Reach out to the **platform administrator** if the report appears incorrect.
- Use the **audit evidence export** options for review and handoff.
