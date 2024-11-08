
import { Container, Row, Col, Card } from 'react-bootstrap';
import Ecran from "../img/favicon/écran.png"
import Dossier from "../img/favicon/dossier.png"
import Loupe from "../img/favicon/loupe.png"
import "./services.css"

const Services = () => {
    return (
        <Container fluid className="services">
            <aside className="d-flex justify-content-center align-items-center text-center"></aside>
            <section className="text-center mt-5">
                <h1>MON OFFRE DE SERVICES</h1>
                <p>Voici les prestations sur lesquelles je peux intervenir.</p>
                <div class="barre-bleu mx-auto mt-3 mb-5 bg-primary"></div>
            </section>
            <Row className="text-center m-5">
                <Col md={4} className="mb-4">
                    <Card className="p-5 shadow-sm">
                        <Card.Body>
                            <img src={Ecran} className="mt-5 mb-4" />
                            <h2>UX DESIGN</h2>
                            <Card.Text className=" mb-5">
                                L'UX Design est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir une expérience de navigation optimale à l’internaute.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="p-5 shadow-sm">
                    <Card.Body>
                        <img src={Dossier} className="mt-5 mb-4" />
                        <h2>DÉVELOPPEMENT WEB</h2>
                        <Card.Text className=" mb-5">
                        Le développement de sites web repose sur l'utilisation des langages <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>PHP</strong>.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="p-5 shadow-sm">
                    <Card.Body>
                        <img src={Loupe} className="mt-5 mb-4" />
                        <h2>RÉFÉRENCEMENT</h2>
                        <Card.Text className=" mb-5">
                        Le référencement naturel d'un site, aussi appelé <strong>SEO</strong>, consiste à mettre des techniques en œuvre pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;