import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/app.css";

// Importez vos composants de page
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects/Project";
import Projects from "./pages/Projects";
import ProjectsKnx from "./pages/Projects/Knx";
import ProjectsInfo from "./pages/Projects/Informatique";
import ProjectsPhotovoltaique from "./pages/Projects/Photovoltaique";
import Contact from "./pages/Contact";
import Legals from "./pages/Legals"; // Assurez-vous de créer ce composant
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Router>
        <ScrollToTop />
        <Nav />
        <div className="content-container">
          <Routes>
            {/* <Route path="/WFES-V2" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/presentation" element={<About />} />
            <Route path="/projet/:projetId" element={<Project />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/projets-knx" element={<ProjectsKnx />} />
            <Route path="/projets-reseaux" element={<ProjectsInfo />} />
            <Route path="/projets-photovoltaique" element={<ProjectsPhotovoltaique />} /> */}
            <Route path="/" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legals />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
