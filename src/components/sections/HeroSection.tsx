import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Play } from 'lucide-react';
import { Navbar } from './Navbar';
import { Magnet } from '../common/Magnet';
import { ContactButton } from '../common/Buttons';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import heroPortraitImg from '../../assets/images/regenerated_image_1791893512963.png';

interface HeroSectionProps {
  onContactClick: () => void;
  onShowreelClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onShowreelClick,
}) => {
  const { lang, t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return localStorage.getItem('moumena_avatar_custom') || heroPortraitImg;
  });

  const handleCustomImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const resultStr = event.target.result as string;
          setAvatarSrc(resultStr);
          localStorage.setItem('moumena_avatar_custom', resultStr);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <Navbar onContactClick={onContactClick} />

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none pointer-events-none">
            {t.hero.greeting}
          </h1>
        </motion.div>
      </div>

      {/* 3. Hero Portrait with Magnet Mouse-Following Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative group flex items-end justify-center"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full flex items-end justify-center"
          >
            <div className="relative w-full flex items-end justify-center">
              <img
                src={avatarSrc}
                alt={PORTFOLIO_DATA.profile.name}
                referrerPolicy="no-referrer"
                onError={() => {
                  if (avatarSrc !== heroPortraitImg) {
                    setAvatarSrc(heroPortraitImg);
                  }
                }}
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] filter contrast-105"
              />

              {/* Upload image trigger button for instant replacement */}
              <button
                onClick={() => fileInputRef.current?.click()}
                title="Change Avatar Image"
                aria-label="Change Avatar Image"
                className="absolute bottom-6 right-4 sm:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#D7E2EA] hover:text-white hover:border-[#B600A8] cursor-pointer shadow-lg"
              >
                <Camera className="w-4 h-4" />
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleCustomImageUpload}
                className="hidden"
              />
            </div>
          </Magnet>
        </motion.div>
      </div>

      {/* 4. Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 pointer-events-auto">
        {/* Left text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {t.hero.bio}
        </motion.p>

        {/* Right CTA Actions: Watch Showreel + Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-3 sm:gap-4"
        >
          {/* Watch Showreel Pill */}
          <button
            onClick={onShowreelClick}
            data-cursor="PLAY"
            className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg group"
          >
            <div className="w-5 h-5 rounded-full bg-[#B600A8] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
            </div>
            <span>{t.hero.showreelBtn}</span>
          </button>

          {/* Contact Me Button */}
          <ContactButton onClick={onContactClick} label={t.hero.contactBtn} />
        </motion.div>
      </div>
    </section>
  );
};
