
import Banner from "../img/banner.jpg"
import Espacebienetre from "../img/portfolio/espace-bien-etre.jpg"
import Freshfood from "../img/portfolio/fresh-food.jpg"
import Restaurantjaponais from "../img/portfolio/restaurant-japonais.jpg"
import "./realisations.css"

function Projets(props) {
    return (
        <figure>
            <img src={props.image} alt={props.titre} />
            <div className="figure-txt"> 
                <h2>{props.titre}</h2>
                <p>{props.txt}</p>
                <button><a href="#">Voir</a></button>
            </div> 
            <div className="txt-bas">
                <p>{props.txtBas}</p>
            </div>
        </figure>
    );
}

const Realisations = () => {
    return (
        <div className="realisation">
            <aside>
                <img src={Banner} alt="Banner" />
            </aside>
            <main>
                <section>
                    <h1>PORTFOLIO</h1>
                    <p>Voici quelques-unes de mes réalisations.</p>
                    <div></div>
                </section>
                <article>
                    <Projets 
                        image={Freshfood}
                        titre="Fresh food"
                        txt="Réalisation d'un site avec commande en ligne"
                        txtBas="Site réalisé avec PHP et MySQL"
                    />

                    <Projets
                        image={Restaurantjaponais}
                        titre="Restaurant Akira"
                        txt="Réalisation d'un site vitrine"
                        txtBas="Site réalisé avec WordPress"
                    />

                    <Projets
                        image={Espacebienetre}
                        titre="Espace bien-être"
                        txt="Réalisation d'un site vitrine pour un praticien de bien-être"
                        txtBas="Site réalisé en HTML/CSS"
                    />
                </article>
            </main>
        </div>
    );
}

export default Realisations;