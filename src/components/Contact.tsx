import React, { useRef } from "react";

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    const message = messageRef.current!.value;

    const formData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch("/api/sendMessage", {
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
      messageRef.current!.value = "";
    } catch (error) {
      console.error("Error sending request:", error);
    }
    alert("Успешно го оставивте Вашиот контакт");
  };
  return (
    <>
      <div className="row d-flex align-items-center mb-5 py-lg-5">
        <div className="col-4 text-end">
          <hr className="line" />
        </div>
        <p className="col-4 text-center f-32-regular m-0">Контакт</p>
        <div className="col-4">
          <hr className="line" />
        </div>
      </div>

      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-12">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3 m-0">
              <div className="col-6 form-css">
                <input
                  ref={nameRef}
                  type="text"
                  required
                  className="form__input"
                  autoComplete="off"
                  placeholder=" "
                />
                <label className="form__label">Вашето име</label>
              </div>
              <div className="col-6 form-css">
                <input
                  ref={emailRef}
                  type="email"
                  className="form__input"
                  autoComplete="off"
                  required
                  placeholder=" "
                />
                <label className="form__label">Вашиот емаил</label>
              </div>
            </div>

            <div className="row mb-3 form-css w-100 m-0">
              <div className="col">
                <textarea
                  className="form__input "
                  ref={messageRef}
                  autoComplete="off"
                  required
                  placeholder=" "
                ></textarea>
                <label className="form__label">Порака</label>
              </div>
            </div>

            <div className="text-lg-end text-center ">
              <button
                type="submit"
                className="btn-send text-center f-20-heading-semi-bold"
              >
                ПОБАРАЈ ПОНУДА
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6 ps-lg-5 d-none d-lg-block">
          <h4 className="section-title  mb-4">Контакт </h4>
          <p className="m-0">
            Адреса: Бул. Даме Груев бр.14 лок.24 1000 Скопје, Македонија
          </p>
          <p className="m-0">Е-маил: contact@intfinitytravel.mk</p>
          <p className="m-0">Телефон: 023100360/ 072254160</p>
        </div>
      </div>
    </>
  );
}
