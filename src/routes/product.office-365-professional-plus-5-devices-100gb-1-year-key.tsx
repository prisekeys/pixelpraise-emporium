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
import productImg from "@/assets/products/Office_365_Professional_Plus_5_Devices_100GB_Cloud_1_Year.png.asset.json";

const PAGE_TITLE = "Buy Office 365 Professional Plus – 5 Devices | 100GB Cloud | 1 Year | KeyGG";
const PAGE_DESC =
  "Buy a genuine Office 365 Professional Plus 1-year subscription key – 5 devices, 100 GB cloud storage, Word, Excel, PowerPoint, Outlook, Teams & more. Instant email delivery. Only $13.";
const PAGE_URL = "/product/office-365-professional-plus-5-devices-100gb-1-year-key";
const WHOP_URL = "https://whop.com/checkout/plan_GDDIytjYJffS0";


export const Route = createFileRoute("/product/office-365-professional-plus-5-devices-100gb-1-year-key")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy office 365 professional plus key, office 365 pro plus 1 year subscription, office 365 pro plus 5 devices, cheap office 365 professional plus, office 365 professional plus product key online, office 365 pro plus 100gb cloud, office 365 pro plus instant delivery, office 365 business key cheap, office 365 word excel powerpoint outlook teams, microsoft 365 apps for enterprise key, office 365 professional plus activation key, office 365 pro plus license 1 year, office 365 pro plus pc mac mobile",
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
              name: "Office 365 Professional Plus – 5 Devices | 100 GB Cloud Storage | 1-Year Subscription Key",
              image: productImg.url,
              description:
                "Genuine Office 365 Professional Plus 1-year subscription key for 5 devices with 100 GB cloud storage. Includes Word, Excel, PowerPoint, Outlook, Teams, OneNote, Publisher and Access. Instant email delivery.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-OFFICE-365-PROPLUS-5D-1Y",
              offers: {
                "@type": "Offer",
                price: "13",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: PAGE_URL,
                priceValidUntil: "2026-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "11100",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Jamie L." },
                  datePublished: "2026-06-08",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Best deal I've found for Office 365 Pro Plus. Got the key in under 5 minutes and installed on my laptop, desktop and iPad — all working perfectly.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Priya S." },
                  datePublished: "2026-05-22",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "5 devices for $13 with Teams and 100GB cloud — unbeatable. Activation was super smooth via the official Microsoft account portal.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Carlos R." },
                  datePublished: "2026-05-04",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Great value for a full year of Office 365 Pro Plus. All the apps work, mobile included. Support helped me activate within minutes.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Office 365", item: "/" },
                { "@type": "ListItem", position: 4, name: "Office 365 Professional Plus 1-Year Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Office 365 Professional Plus key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Office 365 Professional Plus 1-year subscription key right here on KeyGG for just $13, with instant email delivery and activation for 5 devices including 100 GB of cloud storage." } },
                { "@type": "Question", name: "How many devices can I install Office 365 Pro Plus on?", acceptedAnswer: { "@type": "Answer", text: "Office 365 Professional Plus can be installed on up to 5 devices — any combination of Windows PCs, Macs, tablets and smartphones — all under the same Microsoft account." } },
                { "@type": "Question", name: "How long does the Office 365 Pro Plus subscription last?", acceptedAnswer: { "@type": "Answer", text: "This key activates Office 365 Professional Plus for a full 12 months (1 year) from the date of activation, with all features and updates included." } },
                { "@type": "Question", name: "How fast will I receive my Office 365 Pro Plus key?", acceptedAnswer: { "@type": "Answer", text: "Your Office 365 Professional Plus key is delivered automatically to your email within 5–10 minutes of a successful payment." } },
                { "@type": "Question", name: "What apps and features are included?", acceptedAnswer: { "@type": "Answer", text: "Office 365 Professional Plus includes Word, Excel, PowerPoint, Outlook, OneNote, Publisher, Access, Microsoft Teams and 100 GB of OneDrive cloud storage per user." } },
                { "@type": "Question", name: "Is the Office 365 Professional Plus key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly through Microsoft's official account portal at office.com." } },
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
  { icon: ShieldCheck, label: "Full 1-year activation" },
];

const faqs = [
  {
    q: "Where can I buy a cheap Office 365 Professional Plus key?",
    a: "You can buy a genuine Office 365 Professional Plus 1-year subscription key right here on KeyGG for just $13, with instant email delivery and activation for 5 devices including 100 GB of cloud storage.",
  },
  {
    q: "How many devices can I install Office 365 Pro Plus on?",
    a: "Office 365 Professional Plus can be installed on up to 5 devices — any combination of Windows PCs, Macs, tablets and smartphones — all under the same Microsoft account.",
  },
  {
    q: "How long does the Office 365 Pro Plus subscription last?",
    a: "This key activates Office 365 Professional Plus for a full 12 months (1 year) from the date of activation, with all features and updates included.",
  },
  {
    q: "How fast will I receive my Office 365 Pro Plus key?",
    a: "Your Office 365 Professional Plus key is delivered automatically to your email within 5–10 minutes of a successful payment.",
  },
  {
    q: "What apps and features are included?",
    a: "Office 365 Professional Plus includes Word, Excel, PowerPoint, Outlook, OneNote, Publisher, Access, Microsoft Teams and 100 GB of OneDrive cloud storage per user.",
  },
  {
    q: "Is the Office 365 Professional Plus key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly through Microsoft's official account portal at office.com.",
  },
];

function ProductPage() {
  const price = 13;
  const original = 60;

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
          <Link to="/" className="hover:text-foreground transition">Office 365</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">Office 365 Professional Plus 1-Year Key</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start">

          {/* Image */}
          <div className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden">
            <img
              src={productImg.url}
              alt="Buy Office 365 Professional Plus 5 devices 100GB cloud 1-year subscription key"
              className="w-full h-full object-contain p-4 sm:p-8"
              loading="eager"
            />
          </div>

          {/* Details */}
          <div id="buy">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Office 365 Subscription · 1-Year License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Office 365 Professional Plus – 5 Devices | 100 GB Cloud Storage | 1 Year
            </h1>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-3 group underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition"
            >
              <div className="flex items-center gap-0.5" aria-label="Rated 4.8 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 text-yellow-400 ${i === 4 ? "fill-yellow-400/60" : "fill-yellow-400"}`}
                    strokeWidth={2}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">· 11,100+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Office 365 Professional Plus 1-year subscription key. Install on
              5 devices — PC, Mac, tablet and phone — with the full Office suite, Microsoft Teams
              and 100 GB of OneDrive cloud storage. Always up to date with the latest features
              from Microsoft.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "1-year subscription. Full 12 months of Office 365",
                "Install on up to 5 devices (Windows, Mac, iOS, Android)",
                "Word, Excel, PowerPoint, Outlook, OneNote, Publisher, Access",
                "Microsoft Teams for video calls, chat and collaboration",
                "100 GB OneDrive cloud storage per user",
                "Always up-to-date with the latest Office features",
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
                <span className="ml-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">Save 78%</span>
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
              Office 365 Pro Plus key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Office 365 Professional Plus is the full cloud-powered Office suite from Microsoft,
            delivering the premium versions of Word, Excel, PowerPoint, Outlook and Teams across
            5 devices. With 100 GB of OneDrive cloud storage and continuous updates, it's the
            ideal productivity package for professionals, freelancers and small teams.
          </p>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Product Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Product Type:</strong> Digital Subscription Key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Delivery:</strong> Send via chat (from 5 minutes to a maximum of 6 hours)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Duration:</strong> 1 Year (12 months)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Devices:</strong> Up to 5 devices per user</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Cloud storage:</strong> 100 GB OneDrive</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Platforms:</strong> Windows, macOS, iOS, Android</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Language:</strong> Multilingual</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Activation:</strong> Online via Microsoft account portal</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Apps included</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Word</strong> — Create and edit professional documents</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Excel</strong> — Spreadsheets, formulas, charts and data analysis</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>PowerPoint</strong> — Stunning presentations with animations and transitions</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Outlook</strong> — Email, calendar, contacts and tasks</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>OneNote</strong> — Digital notebook for ideas and projects</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Publisher</strong> (PC only) — Professional layouts and publications</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Access</strong> (PC only) — Build and manage databases</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Microsoft Teams</strong> — Chat, video calls and team collaboration</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>OneDrive</strong> — 100 GB of secure cloud storage</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Install Office on up to 5 PCs/Macs + 5 tablets + 5 phones</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>100 GB of OneDrive cloud storage to access files anywhere</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Microsoft Teams for HD video meetings and team chat</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Real-time co-authoring on documents with anyone</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Always up to date — get every new Office feature first</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Enterprise-grade security and data protection</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Perfect for freelancers, professionals and small businesses</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original Office 365 Professional Plus 1-year subscription key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for the Office 365 apps</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step activation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Windows:</strong> Windows 10 or Windows 11 (32-bit or 64-bit)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>macOS:</strong> One of the three most recent versions of macOS</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Mobile:</strong> iOS 16+ / Android 10+</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>RAM:</strong> 4 GB minimum</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Storage:</strong> 4 GB available disk space</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Internet:</strong> Required for activation, cloud sync and updates</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Activation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Redeem your key</strong><br />Sign in to your Microsoft account at office.com/setup and enter the 25-character product key from your email.</p>
            <p><strong>Step 2: Download &amp; install Office</strong><br />Download the Office 365 apps from your Microsoft account dashboard and install on up to 5 devices.</p>
            <p><strong>Step 3: Start using Office 365</strong><br />Sign in with the same Microsoft account inside any Office app to activate your 1-year subscription, Teams and 100 GB of OneDrive storage.</p>
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
          Office 365 Professional Plus frequently asked questions
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
            Buy Office 365 Professional Plus key for just ${price}
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/85 max-w-xl mx-auto">
            Genuine Microsoft subscription key. 5 devices, 100 GB cloud storage, full 1-year activation. Delivered to your inbox in minutes.
          </p>
          <a
            href="#buy"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-background text-foreground hover:opacity-90 transition"
          >
            <Download className="w-4 h-4" /> Buy now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
