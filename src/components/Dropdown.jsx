import React, { useState } from "react";
import close from "../assets/images/close.png";
import open from "../assets/images/open.png";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const [showMode, setShowMode] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__title">
        <h2> {props.title}</h2>
        <div className="dropdown__title__arrow">
          <img
            onClick={() => setShowMode(!showMode)}
            src={showMode ? close : open}
            alt="flèche"
          />
        </div>
      </div>
      {!showMode ? <div className="dropdown__text">{props.text}</div> : ""}
    </div>
  );
};

export default Dropdown;
