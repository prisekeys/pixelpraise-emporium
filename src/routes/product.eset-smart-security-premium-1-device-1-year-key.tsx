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
import productImg from "@/assets/products/ESET_Smart_Security_Premium_1_Device_1_Year_Key.png.asset.json";
import trustBanner from "@/assets/trust-payment-banner.svg.asset.json";

const PAGE_TITLE = "Buy ESET Smart Security Premium – 1 Device | 1-Year Key | KeyGG";
const PAGE_DESC =
  "Buy a genuine ESET Smart Security Premium key for 1 Device | 1 Year. Advanced antivirus, firewall, ransomware shield & privacy protection. Quick email delivery. Only $32.";
const PAGE_URL = "/product/eset-smart-security-premium-1-device-1-year-key";
const WHOP_URL = "https://whop.com/checkout/plan_rCZIOlElFaDd2";


export const Route = createFileRoute("/product/eset-smart-security-premium-1-device-1-year-key")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy eset smart security premium key, eset smart security premium 1 device 1 year cheap, eset antivirus key 1 device 1 year, cheap eset smart security premium key online, eset smart security premium product key, buy eset antivirus key online instant delivery, eset smart security premium activation key, eset smart security premium digital license, eset internet security key 1 year, eset total protection key, best antivirus key cheap, eset smart security premium license 1 device, eset premium antivirus 1 year key",
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
              name: "ESET Smart Security Premium – 1 Device | 1-Year Key",
              image: productImg.url,
              description:
                "Genuine ESET Smart Security Premium product key for 1 device, 1 year. Advanced antivirus, firewall, ransomware shield, password manager and privacy protection with quick email delivery.",
              brand: { "@type": "Brand", name: "ESET" },
              sku: "KEYGG-ESET-SSP-1DEV-1YR",
              offers: {
                "@type": "Offer",
                price: "32",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: PAGE_URL,
                priceValidUntil: "2026-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "6200",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Chloe A." },
                  datePublished: "2026-06-08",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "ESET license activated right away. Price was competitive and delivery was instant. Very satisfied with the protection it offers.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "David K." },
                  datePublished: "2026-05-22",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Best antivirus I've used. Light on system resources and the key arrived within minutes. Will renew through KeyGG again.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Rachel P." },
                  datePublished: "2026-05-05",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Great antivirus protection at a much better price than buying directly from ESET. Easy to install and activate.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Security", item: "/" },
                { "@type": "ListItem", position: 4, name: "ESET Smart Security Premium Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap ESET Smart Security Premium key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine ESET Smart Security Premium key for 1 device / 1 year right here on KeyGG for $32 with quick email delivery." } },
                { "@type": "Question", name: "Is the ESET Smart Security Premium license for 1 year?", acceptedAnswer: { "@type": "Answer", text: "Yes. This key provides 1 year of full ESET Smart Security Premium protection for 1 device. You can renew annually at the same low price." } },
                { "@type": "Question", name: "How fast will I receive my ESET product key?", acceptedAnswer: { "@type": "Answer", text: "Your ESET Smart Security Premium key is delivered automatically to your email fast after a successful payment." } },
                { "@type": "Question", name: "Is the ESET key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on ESET's official licensing servers." } },
                { "@type": "Question", name: "What does ESET Smart Security Premium include?", acceptedAnswer: { "@type": "Answer", text: "ESET Smart Security Premium includes advanced antivirus, firewall, anti-phishing, ransomware shield, password manager, secure browser banking protection, and privacy tools for 1 device." } },
                { "@type": "Question", name: "Does ESET Smart Security Premium work on Windows, Mac and Android?", acceptedAnswer: { "@type": "Answer", text: "Yes. This 1-device license can be used on one Windows PC, one Mac, or one Android device. ESET Smart Security Premium is compatible with Windows 10/11, macOS and Android." } },
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
  { icon: BadgeCheck, label: "Genuine ESET key" },
  { icon: Lock, label: "Secure SSL checkout" },
  { icon: RefreshCcw, label: "30-day money back" },
  { icon: Headphones, label: "24/7 customer support" },
  { icon: ShieldCheck, label: "1-year protection" },
];

const faqs = [
  {
    q: "Where can I buy a cheap ESET Smart Security Premium key?",
    a: "You can buy a genuine ESET Smart Security Premium key for 1 device / 1 year right here on KeyGG for $32, with quick email delivery.",
  },
  {
    q: "Is the ESET Smart Security Premium license for 1 year?",
    a: "Yes. This key provides 1 year of full ESET Smart Security Premium protection for 1 device. You can renew annually at the same low price.",
  },
  {
    q: "How fast will I receive my ESET product key?",
    a: "Your ESET Smart Security Premium key is delivered automatically to your email fast after a successful payment.",
  },
  {
    q: "Is the ESET key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on ESET's official licensing servers.",
  },
  {
    q: "What does ESET Smart Security Premium include?",
    a: "ESET Smart Security Premium includes advanced antivirus, firewall, anti-phishing, ransomware shield, password manager, secure browser banking protection, and privacy tools for 1 device.",
  },
  {
    q: "Does ESET Smart Security Premium work on Windows, Mac and Android?",
    a: "Yes. This 1-device license can be used on one Windows PC, one Mac, or one Android device. ESET Smart Security Premium is compatible with Windows 10/11, macOS and Android.",
  },
];

function ProductPage() {
  const price = 32;
  const original = 80;

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
          <Link to="/" className="hover:text-foreground transition">Security</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">ESET Smart Security Premium Key</span>
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
              alt="Buy ESET Smart Security Premium key for 1 device 1 year"
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
              ESET · 1 Device | 1 Year License
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy ESET Smart Security Premium – 1 Device | 1-Year Key
            </h1>

            <a
              href="#"
              className="mt-3 inline-flex items-center gap-3 group underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition"
            >
              <div className="flex items-center gap-0.5" aria-label="Rated 4.7 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 text-yellow-400 ${i === 4 ? "fill-yellow-400/80" : "fill-yellow-400"}`}
                    strokeWidth={2}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.7</span>
              <span className="text-sm text-muted-foreground">· 780+ Sold</span>
            </a>

            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              Get a genuine ESET Smart Security Premium key for 1 device, 1 year. Advanced antivirus,
              firewall, ransomware shield, password manager and privacy protection — all in one lightweight
              security suite. Quick email delivery after purchase.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "1-year license for 1 device (Windows, Mac or Android)",
                "Advanced antivirus with real-time threat detection",
                "Firewall, anti-phishing & ransomware shield",
                "Built-in password manager & secure browser banking",
                "Genuine key. Activates on ESET's official servers",
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
              ESET product key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            ESET Smart Security Premium is the top-tier security suite from ESET, offering complete
            protection for your digital life. It combines award-winning antivirus technology with
            advanced privacy features, a powerful firewall, and a built-in password manager — all while
            staying remarkably light on system resources.
          </p>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Product Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Product Type:</strong> Digital License Key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Delivery:</strong> Send via chat (from 5 minutes to a maximum of 6 hours)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Platform:</strong> Windows, macOS, Android</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Supported OS:</strong> Windows 10/11, macOS 10.15+, Android 6.0+</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Devices:</strong> 1 Device</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Duration:</strong> 1 Year</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Language:</strong> Multilingual</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Activation:</strong> Online activation</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Advanced antivirus & anti-spyware with real-time protection</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Powerful firewall to monitor and protect network traffic</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Ransomware shield to protect your personal files and photos</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Anti-phishing protection against fraudulent websites</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Secure Browser for safe online banking and shopping</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Built-in Password Manager to store and encrypt credentials</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Webcam protection to block unauthorized access</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Lightweight design that won't slow down your computer</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original ESET Smart Security Premium license key for 1 device / 1 year</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official download link for ESET installer</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step activation instructions</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Windows:</strong> Windows 10, Windows 11 (32-bit and 64-bit)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>macOS:</strong> macOS 10.15 (Catalina) or later</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Android:</strong> Android 6.0 or later</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>RAM:</strong> 1 GB minimum (2 GB recommended)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Storage:</strong> 1.5 GB available disk space</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Internet:</strong> Required for activation and updates</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Activation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Download ESET Smart Security Premium</strong><br />Use the official ESET download link included in your email.</p>
            <p><strong>Step 2: Install the software</strong><br />Run the installer and follow the on-screen setup wizard.</p>
            <p><strong>Step 3: Enter your license key</strong><br />When prompted, paste your license key to activate 1 year of full ESET Smart Security Premium protection.</p>
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
          ESET Smart Security Premium frequently asked questions
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
            Buy ESET Smart Security Premium for just ${price}
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/85 max-w-xl mx-auto">
            Genuine ESET product key. 1 year of premium protection for 1 device. Delivered to your inbox in minutes.
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
