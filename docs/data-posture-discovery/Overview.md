---
id: Overview
title: Overview
sidebar_label: Overview
hide_title: true
---

# Data Posture Discovery Overview

The Data Posture Discovery feature gives organizations a unified way to discover, classify, and protect sensitive data across both unstructured and structured sources.

Built on a connector-based framework, the solution supports multiple source types with a flexible API-first architecture. This means you can bring together data from diverse repositories and inspect it through a single posture view.

Data Posture Discovery is also an essential step toward governing AI. By capturing where sensitive enterprise data lives and how it is accessed, the feature powers AI observability and helps ensure AI systems use data in a compliant, transparent way.

## Why Data Posture Discovery matters

Data Posture Discovery helps you:

- Locate sensitive and regulated data across your enterprise
- Understand where data lives, how it is shared, and whether it is protected
- Support regulatory compliance requirements such as data privacy, records management, and security controls
- Drive remediation actions based on evidence from multiple data sources
- Support AI governance by tracking sensitive data exposure and access patterns across sources

## Connector framework: the foundation

The feature is built on a connector framework that separates source connectivity from classification and governance logic. This architecture delivers:

- **Plug-and-play source support**: add new connectors without changing the core discovery engine
- **Unified metadata ingestion**: normalize inventory and sensitivity metadata from different repositories
- **Extensible API framework**: connect to custom or third-party systems using standard APIs

## Supported data sources

Data sources are grouped by the format they expose:

### Unstructured data sources

These sources store files, documents, and content where structure is defined by file metadata and content analysis.

- **Microsoft 365** (SharePoint, OneDrive, Teams content)
- **NetApp** file stores
- **On-premises file shares**
- **Azure Storage** (blobs, files, data lake storage)
- **Many more** through the API framework, including other enterprise file systems and content repositories

The unstructured connector framework makes it possible to scan documents, attachments, archives, and file content for sensitive data patterns and classification labels.

### Structured data sources

These sources store data in tables, columns, and schema definitions. Structured discovery works with the same governance and sensitive-data models used by Microsoft Purview.

- All data sources covered by **Purview data governance** , the top sources are listed below:
- **Snowflake**
- **Azure SQL**
- **Confluence**
- **Azure Data Lake Storage (ADLS)**
- **Fabric**
- Relational databases, data warehouses, analytics stores, and tabular data sources
- Any source that Purview can register, scan, and classify through its data governance connectors

Structured source discovery enables metadata-driven visibility for columns, tables, and data classifications, and aligns those findings with governance policies.

## What the feature delivers

- **Discovery of sensitive data across hybrid IT**: map sensitive content in cloud and on-premises repositories
- **Cross-source posture visibility**: compare unstructured and structured discovery results in one place
- **Classification and labeling support**: surface both native sensitivity labels and discovered patterns
- **Regulatory readiness**: provide evidence for privacy, data protection, and compliance frameworks

## Use cases

- Find sensitive files in Microsoft 365 and Azure Storage before a compliance review
- Discover regulated data in on-premises file shares and NetApp environments
- Combine Purview-managed structured data sources with unstructured content discovery
- Build evidence reports that span both file systems and governed databases
- Enable AI observability by connecting data posture insights with AI access and governance policies

## How it works for users

End users and compliance teams can:

1. Select the scope of discovery by choosing one or more connectors
2. Review discovered sensitive data and classification results
3. Apply filters to isolate unstructured or structured risk areas
4. Use the evidence to remediate sharing, labeling, or access issues

This overview highlights the multi-source capability of the solution and emphasizes its connector framework, which enables a broad range of unstructured and structured source coverage.
