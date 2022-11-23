import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown__left">
      <div className="houseform__body__dropdown__title">
        <h2>Description</h2>
        <div className="">
          <img
            onClick={() => setShowModeLeft(!showModeLeft)}
            src={showModeLeft ? close : open}
            alt="houseform__body__dropdown__title__arrow__left"
          />
        </div>
      </div>
      {!showModeLeft ? (
        <div className="houseform__body__dropdown__text">
          {house.description}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dropdown;
