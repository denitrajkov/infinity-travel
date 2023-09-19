import { Arrangements, CardType } from "@/interface/type";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  data: Arrangements;
  linkTo: string;
}

const Card: React.FC<Props> = ({ data, linkTo }) => {
  return (
    <div className="card shadow rounded mb-3">
      <Image
        src={`/${data.image}.png`}
        className="card-img-top"
        alt={data.name}
        width={150}
        height={200}
      />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <p className="f-16-body-text-regular m-0">{data.name}</p>
          <div>
            {Array(data.rating)
              .fill(null)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.png"
                  className="icon-star"
                  alt={`star-${data.name}-${index}`}
                  width={20}
                  height={20}
                />
              ))}
          </div>
        </div>
        <p className="m-0 f-13-body-text-regular">
          <Image
            className="card-location"
            src="/location.png"
            alt="location"
            width={20}
            height={20}
          />
          {data.location.city}
        </p>
        <div className="d-flex justify-content-between">
          <div>
            <p className="card-text m-0 f-11-body-text-regular">
              {data.nights} ноќевања/наем сова
            </p>
            <p className="m-0 f-11-body-text-regular">
              {data.distance} од плажа
            </p>
          </div>
          <div>
            <p className="card-text m-0 f-14-body-text-regular"> од</p>
            <p className="m-0 f-17-body-text-regular">€{data.priceForNights}</p>
          </div>
        </div>
      </div>
      <Link href={`/${linkTo}/${data.id}`}>
        <button className="btn-yellow1  f-18-body-text-regular w-100">
          повеќе
        </button>
      </Link>
    </div>
  );
};
export default Card;
