import { Momentss } from "@/interface/type";
import React from "react";
import Image from "next/image";

interface Props {
  cardData: Momentss[];
}

export default function Moments({ cardData }: Props) {
  return (
    <div className="container-fluid py-5">
      <div className="row d-flex align-items-center mb-5">
        <div className="col-4 text-end">
          <hr className="line" />
        </div>
        <p className="col-4 text-center f-32-regular m-0">Ваши моменти</p>
        <div className="col-4">
          <hr className="line" />
        </div>
      </div>

      <div className="container-moments container">
        <div className="image-grid">
          {cardData.map((item, index) => (
            <div key={item.id}>
              <Image
                src={`/${item.img}.jpg`}
                alt=""
                className="image"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal${index}`}
                width={500}
                height={200}
              />

              <div
                className="modal fade"
                id={`exampleModal${index}`}
                aria-labelledby={`exampleModalLabel${index}`}
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content image-modal-content">
                    <Image
                      src={`/${item.img}.jpg`}
                      alt="img"
                      className="background-image rounded"
                      width={500}
                      height={200}
                    />

                    <Image
                      src="/bg-moments.png"
                      alt="bgmoments"
                      className="position-absolute img-moments"
                      width={500}
                      height={200}
                    />
                    <p className="text-overlay f-32-regular text-black">
                      <Image
                        className="card-location-moments"
                        src="/location.png"
                        alt="location"
                        width={500}
                        height={200}
                      />
                      {item.destination}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
