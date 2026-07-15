import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { AREAS } from "@/content/areas";
import { EQUIPE } from "@/content/equipe";
import { VISIBLE_POSTS } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/sobre`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/atuacao`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/equipe`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/contato`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/politica-de-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/termos-de-uso`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const areaRoutes: MetadataRoute.Sitemap = AREAS.map((a) => ({
    url: `${SITE.url}/atuacao/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: a.flagship ? 0.9 : 0.75,
  }));

  const equipeRoutes: MetadataRoute.Sitemap = EQUIPE.map((m) => ({
    url: `${SITE.url}/equipe/${m.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = VISIBLE_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...areaRoutes, ...equipeRoutes, ...blogRoutes];
}
