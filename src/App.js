// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importez vos composants de page
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Legals from "./pages/Legals"; // Assurez-vous de créer ce composant
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/app.css"; // Assurez-vous de créer ce fichier CSS pour les styles globaux

function App() {
  return (
    <div className="app-container">
      <Router>
        <Nav />
        <div className="content-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/presentation" element={<About />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legals />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
