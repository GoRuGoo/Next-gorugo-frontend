import Head from "next/head";
import Welcome from "../components/contents/Welcome";
import Header from "../components/layouts/Header";
import Biography from "../components/firstpage/Biography";
import { getWindowSize } from "../calfunctions/GetWindowSize";

export default function Home() {
  const { height, width } = getWindowSize();
  return (
    <>
      <Head>
        <title>GoRuGoo&apos;s Portfolio</title>
        <meta name="description" content="GoRuGoo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Welcome height={height} width={width} />
      <Biography height={height} width={width} />
    </>
  );
}
