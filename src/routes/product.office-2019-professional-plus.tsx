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
import productImg from "@/assets/products/Office_2019_Professional_Plus_Key_1_PC.png.asset.json";

const PAGE_TITLE = "Buy Office 2019 Professional Plus Key – 1 PC Lifetime | KeyGG";
const PAGE_DESC =
  "Buy a genuine Office 2019 Professional Plus product key for 1 PC. Lifetime license, instant email delivery, official Microsoft activation. Only $13.";
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
    a: "Yes. This is a one-time purchase that gives you a lifetime activation for 1 Windows PC. No subscription, no recurring fees.",
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


function ProductPage() {
  
  const price = 13;
  const original = 45;
  const savings = Math.round(((original - price) / original) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 sm:pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link to="/" className="hover:text-foreground transition">Microsoft Office</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">Office 2019 Professional Plus Key</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start">

          {/* Image */}
          <div className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden">
            <img
              src={productImg.url}
              alt="Buy Office 2019 Professional Plus product key for 1 PC lifetime license"
              className="w-full h-full object-contain p-4 sm:p-8"
              loading="eager"
            />
          </div>

          {/* Details */}
          <div id="buy">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Microsoft Office · Lifetime License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Office 2019 Professional Plus Key – 1 PC
            </h1>


            <a
              href="#"
              className="mt-3 inline-flex items-center gap-3 group underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition"
            >
              <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 text-yellow-400 ${i === 4 ? "fill-yellow-400/80" : "fill-yellow-400"}`}
                    strokeWidth={2}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-muted-foreground">· 50+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Microsoft Office 2019 Professional Plus product key for 1 Windows PC. One-time
              payment, lifetime activation, instant email delivery. No subscription required.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license. One-time payment, no subscription",
                "Activates on 1 Windows 10 or Windows 11 PC",
                "Includes Word, Excel, PowerPoint, Outlook, Access, Publisher",
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
              Office 2019 product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            A reliable and powerful office suite designed for businesses, students, and everyday users. Office 2019 provides all the essential tools with stable performance and a familiar interface.
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

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Included apps</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Word</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Excel</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>PowerPoint</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Outlook</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>OneNote</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Publisher</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Access</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Stable and proven version of Office</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>One-time purchase. No subscription</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Classic interface with essential tools</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Powerful performance for everyday tasks</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Full offline functionality after installation</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Ideal for work, study, and business</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original 25-character license key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for Office 2019</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step installation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Installation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Download Office 2019</strong><br />After your purchase, you will receive an email with your product key and download link.</p>
            <p><strong>Step 2: Install the package</strong><br />Run the installer and follow the on-screen instructions. Installation takes 5-15 minutes, depending on your internet speed.</p>
            <p><strong>Step 3: Activate the license</strong><br />Open any Office application (Word, Excel, etc.) and enter the 25-character key. Office 2019 will be activated.</p>
          </div>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-2">Need help?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our support team is available 24/7 to assist you with installation and activation. Contact us anytime via email or live chat.
          </p>
        </div>
      </section>



      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight mb-6">
          Office 2019 Professional Plus frequently asked questions
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
