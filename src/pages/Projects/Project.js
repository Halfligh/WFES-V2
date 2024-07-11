// src/pages/Project.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/global.css";
import { LoremIpsum } from "lorem-ipsum";
import projetsData from "../../data/projectsData";

function Project() {
  const { projetId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projet = projetsData.find((proj) => proj.id === parseInt(projetId));

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  const ipsum = lorem.generateWords(80);

  const { images } = projet;

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="home-container no-margin-bottom">
        <div className="global-title-container">
          <h1 className="global-title">{projet.title}</h1>
        </div>
      </div>
      <div className="project-container">
        <div className="project-left-bloc">
          <h3>Détails du projet</h3>
          <p className="global-title-description">{projet.description}</p>
        </div>
        <div className="project-right-bloc">
          <div className="carousel-container">
            <button className="carousel-arrow left" onClick={handlePrevImage}>
              &lt;
            </button>
            <img className="carousel-img" alt={projet.imageAlt} src={images[currentImageIndex]} />
            <button className="carousel-arrow right" onClick={handleNextImage}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
