/* ═══════════════════════════════════════════════════════════
   ⚠️  SUPABASE CONFIG — এখানে আপনার প্রজেক্টের তথ্য বসান
   Supabase Dashboard → Project Settings → API → এখান থেকে পাবেন
   ═══════════════════════════════════════════════════════════ */
const SUPABASE_URL = 'https://zdikuspfrbsfuuqicqji.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkaWt1c3BmcmJzZnV1cWljcWppIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NjU1MDI1NiwiZXhwIjoyMTAyMTI2MjU2fQ.J82oG0z_7vCzhZruw1CNUTZ4gufuHxTURK82-ULdrkU';

const supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);



