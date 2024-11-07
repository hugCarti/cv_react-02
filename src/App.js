import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Accueil from "./accueil/accueil";
import Services from "./services/services"
import Realisations from  "./réalisations/realisations"
import Blog from  "./blog/blog";
import Contact from "./contact/contact";
import Mentions from  "./mentions/mentions";
import NavigationBar from "./nav/nav";
import Footer from "./footer/footer";

const App = () => {

  const location = useLocation(); // Utilisation de useLocation pour détecter la route

  useEffect(() => {
    // Pour toutes les autres pages, on défile vers le haut
    window.scrollTo(0, 0);
  }, [location]); 

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
