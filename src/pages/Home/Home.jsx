import React from "react";
import home from "./Home.css";
import img1 from "../../image/abd alrahman helmi.png";
import 'animate.css';

export default function Home() {
  return (
    <div className="container">
      <div className="card animate__animated animate__backInLeft">
        <img src={img1} className="card-img-top " alt="..." />
        <h4 className="observ">
          To serve in an organization where there is an opportunity to utilizing
          my skills and services for upgrading my knowledge in the process of
          growth of the organization.
        </h4>
      </div>
    </div>
  );
}
