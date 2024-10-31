
import React from "react";
import Nav from "../nav/nav"
import Footer from "../footer/footer"
import FondCompetences from "../img/john-doe-about.jpg"

const Accueil = () => {
    return (
        <div>
            <Nav />
            <section className="relative bg-cover bg-center h-screen" id="sec-image">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
                    <h1 className="text-5xl font-bold mb-4">Bonjour, je suis Hugo LEPLINGARD</h1>
                    <p className="text-2xl mb-6">Développeur web full stack</p>
                    <p className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">En savoir plus</p>
                </div>
            </section>
            <section className="container mx-auto py-16 px-6">
                <div className="bg-white shadow-md rounded-lg p-8 flex">
                    <div className="w-2/3 pr-8">
                        <h2 className="text-2xl font-bold mb-4">À propos</h2>
                        <p className="mb-4">Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. 
                        Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                        <p className="mb-4">Basé à Sylvain les moulins, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de 
                        <strong>développeur web full stack</strong>.</p>
                        <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </div>
                    <div className="w-1/3">
                        <img src={FondCompetences} alt="john doe regardant un PC" className="rounded-lg mb-4" />
                        <h3 className="text-xl font-bold mb-4">Mes compétences</h3>
                        <div className="mb-2">
                            <span className="block text-gray-700">HTML5 90%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="block text-gray-700">CSS3 80%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="block text-gray-700">JAVASCRIPT 70%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="block text-gray-700">PHP 60%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <span className="block text-gray-700">REACT 50%</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Accueil;