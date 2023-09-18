import { TestimonalCard } from "@/interface/type";
import React from "react";

interface Props {
  data: TestimonalCard;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="col-lg-4 col-6 mb-5">
      <div className="card shadow ">
        <div className="card-img-wrapper ">
          <img src={`/${data.image}.png`} className="card-img-top" alt="img" />
          <img
            src="/layertestimonial.png"
            className="additional-image"
            alt="img"
          />
          <div className="card-body">
            <p className="card-title f-24-heading-semi-bold m-0">
              {data.title}
            </p>
            <div className="mb-4">
              {Array(data.rating)
                .fill(null)
                .map((_, index) => (
                  <img
                    key={index + 1}
                    src="/star.png"
                    className="icon-star"
                    alt={`star-${data.title}-${index}`}
                  />
                ))}
            </div>
            <p className="card-text f-18-body-text-regular p-100">
              {data.description}
            </p>
            <p className="f-20-heading-semi-bold m-0">{data.arrangement}</p>
            <img src="/underline.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
