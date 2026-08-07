export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: "TechNest",
  tagline: "Smart digital solutions for modern business",
  description:
    "TechNest is a growing technology startup focused on delivering innovative digital solutions — NFC smart products, AI solutions, websites, mobile apps, custom software and business automation — that help businesses adopt modern technology.",
  url: "https://technest.example.com",
} as const;

export const navigation: NavItem[] = [
  { label: "NFC Solutions", href: "/nfc-solutions" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Software", href: "/software" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const pillars = [
  {
    title: "Innovative Solutions",
    description: "Smart digital products built around real business needs.",
  },
  {
    title: "Modern Technologies",
    description: "NFC, AI and modern software from day one.",
  },
  {
    title: "Custom Development",
    description: "Solutions tailored to each business, not off-the-shelf.",
  },
  {
    title: "Future-Ready Approach",
    description: "Designed to scale and evolve with your business.",
  },
];

export const vision = {
  title: "Our Vision",
  text: "At TechNest, our vision is to empower businesses with smart digital solutions that improve efficiency, customer experience, and growth.",
};

export const mission = {
  title: "Our Mission",
  text: "We aim to transform ideas into reliable digital products through NFC technology, artificial intelligence, software development, and modern digital experiences.",
};
