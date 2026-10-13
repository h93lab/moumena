import React, { useRef, useState } from 'react';
import { Camera, Award, Twitter, ShieldCheck, Heart, Repeat2, Bookmark, CheckCircle2 } from 'lucide-react';

interface VisualSlotProps {
  slotKey: string;
  defaultComponent: React.ReactNode;
  aspectClass?: string;
  className?: string;
  onClick?: () => void;
}

export const EditableVisualSlot: React.FC<VisualSlotProps> = ({
  slotKey,
  defaultComponent,
  className = '',
  onClick,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [customSrc, setCustomSrc] = useState<string | null>(() => {
    return localStorage.getItem(`project_slot_${slotKey}`) || null;
  });

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const res = event.target.result as string;
          setCustomSrc(res);
          localStorage.setItem(`project_slot_${slotKey}`, res);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group w-full h-full overflow-hidden ${className}`}>
      {customSrc ? (
        <img
          src={customSrc}
          loading="lazy"
          decoding="async"
          alt={`Project visual for ${slotKey}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onClick={onClick}
        />
      ) : (
        <div className="w-full h-full cursor-pointer" onClick={onClick}>
          {defaultComponent}
        </div>
      )}

      {/* Floating replace button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          fileInputRef.current?.click();
        }}
        title="Upload your project image"
        aria-label="Upload your project image"
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#D7E2EA] hover:text-white hover:border-[#B600A8] z-20 cursor-pointer shadow-lg"
      >
        <Camera className="w-3.5 h-3.5" />
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />
    </div>
  );
};

/* =========================================================================
   PROJECT 1: MINISTRY OF HEALTH & PREVENTION (MOHAP) - AUTHENTIC VISUALS
   ========================================================================= */

export const MohapCertificateVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#FCFBF7] text-[#1E232A] p-4 sm:p-5 flex flex-col justify-between border-4 border-[#C5A059]/40 rounded-inherit select-none font-sans shadow-inner">
      <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-2">
        <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
          UNITED ARAB EMIRATES<br />MINISTRY OF HEALTH & PREVENTION
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] bg-[#C5A059]/10">
          <Award className="w-4 h-4" />
        </div>
        <div className="text-[10px] text-right font-bold text-slate-700">
          الإمارات العربية المتحدة<br />وزارة الصحة ووقاية المجتمع
        </div>
      </div>

      <div className="text-center my-auto py-2">
        <h4 className="text-base sm:text-lg font-black text-[#A07828] font-serif tracking-wide">
          شهادة شكر وتقدير
        </h4>
        <p className="text-[10px] sm:text-[11px] text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed">
          تتقدم إدارة الاتصال الحكومي بجزيل الشكر والتقدير إلى
        </p>
        <p className="text-sm sm:text-base font-extrabold text-[#111] mt-0.5">
          الأخت / مؤمنة محمد
        </p>
        <p className="text-[9px] sm:text-[10px] text-slate-500 mt-1 leading-snug">
          على المهنية العالية والسرعة في إنجاز المهام الموكلة إليها خلال فترة جائحة &quot;كوفيد-19&quot;
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#C5A059]/30 text-[9px] text-slate-500">
        <div>
          <span className="font-semibold text-slate-700">وداد بوحميد</span>
          <br />مدير إدارة الاتصال الحكومي
        </div>
        <div className="text-right font-mono text-[8px] text-slate-400">
          MOHAP · OFFICIAL RECOGNITION
        </div>
      </div>
    </div>
  );
};

export const MohapSocialPostsVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0F141C] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-cyan-400">
          COVID-19 Social Campaign Suites
        </span>
        <span className="text-[9px] text-slate-400">Instagram / Twitter</span>
      </div>

      <div className="grid grid-cols-4 gap-2 my-auto">
        {/* Post 1: Distance */}
        <div className="bg-[#1A222E] rounded-xl p-2 border border-cyan-500/20 flex flex-col items-center justify-center text-center aspect-[4/5]">
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs mb-1 font-bold">
            ↔
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold text-cyan-200 uppercase leading-tight">
            Keep Safe Distance
          </span>
          <span className="text-[7px] text-slate-400 mt-0.5">اترك مسافة آمنة</span>
        </div>

        {/* Post 2: Masks */}
        <div className="bg-[#1A222E] rounded-xl p-2 border border-blue-500/20 flex flex-col items-center justify-center text-center aspect-[4/5]">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs mb-1 font-bold">
            😷
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold text-blue-200 uppercase leading-tight">
            Mask Guidelines
          </span>
          <span className="text-[7px] text-slate-400 mt-0.5">أنواع الكمامات</span>
        </div>

        {/* Post 3: Workplace */}
        <div className="bg-[#1A222E] rounded-xl p-2 border border-emerald-500/20 flex flex-col items-center justify-center text-center aspect-[4/5]">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs mb-1 font-bold">
            🏢
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold text-emerald-200 uppercase leading-tight">
            Workplace Care
          </span>
          <span className="text-[7px] text-slate-400 mt-0.5">الوقاية في العمل</span>
        </div>

        {/* Post 4: Medical Staff */}
        <div className="bg-[#1A222E] rounded-xl p-2 border border-amber-500/20 flex flex-col items-center justify-center text-center aspect-[4/5]">
          <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs mb-1 font-bold">
            🩺
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold text-amber-200 uppercase leading-tight">
            Health Heroes
          </span>
          <span className="text-[7px] text-slate-400 mt-0.5">خط دفاعنا الأول</span>
        </div>
      </div>

      <div className="text-[8px] text-slate-500 flex justify-between items-center pt-1 border-t border-white/5">
        <span>MOHAP Awareness Suite · 12+ Multilingual Assets</span>
        <span className="text-cyan-400 font-mono">1M+ REACH</span>
      </div>
    </div>
  );
};

export const MohapSheikhTweetVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#151C26] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#243042] rounded-inherit select-none font-sans relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 blur-3xl pointer-events-none rounded-full" />

      {/* Tweet Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-600/30 border border-amber-400/50 flex items-center justify-center font-bold text-amber-300 text-sm">
              محمد
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-base text-white">HH Sheikh Mohammed</span>
                <CheckCircle2 className="w-4 h-4 text-sky-400 fill-sky-400/20" />
              </div>
              <span className="text-xs text-slate-400">@HHShkMohd · World Health Day</span>
            </div>
          </div>
          <Twitter className="w-5 h-5 text-sky-400" />
        </div>

        {/* Tweet Arabic Text */}
        <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-200 text-right font-medium">
          يمر يوم الصحة العالمي اليوم بشكل استثنائي على العالم.. شكر مقدمي الرعاية الصحية لا يكفيه يوم ولا شهر ولا عام.. يخاطرون بحياتهم من أجل حياة الناس.. حفظكم الله ووفقكم لحفظ عباده وخلقه.
        </p>
      </div>

      {/* Video Preview Card Produced by Moumena */}
      <div className="my-4 rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#0B1522] via-[#091C30] to-[#0D243F] p-4 sm:p-5 relative shadow-2xl flex flex-col justify-between min-h-[170px] sm:min-h-[210px]">
        <div className="flex items-center justify-between text-[10px] text-sky-300 font-semibold tracking-wider">
          <span className="px-2 py-0.5 rounded bg-sky-500/20 border border-sky-500/30">
            OFFICIAL CAMPAIGN VIDEO
          </span>
          <span className="font-mono text-slate-400">01:45 MIN</span>
        </div>

        <div className="text-center my-3">
          <h5 className="text-base sm:text-xl font-black text-white tracking-wide">
            يمر يوم الصحة العالمي بشكل استثنائي هذا العام
          </h5>
          <p className="text-xs text-sky-200/80 mt-1">
            Produced for UAE Ministry of Health &amp; Prevention
          </p>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2">
          <span>وزارة الصحة ووقاية المجتمع UAE MOHAP</span>
          <span className="text-sky-300 font-bold">MOTION VIDEO DIRECTION</span>
        </div>
      </div>

      {/* Tweet Engagement Metrics */}
      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span className="flex items-center gap-1.5"><Repeat2 className="w-4 h-4 text-emerald-400" /> 1,727 Retweets</span>
        <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose-500" /> 4,987 Likes</span>
        <span className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold">ROYAL TWEET FEATURE</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 2: DUBAI POLICE & PUBLIC PROSECUTION - AUTHENTIC VISUALS
   ========================================================================= */

export const DubaiPoliceCertificateVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#FBFDFB] text-[#132A1C] p-4 sm:p-5 flex flex-col justify-between border-4 border-[#1E5D38]/40 rounded-inherit select-none font-sans shadow-inner">
      <div className="flex items-center justify-between border-b border-[#1E5D38]/30 pb-2">
        <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
          GOVERNMENT OF DUBAI<br />DUBAI POLICE GENERAL HQ
        </div>
        <div className="w-8 h-8 rounded-full border-2 border-[#1E5D38] flex items-center justify-center text-[#1E5D38] bg-[#1E5D38]/10">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-[10px] text-right font-bold text-[#1E5D38]">
          حكومة دبي<br />القيادة العامة لشرطة دبي
        </div>
      </div>

      <div className="text-center my-auto py-2">
        <h4 className="text-base sm:text-lg font-black text-[#1E5D38] font-serif tracking-wide">
          شهادة تقدير
        </h4>
        <p className="text-[10px] text-slate-600 mt-0.5">استحقت الطالبة /</p>
        <p className="text-sm sm:text-base font-extrabold text-[#111] mt-0.5">
          مؤمنة بهاء عمر
        </p>
        <p className="text-[9px] sm:text-[10px] text-slate-600 mt-1 leading-snug">
          لمشاركتها وإنجاز عدد الساعات المطلوبة في مشروع شرطة دبي للطلبة المتعاونين والمتدربين
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-[#1E5D38]/30 text-[9px] text-slate-500">
        <div>
          <span className="font-semibold text-slate-700">العميد د. صالح عبدالله مراد</span>
          <br />الإدارة العامة للموارد البشرية
        </div>
        <div className="text-right font-mono text-[8px] text-[#1E5D38] font-bold">
          CERTIFICATE OF APPRECIATION
        </div>
      </div>
    </div>
  );
};

export const DubaiProsecutionJourneyVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#121924] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-teal-400">
          Dubai Public Prosecution · رحلة المتعامل
        </span>
        <span className="text-[9px] text-slate-400">Interactive Flowchart</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto">
        <div className="bg-[#1A2536] rounded-xl p-2.5 border border-teal-500/20 text-center">
          <span className="text-[8px] text-teal-400 block font-mono">STEP 01</span>
          <span className="text-[10px] font-bold text-white block mt-0.5">ما قبل التعامل</span>
          <span className="text-[7px] text-slate-400 mt-1 block">مرحلة البحث عن تفاصيل الخدمة</span>
        </div>

        <div className="bg-[#1A2536] rounded-xl p-2.5 border border-blue-500/20 text-center">
          <span className="text-[8px] text-blue-400 block font-mono">STEP 02</span>
          <span className="text-[10px] font-bold text-white block mt-0.5">خلال التعامل</span>
          <span className="text-[7px] text-slate-400 mt-1 block">تقديم الطلب والكفالة الذكية</span>
        </div>

        <div className="bg-[#1A2536] rounded-xl p-2.5 border border-purple-500/20 text-center">
          <span className="text-[8px] text-purple-400 block font-mono">STEP 03</span>
          <span className="text-[10px] font-bold text-white block mt-0.5">عند انتهاء التعامل</span>
          <span className="text-[7px] text-slate-400 mt-1 block">إنجاز الخدمة والتقييم الفوري</span>
        </div>
      </div>

      <div className="text-[8px] text-slate-500 flex justify-between items-center pt-1 border-t border-white/5">
        <span>Infographic Systems &amp; Motion Visuals</span>
        <span className="text-teal-400 font-mono">SMART BAIL INITIATIVE</span>
      </div>
    </div>
  );
};

export const DubaiMarhousMockupVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0E1624] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#1E2E44] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-teal-400 font-semibold block">
            GOVERNMENT DIGITAL TRANSFORMATION
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            مبادرة مرخوص · Smart Digital Bail
          </h4>
        </div>
        <div className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-mono">
          MOTION GRAPHIC
        </div>
      </div>

      {/* Screen Presentation Graphic */}
      <div className="my-4 bg-gradient-to-br from-[#162335] to-[#1B2F48] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="font-semibold text-white">النيابة العامة - نيابة الجنسية والإقامة</span>
          <span className="text-teal-300 font-mono text-[10px]">SCAN TO VIEW QR</span>
        </div>

        <div className="my-auto text-center py-2">
          <div className="inline-block px-4 py-1.5 rounded-xl bg-teal-500/20 border border-teal-400/30 text-teal-200 text-sm sm:text-base font-extrabold mb-2">
            مبادرة الكفالة الذكية - عدم مغادرة الدولة
          </div>
          <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
            تطوير الموقع الإلكتروني للنيابة العامة بما يتناسب مع الخدمات المقدمة للمتعاملين بلغات متعددة
          </p>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2">
          <span>Infographic &amp; Motion Graphic Direction</span>
          <span className="text-teal-300 font-mono">DUBAI PUBLIC PROSECUTION</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Strategic presentation for senior leadership</span>
        <span className="text-teal-400 font-semibold">100% PAPERLESS ACCREDITED</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 3: ZABEEL LADIES CLUB - #IAMREMARKABLE - AUTHENTIC VISUALS
   ========================================================================= */

export const ZabeelAgendaVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#181024] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-purple-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-xs font-black tracking-widest text-[#E0A8FF] font-serif">
          #IAMREMARKABLE
        </span>
        <span className="text-[10px] text-purple-300">Zabeel Ladies Club</span>
      </div>

      <div className="my-auto py-2 space-y-1.5">
        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
          Agenda &amp; Certificate of Appreciation
        </div>
        <p className="text-xs font-bold text-white">
          Under the patronage of HH Sheikha Latifa bint Hamdan Al Maktoum
        </p>
        <p className="text-[9px] text-slate-300 leading-relaxed">
          Full branding system for panels, workshops, recognition ceremony, and Google partnership.
        </p>
      </div>

      <div className="flex items-center justify-between text-[9px] text-purple-300 border-t border-white/10 pt-2">
        <span>Printed Collateral &amp; VIP Badges</span>
        <span className="font-mono text-white">GOOGLE PARTNER</span>
      </div>
    </div>
  );
};

export const ZabeelIdCardVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1F1430] p-3 sm:p-4 flex flex-col justify-between text-white select-none relative overflow-hidden">
      {/* Purple lanyard visual strap */}
      <div className="absolute -top-4 left-6 w-8 h-12 bg-purple-600 rounded-b-lg shadow-md border-b-2 border-white/30" />

      <div className="flex justify-end mb-1">
        <span className="text-[8px] uppercase tracking-widest text-purple-300 font-mono">
          VIP BADGE SYSTEM
        </span>
      </div>

      <div className="my-auto bg-[#291B40] rounded-xl p-3 border border-purple-400/30 text-center">
        <span className="text-[9px] uppercase tracking-wider text-purple-300 block font-semibold">
          #IAMREMARKABLE
        </span>
        <h5 className="text-base font-black text-white uppercase tracking-wider mt-0.5">
          ORGANIZER
        </h5>
        <div className="w-8 h-0.5 bg-purple-500 mx-auto my-1.5" />
        <span className="text-[8px] text-slate-300 block font-mono">
          MOUMENA BAHAA · LEAD DESIGNER
        </span>
      </div>

      <div className="text-[8px] text-purple-300/80 flex justify-between items-center pt-1 border-t border-white/5">
        <span>Lanyards &amp; Event Credentials</span>
        <span className="text-white font-mono">DUBAI, UAE</span>
      </div>
    </div>
  );
};

export const ZabeelMediaPopupVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#160D25] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#371D5A] rounded-inherit select-none font-sans relative overflow-hidden">
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold block">
            SPATIAL &amp; EVENT PRODUCTION
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            Media Popup Wall &amp; Motivational Columns
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200 text-xs font-mono">
          ZABEEL CLUB
        </span>
      </div>

      {/* Backdrop Stage Render */}
      <div className="my-4 bg-gradient-to-br from-[#23143B] to-[#2F1750] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-purple-300">
          <span className="font-bold uppercase tracking-wider">OFFICIAL PHOTO BACKDROP</span>
          <span className="text-purple-200 font-mono text-[10px]">SPONSOR REEL</span>
        </div>

        {/* Sponsor Grid matching PDF Page 9 */}
        <div className="my-auto py-2 grid grid-cols-3 sm:grid-cols-4 gap-2 text-center">
          <div className="p-2 rounded bg-white/5 border border-white/10 text-xs font-bold text-white">
            Google
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-xs font-bold text-white">
            ATASAY
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-xs font-bold text-white">
            DHAMANI
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/10 text-xs font-bold text-white">
            BenQ
          </div>
        </div>

        {/* Column words from Page 9 */}
        <div className="flex items-center justify-between text-[10px] text-slate-300 border-t border-white/10 pt-2 font-medium">
          <span>طموحة · Ambitious</span>
          <span>قائدة · Leader</span>
          <span className="text-purple-300">مبدعة · Innovator</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Complete physical &amp; spatial stage branding</span>
        <span className="text-purple-400 font-semibold">1,000+ ATTENDEES</span>
      </div>
    </div>
  );
};
/* =========================================================================
   PROJECT 4: EMIRATES HEALTH SERVICES (EHS) - AUTHENTIC VISUALS
   ========================================================================= */

export const EhsSmartNutritionVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#181124] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-purple-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[10px] uppercase font-mono text-purple-300">Emirates Health Services</span>
        <span className="text-xs font-bold text-white">تغطية الفعاليات</span>
      </div>
      <div className="my-auto py-2">
        <span className="text-[9px] uppercase tracking-wider text-purple-300 font-semibold block mb-1">
          Smart Clinical Care
        </span>
        <h4 className="text-lg font-black text-white">التغذية الذكية.. نقلة نوعية</h4>
        <p className="text-xs text-purple-200/70 mt-1">
          الهوية البصرية والحملة الرقمية لمنظومة التغذية العلاجية الذكية بمستشفيات الدولة
        </p>
      </div>
      <div className="flex items-center justify-between text-[9px] text-purple-300 border-t border-white/10 pt-2">
        <span>Healthcare Brand Campaign</span>
        <span className="font-mono text-white">EHS UAE</span>
      </div>
    </div>
  );
};

export const EhsNursingCadresVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D1C29] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-teal-400">
          كوادر التمريض والقبالة
        </span>
        <span className="text-[9px] text-slate-400">حملة وطنية</span>
      </div>
      <div className="my-auto bg-[#132A3E] rounded-xl p-3 border border-teal-500/20 text-center">
        <h5 className="text-base font-black text-white">هم للحياة أمان</h5>
        <p className="text-xs text-teal-200/80 mt-1">
          تسليط الضوء على الدور المحوري لخط الدفاع الأول في صون صحة المجتمع
        </p>
      </div>
      <div className="text-[8px] text-teal-300 flex justify-between items-center pt-1 border-t border-white/5">
        <span>Creative Storytelling &amp; Photography</span>
        <span className="font-mono text-white">NATIONWIDE</span>
      </div>
    </div>
  );
};

export const EhsHealthcareVisionVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0C1622] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#1A2D42] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-teal-400 font-semibold block">
            STRATEGIC HEALTH SYSTEM
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            فجر جديد لطب الإمارات · Sustainable Healthcare
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-mono">
          EHS HEALTH
        </span>
      </div>

      <div className="my-4 bg-gradient-to-br from-[#122335] to-[#18344E] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-teal-200">
          <span>اليوم العالمي لطبيب الأسرة · اليوم العالمي لمكافحة المخدرات</span>
          <span className="font-mono text-[10px]">MULTI-CAMPAIGN</span>
        </div>
        <div className="my-auto py-2 text-center">
          <h5 className="text-base sm:text-xl font-extrabold text-white">
            منظومة صحية ريادية وكوادر طبية استثنائية
          </h5>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
            كافح الإدمان وكن في أمان · رعاية تكاملية متطورة تضع المريض محوراً لكافة الخدمات
          </p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2">
          <span>Art Direction &amp; Digital Suites</span>
          <span className="text-teal-300 font-mono">FEDERAL STANDARD</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Strategic visual system for hospital networks</span>
        <span className="text-teal-400 font-semibold">50+ HEALTHCARE FACILITIES</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 5: ISLAMIC CONFERENCE OF HEALTH MINISTERS - AUTHENTIC VISUALS
   ========================================================================= */

export const IslamicSummitDelegationsVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#161B14] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-lime-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[10px] font-mono text-lime-300">MINISTERIAL SUMMIT</span>
        <span className="text-xs font-bold text-white">وزراء الصحة</span>
      </div>
      <div className="my-auto py-2">
        <h4 className="text-lg font-black text-white">الدورة السابعة للمؤتمر الإسلامي</h4>
        <p className="text-xs text-lime-100/70 mt-1">
          التغطية الإعلامية والهوية الرقمية لاجتماعات وزراء الصحة والوفود الدبلوماسية
        </p>
      </div>
      <div className="flex items-center justify-between text-[9px] text-lime-300 border-t border-white/10 pt-2">
        <span>7th Session Summit</span>
        <span className="font-mono text-white">57 NATIONS</span>
      </div>
    </div>
  );
};

export const IslamicMinisterAddressVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1A2219] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-semibold text-lime-300">
          الكلمة الافتتاحية
        </span>
        <span className="text-[9px] text-slate-400">بث مباشر</span>
      </div>
      <div className="my-auto bg-[#233121] rounded-xl p-3 border border-lime-500/20 text-center">
        <h5 className="text-sm font-bold text-white">معالي عبدالرحمن بن محمد العويس</h5>
        <p className="text-[11px] text-lime-200 mt-0.5">وزير الصحة ووقاية المجتمع</p>
        <span className="text-[9px] text-slate-400 mt-1 block">انطلاق الاجتماع التحضيري للدورة</span>
      </div>
      <div className="text-[8px] text-lime-300 flex justify-between items-center pt-1 border-t border-white/5">
        <span>Live Social Templates</span>
        <span className="font-mono text-white">KEYNOTE COVERAGE</span>
      </div>
    </div>
  );
};

export const IslamicConferenceVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#121811] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#212E1E] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-lime-400 font-semibold block">
            INTERNATIONAL HEALTH SUMMIT
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            الدورة السابعة للمؤتمر الإسلامي لوزراء الصحة
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-lime-500/20 border border-lime-400/40 text-lime-300 text-xs font-mono">
          OIC SUMMIT
        </span>
      </div>

      <div className="my-4 bg-gradient-to-br from-[#1C2819] to-[#253922] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-lime-200">
          <span>جلسات العمل التحضيرية · التوصيات الختامية</span>
          <span className="font-mono text-[10px]">7th SESSION</span>
        </div>
        <div className="my-auto py-2 text-center">
          <h5 className="text-base sm:text-xl font-extrabold text-white">
            رعاية صحية مستدامة وتضامن إسلامي شامل
          </h5>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
            تصميم قوالب النشر الإخباري اللحظي والبيانات الختامية على وسائل التواصل الاجتماعي
          </p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2">
          <span>Diplomatic Media Architecture</span>
          <span className="text-lime-300 font-mono">MINISTERIAL</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Design &amp; Social Media Coverage</span>
        <span className="text-lime-400 font-semibold">INTERNATIONAL DIPLOMACY</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 6: AJMAN MUNICIPALITY - AUTHENTIC VISUALS
   ========================================================================= */

export const AjmanPortalVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1A1A12] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-yellow-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[10px] font-mono text-yellow-300">AJMAN MUNICIPALITY</span>
        <span className="text-xs font-bold text-white">الخدمات الإلكترونية</span>
      </div>
      <div className="my-auto py-2">
        <h4 className="text-lg font-black text-white">Welcome to E-Services Portal</h4>
        <p className="text-xs text-yellow-100/70 mt-1">
          فيديو موشن جرافيك توجيهي لتحفيز استخدام البوابة الإلكترونية الموحدة لخدمات عجمان
        </p>
      </div>
      <div className="flex items-center justify-between text-[9px] text-yellow-300 border-t border-white/10 pt-2">
        <span>Motion Video Direction</span>
        <span className="font-mono text-white">SMART AJMAN</span>
      </div>
    </div>
  );
};

export const AjmanCodingVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1F1215] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-semibold text-rose-300">
          AjmanX · مليون مبرمج عربي
        </span>
        <span className="text-[9px] text-slate-400">فيديو تشجيعي</span>
      </div>
      <div className="my-auto bg-[#2E181D] rounded-xl p-3 border border-rose-500/20 text-center">
        <h5 className="text-sm font-bold text-white">1st Gov to encourage Coding</h5>
        <p className="text-[10px] text-rose-200 mt-1">
          تمكين الكوادر الحكومية من مهارات المستقبل ولغات البرمجة
        </p>
      </div>
      <div className="text-[8px] text-rose-300 flex justify-between items-center pt-1 border-t border-white/5">
        <span>Innovation Animation</span>
        <span className="font-mono text-white">AJMANX TECH</span>
      </div>
    </div>
  );
};

export const AjmanFireSafetyVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1A120F] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#301C16] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-orange-400 font-semibold block">
            PUBLIC SAFETY ANIMATION
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            آثار الحريق · السلامة المنزلية والتوعية المجتمعية
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-mono">
          MOTION VIDEO
        </span>
      </div>

      <div className="my-4 bg-gradient-to-br from-[#291913] to-[#3B2117] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-orange-200">
          <span>رسوم متحركة 2D · إرشادات السلامة الوقائية</span>
          <span className="font-mono text-[10px]">SCAN TO WATCH</span>
        </div>
        <div className="my-auto py-2 text-center">
          <h5 className="text-base sm:text-xl font-extrabold text-white">
            الوقاية من أخطار الحريق وسرعة الاستجابة
          </h5>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
            حملة توعوية كرتونية موجهة لكافة أفراد الأسرة لرفع الوعي بإجراءات الإخلاء والسلامة
          </p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2">
          <span>Ajman Municipality Safety Series</span>
          <span className="text-orange-300 font-mono">PUBLIC IMPACT</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Community educational motion graphics</span>
        <span className="text-orange-400 font-semibold">100K+ COMMUNITY REACH</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 7: HOUSECALL HEALTHCARE TECH - AUTHENTIC VISUALS
   ========================================================================= */

export const HousecallAppVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0B1519] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-teal-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-teal-500 flex items-center justify-center font-black text-black text-xs">
            H
          </div>
          <span className="text-[10px] font-mono text-teal-300 font-bold">HOUSECALL DUBAI</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-mono">
          APP ON-DEMAND
        </span>
      </div>

      <div className="my-auto py-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-emerald-400 font-semibold">Doctor at your Doorstep · 20 Mins</span>
        </div>
        <h4 className="text-lg font-black text-white">طبيبك في منزلك على مدار الساعة</h4>
        <p className="text-xs text-slate-300 mt-1">
          واجهات وتصاميم الهوية الرقمية لأسرع منصة استدعاء طبيب وفحوصات منزلية في دبي
        </p>
      </div>

      <div className="flex items-center justify-between text-[9px] text-teal-300 border-t border-white/10 pt-2 font-mono">
        <span>iOS &amp; Android App Store Suite</span>
        <span className="text-white">DUBAI HEALTH AUTHORITY COMPLIANT</span>
      </div>
    </div>
  );
};

export const HousecallMarketingVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#121824] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-semibold text-teal-300">
          Patient Acquisition &amp; Social Ads
        </span>
        <span className="text-[9px] text-slate-400">Meta / TikTok / Google</span>
      </div>

      <div className="grid grid-cols-3 gap-2 my-auto">
        <div className="bg-[#182232] rounded-xl p-2 border border-teal-500/20 text-center">
          <div className="text-teal-400 font-bold text-xs">🩺 GP Visit</div>
          <div className="text-[8px] text-slate-300 mt-0.5">زيارة طبيب عام</div>
        </div>
        <div className="bg-[#182232] rounded-xl p-2 border border-purple-500/20 text-center">
          <div className="text-purple-300 font-bold text-xs">💉 IV Drip</div>
          <div className="text-[8px] text-slate-300 mt-0.5">محاليل فيتامينات</div>
        </div>
        <div className="bg-[#182232] rounded-xl p-2 border border-cyan-500/20 text-center">
          <div className="text-cyan-300 font-bold text-xs">🧪 Lab Test</div>
          <div className="text-[8px] text-slate-300 mt-0.5">فحوصات دم منزلية</div>
        </div>
      </div>

      <div className="text-[8px] text-slate-400 flex justify-between items-center pt-1 border-t border-white/5 font-mono">
        <span>Performance Creative Suite</span>
        <span className="text-teal-400">HIGH CONVERSION</span>
      </div>
    </div>
  );
};

export const HousecallHeroVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D181D] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#1A303A] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-teal-400 font-semibold block">
            PREMIER HEALTHCARE TECH PLATFORM
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            Housecall · Healthcare Delivered to Your Home
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-mono">
          RATED 4.9 ★★★★★
        </span>
      </div>

      <div className="my-4 bg-gradient-to-br from-[#10242B] to-[#143540] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-teal-200">
          <span>Licensed Doctors &amp; Nurses</span>
          <span className="font-mono text-[10px]">ALL OVER DUBAI</span>
        </div>

        <div className="my-auto py-2 text-center">
          <h5 className="text-base sm:text-2xl font-black text-white">
            رعاية طبية منزلية متكاملة بضغطة زر
          </h5>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
            تصميم الهوية البصرية للحملات الرقمية، المواد الترويجية، ومحتوى التواصل لتعزيز ثقة المرضى والمراجعين
          </p>
        </div>

        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2 font-mono">
          <span>Creative Direction · Moumena Bahaa</span>
          <span className="text-teal-300">DUBAI, UAE</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Branding &amp; Digital Campaign Leadership</span>
        <span className="text-teal-400 font-semibold">HEALTHCARE EXCELLENCE</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 8: NFINITY8 - UAE NATIONAL CELEBRATIONS
   ========================================================================= */

export const Nfinity8NationalDayVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1A1215] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-red-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[10px] font-mono text-red-300">UAE NATIONAL OCCASIONS</span>
        <span className="text-xs font-bold text-white">عيد الاتحاد · روح الاتحاد</span>
      </div>
      <div className="my-auto py-2">
        <h4 className="text-lg font-black text-white">UAE Flag Day &amp; National Day</h4>
        <p className="text-xs text-rose-100/70 mt-1">
          تصميم الثيمات الاحتفالية والرموز الوطنية الرسمية للجهات الحكومية والوزارات الاتحادية
        </p>
      </div>
      <div className="flex items-center justify-between text-[9px] text-red-300 border-t border-white/10 pt-2">
        <span>Art Direction &amp; Theme Curation</span>
        <span className="font-mono text-white">NFINITY8 AGENCY</span>
      </div>
    </div>
  );
};

export const Nfinity8EventThemeVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#181822] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-semibold text-purple-300">
          Government Client Visual Themes
        </span>
        <span className="text-[9px] text-slate-400">VIP Campaigns</span>
      </div>
      <div className="my-auto bg-[#252538] rounded-xl p-3 border border-purple-500/20 text-center">
        <h5 className="text-sm font-bold text-white">Bespoke Event Identities</h5>
        <p className="text-[10px] text-purple-200 mt-1">
          هويات بصرية حصرية تدمج التراث الإماراتي مع الفخامة المعاصرة
        </p>
      </div>
      <div className="text-[8px] text-purple-300 flex justify-between items-center pt-1 border-t border-white/5 font-mono">
        <span>Campaign Architecture</span>
        <span className="text-white">FEDERAL REACH</span>
      </div>
    </div>
  );
};

export const Nfinity8TallVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1A1117] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#301A24] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-rose-400 font-semibold block">
            NATIONAL DAY CAMPAIGN LEADERSHIP
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            احتفالات دولة الإمارات الوطنية الكبرى
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-400/40 text-red-300 text-xs font-mono">
          OFFICIAL THEMES
        </span>
      </div>

      <div className="my-4 bg-gradient-to-br from-[#2D1621] to-[#3E1B2B] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-rose-200">
          <span>هوية بصرية معتمدة · مناسبات وطنية</span>
          <span className="font-mono text-[10px]">UAE HERITAGE</span>
        </div>
        <div className="my-auto py-2 text-center">
          <h5 className="text-base sm:text-xl font-extrabold text-white">
            شموخ الاتحاد وعزة الوطن
          </h5>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
            إخراج فني متكامل للملصقات، منصات التواصل، التغطيات الحية، وباقات التهنئة الرسمية
          </p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2 font-mono">
          <span>NFINITY8 Agency Direction</span>
          <span className="text-rose-300">DUBAI, UAE</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Visual themes for top federal institutions</span>
        <span className="text-rose-400 font-semibold">PRESTIGIOUS IDENTITY</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 9: ZOOM STUDIO - COMMERCIAL MOTION & 3D VIDEO
   ========================================================================= */

export const ZoomStudioMotionVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#121622] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-indigo-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[10px] font-mono text-indigo-300">ZOOM STUDIO DUBAI</span>
        <span className="text-xs font-bold text-white">موشن جرافيك ومونتاج</span>
      </div>
      <div className="my-auto py-2">
        <h4 className="text-lg font-black text-white">2D/3D Motion Animation Suite</h4>
        <p className="text-xs text-indigo-100/70 mt-1">
          إنتاج مقاطع الرسوم المتحركة الإعلانية والمؤثرات البصرية للشركات التجارية الكبرى
        </p>
      </div>
      <div className="flex items-center justify-between text-[9px] text-indigo-300 border-t border-white/10 pt-2 font-mono">
        <span>After Effects &amp; Premiere Pro</span>
        <span className="text-white">BROADCAST QUALITY</span>
      </div>
    </div>
  );
};

export const ZoomCommercialVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#161226] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-semibold text-violet-300">
          Commercial Media Coverage
        </span>
        <span className="text-[9px] text-slate-400">TV &amp; Digital</span>
      </div>
      <div className="my-auto bg-[#241B3B] rounded-xl p-3 border border-violet-500/20 text-center">
        <h5 className="text-sm font-bold text-white">High-Impact Brand Promos</h5>
        <p className="text-[10px] text-violet-200 mt-1">
          مزامنة الصوت والصورة وتحريك التيبوغرافي الحركي لرفع التفاعل
        </p>
      </div>
      <div className="text-[8px] text-violet-300 flex justify-between items-center pt-1 border-t border-white/5 font-mono">
        <span>Video Production</span>
        <span className="text-white">GCC CLIENTS</span>
      </div>
    </div>
  );
};

export const ZoomTallVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#131124] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#271E42] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-violet-400 font-semibold block">
            ANIMATION &amp; VIDEO EDITING STUDIO
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            ZOOM Studio · Commercial Motion Showcase
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/40 text-violet-300 text-xs font-mono">
          MOTION LAB
        </span>
      </div>

      <div className="my-4 bg-gradient-to-br from-[#20183B] to-[#2E2055] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-violet-200">
          <span>Kinetic Typography &amp; Sound Design</span>
          <span className="font-mono text-[10px]">60 FPS FLUID</span>
        </div>
        <div className="my-auto py-2 text-center">
          <h5 className="text-base sm:text-xl font-extrabold text-white">
            سرد قصصي مرئي يترك أثراً لا يُنسى
          </h5>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
            تصميم حملات الفيديو الإعلانية متعددة القنوات لتعزيز انتشار العلامات التجارية وتفاعل الجماهير
          </p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2 font-mono">
          <span>Motion Design &amp; Editing</span>
          <span className="text-violet-300">DUBAI, UAE</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Commercial motion graphics &amp; video campaigns</span>
        <span className="text-violet-400 font-semibold">HIGH RETENTION</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 10: EMIRATES VISION MEDIA NETWORK - NEWS & INFOGRAPHICS
   ========================================================================= */

export const EmiratesVisionBreakingNewsVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#181512] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-amber-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[10px] font-mono text-amber-300">EMIRATES VISION NETWORK</span>
        <span className="text-xs font-bold text-white">رؤية الإمارات · عاجل</span>
      </div>
      <div className="my-auto py-2">
        <h4 className="text-lg font-black text-white">Breaking News Animated Cards</h4>
        <p className="text-xs text-amber-100/70 mt-1">
          كروت الأخبار الرقمية وتغطيات الأحداث الوطنية المباشرة عبر تويتر وإنستغرام وتيليغرام
        </p>
      </div>
      <div className="flex items-center justify-between text-[9px] text-amber-300 border-t border-white/10 pt-2 font-mono">
        <span>Lead Graphic Designer</span>
        <span className="text-white">NATIONAL MEDIA</span>
      </div>
    </div>
  );
};

export const EmiratesVisionInfographicVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#161618] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-semibold text-amber-300">
          Animated Infographics Suite
        </span>
        <span className="text-[9px] text-slate-400">Data Visualization</span>
      </div>
      <div className="my-auto bg-[#242429] rounded-xl p-3 border border-amber-500/20 text-center">
        <h5 className="text-sm font-bold text-white">Statistical &amp; Event Graphics</h5>
        <p className="text-[10px] text-amber-200 mt-1">
          تبسيط الأرقام والبيانات الحكومية في قوالب بصرية تفاعلية وسريعة الاستيعاب
        </p>
      </div>
      <div className="text-[8px] text-amber-300 flex justify-between items-center pt-1 border-t border-white/5 font-mono">
        <span>Infographic Leadership</span>
        <span className="text-white">500K+ FOLLOWERS</span>
      </div>
    </div>
  );
};

export const EmiratesVisionTallVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#1A1612] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#33281E] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">
            NATIONWIDE MEDIA NETWORK DIRECTION
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            شبكة رؤية الإمارات الإعلامية
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono">
          MEDIA LEADER
        </span>
      </div>

      <div className="my-4 bg-gradient-to-br from-[#2B2117] to-[#3B2C1E] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-amber-200">
          <span>إدارة قسم التصميم والتواصل مع الوكالات الإخبارية</span>
          <span className="font-mono text-[10px]">24/7 BROADCAST</span>
        </div>
        <div className="my-auto py-2 text-center">
          <h5 className="text-base sm:text-xl font-extrabold text-white">
            حضور إعلامي رقمي رائد في قلب الحدث
          </h5>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
            إنتاج الدعوات الرسمية والإعلانات الحصرية وتغطيات القمم والمناسبات الدبلوماسية
          </p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2 font-mono">
          <span>Emirates Vision Media Network</span>
          <span className="text-amber-300">DUBAI, UAE</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Newsroom art direction &amp; digital publishing</span>
        <span className="text-amber-400 font-semibold">HIGH-SPEED DELIVERY</span>
      </div>
    </div>
  );
};

/* =========================================================================
   PROJECT 11: AJMAN UNIVERSITY - ACADEMIC VISUALS & MASTERCLASSES
   ========================================================================= */

export const AjmanUniversityCommencementVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#121820] text-white p-4 sm:p-5 flex flex-col justify-between border-2 border-blue-500/30 rounded-inherit select-none font-sans">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[10px] font-mono text-blue-300">AJMAN UNIVERSITY</span>
        <span className="text-xs font-bold text-white">حفلات التخرج الرسمية</span>
      </div>
      <div className="my-auto py-2">
        <h4 className="text-lg font-black text-white">Commencement &amp; Graduation Visuals</h4>
        <p className="text-xs text-blue-100/70 mt-1">
          الهوية البصرية لحفلات تخرج أفواج الجامعة، والشهادات والدعوات الفاخرة لكبار الشخصيات
        </p>
      </div>
      <div className="flex items-center justify-between text-[9px] text-blue-300 border-t border-white/10 pt-2 font-mono">
        <span>Higher Education Branding</span>
        <span className="text-white">ALUMNI SUCCESS</span>
      </div>
    </div>
  );
};

export const AjmanUniversityTrainingVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#18141F] p-3 sm:p-4 flex flex-col justify-between text-white select-none">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase font-semibold text-purple-300">
          Media Lab &amp; Mentorship
        </span>
        <span className="text-[9px] text-slate-400">Creative Education</span>
      </div>
      <div className="my-auto bg-[#261E34] rounded-xl p-3 border border-purple-500/20 text-center">
        <h5 className="text-sm font-bold text-white">Adobe Suite Masterclasses</h5>
        <p className="text-[10px] text-purple-200 mt-1">
          تدريب وتأهيل طلبة كلية الإعلام على تقنيات التصوير والمونتاج وتحريك الرسوم
        </p>
      </div>
      <div className="text-[8px] text-purple-300 flex justify-between items-center pt-1 border-t border-white/5 font-mono">
        <span>After Effects &amp; Premiere</span>
        <span className="text-white">TALENT EMPOWERMENT</span>
      </div>
    </div>
  );
};

export const AjmanUniversityTallVisual: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#111924] text-white p-5 sm:p-7 flex flex-col justify-between border border-[#1F2F44] rounded-inherit select-none font-sans relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold block">
            ACADEMIC EXCELLENCE &amp; CAMPUS MEDIA
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white mt-0.5">
            جامعة عجمان · الإنتاج المرئي الأكاديمي
          </h4>
        </div>
        <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-mono">
          ACADEMIC LAB
        </span>
      </div>

      <div className="my-4 bg-gradient-to-br from-[#172639] to-[#213550] rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
        <div className="flex items-center justify-between text-xs text-blue-200">
          <span>إنتاج مقاطع الفيديو الترويجية للكليات والتسجيل</span>
          <span className="font-mono text-[10px]">CAMPUS SPIRIT</span>
        </div>
        <div className="my-auto py-2 text-center">
          <h5 className="text-base sm:text-xl font-extrabold text-white">
            إلهام أجيال المستقبل من المبدعين
          </h5>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
            الجمع بين التميز الأكاديمي وخبرة السوق العملي في التصميم والإخراج الفني
          </p>
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 border-t border-white/10 pt-2 font-mono">
          <span>Ajman University Faculty of Mass Comm</span>
          <span className="text-blue-300">AJMAN, UAE</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
        <span>Higher education media production &amp; mentorship</span>
        <span className="text-blue-400 font-semibold">ACADEMIC HONORS</span>
      </div>
    </div>
  );
};

