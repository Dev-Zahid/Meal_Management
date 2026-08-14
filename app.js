/* ═══════════════════════════════════════════════════════════
   ICONS — inline SVG, minimal line style
   ═══════════════════════════════════════════════════════════ */
function svg(inner,extra){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra||''}>${inner}</svg>`;}
const ICONS={
  LOGO: svg('<path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M7 12c0-2 .8-4 .8-6M12 12c0-3 .3-5 .3-7M17 12c0-2-.8-4-.8-6"/>'),
  LOCK: svg('<rect x="4" y="11" width="16" height="10" rx="2.2"/><path d="M7 11V8a5 5 0 0 1 10 0v3"/>'),
  HOME: svg('<path d="M3 11l9-8 9 8"/><path d="M5.5 10v10.2h13V10"/><path d="M9.5 20.2v-6h5v6"/>'),
  USERS: svg('<circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6"/><circle cx="17.3" cy="9" r="2.6"/><path d="M15.4 14.3c2.7.4 4.6 2.6 4.6 5.9"/>'),
  MEAL: svg('<path d="M6 2v7.5M4 2v4.2a2 2 0 0 0 4 0V2M6 13.5V22"/><path d="M18 2c-2.2 1-3.4 3.2-3.4 6.3 0 2.6 1.4 3.2 3.4 3.2V22"/>'),
  CART: svg('<circle cx="9" cy="20.2" r="1.3"/><circle cx="17.5" cy="20.2" r="1.3"/><path d="M2 3.2h2.2l2.3 12a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6l1.6-8.7H5.8"/>'),
  RECEIPT: svg('<path d="M5.5 3h13v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>'),
  CASH: svg('<rect x="2" y="6" width="20" height="12" rx="2.2"/><circle cx="12" cy="12" r="2.8"/><path d="M6 9v0M18 15v0"/>'),
  CHART: svg('<path d="M4 21V4"/><path d="M4 21h17" stroke-width="1.8"/><rect x="6.5" y="12" width="3.2" height="9" fill="currentColor" stroke="none"/><rect x="12.4" y="7" width="3.2" height="14" fill="currentColor" stroke="none"/><rect x="18.3" y="10.5" width="3.2" height="10.5" fill="currentColor" stroke="none"/>'),
  SETTINGS: svg('<line x1="4" y1="6" x2="20" y2="6"/><circle cx="9" cy="6" r="2.1" fill="var(--surface)"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="15" cy="12" r="2.1" fill="var(--surface)"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="7.5" cy="18" r="2.1" fill="var(--surface)"/>'),
  MOON: svg('<path d="M20 14.3A8.4 8.4 0 1 1 9.7 4a6.8 6.8 0 0 0 10.3 10.3z"/>'),
  SUN: svg('<circle cx="12" cy="12" r="4.3"/><path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/>'),
  MENU: svg('<line x1="3.5" y1="6.5" x2="20.5" y2="6.5"/><line x1="3.5" y1="12" x2="20.5" y2="12"/><line x1="3.5" y1="17.5" x2="20.5" y2="17.5"/>'),
  REFRESH: svg('<path d="M21 12a9 9 0 1 1-3.1-6.8"/><path d="M21 3.3V10h-6.7"/>'),
  PLUS: svg('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'),
  SEARCH: svg('<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.4" y2="16.4"/>'),
  CALENDAR: svg('<rect x="3" y="5" width="18" height="16" rx="2.2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/>'),
  CHEVL: svg('<polyline points="15 18 9 12 15 6"/>'),
  CHEVR: svg('<polyline points="9 18 15 12 9 6"/>'),
  CHECK: svg('<polyline points="20 6.5 9.5 17 4 12"/>'),
  HISTORY: svg('<circle cx="12" cy="13" r="8.2"/><path d="M12 8.7V13l3 2"/><path d="M9 2.3h6"/>'),
  INFO: svg('<circle cx="12" cy="12" r="9"/><line x1="12" y1="10.6" x2="12" y2="16.2"/><circle cx="12" cy="7.5" r=".7" fill="currentColor" stroke="none"/>'),
  ALERT: svg('<path d="M12 3 2.3 20.5h19.4z"/><line x1="12" y1="9" x2="12" y2="14"/><circle cx="12" cy="17.4" r=".7" fill="currentColor" stroke="none"/>'),
  DOWNLOAD: svg('<path d="M12 3v12.5"/><polyline points="7 11 12 16 17 11"/><path d="M4 20h16"/>'),
  UPLOAD: svg('<path d="M12 16.5V4"/><polyline points="7 9 12 4 17 9"/><path d="M4 20h16"/>'),
  STORE: svg('<path d="M3 9.5 4 4h16l1 5.5"/><path d="M3 9.5a2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 5.2 0 2.6 2.6 0 0 0 4.4 1.9"/><path d="M5 10v10.2h14V10"/>'),
  CROWN: svg('<path d="M3 8.5l4 3 5-6.5 5 6.5 4-3-2.1 11.5H5.1z"/>'),
  TRASH: svg('<path d="M4 7h16"/><path d="M6 7l1 13.2a2 2 0 0 0 2 1.8h6a2 2 0 0 0 2-1.8L18 7"/><path d="M9.5 7V4.3h5V7"/>'),
  X: svg('<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>'),
  EDIT: svg('<path d="M4 20h4.2L19 9.2a2.1 2.1 0 0 0 0-3L18 5a2.1 2.1 0 0 0-3 0L4.2 15.8z"/><path d="M14 7l3 3"/>'),
  EYE: svg('<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>'),
  EYEOFF: svg('<path d="M3 3l18 18"/><path d="M10.6 5.2A10.6 10.6 0 0 1 12 5c6.4 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.1M6.5 6.6C3.7 8.5 2 12 2 12s3.6 7 10 7a10.5 10.5 0 0 0 3.1-.5"/><path d="M9.9 10a3 3 0 0 0 4.2 4.2"/>'),
  EMPTY: svg('<path d="M4 9h16l-1.4 10.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8z"/><path d="M9 9V6.5a3 3 0 0 1 6 0V9"/>')
};
/* (ICONS object above is still used for dynamically-rendered rows, e.g. ${ICONS.TRASH} in template literals) */

/* ═══════════════════════════════════════════════════════════
   GENERIC HELPERS
   ═══════════════════════════════════════════════════════════ */
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTHS_BN=['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
function N(v){return Number(v)||0;}
function cur(){return '৳';}
function fmt(v){return N(v).toLocaleString('en-IN',{maximumFractionDigits:2});}
function money(v){return cur()+fmt(v);}
function fmtDate(iso){if(!iso)return '—';const d=new Date(iso+'T00:00:00');if(isNaN(d))return iso;return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});}
function todayISO(){const d=new Date();const pad=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;}
function curMon(){return MONTHS[new Date().getMonth()];}
function curYr(){return new Date().getFullYear();}
function daysInMonth(month,year){return new Date(year,MONTHS.indexOf(month)+1,0).getDate();}
function toast(msg,type){
  const root=document.getElementById('toast-root');
  const t=document.createElement('div');
  t.className='toast'+(type==='ok'?' ok':type==='er'?' er':'');
  t.textContent=msg;
  root.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),250);},2600);
}
function openM(id){document.getElementById(id).classList.add('on');}
function closeM(id){document.getElementById(id).classList.remove('on');}
function setBusy(id,busy,html){const b=document.getElementById(id);if(!b)return;b.disabled=busy;if(busy){b.dataset.orig=b.innerHTML;b.innerHTML='<span class="spin"></span>';}else{b.innerHTML=html!==undefined?html:(b.dataset.orig||b.innerHTML);}}
function badge(status){const map={Active:'gn',Inactive:'am',Left:'gy',Settled:'gn',Due:'rd',Advance:'bl'};return `<span class="badge ${map[status]||'gy'}">${status}</span>`;}
function requireAdmin(){ if(!isAdmin){ toast('শুধু Owner বা এই মাসের Manager এটা করতে পারবেন','er'); return false; } return true; }
function requireSuperAdmin(){ if(!isSuperAdmin){ toast('শুধু Owner (Super Admin) এটা করতে পারবেন','er'); return false; } return true; }
function initials(name){return (name||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();}
const AV_COLORS=['#1F6F54','#DD9E33','#2E7B79','#C6553D','#6E5DA6','#3C7DBF','#B4652F','#4E8B3B'];
function avatarColor(id){let h=0;for(let i=0;i<id.length;i++)h=(h*31+id.charCodeAt(i))>>>0;return AV_COLORS[h%AV_COLORS.length];}
function avatar(m){return `<div class="avatar" style="background:${avatarColor(m.id)}">${initials(m.name)}</div>`;}
function escapeHtml(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function inMonth(dateStr,month,year){const d=new Date(dateStr+'T00:00:00');return MONTHS[d.getMonth()]===month&&d.getFullYear()===year;}
// True if a member has been marked inactive (by the Manager/Owner) for a
// date range that covers dateISO — meal off automatically, hidden from
// Daily Meal Entry for those dates, even if their overall status is Active.
function isInactiveOn(m,dateISO){
  if(!m.inactiveFrom||!m.inactiveTo)return false;
  return dateISO>=m.inactiveFrom&&dateISO<=m.inactiveTo;
}

/* ═══════════════════════════════════════════════════════════
   STORAGE — Claude artifact persistent storage (shared across
   everyone who opens this artifact, so the whole mess sees one ledger)
   ═══════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════
   SUPABASE DATA LAYER
   ═══════════════════════════════════════════════════════════ */
function emptySettings(){ return {messName:'',theme:'light',ownerMemberId:''}; }
let STATE=null;

// Generates a globally-unique-enough id (no longer relies on scanning an
// existing list, since ids must now be unique across ALL messes, not just
// within one). Safe to call many times in a tight loop (e.g. batch-saving
// a whole day's meal grid) — a per-call counter + timestamp + random tail
// means no two calls ever collide even in the same millisecond.
let _idSeq=0;
function genId(prefix){
  _idSeq++;
  return prefix+Date.now().toString(36)+'-'+_idSeq.toString(36)+Math.random().toString(36).slice(2,6);
}

async function loadState(messId){
  const [s,mem,meals,bazar,other,dep,mgrs]=await Promise.all([
    supa.from('messes').select('*').eq('id',messId).maybeSingle(),
    supa.from('members').select('*').eq('mess_id',messId),
    supa.from('meal_entries').select('*').eq('mess_id',messId),
    supa.from('bazar_expenses').select('*').eq('mess_id',messId),
    supa.from('other_expenses').select('*').eq('mess_id',messId),
    supa.from('deposits').select('*').eq('mess_id',messId),
    supa.from('managers').select('*').eq('mess_id',messId),
  ]);
  const firstErr=[s,mem,meals,bazar,other,dep,mgrs].find(r=>r.error);
  if(firstErr){ toast('Database connect করা যায়নি: '+firstErr.error.message,'er'); return null; }
  return {
    messId,
    settings: s.data ? {
      messName:s.data.name||'', theme:s.data.theme||'light', ownerMemberId:s.data.owner_member_id||''
    } : emptySettings(),
    members:(mem.data||[]).map(r=>({id:r.id,name:r.name,phone:r.phone||'',passwordHash:r.password_hash||'',status:r.status,joined:r.joined||'',left:r.left_date||'',inactiveFrom:r.inactive_from||'',inactiveTo:r.inactive_to||'',notes:r.notes||''})),
    mealEntries:(meals.data||[]).map(r=>({id:r.id,date:r.date,mid:r.member_id,name:r.member_name,meals:Number(r.meals),guest:Number(r.guest),notes:r.notes||''})),
    bazarExp:(bazar.data||[]).map(r=>({id:r.id,date:r.date,by:r.bought_by||'',amount:Number(r.amount),notes:r.notes||''})),
    otherExp:(other.data||[]).map(r=>({id:r.id,date:r.date,title:r.title,amount:Number(r.amount),notes:r.notes||''})),
    deposits:(dep.data||[]).map(r=>({id:r.id,date:r.date,mid:r.member_id,name:r.member_name,amount:Number(r.amount),method:r.method||'Cash',type:r.type||'Meal',notes:r.notes||''})),
    managers:(mgrs.data||[]).map(r=>({monthYear:r.month_year,mid:r.member_id,name:r.member_name})),
  };
}
// Runs a Supabase write and shows a toast on failure. Returns true/false.
async function dbOp(promise,failMsg){
  const {error}=await promise;
  if(error){ toast((failMsg||'Database error')+': '+error.message,'er'); return false; }
  return true;
}
// Called after a successful write: refresh every visible page from STATE + announce.
function persist(msg){ if(msg)toast(msg,'ok'); refreshAll(); return true; }

/* ═══════════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════════ */
let curPage='dashboard', mFilterStatus='All', mSearch='', editMemberId=null, mealSelDate=todayISO();
let isAdmin=false;        // isSuperAdmin || isMonthManager — edit rights across data pages (within a mess)
let isSuperAdmin=false;   // the Owner account created at setup — only role that can touch Settings (within a mess)
let isMonthManager=false; // whoever is assigned Manager for the CURRENT month
let currentMember=null;   // the logged-in member's row
let currentMessId=null;   // which mess's data STATE currently holds
let isPlatformAdmin=false;// platform-level Super Admin — not tied to any one mess, manages all messes
let platformAdmin=null;   // the logged-in platform_admins row

// Simple client-side password hashing (SHA-256 + a fixed app salt). This is
// NOT the same as proper server-side bcrypt/Argon2 hashing, but it means
// passwords are never stored or compared in plain text.
async function hashPassword(pw){
  const enc=new TextEncoder().encode('meskhata_v1::'+pw);
  const buf=await crypto.subtle.digest('SHA-256',enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

window.addEventListener('load', boot);
async function boot(){
  registerServiceWorker();
  if(SUPABASE_URL.includes('YOUR-PROJECT')){
    document.body.innerHTML='<div style="max-width:520px;margin:80px auto;font-family:sans-serif;line-height:1.6;padding:0 20px">'+
      '<h2>⚠️ Supabase কনফিগার করা হয়নি</h2>'+
      '<p>index.html-এর একদম শুরুতে <code>SUPABASE_URL</code> আর <code>SUPABASE_ANON_KEY</code> বসিয়ে আবার deploy করুন। README.md দেখুন।</p></div>';
    return;
  }
  document.documentElement.setAttribute('data-theme','light');
  document.getElementById('login-title').textContent='মেস খাতা';
  document.getElementById('login-sub').textContent='লগিন করতে আপনার ফোন নম্বর ও Password দিন।';
  document.getElementById('login-screen').style.display='flex';
  checkPlatformAdminExists();
}
function applyTheme(){
  const th=(STATE&&STATE.settings&&STATE.settings.theme)||'light';
  document.documentElement.setAttribute('data-theme',th);
  const lab=document.getElementById('theme-lab'); if(lab)lab.textContent=th==='dark'?'Light Mode':'Dark Mode';
}
function toggleTheme(){
  STATE.settings.theme=STATE.settings.theme==='dark'?'light':'dark';
  applyTheme();
  supa.from('messes').update({theme:STATE.settings.theme}).eq('id',currentMessId).then(()=>{});
}

/* ── Create a new Mess (any time, from the login screen — not just once) ── */
function openSetupScreen(){
  document.getElementById('login-screen').style.display='none';
  document.getElementById('su-name').value='';document.getElementById('su-owner-name').value='';
  document.getElementById('su-owner-phone').value='';document.getElementById('su-owner-pass').value='';
  document.getElementById('su-err').style.display='none';
  document.getElementById('setup-screen').style.display='flex';
}
function backToLogin(){
  document.getElementById('setup-screen').style.display='none';
  document.getElementById('sa-login-screen').style.display='none';
  document.getElementById('login-screen').style.display='flex';
}
async function doSetup(){
  const messName=document.getElementById('su-name').value.trim();
  const ownerName=document.getElementById('su-owner-name').value.trim();
  const ownerPhone=document.getElementById('su-owner-phone').value.trim();
  const ownerPass=document.getElementById('su-owner-pass').value;
  const err=document.getElementById('su-err'); err.style.display='none';
  if(!messName){err.textContent='মেসের নাম দিন';err.style.display='block';return;}
  if(!ownerName){err.textContent='আপনার নাম দিন';err.style.display='block';return;}
  if(!ownerPhone){err.textContent='ফোন নম্বর দিন';err.style.display='block';return;}
  if(!ownerPass||ownerPass.length<4){err.textContent='কমপক্ষে ৪ ক্যারেক্টারের Password দিন';err.style.display='block';return;}
  setBusy('su-btn',true);
  const messId=genId('MS-');
  const ownerId=genId('MB-');
  const passwordHash=await hashPassword(ownerPass);
  const messOk=await dbOp(supa.from('messes').insert({id:messId,name:messName,theme:'light'}),'মেস তৈরি করা যায়নি');
  if(!messOk){ setBusy('su-btn',false,'খাতা তৈরি করুন'); err.textContent='মেস তৈরি করা যায়নি'; err.style.display='block'; return; }
  const memberOk=await dbOp(supa.from('members').insert({id:ownerId,mess_id:messId,name:ownerName,phone:ownerPhone,password_hash:passwordHash,status:'Active',joined:todayISO(),notes:''}),'Owner account তৈরি করা যায়নি — হতে পারে এই ফোন নম্বর দিয়ে আগে থেকেই অন্য কোথাও একজন member আছে');
  if(!memberOk){ setBusy('su-btn',false,'খাতা তৈরি করুন'); return; }
  const ownerLinkOk=await dbOp(supa.from('messes').update({owner_member_id:ownerId}).eq('id',messId),'সেটআপ সেভ করা যায়নি');
  setBusy('su-btn',false,'খাতা তৈরি করুন');
  if(ownerLinkOk){
    currentMessId=messId;
    STATE={messId,settings:{messName,theme:'light',ownerMemberId:ownerId},members:[{id:ownerId,name:ownerName,phone:ownerPhone,passwordHash,status:'Active',joined:todayISO(),left:'',inactiveFrom:'',inactiveTo:'',notes:''}],mealEntries:[],bazarExp:[],otherExp:[],deposits:[],managers:[]};
    document.getElementById('setup-screen').style.display='none';
    currentMember=STATE.members[0]; isSuperAdmin=true; isMonthManager=false; isAdmin=true;
    applyTheme();
    showApp();
  } else { err.textContent='সেটআপ সেভ করা যায়নি — Supabase schema/migration ঠিকমতো রান হয়েছে কিনা দেখুন'; err.style.display='block'; }
}

/* ── Login (phone + password) ─────────────────────────────────
   phone নম্বর গোটা প্ল্যাটফর্ম জুড়ে ইউনিক, তাই মেস আলাদা করে বাছাই করা
   লাগে না — যে ফোন নম্বর দিয়ে লগিন করা হচ্ছে, সেটা প্রথমে platform_admins-এ
   খোঁজা হয় (Super Admin কিনা), তারপর members-এ (কোন মেসের member সেটা
   member.mess_id থেকেই বোঝা যায়)।
   Role is computed automatically (within that mess):
   • Owner (created at setup)                    → Super Admin of that mess (full access + Settings)
   • Whoever is this month's assigned Manager     → full access to data (not Settings)
   • Everyone else with a valid login             → view-only access to everything
*/
function togglePinVisibility(){
  const inp=document.getElementById('login-pass');
  const eye=document.getElementById('pin-eye');
  const showing=inp.type==='text';
  inp.type=showing?'password':'text';
  eye.innerHTML=showing?ICONS.EYE:ICONS.EYEOFF;
}
async function doLogin(){
  const phone=document.getElementById('login-phone').value.trim();
  const pass=document.getElementById('login-pass').value;
  const err=document.getElementById('login-err'); err.style.display='none';
  if(!phone||!pass){err.textContent='ফোন নম্বর ও Password দিন';err.style.display='block';return;}
  setBusy('login-btn',true);
  const hash=await hashPassword(pass);
  const {data:memRows,error:memErr}=await supa.from('members').select('*').eq('phone',phone).limit(1);
  setBusy('login-btn',false,'লগিন করুন');
  if(memErr){ err.textContent='Database error: '+memErr.message; err.style.display='block'; return; }
  if(!memRows||!memRows.length){err.textContent='এই ফোন নম্বর দিয়ে কোনো member পাওয়া যায়নি';err.style.display='block';return;}
  const row=memRows[0];
  if(!row.password_hash){err.textContent='আপনার Password এখনো সেট করা হয়নি — Manager/Owner-এর সাথে যোগাযোগ করুন';err.style.display='block';return;}
  if(hash!==row.password_hash){err.textContent='ভুল Password, আবার চেষ্টা করুন';err.style.display='block';return;}
  currentMessId=row.mess_id;
  STATE=await loadState(currentMessId);
  if(!STATE){ err.textContent='Database থেকে মেসের ডেটা লোড করা যায়নি'; err.style.display='block'; return; }
  currentMember=STATE.members.find(m=>m.id===row.id);
  isSuperAdmin=(STATE.settings.ownerMemberId===row.id);
  const mgr=managerFor(curMon(),curYr());
  isMonthManager=!!(mgr&&mgr.mid===row.id);
  isAdmin=isSuperAdmin||isMonthManager;
  isPlatformAdmin=false; platformAdmin=null;
  applyTheme();
  document.getElementById('login-screen').style.display='none';
  document.getElementById('login-phone').value='';document.getElementById('login-pass').value='';
  showApp();
}
function doLogout(){ location.reload(); }

/* ═══════════════════════════════════════════════════════════
   PLATFORM SUPER ADMIN — separate from a mess's own Owner. Controls
   ALL messes from one dashboard. Not tied to any single mess_id.
   ═══════════════════════════════════════════════════════════ */
async function checkPlatformAdminExists(){
  const {count}=await supa.from('platform_admins').select('*',{count:'exact',head:true});
  const link=document.getElementById('sa-entry-link');
  if(link)link.dataset.exists=count>0?'1':'0';
}
function openSuperAdminScreen(){
  document.getElementById('login-screen').style.display='none';
  const link=document.getElementById('sa-entry-link');
  const isFirstRun=link&&link.dataset.exists==='0';
  document.getElementById('sa-mode-title').textContent=isFirstRun?'প্রথম Super Admin অ্যাকাউন্ট বানান':'Super Admin লগিন';
  document.getElementById('sa-mode-sub').textContent=isFirstRun?'এখনো কোনো Super Admin নেই — নিচের ফর্ম দিয়ে প্রথমটা বানিয়ে নিন।':'আপনার Super Admin ফোন নম্বর ও Password দিন।';
  document.getElementById('sa-name-wrap').style.display=isFirstRun?'':'none';
  document.getElementById('sa-btn').textContent=isFirstRun?'তৈরি করুন':'লগিন করুন';
  document.getElementById('sa-btn').onclick=isFirstRun?createFirstPlatformAdmin:platformAdminLogin;
  document.getElementById('sa-name').value='';document.getElementById('sa-phone').value='';document.getElementById('sa-pass').value='';
  document.getElementById('sa-err').style.display='none';
  document.getElementById('sa-login-screen').style.display='flex';
}
async function createFirstPlatformAdmin(){
  const {count}=await supa.from('platform_admins').select('*',{count:'exact',head:true});
  const err=document.getElementById('sa-err'); err.style.display='none';
  if(count>0){ err.textContent='ইতিমধ্যে একজন Super Admin আছে — লগিন ফর্ম ব্যবহার করুন'; err.style.display='block'; openSuperAdminScreen(); return; }
  const name=document.getElementById('sa-name').value.trim()||'Super Admin';
  const phone=document.getElementById('sa-phone').value.trim();
  const pass=document.getElementById('sa-pass').value;
  if(!phone){err.textContent='ফোন নম্বর দিন';err.style.display='block';return;}
  if(!pass||pass.length<4){err.textContent='কমপক্ষে ৪ ক্যারেক্টারের Password দিন';err.style.display='block';return;}
  setBusy('sa-btn',true);
  const passwordHash=await hashPassword(pass);
  const ok=await dbOp(supa.from('platform_admins').insert({phone,name,password_hash:passwordHash}),'Super Admin অ্যাকাউন্ট তৈরি করা যায়নি');
  setBusy('sa-btn',false,'তৈরি করুন');
  if(ok){ platformAdmin={phone,name}; isPlatformAdmin=true; document.getElementById('sa-login-screen').style.display='none'; showSuperAdminDash(); }
}
async function platformAdminLogin(){
  const phone=document.getElementById('sa-phone').value.trim();
  const pass=document.getElementById('sa-pass').value;
  const err=document.getElementById('sa-err'); err.style.display='none';
  if(!phone||!pass){err.textContent='ফোন নম্বর ও Password দিন';err.style.display='block';return;}
  setBusy('sa-btn',true);
  const hash=await hashPassword(pass);
  const {data,error}=await supa.from('platform_admins').select('*').eq('phone',phone).maybeSingle();
  setBusy('sa-btn',false,'লগিন করুন');
  if(error){err.textContent='Database error: '+error.message;err.style.display='block';return;}
  if(!data){err.textContent='এই ফোন নম্বরে কোনো Super Admin অ্যাকাউন্ট নেই';err.style.display='block';return;}
  if(hash!==data.password_hash){err.textContent='ভুল Password';err.style.display='block';return;}
  platformAdmin={phone:data.phone,name:data.name}; isPlatformAdmin=true;
  document.getElementById('sa-login-screen').style.display='none';
  showSuperAdminDash();
}
function saLogout(){ location.reload(); }
/* ── Change my own password ───────────────────────────────── */
function openChangePasswordModal(){
  document.getElementById('cp-old').value='';document.getElementById('cp-new').value='';document.getElementById('cp-confirm').value='';
  document.getElementById('cp-err').style.display='none';
  setBusy('cp-btn',false,'Password পরিবর্তন করুন');openM('ov-changepass');
}
async function saveChangePassword(){
  const err=document.getElementById('cp-err'); err.style.display='none';
  const oldPass=document.getElementById('cp-old').value;
  const newPass=document.getElementById('cp-new').value;
  const confirmPass=document.getElementById('cp-confirm').value;
  if(!currentMember||!currentMember.id){ err.textContent='আপনি সরাসরি একজন member হিসেবে লগিন করেননি'; err.style.display='block'; return; }
  if(currentMember.passwordHash){
    if(!oldPass){ err.textContent='বর্তমান Password দিন'; err.style.display='block'; return; }
    const oldHash=await hashPassword(oldPass);
    if(oldHash!==currentMember.passwordHash){ err.textContent='বর্তমান Password ভুল'; err.style.display='block'; return; }
  }
  if(!newPass||newPass.length<4){ err.textContent='নতুন Password কমপক্ষে ৪ ক্যারেক্টারের হতে হবে'; err.style.display='block'; return; }
  if(newPass!==confirmPass){ err.textContent='নতুন Password দুইবার একই দিন'; err.style.display='block'; return; }
  setBusy('cp-btn',true);
  const newHash=await hashPassword(newPass);
  const ok=await dbOp(supa.from('members').update({password_hash:newHash}).eq('id',currentMember.id).eq('mess_id',currentMessId),'Password পরিবর্তন করা যায়নি');
  setBusy('cp-btn',false,'Password পরিবর্তন করুন');
  if(ok){
    currentMember.passwordHash=newHash;
    const m=STATE.members.find(x=>x.id===currentMember.id); if(m)m.passwordHash=newHash;
    closeM('ov-changepass');
    toast('Password পরিবর্তন হয়েছে','ok');
  }
}
async function showSuperAdminDash(){
  document.getElementById('sa-whoami').textContent=platformAdmin.name+' (Super Admin)';
  document.getElementById('sa-dash-screen').style.display='flex';
  await renderSuperAdminDash();
}
let saMessesCache=[];
async function renderSuperAdminDash(){
  const body=document.getElementById('sa-mess-body');
  body.innerHTML=`<tr><td colspan="7" class="empty-row">লোড হচ্ছে...</td></tr>`;
  const [messesR,membersR,mealsR,bazarR]=await Promise.all([
    supa.from('messes').select('*'),
    supa.from('members').select('id,mess_id,status'),
    supa.from('meal_entries').select('mess_id,date,meals,guest'),
    supa.from('bazar_expenses').select('mess_id,date,amount'),
  ]);
  if(messesR.error){ body.innerHTML=`<tr><td colspan="7" class="empty-row">লোড করা যায়নি: ${escapeHtml(messesR.error.message)}</td></tr>`; return; }
  const messes=messesR.data||[], members=membersR.data||[], meals=mealsR.data||[], bazar=bazarR.data||[];
  const mon=curMon(),yr=curYr();
  saMessesCache=messes;
  const rows=messes.map(ms=>{
    const memList=members.filter(m=>m.mess_id===ms.id);
    const activeCount=memList.filter(m=>m.status==='Active').length;
    const monthMeals=meals.filter(e=>e.mess_id===ms.id&&inMonth(e.date,mon,yr)).reduce((a,e)=>a+N(e.meals)+N(e.guest),0);
    const monthBazar=bazar.filter(e=>e.mess_id===ms.id&&inMonth(e.date,mon,yr)).reduce((a,e)=>a+N(e.amount),0);
    return {ms,memberCount:memList.length,activeCount,monthMeals,monthBazar};
  });
  document.getElementById('sa-stats').innerHTML=[
    [ICONS.STORE,messes.length,'মোট Mess','c-primary'],
    [ICONS.USERS,members.length,'মোট Member (সব মেস মিলিয়ে)','c-accent'],
    [ICONS.CART,money(rows.reduce((a,r)=>a+r.monthBazar,0)),'এই মাসের সর্বমোট বাজার','c-danger'],
  ].map(([ic,v,l,c])=>`<div class="card stat ${c}"><div class="ic">${ic}</div><div class="lab">${l}</div><div class="val">${v}</div></div>`).join('');
  body.innerHTML=rows.map(r=>`<tr>
    <td data-label="Mess">${escapeHtml(r.ms.name)||'—'}</td>
    <td data-label="Members" class="num">${r.memberCount}</td>
    <td data-label="Active" class="num">${r.activeCount}</td>
    <td data-label="এই মাসের Meal" class="num">${r.monthMeals.toFixed(1).replace(/\.0$/,'')}</td>
    <td data-label="এই মাসের বাজার" class="num">${money(r.monthBazar)}</td>
    <td data-label="তৈরি">${r.ms.created_at?fmtDate(r.ms.created_at.slice(0,10)):'—'}</td>
    <td data-label=""><div style="display:flex;gap:6px;justify-content:flex-end">
      <button class="btn sm" onclick="openMessAsAdmin('${r.ms.id}')">Open</button>
      <button class="btn icon ghost sm" onclick="deleteMess('${r.ms.id}','${escapeHtml(r.ms.name)}')" title="Delete">${ICONS.TRASH}</button>
    </div></td></tr>`).join('')||emptyRow(7,'কোনো mess তৈরি হয়নি এখনো');
}
function saMessSearch(v){
  const q=v.toLowerCase().trim();
  document.querySelectorAll('#sa-mess-body tr').forEach(tr=>{
    tr.style.display=!q||tr.textContent.toLowerCase().includes(q)?'':'none';
  });
}
// Opens a mess's own dashboard/app with full Owner-level access — lets the
// platform Super Admin manage any mess's data without needing that mess's
// member password.
async function openMessAsAdmin(messId){
  currentMessId=messId;
  STATE=await loadState(messId);
  if(!STATE){ toast('মেসের ডেটা লোড করা যায়নি','er'); return; }
  const ownerId=STATE.settings.ownerMemberId;
  currentMember=STATE.members.find(m=>m.id===ownerId)||{id:'SA',name:platformAdmin.name+' (Super Admin)'};
  isSuperAdmin=true; isMonthManager=false; isAdmin=true;
  applyTheme();
  document.getElementById('sa-dash-screen').style.display='none';
  showApp(true);
}
async function backToSuperAdminDash(){
  isPlatformAdmin=true; STATE=null; currentMessId=null; currentMember=null;
  isSuperAdmin=false; isMonthManager=false; isAdmin=false;
  document.getElementById('app').style.display='none';
  document.getElementById('sa-dash-screen').style.display='flex';
  await renderSuperAdminDash();
}
async function deleteMess(messId,name){
  if(!confirm(`"${name}" মেসটা পুরোপুরি ডিলিট করবেন? এর সব member/meal/bazar/deposit ইতিহাস চিরতরে মুছে যাবে — এটা আর ফেরত আনা যাবে না।`))return;
  const tables=['meal_entries','bazar_expenses','other_expenses','deposits','managers','members'];
  for(const t of tables){
    const {error}=await supa.from(t).delete().eq('mess_id',messId);
    if(error){ toast(`${t} ডিলিট করা যায়নি: `+error.message,'er'); return; }
  }
  const {error:mErr}=await supa.from('messes').delete().eq('id',messId);
  if(mErr){ toast('Mess ডিলিট করা যায়নি: '+mErr.message,'er'); return; }
  toast('Mess ডিলিট হয়েছে','ok');
  renderSuperAdminDash();
}
function registerServiceWorker(){
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{ /* non-fatal — app still works without it */ });
  }
}

/* ── App shell ─────────────────────────────────────────────── */
function showApp(fromSuperAdmin){
  document.getElementById('app').style.display='flex';
  document.getElementById('sb-messname').textContent=STATE.settings.messName||'My Mess';
  document.getElementById('me-date').value=mealSelDate;
  document.getElementById('sm-mon').innerHTML=MONTHS.map(m=>`<option>${m}</option>`).join('');
  document.getElementById('sm-mon').value=curMon();
  document.getElementById('sm-yr').value=curYr();
  ['bz-mon-f','ot-mon-f','dep-mon-f','ot-dep-mon-f'].forEach(id=>{
    document.getElementById(id).innerHTML='<option value="">সব</option>'+MONTHS.map(m=>`<option>${m}</option>`).join('');
  });
  populateMemberSelects();
  // Settings (Mess name + Manager roster) is Super-Admin (Owner) only
  document.querySelector('.sb-item[data-page="settings"]').style.display=isSuperAdmin?'':'none';
  document.getElementById('sb-whoami').innerHTML=`${ICONS.USERS}<span>${escapeHtml(currentMember.name)} ${isSuperAdmin?'(Owner)':isMonthManager?'(This Month\u2019s Manager)':'(View Only)'}</span>`;
  const backBtn=document.getElementById('sb-back-to-sa');
  if(backBtn)backBtn.style.display=(isPlatformAdmin&&fromSuperAdmin)?'':'none';
  const cpBtn=document.getElementById('sb-change-pass');
  if(cpBtn)cpBtn.style.display=(currentMember&&currentMember.id&&!fromSuperAdmin)?'':'none';
  let vb=document.getElementById('view-badge');
  if(!isAdmin){
    if(!vb){
      vb=document.createElement('span'); vb.id='view-badge'; vb.className='badge bl';
      vb.style.marginLeft='8px'; vb.textContent='View Only';
      document.getElementById('page-title').after(vb);
    }
  } else if(vb){ vb.remove(); }
  goTo('dashboard');
  checkCarryForwardDue();
}
function openDrawer(){document.getElementById('sidebar').classList.add('on');document.getElementById('drawerBd').classList.add('on');}
function closeDrawer(){document.getElementById('sidebar').classList.remove('on');document.getElementById('drawerBd').classList.remove('on');}


const PG={dashboard:'Dashboard',members:'Members',meals:'Daily Meal Entry',bazar:'Bazar Expense',other:'Other Expenses',deposits:'Deposits (Meal Fund)',summary:'Monthly Summary (Meal Fund)',settings:'Settings'};
const PG_ADD={members:'Add Member',bazar:'Add Bazar Expense',other:'Add Other Expense',deposits:'Add Deposit (Meal Fund)'};
function goTo(p){
  curPage=p;
  document.querySelectorAll('.sb-item').forEach(b=>b.classList.toggle('on',b.dataset.page===p));
  document.querySelectorAll('.page').forEach(s=>s.classList.toggle('on',s.dataset.page===p));
  document.getElementById('page-title').textContent=PG[p];
  const ab=document.getElementById('add-btn');
  if(PG_ADD[p]&&isAdmin){ab.style.display='';document.getElementById('add-tx').textContent=PG_ADD[p];}else{ab.style.display='none';}
  renderPage(p);
  closeDrawer();
}
function renderPage(p){
  if(p==='dashboard')renderDash();
  else if(p==='members')renderMembers();
  else if(p==='meals'){document.getElementById('me-date').value=mealSelDate;loadMealGrid();renderHeatmap();}
  else if(p==='bazar')renderBazar();
  else if(p==='other')renderOther();
  else if(p==='deposits')renderDeposits();
  else if(p==='summary')renderSummary();
  else if(p==='settings')renderSettings();
}
function refreshAll(){populateMemberSelects();renderPage(curPage);if(currentMember)checkCarryForwardDue();}
function doAdd(){
  if(!isAdmin)return;
  if(curPage==='members')openMemberModal();
  else if(curPage==='bazar')openBazarModal();
  else if(curPage==='other')openOtherModal();
  else if(curPage==='deposits')openDepositModal();
}
function populateMemberSelects(){
  const active=STATE.members.filter(m=>m.status!=='Left');
  ['dep-member','mgr-member'].forEach(id=>{
    const el=document.getElementById(id); if(!el)return;
    const prev=el.value;
    el.innerHTML='<option value="">-- Select Member --</option>'+active.map(m=>`<option value="${m.id}">${escapeHtml(m.name)}</option>`).join('');
    if(active.find(m=>m.id===prev))el.value=prev;
  });
  const bzby=document.getElementById('bzby');
  if(bzby){
    const prev=bzby.value;
    bzby.innerHTML='<option value="">-- কে বাজার করেছে --</option>'+active.map(m=>`<option value="${escapeHtml(m.name)}">${escapeHtml(m.name)}</option>`).join('')+'<option value="__other__">অন্য কেউ...</option>';
    if(prev)bzby.value=prev;
  }
}

/* ═══════════════════════════════════════════════════════════
   MEAL-RATE MATH — Meal fund and Other-Expense fund are now tracked
   completely separately (separate deposit pools, separate balances).
   ═══════════════════════════════════════════════════════════ */
function mealRateFor(month,year){
  const bazar=STATE.bazarExp.filter(e=>inMonth(e.date,month,year)).reduce((a,e)=>a+N(e.amount),0);
  const meals=STATE.mealEntries.filter(e=>inMonth(e.date,month,year)).reduce((a,e)=>a+N(e.meals)+N(e.guest),0);
  return {bazar,meals,rate:meals>0?bazar/meals:0};
}
function otherExpenseFor(month,year){
  return STATE.otherExp.filter(e=>inMonth(e.date,month,year)).reduce((a,e)=>a+N(e.amount),0);
}
function memberMealCount(mid,month,year){
  return STATE.mealEntries.filter(e=>e.mid===mid&&inMonth(e.date,month,year)).reduce((a,e)=>({m:a.m+N(e.meals),g:a.g+N(e.guest)}),{m:0,g:0});
}
function managerFor(month,year){return STATE.managers.find(x=>x.monthYear===month+'-'+year);}
// Meal fund only: meal cost vs Meal-type deposits.
function memberSummary(mid,month,year){
  const {m,g}=memberMealCount(mid,month,year);
  const {rate}=mealRateFor(month,year);
  const mealCost=Math.round((m+g)*rate);
  const dep=STATE.deposits.filter(p=>p.mid===mid&&(p.type||'Meal')==='Meal'&&inMonth(p.date,month,year)).reduce((a,p)=>a+N(p.amount),0);
  const bal=dep-mealCost;
  const status=bal<0?'Due':bal>0?'Advance':'Settled';
  return {meals:m,guest:g,mealCost,deposits:dep,balance:bal,status};
}
// Other-Expense fund only: equal per-active-member share vs Other-type deposits.
function otherFundSummary(mid,month,year){
  const activeCount=STATE.members.filter(x=>x.status!=='Left').length||1;
  const otherShare=Math.round(otherExpenseFor(month,year)/activeCount);
  const dep=STATE.deposits.filter(p=>p.mid===mid&&p.type==='Other'&&inMonth(p.date,month,year)).reduce((a,p)=>a+N(p.amount),0);
  const bal=dep-otherShare;
  const status=bal<0?'Due':bal>0?'Advance':'Settled';
  return {otherShare,deposits:dep,balance:bal,status};
}

/* ═══════════════════════════════════════════════════════════
   DASHBOARD
   ═══════════════════════════════════════════════════════════ */
function renderDash(){
  const mon=curMon(),yr=curYr(),today=todayISO();
  const activeCount=STATE.members.filter(m=>m.status==='Active').length;
  const todayMeals=STATE.mealEntries.filter(e=>e.date===today).reduce((a,e)=>a+N(e.meals)+N(e.guest),0);
  const {bazar,rate}=mealRateFor(mon,yr);
  const monthDeposits=STATE.deposits.filter(p=>(p.type||'Meal')==='Meal'&&inMonth(p.date,mon,yr)).reduce((a,p)=>a+N(p.amount),0);
  const monthCost=STATE.members.reduce((a,m)=>a+memberSummary(m.id,mon,yr).mealCost,0);
  const balance=monthDeposits-monthCost;
  const mgr=managerFor(mon,yr);
  const stats=[
    [ICONS.USERS,activeCount,'Active Members','c-primary'],
    [ICONS.MEAL,String(todayMeals.toFixed(1)).replace(/\.0$/,''),"আজকের Meal",'c-accent'],
    [ICONS.CART,money(bazar),'এই মাসের বাজার','c-danger'],
    [ICONS.CHART,money(rate.toFixed(2)),'Meal Rate','c-info'],
    [ICONS.CASH,money(monthDeposits),'এই মাসের Meal Deposit','c-success'],
    [ICONS.ALERT,money(Math.abs(balance))+(balance<0?' (Due)':' (Surplus)'),'Meal Fund Balance',balance<0?'c-danger':'c-success'],
    [ICONS.CROWN,mgr?mgr.name:'নির্ধারিত নয়',"এই মাসের Manager",mgr?'c-accent':'c-danger'],
  ];
  document.getElementById('dash-stats').innerHTML=stats.map(([ic,v,l,c])=>
    `<div class="card stat ${c}"><div class="ic">${ic}</div><div class="lab">${l}</div><div class="val">${v}</div></div>`).join('');

  // 6-month bazar trend chart
  const now=new Date();
  const pts=[];
  for(let i=5;i>=0;i--){
    const d=new Date(now.getFullYear(),now.getMonth()-i,1);
    const mn=MONTHS[d.getMonth()],yy=d.getFullYear();
    const total=STATE.bazarExp.filter(e=>inMonth(e.date,mn,yy)).reduce((a,e)=>a+N(e.amount),0);
    pts.push({label:MONTHS_BN[d.getMonth()].slice(0,3),total});
  }
  const max=Math.max(...pts.map(p=>p.total),1);
  document.getElementById('dash-chart').innerHTML=pts.map(p=>
    `<div class="bwrap"><div class="bar" style="height:${Math.max(4,(p.total/max)*100)}%" title="${money(p.total)}"></div><div class="lab">${p.label}</div></div>`).join('');

  // Dues
  const dues=STATE.members.filter(m=>m.status!=='Left').map(m=>({m,s:memberSummary(m.id,mon,yr)})).filter(x=>x.s.balance<0).sort((a,b)=>a.s.balance-b.s.balance).slice(0,6);
  document.getElementById('dash-dues').innerHTML=dues.length?dues.map(({m,s})=>
    `<div class="led-row"><span style="display:flex;align-items:center;gap:9px">${avatar(m)}${escapeHtml(m.name)}</span><b style="color:var(--danger)">${money(Math.abs(s.balance))}</b></div>`).join('')
    :`<div class="empty" style="padding:20px"><p>এই মাসে কারো Due নেই 🎉</p></div>`;

  const recentMeals=[...STATE.mealEntries].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6);
  document.getElementById('dash-recent-meals').innerHTML=recentMeals.map(e=>`<tr><td data-label="Date">${fmtDate(e.date)}</td><td data-label="Member">${escapeHtml(e.name)}</td><td data-label="Total" class="num">${(N(e.meals)+N(e.guest)).toFixed(1).replace(/\.0$/,'')}</td></tr>`).join('')||emptyRow(3,'কোনো এন্ট্রি নেই');
  const recentBazar=[...STATE.bazarExp].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,6);
  document.getElementById('dash-recent-bazar').innerHTML=recentBazar.map(e=>`<tr><td data-label="Date">${fmtDate(e.date)}</td><td data-label="By">${escapeHtml(e.by)||'—'}</td><td data-label="Amount" class="num" style="color:var(--danger);font-weight:700">${money(e.amount)}</td></tr>`).join('')||emptyRow(3,'কোনো খরচ নেই');
}
function emptyRow(cols,text){return `<tr><td colspan="${cols}" class="empty-row">${text}</td></tr>`;}

/* ═══════════════════════════════════════════════════════════
   MEMBERS
   ═══════════════════════════════════════════════════════════ */
function renderMembers(){
  let list=STATE.members.filter(m=>mFilterStatus==='All'||m.status===mFilterStatus);
  if(mSearch)list=list.filter(m=>m.name.toLowerCase().includes(mSearch)||(m.phone||'').includes(mSearch)||m.id.toLowerCase().includes(mSearch));
  document.getElementById('mem-body').innerHTML=list.map(m=>`<tr>
    <td data-label="Member"><span style="display:flex;align-items:center;gap:10px;cursor:pointer" onclick="openLedger('${m.id}')">${avatar(m)}<b>${escapeHtml(m.name)}</b></span></td>
    <td data-label="Phone">${escapeHtml(m.phone)||'—'}</td>
    <td data-label="Status">${badge(m.status)}${isInactiveOn(m,todayISO())?` <span class="badge am" title="${fmtDate(m.inactiveFrom)} – ${fmtDate(m.inactiveTo)}">Inactive Now</span>`:m.inactiveFrom&&m.inactiveTo?` <span class="badge gy" style="font-size:10px">${fmtDate(m.inactiveFrom)}–${fmtDate(m.inactiveTo)}</span>`:''}</td>
    <td data-label="Joined">${fmtDate(m.joined)}</td>
    <td data-label="Notes" style="color:var(--muted)">${escapeHtml(m.notes)}</td>
    <td data-label="Actions"><div style="display:flex;gap:6px;justify-content:flex-end">
      <button class="btn icon ghost sm" onclick="openLedger('${m.id}')" title="Ledger">${ICONS.HISTORY}</button>
      ${isAdmin?`<button class="btn icon ghost sm" onclick="openMemberModal('${m.id}')" title="Edit">${ICONS.EDIT}</button>
      <button class="btn icon ghost sm" onclick="delMember('${m.id}')" title="Delete">${ICONS.TRASH}</button>`:''}
    </div></td></tr>`).join('')||emptyRow(6,'কোনো member নেই — Add Member চাপুন');
}
function filterMemStatus(s){mFilterStatus=s;document.querySelectorAll('#mem-pills .pill').forEach(p=>p.classList.toggle('on',p.dataset.s===s));renderMembers();}
function memSearch(v){mSearch=v.toLowerCase().trim();renderMembers();}
function openMemberModal(id){
  editMemberId=id||null;
  document.getElementById('mem-modal-title').textContent=id?'Edit Member':'Add Member';
  document.getElementById('mm-password').value='';
  if(id){
    const m=STATE.members.find(x=>x.id===id);
    document.getElementById('mm-name').value=m.name;document.getElementById('mm-phone').value=m.phone;
    document.getElementById('mm-status').value=m.status;document.getElementById('mm-joined').value=m.joined||todayISO();
    document.getElementById('mm-inactive-from').value=m.inactiveFrom||'';document.getElementById('mm-inactive-to').value=m.inactiveTo||'';
    document.getElementById('mm-notes').value=m.notes;
    document.getElementById('mm-pass-hint').textContent=m.passwordHash?'পাসওয়ার্ড আগে থেকেই সেট আছে — বদলাতে চাইলে নতুনটা লিখুন, নাহলে খালি রাখুন।':'এখনো কোনো পাসওয়ার্ড সেট করা হয়নি, তাই সে এখনো লগিন করতে পারবে না।';
  } else {
    document.getElementById('mm-name').value='';document.getElementById('mm-phone').value='';
    document.getElementById('mm-status').value='Active';document.getElementById('mm-joined').value=todayISO();
    document.getElementById('mm-inactive-from').value='';document.getElementById('mm-inactive-to').value='';
    document.getElementById('mm-notes').value='';
    document.getElementById('mm-pass-hint').textContent='খালি রাখলে সে এখনো লগিন করতে পারবে না, পরে বসিয়ে দিতে পারবেন।';
  }
  setBusy('save-mem',false,ICONS.CHECK+'Save');openM('ov-member');
}
async function saveMember(){
  if(!requireAdmin())return;
  const name=document.getElementById('mm-name').value.trim();
  if(!name){toast('নাম দিন','er');return;}
  const phone=document.getElementById('mm-phone').value.trim();
  if(phone && STATE.members.some(m=>m.phone===phone && m.id!==editMemberId)){
    toast('এই ফোন নম্বর দিয়ে আগে থেকেই একজন member আছে','er'); return;
  }
  const passRaw=document.getElementById('mm-password').value;
  const inactiveFrom=document.getElementById('mm-inactive-from').value||'';
  const inactiveTo=document.getElementById('mm-inactive-to').value||'';
  if((inactiveFrom&&!inactiveTo)||(!inactiveFrom&&inactiveTo)){toast('Inactive Period-এর দুইটাই (From ও To) দিন, নাহলে দুইটাই খালি রাখুন','er');return;}
  if(inactiveFrom&&inactiveTo&&inactiveFrom>inactiveTo){toast('Inactive To তারিখ, From তারিখের পরে হতে হবে','er');return;}
  setBusy('save-mem',true);
  let ok;
  if(editMemberId){
    const m=STATE.members.find(x=>x.id===editMemberId);
    const newStatus=document.getElementById('mm-status').value;
    let leftDate=m.left;
    if(newStatus==='Left'&&m.status!=='Left'&&!leftDate)leftDate=todayISO();
    if(newStatus==='Active')leftDate='';
    const joined=document.getElementById('mm-joined').value;
    const notes=document.getElementById('mm-notes').value.trim();
    const patch={name,phone,status:newStatus,joined:joined||null,left_date:leftDate||null,inactive_from:inactiveFrom||null,inactive_to:inactiveTo||null,notes};
    let newHash=m.passwordHash;
    if(passRaw){ newHash=await hashPassword(passRaw); patch.password_hash=newHash; }
    ok=await dbOp(supa.from('members').update(patch).eq('id',editMemberId).eq('mess_id',currentMessId),'Member আপডেট করা যায়নি');
    if(ok){ m.name=name;m.phone=phone;m.status=newStatus;m.joined=joined;m.left=leftDate;m.inactiveFrom=inactiveFrom;m.inactiveTo=inactiveTo;m.notes=notes;m.passwordHash=newHash; }
  } else {
    const id=genId('MB-');
    const status=document.getElementById('mm-status').value;
    const joined=document.getElementById('mm-joined').value;
    const notes=document.getElementById('mm-notes').value.trim();
    const passwordHash=passRaw?await hashPassword(passRaw):'';
    ok=await dbOp(supa.from('members').insert({id,mess_id:currentMessId,name,phone,password_hash:passwordHash,status,joined:joined||null,inactive_from:inactiveFrom||null,inactive_to:inactiveTo||null,notes}),'Member যোগ করা যায়নি — হতে পারে এই ফোন নম্বর দিয়ে আগে থেকেই কোথাও একজন member আছে');
    if(ok)STATE.members.push({id,name,phone,passwordHash,status,joined,left:'',inactiveFrom,inactiveTo,notes});
  }
  setBusy('save-mem',false,ICONS.CHECK+'Save');
  if(ok){ closeM('ov-member'); persist(editMemberId?'Member আপডেট হয়েছে':'Member যোগ হয়েছে'); }
}
async function delMember(id){
  if(!requireAdmin())return;
  if(id===STATE.settings.ownerMemberId){ toast('Owner account ডিলিট করা যাবে না','er'); return; }
  if(!confirm('এই member ডিলিট করবেন? তার আগের meal/deposit রেকর্ড থেকে যাবে।'))return;
  const ok=await dbOp(supa.from('members').delete().eq('id',id).eq('mess_id',currentMessId),'Member ডিলিট করা যায়নি');
  if(ok){ STATE.members=STATE.members.filter(m=>m.id!==id); persist('Member ডিলিট হয়েছে'); }
}

/* ── Member ledger side-sheet ──────────────────────────────── */
function openLedger(id){
  const m=STATE.members.find(x=>x.id===id); if(!m)return;
  document.getElementById('led-title').innerHTML=`<span style="display:flex;align-items:center;gap:9px">${avatar(m)}${escapeHtml(m.name)}</span>`;
  const mon=curMon(),yr=curYr();
  const s=memberSummary(id,mon,yr);
  const os=otherFundSummary(id,mon,yr);
  const totalDep=STATE.deposits.filter(p=>p.mid===id&&(p.type||'Meal')==='Meal').reduce((a,p)=>a+N(p.amount),0);
  const totalMeals=STATE.mealEntries.filter(e=>e.mid===id).reduce((a,e)=>a+N(e.meals)+N(e.guest),0);
  document.getElementById('led-stats').innerHTML=[
    [money(s.balance<0?Math.abs(s.balance):s.balance),s.balance<0?'এই মাসের Meal Due':'এই মাসের Meal Advance', s.balance<0?'c-danger':'c-success'],
    [totalMeals.toFixed(1).replace(/\.0$/,''),'সর্বমোট Meal (all-time)','c-primary'],
    [money(totalDep),'সর্বমোট Meal Deposit (all-time)','c-success'],
    [money(os.balance<0?Math.abs(os.balance):os.balance),os.balance<0?'Other Fund Due':'Other Fund Advance',os.balance<0?'c-danger':'c-success'],
    [m.status,'বর্তমান Status','c-accent']
  ].map(([v,l,c])=>`<div class="card stat ${c}" style="padding:12px"><div class="lab">${l}</div><div class="val" style="font-size:16px">${v}</div></div>`).join('');
  const meals=[...STATE.mealEntries].filter(e=>e.mid===id).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,10);
  document.getElementById('led-meals').innerHTML=meals.map(e=>`<div class="led-row"><span>${fmtDate(e.date)}</span><b class="num">${(N(e.meals)+N(e.guest)).toFixed(1).replace(/\.0$/,'')} meal</b></div>`).join('')||'<p class="hint">কোনো এন্ট্রি নেই</p>';
  const deps=[...STATE.deposits].filter(p=>p.mid===id).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,10);
  document.getElementById('led-deposits').innerHTML=deps.map(p=>`<div class="led-row"><span>${fmtDate(p.date)} · ${p.method}</span><b class="num" style="color:var(--success)">${money(p.amount)}</b></div>`).join('')||'<p class="hint">কোনো deposit নেই</p>';
  openM('ov-ledger');
}

/* ═══════════════════════════════════════════════════════════
   DAILY MEAL ENTRY
   ═══════════════════════════════════════════════════════════ */
function setMealDate(iso){mealSelDate=iso;document.getElementById('me-date').value=iso;loadMealGrid();}
function shiftMealDate(delta){const d=new Date(mealSelDate+'T00:00:00');d.setDate(d.getDate()+delta);setMealDate(d.toISOString().slice(0,10));}
function loadMealGrid(){
  mealSelDate=document.getElementById('me-date').value||todayISO();
  const lab=document.getElementById('meal-date-lab');
  lab.textContent=mealSelDate===todayISO()?'আজ · '+fmtDate(mealSelDate):fmtDate(mealSelDate);
  document.getElementById('meal-quickfill').style.display=isAdmin?'':'none';
  document.getElementById('save-meal-grid').style.display=isAdmin?'':'none';
  // Only members who had already joined on/before the selected date, and who
  // aren't on a manager-marked inactive period covering this date, are eligible —
  // e.g. Arafat joined on the 8th, so no meal can be logged for him before the 8th.
  const allActive=STATE.members.filter(m=>m.status==='Active');
  const eligible=allActive.filter(m=>(!m.joined||m.joined<=mealSelDate)&&!isInactiveOn(m,mealSelDate));
  const notYetJoined=allActive.filter(m=>m.joined&&m.joined>mealSelDate);
  const inactiveNow=allActive.filter(m=>isInactiveOn(m,mealSelDate));
  const grid=document.getElementById('meal-grid');
  let noticeHtml=notYetJoined.length?`<div class="ibox warn" style="margin-bottom:10px">${ICONS.INFO}<div>${notYetJoined.map(m=>escapeHtml(m.name)+' ('+fmtDate(m.joined)+' থেকে যোগ)').join(', ')} — এই তারিখে এখনো মেসে যোগ দেননি, তাই মিল যোগ করা যাচ্ছে না।</div></div>`:'';
  if(inactiveNow.length)noticeHtml+=`<div class="ibox warn" style="margin-bottom:10px">${ICONS.INFO}<div>${inactiveNow.map(m=>escapeHtml(m.name)+' ('+fmtDate(m.inactiveFrom)+' – '+fmtDate(m.inactiveTo)+' পর্যন্ত Inactive)').join(', ')} — এই তারিখে Inactive হিসেবে চিহ্নিত, তাই মিল যোগ করা যাচ্ছে না।</div></div>`;
  if(!isAdmin){
    grid.innerHTML=noticeHtml+eligible.map(m=>{
      const ex=STATE.mealEntries.find(e=>e.mid===m.id&&e.date===mealSelDate);
      return `<div class="meal-row"><div class="nm">${avatar(m)}${escapeHtml(m.name)}</div>
        <div style="font-weight:700" class="num">${ex?N(ex.meals):'—'} meal${ex&&N(ex.guest)>0?` + ${N(ex.guest)} guest`:''}</div></div>`;
    }).join('')||`<div class="empty">${ICONS.EMPTY}<p>কোনো Active member নেই</p></div>`;
    renderMealRecent(); return;
  }
  grid.innerHTML=noticeHtml+eligible.map(m=>{
    const ex=STATE.mealEntries.find(e=>e.mid===m.id&&e.date===mealSelDate);
    const hasGuest=!!(ex&&N(ex.guest)>0);
    return `<div class="meal-row">
      <div class="nm">${avatar(m)}${escapeHtml(m.name)}</div>
      <div class="fld"><label>Meals</label><input type="number" step="0.5" min="0" id="mg-${m.id}" value="${ex?ex.meals:''}" placeholder="2"></div>
      <label class="guest-toggle ${hasGuest?'active':''}" id="gt-${m.id}">
        <input type="checkbox" id="mggc-${m.id}" ${hasGuest?'checked':''} onchange="toggleGuestInput('${m.id}')" style="width:14px;height:14px">
        Guest
      </label>
      <div class="fld" id="gf-${m.id}" style="${hasGuest?'':'display:none'}"><label>Qty</label><input type="number" step="0.5" min="0" id="mgg-${m.id}" value="${hasGuest?ex.guest:''}" placeholder="1"></div>
    </div>`;
  }).join('')||`<div class="empty">${ICONS.EMPTY}<p>কোনো Active member নেই — আগে Members পেজ থেকে যোগ করুন</p></div>`;
  renderMealRecent();
}
function toggleGuestInput(mid){
  const cb=document.getElementById('mggc-'+mid),wrap=document.getElementById('gf-'+mid),tgl=document.getElementById('gt-'+mid);
  wrap.style.display=cb.checked?'':'none';
  tgl.classList.toggle('active',cb.checked);
  if(!cb.checked)document.getElementById('mgg-'+mid).value='';
}
function quickFillMeals(val){
  STATE.members.filter(m=>m.status==='Active'&&(!m.joined||m.joined<=mealSelDate)&&!isInactiveOn(m,mealSelDate)).forEach(m=>{
    const el=document.getElementById('mg-'+m.id); if(el)el.value=val;
  });
  toast(val>0?'সবাইকে '+val+' Meal দেওয়া হয়েছে':'সবাইকে Off দেওয়া হয়েছে','ok');
}
async function saveMealGrid(){
  if(!requireAdmin())return;
  // Only members already joined on/before this date, and not on an inactive
  // period covering this date, are eligible to save (matches loadMealGrid)
  const members=STATE.members.filter(m=>m.status==='Active'&&(!m.joined||m.joined<=mealSelDate)&&!isInactiveOn(m,mealSelDate));
  if(!members.length){toast('কোনো eligible Active member নেই','er');return;}
  setBusy('save-meal-grid',true);
  const rows=members.map(m=>{
    const meals=N(document.getElementById('mg-'+m.id).value);
    const guest=N(document.getElementById('mgg-'+m.id).value);
    const idx=STATE.mealEntries.findIndex(e=>e.mid===m.id&&e.date===mealSelDate);
    const id=idx>=0?STATE.mealEntries[idx].id:genId('ME-');
    return {id, date:mealSelDate, mid:m.id, name:m.name, meals, guest, notes:''};
  });
  const dbRows=rows.map(r=>({id:r.id,mess_id:currentMessId,date:r.date,member_id:r.mid,member_name:r.name,meals:r.meals,guest:r.guest,notes:r.notes}));
  const ok=await dbOp(supa.from('meal_entries').upsert(dbRows,{onConflict:'member_id,date'}),'মিল এন্ট্রি সেভ করা যায়নি');
  setBusy('save-meal-grid',false,ICONS.CHECK+'সবার এন্ট্রি Save করুন');
  if(ok){
    rows.forEach(r=>{
      const idx=STATE.mealEntries.findIndex(e=>e.mid===r.mid&&e.date===r.date);
      if(idx>=0)STATE.mealEntries[idx]=r; else STATE.mealEntries.push(r);
    });
    persist('মিল এন্ট্রি Save হয়েছে');
  }
}
function renderMealRecent(){
  const list=[...STATE.mealEntries].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,40);
  document.getElementById('meal-recent-body').innerHTML=list.map(e=>`<tr>
    <td data-label="Date">${fmtDate(e.date)}</td><td data-label="Member">${escapeHtml(e.name)}</td>
    <td data-label="Meals" class="num">${e.meals}</td><td data-label="Guest" class="num">${e.guest||0}</td>
    <td data-label="Total" class="num" style="font-weight:700">${(N(e.meals)+N(e.guest)).toFixed(1).replace(/\.0$/,'')}</td>
    <td data-label="Notes" style="color:var(--muted)">${escapeHtml(e.notes)}</td>
    <td data-label="">${isAdmin?`<button class="btn icon ghost sm" onclick="delMealEntry('${e.id}')">${ICONS.TRASH}</button>`:''}</td></tr>`).join('')||emptyRow(7,'কোনো entry নেই');
}
async function delMealEntry(id){
  if(!requireAdmin())return; if(!confirm('এই entry ডিলিট করবেন?'))return;
  const ok=await dbOp(supa.from('meal_entries').delete().eq('id',id).eq('mess_id',currentMessId),'ডিলিট করা যায়নি');
  if(ok){ STATE.mealEntries=STATE.mealEntries.filter(e=>e.id!==id); persist('ডিলিট হয়েছে'); }
}

/* ── Month heatmap ─────────────────────────────────────────── */
function renderHeatmap(){
  const d=new Date(mealSelDate+'T00:00:00');
  const month=MONTHS[d.getMonth()],year=d.getFullYear();
  const days=daysInMonth(month,year);
  const firstDow=new Date(year,d.getMonth(),1).getDay();
  const byDay={};
  STATE.mealEntries.filter(e=>inMonth(e.date,month,year)).forEach(e=>{byDay[e.date]=(byDay[e.date]||0)+N(e.meals)+N(e.guest);});
  const max=Math.max(...Object.values(byDay),1);
  let html='<div class="hd">র</div><div class="hd">সো</div><div class="hd">ম</div><div class="hd">বু</div><div class="hd">বৃ</div><div class="hd">শু</div><div class="hd">শ</div>';
  for(let i=0;i<firstDow;i++)html+='<div class="cell blank"></div>';
  for(let day=1;day<=days;day++){
    const iso=`${year}-${String(d.getMonth()+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const v=byDay[iso]||0;
    const intensity=v/max;
    const bg=v>0?`color-mix(in srgb, var(--primary) ${Math.round(20+intensity*70)}%, var(--surface-2))`:'';
    const bgFallback=v>0?'var(--primary)':'';
    const isToday=iso===todayISO(), isSel=iso===mealSelDate;
    html+=`<div class="cell${isToday?' today':''}${isSel?' sel':''}" style="${v>0&&!isSel?'background:'+bgFallback+';background:'+bg+';color:#fff':''}" onclick="setMealDate('${iso}')" title="${v} meal">${day}</div>`;
  }
  document.getElementById('meal-heatmap').innerHTML=html;
}

/* ═══════════════════════════════════════════════════════════
   BAZAR EXPENSE
   ═══════════════════════════════════════════════════════════ */
function renderBazar(){
  const mon=document.getElementById('bz-mon-f').value,yr=N(document.getElementById('bz-yr-f').value);
  let list=STATE.bazarExp;
  if(mon)list=list.filter(e=>{const d=new Date(e.date+'T00:00:00');return MONTHS[d.getMonth()]===mon;});
  if(yr)list=list.filter(e=>{const d=new Date(e.date+'T00:00:00');return d.getFullYear()===yr;});
  const total=list.reduce((a,e)=>a+N(e.amount),0);
  document.getElementById('bz-cards').innerHTML=
    `<div class="card stat c-danger"><div class="ic">${ICONS.CART}</div><div class="lab">Total (filtered)</div><div class="val">${money(total)}</div></div>
     <div class="card stat c-primary"><div class="ic">${ICONS.RECEIPT}</div><div class="lab">Entries</div><div class="val">${list.length}</div></div>`;
  document.getElementById('bz-body').innerHTML=[...list].sort((a,b)=>b.date.localeCompare(a.date)).map(e=>`<tr>
    <td data-label="Date">${fmtDate(e.date)}</td><td data-label="Bought By" style="font-weight:600">${escapeHtml(e.by)||'—'}</td>
    <td data-label="Amount" class="num" style="color:var(--danger);font-weight:700">${money(e.amount)}</td>
    <td data-label="Notes" style="color:var(--muted)">${escapeHtml(e.notes)}</td>
    <td data-label="">${isAdmin?`<button class="btn icon ghost sm" onclick="delBazar('${e.id}')">${ICONS.TRASH}</button>`:''}</td></tr>`).join('')||emptyRow(5,'কোনো bazar expense নেই');
}
function openBazarModal(){
  document.getElementById('bzd').value=todayISO();document.getElementById('bzamt').value='';document.getElementById('bznote').value='';
  document.getElementById('bzitem-name').value='';document.getElementById('bzitem-amt').value='';
  bazarItems=[]; renderBazarItems();
  populateMemberSelects();
  const mgr=managerFor(curMon(),curYr());
  document.getElementById('bzby').value=mgr?mgr.name:'';
  document.getElementById('bzby-other-wrap').style.display='none';
  document.getElementById('bzby-other').value='';
  setBusy('save-bz',false,ICONS.CHECK+'Save');openM('ov-bazar');
}
function toggleBzbyOther(){
  const isOther=document.getElementById('bzby').value==='__other__';
  document.getElementById('bzby-other-wrap').style.display=isOther?'':'none';
}
// ── Item-list builder: add "চাল ৫ কেজি — ৳200" style rows, auto-sums into
// Amount and auto-writes a readable list into Notes, so the manager doesn't
// have to type a whole paragraph by hand every time.
let bazarItems=[];
function addBazarItem(){
  const nameEl=document.getElementById('bzitem-name'), amtEl=document.getElementById('bzitem-amt');
  const name=nameEl.value.trim(), amt=N(amtEl.value);
  if(!name){toast('আইটেমের নাম দিন','er');return;}
  if(amt<=0){toast('আইটেমের দাম দিন','er');return;}
  bazarItems.push({name,amt});
  nameEl.value=''; amtEl.value=''; nameEl.focus();
  renderBazarItems();
}
function removeBazarItem(i){ bazarItems.splice(i,1); renderBazarItems(); }
// ── Paste a whole bazar list at once (one item per line, price at the end
// of each line) and auto-split it into items — e.g.:
//   চাল ২ কেজি ১২০
//   ডাল ৫০
//   তেল - ৩৫০ টাকা
// Lines that don't end with a recognizable number are skipped and reported,
// so the manager can add those by hand.
function parseBazarPasteList(){
  const box=document.getElementById('bz-paste'); if(!box)return;
  const text=box.value;
  const lines=text.split('\n').map(l=>l.trim()).filter(Boolean);
  if(!lines.length){toast('আগে লিস্ট পেস্ট করুন','er');return;}
  let added=0, skipped=[];
  lines.forEach(line=>{
    const m=line.match(/^(.*?)[\s:.,\-–—৳]*(\d+(?:[.,]\d+)?)\s*(টাকা|taka|tk|৳)?\.?$/i);
    if(!m||!m[1].trim()||!m[2]){ skipped.push(line); return; }
    const name=m[1].trim().replace(/[-–—:.,]+$/,'').trim();
    const amt=parseFloat(m[2].replace(',','.'));
    if(!name||!amt||amt<=0){ skipped.push(line); return; }
    bazarItems.push({name,amt}); added++;
  });
  renderBazarItems();
  box.value='';
  if(added)toast(`${added}টা আইটেম যোগ হয়েছে${skipped.length?', '+skipped.length+'টা লাইন বোঝা যায়নি':''}`,'ok');
  else toast('কোনো লাইন থেকে আইটেম বোঝা যায়নি — শেষে দাম আছে কিনা দেখুন','er');
}
function renderBazarItems(){
  document.getElementById('bzitem-list').innerHTML=bazarItems.map((it,i)=>
    `<div style="display:flex;align-items:center;justify-content:space-between;background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:6px 10px;font-size:13px">
      <span>${escapeHtml(it.name)}</span>
      <span style="display:flex;align-items:center;gap:8px"><b class="num">৳${fmt(it.amt)}</b>
      <button type="button" class="btn icon ghost sm" onclick="removeBazarItem(${i})" style="width:24px;height:24px;padding:4px">${ICONS.X}</button></span>
    </div>`).join('');
  const total=bazarItems.reduce((a,it)=>a+it.amt,0);
  if(bazarItems.length){
    document.getElementById('bzamt').value=total;
    document.getElementById('bznote').value=bazarItems.map(it=>it.name+' — ৳'+fmt(it.amt)).join(', ');
  }
}
async function saveBazar(){
  if(!requireAdmin())return;
  const amt=N(document.getElementById('bzamt').value);
  if(amt<=0){toast('Amount দিন','er');return;}
  const bySel=document.getElementById('bzby').value;
  const by=bySel==='__other__'?document.getElementById('bzby-other').value.trim():bySel;
  if(!by){toast('কে বাজার করেছে বাছুন বা নাম লিখুন','er');return;}
  setBusy('save-bz',true);
  const rec={id:genId('BZ-'),date:document.getElementById('bzd').value,by,amount:amt,notes:document.getElementById('bznote').value.trim()};
  const ok=await dbOp(supa.from('bazar_expenses').insert({id:rec.id,mess_id:currentMessId,date:rec.date,bought_by:rec.by,amount:rec.amount,notes:rec.notes}),'Bazar expense যোগ করা যায়নি');
  setBusy('save-bz',false,ICONS.CHECK+'Save');
  if(ok){ STATE.bazarExp.push(rec); closeM('ov-bazar'); persist('Bazar expense যোগ হয়েছে'); }
}
async function delBazar(id){
  if(!requireAdmin())return; if(!confirm('ডিলিট করবেন?'))return;
  const ok=await dbOp(supa.from('bazar_expenses').delete().eq('id',id).eq('mess_id',currentMessId),'ডিলিট করা যায়নি');
  if(ok){ STATE.bazarExp=STATE.bazarExp.filter(e=>e.id!==id); persist('ডিলিট হয়েছে'); }
}

/* ═══════════════════════════════════════════════════════════
   OTHER EXPENSES
   ═══════════════════════════════════════════════════════════ */
function renderOther(){
  const addBtn=document.getElementById('ot-dep-add-btn'); if(addBtn)addBtn.style.display=isAdmin?'':'none';
  const mon=document.getElementById('ot-mon-f').value,yr=N(document.getElementById('ot-yr-f').value);
  let list=STATE.otherExp;
  if(mon)list=list.filter(e=>{const d=new Date(e.date+'T00:00:00');return MONTHS[d.getMonth()]===mon;});
  if(yr)list=list.filter(e=>{const d=new Date(e.date+'T00:00:00');return d.getFullYear()===yr;});
  const total=list.reduce((a,e)=>a+N(e.amount),0);
  const activeCount=STATE.members.filter(m=>m.status!=='Left').length||1;
  document.getElementById('ot-cards').innerHTML=
    `<div class="card stat c-accent"><div class="ic">${ICONS.RECEIPT}</div><div class="lab">Total (filtered)</div><div class="val">${money(total)}</div></div>
     <div class="card stat c-info"><div class="ic">${ICONS.USERS}</div><div class="lab">Per-member share (this filter)</div><div class="val">${money(Math.round(total/activeCount))}</div></div>`;
  document.getElementById('ot-body').innerHTML=[...list].sort((a,b)=>b.date.localeCompare(a.date)).map(e=>`<tr>
    <td data-label="Date">${fmtDate(e.date)}</td><td data-label="Title" style="font-weight:600">${escapeHtml(e.title)}</td>
    <td data-label="Amount" class="num" style="color:var(--accent);font-weight:700">${money(e.amount)}</td>
    <td data-label="Notes" style="color:var(--muted)">${escapeHtml(e.notes)}</td>
    <td data-label="">${isAdmin?`<button class="btn icon ghost sm" onclick="delOther('${e.id}')">${ICONS.TRASH}</button>`:''}</td></tr>`).join('')||emptyRow(5,'কোনো other expense নেই');

  // ── Other Fund টাকা কালেকশন — মিলের হিসাব থেকে সম্পূর্ণ আলাদা ──
  const mon2=document.getElementById('ot-dep-mon-f')?document.getElementById('ot-dep-mon-f').value:'', yr2=document.getElementById('ot-dep-yr-f')?N(document.getElementById('ot-dep-yr-f').value):0;
  let depList=STATE.deposits.filter(p=>p.type==='Other');
  if(mon2)depList=depList.filter(p=>{const d=new Date(p.date+'T00:00:00');return MONTHS[d.getMonth()]===mon2;});
  if(yr2)depList=depList.filter(p=>{const d=new Date(p.date+'T00:00:00');return d.getFullYear()===yr2;});
  const depTotal=depList.reduce((a,p)=>a+N(p.amount),0);
  const fundBody=document.getElementById('ot-dep-body');
  if(fundBody){
    document.getElementById('ot-fund-cards').innerHTML=
      `<div class="card stat c-success"><div class="ic">${ICONS.CASH}</div><div class="lab">Total Other Fund Deposit (filtered)</div><div class="val">${money(depTotal)}</div></div>
       <div class="card stat ${depTotal-total>=0?'c-success':'c-danger'}"><div class="ic">${ICONS.ALERT}</div><div class="lab">Overall Balance (Deposit − Expense, filtered)</div><div class="val">${money(Math.abs(depTotal-total))} ${depTotal-total<0?'(Due)':''}</div></div>`;
    fundBody.innerHTML=[...depList].sort((a,b)=>b.date.localeCompare(a.date)).map(p=>`<tr>
      <td data-label="Date">${fmtDate(p.date)}</td><td data-label="Member" style="font-weight:600">${escapeHtml(p.name)}</td>
      <td data-label="Amount" class="num" style="color:var(--success);font-weight:700">${money(p.amount)}</td>
      <td data-label="Notes" style="color:var(--muted)">${escapeHtml(p.notes)}</td>
      <td data-label="">${isAdmin?`<button class="btn icon ghost sm" onclick="delDeposit('${p.id}')">${ICONS.TRASH}</button>`:''}</td></tr>`).join('')||emptyRow(5,'কোনো Other Fund deposit নেই');
    const mon3=document.getElementById('sm-mon')?document.getElementById('sm-mon').value:curMon(), yr3=document.getElementById('sm-yr')?N(document.getElementById('sm-yr').value):curYr();
    const memberBody=document.getElementById('ot-member-body');
    if(memberBody){
      memberBody.innerHTML=STATE.members.filter(m=>m.status!=='Left').map(m=>{
        const os=otherFundSummary(m.id,mon3,yr3);
        return `<tr><td data-label="Member" style="font-weight:600">${escapeHtml(m.name)}</td>
          <td data-label="Share" class="num">${money(os.otherShare)}</td>
          <td data-label="Deposit" class="num" style="color:var(--success)">${money(os.deposits)}</td>
          <td data-label="Balance" class="num" style="font-weight:700;color:${os.balance<0?'var(--danger)':'var(--success)'}">${money(Math.abs(os.balance))}</td>
          <td data-label="Status">${badge(os.status)}</td></tr>`;
      }).join('')||emptyRow(5,'কোনো member নেই');
    }
  }
}
function openOtherDepositModal(){
  if(!requireAdmin())return;
  depModalType='Other';
  populateMemberSelects();
  document.getElementById('dep-modal-title').textContent='Add Deposit (Other Expense Fund)';
  document.getElementById('depd').value=todayISO();document.getElementById('dep-member').value='';
  document.getElementById('depamt').value='';document.getElementById('depnote').value='';document.getElementById('depmeth').value='Cash';
  setBusy('save-dep',false,ICONS.CHECK+'Save');openM('ov-deposit');
}
function openOtherModal(){
  document.getElementById('otd').value=todayISO();document.getElementById('ottitle').value='';document.getElementById('otamt').value='';document.getElementById('otnote').value='';
  setBusy('save-ot',false,ICONS.CHECK+'Save');openM('ov-other');
}
async function saveOther(){
  if(!requireAdmin())return;
  const title=document.getElementById('ottitle').value.trim(), amt=N(document.getElementById('otamt').value);
  if(!title){toast('Title দিন','er');return;}
  if(amt<=0){toast('Amount দিন','er');return;}
  setBusy('save-ot',true);
  const rec={id:genId('OE-'),date:document.getElementById('otd').value,title,amount:amt,notes:document.getElementById('otnote').value.trim()};
  const ok=await dbOp(supa.from('other_expenses').insert({...rec,mess_id:currentMessId}),'Other expense যোগ করা যায়নি');
  setBusy('save-ot',false,ICONS.CHECK+'Save');
  if(ok){ STATE.otherExp.push(rec); closeM('ov-other'); persist('Other expense যোগ হয়েছে'); }
}
async function delOther(id){
  if(!requireAdmin())return; if(!confirm('ডিলিট করবেন?'))return;
  const ok=await dbOp(supa.from('other_expenses').delete().eq('id',id).eq('mess_id',currentMessId),'ডিলিট করা যায়নি');
  if(ok){ STATE.otherExp=STATE.otherExp.filter(e=>e.id!==id); persist('ডিলিট হয়েছে'); }
}

/* ═══════════════════════════════════════════════════════════
   DEPOSITS — "Meal" fund (মিলের টাকা) vs "Other" fund (Other Expense-এর
   টাকা) সম্পূর্ণ আলাদা হিসাব রাখে। মূল Deposits পেজ Meal fund দেখায়;
   Other Expenses পেজের ভেতরে তার নিজস্ব deposit list/add button আছে
   (openOtherDepositModal), যেটা Other fund-এর deposit যোগ করে।
   ═══════════════════════════════════════════════════════════ */
let depModalType='Meal'; // which fund the currently-open deposit modal will save into
function renderDeposits(){
  const mon=document.getElementById('dep-mon-f').value,yr=N(document.getElementById('dep-yr-f').value);
  let list=STATE.deposits.filter(p=>(p.type||'Meal')==='Meal');
  if(mon)list=list.filter(p=>{const d=new Date(p.date+'T00:00:00');return MONTHS[d.getMonth()]===mon;});
  if(yr)list=list.filter(p=>{const d=new Date(p.date+'T00:00:00');return d.getFullYear()===yr;});
  const total=list.reduce((a,p)=>a+N(p.amount),0);
  document.getElementById('dep-cards').innerHTML=
    `<div class="card stat c-success"><div class="ic">${ICONS.CASH}</div><div class="lab">Total (filtered)</div><div class="val">${money(total)}</div></div>
     <div class="card stat c-primary"><div class="ic">${ICONS.RECEIPT}</div><div class="lab">Entries</div><div class="val">${list.length}</div></div>`;
  document.getElementById('dep-body').innerHTML=[...list].sort((a,b)=>b.date.localeCompare(a.date)).map(p=>`<tr>
    <td data-label="Date">${fmtDate(p.date)}</td><td data-label="Member" style="font-weight:600">${escapeHtml(p.name)}</td>
    <td data-label="Amount" class="num" style="color:var(--success);font-weight:700">${money(p.amount)}</td>
    <td data-label="Method">${p.method}</td><td data-label="Notes" style="color:var(--muted)">${escapeHtml(p.notes)}</td>
    <td data-label="">${isAdmin?`<button class="btn icon ghost sm" onclick="delDeposit('${p.id}')">${ICONS.TRASH}</button>`:''}</td></tr>`).join('')||emptyRow(6,'কোনো deposit নেই');
}
function openDepositModal(){
  depModalType='Meal';
  populateMemberSelects();
  document.getElementById('dep-modal-title').textContent='Add Deposit (Meal Fund)';
  document.getElementById('depd').value=todayISO();document.getElementById('dep-member').value='';
  document.getElementById('depamt').value='';document.getElementById('depnote').value='';document.getElementById('depmeth').value='Cash';
  setBusy('save-dep',false,ICONS.CHECK+'Save');openM('ov-deposit');
}
async function saveDeposit(){
  if(!requireAdmin())return;
  const mid=document.getElementById('dep-member').value, amtRaw=document.getElementById('depamt').value.trim();
  if(!mid){toast('Select Member','er');return;}
  if(amtRaw===''||isNaN(Number(amtRaw))){toast('একটা সঠিক Amount দিন','er');return;}
  const amt=Number(amtRaw);
  const member=STATE.members.find(m=>m.id===mid);
  setBusy('save-dep',true);
  const rec={id:genId('DEP-'),date:document.getElementById('depd').value,mid,name:member.name,amount:amt,method:document.getElementById('depmeth').value,type:depModalType,notes:document.getElementById('depnote').value.trim()};
  const ok=await dbOp(supa.from('deposits').insert({id:rec.id,mess_id:currentMessId,date:rec.date,member_id:rec.mid,member_name:rec.name,amount:rec.amount,method:rec.method,type:rec.type,notes:rec.notes}),'Deposit যোগ করা যায়নি');
  setBusy('save-dep',false,ICONS.CHECK+'Save');
  if(ok){ STATE.deposits.push(rec); closeM('ov-deposit'); persist('Deposit যোগ হয়েছে'); renderPage(curPage); }
}
async function delDeposit(id){
  if(!requireAdmin())return; if(!confirm('ডিলিট করবেন?'))return;
  const ok=await dbOp(supa.from('deposits').delete().eq('id',id).eq('mess_id',currentMessId),'ডিলিট করা যায়নি');
  if(ok){ STATE.deposits=STATE.deposits.filter(p=>p.id!==id); persist('ডিলিট হয়েছে'); renderPage(curPage); }
}

/* ═══════════════════════════════════════════════════════════
   MONTHLY SUMMARY
   ═══════════════════════════════════════════════════════════ */
function renderSummary(){
  const mon=document.getElementById('sm-mon').value,yr=N(document.getElementById('sm-yr').value);
  const {bazar,meals,rate}=mealRateFor(mon,yr);
  const otherTotal=otherExpenseFor(mon,yr);
  document.getElementById('sm-cards').innerHTML=[
    [ICONS.CART,money(bazar),'Total Bazar','c-danger'],[ICONS.MEAL,String(meals.toFixed(1)).replace(/\.0$/,''),'Total Meals','c-primary'],
    [ICONS.CHART,money(rate.toFixed(2)),'Meal Rate','c-info'],[ICONS.RECEIPT,money(otherTotal),'Other Expenses (দেখুন Other Expenses পেজে)','c-accent']
  ].map(([ic,v,l,c])=>`<div class="card stat ${c}"><div class="ic">${ic}</div><div class="lab">${l}</div><div class="val">${v}</div></div>`).join('');
  const mgr=managerFor(mon,yr);
  document.getElementById('sm-manager').innerHTML=`${ICONS.CROWN}<div style="flex:1">এই মাসের Manager: <b>${mgr?escapeHtml(mgr.name):'এখনো ঠিক করা হয়নি'}</b></div>${isAdmin?`<button class="btn sm primary" onclick="openManagerModal()">${mgr?'Change':'Assign'}</button>`:''}`;
  const list=STATE.members.filter(m=>m.status!=='Left');
  document.getElementById('sm-body').innerHTML=list.map(m=>{
    const s=memberSummary(m.id,mon,yr);
    return `<tr><td data-label="Member" style="font-weight:600">${escapeHtml(m.name)}</td>
      <td data-label="Meals" class="num">${(s.meals+s.guest).toFixed(1).replace(/\.0$/,'')}</td>
      <td data-label="Meal Cost" class="num" style="font-weight:700">${money(s.mealCost)}</td>
      <td data-label="Deposits (Meal)" class="num" style="color:var(--success)">${money(s.deposits)}</td>
      <td data-label="Balance" class="num" style="font-weight:700;color:${s.balance<0?'var(--danger)':'var(--success)'}">${money(Math.abs(s.balance))}</td>
      <td data-label="Status">${badge(s.status)}</td></tr>`;
  }).join('')||emptyRow(6,'কোনো member নেই');
}
function openManagerModal(){
  populateMemberSelects();
  document.getElementById('mgr-mon').value=document.getElementById('sm-mon').value;
  document.getElementById('mgr-yr').value=document.getElementById('sm-yr').value;
  const mgr=managerFor(document.getElementById('sm-mon').value,N(document.getElementById('sm-yr').value));
  document.getElementById('mgr-member').value=mgr?mgr.mid:'';
  setBusy('save-mgr',false,ICONS.CHECK+'Save');openM('ov-manager');
}
async function saveManager(){
  if(!requireAdmin())return;
  const mid=document.getElementById('mgr-member').value;
  if(!mid){toast('Select Member','er');return;}
  const member=STATE.members.find(m=>m.id===mid);
  const month=document.getElementById('mgr-mon').value, year=document.getElementById('mgr-yr').value;
  const key=month+'-'+year;
  setBusy('save-mgr',true);
  const ok=await dbOp(supa.from('managers').upsert({mess_id:currentMessId,month_year:key,member_id:mid,member_name:member.name},{onConflict:'mess_id,month_year'}),'Manager assign করা যায়নি');
  setBusy('save-mgr',false,ICONS.CHECK+'Save');
  if(ok){
    const idx=STATE.managers.findIndex(x=>x.monthYear===key);
    const rec={monthYear:key,mid,name:member.name};
    if(idx>=0)STATE.managers[idx]=rec; else STATE.managers.push(rec);
    // If this assignment is for the CURRENT month, refresh the logged-in
    // user's own access live (no need to log out/in again).
    if(month===curMon()&&Number(year)===curYr()&&currentMember){
      isMonthManager=(mid===currentMember.id);
      isAdmin=isSuperAdmin||isMonthManager;
    }
    closeM('ov-manager'); persist('Manager assign হয়েছে');
  }
}
function exportSummaryCSV(){
  const mon=document.getElementById('sm-mon').value,yr=N(document.getElementById('sm-yr').value);
  const rows=[['Member','Meals','Meal Cost','Deposits (Meal)','Balance','Status']];
  STATE.members.filter(m=>m.status!=='Left').forEach(m=>{
    const s=memberSummary(m.id,mon,yr);
    rows.push([m.name,(s.meals+s.guest).toFixed(1),s.mealCost,s.deposits,s.balance,s.status]);
  });
  const csv=rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadBlob(csv,`summary-${mon}-${yr}.csv`,'text/csv');
  toast('CSV ডাউনলোড হচ্ছে','ok');
}

/* ═══════════════════════════════════════════════════════════
   MONTH-END CARRY FORWARD
   জুলাই শেষ হলে যার যত ব্যালেন্স (+/-) থাকে, সেটা অগাস্টের প্রথম দিনে
   তার Deposit হিসেবে বসিয়ে দেওয়া হয় — যাতে পরের মাসের হিসাব শুরুতেই
   ঠিক জায়গা থেকে শুরু হয়। কোনো real server cron নেই (এটা static site),
   তাই সম্পূর্ণ silent-automatic করা সম্ভব না — Owner/Manager লগিন করলে
   ড্যাশবোর্ডে একটা ব্যানার দেখাবে, এক ক্লিকেই করে দেওয়া যায়।
   ═══════════════════════════════════════════════════════════ */
function prevMonthYear(){
  const d=new Date(); d.setDate(1); d.setMonth(d.getMonth()-1);
  return {month:MONTHS[d.getMonth()], year:d.getFullYear()};
}
function nextMonthFirstDate(month,year){
  const idx=MONTHS.indexOf(month);
  const d=new Date(year, idx+1, 1);
  const pad=n=>String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}
function cfMarker(month,year){ return `[CF:${month}-${year}]`; }
function isCarryForwardApplied(month,year){
  const marker=cfMarker(month,year);
  return STATE.deposits.some(p=>p.notes&&p.notes.includes(marker));
}
function checkCarryForwardDue(){
  const banner=document.getElementById('cf-banner');
  if(!banner)return;
  if(!isAdmin){ banner.innerHTML=''; return; }
  const {month,year}=prevMonthYear();
  const {bazar,meals}=mealRateFor(month,year);
  const hadActivity=bazar>0||meals>0;
  if(!hadActivity||isCarryForwardApplied(month,year)){ banner.innerHTML=''; return; }
  banner.innerHTML=`<div class="ibox warn" style="margin-bottom:16px;align-items:center">${ICONS.ALERT}
    <div style="flex:1"><b>${month} ${year}</b>-এর Meal Fund ব্যালেন্স এখনো পরের মাসে carry forward করা হয়নি।</div>
    <button class="btn sm primary" onclick="doCarryForward('${month}',${year})">Carry Forward করুন</button></div>`;
}
async function doCarryForward(month,year){
  if(!requireAdmin())return;
  if(isCarryForwardApplied(month,year)){ toast('এই মাসের carry forward আগেই করা হয়েছে','er'); return; }
  const targetDate=nextMonthFirstDate(month,year);
  const members=STATE.members.filter(m=>m.status!=='Left');
  const marker=cfMarker(month,year);
  const rows=[];
  members.forEach(m=>{
    const bal=memberSummary(m.id,month,year).balance;
    if(Math.round(bal)===0)return;
    rows.push({id:genId('DEP-'),date:targetDate,mid:m.id,name:m.name,amount:Math.round(bal),method:'Carry Forward',type:'Meal',notes:`গত মাসের ব্যালেন্স স্থানান্তর ${marker}`});
  });
  if(!rows.length){ toast('কারো ব্যালেন্স নেই, কিছু করার দরকার নেই','ok'); return; }
  const dbRows=rows.map(r=>({id:r.id,mess_id:currentMessId,date:r.date,member_id:r.mid,member_name:r.name,amount:r.amount,method:r.method,type:r.type,notes:r.notes}));
  const ok=await dbOp(supa.from('deposits').insert(dbRows),'Carry forward করা যায়নি');
  if(ok){ STATE.deposits.push(...rows); persist(`${month} ${year}-এর ব্যালেন্স carry forward হয়েছে`); }
}

/* ═══════════════════════════════════════════════════════════
   SETTINGS
   ═══════════════════════════════════════════════════════════ */
function renderSettings(){
  if(!requireSuperAdmin()){ goTo('dashboard'); return; }
  document.getElementById('set-messname').value=STATE.settings.messName;
  const mgrs=[...STATE.managers].sort((a,b)=>b.monthYear.localeCompare(a.monthYear));
  document.getElementById('set-managers-list').innerHTML=mgrs.map(x=>`<div class="led-row"><span>${x.monthYear}</span><b>${escapeHtml(x.name)}</b></div>`).join('')||'<p class="hint">কোনো Manager assign করা হয়নি</p>';
}
async function saveMessInfo(){
  if(!requireSuperAdmin())return;
  const name=document.getElementById('set-messname').value.trim()||'My Mess';
  const ok=await dbOp(supa.from('messes').update({name}).eq('id',currentMessId),'Save করা যায়নি');
  if(ok){ STATE.settings.messName=name; document.getElementById('sb-messname').textContent=name; persist('Save হয়েছে'); }
}
function downloadBlob(content,filename,mime){
  const blob=new Blob([content],{type:mime});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url),2000);
}

