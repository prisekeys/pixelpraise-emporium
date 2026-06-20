import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Star,
  ShieldCheck,
  Zap,
  Mail,
  Download,
  RefreshCcw,
  Headphones,
  Lock,
  BadgeCheck,
  Check,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productImg from "@/assets/products/access-2024.webp.asset.json";
import trustBanner from "@/assets/trust-payment-banner.svg.asset.json";

const PAGE_TITLE = "Buy Access 2024 Product Key – 1 PC | KeyGG";
const PAGE_DESC =
  "Buy a genuine Microsoft Access 2024 product key for 1 PC. Lifetime license, quick email delivery. Build powerful databases, forms & reports. Only $18.";
const PAGE_URL = "/product/access-2024-product-key-1-pc";
const WHOP_URL = "https://whop.com/checkout/plan_RY3qEBO6CBQrM";

const openCheckout = (e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  if (typeof window !== "undefined") {
    window.open(WHOP_URL, "keygg-checkout", "width=560,height=720,top=40,left=40,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no");
  }
};

export const Route = createFileRoute("/product/access-2024-product-key-1-pc")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy access 2024 product key, microsoft access 2024 license key 1 pc, cheap access 2024 key online, access 2024 activation key, buy access 2024 cheap, access 2024 for windows key, access 2024 database lifetime, access 2024 digital download key, microsoft access 2024 standalone, ms access 2024 license, access 2024 pc license genuine, access 2024 instant delivery, microsoft office access 2024 key",
      },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "product" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: productImg.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: productImg.url },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              name: "Access 2024 Product Key – 1 PC Lifetime License",
              image: productImg.url,
              description:
                "Genuine Microsoft Access 2024 product key for 1 PC. Lifetime activation, quick email delivery. Build relational databases, custom forms, queries and reports.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-ACCESS-2024-1PC",
              offers: {
                "@type": "Offer",
                price: "18",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: PAGE_URL,
                priceValidUntil: "2026-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1450",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Robert M." },
                  datePublished: "2026-06-12",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Access 2024 key delivered in minutes. Activated instantly on Windows 11. Perfect for my small business inventory database.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Linda P." },
                  datePublished: "2026-06-05",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Great value. Way cheaper than buying the full Office suite when I only needed Access. Works flawlessly with my existing .accdb files.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Marcus T." },
                  datePublished: "2026-05-19",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Genuine key, fast delivery. The new query designer and report tools in Access 2024 are a big improvement.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Office 2024", item: "/" },
                { "@type": "ListItem", position: 4, name: "Access 2024 Product Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Access 2024 product key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Microsoft Access 2024 product key for 1 PC right here on KeyGG for $18, with quick email delivery and lifetime activation." } },
                { "@type": "Question", name: "Is the Access 2024 license lifetime?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a one-time purchase that gives you lifetime activation of Access 2024 for 1 PC. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my Access 2024 product key?", acceptedAnswer: { "@type": "Answer", text: "Your Access 2024 product key is delivered automatically to your email fast after a successful payment." } },
                { "@type": "Question", name: "Is the Access 2024 key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers." } },
                { "@type": "Question", name: "What can I do with Microsoft Access 2024?", acceptedAnswer: { "@type": "Answer", text: "Access 2024 lets you build relational databases, custom data-entry forms, advanced queries, professional reports, and complete database-driven apps without writing code." } },
                { "@type": "Question", name: "Can I use Access 2024 without the rest of Office?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a standalone Access 2024 license that installs and runs independently. You do not need Word, Excel, or any other Office app installed." } },
                { "@type": "Question", name: "Is Access 2024 compatible with older .accdb and .mdb files?", acceptedAnswer: { "@type": "Answer", text: "Yes. Access 2024 opens and edits databases created in older Access versions, including .accdb and legacy .mdb files." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ProductPage,
});

const trust = [
  { icon: Zap, label: "Quick email delivery" },
  { icon: BadgeCheck, label: "Genuine Microsoft key" },
  { icon: Lock, label: "Secure SSL checkout" },
  { icon: RefreshCcw, label: "30-day money back" },
  { icon: Headphones, label: "24/7 customer support" },
  { icon: ShieldCheck, label: "Lifetime activation" },
];

const faqs = [
  {
    q: "Where can I buy a cheap Access 2024 product key?",
    a: "You can buy a genuine Microsoft Access 2024 product key for 1 PC right here on KeyGG for $18, with quick email delivery and lifetime activation.",
  },
  {
    q: "Is the Access 2024 license lifetime?",
    a: "Yes. This is a one-time purchase that gives you lifetime activation of Access 2024 for 1 PC. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my Access 2024 product key?",
    a: "Your Access 2024 product key is delivered automatically to your email fast after a successful payment.",
  },
  {
    q: "Is the Access 2024 key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "What can I do with Microsoft Access 2024?",
    a: "Access 2024 lets you build relational databases, custom data-entry forms, advanced queries, professional reports, and complete database-driven apps without writing code.",
  },
  {
    q: "Can I use Access 2024 without the rest of Office?",
    a: "Yes. This is a standalone Access 2024 license that installs and runs independently. You do not need Word, Excel, or any other Office app installed.",
  },
  {
    q: "Is Access 2024 compatible with older .accdb and .mdb files?",
    a: "Yes. Access 2024 opens and edits databases created in older Access versions, including .accdb and legacy .mdb files.",
  },
];

function ProductPage() {
  const price = 18;
  const original = 65;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 sm:pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link to="/" className="hover:text-foreground transition">Office 2024</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">Access 2024 Product Key</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start">

          {/* Image */}
          <div>
          <div className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden">
            <img
              src={productImg.url}
              alt="Buy Microsoft Access 2024 product key lifetime license for 1 PC"
              className="w-full h-full object-contain p-4 sm:p-8"
              loading="eager"
            />
          </div>
          <img
            src={trustBanner.url}
            alt="Secure payment methods accepted"
            className="mt-4 w-full h-auto"
            loading="lazy"
          />
          </div>

          {/* Details */}
          <div id="buy">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Microsoft Access 2024 · Lifetime License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Access 2024 Product Key – 1 PC
            </h1>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-3 group underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition"
            >
              <div className="flex items-center gap-0.5" aria-label="Rated 4.8 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 text-yellow-400 ${i === 4 ? "fill-yellow-400/80" : "fill-yellow-400"}`}
                    strokeWidth={2}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">· 1,450+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Microsoft Access 2024 product key for 1 PC.
              One-time payment, lifetime activation, quick email delivery.
              Build powerful relational databases, custom forms, queries
              and reports — no coding required. Perfect for small businesses,
              analysts, developers and power users.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license. One-time payment, no subscription",
                "Build relational databases, forms, queries & reports",
                "Standalone Access 2024 — no other Office apps required",
                "Opens .accdb and legacy .mdb databases",
                "Genuine key. Activates on Microsoft's official servers",
                "Delivered to your email fast",
              ].map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Price card */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-end flex-wrap gap-x-3 gap-y-2">
                <span className="font-display font-bold text-3xl sm:text-4xl">${price}</span>
                <span className="text-base sm:text-lg text-muted-foreground line-through mb-0.5 sm:mb-1">${original}</span>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={openCheckout}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-primary-foreground transition hover:opacity-90 cursor-pointer"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
                >
                  <Download className="w-4 h-4" /> Buy now
                </button>
              </div>

              <div className="mt-5 pt-5 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-3 text-xs">
                {trust.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary shrink-0" /> {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="w-3.5 h-3.5" />
              Access 2024 product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Microsoft Access 2024 is the latest standalone version of Microsoft's powerful desktop
            database management system. Designed for small businesses, analysts, developers and power
            users, Access 2024 lets you create relational databases, design custom forms, run advanced
            queries and generate professional reports — all without writing a single line of code.
          </p>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Product Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Product Type:</strong> Digital License Key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Delivery:</strong> Send via chat (from 5 minutes to a maximum of 6 hours)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Platform:</strong> Windows 10 / Windows 11</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Devices:</strong> 1 PC</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Language:</strong> Multilingual</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Activation:</strong> Online activation</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Relational Databases</strong> — Build robust, multi-table relational databases with referential integrity</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Custom Forms</strong> — Design data-entry forms with drag-and-drop controls, no coding required</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Advanced Queries</strong> — Build powerful SQL and visual queries to filter, join and analyze data</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Professional Reports</strong> — Generate print-ready reports with grouping, sorting and totals</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Macros & VBA</strong> — Automate workflows with built-in macros or full Visual Basic for Applications</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Data Import & Export</strong> — Connect to Excel, SharePoint, SQL Server, ODBC and text files</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Templates</strong> — Get started fast with ready-made database templates for common business needs</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Backward Compatibility</strong> — Opens and edits .accdb and legacy .mdb files from older versions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original 25-character Access 2024 license key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for Access 2024</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step activation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>OS:</strong> Windows 10 or Windows 11</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Processor:</strong> 1.6 GHz or faster, 2-core</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>RAM:</strong> 4 GB minimum (8 GB recommended)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Storage:</strong> 4 GB available disk space</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Display:</strong> 1280 × 768 resolution</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Internet:</strong> Required for activation and updates</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Activation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Download Access 2024</strong><br />Use the official Microsoft download link included in your email.</p>
            <p><strong>Step 2: Install Access 2024</strong><br />Run the installer and follow the on-screen prompts to complete installation.</p>
            <p><strong>Step 3: Enter your product key</strong><br />Open Access and paste the 25-character license key when prompted. Click "Activate" and your Access 2024 will be activated for life.</p>
          </div>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-2">Need help?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our support team is available 24/7 to assist you with installation and activation.
            Contact us anytime via email or live chat.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight mb-6">
          Access 2024 frequently asked questions
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 sm:p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-display font-bold text-base mb-2">{f.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
        <div
          className="rounded-3xl p-6 sm:p-10 md:p-14 text-center text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Buy Access 2024 key for just ${price}
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/85 max-w-xl mx-auto">
            Genuine Microsoft product key. Lifetime activation for 1 PC. Delivered to your inbox in minutes.
          </p>
          <button
            type="button"
            onClick={openCheckout}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-background text-foreground hover:opacity-90 transition cursor-pointer"
          >
            <Download className="w-4 h-4" /> Buy now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
