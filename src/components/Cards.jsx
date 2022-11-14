import React from "react";
import { NavLink } from "react-router-dom";
import "./Cards.scss";

const Cards = ({ house }) => {
  return (
    <div className="card">
      <NavLink to={`/form/${house.id}`}>
        <img src={house.cover} alt="photo logement" className="card__picture" />
      </NavLink>
    </div>
  );
};

export default Cards;
