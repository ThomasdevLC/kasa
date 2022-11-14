import React from "react";
import logo_white from "../assets/images/logo_white.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo_white} alt="logo kasa" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
