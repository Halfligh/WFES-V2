import React from "react";
import "../../styles/global.css";
import imageKnx from "../../assets/2.jpg";
import imagePv from "../../assets/3.jpg";
import imageIf from "../../assets/1.jpg";
import { useNavigate } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
import ProjectCard from "../../components/ProjectCard";

function Knx() {
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
        <h1 className="global-title">Explications projets Knx</h1>
        <p className="global-title-description">{ipsum}</p>
        <h3>Découvrez nos projets Knx</h3>
      </div>
      <div className="project-items-container">
        <ProjectCard
          imageSrc={imagePv}
          imageAlt="projet1"
          title="Projet 1"
          subtitle="Infos"
          navigateTo="/projets-knx"
        />
        <ProjectCard
          imageSrc={imageKnx}
          imageAlt="projet2"
          title="Projet 2"
          subtitle="Infos"
          navigateTo="/projets-knx"
        />

        <ProjectCard
          imageSrc={imageIf}
          imageAlt="projet3"
          title="Projet 3"
          subtitle="Infos"
          navigateTo="/projets-knx"
        />
      </div>
    </div>
  );
}

export default Knx;
