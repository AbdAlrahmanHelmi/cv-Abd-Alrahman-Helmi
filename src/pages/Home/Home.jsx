import React from "react";
import "./Home.css";
import img1 from "../../image/abd alrahman helmi.png";
import "animate.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation();

  return (
    <div className="container">
      <div className="card animate__animated animate__backInLeft">
        <img src={img1} className="card-img-top " alt="..." />
        <h4 className="observ">
        {t("Home")}
        </h4>
      </div>
    </div>
  );
}
