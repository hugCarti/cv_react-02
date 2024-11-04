
import Banner from "../img/banner.jpg"
import Espacebienetre from "../img/portfolio/espace-bien-etre.jpg"
import Freshfood from "../img/portfolio/fresh-food.jpg"
import Restaurantjaponais from "../img/portfolio/restaurant-japonais.jpg"

const Realisations = () => {
    return (
        <div className="container">
            <div className="bg-blue-900 h-48 flex items-center justify-center">
                <img src={Banner} alt="Banner" className="w-full h-full object-cover" />
            </div>
            <main className="bg-gray-100 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">PORTFOLIO</h1>
                    <p className="text-lg text-gray-600">Voici quelques-unes de mes réalisations.</p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={Freshfood} alt="Fresh food" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold">Fresh food</h2>
                                <p className="text-gray-600">Réalisation d'un site avec commande en ligne.</p>
                                <button className="mt-4 bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white">Voir</button>
                            </div>
                            <div className="bg-gray-100 p-4 text-gray-600 text-sm">Site réalisé avec PHP et MySQL</div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={Restaurantjaponais} alt="Restaurant japonnais" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold">Restaurant Akira</h2>
                                <p className="text-gray-600">Réalisation d'un site vitrine.</p>
                                <button className="mt-4 bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white">Voir</button>
                            </div>
                            <div className="bg-gray-100 p-4 text-gray-600 text-sm">Site réalisé avec WordPress</div>
                        </div>
                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img src={Espacebienetre} alt="Espace bien etre" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold">Espace bien-être</h2>
                                <p className="text-gray-600">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                                <button className="mt-4 bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white">Voir</button>
                            </div>
                            <div className="bg-gray-100 p-4 text-gray-600 text-sm">Site réalisé en HTML/CSS</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Realisations;