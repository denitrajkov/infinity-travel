import { TestimonalCard } from "@/interface/type";
import React from "react";
import Image from "next/image";

interface Props {
  data: TestimonalCard;
}

const TestimonialCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="col-lg-4 col-6 col-12 mb-5">
      <div className="card shadow ">
        <div className="card-img-wrapper ">
          <Image
            src={`/${data.image}.png`}
            className="card-img-top mb-4"
            alt="img"
            width={100}
            height={250}
          />

          <Image
            src="/layertestimonial.png"
            className="additional-image"
            alt="img"
            width={100}
            height={30}
          />
          <div className="card-body">
            <p className="card-title f-24-heading-semi-bold m-0">
              {data.title}
            </p>
            <div>
              {Array(data.rating)
                .fill(null)
                .map((_, index) => (
                  <Image
                    key={index + 1}
                    src="/star.png"
                    className="icon-star"
                    alt={`star-${data.title}-${index}`}
                    width={20}
                    height={20}
                  />
                ))}
            </div>
            <p className="card-text f-18-body-text-regular ">
              {data.description}
            </p>
            <p className="f-20-heading-semi-bold m-0">{data.arrangement}</p>
            <Image
              src="/underline.png"
              alt="underline"
              width={150}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
