import React from "react";
import { Link } from "react-router-dom";
import Chemins from "./chemins";
import "./nav.css";

const Nav = () => {
    return (
        <div className="bandeau">
            <header>
                <p className="nom">Hugo LEPLINGARD</p>
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
                <Chemins />
            </header>

        </div>
    )
};


export default Nav;