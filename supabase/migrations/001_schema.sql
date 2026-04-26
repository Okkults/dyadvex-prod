-- Users table
create table public.users (
  id uuid not null default gen_random_uuid() primary key,
  email text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- User tier subscriptions
create table public.subscriptions (
  id uuid not null default gen_random_uuid() primary key,
  user_id uuid not null references public.users(id) on delete cascade,
  tier_slug text not null,
  stripe_customer_id text,
  stripe_subscription_id text,
  stripe_price_id text,
  alpaca_key_id text,
  alpaca_secret text,
  alpaca_environment text default 'paper',
  status text not null default 'pending',
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Index for faster lookups
create index subscriptions_user_id_idx on public.subscriptions(user_id);
create index subscriptions_stripe_customer_idx on public.subscriptions(stripe_customer_id);
create index subscriptions_stripe_subscription_idx on public.subscriptions(stripe_subscription_id);

-- Enable RLS
alter table public.users enable row level security;
alter table public.subscriptions enable row level security;

-- Users policies
create policy "Users can read own data" on public.users
  for select using (auth.uid() = id);

create policy "Users can insert own data" on public.users
  for insert with check (auth.uid() = id);

create policy "Users can update own data" on public.users
  for update using (auth.uid() = id);

-- Subscriptions policies
create policy "Users can read own subscription" on public.subscriptions
  for select using (user_id = auth.uid());

create policy "Users can insert own subscription" on public.subscriptions
  for insert with check (user_id = auth.uid());

create policy "Users can update own subscription" on public.subscriptions
  for update using (user_id = auth.uid());

-- Service role policy for edge functions (bypass RLS)
create policy "Service role can read all subscriptions" on public.subscriptions
  for select using (auth.role() = 'service_role');

create policy "Service role can update all subscriptions" on public.subscriptions
  for update using (auth.role() = 'service_role');

create policy "Service role can insert all subscriptions" on public.subscriptions
  for insert using (auth.role() = 'service_role');