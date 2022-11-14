import React from "react";
import { NavLink } from "react-router-dom";
import logo_r from "../assets/images/logo_r.png";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo_r} alt="" className="header__logo" />

      <ul className="header__navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="header__navigation__home">Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="header__navigation__about">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
