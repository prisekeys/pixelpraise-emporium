import { Link } from "@tanstack/react-router";
import { Search, Headphones } from "lucide-react";
import logo from "@/assets/keygg-logo-v2.png.asset.json";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-secondary/30">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 justify-start md:pl-2">
          <img src={logo.url} alt="KeyGG" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Search — desktop only */}
        <div className="hidden md:flex justify-center w-full max-w-md mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <label htmlFor="site-search" className="sr-only">Search products</label>
            <input
              id="site-search"
              type="text"
              placeholder="Search products..."
              aria-label="Search products"
              className="w-full pl-9 pr-4 py-2 rounded-full bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
          </div>
        </div>

        {/* Support button */}
        <button aria-label="Support" className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-primary-foreground transition hover:opacity-90 inline-flex items-center gap-1.5 justify-self-end shrink-0" style={{ background: "var(--gradient-primary)" }}>
          <Headphones className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" /> <span className="hidden sm:inline">Support</span>
        </button>
      </nav>
    </header>
  );
}
