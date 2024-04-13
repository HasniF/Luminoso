import { Navbar } from "@/components";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
