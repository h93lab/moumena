import React, { useRef } from 'react';
import { useReducedMotion, useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedWord: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduceMotion: boolean;
}> = ({ word, progress, range, reduceMotion }) => {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return <motion.span className="inline-block" style={{ opacity: reduceMotion ? 1 : opacity }}>{word}</motion.span>;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.trim().split(/\s+/);

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center gap-x-[0.28em] ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="contents">
        {words.map((word, index) => (
          <AnimatedWord
            key={index}
            word={word}
            progress={scrollYProgress}
            range={[index / words.length, Math.min(1, (index + 1) / words.length)]}
            reduceMotion={Boolean(reduceMotion)}
          />
        ))}
      </span>
    </p>
  );
};
