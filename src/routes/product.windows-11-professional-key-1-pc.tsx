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
import productImg from "@/assets/products/Windows_11_Professional_Key_1_PC.png.asset.json";

const PAGE_TITLE = "Buy Windows 11 Professional Key – 1 PC | KeyGG";
const PAGE_DESC =
  "Buy a genuine Windows 11 Pro product key for 1 PC. Lifetime license, instant email delivery, official Microsoft activation. Only $13.";
const PAGE_URL = "/product/windows-11-professional-key-1-pc";
const WHOP_URL = "https://whop.com/checkout/plan_oDPDDAU0cg3Lf";


export const Route = createFileRoute("/product/windows-11-professional-key-1-pc")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy windows 11 pro key, windows 11 professional key cheap, windows 11 pro license 1 pc, cheap windows 11 pro key online, windows 11 professional product key for sale, buy windows 11 key online instant delivery, windows 11 pro activation key, windows 11 pro digital license",
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
              name: "Windows 11 Professional Key – 1 PC Lifetime License",
              image: productImg.url,
              description:
                "Genuine Microsoft Windows 11 Professional product key for 1 Windows PC. Lifetime activation, instant email delivery. Pro features, BitLocker, Remote Desktop, and enhanced security.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-WIN11-PRO-1PC",
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
                reviewCount: "31200",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Alex T." },
                  datePublished: "2026-06-10",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Activated in seconds. Genuine Windows 11 Pro key at an incredible price. Highly recommend KeyGG.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Maria L." },
                  datePublished: "2026-05-28",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Way cheaper than Microsoft Store. The key worked perfectly on my new PC build.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Chris D." },
                  datePublished: "2026-05-15",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Great deal and fast delivery. Support team was helpful when I had a question about activation.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Windows", item: "/" },
                { "@type": "ListItem", position: 4, name: "Windows 11 Professional Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Windows 11 Pro key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Windows 11 Professional product key right here on KeyGG for $13 with instant email delivery and lifetime activation for 1 PC." } },
                { "@type": "Question", name: "Is this Windows 11 Pro license lifetime?", acceptedAnswer: { "@type": "Answer", text: "Yes. This is a one-time purchase that gives you a lifetime activation for 1 Windows PC. No subscription, no recurring fees." } },
                { "@type": "Question", name: "How fast will I receive my Windows 11 product key?", acceptedAnswer: { "@type": "Answer", text: "Your Windows 11 Professional key is delivered automatically to your email within 5–10 minutes of a successful payment." } },
                { "@type": "Question", name: "Is the Windows 11 Pro key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers." } },
                { "@type": "Question", name: "Can I upgrade from Windows 10 to Windows 11 with this key?", acceptedAnswer: { "@type": "Answer", text: "Yes. You can use this Windows 11 Pro key to activate a fresh install or upgrade an existing Windows 10 installation to Windows 11 Pro." } },
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

const requirements = [
  { label: "Processor", value: "1 GHz or faster with 2 or more cores on a compatible 64-bit processor" },
  { label: "RAM", value: "4 GB minimum" },
  { label: "Storage", value: "64 GB or larger storage device" },
  { label: "System firmware", value: "UEFI, Secure Boot capable" },
  { label: "TPM", value: "Trusted Platform Module (TPM) version 2.0" },
  { label: "Graphics", value: "DirectX 12 compatible graphics / WDDM 2.x" },
  { label: "Display", value: '9" with HD Resolution (720p)' },
];

const faqs = [
  {
    q: "Where can I buy a cheap Windows 11 Pro key?",
    a: "You can buy a genuine Windows 11 Professional product key right here on KeyGG for $13, with instant email delivery and lifetime activation for 1 PC.",
  },
  {
    q: "Is this Windows 11 Pro license lifetime?",
    a: "Yes. This is a one-time purchase that gives you a lifetime activation for 1 Windows PC. No subscription, no recurring fees.",
  },
  {
    q: "How fast will I receive my Windows 11 product key?",
    a: "Your Windows 11 Professional key is delivered automatically to your email within 5–10 minutes of a successful payment.",
  },
  {
    q: "Is the Windows 11 Pro key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "Can I upgrade from Windows 10 to Windows 11 with this key?",
    a: "Yes. You can use this Windows 11 Pro key to activate a fresh install or upgrade an existing Windows 10 installation to Windows 11 Pro.",
  },
  {
    q: "What is the difference between Windows 11 Home and Pro?",
    a: "Windows 11 Pro includes all Home features plus BitLocker encryption, Remote Desktop, Azure AD Join, Hyper-V, Group Policy support, and advanced business networking.",
  },
];


function ProductPage() {
  
  const price = 13;
  const original = 50;
  const savings = Math.round(((original - price) / original) * 100);

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
          <Link to="/" className="hover:text-foreground transition">Windows</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">Windows 11 Professional Key</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start">

          {/* Image */}
          <div className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden">
            <img
              src={productImg.url}
              alt="Buy Windows 11 Professional product key for 1 PC lifetime license"
              className="w-full h-full object-contain p-4 sm:p-8"
              loading="eager"
            />
          </div>

          {/* Details */}
          <div id="buy">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Microsoft Windows · Lifetime License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Windows 11 Professional Key – 1 PC
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
              Get a genuine Microsoft Windows 11 Professional product key for 1 Windows PC. One-time
              payment, lifetime activation, instant email delivery. Enhanced security, modern interface, and pro features.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "Lifetime license. One-time payment, no subscription",
                "Activates on 1 Windows 10 or Windows 11 PC",
                "Includes BitLocker, Remote Desktop, and Group Policy",
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
              Windows 11 product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            The latest operating system from Microsoft, designed for high performance, security, and ease of use. Windows 11 Pro offers a modern interface, advanced features, and enhanced security for professionals and everyday users.
          </p>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Product Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Product Type:</strong> Digital License Key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Delivery:</strong> Send via chat (from 5 minutes to a maximum of 6 hours)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Platform:</strong> Windows PC</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Supported OS:</strong> Windows 11</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Devices:</strong> 1 PC</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Language:</strong> Multilingual</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Activation:</strong> Online activation</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Modern and user-friendly interface</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Enhanced security with BitLocker and Windows Defender</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Fast performance and improved multitasking</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Remote desktop support</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Ideal for business, work, and personal use</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Group Policy and Azure AD Join for enterprise management</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original 25-character Windows 11 Pro license key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for Windows 11</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step activation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Processor:</strong> 1 GHz or faster with 2 or more cores on a compatible 64-bit processor</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>RAM:</strong> 4 GB minimum</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Storage:</strong> 64 GB or larger storage device</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>System firmware:</strong> UEFI, Secure Boot capable</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>TPM:</strong> Trusted Platform Module (TPM) version 2.0</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Graphics:</strong> DirectX 12 compatible graphics / WDDM 2.x</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Display:</strong> 9" with HD Resolution (720p)</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Activation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Open Settings</strong><br />Go to Settings → System → Activation on your Windows PC.</p>
            <p><strong>Step 2: Enter your product key</strong><br />Click "Change product key" and enter the 25-character license key you received.</p>
            <p><strong>Step 3: Activate Windows 11 Pro</strong><br />Click "Activate" and Windows 11 Pro will be activated on your device.</p>
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
          Windows 11 Professional frequently asked questions
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
            Buy Windows 11 Professional key for just ${price}
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
