import { Navbar } from "@/components";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
