import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Accueil from "../accueil/accueil";
import Services from "../services/services"
import Realisations from  "../réalisations/realisations"
import Blog from  "../blog/blog";
import Contact from "../contact/contact";
import Mentions from  "../mentions/mentions";
import "./nav.css";

const Nav = () => {
    return (
        <div class="header">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-xl font-bold">JOHN DOE</div>
                <ul className="text-white p-4 flex justify-between items-center">
                    <li><Link to="/">ACCUEIL</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/realisations">RÉALISATIONS</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">ME CONTACTER</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/' element = {<Accueil />} />
                <Route path='/services' element = {<Services />} />
                <Route path='/realisations' element = {<Realisations />} />
                <Route path='/blog' element = {<Blog />} />
                <Route path='/contact' element = {<Contact />} />
                <Route path='/mentions' element = {<Mentions />} />
            </Routes>
        </div>
    )
};

export default Nav;