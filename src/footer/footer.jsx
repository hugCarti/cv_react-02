

const Footer = () => {
    return(
        <div className='footer'>
            <h2>MENTIONS LEGALES</h2>
            <button className="btn-ouv1">Editeur du site</button>
            <div className="hiddenSection1">
                <h3>Hugo LEPLINGARD</h3>
                <p><img class="position" src="../public/img/position.png" alt="position"/>5 rue de le côte rouge</p>
                <p>27240 Sylvain lès moulins, France</p>
                <p><img class="telephone" src="../public/img/telephone.png" alt="telephone"/>06 81 40 09 60</p>
                <p><img class="mail" src="../public/img/mail.png" alt="mail"/>Hleplingard04@gmail.com</p>
            </div>
            <button className="btn-ouv2">Hébergeur</button>
            <div className="hiddenSection2"></div>
            <button className="btn-ouv3">Crédits</button>
            <div className="hiddenSection3"></div>
        </div>
    )
};


export default Footer
