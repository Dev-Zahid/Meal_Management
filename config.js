/* ═══════════════════════════════════════════════════════════
   ⚠️  SUPABASE CONFIG — এখানে আপনার প্রজেক্টের তথ্য বসান
   Supabase Dashboard → Project Settings → API → এখান থেকে পাবেন
   ═══════════════════════════════════════════════════════════ */
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);
