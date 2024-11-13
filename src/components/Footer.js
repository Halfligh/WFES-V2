// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"; // Assurez-vous de créer ce fichier CSS pour les styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© WF Electric Solutions 2024 - Tous droits réservés</span>
        <Link to="/mentions-legales" className="footer-link">
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
