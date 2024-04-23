import Head from "next/head";
import { useRef } from "react";
import { FirstSection, VideoIntro } from "@/components";
import { useScroll } from "framer-motion";
import style from "@/styles/pages/home/Home.module.scss";

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  console.log("scrollYProgress", scrollYProgress);
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
      <section className={style.first_section} ref={ref}>
        <VideoIntro scrollYProgress={scrollYProgress} />
        <FirstSection scrollYProgress={scrollYProgress} />
      </section>
      <section>
        {Array.from({ length: 20 }).map((_, index) => (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            cupiditate ducimus dolores nulla quas recusandae, obcaecati sit
            aliquam praesentium, ipsam officia. Optio, quos! Accusamus iusto
            temporibus omnis sit reiciendis optio?
          </p>
        ))}
      </section>
    </>
  );
}
