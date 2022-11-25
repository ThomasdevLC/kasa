import React from "react";
import Header from "../components/Header";
import homePic from "../assets/images/homePic.jpg";
import Cards from "../components/Cards";
import HouseList from "../list/HouseList.json";
import Footer from "../components/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__tagline">
        <img
          src={homePic}
          alt="bord de mer"
          className="home__tagline__picture"
        />
        <p className="home__tagline__text">Chez vous, partout et ailleurs</p>
      </div>
      <div className="home__location">
        <div className="home__location__container">
          {HouseList.map((house) => (
            <Cards key={house.id} house={house} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
