
import "./contact.css"
import Position from "../img/favicon/position.png"
import Telephone from "../img/favicon/telephone.png"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid className="contact">
            <div className="voile">
                <div className="bg-white p-5 shadow-sm">
                    <h1 className="text-center mb-4">ME CONTACTER</h1>
                    <p className="text-center f">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div class="barre-bleu mx-auto mt-3 mb-5 bg-primary"></div>
                    <Row>
                        <Col md={6}>
                            <h2>Formulaire de contact</h2>
                            <div class="barre-bleu-2 mt-3 mb-3 bg-primary"></div>
                            <Form className="mt-4 f-grid">
                                <Form.Group controlId="formName">
                                    <Form.Control type="text" placeholder="Votre nom" />
                                </Form.Group>
                                <Form.Group controlId="formEmail" className="mt-3">
                                    <Form.Control type="email" placeholder="Votre adresse email" />
                                </Form.Group>
                                <Form.Group controlId="formPhone" className="mt-3">
                                    <Form.Control type="text" placeholder="Votre numéro de téléphone" />
                                </Form.Group>
                                <Form.Group controlId="formSubject" className="mt-3">
                                    <Form.Control type="text" placeholder="Sujet" />
                                </Form.Group>
                                <Form.Group controlId="formMessage" className="mt-3">
                                    <Form.Control as="textarea" rows={4} placeholder="Votre message" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="py-2 px-3 mt-4">Envoyer</Button>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <h2>Mes coordonnées</h2>
                            <div class="barre-bleu-2 w-100 mt-3 mb-3 bg-primary"></div>
                            <p className="mb-0 mt-4"><img src={Position} className="mr-2" />40 Rue Laure Diebold, 69009 Lyon, France</p>
                            <p><img src={Telephone} className="mr-2" />Téléphone : 06 20 30 40 50</p>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    title="Google Map Location"className="embed-responsive-item"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.8730577411963!2d4.804118275024013!3d45.77788887115619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c05a3a5c6fdb%3A0xb7c9eec03bc54d27!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1639567527400!5m2!1sen!2sfr"
                                    width="100%" height="250" allowFullScreen="" loading="lazy">
                                </iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
}


export default Contact;