import Banner from "@/components/Banner";
import CardListing from "@/components/CardListing";
import Title from "@/components/Title";
import Error from "@/components/Error";
import { Arrangements } from "@/interface/type";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  arrangements: Arrangements[];
  izleti: Arrangements[];
}

const istrazijamakedonija: NextPage<Props> = ({ arrangements, izleti }) => {
  return (
    <>
      <Head>
        <title>Т.А Инфинти - Истражи ја Македонија</title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="macedonia-banner" />
      {arrangements.length > 1 ? (
        <>
          <Title title={`Истражи ја Македонија`} />
          <CardListing
            cardData={arrangements}
            arrow="SeeMore"
            linkTo="Izleti"
          />
          <Title title="Излети" />
          <CardListing cardData={izleti} arrow="Izleti" linkTo="Izleti" />
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default istrazijamakedonija;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const location = query.country_like;

  let link: string;
  let linkIzleti: string;

  if (location) {
    link = `https://infinity-travel.glitch.me/arrangements?location.country_like=${location}`;
  } else {
    link = "https://infinity-travel.glitch.me/arrangements";
  }

  if (location) {
    linkIzleti = `https://infinity-travel.glitch.me/arrangements?&izleti_like=true`;
  } else {
    linkIzleti = "https://infinity-travel.glitch.me/arrangements";
  }

  const res = await fetch(link);
  const arrangements: Arrangements[] = await res.json();

  const resIzleti = await fetch(linkIzleti);
  const izleti: Arrangements[] = await resIzleti.json();

  return {
    props: { arrangements, izleti },
  };
};
