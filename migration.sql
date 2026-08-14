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
insert into messes (id, name, theme, owner_member_id)
  select 'MS-001', coalesce(s.mess_name,''), coalesce(s.theme,'light'), s.owner_member_id
  from settings s where s.id = 1
  on conflict (id) do nothing;
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

-- ৬) (ঐচ্ছিক) পুরনো singleton settings টেবিল আর ব্যবহার হবে না, কিন্তু
--    নিরাপত্তার জন্য এখনই ডিলিট করা হচ্ছে না — চাইলে ম্যানুয়ালি ডিলিট করতে
--    পারবেন: drop table if exists settings;

-- ═══════════════════════════════════════════════════════════════
-- এরপর কী করবেন:
-- • app.js/index.html/style.css নতুন ভার্সন দিয়ে redeploy করুন।
-- • লগিন স্ক্রিনে নিচে "Super Admin" লিংকে ক্লিক করে প্রথম Super Admin
--   অ্যাকাউন্ট বানিয়ে নিন (phone + password) — platform_admins টেবিল
--   খালি থাকলে অ্যাপ নিজেই "Create Super Admin" ফর্ম দেখাবে।
-- • আপনার আগের মেস এখন mess_id = 'MS-001' হিসেবে চলবে, সব সদস্য/মিল/
--   বাজার/ডিপোজিট ইতিহাস অক্ষত আছে। আগের মতোই ফোন+Password দিয়ে লগিন
--   করতে পারবেন।
-- ═══════════════════════════════════════════════════════════════
