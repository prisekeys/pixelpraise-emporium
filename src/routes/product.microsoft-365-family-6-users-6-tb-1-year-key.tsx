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
import productImg from "@/assets/products/Microsoft_365_Family_6_Users_6TB_1_Year_Key.png.asset.json";

const PAGE_TITLE = "Buy Microsoft 365 Family – 6 Users | 6 TB | 1-Year Key | KeyGG";
const PAGE_DESC =
  "Buy a genuine Microsoft 365 Family key for 6 users, 6 TB cloud storage, 1 year. Premium Office apps, 1 TB OneDrive per user, instant email delivery. Only $78.";
const PAGE_URL = "/product/microsoft-365-family-6-users-6-tb-1-year-key";
const WHOP_URL = "https://whop.com/checkout/plan_8yC2bC1nvRG4Y";


export const Route = createFileRoute("/product/microsoft-365-family-6-users-6-tb-1-year-key")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      {
        name: "keywords",
        content:
          "buy microsoft 365 family key, microsoft 365 family 6 users 6 tb 1 year cheap, office 365 family subscription key, cheap microsoft 365 family key online, microsoft 365 family product key, buy office 365 family key online instant delivery, microsoft 365 family activation key, microsoft 365 family 1 year subscription, office 365 family 6 users 1 tb cloud storage, microsoft 365 family license 6 users, best deal microsoft 365 family, microsoft 365 family 6 tb onedrive, m365 family key 2024",
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
              name: "Microsoft 365 Family – 6 Users | 6 TB | 1-Year Key",
              image: productImg.url,
              description:
                "Genuine Microsoft 365 Family product key for 6 users, 1 year. Includes premium Office apps, 1 TB OneDrive cloud storage per user (6 TB total), advanced security and family safety features with instant email delivery.",
              brand: { "@type": "Brand", name: "Microsoft" },
              sku: "KEYGG-M365-FAMILY-6U-1YR",
              offers: {
                "@type": "Offer",
                price: "78",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: PAGE_URL,
                priceValidUntil: "2026-12-31",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "15900",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Ethan H." },
                  datePublished: "2026-06-14",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Bought M365 Family for my household. All 6 users activated without issues. OneDrive storage is a huge bonus. Great price vs Microsoft direct.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Olivia B." },
                  datePublished: "2026-06-02",
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Key arrived in 2 minutes and worked perfectly. Sharing with family members was easy. Will renew here next year.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "James W." },
                  datePublished: "2026-05-20",
                  reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" },
                  reviewBody: "Solid deal for Microsoft 365 Family. All premium apps work great across PC, Mac and mobile. Saved over $50 compared to retail.",
                },
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "Software", item: "/" },
                { "@type": "ListItem", position: 3, name: "Subscription", item: "/" },
                { "@type": "ListItem", position: 4, name: "Microsoft 365 Family Key", item: PAGE_URL },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Where can I buy a cheap Microsoft 365 Family key?", acceptedAnswer: { "@type": "Answer", text: "You can buy a genuine Microsoft 365 Family key for 6 users / 1 year right here on KeyGG for $78 with instant email delivery." } },
                { "@type": "Question", name: "Is the Microsoft 365 Family license for 1 year?", acceptedAnswer: { "@type": "Answer", text: "Yes. This key provides 1 year of full Microsoft 365 Family subscription for up to 6 users. You can renew annually at the same low price." } },
                { "@type": "Question", name: "How fast will I receive my Microsoft 365 Family key?", acceptedAnswer: { "@type": "Answer", text: "Your Microsoft 365 Family key is delivered automatically to your email within 5–10 minutes of a successful payment." } },
                { "@type": "Question", name: "Is the Microsoft 365 Family key genuine?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers." } },
                { "@type": "Question", name: "What does Microsoft 365 Family include?", acceptedAnswer: { "@type": "Answer", text: "Microsoft 365 Family includes premium Word, Excel, PowerPoint, Outlook, Teams and OneDrive for up to 6 users, with 1 TB cloud storage per user (6 TB total), plus advanced security and family safety features." } },
                { "@type": "Question", name: "Can I share Microsoft 365 Family with my household?", acceptedAnswer: { "@type": "Answer", text: "Yes. Microsoft 365 Family covers up to 6 users in your household. Each user gets their own account with full access to all apps and 1 TB of OneDrive storage." } },
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
  { icon: ShieldCheck, label: "1-year subscription" },
];

const faqs = [
  {
    q: "Where can I buy a cheap Microsoft 365 Family key?",
    a: "You can buy a genuine Microsoft 365 Family key for 6 users / 1 year right here on KeyGG for $78, with instant email delivery.",
  },
  {
    q: "Is the Microsoft 365 Family license for 1 year?",
    a: "Yes. This key provides 1 year of full Microsoft 365 Family subscription for up to 6 users. You can renew annually at the same low price.",
  },
  {
    q: "How fast will I receive my Microsoft 365 Family key?",
    a: "Your Microsoft 365 Family key is delivered automatically to your email within 5–10 minutes of a successful payment.",
  },
  {
    q: "Is the Microsoft 365 Family key genuine?",
    a: "Yes. Every key is 100% genuine and activates directly on Microsoft's official licensing servers.",
  },
  {
    q: "What does Microsoft 365 Family include?",
    a: "Microsoft 365 Family includes premium Word, Excel, PowerPoint, Outlook, Teams and OneDrive for up to 6 users, with 1 TB cloud storage per user (6 TB total), plus advanced security and family safety features.",
  },
  {
    q: "Can I share Microsoft 365 Family with my household?",
    a: "Yes. Microsoft 365 Family covers up to 6 users in your household. Each user gets their own account with full access to all apps and 1 TB of OneDrive storage.",
  },
];

function ProductPage() {
  const price = 78;
  const original = 130;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 sm:pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-foreground transition">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link to="/" className="hover:text-foreground transition">Subscription</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-foreground font-medium">Microsoft 365 Family Key</span>
        </nav>
      </div>

      {/* Product hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start">

          {/* Image */}
          <div className="relative aspect-square rounded-2xl border border-border bg-white overflow-hidden">
            <img
              src={productImg.url}
              alt="Buy Microsoft 365 Family key for 6 users 6 TB 1 year subscription"
              className="w-full h-full object-contain p-4 sm:p-8"
              loading="eager"
            />
          </div>

          {/* Details */}
          <div id="buy">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Microsoft 365 · 1-Year Subscription
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
              Buy Microsoft 365 Family – 6 Users | 6 TB | 1-Year Key
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
              Get a genuine Microsoft 365 Family key for 6 users, 1 year. Premium Office apps,
              1 TB OneDrive cloud storage per user (6 TB total), advanced security and family safety
              features — all with instant email delivery after purchase.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                "1-year subscription for up to 6 users in your household",
                "Premium Word, Excel, PowerPoint, Outlook & Teams for all users",
                "1 TB OneDrive cloud storage per user — 6 TB total",
                "Works on PC, Mac, tablet and mobile devices",
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
              Microsoft 365 Family key emailed within minutes of purchase
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            Microsoft 365 Family is the ultimate productivity and security subscription for your
            household. Covering up to 6 users, each person gets full access to premium Office
            applications, 1 TB of secure OneDrive cloud storage, advanced identity protection, and
            family safety tools — all continuously updated with the latest features.
          </p>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Product Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Product Type:</strong> Digital License Key</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Delivery:</strong> Send via chat (from 5 minutes to a maximum of 6 hours)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Platform:</strong> Windows, macOS, iOS, Android, Web</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Users:</strong> Up to 6 users in your household</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Cloud Storage:</strong> 1 TB per user (6 TB total)</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Duration:</strong> 1 Year</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Language:</strong> Multilingual</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Activation:</strong> Online activation</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Premium apps included</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Word</strong> — Create, edit and share professional documents across devices</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Excel</strong> — Advanced spreadsheets, formulas, charts and data analysis</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>PowerPoint</strong> — Design stunning presentations with animations and transitions</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Outlook</strong> — Manage emails, calendars, contacts and tasks</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Teams</strong> — Chat, video meetings and collaboration in one app</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>OneDrive</strong> — 1 TB secure cloud storage per user for files and photos</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Key features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Always up to date with the latest Office features and security updates</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Advanced identity and data protection for all 6 users</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Family safety tools to protect children online across devices</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Real-time co-authoring and collaboration across all platforms</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Works on up to 5 devices per user simultaneously</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Ideal for families, small teams and households</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">What you will get</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Original Microsoft 365 Family license key for 6 users / 1 year</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Official activation link and instructions</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span>Step-by-step guide to add family members to your subscription</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">System Requirements</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Windows:</strong> Windows 10 or Windows 11</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>macOS:</strong> macOS 10.15 Catalina or later</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>iOS:</strong> iOS 14 or later</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Android:</strong> Android 6.0 or later</span></li>
            <li className="flex items-start gap-2"><span className="shrink-0">•</span><span><strong>Internet:</strong> Required for activation, updates and cloud features</span></li>
          </ul>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-3">Activation instructions</h3>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>Step 1: Redeem your key</strong><br />Go to microsoft.com/redeem and sign in with your Microsoft account. Enter the license key from your email.</p>
            <p><strong>Step 2: Set up your subscription</strong><br />Follow the prompts to activate Microsoft 365 Family on your account.</p>
            <p><strong>Step 3: Invite family members</strong><br />Share the subscription with up to 5 other users by sending invites from your Microsoft account dashboard. Each user gets their own account and 1 TB of OneDrive storage.</p>
          </div>

          <div className="border-t border-border my-4" />

          <h3 className="font-display font-bold text-lg sm:text-xl mb-2">Need help?</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our support team is available 24/7 to assist you with activation and adding family members.
            Contact us anytime via email or live chat.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 border-t border-border/60">
        <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight mb-6">
          Microsoft 365 Family frequently asked questions
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
            Buy Microsoft 365 Family key for just ${price}
          </h2>
          <p className="mt-3 text-sm md:text-base text-primary-foreground/85 max-w-xl mx-auto">
            Genuine Microsoft product key. 1 year for 6 users with 6 TB cloud storage. Delivered to your inbox in minutes.
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
