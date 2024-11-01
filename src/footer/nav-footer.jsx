import React from "react";
import { Link } from "react-router-dom";
import Chemins from "../nav/chemins";


const Navfooter = () => {
    return (
        <div className="NavFooter">
            <nav>
                <h4 className="font-bold">Liens utiles</h4>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/realisations">Réalisations</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Me contacter</Link></li>
                    <li><Link to="/mentions">Mentions légales</Link></li>
                </ul>
            </nav>
            <Chemins />
        </div>
    )
};

export default Navfooter;