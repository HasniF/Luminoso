/*
| Developed by Hasni
| Filename: TextAnimate.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TextAnimateProps {
  children?: React.ReactNode;
  text: string;
  lineHeigh?: number;
}

/*
|--------------------------------------------------------------------------
| Style
|--------------------------------------------------------------------------
*/
const spanStyle = {
  display: "block",
  overflow: "hidden",
};
/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const spanVariants = {
  initial: { y: 150 },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const TextAnimate: React.FC<TextAnimateProps> = ({
  text,
  lineHeigh,
}) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <>
      {text.split("\n").map((letter, index) => (
        <span
          key={index}
          style={{
            ...spanStyle,
            lineHeight: lineHeigh ? lineHeigh : 1.2,
          }}
        >
          <motion.span
            variants={spanVariants}
            style={{
              ...spanStyle,
              lineHeight: lineHeigh ? lineHeigh : 1.2,
            }}
          >
            {letter}
          </motion.span>
        </span>
      ))}
    </>
  );
};
