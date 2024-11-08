
import Banner from "../img/banner.jpg"
import Espacebienetre from "../img/portfolio/espace-bien-etre.jpg"
import Freshfood from "../img/portfolio/fresh-food.jpg"
import Restaurantjaponais from "../img/portfolio/restaurant-japonais.jpg"
import "./realisations.css"

function Projets(props) {
    return (
        <article className="col-md-4 border border-light">
            <figure className="card mb-4">
                <img src={props.fond} className="card-img-top" alt={props.titre} />
                <div className="card-body">
                    <h2 className="card-title fw-semibold text-dark">{props.titre}</h2>
                    <p className="card-text mb-3">{props.txt}</p>
                    <button className="btn bg-light text-primary border border-primary">Voir</button>
                </div>
                <div className="card-footer p-2 text-dark fs-6">
                    {props.txtBas}
                </div>
            </figure>
        </article>
    );
}

function Realisations() {
    return (
        <div className="realisations">
            <img src={Banner} alt="banner" className="banner w-100"/>
            <main className="py-5 bg-light">
                <div className="container text-center">
                    <h1>PORTFOLIO</h1>
                    <p>Voici quelques-unes de mes réalisations.</p>
                    <div class="barre-bleu mx-auto mt-3 mb-5 bg-primary"></div>
                    <div className="row mt-4">
                        <Projets 
                            fond={Freshfood}
                            titre="Fresh food"
                            txt="Réalisation d'un site avec commande en ligne"
                            txtBas="Site réalisé avec PHP et MySQL"
                        />

                        <Projets
                            fond={Restaurantjaponais}
                            titre="Restaurant Akira"
                            txt="Réalisation d'un site vitrine"
                            txtBas="Site réalisé avec WordPress"
                        />

                        <Projets
                            fond={Espacebienetre}
                            titre="Espace bien-être"
                            txt="Réalisation d'un site vitrine pour un praticien de bien-être"
                            txtBas="Site réalisé en HTML/CSS"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}


export default Realisations;