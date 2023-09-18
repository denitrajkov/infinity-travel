import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import GroupTravelDesc from "@/components/GroupTravelDesc";
import Title from "@/components/Title";
import { Arrangements } from "@/interface/type";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  arrangements: Arrangements[];
}

const grupnipatuvanja: NextPage<Props> = ({ arrangements }) => {
  return (
    <>
      <Head>
        <title>Т.А Инфинти - Групни патувања</title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="group-travel-banner" />
      <Title title="Групни патувања" />
      <div className="container py-3">
        <GroupTravelDesc
          title="MICE Tourism"
          img="/gruptravel"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
          reverse={true}
        />
        <GroupTravelDesc
          title="Team Building"
          img="/gruptravel"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
          reverse={false}
        />
        <GroupTravelDesc
          title="Tailor Made"
          img="/gruptravel"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim "
          reverse={true}
        />
        <Contact />
      </div>
    </>
  );
};

export default grupnipatuvanja;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const location = query.countrytype_like;

  console.log(location);

  let link: string;
  let link1: string;

  if (location) {
    link = `https://infinity-travel.glitch.me/arrangements?location.country_like=${location}&type_like=appartment`;
  } else {
    link = "https://infinity-travel.glitch.me/arrangements";
  }

  const res = await fetch(link);
  const arrangements: Arrangements[] = await res.json();

  return {
    props: { arrangements },
  };
};
