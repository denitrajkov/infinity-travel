import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  img: string;
  reverse: boolean;
};

export default function GroupTravelDesc({ title, desc, img, reverse }: Props) {
  return (
    <>
      {reverse ? (
        <div className="row d-flex align-items-center ">
          <div className="col-12 col-lg-6">
            <p className="f-32-regular">{title}</p>
            <p className="f-16-body-text-regular">{desc}</p>
          </div>
          <div className="col-12 col-lg-6">
            <Image
              src={`${img}.png`}
              alt="img"
              className="img-fluid"
              width={500}
              height={200}
            />
          </div>
        </div>
      ) : (
        <div className="row d-flex align-items-center">
          <div className="col-12 col-lg-6">
            <Image
              src={`${img}.png`}
              alt="img"
              className="img-fluid"
              width={500}
              height={200}
            />
          </div>
          <div className="col-12 col-lg-6">
            <p className="f-32-regular">{title}</p>
            <p className="f-16-body-text-regular">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
