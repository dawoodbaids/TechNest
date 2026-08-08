export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export const contact = {
  phone: "+1 (000) 000-0000",
  phoneRaw: "+10000000000",
  whatsapp: "+1 (000) 000-0000",
  whatsappRaw: "10000000000",
  email: "hello@technest.example",
  emailRaw: "hello@technest.example",
  responseTime: "We usually reply within 2 hours during business hours.",
} as const;

export const socials: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@technet",
    href: "https://instagram.com/",
  },
  {
    label: "Facebook",
    handle: "@technet",
    href: "https://facebook.com/",
  },
  
  
 
];

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? `Hi ${"TechNest"}, I'd like to talk about a project.`,
  );
  return `https://wa.me/${contact.whatsappRaw}?text=${text}`;
}

export function telLink(phone: string = contact.phoneRaw) {
  return `tel:${phone}`;
}

export function mailtoLink(email: string = contact.emailRaw) {
  return `mailto:${email}`;
}
