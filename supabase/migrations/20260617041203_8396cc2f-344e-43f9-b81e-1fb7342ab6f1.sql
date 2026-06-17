DROP POLICY IF EXISTS "Anyone can submit a support message" ON public.support_messages;

CREATE POLICY "Anyone can submit a support message"
ON public.support_messages
FOR INSERT
TO anon
WITH CHECK (
  name IS NOT NULL AND
  email IS NOT NULL AND
  subject IS NOT NULL AND
  message IS NOT NULL AND
  length(name) > 0 AND
  length(email) > 0 AND
  length(subject) > 0 AND
  length(message) > 0
);