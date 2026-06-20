import { createServerFn } from "@tanstack/react-start";
import { supportMessageSchema, type SupportMessageInput } from "./support.schema";

export const submitSupportMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => supportMessageSchema.parse(data))
  .handler(async ({ data }: { data: SupportMessageInput }) => {
    // Bot protection: honeypot must be empty
    if (data.website && data.website.length > 0) {
      return { success: true }; // silently drop
    }

    // Bot protection: form must have been on-screen for at least 3 seconds
    const elapsed = Date.now() - data.formLoadedAt;
    if (elapsed < 3000 || elapsed > 1000 * 60 * 60 * 24) {
      throw new Error("Submission rejected. Please try again.");
    }

    const { createClient } = await import("@supabase/supabase-js");

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      {
        auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
      },
    );

    const { error } = await supabase.from("support_messages").insert({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      order_id: data.orderId || null,
    });

    if (error) {
      console.error("Support message insert error:", error);
      throw new Error("Failed to send message. Please try again.");
    }

    return { success: true };
  });

