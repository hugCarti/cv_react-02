
import Coder from "../img/blog/coder.jpg"
import Croissance from "../img/blog/croissance.jpg"
import Google from "../img/blog/google.jpg"
import Screens from "../img/blog/screens.jpg"
import Seo from "../img/blog/seo.jpg"
import Technos from "../img/blog/technos.png"
import "./blog.css"

function Sujets(props) {
    return (
        <article className="col-md-4 border border-light">
            <figure className="card mb-4">
                <img src={props.img} className="card-img-top" alt={props.titre} />
                <div className="card-body text-left">
                    <h2 className="card-title fw-semibold text-dark">{props.titre}</h2>
                    <p className="card-text mb-3">{props.txt}</p>
                    <button className="btn btn-primary text-light border-0">Lire la suite</button>
                </div>
                <div className="card-footer text-dark fs-6">
                    {props.date}
                </div>
            </figure>
        </article>
    );
}

const Blog = () => {
    return (
        <div className="blog">
            <aside className="d-flex justify-content-center align-items-center text-center"></aside>
            <main className="py-5 bg-light">
                <div className="container text-center">
                    <h1>BLOG</h1>
                    <p>Retrouvez ici quelques articles sur le développement web.</p>
                    <div class="barre-bleu mx-auto mt-3 mb-5 bg-primary"></div>
                    <div className="row">
                        <Sujets
                            titre="Coder son site en HTML/CSS"
                            date="22 août 2022"
                            img={Coder}
                            txt="Some quick example text to build on the card title and make up the bulk of the card's content."
                        />

                        <Sujets
                            titre="Vendre ses produits sur le web"
                            date="20 août 2022"
                            img={Croissance}
                            txt="Some quick example text to build on the card title and make up the bulk of the card's content."
                        />

                        <Sujets
                            titre="Se positionner sur Google"
                            date="1 août 2022"
                            img={Google}
                            txt="Some quick example text to build on the card title and make up the bulk of the card's content."
                        />

                        <Sujets
                            titre="Coder en responsive design"
                            date="31 juillet 2022"
                            img={Screens}
                            txt="Some quick example text to build on the card title and make up the bulk of the card's content."
                        />

                        <Sujets
                            titre="Techniques de référencement"
                            date="30 juillet 2022"
                            img={Seo}
                            txt="Some quick example text to build on the card title and make up the bulk of the card's content."
                        />

                        <Sujets
                            titre="Apprendre à coder"
                            date="12 juillet 2022"
                            img={Technos}
                            txt="Some quick example text to build on the card title and make up the bulk of the card's content."
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Blog;