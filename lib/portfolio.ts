import type { LucideIcon } from "lucide-react";
import { Bot, Globe, Nfc, Smartphone, UtensilsCrossed, Workflow } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  summary: string;
  icon: LucideIcon;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "nfc-business-card-concept",
    title: "NFC Business Card Prototype",
    category: "NFC Smart Solutions",
    categorySlug: "nfc-solutions",
    summary:
      "A demo prototype of a tap-to-share NFC business card concept — encoding, digital profile page and tap analytics in one flow.",
    icon: Nfc,
    image: "/media/nfc/nfc-business-card.jpg",
    tags: ["NFC", "Prototype", "Digital Profile"],
  },
  {
    slug: "ai-support-assistant-demo",
    title: "AI Support Assistant Demo",
    category: "AI Solutions",
    categorySlug: "ai-solutions",
    summary:
      "A working demonstration of an AI assistant trained on business content, answering questions and qualifying leads autonomously.",
    icon: Bot,
    image: "/media/ai/ai-chatbot.png",
    tags: ["AI", "Chatbot", "RAG"],
  },
  {
    slug: "booking-website-concept",
    title: "Booking Website Concept",
    category: "Website Development",
    categorySlug: "website-development",
    summary:
      "A high-fidelity concept of a fast, modern booking website — design system, responsive layouts and conversion-focused flows.",
    icon: Globe,
    image: "/media/websites/website-build.jpg",
    tags: ["Web", "UI/UX", "Concept"],
  },
  {
    slug: "customer-app-concept",
    title: "Customer App Interface Concept",
    category: "Mobile Applications",
    categorySlug: "mobile-applications",
    summary:
      "A mobile app interface concept demonstrating navigation, onboarding and core screens for a customer-facing product.",
    icon: Smartphone,
    image: "/media/apps/mobile-app.png",
    tags: ["Mobile", "UI/UX", "Concept"],
  },
  {
    slug: "nfc-smart-menu-demo",
    title: "NFC Smart Menu Demonstration",
    category: "NFC Smart Solutions",
    categorySlug: "nfc-solutions",
    summary:
      "A demonstration of an NFC table tag opening a live digital menu — multi-language and updateable without reprinting.",
    icon: UtensilsCrossed,
    image: "/media/nfc/nfc-menu.jpg",
    tags: ["NFC", "Demo", "Menus"],
  },
  {
    slug: "automation-workflow-demo",
    title: "Automation Workflow Demo",
    category: "Business Automation",
    categorySlug: "business-automation",
    summary:
      "A prototype workflow that captures leads and routes them automatically — a demonstration of how repetitive work can run itself.",
    icon: Workflow,
    image: "/media/websites/automation-build.jpg",
    tags: ["Automation", "Prototype", "AI"],
  },
];

export const projectCategories = [
  { label: "All Work", slug: "all" },
  { label: "NFC Smart Solutions", slug: "nfc-solutions" },
  { label: "AI Solutions", slug: "ai-solutions" },
  { label: "Websites", slug: "website-development" },
  { label: "Mobile Apps", slug: "mobile-applications" },
  { label: "Business Automation", slug: "business-automation" },
];

export function featuredProjects() {
  return projects.slice(0, 3);
}
