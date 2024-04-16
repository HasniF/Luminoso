/*
| Developed by Hasni
| Filename: FirstSection.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import style from "@/styles/pages/Home.module.scss";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FirstSectionProps {
  children?: React.ReactNode;
}

/*
|--------------------------------------------------------------------------
| Animations
|--------------------------------------------------------------------------
*/
const variants = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 1,
      delayChildren: 1,
      duration: 1,
    },
  },
};

const letterVariants = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const FirstSection: React.FC<FirstSectionProps> = (props) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <div className={style.el_container}>
      <h1>
        <motion.span variants={variants} initial="initial" animate="animate">
          {"Luminoso".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="initial"
              animate="animate"

              //   initial={{ y: 100 }}
              //   animate={{ y: 0 }}
              //   exit={{ y: 100 }}
              //   transition={{ duration: 1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </h1>
    </div>
  );
};
