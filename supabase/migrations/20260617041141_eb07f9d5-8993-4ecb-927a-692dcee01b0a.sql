CREATE TABLE public.support_messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL,
    subject text NOT NULL,
    message text NOT NULL,
    order_id text,
    created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.support_messages TO anon;
GRANT ALL ON public.support_messages TO service_role;

ALTER TABLE public.support_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a support message"
ON public.support_messages
FOR INSERT
TO anon
WITH CHECK (true);