import React from "react";
import "../styles/global.css";
import imageHome from "../assets/1.jpg"; // Importer l'image
import imageKnx from "../assets/2.jpg";
import imagePv from "../assets/3.jpg";
import imageIf from "../assets/1.jpg";

function Home() {
  return (
    <div className="home-container">
      <img className="image-home" src={imageHome} alt="image-accueil" />
      <h1 className="global-name">WF Electric Solutions</h1>
      <div className="items-container">
        <div className="item">
          <img className="item-image" alt="knx" src={imageKnx} />
          <h3 className="item-title">Bâtiment intelligent KNX</h3>
          <p>Description</p>
          <button className="item-button">Voir plus</button>
        </div>
        <div className="item">
          <img className="item-image" alt="photovoltaïque" src={imagePv} />
          <h3 className="item-title">Photovoltaïque</h3>
          <p>Description</p>
          <button className="item-button">Voir plus</button>
        </div>
        <div className="item">
          <img className="item-image" alt="informatique" src={imageIf} />
          <h3 className="item-title">Réseaux informatiques</h3>
          <p>Description</p>
          <button className="item-button">Voir plus</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
