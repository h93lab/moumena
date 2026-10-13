import React from 'react';
import { FadeIn } from '../common/FadeIn';
import { AnimatedText } from '../common/AnimatedText';
import { ContactButton } from '../common/Buttons';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const { lang, t } = useLanguage();

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Corner 1: Top-left Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src={PORTFOLIO_DATA.cornerIcons.moon}
            alt="3D Moon ornament"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-2xl opacity-90 hover:scale-105 transition-transform"
          />
        </FadeIn>
      </div>

      {/* Corner 2: Bottom-left 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src={PORTFOLIO_DATA.cornerIcons.object3d}
            alt="3D geometric object"
            referrerPolicy="no-referrer"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-2xl opacity-90 hover:scale-105 transition-transform"
          />
        </FadeIn>
      </div>

      {/* Corner 3: Top-right Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src={PORTFOLIO_DATA.cornerIcons.lego}
            alt="3D Lego ornament"
            referrerPolicy="no-referrer"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-2xl opacity-90 hover:scale-105 transition-transform"
          />
        </FadeIn>
      </div>

      {/* Corner 4: Bottom-right 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src={PORTFOLIO_DATA.cornerIcons.group3d}
            alt="3D group element"
            referrerPolicy="no-referrer"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-2xl opacity-90 hover:scale-105 transition-transform"
          />
        </FadeIn>
      </div>

      {/* Center content container */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl w-full mx-auto text-center">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {t.about.heading}
          </h2>
        </FadeIn>

        {/* Gap between heading and animated text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph: Character-by-character scroll-reveal text animation */}
        <div className="max-w-[580px] w-full px-4">
          <AnimatedText
            text={t.about.text}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Authentic career highlights from CV */}
        <FadeIn delay={0.35} y={20} className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs uppercase tracking-widest text-slate-400">
          <span>{t.about.clientsCount}</span>
          <span aria-hidden="true">/</span>
          <span>{t.about.projectsCount}</span>
          <span aria-hidden="true">/</span>
          <span>{t.about.experienceYears}</span>
        </FadeIn>

        {/* Gap between text block and contact button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.4} y={30}>
          <ContactButton onClick={onContactClick} label={t.hero.contactBtn} />
        </FadeIn>
      </div>
    </section>
  );
};
