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
function requireAdmin(){ if(!isAdmin){ toast('শুধু Manager এটা করতে পারবেন','er'); return false; } return true; }
function initials(name){return (name||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();}
const AV_COLORS=['#1F6F54','#DD9E33','#2E7B79','#C6553D','#6E5DA6','#3C7DBF','#B4652F','#4E8B3B'];
function avatarColor(id){let h=0;for(let i=0;i<id.length;i++)h=(h*31+id.charCodeAt(i))>>>0;return AV_COLORS[h%AV_COLORS.length];}
function avatar(m){return `<div class="avatar" style="background:${avatarColor(m.id)}">${initials(m.name)}</div>`;}
function escapeHtml(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function genId(list,prefix){const nums=list.map(x=>parseInt(String(x.id).replace(prefix,''))||0);return prefix+String((nums.length?Math.max(...nums):0)+1).padStart(3,'0');}
function inMonth(dateStr,month,year){const d=new Date(dateStr+'T00:00:00');return MONTHS[d.getMonth()]===month&&d.getFullYear()===year;}

/* ═══════════════════════════════════════════════════════════
   STORAGE — Claude artifact persistent storage (shared across
   everyone who opens this artifact, so the whole mess sees one ledger)
   ═══════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════
   SUPABASE DATA LAYER
   ═══════════════════════════════════════════════════════════ */
function emptySettings(){ return {messName:'',adminPin:'',viewerPin:'',theme:'light',setupDone:false}; }
let STATE=null;

async function loadState(){
  const [s,mem,meals,bazar,other,dep,mgrs]=await Promise.all([
    supa.from('settings').select('*').eq('id',1).maybeSingle(),
    supa.from('members').select('*'),
    supa.from('meal_entries').select('*'),
    supa.from('bazar_expenses').select('*'),
    supa.from('other_expenses').select('*'),
    supa.from('deposits').select('*'),
    supa.from('managers').select('*'),
  ]);
  const firstErr=[s,mem,meals,bazar,other,dep,mgrs].find(r=>r.error);
  if(firstErr){ toast('Database connect করা যায়নি: '+firstErr.error.message,'er'); return null; }
  return {
    settings: s.data ? {
      messName:s.data.mess_name||'', adminPin:s.data.admin_pin||'', viewerPin:s.data.viewer_pin||'',
      theme:s.data.theme||'light', setupDone:!!s.data.setup_done
    } : emptySettings(),
    members:(mem.data||[]).map(r=>({id:r.id,name:r.name,phone:r.phone||'',status:r.status,joined:r.joined||'',left:r.left_date||'',notes:r.notes||''})),
    mealEntries:(meals.data||[]).map(r=>({id:r.id,date:r.date,mid:r.member_id,name:r.member_name,meals:Number(r.meals),guest:Number(r.guest),notes:r.notes||''})),
    bazarExp:(bazar.data||[]).map(r=>({id:r.id,date:r.date,by:r.bought_by||'',amount:Number(r.amount),notes:r.notes||''})),
    otherExp:(other.data||[]).map(r=>({id:r.id,date:r.date,title:r.title,amount:Number(r.amount),notes:r.notes||''})),
    deposits:(dep.data||[]).map(r=>({id:r.id,date:r.date,mid:r.member_id,name:r.member_name,amount:Number(r.amount),method:r.method||'Cash',notes:r.notes||''})),
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
let isAdmin=true; // set at login — Manager PIN → true (full access), Viewer PIN → false (read-only)

window.addEventListener('load', boot);
async function boot(){
  if(SUPABASE_URL.includes('YOUR-PROJECT')){
    document.body.innerHTML='<div style="max-width:520px;margin:80px auto;font-family:sans-serif;line-height:1.6;padding:0 20px">'+
      '<h2>⚠️ Supabase কনফিগার করা হয়নি</h2>'+
      '<p>index.html-এর একদম শুরুতে <code>SUPABASE_URL</code> আর <code>SUPABASE_ANON_KEY</code> বসিয়ে আবার deploy করুন। README.md দেখুন।</p></div>';
    return;
  }
  STATE=await loadState();
  if(!STATE){
    document.body.innerHTML='<div style="max-width:520px;margin:80px auto;font-family:sans-serif;line-height:1.6;padding:0 20px">'+
      '<h2>⚠️ Database-এ কানেক্ট করা যায়নি</h2><p>Supabase URL/Key ঠিক আছে কিনা, আর schema.sql রান করা হয়েছে কিনা চেক করুন।</p></div>';
    return;
  }
  applyTheme();
  if(!STATE.settings.setupDone){ document.getElementById('setup-screen').style.display='flex'; return; }
  document.getElementById('login-title').textContent=STATE.settings.messName||'মেস খাতা';
  document.getElementById('login-sub').textContent=(STATE.settings.messName?('"'+STATE.settings.messName+'"')+'-এ ':'')+'লগিন করতে আপনার PIN দিন।';
  document.getElementById('login-screen').style.display='flex';
}
function applyTheme(){
  const th=(STATE&&STATE.settings&&STATE.settings.theme)||'light';
  document.documentElement.setAttribute('data-theme',th);
  const lab=document.getElementById('theme-lab'); if(lab)lab.textContent=th==='dark'?'Light Mode':'Dark Mode';
}
function toggleTheme(){
  STATE.settings.theme=STATE.settings.theme==='dark'?'light':'dark';
  applyTheme();
  supa.from('settings').update({theme:STATE.settings.theme}).eq('id',1).then(()=>{});
}

/* ── Setup (first run — writes the seeded settings row) ──────── */
async function doSetup(){
  const name=document.getElementById('su-name').value.trim();
  const pin=document.getElementById('su-pin').value.trim();
  const err=document.getElementById('su-err'); err.style.display='none';
  if(!name){err.textContent='মেসের নাম দিন';err.style.display='block';return;}
  if(!/^\d{4,6}$/.test(pin)){err.textContent='৪-৬ সংখ্যার Manager PIN দিন';err.style.display='block';return;}
  setBusy('su-btn',true);
  const ok=await dbOp(supa.from('settings').update({mess_name:name,admin_pin:pin,setup_done:true}).eq('id',1),'সেটআপ সেভ করা যায়নি');
  setBusy('su-btn',false,'খাতা তৈরি করুন');
  if(ok){
    STATE.settings={messName:name,adminPin:pin,viewerPin:'',theme:'light',setupDone:true};
    document.getElementById('setup-screen').style.display='none';
    isAdmin=true; showApp();
  } else { err.textContent='সেটআপ সেভ করা যায়নি — Supabase schema ঠিকমতো রান হয়েছে কিনা দেখুন'; err.style.display='block'; }
}

/* ── Login (normal PIN form — role decided by which PIN matches) ── */
function togglePinVisibility(){
  const inp=document.getElementById('login-pin');
  const eye=document.getElementById('pin-eye');
  const showing=inp.type==='text';
  inp.type=showing?'password':'text';
  eye.innerHTML=showing?ICONS.EYE:ICONS.EYEOFF;
}
function doLogin(){
  const pin=document.getElementById('login-pin').value.trim();
  const err=document.getElementById('login-err'); err.style.display='none';
  if(!pin){err.textContent='PIN দিন';err.style.display='block';return;}
  if(pin===STATE.settings.adminPin){
    isAdmin=true;
    document.getElementById('login-screen').style.display='none';
    document.getElementById('login-pin').value='';
    showApp();
  } else if(STATE.settings.viewerPin && pin===STATE.settings.viewerPin){
    isAdmin=false;
    document.getElementById('login-screen').style.display='none';
    document.getElementById('login-pin').value='';
    showApp();
  } else {
    err.textContent='ভুল PIN, আবার চেষ্টা করুন'; err.style.display='block';
  }
}

/* ── App shell ─────────────────────────────────────────────── */
function showApp(){
  document.getElementById('app').style.display='flex';
  document.getElementById('sb-messname').textContent=STATE.settings.messName||'My Mess';
  document.getElementById('me-date').value=mealSelDate;
  document.getElementById('sm-mon').innerHTML=MONTHS.map(m=>`<option>${m}</option>`).join('');
  document.getElementById('sm-mon').value=curMon();
  document.getElementById('sm-yr').value=curYr();
  ['bz-mon-f','ot-mon-f','dep-mon-f'].forEach(id=>{
    document.getElementById(id).innerHTML='<option value="">সব</option>'+MONTHS.map(m=>`<option>${m}</option>`).join('');
  });
  populateMemberSelects();
  // Viewer role: hide Settings (holds PINs) and show a "View Only" badge
  document.querySelector('.sb-item[data-page="settings"]').style.display=isAdmin?'':'none';
  let vb=document.getElementById('view-badge');
  if(!isAdmin){
    if(!vb){
      vb=document.createElement('span'); vb.id='view-badge'; vb.className='badge bl';
      vb.style.marginLeft='8px'; vb.textContent='View Only';
      document.getElementById('page-title').after(vb);
    }
  } else if(vb){ vb.remove(); }
  goTo('dashboard');
}
function openDrawer(){document.getElementById('sidebar').classList.add('on');document.getElementById('drawerBd').classList.add('on');}
function closeDrawer(){document.getElementById('sidebar').classList.remove('on');document.getElementById('drawerBd').classList.remove('on');}


const PG={dashboard:'Dashboard',members:'Members',meals:'Daily Meal Entry',bazar:'Bazar Expense',other:'Other Expenses',deposits:'Deposits',summary:'Monthly Summary',settings:'Settings'};
const PG_ADD={members:'Add Member',bazar:'Add Bazar Expense',other:'Add Other Expense',deposits:'Add Deposit'};
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
function refreshAll(){populateMemberSelects();renderPage(curPage);}
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
    el.innerHTML='<option value="">-- Member বাছুন --</option>'+active.map(m=>`<option value="${m.id}">${escapeHtml(m.name)}</option>`).join('');
    if(active.find(m=>m.id===prev))el.value=prev;
  });
}

/* ═══════════════════════════════════════════════════════════
   MEAL-RATE MATH
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
function memberSummary(mid,month,year){
  const member=STATE.members.find(x=>x.id===mid);
  const {m,g}=memberMealCount(mid,month,year);
  const {rate}=mealRateFor(month,year);
  const mealCost=Math.round((m+g)*rate);
  const activeCount=STATE.members.filter(x=>x.status!=='Left').length||1;
  const otherShare=Math.round(otherExpenseFor(month,year)/activeCount);
  const totalCost=mealCost+otherShare;
  const dep=STATE.deposits.filter(p=>p.mid===mid&&inMonth(p.date,month,year)).reduce((a,p)=>a+N(p.amount),0);
  const bal=dep-totalCost;
  const status=bal<0?'Due':bal>0?'Advance':'Settled';
  return {meals:m,guest:g,mealCost,otherShare,totalCost,deposits:dep,balance:bal,status};
}

/* ═══════════════════════════════════════════════════════════
   DASHBOARD
   ═══════════════════════════════════════════════════════════ */
function renderDash(){
  const mon=curMon(),yr=curYr(),today=todayISO();
  const activeCount=STATE.members.filter(m=>m.status==='Active').length;
  const todayMeals=STATE.mealEntries.filter(e=>e.date===today).reduce((a,e)=>a+N(e.meals)+N(e.guest),0);
  const {bazar,rate}=mealRateFor(mon,yr);
  const monthDeposits=STATE.deposits.filter(p=>inMonth(p.date,mon,yr)).reduce((a,p)=>a+N(p.amount),0);
  const monthCost=STATE.members.reduce((a,m)=>a+memberSummary(m.id,mon,yr).totalCost,0);
  const balance=monthDeposits-monthCost;
  const mgr=managerFor(mon,yr);
  const stats=[
    [ICONS.USERS,activeCount,'Active Members','c-primary'],
    [ICONS.MEAL,String(todayMeals.toFixed(1)).replace(/\.0$/,''),"আজকের Meal",'c-accent'],
    [ICONS.CART,money(bazar),'এই মাসের বাজার','c-danger'],
    [ICONS.CHART,money(rate.toFixed(2)),'Meal Rate','c-info'],
    [ICONS.CASH,money(monthDeposits),'এই মাসের Deposit','c-success'],
    [ICONS.ALERT,money(Math.abs(balance))+(balance<0?' (Due)':' (Surplus)'),'Month Balance',balance<0?'c-danger':'c-success'],
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
    <td data-label="Status">${badge(m.status)}</td>
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
  if(id){
    const m=STATE.members.find(x=>x.id===id);
    document.getElementById('mm-name').value=m.name;document.getElementById('mm-phone').value=m.phone;
    document.getElementById('mm-status').value=m.status;document.getElementById('mm-joined').value=m.joined||todayISO();
    document.getElementById('mm-notes').value=m.notes;
  } else {
    document.getElementById('mm-name').value='';document.getElementById('mm-phone').value='';
    document.getElementById('mm-status').value='Active';document.getElementById('mm-joined').value=todayISO();
    document.getElementById('mm-notes').value='';
  }
  setBusy('save-mem',false,ICONS.CHECK+'Save');openM('ov-member');
}
async function saveMember(){
  if(!requireAdmin())return;
  const name=document.getElementById('mm-name').value.trim();
  if(!name){toast('নাম দিন','er');return;}
  setBusy('save-mem',true);
  let ok;
  if(editMemberId){
    const m=STATE.members.find(x=>x.id===editMemberId);
    const newStatus=document.getElementById('mm-status').value;
    let leftDate=m.left;
    if(newStatus==='Left'&&m.status!=='Left'&&!leftDate)leftDate=todayISO();
    if(newStatus==='Active')leftDate='';
    const phone=document.getElementById('mm-phone').value.trim();
    const joined=document.getElementById('mm-joined').value;
    const notes=document.getElementById('mm-notes').value.trim();
    ok=await dbOp(supa.from('members').update({name,phone,status:newStatus,joined:joined||null,left_date:leftDate||null,notes}).eq('id',editMemberId),'Member আপডেট করা যায়নি');
    if(ok){ m.name=name;m.phone=phone;m.status=newStatus;m.joined=joined;m.left=leftDate;m.notes=notes; }
  } else {
    const id=genId(STATE.members,'MB-');
    const phone=document.getElementById('mm-phone').value.trim();
    const status=document.getElementById('mm-status').value;
    const joined=document.getElementById('mm-joined').value;
    const notes=document.getElementById('mm-notes').value.trim();
    ok=await dbOp(supa.from('members').insert({id,name,phone,status,joined:joined||null,notes}),'Member যোগ করা যায়নি');
    if(ok)STATE.members.push({id,name,phone,status,joined,left:'',notes});
  }
  setBusy('save-mem',false,ICONS.CHECK+'Save');
  if(ok){ closeM('ov-member'); persist(editMemberId?'Member আপডেট হয়েছে':'Member যোগ হয়েছে'); }
}
async function delMember(id){
  if(!requireAdmin())return;
  if(!confirm('এই member ডিলিট করবেন? তার আগের meal/deposit রেকর্ড থেকে যাবে।'))return;
  const ok=await dbOp(supa.from('members').delete().eq('id',id),'Member ডিলিট করা যায়নি');
  if(ok){ STATE.members=STATE.members.filter(m=>m.id!==id); persist('Member ডিলিট হয়েছে'); }
}

/* ── Member ledger side-sheet ──────────────────────────────── */
function openLedger(id){
  const m=STATE.members.find(x=>x.id===id); if(!m)return;
  document.getElementById('led-title').innerHTML=`<span style="display:flex;align-items:center;gap:9px">${avatar(m)}${escapeHtml(m.name)}</span>`;
  const mon=curMon(),yr=curYr();
  const s=memberSummary(id,mon,yr);
  const totalDep=STATE.deposits.filter(p=>p.mid===id).reduce((a,p)=>a+N(p.amount),0);
  const totalMeals=STATE.mealEntries.filter(e=>e.mid===id).reduce((a,e)=>a+N(e.meals)+N(e.guest),0);
  document.getElementById('led-stats').innerHTML=[
    [money(s.balance<0?Math.abs(s.balance):s.balance),s.balance<0?'এই মাসের Due':'এই মাসের Advance', s.balance<0?'c-danger':'c-success'],
    [totalMeals.toFixed(1).replace(/\.0$/,''),'সর্বমোট Meal (all-time)','c-primary'],
    [money(totalDep),'সর্বমোট Deposit (all-time)','c-success'],
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
  const members=STATE.members.filter(m=>m.status==='Active');
  const grid=document.getElementById('meal-grid');
  if(!isAdmin){
    grid.innerHTML=members.map(m=>{
      const ex=STATE.mealEntries.find(e=>e.mid===m.id&&e.date===mealSelDate);
      const total=ex?(N(ex.meals)+N(ex.guest)):0;
      return `<div class="meal-row"><div class="nm">${avatar(m)}${escapeHtml(m.name)}</div>
        <div style="font-weight:700" class="num">${ex?N(ex.meals):'—'} meal${ex&&N(ex.guest)>0?` + ${N(ex.guest)} guest`:''}</div></div>`;
    }).join('')||`<div class="empty">${ICONS.EMPTY}<p>কোনো Active member নেই</p></div>`;
    renderMealRecent(); return;
  }
  grid.innerHTML=members.map(m=>{
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
  STATE.members.filter(m=>m.status==='Active').forEach(m=>{
    const el=document.getElementById('mg-'+m.id); if(el)el.value=val;
  });
  toast(val>0?'সবাইকে '+val+' Meal দেওয়া হয়েছে':'সবাইকে Off দেওয়া হয়েছে','ok');
}
async function saveMealGrid(){
  if(!requireAdmin())return;
  const members=STATE.members.filter(m=>m.status==='Active');
  if(!members.length){toast('কোনো Active member নেই','er');return;}
  setBusy('save-meal-grid',true);
  const rows=members.map(m=>{
    const meals=N(document.getElementById('mg-'+m.id).value);
    const guest=N(document.getElementById('mgg-'+m.id).value);
    const idx=STATE.mealEntries.findIndex(e=>e.mid===m.id&&e.date===mealSelDate);
    const id=idx>=0?STATE.mealEntries[idx].id:genId(STATE.mealEntries,'ME-');
    return {id, date:mealSelDate, mid:m.id, name:m.name, meals, guest, notes:''};
  });
  const dbRows=rows.map(r=>({id:r.id,date:r.date,member_id:r.mid,member_name:r.name,meals:r.meals,guest:r.guest,notes:r.notes}));
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
  const ok=await dbOp(supa.from('meal_entries').delete().eq('id',id),'ডিলিট করা যায়নি');
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
  const mgr=managerFor(curMon(),curYr()); document.getElementById('bzby').value=mgr?mgr.name:'';
  setBusy('save-bz',false,ICONS.CHECK+'Save');openM('ov-bazar');
}
async function saveBazar(){
  if(!requireAdmin())return;
  const amt=N(document.getElementById('bzamt').value);
  if(amt<=0){toast('Amount দিন','er');return;}
  setBusy('save-bz',true);
  const rec={id:genId(STATE.bazarExp,'BZ-'),date:document.getElementById('bzd').value,by:document.getElementById('bzby').value.trim(),amount:amt,notes:document.getElementById('bznote').value.trim()};
  const ok=await dbOp(supa.from('bazar_expenses').insert({id:rec.id,date:rec.date,bought_by:rec.by,amount:rec.amount,notes:rec.notes}),'Bazar expense যোগ করা যায়নি');
  setBusy('save-bz',false,ICONS.CHECK+'Save');
  if(ok){ STATE.bazarExp.push(rec); closeM('ov-bazar'); persist('Bazar expense যোগ হয়েছে'); }
}
async function delBazar(id){
  if(!requireAdmin())return; if(!confirm('ডিলিট করবেন?'))return;
  const ok=await dbOp(supa.from('bazar_expenses').delete().eq('id',id),'ডিলিট করা যায়নি');
  if(ok){ STATE.bazarExp=STATE.bazarExp.filter(e=>e.id!==id); persist('ডিলিট হয়েছে'); }
}

/* ═══════════════════════════════════════════════════════════
   OTHER EXPENSES
   ═══════════════════════════════════════════════════════════ */
function renderOther(){
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
  const rec={id:genId(STATE.otherExp,'OE-'),date:document.getElementById('otd').value,title,amount:amt,notes:document.getElementById('otnote').value.trim()};
  const ok=await dbOp(supa.from('other_expenses').insert(rec),'Other expense যোগ করা যায়নি');
  setBusy('save-ot',false,ICONS.CHECK+'Save');
  if(ok){ STATE.otherExp.push(rec); closeM('ov-other'); persist('Other expense যোগ হয়েছে'); }
}
async function delOther(id){
  if(!requireAdmin())return; if(!confirm('ডিলিট করবেন?'))return;
  const ok=await dbOp(supa.from('other_expenses').delete().eq('id',id),'ডিলিট করা যায়নি');
  if(ok){ STATE.otherExp=STATE.otherExp.filter(e=>e.id!==id); persist('ডিলিট হয়েছে'); }
}

/* ═══════════════════════════════════════════════════════════
   DEPOSITS
   ═══════════════════════════════════════════════════════════ */
function renderDeposits(){
  const mon=document.getElementById('dep-mon-f').value,yr=N(document.getElementById('dep-yr-f').value);
  let list=STATE.deposits;
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
  populateMemberSelects();
  document.getElementById('depd').value=todayISO();document.getElementById('dep-member').value='';
  document.getElementById('depamt').value='';document.getElementById('depnote').value='';document.getElementById('depmeth').value='Cash';
  setBusy('save-dep',false,ICONS.CHECK+'Save');openM('ov-deposit');
}
async function saveDeposit(){
  if(!requireAdmin())return;
  const mid=document.getElementById('dep-member').value, amt=N(document.getElementById('depamt').value);
  if(!mid){toast('Member বাছুন','er');return;}
  if(amt<=0){toast('Amount দিন','er');return;}
  const member=STATE.members.find(m=>m.id===mid);
  setBusy('save-dep',true);
  const rec={id:genId(STATE.deposits,'DEP-'),date:document.getElementById('depd').value,mid,name:member.name,amount:amt,method:document.getElementById('depmeth').value,notes:document.getElementById('depnote').value.trim()};
  const ok=await dbOp(supa.from('deposits').insert({id:rec.id,date:rec.date,member_id:rec.mid,member_name:rec.name,amount:rec.amount,method:rec.method,notes:rec.notes}),'Deposit যোগ করা যায়নি');
  setBusy('save-dep',false,ICONS.CHECK+'Save');
  if(ok){ STATE.deposits.push(rec); closeM('ov-deposit'); persist('Deposit যোগ হয়েছে'); }
}
async function delDeposit(id){
  if(!requireAdmin())return; if(!confirm('ডিলিট করবেন?'))return;
  const ok=await dbOp(supa.from('deposits').delete().eq('id',id),'ডিলিট করা যায়নি');
  if(ok){ STATE.deposits=STATE.deposits.filter(p=>p.id!==id); persist('ডিলিট হয়েছে'); }
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
    [ICONS.CHART,money(rate.toFixed(2)),'Meal Rate','c-info'],[ICONS.RECEIPT,money(otherTotal),'Other Expenses','c-accent']
  ].map(([ic,v,l,c])=>`<div class="card stat ${c}"><div class="ic">${ic}</div><div class="lab">${l}</div><div class="val">${v}</div></div>`).join('');
  const mgr=managerFor(mon,yr);
  document.getElementById('sm-manager').innerHTML=`${ICONS.CROWN}<div style="flex:1">এই মাসের Manager: <b>${mgr?escapeHtml(mgr.name):'এখনো ঠিক করা হয়নি'}</b></div>${isAdmin?`<button class="btn sm primary" onclick="openManagerModal()">${mgr?'Change':'Assign'}</button>`:''}`;
  const list=STATE.members.filter(m=>m.status!=='Left');
  document.getElementById('sm-body').innerHTML=list.map(m=>{
    const s=memberSummary(m.id,mon,yr);
    return `<tr><td data-label="Member" style="font-weight:600">${escapeHtml(m.name)}</td>
      <td data-label="Meals" class="num">${(s.meals+s.guest).toFixed(1).replace(/\.0$/,'')}</td>
      <td data-label="Meal Cost" class="num" style="font-weight:700">${money(s.mealCost)}</td>
      <td data-label="Other Share" class="num">${money(s.otherShare)}</td>
      <td data-label="Deposits" class="num" style="color:var(--success)">${money(s.deposits)}</td>
      <td data-label="Balance" class="num" style="font-weight:700;color:${s.balance<0?'var(--danger)':'var(--success)'}">${money(Math.abs(s.balance))}</td>
      <td data-label="Status">${badge(s.status)}</td></tr>`;
  }).join('')||emptyRow(7,'কোনো member নেই');
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
  if(!mid){toast('Member বাছুন','er');return;}
  const member=STATE.members.find(m=>m.id===mid);
  const month=document.getElementById('mgr-mon').value, year=document.getElementById('mgr-yr').value;
  const key=month+'-'+year;
  setBusy('save-mgr',true);
  const ok=await dbOp(supa.from('managers').upsert({month_year:key,member_id:mid,member_name:member.name},{onConflict:'month_year'}),'Manager assign করা যায়নি');
  setBusy('save-mgr',false,ICONS.CHECK+'Save');
  if(ok){
    const idx=STATE.managers.findIndex(x=>x.monthYear===key);
    const rec={monthYear:key,mid,name:member.name};
    if(idx>=0)STATE.managers[idx]=rec; else STATE.managers.push(rec);
    closeM('ov-manager'); persist('Manager assign হয়েছে');
  }
}
function exportSummaryCSV(){
  const mon=document.getElementById('sm-mon').value,yr=N(document.getElementById('sm-yr').value);
  const rows=[['Member','Meals','Meal Cost','Other Share','Deposits','Balance','Status']];
  STATE.members.filter(m=>m.status!=='Left').forEach(m=>{
    const s=memberSummary(m.id,mon,yr);
    rows.push([m.name,(s.meals+s.guest).toFixed(1),s.mealCost,s.otherShare,s.deposits,s.balance,s.status]);
  });
  const csv=rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  downloadBlob(csv,`summary-${mon}-${yr}.csv`,'text/csv');
  toast('CSV ডাউনলোড হচ্ছে','ok');
}

/* ═══════════════════════════════════════════════════════════
   SETTINGS
   ═══════════════════════════════════════════════════════════ */
function renderSettings(){
  document.getElementById('set-messname').value=STATE.settings.messName;
  document.getElementById('set-admin-pin').value='';
  document.getElementById('set-viewer-pin').value='';
  const mgrs=[...STATE.managers].sort((a,b)=>b.monthYear.localeCompare(a.monthYear));
  document.getElementById('set-managers-list').innerHTML=mgrs.map(x=>`<div class="led-row"><span>${x.monthYear}</span><b>${escapeHtml(x.name)}</b></div>`).join('')||'<p class="hint">কোনো Manager assign করা হয়নি</p>';
}
async function saveMessInfo(){
  if(!requireAdmin())return;
  const name=document.getElementById('set-messname').value.trim()||'My Mess';
  const ok=await dbOp(supa.from('settings').update({mess_name:name}).eq('id',1),'Save করা যায়নি');
  if(ok){ STATE.settings.messName=name; document.getElementById('sb-messname').textContent=name; persist('Save হয়েছে'); }
}
async function savePins(){
  if(!requireAdmin())return;
  const newAdmin=document.getElementById('set-admin-pin').value.trim();
  const newViewer=document.getElementById('set-viewer-pin').value.trim();
  const viewerTouched=document.getElementById('set-viewer-pin').value!=='';
  if(newAdmin && !/^\d{4,6}$/.test(newAdmin)){toast('Manager PIN ৪-৬ সংখ্যার হতে হবে','er');return;}
  if(newViewer && !/^\d{4,6}$/.test(newViewer)){toast('Member PIN ৪-৬ সংখ্যার হতে হবে','er');return;}
  if(newAdmin && newAdmin===newViewer){toast('Manager আর Member PIN একই রাখা যাবে না','er');return;}
  const patch={};
  if(newAdmin)patch.admin_pin=newAdmin;
  if(viewerTouched)patch.viewer_pin=newViewer;
  if(!Object.keys(patch).length){toast('কিছু বদলাননি','er');return;}
  const ok=await dbOp(supa.from('settings').update(patch).eq('id',1),'PIN আপডেট করা যায়নি');
  if(ok){
    if(newAdmin)STATE.settings.adminPin=newAdmin;
    if(viewerTouched)STATE.settings.viewerPin=newViewer;
    document.getElementById('set-admin-pin').value='';
    document.getElementById('set-viewer-pin').value='';
    persist('PIN আপডেট হয়েছে');
  }
}
function downloadBlob(content,filename,mime){
  const blob=new Blob([content],{type:mime});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(url),2000);
}
async function resetAllData(){
  if(!requireAdmin())return;
  if(!confirm('⚠️ এতে সব Member, Meal, Bazar, Deposit ডেটা চিরতরে মুছে যাবে। নিশ্চিত?'))return;
  if(!confirm('আরেকবার নিশ্চিত করুন — এই কাজ Undo করা যাবে না।'))return;
  const results=await Promise.all([
    supa.from('members').delete().neq('id','__none__'),
    supa.from('meal_entries').delete().neq('id','__none__'),
    supa.from('bazar_expenses').delete().neq('id','__none__'),
    supa.from('other_expenses').delete().neq('id','__none__'),
    supa.from('deposits').delete().neq('id','__none__'),
    supa.from('managers').delete().neq('month_year','__none__'),
  ]);
  const err=results.find(r=>r.error);
  if(err){ toast('মুছে ফেলার সময় সমস্যা হয়েছে: '+err.error.message,'er'); return; }
  STATE.members=[];STATE.mealEntries=[];STATE.bazarExp=[];STATE.otherExp=[];STATE.deposits=[];STATE.managers=[];
  persist('সব ডেটা মুছে ফেলা হয়েছে');
}

