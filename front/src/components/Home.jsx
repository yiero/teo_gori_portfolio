import logo from '../Logo-Ferrari.png';
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {

  return (
    <React.Fragment>
      <div className="App">
        <main>
          <div id="bloc1">
            <div>Qui suis-je ?</div>
            <div id="bloc_texte">
              Je me nomme Téo fraîchement diplomé d'une formation <i>Développeur web full stack.</i><br />
              J'ai appris les bases du développement comme <i>HTML/CSS</i> ainsi que le <i>Javascript</i><br />
              tout en pofinant mes capacités sur le back-end en créant une <i>API</i> et en manipulant des bases de données <i>MongoDB / MYSQL</i>.
            </div>
          </div>
          <div className="projet">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/ferrari" style={{ textDecoration: 'none' }}>
              <div id="nav_ferrari">Ferrari</div>
            </Link>
          </div>
        </main>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default Home;
