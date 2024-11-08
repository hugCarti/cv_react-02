
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import Github from "../img/favicon/github.png"
import Twitter from "../img/favicon/twitter.png"
import Linkedin from "../img/favicon/linkedin.png"
import Fleche from "../img/favicon/fleche.png"
import "./footer.css";

function Footer() {
  return (
    <footer className="py-4">
            <Row className="d-flex justify-content-between">
                <Col className="gauche ml-5" >
                    <h4>John Doe</h4>
                    <p className="m-0">40 Rue Laure Diebold</p>
                    <p className="m-0">69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                    <div>
                        <a href="https://github.com/github-john-doe/TypoEditor"><img src={ Github } alt="Github" /></a>
                        <a href="https://x.com/"><img src={ Twitter } alt="Twitter" /></a>
                        <a href="https://linkedin.com/id/john-doe"><img src={ Linkedin } alt="Linkedin" /></a>
                    </div>
                </Col>

                <Col>
                    <h4>Liens utiles</h4>
                    <ul className="list-unstyled">
                        <li><Link to="/"><img src={ Fleche } alt="Fleche" /> Accueil</Link></li>
                        <li><Link to="/#Apropos"><img src={ Fleche } alt="Fleche" /> À propos</Link></li>
                        <li><Link to="/services"><img src={ Fleche } alt="Fleche" /> Services</Link></li>
                        <li><Link to="/contact"><img src={ Fleche } alt="Fleche" /> Me contacter</Link></li>
                        <li><Link to="/mentions"><img src={ Fleche } alt="Fleche" /> Mentions légales</Link></li>
                    </ul>
                </Col>

                <Col>
                    <h4>Mes dernières réalisations</h4>
                    <ul className="list-unstyled">
                        <li><Link to="/realisations"><img src={ Fleche } alt="Fleche" /> Fresh food</Link></li>
                        <li><Link to="/realisations"><img src={ Fleche } alt="Fleche" /> Restaurant Akira</Link></li>
                        <li><Link to="/realisations"><img src={ Fleche } alt="Fleche" /> Espace bien-être</Link></li>
                    </ul>
                </Col>

                <Col>
                    <h4>Mes derniers articles</h4>
                    <ul className="list-unstyled">
                        <li><Link to="/blog"><img src={ Fleche } alt="Fleche" /> Coder son site en HTML/CSS</Link></li>
                        <li><Link to="/blog"><img src={ Fleche } alt="Fleche" /> Vendre ses produits sur le web</Link></li>
                        <li><Link to="/blog"><img src={ Fleche } alt="Fleche" /> Se positionner sur Google</Link></li>
                    </ul>
                </Col>
            </Row>
        <div className="bas text-center py-3 mt-3">
            <p className="m-0">© Designed by John Doe</p>
        </div>
    </footer>
  );
}

export default Footer
