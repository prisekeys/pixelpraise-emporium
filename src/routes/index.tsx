import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Download, Zap, ShieldCheck, Sparkles, BadgeCheck, RefreshCcw, Headphones, Lock, MapPin, Phone, Menu, X, CheckCircle2, Quote, Pause, Play } from "lucide-react";
import { SiStripe, SiPaypal, SiVisa, SiMastercard, SiApple } from "react-icons/si";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import office from "@/assets/product-office.jpg";
import windows from "@/assets/product-windows.jpg";
import xbox from "@/assets/product-xbox.jpg";
import copilot from "@/assets/product-copilot.jpg";
import logo from "@/assets/keygg-logo-v2.png.asset.json";
import microsoftCertified from "@/assets/keygg-ms-partner.png.asset.json";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KeyGG — Genuine Microsoft Keys, Games & AI" },
      { name: "description", content: "KeyGG: Office 365, Windows 11, Xbox Game Pass and Copilot at the best prices. Instant digital delivery." },
      { property: "og:title", content: "KeyGG — Genuine Microsoft Keys" },
      { property: "og:description", content: "Office 365, Windows 11, Xbox Game Pass and Copilot. Instant digital delivery." },
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

const heroSlides = [
  { product: win11Pro.url,    eyebrow: "Windows 11 Pro",        title: "Genuine software.",   highlight: "Unbeatable prices.",     desc: "Lifetime license, instant email delivery, and friendly support whenever you need it.", cta: "Shop Windows 11",  price: 13, original: 50 },
  { product: office2024Pro.url, eyebrow: "Office 2024 Pro Plus", title: "The latest Office.",  highlight: "Activated in minutes.",  desc: "Word, Excel, PowerPoint and Outlook — one key, one PC, forever.",                       cta: "Get Office 2024",  price: 20, original: 65 },
  { product: m365Family.url,  eyebrow: "Microsoft 365 Family",  title: "Premium apps for 6.", highlight: "6 TB cloud included.",   desc: "Share Microsoft 365 with up to six people, with 1 TB OneDrive storage each.",          cta: "Shop 365 Family",  price: 78, original: 130 },
  { product: office2021Pro.url, eyebrow: "Office 2021 Pro Plus", title: "All the essentials.", highlight: "Fraction of the price.", desc: "Full Office suite with lifetime license and instant digital delivery.",                 cta: "Get Office 2021",  price: 15, original: 55 },
];

function Home() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);


  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-secondary/30">
        <nav className="mx-auto max-w-7xl px-4 md:px-6 h-16 grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center gap-3">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border bg-card hover:bg-secondary transition"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground justify-start">
            <a href="#products" className="hover:text-foreground transition">Software</a>
            <a href="#products" className="hover:text-foreground transition">Gaming</a>
            <a href="#products" className="hover:text-foreground transition">AI</a>
            <a href="#features" className="hover:text-foreground transition">Support</a>
          </div>

          {/* Logo - centered on both mobile and desktop */}
          <a href="/" className="flex items-center gap-2.5 justify-center">
            <img src={logo.url} alt="KeyGG" className="h-8 md:h-10 w-auto" />
          </a>

          {/* Support button */}
          <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-primary-foreground transition hover:opacity-90 inline-flex items-center gap-1.5 justify-self-end" style={{ background: "var(--gradient-primary)" }}>
            <Headphones className="w-3.5 h-3.5 md:w-4 md:h-4" /> <span className="hidden sm:inline">Support</span>
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/60 bg-secondary/30 backdrop-blur-xl px-4 pb-4 pt-2 space-y-1">
            <a href="#products" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition">Software</a>
            <a href="#products" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition">Gaming</a>
            <a href="#products" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition">AI</a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition">Support</a>
          </div>
        )}
      </header>

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
                        href="#products"
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
                      >
                        {s.cta} <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </a>
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

            {/* controls: bottom right */}
            <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 flex items-center gap-2 z-10">
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
            const CardWrap: any = isOffice2019 ? Link : "div";
            const wrapProps: any = isOffice2019 ? { to: "/product/office-2019-professional-plus" } : {};
            return (
            <article key={p.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <CardWrap {...wrapProps} className="block">
              <div className="relative aspect-square overflow-hidden bg-white">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-contain" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-background/90 backdrop-blur border border-border">{p.tag}</div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-display font-bold text-sm md:text-base tracking-tight leading-snug">{p.title}</h3>
                <div className="mt-1.5 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(p.rating) ? "fill-yellow-400 text-yellow-400" : "fill-none text-muted-foreground/20"}`} strokeWidth={2.5} />
                  ))}
                  <span className="ml-1 text-[11px] font-medium text-muted-foreground">{p.rating}</span>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-base md:text-lg">${p.price}</span>
                    <span className="text-xs text-muted-foreground line-through">${p.original}</span>
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-primary-foreground transition hover:opacity-90" style={{ background: "var(--gradient-primary)" }}>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Verified Reviews</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter mb-3">What our customers say</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-6 h-6 fill-emerald-500 text-emerald-500" strokeWidth={0} />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <span className="text-sm text-muted-foreground">out of 5 • 12,847 reviews</span>
          </div>
          <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mt-1">Excellent</p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[
              { name: "Sarah M.", date: "2 days ago", rating: 5, title: "Instant delivery, genuine key", body: "Ordered Office 2019 and received the key within 2 minutes. Activated on first try. Will definitely buy again!", verified: true, country: "US" },
              { name: "James K.", date: "1 week ago", rating: 5, title: "Best price I could find", body: "Saved over $100 compared to Microsoft direct. The key worked perfectly and the download link was provided immediately.", verified: true, country: "UK" },
              { name: "Marco R.", date: "3 days ago", rating: 5, title: "Great customer support", body: "Had a small issue with activation. Contacted support and they resolved it within 15 minutes. Highly recommended!", verified: true, country: "IT" },
              { name: "Anna L.", date: "5 days ago", rating: 4, title: "Fast and reliable", body: "Windows 11 Pro key arrived instantly. Everything works as expected. Only wish they had more payment options.", verified: true, country: "DE" },
              { name: "David W.", date: "2 weeks ago", rating: 5, title: "Third purchase, always perfect", body: "Bought Office 2021, then M365 Family, now Visio 2024. Every single key has been genuine and worked flawlessly.", verified: true, country: "CA" },
              { name: "Yuki T.", date: "4 days ago", rating: 5, title: "Mac Office works great", body: "Got Office 2021 for Mac. Easy install, all apps working perfectly. The instructions were clear and helpful.", verified: true, country: "JP" },
              { name: "Lars P.", date: "1 week ago", rating: 5, title: "Business licenses done right", body: "Purchased 10 Project Pro 2024 keys for our team. Bulk discount was great and all keys activated without issues.", verified: true, country: "SE" },
              { name: "Emily S.", date: "3 days ago", rating: 4, title: "Solid experience overall", body: "ESET license activated right away. Price was competitive and delivery was instant. Very satisfied with the service.", verified: true, country: "AU" },
            ].map((r, i) => (
              <CarouselItem key={i} className="pl-4 sm:basis-1/2 lg:basis-1/4">
                <div className="rounded-xl border border-border bg-card p-5 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className={`w-4 h-4 ${s <= r.rating ? "fill-emerald-500 text-emerald-500" : "fill-none text-muted-foreground/20"}`} strokeWidth={0} />
                    ))}
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{r.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.body}</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-medium">{r.name}</p>
                        <p className="text-[10px] text-muted-foreground">{r.date}</p>
                      </div>
                    </div>
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
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
            { title: "Outlook 2024 Product Key – 1 PC", img: office2024Pro.url },
            { title: "Access 2024 Product Key – 1 PC", img: office2024Pro.url },
            { title: "PowerPoint 2024 Product Key – 1 PC", img: office2024Pro.url },
            { title: "Excel 2024 Product Key – 1 PC", img: office2024Pro.url },
          ].map((p) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-white">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-contain" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-background/90 backdrop-blur border border-border">Office</div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-display font-bold text-sm md:text-base tracking-tight leading-snug">{p.title}</h3>
                <div className="mt-1.5 flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-none text-muted-foreground/20"}`} strokeWidth={2.5} />
                  ))}
                  <span className="ml-1 text-[11px] font-medium text-muted-foreground">4.9</span>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-bold text-base md:text-lg">$18</span>
                    <span className="text-xs text-muted-foreground line-through">$65</span>
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-primary-foreground transition hover:opacity-90" style={{ background: "var(--gradient-primary)" }}>
                    <Download className="w-3 h-3" /> Buy now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
          {/* Top section: logo + links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <img src={logo.url} alt="KeyGG" className="h-8 w-auto mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Genuine Microsoft keys, games & AI tools. Instant digital delivery, unbeatable prices.
              </p>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm mb-4">Products</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Microsoft 365</a></li>
                <li><a href="#" className="hover:text-foreground transition">Windows 11</a></li>
                <li><a href="#" className="hover:text-foreground transition">Xbox Game Pass</a></li>
                <li><a href="#" className="hover:text-foreground transition">Microsoft Copilot</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm mb-4">Support</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition">Activation Guide</a></li>
                <li><a href="#" className="hover:text-foreground transition">Refund Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm mb-4">Legal</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Licenses</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm mb-4">Partners</h4>
              <img src={microsoftCertified.url} alt="Microsoft Certified" className="h-12 w-auto" />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/60" />

          {/* Bottom bar: payments + copyright */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-xs text-muted-foreground mr-1">We accept:</span>
              <span className="px-2 py-1.5 rounded-md bg-card border border-border" title="Stripe"><SiStripe className="w-5 h-5 text-muted-foreground" /></span>
              <span className="px-2 py-1.5 rounded-md bg-card border border-border" title="PayPal"><SiPaypal className="w-5 h-5 text-muted-foreground" /></span>
              <span className="px-2 py-1.5 rounded-md bg-card border border-border" title="Visa"><SiVisa className="w-5 h-5 text-muted-foreground" /></span>
              <span className="px-2 py-1.5 rounded-md bg-card border border-border" title="Mastercard"><SiMastercard className="w-5 h-5 text-muted-foreground" /></span>
              <span className="px-2 py-1.5 rounded-md bg-card border border-border" title="Apple Pay"><SiApple className="w-5 h-5 text-muted-foreground" /></span>
            </div>
            <p className="text-xs text-muted-foreground">© 2026 KeyGG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
