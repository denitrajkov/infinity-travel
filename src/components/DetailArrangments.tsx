import { Arrangements } from "@/interface/type";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  product: Arrangements;
}

const DetailArrangments: React.FC<Props> = ({ product }) => {
  const router = useRouter();

  return (
    <div className="container">
      <div className="row d-none d-lg-block">
        <div className="col d-flex justify-content-between">
          <ul className="list-group list-group-flush d-flex flex-row ">
            <li className="list-group-item border-0 p-0 me-2">
              <a
                href="#description"
                className="text-decoration-none text-dark  f-26-heading"
              >
                Опис
              </a>
            </li>
            <li className="list-group-item border-0 p-0 me-2">
              <a
                href="#gallery"
                className="text-decoration-none text-dark f-26-heading"
              >
                Галерија
              </a>
            </li>
            <li className="list-group-item border-0 p-0 me-2">
              <a
                href="#price"
                className="text-decoration-none text-dark f-26-heading"
              >
                Цени
              </a>
            </li>
            {!router.pathname.startsWith("/Izleti") && (
              <li className="list-group-item border-0 p-0">
                <a
                  href="#transport"
                  className="text-decoration-none text-dark f-26-heading"
                >
                  Превоз
                </a>
              </li>
            )}
          </ul>
          <p className="m-0  f-26-heading">
            <img
              className=" card-location1"
              src="/location.png"
              alt="location"
            />
            {product.location.city}, {product.location.country}
          </p>
        </div>
      </div>
      <div className="row" id="description">
        <div className="col">
          <p className="f-26-heading">{product.name}</p>

          <p className="mb-5 f-16-body-text-regular ">{product.description}</p>
          <p className="f-16-body-text-regular ">{product.description}</p>
        </div>
      </div>

      <div className="row py-5" id="gallery">
        {product.gallery.map((item, index) => (
          <div className="col-6 col-lg-3  mb-3" key={index}>
            <img src={`/${item.url}.png`} />
          </div>
        ))}
      </div>
      {router.pathname.startsWith("/Izleti") ? (
        <>
          <div className="row py-5" id="transport">
            <div className="col">
              <p className="f-16-body-text-regular ">
                {product.transportationDescription}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row" id="price">
            <div className="col">
              <p className="f-26-heading">Цени</p>
              <div className="table-responsive">
                <table className="table text-center table-striped table-hover table-sm">
                  <thead>
                    <tr>
                      <th scope="col " className="bg-green">
                        Период
                      </th>
                      <th scope="col" className="bg-green">
                        Број на ноќевања
                      </th>
                      <th scope="col" className="bg-green">
                        2 + 1 (3 лица)
                      </th>
                      <th scope="col" className="bg-green">
                        3 + 1 (4 лица)
                      </th>
                      <th scope="col" className="bg-green">
                        Апартман (5 лица)
                      </th>
                    </tr>
                  </thead>
                  {product && product.prices && (
                    <tbody>
                      {product.prices.map((price) => (
                        <tr key={price.id}>
                          <td>{price.date}</td>
                          <td>{price.nights}</td>
                          <td>{price.typeOne}</td>
                          <td>{price.typeTwo}</td>
                          <td>{price.smallAppartment}</td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
              <p>Цените се изразени во евра</p>
            </div>
          </div>
          <div className="row py-5" id="transport">
            <div className="col">
              <p className="f-26-heading">Превоз</p>
              <p className="f-16-body-text-regular ">
                {product.transportationDescription}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailArrangments;
