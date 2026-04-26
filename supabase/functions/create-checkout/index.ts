Deno.serve(async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY")!;
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const { tier_slug, user_id, price_id, email } = await req.json();

    if (!tier_slug || !user_id || !price_id) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const sessionRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "mode": "subscription",
        "payment_method_types[]": "card",
        "line_items[0][price]": price_id,
        "line_items[0][quantity]": "1",
        "success_url": `${req.headers.get("origin") || "https://dyadvex.com"}/signup/complete?session_id={CHECKOUT_SESSION_ID}`,
        "cancel_url": `${req.headers.get("origin") || "https://dyadvex.com"}/signup/${tier_slug}`,
        "customer_email": email,
        "metadata[user_id]": user_id,
        "metadata[tier_slug]": tier_slug,
      }),
    });

    if (!sessionRes.ok) {
      const error = await sessionRes.text();
      return new Response(
        JSON.stringify({ error: "Failed to create checkout session", details: error }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const session = await sessionRes.json();

    const subRes = await fetch(`${SUPABASE_URL}/rest/v1/subscriptions`, {
      method: "POST",
      headers: {
        Apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        user_id: user_id,
        tier_slug: tier_slug,
        stripe_price_id: price_id,
        stripe_customer_id: session.customer,
        stripe_subscription_id: session.subscription,
        status: "pending",
      }),
    });

    if (!subRes.ok) {
      const errorText = await subRes.text();
      console.error("Failed to create subscription record:", errorText);
    }

    return new Response(
      JSON.stringify({ url: session.url, sessionId: session.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Checkout error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});