import type { ComponentType } from "react";
import { BusinessCardsScene } from "@/components/illustrations/nfc/BusinessCardsScene";
import { DigitalProfilesScene } from "@/components/illustrations/nfc/DigitalProfilesScene";
import { SmartMenusScene } from "@/components/illustrations/nfc/SmartMenusScene";
import { GoogleReviewsScene } from "@/components/illustrations/nfc/GoogleReviewsScene";
import { MarketingProductsScene } from "@/components/illustrations/nfc/MarketingProductsScene";
import { SmartTagsScene } from "@/components/illustrations/nfc/SmartTagsScene";
import { CustomSolutionsScene } from "@/components/illustrations/nfc/CustomSolutionsScene";
import { EventSolutionsScene } from "@/components/illustrations/nfc/EventSolutionsScene";
import { HotelSolutionsScene } from "@/components/illustrations/nfc/HotelSolutionsScene";
import { RetailSolutionsScene } from "@/components/illustrations/nfc/RetailSolutionsScene";
import { HealthcareSolutionsScene } from "@/components/illustrations/nfc/HealthcareSolutionsScene";
import { EducationSolutionsScene } from "@/components/illustrations/nfc/EducationSolutionsScene";
import { ChatbotsScene } from "@/components/illustrations/services/ChatbotsScene";
import { SupportAutomationScene } from "@/components/illustrations/services/SupportAutomationScene";
import { AssistantsScene } from "@/components/illustrations/services/AssistantsScene";
import { BusinessAiToolsScene } from "@/components/illustrations/services/BusinessAiToolsScene";
import { AiIntegrationScene } from "@/components/illustrations/services/AiIntegrationScene";
import { WebsiteDevelopmentScene } from "@/components/illustrations/services/WebsiteDevelopmentScene";
import { MobileApplicationsScene } from "@/components/illustrations/services/MobileApplicationsScene";
import { CustomSoftwareScene } from "@/components/illustrations/services/CustomSoftwareScene";
import { BusinessAutomationScene } from "@/components/illustrations/services/BusinessAutomationScene";
import { DashboardsScene } from "@/components/illustrations/services/DashboardsScene";
import { AdminPanelsScene } from "@/components/illustrations/services/AdminPanelsScene";
import { CrmSystemsScene } from "@/components/illustrations/services/CrmSystemsScene";
import { AiAreaScene } from "@/components/illustrations/areas/AiAreaScene";
import { SoftwareAreaScene } from "@/components/illustrations/areas/SoftwareAreaScene";
import { NfcCardIllustration } from "@/components/illustrations/NfcCardIllustration";
import { FallbackScene } from "@/components/illustrations/FallbackScene";

type SceneComponent = ComponentType<{ className?: string; variant?: "concept" | "detail" }>;

const serviceScenes: Record<string, SceneComponent> = {
  "nfc-business-cards": BusinessCardsScene,
  "nfc-digital-profiles": DigitalProfilesScene,
  "nfc-smart-menus": SmartMenusScene,
  "nfc-google-reviews": GoogleReviewsScene,
  "nfc-marketing-products": MarketingProductsScene,
  "nfc-smart-tags": SmartTagsScene,
  "custom-nfc-solutions": CustomSolutionsScene,
  "nfc-event-solutions": EventSolutionsScene,
  "nfc-hotel-solutions": HotelSolutionsScene,
  "nfc-retail-solutions": RetailSolutionsScene,
  "nfc-healthcare-solutions": HealthcareSolutionsScene,
  "nfc-education-solutions": EducationSolutionsScene,
  "ai-chatbots": ChatbotsScene,
  "customer-support-automation": SupportAutomationScene,
  "ai-assistants": AssistantsScene,
  "business-ai-tools": BusinessAiToolsScene,
  "ai-integration": AiIntegrationScene,
  "website-development": WebsiteDevelopmentScene,
  "mobile-applications": MobileApplicationsScene,
  "custom-software": CustomSoftwareScene,
  "business-automation": BusinessAutomationScene,
  dashboards: DashboardsScene,
  "admin-panels": AdminPanelsScene,
  "crm-systems": CrmSystemsScene,
};

const areaScenes: Record<string, SceneComponent> = {
  "nfc-solutions": NfcCardIllustration,
  "ai-solutions": AiAreaScene,
  software: SoftwareAreaScene,
};

const projectScenes: Record<string, SceneComponent> = {
  "nfc-business-card-concept": BusinessCardsScene,
  "ai-support-assistant-demo": ChatbotsScene,
  "booking-website-concept": WebsiteDevelopmentScene,
  "customer-app-concept": MobileApplicationsScene,
  "nfc-smart-menu-demo": SmartMenusScene,
  "automation-workflow-demo": BusinessAutomationScene,
};

interface SceneBySlugProps {
  slug: string;
  className?: string;
  variant?: "concept" | "detail";
}

export function ServiceScene({ slug, className, variant = "concept" }: SceneBySlugProps) {
  const SceneComponent = serviceScenes[slug] ?? FallbackScene;
  return <SceneComponent className={className} variant={variant} />;
}

export function AreaScene({ slug, className }: SceneBySlugProps) {
  const SceneComponent = areaScenes[slug] ?? FallbackScene;
  return <SceneComponent className={className} />;
}

export function ProjectScene({ slug, className }: SceneBySlugProps) {
  const SceneComponent = projectScenes[slug] ?? FallbackScene;
  return <SceneComponent className={className} />;
}
