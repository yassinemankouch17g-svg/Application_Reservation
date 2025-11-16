import React from "react";
import bgImage from "../assets/img/about-bg.jpg";
import about from "../assets/img/about.jpg";
import "../assets/css/About.css";

export default function About() {
  const paragraphs = [
    "Nous mettons un point d’honneur à utiliser uniquement des ingrédients de premier choix pour garantir que chaque plat soit frais et savoureux.",
    "Notre équipe de chefs et de personnel s’efforce d’offrir un service exceptionnel dans une ambiance chaleureuse et accueillante.",
    "Du classique aux créations modernes, notre menu propose un large choix de plats pour satisfaire tous les goûts.",
    "La satisfaction de nos clients est au cœur de nos priorités. Nous nous efforçons de rendre chaque visite mémorable.",
  ];

  const features = [
    {
      id: "01",
      titre: "Expérience Authentique",
      texte:
        "Travail minimal pour un maximum de confort. Nous vous offrons une expérience culinaire authentique et de qualité.",
    },
    {
      id: "02",
      titre: "Qualité Sans Compromis",
      texte:
        "Aucun compromis sur la qualité. Chaque plat est préparé avec soin pour garantir satisfaction et plaisir.",
    },
    {
      id: "03",
      titre: "Saveurs Uniques",
      texte:
        "Des saveurs uniques pour tous les goûts. Nos chefs créent des plats raffinés qui ravissent chaque client.",
    },
  ];

  return (
    <div>
      {/* Section About */}
      <div
        className="about-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="about-content">
          <div className="about-text">
            <h2>Une expérience culinaire inoubliable</h2>
            <p>
              Bienvenue chez Restaurantly ! Depuis plus de 18 ans, nous
              proposons des repas délicieux préparés avec des ingrédients frais
              et de qualité. Notre mission est d’offrir une expérience culinaire
              inoubliable à chacun de nos clients.
            </p>
            <ul>
              {paragraphs.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={about} alt="Restaurant" />
          </div>
        </div>
      </div>

      {/* Section Pourquoi choisir */}
      <div className="about-choisi">
        <h1>Pourquoi choisir notre restaurant</h1>
        <div className="features-list">
          {features.map((ele) => (
            <div className="feature-item" key={ele.id}>
              <h3>{ele.id}</h3>
              <h2>{ele.titre}</h2>
              <p>{ele.texte}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
