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
  displayMenu: boolean;
}

const list = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/shop",
  },
  {
    name: `About`,
    link: "/about",
  },
  {
    name: "Archive",
    link: "/archive",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

/*
|--------------------------------------------------------------------------
| Animation
|--------------------------------------------------------------------------
*/
const menuTransition = {
  duration: 1.2,
  ease: [0.83, 0, 0.17, 1],
};

const menuVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: menuTransition,
  },
  exit: { scaleY: 0, transition: { ...menuTransition, delay: 0.45 } },
};

const letterVariants = {
  initial: { y: 100 },
  animate: { y: 0 },
  exist: { y: 100 },
  transition: {
    duration: 1,
  },
};

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Menu: React.FC<MenuProps> = ({ displayMenu }) => {
  const [MenuAnimationEnd, setMenuAnimationEnd] = React.useState(false);

  // Render
  //--------------------------------------------------------------------------
  return (
    <motion.div
      className={style.menu}
      onAnimationComplete={() => setMenuAnimationEnd(true)}
      variants={menuVariants}
      initial="initial"
      animate={displayMenu ? "animate" : "initial"}
      exit="exit"
    >
      <nav className={style.navbar}>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <span>
                {item.name.split("").map((letter, id) => (
                  <motion.span
                    key={id}
                    initial={letterVariants.initial}
                    animate={
                      MenuAnimationEnd
                        ? {
                            ...letterVariants.animate,
                            transition: {
                              ...letterVariants.transition,
                              delay: id * 0.05,
                              ease: [0.25, 1, 0.5, 1],
                            },
                          }
                        : letterVariants.initial
                    }
                    exit={{
                      ...letterVariants.exist,
                      transition: {
                        ...letterVariants.transition,
                        delay: id * 0.05,
                        ease: [0.76, 0, 0.24, 1],
                      },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
