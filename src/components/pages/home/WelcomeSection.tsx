/*
| Developed by Hasni
| Filename: WelcomeSection.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { useRef } from "react";
import style from "@/styles/pages/home/WelcomeSection.module.scss";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { ButtonCta, TextAnimate } from "@/components";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface WelcomeSectionProps {
  children?: React.ReactNode;
}

/*
|--------------------------------------------------------------------------
| Animations
|--------------------------------------------------------------------------
*/
const titleVariant = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const subtitleVariant = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const MotionImage = motion(Image);
export const WelcomeSection: React.FC<WelcomeSectionProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);
  // Render
  //--------------------------------------------------------------------------
  return (
    <div className={style.container} ref={ref}>
      <div className={style.wrapper_sticky}>
        <motion.h1
          variants={titleVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <TextAnimate
            text={`Welcome to our Furniture Emporium ! \n Where Timeless Design Meets Storytelling.`}
          />
        </motion.h1>
        <motion.p
          variants={subtitleVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <TextAnimate
            text={`Dive into our curated collection of Italian furniture, \n where timeless design meets artisanal craftsmanship. \n Discover the essence of Italian elegance for your home.`}
            lineHeigh={1.5}
          />
        </motion.p>
        <ButtonCta
          label="About us"
          color=" #fcf7f0"
          bgColor="#4c3d30"
          borderColor="transparent"
          delayEnter={0.9}
        />
      </div>
      <div className={style.container_image}>
        <MotionImage
          src="/images/illustration/3.jpg"
          alt="Welcome to Luminoso"
          fill
          style={{
            scaleX: scale,
            scaleY: scale,
          }}
        />
      </div>
    </div>
  );
};
