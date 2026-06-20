import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Download, Zap, ShieldCheck, Sparkles, BadgeCheck, RefreshCcw, Lock, MapPin, Phone, CheckCircle2, Quote, Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import office from "@/assets/product-office.jpg";
import windows from "@/assets/product-windows.jpg";
import xbox from "@/assets/product-xbox.jpg";
import copilot from "@/assets/product-copilot.jpg";
import office2019Pro from "@/assets/products/Office_2019_Professional_Plus_Key_1_PC.png.asset.json";
import win11Pro from "@/assets/products/Windows_11_Professional_Key_1_PC.png.asset.json";
import office2021Pro from "@/assets/products/Office_2021_Professional_Plus_Key_1_PC.png.asset.json";
import office2024Pro from "@/assets/products/Office_2024_Professional_Plus_Key_1_PC.png.asset.json";
import projectPro2024 from "@/assets/products/Project_Professional_2024_Key_1_PC.png.asset.json";
import visioPro2024 from "@/assets/products/Visio_Professional_2024_Key_1_PC.png.asset.json";
import office2019Mac from "@/assets/products/Office_2019_Home_Business_for_Mac_1_Mac_Key.png.asset.json";
import office2021Mac from "@/assets/products/Office_2021_Home_Business_for_Mac_1_Mac_Key.png.asset.json";
import office2024Mac from "@/assets/products/Office_2024_Home_Business_for_Mac_1_Mac_Key.png.asset.json";
import esetPremium from "@/assets/products/ESET_Smart_Security_Premium_1_Device_1_Year_Key.png.asset.json";
import m365Family from "@/assets/products/Microsoft_365_Family_6_Users_6TB_1_Year_Key.png.asset.json";
import office365Pro from "@/assets/products/Office_365_Professional_Plus_5_Devices_100GB_Cloud_1_Year.png.asset.json";
import outlook2024 from "@/assets/products/outlook-2024.webp.asset.json";
import access2024 from "@/assets/products/access-2024.webp.asset.json";
import powerpoint2024 from "@/assets/products/powerpoint-2024.webp.asset.json";
import excel2024 from "@/assets/products/excel-2024.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buy Microsoft Office & Windows 11 Pro Keys | KeyGG" },
      { name: "description", content: "Genuine Microsoft Office 2019, 2021, 2024 and Windows 11 Pro keys. Lifetime license, instant digital delivery, 24/7 support." },
      { name: "keywords", content: "microsoft office product key, windows 11 pro key, buy office 2021, office 2024 professional plus, microsoft office lifetime license, microsoft 365 family, office for mac key" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Buy Microsoft Office & Windows 11 Pro Keys | KeyGG" },
      { property: "og:description", content: "Genuine Microsoft Office and Windows 11 Pro keys. Lifetime license, instant delivery." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "KeyGG" },
      { property: "og:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "KeyGG — Genuine Software Product Keys" },
      { name: "twitter:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Buy Microsoft Office & Windows 11 Pro Keys | KeyGG" },
      { name: "twitter:description", content: "Genuine Microsoft product keys. Lifetime license. Instant delivery." },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:locale:alternate", content: "de_DE" },
      { httpEquiv: "content-language", content: "en" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "alternate", hrefLang: "en", href: "/" },
      { rel: "alternate", hrefLang: "fr", href: "/fr" },
      { rel: "alternate", hrefLang: "de", href: "/de" },
      { rel: "alternate", hrefLang: "es", href: "/es" },
      { rel: "alternate", hrefLang: "pt", href: "/pt" },
      { rel: "alternate", hrefLang: "ja", href: "/jp" },
      { rel: "alternate", hrefLang: "ru", href: "/ru" },
      { rel: "alternate", hrefLang: "zh", href: "/cn" },
      { rel: "alternate", hrefLang: "zh-CN", href: "/cn" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "x-default", href: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://keygg.com/#organization",
              name: "KeyGG",
              url: "https://keygg.com/",
              description: "Genuine Microsoft product keys at the best price with instant digital delivery.",
              sameAs: [],
            },
            {
              "@type": "WebSite",
              "@id": "https://keygg.com/#website",
              url: "https://keygg.com/",
              name: "KeyGG",
              publisher: { "@id": "https://keygg.com/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://keygg.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Store",
              name: "KeyGG",
              url: "https://keygg.com/",
              priceRange: "$13–$93",
              paymentAccepted: "Visa, Mastercard, PayPal, Apple Pay, Stripe",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "12847",
                bestRating: "5",
                worstRating: "1",
              },
            },
            {
              "@type": "ItemList",
              name: "Microsoft Product Keys",
              itemListElement: products.map((p, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                item: {
                  "@type": "Product",
                  name: p.title,
                  image: p.img,
                  description: p.desc,
                  brand: { "@type": "Brand", name: "Microsoft" },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: p.rating.toString(),
                    reviewCount: p.sales.replace(/,/g, ""),
                  },
                  offers: {
                    "@type": "Offer",
                    price: p.price.toString(),
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    itemCondition: "https://schema.org/NewCondition",
                  },
                },
              })),
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Are KeyGG Microsoft product keys genuine?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Every Microsoft Office and Windows 11 key sold on KeyGG is 100% genuine, activates directly with Microsoft servers, and comes with a lifetime license guarantee.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How fast is delivery?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your product key is emailed instantly after purchase — typically within 30 seconds — along with download and activation instructions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the license lifetime or subscription?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Office 2019, 2021, 2024 and Windows 11 Pro keys are lifetime licenses tied to one PC. Microsoft 365 Family is a 1-year subscription for 6 users.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why are your prices so much cheaper than Microsoft?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We source genuine volume and OEM licenses directly, removing retail markup. You get the exact same product Microsoft sells, at a fraction of the price.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const products = [
  { img: office2019Pro.url, tag: "Office",       title: "Office 2019 Professional Plus Key – 1 PC", desc: "Lifetime license for 1 PC. Word, Excel, PowerPoint, Outlook & more.",          price: 13, original: 45,  rating: 4.9, sales: "24,500" },
  { img: win11Pro.url,      tag: "Windows",      title: "Windows 11 Professional Key – 1 PC",       desc: "Lifetime license for 1 PC. Pro features, BitLocker & business security.",       price: 13, original: 50,  rating: 4.8, sales: "31,200" },
  { img: office2021Pro.url, tag: "Office",       title: "Office 2021 Professional Plus Key – 1 PC", desc: "Lifetime license for 1 PC. Latest Office suite with all premium apps.",        price: 15, original: 55,  rating: 4.9, sales: "18,700" },
  { img: projectPro2024.url, tag: "Business",     title: "Project Professional 2024 Key – 1 PC",     desc: "Lifetime license for 1 PC. Advanced project management & planning tools.",     price: 17, original: 120, rating: 4.8, sales: "5,400"  },
  { img: visioPro2024.url, tag: "Business",     title: "Visio Professional 2024 Key – 1 PC",       desc: "Lifetime license for 1 PC. Professional diagramming & data visualization.",   price: 17, original: 120, rating: 4.7, sales: "4,100"  },
  { img: office2024Pro.url, tag: "Office",       title: "Office 2024 Professional Plus LTSC Key – 1 PC", desc: "Lifetime license for 1 PC. Long-term service channel with latest features.", price: 20, original: 65,  rating: 4.9, sales: "9,300" },
  { img: office2019Mac.url, tag: "Mac",          title: "Office 2019 Home & Business for Mac – Key for 1 Mac", desc: "Key for 1 Mac. Word, Excel, PowerPoint & Outlook for macOS.",               price: 32, original: 120, rating: 4.8, sales: "7,800"  },
  { img: esetPremium.url,   tag: "Security",     title: "ESET Smart Security Premium – 1 Device | 1-Year Key",        desc: "1 Device | 1-Year Key. Advanced antivirus, firewall & privacy protection.",   price: 32, original: 80,  rating: 4.7, sales: "6,200"  },
  { img: office2021Mac.url, tag: "Mac",          title: "Office 2021 Home & Business for Mac – Key for 1 Mac", desc: "Key for 1 Mac. Updated Office apps with improved collaboration.",            price: 38, original: 140, rating: 4.8, sales: "5,600"  },
  { img: m365Family.url,    tag: "Subscription", title: "Microsoft 365 Family – 6 Users | 6 TB | 1-Year Key",                desc: "6 Users | 6 TB | 1-Year Key. Premium apps, 1TB cloud storage per user.",      price: 78, original: 130, rating: 4.9, sales: "15,900" },
  { img: office2024Mac.url, tag: "Mac",          title: "Office 2024 Home & Business for Mac – Key for 1 Mac", desc: "Key for 1 Mac. Latest Office suite optimized for Apple Silicon.",            price: 93, original: 180, rating: 4.9, sales: "3,400"  },
  { img: office365Pro.url,  tag: "Office",       title: "Office 365 Professional Plus – 5 Devices | 100 GB Cloud Storage | 1 Year",        desc: "5 Devices | 100 GB Cloud Storage | 1 Year. Full Office suite with cloud.",   price: 13, original: 60,  rating: 4.8, sales: "11,100" },
];

const WHOP_URL_OFFICE2019 = "https://whop.com/checkout/plan_9SCu81I3Rd5Sl";
const WHOP_URL_WIN11 = "https://whop.com/checkout/plan_oDPDDAU0cg3Lf";
const WHOP_URL_OFFICE2021 = "https://whop.com/checkout/plan_cXRmNGflpuN4c";
const WHOP_URL_PROJECT2024 = "https://whop.com/checkout/plan_E667X7ZZLRvMj";
const WHOP_URL_VISIO2024 = "https://whop.com/checkout/plan_pcZakGTskqbmb";
const WHOP_URL_OFFICE2024 = "https://whop.com/checkout/plan_FkmvpRpakB5ld";
const WHOP_URL_OFFICE2019MAC = "https://whop.com/checkout/plan_eDGTcPRB6DiyP";
const WHOP_URL_ESET = "https://whop.com/checkout/plan_rCZIOlElFaDd2";
const WHOP_URL_OFFICE2021MAC = "https://whop.com/checkout/plan_Hr9I3rbmMaIij";
const WHOP_URL_M365FAMILY = "https://whop.com/checkout/plan_8yC2bC1nvRG4Y";
const WHOP_URL_OFFICE2024MAC = "https://whop.com/checkout/plan_ohtX2pZDYAK6K";
const WHOP_URL_OFFICE365PRO = "https://whop.com/checkout/plan_GDDIytjYJffS0";
const WHOP_URL_OUTLOOK2024 = "https://whop.com/checkout/plan_hLUpquD3dwJkZ";
const WHOP_URL_ACCESS2024 = "https://whop.com/checkout/plan_RY3qEBO6CBQrM";
const WHOP_URL_POWERPOINT2024 = "https://whop.com/checkout/plan_Nse08h3qGlKcB";
const WHOP_URL_EXCEL2024 = "https://whop.com/checkout/plan_pOfQfJAk0xrAX";

const openCheckout = (url: string) => (e?: React.MouseEvent) => {
  e?.preventDefault();
  e?.stopPropagation();
  if (typeof window !== "undefined") {
    window.open(
      url,
      "keygg-checkout",
      "width=560,height=720,top=40,left=40,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no"
    );
  }
};

const heroSlides = [
  { href: "/product/windows-11-professional-key-1-pc", product: win11Pro.url,    eyebrow: "Windows 11 Pro",        title: "Genuine software.",   highlight: "Unbeatable prices.",     desc: "Lifetime license, instant email delivery, and friendly support whenever you need it.", cta: "Shop Windows 11",  price: 13, original: 50 },
  { href: "/product/office-2024-professional-plus-ltsc-key-1-pc", product: office2024Pro.url, eyebrow: "Office 2024 Pro Plus", title: "The latest Office.",  highlight: "Activated in minutes.",  desc: "Word, Excel, PowerPoint and Outlook — one key, one PC, forever.",                       cta: "Get Office 2024",  price: 20, original: 65 },
  { href: "/product/microsoft-365-family-6-users-6-tb-1-year-key", product: m365Family.url,  eyebrow: "Microsoft 365 Family",  title: "Premium apps for 6.", highlight: "6 TB cloud included.",   desc: "Share Microsoft 365 with up to six people, with 1 TB OneDrive storage each.",          cta: "Shop 365 Family",  price: 78, original: 130 },
  { href: "/product/office-2021-professional-plus", product: office2021Pro.url, eyebrow: "Office 2021 Pro Plus", title: "All the essentials.", highlight: "Fraction of the price.", desc: "Full Office suite with lifetime license and instant digital delivery.",                 cta: "Get Office 2021",  price: 15, original: 55 },
];

function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);


  return (
    <div className="min-h-screen bg-secondary/30">
      <h1 className="sr-only">
        Buy Genuine Microsoft Office &amp; Windows 11 Pro Product Keys — Lifetime License, Instant Delivery
      </h1>
      <Navbar />

      {/* HERO — slider with premium two-column slides */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 pt-3 sm:pt-4 pb-2">
          <div className="relative overflow-hidden rounded-2xl bg-transparent min-h-[440px] sm:min-h-0 sm:aspect-[16/9] md:aspect-[3/1]">
            {heroSlides.map((s, i) => (
              <div
                key={s.eyebrow}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full items-center gap-3 sm:gap-4 px-4 pt-4 pb-16 sm:px-8 sm:py-0 md:px-14">
                  {/* Left: copy */}
                  <div className="max-w-xl text-center sm:text-left order-2 sm:order-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background border border-border text-[10px] sm:text-xs font-medium text-muted-foreground mb-2 sm:mb-3">
                      <BadgeCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" /> {s.eyebrow}
                    </div>
                    <h2 className="font-display font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tighter leading-[1.1] text-foreground">
                      {s.title}{" "}
                      <span className="text-primary">{s.highlight}</span>
                    </h2>
                    <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {s.desc}
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-center justify-center sm:justify-start gap-3">
                      <a
                        href={s.href}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
                      >
                        {s.cta} <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
                    </div>
                    {/* Mobile arrows — centered under CTA */}
                    <div className="mt-3 flex sm:hidden items-center justify-center gap-2">
                      <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous slide"
                        className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button onClick={() => setPaused((p) => !p)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                        className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                      </button>
                      <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="Next slide"
                        className="w-8 h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right: layered product graphics */}
                  <div className="relative h-36 sm:h-full order-1 sm:order-2">
                    <div
                      aria-hidden
                      className="absolute top-1/2 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-30"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                    {/* main card */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] sm:h-[78%] aspect-square rounded-2xl bg-background border border-border overflow-hidden shadow-2xl">
                      <img src={s.product} alt={s.eyebrow} className="w-full h-full object-contain p-3 sm:p-5" />
                    </div>
                    {/* accent card */}
                    <div className="hidden sm:block absolute top-3 right-2 md:right-6 h-[40%] aspect-square rounded-xl bg-background border border-border overflow-hidden shadow-xl rotate-[6deg]">
                      <img
                        src={heroSlides[(i + 1) % heroSlides.length].product}
                        alt=""
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* controls: bottom right (desktop only) */}
            <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 hidden sm:flex items-center gap-2 z-10">
              <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous slide"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setPaused((p) => !p)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="Next slide"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* dots */}
            <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Go to slide ${i + 1}`}
                  className={`h-1 rounded-full transition-all ${i === active ? "w-6 sm:w-8 bg-primary" : "w-1.5 bg-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products grid — 4 per row */}
      <section id="products" className="mx-auto max-w-7xl px-6 pt-6 pb-20">
        <div className="mb-10">
          <div className="text-sm font-medium text-primary mb-2">Featured</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">Top Microsoft products</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => {
            const isOffice2019 = p.title.startsWith("Office 2019 Professional Plus");
            const isWin11 = p.title.startsWith("Windows 11 Professional");
            const isOffice2021 = p.title.startsWith("Office 2021 Professional Plus");
            const isProject2024 = p.title.startsWith("Project Professional 2024");
            const isVisio2024 = p.title.startsWith("Visio Professional 2024");
            const isOffice2024 = p.title.startsWith("Office 2024 Professional Plus LTSC");
            const isOffice2019Mac = p.title.startsWith("Office 2019 Home & Business for Mac");
            const isESET = p.title.startsWith("ESET Smart Security Premium");
            const isOffice2021Mac = p.title.startsWith("Office 2021 Home & Business for Mac");
            const isM365Family = p.title.startsWith("Microsoft 365 Family");
            const isOffice2024Mac = p.title.startsWith("Office 2024 Home & Business for Mac");
            const isOffice365Pro = p.title.startsWith("Office 365 Professional Plus");
            const hasRoute = isOffice2019 || isWin11 || isOffice2021 || isProject2024 || isVisio2024 || isOffice2024 || isOffice2019Mac || isESET || isOffice2021Mac || isM365Family || isOffice2024Mac || isOffice365Pro;
            const CardWrap: any = hasRoute ? Link : "div";
            const wrapProps: any = isOffice2019
              ? { to: "/product/office-2019-professional-plus" }
              : isWin11
              ? { to: "/product/windows-11-professional-key-1-pc" }
              : isOffice2021
              ? { to: "/product/office-2021-professional-plus" }
              : isProject2024
              ? { to: "/product/project-professional-2024-key-1-pc" }
              : isVisio2024
              ? { to: "/product/visio-professional-2024-key-1-pc" }
              : isOffice2024
              ? { to: "/product/office-2024-professional-plus-ltsc-key-1-pc" }
              : isOffice2019Mac
              ? { to: "/product/office-2019-home-business-for-mac-1-mac-key" }
              : isESET
              ? { to: "/product/eset-smart-security-premium-1-device-1-year-key" }
              : isOffice2021Mac
              ? { to: "/product/office-2021-home-business-for-mac-1-mac-key" }
              : isM365Family
              ? { to: "/product/microsoft-365-family-6-users-6-tb-1-year-key" }
              : isOffice2024Mac
              ? { to: "/product/office-2024-home-business-for-mac-1-mac-key" }
              : isOffice365Pro
              ? { to: "/product/office-365-professional-plus-5-devices-100gb-1-year-key" }
              : {};

            return (
            <article key={p.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <CardWrap {...wrapProps} className="block">
              <div className="relative aspect-square overflow-hidden bg-white">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-contain" />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-display font-bold text-sm md:text-base tracking-tight leading-snug">{p.title}</h3>
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-base md:text-lg">${p.price}</span>
                    <span className="text-xs text-muted-foreground line-through">${p.original}</span>
                  </div>
                  <button
                    type="button"
                    onClick={
                      isOffice2019
                        ? openCheckout(WHOP_URL_OFFICE2019)
                        : isWin11
                        ? openCheckout(WHOP_URL_WIN11)
                        : isOffice2021
                        ? openCheckout(WHOP_URL_OFFICE2021)
                        : isProject2024
                        ? openCheckout(WHOP_URL_PROJECT2024)
                        : isVisio2024
                        ? openCheckout(WHOP_URL_VISIO2024)
                        : isOffice2024
                        ? openCheckout(WHOP_URL_OFFICE2024)
                        : isOffice2019Mac
                        ? openCheckout(WHOP_URL_OFFICE2019MAC)
                        : isESET
                        ? openCheckout(WHOP_URL_ESET)
                        : isOffice2021Mac
                        ? openCheckout(WHOP_URL_OFFICE2021MAC)
                        : isM365Family
                        ? openCheckout(WHOP_URL_M365FAMILY)
                        : isOffice2024Mac
                        ? openCheckout(WHOP_URL_OFFICE2024MAC)
                        : isOffice365Pro
                        ? openCheckout(WHOP_URL_OFFICE365PRO)
                        : undefined
                    }
                    className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-primary-foreground transition hover:opacity-90 ${isOffice2019 || isWin11 || isOffice2021 || isProject2024 || isVisio2024 || isOffice2024 || isOffice2019Mac || isESET || isOffice2021Mac || isM365Family || isOffice2024Mac || isOffice365Pro ? "cursor-pointer" : ""}`}
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Download className="w-3 h-3" /> Buy now
                  </button>
                </div>
              </div>
              </CardWrap>
            </article>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Zap, t: "Instant delivery", d: "Activation keys & download links emailed the moment you check out." },
            { i: ShieldCheck, t: "Genuine licenses", d: "100% authentic Microsoft licenses, fully eligible for updates and support." },
            { i: Sparkles, t: "Best price guaranteed", d: "Found it cheaper elsewhere? We'll match it within 7 days, no questions." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="rounded-3xl p-8 border border-border bg-card">
              <div className="w-11 h-11 rounded-xl grid place-items-center mb-5" style={{ background: "var(--gradient-lime)" }}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews — Trustpilot style */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/30 mb-4">
            <CheckCircle2 className="w-4 h-4 text-primary dark:text-primary/80" />
            <span className="text-sm font-medium text-primary dark:text-primary/70">Verified Reviews</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter mb-3">What our customers say</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className={`w-6 h-6 ${s <= 4 ? "fill-primary text-primary" : "fill-none text-muted-foreground/50"}`} strokeWidth={s <= 4 ? 0 : 1.5} />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">out of 5 • 12,847 reviews</span>
          </div>
          <p className="text-primary dark:text-primary/80 font-semibold text-lg mt-1">Excellent</p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[
              { name: "Olivia Bennett", date: "2 days ago", rating: 5, title: "Instant delivery, genuine key", body: "Ordered Office 2019 and received the key within 2 minutes. Activated on first try. Will definitely buy again!", verified: true, country: "US" },
              { name: "Ethan Holloway", date: "1 week ago", rating: 5, title: "Best price I could find", body: "Saved over $100 compared to Microsoft direct. The key worked perfectly and the download link was provided immediately.", verified: true, country: "UK" },
              { name: "Luca Ferraro", date: "3 days ago", rating: 5, title: "Great customer support", body: "Had a small issue with activation. Contacted support and they resolved it within 15 minutes. Highly recommended!", verified: true, country: "IT" },
              { name: "Hannah Schneider", date: "5 days ago", rating: 4, title: "Fast and reliable", body: "Windows 11 Pro key arrived instantly. Everything works as expected. Only wish they had more payment options.", verified: true, country: "DE" },
              { name: "Noah Patterson", date: "2 weeks ago", rating: 5, title: "Third purchase, always perfect", body: "Bought Office 2021, then M365 Family, now Visio 2024. Every single key has been genuine and worked flawlessly.", verified: true, country: "CA" },
              { name: "Ren Tanaka", date: "4 days ago", rating: 5, title: "Mac Office works great", body: "Got Office 2021 for Mac. Easy install, all apps working perfectly. The instructions were clear and helpful.", verified: true, country: "JP" },
              { name: "Gustav Lindqvist", date: "1 week ago", rating: 5, title: "Business licenses done right", body: "Purchased 10 Project Pro 2024 keys for our team. Bulk discount was great and all keys activated without issues.", verified: true, country: "SE" },
              { name: "Chloe Armstrong", date: "3 days ago", rating: 4, title: "Solid experience overall", body: "ESET license activated right away. Price was competitive and delivery was instant. Very satisfied with the service.", verified: true, country: "AU" },
              { name: "Mason Brooks", date: "6 days ago", rating: 3, title: "Key worked, instructions lacking", body: "The Office key was genuine and activated fine, but the setup guide could've been clearer. Had to Google a couple steps.", verified: true, country: "US" },
              { name: "Aarav Sharma", date: "1 week ago", rating: 3, title: "Good product, slow email", body: "Software is legit and works well, but I waited almost 15 minutes for the delivery email. Support was helpful when I asked.", verified: true, country: "IN" },
              { name: "Omar Fayed", date: "4 days ago", rating: 4, title: "Happy but one hiccup", body: "First key didn't work, but they sent a replacement within an hour. Second one activated perfectly. Decent service.", verified: true, country: "EG" },
            ].map((r, i) => (
              <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                <div className="rounded-xl border border-border bg-card p-5 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className={`w-4 h-4 ${s <= r.rating ? "fill-primary text-primary" : "fill-none text-muted-foreground/50"}`} strokeWidth={s <= r.rating ? 0 : 1.5} />
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{r.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.body}</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center text-primary dark:text-primary/80 text-xs font-bold">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-medium">{r.name}</p>
                        <p className="text-[10px] text-muted-foreground">{r.date}</p>
                      </div>
                    </div>
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-primary dark:text-primary/80">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </section>

      {/* Individual Office 2024 Apps */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10">
          <div className="text-sm font-medium text-primary mb-2">Office 2024</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">Individual apps</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Outlook 2024 Product Key – 1 PC", img: outlook2024.url, to: "/product/outlook-2024-product-key-1-pc", whop: WHOP_URL_OUTLOOK2024 },
            { title: "Access 2024 Product Key – 1 PC", img: access2024.url, to: "/product/access-2024-product-key-1-pc", whop: WHOP_URL_ACCESS2024 },
            { title: "PowerPoint 2024 Product Key – 1 PC", img: powerpoint2024.url, to: "/product/powerpoint-2024-product-key-1-pc", whop: WHOP_URL_POWERPOINT2024 },
            { title: "Excel 2024 Product Key – 1 PC", img: excel2024.url, to: "/product/excel-2024-product-key-1-pc", whop: WHOP_URL_EXCEL2024 },
          ].map((p) => {
            const Wrap = p.to ? Link : "div";
            const wrapProps = p.to ? { to: p.to } : {};
            return (
            <article key={p.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <Wrap {...wrapProps} className="block">
              <div className="relative aspect-square overflow-hidden bg-white">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-contain" />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-display font-bold text-sm md:text-base tracking-tight leading-snug">{p.title}</h3>
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-base md:text-lg">$18</span>
                    <span className="text-xs text-muted-foreground line-through">$65</span>
                  </div>
                  <button type="button" onClick={openCheckout(p.whop)} className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-primary-foreground transition hover:opacity-90 cursor-pointer" style={{ background: "var(--gradient-primary)" }}>
                    <Download className="w-3 h-3" /> Buy now
                  </button>
                </div>
              </div>
              </Wrap>
            </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
