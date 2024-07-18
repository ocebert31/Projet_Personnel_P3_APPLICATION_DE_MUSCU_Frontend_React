import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import { useAuth } from '../AuthContext';

function Header() {
    const { loggedIn, logout } = useAuth();

    return (
        <div className='style-header'>
            <div>FlexForce</div>
            <Link to='/'>Accueil</Link>
            <div className='button-login'>
                {loggedIn ? (
                    <button className='style-button-login' onClick={logout}>Déconnexion</button>
                ) : (
                    <>
                        <Link to='/registration' className='style-button-login'>Inscription</Link>
                        <Link to='/connexion' className='style-button-login'>Connexion</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Header;
