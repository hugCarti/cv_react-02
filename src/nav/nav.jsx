import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "../grenier/accueil"
import Services from "../grenier/services";
import Realisations from "../grenier/realisations";
import Blog from "../grenier/blog";
import Contact from "../grenier/contact";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    return (
        <div className="bandeau">
            <header>
                <p className="logoNom"><strong>Hugo LEPLINGARD</strong></p>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">ACCUEIL</Link>
                        </li>
                        <li>
                            <Link to="/services">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/realisations">REALISATIONS</Link>
                        </li>
                        <li>
                            <Link to="/blog">BLOG</Link>
                        </li>
                        <li>
                            <Link to="/contact">ME CONTACTER</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Accueil />} />
                <Route path='/services' element={<Services />} />
                <Route path='/realisations' element={<Realisations />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
};


export default Nav;