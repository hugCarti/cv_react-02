
import Banner from "../img/banner.jpg"
import Ecran from "../img/favicon/écran.png"
import Dossier from "../img/favicon/dossier.png"
import Loupe from "../img/favicon/loupe.png"
import "./services.css"

const Services = () => {
    return (
        <div className="services">
            <aside>
                <img src={Banner} alt="fond bleu" />
            </aside>
            <main>
                <h1>MON OFFRE DE SERVICES</h1>
                <p className="txt-pres">Voici les prestations sur lesquelles je peux intervenir.</p>
                <div className="barre-bleu-services"></div>
                <article>
                    <figure>
                        <img src={Ecran} alt="écran" />
                        <h2>UX DESIGN</h2>
                        <p>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                    </figure>
                    <figure>
                        <img src={Dossier} alt="dossier" />
                        <h2>DÉVELOPPEMENT WEB</h2>
                        <p>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>PHP</strong>.</p>
                    </figure>
                    <figure>
                        <img src={Loupe} alt="loupe-argent" />
                        <h2>RÉFÉRENCEMENT</h2>
                        <p>Le <strong>référencement naturel d'un site</strong>, aussi appelé <strong>SEO</strong>, consiste à mettre des techniques en œuvre pour <strong>améliorer sa position</strong> dans les résultats des moteurs de recherche.</p>
                    </figure>
                </article>
            </main>
        </div>
    );
}

export default Services;