---
title: Overview
sidebar_label: Overview
hide_title: true
---
# i-ARM **Data Compliance Posture** Dashboard — End User Documentation

> **Purpose of this guide**  
This documentation explains how end users interpret and use the i-ARM **Data Compliance Posture** dashboard to monitor compliance gaps, prioritize risks, drill into evidence, and drive remediation actions that improve posture over time.

---

## 1) What the Data Compliance Posture dashboard is (and why it exists)

**Data Compliance Posture Management (DCPM)** provides a continuous, evidence-based view of how well organizational data complies with:
- **Security and access policies**
- **Records and retention obligations**
- **Privacy and data residency rules**
- **AI governance constraints**

The dashboard is designed to support:
- **Risk-based prioritization** of compliance gaps (so teams focus remediation where failure impact is greatest).
- **Actionable remediation**, not just reporting (guided workflows, evidence capture of actions/approvals, and validation that issues do not reappear).

---

## 2) Intended users & typical responsibilities

Organizations can tailor access, but the dashboard commonly supports:

### A) Workspace/Site/Information Asset Owners
Owners review posture insights for their scope and are expected to apply remediation actions on their workspaces. A typical owner loop includes reviewing risks, applying fixes (permissions/labels/sharing), and verifying remediation results.

### B) Compliance / Information Governance Analysts
Analysts use the dashboard to track KPI compliance, validate whether remediation improves posture, and export evidence for audit support.

### C) Security Administrators / Platform Operators
Admins focus on report health, refresh cycles, and ensuring filters/metrics align across posture and oversharing views.

---

## 3) Where the dashboard sits in the i-ARM posture model

The posture model referenced in i-ARM organizes user activity around:

- **Manage Posture → Data Explorer** (where data relevance classifications, scoring, and lifecycle indicators are surfaced)
- **Manage Posture → Data Disposal Reviews** (actionable disposal / review / archival workflows) 
- **Measure Compliance → Posture Dashboard** (activity telemetry-oriented evidence from data assets) 

---

## 4) Data sources & evidence trail (high level)

The posture dashboards typically draw from operational datasets such as:
- Customer **M365 tenant inventory** via MGDC datasets (e.g., SharePoint extracts)
- **Microsoft Purview Unified Audit Log** (user activity events)
- i-ARM extraction/transform and datastore, with dashboards hosted in the i-ARM environment. 
- Identity telemetry from Microsoft Entra.
- EndPoint and Network telemetry through integration with Microsoft Defender suite or other similar solutions.

This matters because posture outcomes are intended to be **defensible**: summary metrics should be traceable to underlying inventory/activity evidence.

---

## 5) Dashboard navigation: how users locate KPIs & insights

### 5.1 KPI-oriented navigation (example approach)
The Posture KPI describes a common interaction pattern: users navigate to the dashboard, locate the KPI section, and use drill-through where available to view underlying records. 

**Example (AI/Copilot KPI):**
- KPI: “Count of labelled files accessed by Copilot”
- In the dashboard: locate **Activities by Workload**, select **Copilot**, then select **Details** to drill-through. 

> **Practical tip:** Treat top-level KPI visuals as **summaries**; use drill-through tables as the **evidence layer** for operational follow-up. 

---

## 6) Filters and controls users will encounter (and what they mean)

### 6.1 Workspace and Owner scoping
The “Workspace Owner” filter helps align posture numbers with oversharing reporting and to validate results per responsible owner. The posture dashboard offers several other filters to support identity focussed filtering of relevant posture events.

### 6.2 Sensitivity label controls
The dashboard also supports sensitivity focussed posture:
- A filter for **Data Sensitivity Label**.
- The workspace sensitivity is a separate  filter to differentiate **Data and Workspace Sensitivity**.



---

## 7) Understanding the KPIs and what they represent (examples)

### 7.1 What are KPIs and how they benefit your compliance program

**KPIs (Key Performance Indicators)** are measurable metrics that track compliance posture across your organization's data assets. They translate complex compliance requirements into clear, actionable numbers.

**Key benefits:**
- **Risk visibility**: Identify compliance gaps at a glance (e.g., unclassified files, oversharing, unauthorized access)
- **Prioritization**: Focus remediation efforts on high-impact risks first
- **Trend tracking**: Monitor whether your posture improves over time
- **Accountability**: Assign clear ownership and track remediation progress per workspace/owner
- **Audit evidence**: Export KPI data and drill-through results to support compliance audits

**Examples of KPI definitions you may see:**
- **Sites with Access to Everyone** — identifies oversharing exposure
- **File Level Sharing** — tracks share permissions beyond intended scope
- **Count and list of non-classified files** — flags content missing sensitivity labels
- **Labelled files accessed by Copilot** — monitors AI tool access to sensitive data
- **Labelled files shared internally/externally** — categorizes sharing by sensitivity level


### 7.1 Examples of KPI definitions you may see
- **Sites with Access to Everyone** 
- **Site Level Sharing** 
- **File Level Sharing** 
- **Count and list of non-classified files** : files without a sensitivity label applied 
- **Labelled files accessed by Copilot**  with drill-through via **Activities by Workload → Copilot → Details** 
- **Labelled files shared internally/externally**

> **How to use KPIs well:** Use KPI tiles/charts to identify **where to focus**, then drill into tables to identify **what to fix** and **who owns it**. 

---

## 8) Drill-through & investigation workflow (end user)

The posture KPIs describes a consistent end-user pattern:
1) Select a visual segment (e.g., a workload or label category)
2) Use a **Details** action (where available)
3) Review the resulting table as the investigation list for follow-up 

Common investigation pivots include:
- Workload (including Copilot)
- Sensitivity label categories (including identifying non-classified content) 

---

## 9) Remediation: what users should do with posture findings

### 9.1 Owner remediation loop (recommended operational pattern)
A posture program example describes a clear remediation workflow:
1) **Review Alert**: confirm whether exposure is justified or a configuration issue
2) **Apply Fix**: adjust permissions, update labels, or remove external sharing as per the plan
3) **Verify**: system re-scans to confirm the risk is resolved and compliant 

### 9.2 Example remediation logic used in posture reporting
A specific remediation condition was implemented: **“Upgrading Site Sensitivity to Highest Sensitive File”**. 

> **Interpretation guidance:** This remediation pattern is used when file-level sensitivity indicates the container label should be raised to match the highest sensitivity of content within it. (Refer to the remediation text in your report for the exact rule wording.) 

---

## 10) Evidence and audit readiness (what to capture)

The posture definition emphasizes “evidence capture of remediation actions and approvals” as a core property of actionable remediation. 

For audit support, end users typically capture:
- Screenshot/export of KPI and scoped filters used
- Drill-through table export showing affected assets/activities (where permitted) 

---

## 11) Exporting data: what users can and cannot do

### 11.1 Export options exist, but selective-column export may be limited
Users cannot export particular columns directly; this capability to enable report personalization is currently in the product roadmap.


---

## 12) Report freshness & troubleshooting (end users + admins)

### 12.1 Verify refresh status if numbers look wrong
Reports are scheduled to refresh daily, however this is subject to lead times in telemetry delivery from various sources. There can be a delay of up-to 48 hrs for an activity related telemetry to appear in the posture dashboard. 

If values look stale:
- Check the report’s “Last refresh date” (if present)
- Confirm whether a scheduled refresh exists for that report in the workspace 

### 12.2 Data pipeline / load issues
It is possible that posture dashboard experiences “high volume telemetry issue” leading multiple refresh retries, this is an expected scenario and is often remediated automatically. A support ticket to Infotechtion is advised if the data refresh goes beyond 48 hrs.


---

## 13) Glossary (end-user friendly)

- **DCPM**: Data Compliance Posture Management — continuous view of compliance across security, records, privacy, and AI constraints. 
- **Owner**: Site/Workspace owner responsible for remediation actions in their scope. 
- **Drill-through**: A report action that opens a detailed table behind a summary visual (e.g., “Details”).
- **File Sensitivity Label**: A filter/field used within Data Compliance Posture reporting to scope insights by sensitivity classification. 

---

## 14) Quick start checklist (for end users)

1) **Scope first**: apply Workspace/Owner and label filters to your responsibility area. 
2) **Find your KPI**: use KPI sections (sharing, unlabeled content, Copilot activity). 
3) **Drill into evidence**: select a segment (e.g., Copilot workload) → **Details** to get the actionable 
4) **Remediate**: fix permissions/labels/sharing following your organization’s process. 
5) **Verify improvement**: re-check after the next refresh/scan cycle to confirm risk reduction. 

---

