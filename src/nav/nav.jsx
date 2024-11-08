import React from "react";
import { Link } from "react-router-dom";
import Burger from "../img/favicon/burger.jpg"
import "./nav.css";

const Nav = () => {
    return (
        <header>
            <nav className="d-flex justify-content-between align-items-center p-4 mx-5">
                <h2 className="m-0"><Link to="/">Hugo LEPLINGARD</Link></h2>
                <img src={Burger} alt="logo burger" />
                <ul className="d-flex list-unstyled align-items-center m-0">
                    <li><Link to="/">accueil</Link></li>
                    <li><Link to="/services">services</Link></li>
                    <li><Link to="/realisations">réalisations</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><Link to="/contact">me contacter</Link></li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;

