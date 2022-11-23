import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutPic from "../assets/images/aboutPic.jpg";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="about__top">
        <img src={aboutPic} alt="montagnes" className="about__top__picture" />
      </div>

      <Footer />
    </div>
  );
};

export default About;
