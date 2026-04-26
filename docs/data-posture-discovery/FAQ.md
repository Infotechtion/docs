---
id: FAQ
title: FAQ
sidebar_label: FAQ
---

# Data Posture Discovery FAQ

## General Questions

**Q1: What is Data Posture Discovery?**

**A1:** Data Posture Discovery is a capability within the Infotechtion solution that finds, classifies, and monitors sensitive data across your enterprise. It supports both unstructured data sources such as Microsoft 365, NetApp, on-premises file shares, and Azure Storage, as well as structured sources covered by Purview governance.

**Q2: Why is Data Posture Discovery important for AI governance?**

**A2:** The feature identifies where sensitive data resides and how it is accessed, which is essential for governing AI. By providing visibility into data posture, the solution enables AI observability and helps ensure AI systems only consume data that has been properly classified and authorized.

## Security and data handling

**Q3: How does the platform ensure customer data is not extracted outside the systems used for discovery?**

**A3:** The platform is designed to keep sensitive customer data within the source environment. Data Posture Discovery uses local connectors and customer-hosted services to inspect data in-place. Only metadata, discovery results, and classification outcomes are sent to the SaaS portal, not the raw file contents.

**Q4: What services are deployed in the customer environment for data analysis?**

**A4:** The solution deploys inspection and connector services within the customer environment. These services scan source repositories, perform content and metadata analysis, and generate discovery results locally. They are responsible for safely collecting only the information needed to evaluate posture.

**Q5: Does the SaaS platform receive raw customer data during discovery?**

**A5:** No. The SaaS platform receives only the outcomes of discovery: classification results, posture metadata, and evidence summaries. Raw data is not extracted or stored in the SaaS environment.

## Pipeline and outcome handling

**Q6: How are discovery outcomes updated into the SaaS platform?**

**A6:** Discovery outcomes are delivered to the SaaS platform through Azure Data Factory (ADF) pipelines or equivalent secure data movement services. The pipelines transmit only the processed discovery results and posture metadata, ensuring the SaaS instance contains the visibility and insights needed without ingesting raw sensitive content.

**Q7: What kind of information is written into the SaaS platform?**

**A7:** The SaaS platform stores discovery summaries, classification tags, posture scores, risk indicators, and other outcome metadata. It does not store the underlying documents, database rows, or raw content from the source systems.

## Connector framework and deployment

**Q8: What is the connector framework?**

**A8:** The connector framework is the architecture that allows the platform to connect to many different source systems using a standard, extensible model. It separates source connectivity from classification and governance logic, so new unstructured and structured sources can be added without changing the core discovery engine.

**Q9: Which data sources are supported by the connector framework?**

**A9:** Supported unstructured sources include Microsoft 365, NetApp, on-premises file shares, and Azure Storage, plus additional systems accessible through the API framework. Structured sources include those governed by Microsoft Purview, such as Snowflake, Azure SQL, Confluence, ADLS, Fabric, and other Purview-registered data stores.

## Compliance and audit

**Q10: How is access to discovery data controlled and audited?**

**A10:** Access is controlled using customer identity and access management policies. All discovery activity is logged and can be audited to show which connectors ran, what sources were scanned, and what discovery outcomes were produced.

**Q11: Can customers verify that only discovery outcomes are sent to the SaaS platform?**

**A11:** Yes. Customers can inspect the deployed services and ADF pipeline definitions to confirm that only outcome metadata and posture results are written to the SaaS environment. The architecture is specifically designed for data minimization and controlled data movement.

## Practical considerations

**Q12: What happens if a new source needs to be added?**

**A12:** The connector framework supports new source adapters, meaning the platform can extend support for additional unstructured systems through the API framework or structured systems via Purview connectors.

**Q13: Is discovery continuous or scheduled?**

**A13:** Discovery can be configured to run on a schedule or on demand based on customer requirements. The outcome updates into SaaS support both regular refresh cycles and targeted discovery events.

**Q14: Does the solution support hybrid and multicloud environments?**

**A14:** Yes. The platform is designed for hybrid and multicloud deployments, enabling discovery of on-premises, cloud, and SaaS data sources while keeping sensitive content within the customer’s controlled environment.
