import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] pt-16 sm:pt-20 pb-10 px-6 md:px-12 text-[#D7E2EA] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl font-bold uppercase tracking-wider text-white">
            {PORTFOLIO_DATA.profile.name}
          </span>
          <span className="text-xs text-slate-400 mt-1 uppercase tracking-widest">
            {PORTFOLIO_DATA.profile.title} · {PORTFOLIO_DATA.profile.location}
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href={PORTFOLIO_DATA.profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <button
            onClick={onContactClick}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights reserved.</span>
        <span className="mt-2 sm:mt-0">© {new Date().getFullYear()} H93Lab.com. All rights reserved.</span>
      </div>
    </footer>
  );
};
