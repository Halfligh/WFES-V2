import React from "react";
import "../styles/global.css";
import imageHome from "../assets/1.jpg"; // Importer l'image

function Home() {
  return (
    <div className="home-container">
      <img className="image-home" src={imageHome} alt="image-accueil" />
      <h1>WF Electric Solutions</h1>
      <div className="items-container">
        <div className="item">Bâtiment intelligent KNX</div>
        <div className="item">Photovoltaïque</div>
        <div className="item">Réseau informatique</div>
      </div>
    </div>
  );
}

export default Home;
