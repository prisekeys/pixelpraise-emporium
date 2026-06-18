import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/activation-guide")({
  head: () => ({
    meta: [
      { title: "Activation Guide | KeyGG" },
      { name: "description", content: "Step-by-step activation guide for Microsoft Office, Windows 11, and Microsoft 365 product keys. Learn how to download, install, and activate your genuine software quickly and easily." },
      { name: "keywords", content: "Microsoft Office activation guide, Windows 11 activation, product key activation, Microsoft 365 setup, install Office 2024, activate Windows key" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Activation Guide | KeyGG" },
      { property: "og:description", content: "Step-by-step guide to activate Microsoft Office, Windows 11, and Microsoft 365 product keys from KeyGG." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/activation-guide" },
      { property: "og:site_name", content: "KeyGG" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Activation Guide | KeyGG" },
      { name: "twitter:description", content: "Step-by-step guide to activate Microsoft Office, Windows 11, and Microsoft 365 product keys from KeyGG." },
    ],
    links: [{ rel: "canonical", href: "/activation-guide" }],
  }),
  component: ActivationGuidePage,
});

function ActivationGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Activation Guide</li>
          </ol>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Activation Guide
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Everything you need to download, install, and activate your genuine Microsoft software
        </p>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            Activating your Microsoft product is quick and straightforward. Below you will find detailed instructions for activating Microsoft Office, Windows 11, and Microsoft 365 using the product key you purchased from KeyGG. If you need additional help, our support team is available 24/7.
          </p>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">How to Activate Microsoft Office 2024 / 2021 / 2019</h2>
            <p className="text-muted-foreground leading-relaxed">
              Follow these steps to activate your Office product key on a Windows PC:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-muted-foreground">
              <li><strong>Download the installer</strong> — Visit the official Microsoft Office download page or use the download link provided in your order email. Make sure to select the correct version (2024, 2021, or 2019) that matches your key.</li>
              <li><strong>Run the installer</strong> — Open the downloaded file and follow the on-screen prompts to install Office on your PC. The installation may take 5–15 minutes depending on your internet speed.</li>
              <li><strong>Open any Office app</strong> — Once installed, open Word, Excel, PowerPoint, or any other Office application.</li>
              <li><strong>Enter your product key</strong> — When prompted, enter the 25-character product key you received from KeyGG. Click <em>Activate</em> and wait for Microsoft to verify the key.</li>
              <li><strong>Sign in to your Microsoft account</strong> (optional) — Linking your license to a Microsoft account makes future reactivation easier if you reinstall Office.</li>
              <li><strong>Done!</strong> — Your Office suite is now fully activated and ready to use.</li>
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">How to Activate Windows 11 Professional</h2>
            <p className="text-muted-foreground leading-relaxed">
              Use these steps to activate Windows 11 with your KeyGG product key:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-muted-foreground">
              <li><strong>Open Settings</strong> — Press <code>Win + I</code> to open Windows Settings, or click the Start menu and select Settings.</li>
              <li><strong>Go to System &gt; Activation</strong> — In the left sidebar, select <em>System</em>, then click <em>Activation</em>.</li>
              <li><strong>Click "Change product key"</strong> — Under the "Activation state" section, click <em>Change product key</em> or <em>Upgrade your edition of Windows</em>.</li>
              <li><strong>Enter your 25-character key</strong> — Type the product key from your KeyGG order and click <em>Next</em>.</li>
              <li><strong>Click "Activate"</strong> — Windows will connect to Microsoft servers to verify your key. This usually takes a few seconds.</li>
              <li><strong>Confirmation</strong> — Once activated, you will see "Windows is activated with a digital license" or a similar message.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mt-3">
              <strong>Alternative method (Command Prompt):</strong> Open Command Prompt as Administrator and run:
            </p>
            <pre className="bg-secondary/50 p-4 rounded-lg text-sm overflow-x-auto mt-2">
              <code>slmgr /ipk YOUR-PRODUCT-KEY-HERE</code>
              <br />
              <code>slmgr /ato</code>
            </pre>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">How to Activate Microsoft 365 / Office 365</h2>
            <p className="text-muted-foreground leading-relaxed">
              Microsoft 365 subscriptions are activated by redeeming your key on the Microsoft website:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-muted-foreground">
              <li><strong>Go to office.com/setup</strong> — Open your browser and navigate to <a href="https://www.office.com/setup" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">office.com/setup</a> or click the redemption link in your order email.</li>
              <li><strong>Sign in to your Microsoft account</strong> — If you do not have one, create a free Microsoft account. This account will be linked to your subscription.</li>
              <li><strong>Enter your product key</strong> — Type the 25-character key from KeyGG and click <em>Next</em>.</li>
              <li><strong>Confirm your region</strong> — Select your country/region and click <em>Next</em> to proceed.</li>
              <li><strong>Download Office</strong> — After successful redemption, click the <em>Install Office</em> button to download the installer.</li>
              <li><strong>Install and sign in</strong> — Run the installer, then open any Office app and sign in with the same Microsoft account. Your subscription will be automatically activated.</li>
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">How to Activate Individual Apps (Word, Excel, Outlook, etc.)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Standalone apps like Word 2024, Excel 2024, or Outlook 2024 activate similarly to the full Office suite:
            </p>
            <ol className="list-decimal pl-6 mt-3 space-y-3 text-muted-foreground">
              <li>Download the app from the official Microsoft website or use the link in your order email.</li>
              <li>Install the application on your PC.</li>
              <li>Open the app and go to <em>File &gt; Account &gt; Activate Product</em>.</li>
              <li>Enter your 25-character product key and click <em>Activate</em>.</li>
              <li>Follow any remaining prompts to complete activation.</li>
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Troubleshooting Common Activation Issues</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">"This product key has already been used"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This error usually means the key was previously activated on another device. Retail licenses can typically be transferred by deactivating the old installation first. Contact our support team for assistance with license transfers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">"We can't activate Windows/Office on this device"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ensure you are running a genuine version of Windows. If you previously used an unofficial activation tool, it may interfere. Run the Activation Troubleshooter in Settings &gt; Activation, or contact Microsoft Support directly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">"The product key is invalid"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Double-check that you entered all 25 characters correctly (excluding dashes). Make sure you are activating the correct product version that matches your key. If the issue persists, contact KeyGG support.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">No internet connection during activation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  An internet connection is required for online activation. If your device is offline, connect to the internet and try again. For enterprise environments, phone activation may be available.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">FAQ — Frequently Asked Activation Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">How many devices can I activate with one key?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  It depends on the product. Office 2024/2021/2019 single-PC keys activate 1 device. Microsoft 365 Family covers up to 6 users/devices. Office 365 Professional Plus (5 Devices) covers up to 5 devices. Check your product page for exact device limits.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I reactivate after reinstalling Windows or Office?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. Retail and volume licenses can generally be reactivated after a reinstall. For subscriptions tied to a Microsoft account, simply sign in again and the license will automatically apply.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Do I need a Microsoft account to activate?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not necessarily for standalone Office/Windows keys, but linking your license to a Microsoft account makes reinstallation and recovery much easier. Microsoft 365 subscriptions require a Microsoft account.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">How long does activation take?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Online activation is usually instant — a few seconds after entering your key. In rare cases, it may take up to a few minutes if Microsoft servers are busy.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are experiencing issues not covered in this guide, our support team is happy to assist. Contact us at{" "}
              <a href="mailto:support@keygg.io" className="text-primary hover:underline">support@keygg.io</a>{" "}
              or visit our <Link to="/support" className="text-primary hover:underline">Support Center</Link> for live chat and ticket submission. We typically respond within 24 hours.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
