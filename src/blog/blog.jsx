
import Banner from "../img/banner.jpg"
import Coder from "../img/blog/coder.jpg"
import Croissance from "../img/blog/croissance.jpg"
import Google from "../img/blog/google.jpg"
import Screens from "../img/blog/screens.jpg"
import Seo from "../img/blog/seo.jpg"
import Technos from "../img/blog/technos.png"

const Blog = () => {
    return (
        <div className="container">
            <div className="bg-blue-900 h-48 flex items-center justify-center">
                <img src={Banner} alt="Banner" className="w-full h-full object-cover" />
            </div>
            <main className="container mx-auto my-8">
                <h1 className="text-4xl font-bold text-center">BLOG</h1>
                <p className="text-center text-gray-600 mb-8">Retrouvez ici quelques articles sur le développement web.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Coder son site en HTML/CSS",
                            date: "22 août 2022",
                            img: {Coder},
                            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
                        },
                        {
                            title: "Vendre ses produits sur le web",
                            date: "20 août 2022",
                            img: {Croissance},
                            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
                        },
                        {
                            title: "Se positionner sur Google",
                            date: "1 août 2022",
                            img: {Google},
                            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
                        },
                        {
                            title: "Coder en responsive design",
                            date: "31 juillet 2022",
                            img: {Screens},
                            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
                        },
                        {
                            title: "Techniques de référencement",
                            date: "30 juillet 2022",
                            img: {Seo},
                            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
                        },
                        {
                            title: "Apprendre à coder",
                            date: "12 juillet 2022",
                            img: {Technos},
                            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
                        }
                    ].map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <a href="#" className="text-blue-500 hover:underline">Lire la suite</a>
                                <p className="text-gray-500 text-sm mt-4">Publié le {post.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Blog;