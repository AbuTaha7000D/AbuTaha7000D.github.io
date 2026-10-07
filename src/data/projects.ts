import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'snack-n-track',
    title: 'Snack n\u2019 Track',
    subtitle: 'Graduation Project | Computer & Control Engineering',
    description:
      'An AI-powered nutrition tracking application combining mobile client interfaces, a backend API, relational data storage, and machine learning models.',
    problem:
      'Logging nutritional intake and daily meals manually is repetitive and prone to inconsistent nutrient tracking without automated estimation.',
    whatIBuilt:
      'An end-to-end nutrition tracking system combining an Ionic/Vue 3 mobile frontend, a TypeScript/Node.js backend, a containerized PostgreSQL database with Prisma ORM migrations, and machine learning models for food classification.',
    technologies: [
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Prisma ORM',
      'Vue 3',
      'Ionic',
      'Python',
      'Docker',
    ],
    relevantConcepts: [
      'Relational Database Schema Design',
      'Database Migrations & Seeding',
      'REST API Architecture',
      'Machine Learning Integration',
      'Full-Stack Software Architecture',
      'Containerized Development (Docker)',
    ],
    highlights: [
      'Designed and executed relational database schemas and migrations in PostgreSQL using Prisma ORM.',
      'Constructed backend API endpoints to serve client requests and interface with food classification logic.',
      'Developed mobile UI components with Ionic and Vue 3, integrating device camera and client-side validation.',
      'Completed as the final graduation project for the Bachelor of Electrical Engineering (Computer & Control Engineering).',
    ],
    github: 'https://github.com/ramyyasser21102/snack_n_track',
  },
  {
    id: 'downv',
    title: 'DownV',
    subtitle: 'Personal Project | Python CLI Tool',
    description:
      'A modular Python command-line utility for downloading media streams, extracting audio, and tracking local download history.',
    problem:
      'Downloading media across different formats and resolutions, extracting standalone audio, and keeping track of downloaded files typically requires manual bookkeeping and fragmented tooling.',
    whatIBuilt:
      'A Python command-line tool built on top of yt-dlp and FFmpeg that downloads video/audio streams, provides interactive quality selection, detects duplicate downloads, maintains a searchable local history, and supports optional chapter embedding.',
    technologies: ['Python', 'yt-dlp', 'FFmpeg', 'Pytest'],
    relevantConcepts: [
      'Python CLI Development',
      'Media Metadata Extraction & Parsing',
      'Media Stream Processing & Audio Extraction',
      'Local History State Tracking & Query Filtering',
      'Process Automation & Subprocess Execution',
      'Automated Testing (Pytest)',
    ],
    highlights: [
      'Constructed a clean CLI with interactive quality selection, audio extraction, and batch playlist support.',
      'Implemented duplicate detection and a persistent local download history with search, count, and inspection commands.',
      'Integrated FFmpeg process pipelines for media/audio stream conversion and metadata handling.',
      'Added automated unit tests with Pytest to verify argument parsing and core utility routines.',
    ],
    github: 'https://github.com/AbuTaha7000D/downv',
  },
  {
    id: 'addch',
    title: 'addch',
    subtitle: 'Personal Project | Go CLI Toolkit',
    description:
      'A cross-platform Go command-line suite for lossless chapter embedding, removal, and extraction in video files.',
    problem:
      'Embedding chapter markers into video files without re-encoding typically requires crafting complex, non-intuitive FFmpeg metadata syntax by hand, risking errors and broken timestamps.',
    whatIBuilt:
      'A Go CLI toolkit composed of three dedicated utilities (addch, rmch, getch) that parse human-readable chapter syntax, validate timestamps, generate FFMETADATA1 files internally, and perform stream-copy remuxing with FFmpeg/FFprobe.',
    technologies: ['Go (Golang)', 'FFmpeg', 'FFprobe', 'Shell / Make'],
    relevantConcepts: [
      'Go CLI Tool Development',
      'File Parsing & Timestamp Validation',
      'Lossless Stream-Copy Remuxing',
      'Subprocess Orchestration (FFmpeg/FFprobe)',
      'Error Handling & Defensive Validation',
      'Cross-Platform Architecture (Linux, macOS, Windows)',
    ],
    highlights: [
      'Engineered a custom chapter file parser supporting millisecond precision, timestamp chronological validation, and UTF-8 BOM handling.',
      'Used FFmpeg stream-copy remuxing to add chapters without re-encoding the video or audio streams.',
      'Implemented clean 3-part architecture: addch (embed), rmch (strip), and getch (extract to stdout or sidecar).',
      'Provided test suites (`make test`) and static analysis (`make vet`) covering unit and FFmpeg integration workflows.',
    ],
    github: 'https://github.com/AbuTaha7000D/addch',
  },
  {
    id: 'linux-postinstall',
    title: 'Linux Post-Install Script',
    subtitle: 'Personal Project | Bash Automation',
    description:
      'A modular Bash automation script that streamlines environment setup, application provisioning, and GNOME configuration after fresh Linux installs.',
    problem:
      'Setting up a new Linux installation requires executing dozens of repetitive manual terminal commands to configure repositories, desktop themes, developer tooling, and fonts.',
    whatIBuilt:
      'A comprehensive Bash automation script that configures desktop settings, installs essential software packages across distributions, and applies themes and developer fonts automatically.',
    technologies: ['Bash', 'Linux (Ubuntu, Fedora)', 'GNOME CLI', 'Shell'],
    relevantConcepts: [
      'Bash Scripting & Shell Automation',
      'Linux System Administration',
      'Package Management Automation (APT, DNF, Flatpak)',
      'Desktop Environment Configuration',
      'Defensive Shell Scripting',
    ],
    highlights: [
      'Automated post-installation software provisioning across multiple Linux distributions.',
      'Configured GNOME desktop settings, shell customizations, font installations, and terminal profiles.',
      'Reduced repetitive manual configuration time through structured, reusable shell routines.',
    ],
    github: 'https://github.com/AbuTaha7000D/linux-postinstall',
  },
];
