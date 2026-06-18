import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/licenses")({
  head: () => ({
    meta: [
      { title: "Licenses & Certifications | KeyGG" },
      { name: "description", content: "Learn about KeyGG's software licenses, Microsoft partnerships, and certifications. We sell genuine, fully legal Microsoft product keys with proper licensing documentation." },
      { name: "keywords", content: "KeyGG licenses, Microsoft software license, genuine product key license, digital software license, Microsoft partner certification" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Licenses & Certifications | KeyGG" },
      { property: "og:description", content: "KeyGG software licenses and Microsoft partnership certifications. Genuine, fully legal product keys." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/licenses" },
      { property: "og:site_name", content: "KeyGG" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Licenses & Certifications | KeyGG" },
      { name: "twitter:description", content: "KeyGG software licenses and Microsoft partnership certifications. Genuine, fully legal product keys." },
    ],
    links: [{ rel: "canonical", href: "/licenses" }],
  }),
  component: LicensesPage,
});

function LicensesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Licenses & Certifications</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Licenses & Certifications
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: June 18, 2026
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            At KeyGG, we take software licensing seriously. Every product key we sell is genuine, legally sourced, and fully compliant with applicable software licensing agreements. This page outlines our licensing practices, partnerships, and the certifications that validate our commitment to authenticity.
          </p>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Genuine Product Keys</h2>
            <p className="text-muted-foreground leading-relaxed">
              All product keys sold on KeyGG are 100% genuine Microsoft product keys. We source our keys through authorized distribution channels and verified partners. Each key is tested for validity before delivery to ensure it activates successfully and grants full access to the licensed software features.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We do not sell cracked, pirated, or otherwise unauthorized software. Every transaction includes a proper license that enables legal use of the software under Microsoft's End User License Agreement (EULA).
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Microsoft Partnership</h2>
            <p className="text-muted-foreground leading-relaxed">
              KeyGG is a certified Microsoft Partner. This partnership reflects our expertise in Microsoft products and our commitment to delivering genuine software solutions to our customers. As a partner, we maintain up-to-date knowledge of Microsoft licensing programs, product updates, and activation procedures.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Our Microsoft Partner status enables us to provide accurate technical support, legitimate product keys, and reliable guidance for software activation and usage.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">License Types We Sell</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer various Microsoft license types to meet different needs:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li><strong>Retail Licenses</strong> — Full packaged product licenses that can be transferred between devices and are tied to the purchaser.</li>
              <li><strong>OEM Licenses</strong> — Original Equipment Manufacturer licenses pre-installed on new hardware, offered at competitive prices.</li>
              <li><strong>Volume Licenses</strong> — Licenses designed for businesses and organizations requiring multiple activations.</li>
              <li><strong>Subscription Licenses</strong> — Microsoft 365 and Office 365 subscriptions with cloud services and ongoing updates.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">End User License Agreement (EULA)</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you purchase a product key from KeyGG, you are obtaining a license to use the software under the publisher's End User License Agreement. The EULA is a legal contract between you (the end user) and the software publisher (e.g., Microsoft Corporation). KeyGG facilitates the sale of the license but does not modify or override the terms of the EULA.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              By activating and using the software, you agree to comply with the EULA terms, which govern how the software may be used, how many devices it can be installed on, and what transfer rights you have. We encourage all customers to review the EULA for their specific product.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">License Verification & Authenticity</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every product key sold by KeyGG can be verified through Microsoft's official activation servers. Upon entering your key during installation or through the activation settings, Microsoft validates the key and grants the corresponding license. This validation process confirms that your key is genuine and eligible for official Microsoft support and updates.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We provide detailed activation instructions with every order to ensure a smooth verification process. If you encounter any activation issues, our support team is available to assist.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Digital Delivery & License Documentation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon successful purchase, your product key and license information are delivered digitally via email. The delivery includes:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li>The genuine product key for activation</li>
              <li>Step-by-step installation and activation instructions</li>
              <li>Official download links for the software (where applicable)</li>
              <li>License terms and usage guidelines</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Transfer & Resale Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              License transferability depends on the type of license purchased. Retail licenses are generally transferable between devices (subject to Microsoft's transfer policies). OEM licenses are typically tied to the first device they are activated on. Subscription licenses are non-transferable and remain tied to the account used for activation.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Reselling of keys purchased from KeyGG is prohibited unless explicitly permitted under the specific license terms. Violation of transfer and resale policies may result in key revocation by Microsoft.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Compliance & Legal Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              KeyGG operates in full compliance with applicable laws governing digital software sales and intellectual property. We maintain accurate records of our inventory sources and ensure that all keys are obtained through legitimate channels.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Customers are responsible for using purchased software in compliance with local laws and the publisher's licensing terms. Unauthorized distribution, cracking, or circumvention of licensing mechanisms is strictly prohibited.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our licenses, certifications, or the authenticity of our products, please contact us at{" "}
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
