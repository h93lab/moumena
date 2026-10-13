import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Briefcase, GraduationCap, Wrench, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const experiences = [
    {
      role: 'Senior Creative & Graphic Designer',
      company: 'Housecall',
      period: 'Oct 2025 - Present',
      bullets: [
        'Lead creative development across social media, digital marketing, brand communication, and internal materials.',
        'Develop creative concepts and visual content for healthcare campaigns, promotions, awareness initiatives, and brand activities.',
        'Design static and motion content including social media assets, campaigns, presentations, marketing materials, and digital experiences.',
        'Contribute to content planning, creative direction, copy development, and visual storytelling.',
      ],
    },
    {
      role: 'Art Director',
      company: 'NFINITY8',
      period: 'Aug 2024 - Sep 2025',
      bullets: [
        'Led the social media design projects for Emirates Health Services (EHS).',
        'Designed customized themes and key visuals for major government events and special national occasions.',
      ],
    },
    {
      role: 'Senior Graphic Designer',
      company: 'INFOCUS MEDIA',
      period: 'May 2019 - Feb 2024',
      bullets: [
        'Led design and production for top clients like the UAE Ministry of Health & Prevention (MOHAP) and Emirates Health Services.',
        'Created visually appealing social media posts and concise, impactful motion videos for online platforms.',
        'Recognized with official appreciation certificate for high agility during COVID-19 nationwide campaigns.',
      ],
    },
    {
      role: 'Motion Graphic Designer',
      company: 'ZOOM STUDIO',
      period: 'Apr 2018 - Apr 2019',
      bullets: [
        'Crafted captivating static and motion graphics to enhance brand visibility and engagement across various projects.',
        'Led social media campaigns and orchestrated media coverage to amplify brand presence and outreach.',
      ],
    },
    {
      role: 'Lead Graphic Designer',
      company: 'EMIRATES VISION MEDIA NETWORK',
      period: 'Apr 2017 - Apr 2018',
      bullets: [
        'Led the design department and maintained high-level communication with national media agencies.',
        'Produced animated infographics, invitations, advertisements, and event materials.',
      ],
    },
    {
      role: 'Graphic Designer & Video Editor',
      company: 'AJMAN UNIVERSITY',
      period: 'Apr 2015 - Mar 2017',
      bullets: [
        'Mentored students in videography techniques and industry-standard design/editing software.',
        'Produced dynamic motion videos for college advertisements and official university events.',
      ],
    },
  ];

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

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#111317] border border-[#2B303C] rounded-3xl sm:rounded-[36px] text-[#D7E2EA] shadow-2xl z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 shrink-0 bg-[#161820]">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#B600A8] font-bold">
                  {t.cv.title}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  {t.cv.subtitle}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{t.cv.downloadBtn}</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable CV Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-left">
              {/* Quick Contacts Strip */}
              <div className="flex flex-wrap items-center gap-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B600A8]" />
                  <span>{PORTFOLIO_DATA.profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#B600A8]" />
                  <span>{PORTFOLIO_DATA.profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#B600A8]" />
                  <span>{PORTFOLIO_DATA.profile.phone}</span>
                </div>
              </div>

              {/* 1. Professional Experience Timeline */}
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-6">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <h4 className="text-lg font-bold uppercase tracking-wider text-white">
                    {t.cv.experienceTitle}
                  </h4>
                </div>

                <div className="space-y-6 relative border-l-2 border-white/10 pl-6 ml-2">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#B600A8] ring-4 ring-[#111317]" />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h5 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                          {exp.role} · <span className="text-[#BBCCD7]">{exp.company}</span>
                        </h5>
                        <span className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20 w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-1 text-xs sm:text-sm text-slate-400 leading-relaxed list-disc list-inside">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Education & Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education */}
                <div>
                  <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-4">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-bold uppercase tracking-wider text-white">
                      {t.cv.educationTitle}
                    </h4>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-xs font-mono text-purple-300 block mb-1">2013 - 2017</span>
                    <h5 className="text-base font-bold text-white">Bachelor&apos;s Degree</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Graphic Design and Radio &amp; TV Information and Mass Communications and Humanities
                    </p>
                    <div className="mt-2 text-xs font-semibold text-emerald-400">
                      Ajman University · GPA: B+
                    </div>
                  </div>
                </div>

                {/* Software Stack */}
                <div>
                  <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-4">
                    <Wrench className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-bold uppercase tracking-wider text-white">
                      {t.cv.toolsTitle}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Adobe Photoshop',
                      'Adobe Illustrator',
                      'Adobe After Effects',
                      'Adobe Premiere Pro',
                      'Adobe Lightroom',
                      'Adobe InDesign',
                      'Adobe XD',
                      'Microsoft Office Suite',
                    ].map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
