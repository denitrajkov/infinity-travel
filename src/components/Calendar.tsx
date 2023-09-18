import { Country } from "@/interface/type";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

interface Props {
  destinations: Country[];
}

const CalendarFilter: React.FC<Props> = ({ destinations }) => {
  const [accordionOpen, setAccordionOpen] = useState<Record<string, boolean>>({
    accordion1: false,
    accordion2: false,
    accordion3: false,
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const toggleAccordion = (accordionName: string) => {
    setAccordionOpen((prevState) => ({
      ...prevState,
      [accordionName]: !prevState[accordionName],
    }));
  };
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
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);

    router.push({
      pathname: "/SeeMore",
      query: {
        ...router.query,
        country_like: selectedValue,
      },
    });
  };
  const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);

    router.push({
      pathname: "/SeeMore",
      query: {
        ...router.query,
        type_like: selectedValue,
      },
    });
  };
  const [mobileFilterVisible, setMobileFilterVisible] = useState(false);

  const toggleMobileFilter = () => {
    setMobileFilterVisible(!mobileFilterVisible);
  };

  const [value, onChange] = useState(new Date());
  return (
    <div className="container-fluid bg-filter ">
      <div className="row py-5">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="input-group w-100">
              <div className="form-outline">
                <input
                  ref={inputValue}
                  type="search"
                  className="input-search border-radius-input"
                />
              </div>
              <button type="button" className="btn-search border-radius-img">
                <Image
                  src="/search.png"
                  alt="searchImg"
                  width={30}
                  height={30}
                />
              </button>

              <Image
                src="/openfilter.png"
                alt="openfilter"
                className="ms-2 d-lg-none"
                onClick={toggleMobileFilter}
                width={40}
                height={40}
              />
            </div>
          </form>
        </div>
      </div>

      <div
        className={`row  d-lg-block  ${
          mobileFilterVisible ? "d-block bg-filter1 p-2" : "animation d-none"
        }`}
      >
        <div className="col ">
          <Calendar value={value}></Calendar>
        </div>
      </div>

      <div
        className={`row py-5 mb-3 d-lg-block  ${
          mobileFilterVisible ? "d-block bg-filter1" : "d-none"
        }`}
      >
        <div className="col">
          <div className="row">
            <div className="col border-bottom-down ">
              <button
                className=" border-0 w-100 text-start py-3 d-flex justify-content-between align-items-center"
                onClick={() => toggleAccordion("accordion1")}
              >
                Дестинација
                <Image
                  src="/vectordown.png"
                  alt="vectordown"
                  className={`vectodown-filter ${
                    accordionOpen.accordion1 ? "open" : ""
                  }`}
                  width={40}
                  height={40}
                />
              </button>
              {accordionOpen.accordion1 && (
                <div>
                  {destinations.map((item) => (
                    <div key={item.id}>
                      <input
                        type="radio"
                        value={item.destination}
                        checked={selectedCountry === item.destination}
                        onChange={handleRadioChange}
                      />
                      <label>{item.destination}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <button
                className=" border-0 w-100 text-start py-3 d-flex justify-content-between align-items-center"
                onClick={() => toggleAccordion("accordion2")}
              >
                Цена
                <Image
                  src="/vectordown.png"
                  alt="vectordown"
                  className={`vectodown-filter ${
                    accordionOpen.accordion2 ? "open" : ""
                  }`}
                  width={40}
                  height={40}
                />
              </button>
              {accordionOpen.accordion2 && (
                <div>
                  <div>
                    <label>Цена EUR</label>
                    <input type="range" min="100" max="1500" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col border-bottom-down">
              <button
                className=" border-0 w-100 text-start py-3 d-flex justify-content-between align-items-center"
                onClick={() => toggleAccordion("accordion3")}
              >
                Тип на сместување
                <Image
                  src="/vectordown.png"
                  alt="vectordown"
                  className={`vectodown-filter ${
                    accordionOpen.accordion3 ? "open" : ""
                  }`}
                  width={40}
                  height={40}
                />
              </button>
              {accordionOpen.accordion3 && (
                <div>
                  <div>
                    <input
                      type="radio"
                      value="hotel"
                      checked={selectedType === "hotel"}
                      onChange={handleType}
                    />
                    <label>Хотел</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      value="appartment"
                      checked={selectedType === "appartment"}
                      onChange={handleType}
                    />
                    <label>Апартман</label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarFilter;
