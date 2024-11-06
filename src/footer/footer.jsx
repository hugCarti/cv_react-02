
import { Link } from "react-router-dom";
import Navfooter from  "./nav-footer";
import Github from "../img/favicon/github.png"
import Twitter from "../img/favicon/twitter.png"
import Linkedin from "../img/favicon/linkedin.png"
import "./footer.css";


const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div>
                    <h4><strong>Hugo LEPLINGARD</strong></h4>
                    <p>
                        5 rue de la côte rouge<br/>
                        27240 Sylvain lès moulins, France<br/>
                        Téléphone : 06 81 40 09 60
                    </p>
                    <div className="container-fav">
                        <a href="https://github.com/hugCarti/cv_react-02.git"><img src={ Github } alt="Github" /></a>
                        <a href="#"><img src={ Twitter } alt="Twitter" /></a>
                        <a href="www.linkedin.com/in/hugo-leplingard-924793262"><img src={ Linkedin } alt="Linkedin" /></a>
                    </div>
                </div> 
                <div>
                    <Navfooter />
                </div>
                <div>
                    <h4><strong>Mes dernières réalisations</strong></h4>
                    <ul>
                        <li><Link to="/realisations">Fresh food</Link></li>
                        <li><Link to="/realisations">Restaurant Akira</Link></li>
                        <li><Link to="/realisations">Espace bien-être</Link></li>
                    </ul>
                </div>
                <div>
                    <h4><strong>Mes derniers articles</strong></h4>
                    <ul>
                            <li><Link to="/blog">Coder son site en HTML/CSS</Link></li>
                        <li><Link to="/blog">Vendre ses produits sur le web</Link></li>
                        <li><Link to="/blog">Se positionner sur Google</Link></li>
                    </ul>
                </div>
            </div>
            <div className="bas">
                <p>© Designed by Hugo LEPLINGARD</p>
            </div>
        </footer>
    )
};


export default Footer
