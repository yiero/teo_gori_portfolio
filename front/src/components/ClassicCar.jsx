import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/ClassicCars.css';
import Header from './Header';

function Classic () {

    const [ cars, setCars ] = useState("");

    useEffect(() => {
        let token = localStorage.getItem('token');
        fetch("http://localhost:3000/api/classicCar/" + 2, {
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
        })
    }, [])

    return(
        <React.Fragment>
            <Header/>
            <h1>{cars.nom}</h1>
            <img src={cars.imageUrl}></img>
            <h2>{cars.prix} €</h2>
        </React.Fragment>
    )
}

export default Classic;