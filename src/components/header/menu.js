import React from 'react';
import {Link} from 'react-router-dom';
import menu from './menu.svg';

export default function Menu(props){

    return (
        <div className="header-menu">
            <div className="menu-wrapper">
                <img src={menu} alt="menu" className="drop-button" />

                <img className="arrow" alt="arrow-down" />
                <ul className="menu-nav">
                <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
                <li className="nav-li">Home</li>
                </Link>
                    <Link to="/projects" style={{ textDecoration: 'none', color: 'white'}}>
                        <li className="nav-li">Projects</li>
                    </Link>
                    <Link to="/posts" style={{ textDecoration: 'none', color: 'white'}}>
                        <li className="nav-li">Posts</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
