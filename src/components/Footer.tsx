import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Footer: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLInputElement>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current!.value;
    const email = emailRef.current!.value;

    const formData = {
      name,
      email,
    };

    try {
      const response = await fetch("/api/sendOffer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Response from server:", data);
      nameRef.current!.value = "";
      emailRef.current!.value = "";
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const handleChatSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const chatMessage = chatRef.current!.value;

    const chatData = {
      chatMessage,
    };

    try {
      const response = await fetch("/api/chatDataMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chatData),
      });

      const data = await response.json();

      console.log("Response from server:", data);
      chatRef.current!.value = "";

      setShowThankYou(true);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <>
      <div className="container-fluid  green py-3 d-flex flex-column justify-content-center align-items-center">
        <div className="container-lg ">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="row">
                <div className="col d-flex flex-row align-items-center justify-content-center">
                  <img className="mx-3" src="/mail.png" />
                  <p className="m-0 ">
                    Пријави се и добивај актуелни <br /> понуди на твојот маил
                  </p>
                  <img
                    className="mx-3 wh-50-25"
                    src={isFormVisible ? "/vectorup.png" : "/vectordown.png"}
                    onClick={toggleForm}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>

              {isFormVisible && (
                <>
                  <form
                    className="row g-3 d-flex flex-col align-items-end py-5 transition"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-12 col-lg-4">
                      <label className="">Име</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        ref={nameRef}
                      />
                    </div>
                    <div className="col-12 col-lg-4 ">
                      <label className="">Е-маил</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        ref={emailRef}
                      />
                    </div>
                    <div className="col-12 col-lg-4">
                      <button
                        type="submit"
                        className="btn-yellow f-18-body-text-regular w-100"
                      >
                        пријави ме
                      </button>
                    </div>
                  </form>
                  <p>
                    Со кликнување на Пријави ме се зачленуваш за добивање на
                    маилови за нашите актуелни понуди и промоции
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-4">
            <h4 className="section-title  mb-4">Дестинации</h4>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item border-0 p-0">
                <Link
                  className="text-decoration-none text-dark"
                  href={{
                    pathname: "/destinacii",
                    query: { country_like: "Грција" },
                  }}
                >
                  Грција
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  className="text-decoration-none text-dark"
                  href={{
                    pathname: "/destinacii",
                    query: { country_like: "Турција" },
                  }}
                >
                  Турција
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  className="text-decoration-none text-dark"
                  href={{
                    pathname: "/destinacii",
                    query: { country_like: "Црна Гора" },
                  }}
                >
                  Црна Гора
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  className="text-decoration-none text-dark"
                  href={{
                    pathname: "/destinacii",
                    query: { country_like: "Хрватска" },
                  }}
                >
                  Хрватска
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  className="text-decoration-none text-dark"
                  href={{
                    pathname: "/destinacii",
                    query: { country_like: "Египет" },
                  }}
                >
                  Египет
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  className="text-decoration-none text-dark"
                  href={{
                    pathname: "/destinacii",
                    query: { country_like: "Италија" },
                  }}
                >
                  Италија
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  className="text-decoration-none text-dark"
                  href={{
                    pathname: "/egzoticnipatuvanja",
                    query: { exoticDestination_like: true },
                  }}
                >
                  Егзотични патувања
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-4">
            <h4 className="section-title  mb-4">Информации</h4>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item border-0 p-0">
                <Link
                  href={"/aviokarti"}
                  className="text-decoration-none text-dark"
                  aria-current="page"
                >
                  Авио Карти
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  href={"/grupnipatuvanja"}
                  className="text-decoration-none text-dark"
                  aria-current="page"
                >
                  MICE Туризам
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  href={"/grupnipatuvanja"}
                  className="text-decoration-none text-dark"
                  aria-current="page"
                >
                  Team Building
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  href={"/grupnipatuvanja"}
                  className="text-decoration-none text-dark"
                  aria-current="page"
                >
                  Tailor made
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <a href="#" className="text-decoration-none text-dark">
                  Gift card
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-4">
            <h4 className="section-title  mb-4">Останато</h4>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item border-0 p-0">
                <a href="#" className="text-decoration-none text-dark">
                  За нас
                </a>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  href={"/opsti-uslovi"}
                  className="text-decoration-none text-dark"
                >
                  Општи услови за патување
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Link
                  href={"/patnicko-osiguruvanje"}
                  className="text-decoration-none text-dark"
                >
                  Патничко осигурување
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12">
            <h4 className="section-title  mb-4">Контакт </h4>
            <p className="m-0">
              Адреса: Бул. Даме Груев бр.14 лок.24 1000 Скопје, Македонија
            </p>
            <p className="m-0">Е-маил: contact@intfinitytravel.mk</p>
            <p className="m-0">Телефон: 023100360/ 072254160</p>
            <div className="row mt-2">
              <div className="col">
                <a href="https://www.instagram.com/" target="blank">
                  <img src="/instagram.png" alt="instagram" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="ms-3"
                >
                  <img src="/facebook.png" alt="facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid purple text-white py-3 position-absolute">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="f-16-body-text-regular m-0">
                &copy;2023 Инфинити травел. Сите права се задржани
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-relative chat d-flex text-center justify-content-center align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <img src="/livechat.png" alt="livechat" />
        <p className="ms-2 mb-0 f-20-heading-semi-bold">Live chat</p>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog postion-absolute">
          <div className="modal-content modal-chat p-5">
            <img
              src="/colse-modal.png"
              alt="close-modal"
              className="close-modal position-relative"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowThankYou(false)}
            />
            {showThankYou && (
              <>
                <p className="f-14-body-text-regular m-0 chat-text">
                  Ви благодариме што не исконтактиравте
                </p>
                <span>{currentTime}</span>
              </>
            )}

            <form onSubmit={handleChatSubmit} className="row form-chat">
              <div className="col-7">
                <input
                  ref={chatRef}
                  type="text"
                  className="form-control chat-text "
                />
              </div>
              <div className="col-5">
                <button
                  type="submit"
                  className="btn btn-chat mb-3 text-uppercase "
                >
                  испрати
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
