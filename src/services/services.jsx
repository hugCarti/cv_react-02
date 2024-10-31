
import Nav from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx"
import Banner from "../img/banner.jpg"

const Services = () => {
    return (
        <div className="container">
            <Nav />
            <div className="relative">
                <img src={Banner} alt="Abstract blue background" className="w-full h-64 object-cover"/>
            </div>
            <main className="text-center py-12">
                <h1 className="text-3xl font-bold">MON OFFRE DE SERVICES</h1>
                <p className="text-gray-600 mt-2">Voici les prestations sur lesquelles je peux intervenir.</p>
                <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <i className="fas fa-desktop text-blue-500 text-4xl mb-4"></i>
                        <h2 className="text-xl font-bold mb-2">UX DESIGN</h2>
                        <p className="text-gray-600">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <i className="fas fa-code text-blue-500 text-4xl mb-4"></i>
                        <h2 className="text-xl font-bold mb-2">DÉVELOPPEMENT WEB</h2>
                        <p className="text-gray-600">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>PHP</strong>.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <i className="fas fa-search text-blue-500 text-4xl mb-4"></i>
                        <h2 className="text-xl font-bold mb-2">RÉFÉRENCEMENT</h2>
                        <p className="text-gray-600">Le <strong>référencement naturel d'un site</strong>, aussi appelé <strong>SEO</strong>, consiste à mettre des techniques en œuvre pour <strong>améliorer sa position</strong> dans les résultats des moteurs de recherche.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Services;