import React from 'react';

function Accueil() {
  return (
    <div className="accueil">
      <aside className="hero bg-dark text-white text-center d-flex align-items-center justify-content-center" style={{ minHeight: '70vh', backgroundImage: 'url(../img/hero-bg.jpg)', backgroundSize: 'cover' }}>
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <p>Développeur web full stack</p>
          <button className="btn btn-primary mt-3">En savoir plus</button>
        </div>
      </aside>
      <main className="about py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>À propos</h2>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF.
                Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.
              </p>
              <p>
                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur web full stack.
              </p>
              <p>
                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
              </p>
            </div>
            <div className="col-md-6">
              <h4>Mes compétences</h4>
              <div className="my-3">
                <label>HTML5</label>
                <div className="progress">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }}>90%</div>
                </div>
              </div>
              <div className="my-3">
                <label>CSS3</label>
                <div className="progress">
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }}>80%</div>
                </div>
              </div>
              <div className="my-3">
                <label>JavaScript</label>
                <div className="progress">
                  <div className="progress-bar bg-warning" role="progressbar" style={{ width: '70%' }}>70%</div>
                </div>
              </div>
              <div className="my-3">
                <label>PHP</label>
                <div className="progress">
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }}>60%</div>
                </div>
              </div>
              <div className="my-3">
                <label>React</label>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }}>50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Accueil;
