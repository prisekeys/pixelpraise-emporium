import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { supportMessageSchema, type SupportMessageInput } from "@/lib/support.schema";
import { submitSupportMessage } from "@/lib/support.functions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support | KeyGG" },
      { name: "description", content: "Contact KeyGG support. Send us a message about your order, activation, or product question and our team will reply within 24 hours." },
      { property: "og:title", content: "Support | KeyGG" },
      { property: "og:description", content: "Contact KeyGG support. Send us a message and our team will reply within 24 hours." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/support" },
      { property: "og:image", content: "https://keygg.com/og-default.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "KeyGG — Genuine Software Product Keys" },
      { name: "twitter:image", content: "https://keygg.com/og-default.jpg" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: SupportPage,
});

function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const submitMessage = useServerFn(submitSupportMessage);
  const formLoadedAtRef = useRef<number>(Date.now());

  const form = useForm<SupportMessageInput>({
    resolver: zodResolver(supportMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      orderId: "",
      website: "",
      formLoadedAt: formLoadedAtRef.current,
    },
  });


  async function onSubmit(values: SupportMessageInput) {
    // Bot protection: honeypot must be empty
    if (values.website && values.website.length > 0) {
      setSubmitted(true);
      return;
    }
    // Bot protection: form must have been on screen ≥ 3s
    if (Date.now() - formLoadedAtRef.current < 3000) {
      form.setError("root", { type: "manual", message: "Please take a moment before submitting." });
      return;
    }

    try {
      const res = await fetch("https://formsubmit.co/ajax/e49f955e07a1d33a8801701d524388cf", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          _replyto: values.email,
          _subject: `KeyGG Support: ${values.subject}`,
          subject: values.subject,
          message: values.message,
          orderId: values.orderId || "—",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
      const json = (await res.json()) as { success?: string | boolean };
      if (!json.success) throw new Error("Submit rejected");

      // Fire-and-forget backup to our DB (don't block UX if it fails)
      submitMessage({ data: values }).catch(() => {});

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      form.setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again later.",
      });
    }
  }


  if (submitted) {
    return (
      <div className="min-h-screen bg-secondary/30">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 py-24 text-center">
          <div className="mx-auto max-w-md">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-3">Message sent</h1>
            <p className="text-muted-foreground">
              We received your message and will get back to you at{" "}
              <span className="text-foreground font-medium">{form.getValues("email")}</span>{" "}
              within 24 hours.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground mb-4">
                  <MessageCircle className="w-3.5 h-3.5 text-primary" /> We’re here to help
                </div>
                <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
                  Contact KeyGG support
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                  Have a question about your order, activation, or a product? Send us a message and our team will reply as soon as possible.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-card border border-border">
                    <Mail className="w-5 h-5 text-primary mb-3" />
                    <h3 className="font-display font-semibold text-sm mb-1">Email support</h3>
                    <p className="text-sm text-muted-foreground">support@keygg.com</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border">
                    <Clock className="w-5 h-5 text-primary mb-3" />
                    <h3 className="font-display font-semibold text-sm mb-1">Response time</h3>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Order & Payment">Order & Payment</SelectItem>
                              <SelectItem value="Product Key Delivery">Product Key Delivery</SelectItem>
                              <SelectItem value="Activation Help">Activation Help</SelectItem>
                              <SelectItem value="Installation Issue">Installation Issue</SelectItem>
                              <SelectItem value="Refund Request">Refund Request</SelectItem>
                              <SelectItem value="Invoice / Billing">Invoice / Billing</SelectItem>
                              <SelectItem value="Pre-sale Question">Pre-sale Question</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="orderId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Order ID{" "}
                            <span className="text-muted-foreground font-normal">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="#KEYGG-1234" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="How can we help you today?" rows={5} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Honeypot field — hidden from humans, attractive to bots */}
                    <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden" style={{ position: "absolute" }}>
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        tabIndex={-1}
                        autoComplete="off"
                        {...form.register("website")}
                      />
                    </div>


                    {form.formState.errors.root && (
                      <p className="text-sm text-destructive">{form.formState.errors.root.message}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full rounded-full h-auto py-3 text-primary-foreground border-0 transition hover:opacity-90"
                      style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-soft)" }}
                    >
                      <Send className="w-4 h-4" />
                      {form.formState.isSubmitting ? "Sending..." : "Send message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
