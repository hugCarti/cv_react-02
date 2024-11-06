
import { Link } from "react-router-dom";
import FondCompetences from "../img/john-doe-about.jpg"
import "./accueil.css"

const Accueil = () => {
    return (
        <div className="accueil">
            <aside>
                <div className="back-affiche"></div>
                <figure>
                    <h1>Bonjour, je suis Hugo LEPLINGARD</h1>
                    <h2>Développeur web full stack</h2>
                    <button><Link to="/contact">En savoir plus</Link></button>
                </figure>
            </aside>
            <main>
                <section>
                    <article className="gauche-Apropos">
                        <h2>À propos</h2>
                        <div className="barre-bleu-accueil"></div>
                        <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. 
                        Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                        <p>Basé à Sylvain les moulins, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma 
                        formation de <strong>développeur web full stack</strong>.</p>
                        <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </article>
                    <article className="droite-Apropos">
                        <img src={FondCompetences} alt="homme regardant un PC"/>
                        <h3>Mes compétences</h3>
                        <figure>
                            <span>HTML5 90%</span>
                            <div className="container-jauge">
                                <div className="jauge-rouge"></div>
                            </div>
                        </figure>
                        <figure>
                            <span>CSS3 80%</span>
                            <div className="container-jauge">
                                <div className="jauge-bleu"></div>
                            </div>
                        </figure>
                        <figure>
                            <span>JAVASCRIPT 70%</span>
                            <div className="container-jauge">
                                <div className="jauge-orange"></div>
                            </div>
                        </figure>
                        <figure>
                            <span>PHP 60%</span>
                            <div className="container-jauge">
                                <div className="jauge-verte"></div>
                            </div>
                        </figure>
                        <figure>
                            <span>REACT 50%</span>
                            <div className="container-jauge">
                                <div className="jauge-bleu-fonce"></div>
                            </div>
                        </figure>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default Accueil;