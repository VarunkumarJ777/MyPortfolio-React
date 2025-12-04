export type Stat = { label: string; value: string };

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  logo?: string;
};

export type SkillGroup = { title: string; items: string[] };

export type Certification = { name: string; issuer: string; year: string; url?: string };

export type Social = { label: string; url: string };

export type ProjectLink = { name: string; url: string; blurb: string };

export type Award = { title: string; issuer: string; year?: string };

export const hero = {
  name: 'Varun Kumar J',
  location: 'Cary, NC',
  title:
    'Software Development Engineer | Angular & React Expert | Full Stack Developer',
  summary:
    '6+ years leading UI architecture, design systems, and performance (Angular, React, TypeScript) with backend capability in Java, Spring Boot, and Node.js. Focused on shipping resilient experiences across banking, finance, insurance, e-commerce, healthcare, and SaaS.',
  email: 'jvarunkumar444@gmail.com',
};

export const stats: Stat[] = [
  { label: 'Experience', value: '6+ years shipping UI platforms' },
  { label: 'Performance', value: '30% faster UIs' },
  { label: 'Users served', value: '4k+ internal' },
  { label: 'Cloud', value: 'AWS · Azure · GCP' },
];

export const projects: ProjectLink[] = [
  {
    name: 'SAWCE (E-Commerce)',
    url: 'https://www.sawce.com.au/home',
    blurb: 'Multi-tenant e-commerce platform with RBAC dashboards for B2B, B2C, sellers, and admins.',
  },
];

export const experiences: Experience[] = [
  {
    role: 'Frontend Engineer',
    company: 'HCLTech (Deutsche Bank)',
    period: 'Sep 2024 — Present',
    location: 'Cary, NC',
    summary:
      'Leading DB’s UI-Commons Angular library and front-end architecture for compliance platforms, standardizing reusable components and performance.',
    logo: 'DB',
    highlights: [
      'Built and governed the UI-Commons Angular library with standards, docs, and releases for cross-app reuse.',
      'Delivered accessible, responsive features with REST/GraphQL integrations and improved dashboard render performance.',
      'Deployed on OpenShift with Jenkins/TeamCity pipelines; mentored engineers via reviews and best practices.',
    ],
    stack: [
      'Angular',
      'TypeScript',
      'RxJS',
      'NgRx',
      'GraphQL',
      'REST',
      'WCAG',
      'OpenShift',
      'Jenkins',
      'TeamCity',
      'Jest',
      'Jasmine',
      'Git',
    ],
  },
  {
    role: 'Consultant',
    company: 'Capgemini (Swiss Re)',
    period: 'Dec 2021 — Jan 2023',
    location: 'India',
    summary:
      'Built reusable Angular web components and scalable UI architecture for insurance apps, pairing Angular 16 with GraphQL-backed data flows.',
    logo: 'SwissRe',
    highlights: [
      'Developed reusable Angular Web Components (LitElement) and patterns for cross-project reuse.',
      'Expanded the internal component library with stronger docs and design alignment for adoption.',
      'Built data-driven views backed by REST and Apollo GraphQL; tests wired into Jenkins CI/CD.',
    ],
    stack: [
      'Angular 16',
      'TypeScript',
      'Java',
      'Apollo GraphQL',
      'NgRx',
      'HTML5',
      'Tailwind CSS',
      'ES6',
      'Karma',
      'Jasmine',
      'Git',
      'JIRA',
      'Jenkins',
      'AWS',
      'Agile/Scrum',
    ],
  },
  {
    role: 'Consultant',
    company: 'Capgemini (Wells Fargo)',
    period: 'Dec 2021 — Jan 2023',
    location: 'India',
    summary:
      'Modernized legacy banking UI by migrating to Angular and hardening security/routing, improving delivery velocity.',
    logo: 'WellsFargo',
    highlights: [
      'Migrated a legacy banking app to Angular, reducing maintenance and increasing delivery speed.',
      'Implemented secure routing with guards to protect sensitive flows and data.',
      'Shipped responsive UIs with product/QA/backend collaboration to hit release dates.',
    ],
    stack: [
      'Angular 12',
      'TypeScript',
      'Java',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Redux',
      'NgRx',
      'RxJS',
      'RESTful APIs',
      'Responsive Design',
      'GitHub',
      'ES6',
      'JIRA',
      'Jenkins',
      'AWS',
    ],
  },
  {
    role: 'UI Developer',
    company: 'Jarvis Business Solutions (SAWCE)',
    period: 'Apr 2021 — Nov 2021',
    location: 'India',
    summary:
      'Built a multi-tenant e-commerce platform with role-based dashboards for B2B, B2C, seller, and admin users.',
    logo: 'SAWCE',
    highlights: [
      'Implemented RBAC and modular UI components to scale across new business lines.',
      'Optimized API integrations and front-end performance for high-traffic storefronts.',
      'Delivered secure JWT-based authentication and session handling.',
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'JWT'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Birlasoft (DTCC)',
    period: 'Mar 2020 — Apr 2021',
    location: 'India',
    summary:
      'Modernized trading dashboards with component-driven Angular architecture for better reuse and reliability.',
    logo: 'DTCC',
    highlights: [
      'Refactored legacy UI into modular components adopted across projects.',
      'Improved UX and accessibility for trading workflows with modern Angular patterns.',
      'Cut UI errors and boosted engagement with responsive, consistent layouts.',
    ],
    stack: ['Angular', 'TypeScript', 'RxJS', 'Redux', 'Material'],
  },
  {
    role: 'Senior Associate',
    company: 'Wipro (LogiJob / Naukri)',
    period: 'Apr 2017 — Jul 2019',
    location: 'Hyderabad, India',
    summary:
      'Built React/Angular UIs for hiring and crypto products with responsive UX, API integrations, and CI-backed testing.',
    logo: 'Wipro',
    highlights: [
      'Delivered responsive React UIs for LogiJob/Naukri; integrated REST APIs and drove adoption via A/B testing and fixes.',
      'Built Angular components (HoneyBee) with Ag-Grid/Material patterns and mobile-first UX.',
      'Improved quality with automated tests (Jest/Cypress/Karma/Jasmine/Protractor) and CI (Jenkins/TeamCity).',
    ],
    stack: [
      'React',
      'Angular 2',
      'TypeScript',
      'JavaScript (ES5/ES6)',
      'Redux',
      'RxJS',
      'HTML5',
      'CSS3/SCSS',
      'Bootstrap',
      'Ag-Grid',
      'RESTful APIs',
      'Responsive Design',
      'SQL',
      'Jest',
      'Cypress',
      'Karma',
      'Jasmine',
      'Protractor',
      'A/B Testing',
      'Git',
      'Bitbucket',
      'Jenkins',
      'TeamCity',
      'Azure',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      'Angular (2–16)',
      'React',
      'React Native',
      'Redux',
      'TypeScript',
      'JavaScript (ES6+)',
      'RxJS',
      'NgRx',
      'Signals',
      'HTML5',
      'CSS3/SCSS',
      'Bootstrap',
      'Tailwind CSS',
      'Material UI',
      'Ag-Grid',
      'Micro Frontends',
      'WCAG Accessibility',
      'Responsive Design',
      'JSON',
      'XML',
      'Webpack',
      'Babel',
      'NPM',
      'Yarn',
      'Figma',
    ],
  },
  {
    title: 'Architecture & UI',
    items: [
      'Component-based architecture',
      'Design Systems / UI libraries',
      'Web Components (LitElement)',
      'Micro Frontend architecture',
    ],
  },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Java', 'Spring Boot', 'RESTful APIs', 'GraphQL', 'Apollo GraphQL', 'SQL', 'NoSQL'],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'AWS',
      'Azure',
      'GCP',
      'Docker',
      'Kubernetes',
      'Red Hat OpenShift',
      'Jenkins',
      'TeamCity',
      'CI/CD',
    ],
  },
  {
    title: 'Quality',
    items: [
      'Jasmine',
      'Karma',
      'Jest',
      'Cypress',
      'Playwright',
      'Selenium',
      'Protractor',
      'React Testing Library (RTL)',
      'TDD/BDD',
      'Automation',
    ],
  },
  {
    title: 'Methodologies',
    items: ['Agile', 'Scrum', 'Kanban', 'JIRA'],
  },
  {
    title: 'Tools & Methods',
    items: [
      'Git (GitHub, GitLab, Bitbucket, SourceTree)',
      'Bitbucket',
      'Postman',
      'VS Code',
      'Cursor AI',
      'GitHub Copilot',
      'Gemini',
      'Glean AI',
    ],
  },
  {
    title: 'Operating Systems',
    items: ['Windows', 'iOS', 'Linux', 'Ubuntu'],
  },
  {
    title: 'Other',
    items: ['Problem Solving', 'Communication', 'Algorithms'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'SQL (Intermediate) Certification',
    issuer: 'HackerRank',
    year: '2023',
    url: 'https://www.hackerrank.com/certificates/iframe/40d6fab27036',
  },
  {
    name: 'Machine Learning Methods and Tools',
    issuer: 'IBM',
    year: '2024',
    url: 'https://www.credly.com/badges/2fe83464-e074-43ee-b3f3-cfa57a217381/linked_in_profile',
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    year: '2024',
    url: 'https://www.credly.com/badges/ce1f7401-bc18-44a5-889c-fcfd285e575b/linked_in_profile',
  },
  {
    name: 'Python for Beginners',
    issuer: 'Simplilearn',
    year: '2023',
    url: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDYxNTQzNV8xNjk4NzEwODgyLnBuZyIsInVzZXJuYW1lIjoiVkFSVU4gS1VNQVIgSlVLQU5USSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4214%2FPython-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1461771805825764878&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVzzcpKQvIjHSrcEuyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAKzqRoBBAAAA',
  },
];

export const socials: Social[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/varunkumarjukanti' },
  { label: 'Instagram', url: 'https://www.instagram.com/iamvarunkumarj' },
  { label: 'GitHub', url: 'https://github.com/VarunkumarJ777' },
  { label: 'Email', url: 'mailto:jvarunkumar444@gmail.com' },
];

export const awards: Award[] = [
  { title: 'Hackathon Winner', issuer: 'HCL Tech' },
  { title: 'Delivery Champion', issuer: 'Capgemini' },
];

export const education = {
  school: "Saint Peter's University",
  degree: "Master's degree",
  period: '2023 — 2024',
};
