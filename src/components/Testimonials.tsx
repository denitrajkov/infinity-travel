import { TestimonalCard } from "@/interface/type";
import React from "react";
import TestimonialCard from "./TestimonialCard";

interface Props {
  dataTestimonialsCard: TestimonalCard[];
}

const Testimonials: React.FC<Props> = ({ dataTestimonialsCard }) => {
  return (
    <div className="container-fluid py-lg-5 py-0">
      <div className="row d-flex align-items-center mb-5">
        <div className="col-4 text-end">
          <hr className="line" />
        </div>
        <p className="col-4 text-center f-32-regular m-0">Тестимониал</p>
        <div className="col-4">
          <hr className="line" />
        </div>
      </div>

      <div className="bg-image d-flex justify-content-center align-items-center container">
        <div className="container container-lg p-4">
          <div className="row d-flex justify-content-center align-items-center">
            {dataTestimonialsCard.map((item) => (
              <TestimonialCard data={item} key={item.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
