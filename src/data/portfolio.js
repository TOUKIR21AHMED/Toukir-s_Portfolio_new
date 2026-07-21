import {
  Code2,
  Server,
  Database,
  Boxes,
  Palette,
  Github,
  Cpu,
  Eye,
  Brain,
  Workflow,
  Wrench,
  Trophy,
  Award,
  Medal,
  Crown,
  Mic,
  BookOpen,
  Flag,
  Swords,
  Star,
} from 'lucide-react'

export const SITE = {
  name: 'Md. Toukir Ahmed',
  shortName: 'Toukir Ahmed',
  title: 'MERN Stack Developer · NestJS & PostgreSQL Learner',
  email: 'ahmed18@cse.pstu.ac.bd',
  location: 'Patuakhali, Bangladesh',
  university: 'Patuakhali Science and Technology University (PSTU)',
}

export const ROLES = [
  'MERN Stack Developer',
  'Backend Specialist',
  'AI Researcher',
  'Computer Vision Engineer',
  'Machine Learning Engineer',
  'AI Agent Builder',
]

export const SKILL_CATEGORIES = [
  {
    key: 'frontend',
    title: 'Frontend',
    accent: 'from-cyan-400 to-sky-500',
    items: [
      { name: 'React', icon: Code2, level: 92, color: 'from-cyan-400 to-sky-500' },
      { name: 'Next.js', icon: Code2, level: 84, color: 'from-slate-500 to-slate-800' },
      { name: 'JavaScript', icon: Code2, level: 92, color: 'from-amber-400 to-yellow-500' },
      { name: 'TypeScript', icon: Code2, level: 80, color: 'from-sky-500 to-blue-600' },
      { name: 'HTML', icon: Code2, level: 95, color: 'from-orange-400 to-red-500' },
      { name: 'CSS', icon: Palette, level: 92, color: 'from-blue-400 to-indigo-500' },
      { name: 'Tailwind CSS', icon: Palette, level: 95, color: 'from-cyan-400 to-sky-500' },
      { name: 'Bootstrap', icon: Palette, level: 82, color: 'from-violet-500 to-purple-700' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend',
    accent: 'from-emerald-400 to-green-600',
    items: [
      { name: 'Node.js', icon: Server, level: 88, color: 'from-emerald-400 to-green-600' },
      { name: 'Express.js', icon: Boxes, level: 86, color: 'from-slate-300 to-slate-500' },
      { name: 'NestJS', icon: Server, level: 70, color: 'from-rose-500 to-red-700' },
      { name: 'REST API', icon: Workflow, level: 88, color: 'from-amber-400 to-orange-600' },
      { name: 'JWT Authentication', icon: Workflow, level: 84, color: 'from-pink-400 to-rose-600' },
    ],
  },
  {
    key: 'database',
    title: 'Database',
    accent: 'from-emerald-500 to-emerald-700',
    items: [
      { name: 'MongoDB', icon: Database, level: 85, color: 'from-emerald-500 to-emerald-700' },
      { name: 'PostgreSQL', icon: Database, level: 72, color: 'from-sky-500 to-indigo-700' },
      { name: 'Prisma ORM', icon: Database, level: 70, color: 'from-fuchsia-500 to-purple-700' },
      { name: 'Mongoose', icon: Database, level: 85, color: 'from-green-500 to-emerald-700' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools',
    accent: 'from-slate-400 to-slate-600',
    items: [
      { name: 'Git', icon: Github, level: 90, color: 'from-orange-500 to-red-600' },
      { name: 'GitHub', icon: Github, level: 90, color: 'from-slate-500 to-slate-800' },
      { name: 'Postman', icon: Workflow, level: 88, color: 'from-orange-400 to-orange-600' },
      { name: 'VS Code', icon: Wrench, level: 95, color: 'from-sky-500 to-blue-700' },
      { name: 'Vercel', icon: Server, level: 84, color: 'from-slate-700 to-black' },
      { name: 'Render', icon: Server, level: 80, color: 'from-emerald-500 to-teal-700' },
    ],
  },
]

export const LEARNING_SKILLS = [
  { name: 'Redis', icon: Database, level: 80, color: 'from-rose-500 to-red-700' },
  { name: 'BullMQ', icon: Workflow, level: 75, color: 'from-orange-500 to-amber-600' },
  { name: 'Docker', icon: Boxes, level: 82, color: 'from-sky-500 to-blue-700' },
  { name: 'WebSockets', icon: Workflow, level: 77, color: 'from-violet-500 to-fuchsia-600' },
  { name: 'Scalable Backend Architecture', icon: Cpu, level: 89, color: 'from-amber-500 to-orange-600' },
]

// Legacy export kept so the existing single-list Skills section can still be
// used if a consumer imports it. Not displayed in the redesigned section.
export const SKILLS = [
  { name: 'React', icon: Code2, level: 92, color: 'from-cyan-400 to-sky-500' },
  { name: 'Node.js', icon: Server, level: 88, color: 'from-emerald-400 to-green-600' },
  { name: 'Express.js', icon: Boxes, level: 86, color: 'from-slate-300 to-slate-500' },
  { name: 'MongoDB', icon: Database, level: 85, color: 'from-emerald-500 to-emerald-700' },
  { name: 'Tailwind CSS', icon: Palette, level: 95, color: 'from-cyan-400 to-sky-500' },
  { name: 'JavaScript', icon: Code2, level: 92, color: 'from-amber-400 to-yellow-500' },
  { name: 'Git & GitHub', icon: Github, level: 90, color: 'from-slate-400 to-slate-600' },
  { name: 'NestJS', icon: Server, level: 70, color: 'from-rose-500 to-red-700' },
  { name: 'PostgreSQL', icon: Database, level: 72, color: 'from-sky-500 to-indigo-700' },
  { name: 'Prisma ORM', icon: Database, level: 70, color: 'from-fuchsia-500 to-purple-700' },
  { name: 'Artificial Intelligence', icon: Brain, level: 80, color: 'from-violet-400 to-fuchsia-600' },
  { name: 'Computer Vision', icon: Eye, level: 78, color: 'from-purple-400 to-indigo-600' },
  { name: 'Machine Learning', icon: Cpu, level: 76, color: 'from-rose-400 to-pink-600' },
  { name: 'n8n', icon: Workflow, level: 82, color: 'from-orange-400 to-rose-500' },
  { name: 'C++', icon: Wrench, level: 80, color: 'from-blue-400 to-indigo-600' },
]

export const STATS = [
  { value: 1, suffix: '×', label: 'Hackathon Champion', sub: 'PSTU IT Carnival 2024' },
  { value: 4, suffix: '+', label: 'Research Publications', sub: 'AI · CV · ML' },
  { value: 3, suffix: '', label: 'Leadership Roles', sub: 'Clubs · Sports · Welfare' },
  { value: 20, suffix: '+', label: 'Projects Completed', sub: 'Web · Research · Graphics' },
]

export const EXPERIENCE = [
  {
    role: 'Software Engineer (Full-Stack · Backend Specialist)',
    company: 'Chapter 24 — Custom Shopify App Development',
    period: 'Feb 2024 — Present',
    location: 'Remote',
    bullets: [
      'Building custom Shopify apps end-to-end as a full-stack engineer, with a strong focus on backend architecture, API design and performance.',
      'Designing and maintaining Node.js services, REST/GraphQL APIs and database schemas that integrate tightly with the Shopify ecosystem (Admin API, webhooks, app bridges).',
      'Shipping reliable, scalable solutions tailored to merchant workflows — from authentication and billing to automation and admin dashboards.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    company: 'Freelance & Open Source',
    period: '2023 — Present',
    location: 'Remote',
    bullets: [
      'Designed and shipped full-stack web apps using React, Node.js, Express and MongoDB.',
      'Built responsive UIs with Tailwind CSS and Framer Motion for premium feel and motion.',
      'Optimized REST APIs and database schemas for performance and clarity.',
    ],
  },
  {
    role: 'Researcher — AI, Computer Vision & ML',
    company: 'PSTU Research Lab',
    period: '2023 — Present',
    location: 'Patuakhali, Bangladesh',
    bullets: [
      'Conducted research on breast cancer histopathology image classification using deep learning.',
      'Explored OpenGL-based agricultural simulations for visual analytics and education.',
      'Authored publications and presented at thesis and symposium competitions.',
    ],
  },
  {
    role: 'Student Mentor & Lead',
    company: 'CSE Club PSTU',
    period: '2024 — Present',
    location: 'PSTU',
    bullets: [
      'Mentored junior students on web development, problem solving and research workflows.',
      'Organized hackathons, workshops and tech talks as General Secretary.',
    ],
  },
]

export const ACHIEVEMENTS = [
  { title: 'Hackathon Champion', event: 'PSTU IT Carnival 2024', icon: Crown },
  { title: 'Thesis Competition Runner-Up', event: 'PSTU', icon: Medal },
  { title: 'Bystrom Symposium 1st Runner-Up 2024', event: 'Bystrom', icon: Award },
  { title: 'Captain — CSE Cricket Team', event: 'PSTU', icon: Flag },
  { title: 'General Secretary — CSE Club PSTU', event: 'PSTU', icon: Star },
  { title: 'General Secretary — Greater Mymensingh Students Welfare', event: 'PSTU', icon: BookOpen },
  { title: '20+ Projects Delivered', event: 'Web · Research · Graphics · Automation', icon: Trophy },
  { title: '194+ Codeforces Accepted Solutions', event: 'codeforces.com/profile/toukir_ahmed18', icon: Swords },
]

export const PROJECTS = [
  {
    name: 'Real-Time Bus Tracking System',
    tagline: 'NestJS · PostgreSQL · Prisma',
    description:
      'A scalable backend-focused university bus tracking system built with NestJS and PostgreSQL — buses continuously update their location and students can view the latest position in real time.',
    stack: ['NestJS', 'PostgreSQL', 'Prisma ORM', 'REST API', 'DTO Validation'],
    image: '/Bus_tracking.png',
    link: 'https://github.com/TOUKIR21AHMED/BUS_TRACKING_WEBAPP',
    status: 'Currently under active development.',
    highlights: [
      'NestJS Modular Architecture',
      'Prisma ORM with PostgreSQL',
      'REST APIs with DTO validation',
      'Dependency Injection across modules',
      'Route & Bus Management',
      'Tracking History endpoints',
      'Clean, scalable backend architecture',
    ],
    color: 'from-rose-500 to-red-700',
    featured: true,
  },
  {
    name: 'FABROMS',
    tagline: 'MERN Stack E-commerce Platform',
    description:
      'A full-featured e-commerce platform built with the MERN stack — featuring authentication, product catalog, cart, checkout, payment integration, admin dashboard and responsive UI.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    image: '/fabroms.png',
    link: 'https://fabroms.com/',
    highlights: [
      'JWT auth with role-based access control',
      'Product, cart, order and payment flow',
      'Admin dashboard with analytics and CRUD',
    ],
    color: 'from-accent-500 to-violet-600',
  },
  {
    name: 'Roamad Travels BD',
    tagline: 'Travel Booking Platform',
    description:
      'A travel booking experience for Bangladesh — curated tour packages, secure booking flow, dynamic itineraries and a beautiful, premium UI.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/roamadtravels.png',
    link: 'https://www.roamadtravels.com/',
    highlights: [
      'Dynamic tour package system',
      'Booking flow with secure payments',
      'Mobile-first premium UI',
    ],
    color: 'from-emerald-500 to-accent-600',
  },
  {
    name: 'Aurmita',
    tagline: 'Ayurvedic Medicine · E-commerce & Blog',
    description:
      'A premium ayurvedic medicine e-commerce platform — a curated shop for ayurvedic products paired with a free bilingual (Bangla & English) blog. Built with Next.js and Firebase for fast, SEO-friendly, server-rendered pages and a smooth shopping experience.',
    stack: ['Next.js', 'Firebase', 'Tailwind CSS', 'Stripe'],
    image: '/aurmita.png',
    link: 'https://aurmita.com/',
    highlights: [
      'Curated ayurvedic medicine store with cart & checkout',
      'Free bilingual blog (Bangla & English) for content marketing',
      'Firebase auth, Firestore data and serverless functions',
      'Responsive, premium UI with SEO-friendly Next.js pages',
    ],
    color: 'from-amber-500 to-emerald-600',
  },
  {
    name: 'OpenGL Agricultural Simulation',
    tagline: 'Graphics Simulation',
    description:
      'A real-time OpenGL-based agricultural simulation visualizing farming processes, terrain and crop growth using computer graphics techniques.',
    stack: ['C++', 'OpenGL', 'Shaders', 'Computer Graphics'],
    image: '/openGl.png',
    link: 'https://github.com/TOUKIR21AHMED/Smart_Krishi_OpenGL_Agricultural_Simulation',
    highlights: [
      'Real-time rendering pipeline',
      'Terrain & crop visualization',
      'Educational simulation system',
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'PDC',
    tagline: 'CA Course & Resources Platform',
    description:
      'A premium e-learning platform where students can purchase CA courses and access exam resources — fully responsive across mobile and desktop. Built with React and Firebase, with bKash integrated for seamless local payments.',
    stack: ['React', 'Firebase', 'Tailwind CSS', 'bKash'],
    image: '/pdc.png',
    link: 'https://bdpdc.com/',
    highlights: [
      'CA course marketplace with secure enrollment',
      'Resource library for CA exam preparation',
      'bKash payment integration for local checkout',
      'Fully responsive UI optimized for mobile and desktop',
    ],
    color: 'from-sky-500 to-indigo-600',
  },
]

export const RESEARCH = [
  {
    title: 'Explainable Breast Cancer Histopathology Classification Using Self-Supervised Vision Transformers and Attention-Based XAI',
    venue: 'Undergraduate Thesis — PSTU',
    year: '2025',
    description:
      'Investigates deep convolutional architectures for the binary classification of histopathology images, with extensive preprocessing, augmentation and benchmarking.',
    tags: ['Deep Learning', 'Computer Vision', 'Medical Imaging', 'CNN'],
    status: 'Published',
  },
  {
    title: 'Image classification using Transformers',
    venue: 'Bystrom Symposium',
    year: '2024',
    description:
      'Design and implementation of an OpenGL pipeline for visualizing agricultural processes and crop growth dynamics in an interactive simulation.',
    tags: ['OpenGL', 'Computer Graphics', 'Simulation', 'Agriculture'],
    status: '1st Runner-Up',
  },
  {
    title: 'AI-driven Approaches in Modern Web Applications',
    venue: 'CSE Club Tech Talk Series',
    year: '2024',
    description:
      'A discussion on integrating AI-driven features into modern MERN stack web applications for personalization, search and analytics.',
    tags: ['AI', 'MERN', 'Web Engineering'],
    status: 'Presented',
  },
  {
    title: 'RFID-BASED-AUTOMATED-BUS-FAIR-COLLECTOR system - full IoT project with prototype',
    venue: 'PSTU IT Carnival 2024',
    year: '2024',
    description:
      'A predictive analytics study using ML models on student performance data, presented at the PSTU IT Carnival.',
    tags: ['Machine Learning', 'Predictive Analytics'],
    status: 'Hackathon Champion',
  },
]

export const LEADERSHIP = [
  {
    role: 'General Secretary',
    org: 'CSE Club PSTU',
    description:
      'Leading the central CSE student organization — orchestrating hackathons, workshops, technical seminars and community initiatives for the department.',
    image: '/cseclub.jpg',
  },
  {
    role: 'General Secretary',
    org: 'Greater Mymensingh Students Welfare Association — PSTU',
    description:
      'Representing and serving Greater Mymensingh students at PSTU — coordinating welfare programs, cultural events and community support.',
    image: '/greaterMym.jpg',
  },
  {
    role: 'Captain',
    org: 'CSE Cricket Team — PSTU',
    description:
      'Leading the CSE Cricket Team on and off the field — building team culture, training routines, and competitive strategy.',
    image: '/csecricket.jpg',
  },
]

export const EXPLORING = [
  { name: 'OpenClaw', icon: Workflow, color: 'from-violet-500 to-fuchsia-600' },
  { name: 'AI Automation', icon: Brain, color: 'from-pink-500 to-rose-600' },
  { name: 'n8n', icon: Workflow, color: 'from-orange-500 to-rose-600' },
  { name: 'BullMQ', icon: Workflow, color: 'from-orange-500 to-amber-600' },
  { name: 'Apache Kafka', icon: Workflow, color: 'from-slate-500 to-slate-800' },
  { name: 'Workflow Orchestration', icon: Workflow, color: 'from-emerald-500 to-teal-600' },
]

export const EXPLORING_INTRO =
  'Continuously expanding my backend engineering skills by building production-style applications and learning scalable software architecture.'

export const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/toukirahmed', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/toukirahmed', icon: 'linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/toukirahmed', icon: 'twitter' },
  { name: 'Email', href: 'mailto:ahmed18@cse.pstu.ac.bd', icon: 'mail' },
]
