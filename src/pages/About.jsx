import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutPic from "../assets/images/aboutPic.jpg";
import Dropdown from "../components/Dropdown";
import "./About.scss";
// import "../components/Dropdown.scss";

const About = () => {
  const aboutList = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      id: 1,
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      id: 2,
    },
    {
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      id: 3,
    },
    {
      title: "Responsabilité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      id: 4,
    },
  ];

  const aboutArticles = aboutList.map((article) => {
    return (
      <div className="about__dropdown" key={article.id}>
        <Dropdown title={article.title} text={article.text} />
      </div>
    );
  });

  return (
    <div className="about">
      <Header />
      <div className="about__top">
        <img
          src={aboutPic}
          alt="photo de montagnes"
          className="about__top__picture"
        />
      </div>
      {aboutArticles}
      <Footer />
    </div>
  );
};

export default About;
