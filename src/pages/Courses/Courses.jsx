import React from "react";
import reactJs from "../../image/React.png";
import html from "../../image/html.png";
import css from "../../image/css.jpg";
import javaScript from "../../image/javaScript.png";
import gitHup from "../../image/GitHup.jpg";
import redux from "../../image/Redux.png";
import bootstrap from "../../image/Bootstrap_logo.svg.png";
import tailwind from "../../image/tailwind.jpg";
import revit from "../../image/Revit.jpg";
import plc from "../../image/PLC.jpg";
import pv from "../../image/PV.png";
import autocad from "../../image/Autocad-Logo-2009-2014.png";
import ic3 from "../../image/IC3.jpg";
import courses from "./courses.css";
import Helmet from "react-helmet";

export default function Courses() {
  return (
    <div className="container">
      <Helmet>
      <title>Learning Abd Al-Rahman Helmi</title>
        <meta name="description" content="courses Abd Al-Rahman Helmi" />
      </Helmet>
      <div>
        <h2 className="mt-4 mb-4 ml-4 ">Courses:</h2>
        <h4 className="mt-4 mb-4 ml-4">(FE-Web Development)</h4>
        {/* <!--Front End --> */}
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 animate__animated animate__slideInLeft">
            React.js
          </h4>
          <img
            src={reactJs}
            alt="react-logo"
            className="logoCourse animate__animated animate__slideInRight"
          />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 animate__animated animate__slideInLeft">HTML5</h4>
          <img
            src={html}
            alt="html logo"
            className="logoCourse animate__animated animate__slideInRight"
          />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 ml-2 animate__animated animate__slideInLeft">
            CSS
          </h4>
          <img
            src={css}
            alt="css logo"
            className="logoCourse css ml-4 animate__animated animate__slideInRight"
          />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 mr-2 animate__animated animate__slideInLeft">
            JavaScript
          </h4>
          <img
            src={javaScript}
            alt="javaScript logo"
            className="logoCourse javaScript mt-2 ml-2 animate__animated animate__slideInRight"
          />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 animate__animated animate__slideInLeft">
            GitHup
          </h4>
          <img
            src={gitHup}
            alt="GitHup logo"
            className="logoCourse ml-4 animate__animated animate__slideInRight"
          />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 animate__animated animate__slideInLeft">Redux</h4>
          <img
            src={redux}
            alt="Redux logo"
            className="logoCourse ml-4 animate__animated animate__slideInRight"
          />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 animate__animated animate__slideInLeft">
            Bootstrap
          </h4>
          <img
            src={bootstrap}
            alt="Bootstrap logo"
            className="logoCourse ml-4 animate__animated animate__slideInRight"
          />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 animate__animated animate__slideInLeft">
            Tailwind css
          </h4>
          <img
            src={tailwind}
            alt="html logo"
            className="logoCourse ml-4 animate__animated animate__slideInRight"
          />
        </div>
        {/* <!--Electrical Engineering--> */}
        <h4 className="mt-4 mb-4 ml-4">(Electrical Engineering)</h4>

        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4">Revit MEP</h4>
          <img src={revit} alt="Revit-logo" className="logoCourse ml-4" />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4">programmable logic controller (PLC)</h4>
          <img src={plc} alt="plc logo" className="logoCourse ml-4" />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 ml-2">PV system</h4>
          <img src={pv} alt="css logo" className="logoCourse css ml-4" />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4 mr-2">Autocad</h4>
          <img
            src={autocad}
            alt="javaScript logo"
            className="logoCourse javaScript mt-2 ml-2"
          />
        </div>
        <div className="d-flex mt-4 ml-4">
          <h4 className="mt-4">IC3</h4>
          <img src={ic3} alt="GitHup logo" className="logoCourse ml-4" />
        </div>
      </div>
    </div>
  );
}
