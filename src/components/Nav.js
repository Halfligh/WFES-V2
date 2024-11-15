import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as AnimatedLogo } from "../assets/logo.svg";
import { ReactComponent as AnimatedLogoSolutions } from "../assets/svg/solutions.svg";
import "../styles/style-nav.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const topBlockRef = useRef(null);
  const location = useLocation();

  //observeur et fonction pour effet style knx avec la top barre et la taille du logo
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

  //fonction du menu hamburger
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div
        ref={topBlockRef}
        className={`top-block ${scrolled ? "hidden" : ""} ${menuOpen ? "hide" : ""}`}
      />
      <nav className={`nav-container ${scrolled ? "fixed small" : ""}`}>
        <div className={`nav-content ${scrolled ? "small" : ""}`}>
          <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
            &#9776;
          </button>
          <div className="logo-container">
            <AnimatedLogo className="nav-logo" />
            <AnimatedLogoSolutions className="solutions" />
          </div>

          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            {/* <li>
              <NavLink
                to="/WFES-V2"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projets"
                className={({ isActive }) =>
                  isActive ||
                  location.pathname.startsWith("/projets") ||
                  location.pathname.startsWith("/projet")
                    ? "active"
                    : ""
                }
                onClick={closeMenu}
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/presentation"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                Présentation
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
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
