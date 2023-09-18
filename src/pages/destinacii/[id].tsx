import Banner from "@/components/Banner";
import DetailArrangments from "@/components/DetailArrangments";
import Title from "@/components/Title";
import { Arrangements } from "@/interface/type";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  product: Arrangements;
}

const details: NextPage<Props> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Т.А Инфинти - {product.name}</title>
        <meta name="description" />
      </Head>
      <Banner bannerImg="destination-banner" />
      <Title title={product.name} />
      <DetailArrangments product={product} />
    </>
  );
};
export default details;

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

  if (id) {
    const res = await fetch(
      `https://infinity-travel.glitch.me/arrangements/${id}`
    );
    const product: Arrangements = await res.json();

    return {
      props: {
        product,
      },
    };
  }

  return {
    notFound: true,
  };
};
