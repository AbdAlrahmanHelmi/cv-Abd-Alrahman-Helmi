import React from "react";
import gmail from "../../image/icons8-gmail-64.png";
import linkedin from "../../image/icons8-linkedin-circled-48.png";
import phone from "../../image/icons8-phone-48.png";
import whatsapp from "../../image/icons8-whatsapp-48.png";
import githup from "../../image/icons8-github-64.png";
import contact from "./contact.css";
import Helmet from "react-helmet";

export default function Contact() {
  return (
    <div className="container">
      <Helmet>
      <title>Contact Abd Al-Rahman Helmi</title>
        <meta name="description" content="Contact Abd Al-Rahman Helmi" />
      </Helmet>
      <div className="contact mt-4  animate__animated animate__zoomInDown  ">
        <h2 className="headerContact  ">Contact:</h2>
        <div className="marginTop">
          <div className="d-flex  ml-2 mt-4">
            <img src={gmail} alt="email logo" />
            <h5 className="mt-4 ml-2">abdhelmi2018@gmail.com</h5>
          </div>

          <div className="d-flex mt-4 ml-2 ">
            <img src={linkedin} alt="email logo" />
            <h5 className="mt-2 ml-2">
              <a
                href="https://www.linkedin.com/in/abd-alrahman-helmi/
"
              >
                www.linkedin.com/in/abd-alrahman-helmi/
              </a>
            </h5>
          </div>
          <div className="d-flex mt-4 ml-2">
            <img src={phone} alt="email logo" />
            <h5 className="mt-2 ml-2">+962797041763</h5>
          </div>
          <div className="d-flex mt-4 ml-2">
            <img src={whatsapp} alt="email logo" />
            <h5 className="mt-2 ml-2">+962797041763</h5>
          </div>
          <div className="d-flex mt-4 ml-2">
            <img src={githup} alt="email logo" />
            <h5 className="mt-2 ml-2">
              <a href="https://github.com/AbdAlrahmanHelmi">
                github.com/AbdAlrahmanHelmi
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
