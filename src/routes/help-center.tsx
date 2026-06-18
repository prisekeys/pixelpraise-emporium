import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/help-center")({
  head: () => ({
    meta: [
      { title: "Help Center | KeyGG" },
      { name: "description", content: "KeyGG Help Center — find answers to frequently asked questions about buying Microsoft product keys, digital delivery, activation, refunds, account management, and more." },
      { name: "keywords", content: "KeyGG help center, software key FAQ, Microsoft key support, digital product help, product key questions, Office activation help" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Help Center | KeyGG" },
      { property: "og:description", content: "Find answers to all your questions about buying and activating genuine Microsoft product keys at KeyGG." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/help-center" },
      { property: "og:site_name", content: "KeyGG" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Help Center | KeyGG" },
      { name: "twitter:description", content: "Find answers to all your questions about buying and activating genuine Microsoft product keys at KeyGG." },
    ],
    links: [{ rel: "canonical", href: "/help-center" }],
  }),
  component: HelpCenterPage,
});

function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Help Center</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Help Center
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Answers to the most common questions about buying, downloading, and activating your software
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Ordering & Delivery</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">How do I receive my product key?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After completing your purchase, your product key is delivered instantly via email to the address you provided during checkout. You will also find your key in your KeyGG account order history. In rare cases, delivery may take up to 24 hours due to payment verification.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">I didn't receive my order email. What should I do?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  First, check your spam or junk folder. If the email is not there, ensure you entered the correct email address at checkout. You can also log in to your KeyGG account and view your order history to retrieve your key directly. If you still cannot find it, contact our support team with your order number.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Is my payment information secure?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. KeyGG uses industry-standard encryption (SSL/TLS) to protect all transactions. We process payments through trusted providers like Stripe and PayPal. We never store your full credit card details on our servers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I cancel or change my order?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Orders for digital product keys cannot be cancelled once the key has been delivered, because the product is instantly consumable. If you purchased the wrong product and the key has not been viewed, contact us within 24 hours and we may be able to help.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Product Keys & Licensing</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Are your product keys genuine?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely. Every key sold on KeyGG is 100% genuine and sourced through authorized channels. All keys activate directly on Microsoft's official servers, granting you full access to updates and features.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">What is the difference between Retail, OEM, and Volume licenses?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Retail</strong> licenses can be transferred between devices and are tied to the purchaser. <strong>OEM</strong> licenses are typically tied to the first device they are activated on and are non-transferable. <strong>Volume</strong> licenses are designed for businesses and organizations with multiple activations. The product page for each item specifies the license type.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">How many devices can I install the software on?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Device limits vary by product. Single-PC keys activate one device. Microsoft 365 Family supports up to 6 users with 1 TB of cloud storage each. Office 365 Professional Plus covers up to 5 devices. Always check the product description for the exact device limit.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I transfer my license to a new computer?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Retail licenses can generally be transferred to a new device by uninstalling the software from the old device and reactivating on the new one. OEM licenses are typically non-transferable. If you encounter issues transferring a retail license, contact Microsoft Support or our team for guidance.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Activation & Installation</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">How do I activate my product?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Activation steps vary by product. We have a detailed <Link to="/activation-guide" className="text-primary hover:underline">Activation Guide</Link> covering Office, Windows 11, Microsoft 365, and individual apps. The guide includes step-by-step instructions, screenshots, and troubleshooting tips.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">What if my key doesn't work?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If your key fails to activate, first double-check that you entered all 25 characters correctly and that you are activating the correct product version. If the problem persists, contact our support team within 7 days. We will troubleshoot the issue and provide a replacement key if necessary.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Do I need a Microsoft account?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Standalone Office and Windows keys can be activated without a Microsoft account, though linking your license to an account makes reinstallation easier. Microsoft 365 subscriptions require a Microsoft account for activation and cloud service access.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I reinstall the software after formatting my PC?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. As long as you have your product key, you can reinstall and reactivate the software. For retail licenses tied to a Microsoft account, reactivation is automatic when you sign in. For standalone keys, simply re-enter the key during activation.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Refunds & Returns</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">What is your refund policy?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Due to the nature of digital products, all sales are generally final. However, we offer refunds under specific conditions: defective keys that cannot be resolved within 7 days, duplicate purchases reported within 24 hours, or accidental purchases of the wrong product within 24 hours (if the key has not been used). See our full <Link to="/refund-policy" className="text-primary hover:underline">Refund Policy</Link> for details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">How do I request a refund?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contact our support team at <a href="mailto:support@keygg.io" className="text-primary hover:underline">support@keygg.io</a> or through the <Link to="/support" className="text-primary hover:underline">Support Center</Link>. Include your order number, the email used for purchase, and a description of the issue. Please allow up to 7 days for our team to evaluate and process your request.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I get a replacement instead of a refund?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. In most cases where a key is defective, we will provide a replacement key at no additional cost. Replacements are typically issued faster than refunds and are our preferred resolution method.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Account & Security</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Do I need an account to buy from KeyGG?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No, you can check out as a guest. However, creating an account lets you view your order history, store product keys for easy access, and receive exclusive offers.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">How do I reset my password?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Click "Forgot Password" on the login page and enter your email address. We will send you a password reset link. If you do not receive the email within a few minutes, check your spam folder.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-1">Is my personal information safe?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. We take data privacy seriously and comply with GDPR and other applicable data protection regulations. We do not sell your personal information to third parties. For full details, read our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our support team is available to help with any issue not covered here. Reach out at{" "}
              <a href="mailto:support@keygg.io" className="text-primary hover:underline">support@keygg.io</a>{" "}
              or visit the <Link to="/support" className="text-primary hover:underline">Support Center</Link> to submit a ticket or start a live chat. We typically respond within 24 hours.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
