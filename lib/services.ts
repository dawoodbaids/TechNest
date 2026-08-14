import type { LucideIcon } from "lucide-react";
import { media } from "@/lib/media";
import {
  Bot,
  Boxes,
  Building2,
  CalendarDays,
  Contact,
  Fingerprint,
  Gauge,
  Globe,
  GraduationCap,
  Headset,
  HeartPulse,
  Megaphone,
  MessageSquareText,
  MonitorSmartphone,
  Nfc,
  Package,
  Puzzle,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Tag,
  UtensilsCrossed,
  Workflow,
} from "lucide-react";

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
  deliverables: string[];
  process: ServiceProcess[];
  stack: string[];
}

export interface SolutionArea {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  services: Service[];
}

export const nfcSolutions: Service[] = [
  {
    slug: "nfc-business-cards",
    name: "NFC Business Cards",
    image: media.nfc.businessCard,
    tagline: "Share your digital profile with a single tap",
    description:
      "Premium NFC business cards that share your digital profile, contact details, portfolio and links the moment they're tapped against any phone. No apps, no typing — instant connection.",
    icon: Contact,
    features: [
      "Tap-to-share digital profile and vCard",
      "Premium finishes: matte, gloss, metal and eco materials",
      "Links to socials, portfolio, booking or payment pages",
      "Custom design with your brand and artwork",
      "Reusable — update the linked profile anytime without reprinting",
    ],
    deliverables: [
      "Card concept and design consultation",
      "NFC encoding and tap testing per unit",
      "Digital profile page with analytics",
      "Custom artwork and printing",
      "Bulk production with delivery",
    ],
    process: [
      {
        step: "01",
        title: "Consult",
        description:
          "We understand how you network and what your profile needs to achieve.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "We design the card and the digital profile it opens on a tap.",
      },
      {
        step: "03",
        title: "Encode & print",
        description:
          "We encode, test and print so every card works straight out of the box.",
      },
      {
        step: "04",
        title: "Deliver",
        description:
          "You receive ready-to-use cards with analytics and future updates.",
      },
    ],
    stack: ["NFC NDEF", "vCard", "iOS & Android taps", "Analytics"],
  },
  {
    slug: "nfc-digital-profiles",
    name: "NFC Digital Profiles",
    image: media.nfc.profile,
    tagline: "A living digital presence behind every product",
    description:
      "A one-tap digital profile that hosts your contact details, portfolio, social links, reviews and more. Update content anytime without touching the physical product.",
    icon: Fingerprint,
    features: [
      "Custom profile page with your branding",
      "Live contact, social and link buttons",
      "Update content anytime — no reprinting",
      "Tap analytics: who tapped, when and where",
      "Works across every NFC product we build",
    ],
    deliverables: [
      "Branded digital profile page",
      "vCard download and tap-to-call/email",
      "QR fallback code",
      "Tap analytics dashboard",
      "Content management access",
    ],
    process: [
      {
        step: "01",
        title: "Define",
        description: "We define what the profile should show and how it's used.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design a polished profile page around your brand.",
      },
      {
        step: "03",
        title: "Connect",
        description:
          "We encode the profile to your NFC products and add analytics.",
      },
      {
        step: "04",
        title: "Evolve",
        description: "You update content anytime and we keep it fresh.",
      },
    ],
    stack: ["NFC NDEF", "HTML5", "Analytics", "vCard"],
  },
  {
    slug: "nfc-smart-menus",
    name: "NFC Smart Menus",
    image: media.nfc.menu,
    tagline: "A contactless menu your guests just tap",
    description:
      "Replace paper menus with NFC table tags that open your live digital menu. Guests tap and browse instantly — no app, no QR scan failure, and menu changes are instant.",
    icon: UtensilsCrossed,
    features: [
      "Tap-to-open digital menu on every table",
      "Live prices and dishes — update instantly",
      "Multi-language and allergen-friendly",
      "Photo-rich, on-brand menu design",
      "Works alongside QR code signage",
    ],
    deliverables: [
      "NFC table tags or stickers",
      "Digital menu with categories and photos",
      "Multi-language support",
      "Installation and staff training",
      "Ongoing menu updates",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "We review your menu, branding and guest experience.",
      },
      {
        step: "02",
        title: "Build",
        description: "We build a fast, beautiful digital menu.",
      },
      {
        step: "03",
        title: "Deploy",
        description: "We fit NFC tags at every table and test each one.",
      },
      {
        step: "04",
        title: "Update",
        description: "Prices and dishes change in minutes — no reprints.",
      },
    ],
    stack: ["NFC NDEF", "HTML5", "Multi-language", "CMS"],
  },
  {
    slug: "nfc-google-reviews",
    name: "NFC Google Review Solutions",
    image: media.products.googleReview,
    tagline: "Turn happy customers into 5-star reviews",
    description:
      "NFC review cards and table tags that open your Google review page on a single tap. Capture reviews at the moment of satisfaction, when it matters most.",
    icon: Star,
    features: [
      "One-tap link straight to your Google review page",
      "Available as cards, table tags or counter stickers",
      "Placement guidance for maximum reviews",
      "Track review growth over time",
      "Perfect for restaurants, salons, clinics and shops",
    ],
    deliverables: [
      "NFC review cards or table tags",
      "Google review encoding and testing",
      "Placement and wording guidance",
      "Review growth tracking",
      "Replacement units when needed",
    ],
    process: [
      {
        step: "01",
        title: "Setup",
        description: "We configure the exact link to your review page.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design cards or tags that invite a review naturally.",
      },
      {
        step: "03",
        title: "Deploy",
        description: "We place and test the tags in high-traffic spots.",
      },
      {
        step: "04",
        title: "Grow",
        description: "We review performance and help reviews keep flowing.",
      },
    ],
    stack: ["NFC NDEF", "Google My Business", "Analytics"],
  },
  {
    slug: "nfc-marketing-products",
    name: "NFC Marketing Products",
    image: media.nfc.marketing,
    tagline: "Smart marketing that connects offline and online",
    description:
      "NFC-powered flyers, brochures, posters, stickers and giveaways that open videos, offers, social pages or your website on a tap. Turn any printed material into an interactive experience.",
    icon: Megaphone,
    features: [
      "NFC flyers, posters, brochures and stickers",
      "Tap-to-video, tap-to-offer and tap-to-social",
      "Campaign landing pages with tracking",
      "Track engagement per product and campaign",
      "Ideal for events, retail and real estate",
    ],
    deliverables: [
      "Campaign concept and NFC integration",
      "Custom landing pages and tracking",
      "NFC-embedded marketing materials",
      "Bulk production and delivery",
      "Campaign analytics",
    ],
    process: [
      {
        step: "01",
        title: "Plan",
        description: "We define the campaign and the tap experience.",
      },
      {
        step: "02",
        title: "Create",
        description: "We design materials and the digital experience.",
      },
      {
        step: "03",
        title: "Produce",
        description: "We embed, encode and test every NFC element.",
      },
      {
        step: "04",
        title: "Measure",
        description: "We track engagement and optimize the campaign.",
      },
    ],
    stack: ["NFC NDEF", "Landing pages", "Analytics", "Campaign tracking"],
  },
  {
    slug: "nfc-smart-tags",
    name: "NFC Smart Tags",
    image: media.nfc.tags,
    tagline: "Simple NFC tags for any surface",
    description:
      "Stick-on NFC tags and labels that turn any surface smart — product packaging, shelves, desks, lockers, doors and displays. Tap to open a link, connect to Wi-Fi, or trigger an action.",
    icon: Tag,
    features: [
      "Stick-on tags for any surface",
      "Tap-to-link, tap-to-Wi-Fi, tap-to-action",
      "Product authentication and anti-counterfeit",
      "Packaging, shelves, desks, doors and displays",
      "Low cost, quick to deploy at scale",
    ],
    deliverables: [
      "Tag type and placement consultation",
      "Custom encoding per tag",
      "Sample testing on real phones",
      "Bulk delivery of ready-to-use tags",
      "Deployment guidance",
    ],
    process: [
      {
        step: "01",
        title: "Identify",
        description: "We find the right surfaces and use cases.",
      },
      {
        step: "02",
        title: "Select",
        description: "We pick the right tag type for the surface.",
      },
      {
        step: "03",
        title: "Encode",
        description: "We encode and test each tag.",
      },
      {
        step: "04",
        title: "Deploy",
        description: "We deliver and help you roll out.",
      },
    ],
    stack: ["NFC NDEF", "RFID", "Wi-Fi handoff", "Product auth"],
  },
  {
    slug: "custom-nfc-solutions",
    name: "Custom NFC Solutions",
    image: media.nfc.custom,
    tagline: "Any product, any surface — made smart",
    description:
      "NFC technology embedded in anything: packaging, name badges, loyalty cards, keychains, event passes, product labels and more. If it can be touched, it can be made interactive.",
    icon: Package,
    features: [
      "NFC in packaging, badges, labels and merchandise",
      "Event check-in and contactless experiences",
      "Product authentication and anti-counterfeit tags",
      "Loyalty and membership cards",
      "Fully custom shapes, sizes and branding",
    ],
    deliverables: [
      "Custom NFC product design",
      "Prototyping and tap testing",
      "Custom encoding per unit",
      "Bulk production and delivery",
      "Associated digital experience",
    ],
    process: [
      {
        step: "01",
        title: "Ideate",
        description: "We define the product, use case and experience.",
      },
      {
        step: "02",
        title: "Prototype",
        description: "We prototype the item and test it on real phones.",
      },
      {
        step: "03",
        title: "Produce",
        description: "We encode and produce units at any volume.",
      },
      {
        step: "04",
        title: "Launch",
        description: "We deliver ready-to-use products with documentation.",
      },
    ],
    stack: ["NFC NDEF", "RFID", "Prototyping", "Custom printing"],
  },
  {
    slug: "nfc-event-solutions",
    name: "NFC Event Solutions",
    image: media.products.event,
    tagline: "Frictionless check-in and unforgettable events",
    description:
      "NFC event passes, wristbands and badges that replace paper tickets. Guests tap to check in, access the venue, join sessions and share their experience instantly.",
    icon: CalendarDays,
    features: [
      "NFC wristbands, badges and event passes",
      "Tap-to-check-in at gates and sessions",
      "Contactless networking and badge sharing",
      "Real-time attendance analytics",
      "Reusable across events — no reprinting",
    ],
    deliverables: [
      "Event pass design and NFC encoding",
      "Check-in software and gate setup",
      "Session access and permissions",
      "Attendance analytics dashboard",
      "On-site support",
    ],
    process: [
      {
        step: "01",
        title: "Plan",
        description: "We map your event flow and check-in experience.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design badges and passes around your branding.",
      },
      {
        step: "03",
        title: "Deploy",
        description: "We encode, test and set up gates before the event.",
      },
      {
        step: "04",
        title: "Run",
        description: "Guests tap in and you see live attendance.",
      },
    ],
    stack: ["NFC NDEF", "Check-in software", "Analytics"],
  },
  {
    slug: "nfc-hotel-solutions",
    name: "NFC Hotel Solutions",
    image: media.products.hotel,
    tagline: "Keyless rooms and smarter guest experiences",
    description:
      "NFC room keys, in-room guides and guest services for hotels. Guests unlock doors, order services and check out with a tap — while staff get faster, quieter operations.",
    icon: Building2,
    features: [
      "NFC key cards for keyless room entry",
      "In-room tap guides for amenities and services",
      "Contactless check-in and checkout",
      "Guest feedback and review collection",
      "Integration with existing hotel systems",
    ],
    deliverables: [
      "Room key encoding and programming",
      "Guest-facing NFC touchpoints",
      "In-room experience design",
      "Staff training and rollout",
      "Ongoing maintenance and re-encoding",
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description: "We review your hotel's guest journey and operations.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design key cards and in-room touchpoints.",
      },
      {
        step: "03",
        title: "Encode",
        description: "We program and test every key and touchpoint.",
      },
      {
        step: "04",
        title: "Launch",
        description: "We roll out across rooms with staff training.",
      },
    ],
    stack: ["NFC NDEF", "Hotel PMS", "Guest app", "Analytics"],
  },
  {
    slug: "nfc-retail-solutions",
    name: "NFC Retail Solutions",
    image: media.products.retail,
    tagline: "Smart shelves, tags and store experiences",
    description:
      "NFC tags and signage that make retail interactive. Tap a product to see details, prices, reviews and offers — and turn every shelf into a digital storefront.",
    icon: Store,
    features: [
      "Smart price tags and shelf labels",
      "Tap-for-product details and reviews",
      "Loyalty and member checkout",
      "Out-of-stock and reorder notifications",
      "Retail analytics and engagement tracking",
    ],
    deliverables: [
      "Product tag design and encoding",
      "Digital product pages and catalogs",
      "Loyalty integration",
      "Shelf deployment and testing",
      "Retail analytics dashboard",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "We review your store and product range.",
      },
      {
        step: "02",
        title: "Build",
        description: "We build digital product pages and encode tags.",
      },
      {
        step: "03",
        title: "Deploy",
        description: "We place and test tags across the store.",
      },
      {
        step: "04",
        title: "Grow",
        description: "We track engagement and optimize placement.",
      },
    ],
    stack: ["NFC NDEF", "Product catalog", "POS", "Analytics"],
  },
  {
    slug: "nfc-healthcare-solutions",
    name: "NFC Healthcare Solutions",
    image: media.products.healthcare,
    tagline: "Safer check-ins and smoother patient journeys",
    description:
      "NFC cards and tags for clinics, hospitals and care facilities — contactless check-in, secure access, appointment updates and clear patient information with a single tap.",
    icon: HeartPulse,
    features: [
      "Contactless patient check-in",
      "Staff and department access cards",
      "Appointment and waiting room updates",
      "Information cards and wayfinding",
      "Privacy-aware, secure configuration",
    ],
    deliverables: [
      "Patient and staff card design",
      "Check-in flow setup and testing",
      "Information touchpoints and signage",
      "Staff training",
      "Compliance and security review",
    ],
    process: [
      {
        step: "01",
        title: "Consult",
        description: "We understand your facility and patient flow.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design cards and touchpoints for your setting.",
      },
      {
        step: "03",
        title: "Configure",
        description: "We set up secure check-in and access flows.",
      },
      {
        step: "04",
        title: "Support",
        description: "We train staff and support rollout.",
      },
    ],
    stack: ["NFC NDEF", "Check-in software", "Access control"],
  },
  {
    slug: "nfc-education-solutions",
    name: "NFC Education Solutions",
    image: media.products.education,
    tagline: "Smarter campuses with student ID cards",
    description:
      "NFC student cards for attendance, library access, lockers, canteens and campus payments. One tap connects every part of the student experience.",
    icon: GraduationCap,
    features: [
      "NFC student ID cards",
      "Attendance and class check-in",
      "Library, locker and lab access",
      "Canteen and on-campus payments",
      "Parent communication and notifications",
    ],
    deliverables: [
      "Student card design and encoding",
      "Attendance and access integration",
      "Campus systems integration",
      "Staff training and rollout",
      "Card management and support",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "We review campus systems and student flows.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design cards and the experiences they unlock.",
      },
      {
        step: "03",
        title: "Integrate",
        description: "We connect attendance, access and payments.",
      },
      {
        step: "04",
        title: "Launch",
        description: "We roll out cards with training and support.",
      },
    ],
    stack: ["NFC NDEF", "Attendance systems", "Access control"],
  },
];

export const nfcUseCases = [
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Hotels", icon: Building2 },
  { label: "Companies", icon: Contact },
  { label: "Real Estate", icon: Store },
  { label: "Personal Branding", icon: Sparkles },
  { label: "Events", icon: CalendarDays },
];

export const aiSolutions: Service[] = [
  {
    slug: "ai-chatbots",
    name: "AI Chatbots",
    image: media.ai.chatbot,
    tagline: "Intelligent assistants that answer and convert 24/7",
    description:
      "Custom AI chatbots trained on your business knowledge. Deployed on your website or WhatsApp, they answer instantly, qualify leads and hand complex conversations to your team.",
    icon: Bot,
    features: [
      "Chatbots trained on your FAQ, catalog and brand voice",
      "WhatsApp and website deployment",
      "Lead qualification and smart routing",
      "Order and appointment assistance",
      "Human handoff with full context",
    ],
    deliverables: [
      "AI assistant trained on your content",
      "Website widget or WhatsApp integration",
      "Conversation flows and fallback rules",
      "Admin panel with chat analytics",
      "Ongoing tuning and updates",
    ],
    process: [
      {
        step: "01",
        title: "Map",
        description: "We map the questions customers ask and actions to automate.",
      },
      {
        step: "02",
        title: "Train",
        description: "We build and train the assistant on your knowledge base.",
      },
      {
        step: "03",
        title: "Deploy",
        description: "We integrate it into your website or WhatsApp.",
      },
      {
        step: "04",
        title: "Improve",
        description: "We monitor conversations and improve answers continuously.",
      },
    ],
    stack: ["OpenAI", "RAG", "Node.js", "WhatsApp API", "React"],
  },
  {
    slug: "customer-support-automation",
    name: "Customer Support Automation",
    image: media.ai.support,
    tagline: "Resolve common issues automatically, 24/7",
    description:
      "AI-powered support automation that answers routine questions, resolves tickets and escalates complex cases to your team — reducing response time and support workload.",
    icon: Headset,
    features: [
      "Automated replies for common questions",
      "Ticket triage and smart routing",
      "Knowledge-base-backed answers",
      "Escalation to humans with full context",
      "Support analytics and insights",
    ],
    deliverables: [
      "Support flow design and training",
      "Integration with your support channels",
      "Knowledge base setup",
      "Analytics dashboard",
      "Continuous improvement",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "We review your support channels and common issues.",
      },
      {
        step: "02",
        title: "Automate",
        description: "We build automated resolution flows.",
      },
      {
        step: "03",
        title: "Integrate",
        description: "We connect to your existing support tools.",
      },
      {
        step: "04",
        title: "Refine",
        description: "We monitor results and improve automation.",
      },
    ],
    stack: ["OpenAI", "RAG", "WhatsApp API", "CRM", "n8n"],
  },
  {
    slug: "ai-assistants",
    name: "AI Assistants",
    image: media.ai.assistant,
    tagline: "A personal AI that works for your business",
    description:
      "Custom AI assistants for teams and businesses — scheduling, drafting, research, internal knowledge and more. Assistants trained on your data that handle daily tasks.",
    icon: MessageSquareText,
    features: [
      "Internal knowledge assistants",
      "Scheduling and meeting assistance",
      "Drafting and content assistance",
      "Data and document Q&A",
      "Trained on your business data",
    ],
    deliverables: [
      "Assistant use-case definition",
      "Training on your data",
      "Team-facing interface",
      "Permissions and safety rules",
      "Deployment and training",
    ],
    process: [
      {
        step: "01",
        title: "Define",
        description: "We identify the tasks the assistant should own.",
      },
      {
        step: "02",
        title: "Train",
        description: "We build and train on your business data.",
      },
      {
        step: "03",
        title: "Deploy",
        description: "We roll it out to your team.",
      },
      {
        step: "04",
        title: "Optimize",
        description: "We refine performance over time.",
      },
    ],
    stack: ["OpenAI", "RAG", "Vector DBs", "Node.js", "React"],
  },
  {
    slug: "business-ai-tools",
    name: "Business AI Tools",
    image: media.ai.tools,
    tagline: "Practical AI built into your workflows",
    description:
      "Custom AI tools for real business jobs — content generation, document processing, data extraction, forecasting and more. AI engineered around your processes, not generic apps.",
    icon: Gauge,
    features: [
      "AI document and data processing",
      "Content and report generation",
      "Predictive analysis and forecasting",
      "Custom AI workflows per department",
      "Integration with your systems",
    ],
    deliverables: [
      "AI tool specification",
      "Model selection and fine-tuning",
      "Custom tool development",
      "Integration and deployment",
      "Training and documentation",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "We find where AI adds the most value.",
      },
      {
        step: "02",
        title: "Build",
        description: "We develop a custom AI tool for the job.",
      },
      {
        step: "03",
        title: "Integrate",
        description: "We connect it to your workflow.",
      },
      {
        step: "04",
        title: "Scale",
        description: "We expand AI to more processes.",
      },
    ],
    stack: ["OpenAI", "Python", "Node.js", "RAG", "Vector DBs"],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    image: media.ai.integration,
    tagline: "Add AI to your existing software",
    description:
      "We integrate AI into the products you already use — apps, CRMs, websites and internal systems. Bring intelligence to existing workflows without rebuilding everything.",
    icon: Puzzle,
    features: [
      "AI features in existing apps and systems",
      "LLM and assistant integration",
      "Smart search and recommendations",
      "Automated classification and tagging",
      "Secure, privacy-aware implementation",
    ],
    deliverables: [
      "Integration assessment",
      "AI feature design",
      "Implementation and testing",
      "Security and compliance review",
      "Documentation and training",
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description: "We evaluate your systems and AI opportunities.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design the AI integration.",
      },
      {
        step: "03",
        title: "Build",
        description: "We implement and test securely.",
      },
      {
        step: "04",
        title: "Launch",
        description: "We deploy and support the integration.",
      },
    ],
    stack: ["OpenAI", "REST APIs", "Python", "Node.js", "Docker"],
  },
];

export const softwareServices: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    image: media.websites.build,
    tagline: "Fast, modern websites built to convert",
    description:
      "Corporate websites, startup sites, e-commerce, portfolios, booking systems and landing pages — built on modern frameworks with SEO and performance built in.",
    icon: Globe,
    features: [
      "Corporate and startup websites",
      "E-commerce and booking systems",
      "Portfolio and landing pages",
      "SEO and analytics setup",
      "CMS so you can edit content yourself",
    ],
    deliverables: [
      "Custom responsive design",
      "Fast front-end development",
      "SEO foundations and meta data",
      "Content management system",
      "Deployment and training",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "We learn your business, audience and goals first.",
      },
      {
        step: "02",
        title: "Design",
        description: "We prototype a modern interface you can preview.",
      },
      {
        step: "03",
        title: "Build",
        description: "We develop with clean code and mobile-first design.",
      },
      {
        step: "04",
        title: "Launch",
        description: "We test, deploy and optimize with support.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    slug: "mobile-applications",
    name: "Mobile Applications",
    image: media.apps.mobileApp,
    tagline: "Native-quality apps for iOS and Android",
    description:
      "Android apps, iOS apps, cross-platform apps, business applications and customer apps — designed and developed for both stores, from MVP to full product.",
    icon: Smartphone,
    features: [
      "Android, iOS and cross-platform apps",
      "Business and customer applications",
      "MVP development to validate ideas fast",
      "Backend APIs and cloud infrastructure",
      "Store publishing support",
    ],
    deliverables: [
      "Product strategy and architecture",
      "UI/UX design for mobile",
      "Development with maintainable code",
      "Store-ready submission package",
      "Post-launch maintenance",
    ],
    process: [
      {
        step: "01",
        title: "Ideate",
        description: "We refine your idea into a clear feature set.",
      },
      {
        step: "02",
        title: "Prototype",
        description: "We design interactive screens before development.",
      },
      {
        step: "03",
        title: "Develop",
        description: "We build the app in sprints with regular demos.",
      },
      {
        step: "04",
        title: "Publish",
        description: "We prepare store assets and ship your app.",
      },
    ],
    stack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    slug: "custom-software",
    name: "Custom Software Development",
    image: media.websites.software,
    tagline: "Tailor-made systems that automate and scale",
    description:
      "When off-the-shelf software doesn't fit, we build what does. CRMs, ERPs, dashboards and internal tools that connect your systems and remove manual work.",
    icon: Boxes,
    features: [
      "Custom CRM, ERP and workflow systems",
      "Internal tools and admin dashboards",
      "API development and integrations",
      "Data migration and modernization",
      "Business process automation",
    ],
    deliverables: [
      "Requirements analysis and technical design",
      "Modular, documented codebase",
      "Integration with existing tools",
      "Admin and user training",
      "Maintenance and support",
    ],
    process: [
      {
        step: "01",
        title: "Analyze",
        description: "We audit workflows to find where software saves time.",
      },
      {
        step: "02",
        title: "Design",
        description: "We architect a solution that fits your team.",
      },
      {
        step: "03",
        title: "Build",
        description: "We develop in iterative cycles with feedback.",
      },
      {
        step: "04",
        title: "Adopt",
        description: "We deploy, train and support the system long-term.",
      },
    ],
    stack: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker"],
  },
  {
    slug: "business-automation",
    name: "Business Automation Systems",
    image: media.websites.automation,
    tagline: "Automate repetitive work and focus on growth",
    description:
      "Workflow automation, integrations and AI-powered tools that eliminate repetitive tasks — from lead follow-up and invoicing to reporting and scheduling.",
    icon: Workflow,
    features: [
      "Workflow and process automation",
      "System-to-system integrations",
      "AI-powered document and data handling",
      "Automated reporting and dashboards",
      "Lead follow-up and notification flows",
    ],
    deliverables: [
      "Process audit and automation roadmap",
      "Custom automation workflows",
      "Integrations with your existing tools",
      "Training and documentation",
      "Monitoring and optimization",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description: "We find the repetitive tasks costing you time.",
      },
      {
        step: "02",
        title: "Plan",
        description: "We design an automation roadmap with clear wins.",
      },
      {
        step: "03",
        title: "Automate",
        description: "We build workflows that run on their own.",
      },
      {
        step: "04",
        title: "Optimize",
        description: "We monitor and improve automation over time.",
      },
    ],
    stack: ["n8n", "Zapier", "Node.js", "OpenAI", "APIs"],
  },
  {
    slug: "dashboards",
    name: "Analytics Dashboards",
    image: media.products.dashboard,
    tagline: "See your business at a glance",
    description:
      "Custom dashboards that pull your data into one clear view. Sales, performance, engagement, finance — designed around how you actually run decisions.",
    icon: Gauge,
    features: [
      "Real-time business and sales metrics",
      "Charts, KPIs and custom reports",
      "Data from multiple systems in one view",
      "Role-based views for each team",
      "Export, alerts and scheduled reports",
    ],
    deliverables: [
      "Dashboard strategy and data mapping",
      "Data pipeline and integrations",
      "Custom chart and KPI design",
      "Role-based access setup",
      "Training and documentation",
    ],
    process: [
      {
        step: "01",
        title: "Map",
        description: "We identify the metrics that drive your decisions.",
      },
      {
        step: "02",
        title: "Connect",
        description: "We connect your data sources and clean the data.",
      },
      {
        step: "03",
        title: "Build",
        description: "We build the dashboard around your KPIs.",
      },
      {
        step: "04",
        title: "Refine",
        description: "We tune views and reporting as you grow.",
      },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "BI tools", "REST APIs"],
  },
  {
    slug: "admin-panels",
    name: "Admin Panels",
    image: media.products.adminPanel,
    tagline: "Control everything from one place",
    description:
      "Clean, secure admin panels for managing users, orders, content, settings and operations — the control center your team actually enjoys using.",
    icon: MonitorSmartphone,
    features: [
      "User, order and content management",
      "Secure role-based access control",
      "Fast search and bulk actions",
      "Activity logs and audit trails",
      "Clean, mobile-friendly interface",
    ],
    deliverables: [
      "Admin panel UI/UX design",
      "Backend APIs and database schema",
      "Authentication and roles",
      "Deployment and training",
      "Ongoing support",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description: "We map the operations your team manages.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design an admin experience your team will use.",
      },
      {
        step: "03",
        title: "Build",
        description: "We build the panel and its APIs.",
      },
      {
        step: "04",
        title: "Empower",
        description: "We train your team and roll it out.",
      },
    ],
    stack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Auth"],
  },
  {
    slug: "crm-systems",
    name: "CRM Systems",
    image: media.products.crm,
    tagline: "Know every customer, never drop a lead",
    description:
      "Custom CRM systems that track leads, deals and customer relationships — with pipelines, automation and reporting built around your sales process.",
    icon: Boxes,
    features: [
      "Leads, contacts and deal pipelines",
      "Automated follow-ups and reminders",
      "Email and WhatsApp integration",
      "Sales reporting and forecasting",
      "Team collaboration and permissions",
    ],
    deliverables: [
      "CRM process design",
      "Custom development and integrations",
      "Migration of existing data",
      "Team training",
      "Support and evolution",
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        description: "We study your sales process and touchpoints.",
      },
      {
        step: "02",
        title: "Design",
        description: "We design pipelines and workflows that fit.",
      },
      {
        step: "03",
        title: "Build",
        description: "We build and integrate your CRM.",
      },
      {
        step: "04",
        title: "Adopt",
        description: "We migrate data and train your team.",
      },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "APIs", "Automation"],
  },
];

export const solutionAreas: SolutionArea[] = [
  {
    slug: "nfc-solutions",
    name: "NFC Smart Solutions",
    image: media.nfc.restaurant,
    shortName: "NFC Solutions",
    tagline: "Tap the physical world and connect instantly",
    description:
      "NFC-powered products that let people tap a card, menu or tag with their phone and instantly open a profile, menu, review page or custom experience. Built for restaurants, hotels, companies, real estate, events, retail, education, healthcare and more.",
    icon: Nfc,
    services: nfcSolutions,
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    image: media.ai.chatbot,
    shortName: "AI Solutions",
    tagline: "Practical AI that automates, answers and scales",
    description:
      "Custom AI chatbots, support automation, assistants, business tools and AI integration — engineered around your business and deployed where they add the most value.",
    icon: Bot,
    services: aiSolutions,
  },
  {
    slug: "software",
    name: "Software Services",
    image: media.websites.software,
    shortName: "Software",
    tagline: "Websites, apps and systems built to grow",
    description:
      "Website development, mobile applications, custom software and business automation — modern, reliable software that moves your business forward.",
    icon: MonitorSmartphone,
    services: softwareServices,
  },
];

export function getSolutionArea(slug: string) {
  return solutionAreas.find((area) => area.slug === slug);
}

export function getAllServices() {
  return solutionAreas.flatMap((area) =>
    area.services.map((service) => ({
      ...service,
      areaSlug: area.slug,
      areaName: area.name,
    })),
  );
}

export function getService(areaSlug: string, slug: string) {
  const area = getSolutionArea(areaSlug);
  if (!area) return undefined;
  const service = area.services.find((item) => item.slug === slug);
  if (!service) return undefined;
  return { ...service, areaSlug: area.slug, areaName: area.name };
}
