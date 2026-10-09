import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fluxa.ba";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#software-ecosystem`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#studio-taf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#tenant-portal`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#philosophy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
