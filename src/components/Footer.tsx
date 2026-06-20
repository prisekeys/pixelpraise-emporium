import { Link } from "@tanstack/react-router";
import payStripe from "@/assets/payments/stripe.svg.asset.json";
import payPaypal from "@/assets/payments/paypal.svg.asset.json";
import payVisa from "@/assets/payments/visa.svg.asset.json";
import payMastercard from "@/assets/payments/mastercard.svg.asset.json";
import payApple from "@/assets/payments/applepay.svg.asset.json";
import logo from "@/assets/keygg-logo-v2.png.asset.json";
import microsoftCertified from "@/assets/keygg-ms-partner.png.asset.json";

export default function Footer() {
  return (
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
              <li><a href="/product/microsoft-365-family-6-users-6-tb-1-year-key" className="hover:text-foreground transition">Microsoft 365</a></li>
              <li><a href="/product/windows-11-professional-key-1-pc" className="hover:text-foreground transition">Windows 11</a></li>
              <li><a href="/product/office-2024-professional-plus-ltsc-key-1-pc" className="hover:text-foreground transition">Office 2024 for windows</a></li>
              <li><a href="/product/office-2024-home-business-for-mac-1-mac-key" className="hover:text-foreground transition">Office 2024 for mac</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/help-center" className="hover:text-foreground transition">Help Center</Link></li>
              <li><Link to="/activation-guide" className="hover:text-foreground transition">Activation Guide</Link></li>
              <li><Link to="/refund-policy" className="hover:text-foreground transition">Refund Policy</Link></li>
              <li><Link to="/support" className="hover:text-foreground transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/terms-of-service" className="hover:text-foreground transition">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-foreground transition">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-foreground transition">Cookie Policy</Link></li>
              <li><Link to="/licenses" className="hover:text-foreground transition">Licenses</Link></li>
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
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-xs text-muted-foreground mr-1">We accept:</span>
            {[
              { src: payStripe.url, alt: "Stripe" },
              { src: payPaypal.url, alt: "PayPal" },
              { src: payVisa.url, alt: "Visa" },
              { src: payMastercard.url, alt: "Mastercard" },
              { src: payApple.url, alt: "Apple Pay" },
            ].map((p) => (
              <span key={p.alt} className="inline-flex items-center justify-center h-6 px-2 rounded bg-white border border-border" title={p.alt}>
                <img src={p.src} alt={p.alt} className="h-3.5 w-auto object-contain" loading="lazy" />
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">© 2026 KeyGG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
