import React, { useState } from 'react';
import Position from "../img/favicon/position.png";
import Telephone from "../img/favicon/telephone.png";
import Mail from "../img/favicon/enveloppe.png";
import Bas from "../img/favicon/bas.png";
import Internet from "../img/favicon/internet.png";
import "./mentions.css";

function Ouvrir({ title, onClick }) {
    return (
        <button onClick={onClick}>
            {title} <img src={Bas} alt="flèche bas" />
        </button>
    );
}

const Mentions = () => {

    const [openSection, setOpenSection] = useState(null); 
        // Une seule section peut être ouverte à la fois

    const toggleSection = (section) => {
        // Si la section cliquée est déjà ouverte, on la ferme, sinon on ouvre cette section et on ferme les autres
        setOpenSection(prev => prev === section ? null : section);
    };

    return (
        <div className="mentions">
            <aside>
                <h1>MENTIONS LÉGALES</h1>
                <div></div>
            </aside>
            <main>
                <Ouvrir title="Éditeur du site" onClick={() => toggleSection('editeur')} />
                {openSection === 'editeur' && (
                    <article>
                        <ul>
                            <li><h2>Hugo LEPLINGARD</h2></li>
                            <li><p><img src={Position} alt="position" /> 5 rue de la côte rouge,<br />27240 Sylvain lès moulins, France</p></li>
                            <li><p><img src={Telephone} alt="telephone" /> <a href="tel:+06 81 40 09 60">06 81 40 09 60</a></p></li>
                            <li><p><img src={Mail} alt="mail" /> <a href="mailto:Hleplingard04@gmail.com">Hleplingard04@gmail.com</a></p></li>
                        </ul>
                    </article>
                )}

                <Ouvrir title="Hébergeur" onClick={() => toggleSection('hebergeur')} />
                {openSection === 'hebergeur' && (
                    <article>
                        <ul>
                            <li><h2>Always Data</h2></li>
                            <li><p>91 rue Faubourg Saint Honoré</p></li>
                            <li><p>75008 Paris</p></li>
                            <li><p><img src={Internet} alt="internet" /><a href="http://www.alwaysdata.com"> www.alwaysdata.com</a></p></li>
                        </ul>
                    </article>
                )}

                <Ouvrir title="Crédits" onClick={() => toggleSection('credits')} />
                {openSection === 'credits' && (
                    <article>
                        <ul>
                            <li><h2>Crédits</h2></li>
                            <li><p>Site développé par Hugo Leplingard, étudiant du CEF.</p></li>
                            <li><p>Les images libres de droit sont issues du site <a href="https://pixabay.com">Pixabay</a>.</p></li>
                        </ul>
                    </article>
                )}
            </main>
        </div>
    );
};

export default Mentions;