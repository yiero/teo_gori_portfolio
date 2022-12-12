import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/ClassicCars.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Classic () {

    const [ cars, setCars ] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem('token');
        fetch("http://localhost:3000/api/classicCar", {
            method: "GET",
            headers: { 
                'Authorization': "BEARER " + token
            }
        })
        .then(function(res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value) {
            setCars(value);
            console.log(value)
        })
    }, [])

    cars.sort((a, b) => (a.annee > b.annee ? 1 : -1))

    return(
        <React.Fragment>
            <Header/>
            <main id="classicPresentation">
                <div>
                    {cars.map((value, index) => (
                        <div>
                            <div id="img_and_present">
                                <div id="title_description">
                                    <h1 key={`${value}-${index}`}>{value.nom}</h1>
                                    <div>{value.description}</div>
                                </div>
                                <div>
                                    <Link to="/ferrari"><img src={value.imageUrl} id="img_car"></img></Link>
                                </div>
                            </div>
                            <div id="fiche_technique">
                                <div> Année : {value.annee}</div>
                                <div> Motorisation : {value.moteur}</div>
                                <div> Puissance : {value.puissance} Ch</div>
                                <div> Vitesse max : {value.vitesse} km/h</div>
                                <div> Prix : {value.prix} €</div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Classic;