import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Building, Video, CheckCircle2, Globe, Flame, Laptop, ExternalLink } from 'lucide-react';

export interface PortfolioMarqueeItem {
  id: string;
  client: string;
  clientAr: string;
  category: string;
  title: string;
  titleAr: string;
  tag: string;
  bgGradient: string;
  borderColor: string;
  accentColor: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export const PORTFOLIO_MARQUEE_ITEMS: PortfolioMarqueeItem[] = [
  // 1. MOHAP Certificate
  {
    id: 'mohap-cert',
    client: 'Ministry of Health & Prevention',
    clientAr: 'وزارة الصحة ووقاية المجتمع',
    category: 'Official Recognition',
    title: 'COVID-19 Certificate of Appreciation',
    titleAr: 'شهادة شكر وتقدير - كوفيد-19',
    tag: 'UAE MOHAP',
    bgGradient: 'from-[#1A1813] via-[#241F15] to-[#12100C]',
    borderColor: 'border-[#C5A059]/40',
    accentColor: 'text-[#D4AF37]',
    icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-3">
          <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
            UNITED ARAB EMIRATES
          </span>
          <span className="text-xs font-bold text-amber-200">وزارة الصحة ووقاية المجتمع</span>
        </div>
        <div className="my-auto py-2">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#C5A059]/15 text-[#D4AF37] text-[10px] uppercase font-bold tracking-wider mb-2">
            OFFICIAL HONOR
          </div>
          <h4 className="text-xl font-black text-white tracking-wide">شهادة شكر وتقدير</h4>
          <p className="text-xs text-amber-100/80 mt-1 line-clamp-2">
            للأخت مؤمنة محمد لجهودها المتميزة وسرعة الإنجاز خلال فترة جائحة كوفيد-19
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-[#C5A059]/20 text-[10px] text-slate-400">
          <span>إدارة الاتصال الحكومي</span>
          <span className="text-[#D4AF37] font-semibold">COVID-19 MISSION</span>
        </div>
      </div>
    ),
  },

  // 2. Sheikh Mohammed Tweet
  {
    id: 'sheikh-tweet',
    client: 'Prime Minister Office & MOHAP',
    clientAr: 'تغريدة الشيخ محمد بن راشد',
    category: 'Royal Feature',
    title: 'World Health Day Royal Video Tweet',
    titleAr: 'فيديو اليوم العالمي للصحة',
    tag: 'HH Sheikh Mohammed',
    bgGradient: 'from-[#0A192F] via-[#0E2A47] to-[#081220]',
    borderColor: 'border-sky-500/30',
    accentColor: 'text-sky-400',
    icon: <Video className="w-5 h-5 text-sky-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-amber-600/30 text-amber-300 font-bold flex items-center justify-center text-xs">
              محمد
            </div>
            <div>
              <span className="text-xs font-bold text-white block">@HHShkMohd</span>
              <span className="text-[9px] text-sky-400">World Health Day Tweet</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400">1,727 Retweets</span>
        </div>
        <div className="my-auto py-2">
          <p className="text-xs text-slate-200 text-right leading-relaxed line-clamp-2 font-medium">
            يمر يوم الصحة العالمي بشكل استثنائي هذا العام.. شكر مقدمي الرعاية لا يكفيه عام
          </p>
          <div className="mt-2.5 p-2 rounded-xl bg-black/40 border border-sky-500/30 flex items-center justify-between">
            <span className="text-[10px] text-sky-200 font-semibold">Motion Video Direction: Moumena</span>
            <span className="text-[9px] text-emerald-400 font-mono">4,987 LIKES</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-400">
          <span>UAE MOHAP Production</span>
          <span className="text-sky-400 font-bold">VIRAL CAMPAIGN</span>
        </div>
      </div>
    ),
  },

  // 3. MOHAP Social Awareness Suite
  {
    id: 'mohap-social',
    client: 'Ministry of Health',
    clientAr: 'وزارة الصحة ووقاية المجتمع',
    category: 'Social Media Campaign',
    title: 'COVID-19 Public Awareness Series',
    titleAr: 'سلسلة بوستات التوعية المجتمعية',
    tag: '12+ Posts Suite',
    bgGradient: 'from-[#0F2027] via-[#203A43] to-[#2C5364]',
    borderColor: 'border-cyan-500/30',
    accentColor: 'text-cyan-400',
    icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-cyan-300">
            Social Media Direction
          </span>
          <span className="text-xs font-bold text-white">رسائل توعوية</span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto py-2 text-center">
          <div className="p-2 rounded-xl bg-black/40 border border-cyan-500/20">
            <span className="text-[11px] block font-bold text-cyan-300">اترك مسافة آمنة</span>
            <span className="text-[8px] text-slate-300 mt-0.5 block">Physical Distancing</span>
          </div>
          <div className="p-2 rounded-xl bg-black/40 border border-cyan-500/20">
            <span className="text-[11px] block font-bold text-cyan-300">أنواع الكمامات</span>
            <span className="text-[8px] text-slate-300 mt-0.5 block">Mask Protection</span>
          </div>
          <div className="p-2 rounded-xl bg-black/40 border border-cyan-500/20">
            <span className="text-[11px] block font-bold text-cyan-300">بيئة العمل</span>
            <span className="text-[8px] text-slate-300 mt-0.5 block">Workplace Safety</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-cyan-500/20 text-[10px] text-slate-400">
          <span>Multilingual Campaign</span>
          <span className="text-cyan-300 font-mono">1.2M+ IMPRESSIONS</span>
        </div>
      </div>
    ),
  },

  // 4. Emirates Health Services - Smart Nutrition
  {
    id: 'ehs-nutrition',
    client: 'Emirates Health Services (EHS)',
    clientAr: 'مؤسسة الإمارات للخدمات الصحية',
    category: 'Brand Campaign',
    title: 'Smart Nutrition Revolution',
    titleAr: 'التغذية الذكية.. نقلة نوعية',
    tag: 'EHS Innovation',
    bgGradient: 'from-[#1E112A] via-[#2D163F] to-[#140B1E]',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    icon: <Heart className="w-5 h-5 text-purple-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
          <span className="text-[10px] font-mono text-purple-300 uppercase">Emirates Health Services</span>
          <span className="text-xs font-bold text-white">تغطية الفعاليات</span>
        </div>
        <div className="my-auto py-2">
          <div className="text-[10px] text-purple-300 uppercase tracking-widest font-semibold mb-1">
            Healthcare Campaign
          </div>
          <h4 className="text-xl font-black text-white">التغذية الذكية.. نقلة نوعية</h4>
          <p className="text-xs text-purple-200/70 mt-1">
            تصميم الهوية البصرية للخدمات السريرية الذكية والتغذية العلاجية للمستشفيات
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-purple-500/20 text-[10px] text-slate-400">
          <span>Social Media Coverage</span>
          <span className="text-purple-300 font-semibold">SMART CLINICS</span>
        </div>
      </div>
    ),
  },

  // 5. EHS - Nursing Staff
  {
    id: 'ehs-nursing',
    client: 'Emirates Health Services',
    clientAr: 'مؤسسة الإمارات للخدمات الصحية',
    category: 'Healthcare Heroes',
    title: 'Nursing & Midwifery Cadres',
    titleAr: 'كوادر التمريض والقبالة .. هم للحياة أمان',
    tag: 'Frontline Heroes',
    bgGradient: 'from-[#0D1F2D] via-[#1A3A54] to-[#0A1621]',
    borderColor: 'border-teal-500/30',
    accentColor: 'text-teal-400',
    icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-teal-500/20 pb-2">
          <span className="text-[10px] font-mono text-teal-300 uppercase">Emirates Health Services</span>
          <span className="text-xs font-bold text-teal-200">أبطال التمريض</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-lg font-black text-white">كوادر التمريض والقبالة .. هم للحياة أمان</h4>
          <p className="text-xs text-teal-100/70 mt-1.5 leading-relaxed">
            حملة وطنية متكاملة لتقدير دور الكوادر التمريضية كصمام أمان للمنظومة الصحية
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-teal-500/20 text-[10px] text-slate-400">
          <span>Art Direction &amp; Photography Layouts</span>
          <span className="text-teal-300 font-mono">NATIONWIDE</span>
        </div>
      </div>
    ),
  },

  // 6. EHS - World Drug Day
  {
    id: 'ehs-drug-day',
    client: 'Emirates Health Services',
    clientAr: 'مؤسسة الإمارات للخدمات الصحية',
    category: 'Awareness Campaign',
    title: 'World Drug Awareness Day',
    titleAr: 'اليوم العالمي لمكافحة المخدرات',
    tag: 'Public Health',
    bgGradient: 'from-[#1F140E] via-[#331E12] to-[#120B07]',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    icon: <Flame className="w-5 h-5 text-amber-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
          <span className="text-[10px] font-mono text-amber-300 uppercase">ملتقى كافح الإدمان</span>
          <span className="text-xs font-bold text-white">وكن في أمان</span>
        </div>
        <div className="my-auto py-2 text-right">
          <h4 className="text-lg font-black text-amber-300">اليوم العالمي لمكافحة المخدرات</h4>
          <p className="text-sm font-bold text-white mt-1">لا تواجه مرض الإدمان لوحدك نحن معك</p>
          <span className="text-[10px] text-slate-400 mt-1 block">رعاية سرية ومتكاملة على مدار الساعة</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-amber-500/20 text-[10px] text-slate-400">
          <span>Social Media Assets</span>
          <span className="text-amber-300 font-semibold">WORLD DRUG DAY</span>
        </div>
      </div>
    ),
  },

  // 7. EHS - World Family Doctors Day
  {
    id: 'ehs-family-doctors',
    client: 'Emirates Health Services',
    clientAr: 'مؤسسة الإمارات للخدمات الصحية',
    category: 'Healthcare Campaign',
    title: 'World Family Doctors Day',
    titleAr: 'اليوم العالمي لطبيب الأسرة',
    tag: '19 May Celebration',
    bgGradient: 'from-[#141B26] via-[#1D2A3D] to-[#0E131C]',
    borderColor: 'border-sky-500/30',
    accentColor: 'text-sky-400',
    icon: <Building className="w-5 h-5 text-sky-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-sky-500/20 pb-2">
          <span className="text-[10px] font-mono text-sky-300">WORLD FAMILY DOCTORS DAY</span>
          <span className="text-xs font-bold text-white">19-5-2022</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-lg font-black text-white">اليوم العالمي لطبيب الأسرة</h4>
          <p className="text-xs text-sky-100/70 mt-1.5 leading-relaxed">
            الاحتفاء بأطباء الأسرة باعتبارهم ركيزة أساسية لمنظومة الرعاية الصحية الأولية المتكاملة
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-sky-500/20 text-[10px] text-slate-400">
          <span>Editorial Social Carousels</span>
          <span className="text-sky-300 font-semibold">PRIMARY HEALTH</span>
        </div>
      </div>
    ),
  },

  // 8. EHS - Future Health System
  {
    id: 'ehs-future-health',
    client: 'Emirates Health Services',
    clientAr: 'مؤسسة الإمارات للخدمات الصحية',
    category: 'Strategic Vision',
    title: 'Pioneering Healthcare System',
    titleAr: 'منظومة صحية ريادية وكوادر طبية استثنائية',
    tag: 'UAE Medical Future',
    bgGradient: 'from-[#0A1A22] via-[#112F3D] to-[#07131B]',
    borderColor: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    icon: <Globe className="w-5 h-5 text-emerald-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
          <span className="text-[10px] font-mono text-emerald-300">STRATEGIC HEALTH VISION</span>
          <span className="text-xs font-bold text-white">فجر جديد لطب الإمارات</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-lg font-black text-white">مستقبل صحي مستدام</h4>
          <p className="text-xs text-emerald-100/70 mt-1.5 leading-relaxed">
            منظومة صحية ريادية وكوادر طبية استثنائية تقود الابتكار في الرعاية الذكية
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-emerald-500/20 text-[10px] text-slate-400">
          <span>Visionary Campaign Branding</span>
          <span className="text-emerald-300 font-semibold">FUTURE MEDICINE</span>
        </div>
      </div>
    ),
  },

  // 9. Zabeel Ladies Club - #IAmRemarkable Event
  {
    id: 'zabeel-event',
    client: 'Zabeel Ladies Club',
    clientAr: 'نادي زعبيل للسيدات',
    category: 'Event Branding & Print',
    title: '#IAmRemarkable Event System',
    titleAr: 'فعالية I Am Remarkable',
    tag: 'Google Partnership',
    bgGradient: 'from-[#220F35] via-[#351654] to-[#180A26]',
    borderColor: 'border-purple-500/40',
    accentColor: 'text-[#E0A8FF]',
    icon: <Sparkles className="w-5 h-5 text-[#E0A8FF]" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
          <span className="text-xs font-black tracking-widest text-[#E0A8FF]">#IAMREMARKABLE</span>
          <span className="text-xs font-bold text-white">Zabeel Ladies Club</span>
        </div>
        <div className="my-auto py-2">
          <span className="text-[9px] uppercase tracking-wider text-purple-300 font-semibold block mb-1">
            UNDER PATRONAGE OF HH SHEIKHA LATIFA BINT HAMDAN
          </span>
          <h4 className="text-lg font-black text-white">Manufacture of All Visual &amp; Printed Materials</h4>
          <p className="text-xs text-purple-200/70 mt-1">
            Agendas, VIP certificates, invitation packages, and keynote stage graphics
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-purple-500/20 text-[10px] text-slate-400">
          <span>Google x Zabeel Initiative</span>
          <span className="text-[#E0A8FF] font-semibold">EVENT BRANDING</span>
        </div>
      </div>
    ),
  },

  // 10. Zabeel Ladies Club - VIP ID Card & Lanyard
  {
    id: 'zabeel-lanyard',
    client: 'Zabeel Ladies Club',
    clientAr: 'نادي زعبيل للسيدات',
    category: 'VIP Credentials',
    title: 'VIP Organizer Badge & Lanyard',
    titleAr: 'باجات وبطاقات المنظمين VIP',
    tag: 'Physical Collateral',
    bgGradient: 'from-[#27103D] via-[#3B195C] to-[#1D0C2E]',
    borderColor: 'border-purple-400/40',
    accentColor: 'text-purple-300',
    icon: <Award className="w-5 h-5 text-purple-300" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-purple-400/20 pb-2">
          <span className="text-[10px] font-mono text-purple-300 uppercase">ACCESS CONTROL</span>
          <span className="text-xs font-bold text-white">Organizer Pass</span>
        </div>
        <div className="my-auto py-2 flex items-center justify-between">
          <div>
            <h4 className="text-2xl font-black text-white tracking-widest uppercase">ORGANIZER</h4>
            <p className="text-xs text-purple-200/80 mt-1 font-mono">Moumena Bahaa · Creative Lead</p>
            <span className="text-[10px] text-slate-400 mt-1 block">Full lanyard print production &amp; badge holders</span>
          </div>
          <div className="w-14 h-18 rounded-lg bg-purple-500/20 border-2 border-purple-400 flex flex-col items-center justify-center p-1 text-center shrink-0">
            <span className="text-[7px] text-purple-200 font-bold">VIP PASS</span>
            <div className="w-6 h-6 rounded-full bg-purple-400/30 my-1 flex items-center justify-center text-[10px]">★</div>
            <span className="text-[6px] text-slate-300">#REMARKABLE</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-purple-400/20 text-[10px] text-slate-400">
          <span>Custom Lanyard &amp; Holographic ID</span>
          <span className="text-purple-300 font-semibold">1,000+ BADGES</span>
        </div>
      </div>
    ),
  },

  // 11. Zabeel Ladies Club - Media Popup Wall
  {
    id: 'zabeel-popup-wall',
    client: 'Zabeel Ladies Club',
    clientAr: 'نادي زعبيل للسيدات',
    category: 'Spatial Branding',
    title: 'Media Popup Wall & Sponsor Reel',
    titleAr: 'جدار التصوير الإعلامي ورعاة الفعالية',
    tag: 'Sponsor Showcase',
    bgGradient: 'from-[#190C28] via-[#2A1442] to-[#12081D]',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-300',
    icon: <Building className="w-5 h-5 text-purple-300" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-2">
          <span className="text-[10px] font-mono text-purple-300 uppercase">MEDIA STAGE BACKDROP</span>
          <span className="text-xs font-bold text-white">Google · ATASAY · DHAMANI</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-lg font-black text-white">Media Popup Stage Backwall</h4>
          <div className="grid grid-cols-4 gap-2 mt-2 text-center text-xs font-bold text-slate-200">
            <div className="p-1.5 rounded bg-white/5 border border-white/10">Google</div>
            <div className="p-1.5 rounded bg-white/5 border border-white/10">ATASAY</div>
            <div className="p-1.5 rounded bg-white/5 border border-white/10">DHAMANI</div>
            <div className="p-1.5 rounded bg-white/5 border border-white/10">BenQ</div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-purple-500/20 text-[10px] text-slate-400">
          <span>Photo Backdrop Architecture</span>
          <span className="text-purple-300 font-semibold">OFFICIAL STAGE</span>
        </div>
      </div>
    ),
  },

  // 12. Zabeel Ladies Club - Inspirational Columns
  {
    id: 'zabeel-columns',
    client: 'Zabeel Ladies Club',
    clientAr: 'نادي زعبيل للسيدات',
    category: 'Spatial Graphics',
    title: 'Inspirational Word Totems',
    titleAr: 'أعمدة الكلمات الملهمة - طموحة وقائدة',
    tag: 'Interior Visuals',
    bgGradient: 'from-[#2C1045] via-[#3F1763] to-[#1F0B31]',
    borderColor: 'border-purple-400/30',
    accentColor: 'text-purple-300',
    icon: <Sparkles className="w-5 h-5 text-purple-300" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-purple-400/20 pb-2">
          <span className="text-[10px] font-mono text-purple-300 uppercase">VENUE TOTEMS</span>
          <span className="text-xs font-bold text-white">جدران الكلمات الملهمة</span>
        </div>
        <div className="my-auto py-2 flex items-center justify-around text-center">
          <div className="p-2.5 rounded-xl bg-black/40 border border-purple-400/20 min-w-[100px]">
            <span className="text-base font-black text-white block">طموحة</span>
            <span className="text-[9px] text-purple-300 font-mono">Ambitious</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-purple-400/20 min-w-[100px]">
            <span className="text-base font-black text-white block">قائدة</span>
            <span className="text-[9px] text-purple-300 font-mono">Leader</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/40 border border-purple-400/20 min-w-[100px]">
            <span className="text-base font-black text-white block">مبدعة</span>
            <span className="text-[9px] text-purple-300 font-mono">Innovator</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-purple-400/20 text-[10px] text-slate-400">
          <span>Three-Sided Pillars</span>
          <span className="text-purple-300 font-semibold">VENUE ACTIVATION</span>
        </div>
      </div>
    ),
  },

  // 13. Islamic Conference of Health Ministers
  {
    id: 'islamic-conference',
    client: 'Islamic Conference of Health Ministers',
    clientAr: 'المؤتمر الإسلامي لوزراء الصحة',
    category: 'International Summit',
    title: '7th Session Ministerial Summit',
    titleAr: 'الدورة السابعة للمؤتمر الإسلامي لوزراء الصحة',
    tag: '7th Session',
    bgGradient: 'from-[#171A12] via-[#2A311F] to-[#10130C]',
    borderColor: 'border-lime-500/30',
    accentColor: 'text-lime-400',
    icon: <Globe className="w-5 h-5 text-lime-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-lime-500/20 pb-2">
          <span className="text-[10px] font-mono text-lime-300 uppercase">INTERNATIONAL SUMMIT</span>
          <span className="text-xs font-bold text-white">وزراء الصحة</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-lg font-black text-white">الدورة السابعة للمؤتمر الإسلامي لوزراء الصحة</h4>
          <p className="text-xs text-lime-100/70 mt-1 leading-relaxed">
            التغطية الإعلامية الشاملة وتصاميم الهوية الرقمية لجلسات المؤتمر والكلمة الافتتاحية
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-lime-500/20 text-[10px] text-slate-400">
          <span>Ministerial Delegations</span>
          <span className="text-lime-300 font-semibold">57 MEMBER STATES</span>
        </div>
      </div>
    ),
  },

  // 14. Islamic Conference - Minister Keynote
  {
    id: 'minister-keynote',
    client: 'Islamic Conference',
    clientAr: 'المؤتمر الإسلامي لوزراء الصحة',
    category: 'Keynote Coverage',
    title: 'Ministerial Address & Preparation',
    titleAr: 'انطلاق الاجتماع التحضيري وكلمة معالي الوزير',
    tag: 'Media Coverage',
    bgGradient: 'from-[#181C1B] via-[#23312E] to-[#101413]',
    borderColor: 'border-teal-500/30',
    accentColor: 'text-teal-400',
    icon: <Building className="w-5 h-5 text-teal-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-teal-500/20 pb-2">
          <span className="text-[10px] font-mono text-teal-300 uppercase">OFFICIAL ADDRESS</span>
          <span className="text-xs font-bold text-white">معالي عبدالرحمن العويس</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-base font-bold text-white">كلمة معالي عبدالرحمن بن محمد العويس</h4>
          <span className="text-xs text-teal-300 font-semibold block mt-0.5">وزير الصحة ووقاية المجتمع</span>
          <p className="text-xs text-slate-300 mt-1.5">
            تصميم قوالب البث الرقمي والمنشورات الإخبارية اللحظية على منصات التواصل
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-teal-500/20 text-[10px] text-slate-400">
          <span>Social Media Live Design</span>
          <span className="text-teal-300 font-semibold">KEYNOTE STREAM</span>
        </div>
      </div>
    ),
  },

  // 15. Dubai Police - Certificate
  {
    id: 'dubai-police-cert',
    client: 'Dubai Police General HQ',
    clientAr: 'القيادة العامة لشرطة دبي',
    category: 'Government Honor',
    title: 'Dubai Police Certificate of Appreciation',
    titleAr: 'شهادة تقدير القيادة العامة لشرطة دبي',
    tag: 'HQ Recognition',
    bgGradient: 'from-[#0C1C13] via-[#142C1E] to-[#08120C]',
    borderColor: 'border-emerald-500/40',
    accentColor: 'text-emerald-400',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
          <span className="text-[10px] font-mono text-emerald-300 uppercase">GOVERNMENT OF DUBAI</span>
          <span className="text-xs font-bold text-white">شرطة دبي</span>
        </div>
        <div className="my-auto py-2">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 text-[10px] uppercase font-bold tracking-wider mb-2">
            APPRECIATION AWARD
          </div>
          <h4 className="text-xl font-black text-white">شهادة تقدير شرطة دبي</h4>
          <p className="text-xs text-emerald-100/70 mt-1 line-clamp-2">
            استحقتها مؤمنة بهاء عمر لإنجاز مشروع شرطة دبي للمتعاونين والمتدربين - بتوقيع العميد د. صالح مراد
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-emerald-500/20 text-[10px] text-slate-400">
          <span>Human Resources General Dept</span>
          <span className="text-emerald-300 font-semibold">OFFICIAL ACCREDITATION</span>
        </div>
      </div>
    ),
  },

  // 16. Dubai Police - Motion Graphic Presentation
  {
    id: 'dubai-police-motion',
    client: 'Dubai Police',
    clientAr: 'شرطة دبي',
    category: 'Motion Graphic & Infographic',
    title: 'Interactive Police Presentation System',
    titleAr: 'العرض التفاعلي والإنفوجرافيك الذكي لشرطة دبي',
    tag: 'Smart Presentation',
    bgGradient: 'from-[#0A1612] via-[#10241D] to-[#07100D]',
    borderColor: 'border-emerald-400/30',
    accentColor: 'text-emerald-400',
    icon: <Laptop className="w-5 h-5 text-emerald-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-emerald-400/20 pb-2">
          <span className="text-[10px] font-mono text-emerald-300 uppercase">DUBAI POLICE SMART SYSTEM</span>
          <span className="text-xs font-bold text-white">إنفوجرافيك تفاعلي</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-lg font-black text-white">Motion Graphic &amp; Infographic Presentation</h4>
          <p className="text-xs text-emerald-100/70 mt-1.5 leading-relaxed">
            أنظمة الرسوم المتحركة وعرض البيانات الإحصائية للقيادة العامة عبر شاشات تفاعلية
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-emerald-400/20 text-[10px] text-slate-400">
          <span>Executive Leadership Visuals</span>
          <span className="text-emerald-300 font-mono">100% DIGITAL</span>
        </div>
      </div>
    ),
  },

  // 17. Dubai Public Prosecution - Marhous Initiative
  {
    id: 'prosecution-marhous',
    client: 'Dubai Public Prosecution',
    clientAr: 'النيابة العامة بدبي',
    category: 'Government Initiative',
    title: 'Marhous Smart Service Initiative',
    titleAr: 'مبادرة مرخوص - نيابة الجنسية والإقامة',
    tag: 'Digital Bail',
    bgGradient: 'from-[#0D1C24] via-[#152E3B] to-[#09151C]',
    borderColor: 'border-teal-500/40',
    accentColor: 'text-teal-400',
    icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-teal-500/20 pb-2">
          <span className="text-[10px] font-mono text-teal-300 uppercase">DUBAI PROSECUTION</span>
          <span className="text-xs font-bold text-white">مبادرة مرخوص</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-xl font-black text-white">مبادرة مرخوص · Smart Digital Bail</h4>
          <p className="text-xs text-teal-100/70 mt-1.5 leading-relaxed">
            تطوير الهوية البصرية وفيديو الموشن جرافيك لمبادرة الكفالة الذكية وتسهيل إجراءات المتعاملين
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-teal-500/20 text-[10px] text-slate-400">
          <span>Residency &amp; Citizenship Prosecution</span>
          <span className="text-teal-300 font-semibold">INNOVATION</span>
        </div>
      </div>
    ),
  },

  // 18. Dubai Public Prosecution - Customer Journey
  {
    id: 'prosecution-journey',
    client: 'Dubai Public Prosecution',
    clientAr: 'النيابة العامة بدبي',
    category: 'Service Blueprint',
    title: 'Smart Customer Journey Infographic',
    titleAr: 'إنفوجرافيك رحلة المتعامل المتكاملة',
    tag: '3-Step Flow',
    bgGradient: 'from-[#121A28] via-[#1C283C] to-[#0D131E]',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-blue-400',
    icon: <Laptop className="w-5 h-5 text-blue-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-blue-500/20 pb-2">
          <span className="text-[10px] font-mono text-blue-300 uppercase">CUSTOMER EXPERIENCE FLOW</span>
          <span className="text-xs font-bold text-white">رحلة المتعامل</span>
        </div>
        <div className="my-auto py-2 flex items-center justify-between gap-2 text-center">
          <div className="p-2 rounded-xl bg-black/40 border border-blue-500/20 flex-1">
            <span className="text-[9px] text-blue-400 font-mono block">01</span>
            <span className="text-[10px] font-bold text-white">ما قبل التعامل</span>
          </div>
          <div className="p-2 rounded-xl bg-black/40 border border-blue-500/20 flex-1">
            <span className="text-[9px] text-blue-400 font-mono block">02</span>
            <span className="text-[10px] font-bold text-white">خلال التعامل</span>
          </div>
          <div className="p-2 rounded-xl bg-black/40 border border-blue-500/20 flex-1">
            <span className="text-[9px] text-blue-400 font-mono block">03</span>
            <span className="text-[10px] font-bold text-white">عند الانتهاء</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-blue-500/20 text-[10px] text-slate-400">
          <span>User Experience Infographics</span>
          <span className="text-blue-300 font-semibold">ZERO FRICTION</span>
        </div>
      </div>
    ),
  },

  // 19. Ajman Municipality - E-Services Portal
  {
    id: 'ajman-e-services',
    client: 'Ajman Municipality & Planning Dept',
    clientAr: 'دائرة البلدية والتخطيط بعجمان',
    category: 'Motion Graphic Video',
    title: 'Smart E-Services Portal Motion Video',
    titleAr: 'فيديو بوابة الخدمات الإلكترونية الذكية',
    tag: 'E-Services Portal',
    bgGradient: 'from-[#191C12] via-[#2A301E] to-[#12140D]',
    borderColor: 'border-yellow-500/30',
    accentColor: 'text-yellow-400',
    icon: <Video className="w-5 h-5 text-yellow-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-yellow-500/20 pb-2">
          <span className="text-[10px] font-mono text-yellow-300 uppercase">AJMAN MUNICIPALITY</span>
          <span className="text-xs font-bold text-white">الخدمات الإلكترونية</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-lg font-black text-white">Welcome to E-Services Portal</h4>
          <p className="text-xs text-yellow-100/70 mt-1.5 leading-relaxed">
            فيديو موشن جرافيك ترويجي وتوجيهي للتحول الرقمي لخدمات تصاريح البناء والبيئة
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-yellow-500/20 text-[10px] text-slate-400">
          <span>Motion Graphic &amp; 2D Animation</span>
          <span className="text-yellow-300 font-semibold">SMART GOV</span>
        </div>
      </div>
    ),
  },

  // 20. Ajman Municipality - Coding through AjmanX
  {
    id: 'ajman-coding',
    client: 'Ajman Municipality & AjmanX',
    clientAr: 'بلدية عجمان ومبادرة AjmanX',
    category: 'Digital Initiative',
    title: '1 Million Arab Coders Initiative',
    titleAr: 'مبادرة مليون مبرمج عربي عبر AjmanX',
    tag: 'AjmanX Coding',
    bgGradient: 'from-[#221015] via-[#351822] to-[#170A0F]',
    borderColor: 'border-rose-500/30',
    accentColor: 'text-rose-400',
    icon: <Laptop className="w-5 h-5 text-rose-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
          <span className="text-[10px] font-mono text-rose-300 uppercase">1 MILLION ARAB CODERS</span>
          <span className="text-xs font-bold text-white">AjmanX Initiative</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-base font-bold text-white">
            The 1st Gov to encourage employees to Code
          </h4>
          <p className="text-xs text-rose-200/70 mt-1.5 leading-relaxed">
            إنتاج فيديو موشن تشجيعي لموظفي حكومة عجمان للتسجيل بمبادرة مليون مبرمج عربي
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-rose-500/20 text-[10px] text-slate-400">
          <span>Digital Empowerment Video</span>
          <span className="text-rose-300 font-semibold">AJMANX TECH</span>
        </div>
      </div>
    ),
  },

  // 21. Ajman Municipality - Safety & Fire Protection
  {
    id: 'ajman-safety',
    client: 'Ajman Municipality',
    clientAr: 'بلدية عجمان',
    category: 'Public Safety Video',
    title: 'Fire Hazards & Home Safety Animation',
    titleAr: 'فيديو الوقاية من أخطار الحريق والسلامة المنزلية',
    tag: 'Safety Awareness',
    bgGradient: 'from-[#24130E] via-[#381D14] to-[#160B08]',
    borderColor: 'border-orange-500/30',
    accentColor: 'text-orange-400',
    icon: <Flame className="w-5 h-5 text-orange-400" />,
    content: (
      <div className="flex flex-col justify-between h-full p-6 text-left select-none">
        <div className="flex items-center justify-between border-b border-orange-500/20 pb-2">
          <span className="text-[10px] font-mono text-orange-300 uppercase">PUBLIC SAFETY VIDEO</span>
          <span className="text-xs font-bold text-white">آثار الحريق</span>
        </div>
        <div className="my-auto py-2">
          <h4 className="text-lg font-black text-white">إرشادات السلامة والوقاية من الحرائق</h4>
          <p className="text-xs text-orange-100/70 mt-1.5 leading-relaxed">
            سلسلة رسوم متحركة توعوية لأفراد المجتمع حول التعامل مع طوارئ الحرائق وإجراءات الإخلاء
          </p>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-orange-500/20 text-[10px] text-slate-400">
          <span>Community Awareness Motion</span>
          <span className="text-orange-300 font-semibold">FIRE SAFETY</span>
        </div>
      </div>
    ),
  },
];
