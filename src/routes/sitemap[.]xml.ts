import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          { path: "/fr", changefreq: "daily", priority: "1.0" },
          { path: "/de", changefreq: "daily", priority: "1.0" },
          { path: "/es", changefreq: "daily", priority: "1.0" },
          { path: "/pt", changefreq: "daily", priority: "1.0" },
          { path: "/jp", changefreq: "daily", priority: "1.0" },
          { path: "/ru", changefreq: "daily", priority: "1.0" },
          { path: "/cn", changefreq: "daily", priority: "1.0" },
          { path: "/ar", changefreq: "daily", priority: "1.0" },
          { path: "/shop", changefreq: "daily", priority: "0.9" },
          { path: "/product/office-2019-professional-plus", changefreq: "weekly", priority: "0.8" },
          { path: "/product/windows-11-professional-key-1-pc", changefreq: "weekly", priority: "0.8" },
          { path: "/product/office-2021-professional-plus", changefreq: "weekly", priority: "0.8" },
          { path: "/product/office-2024-professional-plus-ltsc-key-1-pc", changefreq: "weekly", priority: "0.8" },
          { path: "/product/office-365-professional-plus-5-devices-100gb-1-year-key", changefreq: "weekly", priority: "0.8" },
          { path: "/product/microsoft-365-family-6-users-6-tb-1-year-key", changefreq: "weekly", priority: "0.8" },
          { path: "/product/office-2019-home-business-for-mac-1-mac-key", changefreq: "weekly", priority: "0.8" },
          { path: "/product/office-2021-home-business-for-mac-1-mac-key", changefreq: "weekly", priority: "0.8" },
          { path: "/product/office-2024-home-business-for-mac-1-mac-key", changefreq: "weekly", priority: "0.8" },
          { path: "/product/project-professional-2024-key-1-pc", changefreq: "weekly", priority: "0.8" },
          { path: "/product/visio-professional-2024-key-1-pc", changefreq: "weekly", priority: "0.8" },
          { path: "/product/eset-smart-security-premium-1-device-1-year-key", changefreq: "weekly", priority: "0.8" },
          { path: "/product/outlook-2024-product-key-1-pc", changefreq: "weekly", priority: "0.8" },
          { path: "/product/excel-2024-product-key-1-pc", changefreq: "weekly", priority: "0.8" },
          { path: "/product/powerpoint-2024-product-key-1-pc", changefreq: "weekly", priority: "0.8" },
          { path: "/product/access-2024-product-key-1-pc", changefreq: "weekly", priority: "0.8" },
          { path: "/blog/how-to-find-microsoft-office-product-key", changefreq: "monthly", priority: "0.7" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
