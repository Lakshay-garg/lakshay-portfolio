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
      period: 'Dec 2024 — Present',
      location: 'New Delhi, India',
      current: true,
      color: '#2dd4bf',
      points: [
        'Own end-to-end delivery of features for the core healthcare product (docgenie.in), from requirement gathering with clients through to production release.',
        'Own the product\u2019s Progressive Web App \u2014 built and continuously optimize push notifications, the install flow, and UI/UX behavior to deliver an app-like experience on mobile browsers.',
        'Led the Angular framework upgrade from v16 to v20, refactoring the codebase to improve maintainability and reduce technical debt.',
        'Integrated CIMS APIs and the Stripe payment gateway, handling end-to-end REST integration, error handling, and transaction flows.',
        'Deliver white-label web solutions by customizing the product frontend to client branding and requirements across multiple deployments, building responsive, reusable Angular components along the way.',
      ],
      tags: ['Angular 16\u219220', 'PWA', 'Stripe', 'CIMS API', 'White-label', 'TypeScript'],
    },
    {
      company: 'Bajaj Capital',
      title: 'Software Engineer',
      period: 'Apr 2024 — Dec 2024',
      location: 'New Delhi, India',
      color: '#fbbf24',
      points: [
        'Modernized the internal Retirement Tool by upgrading Angular v9 \u2192 v16 and Node.js v14 \u2192 v20, improving application performance and user experience.',
        'Developed the FIRE Score Tool, enabling users to calculate financial independence and early retirement projections from dynamic financial inputs.',
        'Built the Retirement Preparedness Score (RPS) Tool using interactive questionnaires to evaluate retirement corpus and readiness.',
        'Developed new features and resolved production bugs across Angular, Node.js, and Express.js services.',
        'Worked in an Agile environment using Jira for ticket tracking and GitHub/Bitbucket for version control and code reviews.',
      ],
      tags: ['Angular 9\u219216', 'Node.js 14\u219220', 'Express.js', 'RxJS', 'Agile/Jira'],
    },
    {
      company: 'Coderower',
      title: 'Software Engineer',
      period: 'May 2023 — Apr 2024',
      location: 'New Delhi, India',
      color: '#a78bfa',
      points: [
        'Developed and enhanced enterprise applications for loan processing and recruitment management for a US-based client, implementing role-based access control across Super Admin, Admin, and Borrower profiles.',
        'Built 8+ dynamic multi-step forms for document uploads and entity management (Jobs, Clients, Applicants) with REST API integration, reducing manual data-entry errors.',
        'Implemented JWT-based authentication and secure document workflows to improve compliance and data integrity across platforms.',
        'Achieved 70%+ unit test coverage using Jest across two enterprise applications, reducing post-release defects.',
        'Optimized application performance and fixed bugs across client-facing and internal projects.',
      ],
      tags: ['Angular', 'TypeScript', 'Jest', 'JWT / RBAC', 'REST APIs'],
    },
  ];
}
