import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllServices, solutionAreas } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    ...solutionAreas.map((area) => `/${area.slug}`),
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = getAllServices().map((service) => ({
    url: `${site.url}/${service.areaSlug}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceRoutes];
}
