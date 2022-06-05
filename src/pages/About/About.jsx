import React from "react";
import "./About.css";
import "animate.css";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation();
  return (
    <div className="container">
      <Helmet>
        <title>About Abd Al-Rahman Helmi</title>
        <meta name="description" content="About Abd Al-Rahman Helmi" />
      </Helmet>
      <div className="up">
        <div className="jumbotron animate__animated animate__backInLeft">
          <h4 className="header ">{t("Name")}</h4>
        </div>
        <div className="jumbotron animate__animated animate__backInRight">
          <h4 className="header ">{t("Date")}</h4>
        </div>
        <div className="jumbotron animate__animated animate__backInRight">
          <h4 className="header ">{t("Nationality")} </h4>
        </div>
        <div className="jumbotron animate__animated animate__backInRight">
          <h4 className="header ">{t("Marital Status")}</h4>
        </div>
        <div className="jumbotron animate__animated animate__backInRight">
          <h4 className="header ">{t("Location")} </h4>
        </div>
      </div>
    </div>
  );
}
