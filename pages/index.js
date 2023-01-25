import Head from "next/head";
import Welcome from "../components/contents/Welcome";
import Header from "../components/layouts/Header";
import Biography from "../components/firstpage/Biography";
import Works from "../components/firstpage/Works";
import Contact from "../components/firstpage/Contact";
import Footer from "../components/layouts/Footer";

import { useState } from "react";

export default function Home() {
  const [fromChildrenValue, setChildrenVarFunc] = useState(false);
  return (
    <>
      <Head>
        <title>GoRuGoo&apos;s Portfolio</title>
        <meta name="description" content="GoRuGoo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Header setChildrenVarFunc={setChildrenVarFunc} />

      {fromChildrenValue ? undefined : (
        <>
          <Welcome />
          <Biography />
          <Works />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}
