import { Experience, Education, Certification, VolunteerRole, Achievement } from '@/types';

export const experienceData: Experience[] = [
  {
    id: 'exp-freelance-yard',
    role: 'Project Coordinator',
    company: 'Freelance Yard',
    location: 'Remote',
    period: 'Oct 2026 — Present',
    summary:
      'Coordinates lecture schedules, attendance, and session requirements while supporting instructors and students before and during online lectures.',
    highlights: [
      'Coordinate with students and instructors regarding lecture schedules, attendance, and session-related requirements.',
      'Support instructors and students before and during online lectures to ensure smooth session delivery.',
      'Manage the online session environment and handle technical or organizational issues that arise during lectures.',
      'Coordinate communication between students, instructors, and the relevant team to keep sessions organized and running smoothly.',
    ],
  },
  {
    id: 'exp-almentor',
    role: 'Site Coordinator',
    company: 'Almentor Egypt',
    location: 'Port Said, Egypt',
    period: 'Feb 2024 — Jun 2025',
    summary:
      'Coordinated and supported on-site training sessions, managing operational workflows, tracking session data, and providing structured logistical and technical assistance to instructors and students throughout each cohort.',
    highlights: [
      'Organized and tracked student attendance, training schedules, and session operational details using spreadsheets (Microsoft Excel / Google Sheets).',
      'Managed session logistics, classroom preparation, and equipment readiness to ensure uninterrupted instruction delivery.',
      'Provided hands-on operational and technical support for devices, presentation systems, and network connectivity.',
      'Identified, documented, and resolved real-time operational and technical issues occurring during active training sessions.',
      'Prepared operational status updates and session delivery feedback for program coordinators.',
    ],
  },
];

export const leadershipData: Achievement[] = [
  {
    id: 'ach-ieee-relaunch',
    title: 'IEEE PSU Student Branch Relaunch',
    role: 'Founding Team Member (Relaunch Team) & Secretary',
    organization: 'IEEE Port Said University Student Branch',
    year: '2023 — 2025',
    description:
      'Part of the founding team that relaunched IEEE Port Said University Student Branch after a multi-year period of inactivity, helping rebuild the community and resume its technical sessions, competitions, and activities. Served officially as Secretary on the new Board.',
    highlights: [
      'Founding / Relaunch Team: Contributed to the core initiative that revived the inactive student branch and re-established official IEEE activities.',
      'Official Board Position: Served as Secretary on the new Executive Board, handling operational coordination, records, and branch communications.',
      'Community Rebuilding: Re-engaged engineering students across departments and reconnected the branch with the broader regional IEEE ecosystem.',
      'Technical Programming: Supported the resumption of in-person technical workshops, seminars, competitions, and student-led initiatives.',
    ],
  },
];

export const educationData: Education[] = [
  {
    id: 'edu-psu',
    degree: 'Bachelor of Electrical Engineering',
    major: 'Computer & Control Engineering',
    institution: 'Port Said University — Faculty of Engineering',
    location: 'Port Said, Egypt',
    period: '2020 — 2025',
    project: 'Snack n\u2019 Track: AI-powered Nutrition Tracking App',
    details: [
      'Academic foundation covering algorithms, data structures, database principles, computer systems, software engineering, control theory, and machine learning concepts.',
      'Bridged engineering concepts and data workflows through coursework and an end-to-end graduation project featuring relational database migrations, REST APIs, and ML model integration.',
    ],
  },
];

export const certificationData: Certification[] = [
  {
    id: 'cert-google-it',
    name: 'Google IT Support Professional Certificate',
    issuer: 'Google / Coursera',
    link: 'https://coursera.org/share/9af0e85fcb2536f3ac49bd30920b8bf0',
    status: 'COMPLETED',
  },
  {
    id: 'cert-ibm-fullstack',
    name: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM / Coursera',
    link: 'https://coursera.org/share/4c9a64333e0d80c6855df7a6e4aa83f4',
    status: 'COMPLETED',
  },
  {
    id: 'cert-google-data',
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    link: undefined,
    status: 'IN_PROGRESS',
  },
];

export const volunteerData: VolunteerRole[] = [
  {
    id: 'vol-acpc',
    role: 'Technical Event Volunteer',
    organization: 'Africa and Arab Collegiate Programming Contest (ACPC)',
    period: 'Dec 2023 — Dec 2025',
    summary:
      'Supported competitive programming contest operations, assisted participating teams with on-site needs, and helped resolve technical and logistical bottlenecks during the event.',
  },
  {
    id: 'vol-ecpc',
    role: 'Technical Event Volunteer',
    organization: 'Egyptian Collegiate Programming Contest (ECPC)',
    period: 'Aug 2023 — Aug 2025',
    summary:
      'Contributed to national collegiate programming contest operations, coordinating venue logistics and assisting organizers and contestants during live competition rounds.',
  },
];
