
import "./footer.css";
import Navfooter from  "./nav-footer";


const Footer = () => {
    return(
        <div className="footer">
            <footer className="bg-gray-200 py-8">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold">John Doe</h4>
                        <p>5 rue de la côte rouge<br/>27240 Sylvain lès moulins, France<br/>Téléphone : 06 81 40 09 60</p>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" class="text-gray-600 hover:text-gray-800"><i className="fab fa-github"></i></a>
                            <a href="#" class="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
                            <a href="#" class="text-gray-600 hover:text-gray-800"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div> 
                    <div>
                        <Navfooter />
                    </div>
                    <div>
                        <h4 className="font-bold">Mes dernières réalisations</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:underline">Fresh food</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">Restaurant Akira</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">Espace bien-être</a></li>
                        </ul>
                        <h4 className="font-bold mt-4">Mes derniers articles</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:underline">Coder son site en HTML/CSS</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">Vendre ses produits sur le web</a></li>
                            <li><a href="#" className="text-gray-600 hover:underline">Se positionner sur Google</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>© Designed by Hugo LEPLINGARD</p>
                </div>
            </footer>
        </div>
    )
};


export default Footer
