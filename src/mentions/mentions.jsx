
import Nav from "../nav/nav.jsx";
import Footer from "../footer/footer.jsx"

const Mentions = () => {
    return (
        <div className="container mx-auto mt-8">
            <Nav />
            <h1 className="text-4xl font-bold text-center">MENTIONS LÉGALES</h1>
            <div className="border-b-2 border-blue-500 w-24 mx-auto mt-2"></div>
            <div className="mt-8 bg-white shadow-md rounded-lg">
                <div class="flex justify-between items-center">
                    <button className="accordion border-b">Éditeur du site</button>
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div className="panel">
                    <div className="mt-4">
                        <p className="text-xl font-bold">John Doe</p>
                        <p><i className="fas fa-map-marker-alt"></i> 5 rue de la côte rouge,<br />27240 Sylvain lès moulins, France</p>
                        <p><i className="fas fa-phone"></i> 06 20 30 40 50</p>
                        <p><i className="fas fa-envelope"></i> <a href="mailto:john.doe@gmail.com" className="text-blue-600">john.doe@gmail.com</a></p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <button className="accordion border-b">Hébergeur</button>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="panel">
                    <div className="p-4">
                        <p className="font-bold">Always Data
                        91 rue du Faubourg Saint Honoré<br />75008 Paris
                        <a href="http://www.alwaysdata.com" className="text-blue-500 hover:underline"><i className="fas fa-globe"></i> www.alwaysdata.com</a></p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <button className="accordion border-b">Crédits</button>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="panel">
                    <div  className="p-4">
                        <p>Site développé par John Doe, étudiant du CEF.</p>
                        <p>Les images libres de droit sont issues du site <a href="https://pixabay.com" className="text-blue-500 hover:underline">Pixabay</a>.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

document.addEventListener('DOMContentLoaded', function () {
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
});

export default Mentions;