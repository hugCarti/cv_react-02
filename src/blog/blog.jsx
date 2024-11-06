
import Banner from "../img/banner.jpg"
import Coder from "../img/blog/coder.jpg"
import Croissance from "../img/blog/croissance.jpg"
import Google from "../img/blog/google.jpg"
import Screens from "../img/blog/screens.jpg"
import Seo from "../img/blog/seo.jpg"
import Technos from "../img/blog/technos.png"
import "./blog.css"

function Sujets(props) {
    return (
        <figure>
            <img src={props.img} alt={props.title} />
            <div className="container-sujet">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button><a href="#">Lire la suite</a></button>
            </div>
            <div className="txt-bas">
                <p>Publié le {props.date}</p>
            </div>
        </figure>
    );
}

const Blog = () => {
    return (
        <div className="blog">
            <aside>
                <img src={Banner} alt="Banner" />
            </aside>
            <main>
                <section>
                    <h1>BLOG</h1>
                    <p>Retrouvez ici quelques articles sur le développement web.</p>
                    <div></div>
                </section>
                <article>
                    <Sujets
                        title="Coder son site en HTML/CSS"
                        date="22 août 2022"
                        img={Coder}
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />

                    <Sujets
                        title="Vendre ses produits sur le web"
                        date="20 août 2022"
                        img={Croissance}
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />

                    <Sujets
                        title="Se positionner sur Google"
                        date="1 août 2022"
                        img={Google}
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />

                    <Sujets
                        title="Coder en responsive design"
                        date="31 juillet 2022"
                        img={Screens}
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />

                    <Sujets
                        title="Techniques de référencement"
                        date="30 juillet 2022"
                        img={Seo}
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />

                    <Sujets
                        title="Apprendre à coder"
                        date="12 juillet 2022"
                        img={Technos}
                        description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    />

                </article>
            </main>
        </div>
    );
}

export default Blog;