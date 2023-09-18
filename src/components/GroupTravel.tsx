import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function GroupTravel() {
  const noMargin = {
    margin: "0",
  };

  return (
    <>
      <div className="container pt-5">
        <div className="row py-5 d-flex flex-row mb-5">
          <div className="col">
            <div className="d-flex flex-row position-relative">
              <Image
                src="/cubes.jpg"
                className="absolute-img-cubes"
                alt="cubes"
                width={1000}
                height={400}
              />

              <Image
                src="/grouptravel.jpg"
                className="absolute-img-grouptravel-left"
                alt="cubes"
                width={200}
                height={200}
              />

              <Image
                src="/grouptravel2.png"
                className="absolute-img-grouptravel-right"
                alt="cubes"
                width={200}
                height={200}
              />

              <Image
                src="/imgcard.jpg"
                className="absolute-img-rotation"
                alt="cubes"
                width={200}
                height={200}
              />

              <Image
                src="/imgcard.jpg"
                className="absolute-img-down"
                alt="cubes"
                width={200}
                height={200}
              />
              <Image
                src="/london.png"
                className="absolute-img-london"
                alt="london"
                width={200}
                height={200}
              />

              <Image
                src="/istambul.png"
                className="absolute-img-istanbul"
                alt="istambul"
                width={200}
                height={200}
              />
              <Image
                src="/linii.png"
                className="absolute-img-linii"
                alt="linii"
                width={200}
                height={200}
              />
              <div
                className=" p-lg-5 p-3 absolute-img-vector1"
                style={{
                  backgroundImage: "url('/Vector1.png')",
                  backgroundSize: "cover",
                  padding: "20px 10px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "26px",
                      lineHeight: "35.41px",
                      fontWeight: "700",
                    }}
                  >
                    Групни патувања
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "21.79px",
                      fontWeight: "400",
                    }}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                  <button className="btn-yellow f-18-body-text-regular w-100">
                    <Link
                      href={"/grupnipatuvanja"}
                      className="text-decoration-none text-black"
                    >
                      Повеќе
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row  py-5 d-flex flex-wrap align-items-center justify-content-center position-relative mt-5">
          <div className="col-4 col-md-4 d-flex flex-column align-items-center justify-content-center text-center position-relative">
            <Image
              src="/bag.png"
              className="mb-3 img-fluid images"
              alt="sticker"
              width={200}
              height={200}
            />
            <p className="f-16-body-text-regular m-0">1000+ патувања</p>
            <Image
              src="/lepenka.png"
              className="mb-3  absolute-img-top"
              alt="sticker"
              width={200}
              height={200}
            />
          </div>
          <div className="col-4 col-md-4 d-flex flex-column align-items-center justify-content-center text-center">
            <Image
              src="/global-network.png"
              className="mb-3 img-fluid images"
              alt="sticker"
              width={200}
              height={200}
            />
            <p className="f-16-body-text-regular m-0">15000+ патници годишно</p>
          </div>
          <div className="col-4 col-md-4 d-flex flex-column align-items-center justify-content-center text-center">
            <Image
              src="/location.png"
              className="mb-3 img-fluid images"
              alt="sticker"
              width={200}
              height={200}
            />
            <p className="f-16-body-text-regular m-0 p-3">
              Одберете ја вашата дестинација
            </p>
          </div>

          <Image
            src="/bg-info-patuvanja.png"
            className="mb-3 absolute-position "
            alt="sticker"
            width={200}
            height={200}
          />
        </div>
      </div>
    </>
  );
}
