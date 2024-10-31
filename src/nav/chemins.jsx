import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../accueil/accueil";
import Services from "../services/services"
import Realisations from  "../réalisations/realisations"
import Blog from  "../blog/blog";
import Contact from "../contact/contact";
import Mentions from  "../mentions/mentions";



const Chemins = () => {
        <Routes>
            <Route path='/' element = {<Accueil />} />
            <Route path='/services' element = {<Services />} />
            <Route path='/realisations' element = {<Realisations />} />
            <Route path='/blog' element = {<Blog />} />
            <Route path='/contact' element = {<Contact />} />
            <Route path='/mentions' element = {<Mentions />} />
        </Routes>
};

export default Chemins