// components/Nav.js
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/style-nav.css"; // Importez le fichier CSS pour les styles
import logo from "../assets/logo.png"; // Chemin vers votre logo

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const topBlockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentRef = topBlockRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <header>
      <div ref={topBlockRef} className={`top-block ${scrolled ? "hidden" : ""}`}></div>
      <nav className={`nav-container ${scrolled ? "fixed small" : ""}`}>
        <div className={`nav-content ${scrolled ? "small" : ""}`}>
          <img src={logo} alt="Logo" className="nav-logo" />
          <ul className="nav-list">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                Présentation
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
