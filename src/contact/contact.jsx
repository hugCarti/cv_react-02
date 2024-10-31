

import Footer from "../footer/footer.jsx"
import Nav from "../nav/nav.jsx";

const Contact = () => {
    return (
        <div className="container">
            <Nav />
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
                            <iframe src="https://www.google.fr/maps/place/5+Rue+de+la+C%C3%B4te+Rouge,+27240+Sylvains-les-Moulins/@48.8824089,1.0930173,17z/data=!3m1!4b1!4m6!3m5!1s0x47e14330fd9a782f:0x8879314dd8a4774b!8m2!3d48.8824089!4d1.0955922!16s%2Fg%2F11fst652m1?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" width="100%" height="200" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}


export default Contact;