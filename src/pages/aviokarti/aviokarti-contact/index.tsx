import DataPlaneContact from "@/components/DataPlaneContact";
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
      <Title title="Авио Карти" />
      <DataPlaneContact />
    </>
  );
};

export default aviokarti;
