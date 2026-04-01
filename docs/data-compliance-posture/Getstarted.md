---
id: Getstarted
title: Data Compliance Posture
sidebar_label: Getstarted
---

# Getstarted – Data Compliance Posture Dashboard

## 1) Purpose and overview

The i-ARM **Data Compliance Posture** dashboard gives business, governance, and security teams a centralized view of your organizations data compliance status. It highlights risk exposures in areas like access control, retention, sensitivity classification, and AI usage, and drives focused remediation steps.

### What this guide covers

- Dashboard access and role-based responsibilities
- KPI meaning and drill-through workflows
- Evidence capture for audit readiness
- Remediation and risk reduction playbook
- Troubleshooting common issues

## 2) Prerequisites

- Active Azure AD account with access to the i-ARM reporting workspace.
- Assigned role in the application (see Roles & Permissions below).
- Data source connectors configured in i-ARM (SharePoint, Teams, OneDrive, Purview, Defender, etc.) by platform team.
- At least one successful report refresh has completed.

## 3) Roles and permissions

- **Data Owner**: Reviews and remediates compliance findings for assigned workspaces. Applies sharing and labeling fixes.
- **Compliance Analyst**: Monitors KPI trends, exports evidence sets, and validates posture targets for audits.
- **Security Administrator**: Ensures data source data hygiene, manages overall posture rules and report refresh scheduling.
- **Dashboard Reader**: View-only access for leadership and audit stakeholders.

## 4) Getting started

1. Open the i-ARM portal and navigate to **Measure Compliance > Posture Dashboard**.
2. Confirm presence of **data compliance scorecard widgets** (exposure, sensitivity, classification, external sharing, AI indicators).
3. Set tenancy filters (business unit, region, workload) to your scope.
4. Note the report refresh date/time (top status bar). Data pipeline latency is typically up to 24-48 hours.

## 5) Dashboard components and navigation

### 5.1 Dashboard layout

- **Summary KPIs**: Quick risk indicators such as non-labeled content, external exposures, high-risk labels, and AI activity anomalies.
- **Trend charts**: Compliance score over time (e.g., weekly improvements or regressions).
- **Top issue groups**: Workspace-level findings, file counts, and status.
- **Policy exceptions**: Items currently blocked by governance policy rules.

### 5.2 Filters and slice controls

- Workspace Owner / Site / Department
- Sensitivity Label
- Sharing scope (Internal/External/Public)
- AI workloads (Copilot, Teams AI, etc.)
- Time window (Last 7/30/90 days)

### 5.3 Drill-through pattern

1. Click a KPI tile (e.g., “Files without sensitivity label”).
2. Open details table or report page.
3. Apply contextual filters to narrow to owner, site, or user.
4. Export for action list (CSV/PDF) or assign tracking ticket.

## 6) KPI explanations

- **Unclassified data**: Files without labels in indexed workspaces.
- **Overexposed files**: Files with external/internal sharing beyond policy.
- **Sensitive data at risk**: Sensitive label content accessible by non-authorized users.
- **Retention deviation**: Content with retention labels inconsistent with policy.
- **AI exposure**: Sensitive content accessed by Copilot or AI workloads.

> Tip: Always use the “drill-through” table as evidence to confirm the issue before remediation.

## 7) Recommended remediation workflow

1. **Identify root cause**: classification gap, shared link, permission misconfiguration.
2. **Escalate and assign**: assign to Data Owner or workspace admin.
3. **Action**: update permissions, apply labels, revoke links, add data to hold.
4. **Verify**: re-run the scope filter and confirm issue status resolves after next refresh.
5. **Document**: store action notes, remediation details, and approval in your compliance tracker.

## 8) Evidence and audit readiness

- Capture KPI screen + applied filters.
- Export drill-through records (ID, path, owner, policy, issue type, remediation target).
- Track actions with ticket ID and closure confirmation.
- Keep snapshots of posture score before/after remediation.

## 9) Troubleshooting

### 9.1 Some KPIs show old data

- Check report refresh date/time.
- Verify pipeline data ingestion for source connectors.
- If refresh fails repeatedly, escalate to i-ARM support and include correlation IDs from the portal.

### 9.2 Missing workspace or user scope

- Confirm user role and workspace map assignment in i-ARM security settings.
- Validate data connector permission to read that workspace.

### 9.3 Data mismatch with source permissions

- Reconcile with source system (SharePoint/OneDrive) directly, then run a forced refresh.
- If issue persists, review the governance rule translations in policy engine.

## 10) Quick start checklist

- [ ] Logged in and validated role access.
- [ ] Confirmed report refresh completed in last 48 hrs.
- [ ] Applied correct scope filters.
- [ ] Reviewed top 5 KPI risk categories.
- [ ] Drilled into one issue category and exported evidence.
- [ ] Assigned remediation work and scheduled verification.

## 11) Glossary

- **DCPM**: Data Compliance Posture Management.
- **Posture score**: Composite metric summarizing compliance risk.
- **Drill-through**: Detail view from a summary chart.
- **Sensitivity label**: Classification tag for content.
- **External exposure**: Files accessible by non-organization principals.

