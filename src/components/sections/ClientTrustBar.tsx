import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Shield, Award, Building2, Sparkles, Scale, HeartPulse, Landmark, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../common/FadeIn';

export const ClientTrustBar: React.FC = () => {
  const { lang, t } = useLanguage();

  const entities = [
    {
      nameEn: 'Ministry of Health & Prevention',
      nameAr: 'وزارة الصحة ووقاية المجتمع',
      code: 'UAE MOHAP',
      categoryEn: 'Federal Ministry',
      categoryAr: 'وزارة اتحادية',
      icon: <HeartPulse className="w-5 h-5 text-emerald-400" />,
      accentGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      borderHover: 'hover:border-emerald-500/40',
    },
    {
      nameEn: 'Dubai Police General HQ',
      nameAr: 'القيادة العامة لشرطة دبي',
      code: 'DUBAI POLICE',
      categoryEn: 'Government Headquarters',
      categoryAr: 'قيادة أمنية حكومية',
      icon: <Shield className="w-5 h-5 text-teal-400" />,
      accentGlow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]',
      borderHover: 'hover:border-teal-500/40',
    },
    {
      nameEn: 'Dubai Public Prosecution',
      nameAr: 'النيابة العامة بدبي',
      code: 'JUDICIAL GOV',
      categoryEn: 'Judicial Entity',
      categoryAr: 'جهة قضائية حكومية',
      icon: <Scale className="w-5 h-5 text-sky-400" />,
      accentGlow: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]',
      borderHover: 'hover:border-sky-500/40',
    },
    {
      nameEn: 'Emirates Health Services',
      nameAr: 'مؤسسة الإمارات للخدمات الصحية',
      code: 'EHS UAE',
      categoryEn: 'Healthcare Authority',
      categoryAr: 'مؤسسة صحية اتحادية',
      icon: <Building2 className="w-5 h-5 text-purple-400" />,
      accentGlow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      borderHover: 'hover:border-purple-500/40',
    },
    {
      nameEn: 'Ajman Municipality & Planning',
      nameAr: 'دائرة البلدية والتخطيط بعجمان',
      code: 'AJMAN GOV',
      categoryEn: 'Municipal Government',
      categoryAr: 'دائرة حكومية',
      icon: <Landmark className="w-5 h-5 text-amber-400" />,
      accentGlow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]',
      borderHover: 'hover:border-amber-500/40',
    },
    {
      nameEn: 'Zabeel Ladies Club',
      nameAr: 'نادي زعبيل للسيدات',
      code: 'ROYAL PATRONAGE',
      categoryEn: 'VIP Royal Venue',
      categoryAr: 'رعاية ملكية كريمة',
      icon: <Award className="w-5 h-5 text-rose-400" />,
      accentGlow: 'hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]',
      borderHover: 'hover:border-rose-500/40',
    },
    {
      nameEn: 'Google Initiatives & Techmakers',
      nameAr: 'مبادرات Google العالمية',
      code: 'GLOBAL TECH',
      categoryEn: 'International Partner',
      categoryAr: 'شراكة دولية',
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      accentGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
      borderHover: 'hover:border-blue-500/40',
    },
    {
      nameEn: 'Islamic Health Ministers Summit',
      nameAr: 'المؤتمر الإسلامي لوزراء الصحة',
      code: '7TH SESSION',
      categoryEn: 'Ministerial Summit',
      categoryAr: 'قمة وزارية دولية',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      accentGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      borderHover: 'hover:border-emerald-500/40',
    },
  ];

  return (
    <section className="relative w-full bg-[#0C0C0C] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-12 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B600A8]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Editorial Sub-Heading */}
        <FadeIn delay={0} y={20} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs uppercase tracking-widest text-slate-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>
              {lang === 'ar' ? 'اعتماد وشراكات حكومية' : 'OFFICIAL GOVERNMENT ENDORSEMENT'}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white max-w-3xl leading-tight">
            {lang === 'ar'
              ? 'شريك إبداعي موثوق لأبرز الهيئات الحكومية في دولة الإمارات'
              : 'Trusted Creative Director for UAE Government Entities & Leading Institutions'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto font-light">
            {lang === 'ar'
              ? 'تصميم وإخراج الحملات الوطنية الاستراتيجية، الموشن جرافيك، والفعاليات الرسمية الكبرى'
              : 'Crafting national awareness campaigns, motion graphics, and VIP spatial branding with distinction'}
          </p>
        </FadeIn>

        {/* Prestige Entities Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {entities.map((item, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.06}
              y={20}
              className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#111318]/90 border border-white/10 ${item.borderHover} ${item.accentGlow} transition-all duration-300 flex flex-col justify-between group backdrop-blur-md`}
            >
              {/* Top row: Code + Icon */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                  {item.code}
                </span>
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>

              {/* Middle: Names */}
              <div className="py-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B600A8] block mb-1">
                  {lang === 'ar' ? item.categoryAr : item.categoryEn}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                  {lang === 'ar' ? item.nameAr : item.nameEn}
                </h4>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  {lang === 'ar' ? item.nameEn : item.nameAr}
                </p>
              </div>

              {/* Bottom: Verified Accreditation Marker */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span>ACCREDITED</span>
                <span className="text-emerald-400">100% VERIFIED</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
