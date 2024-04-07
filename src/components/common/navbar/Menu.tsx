/*
| Developed by Hasni
| Filename: Menu.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { useEffect } from "react";
import style from "@/styles/components/Menu.module.scss";
import { motion } from "framer-motion";
import { menuList } from "@/contract/constant";
import { useRouter } from "next/router";
import Image from "next/image";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MenuProps {
  children?: React.ReactNode;
  displayMenu: boolean;
  setDisplayMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ImageIllustrationProps {
  name: string;
}
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
  exit: { scaleY: 0, transition: { ...menuTransition, delay: 0.5 } },
};

const letterVariants = {
  initial: { y: 100 },
  animate: { y: 0 },
  exist: { y: 100 },
  transition: {
    duration: 1,
  },
};

const illustrationVariants = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: 0,
    transition: {
      duration: 1.1,
      ease: [0.83, 0, 0.17, 1],
      delay: 0.9,
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};
/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/

const ImageIllustration: React.FC<ImageIllustrationProps> = ({ name }) => {
  return (
    <div className={style.illustration}>
      <motion.div
        className={style.hider}
        variants={illustrationVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <Image
        src={`/images/menu/${name.toLocaleLowerCase()}.jpg`}
        alt="illustration"
        width={380}
        height={480}
      />
    </div>
  );
};
export const Menu: React.FC<MenuProps> = ({ displayMenu, setDisplayMenu }) => {
  const router = useRouter();
  // States
  //--------------------------------------------------------------------------
  const [menuAnimationEnd, setMenuAnimationEnd] = React.useState(false);
  const [elementHovered, setElementHovered] = React.useState<boolean>(false);
  const [elementHoveredIndex, setElementHoveredIndex] = React.useState<string>(
    router.pathname === "/" ? "home" : router.pathname.split("/")[1]
  );

  // Methods
  //--------------------------------------------------------------------------
  const handleMouseEnter = (name: string) => {
    setElementHovered(true);
    setElementHoveredIndex(name);
  };

  const handleMouseLeave = () => {
    setElementHovered(false);
    setElementHoveredIndex(
      router.pathname === "/" ? "home" : router.pathname.split("/")[1]
    );
  };

  const handleClick = (link: string, name: string) => {
    setDisplayMenu(false);
    setElementHoveredIndex(name);
    link !== router.pathname && router.push(link);
  };
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
          {menuList.map((item, index) => (
            <li key={index}>
              <span
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(item.link, item.name)}
              >
                {item.name.split("").map((letter, id) => (
                  <motion.span
                    key={id}
                    style={{
                      opacity:
                        elementHovered && elementHoveredIndex !== item.name
                          ? 0.5
                          : 1,
                    }}
                    initial={letterVariants.initial}
                    animate={
                      menuAnimationEnd
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
      <ImageIllustration name={elementHoveredIndex} />
    </motion.div>
  );
};
