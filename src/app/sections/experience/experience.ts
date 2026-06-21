import { Component } from '@angular/core';

interface Role {
  company: string;
  title: string;
  period: string;
  location?: string;
  current?: boolean;
  color: string;
  points: string[];
  tags: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  roles: Role[] = [
    {
      company: 'DocGenie',
      title: 'Software Developer',
      period: 'Nov 2024 — Present',
      location: 'Gurugram, India',
      current: true,
      color: '#2dd4bf',
      points: [
        'Led modernization of a large-scale healthcare platform serving 70,000+ patients and 400+ doctors, upgrading Angular 16 \u2192 20 and refactoring legacy modules with zero downtime.',
        'Implemented installable PWA support with offline asset loading \u2014 adopted by 200+ active users \u2014 keeping the UI available through network interruptions, a platform first.',
        'Integrated Firebase push notifications and CIMS APIs across 3 client deployments, improving user re-engagement by ~25% and enabling real-time sync with clinic systems.',
        'Led white-label customization for 5+ global clients, shipping 3 production builds with distinct branding, and designed a scalable Angular architecture (lazy loading, modular structure, reusable components).',
      ],
      tags: ['Angular 16\u219220', 'PWA', 'Firebase', 'CIMS API', 'White-label'],
    },
    {
      company: 'Bajaj Capital',
      title: 'Software Developer',
      period: 'Apr 2024 — Nov 2024',
      location: 'Gurugram, India',
      color: '#fbbf24',
      points: [
        'Modernized 3 financial-planning tools (Retirement, FIRE, RPS) by upgrading Angular 9 \u2192 16 and Node.js 14 \u2192 20, cutting page load time by ~35% and eliminating all legacy dependency vulnerabilities.',
        'Designed dynamic calculators and scoring engines \u2014 including the FIRE Score and Retirement Preparedness Score \u2014 using real-time inputs, weighted algorithms, and interactive UI to drive engagement and lead generation.',
        'Worked cross-functionally to gather requirements, prioritize the backlog, and ship scalable solutions aligned with product and marketing strategy.',
      ],
      tags: ['Angular 9\u219216', 'Node.js', 'RxJS', 'REST APIs', 'Agile'],
    },
    {
      company: 'Coderower',
      title: 'Software Developer',
      period: 'May 2023 — Apr 2024',
      location: 'Gurugram, India',
      color: '#a78bfa',
      points: [
        'Built and enhanced enterprise apps for loan processing and recruitment, implementing multi-domain architecture, role-based access (Super Admin, Admin, Borrower), and secure document workflows.',
        'Created 8+ dynamic multi-step forms for document uploads and entity management (Jobs, Clients, Applicants) with full REST API integration, reducing manual data-entry errors by ~30%.',
        'Achieved 70%+ Jest unit-test coverage across 2 enterprise apps, cutting post-release defects by ~40%.',
      ],
      tags: ['Angular', 'TypeScript', 'Jest', 'RBAC', 'REST APIs'],
    },
  ];
}
