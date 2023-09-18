import { Arrangements } from "@/interface/type";
import React from "react";
import Card from "./Card";

interface Props {
  chunkedCardData: Arrangements[][];
  linkTo: string;
}

const Carousel: React.FC<Props> = ({ chunkedCardData, linkTo }) => {
  return (
    <div id="carouselExample" className="carousel slide position-relative col">
      <div className="carousel-inner">
        {chunkedCardData.map((chunk, chunkIndex) => (
          <div
            className={`carousel-item ${chunkIndex === 0 ? "active" : ""}`}
            key={chunkIndex}
          >
            <div className="container">
              <div className="row ">
                {chunk.map((card) => (
                  <div className="col-6 col-lg-3 mb-3" key={card.id}>
                    <Card data={card} linkTo={linkTo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev d-none d-lg-block"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="position-absolute-prevous color ">
          <img src="/prevous.png" alt="prevousimg" />
        </span>
      </button>
      <button
        className="carousel-control-next d-none d-lg-block"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="position-absolute-next color ">
          <img src="/next.png" alt="nextimg" />
        </span>
      </button>
    </div>
  );
};

export default Carousel;
