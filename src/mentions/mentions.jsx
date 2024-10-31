import position from '../img/position.png'
import mail from '../img/mail.png'
import telephone from '../img/telephone.png'
import Footer from "../footer/footer.jsx"

const Mentions = () => {
    return (
        <div className='container'>
            <h2>MENTIONS LEGALES</h2>
            <button className="btn-ouv1">Editeur du site</button>
            <div className="hidden-Section1">
                <h3>Hugo LEPLINGARD</h3>
                <p><img className="logoPosition" src={position} alt="logo-position"/> 5 rue de le côte rouge</p>
                <p>27240 Sylvain lès moulins, France</p>
                <p><img className="logoTelephone" src={telephone} alt="logo-telephone"/> 06 81 40 09 60</p>
                <p><img className="logoMail" src={mail} alt="logo-mail"/> Hleplingard04@gmail.com</p>
            </div>
            <button className="btn-ouv2">Hébergeur</button>
            <div className="hidden-Section2">
                <h3>Hugo LEPLINGARD</h3>
            </div>
            <button className="btn-ouv3">Crédits</button>
            <div className="hidden-Section3">
            </div>
            <Footer />
        </div>
    );
}
        
export default Mentions;