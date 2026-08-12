# মেস খাতা — Deploy Guide (Supabase + Vercel + GitHub)

আপনার কাছে Vercel, Supabase, আর GitHub অ্যাকাউন্ট আছে ধরে নিয়ে — নিচের ধাপগুলো ক্রমানুসারে করুন। মোট সময় লাগবে ~১৫ মিনিট।

**ফাইল স্ট্রাকচার:**
```
├── index.html   ← পেজ মার্কআপ
├── style.css    ← সব CSS/ডিজাইন
├── config.js    ← শুধু Supabase URL/Key (এই একটাই এডিট করবেন)
├── app.js       ← পুরো অ্যাপ লজিক
├── schema.sql   ← Supabase-এ একবার রান করার SQL
└── README.md    ← এই ফাইল
```
৫টা ফাইলই একই ফোল্ডারে/রিপোতে একসাথে থাকা লাগবে — index.html বাকিদের relative path (`style.css`, `config.js`, `app.js`) দিয়ে খুঁজে নেয়।

---


## ধাপ ১ — Supabase-এ Database বানান

1. [supabase.com](https://supabase.com) → **New Project** — নাম দিন (যেমন `mess-khata`), একটা Database Password সেট করুন (এটা আলাদা রাখুন, পরে লাগবে না তবে হারাবেন না), Region হিসেবে **Singapore** বা কাছেরটা বাছুন (কম latency)।
2. প্রজেক্ট রেডি হতে ~২ মিনিট লাগবে।
3. বাম সাইডবার থেকে **SQL Editor** এ যান → **New query**।
4. এই রিপোর মধ্যে থাকা `schema.sql` ফাইলের **পুরো কনটেন্ট কপি-পেস্ট করুন** → **Run** চাপুন।
   - সফল হলে "Success. No rows returned" দেখাবে।
   - এটা ৭টা টেবিল বানাবে: `settings`, `members`, `meal_entries`, `bazar_expenses`, `other_expenses`, `deposits`, `managers`।
5. বাম সাইডবার থেকে **Project Settings → API** এ যান। দুটো জিনিস কপি করে রাখুন:
   - **Project URL** (দেখতে এরকম: `https://xxxxxxxxxxxx.supabase.co`)
   - **anon / public** key (একটা লম্বা টোকেন, `eyJ...` দিয়ে শুরু)

> ⚠️ **`service_role` key কখনো কপি করবেন না/ব্যবহার করবেন না** — ওটা সিক্রেট, ব্রাউজারে থাকা কোডে বসালে যে কেউ আপনার পুরো ডেটাবেস মুছে ফেলতে পারবে। শুধু **anon/public** key ব্যবহার করুন।

---

## ধাপ ২ — config.js-এ Supabase কনফিগার করুন

`config.js` ফাইলটা খুলুন — পুরোটাই এরকম দেখতে:

```js
const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';
```

এই দুইটা ভ্যালু ধাপ ১-এ কপি করা URL আর anon key দিয়ে বদলে দিন, ফাইল সেভ করুন। (এই একটা ফাইলই আপনাকে এডিট করতে হবে — বাকি সব ফাইল ছোঁয়া লাগবে না।)

---

## ধাপ ৩ — GitHub-এ পুশ করুন

```bash
git init
git add .
git commit -m "Meal Management — initial deploy"
git branch -M main
git remote add origin https://github.com/<আপনার-ইউজারনেম>/mess-khata.git
git push -u origin main
```

(GitHub-এ আগে থেকে একটা খালি রিপো বানিয়ে নিন `mess-khata` নামে — কোনো README/gitignore ছাড়া তৈরি করবেন যাতে conflict না হয়।)

---

## ধাপ ৪ — Vercel-এ Deploy করুন

1. [vercel.com/new](https://vercel.com/new) → আপনার GitHub `mess-khata` রিপো **Import** করুন।
2. Framework Preset: **Other** (কোনো build step লাগবে না, এটা plain static HTML)।
3. **Deploy** চাপুন — ৩০ সেকেন্ডের মধ্যে লাইভ হয়ে যাবে, একটা URL পাবেন (যেমন `mess-khata.vercel.app`)।
4. চাইলে Vercel-এর Settings → Domains থেকে নিজের কাস্টম ডোমেইনও যোগ করতে পারেন।

---

## ধাপ ৫ — প্রথমবার ব্যবহার

1. আপনার Vercel URL খুলুন।
2. মেসের নাম + একটা Manager PIN দিয়ে "খাতা তৈরি করুন" চাপুন।
3. এখন Manager PIN দিয়ে লগিন করে সব ঠিকঠাক আছে কিনা চেক করুন — একজন Member যোগ করে দেখুন Supabase Dashboard-এর **Table Editor → members**-এ সেটা দেখা যাচ্ছে কিনা।
4. Settings → Access PINs থেকে একটা **Member (View-Only) PIN** সেট করে বাকিদের দিন।

---

## যা জানা দরকার

- **এটা সবার জন্য একই শেয়ার্ড ডেটাবেস** — যে কেউ সঠিক PIN দিয়ে লগিন করলে সবাই একই তথ্য দেখবে/লিখবে, এটাই উদ্দেশ্য ছিল।
- **নিরাপত্তা নিয়ে honest কথা:** PIN-চেক পুরোপুরি app-এর ভেতরে (browser-এ) হয়, Supabase-এর Row Level Security পুরোপুরি খোলা রাখা আছে (`schema.sql`-এ policy কমেন্ট দেখুন)। মানে টেকনিক্যালি কেউ যদি আপনার Supabase URL + anon key বের করে ফেলে (browser dev-tools থেকে দেখা সম্ভব), সে সরাসরি API কল করে ডেটা পড়তে/লিখতে পারবে, PIN স্ক্রিন এড়িয়ে। ছোট একটা মেসের রোজকার হিসাবের জন্য এটা সাধারণত যথেষ্ট, কিন্তু সত্যিকারের সংবেদনশীল/আর্থিক তথ্যের জন্য উপযুক্ত না। ভবিষ্যতে চাইলে Supabase Auth (প্রতি member-এর জন্য আলাদা account) দিয়ে আরও শক্ত করা যায় — বললে সেটাও বানিয়ে দিতে পারি।
- **Backup:** Supabase Dashboard → Database → Backups-এ দৈনিক automatic backup পাবেন (free tier-এও কিছুদিন থাকে)। বড় পরিসরে ব্যবহার করলে Supabase-এর paid plan-এ point-in-time recovery পাওয়া যায়।
- **খরচ:** Supabase আর Vercel দুটোরই Free tier একটা ছোট মেসের জন্য যথেষ্ট। ইউজার/ডেটা অনেক বাড়লে তখন paid plan ভাবা যাবে।
