import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useModalAccessibility } from '../../hooks/useModalAccessibility';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const dialogRef = useModalAccessibility(isOpen, onClose);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(25);

  const chapters = [
    {
      title: 'MOHAP World Health Day',
      titleAr: 'فيديو اليوم العالمي للصحة',
      client: 'Ministry of Health & Sheikh Mohammed Tweet',
      duration: '01:45',
      accent: 'from-sky-900 to-blue-950',
      description: 'Royal featured campaign video celebrating frontline healthcare workers during COVID-19 pandemic.',
    },
    {
      title: 'Dubai Police Interactive Motion',
      titleAr: 'إنفوجرافيك القيادة العامة لشرطة دبي',
      client: 'Dubai Police General HQ',
      duration: '02:10',
      accent: 'from-emerald-950 to-teal-950',
      description: 'High-tech biometric dashboards and interactive leadership presentations with data animations.',
    },
    {
      title: 'Dubai Prosecution Marhous Initiative',
      titleAr: 'مبادرة مرخوص - النيابة العامة',
      client: 'Dubai Public Prosecution',
      duration: '01:20',
      accent: 'from-cyan-950 to-slate-900',
      description: 'Customer journey kinetic flowchart explaining the Smart Bail paperless government system.',
    },
    {
      title: 'Ajman Municipality Smart Portal',
      titleAr: 'بوابة الخدمات الإلكترونية - بلدية عجمان',
      client: 'Ajman Municipality & Planning Dept',
      duration: '01:50',
      accent: 'from-amber-950 to-stone-900',
      description: 'Dynamic 2D character animation and digital portal onboarding video suite.',
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveChapter((c) => (c + 1) % chapters.length);
            return 0;
          }
          return prev + 1;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, chapters.length]);

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
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="showreel-dialog-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            className="relative w-full max-w-5xl bg-[#0F1014] border border-[#2B303C] rounded-3xl sm:rounded-[36px] text-[#D7E2EA] shadow-2xl z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/10 bg-[#14151B]">
              <div className="flex items-center gap-2.5">
                <Film className="w-5 h-5 text-[#B600A8]" />
                <span id="showreel-dialog-title" className="text-xs uppercase tracking-widest font-bold text-white">
                  Motion Graphics &amp; Video Showreel
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                  4K 60FPS
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close showreel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Screen Simulation */}
            <div className="relative aspect-video w-full bg-black flex flex-col justify-between overflow-hidden">
              {/* Dynamic Animated Backdrop for Active Chapter */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${chapters[activeChapter].accent} opacity-80 transition-all duration-700 flex items-center justify-center`}
              >
                {/* Radial Glow */}
                <div className="w-96 h-96 rounded-full bg-[#B600A8]/20 blur-3xl animate-pulse" />

                {/* Simulated Motion Graphic Title Card */}
                <div className="relative z-10 text-center px-6 max-w-xl">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-mono block mb-2">
                    {chapters[activeChapter].client}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                    {lang === 'ar' ? chapters[activeChapter].titleAr : chapters[activeChapter].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed drop-shadow">
                    {chapters[activeChapter].description}
                  </p>
                </div>
              </div>

              {/* Top Reel Info Overlay */}
              <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-[11px] uppercase tracking-wider font-mono text-white">
                    PLAYING CHAPTER {activeChapter + 1} OF {chapters.length}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-300">
                  {chapters[activeChapter].duration}
                </span>
              </div>

              {/* Player Controls Bar */}
              <div className="relative z-20 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent space-y-3">
                {/* Progress Scrub Bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
                  <div
                    className="h-full bg-gradient-to-r from-[#B600A8] to-[#BE4C00] transition-all duration-150 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2.5 rounded-full bg-white text-black hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black" />}
                    </button>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <span className="text-xs font-mono text-slate-400">
                      Chapter: {chapters[activeChapter].title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {chapters.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveChapter(idx);
                          setProgress(0);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeChapter === idx ? 'w-6 bg-[#B600A8]' : 'bg-white/30 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Chapters Drawer */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#12141A] grid grid-cols-2 sm:grid-cols-4 gap-3">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveChapter(idx);
                    setProgress(0);
                  }}
                  className={`p-3 rounded-2xl text-left border transition-all ${
                    activeChapter === idx
                      ? 'border-[#B600A8] bg-[#B600A8]/10 text-white'
                      : 'border-white/5 bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="text-[10px] font-mono text-purple-400 block mb-0.5">
                    0{idx + 1} · {ch.duration}
                  </span>
                  <div className="text-xs font-bold truncate text-white">{ch.title}</div>
                  <span className="text-[10px] text-slate-500 truncate block mt-0.5">{ch.client}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
