import React, { useState } from "react";
import vector_left from "../assets/images/vector_left.png";
import vector_right from "../assets/images/vector_right.png";
import "./Slider.scss";

const Slider = ({ house }) => {
  const slides = house.pictures;
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <img
        src={vector_left}
        alt="fleche gauche"
        className="slider__leftArrow"
        onClick={prevSlide}
      />
      <img
        src={vector_right}
        alt="fleche gauche"
        className="slider__rightArrow"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slideActive" : "slide"}
            key={index}
          >
            {" "}
            {index === current && (
              <img src={slide} alt="house image" className="slider__slides" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;