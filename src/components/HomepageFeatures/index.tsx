import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { HiMiniTag } from "react-icons/hi2";
import { PiNetworkFill } from "react-icons/pi";
import { RiFileList2Line } from "react-icons/ri";
import { ImCheckboxChecked } from "react-icons/im";

type FeatureItem = {
  title: string;
  icon: React.JSX.Element;
  description: JSX.Element;
  urlTo: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Data Posture Management',
    icon: <ImCheckboxChecked />,
    description: <>Govern the entire lifecycle, disposition, and archival of digital and physical data.</>,
    urlTo: 'docs/data-posture-management/overview',
  },
  {
    title: 'Data Posture Discovery',
    icon: <HiMiniTag />,
    description: <>Discover and classify all sensitive data with AI powered accuracy and scale.</>,
    urlTo: '/docs/data-posture-discovery/overview',
  },
  {
    title: 'Data Compliance Posture',
    icon: <PiNetworkFill />,
    description: <>Measure and remediate compliance posture across your data landscape.</>,
    urlTo: '/docs/data-compliance-posture/overview',
  },
  {
    title: 'AI and Agent Governance',
    icon: <RiFileList2Line />,
    description: <>Secure AI for adoption and remediation of existing security, privacy, and compliance risks.</>,
    urlTo: '/docs/ai-governance/guide',
  },
];

function Feature({ title, icon, description, urlTo }: FeatureItem) {
  return (
    <div className={clsx(styles.featureContainer)}>
      <div className={styles.circleIcon}>{icon}</div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a href={urlTo} className={styles.learnMoreLink}>
          Learn More
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.cardStyle}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
