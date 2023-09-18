import Banner from "@/components/Banner";
import CardListing from "@/components/CardListing";
import DetailArrangments from "@/components/DetailArrangments";
import Title from "@/components/Title";
import { Arrangements } from "@/interface/type";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  product: Arrangements;
  arrangments: Arrangements[];
}

const Izleti: NextPage<Props> = ({ product, arrangments }) => {
  return (
    <>
      <Head>
        <title>Т.А Инфинти - {product.name}</title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="izleti-banner" />
      <Title title="Излети" />
      <div className="container">
        <div className="row">
          <DetailArrangments product={product} />
        </div>
      </div>
      <Title title="Повеќе" />
      <CardListing cardData={arrangments} linkTo="Izleti" arrow="" />
    </>
  );
};
export default Izleti;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://infinity-travel.glitch.me/arrangements");
  const data: Arrangements[] = await res.json();

  const paths = data.map((prod) => {
    return {
      params: {
        id: prod.id,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;

  const res = await fetch(
    `https://infinity-travel.glitch.me/arrangements/${id}`
  );
  const product: Arrangements = await res.json();

  const resArrangments = await fetch(
    `https://infinity-travel.glitch.me/arrangements?&izleti_like=true`
  );
  const arrangments: Arrangements = await resArrangments.json();

  return {
    props: {
      product,
      arrangments,
    },
  };

  return {
    notFound: true,
  };
};
