import Banner from "@/components/Banner";
import Tickets from "@/components/Tickets";
import Title from "@/components/Title";
import { NextPage } from "next";
import Head from "next/head";

const aviokarti: NextPage = () => {
  return (
    <>
      <Head>
        <title>Т.А Инфинти - Авио Карти</title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="plane-banner" />
      <Title title="Авио Карти" />
      <Tickets />
    </>
  );
};

export default aviokarti;
