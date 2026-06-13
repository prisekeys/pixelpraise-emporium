import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Download, Star } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova — Premium Digital Products for Modern Creators" },
      { name: "description", content: "Templates, courses, and design assets crafted to help you ship faster and earn more. Instant download, lifetime updates." },
      { property: "og:title", content: "Nova — Premium Digital Products" },
      { property: "og:description", content: "Templates, courses, and design assets crafted to help you ship faster." },
    ],
  }),
  component: Home,
});

const products = [
  {
    img: product1,
    tag: "Notion Template",
    title: "Creator OS",
    desc: "The all-in-one Notion system to plan, ship, and grow your audience.",
    price: 49,
    original: 89,
    rating: 4.9,
    sales: "2,140",
  },
  {
    img: product2,
    tag: "Ebook Bundle",
    title: "Brand Playbook",
    desc: "120 pages of frameworks used by 7-figure indie founders to build cult brands.",
    price: 29,
    original: 59,
    rating: 4.8,
    sales: "1,580",
  },
  {
    img: product3,
    tag: "Video Course",
    title: "Ship in 30 Days",
    desc: "A practical sprint course that takes you from idea to live product in one month.",
    price: 129,
    original: 249,
    rating: 5.0,
    sales: "890",
  },
  {
    img: product4,
    tag: "Design Pack",
    title: "Aurora UI Kit",
    desc: "500+ components, icons, and mockups for designers who want to move fast.",
    price: 69,
    original: 119,
    rating: 4.9,
    sales: "3,210",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background bg-mesh">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg" style={{ background: "var(--gradient-primary)" }} />
            <span className="font-display font-bold text-lg tracking-tight">Nova</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#products" className="hover:text-foreground transition">Products</a>
            <a href="#features" className="hover:text-foreground transition">Why Nova</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </div>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-90 transition">
            Browse Store
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur text-xs text-muted-foreground mb-8">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            New drop: Aurora UI Kit 2.0 is live
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] max-w-4xl mx-auto">
            Digital products
            <br />
            that <span className="text-gradient">actually ship</span>.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hand-crafted templates, courses, and design systems built by makers who've shipped.
            No fluff. No filler. Just the assets you need to launch faster.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-primary-foreground transition hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Explore products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#features" className="px-7 py-3.5 rounded-full font-medium border border-border hover:bg-card transition">
              See how it works
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { v: "12k+", l: "Happy creators" },
              { v: "4.9★", l: "Average rating" },
              { v: "24/7", l: "Instant delivery" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-sm font-medium text-accent mb-2">Featured drops</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">This week's bestsellers</h2>
          </div>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <article key={p.title} className="glow-card glow-card-hover rounded-3xl p-6 group">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur border border-border">
                  {p.tag}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur border border-border inline-flex items-center gap-1">
                  <Star className="w-3 h-3 fill-accent text-accent" /> {p.rating}
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-2xl tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display font-bold text-2xl">${p.price}</div>
                  <div className="text-xs text-muted-foreground line-through">${p.original}</div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-muted-foreground">{p.sales} sold</div>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-90 transition">
                  <Download className="w-3.5 h-3.5" /> Get it
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { i: Zap, t: "Instant delivery", d: "Files in your inbox the second you check out. No waiting, no friction." },
            { i: ShieldCheck, t: "Lifetime updates", d: "Every product ships with free updates forever. Buy once, evolve with it." },
            { i: Sparkles, t: "Built by makers", d: "Created by founders who actually use these tools to ship their own work." },
          ].map(({ i: Icon, t, d }) => (
            <div key={t} className="glow-card rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center border border-border">
          <div className="absolute inset-0 -z-10 animate-pulse-glow" style={{ background: "var(--gradient-mesh)" }} />
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter max-w-2xl mx-auto">
            Stop researching. <span className="text-gradient">Start shipping.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Join 12,000+ creators using Nova products to launch faster and earn more from their craft.
          </p>
          <a
            href="#products"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-primary-foreground transition hover:scale-[1.02]"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            Get your first product <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md" style={{ background: "var(--gradient-primary)" }} />
            <span className="font-display font-bold text-foreground">Nova</span>
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
