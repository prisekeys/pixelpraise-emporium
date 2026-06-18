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
import productImg from "@/assets/products/excel-2024.webp.asset.json";

const PAGE_TITLE = "Buy Excel 2024 Product Key – 1 PC | KeyGG";
const PAGE_DESC =
  "Buy a genuine Microsoft Excel 2024 product key for 1 PC. Lifetime license, instant email delivery. Advanced formulas, pivot tables, data analysis & charts. Only $18.";
const PAGE_URL = "/product/excel-2024-product-key-1-pc";

export const Route = createFileRoute("/product/excel-2024-product-key-1-pc")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy excel 2024 product key, excel 2024 license key 1 pc, cheap excel 2024 key online, excel 2024 activation key, buy excel 2024 cheap, excel 2024 for windows key, excel 2024 spreadsheet lifetime, excel 2024 digital download key, microsoft excel 2024 standalone, ms excel 2024 license, excel 2024 pc license genuine, excel 2024 instant delivery, buy microsoft excel 2024 key instant delivery, excel 2024 pivot tables formulas, excel 2024 standalone product key, excel 2024 data analysis",
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
              name: "Excel 2024 Product Key – 1 PC Lifetime License",
              image: productImg.url,
              description:
                "Genuine Microsoft Excel 2024 product key for 1 PC. Lifetime activation, instant email delivery. Powerful spreadsheets with advanced formulas, pivot tables, data analysis tools, dynamic charts, and Power Query.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-EXCEL-2024-1PC",
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
                ratingValue: "4.9",
                reviewCount: "2780",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Daniel K." },
                  datePublished: "2026-06-12",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Excel 2024 key delivered in under 10 minutes. Activated on Windows 11 perfectly. The new XLOOKUP and dynamic arrays are game changers for my accounting work.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Priya M." },
                  datePublished: "2026-06-03",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Best price I found for a genuine Excel 2024 standalone license. Pivot tables, Power Query, and the new charts feel super smooth. Highly recommended.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Thomas B." },
                  datePublished: "2026-05-21",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "I only needed Excel and didn't want a 365 subscription. This standalone key was exactly what I needed — fast delivery and lifetime activation.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Office 2024", item: "/" },
                { "@type": "ListItem", position: 4, name: "Excel 2024 Product Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Excel 2024 product key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Microsoft Excel 2024 product key for 1 PC right here on KeyGG for $18, with instant email delivery and lifetime activation." } },
                { "@type": "Question", name: "Is the Excel 2024 license lifetime?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a one-time purchase that gives you lifetime activation of Excel 2024 for 1 PC. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my Excel 2024 product key?", acceptedAnswer: { "@type": "Answer", text: "Your Excel 2024 product key is delivered automatically to your email within 5–10 minutes of a successful payment." } },
                { "@type": "Question", name: "Is the Excel 2024 key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers." } },
                { "@type": "Question", name: "What is included in Excel 2024?", acceptedAnswer: { "@type": "Answer", text: "Excel 2024 includes advanced formulas, dynamic arrays, XLOOKUP, pivot tables, Power Query, Power Pivot, dynamic charts, data analysis tools, conditional formatting, and macro support with VBA." } },
                { "@type": "Question", name: "Can I use Excel 2024 without other Office apps?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a standalone Excel 2024 license that works independently. You do not need Word, PowerPoint, or any other Office app installed." } },
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
  { icon: Zap, label: "Instant email delivery" },
  { icon: BadgeCheck, label: "Genuine Microsoft key" },
  { icon: Lock, label: "Secure SSL checkout" },
  { icon: RefreshCcw, label: "30-day money back" },
  { icon: Headphones, label: "24/7 customer support" },
  { icon: ShieldCheck, label: "Lifetime activation" },
];

const faqs = [
  {
    q: "Where can I buy a cheap Excel 2024 product key?",
    a: "You can buy a genuine Microsoft Excel 2024 product key for 1 PC right here on KeyGG for $18, with instant email delivery and lifetime activation.",
  },
  {
    q: "Is the Excel 2024 license lifetime?",
    a: "Yes. This is a one-time purchase that gives you lifetime activation of Excel 2024 for 1 PC. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my Excel 2024 product key?",
    a: "Your Excel 2024 product key is delivered automatically to your email within 5–10 minutes of a successful payment.",
  },
  {
    q: "Is the Excel 2024 key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "What is included in Excel 2024?",
    a: "Excel 2024 includes advanced formulas, dynamic arrays, XLOOKUP, pivot tables, Power Query, Power Pivot, dynamic charts, data analysis tools, conditional formatting, and macro support with VBA.",
  },
  {
    q: "Can I use Excel 2024 without other Office apps?",
    a: "Yes. This is a standalone Excel 2024 license that works independently. You do not need Word, PowerPoint, or any other Office app installed.",
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
          <span className="text-foreground font-medium">Excel 2024 Product Key</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start">

          {/* Image */}
          <div className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden">
            <img
              src={productImg.url}
              alt="Buy Microsoft Excel 2024 product key lifetime license for 1 PC"
              className="w-full h-full object-contain p-4 sm:p-8"
              loading="eager"
            />
          </div>

          {/* Details */}
          <div id="buy">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Microsoft Excel 2024 · Lifetime License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Excel 2024 Product Key – 1 PC
            </h1>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-3 group underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition"
            >
              <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    strokeWidth={2}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-muted-foreground">· 2,780+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Microsoft Excel 2024 product key for 1 PC.
              One-time payment, lifetime activation, instant email delivery.
              Work faster with dynamic arrays, XLOOKUP, pivot tables, Power Query
              and the latest data analysis tools — built for accountants,
              analysts, students, and business professionals.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license. One-time payment, no subscription",
                "Powerful spreadsheets & data analysis for 1 PC",
                "Dynamic arrays, XLOOKUP & 500+ advanced formulas",
                "Pivot tables, Power Query & Power Pivot included",
                "Genuine key. Activates on Microsoft's official servers",
                "Delivered to your email within 5–10 minutes",
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
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-primary-foreground transition hover:opacity-90"
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
              Excel 2024 product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Microsoft Excel 2024 is the latest standalone version of the world's most powerful
            spreadsheet application. Designed for accountants, financial analysts, data scientists,
            engineers, and business professionals who need reliable tools for calculations, modeling,
            and data analysis. Excel 2024 introduces faster performance, smarter functions, and
            enhanced visualization for clearer, more impactful results.
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
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Dynamic Arrays & XLOOKUP</strong> — Modern formulas that automatically spill results and replace older VLOOKUP/HLOOKUP patterns</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Pivot Tables & Pivot Charts</strong> — Summarize and explore large datasets in seconds with drag-and-drop pivot analysis</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Power Query</strong> — Connect, clean, and transform data from dozens of sources without code</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Power Pivot & Data Model</strong> — Build advanced data models and DAX measures for business intelligence reports</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Advanced Charts</strong> — Funnel, map, treemap, sunburst, histogram, waterfall and more — fully customizable</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Conditional Formatting & Data Bars</strong> — Highlight trends, outliers and KPIs automatically</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Macros & VBA</strong> — Automate repetitive tasks with full Visual Basic for Applications support</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Co-Authoring & Sharing</strong> — Work with teammates in real time and export to PDF, CSV, or share via OneDrive</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original 25-character Excel 2024 license key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for Excel 2024</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step activation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Operating System: Windows 10 / Windows 11</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Processor: 1.6 GHz or faster, 2-core</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>RAM: 4 GB minimum (8 GB recommended)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Storage: 4 GB available disk space</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Display: 1280 × 768 resolution</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Internet connection required for activation</span></li>
          </ul>
        </div>
      </section>

      {/* Activation Steps */}
      <section className="bg-muted/30 border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
          <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight mb-8 text-center">
            How to activate your Excel 2024 key
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Purchase",
                desc: "Complete your order securely. Your Excel 2024 product key will be emailed to you automatically within minutes.",
              },
              {
                title: "Install",
                desc: "Download Excel 2024 from the official Microsoft link included in your email and run the installer on your PC.",
              },
              {
                title: "Activate",
                desc: "Launch Excel 2024, go to File → Account → Change Product Key, enter your 25-character code and click Activate.",
              },
            ].map((step, i) => (
              <div key={step.title} className="relative p-5 rounded-2xl border border-border bg-card">
                <div className="absolute -top-3 left-5 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
                <h4 className="font-display font-bold text-base mt-3 mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight mb-8">
          Frequently asked questions
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {faqs.map(({ q, a }) => (
            <div key={q} className="p-4 sm:p-5 rounded-2xl border border-border bg-card">
              <h4 className="font-semibold text-sm sm:text-base mb-1">{q}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 border-t border-border/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-14 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4">
            Get your Excel 2024 key today
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
            Unlock powerful spreadsheets, advanced formulas and data analysis. Lifetime license, genuine Microsoft key, instant delivery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="font-display font-bold text-3xl sm:text-4xl">${price}</span>
            <span className="text-base sm:text-lg text-muted-foreground line-through">${original}</span>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
          >
            <Download className="w-4 h-4" /> Buy now
          </button>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            Lifetime activation · 30-day money back · 24/7 support
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
