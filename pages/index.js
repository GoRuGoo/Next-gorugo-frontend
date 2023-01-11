import Layout from "../components/layouts/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GoRuGoo&apos;s Portfolio</title>
        <meta name="description" content="GoRuGoo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout />
    </>
  );
}
