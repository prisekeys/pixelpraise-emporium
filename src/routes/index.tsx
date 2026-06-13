import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Star, Download, Zap, ShieldCheck, Sparkles } from "lucide-react";
import office from "@/assets/product-office.jpg";
import windows from "@/assets/product-windows.jpg";
import xbox from "@/assets/product-xbox.jpg";
import copilot from "@/assets/product-copilot.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Microsoft Store — Software, Games & AI" },
      { name: "description", content: "Genuine Microsoft software: Office 365, Windows 11, Xbox Game Pass, and Copilot. Instant digital delivery." },
      { property: "og:title", content: "Microsoft Store — Software, Games & AI" },
      { property: "og:description", content: "Genuine Microsoft software with instant digital delivery." },
    ],
  }),
  component: Home,
});

const products = [
  { img: office,   tag: "Productivity", title: "Microsoft 365 Family", desc: "Word, Excel, PowerPoint, Outlook & 1TB OneDrive for up to 6 people.", price: 99,  original: 129, rating: 4.9, sales: "12,400" },
  { img: windows,  tag: "Operating System", title: "Windows 11 Pro", desc: "Pro features, BitLocker, virtualization & business-grade security.", price: 199, original: 259, rating: 4.8, sales: "8,210" },
  { img: xbox,     tag: "Gaming", title: "Xbox Game Pass Ultimate", desc: "Hundreds of high-quality games on console, PC and cloud. Day-one releases.", price: 16,  original: 19,  rating: 5.0, sales: "23,560" },
  { img: copilot,  tag: "AI", title: "Microsoft 365 Copilot", desc: "Your AI assistant inside Word, Excel, PowerPoint, Outlook and Teams.", price: 30,  original: 40,  rating: 4.9, sales: "5,830" },
];

const heroSlides = [
  { img: office,   eyebrow: "Microsoft 365",       title: "Work better, together.",        cta: "Shop Microsoft 365",       accent: "from-emerald-400/30 to-transparent" },
  { img: windows,  eyebrow: "Windows 11",          title: "A fresh start, simply yours.",  cta: "Get Windows 11 Pro",       accent: "from-sky-300/30 to-transparent" },
  { img: xbox,     eyebrow: "Xbox Game Pass",      title: "Hundreds of games. One pass.",  cta: "Join Game Pass Ultimate",  accent: "from-lime-400/40 to-transparent" },
  { img: copilot,  eyebrow: "Microsoft Copilot",   title: "Your everyday AI companion.",   cta: "Try Copilot",              accent: "from-teal-300/30 to-transparent" },
];

function Home() {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const scrollBy = (dir: number) => sliderRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/85 border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
              <span className="bg-[#F25022]" /><span className="bg-[#7FBA00]" />
              <span className="bg-[#00A4EF]" /><span className="bg-[#FFB900]" />
            </div>
            <span className="font-display font-semibold text-base tracking-tight">Microsoft Store</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition">Software</a>
            <a href="#products" className="hover:text-foreground transition">Gaming</a>
            <a href="#products" className="hover:text-foreground transition">AI</a>
            <a href="#features" className="hover:text-foreground transition">Support</a>
          </div>
          <button className="px-4 py-2 rounded-full text-sm font-medium text-primary-foreground transition hover:opacity-90" style={{ background: "var(--gradient-primary)" }}>
            Sign in
          </button>
        </nav>
      </header>

      {/* HERO — image slider, no text bloat */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-6 pb-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card aspect-[21/9] md:aspect-[21/8]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-xl">
                  <div className="text-xs md:text-sm font-medium text-primary mb-2">{s.eyebrow}</div>
                  <h2 className="font-display font-bold text-2xl md:text-4xl tracking-tighter">{s.title}</h2>
                  <a href="#products" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}>
                    {s.cta} <ArrowRight className="w-4 h-4" />
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
            <div className="absolute bottom-5 right-6 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-1.5 bg-foreground/30"}`} />
              ))}
            </div>
          </div>

          {/* thumbnail strip */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {heroSlides.map((s, i) => (
              <button key={s.title} onClick={() => setActive(i)}
                className={`relative overflow-hidden rounded-xl border aspect-[16/9] transition ${i === active ? "border-primary ring-2 ring-primary/30" : "border-border opacity-60 hover:opacity-100"}`}>
                <img src={s.img} alt="" width={1024} height={1024} className="w-full h-full object-cover" />
                <span className="absolute bottom-1.5 left-2 text-[10px] md:text-xs font-medium text-foreground/90 bg-background/80 backdrop-blur px-1.5 py-0.5 rounded">
                  {s.eyebrow}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Marquee strip */}
        <div className="border-y border-border/60 py-3 overflow-hidden bg-secondary/40">
          <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm font-medium text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                {["⚡ Instant digital delivery", "✓ Genuine Microsoft licenses", "↻ 30-day money back", "★ Trusted by millions", "◎ 24/7 support", "✱ Secure checkout"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products slider */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-sm font-medium text-primary mb-2">Featured</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">Top Microsoft products</h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scrollBy(-1)} aria-label="Previous" className="w-11 h-11 rounded-full border border-border bg-card hover:bg-secondary transition grid place-items-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollBy(1)} aria-label="Next" className="w-11 h-11 rounded-full text-primary-foreground transition grid place-items-center hover:opacity-90" style={{ background: "var(--gradient-primary)" }}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={sliderRef} className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-4">
          {products.map((p) => (
            <article key={p.title} className="snap-start shrink-0 w-[320px] md:w-[380px] card-tilt rounded-3xl border border-border bg-card overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur border border-border">{p.tag}</div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur border border-border inline-flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary text-primary" /> {p.rating}
                </div>
                <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full text-primary-foreground grid place-items-center hover:scale-110 transition" style={{ background: "var(--gradient-primary)" }}>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-xl tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display font-bold text-xl">${p.price}</div>
                    <div className="text-xs text-muted-foreground line-through">${p.original}</div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{p.sales} sold</span>
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
                    <Download className="w-3.5 h-3.5" /> Buy now
                  </button>
                </div>
              </div>
            </article>
          ))}
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

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <span className="bg-[#F25022]" /><span className="bg-[#7FBA00]" />
              <span className="bg-[#00A4EF]" /><span className="bg-[#FFB900]" />
            </div>
            <span className="font-display font-semibold text-foreground">Microsoft Store</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
