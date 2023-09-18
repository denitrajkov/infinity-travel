import Banner from "@/components/Banner";
import Calendar from "@/components/Calendar";
import Card from "@/components/Card";
import Error from "@/components/Error";
import Title from "@/components/Title";
import { Arrangements, Country } from "@/interface/type";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  arrangements: Arrangements[];
  destinations: Country[];
}

const seemore: NextPage<Props> = ({ arrangements, destinations }) => {
  return (
    <>
      <Head>
        <title>
          Т.А Инфинити -
          {`${
            arrangements.find((item) => item.location.country)?.location.country
          } `}
        </title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="destination-banner" />
      <div className="container-fluid py-5">
        {arrangements.length > 1 ? (
          <Title
            title={`${
              arrangements.find((item) => item.location.country)?.location
                .country
            } `}
          />
        ) : (
          <Title title="Нема понуда" />
        )}
        <div className="row">
          <div className="col-lg-3 ">
            <Calendar destinations={destinations} />
          </div>
          <div className="col-lg-9 col">
            <div className="row">
              {arrangements.length > 1 ? (
                arrangements.map((card) => (
                  <div className="col-lg-4 col-6" key={card.id}>
                    <Card data={card} key={card.id} linkTo="destinacii" />
                  </div>
                ))
              ) : (
                <Error />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default seemore;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const country = query.country_like;
  const type = query.type_like;

  let link: string;

  if (country && type) {
    link = `https://infinity-travel.glitch.me/arrangements?location.country_like=${country}&type_like=${type}`;
  } else if (country) {
    link = `https://infinity-travel.glitch.me/arrangements?location.country_like=${country}`;
  } else if (type) {
    link = `https://infinity-travel.glitch.me/arrangements?type_like=${type}`;
  } else {
    link = "https://infinity-travel.glitch.me/arrangements";
  }

  const resDestinations = await fetch(
    "https://infinity-travel.glitch.me/destinations"
  );
  const destinations: Country[] = await resDestinations.json();

  const res = await fetch(link);
  const arrangements: Arrangements[] = await res.json();

  return {
    props: { arrangements, destinations },
  };
};
