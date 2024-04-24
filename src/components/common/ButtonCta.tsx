/*
| Developed by Hasni
| Filename: ButtonCta.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import style from "@/styles/components/ButtonCta.module.scss";
import { motion } from "framer-motion";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ButtonCtaProps {
  children?: React.ReactNode;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  delayEnter?: number;
}
/*
|--------------------------------------------------------------------------
| Animations
|--------------------------------------------------------------------------
*/
const buttonVariants = {
  initial: { y: 0 },
  animate: { y: "-1em" },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

export const ButtonCta: React.FC<ButtonCtaProps> = (props) => {
  const { label, color, borderColor, bgColor, delayEnter } = props;
  const [anime, setAnime] = React.useState(false);
  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.button
      className={style.container}
      onMouseEnter={() => setAnime(true)}
      onMouseLeave={() => setAnime(false)}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: delayEnter,
          duration: 1,
          ease: [0.25, 1, 0.5, 1],
        },
      }}
      viewport={{ once: true }}
      style={{
        color,
        borderColor,
        backgroundColor: bgColor,
      }}
    >
      <div>
        <span className={style.span_label_wrapper}>
          {Array.from({ length: 2 }).map((_, index) => (
            <motion.span
              key={index}
              variants={buttonVariants}
              initial="initial"
              animate={anime ? "animate" : "initial"}
              style={{ color }}
            >
              {label}
            </motion.span>
          ))}
        </span>
      </div>
    </motion.button>
  );
};
