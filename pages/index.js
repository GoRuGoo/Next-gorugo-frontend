import Head from "next/head";
import Welcome from "../components/contents/Welcome";
import Header from "../components/layouts/Header";
import Biography from "../components/firstpage/Biography";
import Works from "../components/firstpage/Works";
import Contact from "../components/firstpage/Contact";
import Footer from "../components/layouts/Footer";

import { getWindowSize } from "../calfunctions/GetWindowSize";

export default function Home() {
  const { height, width } = getWindowSize();
  return (
    <>
      <Head>
        <title>GoRuGoo&apos;s Portfolio</title>
        <meta name="description" content="GoRuGoo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Welcome />
      <Biography />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
