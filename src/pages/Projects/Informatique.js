import React from "react";
import "../../styles/global.css";
import { useNavigate } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";
import ProjectCard from "../../components/ProjectCard";
import projectsData from "../../data/projectsData";

function Informatique() {
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

  // Filtrer les projets de type "knx"
  const filteredProjects = projectsData.filter((project) => project.type === "reseau");

  return (
    <div className="home-container">
      <div className="global-title-container">
        <h1 className="global-title">Explications projets réseaux</h1>
        <p className="global-title-description">{ipsum}</p>
        <h3>Découvrez nos projets réseaux</h3>
      </div>
      <div className="project-items-container">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.images[1]}
            imageAlt={project.imageAlt}
            title={project.title}
            subtitle={project.subtitle}
            navigateTo={`/projet/${project.id}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Informatique;
