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
import productImg from "@/assets/products/Office_2021_Home_Business_for_Mac_1_Mac_Key.png.asset.json";
import trustBanner from "@/assets/trust-payment-banner.svg.asset.json";

const PAGE_TITLE = "Buy Office 2021 Home & Business for Mac – Key for 1 Mac | KeyGG";
const PAGE_DESC =
  "Buy a genuine Microsoft Office 2021 Home & Business product key for 1 Mac. Lifetime license, quick email delivery, updated Word, Excel, PowerPoint & Outlook for macOS. Only $38.";
const PAGE_URL = "/product/office-2021-home-business-for-mac-1-mac-key";
const WHOP_URL = "https://whop.com/checkout/plan_Hr9I3rbmMaIij";


export const Route = createFileRoute("/product/office-2021-home-business-for-mac-1-mac-key")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy office 2021 for mac key, office 2021 home business mac key cheap, microsoft office 2021 mac license 1 mac, cheap office 2021 mac key online, office 2021 home business for mac product key, buy office 2021 mac key online instant delivery, office 2021 mac activation key, office 2021 home business mac digital license lifetime, microsoft office for mac download key 2021, office 2021 mac word excel powerpoint outlook, office 2021 home business mac lifetime license, buy office 2021 for mac cheap, office 2021 mac os key",
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
              name: "Office 2021 Home & Business for Mac – Key for 1 Mac Lifetime License",
              image: productImg.url,
              description:
                "Genuine Microsoft Office 2021 Home & Business product key for 1 Mac. Lifetime activation, quick email delivery. Updated Word, Excel, PowerPoint and Outlook with improved collaboration features for macOS.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-OFFICE-2021-HB-MAC-1MAC",
              offers: {
                "@type": "Offer",
                price: "38",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: PAGE_URL,
                priceValidUntil: "2026-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "5600",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Ren T." },
                  datePublished: "2026-06-10",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Got Office 2021 for Mac. Easy install, all apps working perfectly with the latest macOS. Great improvement over 2019.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Laura M." },
                  datePublished: "2026-05-28",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Key arrived instantly and activated without any issues on my M2 MacBook Air. Word and Excel work flawlessly.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Kevin B." },
                  datePublished: "2026-05-15",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Genuine Office 2021 Mac key at a much better price than the Apple Store. Setup was straightforward and co-authoring works great.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Mac", item: "/" },
                { "@type": "ListItem", position: 4, name: "Office 2021 Home & Business for Mac Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Office 2021 for Mac key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Microsoft Office 2021 Home & Business product key for Mac right here on KeyGG for $38 with quick email delivery and lifetime activation for 1 Mac." } },
                { "@type": "Question", name: "Is the Office 2021 for Mac license lifetime?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a one-time purchase that gives you lifetime activation of Office 2021 Home & Business for 1 Mac. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my Office 2021 Mac product key?", acceptedAnswer: { "@type": "Answer", text: "Your Office 2021 Home & Business for Mac key is delivered automatically to your email fast after a successful payment." } },
                { "@type": "Question", name: "Is the Office 2021 Mac key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers." } },
                { "@type": "Question", name: "What apps are included in Office 2021 Home & Business for Mac?", acceptedAnswer: { "@type": "Answer", text: "Office 2021 Home & Business for Mac includes Word, Excel, PowerPoint and Outlook — all updated with improved collaboration and performance for macOS." } },
                { "@type": "Question", name: "Does Office 2021 for Mac work on Intel and Apple Silicon Macs?", acceptedAnswer: { "@type": "Answer", text: "Yes. Office 2021 Home & Business for Mac is natively optimized for Apple Silicon Macs (M1, M2, M3) and also works on Intel-based Macs." } },
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
    q: "Where can I buy a cheap Office 2021 for Mac key?",
    a: "You can buy a genuine Microsoft Office 2021 Home & Business product key for Mac right here on KeyGG for $38, with quick email delivery and lifetime activation for 1 Mac.",
  },
  {
    q: "Is the Office 2021 for Mac license lifetime?",
    a: "Yes. This is a one-time purchase that gives you lifetime activation of Office 2021 Home & Business for 1 Mac. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my Office 2021 Mac product key?",
    a: "Your Office 2021 Home & Business for Mac key is delivered automatically to your email fast after a successful payment.",
  },
  {
    q: "Is the Office 2021 Mac key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "What apps are included in Office 2021 Home & Business for Mac?",
    a: "Office 2021 Home & Business for Mac includes Word, Excel, PowerPoint and Outlook — all updated with improved collaboration and performance for macOS.",
  },
  {
    q: "Does Office 2021 for Mac work on Intel and Apple Silicon Macs?",
    a: "Yes. Office 2021 Home & Business for Mac is natively optimized for Apple Silicon Macs (M1, M2, M3) and also works on Intel-based Macs.",
  },
];

function ProductPage() {
  const price = 38;
  const original = 140;

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
          <Link to="/" className="hover:text-foreground transition">Mac</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">Office 2021 Home & Business for Mac Key</span>
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
              alt="Buy Microsoft Office 2021 Home & Business for Mac product key lifetime license"
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
              Microsoft Office for Mac · Lifetime License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Office 2021 Home & Business for Mac – Key for 1 Mac
            </h1>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-3 group underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition"
            >
              <div className="flex items-center gap-0.5 border-b border-foreground/30 group-hover:border-foreground pb-0.5" aria-label="Rated 4.8 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 text-yellow-400 ${i === 4 ? "fill-yellow-400/80" : "fill-yellow-400"}`}
                    strokeWidth={2}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">· 25+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Microsoft Office 2021 Home & Business product key for 1 Mac.
              One-time payment, lifetime activation, quick email delivery. Includes updated Word, Excel,
              PowerPoint and Outlook — all optimized for macOS with native Apple Silicon support.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license. One-time payment, no subscription",
                "Activates on 1 Mac (Intel or native Apple Silicon)",
                "Updated Word, Excel, PowerPoint & Outlook for macOS",
                "Improved collaboration features & faster performance",
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
              Office 2021 Mac product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Microsoft Office 2021 Home & Business for Mac is the updated productivity suite for Mac
            users who need the essential Office applications without a subscription. It includes
            Word, Excel, PowerPoint and Outlook — all optimized for macOS with native Apple Silicon
            support, Dark Mode, Continuity Camera and improved collaboration features.
          </p>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Product Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Product Type:</strong> Digital License Key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Delivery:</strong> Send via chat (from 5 minutes to a maximum of 6 hours)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Platform:</strong> macOS</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Supported OS:</strong> macOS 10.15 Catalina or later</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Devices:</strong> 1 Mac</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Language:</strong> Multilingual</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Activation:</strong> Online activation</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Apps included</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Word 2021 for Mac</strong> — Create beautiful documents with advanced editing, formatting and co-authoring</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Excel 2021 for Mac</strong> — Powerful spreadsheets, new formulas, charts and data analysis tools</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>PowerPoint 2021 for Mac</strong> — Design stunning presentations with improved animations and transitions</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Outlook 2021 for Mac</strong> — Manage emails, calendars, contacts and tasks with Focused Inbox</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Native Apple Silicon support for M1, M2 and M3 Macs</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>macOS Dark Mode and Touch Bar support</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Continuity Camera to insert photos from iPhone directly into documents</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Full compatibility with Microsoft file formats (.docx, .xlsx, .pptx)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>iCloud and OneDrive integration for seamless file syncing</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Real-time co-authoring to collaborate with Windows and Mac users</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Ideal for students, professionals and home users on Mac</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original 25-character Office 2021 Home & Business for Mac license key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for Office 2021 for Mac</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step activation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>OS:</strong> macOS 10.15 Catalina or later (including macOS Sonoma)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Processor:</strong> Intel or Apple Silicon Mac (M1, M2, M3 natively supported)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>RAM:</strong> 4 GB minimum (8 GB recommended)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Storage:</strong> 10 GB available disk space</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Display:</strong> 1280 × 800 resolution</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Internet:</strong> Required for activation and updates</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Activation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Download Office 2021 for Mac</strong><br />Use the official Microsoft download link included in your email.</p>
            <p><strong>Step 2: Install and open any Office app</strong><br />Launch Word, Excel or any Office app to trigger the activation prompt.</p>
            <p><strong>Step 3: Enter your product key</strong><br />Paste the 25-character license key and click "Activate". Office 2021 Home & Business for Mac will be activated for life.</p>
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
          Office 2021 Home & Business for Mac frequently asked questions
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
            Buy Office 2021 Home & Business for Mac key for just ${price}
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/85 max-w-xl mx-auto">
            Genuine Microsoft product key. Lifetime activation for 1 Mac. Delivered to your inbox in minutes.
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
