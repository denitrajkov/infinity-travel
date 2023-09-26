import Link from "next/link";
import React, { useRef } from "react";

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    const lastName = lastnameRef.current!.value;
    const number = numberRef.current!.value;

    const formData = {
      name,
      lastName,
      email,
      number,
    };

    try {
      const response = await fetch("/api/dataContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      nameRef.current!.value = "";
      emailRef.current!.value = "";
      lastnameRef.current!.value = "";
      numberRef.current!.value = "";
    } catch (error) {
      console.error("Error sending request:", error);
    }
    alert("Успешно испративте понуда за резервација на билет");
  };
  return (
    <div className="container p-5">
      <div className="row d-flex align-items-center ">
        <div className="col-lg-6 offset-lg-3 col-12 bg-gray p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 ">
              <div className="row">
                <div className="col-6 ">
                  <label className="form-label">Име</label>
                  <input
                    ref={nameRef}
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Презиме</label>
                  <input
                    ref={lastnameRef}
                    type="text"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label className="form-label">Е-маил</label>
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-6 ">
                  <label className="form-label">Телефон</label>
                  <input
                    ref={numberRef}
                    type="tel"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-6 ">
                  <Link
                    type="submit"
                    className="btn-send f-20-heading-semi-bold"
                    href={"/"}
                  >
                    ПОБАРАЈ ПОНУДА
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
