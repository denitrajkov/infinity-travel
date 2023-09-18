import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Title from "@/components/Title";
import Head from "next/head";
export default function index() {
  return (
    <>
      <Head>
        <title>Т.А Инфинти - За нас</title>
        <meta name="description" />
      </Head>

      <Banner bannerImg="global-banner" />
      <Title title="За нас" />
      <AboutUs />
      <div className="container py-5">
        <Contact />
      </div>
    </>
  );
}
