import React, { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { ArrowDown, ArrowUp, ExternalLink, ImagePlus, LogOut, Plus, Save, Trash2 } from 'lucide-react';
import { useSiteContent, type SiteContent } from '../../context/SiteContentContext';
import { DEFAULT_TRANSLATIONS, type Language, type Translations } from '../../context/LanguageContext';
import type { CareerMilestone, ProjectItem } from '../../data/portfolioData';
import type { TrustClient } from '../../data/trustClients';
import { supabase } from '../../lib/supabaseClient';
import { ADMIN_EMAIL, MEDIA_BUCKET } from '../../lib/supabaseConfig';

type Tab = 'profile' | 'projects' | 'clients' | 'career' | 'copy';
const tabs: { key: Tab; label: string }[] = [
  { key: 'profile', label: 'البيانات الشخصية' },
  { key: 'projects', label: 'المشاريع' },
  { key: 'clients', label: 'الجهات والعملاء' },
  { key: 'career', label: 'المسيرة المهنية' },
  { key: 'copy', label: 'نصوص الموقع' },
];
const fieldClass = 'w-full rounded-xl border border-white/10 bg-[#191A20] px-3.5 py-2.5 text-sm text-white outline-none focus:border-fuchsia-500';
const buttonClass = 'rounded-full border border-white/15 px-3 py-1.5 text-xs text-white hover:border-fuchsia-400 disabled:opacity-40';

function Field({ label, value, onChange, multiline = false, hint }: { label: string; value: string; onChange: (value: string) => void; multiline?: boolean; hint?: string }) {
  return <label className="block min-w-0 space-y-1.5 text-sm text-slate-300">
    <span className="font-medium">{label}</span>
    {multiline ? <textarea className={`${fieldClass} min-h-24 resize-y`} value={value} onChange={(event) => onChange(event.target.value)} />
      : <input className={fieldClass} value={value} onChange={(event) => onChange(event.target.value)} />}
    {hint && <span className="block text-xs text-slate-500">{hint}</span>}
  </label>;
}

function Panel({ title, children, actions }: { title: string; children: React.ReactNode; actions?: React.ReactNode }) {
  return <section className="rounded-2xl border border-white/10 bg-[#111216] p-4 sm:p-6">
    <div className="mb-5 flex items-center justify-between gap-3"><h2 className="text-lg font-bold text-white">{title}</h2>{actions}</div>
    {children}
  </section>;
}

function cloneContent(content: SiteContent): SiteContent { return structuredClone(content); }

export default function AdminPage() {
  const { content, ready, refresh } = useSiteContent();
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [password, setPassword] = useState('');
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authBusy, setAuthBusy] = useState(false);
  const [tab, setTab] = useState<Tab>('projects');
  const [draft, setDraft] = useState<SiteContent | null>(null);
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState('');
  const [copyLang, setCopyLang] = useState<Language>('en');
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [openCareer, setOpenCareer] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    void supabase.auth.getUser().then(({ data }) => { if (active) { setUser(data.user); setAuthReady(true); } });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => { if (active) setUser(session?.user ?? null); });
    return () => { active = false; listener.subscription.unsubscribe(); };
  }, []);
  useEffect(() => { if (ready && !draft) setDraft(cloneContent(content)); }, [ready, content, draft]);

  const authorized = !!user && user.email?.toLowerCase() === ADMIN_EMAIL && !!user.email_confirmed_at;
  const edit = (update: (current: SiteContent) => void) => { setDraft((current) => { if (!current) return current; const next = cloneContent(current); update(next); return next; }); setStatus('تغييرات لم تُحفظ بعد'); };

  async function signIn(event: React.FormEvent) {
    event.preventDefault(); setAuthBusy(true); setStatus('');
    const { error } = await supabase.auth.signInWithPassword({ email: ADMIN_EMAIL, password });
    setAuthBusy(false); setPassword('');
    if (error) setStatus(error.code === 'invalid_credentials'
      ? 'بيانات الدخول غير صحيحة. لو دي أول مرة، اختر «إنشاء الحساب لأول مرة» أولًا.'
      : error.message);
  }
  async function signUp(event: React.FormEvent) {
    event.preventDefault();
    if (password.length < 8) { setStatus('اكتب كلمة مرور من 8 أحرف على الأقل.'); return; }
    setAuthBusy(true); setStatus('');
    const { error } = await supabase.auth.signUp({ email: ADMIN_EMAIL, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
    setAuthBusy(false); setPassword('');
    setStatus(error ? `تعذّر إنشاء الحساب: ${error.message}. راجع إعداد إرسال البريد في Supabase.`
      : `تم طلب إنشاء الحساب. افتح رسالة التأكيد على ${ADMIN_EMAIL} ثم سجّل الدخول.`);
  }
  async function save() {
    if (!draft) return;
    setSaving(true); setStatus('جارٍ الحفظ...');
    const { error } = await supabase.from('site_content').update({ data: draft, updated_at: new Date().toISOString() }).eq('id', 1).select('id').single();
    setSaving(false);
    if (error) { setStatus(`تعذّر الحفظ: ${error.message}`); return; }
    await refresh(); setStatus('تم الحفظ والنشر بنجاح.');
  }
  async function upload(file: File, target: string, applyUrl: (url: string) => void) {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/gif'];
    if (!allowed.includes(file.type) || file.size > 10 * 1024 * 1024) { setStatus('الصور المقبولة: JPG، PNG، WebP، AVIF أو GIF بحجم حتى 10 MB.'); return; }
    setUploading(target); setStatus('جارٍ رفع الصورة...');
    const extension = file.name.split('.').pop()?.toLowerCase() || 'image';
    const path = `${target}/${crypto.randomUUID()}.${extension}`;
    const { error } = await supabase.storage.from(MEDIA_BUCKET).upload(path, file, { contentType: file.type, upsert: false });
    setUploading('');
    if (error) { setStatus(`تعذّر رفع الصورة: ${error.message}`); return; }
    applyUrl(supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path).data.publicUrl);
    setStatus('تم رفع الصورة. اضغط حفظ لنشرها.');
  }
  const uploadInput = (target: string, applyUrl: (url: string) => void) => <label className={`${buttonClass} inline-flex cursor-pointer items-center gap-1.5`}><ImagePlus size={14} />{uploading === target ? 'جارٍ الرفع...' : 'ارفع صورة'}<input type="file" accept="image/jpeg,image/png,image/webp,image/avif,image/gif" className="sr-only" disabled={!!uploading} onChange={(e) => { const file = e.target.files?.[0]; if (file) void upload(file, target, applyUrl); e.target.value = ''; }} /></label>;
  const move = <T,>(items: T[], index: number, delta: number): T[] => { const next = [...items]; const target = index + delta; if (target < 0 || target >= next.length) return next; [next[index], next[target]] = [next[target], next[index]]; return next; };
  const rowActions = (index: number, length: number, onMove: (delta: number) => void, onRemove: () => void) => <div className="flex gap-1"><button className={buttonClass} disabled={index === 0} onClick={() => onMove(-1)} aria-label="حرّك لأعلى"><ArrowUp size={14} /></button><button className={buttonClass} disabled={index === length - 1} onClick={() => onMove(1)} aria-label="حرّك لأسفل"><ArrowDown size={14} /></button><button className={`${buttonClass} text-rose-300`} onClick={onRemove} aria-label="احذف"><Trash2 size={14} /></button></div>;

  if (!authReady) return <div className="min-h-screen bg-[#0C0C0C] p-8 text-slate-300">جارٍ التحقق من الدخول...</div>;
  if (!authorized) return <main dir="rtl" className="flex min-h-screen items-center justify-center bg-[#0C0C0C] p-4 text-white"><div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#131318] p-7 shadow-2xl"><a href="/" className="text-xs text-fuchsia-400">← الموقع</a><h1 className="mt-5 text-2xl font-bold">{authMode === 'signup' ? 'إنشاء حساب الإدارة' : 'لوحة تحكم مؤمنة'}</h1><p className="mt-2 text-sm text-slate-400">{authMode === 'signup' ? `اختار كلمة مرور، ثم هنرسل رابط تأكيد إلى ${ADMIN_EMAIL}` : `الدخول متاح فقط للبريد الإلكتروني المؤكد: ${ADMIN_EMAIL}`}</p>{user && <p className="mt-4 text-sm text-amber-300">الحساب الحالي غير مصرح له. أكّد البريد الإلكتروني ثم سجّل الدخول.</p>}<form onSubmit={authMode === 'signup' ? signUp : signIn} className="mt-6 space-y-4"><input className={fieldClass} value={ADMIN_EMAIL} disabled aria-label="البريد الإلكتروني" /><input className={fieldClass} type="password" minLength={8} placeholder="كلمة المرور (8 أحرف على الأقل)" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete={authMode === 'signup' ? 'new-password' : 'current-password'} /><button type="submit" disabled={authBusy} className="w-full rounded-full bg-fuchsia-700 px-5 py-3 font-semibold hover:bg-fuchsia-600 disabled:opacity-50">{authBusy ? 'لحظة...' : authMode === 'signup' ? 'إنشاء الحساب وإرسال رابط التأكيد' : 'دخول'}</button></form><button type="button" disabled={authBusy} onClick={() => { setAuthMode(authMode === 'signin' ? 'signup' : 'signin'); setStatus(''); }} className="mt-4 text-sm text-fuchsia-300 underline">{authMode === 'signup' ? 'عندي حساب بالفعل — تسجيل الدخول' : 'إنشاء الحساب لأول مرة'}</button>{user && <button onClick={() => void supabase.auth.signOut()} className="mr-5 text-sm text-slate-400 underline">تسجيل الخروج</button>}{status && <p role="status" className="mt-4 text-sm text-amber-300">{status}</p>}</div></main>;
  if (!draft) return <div className="min-h-screen bg-[#0C0C0C] p-8 text-slate-300">جارٍ تحميل المحتوى...</div>;

  return <main dir="rtl" className="min-h-screen bg-[#0C0C0C] px-4 py-8 font-['Kanit',sans-serif] text-slate-200 sm:px-8"><div className="mx-auto max-w-6xl">
    <header className="mb-7 flex flex-wrap items-start justify-between gap-4"><div><div className="text-xs font-bold tracking-widest text-fuchsia-400">MOUMENA CMS</div><h1 className="mt-1 text-3xl font-black text-white">لوحة تحكم الموقع</h1><p className="mt-1 text-sm text-slate-400">رتّب العناصر وعدّلها، ثم اضغط حفظ ونشر. الفيديوهات تُضاف كرابط Google Drive أو YouTube أو Vimeo.</p></div><div className="flex flex-wrap gap-2"><a href="/" target="_blank" rel="noreferrer" className={`${buttonClass} inline-flex items-center gap-1`}>عرض الموقع <ExternalLink size={14}/></a><button className={buttonClass} onClick={() => void supabase.auth.signOut()}><LogOut size={14} className="inline"/> خروج</button><button disabled={saving || !!uploading} onClick={() => void save()} className="inline-flex items-center gap-2 rounded-full bg-fuchsia-700 px-5 py-2 text-sm font-bold text-white hover:bg-fuchsia-600 disabled:opacity-50"><Save size={16}/> حفظ ونشر</button></div></header>
    {status && <div role="status" className="mb-5 rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/10 p-3 text-sm text-fuchsia-100">{status}</div>}
    <nav className="mb-6 flex gap-2 overflow-x-auto pb-2" aria-label="أقسام الإدارة">{tabs.map(({ key, label }) => <button key={key} onClick={() => setTab(key)} className={`shrink-0 rounded-full px-4 py-2 text-sm ${tab === key ? 'bg-white text-black font-bold' : 'border border-white/10 text-slate-300 hover:border-white/30'}`}>{label}</button>)}</nav>

    {tab === 'profile' && <Panel title="البيانات الشخصية والتواصل"><div className="grid gap-4 sm:grid-cols-2">{([['name','الاسم الكامل'],['shortName','الاسم المختصر'],['title','المسمى المهني'],['location','الموقع'],['email','البريد المعروض'],['phone','رقم الهاتف'],['whatsapp','رابط واتساب']] as const).map(([key,label]) => <Field key={key} label={label} value={draft.profile[key]} onChange={(value) => edit((next) => { next.profile[key] = value; })} />)}<div className="sm:col-span-2"><Field label="رابط الصورة الشخصية" value={draft.profile.avatarUrl} onChange={(value) => edit((next) => { next.profile.avatarUrl = value; })} /></div><div className="sm:col-span-2">{uploadInput('avatar', (url) => edit((next) => { next.profile.avatarUrl = url; }))}</div>{draft.profile.avatarUrl && <img src={draft.profile.avatarUrl} alt="الصورة الشخصية" className="h-28 w-28 rounded-2xl object-cover"/>}</div><p className="mt-5 text-xs text-amber-300">تغيير البريد المعروض هنا لا يغيّر عنوان استقبال رسائل نموذج التواصل في إعدادات Cloudflare (CONTACT_TO_EMAIL).</p><div className="mt-8 border-t border-white/10 pt-6"><h3 className="mb-4 font-bold text-white">الزخارف والصور المحيطة بقسم «عني»</h3><div className="grid gap-4 sm:grid-cols-2">{([['moon','القمر'],['object3d','الشكل ثلاثي الأبعاد'],['lego','المكعب'],['group3d','مجموعة الأشكال']] as const).map(([key,label]) => <div key={key} className="space-y-2"><Field label={label} value={draft.cornerIcons[key]} onChange={(value) => edit((next) => { next.cornerIcons[key] = value; })}/>{uploadInput(`decor/${key}`,(url) => edit((next) => { next.cornerIcons[key] = url; }))}</div>)}</div></div></Panel>}

    {tab === 'projects' && <div className="space-y-4"><div className="flex justify-end"><button className={buttonClass} onClick={() => edit((next) => { const id = crypto.randomUUID(); next.projects.push({ id, number: String(next.projects.length + 1).padStart(2,'0'), title:'مشروع جديد', titleAr:'مشروع جديد', category:'Design', categoryAr:'تصميم', client:'', clientAr:'', summary:'', summaryAr:'', col1TopImage:'', col1BottomImage:'', col2Image:'', tags:[], year:String(new Date().getFullYear()), customVisuals:true, videoUrls:[] }); })}><Plus size={14} className="inline"/> أضف مشروعًا</button></div>{draft.projects.map((project, index) => <Panel key={project.id} title={`${index+1}. ${project.title || project.titleAr}`} actions={<div className="flex items-center gap-2"><button className={buttonClass} onClick={() => setOpenProject(openProject === project.id ? null : project.id)}>{openProject === project.id ? 'إغلاق' : 'تعديل'}</button>{rowActions(index,draft.projects.length,(delta) => edit((next) => { next.projects = move(next.projects,index,delta); }),() => edit((next) => { next.projects.splice(index,1); }))}</div>}>{openProject === project.id && <><div className="grid gap-4 sm:grid-cols-2">{([['title','عنوان EN'],['titleAr','العنوان AR'],['category','التصنيف EN'],['categoryAr','التصنيف AR'],['client','العميل EN'],['clientAr','العميل AR'],['year','السنة'],['recognition','التقدير EN'],['recognitionAr','التقدير AR']] as const).map(([key,label]) => <Field key={key} label={label} value={project[key] || ''} onChange={(value) => edit((next) => { (next.projects[index] as ProjectItem & Record<string,string>)[key] = value; })} />)}<Field label="الوصف EN" value={project.summary} multiline onChange={(value) => edit((next) => { next.projects[index].summary = value; })}/><Field label="الوصف AR" value={project.summaryAr} multiline onChange={(value) => edit((next) => { next.projects[index].summaryAr = value; })}/><Field label="الوسوم — افصل بفاصلة" value={project.tags.join(', ')} onChange={(value) => edit((next) => { next.projects[index].tags = value.split(',').map((tag) => tag.trim()).filter(Boolean); })}/><Field label="روابط الفيديو — رابط في كل سطر" value={(project.videoUrls || []).join('\n')} multiline hint="Google Drive: اجعل إذن الملف Anyone with the link، ثم الصق رابطه هنا." onChange={(value) => edit((next) => { next.projects[index].videoUrls = value.split('\n').map((url) => url.trim()).filter(Boolean); })}/></div><label className="mt-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={!!project.customVisuals} onChange={(e) => edit((next) => { next.projects[index].customVisuals = e.target.checked; })}/> اعرض صوري بدل التصميم الافتراضي للمشروع</label><div className="mt-4 grid gap-4 sm:grid-cols-3">{([['col1TopImage','الصورة الأولى'],['col1BottomImage','الصورة الثانية'],['col2Image','الصورة الثالثة']] as const).map(([key,label]) => <div key={key} className="space-y-2"><Field label={label} value={project[key]} onChange={(value) => edit((next) => { next.projects[index][key] = value; next.projects[index].customVisuals = true; })}/>{uploadInput(`projects/${project.id}/${key}`,(url) => edit((next) => { next.projects[index][key] = url; next.projects[index].customVisuals = true; }))}{project[key] && <img src={project[key]} alt={label} loading="lazy" className="h-28 w-full rounded-xl bg-black object-cover"/>}</div>)}</div></>}</Panel>)}</div>}

    {tab === 'clients' && <div className="space-y-4"><div className="flex justify-end"><button className={buttonClass} onClick={() => edit((next) => { next.trustClients.push({ nameEn:'New client', nameAr:'عميل جديد', code:'', categoryEn:'', categoryAr:'' }); })}><Plus size={14} className="inline"/> أضف جهة</button></div>{draft.trustClients.map((client,index) => <Panel key={index} title={`${index+1}. ${client.nameAr}`} actions={rowActions(index,draft.trustClients.length,(delta) => edit((next) => { next.trustClients = move(next.trustClients,index,delta); }),() => edit((next) => { next.trustClients.splice(index,1); }))}><div className="grid gap-4 sm:grid-cols-2">{([['nameEn','اسم الجهة EN'],['nameAr','اسم الجهة AR'],['code','الرمز المختصر'],['categoryEn','النوع EN'],['categoryAr','النوع AR']] as const).map(([key,label]) => <Field key={key} label={label} value={client[key]} onChange={(value) => edit((next) => { (next.trustClients[index] as TrustClient)[key] = value; })}/>)}</div></Panel>)}</div>}

    {tab === 'career' && <div className="space-y-4"><div className="flex justify-end"><button className={buttonClass} onClick={() => edit((next) => { next.careerJourney.push({ period:'',periodAr:'',role:'',roleAr:'',company:'',companyAr:'',location:'',locationAr:'',type:'',typeAr:'',description:'',descriptionAr:'',achievements:[],achievementsAr:[] }); })}><Plus size={14} className="inline"/> أضف خبرة</button></div>{draft.careerJourney.map((item,index) => <Panel key={index} title={`${index+1}. ${item.companyAr || item.company}`} actions={<div className="flex items-center gap-2"><button className={buttonClass} onClick={() => setOpenCareer(openCareer === index ? null : index)}>{openCareer === index ? 'إغلاق' : 'تعديل'}</button>{rowActions(index,draft.careerJourney.length,(delta) => edit((next) => { next.careerJourney = move(next.careerJourney,index,delta); }),() => edit((next) => { next.careerJourney.splice(index,1); }))}</div>}>{openCareer === index && <><div className="grid gap-4 sm:grid-cols-2">{([['period','الفترة EN'],['periodAr','الفترة AR'],['role','الوظيفة EN'],['roleAr','الوظيفة AR'],['company','الجهة EN'],['companyAr','الجهة AR'],['location','الموقع EN'],['locationAr','الموقع AR'],['type','النوع EN'],['typeAr','النوع AR'],['description','الوصف EN'],['descriptionAr','الوصف AR']] as const).map(([key,label]) => <Field key={key} label={label} value={item[key]} multiline={key.startsWith('description')} onChange={(value) => edit((next) => { (next.careerJourney[index] as CareerMilestone & Record<string,string>)[key] = value; })}/>)}</div><div className="mt-4 grid gap-4 sm:grid-cols-2"><Field label="الإنجازات EN — سطر لكل إنجاز" value={item.achievements.join('\n')} multiline onChange={(value) => edit((next) => { next.careerJourney[index].achievements = value.split('\n').filter(Boolean); })}/><Field label="الإنجازات AR — سطر لكل إنجاز" value={item.achievementsAr.join('\n')} multiline onChange={(value) => edit((next) => { next.careerJourney[index].achievementsAr = value.split('\n').filter(Boolean); })}/></div><label className="mt-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={!!item.education} onChange={(e) => edit((next) => { next.careerJourney[index].education = e.target.checked; })}/> هذه شهادة تعليمية</label></>}</Panel>)}</div>}

    {tab === 'copy' && <div className="space-y-4"><div className="flex gap-2"><button className={copyLang === 'en' ? 'rounded-full bg-white px-4 py-2 text-sm text-black' : buttonClass} onClick={() => setCopyLang('en')}>English</button><button className={copyLang === 'ar' ? 'rounded-full bg-white px-4 py-2 text-sm text-black' : buttonClass} onClick={() => setCopyLang('ar')}>العربية</button></div>{(Object.keys(DEFAULT_TRANSLATIONS[copyLang]) as (keyof Translations)[]).map((section) => <Panel key={section} title={section}><div className="grid gap-4 sm:grid-cols-2">{Object.entries(DEFAULT_TRANSLATIONS[copyLang][section]).map(([key, defaultValue]) => <Field key={key} label={key} value={(draft.copy?.[copyLang]?.[section] as Record<string,string> | undefined)?.[key] ?? defaultValue} multiline={defaultValue.length > 100} onChange={(value) => edit((next) => { next.copy ??= structuredClone(DEFAULT_TRANSLATIONS); (next.copy[copyLang][section] as Record<string,string>)[key] = value; })}/>)}</div></Panel>)}</div>}
  </div></main>;
}
