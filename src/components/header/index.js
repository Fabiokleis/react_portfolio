import React from 'react';
import './index.css';
import Menu from './menu.js';

export default function Header(props){

    return (
        <div className="header">
            <Menu />
            <div className="header-login">
                <button className="header-button">sigin</button>
                <button className="header-button">sigup</button>
            </div>
        </div>
    );
}

