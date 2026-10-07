import { SkillGroup } from '@/types';

export const skillGroupsData: SkillGroup[] = [
  {
    id: 'data-analysis',
    category: 'DATA ANALYSIS',
    description:
      'Core analytical competencies: querying, cleaning, and transforming structured datasets to derive actionable insights and validate data integrity.',
    skills: [
      'Python (Pandas, NumPy)',
      'SQL (Queries, Aggregations, Joins)',
      'Data Cleaning & Preparation',
      'Exploratory Data Analysis (EDA)',
      'Data Processing & Transformation',
      'Data Visualization',
      'Statistical Analysis Fundamentals',
      'Spreadsheets (Microsoft Excel / Google Sheets)',
    ],
  },
  {
    id: 'data-engineering',
    category: 'DATA ENGINEERING',
    description:
      'Foundational pipeline and data workflow concepts: ingesting data, modeling relational schemas, and orchestrating reliable processing steps.',
    skills: [
      'Python for Data Workflows',
      'SQL & Database Querying',
      'ETL / ELT Workflow Concepts',
      'Data Transformation & Validation',
      'Data Pipelines & Batch Processing',
      'Relational Databases (PostgreSQL, SQLite)',
      'REST APIs & Ingestion',
      'Git Version Control & CI Basics',
    ],
  },
  {
    id: 'programming-engineering',
    category: 'PROGRAMMING & ENGINEERING',
    description:
      'Software engineering principles applied to building resilient CLI utilities, automated scripts, and maintainable systems.',
    skills: [
      'Python',
      'Go (Golang)',
      'C#',
      'Bash Scripting',
      'CLI Tool Development',
      'Workflow & Task Automation',
      'Software Architecture & Modular Design',
      'Testing & Validation (Pytest, Go test)',
    ],
  },
  {
    id: 'systems-infrastructure',
    category: 'SYSTEMS & INFRASTRUCTURE (SUPPORTING)',
    description:
      'Secondary technical foundation in operating systems, system administration, and networking supporting data platforms and automation.',
    skills: [
      'Linux Environments (Ubuntu, Fedora)',
      'System Administration & Shell Scripting',
      'Networking Fundamentals',
      'System Troubleshooting & Diagnostics',
      'Docker & Containerization Fundamentals',
      'Technical Documentation & Specifications',
    ],
  },
];

