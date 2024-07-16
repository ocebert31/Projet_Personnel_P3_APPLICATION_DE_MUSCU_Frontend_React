import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

function header() {
    return (
        <div className='style-header'>
            <div>FlexForce</div>
            <Link to='/'>Home</Link>
            <Link to='/inscription'>Connexion / inscription</Link>
           
        </div>
    )
}

export default header;