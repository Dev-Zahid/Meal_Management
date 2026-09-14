-- ═══════════════════════════════════════════════════════════════
-- মেস খাতা / Meal Tracker — Migration v2 → v3 (multi-mess + Super Admin)
-- আপনার Supabase প্রজেক্টে আগে থেকে schema.sql/migration.sql (v1 বা v2)
-- রান করা থাকলে, এটা রান করুন। Supabase Dashboard → SQL Editor → New
-- query → পুরোটা পেস্ট করে Run করুন। এটা নিরাপদে বারবার রান করা যায়।
-- ═══════════════════════════════════════════════════════════════

-- ১) নতুন টেবিল: messes (আপনার আগের একমাত্র মেসকে 'MS-001' নামে ধরে নেওয়া হচ্ছে)
create table if not exists messes (
  id text primary key,
  name text not null default '',
  theme text not null default 'light',
  owner_member_id text,
  created_at timestamptz not null default now()
);
-- (settings টেবিল আগে থেকে না থাকলে সরাসরি "select ... from settings" লিখলে
-- Postgres error দেখাত, এমনকি নিচে fallback insert থাকা সত্ত্বেও — তাই
-- to_regclass দিয়ে আগে চেক করে নেওয়া হচ্ছে টেবিলটা আদৌ আছে কিনা।)
do $$
begin
  if to_regclass('public.settings') is not null then
    insert into messes (id, name, theme, owner_member_id)
      select 'MS-001', coalesce(s.mess_name,''), coalesce(s.theme,'light'), s.owner_member_id
      from settings s where s.id = 1
      on conflict (id) do nothing;
  end if;
end $$;
-- settings টেবিল আগে না থাকলে (একদম fresh v1 বসানো হয়নি) fallback:
insert into messes (id, name) values ('MS-001','My Mess') on conflict (id) do nothing;

-- ২) নতুন টেবিল: platform_admins (Super Admin লগিন লগিন স্ক্রিন থেকেই বানানো যাবে)
create table if not exists platform_admins (
  phone text primary key,
  name text not null default 'Super Admin',
  password_hash text not null
);

-- ৩) সব ডেটা টেবিলে mess_id কলাম যোগ + পুরনো সব ডেটাকে 'MS-001'-এ বসিয়ে দেওয়া
alter table members add column if not exists mess_id text;
update members set mess_id = 'MS-001' where mess_id is null;
alter table members alter column mess_id set not null;
alter table members add column if not exists inactive_from date;
alter table members add column if not exists inactive_to date;
alter table members add column if not exists in_other_fund boolean not null default true;
alter table members add column if not exists in_meal_fund boolean not null default true;
create unique index if not exists members_phone_unique on members(phone) where phone <> '';
create index if not exists members_mess_idx on members(mess_id);

alter table meal_entries add column if not exists mess_id text;
update meal_entries set mess_id = 'MS-001' where mess_id is null;
alter table meal_entries alter column mess_id set not null;
create index if not exists meal_entries_mess_idx on meal_entries(mess_id);

alter table bazar_expenses add column if not exists mess_id text;
update bazar_expenses set mess_id = 'MS-001' where mess_id is null;
alter table bazar_expenses alter column mess_id set not null;
create index if not exists bazar_expenses_mess_idx on bazar_expenses(mess_id);

alter table other_expenses add column if not exists mess_id text;
update other_expenses set mess_id = 'MS-001' where mess_id is null;
alter table other_expenses alter column mess_id set not null;
create index if not exists other_expenses_mess_idx on other_expenses(mess_id);

alter table deposits add column if not exists mess_id text;
update deposits set mess_id = 'MS-001' where mess_id is null;
alter table deposits alter column mess_id set not null;
alter table deposits add column if not exists type text not null default 'Meal';
alter table deposits drop constraint if exists deposits_type_check;
alter table deposits add constraint deposits_type_check check (type in ('Meal','Other'));
create index if not exists deposits_mess_idx on deposits(mess_id);

-- ৪) managers টেবিলের primary key আগে শুধু month_year ছিল, এখন সব মেস মিলিয়ে
--    ইউনিক হতে হবে বলে (mess_id, month_year) কম্পোজিট key বানানো হচ্ছে
alter table managers add column if not exists mess_id text;
update managers set mess_id = 'MS-001' where mess_id is null;
alter table managers alter column mess_id set not null;
alter table managers drop constraint if exists managers_pkey;
alter table managers add primary key (mess_id, month_year);

-- ৫) RLS চালু + policy (নতুন টেবিলগুলোর জন্য)
alter table messes enable row level security;
alter table platform_admins enable row level security;
drop policy if exists "public read/write" on messes;
create policy "public read/write" on messes for all using (true) with check (true);
drop policy if exists "public read/write" on platform_admins;
create policy "public read/write" on platform_admins for all using (true) with check (true);

-- ৫.১) নতুন টেবিল: day_notes — প্রতিদিনের ঐচ্ছিক নোট (মিল কেন বন্ধ ছিল
-- ইত্যাদি মনে রাখার জন্য, কোনো নির্দিষ্ট মেম্বারের সাথে যুক্ত না)
create table if not exists day_notes (
  mess_id text not null,
  date date not null,
  note text default '',
  primary key (mess_id, date)
);
alter table day_notes enable row level security;
drop policy if exists "public read/write" on day_notes;
create policy "public read/write" on day_notes for all using (true) with check (true);

-- ৫.২) নতুন টেবিল: meal_requests — মেম্বার আগের রাতে জানিয়ে রাখে পরের
-- দিন Lunch/Dinner লাগবে কিনা; Manager পরে আসল সংখ্যার সাথে মিলিয়ে
-- চূড়ান্ত করে (না মিললে meal_entries.notes-এ কারণ লেখা বাধ্যতামূলক)
create table if not exists meal_requests (
  mess_id text not null,
  date date not null,
  member_id text not null,
  member_name text not null,
  lunch boolean default true,
  dinner boolean default true,
  primary key (mess_id, date, member_id)
);
-- আগের ভার্সনে কলামের নাম ছিল sokal/raat — থাকলে ডেটাসহ lunch/dinner-এ
-- rename করে দেয় (কোনো ডেটা মুছবে না)। একদম প্রথম ভার্সনে 'meals' নামে
-- একটা সংখ্যার কলাম ছিল, সেটা আর ব্যবহার হয় না, এমনি পড়ে থাকলেও ক্ষতি নেই।
do $$
begin
  if exists (select 1 from information_schema.columns where table_name='meal_requests' and column_name='sokal') then
    alter table meal_requests rename column sokal to lunch;
  end if;
  if exists (select 1 from information_schema.columns where table_name='meal_requests' and column_name='raat') then
    alter table meal_requests rename column raat to dinner;
  end if;
end $$;
alter table meal_requests add column if not exists lunch boolean default true;
alter table meal_requests add column if not exists dinner boolean default true;
alter table meal_requests enable row level security;
drop policy if exists "public read/write" on meal_requests;
create policy "public read/write" on meal_requests for all using (true) with check (true);

-- ৫.৩) মিল অনুরোধ জমা দেওয়ার শেষ সময় (কাট-অফ) — Owner/Manager
-- Dashboard থেকে বদলাতে পারবে, ডিফল্ট রাত ১২টা।
alter table messes add column if not exists meal_cutoff text not null default '00:00';

-- ৬) (ঐচ্ছিক) পুরনো singleton settings টেবিল আর ব্যবহার হবে না, কিন্তু
--    নিরাপত্তার জন্য এখনই ডিলিট করা হচ্ছে না — চাইলে ম্যানুয়ালি ডিলিট করতে
--    পারবেন: drop table if exists settings;

-- ═══════════════════════════════════════════════════════════════
-- ৭) PASSWORD SECURITY HARDENING — এতদিন password_hash কলামটাও members/
-- platform_admins টেবিলের বাকি সব কলামের মতোই আপনার Supabase anon key
-- দিয়ে সরাসরি পড়া/ওভাররাইট করা যেত (RLS রো-লেভেলে কাজ করে, কলাম-লেভেলে
-- না, তাই "public read/write" policy থাকলেও কলাম-ভিত্তিক সুরক্ষা ছিল না)।
-- মানে আপনার Supabase URL+anon key জানলে (যেটা পাবলিক ওয়েবসাইটে এমনিতেই
-- থাকতে হয়) যে কেউ সরাসরি API কল করে সবার password hash পড়ে ফেলতে
-- পারত, বা কারো পুরনো Password না জেনেই সরাসরি hash বদলে দিয়ে সেই
-- অ্যাকাউন্টে (এমনকি Owner/Super Admin অ্যাকাউন্টেও) ঢুকে যেতে পারত, বা
-- সরাসরি নিজেকে নতুন Super Admin বানিয়ে পুরো প্ল্যাটফর্ম দখল করতে পারত।
-- এই অংশ password_hash আড়াল করে দেয় — Login/Password-পরিবর্তন/Admin
-- add-remove এখন থেকে ডেটাবেজের ভেতরের function দিয়ে হয়, hash কখনো
-- ব্রাউজারে/API রেসপন্সে যায় না। ⚠️ এই migration.sql যতবারই আগে রান করা
-- থাকুক না কেন, নিরাপত্তার এই আপডেট পেতে **এখন আরেকবার রান করতে হবে** —
-- নিরাপদে বারবার রান করা যায়, ডেটা মুছবে না। app.js-ও নতুন ভার্সন দিয়ে
-- একসাথে redeploy করুন, নাহলে অ্যাপ লগিন করতে পারবে না।
-- ═══════════════════════════════════════════════════════════════
alter table members add column if not exists has_password boolean
  generated always as (password_hash is not null and password_hash <> '') stored;

revoke select on members from anon, authenticated;
grant select (id, mess_id, name, phone, status, joined, left_date, inactive_from,
  inactive_to, in_other_fund, in_meal_fund, notes, has_password) on members to anon, authenticated;

revoke update on members from anon, authenticated;
grant update (name, phone, status, joined, left_date, inactive_from, inactive_to,
  in_other_fund, in_meal_fund, notes) on members to anon, authenticated;

revoke select on platform_admins from anon, authenticated;
grant select (phone, name) on platform_admins to anon, authenticated;
revoke update on platform_admins from anon, authenticated;

drop policy if exists "public read/write" on platform_admins;
drop policy if exists "admins list (name/phone only)" on platform_admins;
create policy "admins list (name/phone only)" on platform_admins for select using (true);
drop policy if exists "first admin bootstrap only" on platform_admins;
create policy "first admin bootstrap only" on platform_admins for insert
  with check ((select count(*) from platform_admins) = 0);

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

-- ═══════════════════════════════════════════════════════════════
-- এরপর কী করবেন:
-- • app.js/index.html/style.css নতুন ভার্সন দিয়ে redeploy করুন।
-- • প্রথমবার সাইট খুললে platform_admins টেবিল খালি থাকলে app নিজে থেকেই
--   "প্রথম Super Admin অ্যাকাউন্ট বানান" স্ক্রিন দেখাবে (phone + password)।
--   এরপর থেকে এই Super Admin সাধারণ লগিন ফর্ম দিয়েই ঢুকতে পারবেন — আলাদা
--   কোনো "Super Admin" লিংক/স্ক্রিন নেই।
-- • আপনার আগের মেস এখন mess_id = 'MS-001' হিসেবে চলবে, সব সদস্য/মিল/
--   বাজার/ডিপোজিট ইতিহাস অক্ষত আছে। আগের মতোই ফোন+Password দিয়ে লগিন
--   করতে পারবেন।
-- • নতুন "Other Fund-শুধু" member (যে মিল খায় না কিন্তু বাজার-বহির্ভূত
--   খরচে ভাগ দেয়) যোগ করতে Members পেজে Add Member-এ "Member Type"-এ
--   "শুধু Other Expense" বাছুন — আগের সব member ডিফল্টভাবে দুই ফান্ডেই
--   থাকবে (in_meal_fund ও in_other_fund দুটোই true)।
-- ═══════════════════════════════════════════════════════════════
