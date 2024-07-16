import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inscription from '../Inscription/inscription';
import Home from '../Home/home';

function router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/inscription" element={<Inscription />} />
            </Routes>
        </div>
    )
}

export default router;