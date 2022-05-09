import React from "react";
import footer from "./footer.css";

export default function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <h4 className="headeFooter">
          All the details furnished above are true to the best of my knowledge
          and belief. I will abide by all the rules and regulations of the
          organization and do my best to the entire satisfaction of my
          superiors.
        </h4>
        <div className="copySign">
        <p><h3>&copy;</h3></p>
        <h5>Abd Al-rahman Helmi</h5>
        </div>
      </footer>
    </div>
  );
}
