export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  project?: string;
  details?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  link?: string;
  status: 'COMPLETED' | 'IN_PROGRESS';
}

export interface VolunteerRole {
  id: string;
  role: string;
  organization: string;
  period: string;
  summary: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  whatIBuilt: string;
  technologies: string[];
  relevantConcepts: string[];
  highlights: string[];
  github?: string;
}

export interface Achievement {
  id: string;
  title: string;
  role: string;
  organization: string;
  year: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}
