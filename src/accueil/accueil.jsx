
import "./accueil.css"
import JonhDoe from "../img/john-doe-about.jpg"

function Accueil() {
  return (
    <div className="accueil">
      <aside>
        <div className="voile text-white w-100 h-100 d-flex justify-content-center flex-column text-center align-items-center">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="btn btn-primary mt-3 px-4">En savoir plus</button>
        </div>
      </aside>
      <main className="row p-5 bg-light">
        <article className="col-md-6">
          <h2>À propos</h2>
          <div class="barre-bleu w-100 mt-3 mb-4 bg-primary"></div>
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur</strong> web au CEF.
            Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
          </p>
          <p>
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
          </p>
          <p>
            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
          </p>
        </article>
        <article className="col-md-6">
          <img src={JonhDoe} alt="Jonh Doe a propos" />
          <h3>Mes compétences</h3>
          <figure className="my-3">
            <label>HTML5 90%</label>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }}></div>
            </div>
          </figure>
          <figure className="my-3">
            <label>CSS3 80%</label>
            <div className="progress">
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }}></div>
            </div>
          </figure>
          <figure className="my-3">
            <label>JavaScript 70%</label>
            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }}></div>
            </div>
          </figure>
          <figure className="my-3">
            <label>PHP 60%</label>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }}></div>
            </div>
          </figure>
          <figure className="my-3">
            <label>React 50%</label>
            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }}></div>
            </div>
          </figure>
        </article>
      </main>
    </div>
  );
}

export default Accueil;
