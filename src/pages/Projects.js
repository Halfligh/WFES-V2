// pages/Projects.js
import React from "react";
import "../styles/global.css";
import imageKnx from "../assets/2.jpg";
import imagePv from "../assets/3.jpg";
import imageIf from "../assets/1.jpg";

function Projects() {
  return (
    <div className="home-container">
      <div className="items-container">
        <div className="card">
          <div className="card-image-container">
            <img className="card-image" alt="knx" src={imageKnx} />
          </div>
          <div className="card-content">
            <h3 className="card-title">Bâtiment intelligent KNX</h3>
            <p className="card-subtitle">Description</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image-container">
            <img className="card-image" alt="photovoltaïque" src={imagePv} />
          </div>
          <div className="card-content">
            <h3 className="card-title">Photovoltaïque</h3>
            <p className="card-subtitle">Description</p>
          </div>
        </div>

        <div className="card">
          <div className="card-image-container">
            <img className="card-image" alt="informatique" src={imageIf} />
          </div>
          <div className="card-content">
            <h3 className="card-title">Réseaux informatiques</h3>
            <p className="card-subtitle">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
