import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const inputValue = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleDropdownToggle = () => {
    setIsDropDown(!isDropDown);
  };
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

  const toggleMobileFilter = () => {
    setMobileFilterVisible(!mobileFilterVisible);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg purple1">
        <div className="container-fluid">
          <Link className="navbar-brand" href={"/"}>
            <img src="/logo.png" alt="logo" />
          </Link>
          <div className="row">
            <div className="col-6 d-lg-none">
              <form onSubmit={handleSubmit} className="box me-3">
                <input type="text" ref={inputValue} placeholder="Search..." />
                <a href="#">
                  <img
                    src="/search-navbar.png"
                    className="search-navbar "
                    alt="search-navbar"
                  />
                </a>
              </form>
            </div>
            <div className="col-6">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleMenuToggle}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className={` ${router.pathname === "/" ? "active" : " "} `}>
                <Link
                  href={"/"}
                  className="nav-link  underline-hover-effect"
                  aria-current="page"
                >
                  Дома
                </Link>
              </li>
              <li
                className={`nav-item dropdown underline-hover-effect ${
                  router.pathname === "/Дестинации" ? "active" : " "
                } `}
              >
                <a
                  className="nav-link  dropdown-toggle"
                  href="#"
                  role="button"
                  onClick={handleDropdownToggle}
                >
                  Дестинации
                </a>
                <ul
                  className={`z-index dropdown-menu ${
                    isDropDown ? "show" : ""
                  }`}
                >
                  <li>
                    <Link
                      onClick={handleDropdownToggle}
                      className="dropdown-item"
                      href={{
                        pathname: "/destinacii",
                        query: { country_like: "Грција" },
                      }}
                    >
                      Грција
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleDropdownToggle}
                      className="dropdown-item"
                      href={{
                        pathname: "/destinacii",
                        query: { country_like: "Турција" },
                      }}
                    >
                      Турција
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleDropdownToggle}
                      className="dropdown-item"
                      href={{
                        pathname: "/destinacii",
                        query: { country_like: "Албанија" },
                      }}
                    >
                      Албанија
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleDropdownToggle}
                      className="dropdown-item"
                      href={{
                        pathname: "/destinacii",
                        query: { country_like: "Хрватска" },
                      }}
                    >
                      Хрватска
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleDropdownToggle}
                      className="dropdown-item"
                      href={{
                        pathname: "/destinacii",
                        query: { country_like: "Црна Гора" },
                      }}
                    >
                      Црна Гора
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleDropdownToggle}
                      className="dropdown-item"
                      href={{
                        pathname: "/destinacii",
                        query: { country_like: "Италија" },
                      }}
                    >
                      Италија
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleDropdownToggle}
                      className="dropdown-item"
                      href={{
                        pathname: "/destinacii",
                        query: { country_like: "Шпанија" },
                      }}
                    >
                      Шпанија
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleDropdownToggle}
                      className="dropdown-item "
                      href={{
                        pathname: "/egzoticnipatuvanja",
                        query: { exoticDestination_like: true },
                      }}
                    >
                      Егзотични патувања
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`nav-item ${
                  router.pathname === "/grupnipatuvanja" ? "active" : " "
                } `}
              >
                <Link
                  href={"/grupnipatuvanja"}
                  className="nav-link underline-hover-effect"
                  aria-current="page"
                >
                  Групни патувања
                </Link>
              </li>
              <li
                className={`nav-item ${
                  router.pathname === "/aviokarti" ? "active" : " "
                } `}
              >
                <Link
                  href={"/aviokarti"}
                  className="nav-link underline-hover-effect"
                  aria-current="page"
                >
                  Авио Карти
                </Link>
              </li>
              <li
                className={`nav-item ${
                  router.pathname === "/istrazijamakedonija" ? "active" : " "
                } `}
              >
                <Link
                  className="nav-link underline-hover-effect"
                  href={{
                    pathname: "/istrazijamakedonija",
                    query: { country_like: "Македонија" },
                  }}
                  aria-current="page"
                >
                  Истражи ја Македонија
                </Link>
              </li>
              <li
                className={`nav-item ${
                  router.pathname === "/za-nas" ? "active" : " "
                } `}
              >
                <Link
                  href={{
                    pathname: "/za-nas",
                  }}
                  className="nav-link underline-hover-effect"
                  aria-current="page"
                >
                  За нас
                </Link>
              </li>
              <li className="nav-item underline-hover-effect">
                <a className="nav-link " aria-current="page" href="#">
                  02/3100-360
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
