import Link from "next/link";
import React, { useRef, useState } from "react";

export default function Tickets() {
  const [selectedTicket, setSelectedTicket] = useState("");
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);
  const dateDepartureRef = useRef<HTMLInputElement>(null);
  const dateArrivalRef = useRef<HTMLInputElement>(null);
  const adultsRef = useRef<HTMLSelectElement>(null);
  const childrenRef = useRef<HTMLSelectElement>(null);
  const babyRef = useRef<HTMLSelectElement>(null);
  const classRef = useRef<HTMLSelectElement>(null);
  const handleTicketChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTicket(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const from = fromRef.current!.value;
    const to = toRef.current!.value;
    const dateDeparture = dateDepartureRef.current!.value;
    const dateArrival = dateArrivalRef.current!.value;
    const adults = adultsRef.current!.value;
    const children = childrenRef.current!.value;
    const baby = babyRef.current!.value;
    const classs = classRef.current!.value;

    const formData = {
      ticketType: selectedTicket,
      from,
      to,
      dateDeparture,
      dateArrival,
      adults,
      children,
      baby,
      classs,
    };

    try {
      const response = await fetch("/api/reserveTickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Response from server:", data);

      fromRef.current!.value = "";
      toRef.current!.value = "";
      dateDepartureRef.current!.value = "";
      dateArrivalRef.current!.value = "";
      adultsRef.current!.value = "";
      childrenRef.current!.value = "";
      babyRef.current!.value = "";
      classRef.current!.value = "";
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };
  return (
    <div className="container pb-5">
      <div className="row bg-gray p-4">
        <div className="col ">
          <p className="f-36-regular m-0">Пребарувај</p>
          <form onSubmit={handleSubmit} className="py-5">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                defaultValue="повратен билет"
                checked={selectedTicket === "повратен билет"}
                onChange={handleTicketChange}
              />
              <label className="form-check-label f-20-heading-semi-bold">
                Повратен билет
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                checked={selectedTicket === "еден правец"}
                defaultValue="еден правец"
                onChange={handleTicketChange}
              />
              <label className="form-check-label f-20-heading-semi-bold">
                Еден правец
              </label>
            </div>
            <div className="row py-3">
              <div className="col-lg-3 col-6">
                <label className="form-label">Од</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Внесете место на поаѓање"
                  required
                  ref={fromRef}
                  defaultValue=""
                  onChange={handleTicketChange}
                />
              </div>
              <div className="col-lg-3 col-6">
                <label className="form-label">До</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Внесете место на дестинација"
                  required
                  ref={toRef}
                  value=""
                  onChange={handleTicketChange}
                />
              </div>
              <div className="col-lg-3 col-6">
                <label className="form-label">Датум на поаѓање</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  ref={dateDepartureRef}
                  onChange={handleTicketChange}
                />
              </div>
              <div className="col-lg-3 col-6">
                <label className="form-label">Датум на враќање</label>
                <input
                  type="date"
                  className="form-control"
                  required
                  ref={dateArrivalRef}
                  onChange={handleTicketChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-6">
                <label className="form-label">Возрасни</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  ref={adultsRef}
                  defaultValue="0"
                  onChange={handleTicketChange}
                >
                  <option selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="col-lg-3 col-6">
                <label className="form-label">Деца</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  ref={childrenRef}
                  defaultValue="0"
                  onChange={handleTicketChange}
                >
                  <option selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="col-lg-3 col-6">
                <label className="form-label">Бебиња</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  ref={babyRef}
                  defaultValue="0"
                  onChange={handleTicketChange}
                >
                  <option selected>0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-lg-3 col-6">
                <label className="form-label">Класа</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  ref={classRef}
                  defaultValue="Класа"
                  onChange={handleTicketChange}
                >
                  <option selected>Внесете класа</option>
                  <option value="Економска">Економска</option>
                  <option value="Класа">Класа</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 pt-5 col">
                <Link
                  className="btn-yellow  width-100 "
                  href={{
                    pathname: "/aviokarti/aviokarti-contact",
                  }}
                >
                  побарај понуда
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
