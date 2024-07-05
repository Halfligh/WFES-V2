import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

function ProjectCard({ imageSrc, imageAlt, title, subtitle, navigateTo }) {
  const navigate = useNavigate();

  return (
    <div className="project-card" onClick={() => navigate(navigateTo)}>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
      <div className="project-card-image-container">
        <img className="project-card-image" alt={imageAlt} src={imageSrc} />
      </div>
    </div>
  );
}

export default ProjectCard;
