import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Slider from "../components/Slider";
import HouseList from "../list/HouseList.json";
import Footer from "../components/Footer";
import StarRating from "../components/StarRating";
import Dropdown from "../components/Dropdown";
import "./HouseForm.scss";

const HouseForm = () => {
  const params = useParams();
  const house = HouseList.find((h) => h.id === params.id);

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
            <div className="houseform__body__top__rating">
              <StarRating house={house} />
            </div>
          </div>
        </div>
        <div className="houseform__body__dropdown">
          <div className="houseform__body__dropdown__left">
            <Dropdown title="Description" text={house.description} />
          </div>
          <div className="houseform__body__dropdown__right">
            <Dropdown
              title="Equipements"
              text={house.equipments.map((equipment) => (
                <div className="houseform__body__dropdown__right__text;">
                  {equipment}
                </div>
              ))}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HouseForm;
