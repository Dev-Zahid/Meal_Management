/* ═══════════════════════════════════════════════════════════
   ⚠️  SUPABASE CONFIG — এখানে আপনার প্রজেক্টের তথ্য বসান
   Supabase Dashboard → Project Settings → API → এখান থেকে পাবেন
   ═══════════════════════════════════════════════════════════ */
const SUPABASE_URL = 'https://zdikuspfrbsfuuqicqji.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkaWt1c3BmcmJzZnV1cWljcWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY1NTAyNTYsImV4cCI6MjEwMjEyNjI1Nn0.KOCLXUBrYevUsgXONiGioFZZTnbN3eq1EPggQhm_Onc';

const supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
