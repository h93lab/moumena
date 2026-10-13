import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, GraduationCap, Sparkles, Building, ChevronRight } from 'lucide-react';
import { FadeIn } from '../common/FadeIn';
import { PORTFOLIO_DATA, CareerMilestone } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export const CareerJourneySection: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);
  const detailCardRef = React.useRef<HTMLDivElement>(null);

  const milestones: CareerMilestone[] = PORTFOLIO_DATA.careerJourney;

  const handleSelectMilestone = (idx: number) => {
    setSelectedMilestone(idx);
    if (window.innerWidth < 1024 && detailCardRef.current) {
      detailCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="career"
      className="relative w-full bg-[#0C0C0C] py-24 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 select-none overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B600A8]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs uppercase tracking-widest text-slate-300 mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#B600A8]" />
              <span>
                {lang === 'ar' ? 'المسار المهني والخبرة العملية' : '10+ YEARS PROFESSIONAL TIMELINE'}
              </span>
            </div>

            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {lang === 'ar' ? 'مسيرتي الوظيفية' : 'Career Journey'}
            </h2>

            <p className="text-xs sm:text-base text-slate-400 mt-4 max-w-2xl mx-auto font-light leading-relaxed">
              {lang === 'ar'
                ? 'سجل حافل بالخبرات القيادية موثق بالتاريخ ومكان العمل لأبرز الجهات الحكومية والشركات الكبرى بدولة الإمارات'
                : 'A decade of creative leadership, art direction, and high-impact visual campaigns documented by date and workplace'}
            </p>
          </FadeIn>
        </div>

        {/* Desktop Interactive Layout & Mobile Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Milestones Selector / Stepper (5 Cols) - Selector 2 */}
          <div className="lg:col-span-5 flex flex-col h-full lg:h-[680px]">
            <div className="flex flex-col gap-3 h-full lg:overflow-y-auto lg:pr-2.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#B600A8]/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#B600A8]/70">
              {milestones.map((milestone, idx) => {
                const isSelected = selectedMilestone === idx;
                const isEducation = idx === milestones.length - 1;

                return (
                  <FadeIn key={idx} delay={idx * 0.05} y={15}>
                    <div
                      onClick={() => handleSelectMilestone(idx)}
                      className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border relative ${
                        isSelected
                          ? 'bg-gradient-to-r from-white/[0.08] to-white/[0.03] border-[#B600A8] shadow-[0_4px_25px_rgba(182,0,168,0.2)] ring-1 ring-[#B600A8]/40'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? 'bg-[#B600A8] text-white shadow-lg'
                                : 'bg-white/5 text-slate-400'
                            }`}
                          >
                            {isEducation ? (
                              <GraduationCap className="w-5 h-5" />
                            ) : (
                              <Briefcase className="w-5 h-5" />
                            )}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-sm sm:text-base font-bold text-white">
                                {lang === 'ar' ? milestone.companyAr : milestone.company}
                              </span>
                              <span className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono">
                                <Calendar className="w-3 h-3 text-purple-400" />
                                {lang === 'ar' ? milestone.periodAr : milestone.period}
                              </span>
                            </div>

                            <span className="text-xs sm:text-sm text-slate-300 block font-medium mt-1">
                              {lang === 'ar' ? milestone.roleAr : milestone.role}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] text-slate-400 shrink-0 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
                          <span>{lang === 'ar' ? milestone.locationAr : milestone.location}</span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Milestone Deep Dive Card (7 Cols) */}
          <div ref={detailCardRef} className="lg:col-span-7 flex flex-col h-full lg:h-[680px]">
            <FadeIn delay={0.2} y={20} className="h-full flex flex-col">
              {/* Selector 1: Detail Card Container */}
              <div className="h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#12141A] to-[#181B24] border border-white/15 shadow-2xl relative overflow-hidden">
                {/* Accent glow corner */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#B600A8]/20 blur-3xl pointer-events-none rounded-full" />

                {/* Card Header & Metadata Badges */}
                <div className="pb-5 border-b border-white/10 shrink-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold uppercase tracking-wider">
                      {lang === 'ar'
                        ? milestones[selectedMilestone].typeAr
                        : milestones[selectedMilestone].type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#B600A8]" />
                      <strong className="text-white font-semibold">
                        {lang === 'ar' ? 'التاريخ:' : 'Period:'}
                      </strong>
                      {lang === 'ar'
                        ? milestones[selectedMilestone].periodAr
                        : milestones[selectedMilestone].period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      <strong className="text-white font-semibold">
                        {lang === 'ar' ? 'مكان العمل:' : 'Location:'}
                      </strong>
                      {lang === 'ar'
                        ? `${milestones[selectedMilestone].companyAr} (${milestones[selectedMilestone].locationAr})`
                        : `${milestones[selectedMilestone].company} (${milestones[selectedMilestone].location})`}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {lang === 'ar'
                      ? milestones[selectedMilestone].roleAr
                      : milestones[selectedMilestone].role}
                  </h3>
                  <div className="text-lg font-bold text-purple-300 mt-1">
                    {lang === 'ar'
                      ? milestones[selectedMilestone].companyAr
                      : milestones[selectedMilestone].company}
                  </div>
                </div>

                {/* Role Narrative and Deliverables (Scrollable if content overflows) */}
                <div className="flex-1 overflow-y-auto py-5 space-y-6 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#B600A8]/30 [&::-webkit-scrollbar-thumb]:rounded-full pr-1">
                  {/* Role Narrative */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-2">
                      {lang === 'ar' ? 'نطاق المسؤوليات' : 'Core Mandate & Leadership'}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                      {lang === 'ar'
                        ? milestones[selectedMilestone].descriptionAr
                        : milestones[selectedMilestone].description}
                    </p>
                  </div>

                  {/* Key Deliverables & Achievements */}
                  <div className="pt-2 border-t border-white/10">
                    <h4 className="text-xs uppercase tracking-widest text-[#B600A8] font-mono mb-3">
                      {lang === 'ar' ? 'أبرز الإنجازات والنتائج' : 'Key Milestones & Deliverables'}
                    </h4>

                    <ul className="space-y-2.5">
                      {(lang === 'ar'
                        ? milestones[selectedMilestone].achievementsAr
                        : milestones[selectedMilestone].achievements
                      ).map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Status Badge */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono shrink-0">
                  <span>VERIFIED CAREER RECORD</span>
                  <span className="text-purple-300">DUBAI, UNITED ARAB EMIRATES</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
