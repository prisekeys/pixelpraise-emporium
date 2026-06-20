import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | KeyGG" },
      { name: "description", content: "KeyGG's Refund Policy for digital software products. Learn about our 7-day money-back guarantee, eligibility conditions, and how to request a refund for Microsoft product keys." },
      { name: "keywords", content: "KeyGG refund policy, software key refund, digital product refund, Microsoft key money back guarantee, return policy software license" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Refund Policy | KeyGG" },
      { property: "og:description", content: "KeyGG Refund Policy — 7-day money-back guarantee on genuine Microsoft product keys. Learn eligibility and how to request a refund." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refund-policy" },
      { property: "og:site_name", content: "KeyGG" },
      { property: "og:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "KeyGG — Genuine Software Product Keys" },
      { name: "twitter:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Refund Policy | KeyGG" },
      { name: "twitter:description", content: "KeyGG Refund Policy — 7-day money-back guarantee on genuine Microsoft product keys. Learn eligibility and how to request a refund." },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Refund Policy</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Refund Policy
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: June 18, 2026
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            At KeyGG, customer satisfaction is our top priority. We understand that purchasing digital software can sometimes raise concerns, which is why we offer a transparent and fair refund policy. Please read the following terms carefully to understand when and how refunds are processed.
          </p>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">1. General Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Due to the nature of digital products, all sales are generally final once a product key has been delivered or revealed. However, we offer a 7-day money-back guarantee under specific conditions outlined below. We strive to resolve all issues before processing a refund, as most problems can be fixed with proper activation guidance.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">2. Eligibility for Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may be eligible for a refund if one or more of the following conditions are met:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li><strong>Defective or Non-Functional Key</strong> — The product key fails to activate the software, and our support team cannot resolve the issue within 7 days of your support request.</li>
              <li><strong>Incorrect Product Purchased</strong> — You accidentally purchased the wrong product and contact us within 24 hours of delivery, provided the key has not been used or revealed.</li>
              <li><strong>Duplicate Purchase</strong> — You accidentally placed the same order twice. We will refund the duplicate order if reported within 24 hours.</li>
              <li><strong>Non-Delivery</strong> — You did not receive your product key within 24 hours of purchase due to a technical issue on our end.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">3. Non-Refundable Conditions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Refunds will not be granted under the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li>The product key has already been used, activated, or revealed.</li>
              <li>The buyer changes their mind after delivery without a valid technical reason.</li>
              <li>The software is incompatible with the buyer's system despite accurate system requirements being listed on the product page.</li>
              <li>The buyer failed to follow the provided activation instructions without contacting support first.</li>
              <li>The refund request is made beyond the eligible timeframe (7 days for defective keys, 24 hours for accidental purchases).</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">4. How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-2 text-muted-foreground">
              <li>Contact our support team at <a href="mailto:support@keygg.io" className="text-primary hover:underline">support@keygg.io</a> or through our <Link to="/support" className="text-primary hover:underline">Support Center</Link>.</li>
              <li>Include your order number, email address used for purchase, and a detailed description of the issue.</li>
              <li>For defective keys, allow our team up to 7 days to troubleshoot and provide a replacement or solution.</li>
              <li>If the issue cannot be resolved, we will process your refund to the original payment method.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Refund processing times vary by payment provider but typically take 5–10 business days to appear on your statement.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">5. Chargebacks & Disputes</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strongly encourage customers to contact our support team before initiating a chargeback with their bank or payment provider. Chargebacks filed without prior communication may result in:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li>Permanent suspension of your KeyGG account.</li>
              <li>Revocation of all product keys associated with your account.</li>
              <li>Disqualification from future purchases on our platform.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We are committed to resolving issues amicably and will work with you to find a satisfactory solution.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">6. Subscription Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              For subscription-based products (e.g., Microsoft 365, Office 365), refunds are handled as follows:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li>If the subscription key has not been activated, a full refund may be granted within 7 days of purchase.</li>
              <li>Once a subscription key is activated, it cannot be refunded because the license period begins immediately upon activation.</li>
              <li>Subscriptions cannot be paused or partially refunded for unused time.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">7. Partial Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              In rare cases where a product bundle is partially defective, we may offer a partial refund proportional to the value of the non-functional item, or provide a replacement key at no additional cost. Our support team will evaluate each case individually.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">8. Policy Changes</h2>
            <p className="text-muted-foreground leading-relaxed">
              KeyGG reserves the right to modify this Refund Policy at any time. Changes will be posted on this page with an updated effective date. Refund requests will be evaluated based on the policy in effect at the time of purchase.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our refund policy or need assistance with a refund request, please contact us at{" "}
              <a href="mailto:support@keygg.io" className="text-primary hover:underline">support@keygg.io</a>{" "}
              or through our <Link to="/support" className="text-primary hover:underline">Support Center</Link>. Our team typically responds within 24 hours.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
