# Meal Tracker (মেস খাতা) — Deploy Guide

আপনার কাছে Vercel, Supabase, আর GitHub অ্যাকাউন্ট আছে ধরে নিয়ে — নিচের ধাপগুলো ক্রমানুসারে করুন। মোট সময় লাগবে ~১৫-২০ মিনিট।

**ফাইল স্ট্রাকচার:**
```
├── index.html            ← পেজ মার্কআপ
├── style.css             ← সব CSS/ডিজাইন
├── config.js             ← শুধু Supabase URL/Key (এই একটাই এডিট করবেন)
├── app.js                ← পুরো অ্যাপ লজিক
├── schema.sql             ← নতুন Supabase প্রজেক্টে একবার রান করার SQL
├── migration.sql          ← আগে থেকে deploy করা থাকলে এইটা রান করুন (schema.sql না)
├── manifest.json          ← PWA ("Install App") কনফিগ
├── sw.js                  ← PWA service worker
├── icon-192.png / icon-512.png / icon-512-maskable.png  ← অ্যাপ আইকন
└── README.md              ← এই ফাইল
```
সব ফাইলই একই ফোল্ডারে/রিপোতে একসাথে থাকা লাগবে।

---

## আপনি কি নতুন করে বসাচ্ছেন, নাকি আগে থেকে চালু আছে?

- **একদম নতুন** → নিচের ধাপ ১-৫ অনুসরণ করুন (schema.sql ব্যবহার হবে)।
- **আগে একবার deploy করেছিলেন (PIN-based পুরনো ভার্সন)** → ধাপ ১-২ স্কিপ করুন (Supabase প্রজেক্ট আগে থেকেই আছে), কিন্তু ধাপ ৩-এ `schema.sql`-এর বদলে **`migration.sql`** রান করুন, তারপর ওই ফাইলের ভেতরের নির্দেশনা অনুযায়ী নিজেকে Owner বানান।

---

## ধাপ ১ — Supabase-এ Database বানান (নতুন হলে)

1. [supabase.com](https://supabase.com) → **New Project** — নাম দিন (যেমন `mess-khata`), একটা Database Password সেট করুন, Region **Singapore** বা কাছেরটা বাছুন।
2. প্রজেক্ট রেডি হতে ~২ মিনিট লাগবে।
3. বাম সাইডবার থেকে **SQL Editor** → **New query** → `schema.sql`-এর পুরো কনটেন্ট পেস্ট → **Run**।
   - এটা ৭টা টেবিল বানাবে: `settings`, `members`, `meal_entries`, `bazar_expenses`, `other_expenses`, `deposits`, `managers`।
4. **Project Settings → API** থেকে কপি করে রাখুন:
   - **Project URL**
   - **anon / public** key

> ⚠️ **`service_role` key কখনো ব্যবহার করবেন না** — শুধু **anon/public** key।

---

## ধাপ ২ — config.js-এ Supabase কনফিগার করুন

```js
const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';
```
এই দুইটা বদলে দিয়ে সেভ করুন — এই একটা ফাইলই এডিট করা লাগবে।

---

## ধাপ ৩ — GitHub-এ পুশ করুন

```bash

git add .
git commit -m "Meal Tracker — deploy"
git branch -M main
git remote add origin https://github.com/<আপনার-ইউজারনেম>/mess-khata.git
git push -u origin main
```

---

## ধাপ ৪ — Vercel-এ Deploy করুন

1. [vercel.com/new](https://vercel.com/new) → GitHub রিপো **Import** করুন।
2. Framework Preset: **Other** (কোনো build step লাগবে না)।
3. **Deploy** — একটা URL পাবেন (যেমন `mess-khata.vercel.app`)। HTTPS আবশ্যক PWA install-এর জন্য — Vercel এটা এমনিই দেয়।

---

## ধাপ ৫ — প্রথমবার ব্যবহার (Setup)

1. আপনার Vercel URL খুলুন।
2. **মেসের নাম + আপনার নাম + ফোন নম্বর + Password** দিয়ে "খাতা তৈরি করুন"। আপনি অটোমেটিক **Owner (Super Admin)** হয়ে যাবেন।
3. Members পেজ থেকে বাকি সবাইকে যোগ করুন — প্রতিজনের **ফোন নম্বর ও একটা Password** সেট করে দিন (Member এডিট মোডালে)। এটাই তাদের লগিন হবে।
4. Monthly Summary পেজ থেকে প্রতি মাসে কাকে Manager করবেন সেটা assign করুন — সেই মাসে সে অটোমেটিক এডিট অ্যাক্সেস পাবে।

---

## Login ও Role সিস্টেম

| Role | কীভাবে পাবে | কী করতে পারবে |
|---|---|---|
| **Owner (Super Admin)** | Setup-এর সময় যিনি অ্যাকাউন্ট বানিয়েছেন | সব দেখা + সব এডিট + Mess Name বদল + Settings |
| **এই মাসের Manager** | Monthly Summary পেজ থেকে assign করা হলে | সব দেখা + Member/Meal/Bazar/Deposit এডিট (Settings/Mess-name বাদে) |
| **বাকি সব Member** | নিজের ফোন+password দিয়ে লগিন | শুধু দেখা (View Only) — কিছু এডিট/ডিলিট করতে পারবে না |

Manager assignment মাস বদলালে (বা নতুন করে assign করলে) অটোমেটিক আপডেট হয় — কাউকে ম্যানুয়ালি কিছু করতে হয় না।

---

## নতুন যা যা যোগ হলো এই আপডেটে

- **Join-date validation**: কোনো member-এর যোগদানের তারিখের আগের কোনো দিনে তার মিল যোগ করা যাবে না (Daily Meal Entry পেজে অটো হাইড হয়ে যাবে)।
- **Duplicate-key বাগ ফিক্স**: একসাথে একাধিক নতুন member-এর মিল Save করলে যে "duplicate key" এরর আসতো, সেটার আসল কারণ ছিল ID generation-এর বাগ (একই batch-এ সবাইকে ভুল করে একই ID দেওয়া হতো) — মিলের ভ্যালু একই হওয়া কখনোই সমস্যা ছিল না, এখন ঠিক করা হয়েছে।
- **Month-end Carry Forward**: Dashboard-এ ব্যানার দেখাবে যদি আগের মাসের ব্যালেন্স এখনো পরের মাসে transfer করা না থাকে — এক ক্লিকে সবার +/- ব্যালেন্স next month-এর deposit হিসেবে বসে যাবে। (সম্পূর্ণ silent-automatic না, যেহেতু static site-এ real cron job নেই — Owner/Manager লগিন করলে prompt দেখাবে।)
- **Deposit-এ শূন্য/ঋণাত্মক amount**: এখন অনুমোদিত (carry-forward-এর জন্য দরকার ছিল)।
- **Bazar "Bought By" এখন dropdown**, আর একটা ছোট **item-list builder** যোগ হয়েছে — একটা একটা আইটেম (নাম+দাম) যোগ করলে Amount আর Notes অটো বসে যায়।
- **Per-member Login** (ফোন+Password), Role-based access, **Logout বাটন**।
- **PWA**: এখন হোমস্ক্রিনে "Meal Tracker" নামে অ্যাপের মতো ইনস্টল করা যাবে (Chrome/Safari-তে "Add to Home Screen" / "Install App" অপশন আসবে)।

---

## নিরাপত্তা নিয়ে honest কথা

Login পুরোপুরি app-এর ভেতরে (browser-এ) চেক হয় — Supabase Row Level Security পুরোপুরি খোলা। Password হ্যাশ (SHA-256) করে রাখা হয় প্লেইন-টেক্সটের বদলে, কিন্তু এটা সত্যিকারের bcrypt/Argon2-এর মতো শক্তিশালী না, আর RLS policy খোলা থাকায় Supabase URL+key জানলে কেউ login screen এড়িয়ে সরাসরি API কল করতে পারবে। ছোট মেসের রোজকার হিসাবের জন্য এটা সাধারণত যথেষ্ট। সত্যিকারের সংবেদনশীল ডেটার জন্য Supabase Auth দিয়ে আরও শক্ত করা যায় — দরকার হলে বলবেন।

## Backup
Supabase Dashboard → Database → Backups-এ দৈনিক automatic backup পাবেন (free tier-এও কিছুদিন থাকে)।
