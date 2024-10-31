import React from "react";
import Chemins from "./chemins";
import "./nav.css";

const Nav = () => {
    return (
        <div class="header">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-xl font-bold">JOHN DOE</div>
                <div>
                    <a href="#">ACCUEIL</a>
                    <a href="#">SERVICES</a>
                    <a href="#">RÉALISATIONS</a>
                    <a href="#">BLOG</a>
                    <a href="#">ME CONTACTER</a>
                </div>
            </div>
            <Chemins />
        </div>
    )
};

export default Nav;