import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, Zap, ShieldCheck, Star, Download } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verda — Premium Digital Products for Modern Creators" },
      { name: "description", content: "Templates, courses, and design assets built to ship. Instant download, lifetime updates." },
      { property: "og:title", content: "Verda — Premium Digital Products" },
      { property: "og:description", content: "Templates, courses, and design assets built to ship." },
    ],
  }),
  component: Home,
});

const products = [
  { img: product1, tag: "Notion Template", title: "Creator OS", desc: "All-in-one system to plan, ship, and grow.", price: 49, original: 89, rating: 4.9, sales: "2,140" },
  { img: product2, tag: "Ebook Bundle", title: "Brand Playbook", desc: "120 pages of frameworks for indie founders.", price: 29, original: 59, rating: 4.8, sales: "1,580" },
  { img: product3, tag: "Video Course", title: "Ship in 30 Days", desc: "Idea to live product in one focused month.", price: 129, original: 249, rating: 5.0, sales: "890" },
  { img: product4, tag: "Design Pack", title: "Aurora UI Kit", desc: "500+ components and mockups for speed.", price: 69, original: 119, rating: 4.9, sales: "3,210" },
];

function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    sliderRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
              <div className="w-3 h-3 rounded-sm bg-background" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">verda<span className="text-primary">.</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition">Products</a>
            <a href="#features" className="hover:text-foreground transition">Why Verda</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </div>
          <button className="px-4 py-2 rounded-full text-sm font-medium text-primary-foreground transition hover:opacity-90" style={{ background: "var(--gradient-primary)" }}>
            Browse Store
          </button>
        </nav>
      </header>

      {/* Hero — compact, epic */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 dot-grid opacity-60 -z-10" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-40 -z-10" style={{ background: "var(--gradient-lime)" }} />
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                New drop · Aurora UI Kit 2.0
              </div>
              <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95]">
                Digital products
                <br />
                that <span className="text-gradient italic">actually ship</span>.
              </h1>
              <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl">
                Hand-crafted templates, courses, and design systems by makers who've shipped. No fluff. Just the assets you need.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <a href="#products" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-primary-foreground transition hover:scale-[1.02]" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}>
                  Shop now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </a>
                <a href="#features" className="px-5 py-3 rounded-full font-medium border border-border bg-card hover:bg-secondary transition">
                  How it works
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-6 rounded-[2rem] rotate-6 animate-float" style={{ background: "var(--gradient-lime)", boxShadow: "var(--shadow-card)" }} />
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 border-background" style={{ boxShadow: "var(--shadow-card)" }}>
                  <img src={product4} alt="Featured product" width={1024} height={1024} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
                    <Star className="w-4 h-4 text-primary-foreground fill-current" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">4.9 · 12k+ creators</div>
                    <div className="text-xs text-muted-foreground">Loved worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="border-t border-border/60 py-4 overflow-hidden bg-secondary/40">
          <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm font-medium text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                {["⚡ Instant delivery", "✦ Lifetime updates", "◎ 12,000+ creators", "★ 4.9 average rating", "↻ 30-day refund", "✱ Built by makers"].map((t) => (
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
            <div className="text-sm font-medium text-primary mb-2">Featured drops</div>
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter">This week's bestsellers</h2>
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
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur border border-border">
                  {p.tag}
                </div>
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
                    <Download className="w-3.5 h-3.5" /> Get it
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { i: Zap, t: "Instant delivery", d: "Files in your inbox the second you check out. No waiting." },
            { i: ShieldCheck, t: "Lifetime updates", d: "Buy once, evolve with it. Updates are always free." },
            { i: Sparkles, t: "Built by makers", d: "Created by founders who use these tools to ship their own work." },
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center border border-border bg-card">
          <div className="absolute inset-0 dot-grid opacity-40 -z-10" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-50 -z-10" style={{ background: "var(--gradient-lime)" }} />
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tighter max-w-2xl mx-auto">
            Stop researching. <span className="text-gradient italic">Start shipping.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Join 12,000+ creators using Verda products to launch faster and earn more.
          </p>
          <a href="#products" className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground transition hover:scale-[1.02]" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}>
            Get your first product <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md" style={{ background: "var(--gradient-primary)" }} />
            <span className="font-display font-bold text-foreground">verda.</span>
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
