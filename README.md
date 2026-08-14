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
- **আগে থেকে চালু আছে (আগের যেকোনো ভার্সন)** → ধাপ ১-২ স্কিপ করুন (Supabase প্রজেক্ট আগে থেকেই আছে), কিন্তু ধাপ ৩-এ `schema.sql`-এর বদলে **`migration.sql`** রান করুন। এতে আপনার আগের সব member/meal/bazar/deposit ডেটা অক্ষত থাকবে, আগের মেসটা নতুন সিস্টেমে `MS-001` নামে যুক্ত হবে, এবং আগের মতোই ফোন+Password দিয়ে লগিন করতে পারবেন।

---

## ধাপ ১ — Supabase-এ Database বানান (নতুন হলে)

1. [supabase.com](https://supabase.com) → **New Project** — নাম দিন (যেমন `mess-khata`), একটা Database Password সেট করুন, Region **Singapore** বা কাছেরটা বাছুন।
2. প্রজেক্ট রেডি হতে ~২ মিনিট লাগবে।
3. বাম সাইডবার থেকে **SQL Editor** → **New query** → `schema.sql`-এর পুরো কনটেন্ট পেস্ট → **Run**।
   - এটা টেবিল বানাবে: `messes`, `platform_admins`, `members`, `meal_entries`, `bazar_expenses`, `other_expenses`, `deposits`, `managers`।
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
git init
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

এই অ্যাপে এখন **একাধিক মেস** একই ডেটাবেজে আলাদা আলাদা হিসাব রাখতে পারে। প্রতিটা মেসের একজন **Owner** থাকে, আর পুরো প্ল্যাটফর্ম নিয়ন্ত্রণের জন্য আলাদা একটা **Super Admin** থাকে।

1. আপনার Vercel URL খুলুন — লগিন স্ক্রিন আসবে।
2. **"নতুন মেস তৈরি করুন"** চাপুন → মেসের নাম + আপনার নাম + ফোন নম্বর + Password দিন। আপনি অটোমেটিক সেই মেসের **Owner** হয়ে যাবেন। (ফোন নম্বর সব মেস জুড়ে ইউনিক হতে হবে।)
3. Members পেজ থেকে বাকি সবাইকে যোগ করুন — প্রতিজনের **ফোন নম্বর ও একটা Password** সেট করে দিন (Member এডিট মোডালে)। এটাই তাদের লগিন হবে।
4. Monthly Summary পেজ থেকে প্রতি মাসে কাকে Manager করবেন সেটা assign করুন — সেই মাসে সে অটোমেটিক এডিট অ্যাক্সেস পাবে।
5. (ঐচ্ছিক) লগিন স্ক্রিনের নিচে **"Super Admin"** লিংকে ক্লিক করে প্ল্যাটফর্মের প্রথম Super Admin অ্যাকাউন্ট বানিয়ে নিন — সব মেস এক জায়গা থেকে দেখতে/ম্যানেজ করতে পারবেন। প্রতিটা নতুন মেস "নতুন মেস তৈরি করুন" দিয়ে যে কেউ, যে কোনো সময় বানাতে পারবে।

---

## Login ও Role সিস্টেম

| Role | কীভাবে পাবে | কী করতে পারবে |
|---|---|---|
| **Platform Super Admin** | লগিন স্ক্রিনের "Super Admin" লিংক থেকে বানানো/লগিন | সব মেসের তালিকা, প্রতিটার মূল হিসাব দেখা, যেকোনো মেস Owner হিসেবে খুলে এডিট করা, মেস ডিলিট করা |
| **Mess Owner** | সেই মেস তৈরির সময় যিনি অ্যাকাউন্ট বানিয়েছেন | সেই মেসের সব দেখা + সব এডিট + Mess Name বদল + Settings |
| **এই মাসের Manager** | Monthly Summary পেজ থেকে assign করা হলে | সব দেখা + Member/Meal/Bazar/Deposit এডিট (Settings/Mess-name বাদে) |
| **বাকি সব Member** | নিজের ফোন+password দিয়ে লগিন | শুধু দেখা (View Only) — সাইডবার থেকে নিজের Password বদলাতে পারবে |

Manager assignment মাস বদলালে (বা নতুন করে assign করলে) অটোমেটিক আপডেট হয়। ফোন নম্বর দিয়ে লগিন করলে অ্যাপ নিজেই বুঝে নেয় সেই ফোন কোন মেসের member — মেস আলাদা করে বাছাই করা লাগে না।

---

## এই আপডেটে যা যা নতুন যোগ হলো

- **Multiple Mess সাপোর্ট**: একই অ্যাপ/ডেটাবেজে অনেকগুলো মেস একদম আলাদা আলাদাভাবে নিজেদের meal/bazar/deposit হিসাব রাখতে পারবে। লগিন স্ক্রিন থেকে যেকোনো সময় "নতুন মেস তৈরি করুন" দিয়ে নতুন মেস খোলা যাবে।
- **Super Admin Dashboard** (প্ল্যাটফর্ম-লেভেল): সব মেসের তালিকা, প্রতিটার member সংখ্যা/এই মাসের meal/বাজার এক নজরে, "Open" করে সরাসরি সেই মেস Owner হিসেবে ম্যানেজ, আর দরকার হলে মেস ডিলিট।
- **Manager-এর নতুন ক্ষমতা — Inactive Period**: Member Edit মোডালে এখন "Inactive Period (From–To)" ফিল্ড আছে — এই তারিখগুলোতে সেই member Daily Meal Entry-তে দেখাবে না ও তার মিল স্বয়ংক্রিয়ভাবে বন্ধ থাকবে (যেমন কেউ বাড়িতে গেলে)।
- **Bazar লিস্ট পেস্ট করে অটো-স্প্লিট**: Add Bazar Expense মোডালে "অথবা পুরো লিস্ট একসাথে পেস্ট করুন" অপশন — প্রতি লাইনে একটা আইটেম, শেষে দাম লিখে পেস্ট করলে অটোমেটিক আলাদা আলাদা আইটেম হিসেবে যোগ হয়ে টোটাল বসে যায়।
- **Meal Fund vs Other Expense Fund — সম্পূর্ণ আলাদা হিসাব**: এখন Deposits পেজ ও Monthly Summary শুধু মিলের টাকা দেখায়। Other Expenses পেজের ভেতরেই তার নিজস্ব "Other Fund টাকা কালেকশন" সেকশন আছে (কে কত দিলো, কত খরচ হলো, কত ব্যালেন্স আছে) — এটা মিলের হিসাবের সাথে কখনো মিশবে না।
- **সবাই নিজের Password পরিবর্তন করতে পারবে**: সাইডবারে "Password পরিবর্তন করুন" বাটন।
- **Dark mode আইকন ফিক্স**: সাইডবারের নিচে নাম-এর পাশের আইকন আগে অনেক বড় দেখাচ্ছিল, এখন ছোট (15px) করে দেওয়া হয়েছে।
- (আগের আপডেট থেকে) Join-date validation, Month-end Carry Forward, Bazar item-list builder, per-member login, PWA install।

---

## নিরাপত্তা নিয়ে honest কথা

Login পুরোপুরি app-এর ভেতরে (browser-এ) চেক হয় — Supabase Row Level Security পুরোপুরি খোলা (Super Admin-সহ সব টেবিলে)। Password হ্যাশ (SHA-256) করে রাখা হয় প্লেইন-টেক্সটের বদলে, কিন্তু এটা সত্যিকারের bcrypt/Argon2-এর মতো শক্তিশালী না, আর RLS policy খোলা থাকায় Supabase URL+key জানলে কেউ login screen এড়িয়ে সরাসরি API কল করতে পারবে (অন্য মেসের ডেটাসহ)। ছোট মেসের রোজকার হিসাবের জন্য এটা সাধারণত যথেষ্ট। সত্যিকারের সংবেদনশীল ডেটার জন্য Supabase Auth দিয়ে আরও শক্ত করা যায় — দরকার হলে বলবেন।

## Backup
Supabase Dashboard → Database → Backups-এ দৈনিক automatic backup পাবেন (free tier-এও কিছুদিন থাকে)।
