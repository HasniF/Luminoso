/*
| Developed by Hasni
| Filename: VideoIntro.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React, { useEffect, useState } from "react";
import style from "@/styles/pages/Home.module.scss";
import { MotionValue, motion, useTransform } from "framer-motion";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface VideoIntroProps {
  children?: React.ReactNode;
  scrollYProgress: MotionValue<number>;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const VideoIntro: React.FC<VideoIntroProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  // Render
  //--------------------------------------------------------------------------
  return (
    <div className={style.video_container}>
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{ scale }}
        initial={{ scale: 1.4 }}
        animate={{ scale: 1.2 }}
        transition={{
          delay: 1.25,
          duration: 0.8,
          ease: [0.37, 0, 0.63, 1],
        }}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
      </motion.video>
    </div>
  );
};
