import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';

interface ParagraphProps {
  paragraph: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  const words = paragraph.split(" ");
  return (
    <>
    <p 
      ref={container}         
      className="flex flex-wrap selection:bg-teal-400 selection:text-black text-3xl font-medium  leading-none px-10 py-8 max-w-screen-2xl text-white"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
        
        <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>

        );
      })}
    </p>
    {/* <h1 className='text-4xl -mt-6 text-lime-300 font-bold'>That's why we built PathVisulaizer.io</h1> */}
    
    </>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-3 mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);
        return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>;
      })}
    </span>
  );
};

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Paragraph;
