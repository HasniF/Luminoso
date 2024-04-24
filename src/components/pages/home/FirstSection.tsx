/*
| Developed by Hasni
| Filename: FirstSection.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
import style from "@/styles/pages/home/FirstSection.module.scss";
import { LetterMotion, TextAnimate } from "@/components";
import { ButtonCta } from "@/components/common/ButtonCta";
import { MotionValue, motion, useTransform } from "framer-motion";
import Image from "next/image";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface FirstSectionProps {
  children?: React.ReactNode;
  scrollYProgress: MotionValue<number>;
}

/*
|--------------------------------------------------------------------------
| Animations 
|--------------------------------------------------------------------------
*/
const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.7,
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const spanParentVariants = {
  initial: { y: 0 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const FirstSection: React.FC<FirstSectionProps> = ({
  scrollYProgress,
}) => {
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const translteOne = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const translteTwo = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const translteThree = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const images = [
    {
      src: "/images/illustration/0.jpg",
      parallax: translteOne,
    },
    {
      src: "/images/illustration/1.jpg",
      parallax: translteTwo,
    },
    {
      src: "/images/illustration/2.jpg",
      parallax: translteThree,
    },
  ];
  // Render
  //--------------------------------------------------------------------------
  return (
    <div className={style.el_container}>
      <div className={style.el_wrapper}>
        <h1>
          <LetterMotion word="Luminoso" />
        </h1>
        <motion.div
          className={style.cta_container}
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <p>
            Elevate your space effortlessly
            <br />
            with our elegant furniture selection.
          </p>
          <ButtonCta
            label="Discover Now"
            color=" #fcf7f0"
            bgColor="#4c3d30"
            borderColor="transparent"
          />
        </motion.div>
      </div>
      <div className={style.description}>
        <motion.h2
          variants={spanParentVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          style={{ y: translateY }}
        >
          <TextAnimate
            text={`Craft your story with \n timeless furniture where \n style endures.`}
          />
        </motion.h2>
        <div className={style.images_container}>
          {images.map(({ src, parallax }, index) => (
            <motion.div style={{ y: parallax }}>
              <Image
                key={index}
                src={src}
                alt="home"
                width={200}
                height={300}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
