import React from 'react';
import './index.css';
import Menu from './menu.js';
import HeaderLogin from './header-login.js';

export default function Header(props){

    return (
        <div className="header"> 
            <Menu />
            <HeaderLogin />
       </div>
    );
}

