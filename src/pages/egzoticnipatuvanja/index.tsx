import Banner from "@/components/Banner";
import CardListing from "@/components/CardListing";
import Title from "@/components/Title";
import Error from "@/components/Error";
import { Arrangements } from "@/interface/type";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  exoticDestination: Arrangements[];
  arrangements: Arrangements[];
}

const egzoticnipatuvanja: NextPage<Props> = ({ exoticDestination }) => {
  return (
    <>
      <Head>
        <title>Т.А Инфинти - Егзотични патувања</title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="exotic-banner" />
      {exoticDestination.length > 1 ? (
        <>
          <Title title="Егзотични патувања" />
          <CardListing
            cardData={exoticDestination}
            arrow="SeeMore"
            linkTo="destinacii"
          />
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default egzoticnipatuvanja;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const location = query.exoticDestination_like;

  let link: string;

  if (location) {
    link = `https://infinity-travel.glitch.me/arrangements?exoticDestination_like=${location}`;
  } else {
    link = "https://infinity-travel.glitch.me/arrangements";
  }

  const res = await fetch(link);
  const exoticDestination: Arrangements[] = await res.json();

  return {
    props: { exoticDestination },
  };
};
