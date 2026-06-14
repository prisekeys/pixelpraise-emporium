import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Star, Download, Zap, ShieldCheck, Sparkles, BadgeCheck, RefreshCcw, Headphones, Lock, Twitter, Facebook, Instagram, Mail, MapPin, Phone, Menu, X, CheckCircle2, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import office from "@/assets/product-office.jpg";
import windows from "@/assets/product-windows.jpg";
import xbox from "@/assets/product-xbox.jpg";
import copilot from "@/assets/product-copilot.jpg";
import logo from "@/assets/keygg-logo.png.asset.json";
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
  { img: office,   eyebrow: "Microsoft 365",       title: "Work better, together.",        cta: "Shop Microsoft 365",       accent: "from-emerald-400/30 to-transparent" },
  { img: windows,  eyebrow: "Windows 11",          title: "A fresh start, simply yours.",  cta: "Get Windows 11 Pro",       accent: "from-sky-300/30 to-transparent" },
  { img: xbox,     eyebrow: "Xbox Game Pass",      title: "Hundreds of games. One pass.",  cta: "Join Game Pass Ultimate",  accent: "from-lime-400/40 to-transparent" },
  { img: copilot,  eyebrow: "Microsoft Copilot",   title: "Your everyday AI companion.",   cta: "Try Copilot",              accent: "from-teal-300/30 to-transparent" },
];

function Home() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border/60">
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
          <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl px-4 pb-4 pt-2 space-y-1">
            <a href="#products" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition">Software</a>
            <a href="#products" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition">Gaming</a>
            <a href="#products" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition">AI</a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition">Support</a>
          </div>
        )}
      </header>

      {/* HERO — compact image slider */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-4 pb-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[16/9] md:aspect-[3/1]">
            {heroSlides.map((s, i) => (
              <div
                key={s.title}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  className="absolute inset-0 w-full h-full object-cover scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${s.accent}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-8 max-w-[85%] sm:max-w-md">
                  <div className="text-[10px] sm:text-xs font-medium text-primary mb-1">{s.eyebrow}</div>
                  <h2 className="font-display font-bold text-lg sm:text-xl md:text-3xl tracking-tighter">{s.title}</h2>
                  <a href="#products" className="mt-2 sm:mt-3 inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}>
                    {s.cta} <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            ))}

            {/* arrows */}
            <button onClick={() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous slide"
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setActive((i) => (i + 1) % heroSlides.length)} aria-label="Next slide"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur border border-border hover:scale-105 transition grid place-items-center">
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* dots */}
            <div className="absolute bottom-3 sm:bottom-5 right-4 sm:right-6 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Go to slide ${i + 1}`}
                  className={`h-1 rounded-full transition-all ${i === active ? "w-6 sm:w-8 bg-primary" : "w-1.5 bg-foreground/30"}`} />
              ))}
            </div>
          </div>

        </div>

        {/* Marquee strip */}
        <div className="border-y border-border/60 py-2.5 sm:py-3 overflow-hidden bg-secondary/40">
          <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap text-xs sm:text-sm font-medium text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-8 sm:gap-12 shrink-0 items-center">
                {[
                  { icon: Zap, text: "Instant digital delivery" },
                  { icon: BadgeCheck, text: "Genuine Microsoft licenses" },
                  { icon: RefreshCcw, text: "30-day money back" },
                  { icon: Star, text: "Trusted by millions" },
                  { icon: Headphones, text: "24/7 support" },
                  { icon: Lock, text: "Secure checkout" },
                ].map(({ icon: Icon, text }) => (
                  <span key={text} className="inline-flex items-center gap-1.5 sm:gap-2">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" /> {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid — 4 per row */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
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
            <article key={p.title} className="card-tilt rounded-2xl border border-border bg-card overflow-hidden group">
              <CardWrap {...wrapProps} className="block">
              <div className="relative aspect-square overflow-hidden bg-white">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
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
          ].map(({ i: Icon, t, d }, idx) => (
            <div key={t} className={`rounded-3xl p-8 border ${idx === 1 ? "border-transparent text-primary-foreground" : "border-border bg-card"}`} style={idx === 1 ? { background: "var(--gradient-primary)" } : {}}>
              <div className={`w-11 h-11 rounded-xl grid place-items-center mb-5 ${idx === 1 ? "bg-background/20" : ""}`} style={idx !== 1 ? { background: "var(--gradient-lime)" } : {}}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{t}</h3>
              <p className={`text-sm leading-relaxed ${idx === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{d}</p>
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

      {/* Footer */}
      <footer className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
          {/* Top section: logo + links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <img src={logo.url} alt="KeyGG" className="h-8 w-auto mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Genuine Microsoft keys, games & AI tools. Instant digital delivery, unbeatable prices.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Email" className="w-9 h-9 rounded-full bg-card border border-border grid place-items-center hover:bg-secondary transition">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
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
          </div>

          {/* Divider */}
          <div className="border-t border-border/60" />

          {/* Bottom bar: payments + copyright */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="text-xs text-muted-foreground mr-1">We accept:</span>
              {["Stripe", "PayPal", "Visa", "Mastercard", "Apple Pay"].map((name) => (
                <span key={name} className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-card border border-border text-muted-foreground uppercase tracking-wide">
                  {name}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">© 2026 KeyGG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
