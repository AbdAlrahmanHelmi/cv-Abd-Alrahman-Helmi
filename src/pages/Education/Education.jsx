import React from "react";
import "animate.css";
import img2 from "../../image/philadelphia.jpg";
import "./education.css";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Education() {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <Helmet>
        <title>Education </title>
        <meta name="description" content="Education Abd Al-Rahman Helmi" />
      </Helmet>
      <div className="d-md-flex ">
        <div className="d-flex justify-content-start ml-4 mt-4 animate__animated animate__backInLeft">
          <div className="edu ">
            <h3>{t("Bachelor")}</h3>
            <h4>{t("Electrical Engineering")}</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center ml-4 mt-4 animate__animated animate__backInLeft">
          <div className="edu ">
            <h3>{t("Philadelphia University")}</h3>
            <h4>{t("Amman")}</h4>
          </div>
        </div>
        <div className="d-flex justify-content-end ml-4 animate__animated  animate__backInRight">
          <div className="mt-2">
            <img
              src={img2}
              alt="philadelphia"
              className="img-thumbnail img-ph"
            />
          </div>
        </div>
      </div>
      <div className="d-flex mt-0">
        <div className="d-flex justify-content-start ml-4 mt-4 animate__animated animate__rubberBand">
          <div className="gpa ">
            <h3 className="text">{t("GPA")}</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center ml-4 mt-4 animate__animated animate__fadeInUpBig">
          <div className="gpa ">
            <h3 className="text">{t("GOOD")}</h3>
          </div>
        </div>
      </div>
      <div className="d-md-flex">
        <div className="d-flex justify-content-start ml-4 mt-4 animate__animated animate__rotateInDownLeft">
          <div className="school ">
            <h3 className="text">{t("High School")} </h3>
          </div>
        </div>
        <div className="d-flex justify-content-center ml-4 mt-4 animate__animated animate__rotateInDownRight">
          <div className="school ">
            <h5 className="text">
              {t("Schools")} <br /> {t("Amman")}
              <br /> 2013
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
