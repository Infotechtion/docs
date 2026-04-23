---
id: GovernanceBot
title: Governance Bot
sidebar_label: Governance Bot
---

# AI Governance Databot

---

## Product Summary

**Governance Databot** is an enterprise-grade conversational AI assistant developed by **Infotechtion** . It enables business users to explore, analyse, and extract insights from their organisation's data simply by asking questions in Natural Langauge — with no SQL knowledge, no technical training, and no reliance on the IT team for routine data queries.

The Databot connects to your organisation's existing data sources — including **Microsoft Power BI**, **Azure SQL Databases**, and **Azure Table Storage** — and translates natural language questions into precise queries. Results are returned as interactive charts, downloadable data tables, and AI-generated text summaries, all within a secure, Microsoft Entra ID–authenticated web interface.

---

## Key Features & Capabilities

### 🗣️ Natural Language Data Exploration
Ask any question in Natural Langauge. The Databot automatically translates your question into the correct query language and executes it — no technical knowledge required.

### 📊 Interactive Visual Results
Answers are returned as fully interactive charts— bar, line, pie, scatter, and more — automatically selected for the type of data returned. Charts can be zoomed, filtered, and downloaded as PNG images.

### 📋 Downloadable Data Tables
Tabular results are shown as paginated, scrollable tables with **one-click CSV download**. Tables support up to 1,000 rows by default and can be exported directly to Microsoft Excel in CSV format.

### 💬 Persistent Conversation History
Every conversation is saved automatically to a secure Azure SQL database. Users can return to any past conversation at any time, resume it, rename it, or delete it. History is organised by dataset and searchable at a glance.

### 🔄  Follow-Up Question Suggestions
After every answer, the Databot generates **2–4 contextual follow-up questions** based on the current result — enabling guided, layered data exploration without requiring users to know what to ask next.

### 📚 Prompts Library
Databot Connected to the Dataset generates prompts recommended by AI, for each dataset. Users can browse and launch these prompts with a single click — ideal for new users or standardised reporting queries.

### 🔌 Multi-Source Data Connectivity
The Databot connects to three enterprise data source types in the same interface:   

| Data Source | Use Case |
|---|---|
| **Microsoft Power BI** | Semantic models, business intelligence datasets |
| **Azure SQL Database** | Relational business databases, transactional data |
| **Azure Table Storage** | Cloud-hosted structured data tables |

### 🔐 Microsoft Entra ID Authentication (SSO)
Users sign in using their existing Microsoft work account — no separate registration, no additional password. Multi-factor authentication (MFA) is fully supported.

### 🛡️ Real-Time Query Status
A live status indicator shows users exactly what the Databot is doing at each step — from generating the query, to fetching data, to running security checks. Users can cancel any running query at any time.

### 📡 AI-Generated Dataset Descriptions
When a user selects a dataset, the Databot automatically generates a natural language description of what the dataset contains — helping users understand what data is available before they ask their first question.

---

## User Roles

The Governance Databot has two distinct roles. There is no role selection screen — access level is determined by how the system has been configured for your account.

---

### Standard User (Business Analyst / Data Explorer)

This is the primary role for the majority of users. Standard users interact with the Databot through the chat interface to explore data and extract insights.

**Standard users can:**
- Sign in using their Microsoft work account
- Select from the data sources and datasets made available to them
- Ask questions in natural language and receive charts, tables, and summaries
- Browse and use the Prompts Library for their selected datasets
- Use AI-generated follow-up question suggestions
- View, resume, rename, and delete their own conversation history
- Download charts as PNG images and tables as CSV files
- Stop a running query at any time
- Rate answers using the thumbs up / thumbs down feedback buttons

**Standard users cannot:**
- Access datasets they have not been granted permission to in Power BI or SQL
- Bypass Microsoft Purview DLP policies — these are enforced automatically
- See or modify another user's conversation history
- Configure prompts, datasets, or data source connections

> All data access is governed by your organisation's existing permissions in Power BI workspaces, Azure SQL, and Microsoft Purview policies. The Databot does not grant any additional data access beyond what the user already holds.

---

### Administrator (IT / Platform Owner)

Administrators are responsible for deploying, configuring, and maintaining the Databot. They do not interact through the chat UI for configuration — all admin settings are managed through Azure environment variables, the Power BI admin portal, the Microsoft Purview portal, and the Azure SQL database.

**Administrators are responsible for:**
- Deploying and updating the Databot on Azure Container Apps
- Configuring the Entra app registration (OAuth login, API permissions)
- Connecting data sources (Power BI workspaces, SQL servers, Storage accounts)
- Granting the User-Assigned Managed Identity (UAMI) access to Azure SQL and Storage
- Setting environment variables that control all application behaviour

> The Deployment Guide (separate document) provides full step-by-step instructions for all administrator tasks.


## 1. Introduction

**Governance Databot** is a conversational AI assistant that lets you explore your organisation's data simply by asking questions in Natural Langauge — no technical knowledge, SQL, or formulas required.

You type a question like *"Show me total sales by region for last quarter"* and the Databot:

1. Translates your question into a precise database query
2. Executes it against your connected dataset
3. Returns the results as an interactive chart, a data table, or a narrative summary — or all three

All your conversations are saved automatically and can be resumed at any time.

### What data sources can I use?

| Data Source | What it is |
|---|---|
| **Microsoft Power BI** | Semantic data models published in Power BI workspaces |
| **Azure Table Storage** | Structured tables stored in Azure cloud storage |
| **SQL Database** | Relational databases hosted on Azure SQL |

---

## 2. Getting Started — Signing In

### First time opening the Databot

1. Open your browser and navigate to the Databot URL provided by your administrator.
2. The page will automatically redirect you to the **Microsoft sign-in page**.
3. Enter your **work email address and password** (the same credentials you use for Microsoft 365 / Outlook).
4. Complete any multi-factor authentication (MFA) prompt if required by your organisation.
5. After a successful sign-in, you will be redirected back to the Databot application automatically.

> **Note:** You do not create a separate Databot account. Your existing Microsoft work account is used. If you cannot sign in, contact your IT administrator.

### Returning users

On subsequent visits, if you previously signed in and have not cleared your browser data, you will be taken directly into the application without needing to sign in again. Your last conversation may also be restored automatically.

### Sign-in error screen

If the sign-in process fails three times in a row, you will see a red **Authentication Error** box explaining the problem. This screen has two buttons:

| Button | What it does |
|---|---|
| **Try Again** | Resets the attempt counter and retries the sign-in flow |
| **Reset & Refresh** | Clears all stored session data and fully reloads the app |

If the error persists after using both buttons, contact your administrator — the backend service may be unavailable.

---

## 3. The Main Interface — A Tour

Once signed in, you will see the main Databot interface. Here is an overview of all the areas on screen:

```
┌───────────────────────────────────────────────────────────────────┐
│ ☰  (Sidebar toggle — top-left)          ✕ (Logout — top-right)   │
├───────────────────────────────────────────────────────────────────┤
│  SIDEBAR (when open)     │  MAIN CONTENT AREA                     │
│  ┌─────────────────┐     │                                        │
│  │ SELECT DATASET  │     │   Governance Databot  (title)          │
│  │ [dropdown]      │     │                                        │
│  ├─────────────────┤     │   [ Azure Table Storage ]  [ Power BI ]│
│  │ CURRENT DATASET │     │   [ SQL Database                      ]│
│  │ <name here>     │     │                                        │
│  │ <description>   │     │   (chat messages appear here)          │
│  ├─────────────────┤     │                                        │
│  │ [+ New Chat]    │     │   ─────────────────────────────────── │
│  ├─────────────────┤     │   [Select datasource] [View Prompts]   │
│  │ CHAT HISTORY    │     │   ┌──────────────────────────────────┐ │
│  │ ▶ Dataset Name  │     │   │ Enter your question here      →  │ │
│  │   └ Chat 1      │     │   └──────────────────────────────────┘ │
│  │   └ Chat 2      │     │                                        │
│  └─────────────────┘     │                                        │
└──────────────────────────────────────────────────────────────────┘
```

### Key controls at a glance

| Control | Location | What it does |
|---|---|---|
| **☰ Sidebar Toggle** | Top-left corner | Opens/closes the left sidebar panel |
| **✕ (red) Logout** | Top-right corner | Signs you out of the application |
| **Data source cards** | Centre of page (before start) | Clickable tiles to pick your data source |
| **Dataset dropdown** | Sidebar (when open) | Selects which specific dataset to query |
| **Current Dataset panel** | Sidebar, below dropdown | Shows the active dataset name and its description |
| **+ New Chat button** | Sidebar, below Current Dataset shows when chat is currently ongoing | Starts a fresh conversation on the same dataset |
| **Chat History** | Sidebar, bottom section | Shows all your past conversations, grouped by dataset |
| **Select datasource button** | Input bar, left side | Opens a popup to switch to a different data source mid-chat |
| **View Prompts button** | Input bar, right side,enables after dataset selection | Opens a popup with ready-made questions for the selected dataset |
| **Question input box** | Bottom centre | Where you type your questions |
| **Send button (→)** | Inside the input box (right) | Sends your question |
| **Stop button (■)** | Inside the input box (right, during query) | Cancels a running query |

---

## 4. Step 1 — Choosing a Data Source

Before you can ask any questions, you must tell the Databot which type of data source you want to query.

### Using the datasource cards (fresh start)

When you first open the application and have no active conversation, the main area shows three clickable cards:

| Card | Icon | What it connects to |
|---|---|---|
| **Azure Table Storage** | Blue storage icon | Tables in your organisation's Azure Storage account |
| **Power BI** | Yellow Power BI logo | Semantic models in Power BI workspaces |
| **SQL Database** | Blue database icon | Relational SQL databases (full-width card, bottom row) |

**Click the card** for the data type you want to work with. The sidebar will open and begin loading the list of available datasets for that source.

### Switching datasource mid-session

You can change your data source at any time using the **"Select datasource"** button in the bottom input area.

1. Click **"Select datasource"** (or the name of the currently selected source, if one is already chosen).
2. A popup appears showing the available sources in a grid.
3. Click the source you want. The sidebar will reload with datasets for that source.
4. **Note:** Switching to a different data source will start a fresh conversation — your current chat will not be lost (it remains in Chat History) but you will need to select a new dataset.

---

## 5. Step 2 — Selecting a Dataset

After choosing a datasource, you must select which specific dataset to query.

### Opening the sidebar

If the sidebar is not visible, click the **☰ toggle button** (top-left). The sidebar slides in from the left.

### Choosing from the dropdown

1. At the top of the sidebar, you will see the **"SELECT DATASET"** label and a dropdown menu.
2. Click the dropdown and choose the dataset you want from the list.
3. If no datasets are available for the selected source, you will see a message such as **"No SQL datasets available."**

### What happens after selecting a dataset

- The **"CURRENT DATASET"** panel in the sidebar updates to show:
  - The dataset name in bold
  - A short AI-generated description of the dataset (e.g. "This dataset contains sales performance data for all regional offices...")
- A **"+ New Chat"** button appears below the panel.
- The question input box at the bottom becomes active and shows the prompt **"Enter your question here."**
- The main area shows a blue banner: **"Currently using [Dataset Name] from [Source Type]."**

> **Tip:** Read the dataset description in the sidebar — it tells you what kind of data is available and what questions are worth asking.

---

## 6. Step 3 — Asking a Question

With a dataset selected, you are ready to have a conversation with your data.

### Typing a question

1. Click on the text box at the bottom of the screen (it reads **"Enter your question here"**).
2. Type your question in Natural Langauge, for example:
   - *"Show me total revenue by department for Q1 2024"*
   - *"Which products had the highest return rate last month?"*
   - *"Compare sales performance across all regions year to date"*

### Sending the question

- Press **Enter** on your keyboard, OR
- Click the blue **send arrow (→)** button inside the right side of the input box.

> **Shift + Enter** adds a new line inside your message without sending it. This is useful for multi-line questions.

### While the question is being processed

As soon as you send a question, the following happens:

1. Your question appears on screen as a **blue speech bubble** on the right side.
2. The send button is replaced by a red **Stop button (■)**.
3. A **status indicator** appears below your message with an animated shimmer text showing what the Databot is currently doing. Examples of status messages you may see:
   - *Received query. Initializing*
   - *Generating DAX query*
   - *Fetching data from Power BI*
   - *Generating chart*
   - *Checking data security policies*
   - *Building response*

These messages update in real time as each step completes. The entire process typically takes between 10 and 30 seconds depending on the complexity of your question and the size of the dataset.

### Input box states

| State | Appearance | Cause |
|---|---|---|
| **Active** | White background, normal text | Dataset selected, ready to type |
| **Disabled** | Grey background | No dataset selected, or query is in progress |
| **Setting up** | Shows "Setting up chat session..." | New chat session is being created |
| **No dataset** | Shows "Please select a dataset first" | No dataset has been chosen yet |

---

## 7. Understanding the Answer

After your question is processed, the Databot displays its answer in the main content area. An answer can consist of up to four parts, always shown in this order:

### 7.1 Chart (if applicable)

An interactive Plotly chart is shown first when the Databot determines that a visual representation adds value. See **Section 8** for full details on working with charts.

### 7.2 Data Table (if applicable)

If the result is tabular data, a styled table is shown. Each table has a **Download CSV** icon at the top-left corner. See **Section 9** for full details.

### 7.3 Description / Narrative

A plain-English explanation of the result is displayed in a grey panel. For example:

> *"Total sales for Q1 2024 reached £2.4 million across all regions, with the North West performing highest at £680,000 — an increase of 12% compared to Q1 2023."*

### 7.4 Query (collapsible, advanced)

A collapsed **"Query"** panel at the bottom shows the technical query (DAX or SQL) that was generated and executed to produce your result. See **Section 10** for details.

### 7.5 Follow-up suggestions

After each answer, a **"✨ I can also help you explore:"** box appears with 2–4 suggested follow-up questions relevant to your current results. See **Section 11** for details.

### 7.6 Feedback buttons

At the very bottom of each answer, two small icons allow you to rate the response. See **Section 15**.

---

## 8. Working with Charts

Charts are fully interactive and rendered using Plotly. The Databot automatically selects the most appropriate chart type (bar, line, pie, scatter, area chart, etc.) for your data.

### Chart controls (Plotly toolbar)

When you hover your mouse over a chart, a small toolbar appears in the top-right corner of the chart with the following icons:

| Icon | Action |
|---|---|
| 📷 Camera | **Download chart as PNG image** — saves the chart as a picture file to your computer |
| 🔍+ Zoom in | Zooms into the chart |
| 🔍- Zoom out | Zooms out |
| ✛ Pan | Switches to pan mode — click and drag to move around the chart |
| 🏠 Reset axes | Resets the view to the original zoom and position |
| 📊 Autoscale | Automatically fits all data in view |
| 📐 Box select / Lasso | Selects a region of the chart for zooming |
| 📌 Toggle spike lines | Shows/hides crosshair lines on hover |

### Interacting with the chart

- **Hover** over any bar, line, or data point to see an exact tooltip with the values.
- **Click and drag** on the chart axes to zoom into a specific range.
- **Double-click** anywhere on the chart to reset the zoom.

### Downloading the chart

Method — Plotly toolbar: Hover over the chart → click the **camera icon** (top-right of the chart).

The chart downloads as a `.png` file.

---

## 9. Working with Data Tables

Data tables are shown when your query returns structured rows and columns.

### Table features

| Feature | Where | How |
|---|---|---|
| **Column headers** | Top row, grey background | Labels for each column |
| **Alternating row colours** | Every other row is white/light grey | Makes rows easier to read |
| **Horizontal scrolling** | At the bottom of the table | Scroll right to see all columns if the table is wide |
| **Download CSV** | Small download icon (↓) at top-left of table | Downloads all data as a `.csv` spreadsheet file |

### Pagination — Loading more rows

By default, tables show the **first 100 rows**. If your result has more rows, a progress bar and counter appear below the table, showing for example:

> **Showing 100 of 350 rows (28%)** — [Load 100 more rows ↓]

Click **"Load 100 more rows ↓"** to load the next batch. Keep clicking until the counter shows **"All [N] rows loaded ✓"** in green.

> **Tip:** If you need all rows in a spreadsheet, click **Download CSV** rather than loading everything on screen — the CSV always contains the full dataset up to the configured maximum (1,000 rows by default).

### Downloading the table as CSV

1. Locate the **download icon (↓)** at the top-left of the table.
2. Click it.
3. A file named `table-output-[timestamp].csv` will download immediately to your computer.
4. Open the file in Microsoft Excel, Google Sheets, or any spreadsheet application.

---

## 10. The Query Panel

After every answer, a collapsible **"Query"** panel appears below the table or chart. This is aimed at more technical users who want to understand exactly how the Databot interpreted their question.

### Expanding the query

- Click anywhere on the **"▸ Query"** header bar to expand it.
- The panel expands to show the **DAX or SQL query** that was generated and executed. The query is displayed in a dark (dark grey/black) code block with monospace font.

### Collapsing the query

- Click the **"▸ Query"** header bar again. The code block collapses.

> **Note for non-technical users:** You do not need to read or understand the query. It is provided for transparency so technical users or administrators can verify that the Databot is querying the right data in the right way.

---

## 11. Follow-Up Questions

After every answer, a blue gradient box appears titled **"✨ I can also help you explore:"**

This box contains 3–4 **clickable question chips** — AI-generated suggestions for natural follow-on questions based on your current answer.

### Using a follow-up question

1. Read the suggested questions displayed as pill-shaped buttons.
2. Click any question chip to instantly send that question — it will appear in the input box and to be submitted.
3. The Databot processes it just like a manually typed question.

### Examples of follow-up suggestions

If you asked *"Show total revenue by region for Q1"*, follow-ups might include:
- *"Which region had the highest growth rate?"*
- *"Break down Q1 revenue by product category"*
- *"Compare Q1 revenue to Q1 last year"*

> **Tip:** Follow-up questions are the fastest way to explore your data — they are pre-validated to be relevant to the current dataset and result.

---

## 12. Using the Prompts Library

The **Prompts Library** is a curated list of ready-made questions that Databot generates prompts recommended by AI, for each dataset.These are an ideal starting point if you are unsure what to ask.

### Opening the Prompts Library

1. Make sure a dataset is selected (the "View Prompts" button is greyed out until a dataset is chosen).
2. Click the **"View Prompts"** button in the input bar area (above the text box, on the right).
3. A popup panel appears with recommended prompts displayed in a 2-column grid.

### Understanding a prompt card

Each prompt card shows:
- A coloured icon on the left
- The **question text** (what will be asked)

### Using a prompt

1. Click any prompt card in the popup.
2. The popup closes automatically.
3. The prompt text fills the input box.
4. The question is submitted and the Databot begins processing it.

### If no prompts are available

The popup shows: **"No prompts available for this dataset."**
This means no pre-configured prompts have been set up for the selected dataset. You can still type any question manually.

---

## 13. Managing Your Chat History

Every conversation you have is saved automatically and listed in the sidebar under **"Chat History"**.

### Opening the sidebar

Click the **☰ toggle button** in the top-left corner of the screen to open the sidebar.

### How chat history is organised

Chat history is grouped by **dataset name**. Each dataset group is a collapsible accordion section with the dataset name as the header.

For example:
```
▼ Sales Performance Dataset
    💬 Revenue breakdown by region      14/04/2026 09:15
    💬 Top 10 products this month       13/04/2026 16:30
▶ HR Analytics Dataset
▶ Finance Overview
```

### Expanding/collapsing a dataset group

Click the **dataset name row** (with the chevron ▶/▼ arrow) to expand or collapse that group.

### Loading a past conversation

1. Expand the dataset group containing the conversation.
2. Click on the conversation title (the text or the message icon 💬).
3. The main area loads all messages from that past conversation.
4. The active dataset is automatically set to match the dataset from that conversation.
5. The currently active chat is highlighted in **blue**.

### Renaming a conversation

1. In the chat history list, hover over the conversation you want to rename.
2. Click the **pencil (✏) icon** that appears on the right side of the conversation row.
3. The title changes to an editable text input with the current title highlighted.
4. Type the new name.
5. Press **Enter** or click the **green ✓ checkmark** button to save.
6. Press **Escape** or click the **red ✕ button** to cancel without saving.

### Deleting a conversation

1. In the chat history list, hover over the conversation you want to delete.
2. Click the **bin/trash icon (🗑)** that appears on the right side.
3. The conversation is permanently deleted from both the sidebar and the database.
4. If the deleted conversation was the one currently open in the main area, the main area resets to a blank state.

>  **Deletion is permanent and cannot be undone.** There is no confirmation prompt. Take care when clicking the delete icon.

### Chat titles

The conversation title is generated automatically from your first question. For example, if your first question was *"Show total sales by region"*, the title will be something like *"Total Sales Analysis by Region"*.

You can rename any conversation at any time using the pencil icon (see above).

---

## 14. Starting a New Conversation

You can start a fresh conversation at any time without losing your history.

### Method 1 — The "+ New Chat" button in the sidebar

1. Open the sidebar (click ☰ if it is closed).
2. Click the **"+ New Chat"** button (blue button between the Current Dataset panel and the Chat History section).
3. A new, empty conversation begins on the same dataset currently selected.
4. The new conversation appears in the Chat History under the active dataset.

> The "+ New Chat" button is only visible when a dataset is selected.

### Method 2 — Selecting a different dataset

If you select a different dataset from the "SELECT DATASET" dropdown while you are in the middle of a conversation, the Databot automatically creates a new conversation for the new dataset. Your previous conversation is preserved in the history.

### Method 3 — Switching data sources

Clicking a different data source (from the "Select datasource" button or the home screen cards) clears the current conversation area and lets you start fresh with a new dataset.

---

## 15. Providing Feedback on Answers

At the bottom of each AI-generated answer, you will see two small icon buttons for rating the response:

| Icon | Meaning | Result |
|---|---|---|
| 👍 Thumbs up | The answer was helpful and accurate | Button turns green |
| 👎 Thumbs down | The answer was unhelpful or incorrect | Button turns red |

After clicking either button, a small message appears: **"Thanks for your feedback!"**

### Changing your feedback

- Click the same button again to **clear** your rating (deselects it).
- Click the opposite button to **switch** from positive to negative or vice versa.

> **Note:** Feedback is currently recorded locally in your browser session. It is used to help the team improve the Databot over time. There is no free-text comment field in v1.0.

---

## 16. Stopping a Running Query

If a query is taking too long, or if you realise you asked the wrong question, you can cancel it at any time.

### How to stop a query

While a query is running, the **send button** inside the input box changes to a **red filled square (■)**.

1. Click the **red ■ Stop button**.
2. The query is immediately cancelled.
3. The status indicator disappears.
4. The input box returns to normal so you can type a new question.

> **Note:** If the query was almost complete when you clicked Stop, the response may already have been generated on the server. In this case, the result will be discarded and will not appear on screen.

---

## 17. Signing Out

To sign out of the Databot:

1. Click the **red LogOut icon (✕ / door-with-arrow)** in the **top-right corner** of the screen.
2. You will be signed out immediately.
3. The page will return to the sign-in state.

> **Note:** After signing out, the page will not automatically show an error. Simply close the browser tab or navigate away. If you return to the URL, you will be prompted to sign in again.

---

## 18. Error Messages & Troubleshooting

### "Authentication Error" — red box on login

| Message | Cause | Fix |
|---|---|---|
| Failed to authenticate after 3 attempts | The backend login service is unreachable | Click **"Reset & Refresh"** and try again, or contact your admin |
| OAuth Error: access_denied | You cancelled or denied the Microsoft sign-in prompt | Click **"Try Again"** and complete the sign-in |
| Backend URL not configured | Misconfigured deployment | Contact your administrator |

---

### "Please select a dataset first" — input box disabled

**Cause:** You have not yet selected a dataset.
**Fix:** Open the sidebar (☰) and choose a dataset from the dropdown.

---

### "No Power BI datasets available" / "No [Source] datasets available"

**Cause:** The connection to the data source returned no datasets. This can happen if:
- Your account does not have access to any datasets in that source
- The data source connection is misconfigured

**Fix:** Contact your administrator to verify your access and connection configuration.

---

### "Setting up chat session..." — input box shows this message

**Cause:** A new chat session is being created for you after selecting a dataset. This usually takes 2–5 seconds.

**Fix:** Wait — the input will become active automatically once setup completes.

---

### Status shows "Waiting for status connection..."

**Cause:** The live WebSocket status channel is temporarily unavailable.

**Fix:** This typically resolves itself within a few seconds. If it persists, refresh the page. The Databot will still process your query — you just will not see the step-by-step status updates.

---

### "Your request was too large" error (413 error)

**Cause:** You are in a very long conversation and the full conversation history is too large to send in a single request.

**Fix:** Start a new chat session by clicking **"+ New Chat"** in the sidebar. Your history is preserved but the new conversation starts fresh.

---

### "Error rendering message" — red box in the chat

**Cause:** A technical error occurred while displaying the AI's response.

**Fix:** This is uncommon. Refresh the page and try your question again. If it persists, note the question and report it to your administrator.

---

### Chart does not appear / shows error

**Cause:** The query returned data that could not be visualised (e.g. a single value, or incompatible data types).

**Fix:** The Databot will still show the result as a data table or description. Try rephrasing your question to request a different format, e.g. *"Show me a breakdown by month"* instead of *"What is total revenue?"*

---

### Session is lost after page refresh

**Cause:** In some cases (e.g. private browsing mode, browser storage restrictions), the session cannot be saved.

**Fix:** Select your dataset again from the sidebar and use the Chat History to navigate back to your previous conversation.

---

## 19. Tips & Best Practices

### Writing effective questions

 **Be specific** — Include time ranges, filters, and metrics:
> *"Show me monthly revenue for the UK region from January to March 2024"*

 **Name the fields you care about** — If you know column names, use them:
> *"Break down the Headcount column by Department and Location"*

 **Ask for the format you want** — Charts or tables:
> *"Give me a bar chart of top 10 products by sales volume this year"*

 **Avoid vague questions** — These produce less accurate results:
> *"Show me the data"* or *"What happened last year?"*

 **Use follow-up questions** — Build on previous answers:
> First: *"Show me revenue by region"*
> Then: *"Drill down into the Northern region by product category"*

---

### Managing conversations

- Keep each conversation **focused on one topic** — this helps the AI maintain context and produce more accurate follow-up answers.
- Start a **New Chat** when you switch topics or want a clean slate.
- Use **descriptive names** when renaming conversations so you can find them easily in Chat History.

---

### Downloading results

- Use **Download CSV** from data tables when you need to work with the data in Excel or another tool.
- Use the **chart camera icon** to save charts as images for including in presentations or reports.

---

### Performance

- **Simpler questions** get faster responses — broad or complex queries involving many filters and aggregations take longer.
- If a query seems stuck for more than 60 seconds, click the **red Stop button (■)** and try rephrasing or simplifying the question.
- Avoid extremely long conversations in a single session — if you are getting *"Request too large"* errors, start a new chat.

---

### Privacy & data handling

- All questions you ask are processed by an AI model hosted in your organisation's Azure subscription.
- If Microsoft Purview is enabled, your questions and the generated queries are evaluated against your organisation's data governance policies before results are returned.
- Chat history is saved in an Azure SQL database within your organisation's environment.
- The Databot does not share your data with any external parties.

---

*For further assistance, contact your internal administrator or the delivery team.*
