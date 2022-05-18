import React from "react";
import "animate.css";
import img2 from "../../image/philadelphia.jpg";
import education from "./education.css";
import Helmet from "react-helmet";

export default function Education() {
  return (
    <div >
      <Helmet>
      <title>Education </title>
        <meta name="description" content="Education Abd Al-Rahman Helmi" />
      </Helmet>
      <div className="d-md-flex ">
        <div className="d-flex justify-content-start ml-4 mt-4 animate__animated animate__backInLeft">
          <div className="edu ">
            <h3>Bachelor in</h3>
            <h4>Electrical Engineering</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center ml-4 mt-4 animate__animated animate__backInLeft">
          <div className="edu ">
            <h3>Philadelphia University</h3>
            <h4>Amman, Jordan</h4>
          </div>
        </div>
        <div className="d-flex justify-content-end ml-4 animate__animated  animate__backInRight">
          <div className="mt-2">
            <img src={img2} alt="philadelphia" className="img-thumbnail img-ph" />
          </div>
        </div>
      </div>
      <div className="d-flex mt-0">
        <div className="d-flex justify-content-start ml-4 mt-4 animate__animated animate__rubberBand">
          <div className="gpa ">
            <h3 className="text">GPA</h3>
          </div>
        </div>
        <div className="d-flex justify-content-center ml-4 mt-4 animate__animated animate__fadeInUpBig">
          <div className="gpa ">
            <h3 className="text">GOOD</h3>
          </div>
        </div>
      </div>
      <div className="d-md-flex">
        <div className="d-flex justify-content-start ml-4 mt-4 animate__animated animate__rotateInDownLeft">
          <div className="school ">
            <h3 className="text">High School </h3>
          </div>
        </div>
        <div className="d-flex justify-content-center ml-4 mt-4 animate__animated animate__rotateInDownRight">
          <div className="school ">
            <h5 className="text">Alsarh Schools <br /> Amman, Jordan<br /> 2013</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
