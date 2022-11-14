import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Slider";
import HouseList from "../list/HouseList.json";
import close from "../assets/images/close.png";
import open from "../assets/images/open.png";

import "./HouseForm.scss";

const HouseForm = () => {
  const params = useParams();
  const house = HouseList.find((h) => h.id === params.id);

  const [showMode, setShowMode] = useState(false);

  return (
    <div className="houseform">
      <Header />
      <div className="houseform__slider">
        <Slider house={house} />
      </div>
      <section className="houseform__body">
        <div className="houseform__body__top">
          <div className="houseform__body__top__left">
            <h1>{house.title}</h1>
            <p>{house.location}</p>
            <div className="houseform__body__top__tags">
              {house.tags.map((tag) => (
                <div className="houseform__body__top__tags__text">{tag}</div>
              ))}
            </div>
          </div>

          <div className="houseform__body__top__right">
            <div className="houseform__body__top__host">
              <p>{house.host.name}</p>
              <img
                src={house.host.picture}
                alt="photo propriétaire"
                className="houseform__body__top__host__picture"
              />
            </div>
          </div>
        </div>
        <div className="houseform__body__dropdown">
          <div className="houseform__body__dropdown__left">
            <div className="houseform__body__dropdown__title">
              <h2>Description</h2>
              <div className="">
                <img
                  onClick={() => setShowMode(!showMode)}
                  src={showMode ? open : close}
                  alt="houseform__body__dropdown__title__arrow__left"
                />
              </div>
            </div>
            {!showMode ? (
              <div className="houseform__body__dropdown__text">
                {house.description}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="houseform__body__dropdown__right">
            <div className="houseform__body__dropdown__title">
              <h2>Equipments</h2>
              <img
                onClick={() => setShowMode(!showMode)}
                src={showMode ? open : close}
                alt="houseform__body__dropdown__title__arrow"
              />{" "}
            </div>
            {!showMode ? (
              <div className="houseform__body__dropdown__text">
                {house.equipments.map((equipment) => (
                  <div
                    className="houseform__body__dropdown__right__text__list;
                  "
                  >
                    {equipment}
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseForm;
