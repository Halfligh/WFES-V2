// Card.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css"; // Assurez-vous de créer ce fichier CSS

function Card({ imageSrc, imageAlt, title, subtitle, navigateTo }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(navigateTo)}>
      <div className="card-image-container">
        <img className="card-image" alt={imageAlt} src={imageSrc} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;
