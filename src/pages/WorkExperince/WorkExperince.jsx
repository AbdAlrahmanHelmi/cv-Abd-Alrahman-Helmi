import React from "react";

import workExperince from "./workExperince.css";
import img3 from "../../image/Elba.jpg";
import Helmet from "react-helmet";

export default function WorkExperince() {
  return (
    <div className="container">
      <Helmet>
        <title>Experince Abd Al-Rahman Helmi</title>
        <meta name="description" content="Work experince Abd Al-Rahman Helmi" />
      </Helmet>
      <div className="mt-4">
        <h2 className="work">Work Experince:</h2>
        <div className="d-flex mt-4 ml-4">
          <h3 className="  animate__animated animate__zoomInDown">
            Elba House CO. (2019-2021):
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
          <h2>Maintenance Engineer:</h2>
          <li>
            <h6>
              Performing maintenance on several types of machines such as
              (drilling, cutting, bending, and welding) machines.{" "}
            </h6>
          </li>
          <li>
            <h6>Responding to and repairing faults.</h6>
          </li>
          <li>
            <h6>Repair of tools and equipment.</h6>
          </li>
          <li>
            <h6>
              Diagnose gaps and malfunctions and try to find the causes of their
              occurrence
            </h6>
          </li>
          <li>
            <h6> Always be prepared to receive emergency maintenance work.</h6>
          </li>
          <li>
            <h6> Perform periodic preventive maintenance.</h6>
          </li>
          <li>
            <h6> Working under ISO 9001 standard.</h6>
          </li>
        </ol>
        <ol className="order">
          <h2>Production Engineer:</h2>
          <li>
            <h6>Working on assembling Mercedes buses</h6>
          </li>
          <li>
            <h6>Read and verify CKD assembly diagrams</h6>
          </li>
          <li>
            <h6>Knowledge of all electrical parts of the bus.</h6>
          </li>
          <li>
            <h6>
              Monitor the work and compare with the production plan and ensure
              that it ends before the deadline.
            </h6>
          </li>
        </ol>
      </div>
    </div>
  );
}
