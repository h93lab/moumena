import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { useModalAccessibility } from '../../hooks/useModalAccessibility';
import {
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

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const { lang, t } = useLanguage();
  const dialogRef = useModalAccessibility(isOpen, onClose);
  if (!project) return null;

  const renderVisualArtifacts = () => {
    switch (project.id) {
      case 'mohap-uae':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <MohapSheikhTweetVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <MohapCertificateVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <MohapSocialPostsVisual />
              </div>
            </div>
          </div>
        );
      case 'ehs-healthcare':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <EhsHealthcareVisionVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <EhsSmartNutritionVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <EhsNursingCadresVisual />
              </div>
            </div>
          </div>
        );
      case 'zabeel-remarkable':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <ZabeelMediaPopupVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <ZabeelAgendaVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <ZabeelIdCardVisual />
              </div>
            </div>
          </div>
        );
      case 'dubai-police-prosecution':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <DubaiMarhousMockupVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <DubaiPoliceCertificateVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <DubaiProsecutionJourneyVisual />
              </div>
            </div>
          </div>
        );
      case 'islamic-health-conference':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <IslamicConferenceVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <IslamicSummitDelegationsVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <IslamicMinisterAddressVisual />
              </div>
            </div>
          </div>
        );
      case 'ajman-municipality':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <AjmanFireSafetyVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <AjmanPortalVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <AjmanCodingVisual />
              </div>
            </div>
          </div>
        );
      case 'housecall-healthtech':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <HousecallHeroVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <HousecallAppVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <HousecallMarketingVisual />
              </div>
            </div>
          </div>
        );
      case 'nfinity8-campaigns':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <Nfinity8TallVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <Nfinity8NationalDayVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <Nfinity8EventThemeVisual />
              </div>
            </div>
          </div>
        );
      case 'zoom-motion-media':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <ZoomTallVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <ZoomStudioMotionVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <ZoomCommercialVisual />
              </div>
            </div>
          </div>
        );
      case 'emirates-vision-network':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <EmiratesVisionTallVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <EmiratesVisionBreakingNewsVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <EmiratesVisionInfographicVisual />
              </div>
            </div>
          </div>
        );
      case 'ajman-university-media':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[300px]">
              <AjmanUniversityTallVisual />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <AjmanUniversityCommencementVisual />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[160px]">
                <AjmanUniversityTrainingVisual />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#101114] border border-[#2B303C] rounded-3xl sm:rounded-[36px] text-[#D7E2EA] shadow-2xl z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 shrink-0 bg-[#14151B]">
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-black text-slate-500 font-mono">
                {project.number}
              </span>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#BBCCD7] block">
                  {lang === 'ar' ? project.categoryAr : project.category}
                </span>
                <h3 id="project-dialog-title" className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-white">
                  {lang === 'ar' ? project.titleAr : project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="min-w-0 p-6 sm:p-8 overflow-y-auto overflow-x-hidden space-y-8">
            {/* Meta Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-3 min-w-0">
                <Building className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">{t.projectDetail.client}</div>
                  <div className="text-xs sm:text-sm font-medium text-white">{lang === 'ar' ? project.clientAr : project.client}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <Calendar className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400">{t.projectDetail.timeline}</div>
                  <div className="text-xs sm:text-sm font-medium text-white">{project.year}</div>
                </div>
              </div>

              {project.recognition && (
                <div className="flex items-center gap-3 min-w-0">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-amber-400">{t.projectDetail.recognition}</div>
                    <div className="text-xs sm:text-sm font-medium text-amber-200 truncate">
                      {lang === 'ar' ? project.recognitionAr || project.recognition : project.recognition}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {t.projectDetail.overview}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-[#D7E2EA] font-light">
                {lang === 'ar' ? project.summaryAr : project.summary}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Media Gallery matching PDF */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {t.projectDetail.artifacts}
              </h4>
              {renderVisualArtifacts()}
            </div>
          </div>

          {/* Footer Action */}
          <div className="px-6 sm:px-8 py-4 border-t border-white/10 bg-[#14151B] flex items-center justify-between shrink-0">
            <span className="text-xs text-slate-400 hidden sm:inline">
              {t.projectDetail.callout}
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider hover:bg-white/5 transition-colors cursor-pointer"
              >
                {t.projectDetail.close}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-full text-white text-xs font-medium uppercase tracking-widest outline-2 outline-white -outline-offset-3 cursor-pointer"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
              >
                {t.projectDetail.inquire}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};
