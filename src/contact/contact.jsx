
import "./contact.css"
import Position from "../img/favicon/position.png"
import Telephone from "../img/favicon/telephone.png"

const Contact = () => {
    return (
        <div className="contact">
            <div className="voile-bleu">
                <main>
                    <section>
                        <h1>ME CONTACTER</h1>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                        <div></div>
                    </section>
                    <article>
                        <figure>
                            <h2>Formulaire de contact</h2>
                            <form>
                                <input type="text" placeholder="Votre nom"/>
                                <input type="email" placeholder="Votre adresse email"/>
                                <input type="tel" placeholder="Votre numéro de téléphone"/>
                                <input type="text" placeholder="Sujet"/>
                                <textarea placeholder="Votre message" />
                                <button type="submit">Envoyer</button>
                            </form>
                        </figure>
                        <figure>
                            <h2>Mes coordonnées</h2>
                            <div>
                                <p><img src={Position} alt="position"/> 5 rue de la côte rouge, Sylvain lès moulins</p>
                                <p><img src={Telephone} alt="telephone"/> 06 81 40 09 60</p>
                                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.835197509374!2d4.805528315502276!3d45.77966497910656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1d1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2s5%20Rue%20de%20la%20côte%20rouge%2C%2069009%20Sylvain%20lès%20moulins%2C%20France!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus'
                                width="100%" height="200" allowFullScreen="" loading="lazy"></iframe> 
                            </div>
                        </figure>
                    </article>
                </main>
            </div>
        </div>
    );
}


export default Contact;