import { Arrangements } from "@/interface/type";
import Link from "next/link";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "./Card";

import { useRouter } from "next/router";
import Button from "./Button";
import Slider from "react-slick";
import Carousel from "./Carousel";

interface Props {
  cardData: Arrangements[];
  arrow: string;
  linkTo: string;
}
function chunkArray(array: Arrangements[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}
const CardListing: React.FC<Props> = ({ cardData, arrow, linkTo }) => {
  const router = useRouter();

  const countryQuery = router.query.country_like || "";

  const [chunkedCardData, setChunkedCardData] = useState(
    chunkArray(cardData, 4)
  );

  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(
    undefined
  );

  const uniqueRegions = [
    ...new Set(cardData.map((item) => item.location.region)),
  ];

  const [activeButton, setActiveButton] = useState<string | undefined>(
    undefined
  );

  const handleButtonClick = (region?: string) => {
    if (region === activeButton) {
      setActiveButton(undefined);
    } else {
      setActiveButton(region);
    }

    if (!region) {
      setChunkedCardData(chunkArray(cardData, 4));
    } else {
      const filteredCards = cardData.filter(
        (card) => card.location.region === region
      );
      setChunkedCardData(chunkArray(filteredCards, 4));
    }
  };
  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
  });

  return (
    <div className="container-fluid">
      <div className="row text center mb-5">
        <div className="col text-center">
          <Slider {...sliderSettings}>
            {uniqueRegions.map((region) => (
              <div className="container-fluid" key={region}>
                <div className="row">
                  <div className="col text-center">
                    <Button
                      region={region}
                      onClick={() => handleButtonClick(region)}
                      isActive={region === activeButton}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row">
        <Carousel chunkedCardData={chunkedCardData} linkTo={linkTo} />
      </div>
      {!router.pathname.startsWith("/istrazijamakedonija") && (
        <div className="row mb-lg-5">
          <div className="col-4 offset-4 text-center">
            <Link
              href={{
                pathname: `/${arrow}`,
                query: { country_like: countryQuery },
              }}
              className="f-32-regular text-decoration-none text-black "
            >
              See more &gt;&gt;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default CardListing;
