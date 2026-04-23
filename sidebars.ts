import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Add your sidebars here
  dataPostureManagementSidebar: [
    {
      type: 'category',
      label: 'Data Posture Management',
      link: {
        type: 'doc',
        id: 'data-posture-management/Overview', 
      },
      items: [
        'data-posture-management/Overview',
        'data-posture-management/Getstarted',
        {
          type: 'category',
          label: 'User Manual',
          items: [
            'data-posture-management/Usermanual/RecordsLifecycleUM',
          ],
        },
        'data-posture-management/FAQ',
      ],
    }
  ],
  dataPostureDiscoverySidebar: [
    {
      type: 'category',
      label: 'Data Posture Discovery',
      link: {
        type: 'doc',
        id: 'data-posture-discovery/Overview', 
      },
      items: [
        'data-posture-discovery/Overview',
        'data-posture-discovery/Getstarted',
        {
          type: 'category',
          label: 'User Manual',
          items: [
            'data-posture-discovery/Usermanual/Usermanual',
          ],
        },
        'data-posture-discovery/FAQ',
      ],
    }
  ],
  dataCompliancePostureSidebar: [
    {
      type: 'category',
      label: 'Digital Compliance Posture',
      link: {
        type: 'doc',
        id: 'data-compliance-posture/Overview', 
      },
      items: [
        'data-compliance-posture/Overview',
        'data-compliance-posture/Getstarted',
        {
          type: 'category',
          label: 'User Manual',
          items: [
            'data-compliance-posture/Usermanual/Usermanual',
          ],
        },
        'data-compliance-posture/FAQ',
      ],
    }
  ],
  aigovernanceSidebar: [
    {
      type: 'category',
      label: 'AI and Agent Governance',
      link: {
        type: 'doc',
        id: 'ai-governance/guide', 
      },
      items: [
        'ai-governance/guide',
        'ai-governance/privacy',
        {
          type: 'category',
          label: 'User Manual',
          items: [
            'ai-governance/Usermanual/Usermanual',
          ],
        },
      ],
    }
  ],
  techDocsSidebar: [
    {
      type: 'category',
      label: 'Technical Documentation',
      link: {
        type: 'doc',
        id: 'tech-docs/Overview', 
      },
      items: [
        'tech-docs/Overview',
        'tech-docs/Architecture',
        {
        type: 'doc',
        id: 'tech-docs/DBSchema',
        label: 'i-ARM DB Schema',
      },
        'tech-docs/Targetoperatingsystem',
        'tech-docs/ConfigurationDesign',
        {
    type: 'doc',
    id: 'tech-docs/DeploymentGuide',
    label: 'Deployment Guide',
  },
      ],
    }
  ],
  productOverviewSidebar: [
    {
      type: 'category',
      label: 'Product Overview',
      link: {
        type: 'doc',
        id: 'product-overview/Overview', 
      },
      items: [
        'product-overview/Overview',
        'product-overview/Usecase',
        'product-overview/FAQ',
        'product-overview/Roadmap2025',
      ],
    }
  ],
  
};

export default sidebars;
