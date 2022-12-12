import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import Home from './components/Home';
import Ferrari from './components/Ferrari';
import Classic from './components/ClassicCar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/ferrari" element={<Ferrari />}/>
        <Route exact path="/classicCars" element={<Classic/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

