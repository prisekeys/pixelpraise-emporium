import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, Search, ArrowRight } from "lucide-react";

// Lightweight catalog used to suggest a matching product on 404s.
// Keep slug + title only — no images needed for the suggestion list.
const CATALOG: { slug: string; title: string }[] = [
  { slug: "office-2019-professional-plus", title: "Office 2019 Professional Plus" },
  { slug: "office-2021-professional-plus", title: "Office 2021 Professional Plus" },
  { slug: "office-2024-professional-plus-ltsc-key-1-pc", title: "Office 2024 Professional Plus" },
  { slug: "windows-11-professional-key-1-pc", title: "Windows 11 Professional" },
  { slug: "office-365-professional-plus-5-devices-100gb-1-year-key", title: "Office 365 Professional Plus" },
  { slug: "microsoft-365-family-6-users-6-tb-1-year-key", title: "Microsoft 365 Family" },
  { slug: "project-professional-2024-key-1-pc", title: "Project Professional 2024" },
  { slug: "visio-professional-2024-key-1-pc", title: "Visio Professional 2024" },
  { slug: "outlook-2024-product-key-1-pc", title: "Outlook 2024" },
  { slug: "excel-2024-product-key-1-pc", title: "Excel 2024" },
  { slug: "powerpoint-2024-product-key-1-pc", title: "PowerPoint 2024" },
  { slug: "access-2024-product-key-1-pc", title: "Access 2024" },
  { slug: "office-2019-home-business-for-mac-1-mac-key", title: "Office 2019 for Mac" },
  { slug: "office-2021-home-business-for-mac-1-mac-key", title: "Office 2021 for Mac" },
  { slug: "office-2024-home-business-for-mac-1-mac-key", title: "Office 2024 for Mac" },
  { slug: "eset-smart-security-premium-1-device-1-year-key", title: "ESET Smart Security Premium" },
];

const SHOP_KEYWORDS = [
  "shop", "product", "buy", "order", "checkout", "cart", "price", "deal",
  "office", "windows", "microsoft", "365", "outlook", "excel", "powerpoint",
  "access", "project", "visio", "mac", "eset", "key", "license",
];

function scoreMatch(path: string, slug: string, title: string) {
  const haystack = path.toLowerCase();
  const needles = `${slug} ${title}`.toLowerCase().split(/[\s-]+/).filter((w) => w.length > 2);
  let score = 0;
  for (const w of needles) if (haystack.includes(w)) score += w.length;
  return score;
}

export default function NotFoundPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lower = pathname.toLowerCase();

  // Suggest top product matches
  const matches = CATALOG
    .map((p) => ({ ...p, s: scoreMatch(lower, p.slug, p.title) }))
    .filter((p) => p.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 4);

  const looksLikeShop = matches.length > 0 || SHOP_KEYWORDS.some((k) => lower.includes(k));
  const primary = looksLikeShop
    ? { to: "/shop", label: "Browse the shop", icon: ShoppingBag }
    : { to: "/", label: "Go to homepage", icon: Home };
  const secondary = looksLikeShop
    ? { to: "/", label: "Go to homepage", icon: Home }
    : { to: "/shop", label: "Browse the shop", icon: ShoppingBag };

  const PrimaryIcon = primary.icon;
  const SecondaryIcon = secondary.icon;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-16">
      <div className="w-full max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Error 404</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
          We couldn't find{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">{pathname}</code>.
          {looksLikeShop
            ? " It looks like you were searching for a product — try our shop."
            : " The link may be broken or the page may have moved."}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to={primary.to}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <PrimaryIcon className="h-4 w-4" />
            {primary.label}
          </Link>
          <Link
            to={secondary.to}
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            <SecondaryIcon className="h-4 w-4" />
            {secondary.label}
          </Link>
        </div>

        {matches.length > 0 && (
          <div className="mx-auto mt-12 max-w-xl rounded-xl border border-border bg-card p-6 text-left shadow-sm">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Search className="h-4 w-4 text-primary" />
              You might be looking for
            </div>
            <ul className="divide-y divide-border">
              {matches.map((m) => (
                <li key={m.slug}>
                  <a
                    href={`/product/${m.slug}`}
                    className="flex items-center justify-between gap-3 py-3 text-sm text-foreground transition-colors hover:text-primary"
                  >
                    <span>{m.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
