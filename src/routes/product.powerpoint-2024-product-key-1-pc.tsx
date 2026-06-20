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
import productImg from "@/assets/products/powerpoint-2024.webp.asset.json";
import trustBanner from "@/assets/trust-payment-banner.svg.asset.json";

const PAGE_TITLE = "Buy PowerPoint 2024 Product Key – 1 PC | KeyGG";
const PAGE_DESC =
  "Buy a genuine Microsoft PowerPoint 2024 product key for 1 PC. Lifetime license, quick email delivery. Create stunning presentations, animations & slide shows. Only $18.";
const PAGE_URL = "/product/powerpoint-2024-product-key-1-pc";
const WHOP_URL = "https://whop.com/checkout/plan_Nse08h3qGlKcB";

const openCheckout = (e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  if (typeof window !== "undefined") {
    window.open(WHOP_URL, "keygg-checkout", "width=560,height=720,top=40,left=40,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no");
  }
};

export const Route = createFileRoute("/product/powerpoint-2024-product-key-1-pc")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy powerpoint 2024 product key, powerpoint 2024 license key 1 pc, cheap powerpoint 2024 key online, powerpoint 2024 activation key, buy powerpoint 2024 cheap, powerpoint 2024 for windows key, powerpoint 2024 presentation lifetime, powerpoint 2024 digital download key, microsoft powerpoint 2024 standalone, ms powerpoint 2024 license, powerpoint 2024 pc license genuine, powerpoint 2024 instant delivery, buy microsoft powerpoint 2024 key instant delivery, powerpoint 2024 professional presentation slides, powerpoint 2024 standalone product key",
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
              name: "PowerPoint 2024 Product Key – 1 PC Lifetime License",
              image: productImg.url,
              description:
                "Genuine Microsoft PowerPoint 2024 product key for 1 PC. Lifetime activation, quick email delivery. Create professional presentations with advanced animations, transitions, and design tools.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-POWERPOINT-2024-1PC",
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
                reviewCount: "2300",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Anna S." },
                  datePublished: "2026-06-15",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "PowerPoint 2024 key arrived in 5 minutes. Activated flawlessly on my Windows 10 PC. The new design ideas and morph animations are incredible.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Michael R." },
                  datePublished: "2026-06-09",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Amazing value. I only needed PowerPoint for client presentations and this standalone key was perfect. The co-authoring and presenter coach features are great.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Jennifer L." },
                  datePublished: "2026-05-28",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Genuine key, fast delivery. PowerPoint 2024 has much better templates and the AI-powered design suggestions save me a lot of time.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Office 2024", item: "/" },
                { "@type": "ListItem", position: 4, name: "PowerPoint 2024 Product Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap PowerPoint 2024 product key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Microsoft PowerPoint 2024 product key for 1 PC right here on KeyGG for $18, with quick email delivery and lifetime activation." } },
                { "@type": "Question", name: "Is the PowerPoint 2024 license lifetime?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a one-time purchase that gives you lifetime activation of PowerPoint 2024 for 1 PC. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my PowerPoint 2024 product key?", acceptedAnswer: { "@type": "Answer", text: "Your PowerPoint 2024 product key is delivered automatically to your email fast after a successful payment." } },
                { "@type": "Question", name: "Is the PowerPoint 2024 key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers." } },
                { "@type": "Question", name: "What is included in PowerPoint 2024?", acceptedAnswer: { "@type": "Answer", text: "PowerPoint 2024 includes advanced presentation design tools, AI-powered design ideas, morph transitions, 3D models, cinematic animations, presenter coach, co-authoring, screen recording, and extensive template library." } },
                { "@type": "Question", name: "Can I use PowerPoint 2024 without other Office apps?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a standalone PowerPoint 2024 license that works independently. You do not need Word, Excel, or any other Office app installed." } },
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
    q: "Where can I buy a cheap PowerPoint 2024 product key?",
    a: "You can buy a genuine Microsoft PowerPoint 2024 product key for 1 PC right here on KeyGG for $18, with quick email delivery and lifetime activation.",
  },
  {
    q: "Is the PowerPoint 2024 license lifetime?",
    a: "Yes. This is a one-time purchase that gives you lifetime activation of PowerPoint 2024 for 1 PC. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my PowerPoint 2024 product key?",
    a: "Your PowerPoint 2024 product key is delivered automatically to your email fast after a successful payment.",
  },
  {
    q: "Is the PowerPoint 2024 key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "What is included in PowerPoint 2024?",
    a: "PowerPoint 2024 includes advanced presentation design tools, AI-powered design ideas, morph transitions, 3D models, cinematic animations, presenter coach, co-authoring, screen recording, and extensive template library.",
  },
  {
    q: "Can I use PowerPoint 2024 without other Office apps?",
    a: "Yes. This is a standalone PowerPoint 2024 license that works independently. You do not need Word, Excel, or any other Office app installed.",
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
          <span className="text-foreground font-medium">PowerPoint 2024 Product Key</span>
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
              alt="Buy Microsoft PowerPoint 2024 product key lifetime license for 1 PC"
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
              Microsoft PowerPoint 2024 · Lifetime License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy PowerPoint 2024 Product Key – 1 PC
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
              <span className="text-sm text-muted-foreground">· 40+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine Microsoft PowerPoint 2024 product key for 1 PC.
              One-time payment, lifetime activation, quick email delivery.
              Create stunning presentations with AI-powered design ideas, cinematic
              morph transitions, 3D models, and the powerful Presenter Coach —
              perfect for business, education, and creative professionals.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license. One-time payment, no subscription",
                "Create professional presentations & slide shows for 1 PC",
                "AI-powered design ideas, morph transitions & 3D models",
                "Presenter Coach, screen recording & co-authoring",
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
              PowerPoint 2024 product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Microsoft PowerPoint 2024 is the latest standalone version of the world's most popular
            presentation software. Designed for business professionals, educators, marketers, and
            creative individuals who need to deliver compelling visual stories. PowerPoint 2024
            delivers AI-powered design tools, cinematic transitions, 3D model integration, and
            real-time collaboration features that make every presentation unforgettable.
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
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>AI-Powered Design Ideas</strong> — Get professional slide layout suggestions instantly with intelligent design recommendations</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Morph Transitions</strong> — Create cinematic, seamless animations between slides with the advanced morph transition engine</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>3D Models & Animations</strong> — Insert and animate 3D models directly into your slides for stunning visual impact</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Presenter Coach</strong> — Get real-time feedback on pacing, filler words, and inclusive language during rehearsals</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Co-Authoring</strong> — Work simultaneously with colleagues on the same presentation in real time</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Screen Recording</strong> — Capture and embed screen recordings directly into your slides for tutorials and demos</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Enhanced Templates</strong> — Access thousands of premium, professionally designed templates and themes</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Export & Share</strong> — Export to PDF, video, 4K resolution, or share directly via OneDrive and Teams</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original 25-character PowerPoint 2024 license key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for PowerPoint 2024</span></li>
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
            How to activate your PowerPoint 2024 key
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Purchase",
                desc: "Complete your order securely. Your PowerPoint 2024 product key will be emailed to you automatically within minutes.",
              },
              {
                title: "Install",
                desc: "Download PowerPoint 2024 from the official Microsoft link included in your email and run the installer on your PC.",
              },
              {
                title: "Activate",
                desc: "Launch PowerPoint 2024, go to File → Account → Change Product Key, enter your 25-character code and click Activate.",
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
            Get your PowerPoint 2024 key today
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-xl mx-auto">
            Create professional presentations that captivate your audience. Lifetime license, genuine Microsoft key, instant delivery.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="font-display font-bold text-3xl sm:text-4xl">${price}</span>
            <span className="text-base sm:text-lg text-muted-foreground line-through">${original}</span>
          </div>
          <button
            type="button"
            onClick={openCheckout}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-primary-foreground transition hover:opacity-90 cursor-pointer"
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
