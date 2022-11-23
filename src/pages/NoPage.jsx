import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import "./NoPage.scss";

const NoPage = () => {
  return (
    <div className="error">
      <Header />
      <p className="error__title">404</p>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/">
        <p className="error__link">Retourner sur la page d'accueil </p>
      </NavLink>
    </div>
  );
};

export default NoPage;
