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
import productImg from "@/assets/products/Project_Professional_2024_Key_1_PC.png.asset.json";

const PAGE_TITLE = "Buy Project Professional 2024 Key – 1 PC | KeyGG";
const PAGE_DESC =
  "Buy a genuine Microsoft Project Professional 2024 product key for 1 PC. Lifetime license, instant email delivery, advanced project management & planning tools. Only $17.";
const PAGE_URL = "/product/project-professional-2024-key-1-pc";

export const Route = createFileRoute("/product/project-professional-2024-key-1-pc")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy microsoft project 2024 key, project professional 2024 key cheap, ms project 2024 license 1 pc, cheap project 2024 key online, microsoft project professional 2024 product key, buy project 2024 key online instant delivery, project 2024 activation key, project professional 2024 digital license lifetime, gantt chart software key, project management software license",
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
              name: "Project Professional 2024 Key – 1 PC Lifetime License",
              image: productImg.url,
              description:
                "Genuine Microsoft Project Professional 2024 product key for 1 Windows PC. Lifetime activation, instant email delivery. Advanced project management, Gantt charts, resource planning and reporting.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-PROJECT-2024-PRO-1PC",
              offers: {
                "@type": "Offer",
                price: "17",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: PAGE_URL,
                priceValidUntil: "2026-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "5400",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Olivia B." },
                  datePublished: "2026-06-09",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Project Pro 2024 activated in under a minute. Massive savings vs Microsoft Store.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Marcus F." },
                  datePublished: "2026-05-26",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Gantt charts and resource planning work flawlessly. Genuine key, fast email delivery.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Priya S." },
                  datePublished: "2026-05-11",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Great price for a lifetime Project 2024 license. Support helped me with install questions.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Business", item: "/" },
                { "@type": "ListItem", position: 4, name: "Project Professional 2024 Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Microsoft Project 2024 key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Microsoft Project Professional 2024 product key right here on KeyGG for $17 with instant email delivery and lifetime activation for 1 PC." } },
                { "@type": "Question", name: "Is the Project Professional 2024 license lifetime?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a one-time purchase that gives you lifetime activation of Project Professional 2024 for 1 Windows PC. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my Project 2024 product key?", acceptedAnswer: { "@type": "Answer", text: "Your Project Professional 2024 key is delivered automatically to your email within 5–10 minutes of a successful payment." } },
                { "@type": "Question", name: "Is the Project 2024 key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers." } },
                { "@type": "Question", name: "What's the difference between Project Standard and Project Professional 2024?", acceptedAnswer: { "@type": "Answer", text: "Project Professional 2024 includes everything in Standard plus resource management, team collaboration, timesheets and sync with Project Server / Project Online." } },
                { "@type": "Question", name: "Does Microsoft Project 2024 work on Windows 10 and Windows 11?", acceptedAnswer: { "@type": "Answer", text: "Yes. Microsoft Project Professional 2024 is fully compatible with both Windows 10 and Windows 11 (64-bit)." } },
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
    q: "Where can I buy a cheap Microsoft Project 2024 key?",
    a: "You can buy a genuine Microsoft Project Professional 2024 product key right here on KeyGG for $17, with instant email delivery and lifetime activation for 1 PC.",
  },
  {
    q: "Is the Project Professional 2024 license lifetime?",
    a: "Yes. This is a one-time purchase that gives you lifetime activation of Project Professional 2024 for 1 Windows PC. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my Project 2024 product key?",
    a: "Your Project Professional 2024 key is delivered automatically to your email within 5–10 minutes of a successful payment.",
  },
  {
    q: "Is the Project 2024 key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "What's the difference between Project Standard and Project Professional 2024?",
    a: "Project Professional 2024 includes everything in Standard plus resource management, team collaboration, timesheets and sync with Project Server / Project Online.",
  },
  {
    q: "Does Microsoft Project 2024 work on Windows 10 and Windows 11?",
    a: "Yes. Microsoft Project Professional 2024 is fully compatible with both Windows 10 and Windows 11 (64-bit).",
  },
];

function ProductPage() {
  const price = 17;
  const original = 120;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 sm:pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link to="/" className="hover:text-foreground transition">Business</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">Project Professional 2024 Key</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start">

          {/* Image */}
          <div className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden">
            <img
              src={productImg.url}
              alt="Buy Microsoft Project Professional 2024 product key for 1 PC lifetime license"
              className="w-full h-full object-contain p-4 sm:p-8"
              loading="eager"
            />
          </div>

          {/* Details */}
          <div id="buy">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Microsoft Project · Lifetime License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Project Professional 2024 Key – 1 PC
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
              <span className="text-sm text-muted-foreground">· 50+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Microsoft Project Professional 2024 product key for 1 Windows PC.
              One-time payment, lifetime activation, instant email delivery. Plan projects, manage
              resources, build Gantt charts and deliver on time and on budget.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license. One-time payment, no subscription",
                "Activates on 1 Windows 10 or Windows 11 PC",
                "Gantt charts, timelines, baselines & critical path",
                "Resource management, timesheets & team collaboration",
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
              Project 2024 product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Microsoft Project Professional 2024 is the latest perpetual release of Project for
            Windows, built for project managers, PMOs and teams who need powerful planning,
            scheduling and resource management in a single desktop app.
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

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Interactive Gantt charts, timelines and baselines</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Resource management with team collaboration & timesheets</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Built-in reports and customizable dashboards</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Pre-built project templates to get started fast</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Sync with Project Server and Project Online</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Ideal for project managers, PMOs and consultants</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original 25-character Project Professional 2024 license key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for Project 2024</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step activation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>OS:</strong> Windows 10 or Windows 11 (64-bit)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Processor:</strong> 1.6 GHz or faster, 2-core</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>RAM:</strong> 4 GB minimum</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Storage:</strong> 4 GB available disk space</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Display:</strong> 1280 × 768 resolution</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Internet:</strong> Required for activation and updates</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Activation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Download Project 2024</strong><br />Use the official Microsoft download link included in your email.</p>
            <p><strong>Step 2: Install and open Project</strong><br />Launch Microsoft Project to trigger the activation prompt.</p>
            <p><strong>Step 3: Enter your product key</strong><br />Paste the 25-character license key and click "Activate". Project Professional 2024 will be activated for life.</p>
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
          Project Professional 2024 frequently asked questions
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
            Buy Project Professional 2024 key for just ${price}
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
