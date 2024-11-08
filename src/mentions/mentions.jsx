import React, { useState } from 'react';
import Position from "../img/favicon/position.png";
import Telephone from "../img/favicon/telephone.png";
import Mail from "../img/favicon/enveloppe.png";
import Bas from "../img/favicon/bas.png";
import Internet from "../img/favicon/internet.png";
import "./mentions.css";

function Ouvrir({ title, onClick }) {
    return (
        <button onClick={onClick} className="d-flex justify-content-between align-items-center w-100 text-start py-3 px-4">
            {title}
            <img src={Bas} alt="flèche bas" className='me-3' />
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
        <div className="mentions mt-5">
            <aside className="text-center mb-4">
                <h1 className="fw-bold text-dark mb-4">MENTIONS LÉGALES</h1>
                <div class="barre-bleu mx-auto mt-3 mb-4 bg-primary"></div>
            </aside>
            <main>
                <Ouvrir title="Éditeur du site" onClick={() => toggleSection('editeur')} />
                {openSection === 'editeur' && (
                    <article className="p-4">
                        <ul className="list-unstyled mt-2">
                            <li><h3 className="fw-bold text-dark mb-3">Hugo LEPLINGARD</h3></li>
                            <li><p className="m-0"><img src={Position} alt="position" /> 5 Rue des Champs-Élisée<br />75001 Paris, France</p></li>
                            <li><p className="m-0"><img src={Telephone} alt="telephone" /> <a className="text-primary ms-2" href="tel:+06 82 40 09 60">06 82 40 09 60</a></p></li>
                            <li><p><img src={Mail} alt="mail" /> <a className="text-primary ms-2" href="mailto:Hleplingard05@gmail.com">Hleplingard05@gmail.com</a></p></li>
                        </ul>
                    </article>
                )}

                <Ouvrir title="Hébergeur" onClick={() => toggleSection('hebergeur')} />
                {openSection === 'hebergeur' && (
                    <article className="p-4">
                        <ul className="list-unstyled mt-2">
                            <li><h3 className="fw-bold text-dark mb-3">Render.com</h3></li>
                            <li><p className="m-0">91 rue Faubourg Saint Honoré</p></li>
                            <li><p>75008 Paris</p></li>
                            <li><p><img src={Internet} alt="internet" /><a className="text-primary ms-2" href="http://www.alwaysdata.com"> www.alwaysdata.com</a></p></li>
                        </ul>
                    </article>
                )}

                <Ouvrir title="Crédits" onClick={() => toggleSection('credits')} />
                {openSection === 'credits' && (
                    <article className="p-4">
                        <ul className="list-unstyled mt-2">
                            <li><h3 className="fw-bold text-dark mb-3">Crédits</h3></li>
                            <li><p>Site développé par Hugo Leplingard, étudiant du CEF.</p></li>
                            <li><p>Les images libres de droit sont issues du site <a className="text-primary ms-2" href="https://pixabay.com"> Pixabay</a>.</p></li>
                        </ul>
                    </article>
                )}
            </main>
        </div>
    );
};

export default Mentions;
