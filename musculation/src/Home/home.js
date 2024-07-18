import React from 'react';
import './home.css';
import { useAuth } from '../AuthContext';

function Home() {
    const { loggedIn } = useAuth();

    return (
        <div>
            {loggedIn ? (
                <h1 className='style-title-home'>Vous êtes connecté</h1>
            ) : (
                <h1 className='style-title-home'>
                    Accueil
                </h1>
            )}
        </div>
    )
}

export default Home;