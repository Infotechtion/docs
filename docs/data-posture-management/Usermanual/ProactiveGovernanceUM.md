---
id: ProactiveGovernanceUM
title: Proactive Governance
sidebar_label: Proactive Governance
---
## 1. Overview

**Proactive Governance** is the single destination for records managers and archivists to perform proactive records-related activities. The current release lets you:

- Search for labelled records by their **data location** (SharePoint site URL) or **retention category / label**.
- **Trigger governance actions** on the records returned by a search.

Future releases will also include event-based retention management, audit activity searches, storage optimisation, and more.

---

## 2. Who This Is For

| Role | Use Case |
|---|---|
| Records Manager | Create searches, review results, trigger governance actions |
| Archivist | Review search results, view file metadata, monitor search status |

---

## 3. Getting to Proactive Governance

1. Sign in to iARM.
2. In the left-hand navigation, select **Admin**.
3. Under Admin, select **Proactive Governance**.

The Proactive Governance page loads with a list of all saved searches.

---

## 4. The Searches List

The main page displays all searches that have been created, one row per search. Each row shows:

| Column | Description |
|---|---|
| Search Name | The name you gave the search when it was created |
| Status | The current processing status of the search (see [Search Statuses](#7-search-statuses)) |
| Created By | The user who created the search |
| Date Range type | Whether the search uses **Expiration Date** or **Activity Date** |
| Start Date | The start of the date range used in the search |
| End Date | The end of the date range used in the search |

Scroll to the bottom of the list and select **Load More** to fetch additional searches when the list is paginated.

Select any row to highlight it and unlock the toolbar actions for that search.

---

## 5. Toolbar Actions

The toolbar sits above the searches list and contains four actions. Their availability depends on which search row (if any) is selected and what status that search is in.

| Action | Description | When it is available |
|---|---|---|
| **Create Search** | Opens the Create Search wizard | Always available, unless the maximum number of concurrent searches has been reached |
| **Review Results** | Opens the results view for the selected search | Selected search status is one that has results ready (not Queued, Failed, or Cancelled, and has at least one result) |
| **Refresh** | Reloads the searches list with the latest data from the server | Always available |
| **View Search Parameters** | Opens a summary of the criteria used to run the selected search | A search is selected |

> **Tip:** Hover over a disabled button to see an explanation of why it is unavailable.

---

## 6. Creating a New Search

Select **Create Search** in the toolbar to open the four-step wizard.

---

### Step 1 — Primary Search Criteria

Configure the core search parameters.

**Data Source**
Select the data source you want to search. A default source is pre-selected for you. This field is required.

**Date Type**
Choose how the date range should be applied to records:

| Option | Meaning |
|---|---|
| **Expiration Date** | Finds records whose retention expiration date falls within the chosen range. Start Date must be today or a future date. |
| **Activity Date** | Finds records based on their last activity date. Start Date must be in the past (yesterday or earlier). End Date cannot exceed yesterday, since today is excluded. |

> Changing the Date Type clears any previously entered Start Date and End Date so that the constraints for the new type are applied cleanly.

**Date Range**
Enter a **Start Date** and **End Date**. The maximum span you can select is **30 days**. For Activity Date searches, the End Date is additionally capped at yesterday.

Once you have filled in all three fields, select **Next** to proceed.

---

### Step 2 — Secondary Search Criteria

Choose how you want to further narrow the search:

| Option | Description |
|---|---|
| **Data Location** | Narrow the search to one or more specific SharePoint sites by their URL |
| **Retention Category** | Narrow the search to records that belong to specific retention categories |

Select one of the two cards and then select **Next**.

---

### Step 3a — Data Location

*(Shown when you selected Data Location in Step 2)*

Enter one or more SharePoint site URLs. Before the wizard lets you advance, it validates every URL you have entered against the server:

- If all URLs are valid, a success message appears and you proceed to Step 4.
- If any URL is invalid, an error message identifies the problem. Correct the URL and try again.

You must provide at least one URL. The **Next** button triggers validation automatically when selected.

---

### Step 3b — Retention Category

*(Shown when you selected Retention Category in Step 2)*

A tree of available retention categories is displayed. Browse the tree and select one or more categories to include in the search.

- Expand a parent node to see child categories.
- A category remains selected even if you navigate away to a previous step and return.

You must select at least one category before advancing to Step 4.

---

### Step 4 — Name and Confirm

**Search Name**
Enter a descriptive name for this search. The name is required and will appear in the searches list once the search is submitted.

**Processing summary**
Three statements confirm what will happen after you submit:

1. Your search will be created using the criteria you have selected.
2. You can check the status of the search in the searches page.
3. Once the search is completed, you will be able to review the results and trigger actions on relevant files.

Select **Submit** to create the search. The wizard closes and your new search appears in the searches list with a status of **Queued**.

---

## 7. Search Statuses

| Status | What it means |
|---|---|
| **Queued** | The search has been submitted and is waiting for a processing slot to become available. Review Results is not available yet. |
| **In Progress** | The search is actively running on the server. |
| **Added to Staging** | Records matching the search criteria have been identified and are being moved to the staging area for validation. |
| **Final Validation In Progress** | The staged records are going through a final validation step before results are made available. |
| **Completed** | The search finished successfully. Review Results becomes available if at least one record was found. |
| **Failed** | The search encountered an error. Review Results is not available. Contact your system administrator if this persists. |
| **Cancelled** | The search was cancelled before it completed. Review Results is not available. |

> The statuses **Queued**, **In Progress**, **Added to Staging**, and **Final Validation In Progress** each occupy one of the available concurrent-search slots (see [Limits and Guidelines](#11-limits-and-guidelines)).

---

## 8. Reviewing Results

With a completed search selected in the list, select **Review Results** in the toolbar. The searches list is replaced by the results view for that search.

### Active Tab

Shows records that are pending a governance action. These are the records you will interact with most — selecting records here enables the **Trigger Action** button.

### Historic Tab

Shows records that have already been processed (a governance action has been applied). This tab is read-only.

Switch between tabs at any time; your column preferences are preserved independently for each tab.

---

### Column Manager

The **Column Manager** button (in the results toolbar) lets you choose which columns are visible in the grid. Mandatory columns cannot be hidden. Your preferences are saved per tab.

---

### File Info Panel

Select one record in the results grid and then select the **Info** button (ⓘ) in the results toolbar to open the **File Info** panel. The panel displays the full metadata for the selected file, including label data and system properties.

The Info button is disabled when no record is selected or when multiple records are selected.

---

## 9. Taking a Governance Action

1. In the **Active** tab of the results view, select one or more records using the row checkboxes.
2. Select **Trigger Action** in the results toolbar. The **Confirm the Action** drawer opens on the right.
3. Complete the three required fields:

| Field | Description |
|---|---|
| **When would you like the action to be processed?** | Choose a date using the calendar. The earliest date you can select is **tomorrow**. The latest date is capped by the earliest expiry date among the records you selected. |
| **What will happen to the record?** | Select an action type from the dropdown list. |
| **Please add your notes or a reason for the selected action** | Enter a reason or notes for audit purposes. This field is required. |

4. The drawer header confirms how many records will be processed (e.g., *All 12 records will be processed for the selected action*).
5. Select **Submit** to queue the action. The selected records move from the **Active** tab to the **Historic** tab once processed.

---

## 10. Viewing Search Parameters

To revisit the criteria used to run any search:

1. Select a row in the searches list.
2. Select **View Search Parameters** in the toolbar.

The **Search Parameters** drawer opens on the right and shows a read-only summary of the data source, date type, date range, and the data location URLs or retention categories that were specified when the search was created.

---

## 11. Limits and Guidelines

| Limit | Value | Notes |
|---|---|---|
| Maximum concurrent searches | **5** | A search occupies a slot while its status is Queued, In Progress, Added to Staging, or Final Validation In Progress. The **Create Search** button is disabled when all 5 slots are occupied. |
| Maximum date range | **30 days** | Applies to both Expiration Date and Activity Date searches. |
| Activity Date — End Date constraint | Cannot exceed **yesterday** | Today's activity is excluded from Activity Date searches. |
| Expiration Date — Start Date constraint | Must be **today or later** | Expiration Date searches look forward in time. |
| File Info panel — single record only | Info panel requires **exactly one** record selected | Select a single row to enable the Info button. |

---
