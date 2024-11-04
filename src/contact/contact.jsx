
import "./contact.css"

const Contact = () => {
    return (
        <div className="container">
            <div className="fond">
                <main className="container mx-auto my-8 p-4 bg-white shadow-lg">
                    <h2 className="text-3xl font-bold text-center">ME CONTACTER</h2>
                    <p className="text-center my-4">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div className="border-b-2 border-blue-500 w-16 mx-auto mb-8"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Formulaire de contact</h3>
                            <form className="mt-4 space-y-4">
                                <input type="text" placeholder="Votre nom" className="w-full p-2 border border-gray-300 rounded"/>
                                <input type="email" placeholder="Votre adresse email" className="w-full p-2 border border-gray-300 rounded"/>
                                <input type="tel" placeholder="Votre numéro de téléphone" className="w-full p-2 border border-gray-300 rounded"/>
                                <input type="text" placeholder="Sujet" className="w-full p-2 border border-gray-300 rounded"/>
                                <textarea placeholder="Votre message" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Envoyer</button>
                            </form>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold border-b-2 border-blue-500 pb-2">Mes coordonnées</h3>
                            <div className="mt-4 space-y-2">
                                <p>📍 5 rue de la côte rouge, Sylvain lès moulins</p>
                                <p>📞 06 81 40 09 60</p>
                                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.835197509374!2d4.805528315502276!3d45.77966497910656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1d1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2s5%20Rue%20de%20la%20côte%20rouge%2C%2069009%20Sylvain%20lès%20moulins%2C%20France!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus'
                                width="100%" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe> 
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}


export default Contact;