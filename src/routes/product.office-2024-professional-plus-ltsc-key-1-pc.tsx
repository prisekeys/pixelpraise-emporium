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
import productImg from "@/assets/products/Office_2024_Professional_Plus_Key_1_PC.png.asset.json";
import trustBanner from "@/assets/trust-payment-banner.svg.asset.json";

const PAGE_TITLE = "Buy Office 2024 Professional Plus LTSC Key – 1 PC | KeyGG";
const PAGE_DESC =
  "Buy a genuine Microsoft Office 2024 Professional Plus LTSC product key for 1 PC. Lifetime license, quick email delivery, Word, Excel, PowerPoint, Outlook & more. Only $20.";
const PAGE_URL = "/product/office-2024-professional-plus-ltsc-key-1-pc";
const WHOP_URL = "https://whop.com/checkout/plan_FkmvpRpakB5ld";


export const Route = createFileRoute("/product/office-2024-professional-plus-ltsc-key-1-pc")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy office 2024 professional plus ltsc key, office 2024 ltsc key cheap, microsoft office 2024 ltsc license 1 pc, cheap office 2024 ltsc key online, office 2024 professional plus ltsc product key, buy office 2024 ltsc key online instant delivery, office 2024 ltsc activation key, office 2024 professional plus ltsc digital license lifetime, office ltsc 2024 download key, microsoft office 2024 perpetual license, office 2024 pro plus ltsc lifetime, buy office 2024 pro plus ltsc cheap, office 2024 ltsc 1 pc key",
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
              name: "Office 2024 Professional Plus LTSC Key – 1 PC Lifetime License",
              image: productImg.url,
              description:
                "Genuine Microsoft Office 2024 Professional Plus LTSC product key for 1 Windows PC. Lifetime activation, quick email delivery. Word, Excel, PowerPoint, Outlook, Access, Publisher and Teams — the latest perpetual Office suite.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-OFFICE-2024-LTSC-PRO-1PC",
              offers: {
                "@type": "Offer",
                price: "20",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: PAGE_URL,
                priceValidUntil: "2026-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "9300",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "James R." },
                  datePublished: "2026-06-14",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Office 2024 LTSC activated perfectly on my new PC. All apps work smoothly and the price is unbeatable compared to Microsoft direct.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Emily T." },
                  datePublished: "2026-06-01",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Bought the LTSC key for my business. Lifetime license with no subscription hassles. Key arrived in under 5 minutes.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Michael H." },
                  datePublished: "2026-05-20",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Great value for Office 2024. Word and Excel are noticeably faster. Setup was straightforward with the included guide.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Office", item: "/" },
                { "@type": "ListItem", position: 4, name: "Office 2024 Professional Plus LTSC Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Office 2024 Professional Plus LTSC key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Microsoft Office 2024 Professional Plus LTSC product key right here on KeyGG for $20 with quick email delivery and lifetime activation for 1 PC." } },
                { "@type": "Question", name: "Is the Office 2024 LTSC license lifetime?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a one-time purchase that gives you lifetime activation of Office 2024 Professional Plus LTSC for 1 Windows PC. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my Office 2024 LTSC product key?", acceptedAnswer: { "@type": "Answer", text: "Your Office 2024 Professional Plus LTSC key is delivered automatically to your email fast after a successful payment." } },
                { "@type": "Question", name: "Is the Office 2024 LTSC key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers." } },
                { "@type": "Question", name: "What is the difference between Office 2024 LTSC and Microsoft 365?", acceptedAnswer: { "@type": "Answer", text: "Office 2024 LTSC is a perpetual license you pay once and own forever with no cloud features. Microsoft 365 is a subscription with continuous updates and cloud services like OneDrive and Teams online." } },
                { "@type": "Question", name: "Does Office 2024 Professional Plus LTSC work on Windows 10 and Windows 11?", acceptedAnswer: { "@type": "Answer", text: "Yes. Office 2024 Professional Plus LTSC is fully compatible with both Windows 10 and Windows 11 (64-bit)." } },
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
    q: "Where can I buy a cheap Office 2024 Professional Plus LTSC key?",
    a: "You can buy a genuine Microsoft Office 2024 Professional Plus LTSC product key right here on KeyGG for $20, with quick email delivery and lifetime activation for 1 PC.",
  },
  {
    q: "Is the Office 2024 LTSC license lifetime?",
    a: "Yes. This is a one-time purchase that gives you lifetime activation of Office 2024 Professional Plus LTSC for 1 Windows PC. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my Office 2024 LTSC product key?",
    a: "Your Office 2024 Professional Plus LTSC key is delivered automatically to your email fast after a successful payment.",
  },
  {
    q: "Is the Office 2024 LTSC key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "What is the difference between Office 2024 LTSC and Microsoft 365?",
    a: "Office 2024 LTSC is a perpetual license you pay once and own forever with no cloud features. Microsoft 365 is a subscription with continuous updates and cloud services like OneDrive and Teams online.",
  },
  {
    q: "Does Office 2024 Professional Plus LTSC work on Windows 10 and Windows 11?",
    a: "Yes. Office 2024 Professional Plus LTSC is fully compatible with both Windows 10 and Windows 11 (64-bit).",
  },
];

function ProductPage() {
  const price = 20;
  const original = 65;

  const openCheckout = () => {
    if (typeof window !== "undefined") {
      window.open(
        WHOP_URL,
        "keygg-checkout",
        "width=560,height=720,top=40,left=40,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no"
      );
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 sm:pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link to="/" className="hover:text-foreground transition">Office</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">Office 2024 Professional Plus LTSC Key</span>
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
              alt="Buy Microsoft Office 2024 Professional Plus LTSC product key for 1 PC lifetime license"
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
              Microsoft Office · Lifetime License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Office 2024 Professional Plus LTSC Key – 1 PC
            </h1>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-3 group underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition"
            >
              <div className="flex items-center gap-0.5 border-b border-foreground/30 group-hover:border-foreground pb-0.5" aria-label="Rated 4.9 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 text-yellow-400 ${i === 4 ? "fill-yellow-400/80" : "fill-yellow-400"}`}
                    strokeWidth={2}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-muted-foreground">· 70+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Microsoft Office 2024 Professional Plus LTSC product key for 1 Windows PC.
              One-time payment, lifetime activation, quick email delivery. The latest perpetual Office
              suite with Word, Excel, PowerPoint, Outlook, Access, Publisher and Teams.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license. One-time payment, no subscription",
                "Activates on 1 Windows 10 or Windows 11 PC",
                "Word, Excel, PowerPoint, Outlook, Access, Publisher & Teams",
                "Latest LTSC release with improved performance & security",
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
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-primary-foreground cursor-pointer transition hover:opacity-90"
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
              Office 2024 LTSC product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Microsoft Office 2024 Professional Plus LTSC is the latest perpetual release of Office
            for Windows, built for users and businesses who want the newest features without a
            subscription. It includes all premium Office applications with lifetime activation on a
            single PC.
          </p>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Product Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Product Type:</strong> Digital License Key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Delivery:</strong> Send via chat (from 5 minutes to a maximum of 6 hours)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Platform:</strong> Windows PC</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Supported OS:</strong> Windows 10, Windows 11</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Devices:</strong> 1 PC</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Language:</strong> Multilingual</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Activation:</strong> Online activation</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Apps included</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Word 2024</strong> — Create, edit and share professional documents</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Excel 2024</strong> — Advanced spreadsheets, formulas, charts and data analysis</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>PowerPoint 2024</strong> — Stunning presentations with new animations and transitions</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Outlook 2024</strong> — Manage emails, calendars and contacts efficiently</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Access 2024</strong> — Build and manage databases with ease</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Publisher 2024</strong> — Design professional publications and marketing materials</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Teams</strong> — Chat, meetings and collaboration in one app</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Modern interface with improved performance and accessibility</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>New functions and formulas in Excel for advanced data analysis</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Enhanced Presenter Coach and video recording in PowerPoint</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Improved search, translation and co-authoring across all apps</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Secured by default with Microsoft security and compliance standards</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Ideal for professionals, students, businesses and home users</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original 25-character Office 2024 Professional Plus LTSC license key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for Office 2024</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step activation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>OS:</strong> Windows 10 or Windows 11 (64-bit)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Processor:</strong> 1.6 GHz or faster, 2-core</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>RAM:</strong> 4 GB minimum (8 GB recommended)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Storage:</strong> 10 GB available disk space</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Display:</strong> 1280 × 768 resolution</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Internet:</strong> Required for activation and updates</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Activation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Download Office 2024</strong><br />Use the official Microsoft download link included in your email.</p>
            <p><strong>Step 2: Install and open any Office app</strong><br />Launch Word, Excel or any Office app to trigger the activation prompt.</p>
            <p><strong>Step 3: Enter your product key</strong><br />Paste the 25-character license key and click "Activate". Office 2024 Professional Plus LTSC will be activated for life.</p>
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
          Office 2024 Professional Plus LTSC frequently asked questions
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
            Buy Office 2024 Professional Plus LTSC key for just ${price}
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/85 max-w-xl mx-auto">
            Genuine Microsoft product key. Lifetime activation for 1 PC. Delivered to your inbox in minutes.
          </p>
          <button
            type="button"
            onClick={openCheckout}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-background text-foreground cursor-pointer hover:opacity-90 transition"
          >
            <Download className="w-4 h-4" /> Buy now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
