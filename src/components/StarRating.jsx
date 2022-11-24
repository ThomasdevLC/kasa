import React from "react";
import redStar from "../assets/images/redStar.svg";
import greyStar from "../assets/images/greyStar.svg";
import "./StarRating.scss";

const StarRating = ({ house }) => {
  const fullStar = Array(5).fill(
    <img src={redStar} alt="note étoile" className="redStar" />
  );
  const emptyStar = Array(5).fill(
    <img src={greyStar} alt="note étoile" className="greyStar" />
  );

  return (
    <div>
      {fullStar.slice(5 - house.rating).map((fullStar) => {
        return <span className="fullStar">{fullStar}</span>;
      })}
      {emptyStar.slice(house.rating).map((emptyStar) => {
        return <span className="emptyStar">{emptyStar}</span>;
      })}
    </div>
  );
};

export default StarRating;
