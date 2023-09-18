import React, { useState } from "react";
import Button from "./Button";
import Slider from "react-slick";

interface Props {
  uniqueRegions: string[];
  activeButton: string | undefined;
  handleButtonClick: (region?: string) => void;
}

const CarouselButtons: React.FC<Props> = ({
  uniqueRegions,
  activeButton,
  handleButtonClick,
}) => {
  const [sliderSettings, setSliderSettings] = useState({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
  });
  return (
    <div className="col text-center">
      <Slider {...sliderSettings}>
        {uniqueRegions.map((region) => (
          <div key={region} className="col text-center">
            <Button
              region={region}
              onClick={() => handleButtonClick(region)}
              isActive={region === activeButton}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselButtons;
