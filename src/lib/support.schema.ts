import { z } from "zod";

export const supportMessageSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(2, "Subject must be at least 2 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
  orderId: z.string().trim().max(100, "Order ID must be less than 100 characters").optional(),
});

export type SupportMessageInput = z.infer<typeof supportMessageSchema>;
