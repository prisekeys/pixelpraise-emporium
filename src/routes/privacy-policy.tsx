import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | KeyGG" },
      { name: "description", content: "KeyGG Privacy Policy — learn how we collect, use, store, and protect your personal data when you purchase digital software keys." },
      { name: "keywords", content: "KeyGG privacy policy, data protection, personal data, GDPR, digital purchase privacy" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Privacy Policy | KeyGG" },
      { property: "og:description", content: "Learn how KeyGG collects, uses, and protects your personal data." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:site_name", content: "KeyGG" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Privacy Policy | KeyGG" },
      { name: "twitter:description", content: "Learn how KeyGG collects, uses, and protects your personal data." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Privacy Policy</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: June 18, 2026
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            KeyGG (“we”, “us”, or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or make a purchase.
          </p>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Personal Information:</strong> Name, email address, billing address, and phone number provided during checkout or account registration.</li>
              <li><strong>Payment Information:</strong> We do not store full credit card details. Payments are processed securely by Stripe, PayPal, and Apple Pay.</li>
              <li><strong>Transaction Data:</strong> Product keys purchased, order history, and delivery status.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies for analytics and fraud prevention.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To process and fulfill your orders, including digital delivery of product keys.</li>
              <li>To communicate with you regarding your purchase, support requests, or account.</li>
              <li>To detect and prevent fraud, unauthorized transactions, and abuse.</li>
              <li>To improve our website, products, and customer experience.</li>
              <li>To comply with legal obligations and enforce our Terms of Service.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">3. Cookies & Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can manage cookie preferences through your browser settings. For more details, please see our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">4. Data Sharing & Third Parties</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Payment Processors:</strong> Stripe, PayPal, and Apple Pay to securely handle transactions.</li>
              <li><strong>Analytics Providers:</strong> Google Analytics to understand site usage and improve performance.</li>
              <li><strong>Legal Authorities:</strong> When required by law, subpoena, or to protect our rights.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement industry-standard security measures, including SSL/TLS encryption, secure payment gateways, and access controls. While we strive to protect your data, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, order and account data is retained for 7 years.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access, correct, or delete your personal data.</li>
              <li>Object to or restrict certain data processing activities.</li>
              <li>Request a copy of your data in a portable format.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@keygg.io" className="text-primary hover:underline">support@keygg.io</a>.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries outside your jurisdiction, including the United States. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, please contact us immediately.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related questions or requests, please contact us at{" "}
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
