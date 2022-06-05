import React from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import english from "../image/united-kingdom.png";
import arabic from "../image/united-arab-emirates.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top  bg-pattern">
        <Link to="/">
          {" "}
          <h2 className=" logo mr-3">Abd Al-Rahman Helmi</h2>
        </Link>

        <div className="  navbar-collapse" id="navbarNav">
          <ul className="navbar-nav modify   ">
            <li>
              <Link to="/about" className="nav-link effect ">
                {t("About")}
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/education" className="nav-link effect" href="#">
                {t("Education")}
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/experince" className="nav-link effect" href="#">
                {t("Work Experience")}
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/courses" className="nav-link effect" href="#">
                {t("Courses")}
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/Contact" className="nav-link effect" href="#">
                {t("Contact")}
              </Link>
            </li>
          </ul>
        </div>
        {i18n.language === "ar" && (
          <button className="btn" onClick={() => i18n.changeLanguage("en")}>
            <img src={english} alt="" width={"20px"} />
          </button>
        )}
        {i18n.language === "en" && (
          <button className="btn" onClick={() => i18n.changeLanguage("ar")}>
            <img src={arabic} alt="" width={"20px"} />
          </button>
        )}
      </nav>
    </div>
  );
}
