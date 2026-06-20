// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const ROUTES = [
  "/", "/fr", "/de", "/es", "/pt", "/it", "/jp", "/ru", "/cn", "/ar",
  "/shop",
  "/support", "/help-center", "/activation-guide", "/licenses",
  "/privacy-policy", "/terms-of-service", "/refund-policy", "/cookie-policy",
  "/blog/how-to-find-microsoft-office-product-key",
  "/product/office-2019-professional-plus",
  "/product/office-2021-professional-plus",
  "/product/office-2024-professional-plus-ltsc-key-1-pc",
  "/product/windows-11-professional-key-1-pc",
  "/product/office-365-professional-plus-5-devices-100gb-1-year-key",
  "/product/microsoft-365-family-6-users-6-tb-1-year-key",
  "/product/office-2019-home-business-for-mac-1-mac-key",
  "/product/office-2021-home-business-for-mac-1-mac-key",
  "/product/office-2024-home-business-for-mac-1-mac-key",
  "/product/project-professional-2024-key-1-pc",
  "/product/visio-professional-2024-key-1-pc",
  "/product/eset-smart-security-premium-1-device-1-year-key",
  "/product/outlook-2024-product-key-1-pc",
  "/product/excel-2024-product-key-1-pc",
  "/product/powerpoint-2024-product-key-1-pc",
  "/product/access-2024-product-key-1-pc",
  "/sitemap.xml",
  "/robots.txt",
];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static Site Generation (SSG): prerender every route at `npm run build`
    // so search engines get fully-rendered HTML for every URL.
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 2,
    },
    pages: ROUTES.map((path) => ({ path, prerender: { enabled: true, crawlLinks: true } })),
  },
});
