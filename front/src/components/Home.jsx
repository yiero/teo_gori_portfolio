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
        console.log(value)
        navigate("/ferrari");
    })
}

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={imageStussy} id="App-image-background"></img>
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/ferrari">
            <div id="nav_ferrari">Ferrari</div>
          </Link>
          <form  id="form" onSubmit={handleSubmit}>           
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required></input>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required></input>
            <input type="submit" value="Login"></input>
          </form>
        </header>
      </div>
    </React.Fragment>
  );
}

export default Home;
