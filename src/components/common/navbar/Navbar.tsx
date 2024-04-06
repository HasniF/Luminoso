/*
| Developed by Hasni
| Filename: Navbar.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import style from "@/styles/components/Navbar.module.scss";
import Link from "next/link";
import { Cart, Logo, MenuIcon } from "..";
import { Menu } from "./Menu";
import { AnimatePresence, motion } from "framer-motion";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarProps {
  children?: React.ReactNode;
  item?: number;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Navbar: React.FC<NavbarProps> = ({ item }) => {
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const variants = {
    visible: { y: 0 },
    animate: { y: "-1em" },
    transition: {
      duration: 1,
      ease: [0.68, -0.6, 0.32, 1.6],
    },
  };

  // Render
  //--------------------------------------------------------------------------
  return (
    <nav className={style.navbar}>
      <div className={style.menuContainer}>
        <Logo width="20" height="20" color="#fcf7f0" />
        <Link href="/">
          <p>Luminoso</p>
        </Link>
      </div>
      <div
        onClick={() => setDisplayMenu(!displayMenu)}
        className={style.menuContainer}
      >
        <MenuIcon
          style={{
            transform: displayMenu ? "rotate(0deg)" : "rotate(45deg)",
            transition: "transform 0.5s ease",
          }}
        />
        <p className={style.menuText}>
          <span>
            {"Menu".split("").map((letter, id) => (
              <motion.span
                className={style.spanMotion}
                key={id}
                initial={variants.visible}
                animate={displayMenu ? variants.animate : variants.visible}
                transition={{ ...variants.transition, delay: id * 0.05 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
          <span>
            {"Close".split("").map((letter, id) => (
              <motion.span
                className={style.spanMotion}
                key={id}
                initial={variants.visible}
                animate={displayMenu ? variants.animate : variants.visible}
                transition={{ ...variants.transition, delay: id * 0.05 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </p>
      </div>
      <div>
        <Cart />
        <p>Cart (0)</p>
      </div>
      <AnimatePresence mode="wait">
        {displayMenu && <Menu displayMenu />}
      </AnimatePresence>
    </nav>
  );
};
