import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inscription from '../Inscription/inscription';
import Home from '../Home/home';
import Connexion from '../Connexion/connexion';

function Router() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Inscription />} />
                <Route path="/connexion" element={<Connexion />} />
            </Routes>
    );
}

export default Router;
