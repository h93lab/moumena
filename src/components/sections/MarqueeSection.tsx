import React, { useRef, useState, useEffect } from 'react';
import { PORTFOLIO_MARQUEE_ITEMS, PortfolioMarqueeItem } from '../marquee/PortfolioMarqueeCards';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);
  const [selectedItem, setSelectedItem] = useState<PortfolioMarqueeItem | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calcOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calcOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Split all 21 authentic portfolio items into Row 1 (first 11) and Row 2 (remaining 10)
  const row1Original = PORTFOLIO_MARQUEE_ITEMS.slice(0, 11);
  const row2Original = PORTFOLIO_MARQUEE_ITEMS.slice(11);

  // Tripled for seamless infinite scrolling
  const row1Items = [...row1Original, ...row1Original, ...row1Original];
  const row2Items = [...row2Original, ...row2Original, ...row2Original];

  const transformRow1 = `translateX(${offset - 200}px)`;
  const transformRow2 = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: transformRow1,
            transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)',
            willChange: 'transform',
          }}
        >
          {row1Items.map((item, idx) => (
            <div
              key={`row1-${item.id}-${idx}`}
              onClick={() => setSelectedItem(item)}
              className={`w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer relative group`}
            >
              {item.content}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: transformRow2,
            transition: 'transform 0.1s cubic-bezier(0, 0, 0.2, 1)',
            willChange: 'transform',
          }}
        >
          {row2Items.map((item, idx) => (
            <div
              key={`row2-${item.id}-${idx}`}
              onClick={() => setSelectedItem(item)}
              className={`w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br ${item.bgGradient} border ${item.borderColor} shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer relative group`}
            >
              {item.content}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Marquee Item */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#14171E] border border-white/15 rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  {selectedItem.client}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">{selectedItem.title}</h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className={`rounded-2xl p-6 bg-gradient-to-br ${selectedItem.bgGradient} border ${selectedItem.borderColor} mb-5`}>
              {selectedItem.content}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-white">{selectedItem.clientAr}</span>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
