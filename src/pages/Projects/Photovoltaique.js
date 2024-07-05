import React from "react";
import "../../styles/global.css";
import imagePv2 from "../../assets/pv2.jpg";
import imagePv1 from "../../assets/pv1.jpg";
import imagePv from "../../assets/2.jpg";
import { useNavigate } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
import ProjectCard from "../../components/ProjectCard";

function Photovoltaique() {
  const navigate = useNavigate();

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

  return (
    <div className="home-container">
      <div className="global-title-container">
        <h1 className="global-title">Explications projets d'installations photovoltaïques</h1>
        <p className="global-title-description">{ipsum}</p>
        <h3>Découvrez nos projets d'installations photovoltaïque</h3>
      </div>
      <div className="project-items-container">
        <ProjectCard
          imageSrc={imagePv1}
          imageAlt="projet1"
          title="Projet 1"
          subtitle="Infos"
          navigateTo="/projets-knx"
        />
        <ProjectCard
          imageSrc={imagePv2}
          imageAlt="projet2"
          title="Projet 2"
          subtitle="Infos"
          navigateTo="/projets-knx"
        />

        <ProjectCard
          imageSrc={imagePv}
          imageAlt="projet3"
          title="Projet 3"
          subtitle="Infos"
          navigateTo="/projets-knx"
        />
      </div>
    </div>
  );
}

export default Photovoltaique;
