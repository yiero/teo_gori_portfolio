import logo from '../Logo-Ferrari.png';
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import imageStussy from '../images/67-679750_stussy-wallpaper-desktop.jpg'
import Footer from '../components/Footer';

function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    const body = {
        email: email,
        password: password
    }
    console.log(body);

    fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(function(res) {
        if (res.ok) {
            return res.json();
        } 
        else {
            return res.status;
        }
    })
    .then(function(value) { 
        localStorage.setItem('token', value.token);
        localStorage.setItem('userId', value.userId);
        alert("Bonjour Téo !");
    })
}

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <form id="form" onSubmit={handleSubmit}>           
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required></input>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required></input>
            <input type="submit" value="Login"></input>
          </form>
        </header>
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
