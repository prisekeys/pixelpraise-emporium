import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | KeyGG" },
      { name: "description", content: "KeyGG Cookie Policy — learn about the cookies and tracking technologies we use to enhance your experience on our website." },
      { name: "keywords", content: "KeyGG cookie policy, cookies, tracking technologies, cookie preferences, website cookies" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Cookie Policy | KeyGG" },
      { property: "og:description", content: "Learn about the cookies and tracking technologies used on KeyGG." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookie-policy" },
      { property: "og:site_name", content: "KeyGG" },
      { property: "og:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "KeyGG — Genuine Software Product Keys" },
      { name: "twitter:image", content: "/__l5e/assets-v1/35fbbed5-ea7d-440f-9bfa-47a5b1c45cb0/og-default.jpg" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Cookie Policy | KeyGG" },
      { name: "twitter:description", content: "Learn about the cookies and tracking technologies used on KeyGG." },
    ],
    links: [{ rel: "canonical", href: "/cookie-policy" }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Cookie Policy</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Cookie Policy
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Last updated: June 18, 2026
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            This Cookie Policy explains how KeyGG (“we”, “us”, or “our”) uses cookies and similar tracking technologies on our website. By using our site, you consent to the use of cookies as described in this policy.
          </p>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">1. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help the site remember your actions and preferences (such as login, language, and display preferences) over a period of time, so you don't have to re-enter them whenever you return.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable core features such as secure checkout, account access, and fraud prevention. Without these cookies, certain services cannot be provided.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use analytics cookies (such as Google Analytics) to understand how visitors interact with our website. These cookies collect information in an aggregated and anonymous form, including the number of visitors, traffic sources, and pages visited.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Performance Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies help us improve the performance and functionality of our website by remembering your preferences and detecting errors.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies may be used to deliver relevant advertisements and measure the effectiveness of our marketing campaigns. They track your browsing habits across websites.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may allow third-party service providers to place cookies on your device for the purposes outlined above. These providers include:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li><strong>Google Analytics</strong> — for website traffic analysis and user behavior insights.</li>
              <li><strong>Stripe / PayPal</strong> — for secure payment processing during checkout.</li>
              <li><strong>Social Media Platforms</strong> — for social sharing and advertising features.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">4. How to Manage Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but please note that doing so may affect the functionality of our website.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Here are links to cookie management instructions for popular browsers:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-muted-foreground">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">5. Cookie Duration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies may be either "session" cookies, which are deleted when you close your browser, or "persistent" cookies, which remain on your device until they expire or you delete them. The specific duration depends on the cookie type and purpose.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">6. Changes to This Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, law, or our business practices. Any updates will be posted on this page with an updated effective date.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact us at{" "}
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
