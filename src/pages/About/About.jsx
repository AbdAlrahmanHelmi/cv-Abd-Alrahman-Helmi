import React from "react";
import about from "./About.css";
import 'animate.css';

export default function About() {
  return (
    <div className="container">
      <div className="up" >
        <div className="jumbotron animate__animated animate__backInLeft">
          <h4 className="header ">Name : Eng.Abd Alrahman helmi</h4>
        </div>
        <div className="jumbotron animate__animated animate__backInRight">
          <h4 className="header ">Date of Birth : 12thJanuary 1995</h4>
        </div>
        <div className="jumbotron animate__animated animate__backInRight">
          <h4 className="header ">Nationality : Jordanian </h4>
        </div>
        <div className="jumbotron animate__animated animate__backInRight">
          <h4 className="header ">Marital Status : Single </h4>
        </div>
        <div className="jumbotron animate__animated animate__backInRight">
          <h4 className="header ">Location : Shafabadran, Amman, Jordan </h4>
        </div>

      </div>
    </div>
  );
}
