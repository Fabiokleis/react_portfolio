import React from 'react';
import './index.css';
import Menu from './menu.js';
import {Link} from 'react-router-dom'

export default function Header(props){

    return (
        <div className="header">
            <Menu />
            <div className="header-login">
                <button className="header-button">
                    <Link to="/signin" style={{textDecoration: 'none', color: 'white'}}>Sign in</Link>
                </button>
                <button className="header-button">
                    <Link to="/signup" style={{textDecoration: 'none', color: 'white'}}>Sign up</Link>
                </button>
            </div>
        </div>
    );
}

