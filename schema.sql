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
  -- মিল অনুরোধ জমা দেওয়ার শেষ সময় (২৪ঘণ্টা ফরম্যাট, 'HH:MM') — ডিফল্ট
  -- রাত ১২টা। Owner/Manager Dashboard থেকে বদলাতে পারবে।
  meal_cutoff text not null default '00:00',
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
  in_meal_fund boolean not null default true,  -- false হলে এই member Daily Meal Entry-তে দেখাবে না / মিলের হিসাবে ধরা হবে না (কিন্তু Other Fund-এ থাকতে পারে — যেমন যে মিল খায় না কিন্তু গ্যাস/বিদ্যুৎ বিলে ভাগ দেয়)
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

-- প্রতিদিনের ঐচ্ছিক নোট (কোনো নির্দিষ্ট মেম্বারের সাথে যুক্ত না) — যেমনঃ
-- "বাজার হয়নি তাই আজ মিল বন্ধ", "রান্নার লোক অনুপস্থিত" ইত্যাদি মনে রাখার জন্য।
create table if not exists day_notes (
  mess_id text not null,
  date date not null,
  note text default '',
  primary key (mess_id, date)
);

-- মেম্বার নিজে আগের রাতে জানিয়ে রাখে পরের দিন তার কয়টা মিল লাগবে (রান্নার
-- পরিমাণ ঠিক করার জন্য) — Manager পরে আসল সংখ্যার সাথে মিলিয়ে দেখে, না
-- মিললে meal_entries.notes-এ কারণ লিখে চূড়ান্ত সংখ্যা বসায়।
create table if not exists meal_requests (
  mess_id text not null,
  date date not null,
  member_id text not null,
  member_name text not null,
  lunch boolean default true,
  dinner boolean default true,
  primary key (mess_id, date, member_id)
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
alter table day_notes enable row level security;
alter table meal_requests enable row level security;

create policy "public read/write" on messes for all using (true) with check (true);
create policy "public read/write" on platform_admins for all using (true) with check (true);
create policy "public read/write" on members for all using (true) with check (true);
create policy "public read/write" on meal_entries for all using (true) with check (true);
create policy "public read/write" on bazar_expenses for all using (true) with check (true);
create policy "public read/write" on other_expenses for all using (true) with check (true);
create policy "public read/write" on deposits for all using (true) with check (true);
create policy "public read/write" on managers for all using (true) with check (true);
create policy "public read/write" on day_notes for all using (true) with check (true);
create policy "public read/write" on meal_requests for all using (true) with check (true);

-- ═══════════════════════════════════════════════════════════════
-- PASSWORD SECURITY HARDENING — এতদিন password_hash কলামটাও members/
-- platform_admins টেবিলের বাকি সব কলামের মতোই anon key দিয়ে সরাসরি পড়া/
-- ওভাররাইট করা যেত (উপরের "public read/write" policy-তে, যেহেতু RLS রো-
-- লেভেলে কাজ করে, কলাম-লেভেলে না)। মানে যে কেউ আপনার Supabase URL+anon key
-- জানলে সরাসরি API কল করে সবার password hash পড়ে ফেলতে পারত, অথবা কারো
-- পুরনো Password না জেনেই সরাসরি তার password_hash বদলে দিয়ে সেই
-- অ্যাকাউন্টে ঢুকে যেতে পারত (এমনকি Owner/Super Admin অ্যাকাউন্টেও)।
-- নিচের অংশ password_hash কলামটাকে anon/authenticated থেকে সম্পূর্ণ আড়াল
-- করে দেয় — Login/Password-পরিবর্তন এখন থেকে নিচের ফাংশনগুলোর ভেতরে
-- (ডেটাবেজের নিজের ভেতরে) হয়, hash কখনো ব্রাউজারে/API রেসপন্সে যায় না।
-- ═══════════════════════════════════════════════════════════════

-- has_password: আসল hash না দিয়েও "Password সেট করা আছে কিনা" ক্লায়েন্টকে জানানোর জন্য
alter table members add column if not exists has_password boolean
  generated always as (password_hash is not null and password_hash <> '') stored;

revoke select on members from anon, authenticated;
grant select (id, mess_id, name, phone, status, joined, left_date, inactive_from,
  inactive_to, in_other_fund, in_meal_fund, notes, has_password) on members to anon, authenticated;

revoke update on members from anon, authenticated;
grant update (name, phone, status, joined, left_date, inactive_from, inactive_to,
  in_other_fund, in_meal_fund, notes) on members to anon, authenticated;
-- password_hash ইচ্ছাকৃতভাবে উপরের কোনো grant-এই নেই। INSERT-এ কোনো restriction
-- নেই (নতুন member/মেস বানানোর সময় প্রথম Password সেট করতে হয় বলে), কিন্তু
-- ইতিমধ্যে থাকা কারো hash পড়া/আপডেট করা এখন শুধু নিচের function-গুলোর মাধ্যমেই সম্ভব।

revoke select on platform_admins from anon, authenticated;
grant select (phone, name) on platform_admins to anon, authenticated;
revoke update on platform_admins from anon, authenticated;

drop policy if exists "public read/write" on platform_admins;
drop policy if exists "admins list (name/phone only)" on platform_admins;
create policy "admins list (name/phone only)" on platform_admins for select using (true);
drop policy if exists "first admin bootstrap only" on platform_admins;
create policy "first admin bootstrap only" on platform_admins for insert
  with check ((select count(*) from platform_admins) = 0);
-- platform_admins-এ এখন থেকে কোনো UPDATE/DELETE policy-ই নেই, মানে anon/
-- authenticated key দিয়ে সরাসরি কাউকে আপডেট/ডিলিট করা সম্পূর্ণ বন্ধ। প্রথম
-- Super Admin (টেবিল খালি থাকা অবস্থায়) ছাড়া নতুন কাউকে যোগ/বাদ দিতে হলে
-- এখন বাধ্যতামূলকভাবে নিচের add_platform_admin()/remove_platform_admin()
-- function ব্যবহার করতে হবে, যেগুলো একজন বিদ্যমান Super Admin-এর নিজের
-- Password যাচাই করেই তবে কাজ করে।

-- ── Login যাচাই (হ্যাশ কখনো client-এ ফেরত যায় না) ──
create or replace function public.verify_member_login(p_phone text, p_password_hash text)
returns table(result text, id text, mess_id text, name text, phone text, status text,
  joined date, left_date date, inactive_from date, inactive_to date,
  in_other_fund boolean, in_meal_fund boolean, notes text)
language plpgsql security definer set search_path = public as $$
declare r members%rowtype;
begin
  select * into r from members where members.phone = p_phone limit 1;
  if not found then return; end if;
  if r.password_hash is null or r.password_hash = '' then
    return query select 'no_password', r.id, r.mess_id, r.name, r.phone, r.status, r.joined, r.left_date, r.inactive_from, r.inactive_to, r.in_other_fund, r.in_meal_fund, r.notes;
  elsif r.password_hash = p_password_hash then
    return query select 'ok', r.id, r.mess_id, r.name, r.phone, r.status, r.joined, r.left_date, r.inactive_from, r.inactive_to, r.in_other_fund, r.in_meal_fund, r.notes;
  else
    return query select 'wrong_password', r.id, r.mess_id, r.name, r.phone, r.status, r.joined, r.left_date, r.inactive_from, r.inactive_to, r.in_other_fund, r.in_meal_fund, r.notes;
  end if;
end; $$;
grant execute on function public.verify_member_login(text,text) to anon, authenticated;

create or replace function public.verify_platform_admin_login(p_phone text, p_password_hash text)
returns table(result text, phone text, name text)
language plpgsql security definer set search_path = public as $$
declare r platform_admins%rowtype;
begin
  select * into r from platform_admins where platform_admins.phone = p_phone;
  if not found then return; end if;
  if r.password_hash = p_password_hash then
    return query select 'ok', r.phone, r.name;
  else
    return query select 'wrong_password', r.phone, r.name;
  end if;
end; $$;
grant execute on function public.verify_platform_admin_login(text,text) to anon, authenticated;

-- ── নিজের Password পরিবর্তন (পুরনোটা সঠিক হলে তবেই) ──
create or replace function public.change_own_password(p_member_id text, p_mess_id text, p_old_hash text, p_new_hash text)
returns text language plpgsql security definer set search_path = public as $$
declare cur text;
begin
  select password_hash into cur from members where id = p_member_id and mess_id = p_mess_id;
  if not found then return 'not_found'; end if;
  if cur is not null and cur <> '' and cur <> p_old_hash then return 'wrong_old_password'; end if;
  update members set password_hash = p_new_hash where id = p_member_id and mess_id = p_mess_id;
  return 'ok';
end; $$;
grant execute on function public.change_own_password(text,text,text,text) to anon, authenticated;

-- ── Owner/এই মাসের Manager অন্য কারো Password রিসেট করে (নিজের Password
-- দিয়ে নিশ্চিত করার পরই) ──
create or replace function public.admin_set_member_password(
  p_target_member_id text, p_mess_id text, p_new_hash text,
  p_acting_member_id text, p_acting_password_hash text, p_month_year text
) returns text language plpgsql security definer set search_path = public as $$
declare acting members%rowtype; owner_id text; mgr_id text; target_exists boolean;
begin
  select * into acting from members where id = p_acting_member_id and mess_id = p_mess_id;
  if not found or acting.password_hash is null or acting.password_hash = '' or acting.password_hash <> p_acting_password_hash then
    return 'not_authorized';
  end if;
  select messes.owner_member_id into owner_id from messes where id = p_mess_id;
  select member_id into mgr_id from managers where mess_id = p_mess_id and month_year = p_month_year;
  if acting.id is distinct from owner_id and acting.id is distinct from mgr_id then
    return 'not_authorized';
  end if;
  select exists(select 1 from members where id = p_target_member_id and mess_id = p_mess_id) into target_exists;
  if not target_exists then return 'target_not_found'; end if;
  update members set password_hash = p_new_hash where id = p_target_member_id and mess_id = p_mess_id;
  return 'ok';
end; $$;
grant execute on function public.admin_set_member_password(text,text,text,text,text,text) to anon, authenticated;

-- ── আরেকজন Super Admin যোগ/বাদ (একজন বিদ্যমান Super Admin-এর নিজের
-- Password যাচাই করেই) ──
create or replace function public.add_platform_admin(
  p_new_phone text, p_new_name text, p_new_password_hash text,
  p_acting_phone text, p_acting_password_hash text
) returns text language plpgsql security definer set search_path = public as $$
declare acting platform_admins%rowtype;
begin
  select * into acting from platform_admins where phone = p_acting_phone;
  if not found or acting.password_hash <> p_acting_password_hash then return 'not_authorized'; end if;
  begin
    insert into platform_admins(phone,name,password_hash) values (p_new_phone, coalesce(nullif(p_new_name,''),'Super Admin'), p_new_password_hash);
  exception when unique_violation then
    return 'phone_taken';
  end;
  return 'ok';
end; $$;
grant execute on function public.add_platform_admin(text,text,text,text,text) to anon, authenticated;

create or replace function public.remove_platform_admin(
  p_target_phone text, p_acting_phone text, p_acting_password_hash text
) returns text language plpgsql security definer set search_path = public as $$
declare acting platform_admins%rowtype; total int;
begin
  select * into acting from platform_admins where phone = p_acting_phone;
  if not found or acting.password_hash <> p_acting_password_hash then return 'not_authorized'; end if;
  select count(*) into total from platform_admins;
  if total <= 1 then return 'last_admin'; end if;
  delete from platform_admins where phone = p_target_phone;
  return 'ok';
end; $$;
grant execute on function public.remove_platform_admin(text,text,text) to anon, authenticated;
