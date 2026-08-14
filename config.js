/* ═══════════════════════════════════════════════════════════
   ⚠️  SUPABASE CONFIG — এখানে আপনার প্রজেক্টের তথ্য বসান
   Supabase Dashboard → Project Settings → API → এখান থেকে পাবেন
   ═══════════════════════════════════════════════════════════ */
const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';

const supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
