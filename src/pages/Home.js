import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/home.css";
import imageHome from "../assets/1.jpg"; // Importer l'image
import imageKnx from "../assets/2.jpg";
import imagePv from "../assets/3.jpg";
import imageIf from "../assets/1.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <img className="image-home" src={imageHome} alt="image-accueil" />
      <h1 className="global-name">WF Electric Solutions</h1>
      <div className="items-container">
        <div className="item">
          <div className="item-image-container">
            <img className="item-image" alt="knx" src={imageKnx} />
          </div>
          <h3 className="item-title">Bâtiment intelligent KNX</h3>
          <p class="item-description">Description</p>
          <button className="item-button" onClick={() => navigate("/projets-knx")}>
            Voir plus
          </button>
        </div>
        <div className="item">
          <div className="item-image-container">
            <img className="item-image" alt="photovoltaïque" src={imagePv} />
          </div>
          <h3 className="item-title">Photovoltaïque</h3>
          <p class="item-description">Description</p>
          <button className="item-button" onClick={() => navigate("/projets-photovoltaique")}>
            Voir plus
          </button>
        </div>
        <div className="item">
          <div className="item-image-container">
            <img className="item-image" alt="informatique" src={imageIf} />
          </div>
          <h3 className="item-title">Réseaux informatiques</h3>
          <p class="item-description">Description</p>
          <button className="item-button" onClick={() => navigate("/projets-reseaux")}>
            Voir plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
