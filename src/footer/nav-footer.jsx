import React from "react";
import { Link } from "react-router-dom";

const Navfooter = () => {
    return (
        <div className="NavFooter">
            <nav>
                <h4><strong>Liens utiles</strong></h4>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/#apropos">À propos</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Me contacter</Link></li>
                    <li><Link to="/mentions">Mentions légales</Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navfooter;