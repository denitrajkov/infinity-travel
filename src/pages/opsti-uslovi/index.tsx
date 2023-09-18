import Banner from "@/components/Banner";
import Conditional from "@/components/Conditional";
import Title from "@/components/Title";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>Т.А Инфинти - Општи услови</title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="global-banner" />
      <Title title="Општи услови" />
      <div className="container py-5">
        <Conditional />
      </div>
    </>
  );
}
