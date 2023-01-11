import React, { useState } from "react";
import vector_left from "../assets/images/vector_left.png";
import vector_right from "../assets/images/vector_right.png";
import "./Slider.scss";

const Slider = ({ house }) => {
  const slides = house.pictures;
  const [slideIndex, setSlideIndex] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <>
      <div className="slider">
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              {index === slideIndex && (
                <img src={slide} alt="house image" className="slider__slides" />
              )}
            </div>
          );
        })}
        {length > 1 ? (
          <>
            <div className="previous">
              <img
                src={vector_left}
                alt="fleche gauche"
                className="slider__leftArrow"
                onClick={prevSlide}
              />
            </div>
            <div className="next">
              <img
                src={vector_right}
                alt="fleche gauche"
                className="slider__rightArrow"
                onClick={nextSlide}
              />
            </div>
          </>
        ) : (
          ""
        )}

        <div className="counter">
          {slideIndex + 1} / {length}
        </div>
      </div>
    </>
  );
};

export default Slider;
