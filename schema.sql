-- ═══════════════════════════════════════════════════════════════
-- মেস খাতা / Meal Tracker — Supabase schema (v3 — multi-mess + Super Admin)
-- এইটা একদম নতুন Supabase প্রজেক্টের জন্য। আগে v1/v2 schema রান করে থাকলে,
-- এটা না চালিয়ে migration.sql চালান।
-- Supabase Dashboard → SQL Editor → New query → পুরোটা পেস্ট করে Run করুন
-- ═══════════════════════════════════════════════════════════════

-- একটা "mess" (খাতা) — একই অ্যাপ/ডেটাবেজে একাধিক মেস আলাদা আলাদা ভাবে
-- তাদের নিজেদের meal/bazar/deposit হিসাব রাখতে পারবে।
create table if not exists messes (
  id text primary key,
  name text not null default '',
  theme text not null default 'light',
  owner_member_id text,
  created_at timestamptz not null default now()
);

-- প্ল্যাটফর্ম Super Admin — কোনো নির্দিষ্ট মেসের সাথে যুক্ত না, সব মেস দেখতে/
-- ম্যানেজ করতে পারে। প্রথমবার অ্যাপ খুললে লগিন স্ক্রিনের "Super Admin" লিংক
-- থেকে প্রথম Super Admin অ্যাকাউন্ট বানানো যাবে (টেবিল খালি থাকলে)।
create table if not exists platform_admins (
  phone text primary key,
  name text not null default 'Super Admin',
  password_hash text not null
);

create table if not exists members (
  id text primary key,
  mess_id text not null,
  name text not null,
  phone text default '',
  password_hash text not null default '',
  status text not null default 'Active',
  joined date,
  left_date date,
  inactive_from date,   -- এই তারিখ থেকে
  inactive_to date,     -- এই তারিখ পর্যন্ত মেম্বার Inactive থাকবে (মিল বন্ধ, Daily Meal Entry-তে আসবে না)
  in_other_fund boolean not null default true, -- false হলে এই member Other Expenses ভাগ করবে না/সেই লিস্টে থাকবে না
  notes text default ''
);
-- ফোন নম্বর পুরো প্ল্যাটফর্ম জুড়ে ইউনিক (লগিনের সময় মেস আলাদাভাবে বাছাই করা লাগবে না)
create unique index if not exists members_phone_unique on members(phone) where phone <> '';
create index if not exists members_mess_idx on members(mess_id);

create table if not exists meal_entries (
  id text primary key,
  mess_id text not null,
  date date not null,
  member_id text not null,
  member_name text not null,
  meals numeric not null default 0,
  guest numeric not null default 0,
  notes text default '',
  unique (member_id, date)
);
create index if not exists meal_entries_mess_idx on meal_entries(mess_id);

create table if not exists bazar_expenses (
  id text primary key,
  mess_id text not null,
  date date not null,
  bought_by text default '',
  amount numeric not null,
  notes text default ''
);
create index if not exists bazar_expenses_mess_idx on bazar_expenses(mess_id);

create table if not exists other_expenses (
  id text primary key,
  mess_id text not null,
  date date not null,
  title text not null,
  amount numeric not null,
  notes text default ''
);
create index if not exists other_expenses_mess_idx on other_expenses(mess_id);

create table if not exists deposits (
  id text primary key,
  mess_id text not null,
  date date not null,
  member_id text not null,
  member_name text not null,
  amount numeric not null,  -- negative allowed (e.g. month-end carry-forward due)
  method text default 'Cash',
  type text not null default 'Meal' check (type in ('Meal','Other')), -- Meal fund vs Other-expense fund — হিসাব সম্পূর্ণ আলাদা
  notes text default ''
);
create index if not exists deposits_mess_idx on deposits(mess_id);

create table if not exists managers (
  mess_id text not null,
  month_year text not null,
  member_id text not null,
  member_name text not null,
  primary key (mess_id, month_year)
);

-- NOTE: member_id columns above are plain text, NOT foreign keys.
-- This matches the app's existing behavior — deleting a member keeps
-- their old meal/deposit history intact (same as before).

-- ─── Row Level Security ────────────────────────────────────────
-- The app checks login (phone+password) and role (Platform Super Admin /
-- Mess Owner / this month's Manager / everyone else view-only) in the
-- browser, not via Supabase Auth. So every table is opened to the "anon"
-- key used by the app. This means anyone with your site's URL could, in
-- theory, call the Supabase API directly and bypass the login screen.
-- Passwords are hashed (SHA-256) before being stored/compared, but that's
-- still weaker than real server-side auth. Keep your Supabase URL/anon-key
-- private, and don't put real financial/sensitive data you can't afford
-- to leak.
alter table messes enable row level security;
alter table platform_admins enable row level security;
alter table members enable row level security;
alter table meal_entries enable row level security;
alter table bazar_expenses enable row level security;
alter table other_expenses enable row level security;
alter table deposits enable row level security;
alter table managers enable row level security;

create policy "public read/write" on messes for all using (true) with check (true);
create policy "public read/write" on platform_admins for all using (true) with check (true);
create policy "public read/write" on members for all using (true) with check (true);
create policy "public read/write" on meal_entries for all using (true) with check (true);
create policy "public read/write" on bazar_expenses for all using (true) with check (true);
create policy "public read/write" on other_expenses for all using (true) with check (true);
create policy "public read/write" on deposits for all using (true) with check (true);
create policy "public read/write" on managers for all using (true) with check (true);
