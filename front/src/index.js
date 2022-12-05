import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.css';
import App from './components/Home';
import Test from './components/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route exact path="/main" element={<Test />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

