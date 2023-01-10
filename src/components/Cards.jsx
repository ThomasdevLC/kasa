import React from "react";
import { NavLink } from "react-router-dom";
import "./Cards.scss";

const Cards = ({ house }) => {
  return (
    <NavLink to={`/form/${house.id}`}>
      <div className="card">
        <img src={house.cover} alt="photo logement" className="card__picture" />
        <div className="card__picture__text">
          <h2 className="card__picture__text__title"> {house.title}</h2>
        </div>
      </div>
    </NavLink>
  );
};

export default Cards;
