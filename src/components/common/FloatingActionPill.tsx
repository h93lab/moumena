import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FileText, Globe } from 'lucide-react';

interface FloatingActionPillProps {
  onCvClick: () => void;
}

export const FloatingActionPill: React.FC<FloatingActionPillProps> = ({ onCvClick }) => {
  const { lang, toggleLang } = useLanguage();
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      setHeroVisible(entry.intersectionRatio >= 0.25);
    }, { threshold: [0, 0.25] });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className={`fixed right-6 sm:right-8 lg:top-auto lg:bottom-8 z-40 select-none ${heroVisible ? 'top-16 sm:top-40 bottom-auto' : 'bottom-6 top-auto'}`}
    >
      <div className="flex items-center bg-[#101217]/90 backdrop-blur-xl border border-white/20 rounded-full px-2 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:border-white/40 transition-all duration-300">
        {/* CV Action */}
        <button
          onClick={onCvClick}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors cursor-pointer"
          title="Open Curriculum Vitae"
        >
          <FileText className="w-3.5 h-3.5 text-[#B600A8]" />
          <span>CV</span>
        </button>

        {/* Minimalist Divider */}
        <div className="h-4 w-[1px] bg-white/20" />

        {/* Language Switch: Displays EN or AR */}
        <button
          onClick={toggleLang}
          className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#BBCCD7] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title={lang === 'en' ? 'التحويل للغة العربية' : 'Switch to English'}
        >
          <Globe className="w-3 h-3 text-slate-400" />
          <span>{lang === 'en' ? 'EN' : 'AR'}</span>
        </button>
      </div>
    </motion.div>
  );
};
