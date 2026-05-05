// data/projects.ts

export interface Project {
  title: string;
  category: string;
  tech: string[];
  description: string;
  image: string;
  stats: string;
  link: string; // Added this
}

export const PROJECTS: Project[] = [
  {
    title: "Equation Media",
    category: "Creative Dev",
    tech: ["Next.js", "Framer Motion", "GSAP"],
    description: "Media agency website for the MENA region with advanced animations and modern interactions.",
    image: "/images/equation-media-project.png",
    stats: "MENA Region",
    link: "https://www.equation-media.com/"
  },
  {
    title: "Nou Architecture",
    category: "Portfolio Dev",
    tech: ["Next.js", "Framer Motion"],
    description: "Modern architecture portfolio website with clean layouts and smooth transitions.",
    image: "/images/nou-architecture.png",
    stats: "Cyprus",
    link: "https://nou-seven.vercel.app/"
  },
  {
    title: "Luminaire LB",
    category: "E-Commerce Dev",
    tech: ["WordPress", "WooCommerce", "Custom Filters"],
    description: "Custom-built lighting store with advanced product filtering and WooCommerce integration.",
    image: "/images/luminaire-project.png",
    stats: "Lebanon",
    link: "http://luminairelb.com/"
  },
  {
    title: "Korkmaz Charity Foundation",
    category: "Non-Profit Dev",
    tech: ["WordPress", "Donations System"],
    description: "Donation-based charity website with multilingual support and secure payment integration.",
    image: "/images/korkomaz.png",
    stats: "Turkey",
    link: "https://korkmazfoundation.org/"
  },
  {
    title: "Chiclique Store",
    category: "E-Commerce Dev",
    tech: ["WordPress", "WooCommerce", "Payment Integration"],
    description: "Full WooCommerce fashion store built from scratch with custom checkout and payment flows.",
    image: "/images/chiclique-store-lebanon.png",
    stats: "Lebanon",
    link: "https://chiccliquestore.com/"
  },
  {
    title: "Maak Events",
    category: "Corporate Dev",
    tech: ["WordPress", "Custom Theme"],
    description: "Event company website with a custom WordPress theme and dynamic content sections.",
    image: "/images/maak-project.png",
    stats: "Saudi Arabia",
    link: "https://maak.co/"
  },
  {
    title: "Augmental Education",
    category: "Education Dev",
    tech: ["WordPress"],
    description: "Educational institution website based in the USA built on WordPress for modern learning management.",
    image: "/images/lurno-project.png",
    stats: "USA",
    link: "https://augmental.education/"
  }
];
