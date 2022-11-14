import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutPic from "../assets/images/aboutPic.jpg";

const About = () => {
  return (
    <div>
      <Header />
      <img
        src={aboutPic}
        alt="bord de mer"
        className="home__tagline__picture"
      />
      <Footer />
    </div>
  );
};

export default About;
