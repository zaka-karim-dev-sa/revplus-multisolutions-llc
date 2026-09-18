import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://revplusmultisolutionsllc.com";
  return ["", "/about", "/bpo-services", "/it-solutions", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
