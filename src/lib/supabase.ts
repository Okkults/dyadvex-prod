import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variable");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function createStripeCheckout({
  tierSlug,
  userId,
  priceId,
  email,
  origin,
}: {
  tierSlug: string;
  userId: string;
  priceId: string;
  email: string;
  origin?: string;
}) {
  const response = await fetch(`${supabaseUrl}/functions/v1/create-checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tier_slug: tierSlug,
      user_id: userId,
      price_id: priceId,
      email,
      origin,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create checkout session");
  }

  const data = await response.json();
  return data;
}

export async function saveAlpacaKeys({
  userId,
  keyId,
  secret,
  environment,
}: {
  userId: string;
  keyId: string;
  secret: string;
  environment: "paper" | "live";
}) {
  const { data, error } = await supabase
    .from("subscriptions")
    .update({
      alpaca_key_id: keyId,
      alpaca_secret: secret,
      alpaca_environment: environment,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw error;
  return data;
}