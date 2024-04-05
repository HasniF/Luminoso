/*
| Developed by Hasni
| Filename: Menu.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import style from "@/styles/components/Menu.module.scss";
import { motion } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MenuProps {
  children?: React.ReactNode;
}
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Menu: React.FC<MenuProps> = (props) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.div
      className={style.menu}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
    ></motion.div>
  );
};
