import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Monitor,
  Mail,
  RefreshCcw,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Headphones,
} from "lucide-react";
import logo from "@/assets/keygg-logo-v2.png.asset.json";

export const Route = createFileRoute("/blog/how-to-find-microsoft-office-product-key")({
  head: () => ({
    meta: [
      { title: "How to Find Your Microsoft Office Product Key (2019 & 2021) | KeyGG" },
      {
        name: "description",
        content:
          "Lost your Microsoft Office product key? Learn 5 proven methods to recover Office 2019 & 2021 keys — from Microsoft account to registry. If it's gone forever, get a new lifetime license from KeyGG instantly.",
      },
      {
        name: "keywords",
        content:
          "how to find microsoft office product key, recover office 2019 product key, find office 2021 license key, lost office product key, microsoft office key recovery, office registry key, office key in microsoft account",
      },
      { name: "author", content: "KeyGG" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "How to Find Your Microsoft Office Product Key (2019 & 2021)" },
      {
        property: "og:description",
        content:
          "Recover lost Office 2019 & 2021 product keys with 5 proven methods — or grab a new lifetime license from KeyGG.",
      },

      { property: "og:type", content: "article" },
      { property: "og:url", content: "/blog/how-to-find-microsoft-office-product-key" },
      { property: "og:site_name", content: "KeyGG" },
      { property: "og:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "KeyGG — Genuine Software Product Keys" },
      { name: "twitter:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "How to Find Your Microsoft Office Product Key (2019 & 2021)" },
      {
        name: "twitter:description",
        content:
          "Lost your Office key? Follow our step-by-step guide to recover Office 2019 & 2021 product keys.",
      },
    ],
    links: [{ rel: "canonical", href: "/blog/how-to-find-microsoft-office-product-key" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: "How to Find Your Microsoft Office Product Key (2019 & 2021)",
              description:
                "A comprehensive guide on recovering lost Microsoft Office product keys for versions 2019 and 2021, plus what to do when recovery fails.",
              author: { "@type": "Organization", name: "KeyGG", url: "https://keygg.com" },
              publisher: { "@type": "Organization", name: "KeyGG", url: "https://keygg.com" },
              datePublished: "2026-06-16",
              dateModified: "2026-06-16",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "/blog/how-to-find-microsoft-office-product-key",
              },
              image: {
                "@type": "ImageObject",
                url: "https://keygg.com/assets/og-blog-office-key.jpg",
                width: 1200,
                height: 630,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "How to Find Your Microsoft Office Product Key",
                  item: "/blog/how-to-find-microsoft-office-product-key",
                },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can I find my Office product key in my Microsoft account?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. If you purchased Office from Microsoft.com, sign in to account.microsoft.com > Services & subscriptions. Your product key or digital license will be listed next to your Office purchase.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it safe to use registry editors to find my Office key?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Viewing the registry is safe, but editing it can break Windows. Use only reputable key-recovery software from trusted vendors, and always create a system restore point before making changes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What if I permanently lost my Office product key?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If all recovery methods fail, the simplest and most cost-effective solution is to buy a new lifetime license from KeyGG. You'll receive a genuine Microsoft product key by email within minutes, with full activation support.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: BlogPage,
});

const recoveryMethods = [
  {
    id: "microsoft-account",
    icon: Monitor,
    title: "Check Your Microsoft Account",
    subtitle: "The fastest way for online purchases",
    steps: [
      "Go to account.microsoft.com and sign in with the email you used to buy Office.",
      "Click Services & subscriptions in the top navigation.",
      "Locate your Office 2019 or Office 2021 purchase.",
      "Click the product to reveal the product key, or confirm it's a digital license tied to your account.",
    ],
    tip: "If you see 'Digital license' instead of a key, Office is already linked to your account — just sign in during installation to activate automatically.",
  },
  {
    id: "email-receipt",
    icon: Mail,
    title: "Search Your Email for the Receipt",
    subtitle: "Retail and third-party purchases",
    steps: [
      "Open your email inbox and search for 'Microsoft Office product key', 'Office 2019', or 'Office 2021'.",
      "Check the inbox, spam, and promotions folders — confirmation emails often end up there.",
      "Look for emails from Microsoft, Amazon, Best Buy, or the third-party store you purchased from.",
      "The product key is usually in the body of the confirmation email or as a downloadable PDF attachment.",
    ],
    tip: "If you bought from KeyGG, your product key was emailed instantly after purchase. Search for 'KeyGG' in your inbox.",
  },
  {
    id: "command-prompt",
    icon: Search,
    title: "Use Command Prompt (Windows Only)",
    subtitle: "Extract the key from your installed copy",
    steps: [
      "Open Command Prompt as Administrator (search 'cmd', right-click, choose Run as administrator).",
      "Type the following command and press Enter:",
      "cscript \"C:\\Program Files\\Microsoft Office\\Office16\\ospp.vbs\" /dstatus",
      "For 64-bit Office on 32-bit Windows, use: C:\\Program Files (x86) instead.",
      "Look for the 'Last 5 characters of installed product key' line in the output.",
    ],
    tip: "This only shows the last 5 digits for security. If you need the full key, use a reputable key-recovery tool.",
  },
  {
    id: "registry-recovery",
    icon: RefreshCcw,
    title: "Registry & Key-Recovery Software",
    subtitle: "For advanced users — full key extraction",
    steps: [
      "Download a trusted product-key recovery tool such as ProduKey by NirSoft or Magical Jelly Bean KeyFinder.",
      "Run the software — it scans the Windows registry for embedded product keys automatically.",
      "Look for 'Microsoft Office 2019' or 'Microsoft Office 2021' in the results list.",
      "Copy the full 25-character product key (formatted as XXXXX-XXXXX-XXXXX-XXXXX-XXXXX).",
    ],
    warning:
      "Only download recovery tools from the official developer's website. Avoid random download sites to prevent malware.",
  },
  {
    id: "physical-packaging",
    icon: CheckCircle2,
    title: "Check Physical Packaging or Documents",
    subtitle: "For retail box or pre-installed copies",
    steps: [
      "Look for a sticker on the DVD case, retail box, or card inside the packaging.",
      "If Office came pre-installed on your laptop, check for a Certificate of Authenticity (COA) sticker on the device.",
      "For workplace or school copies, contact your IT administrator — they may have a volume license record.",
      "If you bought a refurbished PC, the key may be on a recovery partition or included documentation.",
    ],
    tip: "Volume license keys (used by businesses) cannot be transferred to personal devices. You'll need a separate retail license.",
  },
];

const faqs = [
  {
    q: "Can I find my Office product key in my Microsoft account?",
    a: "Yes. If you purchased Office from Microsoft.com, sign in to account.microsoft.com → Services & subscriptions. Your product key or digital license will be listed next to your Office purchase.",
  },
  {
    q: "Is it safe to use registry editors to find my Office key?",
    a: "Viewing the registry is safe, but editing it can break Windows. Use only reputable key-recovery software from trusted vendors, and always create a system restore point before making changes.",
  },
  {
    q: "What if I permanently lost my Office product key?",
    a: "If all recovery methods fail, the simplest and most cost-effective solution is to buy a new lifetime license from KeyGG. You'll receive a genuine Microsoft product key by email within minutes, with full activation support.",
  },
  {
    q: "Can I reinstall Office without the product key?",
    a: "Only if it's a digital-license purchase tied to your Microsoft account. Sign in during installation and Office will activate automatically. For retail keys, you must enter the 25-character product key.",
  },
  {
    q: "Does Office 2019 use the same key as Office 2021?",
    a: "No. Each Office version uses a unique product key. An Office 2019 key will not activate Office 2021 and vice versa. Make sure you purchase the version that matches your needs.",
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <h1 className="sr-only">
        How to Find Your Microsoft Office Product Key for Office 2019 and Office 2021 — Complete Recovery Guide
      </h1>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-secondary/30 border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-4 md:px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-3">
          <Link to="/" className="flex items-center gap-2.5 justify-start md:pl-2">
            <img src={logo.url} alt="KeyGG" className="h-8 md:h-10 w-auto" />
          </Link>
          <div className="hidden md:flex justify-center w-full max-w-md mx-auto" />
          <button
            aria-label="Support"
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-primary-foreground transition hover:opacity-90 inline-flex items-center gap-1.5 justify-self-end shrink-0"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Headphones className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />{" "}
            <span className="hidden sm:inline">Support</span>
          </button>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-3xl px-6 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground font-medium">Blog</span>
          <span aria-hidden="true">/</span>
          <span className="text-foreground font-medium line-clamp-1">How to Find Your Microsoft Office Product Key</span>
        </nav>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 py-10">
        {/* Header */}
        <header className="mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Product Key Recovery
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter leading-tight text-foreground">
            How to Find Your Microsoft Office Product Key
          </h2>
          <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
            Lost your Office 2019 or Office 2021 product key? Don't panic. Follow these 5 proven recovery methods — and learn
            what to do when the key is gone for good.
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <span>By KeyGG</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-06-16">June 16, 2026</time>
            <span aria-hidden="true">·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* Intro */}
        <section className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground leading-relaxed">
            Whether you're reinstalling Windows, switching to a new PC, or simply misplaced your paperwork, losing your{" "}
            <strong className="text-foreground">Microsoft Office product key</strong> is frustrating. Without it, you can't
            reinstall or reactivate Office 2019 or Office 2021.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            The good news: most product keys can be recovered with a few simple steps. This guide walks you through every
            recovery method — from checking your Microsoft account to using specialized software — in order of speed and
            reliability.
          </p>
        </section>

        {/* Recovery Methods */}
        {recoveryMethods.map((method, idx) => (
          <section key={method.id} id={method.id} className="mb-12 scroll-mt-24">
            <div className="flex items-start gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                <method.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  Method {idx + 1}
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground">{method.subtitle}</p>
              </div>
            </div>

            <ol className="mt-5 space-y-3 list-decimal list-inside marker:text-primary marker:font-semibold">
              {method.steps.map((step, sIdx) => (
                <li key={sIdx} className="pl-2 text-muted-foreground leading-relaxed">
                  {step.startsWith("cscript") || step.startsWith("C:\\") ? (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground block mt-1 overflow-x-auto">
                      {step}
                    </code>
                  ) : (
                    step
                  )}
                </li>
              ))}
            </ol>

            {method.tip && (
              <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-foreground">
                  <strong className="text-primary">Pro tip:</strong>{" "}
                  {method.tip}
                </p>
              </div>
            )}

            {method.warning && (
              <div className="mt-4 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">
                  <strong>Warning:</strong> {method.warning}
                </p>
              </div>
            )}
          </section>
        ))}

        {/* CTA Section */}
        <section className="my-14 p-6 md:p-8 rounded-2xl border border-border bg-card">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
              style={{ background: "var(--gradient-primary)" }}
            >
              <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl tracking-tight text-foreground">
                Can't Recover Your Key? Get a New Lifetime License from KeyGG
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                If your Office product key is permanently lost, stolen, or simply doesn't exist (pre-installed trial
                copies), buying a new license is the fastest way back to work. KeyGG sells genuine Microsoft Office keys
                at a fraction of retail price — with instant email delivery and lifetime activation.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Genuine Microsoft product keys — activates directly with Microsoft",
                  "Instant digital delivery to your email (under 5 minutes)",
                  "Lifetime license — one payment, forever yours",
                  "24/7 support if you need help with installation or activation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
                >
                  Browse Office Keys <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/product/office-2019-professional-plus"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-border hover:bg-secondary transition"
                >
                  Office 2019 Pro Plus — $13
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h3 className="font-display font-bold text-2xl tracking-tight text-foreground mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-border bg-card open:ring-1 open:ring-primary/20 transition"
              >
                <summary className="flex items-center justify-between gap-3 p-4 cursor-pointer list-none select-none">
                  <span className="font-medium text-foreground text-sm md:text-base">{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-secondary grid place-items-center shrink-0 group-open:bg-primary/10 transition">
                    <svg
                      className="w-4 h-4 text-muted-foreground group-open:text-primary transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom links */}
        <footer className="pt-8 border-t border-border/60">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Related:</span>
            <Link
              to="/product/office-2019-professional-plus"
              className="text-sm text-primary hover:underline"
            >
              Office 2019 Professional Plus
            </Link>
            <Link to="/" className="text-sm text-primary hover:underline">
              Office 2021 Professional Plus
            </Link>
            <Link to="/" className="text-sm text-primary hover:underline">
              Windows 11 Pro Key
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Last updated: <time dateTime="2026-06-16">June 16, 2026</time>. This guide covers Microsoft Office 2019 and
            Office 2021. For other versions, some steps may vary slightly.
          </p>
        </footer>
      </article>
    </div>
  );
}
