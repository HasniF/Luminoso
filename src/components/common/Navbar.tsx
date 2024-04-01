/*
| Developed by Hasni
| Filename: Navbar.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import style from "@/styles/components/Navbar.module.scss";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarProps {
  children?: React.ReactNode;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Navbar: React.FC<NavbarProps> = (props) => {
  // Render
  //--------------------------------------------------------------------------
  return <nav className={style.navbar}></nav>;
};
