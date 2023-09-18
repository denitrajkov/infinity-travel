import Banner from "@/components/Banner";
import Error from "@/components/Error";
import CardListing from "@/components/CardListing";
import Head from "next/head";
import Title from "@/components/Title";
import { Arrangements } from "@/interface/type";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  arrangements: Arrangements[];
  arrangementsHotel: Arrangements[];
}

const destinacii: NextPage<Props> = ({ arrangements, arrangementsHotel }) => {
  return (
    <>
      <Head>
        <title>
          Т.А Инфинти -
          {arrangements.find((item) => item.location.country)?.location.country}
        </title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="destination-banner" />

      {arrangements.length > 1 ? (
        <>
          <Title
            title={`${
              arrangements.find((item) => item.location.country)?.location
                .country
            } Апартмани`}
          />
          <CardListing
            cardData={arrangements}
            arrow="SeeMore"
            linkTo="destinacii"
          />
          <Title
            title={`${
              arrangements.find((item) => item.location.country)?.location
                .country
            } Хотели`}
          />

          <CardListing
            cardData={arrangementsHotel}
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

export default destinacii;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const location = query.country_like;

  let appartmentLink: string;
  let hotelLink: string;

  if (location) {
    appartmentLink = `https://infinity-travel.glitch.me/arrangements?location.country_like=${location}&type_like=appartment`;
    hotelLink = `https://infinity-travel.glitch.me/arrangements?location.country_like=${location}&type_like=hotel`;
  } else {
    appartmentLink = "https://infinity-travel.glitch.me/arrangements";
    hotelLink = "https://infinity-travel.glitch.me/arrangements";
  }

  const res = await fetch(appartmentLink);
  const arrangements: Arrangements[] = await res.json();

  const res1 = await fetch(hotelLink);
  const arrangementsHotel: Arrangements[] = await res1.json();

  return {
    props: { arrangements, arrangementsHotel },
  };
};
