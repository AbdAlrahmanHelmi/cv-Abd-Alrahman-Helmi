import React from "react";

import "./workExperince.css";
import img3 from "../../image/Elba.jpg";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
export default function WorkExperince() {
  const [t, i18n] = useTranslation();
  return (
    <div className="container">
      <Helmet>
        <title>Experince Abd Al-Rahman Helmi</title>
        <meta name="description" content="Work experince Abd Al-Rahman Helmi" />
      </Helmet>
      <div className="mt-4">
        <h2 className="work">{t("Work Experience")}</h2>
        <div className="d-flex mt-4 ml-4">
          <h3 className="  animate__animated animate__zoomInDown">
            {t("Elba")}
          </h3>
          <span className="ml-4">
            <img
              className="elba animate__animated animate__rollIn"
              src={img3}
              alt="elba-logo"
            />
          </span>
        </div>
        <ol className="order">
          <h2>{t("Maintenance")}</h2>
          <li>
            <h6>{t("Performing")}</h6>
          </li>
          <li>
            <h6>{t("Responding")}</h6>
          </li>
          <li>
            <h6>{t("Repair")}</h6>
          </li>
          <li>
            <h6>{t("Diagnose")}</h6>
          </li>
          <li>
            <h6> {t("Always")}</h6>
          </li>
          <li>
            <h6> {t("Perform")}</h6>
          </li>
          <li>
            <h6> {t("Working")}</h6>
          </li>
        </ol>
        <ol className="order">
          <h2> {t("Production")}</h2>
          <li>
            <h6>{t("assembling")}</h6>
          </li>
          <li>
            <h6>{t("Read")}</h6>
          </li>
          <li>
            <h6>{t("Knowledge")}</h6>
          </li>
          <li>
            <h6>{t("Monitor")}</h6>
          </li>
        </ol>
      </div>
    </div>
  );
}
