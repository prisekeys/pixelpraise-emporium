import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Minus,
  Plus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productImg from "@/assets/products/Office_2019_Professional_Plus_Key_1_PC.png.asset.json";

const PAGE_TITLE = "Buy Office 2019 Professional Plus Key – 1 PC Lifetime | KeyGG";
const PAGE_DESC =
  "Buy a genuine Office 2019 Professional Plus product key for 1 PC. Lifetime license, instant email delivery, official Microsoft activation — only $13.";
const PAGE_URL = "/product/office-2019-professional-plus";

export const Route = createFileRoute("/product/office-2019-professional-plus")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy office 2019 professional plus key, office 2019 pro plus license, office 2019 product key for sale, cheap office 2019 key, office 2019 lifetime license 1 pc, office 2019 activation key download, microsoft office 2019 pro plus key online",
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
              name: "Office 2019 Professional Plus Key – 1 PC Lifetime License",
              image: productImg.url,
              description:
                "Genuine Microsoft Office 2019 Professional Plus product key for 1 Windows PC. Lifetime activation, instant email delivery. Includes Word, Excel, PowerPoint, Outlook, Access and Publisher.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-OFFICE-2019-PRO-PLUS",
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
                ratingValue: "4.9",
                reviewCount: "24500",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Daniel R." },
                  datePublished: "2026-06-02",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Activation worked first try. Got the key in under 5 minutes. Highly recommend.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Sofia M." },
                  datePublished: "2026-05-16",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Way cheaper than buying directly from Microsoft. Same product, full features.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "James K." },
                  datePublished: "2026-05-12",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Smooth experience, support helped me with install. Saved a lot of money.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Microsoft Office", item: "/" },
                { "@type": "ListItem", position: 4, name: "Office 2019 Professional Plus Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Office 2019 Professional Plus key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Office 2019 Professional Plus product key right here on KeyGG for $13 with instant email delivery and lifetime activation." } },
                { "@type": "Question", name: "Is this Office 2019 Pro Plus license lifetime?", acceptedAnswer: { "@type": "Answer", text: "Yes. It is a one-time purchase that gives you a lifetime activation for 1 PC. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my Office 2019 product key?", acceptedAnswer: { "@type": "Answer", text: "Your Office 2019 Professional Plus key is delivered automatically to your email within 5–10 minutes of payment." } },
                { "@type": "Question", name: "Is the Office 2019 Pro Plus key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is genuine and activates directly on Microsoft's official servers." } },
                { "@type": "Question", name: "Can I download Office 2019 Professional Plus after purchase?", acceptedAnswer: { "@type": "Answer", text: "Yes. After purchase you'll receive the official Microsoft download link along with your product key." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: ProductPage,
});

const includedApps = [
  "Word 2019",
  "Excel 2019",
  "PowerPoint 2019",
  "Outlook 2019",
  "OneNote 2019",
  "Access 2019",
  "Publisher 2019",
  "Skype for Business",
];

const trust = [
  { icon: Zap, label: "Instant email delivery" },
  { icon: BadgeCheck, label: "Genuine Microsoft key" },
  { icon: Lock, label: "Secure SSL checkout" },
  { icon: RefreshCcw, label: "30-day money back" },
  { icon: Headphones, label: "24/7 customer support" },
  { icon: ShieldCheck, label: "Lifetime activation" },
];

const requirements = [
  { label: "Operating System", value: "Windows 10 or Windows 11 (64-bit)" },
  { label: "Processor", value: "1.6 GHz, 2-core processor or faster" },
  { label: "Memory", value: "4 GB RAM (2 GB for 32-bit)" },
  { label: "Hard Disk", value: "4 GB of available disk space" },
  { label: "Display", value: "1280 × 768 screen resolution" },
  { label: "Graphics", value: "DirectX 9 or later, with WDDM 2.0" },
];

const faqs = [
  {
    q: "Where can I buy a cheap Office 2019 Professional Plus key?",
    a: "You can buy a genuine Office 2019 Professional Plus product key right here on KeyGG for $13, with instant email delivery and lifetime activation for 1 PC.",
  },
  {
    q: "Is this Office 2019 Pro Plus license lifetime?",
    a: "Yes — this is a one-time purchase that gives you a lifetime activation for 1 Windows PC. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my Office 2019 product key?",
    a: "Your Office 2019 Professional Plus product key is delivered automatically to your email within 5–10 minutes of a successful payment.",
  },
  {
    q: "Is the Office 2019 Pro Plus key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "Can I download Office 2019 Professional Plus after purchase?",
    a: "Yes. After checkout you'll receive both your product key and the official Microsoft download link in the same email.",
  },
  {
    q: "Can I transfer the Office 2019 license to another PC?",
    a: "The license is bound to the first device it is activated on. If you replace your PC, contact our support team and we'll help you with reactivation.",
  },
];

const reviews = [
  { name: "Daniel R.", rating: 5, date: "2 weeks ago", text: "Activation worked first try. Got the key in under 5 minutes. Highly recommend." },
  { name: "Sofia M.", rating: 5, date: "1 month ago", text: "Way cheaper than buying directly from Microsoft. Same product, full features." },
  { name: "James K.", rating: 4, date: "1 month ago", text: "Smooth experience, support helped me with install. Saved a lot of money." },
];

function ProductPage() {
  const [qty, setQty] = useState(1);
  const price = 13;
  const original = 45;
  const savings = Math.round(((original - price) / original) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/" className="hover:text-foreground transition">Microsoft Office</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Office 2019 Professional Plus Key</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden">
            <img
              src={productImg.url}
              alt="Buy Office 2019 Professional Plus product key for 1 PC — lifetime license"
              className="w-full h-full object-contain p-8"
              loading="eager"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
              -{savings}% OFF
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur border border-border">
              In stock
            </div>
          </div>

          {/* Details */}
          <div id="buy">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Microsoft Office · Lifetime License
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Office 2019 Professional Plus Key – 1 PC
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" strokeWidth={2.5} />
                ))}
              </div>
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-muted-foreground">· 24,500+ sold</span>
            </div>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Microsoft Office 2019 Professional Plus product key for 1 Windows PC. One-time
              payment, lifetime activation, instant email delivery — no subscription required.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license — one-time payment, no subscription",
                "Activates on 1 Windows 10 or Windows 11 PC",
                "Includes Word, Excel, PowerPoint, Outlook, Access, Publisher",
                "Genuine key — activates on Microsoft's official servers",
                "Delivered to your email within 5–10 minutes",
              ].map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Price card */}
            <div className="mt-6 p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-end gap-3">
                <span className="font-display font-bold text-4xl">${price}</span>
                <span className="text-lg text-muted-foreground line-through mb-1">${original}</span>
                <span className="ml-auto text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Save ${original - price} ({savings}%)
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">One-time payment · Tax included · USD</div>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center border border-border rounded-full overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 grid place-items-center hover:bg-secondary transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium" aria-live="polite">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-9 h-9 grid place-items-center hover:bg-secondary transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
                >
                  <Download className="w-4 h-4" /> Buy now
                </button>
              </div>

              <div className="mt-5 pt-5 border-t border-border grid grid-cols-2 gap-y-2.5 gap-x-3 text-xs">
                {trust.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary shrink-0" /> {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="w-3.5 h-3.5" />
              Office 2019 product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Included apps */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/60">
        <div className="mb-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
            What's included with your Office 2019 Pro Plus license
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            All 8 desktop applications — installed locally, no subscription, no cloud lock-in.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {includedApps.map((app) => (
            <div
              key={app}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
            >
              <div
                className="w-9 h-9 rounded-lg grid place-items-center text-primary-foreground font-display font-bold text-sm shrink-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                {app[0]}
              </div>
              <span className="text-sm font-medium">{app}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Description + Requirements */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/60">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-4">
              Office 2019 Professional Plus — product description
            </h2>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Office 2019 Professional Plus is Microsoft's most complete desktop productivity suite,
                built for professionals, students and small businesses who want the full power of Office
                without a Microsoft 365 subscription. Buy once, activate on 1 PC, use it forever.
              </p>
              <p>
                Your purchase includes a genuine Office 2019 Pro Plus product key with lifetime
                activation, plus the official Microsoft download link. You get all the premium apps —
                Word, Excel, PowerPoint, Outlook, Access and Publisher — installed locally for fast,
                offline work.
              </p>
              <p>
                Activation takes about a minute: download Office 2019 from Microsoft's official servers,
                enter the product key we email you, and you're ready to go. Your license is permanent and
                never expires.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-4">
              System requirements
            </h2>
            <div className="rounded-2xl border border-border bg-card divide-y divide-border">
              {requirements.map((r) => (
                <div key={r.label} className="flex items-start justify-between gap-4 px-5 py-3 text-sm">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to activate */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/60">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-6">
          How to activate Office 2019 Professional Plus
        </h2>
        <ol className="grid md:grid-cols-3 gap-4">
          {[
            { n: 1, t: "Buy your key", d: "Complete checkout securely on KeyGG — $13, one-time payment." },
            { n: 2, t: "Check your email", d: "Receive your Office 2019 Pro Plus product key and the official download link within minutes." },
            { n: 3, t: "Activate on your PC", d: "Install Office, enter the product key, and enjoy lifetime activation on 1 Windows PC." },
          ].map((s) => (
            <li key={s.n} className="p-6 rounded-2xl border border-border bg-card">
              <div className="w-8 h-8 rounded-full grid place-items-center font-display font-bold text-sm text-primary-foreground mb-3"
                style={{ background: "var(--gradient-primary)" }}>{s.n}</div>
              <h3 className="font-display font-bold text-base mb-1.5">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/60">
        <div className="mb-6 flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
            Rated 4.9 by 24,500+ verified customers
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" strokeWidth={2.5} />
              ))}
            </div>
            <span className="text-lg font-display font-bold">4.9</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < r.rating ? "fill-yellow-400 text-yellow-400" : "fill-none text-muted-foreground/20"
                    }`}
                    strokeWidth={2.5}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">{r.name}</span>
                <span className="text-muted-foreground">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-border/60">
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-6">
          Office 2019 Professional Plus — frequently asked questions
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-display font-bold text-base mb-2">{f.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div
          className="rounded-3xl p-10 md:p-14 text-center text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">
            Buy Office 2019 Professional Plus key for just ${price}
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/85 max-w-xl mx-auto">
            Genuine Microsoft product key. Lifetime activation for 1 PC. Delivered to your inbox in minutes.
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
