import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
    return (
        <header>
            <nav>
                <div class="logo-nom">
                    <Link to="/">Hugo LEPLINGARD</Link>
                </div>
                <ul>
                    <li><Link to="/">ACCUEIL</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/realisations">RÉALISATIONS</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/contact">ME CONTACTER</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;