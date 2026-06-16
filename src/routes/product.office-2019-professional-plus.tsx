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
  Twitter,
  Facebook,
  Instagram,
  Share2,
} from "lucide-react";
import logo from "@/assets/keygg-logo.png.asset.json";
import productImg from "@/assets/products/Office_2019_Professional_Plus_Key_1_PC.png.asset.json";

export const Route = createFileRoute("/product/office-2019-professional-plus")({
  head: () => ({
    meta: [
      { title: "Office 2019 Professional Plus Key – 1 PC | KeyGG" },
      {
        name: "description",
        content:
          "Genuine Office 2019 Professional Plus lifetime license key for 1 PC. Instant digital delivery, official Microsoft activation, 24/7 support.",
      },
      { property: "og:title", content: "Office 2019 Professional Plus Key – 1 PC | KeyGG" },
      {
        property: "og:description",
        content:
          "Lifetime license for 1 PC. Word, Excel, PowerPoint, Outlook, Access, Publisher & more.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/product/office-2019-professional-plus" },
      { property: "og:image", content: productImg.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: productImg.url },
    ],
    links: [{ rel: "canonical", href: "/product/office-2019-professional-plus" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              name: "Office 2019 Professional Plus Key – 1 PC",
              image: productImg.url,
              description:
                "Genuine Microsoft Office 2019 Professional Plus lifetime license key for 1 Windows PC. Includes Word, Excel, PowerPoint, Outlook, Access and Publisher.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-OFFICE-2019-PRO-PLUS",
              offers: {
                "@type": "Offer",
                price: "13",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: "/product/office-2019-professional-plus",
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
                { "@type": "ListItem", position: 3, name: "Office", item: "/" },
                { "@type": "ListItem", position: 4, name: "Office 2019 Professional Plus", item: "/product/office-2019-professional-plus" },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Is this a lifetime license?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a one-time purchase that gives you a lifetime activation for 1 PC. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my key?", acceptedAnswer: { "@type": "Answer", text: "Keys are delivered automatically to your email within 5–10 minutes of a successful payment." } },
                { "@type": "Question", name: "Can I transfer the license to another PC?", acceptedAnswer: { "@type": "Answer", text: "The license is bound to the first device it's activated on. If you replace your PC, contact our support team and we'll help you with reactivation." } },
                { "@type": "Question", name: "Will I receive updates?", acceptedAnswer: { "@type": "Answer", text: "Yes. You'll receive all official Microsoft security updates and patches for Office 2019." } },
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
  "Word",
  "Excel",
  "PowerPoint",
  "Outlook",
  "OneNote",
  "Access",
  "Publisher",
  "Skype for Business",
];

const features = [
  {
    icon: BadgeCheck,
    title: "Genuine Microsoft license",
    desc: "100% authentic activation key delivered straight from Microsoft's licensing servers.",
  },
  {
    icon: Zap,
    title: "Instant digital delivery",
    desc: "Receive your product key and download link by email within minutes of purchase.",
  },
  {
    icon: RefreshCcw,
    title: "30-day money back",
    desc: "Not happy? Get a full refund within 30 days — no questions asked.",
  },
  {
    icon: Headphones,
    title: "24/7 expert support",
    desc: "Our specialists are available around the clock to help with activation.",
  },
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
    q: "Is this a lifetime license?",
    a: "Yes. This is a one-time purchase that gives you a lifetime activation for 1 PC. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my key?",
    a: "Keys are delivered automatically to your email within 5–10 minutes of a successful payment.",
  },
  {
    q: "Can I transfer the license to another PC?",
    a: "The license is bound to the first device it's activated on. If you replace your PC, contact our support team and we'll help you with reactivation.",
  },
  {
    q: "Will I receive updates?",
    a: "Yes. You'll receive all official Microsoft security updates and patches for Office 2019.",
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
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo.url} alt="KeyGG" className="h-9 md:h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition">Software</Link>
            <Link to="/" className="hover:text-foreground transition">Gaming</Link>
            <Link to="/" className="hover:text-foreground transition">AI</Link>
            <Link to="/" className="hover:text-foreground transition">Support</Link>
          </div>
          <button
            className="px-4 py-2 rounded-full text-sm font-medium text-primary-foreground transition hover:opacity-90"
            style={{ background: "var(--gradient-primary)" }}
          >
            Sign in
          </button>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/" className="hover:text-foreground transition">Software</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/" className="hover:text-foreground transition">Office</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Office 2019 Professional Plus</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl border border-border bg-white overflow-hidden">
              <img
                src={productImg.url}
                alt="Office 2019 Professional Plus Key for 1 PC"
                className="w-full h-full object-contain p-8"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                -{savings}% OFF
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur border border-border">
                In stock
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  className={`aspect-square rounded-xl border bg-white overflow-hidden transition ${
                    i === 0 ? "border-primary ring-2 ring-primary/30" : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={productImg.url} alt="" className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="text-xs font-medium text-primary mb-2">Microsoft Office</div>
            <h1 className="font-display font-bold text-3xl md:text-4xl tracking-tighter leading-tight">
              Office 2019 Professional Plus Key – 1 PC
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" strokeWidth={2.5} />
                ))}
              </div>
              <span className="text-sm font-medium">4.9</span>
              <span className="text-sm text-muted-foreground">· 24,500+ sold</span>
            </div>

            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              The complete Office experience for power users. Get a lifetime license for 1 PC with all
              premium apps — Word, Excel, PowerPoint, Outlook, Access, Publisher and more — activated by
              a genuine Microsoft product key.
            </p>

            {/* Highlights */}
            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license — one-time payment",
                "Activates on 1 Windows PC",
                "Includes Word, Excel, PowerPoint, Outlook, Access, Publisher",
                "Official Microsoft activation servers",
              ].map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-7 p-5 rounded-2xl border border-border bg-card">
              <div className="flex items-end gap-3">
                <span className="font-display font-bold text-4xl">${price}</span>
                <span className="text-lg text-muted-foreground line-through mb-1">${original}</span>
                <span className="ml-auto text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Save ${original - price}
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">One-time payment · Tax included</div>

              {/* Qty + buy */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center border border-border rounded-full overflow-hidden">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 grid place-items-center hover:bg-secondary transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-medium">{qty}</span>
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
                <button
                  className="w-11 h-11 grid place-items-center rounded-full border border-border hover:bg-secondary transition"
                  aria-label="Share product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Trust row */}
              <div className="mt-5 pt-5 border-t border-border grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" /> Instant email delivery
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Genuine Microsoft key
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary" /> Secure checkout
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCcw className="w-4 h-4 text-primary" /> 30-day refund
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="w-3.5 h-3.5" />
              Key sent to your email within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Included apps */}
      <section className="mx-auto max-w-7xl px-6 py-12 border-t border-border/60">
        <div className="mb-8">
          <div className="text-sm font-medium text-primary mb-2">What's included</div>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter">
            8 premium Office applications
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {includedApps.map((app) => (
            <div
              key={app}
              className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition"
            >
              <div
                className="w-10 h-10 rounded-lg grid place-items-center text-primary-foreground font-display font-bold text-sm"
                style={{ background: "var(--gradient-primary)" }}
              >
                {app[0]}
              </div>
              <span className="text-sm font-medium">{app}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-12 border-t border-border/60">
        <div className="mb-8">
          <div className="text-sm font-medium text-primary mb-2">Why KeyGG</div>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter">
            Buy with confidence
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-border bg-card">
              <div
                className="w-11 h-11 rounded-xl grid place-items-center mb-4"
                style={{ background: "var(--gradient-lime)" }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base mb-1.5">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description + Requirements */}
      <section className="mx-auto max-w-7xl px-6 py-12 border-t border-border/60">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="text-sm font-medium text-primary mb-2">Product description</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter mb-5">
              Everything you need to get work done
            </h2>
            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Office 2019 Professional Plus is Microsoft's most complete desktop productivity suite,
                designed for professionals, students and businesses who demand the full power of Office
                without a recurring subscription.
              </p>
              <p>
                You'll get the entire family of premium apps — including Word for documents, Excel for
                spreadsheets and analysis, PowerPoint for presentations, Outlook for email and calendar,
                Access for databases and Publisher for marketing materials — all installed locally for
                offline use.
              </p>
              <p>
                Activation is straightforward: download Office from Microsoft's official servers, enter
                the genuine product key we email you and you're ready to go. Your license is permanent
                and never expires.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-sm font-medium text-primary mb-2">System requirements</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter mb-5">
              Minimum specs
            </h2>
            <div className="rounded-2xl border border-border bg-card divide-y divide-border">
              {requirements.map((r) => (
                <div key={r.label} className="flex items-start justify-between gap-4 px-5 py-3.5 text-sm">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-6 py-12 border-t border-border/60">
        <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-sm font-medium text-primary mb-2">Customer reviews</div>
            <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter">
              Rated 4.9 by 24,500+ customers
            </h2>
          </div>
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
      <section className="mx-auto max-w-7xl px-6 py-12 border-t border-border/60">
        <div className="mb-8">
          <div className="text-sm font-medium text-primary mb-2">FAQ</div>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tighter">
            Frequently asked questions
          </h2>
        </div>
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
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div
          className="rounded-3xl p-10 md:p-14 text-center text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tighter">
            Ready to upgrade your productivity?
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/85 max-w-xl mx-auto">
            Get your genuine Office 2019 Professional Plus key delivered instantly for just ${price}.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-background text-foreground hover:opacity-90 transition">
            <Download className="w-4 h-4" /> Buy now for ${price}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="KeyGG" className="h-7 w-auto" />
            <span className="text-xs text-muted-foreground">© 2026 KeyGG. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
