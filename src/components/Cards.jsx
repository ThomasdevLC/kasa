import React from "react";
import { NavLink } from "react-router-dom";
import "./Cards.scss";

const Cards = ({ house }) => {
  return (
    <NavLink to={`/form/${house.id}`}>
      <div className="card">
        <img src={house.cover} alt="photo logement" className="card__picture" />
        <p className="card__picture__text">{house.title}</p>
      </div>
    </NavLink>
  );
};

export default Cards;
