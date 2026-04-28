# Target Operating Model
A target operating model (TOM) defines how a business or organization operates to achieve its goals and deliver value. It includes governance structures, processes, systems, skills, and performance metrics to ensure efficiency, security, and compliance. 
The i-ARM operating model will cover Shared Responsibility Model, Skills Requirements, Microsoft Certifications Recommendations, Workflow to Manage Product Feature Release and Hotfixes, Service Request Management, and Failover Modes and Possible Resolutions. These ensure clarity in roles, essential skills, structured workflows, efficient service request handling, and robust failover strategies for operational continuity.

## Shared Responsibility Model
The shared responsibility model for i-ARM delineates the responsibilities between the cloud service provider (Microsoft Azure) and the customer (i-ARM). The model ensures clarity in roles to maintain security, compliance, and operational efficiency. [i-ARM_TOM_Activities_Sample.xlsx](TargetoperatingsystemImages/i-ARM_TOM_Activities_Sample.xlsx)

| Responsibility Area | Infotechtion i-ARM Support | Consumer Cloud Support | Consumer Modern Workplace | Consumer Governance & Compliance |
| --- | --- | --- | --- | --- |
| Azure Management Group and Subscription Organization | Not Applicable | Management and Support responsibility | Not Applicable | Not Applicable |
| Azure landing zone | Review policies and rules, advise on any changes to enable i-ARM deployment. | Managing policies and rules for the security of landing zone. | Not Applicable | Not Applicable |
| i-ARM subscription Management | Provide subscription configurations. | Configuration and Management of subscription. | Not Applicable | Not Applicable |
| i-ARM resource Group Management | Configuration and Management of i-ARM services and binaries deployed in the resource group. | Configuration and management of shared services and connectivity. | Not Applicable | Not Applicable |
| Connectivity Subscription | • Review existing or new connectivity rules to assess impact to i-ARM services. • Provide Azure firewall rules required for connecting i-ARM service in/outbound connection • Investigate and report connectivity issues impacting i-ARM services as reported via support ticket. | • Configure firewall rules, VNet peering • Troubleshoot and Resolve connectivity issues impacting i-ARM services. | • Investigate and report connectivity issues impacting i-ARM services to i-ARM support and Cloud support. | Not Applicable |
| Network Infrastructure | Provide rules and exceptions required to be configured to allow communication between i-ARM services and endpoints. | Ensuring network connectivity and security. Configuring network settings and VPNs. | • Investigate and report connectivity issues impacting i-ARM services to i-ARM support and Cloud support. | Not Applicable |
| Virtual Machines (Data Gateway) | Managing i-ARM component configuration on VMs. | IAC template based new VM deployment | Not Applicable | Not Applicable |
| Identity and Access | Provide documentation of identities required by i-ARM. | Creation and management of i-ARM specific identities and RBAC. | Authorise use of RBAC and services requested for access by i-ARM. | Not Applicable |
| Security Monitoring | Enable i-ARM services integration with Azure Monitor service associated with i-ARM resource group. | Integrate Azure Monitor with Management subscription for monitoring. | Regular review i-ARM resource group Azure Monitor for critical errors and report to i-ARM support. | Not Applicable |
| Microsoft Purview | Configure and monitor Sync of i-ARM with Microsoft Purview labels and policies, disposition events and audit log via API connectivity. | Not Applicable | Coordinate issue resolution with Microsoft related to Microsoft services impacting the i-ARM service. | Review and report issues related to i-ARM integration with MS Purview. |
| Microsoft365 Endpoints | Support investigation and qualification of an issue attributed to i-ARM vs Microsoft service. | Not Applicable | Coordinate issue resolution with Microsoft related to Microsoft services impacting the i-ARM service. | Not Applicable. |
| Managed / Unmanaged Devices / Users | Not Applicable | Not Applicable | Investigate and assign responsibility for issues related to end user computing. | Not Applicable. |
| Information and Data | Not Applicable | Not Applicable | Data integrity and availability in M365 platform. | Data classification policies and enforcement. |

## Skills Requirements
The following skills are essential for the support staff managing the Azure subscription for i-ARM:
 * Cloud Architecture: Understanding of cloud infrastructure design and best practices.
 * Security Management: Knowledge of security protocols, identity management, and data protection.
 * Networking: Proficiency in configuring and managing virtual networks, VPNs, and firewalls.
 * Automation and Scripting: Skills in PowerShell, Azure CLI, and other automation tools.
 * Monitoring and Troubleshooting: Ability to use Azure Monitor, Log Analytics, and troubleshooting tools.
 * Compliance and Governance: Understanding of compliance requirements and governance frameworks.
 * Microsoft Purview: Understanding of various features of Data lifecycle, Records Management, Audit and eDiscovery.
 * Data Security: Knowledge of security best practices and compliance requirements for cloud environments. Experience with Azure Security Center, Azure Policy, and identity and access management (IAM).

## Technology Components
i-ARM application utilizes the below key technology components:

### Azure Governance
- **Subscription**: Logical container that organizes and manages Azure resources, providing a way to control access, manage billing, and apply policies.
- **Resource group**: Container that holds related Azure resources.
- **Subscription Resource Providers**: Includes providers like Microsoft.Network, Microsoft.Sql, Microsoft.Storage, etc.

### Entra (Azure Active Directory)
- **Application Registration**: Registers applications for secure access and authentication.
- **Service/User Accounts**: Manages service principals and user accounts for various operations.
- **RBAC Roles**: Role-Based Access Control for managing access to Azure resources.

### Networking
- **Virtual Network (VNet)**: Ensures secure communication among resources.
- **User Defined Route Tables**: Customizable routing rules for traffic management.
- **Network Security Groups (NSGs)**: Manages inbound and outbound traffic at the subnet and VM level.
- **Subnets**: Isolates and secures different resources within the VNet.

### Key Vault
- **Vault**: Secure storage for secrets, keys, and certificates.

### Web and App Services
- **App Service Plan**: Manages compute resources for web and function apps.
- **Function Apps**: Serverless functions for various business logic and workflows.
- **Storage Accounts**: Secure storage integrated with private endpoints.

### Database
- **Azure SQL Database**: Backend data store with private endpoint for secure access.

### Azure Monitoring
- **Log Analytics Workspace**: Central repository for aggregating and analyzing log data.

### Data Gateway
- **On-Premises Data Gateway**: Facilitates secure connections between external SaaS offerings and the SQL database.

### Security
- **Consumer Firewall Access**: Security policies and firewall rules for enhanced protection.

### Power Platform
- **Power BI**: Aggregates and visualizes data from various resources.
- **Power Automate**: Automates and orchestrates workflows.

### SharePoint Webparts
- **PRM SPFx**: Manages physical records.
- **PnP Search SPFx**: Enhanced search and filtering capabilities.
- **Modern Script Editor SPFx**: Custom styling for enhanced user experience.

### Azure Container Instances
- **Azure Container Registry**: Stores and manages container images.
- **Azure Container Instance**: Runs containers in the cloud without managing infrastructure.

### Azure DevOps
- **Repository**: Version control and CI/CD for i-ARM services.

## Microsoft Certifications 
To ensure the support staff is well-equipped to manage the Azure subscription, the following Microsoft certifications are recommended:

- **Microsoft Certified: Azure Fundamentals (AZ-900)**
- **Microsoft Certified: Azure Administrator Associate (AZ-104)**
- **Microsoft Certified: Azure Security Engineer Associate (AZ-500)**
- **Microsoft Certified: Azure Solutions Architect Expert (AZ-305)**
- **Microsoft Certified: DevOps Engineer Expert (AZ-400)**
- **Microsoft Certified: Information Protection & Governance (SC-400)**

# Workflow to Manage Product Feature Release and Hotfixes

This section defines the end-to-end quality assurance framework for the Infotechtion platform, bringing together the testing cycles, defect management practices, and product release lifecycle phases that govern how features are planned, developed, tested, and approved before reaching consumers.

---

## Objectives

The primary objectives of the Infotechtion platform testing strategy are to:

- Verify that the platform and its business features and workflows meet agreed requirements and acceptance criteria.
- Identify defects, errors, or issues that may affect performance, functionality, or usability, with planned actions to mitigate them.
- Identify enhancements or feature additions that improve overall product capabilities.
- Collect feedback from testing participants and incorporate it into the final product design, installation documentation, user manuals, and change logs.
- Evaluate user satisfaction, acceptance, and adoption, measuring the impact on business outcomes and value proposition.
- Align testing activities with each phase of the product release lifecycle — Alpha, Beta, and Live — ensuring quality gates are enforced before progression.
- Establish clear entry and exit criteria for every testing cycle so that all stakeholders can confidently approve progression between phases.

---

## Key Testing Aspects

The following testing aspects apply across all deployments of the Infotechtion platform, regardless of consumer environment. They define the minimum quality standards and testing approaches that must be in place for every release.

### Scalability and User Load

The platform must be capable of supporting the full range of specialist and general user roles defined by the consumer, sustaining expected user volumes over the contract period. An annual performance test is conducted in the Infotechtion-managed environment as part of the Acceptance Cycle to validate capacity headroom. Consumer-specific user volumes and growth rates are captured and documented before the Acceptance Cycle begins.

### Identity and Access Management

Role-based access control must be validated as part of every release to confirm that each user role can access only the data and features they are authorised for. Tests verify that identity group configurations, row-level security, and permission boundaries behave as expected across all defined roles. Evidence of access control testing is included in release notes.

### Error Handling and User Experience

The platform must surface readable and actionable error messages that are understandable to business users and support teams alike. UI and accessibility are evaluated during the consumer acceptance phase, and feedback is captured and tracked to resolution. Regression testing ensures that error handling is not degraded by subsequent releases.

### Browser Compatibility

Web components must be compatible with the last two major versions of the three most widely used browsers by market share, including the consumer's standard browser. Compatibility testing is conducted during the Acceptance Cycle. Older versions can be sourced from archives where required.

### Accessibility

The platform must meet WCAG 2.1 Level AA accessibility guidelines across all applicable interfaces. Accessibility testing is integrated into the commit cycle using automated tooling (Deque Axe), and results are included in release artefacts.

### Assistive Technology Compatibility

Integration with recent versions of screen readers, screen magnifiers, and speech recognition software must be verified. This testing is performed as part of the consumer-specific Post Release Cycle to account for variation in assistive technology configurations across consumer environments.

### Environment Separation

There must be clearly separated development, test, and pre-production environments with representative system configurations and data. These environments must not impact the live service or delay delivery. The Infotechtion-managed environment is used for the Acceptance Cycle; consumer-managed environments are used for the Release and Post Release Cycles, governed by separate Azure subscriptions.

### Test Evidence and Traceability

All test cases and scripts must be cross-referenced to functional requirements (FR), non-functional requirements (NFR), and security requirements. Successful testing must be signed off by relevant stakeholders to confirm that all aspects of the solution are fit for purpose. Traceability matrices are maintained and made available as part of release documentation.

### Test Results and Defect Tracking

Test results are captured in agreed tooling (for example, Excel-based test scripts or a nominated test management system). Defects are classified by severity, logged in the consumer's defect management system (such as JIRA), and tracked through to resolution. Infotechtion team members are granted access to monitor and provide feedback on logged defects.

### Automated Testing Compatibility

The platform is compatible with Selenium for automated testing of user acceptance and regression scenarios. Automation adoption is subject to stakeholder approval and incorporation into the overall test plan. SAST tooling is integrated into the CI pipeline. DAST is executed as part of the Acceptance Cycle.

### Accountability for Testing Execution

Infotechtion is responsible for executing all internal testing cycles (Commit and Acceptance). The consumer is responsible and accountable for executing User Acceptance Testing and any consumer-written integration testing, with support from Infotechtion. The consumer is accountable for agreeing the completion of each test cycle in line with the agreed exit criteria.

---

## Alignment with the Product Release Lifecycle

The Infotechtion platform Target Operating Model defines a structured workflow for managing product feature releases and hotfixes across four phases. Testing activities are explicitly mapped to each phase to ensure quality is embedded from inception through to live deployment.

### Discovery & Planning Phase

Testing activities begin at the Discovery phase by establishing the quality framework for each new feature. The following activities must be completed before the Alpha phase commences:

- Define the problem statement and business need clearly enough to derive testable acceptance criteria.
- Identify and document users, their context, and constraints that will influence testing scenarios and personas.
- Agree on design decisions, KPIs, and metrics that will be used to evaluate testing success.
- Identify non-functional requirements applicable to the feature.
- Assign a Test Analyst to begin drafting the initial test plan framework for the feature.

### Alpha Phase

The Alpha phase focuses on proof-of-concept testing in a controlled internal environment. Solutions developed during Alpha are not available for consumer use. Key testing activities are:

- Develop testing plans linked to feature-level user stories and the riskiest assumptions identified during Discovery.
- Perform proof-of-concept testing aligned with the Infotechtion platform testing strategy, including unit and integration testing as part of the Commit Cycle.
- Evaluate prototype implementations against defined acceptance criteria. Capture findings in test script templates.
- Obtain approval from the Infotechtion Product Architecture Board and Product Owner before progression to Beta. Approval is conditional on all critical and high defects being resolved or formally risk-accepted.

### Beta Phase

The Beta phase promotes the best Alpha solutions into enterprise-grade development, integrated with existing product architecture. Testing has two sub-phases.

#### Private Beta

Internal testing by Infotechtion teams prior to consumer involvement:

- Enrich user stories with well-developed test plans aligned with the testing cycles and test suites defined in this strategy.
- Execute the full Acceptance Cycle — functional, non-functional, security, performance, and regression tests — in the Infotechtion-managed environment.
- Conduct Architecture Reviews covering deployment approach, security measures, performance considerations, data model impacts, open standards usage, availability, backup, and disaster management.
- Update release notes with features, configuration changes, deployment considerations, regression steps, and known impacts.

#### Consumer Beta

Release of the feature for testing by early adopter consumers in an Infotechtion-managed or consumer-managed non-production environment:

- Consumer testing teams execute Release Cycle smoke tests and pilot user functional tests following test cases associated with the release feature.
- Third-party testers verify security, vulnerability, accessibility, performance, and stability.
- Defects are logged in the consumer's defect management system, classified by impact level, and tracked to resolution.
- Obtain approval from the Infotechtion Product Architecture Board and Product Owner, incorporating consumer feedback, before progression to Live Phase.

### Live Phase

A fully tested feature is ready for release into consumer-managed non-production and production environments. Key activities are:

- **Consumer Approval:** The consumer reviews release notes — including feature description, version, components, change impact, deployment instructions, test plan, and functional, non-functional, and security test results — and provides formal sign-off.
- **Deployment:** The feature is deployed to production using Infotechtion platform DevOps CI/CD pipelines. Smoke tests are executed post-deployment to confirm critical business functions operate correctly.
- **Monitoring:** The feature is monitored in production using Azure Monitor and Application Insights. Alerts are configured for high error rates and slow responses.
- **Post Release Cycle:** Enterprise-wide activation is facilitated by the consumer's business change management team. Users are provided with How-to Guides and support contacts. The hypercare period commences; all requests and defects are reported via the consumer's service management process.
- **Transition to Operate:** Feature documentation and knowledge articles are provided to consumer support teams and Infotechtion product support.

---

## Live Phase Change Approval Process

Infotechtion is responsible for notifying consumers of all changes to the Infotechtion platform ahead of deployment, whether those changes affect SaaS-delivered services or services deployed within a consumer-managed environment. The approval and communication process differs between these two deployment models, and both are described below.

The standard release schedule for the Infotechtion platform is **quarterly**, covering planned feature releases and non-critical updates. Exceptions to this schedule are made only for emergency fixes — hotfixes addressing Critical or High impact defects — which follow the expedited Hotfix Workflow and are deployed outside of the quarterly cadence with consumer notification issued as early as possible.

All releases, regardless of deployment model or release type, are accompanied by:

- **Release notes** from Infotechtion detailing the change, impacted components, version, deployment instructions, known impacts, and regression guidance.
- **Updated user manuals or knowledge articles** reflecting any changes to platform behaviour, configuration, or user-facing features.

Changes are deployed within an agreed out-of-hours window — typically outside of standard office hours as agreed with the consumer — or as prescribed by the consumer's defined change and release windows, whichever provides the greater protection to live services.

---

### SaaS Service Changes

SaaS services are hosted and operated entirely within Infotechtion-managed infrastructure. The consumer does not manage the underlying deployment, and changes are applied by Infotechtion directly.

**Infotechtion's responsibilities:**

- Notify the consumer's appointed representative of the upcoming change ahead of the planned deployment, providing full release notes and any updates to user documentation.
- Obtain consumer approval before proceeding with the deployment. This approval is sought directly from the consumer's appointed representative or change authority outside of any consumer-led Change Advisory Board (CAB) sessions, as SaaS deployments do not follow the consumer's internal CAB cadence.
- Deploy the change after consumer approval has been received, within the agreed out-of-hours deployment window or the consumer's prescribed release windows.
- Communicate post-deployment confirmation and any relevant monitoring observations to the consumer's appointed representative.

**Consumer's responsibilities:**

- Designate an appointed representative or team authorised to review and approve SaaS service changes on behalf of the organisation.
- Review release notes and updated documentation provided by Infotechtion and provide approval or raise objections within the agreed response window.
- Communicate any known business events or sensitivities that should influence the timing of a deployment.

> SaaS service changes do not require consumer-side deployment activity and are not bound by the consumer's internal change freeze windows. However, Infotechtion will work with the consumer's appointed representative to avoid deployments during periods of known business sensitivity where practicable.

---

### Changes to Services in Consumer-Managed Environments

Services deployed within a consumer-managed environment — such as Azure resources provisioned in the consumer's own subscription — are subject to the consumer's own change management governance. Infotechtion support works collaboratively with the consumer's appointed representative or designated change team to plan and schedule these changes in alignment with the consumer's release management strategy.

**Infotechtion's responsibilities:**

- Engage the consumer's appointed representative or change team to initiate change planning ahead of the quarterly release or emergency fix.
- Provide full release notes and updated user documentation in advance, giving the consumer sufficient time to raise a change request and seek internal approvals.
- Work within the consumer's defined change and release windows, respecting internal CAB sessions, release freeze periods, and any other governance controls the consumer has in place.
- Provide deployment support during the agreed change window, including execution of CI/CD pipeline steps and post-deployment verification.
- Communicate post-deployment confirmation and monitoring outcomes to the consumer's change team.

**Consumer's responsibilities:**

- Appoint a representative or team responsible for coordinating change requests with Infotechtion and obtaining internal approvals through the consumer's change management process.
- Raise and manage change requests in the consumer's change management tooling, incorporating the release notes and documentation provided by Infotechtion.
- Ensure that the agreed deployment window is reserved and that any prerequisite environment preparations are completed in advance.
- Communicate change freeze windows, CAB schedules, and any constraints that affect the timing of the deployment.

> Deployments to consumer-managed environments are bound by the consumer's change freeze windows. Infotechtion will not deploy to a consumer-managed environment during a declared freeze period, including emergency fixes, unless the consumer's change authority grants an explicit exception. In such cases, the exception approval must be documented before deployment proceeds.

---

## Testing Cycles

Testing cycles are aligned with the full software delivery lifecycle and coordinate product releases through structured stage-gates. Each cycle carries defined pre-requisites, entry and exit criteria. All cycles are executed twice per feature release — once for acceptance testing and once for production — and repeat before each quarterly product release.

| Test Cycle | Description | Responsibility |
|---|---|---|
| **Commit Cycle** *(product code and security testing)* | SDK and DevOps checks designed for rapid execution with minimal dependencies. Fully automated, integrated into the CI pipeline, and must pass before code is committed. Azure DevOps integration ensures no security vulnerabilities are introduced during development. | Infotechtion product team as part of product feature development. |
| **Acceptance Cycle** *(testing of entire product in isolated environment)* | Validates how the application performs in isolation against requirements and acceptance criteria. Requires the full platform to function alongside data sources. Certifies the platform is ready for deployment to consumer tenants. All functional and non-functional tests for features being released are included. Outcomes documented in release notes. | Infotechtion product team before release for consumer testing. |
| **Release Cycle** *(consumer-specific environment)* | Smoke tests run after a feature has been released to a consumer tenant to ensure consistent operation of critical business functions. Tests are non-destructive. Pilot users perform functional tests. Consumer operations team may also perform select non-functional tests. | Infotechtion team and consumer team engaged on the implementation. |
| **Post Release Cycle** *(consumer-managed environment)* | Business adoption-focused cycle enabling enterprise-wide activation of released features, typically in groups by business function. Users are provided with How-to Guides and support contacts. Hypercare period commences. All requests and defects are reported via the consumer's service management process. | Consumer business change management team. |

---

## Entry and Exit Criteria

| Testing Cycle | Description | Entry Criteria | Exit Criteria |
|---|---|---|---|
| **Commit Cycle** | Code development testing | Code associated with the user story is complete. No code compilation issues. Unit test plan documented against the user story. | Code committed after passing automated tests in the CI pipeline. Pull request reviewed and approved, including associated release notes. |
| **Acceptance Cycle** | Define a releasable product or feature | Functional and non-functional test plans available and associated with feature user stories. Test plans reviewed and confirmed suitable. Change impact assessed for merging with the existing deployed solution. Design documentation and deployment guide updated. | Completion of all functional and non-functional tests for the features being released. Release notes updated with features, configuration changes, impact, deployment considerations, regression steps, and known impacts. |
| **Release Cycle** | Confirm product design decisions and functionality | Release deployed and validated in a non-production environment with exact or similar configurations. All data backed up for changes impacting the data model. Change requests approved and documentation submitted. | Smoke tests confirm consistent operation of critical business functions. Pilot users complete functional tests per release test cases. Consumer operations team may perform select non-functional tests. |
| **Post Release Cycle** | Enterprise-wide consumer alignment | Release deployed successfully with no critical errors. Post-deployment technical and sanity checks completed. | Enterprise-wide activation of released features complete. Users provided with How-to Guides and support contacts. Hypercare start and end dates confirmed. All critical defects resolved. |

---

## Hotfix Workflow

In addition to the standard release lifecycle, a structured Hotfix Workflow is in place for addressing production defects urgently. All activities are tracked in the consumer's defect management system.

| Step | Activity | Detail |
|---|---|---|
| 1 | **Issue Identification** | Detect and document the issue requiring a hotfix. Classify using the impact levels defined in the Testing Failure Impact Classification section. All critical production incidents must be reported to Infotechtion support within 20 minutes of detection. |
| 2 | **Impact Analysis** | Assess the impact of the issue on the system and users. Determine scope — number of users affected, core versus non-core capability — as this drives the SLA response and resolution targets. |
| 3 | **Development** | Develop the hotfix in a controlled environment isolated from production. The fix is scoped narrowly to address only the identified defect. |
| 4 | **Testing** | Conduct thorough regression and smoke testing to ensure the hotfix resolves the issue without introducing new problems. Security scanning must be run as part of the CI pipeline before the hotfix build is approved. |
| 5 | **Approval** | Obtain expedited approval from the Infotechtion Product Architecture Board and the Product Owner. For Critical and High impacts, consumer stakeholders must be notified and provide confirmation before deployment. |
| 6 | **Deployment** | Deploy the hotfix to the production environment using Infotechtion platform DevOps CI/CD pipelines. Change requests must be approved prior to deployment in the consumer's change management process. |
| 7 | **Verification** | Execute post-deployment smoke tests to verify the hotfix has successfully resolved the issue. Monitor Azure Monitor and Application Insights dashboards for a minimum of 24 hours post-deployment. |
| 8 | **Documentation** | Document the issue, root cause, solution applied, and lessons learned. Update the defect log, release notes, and the Known Limits register where applicable. Provide a root-cause analysis report to the consumer within the agreed timescales. |

> Critical issues are escalated immediately to Infotechtion senior management if unresolved within 2 hours of the initial response. If the service is returned with ongoing minor disruption, the severity is downgraded to the appropriate level and a root-cause analysis is carried out in line with standard Problem Management processes.

---

## Roles and Responsibilities

| Role | Responsibilities |
|---|---|
| **Project Manager** | Plans, manages, and oversees the testing process. Ensures alignment with project goals, scope, schedule, and budget. Reviews and approves the test plan, test design, results, and reports. Communicates with the test team, technical team, and stakeholders. Maintains the project-level RAID log inclusive of all testing RAID items. |
| **Test Lead** | Leads, coordinates, and supervises the test team. Ensures test cases and scenarios are designed, executed, evaluated, and reported per the test plan. Monitors test execution, defect management, and feedback management. Reports test progress to the Project Manager and stakeholders. |
| **Test Analyst** | Designs, develops, and documents test cases and scenarios based on functional and non-functional requirements and acceptance criteria. Groups test cases into test suites and cycles. Reviews and validates test design with the Test Lead, technical team, and stakeholders. |
| **Technical Engagement Team** | Solution and Infrastructure Architects responsible for evaluating the target architecture and the related testing strategy and approach. Reviews and validates test plans, design, results, and reports. |
| **Product Engineering Representative** | Regional product representative liaising with the technical engagement team on tickets associated with testing-related defects. |
| **Stakeholders** | Senior managers and executives overseeing and supporting the testing process. Reviews and approves test plan, results, and reports. Provides feedback on release outcomes and features. Evaluates user satisfaction and adoption. |
| **Users** | End users using the platform features in daily work. Provides feedback and suggestions on release outcomes and features. Evaluates user satisfaction, acceptance, and adoption. |

---

## Test Suites

Grouping tests into suites allows the Infotechtion platform to quickly adopt and revise test execution strategies. All tests are grouped according to when and how often they can be executed within each testing cycle.

| Test Suite | Description |
|---|---|
| **Acceptance** | Persona-based testing of the system to ensure it satisfies consumer acceptance criteria. Aligned with the Acceptance Cycle and executed prior to release. |
| **Smoke** | Testing all essential system components and features to ensure they are working correctly. Executed post-deployment in Release and Post Release Cycles. |
| **Integration** | Testing the inclusion of a new component of code within the system, including integration with Microsoft Purview, Microsoft 365, and Azure services. |
| **Regression** | Testing to ensure no existing features were broken and no new defects were introduced by a change. Executed in the Acceptance Cycle before each release. |
| **Performance** | A combination of load, spike, stress, and volume testing. Validates response times, throughput, and stability under sustained workloads. |
| **Security** | Specialised tests focused on security. SAST is integrated into the CI/CD pipeline to analyse source code. DAST is used to test running applications without access to source code. VAPT is conducted by third-party teams and results are shared with the consumer as part of release documentation. |

Security, performance, and regression tests are performed in the Acceptance Cycle before Infotechtion confirms the release is consumer-ready. Where consumers elect to conduct such tests within their own subscription, these are planned and owned by the consumer team.

---

## Testing Criteria and Quality Measures

The testing strategy is measured by the following quality criteria:

- **Functionality:** Features are tested to function as intended and as per agreed acceptance criteria for each functional requirement.
- **Stability and Scalability:** Product features are stable and robust, meeting acceptance criteria per non-functional requirements.
- **Penetration and Vulnerability:** VAPT tests scan and evaluate the platform for security weaknesses and simulate the impact of attacks on targeted vulnerabilities. Pen Test Reports and associated remediation activities are maintained and shared with the consumer.
- **Controllability:** Tests verify that platform features and access to data respect underlying security access management controls.
- **Operability:** The target architecture, operating manuals, support processes, and failure modes are validated with operations teams as fit for production use.
- **Observability:** The platform provides Service Governance (built-in service health, activity, security, and change monitoring logs) and Data Governance (data state reporting aligned with the classification scheme throughout the record lifecycle).
- **Stability Endurance:** Evaluates the endurance of the target architecture under sustained workload to identify memory leaks, resource consumption, degradation, or failure issues over time.

### Key Performance Indicators

| KPI / Metric | Explanation |
|---|---|
| **Test Case / Requirements Coverage** | Percentage of in-scope items that align with a test case. Applies to manual and automated coverage. |
| **Total Test Duration** | Total time the product team tests per iteration. |
| **Pass / Fail Percentage** | Percentage of test cases that passed and failed per cycle. |
| **Total Number of Defects** | Number of defects found in each iteration. |
| **Fixed Defects** | Number of defects found in an iteration that are subsequently fixed within the same iteration. |
| **Defect Escape Rate** | Number of defects found in production versus the number found during development. The environment in which a defect is found is always reported. |

---

## Automated Testing

Selenium is confirmed compatible with the Infotechtion platform and can be adopted by the consumer for automated testing of user acceptance and regression scenarios, provided it is approved by key stakeholders and incorporated into the plan, strategy, and overall test approach for UAT, production, and quarterly release testing of new functionality.

Accessibility testing (WCAG 2.1 Level AA) is automated using Deque Axe, integrated into the commit cycle. Additional automated checks include:

- Static Application Security Testing (SAST) integrated into CI/CD pipelines.
- Dynamic Application Security Testing (DAST) executed as part of the Acceptance Cycle.
- Azure DevOps pipeline-based code quality checks, dependency vulnerability scanning, and type checking executed on every commit.

### Suspension and Resumption

Testing suspension may occur when:

- A build contains multiple critical or high defects in a testing cycle that seriously prevent or limit testing progress.
- Testing of a specific functionality is suspended due to serious issues or defects preventing detailed testing of that functionality.

Testing resumes only when the problem or problems causing the suspension have been resolved and confirmed by the Test Lead.

---

## Testing Failure Impact Classification

The following impact classification is used consistently across all testing cycles and the hotfix workflow. All defects are documented in the consumer's defect management system and tracked to resolution. Each impact item requires a documented mitigation plan.

| Impact | Rating | Description |
|---|---|---|
| **Critical** | 1 | The entire release or a critical business process is unusable or not delivered. Corruption or loss of data would occur if the release code were deployed. There is no workaround. *SLA: Response within 20 minutes; Resolution within 4 hours.* |
| **High** | 2 | Part of the system or a key business process is unusable or not delivered. A workaround may exist but its use is unsatisfactory and may cause excessive delay. *SLA: Response within 20 minutes; Resolution within 8 hours.* |
| **Medium** | 3 | A non-critical function or business process is unusable or not delivered. The product may be released with this defect, but it may cause delays or end-user dissatisfaction. *SLA: Response within 3 hours; Resolution within 29 hours.* |
| **Low** | 4 | Cosmetic errors or documentation anomalies. A workaround exists or, if not, the impairment is slight. Most users would be unaware of the defect. *SLA: Response within 7 hours; Resolution within 44 hours.* |

### Mitigation Approaches

Four mitigation approaches are available for addressing testing failures. The product team discusses the preferred approach and creates backlog items to address priority risks:

1. **Accept the Risk:** Accept the risk and plan for the impact. Simulate the impact in safe environments to understand what risk is being accepted. This is a last-resort approach.
2. **Share the Risk:** Share the risk with other business units or reduce the impact through user guidance to reduce or avoid consequences.
3. **Reduce the Risk:** Implement a change or process that reduces the impact of the risk.
4. **Avoid the Impact:** Solve or fix the identified risk. This is the ideal approach but may not always be realistic due to time or technical constraints.

---

## Risk, Assumptions, Issues and Dependencies (RAID)

RAID management is an essential activity during the testing process. A single RAID log is maintained at the project level rather than maintaining a testing-specific log. The Project Manager is responsible for consolidating all testing-related RAID items.

Key risk areas to monitor across all deployments include:

- **Data synchronisation delays** between integrated platform services (such as Microsoft Purview) can impact test result validation. Manual synchronisation may be required as a mitigation.
- **Schema or data model changes** can break views or integrations tested in earlier cycles. Tests against views and integration points must be incorporated into every release that includes schema-related updates.
- **Row-level security implementation** must be studied and validated before Consumer Beta testing begins to prevent unauthorised data exposure in test environments.
- **Concurrency limitations** in framework choices can block performance and load testing. Architecture decisions affecting concurrency must be resolved before the Acceptance Cycle performance suite is executed.
- **Third-party service availability** (such as Microsoft Purview APIs in preview or alpha stages) may limit the scope of automated testing. Fail-safe configurations and manual alternatives must be documented.

## i-ARM Support SLA
To ensure the highest level of service and operational efficiency, i-ARM commits to the following Service Level Agreement (SLA) for support:
The following incident categories will be generally supported in the product.

| Category | Impact | Description | Example |
| --- | --- | --- | --- |
| Critical | extensive / widespread | The Solution is unavailable or Materially Disrupted in its entirety, or a Core element / application of the Solution is unavailable to all users. | Failure: Infotechtion solution database corruption. Mitigation: Data recovery based on recovery point and time objectives agreed with customer. |
| High | significant / large | The Solution is unavailable or Materially Disrupted for 25 Users or greater, or a Core element / application of the Solution is unavailable to 25 users or greater, or a non-Core element of the Solution is unavailable for all users. | Failure: Physical records Management user interface not available to records new Physical record metadata. Mitigation: Leverage bulk import feature with IT support which can be used even when user interface is inaccessible. |
| Medium | moderate / limited | The Solution is unavailable or Materially Disrupted for fewer than 25 Users, or a Core element / application of the Solution is unavailable to fewer than 25 Users, or a non-Core element of the Solution is unavailable to 25 users or greater. | Failure: Advanced analytics dashboard is unavailable to Compliance managers / reviewers. Mitigation: Critical data can be exported in Excel with IT support. |
| Low | minor / localised | The Solution is unavailable or Materially Disrupted for an individual User, or a non-Core element of the Solution is unavailable for fewer than 25 Users. All other Incidents not falling within the descriptions of Critical, High or Medium above. | Failure: Universal retention connector unable to connect to Microsoft purview to detect and update retention changes. Mitigation: Use Fileplan import method to update allowed changes using a CSV. |

## Incident Service Level Agreement
Infotechtion is committed to resolve all production incidents and bring them to a stable state. The resolution time is the elapsed time between the fault being reported to Infotechtion support and either the Service returning to full operation or an agreed workaround being in place.
| Category | Response Target | Resolution Target | Applicable Hours* |
| --- | --- | --- | --- |
| Critical | 20 minutes | 4 hours | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| High | 20 minutes | 8 hours | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Medium | 3 hours | 29 hours | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Low | 7 hours | 44 hours | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |

\* Custom hours as per customer requirements to be agreed with additional costs.

An incident resolution is considered to have been achieved when the Service is returned to a condition where the Solution is delivering its full functionality. This may be achieved by a workaround without root-cause being established by agreement of the customer. 
If the Service is returned with ongoing minor disruption the severity will be downgraded to the appropriate severity level. A root-cause analysis will be carried out in line with the standard Problem Management processes. 

## Support Channels
- **Email Support**: Available 24/7 for all issues. Monitoring and response according to priority.
- **Phone Support**: Available for Critical and High Priority issues during business hours.
- **Ticketing System**: All issues must be logged through the ticketing system for tracking and escalation purposes.

## Escalation Process
- If an issue is not resolved within the specified resolution time, it will be escalated to the next support level.
- Critical Issues will be escalated immediately to senior management if unresolved within 2 hours of the initial response.

## Performance Metrics
- **First Contact Resolution Rate**: Target of 80% of issues resolved on first contact.
- **Customer Satisfaction**: Regular surveys to ensure a satisfaction rate of 90% or higher.
- **Uptime**: Target uptime of 99.9% for all critical services.

## Service Request Management
A service request is a process through which a customer can request changes to the product configurations and features already included in the service request agreement or through raising an additional change request. The following table provides the definition of service request categories:

| Request Category | Description |
| --- | --- |
| Standard Request | A request which is offered as standard part of the support model to all customers. These can be further identified by following priorities: |
| Non-standard Request | A request where there is no defined process or a request for completing standard requests. These often require additional effort and priced per request through a change management process. The exception to the above will be in scenarios where a non-standard request is already / agreed to be included in the product roadmap for delivery. In which case, the service request delivery will follow the standard product delivery roadmap. |

## Service Request Service Level Agreement
| Category     | Priority | Response Target | Resolution Target | Applicable Hours* |
|--------------|----------|-----------------|-------------------|-------------------|
| Standard     | Medium   | 4 hours         | 3 days            | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Standard     | Low      | 4 hours         | 5 days            | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Non Standard | Medium   | 4 hours         | 7 days**          | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |
| Non Standard | Low      | 8 hours         | As per roadmap timeline, earliest the following quarter. | Mon-Fri 8:00 am till 5:00 pm excluding public holidays local to customer’s regional time zones |

\* Custom hours as per customer requirements to be agreed with additional costs.

\*\* Subject to the complexity of service request, these could require additional days. In such cases, the overall delivery can be split in sprints of 7 days. 

## Failover Modes and Possible Resolutions
Failover modes are predefined methods that ensure the continuity and availability of services during an unexpected system failure or maintenance event. These modes can include automatic failover, where systems switch to a backup without human intervention, and manual failover, which requires manual initiation. Understanding and agreeing upon failover modes is crucial in a target operating model because it guarantees that both service providers and customers have a clear plan to maintain operational efficiency, minimize downtime, and ensure business continuity, thereby solidifying the reliability and robustness of the IT infrastructure.

| Failover Mode | Description | Recommended Action | Cloud Support | i-ARM Support |
| --- | --- | --- | --- | --- |
| Automatic Failover | Automatic failover is supported at the zone level for Azure SQL Database and Storage Accounts, ensuring seamless continuity within an availability zone. For regional-level, i-ARM supports manual failover, enabling controlled recovery processes in the event of a broader regional outage. | Configure Azure SQL database and storage account with zone redundancy configurations for automatic failovers | R+A | C+I |
| Manual Failover | Manual failover requires human intervention to initiate the switch to a secondary region. | Set up manual failover procedures and runbooks, and ensure staff are trained on executing the failover to UK West in case of a failure in UK South. | R+A | C+I |
| Read-access Geo-redundant Storage (RA-GRS) | RA-GRS allows read access to the data in the secondary region while the primary region is operational. | Enable RA-GRS for storage accounts to allow read access from UK West when UK South is unavailable. Configure applications to use the secondary endpoint for read operations. | R+A | C+I |
| Geo-redundant Storage (GRS) | GRS replicates data to a secondary region, but access to the secondary region is only available during failover. | Use GRS to ensure data is replicated to UK West. Plan and practice failover procedures to switch access to the secondary region if UK South becomes unavailable. | R+A | C+I |

## Failure Modes and Possible Resolutions
i-ARM failure modes refer to the various ways in which i-ARM services can fail or malfunction. These can include issues such as network connectivity problems, virtual machine failures, identity and access problems, security breaches, data synchronization issues, service downtime, application errors, and backup and restore failures.

In the context of a target operating model (TOM), understanding and addressing software failure modes is crucial. A TOM defines how an organization operates to achieve its goals and deliver value, including governance structures, processes, systems, skills, and performance metrics. By identifying potential failure modes and establishing clear investigation and resolution strategies, organizations can ensure operational continuity, maintain security, and deliver high-quality services to their users.

> **Note:** These failure modes relate to possible issues after a successful deployment and validation of i-ARM in the customer environment.

| Failure Mode | Symptoms | Investigation Options | Possible Resolutions | Who to Contact for Support |
| --- | --- | --- | --- | --- |
| Network Connectivity Issues | i-ARM portal inaccessible from authorized devices. | Review Azure firewall and VNet peering configurations | Reconfigure firewall rules and VNet settings | Azure Cloud Support |
| Network Connectivity Issues | i-ARM portal loads but certain features or data does not load. | Review Azure firewall rules for ALL i-ARM API endpoints. | Update firewall rules to allow blocked API endpoints. | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Virtual Machine with Data gateway failure | Power BI reports are not loading after a successful sign-in | Check VM is online, Data gateway logs. | Re-configure Data gateway to allow Power BI access to i-ARM Azure SQL. | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Virtual Machine with Data gateway failure | No new items are displayed in 'my-disposal portal' as eligible for disposal for sites user reports items should be eligible for disposal review. | Check the VM is online Check the data gateway is configured as per i-ARM deployment guide Check Microsoft Purview Power automate flow logs for any failures Check i-ARM log analytics workspace for any application failures. | VM is online but missing configurations Power Automate unable to connect to Data Gateway Power automate did not trigger by Microsoft Purview Power Automate failed whilst updating i-ARM SQL update APIs | Primary: Cloud support to check VM and gateway Secondary: i-ARM support to check Microsoft Purview or i-ARM API issues. Finally: Microsoft Purview support for issues with Purview triggering Power Automate. |
| Identity and Access Problems | User successfully signed-in but unable to see any data in 'My Disposal' or Power BI reports. | Audit RBAC configurations and identity logs | Update RBAC roles, reset identities | Primary: Identity team for RBAC assignment Support: i-ARM Support |
| Security Breach or Alerts | Azure related cyber incident impacting ALL or some subscriptions. | Analyse Azure Security Center alerts and logs | Apply security patches, update security policies | Azure Cloud Support |
| Data Synchronization Issues | Record related activities are not captured in i-ARM audit for over 7 days, resulting in no new activity in Power Bi for past 7 days. | Verify Microsoft Purview sync status and API connections | Re-establish API connections, reconfigure sync | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Service Downtime or Degraded Performance | i-ARM portal takes more than 1 minute to load data. | Monitor Azure Monitor and Log Analytics for anomalies. | Scale resources, optimize configurations | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Application Errors | Azure log analytics captures critical application error. Authorized users report activities / decisions are not saved in i-ARM | Check application logs and error reports in i-ARM log analytics | A hotfix is required or affected service component requires re-deployment. | Primary: i-ARM Support, Secondary: Azure Cloud Support |
| Backup and Restore Failures | i-ARM portal / data / services are inaccessible after a failover test. | Review backup logs and recovery points | Re-initiate backup, restore from latest recovery point | Azure Cloud Support |

## Known  Limits Related to i-ARM and Microsoft Purview Integration

| Limit | Status | Owner | Planned Resolution | Workarounds |
| --- | --- | --- | --- | --- |
| Delays in master data sync between Microsoft Purview and i-ARM can be up to 14 days. | In Progress | Microsoft | Microsoft engineering has acknowledged the delays related to Purview notifications when items expire. A resolution to ALL Microsoft tenants is tracked for delivery in December 2024. | Infotechtion / Support team can perform manual synchronizations. |
| Limited support for special characters in File names needs extraction for archiving. | In Progress | Infotechtion | Expansion of special character support planned in Q1 2025 release. | Report failures to Infotechtion for a hotfix for identified special characters. |
| Delay in Record activities registration with Unified Purview Audit logs, impacting synchronization between i-ARM and Purview. | Known Limit | Microsoft | Customer advised to raise a ticket with Microsoft if audit entries are delayed. | Wait for audit to catchup, the delays are often due to M365 prioritization of higher priority services. |
| File move to another library or site after disposal review can result in unsuccessful dispositions by MS Purview | Known Limit | Microsoft | Wait for the file to come up again for disposition review. | Not Required, system will automatically pick up the file for a new disposition review cycle. |
| My Disposal dashboard allows Site level filters only when reviewing items for disposal or archival. | In Progress | Infotechtion | Scheduled feature update in Q1 2025 feature release. | Use other filter options available to find specific files. |
| Extension of records retention in bulk via selection of multiple items extend the retention for the first record retention in the selection, while all other record extension requests are ignored. | In Progress | Infotechtion | Scheduled Hotfix in Q1 2025 feature release. | Extend records one at a time by selecting a single record and select the retention extension option. |
| Delay by Microsoft Purview in performing the actual compliance actions on the SharePoint records, such as Compliance Delete or Compliance Relabel, after a review has been completed. | Known Limit | Microsoft | Customer advised to raise a ticket with Microsoft if compliance actions are delayed by over 14 days from confirming disposal decisions in i-ARM interface. | Wait for Microsoft Purview to catchup with the disposition backlog across the tenant. |

# i-ARM SaaS Platform — Disaster Recovery & Business Continuity

## Purpose and Scope

This document outlines the degree of disaster recovery (DR) offered within the Infotechtion i-ARM SaaS platform. It covers the platform-level protections that Infotechtion manages as part of its SaaS delivery commitment, including data backups, geographic redundancy, automated restore mechanisms, and alignment with industry-standard SaaS DR approaches.

> **Important Scope Distinction:** i-ARM services, where deployed into a consumer-managed Azure subscription — including networking, subscriptions, virtual machines, and storage accounts — are governed by the **consumer's own Business Continuity and Disaster Recovery (BCDR) plan**. Infotechtion's SaaS DR guarantees apply exclusively to the platform components managed and operated by Infotechtion. The shared responsibility model described below defines this boundary in detail.

---

## Platform Architecture and Resilience Foundation

The i-ARM SaaS platform is built on Microsoft Azure and follows a cloud-native, modular architecture designed for high availability and fault tolerance. Core platform components include:

- **Azure App Service** — hosts the i-ARM web application with autoscaling enabled
- **Azure Functions (Serverless)** — powers background processes and API services, with built-in fault tolerance via Durable Functions
- **Azure SQL Database** — central data store with native high-availability and automated backup capabilities
- **Azure Blob/Table Storage** — document and file storage configured with geo-redundant replication
- **Microsoft Entra ID** — identity platform with built-in redundancy and SLA-backed availability
- **Azure Key Vault** — secure credential store with private endpoint connectivity
- **Azure Monitor / Application Insights** — observability and alerting plane for proactive incident detection

The platform is designed with resilience-first principles: autoscaling compute, serverless execution, PaaS-managed infrastructure, and private network connectivity via VNet and Private Endpoints.

---

## Recovery Objectives

The following Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) reflect the targets Infotechtion maintains for i-ARM SaaS platform components hosted within the Infotechtion-managed environment.

### Infotechtion-Managed Platform Components (SaaS Guarantee)

| Business Function | IT System | RTO | RPO |
|---|---|---|---|
| Product development and delivery | Product codebase (Azure DevOps / GitHub) | 4 hours | 15 minutes |
| Product support and documentation | Product documentation (M365 E5) | 4 hours | 15 minutes |
| SaaS platform availability | i-ARM application services | 4 hours | 15 minutes |

These objectives are backed by Infotechtion's internal BCDR plan and reflect targets achievable through the platform's automated backup and infrastructure-as-code restore capabilities.

### Consumer-Hosted Deployment Components (Consumer BCDR Responsibility)

Consumer-deployed components — including Azure SQL Database instances, App Service Plans, Storage Accounts, VNet infrastructure, and Data Gateways provisioned in the consumer's subscription — are **outside the scope of Infotechtion's SaaS DR guarantee**. RTOs and RPOs for these components are determined by the consumer's own BCDR plan and Azure subscription configuration.

| Business Function | IT System | Indicative RTO | Indicative RPO | Responsibility |
|---|---|---|---|---|
| Client records data store | Azure SQL Database (consumer tenant) | Defined by consumer | Defined by consumer | Consumer |
| Connectivity and networking | Azure VNet, NSGs, Firewall rules | Defined by consumer | N/A | Consumer |
| Data Gateway | Azure VM (on-premises gateway host) | Defined by consumer | Defined by consumer | Consumer |
| Reports and analytics | Power BI, Power Automate | Defined by Microsoft SLA | Defined by Microsoft SLA | Microsoft / Consumer |

---

## Backup Strategy

### Azure SQL Database — Automated Backups

The Azure SQL Database used as the i-ARM central data store is configured with the following backup capabilities, leveraging native Azure PaaS features:

- **Point-in-Time Restore (PITR):** Full, differential, and transaction log backups are taken automatically by Azure. This enables restoration to any point within the configured retention period, providing near-continuous RPO capability.
- **Long-Term Retention (LTR):** Backup retention policies can be configured in line with consumer compliance requirements, supporting weekly, monthly, and yearly backup retention beyond the standard PITR window.
- **Transparent Data Encryption (TDE):** All database backups are encrypted at rest using Microsoft-managed keys, ensuring data security throughout the backup lifecycle.

### Azure Storage Accounts — Geo-Redundant Storage

All critical data stored in Azure Storage Accounts (archived files, document stores, and application state) is configured using geo-redundant storage options:

- **Geo-Redundant Storage (GRS):** Data is asynchronously replicated to a paired Azure secondary region. Access to the secondary region is available during a failover event.
- **Read-Access Geo-Redundant Storage (RA-GRS):** Where configured, read access to the secondary region is available while the primary region remains operational, enabling continuity of read operations without a failover being triggered.

### Product Codebase — Source Control Backup

The i-ARM product codebase is version-controlled in a cloud-based source control system (Azure DevOps / GitHub). Automated backups of the codebase are replicated to a secure cloud geo-location, supporting an RPO of 15 minutes and an RTO of 4 hours.

### Product Documentation

Product documentation is managed within Microsoft 365 E5. Backup and recovery for this system are managed by Microsoft as part of the M365 service agreement, inheriting Microsoft's platform-level SLA and recovery capabilities.

---

## Geographic Redundancy and Failover

### Automatic Zone-Level Failover

Azure SQL Database and Azure Storage Accounts support **automatic zone-level failover** through availability zone configurations. This ensures seamless continuity within an Azure availability zone without human intervention, protecting against hardware failures or localised datacenter issues.

### Manual Regional Failover

For regional-level outages (e.g., full loss of UK South), i-ARM supports a **manual regional failover process** to a secondary Azure region (e.g., UK West). This process is initiated by Infotechtion or the consumer cloud operations team following defined runbooks. The failover procedure involves:

1. Executing Infrastructure as Code (IaC) templates (Terraform/Bicep) to provision Azure resources in the secondary region
2. Performing Azure SQL Database geo-restore from geo-replicated backups
3. Confirming Azure Storage Account failover to the secondary region
4. Triggering CI/CD deployment pipelines to deploy application code and configuration into the restored infrastructure
5. Conducting end-to-end testing and User Acceptance Testing (UAT) prior to restoring user traffic

### Failover Mode Summary

| Failover Mode | Scope | Trigger | Responsibility |
|---|---|---|---|
| Automatic Zone Failover | Availability Zone | Automatic — no human intervention | Azure Platform |
| Manual Regional Failover | Azure Region (e.g., UK South → UK West) | Manual — Infotechtion or consumer cloud team | Consumer Cloud Support (R+A), Infotechtion (C+I) |
| RA-GRS Read Continuity | Storage Account reads | Automatic read redirect to secondary endpoint | Azure Platform / Consumer Config |
| GRS Data Replication | Storage Account data | Replication is continuous; failover is manual | Azure Platform |

---

## Automated Restore and Infrastructure-as-Code

A key element of i-ARM's alignment with modern SaaS DR practices is its use of **Infrastructure as Code (IaC)** for automated, repeatable environment provisioning.

- **Bicep / Terraform Templates:** All i-ARM infrastructure components are defined as code and stored in version-controlled repositories. In a DR scenario, these templates can be executed to provision an equivalent environment in a secondary region with minimal manual steps.
- **CI/CD Pipeline Restore:** Azure DevOps pipelines deploy application components (Azure Functions, Web Apps, APIs, Database schema, and configurations) automatically following infrastructure provisioning. This ensures that recovery does not depend on manual configuration steps.
- **Configuration Management via Azure Key Vault:** Application secrets, connection strings, and credentials are managed in Azure Key Vault. During a failover, Key Vault configurations are replicated and made accessible within the secondary environment, reducing the risk of configuration drift.
- **Application Insights Monitoring:** Continuous telemetry enables early detection of degradation or failure, supporting proactive incident response before a full DR event is required.

---

## Alignment with SaaS Disaster Recovery Standards

The i-ARM SaaS platform's DR approach is aligned with the following industry-standard SaaS DR practices:

| Standard Practice | i-ARM Implementation |
|---|---|
| Automated, continuous data backups | Azure SQL PITR and LTR; Azure Storage GRS/RA-GRS |
| Geographic data redundancy | GRS/RA-GRS replication to paired Azure regions |
| Infrastructure repeatability | Bicep/Terraform IaC templates for full environment reprovisioning |
| Automated deployment pipelines | Azure DevOps CI/CD pipelines for application layer recovery |
| Secure secret management | Azure Key Vault with private endpoint access |
| Observability and early warning | Azure Monitor, Application Insights, Log Analytics Workspace |
| Defined RTOs and RPOs | Documented per business function (see Section 3) |
| Regular testing | DR testing incorporated into Acceptance Testing cycles |
| Uptime commitment | 99.9% target uptime for all critical services |

---

## Shared Responsibility Model

The delivery of i-ARM as a SaaS product involves a shared responsibility model between Infotechtion, the consumer's cloud operations team, and Microsoft Azure. Understanding this boundary is essential to correctly scoping the DR guarantee.

| Responsibility Area | Infotechtion i-ARM | Consumer Cloud Support | Microsoft Azure |
|---|---|---|---|
| Platform code and application binaries | Owns and manages | Deploys via IaC | Hosts on Azure PaaS |
| Azure SQL backup configuration and PITR | Configures in IaC templates; advises on settings | Manages and configures in their subscription | Executes automated backups |
| Geo-redundant storage configuration | Recommends and configures in IaC templates | Manages in their subscription | Replicates data |
| Regional failover (manual) | Provides runbooks and support | Executes failover in their subscription | Azure platform initiates failover |
| Networking, VNet, NSGs | Provides required rules and firewall exceptions | Owns and manages | Hosts the network fabric |
| Data Gateway VM | Provides configuration guidance | Manages VM availability and DR | IaaS responsibility |
| Identity and access (Entra ID) | Documents required identities | Creates and manages RBAC assignments | Provides platform with SLA-backed HA |
| Consumer data integrity in M365 | Not applicable | Manages | Microsoft manages M365 platform |

> **Consumer BCDR Notice:** Services and infrastructure deployed within the consumer's Azure subscription — including but not limited to Azure SQL Database instances, Azure App Service Plans, Azure Storage Accounts, VNet resources, and Virtual Machines — are **governed solely by the consumer's BCDR plan**. Infotechtion's SaaS DR guarantee does not extend to these resources. Consumers are responsible for configuring appropriate backup retention periods, geo-replication settings, and failover procedures in their own subscriptions, in line with their organisational risk appetite and compliance obligations.

---

## Support SLA and Incident Response

Infotechtion's DR posture is underpinned by a defined support SLA for production incidents. In the event of a platform failure, the following response and resolution targets apply to Infotechtion-managed components:

| Severity | Description | Response Target | Resolution Target |
|---|---|---|---|
| Critical | Platform entirely unavailable or core functionality disrupted for all users | 20 minutes | 4 hours |
| High | Platform unavailable or disrupted for 25+ users, or a core element unavailable | 20 minutes | 8 hours |
| Medium | Non-critical function unavailable, or disruption affecting fewer than 25 users | 3 hours | 29 hours |
| Low | Individual user impact or minor cosmetic disruption | 7 hours | 44 hours |

Support is available via email (24/7 monitoring) and telephone (Critical/High during business hours, Monday–Friday 08:00–17:00 local time, excluding public holidays).

Critical incidents unresolved within 2 hours of initial response are escalated to Infotechtion senior management. Root-cause analysis is conducted following resolution of all production incidents.

---

## Exclusions and Consumer Responsibilities

The following are **explicitly outside the scope** of Infotechtion's SaaS DR guarantee and must be addressed within the consumer's own BCDR plan:

- **Consumer Azure subscription infrastructure** — VNet, NSGs, subnets, Resource Groups, and Subscription-level configurations
- **Consumer-provisioned Azure SQL Databases** — backup retention policy configuration, geo-replication enablement, and failover execution
- **Consumer-managed Storage Accounts** — geo-redundancy configuration and storage failover decisions
- **On-premises Data Gateway Virtual Machines** — availability, redundancy, and DR of IaaS-hosted gateway components
- **Microsoft 365 and SharePoint Online** — governed by Microsoft's platform SLA and the consumer's M365 BCDR arrangements
- **Microsoft Purview** — governed by Microsoft's platform SLA; known integration delays (up to 14 days for master data sync) are a documented platform limit outside Infotechtion's control
- **Power BI and Power Automate** — governed by Microsoft's Power Platform SLA
- **Consumer network infrastructure** — firewalls, VPN, ExpressRoute, and on-premises connectivity

---
