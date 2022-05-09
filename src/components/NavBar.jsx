import React from "react";

import Navbar from "./Navbar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top  bg-pattern">
        <Link to="/">
          {" "}
          <h2 className=" logo mr-3">Abd Al-Rahman Helmi</h2>
        </Link>

        

        <div className="  navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav modify   ">
            <li>
            <Link to="/about" className="nav-link effect " href="#">
          About
        </Link>

            </li>
            <li className="nav-item active">
              <Link to="/education" className="nav-link effect" href="#">
                Education
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/experince" className="nav-link effect" href="#">
                Work Experince
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/courses" className="nav-link effect" href="#">
                Courses
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/Contact" className="nav-link effect" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
