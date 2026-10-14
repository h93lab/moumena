import React, { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { LiveProjectButton } from '../common/Buttons';
import { ProjectItem } from '../../data/portfolioData';
import { useSiteContent } from '../../context/SiteContentContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  EditableVisualSlot,
  MohapCertificateVisual,
  MohapSocialPostsVisual,
  MohapSheikhTweetVisual,
  DubaiPoliceCertificateVisual,
  DubaiProsecutionJourneyVisual,
  DubaiMarhousMockupVisual,
  ZabeelAgendaVisual,
  ZabeelIdCardVisual,
  ZabeelMediaPopupVisual,
  EhsSmartNutritionVisual,
  EhsNursingCadresVisual,
  EhsHealthcareVisionVisual,
  IslamicSummitDelegationsVisual,
  IslamicMinisterAddressVisual,
  IslamicConferenceVisual,
  AjmanPortalVisual,
  AjmanCodingVisual,
  AjmanFireSafetyVisual,
  HousecallAppVisual,
  HousecallMarketingVisual,
  HousecallHeroVisual,
  Nfinity8NationalDayVisual,
  Nfinity8EventThemeVisual,
  Nfinity8TallVisual,
  ZoomStudioMotionVisual,
  ZoomCommercialVisual,
  ZoomTallVisual,
  EmiratesVisionBreakingNewsVisual,
  EmiratesVisionInfographicVisual,
  EmiratesVisionTallVisual,
  AjmanUniversityCommencementVisual,
  AjmanUniversityTrainingVisual,
  AjmanUniversityTallVisual,
} from '../projects/ProjectVisualCards';

interface StackingCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectItem) => void;
}

const StackingCard: React.FC<StackingCardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const { lang, t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.015;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Determine authentic visual components for all 11 projects
  const renderVisuals = () => {
    switch (project.id) {
      case 'mohap-uae':
        return {
          topVisual: <MohapCertificateVisual />,
          bottomVisual: <MohapSocialPostsVisual />,
          tallVisual: <MohapSheikhTweetVisual />,
        };
      case 'ehs-healthcare':
        return {
          topVisual: <EhsSmartNutritionVisual />,
          bottomVisual: <EhsNursingCadresVisual />,
          tallVisual: <EhsHealthcareVisionVisual />,
        };
      case 'zabeel-remarkable':
        return {
          topVisual: <ZabeelAgendaVisual />,
          bottomVisual: <ZabeelIdCardVisual />,
          tallVisual: <ZabeelMediaPopupVisual />,
        };
      case 'dubai-police-prosecution':
        return {
          topVisual: <DubaiPoliceCertificateVisual />,
          bottomVisual: <DubaiProsecutionJourneyVisual />,
          tallVisual: <DubaiMarhousMockupVisual />,
        };
      case 'islamic-health-conference':
        return {
          topVisual: <IslamicSummitDelegationsVisual />,
          bottomVisual: <IslamicMinisterAddressVisual />,
          tallVisual: <IslamicConferenceVisual />,
        };
      case 'ajman-municipality':
        return {
          topVisual: <AjmanPortalVisual />,
          bottomVisual: <AjmanCodingVisual />,
          tallVisual: <AjmanFireSafetyVisual />,
        };
      case 'housecall-healthtech':
        return {
          topVisual: <HousecallAppVisual />,
          bottomVisual: <HousecallMarketingVisual />,
          tallVisual: <HousecallHeroVisual />,
        };
      case 'nfinity8-campaigns':
        return {
          topVisual: <Nfinity8NationalDayVisual />,
          bottomVisual: <Nfinity8EventThemeVisual />,
          tallVisual: <Nfinity8TallVisual />,
        };
      case 'zoom-motion-media':
        return {
          topVisual: <ZoomStudioMotionVisual />,
          bottomVisual: <ZoomCommercialVisual />,
          tallVisual: <ZoomTallVisual />,
        };
      case 'emirates-vision-network':
        return {
          topVisual: <EmiratesVisionBreakingNewsVisual />,
          bottomVisual: <EmiratesVisionInfographicVisual />,
          tallVisual: <EmiratesVisionTallVisual />,
        };
      case 'ajman-university-media':
        return {
          topVisual: <AjmanUniversityCommencementVisual />,
          bottomVisual: <AjmanUniversityTrainingVisual />,
          tallVisual: <AjmanUniversityTallVisual />,
        };
      default:
        return {
          topVisual: <div className="w-full h-full flex items-center justify-center bg-[#191923] text-slate-400 text-center p-6">{project.title}</div>,
          bottomVisual: <div className="w-full h-full flex items-center justify-center bg-[#191923] text-slate-400 text-center p-6">{project.category}</div>,
          tallVisual: <div className="w-full h-full flex items-center justify-center bg-[#191923] text-slate-400 text-center p-6">{project.title}</div>,
        };
    }
  };

  const visuals = renderVisuals();

  return (
    <div
      ref={cardRef}
      className="sticky w-full mb-12 sm:mb-16 md:mb-20"
      style={{
        top: `calc(5.5rem + ${index * 24}px)`,
      }}
    >
      <motion.div
        style={{ scale: reduceMotion ? 1 : scale }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 shadow-2xl transition-shadow duration-300 hover:border-white"
      >
        {/* Top Row: Number, Category & Name, and Live Project Ghost Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight font-mono"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <div>
              <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-slate-400 block mb-1">
                {lang === 'ar' ? project.categoryAr : project.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                {lang === 'ar' ? project.titleAr : project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveProjectButton
              onClick={() => onOpenProject(project)}
              label={t.projects.liveProject}
            />
          </div>
        </div>

        {/* Bottom Row: Two-column Image Grid matching PDF Portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {/* Left Column (approx 40% width / 5 cols) has 2 stacked images */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Top image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191E] border border-white/10 group shadow-lg"
              style={{ height: 'clamp(150px, 18vw, 240px)' }}
            >
              <EditableVisualSlot
                slotKey={`${project.id}_top`}
                defaultComponent={visuals.topVisual}
                imageUrl={project.customVisuals ? project.col1TopImage : undefined}
                onClick={() => onOpenProject(project)}
              />
            </div>

            {/* Bottom image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191E] border border-white/10 group shadow-lg"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <EditableVisualSlot
                slotKey={`${project.id}_bottom`}
                defaultComponent={visuals.bottomVisual}
                imageUrl={project.customVisuals ? project.col1BottomImage : undefined}
                onClick={() => onOpenProject(project)}
              />
            </div>
          </div>

          {/* Right Column (approx 60% width / 7 cols) has 1 tall image */}
          <div className="lg:col-span-7">
            <div
              className="w-full h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#18191E] border border-white/10 group shadow-lg"
            >
              <EditableVisualSlot
                slotKey={`${project.id}_tall`}
                defaultComponent={visuals.tallVisual}
                imageUrl={project.customVisuals ? project.col2Image : undefined}
                onClick={() => onOpenProject(project)}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  const { t } = useLanguage();
  const { content: PORTFOLIO_DATA } = useSiteContent();
  const [showAll, setShowAll] = useState(false);
  const featuredCount = 4;
  const projects = showAll ? PORTFOLIO_DATA.projects : PORTFOLIO_DATA.projects.slice(0, featuredCount);
  const totalCards = projects.length;

  return (
    <section
      className="relative w-full bg-[#0C0C0C] pt-20 sm:pt-24 md:pt-28 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-8 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading: "Project" */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={30}>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              {t.projects.heading}
            </h2>
          </FadeIn>
        </div>

        {/* Featured projects keep the first visit focused and quick to scroll. */}
        <div className="relative w-full">
          {projects.map((project, index) => (
            <StackingCard
              key={project.id}
              project={project}
              index={index}
              totalCards={totalCards}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
        {PORTFOLIO_DATA.projects.length > featuredCount && (
          <div className="flex justify-center mt-4">
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll((current) => !current)}
              className="px-7 py-3 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] font-semibold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B600A8] transition-colors cursor-pointer"
            >
              {showAll ? t.projects.showLess : `${t.projects.showAll} (${PORTFOLIO_DATA.projects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
