// data/resume.ts
//
// Single source of truth for the CV.
// Edit the text here, push, and /cv?lang=en and /cv?lang=de update automatically.
// Preview locally at http://localhost:3000/resume

export type ResumeLang = "en" | "de";

export interface ResumeEntry {
  date: string;
  title: string;
  company: string;
  location?: string;
  subtitle?: string;
  stack?: string;
  bullets: string[];
}

export interface ResumeData {
  name: string;
  role: string;
  profileImage: string;
  contacts: { label: string; value: string; href?: string }[];
  profile: string[];
  workHistory: ResumeEntry[];
  projects: { title: string; subtitle: string; link: string; description: string }[];
  internships: ResumeEntry[];
  education: { date: string; title: string; place: string; location?: string; note?: string }[];
  technicalSkills: { title: string; items: string }[];
  languages: string[];
  labels: {
    profile: string;
    work: string;
    projects: string;
    internships: string;
    education: string;
    skills: string;
    languages: string;
  };
}

const shared = {
  name: "Georges Ishak",
  profileImage: "/images/my-profile.jpeg",
  email: "georgesishak112@gmail.com",
  phone: "+49 1525 2873320",
  website: "georgesishak.com",
  linkedin: "linkedin.com/in/georges-ishak-879b7b239",
  github: "github.com/GeorgesIshak",
};

const en: ResumeData = {
  name: shared.name,
  role: "Full-Stack Software Engineer • React • Next.js • Node.js • WordPress",
  profileImage: shared.profileImage,

  contacts: [
    { label: "Location", value: "52224 Stolberg, Germany" },
    { label: "Phone", value: shared.phone, href: `tel:${shared.phone.replace(/\s/g, "")}` },
    { label: "Email", value: shared.email, href: `mailto:${shared.email}` },
    { label: "LinkedIn", value: shared.linkedin, href: `https://${shared.linkedin}` },
    { label: "Website", value: shared.website, href: `https://${shared.website}` },
    { label: "GitHub", value: shared.github, href: `https://${shared.github}` },
    { label: "Residence status", value: "Chancenkarte (Opportunity Card), available immediately" },
  ],

  profile: [
    "Full-Stack Software Engineer with experience building high-performance, scalable web applications and e-commerce platforms.",
    "Specialized in modular UI architecture, API integrations, and delivering client-focused products that connect modern frontend stacks with robust backend logic.",
    "Strong skills in React, TypeScript, and Next.js, with 80+ delivered websites across e-commerce, SaaS, and corporate projects.",
  ],

  workHistory: [
    {
      date: "09/2025 – 05/2026",
      title: "Full-Stack Developer (Contract)",
      company: "AJN Healthcare Services",
      location: "Remote (Australia)",
      subtitle: "Built two production systems for a healthcare recruitment company and its sister company.",
      stack: "Tech stack: Laravel, PHP, MySQL, Next.js, React, TypeScript, Node.js, GraphQL, MongoDB, Docker, Nginx, AWS, DigitalOcean",
      bullets: [
        "Built a reference-check system in Laravel 13 / MySQL with 3 portals (admin, candidate, referee), fraud checks and automated PDF reports.",
        "Automated 7 types of transactional email through Microsoft 365; covered the system with 118 PHPUnit tests.",
        "Developed a multi-tenant SaaS platform (Next.js, Node.js, GraphQL, MongoDB) that sends scheduled and queued email, WhatsApp and SMS campaigns.",
        "Implemented JWT authentication, role-based admin and tenant areas, and subscription billing with Stripe and PayPal.",
        "Containerized the apps with Docker and deployed them behind Nginx on AWS and DigitalOcean, with SSL and SPF/DKIM/DMARC email setup.",
      ],
    },
    {
      date: "02/2024 – Present",
      title: "Full-Stack Developer",
      company: "Freelance",
      location: "Remote",
      subtitle: "Client projects across web platforms, e-commerce, and custom product development.",
      stack: "Tech stack: Next.js, React, TypeScript, Tailwind CSS, GSAP, Framer Motion, Node.js, Prisma, Vercel, Git",
      bullets: [
        "Built 5+ production web applications with Next.js (App Router), using Server Components and optimized API routes.",
        "Developed interactive, high-fidelity user interfaces with GSAP and Framer Motion for premium landing pages and SaaS platforms.",
        "Integrated REST/GraphQL APIs and managed global application state with React Query and Zustand.",
        "Set up Git-based CI/CD deployments on Vercel with a focus on performance and Core Web Vitals.",
      ],
    },
    {
      date: "03/2023 – 09/2025",
      title: "WordPress Developer",
      company: "Klev",
      location: "Dbayeh, Lebanon",
      subtitle: "Custom WordPress development, client delivery, and e-commerce implementation.",
      stack: "Tech stack: WordPress, PHP, JavaScript, WooCommerce, ACF, Elementor, REST APIs, Shopify",
      bullets: [
        "Delivered 80+ WordPress websites end-to-end, from local setup to custom themes and reusable PHP components.",
        "Built custom plugins and widgets in PHP and JavaScript to support specific business logic.",
        "Worked directly with international clients to translate complex requirements into technical solutions.",
        "Improved website performance and SEO, with measurable gains in Core Web Vitals and load times.",
        "Refactored legacy codebases to improve maintainability and applied modern security best practices.",
      ],
    },
  ],

  projects: [],

  internships: [],

  education: [
    {
      date: "2018 – 2023",
      title: "Diplôme d'Ingénieur in Computer and Communications Engineering",
      place: "Antonine University",
      location: "Beirut, Lebanon",
      note: "Concentration: Software Engineering and Networks · 5-year engineering degree",
    },
  ],

  technicalSkills: [
    { title: "Frontend", items: "JavaScript (ES6+), TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS, GSAP, Framer Motion, state management" },
    { title: "Backend & Database", items: "Node.js, PHP (Laravel), GraphQL, REST APIs, Prisma ORM, MySQL, PostgreSQL, MongoDB" },
    { title: "DevOps & Tools", items: "Docker, Nginx, AWS, DigitalOcean, Git/GitHub, CI/CD, Vercel, PHPUnit, technical SEO" },
    { title: "Engineering (Academic)", items: "Cisco networking, OpenCV, machine learning, CNN model evaluation, Python" },
  ],

  languages: ["Arabic (native)", "English (C1)", "French (B1)", "German (B1, intensive B2 course until 12/2026)"],

  labels: {
    profile: "Professional Profile",
    work: "Work Experience",
    projects: "Selected Projects",
    internships: "Internships",
    education: "Education",
    skills: "Technical Skills",
    languages: "Languages",
  },
};

const de: ResumeData = {
  name: shared.name,
  role: "Full-Stack Softwareentwickler • React • Next.js • Node.js • WordPress",
  profileImage: shared.profileImage,

  contacts: [
    { label: "Standort", value: "52224 Stolberg (NRW)" },
    { label: "Telefon", value: shared.phone, href: `tel:${shared.phone.replace(/\s/g, "")}` },
    { label: "E-Mail", value: shared.email, href: `mailto:${shared.email}` },
    { label: "LinkedIn", value: shared.linkedin, href: `https://${shared.linkedin}` },
    { label: "Website", value: shared.website, href: `https://${shared.website}` },
    { label: "GitHub", value: shared.github, href: `https://${shared.github}` },
    { label: "Aufenthaltstitel", value: "Chancenkarte (§ 20a AufenthG), sofort verfügbar" },
  ],

  profile: [
    "Full-Stack Softwareentwickler mit Erfahrung in der Entwicklung leistungsstarker und skalierbarer Webanwendungen und E-Commerce-Plattformen.",
    "Spezialisiert auf modulare UI-Architekturen, API-Integrationen sowie die Entwicklung moderner Softwarelösungen mit Fokus auf Benutzerfreundlichkeit und Performance.",
    "Fundierte Kenntnisse in React, TypeScript und Next.js sowie über 80 erfolgreich umgesetzte Projekte aus den Bereichen E-Commerce, SaaS und Unternehmenslösungen.",
  ],

  workHistory: [
    {
      date: "09/2025 – 05/2026",
      title: "Full-Stack-Entwickler (Vertragsbasis)",
      company: "AJN Healthcare Services",
      location: "Remote (Australien)",
      subtitle: "Entwicklung von zwei Produktivsystemen für ein Recruiting-Unternehmen im Gesundheitswesen und dessen Schwesterfirma.",
      stack: "Technologien: Laravel, PHP, MySQL, Next.js, React, TypeScript, Node.js, GraphQL, MongoDB, Docker, Nginx, AWS, DigitalOcean",
      bullets: [
        "Entwicklung eines Systems zur Referenzprüfung (Laravel 13 / MySQL) mit 3 Portalen, Betrugsprüfung und automatischen PDF-Berichten.",
        "Automatisierung von 7 E-Mail-Typen über Microsoft 365; Absicherung durch 118 PHPUnit-Tests.",
        "Entwicklung einer mandantenfähigen SaaS-Plattform (Next.js, Node.js, GraphQL, MongoDB) für geplante E-Mail-, WhatsApp- und SMS-Kampagnen.",
        "Umsetzung von JWT-Authentifizierung, rollenbasierten Bereichen und Abo-Zahlungen mit Stripe und PayPal.",
        "Containerisierung mit Docker und Deployment hinter Nginx auf AWS und DigitalOcean, inkl. SSL und SPF/DKIM/DMARC.",
      ],
    },
    {
      date: "02/2024 – heute",
      title: "Full-Stack Softwareentwickler",
      company: "Freiberuflich",
      location: "Remote",
      subtitle: "Entwicklung individueller Webanwendungen, E-Commerce-Plattformen und kundenspezifischer Softwarelösungen.",
      stack: "Technologien: Next.js, React, TypeScript, Tailwind CSS, GSAP, Framer Motion, Node.js, Prisma, Vercel, Git",
      bullets: [
        "Entwicklung von über fünf produktiven Webanwendungen mit Next.js (App Router), Server Components und optimierten API-Routen.",
        "Konzeption und Entwicklung moderner Benutzeroberflächen mit GSAP und Framer Motion für hochwertige Landingpages und SaaS-Plattformen.",
        "Integration von REST- und GraphQL-APIs sowie Verwaltung globaler Anwendungszustände mit React Query und Zustand.",
        "Aufbau Git-basierter CI/CD-Deployments auf Vercel mit Fokus auf Performance und Core Web Vitals.",
      ],
    },
    {
      date: "03/2023 – 09/2025",
      title: "WordPress-Entwickler",
      company: "Klev",
      location: "Dbayeh, Libanon",
      subtitle: "Entwicklung individueller WordPress-Lösungen sowie Umsetzung von E-Commerce-Projekten.",
      stack: "Technologien: WordPress, PHP, JavaScript, WooCommerce, ACF, Elementor, REST APIs, Shopify",
      bullets: [
        "Umsetzung von über 80 WordPress-Websites – von der lokalen Entwicklungsumgebung bis zum produktiven Einsatz.",
        "Entwicklung individueller Plugins und Widgets mit PHP und JavaScript für spezifische Unternehmensanforderungen.",
        "Enge Zusammenarbeit mit internationalen Kunden zur Umsetzung komplexer Geschäftsanforderungen.",
        "Optimierung von Performance und SEO mit messbaren Verbesserungen der Core Web Vitals und Ladezeiten.",
        "Modernisierung bestehender Codebasen sowie Umsetzung aktueller Sicherheitsstandards und Best Practices.",
      ],
    },
  ],

  projects: [],

  internships: [],

  education: [
    {
      date: "2018 – 2023",
      title: "Diplôme d'Ingénieur in Informatik und Telekommunikation (Computer and Communications Engineering)",
      place: "Antonine University",
      location: "Beirut, Libanon",
      note: "Schwerpunkt: Softwareentwicklung und Netzwerke · 5-jähriges Ingenieurstudium",
    },
  ],

  technicalSkills: [
    { title: "Frontend", items: "JavaScript (ES6+), TypeScript, React, Next.js, HTML5, CSS3, Tailwind CSS, GSAP, Framer Motion, State Management" },
    { title: "Backend & Datenbanken", items: "Node.js, PHP (Laravel), GraphQL, REST APIs, Prisma ORM, MySQL, PostgreSQL, MongoDB" },
    { title: "DevOps & Tools", items: "Docker, Nginx, AWS, DigitalOcean, Git/GitHub, CI/CD, Vercel, PHPUnit, technisches SEO" },
    { title: "Ingenieurwesen (Studium)", items: "Cisco Networking, OpenCV, Machine Learning, CNN-Modellbewertung, Python" },
  ],

  languages: ["Arabisch (Muttersprache)", "Englisch (C1)", "Französisch (B1)", "Deutsch (B1, B2-Intensivkurs bis 12/2026)"],

  labels: {
    profile: "Berufliches Profil",
    work: "Berufserfahrung",
    projects: "Ausgewählte Projekte",
    internships: "Praktika",
    education: "Ausbildung",
    skills: "Technische Fähigkeiten",
    languages: "Sprachen",
  },
};

export const RESUME: Record<ResumeLang, ResumeData> = { en, de };
