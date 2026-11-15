import type { MetadataRoute } from "next";
import { projects, slug } from "@/lib/content";

const base = "https://koralkulacoglu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    ...projects.map((p) => ({ url: `${base}/projects/${slug(p.name)}`, priority: 0.6 })),
  ];
}
