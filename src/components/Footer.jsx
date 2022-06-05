import React from "react";
import { useTranslation } from "react-i18next";
import "./footer.css";

export default function Footer() {
  const [t, i18n] = useTranslation();
  return (
    <div className="container">
      <footer className="footer">
        <h4 className="headeFooter">{t("Footer")}</h4>
        <div className="copySign">
          <h3> &copy; </h3>
          <h5>Abd Al-rahman Helmi</h5>
        </div>
      </footer>
    </div>
  );
}
