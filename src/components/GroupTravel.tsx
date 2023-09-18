import Link from "next/link";
import React from "react";

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
              <img src="/cubes.jpg" className="absolute-img-cubes" />
              <img
                src="/grouptravel.jpg"
                className="absolute-img-grouptravel-left"
              />
              <img
                src="/grouptravel2.png"
                className="absolute-img-grouptravel-right"
              />
              <img src="/imgcard.jpg" className="absolute-img-rotation" />
              <img src="/imgcard.jpg" className="absolute-img-down" />
              <img src="/london.png" className="absolute-img-london" />
              <img src="/istambul.png" className="absolute-img-istanbul" />
              <img src="/linii.png" className="absolute-img-linii" />
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
            <img src="/bag.png" className="mb-3 img-fluid images" />
            <p className="f-16-body-text-regular m-0">1000+ патувања</p>
            <img src="/lepenka.png" className="mb-3  absolute-img-top" />
          </div>
          <div className="col-4 col-md-4 d-flex flex-column align-items-center justify-content-center text-center">
            <img src="/global-network.png" className="mb-3 img-fluid images" />
            <p className="f-16-body-text-regular m-0">15000+ патници годишно</p>
          </div>
          <div className="col-4 col-md-4 d-flex flex-column align-items-center justify-content-center text-center">
            <img src="/location.png" className="mb-3 img-fluid images" />
            <p className="f-16-body-text-regular m-0 p-3">
              Одберете ја вашата дестинација
            </p>
            <img src="/lepenka.png" className="mb-3  absolute-img-bottom" />
          </div>
          <img
            src="/bg-info-patuvanja.png"
            className="mb-3 absolute-position "
          />
        </div>
      </div>
    </>
  );
}
