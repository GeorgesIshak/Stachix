// data/projects.ts

export interface Project {
  title: string;
  category: string;
  location: string;
  tech: string[];
  description: string;
  image: string;
  link: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Equation Media",
    category: "Agency website",
    location: "MENA",
    tech: ["Next.js", "GSAP", "Framer Motion"],
    description: "Media agency website for the MENA region with advanced scroll animations and modern interactions.",
    image: "/images/projects/equation-media.webp",
    link: "https://www.equation-media.com/",
  },
  {
    title: "Nou Architecture",
    category: "Portfolio",
    location: "Cyprus",
    tech: ["Next.js", "Framer Motion"],
    description: "Architecture studio portfolio with clean layouts and smooth page transitions.",
    image: "/images/projects/nou-architecture.webp",
    link: "https://nou-seven.vercel.app/",
  },
  {
    title: "Luminaire LB",
    category: "E-commerce",
    location: "Lebanon",
    tech: ["WordPress", "WooCommerce", "Custom filters"],
    description: "Lighting store with advanced AJAX product filtering and a custom WooCommerce setup.",
    image: "/images/projects/luminaire.webp",
    link: "https://luminairelb.com/",
  },
  {
    title: "Chiclique Store",
    category: "E-commerce",
    location: "Lebanon",
    tech: ["WordPress", "WooCommerce", "Payments"],
    description: "Fashion store built from scratch with a custom checkout and payment flow.",
    image: "/images/projects/chiclique-store.webp",
    link: "https://chiccliquestore.com/",
  },
  {
    title: "Korkmaz Foundation",
    category: "Non-profit",
    location: "Turkey",
    tech: ["WordPress", "Donations", "Multilingual"],
    description: "Multilingual charity website with a secure online donation system.",
    image: "/images/projects/korkmaz-foundation.webp",
    link: "https://korkmazfoundation.org/",
  },
  {
    title: "Maak Events",
    category: "Corporate",
    location: "Saudi Arabia",
    tech: ["WordPress", "Custom theme"],
    description: "Event company website with a custom theme and flexible, editable content sections.",
    image: "/images/projects/maak-events.webp",
    link: "https://maak.co/",
  },
  {
    title: "Augmental Education",
    category: "Education",
    location: "USA",
    tech: ["WordPress"],
    description: "Website for a US education company, built for easy content management by their team.",
    image: "/images/projects/augmental-education.webp",
    link: "https://augmental.education/",
  },
];
