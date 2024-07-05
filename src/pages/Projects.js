import React from "react";

import Card from "../components/Card";
import "../styles/global.css";

import imageKnx from "../assets/2.jpg";
import imagePv from "../assets/3.jpg";
import imageIf from "../assets/1.jpg";

function Projects() {
  return (
    <div className="home-container">
      <div className="items-container">
        <Card
          imageSrc={imageKnx}
          imageAlt="knx"
          title="Bâtiment intelligent KNX"
          subtitle="Description"
          navigateTo="/projets-knx"
        />
        <Card
          imageSrc={imagePv}
          imageAlt="photovoltaïque"
          title="Photovoltaïque"
          subtitle="Description"
          navigateTo="/projets-photovoltaique"
        />
        <Card
          imageSrc={imageIf}
          imageAlt="informatique"
          title="Réseaux informatiques"
          subtitle="Description"
          navigateTo="/projets-reseaux"
        />
      </div>
    </div>
  );
}

export default Projects;
