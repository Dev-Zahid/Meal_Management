-- ═══════════════════════════════════════════════════════════════
-- মেস খাতা / Meal Tracker — Supabase schema (v2 — per-member login)
-- এইটা একদম নতুন Supabase প্রজেক্টের জন্য। আগে v1 schema রান করে থাকলে,
-- এটা না চালিয়ে migration.sql চালান।
-- Supabase Dashboard → SQL Editor → New query → পুরোটা পেস্ট করে Run করুন
-- ═══════════════════════════════════════════════════════════════

-- Single-row settings table (mess name, owner, theme)
create table if not exists settings (
  id int primary key default 1,
  mess_name text not null default '',
  owner_member_id text,
  theme text not null default 'light',
  setup_done boolean not null default false,
  constraint settings_singleton check (id = 1)
);
insert into settings (id) values (1) on conflict (id) do nothing;

create table if not exists members (
  id text primary key,
  name text not null,
  phone text default '',
  password_hash text not null default '',
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
  amount numeric not null,  -- negative allowed (e.g. month-end carry-forward due)
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
-- The app checks login (phone+password) and role (Owner / this month's
-- Manager / everyone else view-only) in the browser, not via Supabase Auth.
-- So every table is opened to the "anon" key used by the app. This means
-- anyone with your site's URL could, in theory, call the Supabase API
-- directly and bypass the login screen (the login is a UX gate, not a
-- cryptographic lock enforced by the database). Passwords are hashed
-- (SHA-256) before being stored/compared, but that's still weaker than
-- real server-side auth. Keep your Supabase URL/anon-key private, and
-- don't put real financial/sensitive data you can't afford to leak.
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
