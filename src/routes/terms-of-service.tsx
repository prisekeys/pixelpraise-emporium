import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | KeyGG" },
      { name: "description", content: "Read KeyGG's Terms of Service. Learn about our conditions of use, purchase agreements, licensing, refunds, and user responsibilities." },
      { name: "keywords", content: "KeyGG terms of service, software license terms, digital product terms, microsoft key purchase terms" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Terms of Service | KeyGG" },
      { property: "og:description", content: "KeyGG Terms of Service — conditions of use, licensing, refunds, and user responsibilities." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms-of-service" },
      { property: "og:site_name", content: "KeyGG" },
      { property: "og:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "KeyGG — Genuine Software Product Keys" },
      { name: "twitter:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Terms of Service | KeyGG" },
      { name: "twitter:description", content: "KeyGG Terms of Service — conditions of use, licensing, refunds, and user responsibilities." },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Terms of Service</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: June 18, 2026
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service (“Terms”) govern your access to and use of KeyGG’s website, products, and services. By placing an order or using our platform, you agree to be bound by these Terms. If you do not agree, please do not use our services.
          </p>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">1. About KeyGG</h2>
            <p className="text-muted-foreground leading-relaxed">
              KeyGG is an independent digital software reseller. We sell genuine Microsoft product keys, game codes, and digital tools. We are not affiliated with, endorsed by, or sponsored by Microsoft Corporation or its subsidiaries. All trademarks, logos, and brand names are the property of their respective owners.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years old or of legal age in your jurisdiction to purchase from KeyGG. By placing an order, you represent that you have the legal capacity to enter into a binding contract.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">3. Product Descriptions & Digital Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              All products listed on KeyGG are digital goods. Product descriptions, system requirements, and compatibility details are provided for informational purposes. We make every effort to ensure accuracy, but we do not warrant that product descriptions are complete, current, or error-free.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Upon successful payment, product keys and download instructions are delivered digitally to the email address you provide during checkout. Delivery is typically instant, but may take up to 24 hours in rare cases.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">4. License & Usage</h2>
            <p className="text-muted-foreground leading-relaxed">
              Product keys sold by KeyGG activate genuine Microsoft software. The license terms are governed by Microsoft’s End User License Agreement (EULA). KeyGG does not grant any software license — the key enables activation under the publisher’s existing terms. You agree to use all products in compliance with applicable laws and the publisher’s licensing terms.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">5. Pricing & Payment</h2>
            <p className="text-muted-foreground leading-relaxed">
              All prices are displayed in USD unless otherwise stated. Prices are subject to change without notice. We accept payments via Stripe, PayPal, Visa, Mastercard, and Apple Pay. By submitting payment, you authorize us to charge your selected payment method for the total order amount.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">6. Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Due to the nature of digital products, all sales are generally final once a product key has been delivered or revealed. Refunds may be granted at our sole discretion if:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li>The key has not been used, viewed, or redeemed.</li>
              <li>The key is defective or non-functional, and our support team cannot resolve the issue within 7 days.</li>
              <li>You accidentally purchased the wrong product and contact us within 24 hours of delivery.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Chargebacks initiated without first contacting our support team may result in permanent account suspension and key revocation.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">7. Account & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials. KeyGG is not liable for any loss or damage arising from your failure to protect your account information.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, KeyGG shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our products or services. Our total liability shall not exceed the amount you paid for the specific product giving rise to the claim.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict-of-law principles. Any disputes shall be resolved through binding arbitration or in the courts located in the State of Delaware.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">10. Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Continued use of our services after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:support@keygg.io" className="text-primary hover:underline">support@keygg.io</a>{" "}
              or through our <Link to="/support" className="text-primary hover:underline">Support Center</Link>.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
