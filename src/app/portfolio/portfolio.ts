import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  icon: string;
  span: string;
  link: string;
  github: string;
}

interface ArchitectureItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface BlogPost {
  title: string;
  description: string;
  content: string;
  date: string;
  tags: string[];
  link: string;
}

interface FloatingIcon {
  name: string;
  icon: string;
  radius: number;
  speed: number;
  delay: number;
  size: number;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  skills: Skill[] = [
    { name: '.NET Core', icon: '/icons/net-framework.png', category: 'Backend' },
    { name: 'Angular', icon: '/icons/angularjs.png', category: 'Frontend' },
    { name: 'SQL Server', icon: '/icons/microsoft-sql-server.png', category: 'Database' },
    { name: 'Entity Framework', icon: '/icons/c-sharp-logo.png', category: 'Backend' },
    { name: 'MongoDB', icon: '/icons/microsoft-sql-server.png', category: 'Database' },
    { name: 'Azure', icon: '/icons/azure-1.png', category: 'Cloud' },
    { name: 'REST API Services', icon: '/icons/api-settings.png', category: 'Backend' },
    { name: 'Microservices', icon: '/icons/stack.png', category: 'Architecture' },
    { name: 'System Design', icon: '/icons/stack.png', category: 'Architecture' },
    { name: 'Technical Leadership', icon: '/icons/net-framework.png', category: 'Leadership' },
    { name: 'Code Review', icon: '/icons/api-settings.png', category: 'Practices' },
    { name: 'Agile', icon: '/icons/stack.png', category: 'Practices' },
    { name: 'Azure DevOps', icon: '/icons/deployment.png', category: 'DevOps' },
    { name: 'GIT', icon: '/icons/api-settings.png', category: 'DevOps' },
    { name: 'Jenkins', icon: '/icons/deployment.png', category: 'DevOps' },
    { name: 'Deployment', icon: '/icons/deployment.png', category: 'DevOps' },
    { name: 'Mentoring', icon: '/icons/typescript.png', category: 'Leadership' },
  ];

  experiences: Experience[] = [
    {
      title: 'Senior Systems Engineer',
      company: 'Toppan Merrill — Financial Services',
      period: 'Feb 2025 — Present',
      description: 'Modernizing legacy "Bridge" systems into scalable Angular + .NET Core applications. Upgraded backend services, improved SonarQube code coverage, and implemented unit/integration testing across financial taxonomy and data workflow platforms.',
      tags: ['.NET Core', 'Angular', 'REST', 'Azure', 'Jenkins'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'GAVS Technologies — Healthcare',
      period: '2022 — Jan 2025',
      description: 'Owned end-to-end development of backend APIs for MAX HIS, a comprehensive Hospital Information System. Designed RESTful services for patient management, billing, and operational workflows using .NET Core and C#.',
      tags: ['.NET Core', 'C#', 'REST APIs', 'SQL Server', 'Angular'],
    },
    {
      title: 'Software Engineer / Senior Software Engineer',
      company: 'Cognizant — Life Sciences',
      period: 'Feb 2018 — 2022',
      description: 'Built and maintained enterprise web application components for ICDS-NG, a UK-based Life Sciences clinical data platform. Worked on legacy modernization, complex data workflows, and regulatory-compliant reporting using .NET and SQL Server.',
      tags: ['.NET', 'C#', 'SQL Server', 'AngularJS', 'Agile'],
    },
  ];

  projects: Project[] = [
    {
      title: 'MAX HIS — Healthcare System',
      description: 'End-to-end backend APIs for a hospital information system handling patient management, billing, and operational workflows built with .NET Core and Angular.',
      tags: ['.NET Core', 'Angular', 'SQL Server', 'REST'],
      image: 'linear-gradient(135deg, #06b6d4, #2563eb)',
      icon: '🏥',
      span: 'lg:col-span-2',
      link: '#',
      github: '#',
    },
    {
      title: 'ICDS-NG — Life Sciences',
      description: 'Enterprise clinical data platform for a UK-based life sciences client, managing regulatory-compliant research workflows and complex data reporting.',
      tags: ['.NET', 'C#', 'SQL Server', 'AngularJS'],
      image: 'linear-gradient(135deg, #10b981, #0d9488)',
      icon: '🔬',
      span: 'lg:col-span-1',
      link: '#',
      github: '#',
    },
    {
      title: 'AI Conversational Chatbot',
      description: 'Conversational AI chatbot that improved user experience and operational efficiency across enterprise workflows.',
      tags: ['AI', 'NLP', 'Angular', '.NET'],
      image: 'linear-gradient(135deg, #a855f7, #db2777)',
      icon: '🤖',
      span: 'lg:col-span-1',
      link: '#',
      github: '#',
    },
    {
      title: 'Taxonomy — Fin Services',
      description: 'Modernizing legacy Bridge system into a scalable Angular + .NET Core application for financial taxonomy management and regulated document processing.',
      tags: ['.NET Core', 'Angular', 'Azure', 'Jenkins'],
      image: 'linear-gradient(135deg, #f97316, #dc2626)',
      icon: '📊',
      span: 'lg:col-span-2',
      link: '#',
      github: '#',
    },
  ];

  freelanceProjects: Project[] = [
    {
      title: 'Professional Portfolio Website',
      description: 'Premium dark-themed Angular portfolio with glassmorphism, bento grid layout, and orbital animations. Built with Angular 19 standalone components and Tailwind CSS v3.',
      tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'SCSS'],
      image: 'linear-gradient(135deg, #22d3ee, #c084fc)',
      icon: '🖥️',
      span: 'lg:col-span-3',
      link: '#',
      github: '#',
    },
  ];

  architectures: ArchitectureItem[] = [
    {
      title: 'Clean Architecture',
      description: 'Domain-driven design with separation of concerns, dependency inversion, and testable layered architecture for enterprise applications.',
      icon: '🏗️',
      image: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
    },
    {
      title: 'CQRS & Event Sourcing',
      description: 'Command-query separation with event-driven workflows for scalable audit trails and complex transaction processing.',
      icon: '🔀',
      image: 'linear-gradient(135deg, #c084fc, #ec4899)',
    },
    {
      title: 'Microservices Architecture',
      description: 'Distributed system design with service decomposition, API gateways, message brokers, and containerized deployments.',
      icon: '🔬',
      image: 'linear-gradient(135deg, #34d399, #14b8a6)',
    },
    {
      title: 'Cloud-Native Design',
      description: 'Azure-based cloud solutions with auto-scaling, managed services, distributed caching, and CI/CD pipelines.',
      icon: '☁️',
      image: 'linear-gradient(135deg, #fb923c, #ef4444)',
    },
  ];

  blogs: BlogPost[] = [
    {
      title: 'If I Had to Design My First System Again',
      description: 'Things I learned the hard way about scaling, structure, database design, and why good systems are built with good decisions — not just good code.',
      content: `If I had to design my first system again today, I would do a lot of things differently.

Not because I didn't know how to code…
But because I didn't understand how systems behave as they grow.

Here are a few things I've learned the hard way:

I would think about scale earlier.

Back then, I built everything assuming a small number of users. But as usage grows, things break in unexpected ways — slow APIs, heavy database queries, timeouts.

Today, I'd at least ask: "What happens if this grows 10x?"

I would focus more on structure than just making it work.

Earlier, the goal was simple: finish the feature. Now I realize structure matters — how you organize layers, responsibilities, and dependencies. A system that "works" is not always easy to maintain.

I would avoid overengineering… but also underthinking.

In the beginning, I either kept things too simple or tried to copy complex architectures. Now I see that the real skill is balance: build for today, but don't block tomorrow.

I would pay more attention to database design.

Most performance issues I've seen later were not in code — they were in data access. Better queries, indexing, and data modeling would have saved a lot of effort.

I would think about failures.

Earlier, I assumed things would work. Now I think: What if this API fails? What if the database is slow? How will the system behave?

Biggest realization for me: Good systems are not just built with good code. They are built with good decisions.`,
      date: 'May 2026',
      tags: ['System Design', 'Architecture', 'Lessons Learned'],
      link: '#',
    },
  ];

  floatingIcons: FloatingIcon[] = [
    { name: 'Angular', icon: 'https://img.icons8.com/color/48/angularjs.png', radius: 140, speed: 25, delay: 0, size: 44 },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/typescript.png', radius: 100, speed: 20, delay: 2, size: 36 },
    { name: '.NET Core', icon: 'https://img.icons8.com/color/48/net-framework.png', radius: 120, speed: 30, delay: 1, size: 40 },
    { name: 'Azure', icon: 'https://img.icons8.com/color/48/azure-1.png', radius: 160, speed: 35, delay: 3, size: 48 },
    { name: 'Docker', icon: 'https://img.icons8.com/color/48/docker.png', radius: 90, speed: 22, delay: 4, size: 32 },
    { name: 'SQL Server', icon: 'https://img.icons8.com/color/48/microsoft-sql-server.png', radius: 130, speed: 28, delay: 1.5, size: 38 },
    { name: 'C#', icon: 'https://img.icons8.com/color/48/c-sharp-logo.png', radius: 110, speed: 18, delay: 2.5, size: 34 },
    { name: 'Web API', icon: 'https://img.icons8.com/color/48/api-settings.png', radius: 150, speed: 32, delay: 0.5, size: 42 },
  ];

  githubStats = {
    stars: 180,
    followers: 45,
  };

  activeSection = 'hero';
  mobileMenuOpen = false;
  activeProjectTab = 'freelance';
  openBlogIndex: number | null = null;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigateTo(section: string): void {
    this.activeSection = section;
    this.mobileMenuOpen = false;
  }

  switchProjectTab(tab: string): void {
    this.activeProjectTab = tab;
  }

  toggleBlog(index: number): void {
    this.openBlogIndex = this.openBlogIndex === index ? null : index;
  }

  downloadResume(): void {
    window.open('/Manisha_M_v1_2026.docx', '_blank');
  }
}
