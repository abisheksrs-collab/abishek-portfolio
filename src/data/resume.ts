/**
 * Source of truth: Abishek R's resume data
 * Used by the portfolio website
 */

export type SkillCategory = 
  | 'd365-supply-chain'
  | 'erp-functional'
  | 'reporting-analytics'
  | 'power-platform'
  | 'cloud-devops'
  | 'tools-admin';

export interface Skill {
  name: string;
  category: SkillCategory;
  years?: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  dates: string;
  location: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website?: string;
}

export const contact: ContactInfo = {
  email: 'abishek.srs@gmail.com',
  phone: '+91 9345751355',
  location: 'Bengaluru, Karnataka',
  linkedin: 'linkedin.com/in/abishek-r-57858a224',
};

export const skills: Skill[] = [
  // D365 F&O Supply Chain Management
  { name: 'Procurement & Sourcing', category: 'd365-supply-chain' },
  { name: 'Purchase Orders', category: 'd365-supply-chain' },
  { name: 'Vendor Management', category: 'd365-supply-chain' },
  { name: 'Trade Agreements', category: 'd365-supply-chain' },
  { name: 'RFQs', category: 'd365-supply-chain' },
  { name: 'Inventory Management', category: 'd365-supply-chain' },
  { name: 'Transfer Orders', category: 'd365-supply-chain' },
  { name: 'Quality Management', category: 'd365-supply-chain' },
  { name: 'Sales Orders', category: 'd365-supply-chain' },
  { name: 'Quotations', category: 'd365-supply-chain' },
  { name: 'Agreements', category: 'd365-supply-chain' },
  { name: 'Returns', category: 'd365-supply-chain' },
  { name: 'Product Information Management', category: 'd365-supply-chain' },
  { name: 'Released Products', category: 'd365-supply-chain' },
  { name: 'Item Groups and Dimensions', category: 'd365-supply-chain' },
  { name: 'Warehouse Management', category: 'd365-supply-chain' },
  { name: 'Work Templates', category: 'd365-supply-chain' },
  { name: 'Location Directives', category: 'd365-supply-chain' },
  { name: 'Wave Processing', category: 'd365-supply-chain' },
  { name: 'Master Planning', category: 'd365-supply-chain' },
  { name: 'Coverage Groups', category: 'd365-supply-chain' },
  { name: 'Demand Planning', category: 'd365-supply-chain' },
  { name: 'BOMs', category: 'd365-supply-chain' },
  { name: 'Routes', category: 'd365-supply-chain' },
  { name: 'Production Orders', category: 'd365-supply-chain' },

  // ERP Functional Support & Administration
  { name: 'Business Process Analysis', category: 'erp-functional' },
  { name: 'Requirements Support', category: 'erp-functional' },
  { name: 'Functional Troubleshooting', category: 'erp-functional' },
  { name: 'Issue Resolution', category: 'erp-functional' },
  { name: 'ERP Configuration', category: 'erp-functional' },
  { name: 'Data Validation', category: 'erp-functional' },
  { name: 'UAT', category: 'erp-functional' },
  { name: 'Defect Management', category: 'erp-functional' },
  { name: 'Application Deployment', category: 'erp-functional' },
  { name: 'Release Management', category: 'erp-functional' },
  { name: 'LCS', category: 'erp-functional' },
  { name: 'Environment Management', category: 'erp-functional' },

  // Reporting & Analytics
  { name: 'Microsoft Fabric', category: 'reporting-analytics' },
  { name: 'Power BI', category: 'reporting-analytics' },
  { name: 'SQL', category: 'reporting-analytics' },
  { name: 'Dataverse', category: 'reporting-analytics' },
  { name: 'D365 Data Entities', category: 'reporting-analytics' },

  // Power Platform
  { name: 'Power Apps', category: 'power-platform' },
  { name: 'Power Automate', category: 'power-platform' },
  { name: 'Dataverse', category: 'power-platform' },

  // Cloud & DevOps
  { name: 'Microsoft Azure', category: 'cloud-devops' },
  { name: 'Azure DevOps', category: 'cloud-devops' },
  { name: 'CI/CD', category: 'cloud-devops' },
  { name: 'Azure Data Factory', category: 'cloud-devops' },
  { name: 'Azure SQL', category: 'cloud-devops' },
  { name: 'Azure VM', category: 'cloud-devops' },
  { name: 'Entra ID', category: 'cloud-devops' },

  // Tools & Administration
  { name: 'Microsoft 365', category: 'tools-admin' },
  { name: 'Intune', category: 'tools-admin' },
  { name: 'Jira', category: 'tools-admin' },
  { name: 'Zoho Suite', category: 'tools-admin' },
  { name: 'Confluence', category: 'tools-admin' },
  { name: 'Service Now', category: 'tools-admin' },
];

export const workExperience: WorkExperience[] = [
  {
    company: 'Korcomptenz',
    position: 'ERP Consultant',
    dates: '',
    location: 'Bengaluru, Karnataka',
    responsibilities: [
      'Provide functional and technical support for Microsoft Dynamics 365 Finance & Operations, focusing on ERP transactions, procurement, inventory, and business application operations.',
      'Collaborate with business users and technical teams to investigate functional issues, analyze requirements, and coordinate resolutions.',
      'Support procurement and inventory transaction investigations, including business data validation and issue analysis.',
      'Analyze D365 F&O tables, data entities, and relationships to support SCM reporting requirements.',
      'Develop and validate SQL/Fabric views for D365 F&O Sales and Production MIS reporting.',
      'Work with Microsoft Fabric, Power BI, and Dataverse to support ERP data integration and analytics.',
      'Administered Power Platform environments, including D365 database refreshes, VM deployments, solution and package deployments, and capacity and storage monitoring, along with user access and security role management.',
      'Support User Acceptance Testing (UAT), defect management, functional validation, and application enhancements.',
      'Handle deployment automation using Azure DevOps, along with database refreshes and environment management.',
      'Coordinate deployment activities and post-deployment validation with development and business teams.',
      'Document functional issues, technical findings, and application support resolutions.',
    ],
  },
  {
    company: 'Alpha Variance Solutions',
    position: 'Microsoft Dynamics 365 Engineer',
    dates: '',
    location: 'Bengaluru, Karnataka',
    responsibilities: [
      'Delivered functional and technical support for D365 Finance & Operations, Commerce, and Sales Hub across enterprise client environments.',
      'Managed L1/L2/L3 incidents, analyzed functional issues, and coordinated resolutions with business users and development teams.',
      'Supported SCM processes including procurement, purchase orders, vendor data, inventory transactions, and workflow issue investigations.',
      'Investigated transaction discrepancies and assisted with functional validation of ERP enhancements and application fixes.',
      'Collaborated with stakeholders to understand reported business issues, reproduce problems, and validate resolutions.',
      'Executed D365 F&O and Commerce deployments across Tier-1 and Tier-2 environments, ensuring seamless updates and patching.',
      'Managed Azure DevOps repositories, branches, build and release pipelines, and CI/CD activities.',
      'Supported Microsoft Fabric and Power BI reporting, including data analysis and validation.',
      'Performed environment administration, database backup and restoration, application monitoring, and performance troubleshooting.',
      'Supported Power Platform, Microsoft Azure, Intune, and Microsoft 365 administration, including user onboarding, licensing, and device compliance.',
      'Led Jira and Zoho implementation initiatives and participated in 24×7 on-call support during peak workloads.',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'Bharathidasan University, Tamil Nadu',
    degree: 'Bachelor of Computer Applications (BCA)',
    dates: '',
    location: 'Tamil Nadu',
  },
  {
    institution: 'Nettur Technical Training Foundation, Ramaiah University',
    degree: 'Diploma in Computer Science Engineering & Cloud Computing',
    dates: '',
    location: 'Ramaiah University',
  },
];

export const certifications: Certification[] = [
  { name: 'AZ-900: Microsoft Azure Fundamentals', issuer: 'Microsoft', date: '' },
  { name: 'AZ-104: Microsoft Azure Administrator', issuer: 'Microsoft', date: '' },
  { name: 'AZ-700: Azure Network Engineer', issuer: 'Microsoft', date: '' },
  { name: 'PL-900: Power Platform Fundamentals', issuer: 'Microsoft', date: '' },
  { name: 'PL-300: Power BI Data Analyst Associate', issuer: 'Microsoft', date: '' },
  { name: 'MB-300: Dynamics 365 Core Finance & Operations', issuer: 'Microsoft', date: '' },
  { name: 'DP-600: Fabric Analytics Engineer Associate', issuer: 'Microsoft', date: '' },
  { name: 'NSDC Certification – Installation Technician, Computing and Peripherals', issuer: 'NSDC', date: '' },
];

export const awards: string[] = [
  'Excellence Award for Zoho Implementation',
  'Most Valuable Team Player',
];
