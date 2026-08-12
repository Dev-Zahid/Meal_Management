-- ═══════════════════════════════════════════════════════════════
-- মেস খাতা — Supabase schema
-- Supabase Dashboard → SQL Editor → New query → পুরোটা পেস্ট করে Run করুন
-- ═══════════════════════════════════════════════════════════════

-- Single-row settings table (mess name, PINs, theme)
create table if not exists settings (
  id int primary key default 1,
  mess_name text not null default '',
  admin_pin text not null default '',
  viewer_pin text not null default '',
  theme text not null default 'light',
  setup_done boolean not null default false,
  constraint settings_singleton check (id = 1)
);
insert into settings (id) values (1) on conflict (id) do nothing;

create table if not exists members (
  id text primary key,
  name text not null,
  phone text default '',
  status text not null default 'Active',
  joined date,
  left_date date,
  notes text default ''
);

create table if not exists meal_entries (
  id text primary key,
  date date not null,
  member_id text not null,
  member_name text not null,
  meals numeric not null default 0,
  guest numeric not null default 0,
  notes text default '',
  unique (member_id, date)
);

create table if not exists bazar_expenses (
  id text primary key,
  date date not null,
  bought_by text default '',
  amount numeric not null,
  notes text default ''
);

create table if not exists other_expenses (
  id text primary key,
  date date not null,
  title text not null,
  amount numeric not null,
  notes text default ''
);

create table if not exists deposits (
  id text primary key,
  date date not null,
  member_id text not null,
  member_name text not null,
  amount numeric not null,
  method text default 'Cash',
  notes text default ''
);

create table if not exists managers (
  month_year text primary key,
  member_id text not null,
  member_name text not null
);

-- NOTE: member_id columns above are plain text, NOT foreign keys.
-- This matches the app's existing behavior — deleting a member keeps
-- their old meal/deposit history intact (same as before).

-- ─── Row Level Security ────────────────────────────────────────
-- The app checks the Manager/Member PIN in the browser, not via Supabase
-- Auth. So every table is opened to the "anon" key used by the app.
-- This means anyone with your site's URL could, in theory, call the
-- Supabase API directly and bypass the PIN screen (the PIN is a UX gate,
-- not a cryptographic lock) — same trust model as the PIN already had.
-- Keep your Supabase project URL/anon-key out of anywhere untrusted,
-- and don't put real financial/sensitive data you can't afford to leak.
alter table settings enable row level security;
alter table members enable row level security;
alter table meal_entries enable row level security;
alter table bazar_expenses enable row level security;
alter table other_expenses enable row level security;
alter table deposits enable row level security;
alter table managers enable row level security;

create policy "public read/write" on settings for all using (true) with check (true);
create policy "public read/write" on members for all using (true) with check (true);
create policy "public read/write" on meal_entries for all using (true) with check (true);
create policy "public read/write" on bazar_expenses for all using (true) with check (true);
create policy "public read/write" on other_expenses for all using (true) with check (true);
create policy "public read/write" on deposits for all using (true) with check (true);
create policy "public read/write" on managers for all using (true) with check (true);
