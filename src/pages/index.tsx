import Head from "next/head";
import { useRef } from "react";
import { FirstSection, VideoIntro } from "@/components";
import { useScroll } from "framer-motion";
import style from "@/styles/pages/Home.module.scss";

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <>
      <Head>
        <title>Luminoso ✨</title>
        <meta
          name="description"
          content="Discover a curated collection of luxurious furniture and home decor accessories at our online store. Elevate your interior with style and sophistication. Explore now !"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section ref={ref} className={style.wrapper}>
        <VideoIntro scrollYProgress={scrollYProgress} />
        <FirstSection />
      </section>
    </>
  );
}
