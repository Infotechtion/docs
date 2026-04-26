---
id: Getstarted
title: Get Started
sidebar_label: Get Started
---

# Get Started – Data Posture Discovery

This guide helps IT administrators onboard a data source for Data Posture Discovery. It explains the difference between cloud-hosted sources and on-premises sources, and how the platform uses connectors and runtime services to build posture visibility.

## 1. Overview

Data Posture Discovery is designed to find and classify sensitive data across hybrid enterprise environments. It uses a connector framework to support multiple source types, while preserving customer data locality and minimizing data movement.

Two common onboarding patterns are:

- **Cloud-hosted sources**: direct integration through APIs and prefabricated datasets like Microsoft 365 and MGDC.
- **On-premises sources**: customer-hosted runtime services that build a discovery index locally before sending only outcomes to the SaaS platform.

## 2. Cloud-hosted data source onboarding

Cloud-hosted sources are the fastest to onboard because they can use direct API integration and existing metadata pipelines.

### 2.1 Example: Microsoft 365

Microsoft 365 discovery uses direct connectors to:

- read SharePoint, OneDrive, Teams, and Exchange metadata
- analyse file contents, labels, and sharing
- use Microsoft Graph APIs and Microsoft 365 security APIs where available

### 2.2 Prefabricated datasets: MGDC

For Microsoft 365, the platform can also leverage prefabricated datasets such as MGDC (Microsoft Graph Data Connect).

These datasets provide:

- prebuilt schema for sensitive data discovery
- standardized content extraction for posture analysis
- faster onboarding because the dataset structure is already understood by the platform

### 2.3 Onboarding steps for cloud-hosted sources

1. Confirm the customer’s cloud tenant and subscription details.
2. Ensure the service principal or managed identity has the required API permissions.
3. Register the source in the Data Posture Discovery portal.
4. Configure scopes, service accounts, and consent for Microsoft Graph or other cloud APIs.
5. Validate connectivity and run an initial discovery scan.
6. Review the discovery outcomes in the SaaS portal.

### 2.4 What stays in the cloud source

For cloud-hosted sources, the actual data files remain in Microsoft 365 or the cloud service. The platform reads metadata and discovery results, but does not extract raw content into the SaaS environment. The SaaS portal stores posture outcomes, classification hits, and risk summaries only.

## 3. On-premises data source onboarding

On-premises sources require more setup because the discovery runtime is deployed within the customer environment.

### 3.1 Typical on-premises sources

- NetApp file stores
- Windows file shares
- NAS and file servers
- Azure Stack and local data centers

### 3.2 Runtime services in the customer environment

For these sources, the platform deploys runtime services inside the customer environment to perform:

- local data scanning
- content analysis and metadata extraction
- discovery index creation
- classification and posture scoring

These runtime services are responsible for building an on-premises discovery index from the source data. The SaaS platform is then updated with only the discovery outcomes and posture metadata.

### 3.3 Onboarding steps for on-premises sources

1. Identify the source system and define the scope of discovery.
2. Deploy the required runtime services or connectors in the customer environment.
3. Configure service accounts, network access, and required permissions.
4. Point the runtime services at the local data repositories to build the discovery index.
5. Run a validation scan and confirm the runtime services can access the target data.
6. Configure secure outcome synchronization to the SaaS platform using ADF pipelines or equivalent data transfer mechanisms.
7. Review the posture results in the portal.

### 3.4 What stays on-premises

On-premises discovery keeps the source content and detailed indexes within the customer environment. Only the summarized discovery results, classification metadata, and posture outcomes are sent to the SaaS platform.

## 4. Key considerations for IT administrators

- **Data locality**: ensure raw data is not moved to SaaS; only metadata and outcome summaries are transferred.
- **Security**: deploy runtime services in the customer environment and secure API credentials and service accounts.
- **Performance**: schedule discovery scans to avoid peak business hours and monitor runtime service resource usage.
- **Governance**: document the discovery scope, source owner, and access policies for each onboarded source.

## 5. Posture discovery lifecycle

1. **Source registration**: add the data source in the platform.
2. **Connector configuration**: choose cloud API connector or on-prem runtime service.
3. **Initial scan**: perform the first discovery pass and generate posture metadata.
4. **Outcome synchronization**: transmit the discovery results to the SaaS portal.
5. **Review and refine**: validate results and adjust connector scope or classification rules.
6. **Ongoing scanning**: schedule periodic scans to keep posture data current.

## 6. Summary

Onboarding a data source for Data Posture Discovery requires different approaches depending on the deployment model.

- For cloud-hosted sources like Microsoft 365, use direct API connections and prefabricated datasets such as MGDC.
- For on-premises sources, deploy customer-hosted runtime services to build a local discovery index, then update the SaaS platform with only outcomes.

This approach balances broad source coverage with strong data governance, ensuring discovery supports posture visibility without exposing raw customer data outside its source environment.
