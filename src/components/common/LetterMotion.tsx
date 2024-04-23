/*
| Developed by Hasni
| Filename: LetterMotion.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { Variants, motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface LetterMotionProps {
  children?: React.ReactNode;
  word: string;
}
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const LetterMotion: React.FC<LetterMotionProps> = (props) => {
  const { word } = props;

  // Animations
  //--------------------------------------------------------------------------

  const variants: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 1.25,
      },
    },
  };

  const letterVariants: Variants = {
    initial: { y: 300 },
    animate: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.span variants={variants} initial="initial" animate="animate">
      {word.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
