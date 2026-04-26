Deno.serve(async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const STRIPE_WEBHOOK_SECRET = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response(
        JSON.stringify({ error: "Missing stripe-signature header" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const webhookData = await fetch(
      `https://api.stripe.com/v1/webhook_endpoints?secret=${STRIPE_WEBHOOK_SECRET}`,
      {
        headers: {
          Authorization: `Bearer ${Deno.env.get("STRIPE_SECRET_KEY")}`,
        },
      }
    ).then((r) => r.json());

    const event = JSON.parse(body);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const userId = session.metadata?.user_id;
        const tierSlug = session.metadata?.tier_slug;
        const customerId = session.customer;
        const subscriptionId = session.subscription;

        if (userId && tierSlug) {
          const updateRes = await fetch(
            `${SUPABASE_URL}/rest/v1/subscriptions?user_id=eq.${userId}`,
            {
              method: "PATCH",
              headers: {
                Apikey: SUPABASE_SERVICE_ROLE_KEY,
                Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                "Content-Type": "application/json",
                Prefer: "return=minimal",
              },
              body: JSON.stringify({
                stripe_customer_id: customerId,
                stripe_subscription_id: subscriptionId,
                status: "active",
                updated_at: new Date().toISOString(),
              }),
            }
          );

          if (!updateRes.ok) {
            const errorText = await updateRes.text();
            console.error("Failed to update subscription:", errorText);
          }
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object;
        const subscriptionId = subscription.id;
        const status = subscription.status;
        const currentPeriodStart = new Date(subscription.current_period_start * 1000).toISOString();
        const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();

        const updateRes = await fetch(
          `${SUPABASE_URL}/rest/v1/subscriptions?stripe_subscription_id=eq.${subscriptionId}`,
          {
            method: "PATCH",
            headers: {
              Apikey: SUPABASE_SERVICE_ROLE_KEY,
              Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
              "Content-Type": "application/json",
              Prefer: "return=minimal",
            },
            body: JSON.stringify({
              status: status === "active" ? "active" : status === "past_due" ? "past_due" : "inactive",
              current_period_start: currentPeriodStart,
              current_period_end: currentPeriodEnd,
              updated_at: new Date().toISOString(),
            }),
          }
        );

        if (!updateRes.ok) {
          const errorText = await updateRes.text();
          console.error("Failed to update subscription:", errorText);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const subscriptionId = subscription.id;

        const updateRes = await fetch(
          `${SUPABASE_URL}/rest/v1/subscriptions?stripe_subscription_id=eq.${subscriptionId}`,
          {
            method: "PATCH",
            headers: {
              Apikey: SUPABASE_SERVICE_ROLE_KEY,
              Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
              "Content-Type": "application/json",
              Prefer: "return=minimal",
            },
            body: JSON.stringify({
              status: "canceled",
              updated_at: new Date().toISOString(),
            }),
          }
        );

        if (!updateRes.ok) {
          const errorText = await updateRes.text();
          console.error("Failed to update subscription:", errorText);
        }
        break;
      }
    }

    return new Response(
      JSON.stringify({ received: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Webhook error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});