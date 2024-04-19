/*
| Developed by Hasni
| Filename: FirstSection.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import style from "@/styles/pages/Home.module.scss";
import { Variants, motion } from "framer-motion";
import { LetterMotion } from "@/components";
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
| Component
|--------------------------------------------------------------------------
*/
export const FirstSection: React.FC<FirstSectionProps> = (props) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <div className={style.el_container}>
      <h1>
        <LetterMotion word="Luminoso" />
      </h1>
    </div>
  );
};
