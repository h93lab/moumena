import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full px-6 md:px-10 pt-6 md:pt-8 z-30"
    >
      <nav className="w-full flex items-center justify-between">
        <button
          onClick={() => scrollTo('projects')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          {t.nav.projects}
        </button>

        <button
          onClick={() => scrollTo('about')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          {t.nav.about}
        </button>

        <button
          onClick={() => scrollTo('career')}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          {t.nav.career}
        </button>

        <button
          onClick={onContactClick}
          className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-base md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          {t.nav.contact}
        </button>
      </nav>
    </motion.header>
  );
};
