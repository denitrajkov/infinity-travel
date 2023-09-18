import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
interface Props {
  bannerImg: string;
}
const Banner: React.FC<Props> = ({ bannerImg }) => {
  const inputValue = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let value = inputValue?.current?.value;

    router.push({
      pathname: "/SeeMore",
      query: {
        country_like: value,
      },
    });
    if (inputValue.current) {
      inputValue.current.value = "";
    }
  };
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);

  return (
    <div
      className="container-fluid  p-lg-5 bg-image"
      style={{
        backgroundImage: `url('/${bannerImg}.png')`,
        height: "calc(100vh - 97px)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row padding-70">
          <div className="col-md-4 p-5 yellow-bg-img">
            <p className="f-26-heading-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p className="f-16-body-text-regular">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>

            <form
              onClick={handleSubmit}
              className={` d-lg-block  ${
                mobileFilterVisible ? "d-block" : "d-none"
              }`}
            >
              <div className="input-group w-100">
                <div className="form-outline">
                  <input
                    type="search"
                    className="input-search border-radius-input"
                    ref={inputValue}
                  />
                </div>

                <button type="button" className="btn-search border-radius-img">
                  <img src="/search.png" alt="searchImg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
