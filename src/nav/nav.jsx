import React from "react";
import { Link } from "react-router-dom";
import Chemins from "./chemins";
import "./nav.css";

const Nav = () => {
    return (
        <div class="header">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-xl font-bold">JOHN DOE</div>
                <ul>
                    <li><Link to="/">ACCUEIL</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/realisations">RÉALISATIONS</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">ME CONTACTER</Link></li>
                </ul>
            </div>
            <Chemins />
        </div>
    )
};

export default Nav;